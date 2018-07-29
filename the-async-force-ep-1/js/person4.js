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
