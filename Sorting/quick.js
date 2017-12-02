var array = [5,2,6,1,3,4];

function quick(array){
var pivot = array[0];
var small = [];
var big = [];
//debugger;
if(array.length < 2) {
    return array;
  } 
for (var i = 1; i < array.length; i++){
  //console.log(array[i]-1);
  if (array[i] < pivot){
    small.push(array[i]);
    //console.log("if: ",array[i]);
    //console.log("if: ",pivot);   
  }else{
    big.push(array[i]);
    //console.log("else: ",array[i]);
    //console.log("else: ",pivot);
  }//end of else bracket

  }//end of for loop bracket

  return console.log(quick(small).concat(pivot,quick(big)));
  }//end of quick function bracket
  


  //ed's example during class using SHIFT! - my favorite!
  var unsorted = [3,5,6,2,9,1,6,7];

function quicksort(arr){
  //base case
  if (arr.length < 2){
    return arr;
  }
  //i need to pick a pivot
  var pivot = arr.shift();
  var left = [];
  var right = [];
  //i will always pick first index
  while(arr.length){
    var current = arr.shift();
    if (current < pivot){
      left.push(current);
    }
    else{
      right.push(current);
    }
    
  }
  //return concat left, pivot, right
    return quicksort(left).concat(pivot).concat(quicksort(right));
}

console.log(quicksort(unsorted));



  //nathans code example using a while loop and no sub arrays:

  function quickSort(array, left, right) {
    // debugger;
    var i = left;
    var j = right;
    // Floor is not necessary...maybe for edge cases...
    var pivot = array[Math.floor((left+right)/2)]; 
    while (i <= j) {
      while (array[i] < pivot) i++;
      while (array[j] > pivot) j--;
      //if the left index is greater than the right index, a smaller number than pivot is on the right of pivot and needs to be swapped with the element at index j
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



// //Explanation for 5 year old
// //Quick sort is an algorithm for sorting a list or an array of things
// //for simplicity let say those things are just numbers

// //divide and conquer
// //3 steps recursively:
// //1.find pivot that divids the array into two halves
// //2.quick sort the left half
// //3.quick sort the right half
// //REMEBER this Rule: - all elements to the right of pivot must be greater than pivot.
// //REMEBER this Rule:- all elements to the left of pivot must be smaller than pivot.


// //coding technique: is pivot < right? no - so we swap pivot and right
// var array = [5,2,6,1,3,4];

// if(pivot < right){

// }else{
//   "so we swap pivot and right";
//   pivot = right;

// }
// var array = [4,'2',6,1,3,'5'];
// //now move pivot to the right of the array
// if (pivot > left){ //-yes
//   "no swap occurs, move right one position towards right";
// }
// var array = [4,2,'6',1,3,'5'];
// //do this again 
// if (pivot > left){//-NO

// }else{
//   "so we swap pivot and left";
// }
// var array = [4,2,'5',1,3,'6'];
// //now move pivot to the left, everything left of 5 is smaller, so 5 is the new pivot
// //now we move left from end array
// if (pivot < right){// - yes;
// "no swap occurs, move left one position towards the left"
// }
// var array = [4,2,'5',1,'3',6];
// if (pivot < right){//-no

// }else{
//   "so we swap pivot and right"
// }
// var array = [4,2,'3',1,'5',6];
// if (pivot > left){//-yes
//   "so we move left one position toward the right";
// }
// var array = [4,2,3,'1','5',6];
// if (pivot > left){//-yes
//   "so we move left one position toward the right";
// }
// //no both right and left are at the 5
// var array = [4,2,3,1,"5",6];
// //this means 5 is the pivot and it is at the sorted position
// //elements left of pivot is smaller
// //elements right of pivot are bigger
// //so pivot has divded array into two sub arrays - possible syntax use:
// var a = ['zero', 'one', 'two', 'three'];
// var sliced = a.slice(1, 3);

// console.log(a);      // ['zero', 'one', 'two', 'three']
// console.log(sliced); // ['one', 'two']

// //now we begin quick sort on the left array, following the same rules and steps
// var array = ['4',2,3,'1'] //left array
// if (pivot < right){//-NO

// }else{
//   "so we swap pivot and right";
// }
// var array = ['1',2,3,'4'];
// if (pivot > left){//-YES
//   "so we move right towards the pivot";
// }
// var array = [1,'2',3,'4'];
// if (pivot > left){//-YES
//   "so we move right towards the pivot";
// }
// var array = [1,2,'3','4'];
// if (pivot > left){//-YES
//   "so we move right towards the pivot";
// }
// var array = [1,2,3,"4"];
// //both left and right are on 4 which is the pivot, its at the sorted position
// //elements of pivot are smaller
// //this creates a new sub array
// var array = [1,2,3];
// //follow the steps of if/else min 6:44 - https://www.youtube.com/watch?v=3OLTJlwyIqQ

