(define (sqs x y)
	(+ (sq x) (sq y)))

(define (sq x)
	(*  x x))


(sqs 3 4) 	

;;;Peano Arithmetic

(define ( @ x y)
	(if (= x 0)
		y
		(@  (-1+ x)(1+ y))))


(@ 110 2)


(define ( @2 x y)
	(if (= x 0)
		y
		(1+  (@2 (-1+ x) y))))


(@ 110 2)
(@2 110 2)

(define (fib n)
	(if (< n 2) n
	(+ (fib(- n 1))
	   (fib (- n 2)))))

(fib 10)