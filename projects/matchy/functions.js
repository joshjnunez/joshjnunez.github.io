/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called search. give it parameters(animals,name)
// animals = [];, name = ''

//create a for loop within the body of the function that loops through the array
    // implement a conditional statement that checks animals[i].name === name
        // return animals[i] 
        // return null

function search(animals, name) {
    for(let i = 0; i < animals.length; i++) {
        if(animals[i].name === name) {
            return animals[i];
        }
    }
            return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called replace with parameters (animals, name, replacement)
// animals = [array]; name = 'animal name'; replacement = {object of animal}
    // IF ANIMAL WITH THE SAME NAME EXISTS, replace with animal object
    // else, do nothing
 
 // use a for loop to access animals array    
    
function replace(animals, name, replacement) {
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name) {
            animals[i] = replacement;
        }
    }
}

////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called remove(animals, name)
// for loop through animals array, if name matches: remove it
    //  use .splice to remove specific element in an array

function remove(animals, name) {
    for(let i = 0; i < animals.length; i ++) {
        if(animals[i].name === name) {
            animals.splice('i', 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called add(animals, animal)
        // function should:
            // check if the 'name' property has length > 0
            // check if the 'species' property has a length > 0
            // has a UNIQUE name 
                // IF all conditions pass true, add new obj to animals array
                
            // the best method would be to use || and !bang operators. instead of saying 'if all pass for true', we say 'if one of these conditions pass false, return (jump out the conditional). and if one happens to pass the a condition .push the obj'

function add(animals,animal){
    for(let i = 0; i < animals.length; i++) {
        if(!(animal.name.length > 0) || !(animal.species.length > 0) || (animals[i].name === animal.name)) {
            return;
       } 
        
    }
         animals.push(animal);
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
