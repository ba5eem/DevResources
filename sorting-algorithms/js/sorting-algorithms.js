// jshint esversion:6

console.log('Sanity Check: Sorting Algorithms');

var unsorted = [3, 6, 1, 8, 2, 4, 9, 5];

var sortingAlgorithms = (function() {
  // debugger;
  return {
    insertionSort : insertionSort,
    mergeSort : mergeSort,
    quickSort : quickSort,
    selectionSort : selectionSort
  };
 
  function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = 0;
      let temp = array[i];
      for (j = i-1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
        console.log(array);
      }
      array[j+1] = temp;
    }
    return array;
  }

  // left = 0; right = array.length-1;
  function mergeSort(array, left, right) {
    // debugger;
    var i = left;
    var j = right;
    var middle;
    // breaks down array into individual sections
    if (i < j) {
      middle = i + Math.floor((j - i)/2);

      mergeSort(array, i, middle);
      mergeSort(array, middle+1, j);
    } // if base case condition met, reader will start here
    //base case
    if (i === middle) return array;

    // sorting starts
    var k = middle;
    var placeHolder = null;

    // possibly needs iterator to check and compare index elements
    while (left < right) {
      if (array[left] > array[k+1]) {
        var temp = array[left];
        array[left] = array[k+1];
        array[k+1] = temp;

        if (array[placeHolder] > array[left]) {
          var tempTwo = array[placeHolder];
          array[placeHolder] = array[left];
          array[left] = tempTwo;
        }
        placeHolder = left;
        left++;
      } else if (array[left] < array[k+1]) {
        placeHolder = left;
        left++;
      }

      if (left === k+1) {
        k++;
      }
    }

    return array;

  //Ed's livecode example

  // function mergeSortExample(){
  //   //base case: if (arr.length < 2) return;
  //   if (arr.length < 2){
  //     return arr;
  //   }
  //   //find the  middle
  //   var middle = Math.floor(arr.length/2);

  //   //split array in two
  //   var left = mergeSortExample(arr.slice(0, middle));/// slice method makes a COPY///
  //   var right = mergeSortExample(arr.slice(middle, arr.length));

  //   //sort both arrays
  //   return sort(left, right);

  //   //return sorted left and right, concat
  // }

  // function sort(left, right){
  //   var sorted = [];
  //   while((left.length + right.length)) > 0{
  //     if(left[0] === undefined){
  //       sorted.push(right.shift());
  //     }else if(right[0] === undefined){
  //       sorted.push(left.shift());
  //     }else if(left[0] < right[0]){
  //       sorted.push(left.shift());
  //     }else{
  //       sorted.push(right.shift());
  //     }
  //   }
  //   return sorted;
  // }
  }

  function quickSort(array, left, right) {
    // debugger;
    var i = left;
    var j = right;
    // Floor is not necessary...maybe for edge cases...
    var pivot = array[Math.floor((left+right)/2)]; 

    while (i <= j) {
      while (array[i] < pivot) i++;
      while (array[j] > pivot) j--;
      // if the element at index i is greater than the element at index j, a smaller number than pivot is on the right of pivot and needs to be swapped with the element at index j
      if (i <= j) { 
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // increment or decrement to continue search or meet conditional
        i++;
        j--;
      }
    }

    if (left < j) quickSort(array, left, j);
    if (i < right) quickSort(array, i, right);
    // will return if if conditions not met
    return array;
  }

  function selectionSort(array) {
    //debugger;
    for (var j = 0; j < array.length-1; j++) {
      // holds smaller number
      var smallerNumber = array[j];
      // holds index of smaller number
      var smallerNumberIndex = null;

      for (var i = j; i < array.length; i++) {
        // looks for smaller number in array
        // if the smallerNumber is greater than the number at index i, swap the elements
        if (smallerNumber > array[i]) {
          smallerNumber = array[i];
          smallerNumberIndex = i;
          array[smallerNumberIndex] = array[j];
          array[j] = smallerNumber;
        }
      }
    }
    return array;
  }

})();
var result = null;
console.log('original array: ', unsorted);
result = sortingAlgorithms.insertionSort(unsorted);
console.log('insertion sort: ', result);
result = sortingAlgorithms.mergeSort(unsorted, 0, unsorted.length-1);
console.log('merge sort: ', result);
result = sortingAlgorithms.quickSort(unsorted, 0, unsorted.length-1);
console.log('quick sort: ', result);
result = sortingAlgorithms.selectionSort(unsorted);
console.log('selection sort: ', result);
