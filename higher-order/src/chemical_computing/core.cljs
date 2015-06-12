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
(def colors ["red" "pink" "lightblue" "green" "lightgreen" "orange" "yellow"])
(defonce world (atom {}))
(def running (atom false))
(def mol-id-counter (atom 0))


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

(defn draw-circle [context color diam x y]
  (doto context
    (setColor color)
    .beginPath
    (.arc  x y diam 0 (* 2 Math/PI) true)
    .closePath
    .fill ))

(defn draw-molecule [{:keys [x y val color args]}]
  (when val
    (let [display-val (if (fn? val) "fn" val)]
     (when (fn? val)
       (doseq [n (range 1 (inc (count args)))]
         (draw-circle context (last (take n (cycle colors))) (* n 1.5 d) x y)))
     (draw-circle context color d x y)
     (doto context
       (setText "black" "bold 11px Courier")
       (.fillText (str display-val) (- x 7) (+ y 5))))))

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

(defn gen-molecule [val]
  {:id (swap! mol-id-counter inc)
   :x (rand-int width)
   :y (rand-int height)
   :val val
   :color (rand-nth colors)
   :dx (* (+ 0.5 (rand-int 3)) (rand-dx-dy))
   :dy (* (+ 0.5 (rand-int 3)) (rand-dx-dy))})

(defn gen-molecules [vals]
  (let [n (count vals)]
    (map gen-molecule vals)))

(defn find-collision [molecule]
  (let [rest-molecules (remove (fn [b] (= (:id molecule) (:id b))) (vals @world))
        collided-with (filter (fn [b] (collide? b (:x molecule) (:y molecule) d)) rest-molecules)]
    (first collided-with)))



(defn foo [x y]
  [(+ x y) y])

(defn react-fn-ready-to-eval? [react-fn arglist]
  (let [react-fn-args-list  (.-length react-fn)]
    (= react-fn-args-list (count arglist))))


(defn higher-order-eval [fn-mol]
  (let [react-fn (:val fn-mol)
        react-args (:args fn-mol)
        result-vals (apply react-fn react-args)
        result-mols (mapv #(gen-molecule %) result-vals)]
    (mapv #(assoc % :x (+ d (:x fn-mol)) :y (+ d (:y fn-mol))) result-mols)))

(defn higher-order-capture [fn-mol val-mol]
  (println "higher-order")
  (let [react-fn-args (:args fn-mol)
        react-fn (:val fn-mol)]
    (if (react-fn-ready-to-eval? react-fn react-fn-args)
      [fn-mol val-mol]
      [(assoc fn-mol :args (conj react-fn-args (:val val-mol)))
       (assoc val-mol :val :destroy)])))


(defn higher-order-reaction [mol1 mol2]
  (let [v1 (:val mol1)
        v2 (:val mol2)]
    (cond
      (and (fn? v1) (fn? v2))
      [mol1 mol2]

      (fn? v1)
      (higher-order-capture mol1 mol2)

      (fn? v2)
      (higher-order-capture mol2 mol1)

      :else
      [mol1 mol2])))

(defn hatch? [mstate]
  (when (fn? (:val mstate))
    (react-fn-ready-to-eval? (:val mstate) (:args mstate))))


(declare molecule-reaction)

(defn hatch [mstate]
  (let [result-mols (higher-order-eval mstate)
        _ (println :result-mols result-mols)
        clean-mstate (assoc mstate :args [])
        _ (println :clean-mstate clean-mstate)]
    (swap! world assoc (:id mstate) (-> clean-mstate (move-molecule true) (move-molecule false)))
    (mapv (fn [m] (swap! world assoc (:id m) (-> m (move-molecule true) (move-molecule false)))) result-mols)
    (mapv (fn [m] (molecule-reaction m)) result-mols)))


(defn collision-reaction [mstate collision-mol]
  (let [new-mols (higher-order-reaction mstate collision-mol)
        mols-to-destroy (filter (fn [m] (= :destroy (:val m))) new-mols)
        mols-to-bounce (remove (fn [m] (= :destroy (:val m))) new-mols)]
    (mapv (fn [m] (swap! world dissoc (:id m))) mols-to-destroy)
    (mapv (fn [m] (swap! world assoc (:id m) (-> m (move-molecule true) (move-molecule false)))) mols-to-bounce)
    (println "done" @world)))

(defn molecule-reaction [mol-state]
  (go-loop []
    (when (and @running (get @world (:id mol-state)))
      (<! (timeout 60))
      (let [mstate (get @world (:id mol-state))
            collision-mol (find-collision mstate)]
        (cond

          collision-mol
          (collision-reaction mstate collision-mol)

          (hatch? mstate)
          (hatch mstate)

          :else
          (swap! world assoc (:id mol-state) (move-molecule mstate false))))
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
  (if @running
    (do (draw-molecules (vals @world))
        #_(let [answer (measurement)]
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


(def example-primes-mols [{:id (swap! mol-id-counter inc) :x 200 :y 200 :val 3 :args [] :color "red" :dx -0.5 :dy 0.0}
                          {:id (swap! mol-id-counter inc) :x 100 :y 200 :val 18 :args [] :color "lightgreen" :dx 0.5 :dy 0.0}
                          {:id (swap! mol-id-counter inc) :x 300 :y 200 :val foo :args [] :color "lightgray" :dx 0.3 :dy 0.0}])

(def example-maxs-mols [{:id 1 :x 200 :y 200 :val 20 :color "lightblue" :dx -0.5 :dy 0.0}
                        {:id 2 :x 100 :y 200 :val 2 :color "pink" :dx 0.5 :dy 0.0 }])

(defn small-example-primes []
  (ef/at "#experiment-title" (ef/content "Prime Example with Two Molecules"))
  (setup-mols example-primes-mols))

(defn primes-to-100 []
  (ef/at "#experiment-title" (ef/content "Primes to 100"))
  (setup (range 2 101)))

(defn small-example-max []
  (ef/at "#experiment-title" (ef/content "Max Example with Two Molecules"))
  (setup-mols example-maxs-mols))

(defn max-to-99 []
  (ef/at "#experiment-title" (ef/content "Max to 99"))
  (setup (range 1 100)))


(clear)
(start)
(run)

(small-example-primes)


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

