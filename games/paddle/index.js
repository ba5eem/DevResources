//This code was made following an online tutorial to practive making a javascript game. src = https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls


//Finds canvas element
var canvas = document.getElementById("myCanvas");
//Stores the 2d element in the canvas
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var bx = canvas.width/4;//i added the second one for practice - delete when you continue tutorial
var by = canvas.height-60;//i added the second one for practice - delete when you continue tutorial
var ddx = 3;//i added the second one for practice - delete when you continue tutorial
var ddy = -3;//i added the second one for practice - delete when you continue tutorial
var ballRadius = 10;
var startAngle = 0;



ctx.arc(x/*x*/,y/*y*/,ballRadius/*arc radius*/,startAngle/*start angle*/, Math.PI*2/*end angle*/);
    ctx.fillStyle = 'yellow';
    ctx.fill();

function drawBall(){
    //drawing code
    //Code creates the circle on the canvas - ball that moves
    ctx.beginPath();
   ctx.arc(x/*x*/,y/*y*/,ballRadius/*arc radius*/,startAngle/*start angle*/, Math.PI*2/*end angle*/);
   ctx.arc(bx/*x*/,by/*y*/,ballRadius/*arc radius*/,startAngle/*start angle*/, Math.PI*2/*end angle*/); //i added the second one for practice - delete when you continue tutorial
    ctx.fillStyle = 'yellow';
    ctx.fill();
    
    ctx.closePath();

}
setInterval(draw, 3);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    x += dx;
    y += dy;
    bx += ddx;
    by += ddy;

// These IF statements are to ensure the ball doesnt go off the canvas, as it hits a certain point defined the ball will bounce back - essentially moving at -"x/y" speed    
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
    dy = -dy;
    ctx.fillStyle = 'red';
    ctx.fill();
}

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
    dx = -dx;

}
if(by + ddy > canvas.height-ballRadius || by + ddy < ballRadius){
    ddy = -ddy;
    ctx.fillStyle = 'red';
    ctx.fill();
}//i added the second one for practice - delete when you continue tutorial

if(bx + ddx > canvas.width-ballRadius || bx + ddx < ballRadius){
    ddx = -ddx;

}//i added the second one for practice - delete when you continue tutorial


}


//Code creates red square on the canvas - must be launchpad
ctx.beginPath();//this must be a function that will be used later
ctx.rect(20/*x cord(left side)*/,40/*y cord(top side)*/,50/*width*/,50/*height*/); //i remmeber this from khan academy - the rect is connected to the ctx. 
ctx.fillStyle = "red"; //sets color of element
ctx.fill(); //this is very similar to khan form of javascript
ctx.closePath();//must be another functiong that will be used.



//Code create rectangle shapes with no fill - has stroke: - target bricks
ctx.beginPath();
ctx.rect(160,10,100,40);
ctx.strokeStyle = "rgba(0,0,255,0.5)";
ctx.stroke();
ctx.closePath();







