;;;1.1
10 
;;;10
(+ 5 3 4) 
;;;12
(- 9 1)
;;;8
(/ 6 2)
;;;3
(+ (* 2 4) (- 4 6))
;;;10
(define a 3)
(define b (+ a 1))
;;;b 4
(+ a b (* a b))
;;;19
(= a b)
;;;#f
(if (and (> b a) (< b (* a b)))
	a
	b)
;;;3
(cond ((= a 4) 6)
	  ((= b 4) (+ 6 7 a))
	  ( else 25))
;;;16
(+ 2 (if (> b a) b a))
;;;6
(* (cond ((> a b) a)
         ((< a b) b)
         (else -1))
   (+ a 1))
;;;16

	  
;;;1.2
(/ (+ 5 4 (- 2 (- 3 (+ 6 (/ 4 5)))))
   (* 3 (- 6 2)(- 2 7)))

;;;1.3

(define (square x)
	(* x x ))

(define (sum_sqr_2_largers a b c)
	(cond ((and (<= a b) (<= a c)) (+ (square b) (square c)))
		  ((and (<= b a)(<= b c)) (+ (square a) (square c)))
		  (else (+ (square a) (square c)))))
(sum_sqr_2_largers 5 3 2)
; 34
(sum_sqr_2_largers 5 2 3)
; 34
(sum_sqr_2_largers 2 3 5)
; 34
(sum_sqr_2_largers 8 -3 -27)
; 73







