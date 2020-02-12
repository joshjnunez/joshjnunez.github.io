/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // declare a var named 'animal' and assign to an obj literal
// give animal a propery of 'species' using dot.notation
animal.species = 'dog';
// give animal a property of 'name' using bracket notation
animal['name'] = 'Ralph';
// give animal a property of 'noises', assign to an empty array
animal.noises = [];
// print animal to the console
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare a var named noises and assign to an empty array
var noises = [];
// bracket[notation] to give noise var a new element
noises[0] = 'bark';
// .push() to add a new element to the end of the array
noises.push('ruff');
// .unshift() to add a new element to the front of the array
noises.unshift('woof');
// bracket[notation] to add element to the end of the array
// access the last position of the array w out hardcoding
noises[noises.length] = 'whine';

// log the length of noises
console.log(noises.length);

// log the last element of noises w out hardcoding
console.log(noises[noises.length-1]);

// log the whole array noises
console.log(noises);
 



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// bracket[notation] assign noises (property) from animal {object} to noises [array]
animal['noises'] = noises;
//.push() a new element to the 'noises' property 
noises.push('growl'); 

// log animal

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects
 *      Dot notation and bracket notation   
 *      Example:
 *              var obj = { name: 'Josh', age: 23 };
 *              console.log(obj.name) // dot.notation // prints==> 'Josh'
 *  
 *              console.log(obj['age']) // bracket[notation] // prints==> 23
 *
 *              *uses key/value pairs*
 *
 * 2. What are the different ways of accessing elements on arrays?
 *      Bracket notation
 *      Example:
 *              var arr = ['Josh', 23];
 *              console.log(arr[0]) // prints==> 'Josh'
 *
 *              *uses zero indexing*
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare var named animals, assign to empty array literal
var animals = [];

// .push() animal {obj} into the animals [array]
animals.push(animal);

// log animals
console.log(animals);

// declare var duck, assin data given
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

//.push() var duck to animals[]
animals.push(duck);

// log animals
console.log(animals);


// declare var for two new animals and assign data to each
var giraffe = { species: 'giraffe', name: 'Jerry', noises: ['grunt', 'snort'] };
var snake = { species: 'reptile', name: 'Sal', noises: ['ssss', 'SSSSS'] };

// .push() both var to animals[]
animals.push(giraffe, snake);

// log animals and length of animals
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Use an array to hold a data structure of friends bc we do not need other properties, only the name of friends in an ordered list

var friends = [];

// write a function named getRandom that takes the animals array and returns a random index 
// use Math.random()

function getRandom (animals) {
    var randomNumber = Math.random() * animals.length; // randomNumber returns a random number between 0 and the length of animals array
    var randomIndex = Math.floor(randomNumber); // randomIndex rounds this randomNumber down to a whole integer
   // using the random index, get a random animal and add its 'name' to 'friends'[] with .push()
   var randomAnimal = animals[randomIndex];
    friends.push(randomAnimal);
    return randomIndex;
}

//log friends
console.log(friends);

// add 'friends' as a property of 'friends' on one of the animals in 'animals'

duck['friends'] = friends;

console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
