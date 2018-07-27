console.log('Sanity Check: Quick Sort');

var unsorted = [3, 6, 1, 8, 2, 4, 9, 5, 7];

//debugger;
console.time('quick');
function quickSort(array, left, right) {
//debugger;
  var i = left;
  var j = right;
  var pivot = array[Math.floor((left+right)/2)];

  while (i <= j) {
    while (array[i] < pivot) i++;
    while (array[j] > pivot) j--;

    if (i <= j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }
  }

  if (left < j) quickSort(array, left, j);
  if (i < right) quickSort(array, i, right);

  return array;
}

var result = quickSort(unsorted, 0, unsorted.length-1);
console.log(result);
console.timeEnd('quick')

console.time('sort');
console.log(unsorted.sort());
console.timeEnd('sort');

