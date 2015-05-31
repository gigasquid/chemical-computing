(ns ^:figwheel-always chemical-computing.core
    (:require
     [cljs.core.async :refer [timeout]])
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
(def step 1)
(def colors ["red" "blue" "lightblue" "green" "lightgreen" "orange" "yellow"])


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

(defn draw-ball [{:keys [x y val color]}]
  (doto context
       (setColor color)
       .beginPath
       (.arc  x y d 0 (* 2 Math/PI) true)
       .closePath
       .fill )
  (doto context
    (setText "black")
    (.fillText (str val) (- x 7) (+ y 5))))

(defn draw-balls [state]
  (doall (map draw-ball state)))

(defn move-ball [{:keys [x y dx dy] :as ball} collide?]
  (let [mx (+ (* dx (if collide? (rand-int d) step)) x)
        my (+ (* dy (if collide? (rand-int d) step)) y)
        newx (if (< width mx) (* dx step) mx)
        newx (if (neg? newx) (- width mx) newx)
        newy (if (< height my) (* dy step) my)
        newy (if (neg? newy) (- height my) newy)]
   (merge ball {:x newx
                :y newy})))

(defn move-balls [balls]
  (map #(move-ball % false) balls))

(defn pick-color []
  (first (shuffle colors)))

(defn rand-dx-dy []
  (let [multiplier (if (> 0.5 (rand)) -1 1)
        speed (rand)]
    (* multiplier speed)))

(defn collide? [ball x y ball-d]
  (let [dx (Math/abs (- (:x ball) x))
        dy (Math/abs (- (:y ball) y))]
    (and (> ball-d dx) (> ball-d dy))))

(defn prime-reaction [ball-a ball-b]
  (let [a (:val ball-a)
        b (:val ball-b)
        new-ball-a (assoc ball-a :dx (* -1 (:dx ball-a))
                                 :dy (* -1 (:dy ball-a)))
        new-ball-a (move-ball new-ball-a true)]
   (if (and (not= a b)
            (zero? (mod a b)))
     (assoc new-ball-a :val (/ a b))
     new-ball-a)))

(defn collide-and-react [balls]
  (for [ball balls]
    (let [rest-balls (remove (fn [b] (= (:id ball) (:id b))) balls)
          collided-with (filter (fn [b] (collide? b (:x ball) (:y ball) d)) rest-balls)
          ball-to-react (first collided-with)]
      (if ball-to-react (prime-reaction ball ball-to-react) ball))))


(defn gen-ball [id val]
  {:id id
   :x (rand-int width)
   :y (rand-int height)
   :val val
   :color (rand-nth colors)
   :dx (* (+ 0.5 (rand-int 3)) (rand-dx-dy))
   :dy (* (+ 0.5 (rand-int 3)) (rand-dx-dy))})


(defn gen-balls [n]
  (for [i (range 2 (inc n))]
    (gen-ball i i)))


(defonce balls-state (atom (gen-balls 100)))

(def running (atom false))

(defn move-and-react [balls]
  (-> balls (move-balls) (collide-and-react)))

(defn tick []
  (swap! balls-state move-and-react)
  (clear)
  (draw-balls @balls-state))

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


(clear)
(start)
(run)
;(stop)
;

(comment
  (swap! balls-state [{:id 1 :x 200 :y 200 :val 18 :color "red" :dx -0.2 :dy 0.0}
                      {:id 2 :x 100 :y 200 :val 3 :color "lightgreen" :dx 0.2 :dy 0.0}])

  (println (filter #(or (= (:id %) 80) (= (:id %) 17)) @balls-state))

)








