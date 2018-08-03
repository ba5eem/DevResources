
var unsorted = [3, 6, 1, 8, 2, 4, 9, 5];


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = 0;
      let temp = array[i];
      for (j = i-1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    return array;
  }

  console.log(insertionSort(unsorted));