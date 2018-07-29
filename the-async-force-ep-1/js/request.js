 var requestModule  = (function () { 
////////////////////////open api////////////////////////////////
function rootRequest(){
  var rootRequest = new XMLHttpRequest();
  rootRequest.addEventListener("load",requestListener);
  rootRequest.open("GET","http://swapi.co/api/");
  rootRequest.send();
}
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
   return {
    rootRequest: rootRequest,
    requestListener: requestListener,
    sortRoot:sortRoot,
    };

})();