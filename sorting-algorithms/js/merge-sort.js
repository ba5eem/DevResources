function sort(left, right){
  let sorted = [];
  while((left.length + right.length)){
    if(left[0] === undefined){
      sorted.push(right.shift());
    }else if(right[0] === undefined){
      sorted.push(left.shift());
    }else if(left[0] < right[0]){
      sorted.push(left.shift());
    }else{
      sorted.push(right.shift());
    }
  }
  return sorted;
}

  let unsorted = [3, 6, 1, 8, 2, 4, 9, 5];

function mergeSort(arr){
  //base case: if (arr.length < 2) return;
  if (arr.length < 2){
    return arr;
  }
  //find the  middle
  let middle = Math.floor(arr.length/2);

  //split array in two
  let left = mergeSort(arr.slice(0, middle));/// slice method makes a COPY///
  let right = mergeSort(arr.slice(middle, arr.length));

  //sort both arrays
  return sort(left, right);

  //return sorted left and right, concat
}

let result = mergeSort(unsorted);
console.log(result)