/* OPERATORS
        - assignment 
        - arithmetic
        - comparison
        - logical
        - unary
        - ternary
        
        
    1.  Assignment (=) - assigns value 
        x = y
    2.  Arthimetic - add, subtract, divide, etc
        x + y = x
    3.  Compqrison - compares two values to test for truth or false
        x > y
     Name	                    Operator	        Meaning
Assignment	                     x = y	            x = y
      * assigns value

 Arthimetic 
        *creates mathemtical expressions to result to a new value
    Addition assignment	         x += y	            x = x + y
    Subtraction assignment	     x -= y	            x = x - y
    Multiplication assignment	 x *= y	            x = x * y
    Division assignment	         x /= y	            x = x / y
    Remainder assignment	     x %= y	            x = x % y

Comparison

Operator	Description	            Comparing	    Returns
 ==          equal to            	x == 8	        false	
 ===	        equal value and     x === 5	        true
            equal type		
 !=	        not equal	            x != 8	        true	
 !==	        not equal value or  x !== 5	        false
            not equal type		
 >       	greater than	        x > 8	        false	
 <	        less than	            x < 8	        true	
 >=	        greater than or         x >= 8	        false	
            equal to	
 <=	        less than or equal to	x <= 8          true


    Logical - determines the logic between two variables

    Logical 
    Operator	Description	                Example	
    &&      	and	                    (x < 10 && y > 1) is true	
    ||	         or	                    (x == 5 || y == 5) is false	
    !	        not	                    !(x == y) is true


//Unanry- takes one (uni) argument and performs operation // (!,typeOf,-)
//ternary- takes 3 operands(arguments) followed by question mark and then an
            expression to see if the condition is truthy followed by colon: 
            and the expression to execute falsy
        // (a? b: c)
*/

//Examples:

var x = 5;
console.log(x>4); //==> prints true

