/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.
let box = document.getElementById('box');
let heading = document.getElementById('heading');

let onSwitch = document.getElementById('on');
let offSwitch = document.getElementById('off');


onSwitch.addEventListener('click', turnOn);
offSwitch.addEventListener('click', turnOff);





var timer;

function turnOn(){
  return timer = setInterval(function(){
      let randomNum = Math.floor(Math.random() * 37);
      if(randomNum % 3 === 0){
        box.style.backgroundColor = 'green';
      }
      else if(randomNum % 2 === 0){
        box.style.backgroundColor = 'red';
      }
    },200);
}

function turnOff(){
  clearInterval(timer);
}

