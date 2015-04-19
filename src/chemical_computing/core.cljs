(ns ^:figwheel-always chemical-computing.core
    (:require
     [cljs.core.async :refer [timeout]])
    (:require-macros
     [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(println "Hi Carin.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom [{:value 10 :x 10 :y 10} {:value 2 :x 33 :y 55}]))

(def canvas (-> js/document (.getElementById "canvas")))
(def context (.getContext canvas "2d"))
(def width (.-width canvas))
(def height (.-height canvas))
(def background "white")
(def d 10)
(def opacity 1.0)
(def step 1)




;; context.fillStype = "blue"
;; context.font = "bold 16px Arial
;;;context.fillText("Hi", 100, 100)

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

(defn move-ball [{:keys [x y dx dy] :as ball}]
  (let [mx (+ (* dx step) x)
        my (+ (* dy step) y)
        newx (if (< width mx) (* dx step) mx)
        newy (if (< height mx) (* dy step) my)]
   (merge ball {:x newx
                :y newy})))

(defn move-balls [balls]
  (map move-ball balls))

(def balls-state (atom [{:x 200 :y 200 :val 30 :color "red" :dx 1.0 :dy 0.02}
                        {:x 250 :y 50 :val 80 :color "blue" :dx 0.4 :dy 0.05}]))
(def running (atom false))

(defn tick []
  (swap! balls-state move-balls)
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






