
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a for loop within the function to loop through a triangle

function triangles(number) {
  for (var i = '#'; i.length <= number; i = i + '#') {
   console.log(i);
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a for loop that begins at start and ends at end. 
//create an if else statement within the code block of the for loop and set it's parameters that pass number that's divisible by 3, 5, or 15
function fizzBuzz(start, end) {
  for (var i = start; i <= end; i++) {
  if ( i % 3 !== 0 && i % 5 !== 0) {
    console.log(i);
  } else if (i % 3 === 0 && i % 5 !== 0) {
    console.log('fizz'); 
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('buzz');
  } else if (i % 15 === 0) {
    console.log( 'fizzbuzz');
  }
    
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
// declare a var for chessboard string
var board = '';

//for loop to create the row
  // nested for loop to create col
    // conditional statement testing row + col % 2 === 0
      // add space to the board
      // else add # to the board
    // when row finishes, add line break \n
    
  // console.log()
  
for(var row = 0 ; row < number; row++) {
 for( var col = 0; col < number; col++) {
   if ((row + col) % 2 === 0) {
     board += ' ';
   } else {
     board += '#';
   }
 }
 board += '\n';
 
}
console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
