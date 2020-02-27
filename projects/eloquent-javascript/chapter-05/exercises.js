// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// declare var final set equal to array.reduce(function total, item)

// .reduce() method reduces the array to single value
  // delcare a function within the method that takes params total, item
  
  // return total.concat(item) // concats total and item
  
  // return final


function flatten(array) {
 var final = array.reduce(function(total, item) {
    return total.concat(item);
  }, []);
  return final;
  }





// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//use for loop 
  // starting = value
  // ending = testFunction(i)
  // i = updateFunction(i) to iterate


function loop(value, testFunction, updateFunction, body) {
  
  for (var i = value; testFunction(i); i = updateFunction(i)) {
    
    body(i);
    
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


// use for loop to run through the array 
// if !test(array[i]) evaluates as true, retun false


//return true outside of the loop

function every(array, test) {
  
  for (let i = 0; i < array.length; i++) {
    
    if (!test(array[i])) {
      
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function dominantDirection(text) {
  
 
  
  // let scripts = countBy method (text and char) as parameters
  // let script = characterScript methof (char.codePointAt(0))
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none"; // return script direction: none
  }).filter(({name}) => name != "none"); // use .filter() method
  
   // use a switch conditional to evalaute each case
  switch (scripts.length) { // scripts.length gives you number for length of 
    case 0: // compare it against each case
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default: // use if else statement as the default 
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
  
  
  
  
  
  
  
  
  
 
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
