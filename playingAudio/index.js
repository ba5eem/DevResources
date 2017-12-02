console.log("sanity check");



function play(){
  var audio = document.getElementById("audio");
  audio.play();
  setTimeout(playTwo,500);

}

function playTwo(){
  var audio = document.getElementById('audioTwo');
  audio.play();
  setTimeout(playThree,600);
}

function playThree(){
  var audio = document.getElementById('audioThree');
  audio.play();
  setTimeout(playFour,500);
}

function playFour(){
  var audio = document.getElementById('audioFour');
  audio.play();
}

// function singBatman(){
//   return Array(4).join("lol" - 2) + " Batman!";
// }

// function whatdoesitdo() {
// return (![]+[])[+[]]+(![]+[])[+!+[]]+
// ([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]];
// }

// console.log('f',(![]+[])[+[]])
// console.log('a',(![]+[])[+!+[]])
// console.log('i',([![]]+[][[]])[+!+[]+[+[]]])
// console.log('l',(![]+[])[!+[]+!+[]])