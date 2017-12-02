var colorArray = ['#9B59B6','#85C1E9','#F1948A','#F1C40F','#76D7C4','#DC7633','#EAEDED','#AF601A','#21618C'];
var selectedColor;
var width = 0;
var height = 0;
var draw = null;
var pop;

//large div box to hold canvas
var canvasBox = document.createElement("div");
canvasBox.className = "bigBox";
pixelPainter.appendChild(canvasBox);

//create forloop to generate parent div = row

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
    cells.addEventListener("click", dimension);
    cells.className = "cellsInRow";
    ppCanvas.appendChild(cells);
  } 
  
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
divCanvas(51,61);

///////////STAMP SHAPES////////////

//parent div to hold child shape divs
var shapeBox = document.createElement("div");
shapeBox.className = "parentShapeBox";
pixelPainter.appendChild(shapeBox);

//CIRCLE
var circleBox = document.createElement("div");
circleBox.className = "circleStamp";
shapeBox.appendChild(circleBox);

//SQUARE
var squareBox = document.createElement("div");
squareBox.className = "squareStamp";
shapeBox.appendChild(squareBox);

//TRIANGLE
var triangleBox = document.createElement("div");
triangleBox.className = "triangleStamp";
shapeBox.appendChild(triangleBox);

//------------------//

///////////////BUTTONS////////////////

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

// //BUTTON BOX 2:
// var buttonBox2 = document.createElement("div");
// buttonBox.className = "btnBox2";
// pixelPainter.appendChild(buttonBox2); 

//FILL button code:
var fillButton = document.createElement("button");
  fillButton.id = "action2";
  fillButton.innerHTML = "FILL";
  fillButton.addEventListener("click", fillSpace);

  buttonBox.appendChild(fillButton);

//BUTTON BOX 3:
// var buttonBox3 = document.createElement("div");
// buttonBox.className = "btnBox2";
// pixelPainter.appendChild(buttonBox3);  

//SAVE button code: 
var saveButton = document.createElement("button");
  saveButton.id = "action3";
  saveButton.innerHTML = "SAVE";
  saveButton.addEventListener("click", clearCanvas);
  buttonBox.appendChild(saveButton);

//BUTTON BOX 4:
var buttonBox4 = document.createElement("div");
buttonBox.className = "btnBox4";
pixelPainter.appendChild(buttonBox4); 
//CLEAR button code: 
var clearButton = document.createElement("button");
  clearButton.id = "action4";
  clearButton.innerHTML = "CLEAR";
  clearButton.addEventListener("click", clearCanvas);
  buttonBox4.appendChild(clearButton);

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
    cells.className = 'cellsInRow';
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

//secret picasso button


var _3dButton = document.createElement("button");
  _3dButton.id = "action4";
  _3dButton.innerHTML = "3D";
  _3dButton.addEventListener("click", popFunc);
  buttonBox4.appendChild(_3dButton);


function popFunc(){
    pop = event.target.id = "test";
  }
function dimension(){
  event.target.id = pop;
}

