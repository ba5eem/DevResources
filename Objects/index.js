//jshint esversion: 6
  var id = "001";
  var heroArr = [{
              id: "001",
              name: 'Bruce',
              lastname: 'Wayne',
              alias: 'Batman',
              job: 'Billionaire Playboy',
              car: 'Bat Mobile',
              city: 'Gotham',
              age: 38,
              nemisis: 'Superman' },{
              id: "002",
              name: 'Bruce',
              lastname: 'Wayne',
              alias: 'Batman',
              job: 'Billionaire Playboy',
              car: 'Bat Mobile',
              city: 'Gotham',
              age: 38,
              nemisis: 'Superman' }];
  var heroObj = {
              id: "002",
              name: 'Bruce',
              lastname: 'Wayne',
              alias: 'Batman',
              job: 'Billionaire Playboy',
              car: 'Bat Mobile',
              city: 'Gotham',
              age: 38,
              nemisis: 'Superman' };


console.log("*******filterMethod********");

function filterById(item){
  if(item.id === id){ return true; }
}
var arrById = heroArr.filter(filterById);
console.log('Filtered Array - returned the only object that matched the id; ', arrById);
console.log("*******findMethod********");
function findHero(hero){
  return hero.id === "001";
}
console.log("this find hero func, returns the obj that matches my condition, so it returned just the object that matched id = 001");
console.log("findHero: ",heroArr.find(findHero));
console.log("Hero Variable: ", heroArr, " view of array holding object");
console.log("Hero Variable of object in array: ", heroArr[0]);


console.log("*******mapMethod********");
var mapMethod = new Map(Object.entries(heroObj));
console.log("Map Method: ", mapMethod);
console.log("Map method to find keys of object: ", mapMethod.keys());
console.log("Map method to find values of object: ", mapMethod.values());
console.log("Map Method to change value of key: ",mapMethod.set("name", "Baseem"));
console.log("------The above key, value set method with map did not work on object within array, only on the object itself-but super cool");
for (var [key,value] of mapMethod){
  console.log(key + ' = ' + value);
}
mapMethod.forEach(function(value,key){
  console.log(key + ' = ' + value);
});
console.log("*******entriesMethod********");
var entriesMethod = Object.entries(heroObj);
console.log("Splits them all into pair arrays: ",entriesMethod);
console.log("I can look at the specific key, test if true: ",entriesMethod[0][0] === "id");
Object.entries(heroObj).forEach(([key, value]) => {
console.log(`${key} ${value}`); 
});

console.log("*******forEachMethod********");
var copy = [];
heroArr.forEach(function(elem){
  console.log("This had to be the easiet way to get the value of key in the obj within array: ",elem.id);
  copy.push(elem);
  console.log(copy);
});
heroArr.forEach(function(elem){
  if(elem.name === "Bruce"){
    console.log("Match Found - this is with forEach Method " + elem.name + " === " + "Bruce");
  }
});

console.log("*******hasOwnPropertyMethod********");
var hasOwn = heroObj.hasOwnProperty("alias");
console.log("hasOwnProperty returned a boolean based on tested key, worked with obj not array holding obj: ", hasOwn);

console.log("*******find keys of objects********");
var test = heroArr.map((x) => {
  return Object.keys(x); //here its the keys in the respective arrays
}).reduce((prev,curr) => {
  return prev.concat(curr); // at this point output is all keys in one array
}).filter((key, i, heroArr) => {//filter takes all the keys and only returns one of each diffferent type
  return heroArr.indexOf(key) === i;
});
// heroArr could be change to array or other name
// the letter x and key could be anything
console.log(test); //fucking incredible
console.log("*******Sorts array and puts to lowercase********");
//didnt work for object within array
//didnt work for an object
//only for arrays
var sorted = atrr.map(function(value) {
    return value.toLowerCase();
}).sort();

console.log(sorted);


console.log("*******Sorts array and puts to lowercase********");
//include method will return true or false, if the predicate is found with the array
var arr = ["a", "b", "c", "d", "e", "f", "Bruce", "h", "t", -1, 1, 2, 2, 5, 23, 56];
console.log(arr.includes('Bruce'));
//wordked for an integer as well
console.log(arr.includes(2));


///for email hell challenge - answer key from Jesse:
const logScanner = require('./scan');


logScanner.process('email.json', findEmailCounts);

function findEmailCounts(logs) {
  if (!(logs && logs.emails)) {
    console.log('Error: Invalid email list');
  }

  const emails = logs.emails;

  const counts = emails.reduce((prev, item) => {
    if (prev[item.email]) {
      prev[item.email]++;
    } else {
      prev[item.email] = 1;
    }

    return prev;
  }, {});

  console.log(counts);
  return counts;
}


const fs = require('fs');

module.exports = {
  process: process
};

let logs;

function process(filename, cb) {
  if (!filename) {
    console.log('Error: Filename required');
    return false;
  }
  fs.readFile(filename, function (err, data) {
    if (err) {
      console.log(`Error: ${err.message}`);
      return false;
    }
    logs = JSON.parse(data);
    console.log('Success:  data loaded');

    return cb(logs);
  });
}









