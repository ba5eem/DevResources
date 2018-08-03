

let url = "https://www.reddit.com/r/gifrecipes.gif"
let src;

let x = url.substring(url.length-1);
if (x === 'v'){
  // cut off v
  src = url.substring(0, url.length-1);
  console.log(src);
}
else{
  src = url;
  console.log(src);
}