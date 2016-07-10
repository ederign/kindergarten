(define (dec x)
	(- x 1))

(dec 10)

(define (inc x)
	(+ x 1))

(inc 10)

(define (sum a b)
	(if (= a 0)
		b
		(inc (sum (dec a) b))))

(sum 4 5)

(define ( som1 a b )
	(if (= a 0)
		b
		(+ (dec a) (inc b))))

(som1 4 5)


(define (fib n)
	(if (< n 2) n
	(+ (fib(- n 1))
	   (fib (- n 2)))))

(fib 10)


(define (fib2 n)
	(fib-iter 1 0 n))

(define (fib-iter a b count)
	(if (= count 0)
		b
		(fib-iter ( + a b) a (- count 1))))

(fib2 10)