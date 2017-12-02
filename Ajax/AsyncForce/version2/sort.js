//jshint esversion: 6

console.log("sanity check-requestSort lives here");

var requestSort  = (function () { 

////////////////////////API LINK REQUEST////////////////////////////////
requestModule.rootRequest('https://swapi.co/api/films/',filmStart);
requestModule.rootRequest('https://swapi.co/api/people/',peopleStart);
requestModule.rootRequest('https://swapi.co/api/planets/',planetStart);
requestModule.rootRequest('https://swapi.co/api/vehicles/',shipStart);

////////////////////////ARRAYS HOLDING DATA////////////////////////////////
let films = [];
let people = [];
let planets = [];
let ships = [];
////////////////////////FUNCTIONS TO LOOK THROUGH DATA////////////////////////////////
function filmStart(rootArray){
    for (var i = 0 ; i < rootArray.length; i++){
      films.push(rootArray[i].title);
    }
}
function peopleStart(rootArray){
  for (var i = 0; i < rootArray.length; i++){ 
    people.push(rootArray[i].name);
  }
  return people;
}
function planetStart(rootArray){
  for (var i = 0; i < rootArray.length; i++){
    planets.push(rootArray[i].name);
  }
  return planets;
}
function shipStart(rootArray){
  for (var i = 0; i < rootArray.length; i++){
    ships.push(rootArray[i].name);
  }
  return ships;
}
////////////////////////FUNCTIONS TO LOOK THROUGH DATA////////////////////////////////
var retrieveFilms = function(){
  return films;
};
var retrievePeople = function(){
  return people;
};
var retrievePlanets = function(){
  return planets;
};
var retrieveShips = function(){
  return ships;
};


return {
    requestSort: requestSort,
    filmStart: filmStart,
    peopleStart: peopleStart,
    planetStart: planetStart,
    shipStart: shipStart,
    films: retrieveFilms,
    people: retrievePeople,
    planets: retrievePlanets,
    ships: retrieveShips

    };

})();