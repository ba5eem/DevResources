/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }
  return result;
}
/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function (arr1, arr2){
  sumOfArrays = 0;
  for (var i=0; i<arr1.length; i++){
    sumOfArrays += arr1[i];
  }
  for (var i=0; i<arr1.length; i++){
    sumOfArrays += arr2[i];
  }
  console.log(sumOfArrays)
  return sumOfArrays;
}



/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function (str){
  lengthOfStr = 0;
  for (var i=0; i<str.length; i++){
    lengthOfStr = str.length;
  }
  return lengthOfStr;
}
/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function (arr){
  array = 0;
  for (var i=0; i<arr.length; i++){
    array = arr[i];
  }
  return array;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function (arr){
  sumAllNumArr = 0;
  for (var i=0; i<arr.length; i++){
    sumAllNumArr += arr[i];
  }
  return sumAllNumArr;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function (arr){
  lengthOfArr = [];
  for (var i=0; i<arr.length; i++){
    lengthOfArr.push(arr[i].length);
  }
  return lengthOfArr;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function (arr){
  sumOfStr = 0;
  for (var i=0; i<arr.length; i++){
    sumOfStr += arr[i].length;
  }
  return sumOfStr;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */

var convertToArray = function (obj){
  newArray = [];
  for (var key in obj){
    newArray.push(obj[key]);
  }
  return newArray;
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function (obj){
  return Object.keys(obj).length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function (num){
  newArray = [];
  for (var i=0; i<num; i++){
    newArray.push(0);
  }
  return newArray;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function (arr){
  arr.pop();
  return arr;
}


/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function (str){
  newArray = [];
  for (var i=0; i<str.length; i++){
    newArray.push(str[i].split().join());
  }
  return newArray;
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function (arr){
  howManyStrLast = 0;
  var popped = arr.pop(howManyStrLast);
  var splitted = popped.split("");
  return splitted.length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function (arr){
  sumBelTen = 0;
  for (var i=0; i<arr.length; i++){
    if (arr[i] <10){
      sumBelTen += arr[i];
    }
  }return sumBelTen;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function (arr) {
  var totalElem = [];
  for (var i=0; i<arr.length; i++){
    if (arr[i].length >10){
      totalElem.push(arr);
    }
  }return totalElem.length;
}



/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function (arr){
  product = 1;
  for (var i=0; i<arr.length; i++){
    product *= arr[i];
  }
  return product;
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
/*var getKeys = function (obj){
  newArray = [];
  for (var key in obj){
    newArray.push(key);
  }
   return newArray;
}*/

var getKeys = function(obj){
  var arr = Object.keys(obj);
  return arr;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function (str){
  sumAll = 0;
  for (var i=0; i<str.length; i++){
    if (str[i]> 0  ){
      sumAll += str[i];
    }
  }return sumAll;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function (arr){
  threeChar = 0;
  for (var i=0; i<arr.length; i++){
    if (arr[i].length <= 3){
      threeChar +=1;
    }
  }return threeChar;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function (arr){
  objCount = 0;
  for (var key in arr){
    objCount = arr.length;
  }
  return objCount;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function (obj){
  newArray = [];
  for (var key in obj){
    newArray.push(key);
  }
  return newArray;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function (obj){
  newArray = [];
  for (var values in obj){
    newArray.push(obj[values]);
  }
  return newArray;
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function (key, value){
  newObj = {};
  newObj[key] = value;
  return newObj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */

 var makeObjectReverse = function (value, key){
  newObj = {};
  newObj[key] = value;
  return newObj;
}


/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function (tuple){
  newObj = {};
  newObj[tuple[0]] = tuple[1];
  return newObj;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function (tuple){
  newObj = {};
  newObj[tuple[1]] = tuple[0];
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



/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function (obj){
  newArray = [];
  for (var values in obj){
    newArray.push(obj[values])
  }
  return newArray;
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys2 = function (obj){
  newArray = [];
  for (var key in obj){
    newArray.push(obj[key]);
  }
  return newArray;
}

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
  return newArray;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function (arr){
  newObj = {};
  for (var i=0; i<arr.length; i++){
    newObj[arr[i]] = false;
  }
  return newObj;
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