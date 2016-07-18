(define (f-rec x )
	(if (< x 3)
		x
		(+ (f-rec (- x 1)) 
			(* 2 (f-rec (- x 2))) 
			(* 3 (f-rec (- x 3)) ) )))

(f-rec 0)
(f-rec 1)
(f-rec 2)
(f-rec 3)
(f-rec 4)
(f-rec 5)

;; ex 1.11. Iterative implementation 
  
 (define (f-iter n) 
   (define (iter a b c count) 
     (if (= count 0) 
       a 
       (iter b c (+ c (* 2 b) (* 3 a)) (- count 1)))) 
   (iter 0 1 2 n)) 


(f-iter 0)
(f-iter 1)
(f-iter 2)
(f-iter 3)
(f-iter 4)
(f-iter 5)   