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

 
 ;;;1.6
 #|
Due to applicative-order evaluation, the application of 
(sqrt-iter (improve guess x) x)

will never terminate:

sqrt-iter
  new-if
    sqrt-iter
        new-if
          ...
            ...
|#
 ;;; 1.7

 (define (average x y)
	(/ (+ x y) 2))


(define (improve guess x)
	(average guess (/ x guess)))

(define (good-enough? guess x)
	(< (abs (- (square guess) x))
		.001))

 (define (try guess x)
 	(if (good-enough? guess x)
 		guess
 		(try (improve guess x) x)))

 (define (sqrt x) (try 1 x))

 (sqrt 9.0)

 (sqrt 0.0001) ;0.03230844833048122 instead of the expected 0.01 



(define (good-enough2? guess oldguess) 
  (< (abs (- (improve guess oldguess) guess)) 
     (* guess .001)))

(define (sqrt-iter guess oldguess x) 
   (if (good-enough2? guess oldguess) 
       guess 
       (sqrt-iter (improve guess x) guess 
                  x))) 

(define (good-enough2? guess oldguess) 
   (< (abs (- guess oldguess)) 
      (* guess 0.001))) 
  
 (define (sqrt2 x) 
   (sqrt-iter 1.0 2.0 x)) 


(sqrt2 9.0)

(sqrt2 0.0001)

(sqrt2 1000000000000) 












