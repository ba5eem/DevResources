//jshint esversion: 6

var dataset = require('./dataset.json');
var tajid = require('adawat/tajid');

let data = dataset.emails;

var test = data.map((x) => {
  return Object.keys(x)//here its the keys in the respective arrays
}).filter((key, i, data) => {//filter takes all the keys and only returns one of each diffferent type
  return data.indexOf(key) === i
});

console.log(test);



// var multiple = {};
// var hasDuplicates = data.some(function (obj) {
//     return multiple.hasOwnProperty(obj.email) || (multiple[obj.email] = false);
// });

// for (var i in multiple){
//   let result = tajid(data,'email', i);
//   //console.log("Duplicates found: ", result);
//   console.log(i + " received " + result.length + " duplicate emails");
// }

// for (var i in data){
//   let val = data[i].email;
//   let result = tajid(data,'email', val);
//   // if(result.length < 2){
//   //   resultArr.push(data[i].email + " received " + result.length + " duplicate email(s)");
//   // }else if(result.length < 10){
//   //   resultArr.push(data[i].email + " received " + result.length + " duplicate email(s)");
//   // }else if(result.length < 20){
//   // resultArr.push(data[i].email + " received " + result.length + " duplicate email(s)");
//   // }else {
//   //   resultArr.push(data[i].email + " received " + result.length + " duplicate email(s)");
//   // }
// //   console.log(data[i].email + " received " + result.length + " duplicate email(s)");
// }
// //console.log("Duplicates found: ", result);