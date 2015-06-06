(ns ^:figwheel-always chemical-computing.core
    (:require
     [cljs.core.async :refer [timeout chan alts! >! <!]]
     [enfocus.core :as ef]
     [enfocus.events :as ev])
    (:require-macros
     [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom []))

(def canvas (-> js/document (.getElementById "canvas")))
(def context (.getContext canvas "2d"))
(def width (.-width canvas))
(def height (.-height canvas))
(def background "white")
(def d 10)
(def opacity 1.0)
(def step 2)
(def colors ["red" "pink" "lightgray" "lightblue" "green" "lightgreen" "orange" "yellow"])
(defonce world (atom {}))
(def running (atom false))


(defn setColor [context color]
  (set! (.-fillStyle context) color)
  (set! (.-globalAlpha context) opacity))

(defn setText [context color]
  (set! (.-fillStyle context) color)
  (set! (.-font context) "bold 11px Courier"))


(defn clear []
  (doto context
    (setColor background)
    (.fillRect  0 0 width height)))

(defn draw-molecule [{:keys [x y val color]}]
  (doto context
       (setColor color)
       .beginPath
       (.arc  x y d 0 (* 2 Math/PI) true)
       .closePath
       .fill )
  (doto context
    (setText "black")
    (.fillText (str val) (- x 7) (+ y 5))))

(defn draw-molecules [state]
  (doall (map draw-molecule state)))

(defn move-molecule [{:keys [x y dx dy] :as molecule} collide?]
  (let [dx (if collide? (* -1 dx) dx)
        dy (if collide? (* -1 dy) dy)
        mx (+ (* dx (if collide? (rand-int d) step)) x)
        my (+ (* dy (if collide? (rand-int d) step)) y)
        newx (if (< (+ (* 2 d) width) mx) (* dx step) mx)
        newx (if (> (- (* 2 d)) newx) (- width mx) newx)
        newy (if (< (+ (* 2 d) height)  my) (* dy step) my)
        newy (if (> (- (* 2 d)) newy) (- height my) newy)]
   (merge molecule {:x newx
                    :y newy
                    :dx dx
                    :dy dy})))

(defn move-molecules [molecules]
  (map #(move-molecule % false) molecules))

(defn pick-color []
  (first (shuffle colors)))

(defn rand-dx-dy []
  (let [multiplier (if (> 0.5 (rand)) -1 1)
        speed (rand)]
    (* multiplier speed)))

(defn collide? [molecule x y molecule-d]
  (let [dx (Math/abs (- (:x molecule) x))
        dy (Math/abs (- (:y molecule) y))]
    (and (> molecule-d dx) (> molecule-d dy))))

(defn prime-reaction [molecule-a molecule-b]
  (let [a (:val molecule-a)
        b (:val molecule-b)]
   (if (and (not= a b)
            (zero? (mod a b)))
     (assoc molecule-a :val (/ a b))
     molecule-a)))


(defn gen-molecule [id val]
  {:id id
   :x (rand-int width)
   :y (rand-int height)
   :val val
   :color (rand-nth colors)
   :dx (* (+ 0.5 (rand-int 3)) (rand-dx-dy))
   :dy (* (+ 0.5 (rand-int 3)) (rand-dx-dy))})


(defn gen-molecules [vals]
  (let [n (count vals)]
    (map gen-molecule (range n) vals)))


(defn find-collision [molecule]
  (let [rest-molecules (remove (fn [b] (= (:id molecule) (:id b))) (vals @world))
        collided-with (filter (fn [b] (collide? b (:x molecule) (:y molecule) d)) rest-molecules)]
    (first collided-with)))

(defn molecule-reaction [mol-state]
  (go-loop []
    (when @running
      (<! (timeout 60))
      (let [mstate (get @world (:id mol-state))
            collision-mol (find-collision mstate)
            new-state (if collision-mol
                        (-> mstate (prime-reaction collision-mol) (move-molecule true) (move-molecule false))
                        (move-molecule mstate false))]
        (swap! world assoc  (:id mol-state) new-state)
        (when collision-mol
          (swap! world assoc (:id collision-mol) (-> collision-mol (move-molecule true) (move-molecule false)))))
      (recur))))

(defn setup-mols [init-mols]
  (reset! world (zipmap (map :id init-mols) init-mols))
  (doseq [mol init-mols]
    (molecule-reaction mol)))

(defn setup [vals]
  (let [init-mols (gen-molecules vals)]
    (setup-mols init-mols)))

(defn measurement []
  (sort (distinct (map :val (vals @world)))))

(defn tick []
  (clear)
  (draw-molecules (vals @world))
  (let [answer (measurement)]
     (ef/at "#answer" (ef/content (str  answer))
            "#not-primes" (ef/content (str (last answer ))))))

(defn time-loop []
  (go
    (<! (timeout 60))
    (tick)
    (.requestAnimationFrame js/window time-loop)))

(defn run []
  (.requestAnimationFrame
   js/window
   (fn [_]
     (time-loop))))

(defn start []
  (reset! running true))

(defn stop []
  (reset! running false))

(defn restart []
  (clear)
  (start))

(restart)
(run)

;


(comment
  (swap! molecules-state [{:id 1 :x 200 :y 200 :val 18 :color "red" :dx -0.2 :dy 0.0}
                      {:id 2 :x 100 :y 200 :val 3 :color "lightgreen" :dx 0.2 :dy 0.0}])

  (println (filter #(or (= (:id %) 80) (= (:id %) 17)) @molecules-state))

)



(ef/at "#small-prime-button" (ev/listen :click
                                        #(do
                                           (stop)
                                           (let [example-mols [{:id 1 :x 200 :y 200 :val 3 :color "red" :dx -0.3 :dy 0.0}
                                                               {:id 2 :x 100 :y 200 :val 18 :color "lightgreen" :dx 0.3 :dy 0.0}]]
                                             (restart)
                                             (setup-mols example-mols))))
       "#prime-button" (ev/listen :click
                                  #(do
                                     (stop)
                                     (restart)
                                     (setup (range 2 101))))
       "#stop-button" (ev/listen :click
                                  #(do (stop))))

