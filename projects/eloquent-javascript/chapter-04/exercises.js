////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a function called range with parameters (start, end) that takes first 
  // number and last number and returns array with numbers inbetween


function range(start, end, step) {
  let array = [];
  if(start === end){
   return array;//if start and end are equal to each other return an empty array
 }
  if (step === undefined){  //if undefined make step equal 1
  step = 1;
}
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {  // deciding which way the range will face
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array; // return array
  
  
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare var sum = 0

// loop through arrayOfNumbers 
// use addition operator to add sum + arrayOfNumbers[i] (whatever number is i at the time of the loop)

//return sum gives you new value of sum

function sum(arrayOfNumbers) {
  var sum = 0;
for(let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
return sum;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare a function called reverseArray that takes one parameter,an array

// declare a var within the function and assign to an array literal

// use a for loop to loop through array,
// push numbers in reverse to your new array that was declared.

// NOTE, it is a reversed array so for your loop...
  //start: array.length-1
  //stop: 0
  // iterate i--
  
// return new array



function reverseArray(array) {
  var reversedArr = [];

for(let i = array.length-1; i >= 0 ; i--) {
 reversedArr.push(array[i]); 
}
return reversedArr;
}




////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// reverse array with a for loop. 
// this time use math.floor method which returns the largest integer less than or equal to a given number.


function reverseArrayInPlace(array) {
  for ( let i = 0; i < Math.floor(array.length / 2); i++) {
  let xArray = array[i];
  
  array[i] = array[array.length - 1 - i];
  
  array[array.length - 1 - i] = xArray;
}
  return array; 
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  
  var list = null; // set new var list = null
  
  for(let i = array.length-1; i >= 0; i--) { // create an object by reassign value of list within the for loop
    list = {
      value: array[i],
      rest: list
    };
  }
    return list; //return list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var array = []; // declare array literal
  var x = list;
  
  while(x) {
    array.push(x.value); // push values in array 
    x = x.rest;
  }
  return array; //return array

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare var newList
// assign newList to an object with value and item as key value pairs

//return newList

function prepend(value, item) {
  var newList = {
    value:value,
    rest: item};
  return newList;
}
  

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare var listArray = listToArray(list) // the function we created previously
// use bracket notation to access number within listArray function

//return listArray[number]
function nth(list, number) {
var listArray = listToArray(list);
    return listArray[number];
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a,b) {
    //first compare with triple equals to see if the two are the same type and value
  if (a === b) return true;
  //second if statement checks for null values and non-objects
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  //declare counters
  var propsInA = 0, propsInB = 0;
	//for-in loop counts the number of properties in a and b
  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    //if b has a prop not in a or if, upon recursive function all,
    //the properties don't have the same values, return false
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
	//otherwise, return whether the number of properties are the same
  return propsInA == propsInB;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
