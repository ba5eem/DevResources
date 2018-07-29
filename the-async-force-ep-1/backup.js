////////////////////////rootListener////////////////////////////////
  requestModule.rootRequest();
  requestModule.requestListener();
  requestModule.sortRoot();
function rootListener(){
  var rootCategories = JSON.parse(this.responseText);
  var results = rootCategories.results;
  var filmList = document.getElementById('filmList');
  for (var i = 0; i < results.length; i++){
      var planets = results[i];
      //console.log(planets);
      //console.log(results[i].title);
      if (results[i].climate){
        console.log(results[i].name);

      }





      var title = results[i].title;
      if(title === undefined){
      }else{
        var films = document.createElement('li');
        films.innerHTML = title;
        films.id = title;
        filmList.appendChild(films);
    }
  }
}
////////////////////////rootListener////////////////////////////////






////////////////////////rootListener////////////////////////////////
  requestModule.rootRequest();
  requestModule.requestListener();
  requestModule.sortRoot();
function rootListener(){
  var rootCategories = JSON.parse(this.responseText);
  var results = rootCategories.results;
  var filmList = document.getElementById('filmList');
  for (var i = 0; i < results.length; i++){
      var data = results[i];
      //console.log(planets);
      //console.log(results[i].title);
      if (results[i].episode_id){
        var films = document.createElement('li');
        films.innerHTML = results[i].title;
        films.id = results[i].title;
        filmList.appendChild(films);
      }

  }
}

////////////////////////rootListener////////////////////////////////






console.log("it begins");

////////////////////////open api////////////////////////////////
var rootRequest = new XMLHttpRequest();
rootRequest.addEventListener("load",requestListener);
rootRequest.open("GET","http://swapi.co/api/");
rootRequest.send();
////////////////////////open api////////////////////////////////

////////////////////////requestListener////////////////////////////////
function requestListener(){
  var rootApi = JSON.parse(this.responseText);
  var people = rootApi.people;
  var planets = rootApi.planets;
  var films = rootApi.films;
  var species = rootApi.species;
  var vehicles = rootApi.vehicles;
  var starships = rootApi.starships;
  var rootArray = [people,planets,films,species,vehicles,starships];
  sortRoot(rootArray);
}
////////////////////////requestListener////////////////////////////////

////////////////////////sortRoot////////////////////////////////
function sortRoot(rootArray){
  for (var i = 0; i < rootArray.length; i++){
    rootArr = new XMLHttpRequest();
    rootArr.addEventListener("load",rootListener);
    rootArr.open("GET",rootArray[i]);
    rootArr.send();
  }
}
////////////////////////sortRoot////////////////////////////////

////////////////////////rootListener////////////////////////////////
function rootListener(){
  var rootCategories = JSON.parse(this.responseText);
  var results = rootCategories.results;
    for (var i = 0; i < results.length; i++){
          var people = results[i].characters;
          console.log(people);
            for (var j = 0; j < people.length; j++){
              if(people[j] === "http://swapi.co/api/people/4/"){
                //console.log("darth has arrive");
                //console.log(people[j]);
              }
            }
   

 
    }
}
////////////////////////rootListener////////////////////////////////

////////////////////////person4request////////////////////////////////
  var person4Req = new XMLHttpRequest();
  person4Req.addEventListener("load", person4ReqListener);
  person4Req.open("GET", "http://swapi.co/api/people/4/");
  person4Req.send();

function person4ReqListener(){
  var person4 = JSON.parse(this.responseText);
  var person4Name = person4.name;
  var personFourName = document.getElementById('person4Name').innerHTML = person4Name;
  var person4HW = person4.homeworld;
  var hWorldReq = new XMLHttpRequest();
  hWorldReq.addEventListener("load", person4HomeWorldReqListener);
  hWorldReq.open("GET", person4HW);
  hWorldReq.send();
}
function person4HomeWorldReqListener(){
  var person4HWorld = JSON.parse(this.responseText);
  var person4HomeWorld = person4HWorld.name;
  var personFourWorld = document.getElementById('person4HomeWorld').innerHTML = person4HomeWorld;
}
////////////////////////person4request////////////////////////////////

////////////////////////person14request////////////////////////////////
  var person14Req = new XMLHttpRequest();
  person14Req.addEventListener("load", person14ReqListener);
  person14Req.open("GET", "http://swapi.co/api/people/14/");
  person14Req.send();

function person14ReqListener(){
  var person14 = JSON.parse(this.responseText);
  person14Name.innerHTML = person14.name;
  var person14SpeciesLink = person14.species;
  var species14Req = new XMLHttpRequest();
  species14Req.addEventListener("load", person14Spec);
  species14Req.open("GET", person14SpeciesLink);
  species14Req.send();
}
function person14Spec (){
  var person14Spec = JSON.parse(this.responseText);
  person14Species.innerHTML = person14Spec.name; 
}
////////////////////////person14request////////////////////////////////

////////////////////////buildPerson////////////////////////////////
function buildPersonFour(person4Name,person4HomeWorld){
  var personFourName = document.getElementById('person4Name').innerHTML = person4Name;
  var personFourTeenName = document.getElementById('person14Name').innerHTML = "not yet";
}



//console.log("it begins");
  var person4Section = document.getElementById('person4');
  var person4Name = document.getElementById('person4Name');
  var person4HomeWorld = document.getElementById('person4HomeWorld');
//person 4
function person4ReqListener () {
  var person4 = JSON.parse(this.responseText);
  //console.log(person4);
  person4Name.innerHTML = person4.name;
  var person4HW = person4.homeworld;
  //console.log(person4HW);

  var hWorldReq = new XMLHttpRequest();
  hWorldReq.addEventListener("load", homeWorldReqListener);
  hWorldReq.open("GET", person4HW);
  hWorldReq.send();
}

  var person4Req = new XMLHttpRequest();
  person4Req.addEventListener("load", person4ReqListener);
  person4Req.open("GET", "http://swapi.co/api/people/4/");
  person4Req.send();

function homeWorldReqListener(){
  var person4HWorld = JSON.parse(this.responseText);
  //console.log(person4HWorld.name);
  person4HomeWorld.innerHTML = person4HWorld.name;
}//person 4 ends

//person 14 begins
  var person14Name = document.getElementById('person14Name');
  var person14Species = document.getElementById('person14Species');

function person14ReqListener () {
  var person14 = JSON.parse(this.responseText);
  //console.log(person14);
  person14Name.innerHTML = person14.name;
  var person14SpeciesLink = person14.species;

  var species14Req = new XMLHttpRequest();
  species14Req.addEventListener("load", person14Spec);
  species14Req.open("GET", person14SpeciesLink);
  species14Req.send();
}
function person14Spec (){
  var person14Spec = JSON.parse(this.responseText);
  //console.log(person14Spec.name);
  person14Species.innerHTML = person14Spec.name; 
}
  var person14Req = new XMLHttpRequest();
  person14Req.addEventListener("load", person14ReqListener);
  person14Req.open("GET", "http://swapi.co/api/people/14/");
  person14Req.send();
//person 14 ends

 

//film code begins here:
function filmsReqListener (){
  var filmList = JSON.parse(this.responseText);
  //combinePlanetsToFilms(filmList);
  var filmListArray = filmList.results;
  var filmListElem = document.getElementById('filmList');
  var liElem = document.createElement('li');
  liElem.className = "film";
  filmListElem.appendChild(liElem);
  for(var j = 0; j < filmListArray.length; j++){
     var filmTitle = document.createElement("li");
     filmTitle.innerHTML = filmListArray[j].title;
     filmTitle.id = filmListArray[j].title;
     var titles = filmListArray[j].title;
     liElem.appendChild(filmTitle);
      for(var k = 0; k < filmListArray[j].planets.length; k++){
        oReq6 = new XMLHttpRequest();
        oReq6.addEventListener("load", planetReqListener);
        oReq6.open("GET", filmListArray[j].planets[k]);
        oReq6.send();
      }
    }

}
//calls film link for filmReqListener
  var filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load",filmsReqListener);
  filmReq.open("GET","http://swapi.co/api/films/");
  filmReq.send();


//planet request code:
function planetReqListener(){
  var filmListElem = document.getElementById('filmList');
  var planets = JSON.parse(this.responseText);
  var planetNames = planets.name;

  // console.log(planets);
  // console.log(planetNames);
}

// function combinePlanetsToFilms(planets){
//     var world = planets.name;
//     console.log(world);

//     var filmListElem = document.getElementById('filmList');
//     var newHope = document.getElementById('A New Hope');
//     var newHopeLiElem = document.createElement('li');
//     newHopeLiElem.className = "movie";
//     filmListElem.appendChild(newHopeLiElem);

//     for(var j = 0; j < world.length; j++){
//       var filmPlanet = document.createElement("li");
//       filmPlanet.innerHTML = world;
//       filmPlanet.id = world;
//       if(world === "Alderaan"){
//         newHopeLiElem.appendChild(filmPlanet);
//     }else{

//     }filmListElem.appendChild(filmPlanet);

// }

//  // var liElem = document.createElement('li');
//  //  liElem.className = "film";
//  //  filmListElem.appendChild(liElem);

// // var filmListArray = planets.names;

// //   for(var j = 0; j < filmListArray.length; j++){
// //      var filmTitle = document.createElement("li");
// //      filmTitle.innerHTML = filmListArray[j].title;
// //      filmTitle.id = filmListArray[j].title;
// //      var titles = filmListArray[j].title;
// //      liElem.appendChild(filmTitle);
// //       for(var k = 0; k < filmListArray[j].planets.length; k++){
// //         oReq6 = new XMLHttpRequest();
// //         oReq6.addEventListener("load", planetReqListener);
// //         oReq6.open("GET", filmListArray[j].planets[k]);
// //         oReq6.send();
// //       }
// //     }

// }




