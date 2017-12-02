console.log("smoke test");


var dom = document.getElementById('str');
dom.innerHTML = "Hello World";

var str = "I bounced from diet to diet, all the while experimenting with new exercise programs, convinced the perfect combination was out there to be found. I have a magic number in my head of my “ideal weight”. This number is based on nothing more than what I arbitrarily decided was a number I wouldn’t be ashamed to say out loud if someone asked my weight. I was sure that with enough discipline and deprivation, I could reach this number. Once I hit that number on the scale, I could let go of the strict rules and harsh guidelines. Then I could relax.";

let arr = str.split(' ').filter((item,pos,self) => {
  return self.indexOf(item) == pos;
})

//mat is array of vowels
let mat = [];
let lev = [];
  for (var i = 0; i < arr.length; i++){
    let a = arr[i].includes('a');
    let e = arr[i].includes('e');
    let o = arr[i].includes('o');
    let u = arr[i].includes('u');
    let x = arr[i].includes('i');
    if(a || e || o || u || x){
      mat.push(arr[i]);
    }
  }
for (var j = 0; j < mat.length; j++){
  if(mat[j].length > 5){
      lev.push(mat[j]);
  }
}

console.log(lev);








// let idx = arr.indexOf(x, 0);
// let word = arr[idx];
// console.log(word);








// for (var i = 0; i < com.length; i++){
//   let match = com.includes('a','e','o','u','i');
//   if(com[i] === match){

//     console.log(com[i]);
//   }
// }

 

