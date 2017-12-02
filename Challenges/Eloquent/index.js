// Eloquent Challenges:


//Chapter 2 -

//Looping a Triangle
//My attempt - Success
var hashtag = ["#", "##", "###", "####", "#####","######","#######"];

for(var i = 0; i<hashtag.length; i++){
  console.log(hashtag[i]);
}
//Solution
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//Fizzbuzz
//My Attempt - Success
for(var i = 0; i<=100; i++){
  if (i % 3 === 0){
    console.log([i] + " Fizz");
  }
  else if (i % 5 === 0){
    console.log([i] + " Buzz");
  }
  else {
    console.log([i] + " FizzBuzz");
  }
}
//Solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

//Chessboard
//My attempt - couldnt even begin :(


//Solution
var size = 14;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

/*Good example of mathemitical equation using recursion: Consider this puzzle: by starting from the number 1 and repeatedly
either adding 5 or multiplying by 3, an infinite amount of new numbers
can be produced. How would you write a function that, given a number,
tries to find a sequence of such additions and multiplications that
produce that number? For example, the number 13 could be reached
by first multiplying by 3 and then adding 5 twice, whereas the number
15 cannot be reached at all.
Here is a recursive solution:*/

function findSolution ( target ) {
function find ( current , history ) {
if ( current == target )
return history ;
else if ( current > target )
return null ;
else
return find ( current + 5 , "(" + history + " + 5) ") ||
find ( current * 3 , "(" + history + " * 3) ") ;
}
return find (1 , "1") ;
}
console . log ( findSolution (24) ) ;
// → (((1 * 3) + 5) * 3)

//This is an example of creating a function that saves times within another function - so it can be re-used based off the requester. 1st is big version:

function printZeroPaddedWithLabel ( number , label ) {
var numberString = String ( number ) ;
while ( numberString . length < 3)
numberString = "0" + numberString ;
console . log ( numberString + " " + label ) ;
}
function printFarmInventory ( cows , chickens , pigs ) {
printZeroPaddedWithLabel ( cows , " Cows ") ;
printZeroPaddedWithLabel ( chickens , " Chickens ") ;
printZeroPaddedWithLabel ( pigs , " Pigs ") ;
}
printFarmInventory (7 , 11 , 3) ;

//Smaller more compact version: 

function zeroPad ( number , width ) {
var string = String ( number ) ;
while ( string . length < width )
string = "0" + string ;
return string ;
}
function printFarmInventory ( cows , chickens , pigs ) {
console . log ( zeroPad ( cows , 3) + " Cows ") ;
console . log ( zeroPad ( chickens , 3) + " Chickens ") ;
console . log ( zeroPad ( pigs , 3) + " Pigs ") ;
}
printFarmInventory (7 , 16 , 3) ;


//Home to DO:

/*Exercises
1.
Minimum
The previous chapter introduced the standard function Math.min that
returns its smallest argument. We can do that ourselves now. Write a
function min that takes two arguments and returns their minimum.
2.
Recursion
We’ve seen that % (the remainder operator) can be used to test whether
a number is even or odd by using % 2 to check whether it’s divisible by
two. Here’s another way to define whether a positive whole number is
even or odd:
82
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?
3.
Bean counting
You can get the Nth character, or letter, from a string by writing "
string".charAt(N), similar to how you get its length with "s".length. The
returned value will be a string containing only one character (for example,
"b"). The first character has position zero, which causes the last one
to be found at position string.length - 1. In other words, a two-character
string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
are in the string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be
counted (rather than counting only uppercase “B” characters). Rewrite
countBs to make use of this new function.*/




