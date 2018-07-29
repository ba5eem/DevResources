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