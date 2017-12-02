
//Event listeners added to all themes:
school = document.getElementById('schoolButton');
school.addEventListener('click',schoolFunction);

work = document.getElementById('workButton');
work.addEventListener('click',workFunction);

life = document.getElementById('lifeButton');
life.addEventListener('click',lifeFunction);

relationship = document.getElementById('relationshipButton');
relationship.addEventListener('click',relationshipFunction);

social = document.getElementById('socialButton');
social.addEventListener('click',socialFunction);

exercise = document.getElementById('exerciseButton');
exercise.addEventListener('click',exerciseFunction);

random = document.getElementById('randomButton');
random.addEventListener('click',randomFunction);

food = document.getElementById('foodButton');
food.addEventListener('click',foodFunction);
//End of eventlisteners been added to themes


//Arrays with possible answers to be displayed - max character count is #113
var school =["Do your homework!","Tell your teach the dog at your homework","You get an A for thinking about it","Do it later, watch Netflix!","How many degrees do you want?!","Yes", "No", "Maybe"];

var work = ["Tell your boss you need a rest day","Stay home and watch Netflix","Your the best! Keep working hard","What would they do without you","You deserve a raise!","Yes", "No", "Maybe"];

var life =["Pause and live in the moment","Be more spontatenous!","Your life is going so well, you deserve that extra piece of cake","If there was ever a time, it is now","Yes", "No", "Maybe"];

var relationship =["Single life is the best","Probably time to think about Tinder","Your loved and dont forget that","Today you will receive something special","Your always right!","Yes", "No", "Maybe"];

var social =["Call your best friend","Maybe skip Facebook for a day","No matter how many likes you get, people care about you","Go out tonight and dance the night away","Its possible your are the greatest friend ever","Yes", "No", "Maybe"];

var exercise =["Take a rest day","Your stronger than you think!","Leg day=icecream day","Sitting on the couch doesnt count","Workout extra hard today!","Yes", "No", "Maybe"];

var random =["Its time you know","Go somewhere new today","Goal of the day: Relax","Read a book","Learn to cook something new","Yes", "No", "Maybe"];

var food =["Order delivery","Its Pizza Night!","Eat a Salad","Skip it","Cereal is a great choice","Yes", "No", "Maybe"];
//End of Arrays to answer selected theme.


//Okay so I now know the individual functions work - but now my goal is to see if i can create a for loop in one function using if/else statements to condense it all in one function. actually i dont need a for loop - just if/else statements within one function.  - i cant figure out how to create and if else coniditon based off click event - asked Nao for help will revisit later.
/*
function oneFunction(){
  if (schoolButton == true){
      var rand = school[Math.floor(Math.random() * school.length)];
      schoolMessage = document.getElementById('randomMessage');
      schoolMessage.innerHTML = rand; 
  }
}
*/




//Functions to loop through possible answers per theme selected:
function schoolFunction(){
  var rand = school[Math.floor(Math.random() * school.length)];
  schoolMessage = document.getElementById('randomMessage');
  schoolMessage.innerHTML = rand;

}

function workFunction(){
  var rand = work[Math.floor(Math.random() * work.length)];
  workMessage = document.getElementById('randomMessage');
  workMessage.innerHTML = rand;

}

function lifeFunction(){
  var rand = life[Math.floor(Math.random() * life.length)];
  lifeMessage = document.getElementById('randomMessage');
  lifeMessage.innerHTML = rand;

}

function relationshipFunction(){
  var rand = relationship[Math.floor(Math.random() * relationship.length)];
  relationshipMessage = document.getElementById('randomMessage');
  relationshipMessage.innerHTML = rand;

}

function socialFunction(){
  var rand = social[Math.floor(Math.random() * social.length)];
  socialMessage = document.getElementById('randomMessage');
  socialMessage.innerHTML = rand;

}

function exerciseFunction(){
  var rand = exercise[Math.floor(Math.random() * exercise.length)];
  exerciseMessage = document.getElementById('randomMessage');
  exerciseMessage.innerHTML = rand;

}

function randomFunction(){
  var rand = random[Math.floor(Math.random() * random.length)];
  randomMessage = document.getElementById('randomMessage');
  randomMessage.innerHTML = rand;

}

function foodFunction(){
  var rand = food[Math.floor(Math.random() * food.length)];
  foodMessage = document.getElementById('randomMessage');
  foodMessage.innerHTML = rand;

}
//End of functions for selected themes

