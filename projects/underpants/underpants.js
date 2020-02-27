// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


// create a function expression called _.identity
// have it take on parameter; value
// objective: return that value unchanged

_.identity = function(value) {
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// create a function called _.typeof
// have it take a paramter; value
// objective: return the type of value as a string
// create an if else statement within the function that filters through value types
// use typeof() method
// NOTE: some data types are considered objects. the order in which you place your conditions is important. 

_.typeOf = function (value) {
    if(typeof(value) === 'string') {
        return 'string';
    } else if(typeof(value) === 'number') {
        return 'number';
    } else if(typeof(value) === 'boolean') {
        return 'boolean';
    } else if(Array.isArray(value)) {
        return 'array';
    } else if (value !== null && value !== undefined && typeof(value) !== 'function') {
        return 'object';
    } else if (value === null) {
        return 'null';
    } else if (value === undefined) {
        return 'undefined';
    } else {
        return 'function';
    }
};



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// create a function expression called _.first
// it should take two parameters; array, number
// objective: if array is not an arry, return [];
            // if number is not given OR not a number, return first element in array
            // otherwise, return first number of array
            
// create a conditional statement within the function body

_.first = function(array,number) {
    if(!Array.isArray(array)) { // using a bang! operator to check that 'array' is not an array
        return [];
    } else if (isNaN(number) || number === null) { //isNaN() method checks if 'number' is not a number
        return array[0];
    } else if (number < 0) { //if number is negative, return []
        return [];
    } else {
        array.splice(number,array.length); // splice method allows us to find where the first occurence of number item and return array, resulting in only that number
        return array;
    }
};




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// create a function expression called _.last
// it should have two parameters; array, number


_.last = function (array, number) {
 if (!Array.isArray(array)) { //condition checks if the array is not an array
       return []; // returns an empty array literal
   }
    if (isNaN(number) || number === null) {// condition checks if number is not a number or no value 
    return array[array.length-1]; // return first element of array
   } else if (number < 0) { // if number < 0 (negative)
       return [];
   } else if (number > array.length) { // if number is greater than the arrays length, return array;
       return array;
   } else if (number) {
          return array.slice(array.length - number, array.length); // returning the last number of array
 }



};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


// create a function expression called indexOf that takes the parameters array, value
// return 

_.indexOf = function (array, value) {
   for( var i = 0; i < array.length; i++) { // use a for loop to iterate through array
       if(array[i] === value){ // if the value is in array, return index of that value
           return i;
       } 
           
       }
       return -1; // if value is not in array
   };
    
  




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


// create a function expression .contains with parameters (array, value)
// assign value of false to var bool

// create a for loop to loop through array
// use a ternary operator, if value is found in array: bool = true; else, it equals false

//return outside of the loop

_.contains = function (array, value) {
  let bool = false;
  for( let i = 0; i < array.length; i++) {
   array[i] === value ? bool = true :  false; // if array contains value, bool is true. if not, bool is false
  }
  return bool;
};




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// create a function expression .each with parameters (collection, function)

_.each = function (collection, aFunction) {

    if(Array.isArray(collection)) { // checks if collection is an array
    for( let i = 0; i < collection.length; i++) { // loop through collection 
        aFunction(collection[i], i, collection); //call aFunction(element, index, collection)
    }
    } else if (typeof collection === 'object') { // if collection is an object
        for (var key in collection) { // loop through object
            aFunction(collection[key],key,collection); // call aFunction(property,key,collection)
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// create a function expression called unique that takes one parameter (array)
// use the indexOf function to locate values in array
_.unique = function(array) {
    var newArray = []; // assign newArray to empty array literal
    for (var i = 0; i < array.length; i++) //loop through array 
   if ( _.indexOf(array, array[i]) === i) { //use indexOf() to locate values in array that are duplicates
        newArray.push(array[i]); //push values to newArray
        
    }
  return newArray;
};




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// create a function expression called filter with parameters element, index and array
// create empty array literal named newArray

// call each function with arguments of array and a new function
_.filter = function(array, aFunction) {
  
  var newArray =[];
   
 _.each(array,function(element, index, array){
         if (aFunction(element, index, array)) {
             newArray.push(element);
         }
         
});

return newArray;
    
    
    

};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//similar to filter function 
_.reject = function (array, aFunction) {


var falseArray = _.filter(array,function(element, index, collection){
   return !aFunction(element, index, collection); //if aFunction does not share elements with new function, return those elements in falsy array
  
});

return falseArray;

    
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// create a function declaration with parameters array and fun
// create a truth array and false array

// _.partition = function (array, fun) {
//     var trueArray = [];
//     var falseArray = [];
// for ( let i = 0; i < array.length; i++) {
//     if (fun(array[i],i,array)) {
//         trueArray.push(array[i]);
//     } else {
//         falseArray.push(array[i]);
//     }
// }
//  return[trueArray,falseArray]; 
// };

// using functions>

// create a function declaration with parameters array and fun
// assign newArr to array literal
//assign truthyArr to the calling of filter function which returns truthy values
// assign falsyArr to the calling of reject function which return falsy values

 _.partition = function (array, fun) {
  
  var newArr =[];
  
  var truthyArr = _.filter(array,fun);

  var falseyArr = _.reject(array,fun);

 newArr.push(truthyArr); // push truthy and falsy arrays into newArr
 newArr.push(falseyArr);

return newArr;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

// create a function that takes the parameters (collection, aFunction)
// if collection is array:
// element, index, collection
// if collection is obj:
// value, key collection

_.map = function (collection, aFunction) {

var newArray = [];

 _.each(collection,function(element, index, collection) {
  
     newArray.push(aFunction(element,index, collection));
});
    return newArray;
};



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// create a function expression called pluck
//parameters: array, property

//call map function 
//return the value of property of element in array

_.pluck = function (arrayOfObjects, property) {
   
	
return	_.map(arrayOfObjects, function(element) { 
	 return  element[property];
});



};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// e = element, i = index, c = collection



_.every = function (collection, aFunction) {
    let allPass = true; // let allPass = true
    aFunction = aFunction || _.identity; // assign aFunction the values of aFunction OR identity 
 
 // call _.each function
  _.each(collection, function(e,i,c) {
    if(!aFunction(e,i,c)) { //if aFunction does not have parameters of e,i,c
     allPass = false; // allPass = false
     } 
  });
 
  return allPass; //return allPass (boolean value)
 

};




/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
// similar to _.every function
//however, not all paramters must pass, only one
 _.some = function(collection, aFunction) {
       
    let onePass = false;
    aFunction = aFunction || _.identity;
 
  _.each(collection, function(e,i,c) {
    if(aFunction(e,i,c)) {
     onePass = true;
     } else if (aFunction(e,i,c)) {
        onePass;
     }
  });
 
  return onePass;


};





/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    let previousResult;
    //if there is a seed
    if(seed !== undefined){
         previousResult = seed;
        // use each to gain access to each value in the array
        _.each(array, function (e,i,a){
            //calling functin for every element, passing in previous result, element, index
           previousResult = func(previousResult, e, i,a);
        });
    }else {
        // use the first element of the array as the seed
         previousResult = array[0];
        // implement a loop to start iterating at my first index
        for (let i = 1; i < array.length; i++){
          previousResult = func(previousResult, array[i], i, array);
        }
    }
// return my previous result variable
return previousResult;
    // if there is no seed
};




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//create a function expression called extend
//paramters obj1, obj2, ...obj (rest operator) ---> allows us to take an unlimited amount of paramters

_.extend = function (obj1,obj2,...obj) {
  
  // use Object.assign method to copy values from one object to the other
 return Object.assign(obj1,obj2,...obj);
  
};





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
