let button = document.getElementById('button');
let buttonA = document.getElementById('buttonA');
let buttonB = document.getElementById('buttonB');



button.addEventListener('click', changeColors);
buttonA.addEventListener('dblclick', onDoubleClick);
buttonB.addEventListener('mousedown', onMouseDown);
buttonC.addEventListener('mouseup', onMouseUp);

function changeColors(){
  button.style.backgroundColor = getRandomColor();
}

function onDoubleClick(){
  buttonA.innerHTML = 'YOU DOUBLED IT!'
}

function onMouseDown(){
  buttonB.style.width = '300px';
}

function onMouseUp(){
  buttonC.style.width = '400px';
}

























function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
