// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // using a for loop, set up a staring parameter (o) and ending parameter (array.length)
  //don't forget a iterator 
  
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //this for loop's syntax will be similar to the one above
  //be sure to change starting and ending position, iterator, etc so array will print in reverse
  
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//declare an array literal
//for in loop through object
//.push keys into array
//return array

var array = [];

for(var key in object) {
  array.push(key);
}

return array;


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //using a for in loop,console.log the keys of object 
  
  for(var key in object){
    console.log(key)
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //declare an array literal where the object's values can be stored
  //using a for in loop, loop through the keys
  //using bracket notation, pull the values of the keys
  //return array
  var array = [];
  
  for (var key in object) {
    array.push(object[key]);
  }
  
  return array;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //use a for in loop to loop over the object
  //use bracket notation to retrieve values of keys
  //use console.log to print it's values
  
  for(var key in object) {
    console.log(object[key])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create an empty array to store key/value pairs, bc you can only retrieve length from arrays can
  /*use a for in loop to loop through object and 
  retrieve the key value pairs with bracket notation */
  //.push key/values in array
  //return array.length
  
  var array = [];
  
  for(var key in object) {
  array.push(object[key]);
  }
 
  
  return array.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //to loop in reverse, you must use a for loop with an array
  //so, first: declare an empty array
  //create for in loop and .push the values to the array
  //next, use a for loop to pull from the array in reverse
  
  var array = [];
  
  for (var key in object) {
    array.push(object[key]);
  }
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
