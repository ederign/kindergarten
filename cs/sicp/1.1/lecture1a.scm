(define a  2)
a
 (define (square x)
	(* x x ))
(square 10)


(define squareLambda
	(lambda (x) (* x x)))

(squareLambda 100)

(square (square (square 1001)))

square

(define (average x y)
	(/ (+ x y) 2))

(average 3 4)

(define (mean-square x y)
	(average (square x)
			 (square y)))

(mean-square 3 4)

(define (abs x)
	(cond 	((< x 0)(- x))
			((= x 0 ) 0)
			((> x 0) x)))

(abs -10)
(abs 0)
(abs 3)

(define (abs2 x)
	(if (< x 0)
		(- x)
		x))
(abs2 -1)



(define (improve guess x)
	(average guess (/ x guess)))

(define (good-enought? guess x)
	(< (abs (- (square guess) x))
		.001))

 (define (try guess x)
 	(if (good-enought? guess x)
 		guess
 		(try (improve guess x) x)))

 (define (sqrt x) (try 1 x))

 (sqrt 9)


(define (sqrt-block x)
	(define (improve guess)
	(average guess (/ x guess)))
	(define (good-enought? guess)
	(< (abs (- (square guess) x))
		.001))
	(define (try guess)
 	(if (good-enought? guess)
 		guess
 		(try (improve guess))))
	(try 1))

 (sqrt-block 9)


 (define a (* 5 5))
 (define (b) (* 5 5))
 a
 b
 (b)


