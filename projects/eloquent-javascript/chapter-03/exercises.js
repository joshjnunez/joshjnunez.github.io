////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare a function named min with two parameters
  // return Math.min() /// this finds the minimum of the two inputs

function min(numOne,numTwo) {
  return Math.min(numOne, numTwo);

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare a function called isEven that takes one parameter, checks to see if
// it is even and returns a boolean
// use recursive method to change all numbers that are not 0 and 1 to 0 and 1 to be tested



function isEven(number) {
  if (number === 0) {
   return true;
} else if (number === 1) {
    return false;
} else if (number < 0) {
  return isEven(-number);
} else {
  return isEven(number - 2);
}
}
  


isEven(50);
isEven(75);
isEven(-1);

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare var count and assign value to 0 
// use for loop to loop through string 
// use charAt(i) to locate the character within the string, set strictly equal to character parameter inside if condition of the loop
  // count should be iterated by one each time it loops, count++
  
// return count

function countChars(string, character) {
    var count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) { 
            count++;
        }
    }
            return (count); 
}


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare var count and assign value to 0 
// use for loop to loop through string 

// similar to function above execpet set your condition strictly equal to 'B'

//return count



function countBs(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B") {
            count++;

        }
    }
        return (count); 
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
