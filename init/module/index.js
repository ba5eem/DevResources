

let x = function displayName(name) {
    console.log(name);
  };


function makeFunc() {
  var name = 'Mozilla';
  x(name);
  return x;
}

var myFunc = makeFunc();
myFunc();


