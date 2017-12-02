//jshint esversion: 6

console.log("sanity check-autofill lives here");

var filmAuto  = (function () { 

////////////////////////AUTO FILL////////////////////////////////
var input = document.getElementById('username');
input.addEventListener('keyup', autoFill);

var searchStrings = ['a new hope', 'force awakens', 'attack of the clones', 'revenge of the sith', 'return of the jedi','empire strikes back','phantom menace'];

function filterItems(query) {
  return searchStrings.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}
////////////////////////AUTO FILL////////////////////////////////
function autoFill(e){
  let input = document.getElementById('username').value.toLowerCase();
  let requirement = (e.which === 32);
    if(requirement){
      let id = document.getElementById('username').value = filterItems(input);
  }
  
}
////////////////////////AUTO FILL////////////////////////////////


return {
    filmAuto: filmAuto,

    };

})();

