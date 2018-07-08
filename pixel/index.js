// INIT Variables
var buttons, boxes;
var arr = [];

// CREATE COLOR PALLETE
lib.colors.sort().map((color,i) => {
  buttons = document.createElement('div');
  buttons.className = "btn btn-primary";
  buttons.style.backgroundColor = color;
  buttons.addEventListener('click', lib.setColor)
  colorContainers.appendChild(buttons);
});

// CREATE PIXEL BOARD
lib.pixelBoxes.map(e => {
  boxes = document.createElement('div');
  boxes.className = "btn btn-default";
  boxes.style.backgroundColor = "#515c66";
  boxes.addEventListener('mouseover', lib.paintColor)
  arr.push(boxes);
  pixels.appendChild(boxes);
});

// CREATE LISTENER FOR PAINTING
document.addEventListener('keydown', lib.makeLive);

// CREATE LISTENDER FOR CLEARING CANVAS
document.addEventListener('keydown', lib.clearScreen);

