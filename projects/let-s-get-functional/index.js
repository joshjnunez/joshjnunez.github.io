// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-joshjnunez');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // console.log(array); log array to see what values are inside of it.
    // call filter()
 let males = _.filter(array,function(person){ 
     return person.gender === 'male';
});
   return males.length;

};

var femaleCount = function(array) {
    let females = _.filter(array,function(person){
        return person.gender === 'female';
    });
    return females.length;
};

var oldestCustomer = function (array) {
  
  var nameArray = _.pluck(array, 'name');
  var ageArray = _.pluck(array, 'age');
  
  var oldestAge = Math.max(...ageArray);
  
  for (let i = 0; i < nameArray.length; i++) {
      if(oldestAge === ageArray[i]) {
          return nameArray[i];
      }
  }
  

};
  
//   var oldestPerson = array[0];
  
//   for (let i = 0; i < array.length; i++) {
//       if(oldestPerson.age < array[i].age) {
//           oldestPerson = array[i];
//       }
     
//   }
//      return oldestPerson.name;
  
// }; 
    // console.log(array);
// var ageArr = []; // create an empty array to store all ages
// for(let i = 0; i < array.length; i++){ //loop through array and use bracket/dot notation to find the age values
//   var ageOf = array[i].age;
//       ageArr.push(ageOf); // push ages into new array
//       var maxAge = Math.max(ageArr); // use math.max function to find largest value in the array
      
//   }
//   for(let i = 0; i < array.length; i++){ // loop through array 
//   if (array[i].age === maxAge) {
//     // if age is equal to max age,
//     // console.log(maxAge);
//     var nameOf = array[i].name;
//     return nameOf; // return name;
//   }
  
//   }
    
    
    
    
// };

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
