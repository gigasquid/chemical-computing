(ns ^:figwheel-always chemical-computing.core
    (:require
     [cljs.core.async :refer [timeout chan alts! >! <!]]
     [enfocus.core :as ef]
     [enfocus.events :as ev])
    (:require-macros
     [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

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

(defn setText [context color style]
  (set! (.-fillStyle context) color)
  (set! (.-font context) style))

(defn setLoading [context]
  (doto context
    (setText "grey" "bold 30px Arial")
    (.fillText "Ready?" 180 250)))

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
    (setText "black" "bold 11px Courier")
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

(defn max-reaction [molecule-a molecule-b]
  (let [a (:val molecule-a)
        b (:val molecule-b)]
    (println :a a :b b)
    (if (> b a)
      (assoc molecule-a :val b)
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



(defn foo [x y]
  (+ x y))

(defn react-fn-ready-to-eval? [react-fn arglist]
  (let [react-fn-args-list  (.-length react-fn)]
    (= 2 (count arglist))))

(defn higher-order-capture-or-eval [fn-mol val-mol]
  (println "higher-order")
  (let [react-fn (:val fn-mol)
        val (:val val-mol)
        react-args (conj (:args fn-mol) val)]
    (if (react-fn-ready-to-eval? react-fn react-args)
      (let [result-val (apply react-fn react-args)
            result-mol (gen-molecule (:id val-mol) result-val)]
        [(assoc fn-mol :args [])
         (assoc result-mol :x (+ d (:x fn-mol))
                           :y (+ d (:y fn-mol)))])
      [(assoc fn-mol :args react-args) :destroy])))

(println "carin")

(defn higher-order-reaction [mol1 mol2]
  (let [v1 (:val mol1)
        v2 (:val mol2)]
    (cond
      (and (fn? v1) (fn? v2))
      [mol1 mol2]

      (fn? v1)
      (higher-order-capture-or-eval mol1 mol2)

      (fn? v2)
      (reverse (higher-order-capture-or-eval mol2 mol1))

      :else
      [mol1 mol2])))

(println "higher-order-reaction" (higher-order-reaction
                                  {:id 1 :val foo :args [] :dx 1 :dy 1}
                                  {:id 2 :val 1 :args [] :dx 2 :dy 2} ))


(defn molecule-reaction [mol-state reaction-fn]
  (go-loop []
    (when @running
      (<! (timeout 60))
      (let [mstate (get @world (:id mol-state))
            collision-mol (find-collision mstate) ]
        (if collision-mol
          (let [[new-mol1 new-mol2] (higher-order-reaction mstate collision-mol)]
            (if (= :destroy new-mol2)
              (swap! world dissoc (:id collision-mol))
              (swap! world (:id mol-state) (-> new-mol1 (move-molecule true) (move-molecule false))
                     (:id new-mol2) (-> new-mol2 (move-molecule true) (move-molecule false)))))
          (swap! world assoc (:id mol-state) (move-molecule mstate false))))
      (recur))))

(defn setup-mols [init-mols reaction-fn]
  (reset! world (zipmap (map :id init-mols) init-mols))
  (doseq [mol init-mols]
    (molecule-reaction mol reaction-fn)))

(defn setup [vals reaction-fn]
  (let [init-mols (gen-molecules vals)]
    (setup-mols init-mols reaction-fn)))

(defn measurement []
  (sort (distinct (map :val (vals @world)))))

(defn tick []
  (clear)
  (if @running
    (do (draw-molecules (vals @world))
        (let [answer (measurement)]
          (ef/at "#answer" (ef/content (str  answer))
                 "#not-primes" (ef/content (str (last answer))))))
    (setLoading context)))

(defn time-loop []
  (go
    (<! (timeout 30))
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

;; Experiments


(def example-primes-mols [{:id 1 :x 200 :y 200 :val 3 :args [] :color "red" :dx -0.5 :dy 0.0}
                          {:id 2 :x 100 :y 200 :val 18 :args [] :color "lightgreen" :dx 0.5 :dy 0.0}
                          {:id 3 :x 300 :y 200 :val prime-reaction :args [] :color "lightgray" :dx 0.3 :dy 0.0}])

(def example-maxs-mols [{:id 1 :x 200 :y 200 :val 20 :color "lightblue" :dx -0.5 :dy 0.0}
                        {:id 2 :x 100 :y 200 :val 2 :color "pink" :dx 0.5 :dy 0.0 }])

(defn small-example-primes []
  (ef/at "#experiment-title" (ef/content "Prime Example with Two Molecules"))
  (setup-mols example-primes-mols prime-reaction))

(defn primes-to-100 []
  (ef/at "#experiment-title" (ef/content "Primes to 100"))
  (setup (range 2 101) prime-reaction))

(defn small-example-max []
  (ef/at "#experiment-title" (ef/content "Max Example with Two Molecules"))
  (setup-mols example-maxs-mols max-reaction))

(defn max-to-99 []
  (ef/at "#experiment-title" (ef/content "Max to 99"))
  (setup (range 1 100) max-reaction))


(clear)
(start)
(run)


;; Button event handling


(ef/at "#small-prime-button" (ev/listen :click
                                        #(go
                                           (stop)
                                           (<! (timeout 1000))
                                           (restart)
                                           (small-example-primes)))
       "#prime-button" (ev/listen :click
                                  #(go
                                     (stop)
                                     (<! (timeout 1000))
                                     (restart)
                                     (primes-to-100)))
       "#small-max-button" (ev/listen :click
                                        #(go
                                           (stop)
                                           (<! (timeout 1000))
                                           (restart)
                                           (small-example-max)))
       "#max-button" (ev/listen :click
                                  #(go
                                     (stop)
                                     (<! (timeout 1000))
                                     (restart)
                                     (max-to-99))))

