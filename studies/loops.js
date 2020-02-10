/*
    LOOPS
        - Loops allow you to run the same code over and over again with a 
            different value
    
The For Loop:
The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.


The For/In Loop:
The JavaScript for/in statement loops through the properties of an object.
Syntax
for(x in object) {
    *code block
};
    
The While Loop
The while loop loops through a block of code as long as a specified
condition is true.

Syntax
while (condition) {
  // code block to be executed
}
    
    

*/

//Examples: 

 ///Using a for-loop to console.log the numbers 1-5 in reverse 
//start: 5
//stop: 0

for(var i = 5; i >= 0; i--){
   console.log(i);
 }
 
 // prints ==> 5 4 3 2 1 0
 
 //Using for loop to loop through an array
 //start: 0
//stop: end of array
    //use bracket notation to access 
    //and dot.length to determine end of array

 var colors = ["red","orange","yellow","green","blue"];

 for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
 }
 
 //prints ==> red, orange, yellow, green, blue
 
 
 //Using a for- in loop to loop through an object
 
  var myObject = {};

 myObject.name = "Josh";
 myObject.city = "Mandeville";
 myObject.favFood = "Tacos";

console.log(myObject);

// //Now create a for-in loop and print to the console all the keys and all 
//  values from your object

 for (var key in myObject) {
   console.log(key);
  console.log(myObject[key]);
}
/*
prints ==> 
name
Josh
city
Mandeville
favFood
Tacos
*/