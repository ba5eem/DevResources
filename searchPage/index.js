console.log("let us begin!");


var quick = document.querySelectorAll('.sortradio')[0];
quick.addEventListener('click', quickSelected);
var merge = document.querySelectorAll('.sortradio')[1];
merge.addEventListener('click',mergeSelected);
var insertion = document.querySelectorAll('.sortradio')[2];
insertion.addEventListener('click',insertionSelected);
var selection = document.querySelectorAll('.sortradio')[3];
selection.addEventListener('click',selectionSelected);

var searchButton = document.getElementById('begin');
searchButton.addEventListener('click',radioStart);

var search = document.getElementById('search');
search.addEventListener('keyup',startSearch);


var searchInput = [];
var searchArray = [];
function startSearch(e){//this is code used if enter key is hit - it begins the function
  if(e.which === 13){
    searchInput.push(search.value);
    var searchArray = (""+searchInput).split("");
    
    console.log("push info into array");

    radioStart(searchArray);
  }
}

function quickSelected(){
  if(quick.checked){
    merge.checked = false; insertion.checked = false; selection.checked = false;
    console.log('quick is selected');
  }
}

function mergeSelected(){
  if(merge.checked){
    quick.checked = false; insertion.checked = false; selection.checked = false;
    console.log('merge is selected');
  }
}

function insertionSelected(){
  if(insertion.checked){
    merge.checked = false; quick.checked = false; selection.checked = false;
    console.log('insertion is selected');
  }
}

function selectionSelected(){
  if(selection.checked){
    quick.checked = false; insertion.checked = false; merge.checked = false;
    console.log('selection is selected');
  }
}

function radioStart(searchArray){
  if(quick.checked){
    console.log(searchArray);
    quickSort(searchArray);
    console.log("quick sort begins");
  }else if(merge.checked){

    console.log(searchArray);
    mergeSort();
    console.log("merge sort begins");
  }else if(insertion.checked){
    insertionSort();
    console.log("insertion sort begins");
  }else if(selection.checked){
    selectionSort();
    console.log("selection sort begins");
  }else {
    alert ("Please select the sort type");
  }
}

//Sort functions:
function quickSort(array){
  debugger;
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
  // console.log(quickSort(small));
  // console.log();
  return quickSort(small).concat(pivot,quickSort(big));
  }//end of quick function bracket
console.log(quickSort(searchArray));




function mergeSort(arr){
  //base case
  length = arr.length;
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
    return console.log(sorted.concat(left).concat(right));  
}
mergeSort(searchArray);


function insertionSort(){
  console.log("insertion begins");

}

function selectionSort(){
  console.log("selection begins");

}


function filterIt(){
  
}




