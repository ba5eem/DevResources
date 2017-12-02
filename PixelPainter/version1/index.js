var pixelPainter = (function(){
var colors = ['DeepSkyBlue','Sienna','Salmon','LimeGreen','PaleTurquoise','MediumOrchid','IndianRed','magenta', 'black'];
var clipOptions = ["http://bit.ly/2eM6vEm","http://bit.ly/2vUEW6I","http://bit.ly/2wfGJi4","http://bit.ly/2wfp22e","http://bit.ly/2wR1RgM"];
var savedImages = ["assets/image1.jpg","assets/image2.jpg","assets/image3.jpg"];
var colorSelected = null;
var reset = 'black';
var boxArray = Array(522).fill(1);
var mainContainer = document.getElementById('main');
var subMain = document.getElementById('subMain');
var controls = ['null','null'];
var headingColorArray =["teal","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","blue","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","IndianRed","Indigo","Ivory","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue"];


//heading elements to make it look pixelated begins here:
headingColorArray.forEach(function(colors) {
  var button = document.createElement('div');
  button.style.backgroundColor = colors;
  button.classList.add('headingBox');
  heading.appendChild(button);


});

headingColorArray.reverse().forEach(function(colors) {
  var button = document.createElement('div');
  button.style.backgroundColor = colors;
  button.classList.add('headingBox');
  heading.appendChild(button);

});

  var titleHeading = document.createElement('h1');
  titleHeading.innerHTML = "Pixel Painter!";
  titleHeading.id = "titleBorder";
  heading.appendChild(titleHeading);

headingColorArray.forEach(function(colors) {
  var button = document.createElement('div');
  button.style.backgroundColor = colors;
  button.classList.add('headingBox');
  heading.appendChild(button);

});
headingColorArray.forEach(function(colors) {
  var button = document.createElement('div');
  button.style.backgroundColor = colors;
  button.classList.add('headingBox');
  heading.appendChild(button);

});
headingColorArray.forEach(function(colors) {
  var button = document.createElement('div');
  button.style.backgroundColor = colors;
  button.classList.add('headingBox');
  signature.appendChild(button);

});
headingColorArray.forEach(function(colors) {
  var button = document.createElement('div');
  button.style.backgroundColor = colors;
  button.classList.add('headingBox');
  signature.appendChild(button);

});

//heading elements to make it look pixelated ends here.

//New code to save images here:
savedImages.forEach(function(savedImages) {
  var image = document.createElement('img');
  image.src = savedImages;
  image.classList.add('images');
  sideMargin.appendChild(image);

});






//create save and erase buttons, with variable - more buttons can be added later
controls.forEach(function(control){
  var controls = document.createElement('div');
  controls.style.backgroundColor = controls;
  controls.classList.add('color_box');
  subMain.appendChild(controls);


});
//creates buttons to be color selected
colors.forEach(function(colors) {
  var button = document.createElement('div');
  button.style.backgroundColor = colors;
  button.classList.add('color_box');
  button.addEventListener('click', function(event){
    colorSelected = event.target.style.backgroundColor;
    //console.log(colorSelected);
  });
  subMain.appendChild(button);

});

//creates clip buttons to be used for stamps/pictures
clipOptions.forEach(function(clipOptions) {
  var image = document.createElement('img');
  image.src = clipOptions;
  image.classList.add('clips');
  image.addEventListener('click', function(event){
    colorSelected = event.target.img;
    //console.log(colorSelected);
  });
  clips.appendChild(image);

});
//From left to right Clip Variables:
var clipOne = document.querySelectorAll('.clips')[4];
var clipTwo = document.querySelectorAll('.clips')[3];
var clipThree = document.querySelectorAll('.clips')[2];
var clipFour = document.querySelectorAll('.clips')[1];
var clipFive = document.querySelectorAll('.clips')[0];

//webkit transition for pixel painter color change:









//adds event listeners to call function for erase
var erase = document.querySelectorAll('.color_box')[0];
erase.innerHTML = 'Erase';
erase.addEventListener('click', reLoad);
//adds event listeners to call function for save
var save = document.querySelectorAll('.color_box')[1];
save.innerHTML = 'Save';
save.addEventListener('click', takeScreenShot);

//takes screenshot of divs - based of screen size
function takeScreenShot() {
    html2canvas(document.getElementById("container"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=800;
            tempcanvas.height=610;
            var context=tempcanvas.getContext('2d');
            context.drawImage(canvas,112,0,800,610,0,0,800,610);
            // I cant figure out how to adjust based off screen size change
            //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            savedImages.push("assets/"+link.download);
            console.log(savedImages);
            link.click();

        }
    });
}
//Creates boxes to be changed based off color pallete
boxArray.forEach(function(boxArray){
  var boxes = document.createElement('div');
  boxes.classList.add('box');
  boxes.addEventListener('click',changeColor);
  mainContainer.appendChild(boxes);
});




//Function resets all boxes to black
function reLoad() {
  var box = document.getElementsByClassName('box');
  for (var i = 0; i < box.length; i++){
    box[i].style.backgroundColor = reset;
  }
}
//Function sets color choice, based off pallete choice
function changeColor(event) {
  var selected = colorSelected;
  event.target.style.backgroundColor=colorSelected;
}


return {
  changeColor : changeColor,
  reLoad : reLoad,
  takeScreenShot : takeScreenShot

};

}());

//Screen shot code courtesy of HTML2Canvas git link: https://github.com/niklasvh/html2canvas
//What this does is creates a temp canvas over the set dimensions to capture that section of the screen, the function is run based onclick of save button in HTML




//About save stretch Goal: 
//1. Attempted creating canvas and inserting divs, the onclick would not work within the canvas
//2. Attempted creating canvas with opacity and saving as image, it only save the canvas not the divs that were under it using z-index
//3. Attempted iFrame - had difficulty figuring out js code, and it kept causing issues with current working js code
//4. Started to look at setting dimension of which to save a screen capture, which led me back to html2canvas
//5. After further research the html2canvas option was the best option to save, had to change dimension to capture entire art div section


//Adding multiple rects to canvas example:
/*var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
for (var i = 0; i < 100; ++i) {
    for (var j = 0; j < 100; ++j) {
        context.fillStyle = 'red';
        context.fillRect(i * 8, j * 2, 40, 40);
    }
}*/

//If you had to double and array, and mix it up so not all the elements are the same next too each other, you could do this:

// var a = ['DeepSkyBlue','Sienna','Salmon','LimeGreen','PaleTurquoise','MediumOrchid','IndianRed','magenta', 'black'];

// b=[];

// for(var i = 0; i< a.length+1;++i){
//   for(var j =0; j < a.length;j++){
//   b.push(a[i]);
//   b.push(a[j+1]);
//   }
//   b = b.filter(function( element ) {
//    return element !== undefined;
// });
  
// };
// console.log(b);