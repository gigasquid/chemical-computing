(ns chemical-computing.algo
  (:require [clojure.test :refer :all]))

(def prime-to-100
  [2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97])

(defn is-prime? [n]
  (let [possible-factors (range 2 n)
        remainders (map #(mod n %) possible-factors)]
    (not (some zero? remainders))))

(is-prime? 5)
;; -> true

(is-prime? 6)
;; -> false


(defn gen-primes [n]
  (filter is-prime? (range 2 (inc n))))

(deftest test-prime-numbers
  (is (= prime-to-100 (gen-primes 100))))

(defn prime-reaction [[a b]]
  (if (and (not= a b)
           (zero? (mod a b)))
    [(/ a b) b]
    [a b]))

(prime-reaction [6 2])
;; -> [3 2]

(prime-reaction [5 2])
;; -> [5 2]

(def molecules (range 2 101))

(defn mix-and-react [mols]
  (let [mixed (partition 2 (shuffle mols))
        reacted (map prime-reaction mixed)]
    (flatten reacted)))

(take 10 (mix-and-react molecules))
;; -> (37 48 87 46 38 91 68 13 39 33)

(defn reaction-cycle [n]
  (loop [i n
         mols molecules]
    (if (zero? i)
      mols
      (recur (dec i) (mix-and-react mols)))))

(take 10 (reaction-cycle 100))
;; -> (2 2 11 23 2 2 5 3 79 17)


(sort (distinct (reaction-cycle 1000)))
;; -> (2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97)

(deftest test-prime-reaction-cycle
  (let [reactions (reaction-cycle 10000)]
    (is (= prime-to-100 (-> reactions distinct sort)))))

(run-tests)
