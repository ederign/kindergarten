(define (improve-cube guess x)
 (/ (+ (/ x (* guess guess)) (* 2 guess)) 3))

(define (good-enough? guess last-guess x)
  (< (abs (- guess last-guess)) (/ guess 100000)))

(define (calculate-cube-root guess oldguess x)
 	(if (good-enough? guess oldguess x)
 		guess
 		(calculate-cube-root (improve-cube guess x) guess x)))


(define (cube-root x) (calculate-cube-root 1.0 0 x))



(cube-root 27)  
(cube-root 8)   


