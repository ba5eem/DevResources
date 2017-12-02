//jshint esversion: 6
var box = document.getElementById('box');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var lineA = document.getElementById('lineA');


a.style.left = "25%";
a.style.top = "25%";


b.style.left = "25%";
b.style.top = "25%";


c.style.left = "25%";
c.style.top = "25%";


d.style.left = "25%";
d.style.top = "25%";

e.style.left = "25%";
e.style.top = "25%";

f.style.left = "25%";
f.style.top = "25%";

g.style.left = "25%";
g.style.top = "25%";

h.style.left = "25%";
h.style.top = "25%";


box.addEventListener('click', action);

function action(){
  console.log("fired");
  a.style.left = "50%";
  a.style.transition = "all 2s ease-in-out"
  lineA.style.height = "200px";
  lineA.style.transition = "all 3s ease-in-out"

  b.style.left = "0%";
  b.style.transition = "all 2s ease-in-out"

  c.style.top = "0%";
  c.style.transition = "all 2s ease-in-out"

  d.style.top = "50%";
  d.style.transition = "all 2s ease-in-out"

  e.style.left = "8%"


  e.style.top = "6%"
  e.style.transition = "all 2s ease-in-out"

  f.style.left = "42%"
  f.style.transition = "all 2s ease-in-out"

  f.style.top = "6%"
  f.style.transition = "all 2s ease-in-out"

  g.style.left = "42%"
  g.style.transition = "all 2s ease-in-out"

  g.style.top = "43%"
  g.style.transition = "all 2s ease-in-out"

  h.style.left = "8%"
  h.style.transition = "all 2s ease-in-out"

  h.style.top = "43%"
  h.style.transition = "all 2s ease-in-out"

  box.style.borderRadius = "100%"
  box.style.transition = "all 2s ease-in-out"


}


























// var x_pos = 0;
// var y_pos = 0;


// function boxClick(){
//   console.log(event.clientX);
//   console.log(event.clientY);
//   x_pos = event.clientX + 200;
//   y_pos = event.clientY + 200;
  
//   box.style.left = x_pos+'px';
//   box.style.top = y_pos+'px';
// }







