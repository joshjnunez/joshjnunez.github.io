/* CONTROL FLOW

    - Control flow refers to the order that the computer handles statements. 
    
    - As a program you can control the flow of how the computer will 'think' by
        using conditional statements. 
    
    - Conditional statements give the computer a condition in which it must 
        decide true or false. If it is true one block of code runs, if false 
        another runs. Or the code ends and nothing runs.

        Conditional Statements
    SYNTAX
        i.   if:
                                 if (condition) {
                                        'this block of code runs'
                                    }
        ii.  else - if:
                                    } else if (condition) {
                                         'this block of code runs'
                                    }
         iii. else:
                                    } else {
                                         'this block of code runs'
                                    }
        
        iv.  switch:
                                switch(expression) {
                                    case x:
                                         // code block
                                        break;
                                    case y:
                                         // code block
                                         break;
                                    default:
                                         // code block
                                }
        
            Use if to specify a block of code to be executed, if a specified 
            condition is true
            Use else to specify a block of code to be executed, if the same 
            condition is false
            Use else if to specify a new condition to test, if the first 
            condition is false
            Use switch to specify many alternative blocks of code to be 
            executed
        

*/

//Example:

var gradeOne = 50;
var gradeTwo = 95;

if(gradeOne < 50) {
    console.log('You failed the test.');
} else if (gradeTwo >= 95) {
    console.log('A+! You aced the test.');
}else {
    console.log('No grade. Please take the test.');
}

// prints: 'A+! You aced the test.' 

        /* if and else if statements need a true value to run. if the value in 
          the condition is not true the computer will read the next line of 
        code. As soon as it finds a true is jumps out the conditional statement
        so nothing else will run after, even if it is a true expression. 
        */
        

// Switch
    /*The switch expression is evaluated once and the value of the expression
    is compared with the case values. If it matches values the code of block
    will run that is for that case. 
    */
    var favNumber = 3;
    switch(favNumber) {
        case 1:
            console.log('No');
            break;
        case 2: 
            console.log('No');
            break;
        case 3:
            console.log('Yes');
            break;
        default:
            console.log('No value');
    }
    
    // prints: 'Yes'
    
    