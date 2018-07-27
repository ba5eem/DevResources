console.log('Sanity Check: Selection Sort');

var unsorted = [5, 6, 1, 8, 2, 4, 9, 3];

function selectionSort(array) {

  for (var j = 0; j < array.length-1; j++) {
    // holds smallest number
    var smallestNumber = array[j];
    // holds index of smallest number
    var smallestNumberIndex = null;

    for (var i = j; i < array.length; i++) {
      // looks for smallest number in array
      if (smallestNumber > array[i]) {
        smallestNumber = array[i];
        smallestNumberIndex = i;
      }
    }
    array[smallestNumberIndex] = array[j];
    array[j] = smallestNumber;
    console.log(array);
  }
}

// selectionSort(unsorted);