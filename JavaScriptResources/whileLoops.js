//while loops

/*If you do not know how many times the code should run, using a while loop can help. Your code in the while loop will continue to run for as long as the condition is true.*/


//example:

/*var i = 5;

while (i<10){ 
  console.log(i + " is next in line.");
}*/

//this while loop will continue to run since 5 will always meet the condition inside of the while loop ( 5 < 10);

//Let's practice using some while loops.


/*1. Use a while loop and print out a list of numbers from 1 to 10*/

var i = 0;
while(i < 10){
  i++;
  console.log(i);
}


/*2. Use a while loop to create the following message:

"Now serving 1."
"Now serving 2."
...
...
...
"Now serving 11"*/

var i = 0;
while(i<11){
  i++;
  console.log("Now serving " + i);
}


/*3. Use a while loop to loop through the tvShows array and print out the following:

"I like to binge watch Breakig Bad."
"I like to binge watch Game of Thrones."
"I like to binge watch The Bachelor."
"I like to binge watch The Walking Dead."
"I like to binge watch Keeping up with the Kardasians."*/

var tvShows = ["Breaking Bad", "Game of Thrones", "The Bachelor", "The Walking Dead", "Keeping Up with the Kardasians"];

var i = 0;
while(tvShows[i]){
  console.log("I like to binge watch " + tvShows[i] + ".");
  i++;
}


/*4. Generate a multiplication table for the number 3 and print out the following:

1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
...
...
...
9 x 3 = 27

*/

var i = 0;
while (i<9){
  i++;
  console.log(i + " x " + " 3 " + " = " + (i * 3));
}




/*5. Multiples of 3 and 5. Create a while loop that will loop through 100 numbers. Your job is to program the following:

 a) if the number is a multiple of 3, it should print "dev"
 b) if the number is a multiple of 5, it should print "league"
 c) if the number is a multiple of 3 and 5, it should print "devleague homie!"
 d) if the number is neither a multiple of 3 and 5, it should print the number

the print out should look like this:
1
2
dev
4
league
dev
7
8
dev
league
11
dev
13
14
devleague homie!
...
...
...*/


var number = 0;
var counter = 0;

while(counter < 100){
  number++;
  counter++;
  if(number % 3 === 0 && number % 5=== 0){
    console.log("devleague homie!");
  }else if (number % 3 === 0){
    console.log("dev");
  }else if(number % 5 === 0){
    console.log("league");
  }else{
    console.log(number);
  }
}


