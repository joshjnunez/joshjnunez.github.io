// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //create a for loop from 1-100
    //use if else statements to create conditional statements 
    // % is a modulo operator that gives the remainder of a number when divided. set it equal to 0 to make sure it is a mulitple of either 3 or 5
    //console.log 'fizz', 'buzz', and 'fizzbuzz'
    
for(var i = 1; i <= 100; i++ ) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
} else if (i % 3 == 0) {
    console.log('Fizz');
} else if (i % 5 == 0 ) {
    console.log('Buzz');
} else {
    console.log(i);
}

}




    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}