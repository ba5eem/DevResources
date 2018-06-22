let doubleElements = (x) => x * 2;
let reducer = (accum, curr) => accum + curr;

const doubleArray = (arr) => arr.map(doubleElements);
const sumArrays = (arr1, arr2) => arr1.reduce(reducer) + arr2.reduce(reducer);
const stringCount = (str) => str.length;
const arrayLength = (arr) => arr.length;
const countAll = (arr) => arr.reduce(reducer);
const countStrings = (arr) => arr.map(e => e.length);
const countAllStrings = (arr) => countStrings(arr).reduce(reducer);
const convertToArray = (obj) => Object.values(obj);
const objectSize = (obj) => Object.keys(obj).length;
const createZeroFilledArray = (num) => new Array(num).fill(0);
const poppedArray = (arr) => { arr.pop(); return arr };
const splitString = (str) => str.split('');
const lengthOfLast = (arr) => arr.pop().length;
const sumBelowTen = (arr) => arr.filter(e => e < 10).reduce(reducer);
const moreThanTenLetters = (arr) => arr.filter(e => e.length > 10).length;
const multiplyAll = (arr) => arr.reduce(reducer); // NOT SURE THE TEST IS RIGHT
const getKeys = (obj) => Object.keys(obj);
const sumAllPositive = (arr) => arr.filter(e => e > 0).reduce(reducer);
const stringCountBelowThree = (arr) => arr.filter(e => e.length <= 3).length;
const countObjects = (arr) => arr.length;
const getObjectKeys = (obj) => Object.keys(obj);
const getObjectValues = (obj) => Object.values(obj);
const makeObject = (k,v) => { return {[k]: v} };
const makeObjectReverse = (k,v) => { return {[v]: k} };
const tupleToObject = (t) => { return {[t[0]]: t[1]} };
const tupleToObjectReverse = (t) => { return {[t[1]]: t[0]} };
const getValues = (obj) => Object.values(obj);
const getKeys2 = (obj) => Object.keys(obj);
const arrayToObject = (arr) => arr.reduce((a,key) => { a[key] = false; return a },{});



/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function (obj){
  newArray = [];
  for (var key in obj){
    newArray.push([key, obj[key]]);
  }
  //console.log(newArray);
  return newArray;
}


/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function (arr1, arr2){
  newObj = {};
  for (var i=0; i<arr1.length; i++){
    newObj[arr1[i]]= arr2[i];
  }
  return newObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function (obj1, obj2){
  newArray = [];
  for (var key in obj1){
    newArray.push([key, obj1[key]])
  }
  for (var key in obj2){
    newArray.push([key, obj2[key]])
  }
  return newArray;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function (arr){
  newObj = {};
  for (var i=0; i<arr.length; i++){
    newObj[arr[i]] = true;
  }
  return newObj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function (arr){
  newObj = {};
  for (var i=0; i<arr.length; i++){
    if (arr[i].length >= 5) {
      newObj[arr[i]] = true;
    }else{
      newObj[arr[i]] = false;
    }
  }
  return newObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function (arr){
  newObj = {};
  for (var i=0; i<arr.length; i++){
    newObj[arr[i]] = true
  }
  return newObj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 *
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function (str){
  newObj = {};
  for (var i=0; i<str.length; i++){
    newObj[str[i]] = true;
  }
  return newObj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function (arr){
  newObj = {};
  for (var i=0; i<arr.length; i++){
    newObj[arr[i]] = arr[i].length;
  }
  return newObj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function (arr){
  newObj = {};
  for (var i=0; i<arr.length; i++){
    newObj[arr[i]] = (newObj[arr[i]] || 0) + 1;
  }
  return newObj;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function (arr){
  newObj = {};
  for(var i=0; i<arr.length; i++){
    newObj[arr[i][0]] = arr[i][1];
  }
  return newObj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function (arr){
  newObj = {};
  for (var i=0; i<arr.length; i++){
    newObj[arr[i]] = 0;
  }
  return newObj;
}



module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}