(ns ^:figwheel-always chemical-computing.core
    (:require
     [cljs.core.async :refer [timeout]]
     [enfocus.core :as ef]
     [enfocus.events :as ev])
    (:require-macros
     [cljs.core.async.macros :refer [go]]))

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
  (let [mx (+ (* dx (if collide? (rand-int d) step)) x)
        my (+ (* dy (if collide? (rand-int d) step)) y)
        newx (if (< (+ (* 2 d) width) mx) (* dx step) mx)
        newx (if (> (- (* 2 d)) newx) (- width mx) newx)
        newy (if (< (+ (* 2 d) height)  my) (* dy step) my)
        newy (if (> (- (* 2 d)) newy) (- height my) newy)]
   (merge molecule {:x newx
                :y newy})))

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
        b (:val molecule-b)
        new-molecule-a (assoc molecule-a :dx (* -1 (:dx molecule-a))
                                 :dy (* -1 (:dy molecule-a)))
        new-molecule-a (move-molecule new-molecule-a true)]
   (if (and (not= a b)
            (zero? (mod a b)))
     (assoc new-molecule-a :val (/ a b))
     new-molecule-a)))

(defn collide-and-react [molecules]
  (for [molecule molecules]
    (let [rest-molecules (remove (fn [b] (= (:id molecule) (:id b))) molecules)
          collided-with (filter (fn [b] (collide? b (:x molecule) (:y molecule) d)) rest-molecules)
          molecule-to-react (first collided-with)]
      (if molecule-to-react (prime-reaction molecule molecule-to-react) molecule))))


(defn gen-molecule [id val]
  {:id id
   :x (rand-int width)
   :y (rand-int height)
   :val val
   :color (rand-nth colors)
   :dx (* (+ 0.5 (rand-int 3)) (rand-dx-dy))
   :dy (* (+ 0.5 (rand-int 3)) (rand-dx-dy))})


(defn gen-molecules [n]
  (for [i (range 2 (inc n))]
    (gen-molecule i i)))


(defonce molecules-state (atom (gen-molecules 100)))

(def running (atom false))

(defn move-and-react [molecules]
  (-> molecules (move-molecules) (collide-and-react)))

(defn tick []
  (swap! molecules-state move-and-react)
  (clear)
  (draw-molecules @molecules-state)
  (let [answer (prime-concentration)]
                                     (ef/at "#answer" (ef/content (str (first answer)))
                                            "#not-primes" (ef/content (str (last answer ))))))

(defn time-loop []
  (when @running
    (go
     (<! (timeout 30))
     (tick)
     (.requestAnimationFrame js/window time-loop))))

(defn run []
  (.requestAnimationFrame
   js/window
   (fn [_]
     (time-loop))))

(defn start []
  (reset! running true))

(defn stop []
  (reset! running false))

(defn is-prime? [n]
  (let [possible-factors (range 2 n)
        remainders (map #(mod n %) possible-factors)]
    (not (some zero? remainders))))

(defn prime-concentration []
  (let [answer (sort (distinct (map :val @molecules-state)))
        non-primes (remove is-prime? answer)]
 [answer non-primes]))

(ef/at "#prime-button" (ev/listen :click
                                  #(let [answer (prime-concentration)]
                                     (ef/at "#answer" (ef/content (str (first answer)))
                                            "#not-primes" (ef/content (str (last answer )))))))


(clear)
(start)
(run)
;(stop)
;

(comment
  (swap! molecules-state [{:id 1 :x 200 :y 200 :val 18 :color "red" :dx -0.2 :dy 0.0}
                      {:id 2 :x 100 :y 200 :val 3 :color "lightgreen" :dx 0.2 :dy 0.0}])

  (println (filter #(or (= (:id %) 80) (= (:id %) 17)) @molecules-state))

)








