//Create fish1 sprite
var fish1 = createSprite(20,100);
fish1.setAnimation("prehistoric_12_1");
fish1.velocityX = 6;
fish1.scale = 0.4;

//Create fish2 
var fish2 = createSprite(380,210);
fish2.setAnimation("creature_14_1");
fish2.velocityX = -5;
fish2.scale = 0.2;

//Create fish3 sprite 
var fish3 = createSprite(20,310);
fish3.setAnimation("prehistoric_11_1");
fish3.velocityX = 6;
fish3.scale = 0.35;

//sound
playSound("Original_Tetris_theme_Tetris_Sound_(getmp3.pro).mp3", true);


//death
var count = 0;
var death = 0;

//create beachball and start/finish
var ball;

var wall1 = createSprite(190,10,100,3);
var wall2 = createSprite(240,30,3,40);
var wall3 = createSprite(140,30,3,40);
var wall4 = createSprite(190,390,100,3);
var wall5 = createSprite(240,370,3,40);
var wall6 = createSprite(140,370,3,40);


ball = createSprite(200,20);
ball.setAnimation("beachball_1");
ball.scale = 0.1;



function draw() {
  background("blue");
   
   textSize(20);
  text("death: "+count,40,25);
  //controls
  if(keyDown(RIGHT_ARROW)){
    ball.x = ball.x+3;
  }
  
  if(keyDown(LEFT_ARROW) ){
    ball.x = ball.x-3;
  }
  
  if(keyDown(DOWN_ARROW)){
     ball.y = ball.y+3;
  }
  
  if(keyDown(UP_ARROW)){
    ball.y = ball.y-3;
  }
  
  
ball.bounceOff(edges);
ball.bounceOff(wall1);
ball.bounceOff(wall2);
ball.bounceOff(wall3);
ball.bounceOff(wall4);
ball.bounceOff(wall5);
ball.bounceOff(wall6);

if(ball.isTouching(fish1) || ball.isTouching(fish2) || ball.isTouching(fish3))
 {
   ball.x = 210;
   ball.y = 25;
   count = count+1;
 }
 
 if(ball.collide(wall4))
  {
  ball.velocityX=0;
  ball.velocityY=0;
  text ("Nice job", 310,20);
  }
 
  //if condition to check if fish1 cross the right edge...
  if(fish1.x > 430) {
    //make fish1 reappear at left edge.
    fish1.x = 20;
  }

  //write if condition for fish2
  if(fish2.x < -40) {
    fish2.x = 300;
  }
  
  //write if condition for fish3.
  if(fish3.x > 430) {
    fish3.x = 20;
    
  }
  
   if(ball.isTouching(wall5)||
     ball.isTouching(wall6));
     ball.isTouching(wall4);
  {
     ball.x = 190;
     ball.y = 10;
     count = count + 1;
  }
  
  //draw the sprites
  drawSprites();
}

createEdgeSprites();


