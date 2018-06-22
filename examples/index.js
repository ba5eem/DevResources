// EVENTS example for ON/OFF
var button = document.getElementById('PUSH');
var box = document.getElementById('box');
button.innerHTML = "PUSH ME";

button.addEventListener('click', changeColor);
box.style.backgroundColor = 'red';

function changeColor(){
  box.style.backgroundColor = ['red', 'blue'].filter(elem => {
    return elem !== box.style.backgroundColor;
  });
};

