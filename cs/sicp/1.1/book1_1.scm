(define  (abs x)
	(cond (< x 0)(- x))
		  (else x)))

(abs -1)

(define (absIF x)
	(if (< x 0)
		(- x) 
		x)))

(absIF -1)

(define (testAnd x)
	(and (> x 5) (< x 10)))

(testAnd 6)


(define (>= x y)
	(or (> x y)(= x y)))

(>= 6 8)


(>= 8 6)

(define (>=2 x y)
	(not (< x y)))

(>=2 6 8)


(>=2 8 6)

