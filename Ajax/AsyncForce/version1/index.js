
var request = require('request');
var guess;
function run(){
var postData = {
  username: 'NanananNAnananANAnanANANANNanananANAN BATMAN',
  video_id: '_OBlgSz8sSM',
  guess: Math.floor(Math.random() * (2000 - 1)) + 1
};

var url = 'http://10.0.1.133:8081/bouncer'
var options = {
  method: 'post',
  body: postData,
  json: true,
  url: url
}
request(options, function (err, res, body) {
  if (err) {
    console.error('error posting json: ', err)
    throw err
  }
  var headers = res.headers
  var statusCode = res.statusCode
  console.log('body: ', body.message)
});
}


var i;
for(i = 1;i < 2000;i++){
  run()
    }

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
      var id = results[i].episode_id;
      var climate = results[i].climate;
      var arr = [];



      if (id){
        if(results[i]){
          console.log(results[i].planets);
          arr.push(results[i]);
          console.log(arr);

          
        }

      // console.log(results[i]);

      }
      if (climate){
        var climateFilms = results[i].films;
        //console.log(climateFilms);

      }
      // if(climateFilms === idUrl){
      //   //console.log(results[i]);
      // }







  }
}

////////////////////////rootListener////////////////////////////////



//save for later
      // if (results[i].episode_id){
      //   var films = document.createElement('li');
      //   films.innerHTML = results[i].title;
      //   films.id = results[i].title;
      //   filmList.appendChild(films);
      // }
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








