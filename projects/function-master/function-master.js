//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object and return keys to string

function keysToString(object) {
 return Object.keys(object).join(' ');
    

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// take an object and return all its string values in a string seperated with a space ' ' 

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

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substr(1,string.length);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

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

function welcomeMessage(object) {
    let greeting = 'Welcome ';
    
    return greeting + object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + '!';
    
    }
    



//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    var sentence = ' is a ';
    
    return object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + sentence + object['species'].charAt(0).toUpperCase() + object['species'].slice(1); 
    

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    if (object['noises'] === undefined) {
        return 'there are no noises';
    }
    else if (object['noises'].length === 0) {
        return 'there are no noises';
    } else if (Array.isArray(object['noises'])) {
        return object['noises'].join(' '); 
    }
    
    // } else if (object['noises'] !== []) {
      

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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

function addFriend (name, object) {
    object['friends'].push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create an if else statement within the function

// if the friends array === undefined, return false

//



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

function nonFriends(name, array) {
 var rejectArray = [];
 var result = [];
 
 for(let i = 0; i < array.length; i++) {
    if(array[i].name === name) {
    var current = array[i];
    } else { 
        rejectArray.push(array[i].name);
  }
 } 

    if(current === null) {
        return rejectArray;
    }
    for(var i = 0; i< rejectArray.length; i++) {
        if(current.friends.indexOf(rejectArray[i]) == -1) {
            result.push(rejectArray[i]);
        }
    }
    return result;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// should update the property key of object with key on new value. if key does not exist create it


function updateObject(object, key, value) {
    
    object[key] = value;
    
    return object;
    

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  
 
for(let i = 0; i < array.length; i++) {
           delete object[array[i]];
       }
     

 
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

    let newArray = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return newArray;
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