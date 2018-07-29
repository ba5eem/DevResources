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

