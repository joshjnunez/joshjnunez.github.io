// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Goal: test whether a given value is greater than 'base'
   // declare a function(value)
    //return a boolean

    return function (value) {
        if (value > base) {
            return true;
        } else {
            return false;
        }
    };

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (value) {
        if (base > value) {
            return true;
        } else {
            return false;
        }
    
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //create a function to be returned
    
    //In order to access a single character we must utilize indexing. Use bracket notation to access 0 index of the string
    //.toLowerCase() the string and character because 'a' and 'A' have different values in JS
    //create conditional statement to return boolean value
    
    return function (givenString) {
        
        if (givenString.toLowerCase()[0]===startsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //create a returned function (givenString), as we did above. 
    //place an if else statement within the code block. 
    //to use indexing, we must use .length-1 to access the last character's index
    
    
    return function (givenString) {
        if (givenString.toLowerCase()[givenString.length-1] === endsWith.toLowerCase()) {
     return true; 
     } else {
     return false;
}
 };  
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    console.log(strings);
    console.log(modify);
    //strings is going to be an array
    //modify is going to be a function
    
    //Output: return an array of modified strings
    
    //implement a for loop to gaun access to ever string
    //create a storage array to hold out modified strings
    
    let resultArr = [];
    
    for (let i = 0; i <= strings.length-1; i++) {
        resultArr.push(modify(strings[i]));
    }
    
    //return the modified array
    return resultArr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
// use the method .every() which checks every value in an array to see if it passes that function 
  
     return strings.every(test);
    

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}