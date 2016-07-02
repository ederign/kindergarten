(define (sqs x y)
	(+ (sq x) (sq y)))

(define (sq x)
	(*  x x))


(sqs 3 4) 	


(define ( @ x y)
	(if (= x 0)
		y
		(@ (-1+ x)(1+ y))))


(@ 110 2)
