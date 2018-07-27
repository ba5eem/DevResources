console.log('Sanity Check: Bubble Sort');

var unsorted = [5, 6, 1, 8, 2, 4, 9, 3];

// sort the array
function bubbleSort(array) {
  var temp = null;
  var sortUsed = false;
  // go through each element and check
  // current element greater than next element i > i + 1
  // if found, swap index of two elements
  for (var i = 0; i < array.length-1; i++) {
    if (array[i] > array[i + 1]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      sortUsed = true;
    }
  }
  console.log(sortUsed);
  console.log(array);

  if (sortUsed) {
    bubbleSort(array);
  }

  return array;

  // if (bubbleSort.length) {
  // }
}

 console.log('Sorted array: ', bubbleSort(unsorted));