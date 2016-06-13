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

;;;1.4
(define (a-plus-abs-b a b)
	((if (> b 0) + -) a b))

(a-plus-abs-b 10 4)


(a-plus-abs-b 10 -4)

;;;1.5
(define (p) (p))
(define (test x y)
	(if (= x 0)
		0
		y))

;;;(test 0 (p))
 #|
 scheme default is applicative-order evaluation
all the arguments to Scheme procedures are evaluated when the procedure is applied
Using applicative-order evaluation, the evaluation of (test 0 (p)) never terminates, because (p) is infinitely expanded to itself:

 (test 0 (p)) 
  
 (test 0 (p)) 
  
 (test 0 (p)) 

 Using normal-order evaluation , the expression evaluates, step by step, to 0:

 (test 0 (p)) 
  
 (if (= 0 0) 0 (p)) 
  
 (if #t 0 (p)) 
  
 0 

In contrast, normal-order languages delay evaluation of procedure arguments until the actual argument values are needed. Delaying evaluation of procedure arguments until the last possible moment (e.g., until they are required by a primitive operation) is called lazy evaluation.
|#


