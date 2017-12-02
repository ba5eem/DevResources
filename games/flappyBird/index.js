//Following W3Schools Game example
var gamePiece;
var obstacle1;


function gameStart() {
  gamePiece = new component(10,20, "red",10,120);
  obstacle1 = new component(10,200, "green", 670,0);
  gameArea.start();
}

var gameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 880;
    this.canvas.height = 670;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(gameAreaUpdated, 20);
    /*window.addEventListener('keydown', function (e) { gameArea.key = e.keyCode;
      });
    window.addEventListener('keyup', function (e) {
      gameArea.key = false;
    });*/
  },
  clear : function() {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
  }
};



function component(width,height,color, x, y) {
  this.width = width;
  this.height = height;
    this.speedX = 0;
    this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}






function gameAreaUpdated(){
  gameArea.clear();
  obstacle1.update();
  gamePiece.newPos();
  gamePiece.update();


}

function moveUp() {
  gamePiece.speedY = -1;
}

function moveDown() {
  gamePiece.speedY = 1;
}

function moveRight() {
  gamePiece.speedX = 1;
}

function moveLeft() {
  gamePiece.speedX = -1;
}
function clearMove(){
  gamePiece.speedX = 0;
  gamePiece.speedY = 0;
}


function stopMove() {
  gamePiece.speedX = 0;
  gamePiece.speedY = 0;
}






