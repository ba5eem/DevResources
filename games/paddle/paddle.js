//jshint esversion: 6
console.log("sanity check-app.js lives here");
//https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

//////////VARIABLES////////////
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
//x & y positions:
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
//Paddle dimensions:
const paddleHeight = 20;
const paddleWidth = 150;
//paddle positioning
var paddleX = (canvas.width-paddleWidth)/2;//sets it to start in the middle of the page
//Key variables
var rightPressed = false;
var leftPressed = false;
//score variables
var score = 0;
//life variables
var lives = 3;
//brick variables
const brickRowCount = 3;
const brickColomnCount = 5;
const brickWidth = 50;
const brickHeight = 20;
const brickPadding = 20;
const brickOffSetTop = 50;
const brickOffSetLeft =70;
const bricks = [];
//enters into array for drawBricks functions to work - need to look over this, it was on the 6th step - to understand more about how this is working.
for (c = 0; c<brickColomnCount; c++){
  bricks[c]=[];
  for (r = 0; r < brickRowCount; r++){
    bricks[c][r] = { x: 0, y: 0, status:1 };
  }
}

function drawBricks(){
  for (c = 0; c<brickColomnCount; c++){
    for (r = 0; r < brickRowCount; r++){
      if(bricks[c][r].status == 1){
      //brick positioning
      let brickX = (c*(brickWidth+brickPadding))+brickOffSetLeft;
      let brickY = (r*(brickHeight+brickPadding))+brickOffSetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX,brickY,brickWidth,brickHeight);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
      }
    }
  }
}
/////EVENT LISTENERS/////
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

function drawLives(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("lives: " +lives, canvas.width-65, 20);
}

function mouseMoveHandler(e){
  let relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width){
    paddleX = relativeX - paddleWidth/2;
  }
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function collisionDetection(){
  for (c=0; c<brickColomnCount; c++){
    for (r=0; r<brickRowCount; r++){
      let b = bricks[c][r];
      //calculations below - step 7
      if(b.status == 1){
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColomnCount){
            console.log("game won");

          }
        }
      }
    }
  }
}

function drawScore(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 8, 20);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
          lives--;
          if(!lives){
            console.log("game lost");
          }
          else{
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width-paddleWidth)/2;
          }
        }
    }
    //paddle conditional // will allow movement but prevent from moving if reaches border
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}
draw();












