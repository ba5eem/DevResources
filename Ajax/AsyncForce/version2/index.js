//jshint esversion: 6
console.log("sanity check-requestListener lives here");

////////////////////////Data Variables////////////////////////////////
var films = requestSort.films();
var people = requestSort.people();
var planets = requestSort.planets();
var ships = requestSort.ships();
////////////////////////Element Variables////////////////////////////////
var title = document.createElement('h1'); title.id = 'title';
var name = document.createElement('h2'); name.id = 'name';
var geo = document.createElement('h3'); geo.id = 'geo';
var car = document.createElement('h4'); car.id = 'car';
var body = document.getElementById('b');
var id = document.getElementById('username').value;
var search = document.getElementById('login');

////////////////////////Element Variables////////////////////////////////

  title.innerHTML = films;
  body.appendChild(title);







////////////////////////CSS CHANGE ON CLICK EVENT////////////////////////////////
var test = document.getElementById('login');
var a = document.getElementById('a');
var b = document.getElementById('c');
var chatb = document.getElementById('chatc');
test.addEventListener('click', ()=>{
  a.id = 'c';
  b.id = 'b';
  b.innerHTML = "Welcome to Chohort 19 Chat";
  chatb.id = 'chatb'; 
});