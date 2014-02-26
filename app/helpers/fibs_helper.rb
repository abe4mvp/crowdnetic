module FibsHelper
  
	def recursive_fib(n)
		# assumnes you are considering the 0th num == 0 and first num == 1
    
    
    
       case  n 
       	when 0
           return 0
    	when 1
			return 1
		else
			return recursive_fib(n-1) + recursive_fib(n-2)
		end

	end
  
end
