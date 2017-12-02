/*Javascript Code Below*/

/*DOM Color Change for color choice boxes /including var declaration to use late / including addition of event listeners*/
document.getElementById("b1").style.backgroundColor = 'green';

var box1 = document.getElementById('b1').style.backgroundColor;

document.getElementById("b2").style.backgroundColor = "yellow";
var box2 = document.getElementById('b2').style.backgroundColor;

document.getElementById("b3").style.backgroundColor = "blue";
var box3 = document.getElementById('b3').style.backgroundColor;

document.getElementById("b4").style.backgroundColor = "orange";
var box4 = document.getElementById('b4').style.backgroundColor;

document.getElementById("b5").style.backgroundColor = "red";
var box5 = document.getElementById('b5').style.backgroundColor;

document.getElementById("b6").style.backgroundColor = "purple";
var box6 = document.getElementById('b6').style.backgroundColor;

document.getElementById("b7").style.backgroundColor = "teal";
var box7 = document.getElementById('b7').style.backgroundColor;

document.getElementById("b8").style.backgroundColor = "magenta";
var box8 = document.getElementById('b8').style.backgroundColor;

/*DOM Color Change for color choice boxes*/


/*For loop to create 1500 Div's*/
function createDiv(numberOfDivs){//numberOfDivs is a place-holder for run the function enter in any number
  var i = 0; //Sets to - could be in the for loop
  var newElement = [];
  var mainContainer = document.getElementById('main');


  for (i; i < numberOfDivs; i++) {
    newElement[i] = document.createElement('div');
    /*newElement[i].style.backgroundColor = 'black';*/ /*Removed this color setting in the loop so that it would not be overwritten by the for loop over and over*/
/*    newElement[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); - this is commented out - because it create random colors for the boxes - however at this time i need them to be all black - maybe in code at a later time i can do something cool with this.*/
   newElement[i].className = 'box';//class name set here for CSS coding.
    //newElement[i].id = ("a" + i);// each element has its own id to be manipulated later for selective coloring.
    // /*newElement[i].onClick = "changeColor"; */adding an event listener didnt work in the for loop :)
//  newElement[i].textContent = 'this is div number: ' + (i + 1);

   mainContainer.appendChild(newElement[i]);
    newElement[i].addEventListener("mouseover",changeColor);
    //This totally worked! it added an event listenere to each one. 
    //newElement[i].style.backgroundColor = 'red';

  }

}

createDiv(1500);



/*End of for loop that created 1500 divs - commented out the random color for each box - all boxes now black.*/



//Function refreshes page - like a clear all
function reLoad() {
    location.reload();
}

//Lets create function just to set a variable based of the click


//Attempt # 8 - Using HTML to create the divs - so Im not stuck in a for loop. - Failed

//First step add event listeners to each box.
/*function colorChoice(){
elements = document.querySelectorAll('box');
elements.style.backgroundColor = 'green';
elements.addEventListener('click',changeColor);
}

colorChoice();

function changeColor(x) {}*/






/*//Attempt 7 - failed - nothing happend
var x = document.getElementsByClassName('box');
function setColorChoice() {  


x.style.backgroundColor=box1;}//inspector -said this was undefined.*/






//Attempt #6 - pending additional data



//Thoughts - 1. Create click events on each color pallete
//2. After the click the color becomes the color that is used when painting. 3. To do this my theory is to create an if statement within a function run when clicked. So it goes if clicked, color is active to paint. So I need to connect it to the black boxes. which mean it needs to see the class='box'.





/*//Attempt #5 - failed - my thought was each box choice color could have a function that would run - and in turn supply info to the next function.

function changeBox1(x){
  elements = document.getElementsByClassName('box');
  for (var i = 0; i <elements.length; i++){
    var boxC1 = this.style.backgroundColor = box1;
  }
}*/






/*//Attempt #4 - failed 
function changeColor(x) {
    elements = document.getElementsByClassName('box');
    for (var i = 0; i < elements.length; i++) {
        if (box1.clicked == true) {
        this.style.backgroundColor = box1;
    } 
        else if (box2.clicked == true) {
        this.style.backgroundColor = box2;

  }

}
}*/




//Holy mother of god! this one works!!!! All I had to do was change 'elements[i]' to 'this'- what this(pun intended) did was make the one actually clicked change only. 






//Attempt #3 - Successful!!!!! - this is a working copy - so i can edit the other code to make the if/esle code.
function changeColor(x) {
    elements = document.getElementsByClassName('box');
    for (var i = 0; i < elements.length; i++) {
        this.style.backgroundColor='#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}
//Holy mother of god! this one works!!!! All I had to do was change 'elements[i]' to 'this'- what this did was make the one actually clicked change only. 


// Failed attempt #1
/*function changeColor(x) {
    elements = document.getElementsByClassName('box');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="blue";
    }
}
//When using a for loop - after click - every changes over to blue with this code. - so it works because it changes, but it doesnt work to do what i want. 
*/

//Failed attempt #2
/*function changeColor(){
  document.getElementById('a1').style.background = "red";
}*/
//This works - i got it to work for one box so far - I need to figure out how to target the whole class, because it be a lot of work to do this for each id. 






