var colorArray = ['#9B59B6','#85C1E9','#F1948A','#F1C40F','#76D7C4','#DC7633','#EAEDED','#AF601A','#21618C'];
var selectedColor;
var width = 0;
var height = 0;
var draw = null;
debugger;
//large div box to hold canvas
var canvasBox = document.createElement("div");
canvasBox.className = "bigBox";
pixelPainter.appendChild(canvasBox);

//create forloop to generate parent div = row
debugger;
function divCanvas(width, height){
  //this for loop sets the parent div row
for(var i = 0; i < width; i++){
  var ppCanvas = document.createElement("div");
  ppCanvas.className = "cellDivRow";
  canvasBox.appendChild(ppCanvas);
  //this for loop creates divs within the parent div row
  for (var j = 0; j < height; j++){
    var cells = document.createElement("div");
    cells.addEventListener("mousedown",down);
    cells.addEventListener("mouseup",up);
    cells.addEventListener("mousemove", changeColor);
    cells.className = "cellsInRow";
    ppCanvas.appendChild(cells);
  } 
  debugger;
}
//this for loop creates the color pallete which is divs in the parent row
for (var k = 0; k < colorArray.length; k++){
  var colorCanvas = document.createElement('div');
  colorCanvas.style.backgroundColor = colorArray[k];
  colorCanvas.addEventListener("click", selectColor);
  colorCanvas.className = "paintParentRow";
  pixelPainter.appendChild(colorCanvas);
}
}
divCanvas(31,71);
debugger;
//BUTTON BOX:
var buttonBox = document.createElement("div");
buttonBox.className = "btnBox";
pixelPainter.appendChild(buttonBox);
//eraser button code:
var clearButton = document.createElement("button");
  clearButton.id = "action";
  clearButton.innerHTML = "ERASER";
  clearButton.addEventListener("click", eraserActivated);
  buttonBox.appendChild(clearButton);
debugger;
//BUTTON BOX 2:
var buttonBox2 = document.createElement("div");
buttonBox.className = "btnBox2";
pixelPainter.appendChild(buttonBox2);  
//CLEAR button code: 
var clearButton = document.createElement("button");
  clearButton.id = "action2";
  clearButton.innerHTML = "CLEAR";
  clearButton.addEventListener("click", clearCanvas);
  buttonBox2.appendChild(clearButton);
debugger;
//BUTTON BOX 3:
var buttonBox3 = document.createElement("div");
buttonBox.className = "btnBox2";
pixelPainter.appendChild(buttonBox3);  
//SAVE button code: 
var saveButton = document.createElement("button");
  saveButton.id = "action3";
  saveButton.innerHTML = "SAVE";
  saveButton.addEventListener("click", takeScreenShot);
  buttonBox3.appendChild(saveButton);
debugger;
//BUTTON BOX 4:
var buttonBox4 = document.createElement("div");
buttonBox.className = "btnBox4";
pixelPainter.appendChild(buttonBox4); 

//FILL button code:
var fillButton = document.createElement("button");
  fillButton.id = "action4";
  fillButton.innerHTML = "FILL";
  fillButton.addEventListener("click", fillSpace);

  buttonBox4.appendChild(fillButton);
debugger;



//PIXEL PAINTER FUNCTIONS:
function down(){
  draw = true;
  
}

function up(){
  draw = false;
}

function changeColor(){
  if (draw === true){
    event.target.style.backgroundColor = selectedColor;
  }
 
}

//sets colors by selecting the color pallete
function selectColor(){
  selectedColor = event.target.style.backgroundColor;
}

//set cells to background white, this is clears canvas for more creations
function clearCanvas(){
  cells = document.getElementsByClassName("cellsInRow");
  for (var i =0; i < cells.length; i++){
    cells[i].style.backgroundColor = null;
  }
}

function eraserActivated(){
  selectedColor = event.target.style.backgroundColor;

}

function fillSpace(){
  cells = document.getElementsByClassName("cellsInRow");
  for (var i =0; i < cells.length; i++){
    if (cells[i].style.backgroundColor){
    }
    else{
      cells[i].style.backgroundColor = selectedColor;
    }  
  }
}

var footer = document.createElement("div");
footer.className = "ftText";
footer.innerHTML = "©9.12.2017 appleNapple Inc. ba5eem & kris";
pixelPainter.appendChild(footer);

//Test for shapes:
function takeScreenShot() {
    html2canvas(document.getElementById("container"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=800;
            tempcanvas.height=400;
            var context=tempcanvas.getContext('2d');
            context.drawImage(canvas,0,0,1000,1000,0,0,800,610);
            // I cant figure out how to adjust based off screen size change
            //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            link.click();

        }
    });
}


//random auto color
var random = document.querySelectorAll('.cellsInRow')[0];
random.addEventListener('click', randomColor);

function randomColor(){
cells = document.getElementsByClassName("cellsInRow");
for (var i = 0; i < cells.length; i++) {
    (function(i) {
        setTimeout(function() { 
          cells[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
        }, 100 * i);
        })(i);
      }
    }

