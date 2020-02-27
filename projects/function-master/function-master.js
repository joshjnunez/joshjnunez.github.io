//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a function named objectValues thats takes the parameter (object)
// this function should return the values of the object in an array
// use the methof Object.values() which takes an objects values and puts them
    // into an array

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object and return keys to string
//declare a function keysToString that takes the parameter of one (object)

// this function should return the keys of the object in a string
// use the method Object.keys() which takes the keys of an object and converts
    // to an array

//next, use the method .join() which turns arrays into strings.
        // be sure to seperate elements with a space by adding ' ' 
            //in the parenthesis

function keysToString(object) {
 return Object.keys(object).join(' ');
    

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// take an object and return all its string values in a string seperated with 
    //a space ' ' 

// declare a function called valuesToString that takes the param of an object
// within the code block assign Object.values(object) to 'array' using let

// use a for loop to loop through 'array'.
        // starting point: 0
        // ending point: array.length-1 (bc we don't know elements of array)
        // iterate by one i++
    // within the for loop use a conditional if statemenet
        // if (typeof array[i] !== 'string') should be the condition
                // this is saying that if the element of array at the i index
                    // does not equal the data type of string, perform the 
                    // following action
                // the action we would like to perform to all non string data
                    // types is .splice() method
                 // array.splice(i,1) will alter the array starting at i index
                    // and only remove the one index from array 
        // finally, we return array.join(''). the new value of 'array' will now
        // only contain string values. and .join(' ') will convert array to one
        // long string seperating each element with a space

function valuesToString(object) {
    
    
   let array = Object.values(object);
    
    for(let i = 0; i <= array.length-1; i++) {
        if (typeof array[i] !== 'string') {
           array.splice(i,1);
        } 
           
        }  
        console.log(array);
            
    return array.join(' ');
        

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take one argument and return 'array' if its an array and 'object' if 
its an object"
*/

// declare function arrayOrObject(collection)
// create if statement with condition (Array.isArray(collection))
    // this method checks to see if what you put in parameter is an array
    // if true, return 'array'
// create else if statement with condition(typeof collection === 'object')
    // therefore if the collection is an object it will return 'object'

function arrayOrObject(collection) {
    
     if(Array.isArray(collection)){
        return "array";
    }else if(typeof collection === "object") {
     return "object";
    }
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare function capitalizeWord(string)
// this function should return first the given string but with its first letter
    // capitalized

// use bracket notation to access first letter of string: string[0]
// .toUpperCase() to string to make that letter capital string[0].toUpperCase()
// use the .substr() method, this method allows you to return string starting at a specific element and ending at another
// in this case our parameters would be string.substr(1,string.length) since we don't know specific length of string
// return and concat the two methods togther


function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substr(1,string.length);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// for this function we want to capitalize the first letter of EVERY word in the string
// declare a varibale splitString and add the following methods to string:
    // use .toLowerCase() method to convert every letter of string to lower case
    //next, we must use the .split() method which turns strings into an array of strings, each word will have its own index

// now that we have an array we can use a for loop to access the individual elements of splitString

// use .charAt(0) to access 0 index of each word, use .toUpperCase() to capitalize first letter
// next we must use .substr(1) to tell the program to return the second half of the words

//return splitString with the .join(' ') so the array is converted back to one string with spaces between each word

function capitalizeAllWords(string) {
     var splitString = string.toLowerCase().split(' ');
   for (let i = 0; i < splitString.length; i++) {
     
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
   
       
   }
   
   return splitString.join(' '); 
}
    


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object with a name property and return 'Welcome <Name>!'"

// declare a var named greeting and assign to 'Welcome '

// using bracket notation to access the name property in the object
// .charAt(0) to locate the 0 index of string
//.toUpperCase() to capitalize the letter at that index
// + object['name'].slice(1) to return thr remaining indices of string beginning at first index

// return greeting


// return greeting 

function welcomeMessage(object) {
    let greeting = 'Welcome ';
    
    return greeting + object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + '!';
    
    }
    



//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object with a name and a species and return '<Name> is a <Species>'

// declare var sentence = ' is a ' (this will just make it easier when concat string values later)

// return:
    // object['name'] - braket notation accesses name property of object
    //.charAt(0) - accesses first character (0 index) of that name
    //.toUpperCase() capitalizes that letter
   // +
    //  object['name'].splice(1) returns the remaining indices of 'name' beginning at index 1
    
    // ** repeat this process using 'species' instead of 'name'


function profileInfo(object) {
    
    var sentence = ' is a ';
    
    return object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + sentence + object['species'].charAt(0).toUpperCase() + object['species'].slice(1); 
    

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object, if this object has a noises array return them as 
// a string separated by a space, if there are no noises return 'there are no noises'



function maybeNoises(object) {
    
    // create if else statement 
    // first condition:
    if (object['noises'] === undefined) {
        return 'there are no noises';
    } // second condition:
    else if (object['noises'].length === 0) {
        return 'there are no noises';
    } else if (Array.isArray(object['noises'])) { // third condition
        return object['noises'].join(' '); 
    }
    
// using bracket notation to access noises
//setting it strictly equal === to undefined or 0 for the first two conditions

// the order of your conditions matters, you must rule out that there are no noises before returning the noises array
      

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false

// create an if else statement
    // 1st condition: use .includes() method which returns true if the word is included in string
    // 2nd conition: else, return false

function hasWord(string, word) {
    if (string.includes(word)) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a name and an object and add the name to the object's friends array then return the object"

// use bracket notation to access friends property which is an array
// use .push() method to push name into friends array

// return object


function addFriend (name, object) {
    object['friends'].push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create an if else statement within the function
// 1st condition:
    // use dot.notation object.friends to access friends property within the object
// if true, loop through friends array

// 2nd condition
// if object.friends[i] === name, return true

// return false outside of if statement



function isFriend(name, object) {
    
   if(object.friends) {
       for(let i = 0; i < object.friends.length; i++) {
          if (object.friends[i] === name) {
              return true;
          }
       }
       
   }
  return false;
  
  
}
  
  
  
   



//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a name and a list of people, and return a list of all the names that <name> is not friends with"

function nonFriends(name, array) {
 var rejectArray = []; 
 var result = [];
 // two new arrays must be declared to fill later on
 
 
 // use a for loop to loop through the array that was given in parameter of function
 for(let i = 0; i < array.length; i++) {
    if(array[i].name === name) { // if name in array === name in paramter, set array[i] equal to var current
    var current = array[i];
    } else {  // if returns as false push name into reject array
        rejectArray.push(array[i].name);
  }
 } 

    if(current === null) {
        return rejectArray; // if current === null, return rejectArray
    }
    for(var i = 0; i< rejectArray.length; i++) { // use for loop to loop through rejectArray
        if(current.friends.indexOf(rejectArray[i]) == -1) {
            result.push(rejectArray[i]); // push names into result array
        }
    }
    return result; // return reslut, this array is filled with names that are not on friends list
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// should update the property key of object with key on new value. if key does not exist create it

// use bracketnotation to access key
//assign key to a new value: object[key] = value

//return object

function updateObject(object, key, value) {
    
    object[key] = value;
    
    return object;
    

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"

function removeProperties(object, array) {
  
// use for loop to loop through array  
for(let i = 0; i < array.length; i++) {
           delete object[array[i]]; // use delete function to delete any properties that are listed in array of object
       }
     

 
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an array and return an array with all the duplicates removed"

function dedup(array) {

// decalre a newArray using let variable
// create an anonymous function to be used in the.filter() method
// .filter() creates a new array by filtering out all elements that do not pass the test in ()
    // the function that is being tested should contain params (elem, index, self)
    let newArray = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem); // return index == self.indexOf(elem)
    });
    return newArray; //return newArray
}





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}