(ns ^:figwheel-always chemical-computing.core
    (:require
     [cljs.core.async :refer [timeout chan  >! <!]]
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

(declare gen-mail-molecule)
(declare gen-inactive-server-molecule)
(declare gen-server-molecule)
(declare server-a server-b)

(defn gen-molecule-by-val [val x y d move-direction]
  (cond
    (= val "inactive-server")
    (gen-inactive-server-molecule x y)

    (or (= val server-b) (= val server-a))
    (gen-server-molecule x y val)

    :else
    (case move-direction
      :right [(gen-mail-molecule (+ x d) y val)]
      :left [(gen-mail-molecule (- x d) y val)])))

(defn higher-order-eval [fn-mol]
  (let [react-fn (:val fn-mol)
        react-args (:args fn-mol)
        result-vals (apply react-fn react-args)
        result-mols (flatten (mapv (fn [m] (gen-molecule-by-val
                                           (:new-val m)
                                           (or (:x m) (:x fn-mol))
                                           (or (:y m) (:y fn-mol))
                                           (or (:d m) (:d fn-mol))
                                           (:move-to m)))  result-vals))]
    result-mols))

(defn higher-order-capture [fn-mol val-mol]
  (let [react-fn-args (:args fn-mol)
        react-fn (:val fn-mol)
        react-allowed-arg-fn (:allowed-arg-fn fn-mol)]
    (if (react-allowed-arg-fn (:val val-mol))
        (if (react-fn-ready-to-eval? react-fn react-fn-args)
          [fn-mol val-mol]
          [(assoc fn-mol :args (conj react-fn-args val-mol))
           (assoc val-mol :val :destroy)])
        [fn-mol val-mol])))

(defn higher-order-compare [mol1 mol2]
  (let [allow-arg-fn-1 (:allowed-arg-fn mol1)
        allow-arg-fn-2 (:allowed-arg-fn mol2)
        mol2-as-arg? (allow-arg-fn-1 (:val mol2))
        mol1-as-arg? (allow-arg-fn-2 (:val mol1))]
    (cond
      mol2-as-arg?
      (higher-order-capture mol1 mol2)

      mol1-as-arg?
      (higher-order-capture mol2 mol1)

      :else
      [mol1 mol2])))


(defn higher-order-reaction [mol1 mol2]
  (let [v1 (:val mol1)
        v2 (:val mol2)]
    (cond
      (and (fn? v1) (fn? v2))
      (higher-order-compare mol1 mol2)

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
        clean-mstate (assoc mstate :args [])
        one-shot? (:one-shot? mstate)]
    (if one-shot?
      (swap! world dissoc (:id mstate))
      (swap! world assoc (:id mstate) (-> clean-mstate (move-molecule true))))
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

(def in-mailboxes (atom {}))

(defn setup-mols [init-mols]
  (reset! in-mailboxes {})
  (reset! world (zipmap (map :id init-mols) init-mols))
  (doseq [mol init-mols]
    (molecule-reaction mol)))

(defn measurement []
  (str "INBOXES " @in-mailboxes))

(defn tick []
  (clear)
  (if @running
    (do (draw-molecules (vals @world))
        (let [answer (measurement)]
          (ef/at "#answer" (ef/content (str  answer)))))
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

(defn server-a [mol]
  (let [to-server (str (first (:val mol)))]
    (if (= to-server "a")
      [{:move-to :left :new-val (:val mol)}]
      [{:move-to :right :new-val (:val mol)}])))

(defn server-b [mol]
  (let [to-server (str (first (:val mol)))]
    (if (= to-server "b")
      [{:move-to :right :new-val (:val mol)}]
      [{:move-to :left :new-val (:val mol)}])))

(defn network [mol]
  (let [to-server (str (first (:val mol)))]
    (if (= to-server "b")
      [{:move-to :right :new-val (:val mol)}]
      [{:move-to :left :new-val (:val mol)}])))

(defn in-mail-a1[mol]
  (swap! in-mailboxes update-in [:a1] inc)
  [])

(defn in-mail-a2 [mol]
  (swap! in-mailboxes update-in [:a2] inc)
  [])

(defn in-mail-b1 [mol]
  (swap! in-mailboxes update-in [:b1] inc)
  [])

(defn in-mail-b2 [mol]
  (swap! in-mailboxes update-in [:b2] inc)
  [])

(defn crash [mol]
  [{:new-val "inactive-server" :x (:x mol) :y (:y mol)} ])

(defn fixes [mol]
  (let [server (if (< (:x mol) 300) server-a server-b)]
   [{:new-val server :x (:x mol) :y (:y mol)} ]))

(defn gen-mail-molecule [x y val]
  (assoc (gen-molecule val)
         :d 10
         :color "pink"
         :x x
         :y y))

(defn gen-server-crash-molecule [x y]
  (assoc (gen-molecule val)
         :d 18
         :color "red"
         :x x
         :y y
         :val crash
         :allowed-arg-fn (fn [v] (or (= v server-a) (= v server-b)))
         :args []
         :one-shot? true))

(defn gen-server-fixes-molecule [x y]
  (assoc (gen-molecule val)
         :d 18
         :color "green"
         :x x
         :y y
         :val fixes
         :allowed-arg-fn (fn [v] (= v "inactive"))
         :args []))

(defn gen-in-mailbox-molecule [x y val mailbox-address]
  {:id (swap! mol-id-counter inc)
   :x x
   :y y
   :d 40
   :val val
   :color "wheat"
   :dx 0.0
   :dy 0.0
   :allowed-arg-fn (fn [v] (= v mailbox-address))
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
   :allowed-arg-fn (fn [v] true)
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
   :allowed-arg-fn (fn [v] false)
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
   :allowed-arg-fn (fn [v] (string? v))
   :args []})

(defn gen-inactive-server-molecule [x y]
  {:id (swap! mol-id-counter inc)
   :x x
   :y y
   :d 35
   :val "inactive"
   :color "lightgrey"
   :dx 0.0
   :dy 0.0})


(defn gen-messages [to n]
  (case to
    "b1" (mapv #(gen-mail-molecule % 200 to) (repeatedly n #(rand-int 200)))
    "b2" (mapv #(gen-mail-molecule % 400 to) (repeatedly n #(rand-int 200)))
    "a1" (mapv #(gen-mail-molecule % 200 to) (repeatedly n #(- 600 (rand-int 200))))
    "a2" (mapv #(gen-mail-molecule % 400 to) (repeatedly n #(- 600 (rand-int 200))))))

(defn gen-server-crash [to n]
  (case to
    "b" (mapv #(gen-server-crash-molecule % 300) (repeatedly n #(rand-int 200)))
    "a" (mapv #(gen-server-crash-molecule % 300) (repeatedly n #(- 600 (rand-int 200))))
))

(defn gen-server-fixes [to n]
  (case to
    "b" (mapv #(gen-server-fixes-molecule % 350) (repeatedly n #(rand-int 200)))
    "a" (mapv #(gen-server-fixes-molecule % 350) (repeatedly n #(- 600 (rand-int 200))))
))


(def mail-system-mols (concat
                       (mapv #(gen-membrane-mol 300 %) (range 0 270 40))
                       (mapv #(gen-membrane-mol 300 %) (range 350 630 40))

                       [(gen-network-molecule 300 300)]

                       (mapv #(gen-membrane-mol 200 %) (range 0 170 40))
                       (mapv #(gen-membrane-mol 200 %) (range 250 260 40))
                       (mapv #(gen-membrane-mol 200 %) (range 350 390 40))
                       (mapv #(gen-membrane-mol 200 %) (range 450 630 40))

                       [(gen-server-molecule 200 200 server-a) (gen-server-molecule 200 300 server-a) (gen-server-molecule 200 400 server-a)]

                       (mapv #(gen-membrane-mol 400 %) (range 0 170 40))
                       (mapv #(gen-membrane-mol 400 %) (range 250 260 40))
                       (mapv #(gen-membrane-mol 400 %) (range 350 390 40))
                       (mapv #(gen-membrane-mol 400 %) (range 450 630 40))

                       [(gen-server-molecule 400 200 server-b) (gen-server-molecule 400 300 server-b) (gen-server-molecule 400 400 server-b)]
                       [(gen-in-mailbox-molecule 60 50 in-mail-a1 "a1") (gen-in-mailbox-molecule 540 50 in-mail-b1 "b1")]
                       [(gen-in-mailbox-molecule 60 550 in-mail-a2 "a2") (gen-in-mailbox-molecule 540 550 in-mail-b2 "b2")]

                       (mapv #(gen-membrane-mol 0 %) (range 0 650 40))
                       (mapv #(gen-membrane-mol 600 %) (range 0 650 40))
                       (gen-messages "b1" 5)
                       (gen-messages "b2" 5)
                       (gen-messages "a1" 5)
                       (gen-messages "a2" 5)
                       (gen-server-crash "a" 2)
                       (gen-server-crash "b" 2)

                       (gen-server-fixes "a" 1)
                       (gen-server-fixes "b" 1)

                       ))

(defn mail-system []
  (setup-mols mail-system-mols))

(defn add-mols-to-system [mols]
  (swap! world merge (zipmap (map :id mols) mols))
  (doseq [mol mols]
    (molecule-reaction mol)))

(defn more-mail []
  (let [mols (concat (gen-messages "b1" 2)
                     (gen-messages "b2" 2)
                      (gen-messages "a1" 2)
                      (gen-messages "a2" 2))]
    (add-mols-to-system mols)))

(defn more-server-crashes []
  (let [mols (concat (gen-server-crash "a" 1)
                     (gen-server-crash "b" 1))]
    (add-mols-to-system mols)))

(clear)
(start)
(run)

(mail-system)

(ef/at "#more-mail" (ev/listen :click #(add-mols-to-system (more-mail)))
       "#more-server-crashes" (ev/listen :click
                                         #(add-mols-to-system (more-server-crashes))))
