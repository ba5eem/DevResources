function chirp(n){
  // FIX ME
 if(n === 0){
   return ' ';
 }
 str = 'chirp ';
 return str + chirp(--n)
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});