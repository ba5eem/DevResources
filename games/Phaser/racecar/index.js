var game = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game', { preload: preload, create: create, update: update });
var score = 0;
var health = 0;
var scoreText;
var skyField;

function preload() {

    game.load.image('sky', 'assets/sky.png');
    game.load.image('road', 'assets/road.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('aid', 'assets/firstaid.png');
    game.load.image('dude', 'assets/ship1.png', 32, 48);
    game.load.spritesheet('bad', 'assets/baddie.png');
}

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

   
    game.add.sprite(0, 0, 'sky');

    //  moving background - img src from newgrounds.com
    road = game.add.sprite(0,0,'road');



    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;
  

    //the player and its settings
    player = game.add.sprite(game.world.width/2-20, game.world.height - 150, 'dude');

    //we need to enable physics on the player
    game.physics.arcade.enable(player);

    //player physics properties. give the little guy a slight bounce
    player.body.bounce.y = 0.2;
    //player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;//if this was false, the dude fell throught the ground. 


    //our controls
    cursors = game.input.keyboard.createCursorKeys();

    stars = game.add.group();

    stars.enableBody = true;

    //here well create 12 of them evenly spaced apartt
    // for (var i = 0; i <6; i++){
    //   //create a star inside of the 'stars' group
    //   var star = stars.create(700, 30+(i * 100), 'star');

    //   //let gravirty do its thing
    //   star.body.gravity.x = -100;
    // }

    scoreText = game.add.text(16, 16, 'Speed: 0', {fontSize: '32px', fill: 'white'});

}

function update() {

  //collide the player and the stars with the platforms
  var hitPlatform = game.physics.arcade.collide(player, platforms);
  //var aidPlatform = game.physics.arcade.collide(aid, platforms);
  //reset the players veloccity (movement)
  player.body.velocity.x = 0;

  if (cursors.left.isDown){
    //move to the left
    player.body.velocity.x = -150;
    player.animations.play('left');
  }
  else if(cursors.right.isDown){
    //move to the right
    player.body.velocity.x = 150;

    player.animations.play('right');
  }
  else{
    //stand still
    player.animations.stop();

    player.frame = 4;
  }

  if (cursors.up.isDown){
    player.body.velocity.y = -150;
  }

  else if(cursors.down.isDown){
    player.body.velocity.y = 150;
  }

  //allow platyer to jump if they are touching the ground.
  // if (cursors.up.isDown && player.body.touching.down && hitPlatform){
  //   player.body.velocity.y = -350;
  // }

  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.overlap(player, stars, collectStar, null, this);

  //game.physics.arcade.overlap(player, aid, collectAid, null, this);

  //skyField.tilePosition.x -=2;

}

function collectAid (player, aid){
    //aid.kill();
    health+=10;
    healthText.text = "Health: " + health;
  }

function collectStar (player, star) {

  //removes te star from the screen
  star.kill();
  //add and update the score
  score += 10;
  scoreText.text = 'Score: ' + score;

  if(score === 20){

  }

 

  
}