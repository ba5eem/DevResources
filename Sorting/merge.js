//example from ED professor:
var unsorted = [5,8,4,6,7,3,9];

function mergeSort(arr){
  //base case
  if (arr.length < 2){
    return arr;
  }
  //find the middle
  var middle = Math.floor(arr.length / 2);
  //split the array in two
  var left = mergeSort(arr.slice(0,middle));
  var right = mergeSort(arr.slice(middle, arr.length));
  //sort both arrays
  return sort(left,right);  
}


function sort(left, right){
  var sorted = [];
  while(left.length && right.length){
    if (left[0] < right[0]){
      sorted.push(left.shift());
    }
    else {
      sorted.push(right.shift());
    }
  }
    return sorted.concat(left).concat(right);  
}

console.log(mergeSort(unsorted));




// //both functions together:
// var array = [5,8];

// function merge(arr){
//   var middle = Math.floor(arr.length / 2);
//   var left   = arr.slice(0, middle);
//   var right  = arr.slice(middle, arr.length);

//   if (arr.length ===1){
//     return arr;
//   }
//   //do i call merge diamond here as well, will that work?
//   return merge(left), merge(right);
// }//end of merge function
// console.log(merge(array));


// var left = [5];
// var right = [8];


// function mergeDiamond(left,right){
  
//   var temp = [];
//   console.log("before call: ");
  
//  for (var i = 0; i < left.length && right.length; i++){
//   if(left[0] > right[0]){
//     console.log("it has ended with an if!");
//     var holder = right.shift(left);
//     temp.push(holder);
//     return temp;
//   }else{
//     console.log("it has ended with an else!");
//     var concat = left.concat(right);
//     var shift = left.shift(right);
//     temp.push(shift);
//     return concat;
    
    
    
    
    
    
//   }//end of if/else
//  }//end of for loop
// }//end of mergeDiamond function

// console.log(mergeDiamond(left,right));






// var array = [5,2,6];

// function merge(arr){
//   var middle = Math.floor(arr.length / 2);
//   console.log("var middle: " + arr.length + "/"+ '2');
//   console.log("///////////////////////////");
//   var left   = arr.slice(0, middle);
//   console.log("var left: " + 0 + ", " + middle);
//   console.log("///////////////////////////");
//   var right  = arr.slice(middle, arr.length);
//   console.log("var right: " + middle + ", " + arr.length);
//   console.log("///////////////////////////");
  

//   if (arr.length ===1){
//     //console.log("left: " + left+ "middle: " + middle+"right: "+right);
//   return arr;
// }

// //  console.log(middle);
// //   console.log(left);
// //   console.log(right);
// //   console.log(array);
  
//   return merge(left), merge(right);
 

// }//end of merge function


// console.log(merge(array));

// //beginning of possible second function to join elements
// var left = [5];
// var right = [8];

// //attempt expanded below using shift method
// // function mergeDiamond(left,right){
  
// //   if(left[0] > right[0]){
// //     return right.concat(left);
// //   }else{
// //     return left.concat(right);
// //   } 
// // }//end of mergeDiamond function

// // console.log(mergeDiamond(left,right));


// //using a while function as base to run as long as the array has an element in the array
// var left = [10];
// var right = [8];


// var left = [5];
// var right = [8];



// function mergeDiamond(left,right){
  
//   var temp = [];
//   console.log("before call: ");
  
//  for (var i = 0; i < left.length && right.length; i++){
//   if(left[0] > right[0]){
//     console.log("it has ended with an if!");
//     var holder = right.shift(left);
//     temp.push(holder);
//     return temp;
//   }else{
//     console.log("it has ended with an else!");
//     var holder = left.shift(right);
//     temp.push(holder);
//     return temp;
    
    
    
    
    
    
//   }//end of if/else
//  }//end of for loop
// }//end of mergeDiamond function

// console.log(mergeDiamond(left,right));



// //how we get from so many elements to 1 element in an array:
// var a = ['zero', 'one', 'two', 'three'];
// var sliced = a.slice(0, 2);

// var a = ['zero', 'one'];
// var sliced = a.slice(0, 1);

// console.log(a);      // ['zero', 'one', 'two', 'three']
// console.log(sliced); // ['one', 'two']
// //resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



// //
// console.log("merge that shit!");

// //merge sort explained

// var array = /*left index*/[10,5,2,1,9,6,4,20];/*right index*/
// //mid  = 0 index plus 7 index divide by 2 = 3.5 floor that = 3 - therefore 3 is mid index
// var leftIndex = 10;
// var rightIndex = 20;
// var midIndex = 1;

// // so in left part i have:
// var leftPart = [10,5,2,1]; var rightPart = [9,6,4,20];
// //so we look at the mids again of each part
// var leftOfLeftPart = [10,5]; var rightOfLeftPart = [2,1];
// //now we divide each part again:
// [10]/*left*/[5]/*right*/
// //so now we sort these two:
// if (10 > 5){
//   //swap elements
// }
// returns [5,10];
// //same steps with the right part divided:
// [2]/*left*/[1]/*right*/
// //so now we sort these two:
// if (2 > 1){
//   //swap elements
// }
// returns [1,2];

// //then we re-join the two parts into one part:
// [5,10] [1,2];
// //so 1st index compared with 1st index
// //5 with 1 = take 1
// //5 with 2 = take 2
// //5 with 10 = take 5
// //10 only remaining = take 10
// [1,2,5,10]



// [1,2,5,10];
// //not sure what the code looks like for this part
// //resource: https://www.youtube.com/watch?v=KT4d81e0QV4
//resources:
//http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
//https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php

//merge sort with one functipn example using while loop:

//   function merge_sort(left_part,right_part) 
// {
//   var i = 0;
//   var j = 0;
//   var results = [];

//   while (i < left_part.length || j < right_part.length) {
//     if (i === left_part.length) {
//       // j is the only index left_part
//       results.push(right_part[j]);
//       j++;
//     } 
//       else if (j === right_part.length || left_part[i] <= right_part[j]) {
//       results.push(left_part[i]);
//       i++;
//     } else {
//       results.push(right_part[j]);
//       j++;
//     }
//   }
//   return results;
// }

// console.log(merge_sort([1,3,4], [3,7,9]));

//merge sort example with two functions using a while loop
// function mergeSort(arr)
// {
//     if (arr.length < 2)
//         return arr;
 
//     var middle = parseInt(arr.length / 2);
//     var left   = arr.slice(0, middle);
//     var right  = arr.slice(middle, arr.length);
 
//     return merge(mergeSort(left), mergeSort(right));
// }
 
// function merge(left, right)
// {
//     var result = [];
 
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
 
//     while (left.length)
//         result.push(left.shift());
 
//     while (right.length)
//         result.push(right.shift());
 
//     return result;
// }
 
// console.log(mergeSort(a));









// //begin part here: 
// var leftOfRightPart = [10,5]; var rightOfRightPart = [2,1];