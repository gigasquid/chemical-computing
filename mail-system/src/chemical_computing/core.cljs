(ns ^:figwheel-always chemical-computing.core
    (:require
     [cljs.core.async :refer [timeout chan  >! <!]])
    (:require-macros
     [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(def canvas (-> js/document (.getElementById "canvas")))
(def context (.getContext canvas "2d"))
(def width (.-width canvas))
(def height (.-height canvas))
(def background "white")
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


(defn draw-molecule [{:keys [x y d val color args]}]
  (when val
    (let [display-val (if (fn? val) (.-name val) val)]
     (draw-circle context color d x y)
     (doto context
       (setText "black" "bold 11px Courier")
       (.fillText (str display-val) (- x (* (count display-val) 3)) (+ y 5))))))

(defn draw-molecules [state]
  (doall (map draw-molecule state)))

(defn adjust-collide-heading [h]
  (if (pos? h)
    (let [nh (+ 0.5 (rand-int 3))]
      (* -1 nh))
    (* -1 h)))

(defn move-molecule [{:keys [x y d dx dy] :as molecule} collide?]
  (let [dx (if collide? (adjust-collide-heading dx) dx)
        dy (if collide? (adjust-collide-heading dy) dy)
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


(defn max-reaction [molecule-a molecule-b]
  (let [a (:val molecule-a)
        b (:val molecule-b)]
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
   :dy (* (+ 0.5 (rand-int 3)) (rand-dx-dy))
   :args []})

(defn gen-molecules [vals]
  (let [n (count vals)]
    (map gen-molecule vals)))

(defn find-collision [molecule]
  (let [rest-molecules (remove (fn [b] (= (:id molecule) (:id b))) (vals @world))
        collided-with (filter (fn [b] (collide? b (:x molecule) (:y molecule) (:d molecule))) rest-molecules)]
    (first collided-with)))

(defn react-fn-ready-to-eval? [react-fn arglist]
  (let [react-fn-args-list  (.-length react-fn)]
    (= react-fn-args-list (count arglist))))

(declare gen-fork-molecule)
(declare gen-eat-philosopher-molecule)
(declare gen-think-philosopher-molecule)

(defn gen-molecule-by-val [val x]
  (case val
    "two-forks and thinking-philosopher" [(gen-fork-molecule (- x 25) 450)
                                          (gen-fork-molecule (+ x 25) 450)
                                          (gen-think-philosopher-molecule x 450)]
    "thinking-philosopher" (gen-think-philosopher-molecule x 450)
    "eating-philosopher" (gen-eat-philosopher-molecule x 450)))

(defn higher-order-eval [fn-mol]
  (let [react-fn (:val fn-mol)
        react-args (:args fn-mol)
        result-vals (apply react-fn react-args)
        result-mols (flatten (mapv #(gen-molecule-by-val % (:x fn-mol)) result-vals))]
    result-mols))

(defn higher-order-capture [fn-mol val-mol]
  (let [react-fn-args (:args fn-mol)
        react-fn (:val fn-mol)
        react-allowed-arg-val (:allowed-arg-val fn-mol)]
    (if (= react-allowed-arg-val (:val val-mol))
        (if (react-fn-ready-to-eval? react-fn react-fn-args)
          [fn-mol val-mol]
          [(assoc fn-mol :args (conj react-fn-args val-mol))
           (assoc val-mol :val :destroy)])
        [fn-mol val-mol])))


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
        new-y (if (neg? (:dy mstate)) 475 425)
        clean-mstate (assoc mstate :args [] :y new-y)]
    (swap! world assoc (:id mstate) (-> clean-mstate (move-molecule true)))
    (mapv (fn [m] (swap! world assoc (:id m) (-> m (move-molecule true) (move-molecule false)))) result-mols)
    (mapv (fn [m] (molecule-reaction m)) result-mols)))


(defn collision-reaction [mstate collision-mol]
  (let [new-mols (higher-order-reaction mstate collision-mol)
        mols-to-destroy (filter (fn [m] (= :destroy (:val m))) new-mols)
        mols-to-bounce (remove (fn [m] (= :destroy (:val m))) new-mols)]
    (mapv (fn [m] (swap! world dissoc (:id m))) mols-to-destroy)
    (mapv (fn [m] (swap! world assoc (:id m) (-> m (move-molecule true) (move-molecule false)))) mols-to-bounce)))

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
          (when mstate (swap! world assoc (:id mol-state) (move-molecule mstate false)))))
      (recur))))

(defn setup-mols [init-mols]
  (reset! world (zipmap (map :id init-mols) init-mols))
  (doseq [mol init-mols]
    (molecule-reaction mol)))


(defn tick []
  (clear)
  (if @running
    (do (draw-molecules (vals @world)))
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

(defn prime-reaction [a b]
  (if (and (> a b)
           (zero? (mod a b)))
    [(/ a b) b]
    [a b]))


(defn get-forks [tp]
  (let [diam (* 2 (:d tp))
        rest-molecules (remove (fn [b] (= (:id tp) (:id b))) (vals @world))
        collided-with (filter (fn [b] (and (= "f" (:val b))
                                          (collide? b (:x tp) (:y tp) diam))) rest-molecules)]
    collided-with))

(defn eat [mol]
  (let [forks (get-forks mol)]
    (if (= 2 (count forks))
      (let [[f1 f2] forks]
        (swap! world dissoc (:id f1) (:id f2))
        ["eating-philosopher"])
      ["thinking-philosopher"])))

(defn think [mol]
 ["two-forks and thinking-philosopher"])

(defn server-a [mol]
  (println "val is " mol)
  mol)

(defn server-b [mol]
  mol)

(defn inactive [mol]
  mol)

(defn network [mol]
  mol)

(defn out-mail-a1 [mol])
(defn in-mail-a1 [mol])

(defn out-mail-b1 [mol])
(defn in-mail-b1 [mol])

(defn gen-mail-molecule [x y val]
  (assoc (gen-molecule val)
         :d 10
         :color "pink"
         :x x
         :y y))

(defn gen-mailbox-molecule [x y val]
  {:id (swap! mol-id-counter inc)
   :x x
   :y y
   :d 40
   :val val
   :color "wheat"
   :dx 0.0
   :dy 0.0
   :args []})


(defn gen-network-molecule [x y]
  {:id (swap! mol-id-counter inc)
   :x x
   :y y
   :d 40
   :val network
   :color "lightgreen"
   :dx 0.0
   :dy 0.0
   :args []})

(defn gen-membrane-mol [x y]
  {:id (swap! mol-id-counter inc)
   :x x
   :y y
   :d 20
   :val ""
   :color "lightgray"
   :dx 0.0
   :dy 0.0
   :args []})

(defn gen-server-molecule [x y val]
  {:id (swap! mol-id-counter inc)
   :x x
   :y y
   :d 35
   :val val
   :color "lightblue"
   :dx 0.0
   :dy 0.0
   :args []})

(defn gen-inactive-server-molecule [x y]
  {:id (swap! mol-id-counter inc)
   :x x
   :y y
   :d 35
   :val "inactive"
   :color "lightgrey"
   :dx 0.0
   :dy 0.0
   :args []})



(def mail-system-mols (concat
                       (mapv #(gen-membrane-mol 300 %) (range 0 270 40))
                       (mapv #(gen-membrane-mol 300 %) (range 350 630 40))

                       [(gen-network-molecule 300 300)]

                       (mapv #(gen-membrane-mol 200 %) (range 0 170 40))
                       (mapv #(gen-membrane-mol 200 %) (range 250 260 40))
                       (mapv #(gen-membrane-mol 200 %) (range 350 390 40))
                       (mapv #(gen-membrane-mol 200 %) (range 450 630 40))

                       [(gen-server-molecule 200 200 server-a) (gen-inactive-server-molecule 200 300) (gen-server-molecule 200 400 server-a)]

                       (mapv #(gen-membrane-mol 400 %) (range 0 170 40))
                       (mapv #(gen-membrane-mol 400 %) (range 250 260 40))
                       (mapv #(gen-membrane-mol 400 %) (range 350 390 40))
                       (mapv #(gen-membrane-mol 400 %) (range 450 630 40))

                       [(gen-server-molecule 400 200 server-b) (gen-inactive-server-molecule 400 300) (gen-server-molecule 400 400 server-b)]
                       [(gen-mailbox-molecule 60 50 out-mail-a1) (gen-mailbox-molecule 60 200 in-mail-a1)]
                       [(gen-mailbox-molecule 540 50 out-mail-b1) (gen-mailbox-molecule 540 200 in-mail-b1)]

                       (mapv #(gen-membrane-mol 0 %) (range 0 630 40))
                       (mapv #(gen-membrane-mol 600 %) (range 0 630 40))
                       [(gen-mail-molecule 100 100 "b1")]
                       ))

(defn mail-system []
  (setup-mols mail-system-mols))

(clear)
(start)
(run)

(mail-system)
