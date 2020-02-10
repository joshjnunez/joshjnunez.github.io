/* FUNCTIONS
    - A JavaScript function is a block of code designed to perform a particular 
        task.

    - A JavaScript function is executed when "something" invokes it (calls it).
    A JavaScript function is defined with the function keyword, followed by a 
        name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs 
    (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
  
  2 questions to ask when developing a function:
    1. What instructions do we give the computer to solve the problem?
    2. How do we create the most efficient instructions?


/* 6. Functions
    - a computer program is a set of instructions that we give to the computer
    - functions allow us to execute a block of code whenever and however we want 
    - makes coding more efficient 
    
    2 Stages in Creating a Function:
        i. function declaration / defintion
        ii. function call/ invocation / execution
        
        
    -Function Declaration
            - creates the action or instructions
            - not putting concrete values in declaration allows multiple 
                value possibilities
            - parameters serve as placeholders 
            
            syntax:
            function add (num1, num2){
                return num1 + num2
            }
            
            function = keyword
            add = function name (can be anything but better to make it
            specific to action of the function)
            num1, num2 = parameters ("  "   "    "    "      ")
            
    -Function Call
            - since parameters are just placeholders we must invoke or call 
                our function with values
            
            syntax:
            add (5,5) //10
            
            5,5 = placeholders (arguments take the place)

Scope: Functions can see and modify variables in parent or global scopes. 
The inverse is NOT true.


When you create the parameters for a function you can choose to decide which 
the function will output. The JavaScript program will ignore the others.


Closures: Functions form closures around the data they house. If an object
returned from the Function and is held in memory somewhere (referenced), 
that closure stays ALIVE, and data can continue to exist in these closures! 

*/

//Examples:


//Input: one number
//Output: number divide by 4
function divide4 (num) {
  return num / 4 }

divide4(20);

// prints ==> 5


 function test(grade){
 if (grade === 100) {
   console.log("Green");
 } else if (grade <= 99 && grade >= 70) {
   console.log("Yellow");
 } else if (grade <= 69 && grade >= 1) {
   console.log("Red");
 } else if(grade === 0) {
   console.log("No Attempt");
 }

 }

 test(70);
 test(64);
 test(0);

//==> different arguments passed result in different outputs being logged.
