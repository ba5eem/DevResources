var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, num) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === num){
        return i;
      }else if(i === arr.length - 1){
        return -1;
      }
    }
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (arr, num) {
    for(var i = arr.length - 1; i >= 0; i--){
      if(arr[i] === num){
        return i;
      }else if(i === 0){
        return -1;
      }
    }
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
      if(i < arr.length - 1){
        newArray.push(arr[i]);
      }
    }return newArray;
  },

  // returns an array with all falsey values removed
  compact: function(arr) {
    var compactArray = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i]){
        compactArray.push(arr[i]);
      }
    }
    return compactArray;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var sliceArray = [];
    for(var i = start; i < end; i++){
      sliceArray.push(arr[i]);
    }
    return sliceArray;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, num){
    var newArray = [];
    if(num === undefined){
      newArray = arr;
      newArray.shift();
    }else{
      for(var i = 0; i < arr.length; i++){
        if(i >= num){
          newArray.push(arr[i]);
        }
      }
    }
    return newArray;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    var newArray = [];
    if(num === undefined){
      newArray = arr;
      newArray.pop();
    }else{
      for(var i = 0; i < arr.length - num; i++){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    var takeArray = [];
    if(num === undefined){
      takeArray.push(arr[0]);
    }else if(num === 0){
      takeArray = takeArray;
    }else{
      for(var i = 0; i < num; i++){
        if(arr[i]){
          takeArray.push(arr[i]);
        }
      }
    }
    return takeArray;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, num) {
    var takeRightArray = [];
    if(num === undefined){
      takeRightArray.push(arr[arr.length - 1]);
    }else if(num === 0){
      takeRightArray = takeRightArray;
    }else if(num > arr.length){
      takeRightArray = arr;
    }else{
      for(var i = arr.length - 1; i >= 0; i--){
        if(i > arr.length - num - 1){
          takeRightArray.unshift(arr[i]);
        }
      }
    }
    return takeRightArray;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    for(var i = 0; i < arr.length; i++){
      if(i >= start && i < end){
        arr.splice(i, 1, value);
      }else if(start === undefined && end === undefined){
        arr.splice(i, 1, value);
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, valueArray) {
    for(var i = arr.length - 1; i >= 0; i--){
      for(var j = valueArray.length - 1; j >= 0; j--){
        if(arr[i] === valueArray[j]){
        arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, pullIndices) {
    for(var i = arr.length - 1; i >=0; i--){
      for(var j = pullIndices.length - 1; j >= 0; j--){
        if(i === pullIndices[j]){
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr, specifiedValues) {
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
      if(specifiedValues.indexOf(arr[i]) === -1){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    newArray = [];
    for(var i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) === -1){
        newArray.push(arr1[i]);
      }
    }
    return newArray;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    var zipArray = [];
    for(var i = 0; i < arr1.length; i++){
      var tuple = [];
      tuple.push(arr1[i], arr2[i]);
      zipArray.push(tuple);
    }
    return zipArray;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var arr1 = [];
    var arr2 = [];
    for(var i = arr.length - 1; i >= 0 ; i--){
      arr1.unshift(arr[i][0]);
      arr2.unshift(arr[i][1]);
    }
    var unzipArray = [];
    unzipArray.push(arr1, arr2);
    return unzipArray;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    var chunkArray = [];
    if(arr.length === 0 || size === 0){
      return chunkArray;
    }else{
      for(var i = 0; i < arr.length;){
        var chunks = [];
        for(var j = 0; j < size; j++){
          if(arr[i]){
            chunks.push(arr[i]);
            i++;
          }
        }
      chunkArray.push(chunks);
      }
    }
    return chunkArray;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, myFunc) {
    for(var i in collection){
      myFunc(collection[i], i, collection);
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(collection, myFunc) {
    var newArray = [];
    for(var i in collection){
      newArray.push(myFunc(collection[i], i, collection));
    }
    return newArray;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(collection, myFunc) {
    var truthyArray = [];
    var truthyObj = {};
    if(Array.isArray(collection)){
      for(var i in collection){
        if(myFunc(collection[i])){
          truthyArray.push(collection[i]);
        }
      }
      return truthyArray;
    }else if(!Array.isArray(collection)){
      for(var j in collection){
        if(myFunc(collection[j])){
          truthyObj[j] = collection[j];
        }
      }
      return truthyObj;
    }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(collection, myFunc) {
    var result = 0;
    for(var i in collection){
      result = myFunc(result, collection[i]);
    }
    console.log(myFunc);
    return result;
  }
};