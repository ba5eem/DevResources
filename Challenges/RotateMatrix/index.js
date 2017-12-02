//jshint esversion: 6


var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];




function rotateCW(array){
  array = array.reverse();
  for (var i = 0; i < array.length; i++){
    for(var j=0; j < i; j++){
      var temp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = temp; 
    }
  }
   var clockwise = JSON.parse(JSON.stringify(array));

}
console.log(rotateCW(clockwise));