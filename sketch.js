var player, database;
var score=3;
var position;
var backgroundImage 
var bulletGroup,bulletGroup1;
function preload(){
  npc=loadImage("enemy.png")
  horse=loadImage("horse.png")
  backgroundImage = loadImage("bg.jpg");
  heartimg = loadImage("redheart1.png");

  
  
}
function setup(){
  createCanvas(800,800);
  button1 = createButton('jump')
  button1.position(700,750)
  button1.size(50,50)
  button2 = createButton('shoot')
  button2.position(1300,750)
  button2.size(50,50)
  button3 = createButton('right')
  button3.position(750,800)
  button3.size(50,50)
  button4 = createButton('left')
  button4.position(650,800)
  button4.size(50,50)
  player = createSprite(150,490,10,10);
  invground = createSprite(600,550,1200,10);
  enemy = createSprite(600,490,50,50);
  heart1 = createSprite(80,100,10,10);
  heart2 = createSprite(120,100,10,10);
  heart3 = createSprite(160,100,10,10);
  heart1.addImage("heart",heartimg)
  heart2.addImage("heart",heartimg)
  heart3.addImage("heart",heartimg)
  heart1.scale=0.1
  heart2.scale=0.1
  heart3.scale=0.1
  
  enemy.visible = false;
  player.shapeColor = "red";
  player.addImage("horse",horse);
  enemy.addImage("npc",npc);
  player.scale=0.1;
   bulletGroup = createGroup();
   bulletGroup1 = createGroup();
  player.debug=true;
  enemy.debug=true;
  player.setCollider("rectangle",0,0,850,850);
  enemy.setCollider("rectangle",0,0,50,50);
  invground.visible=false;
}

function draw(){
  background(backgroundImage);
  text(score,200,200)
 player.collide(invground);
 enemy.collide(invground);
 button1.mousePressed(jump)
 button2.mousePressed(shoot)
 button3.mousePressed(goright)
 button4.mousePressed(goleft)
console.log(player.y)
    if(touches.length>0 || keyDown(RIGHT_ARROW)){
      writePosition(+4,0);
      touches=[]

    }
    else if(keyDown(UP_ARROW)){
      player.velocityY = -8;
    }
    else if(keyDown(LEFT_ARROW)){
      writePosition(-4,0)
    }
    
    player.velocityY = player.velocityY + 0.8;
    if (keyDown("space")) {
      createBullet(player.x);
    }


if(player.x > 150)
  {
    enemy.visible=true;
    createBulletenemy(enemy.x);
    if (bulletGroup1!==null){
      if(bulletGroup1.collide(player)){
       score=score-1;
       if (score===2){
         heart3.visible=false;
       }
       if (score===1){
         heart2.visible=false;
       }
       if (score===0){
         heart1.visible=false;
         player.destroy();
       }
      }
    }
    if(bulletGroup.isTouching(enemy))
    {
      enemy.destroy();
      bulletGroup1=null;
    }
  }
    drawSprites();
  
  }


function writePosition(x,y){
 
  player.x = player.x + x;
  player.y = player.y + y;
  
  if (player.x < 800){
      bg="bg.jpg"
      
    }

    else{
      bg="bg2.jpg"
    }
    backgroundImage=loadImage(bg)

  

  
}

function createBullet(x) {
  
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = 480;
  bullet.x = x;                                           
  bullet.shapeColor = "red";
  bullet.velocityX = 5;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);

}

function createBulletenemy(x) {
  if(bulletGroup1!== null){
    if (World.frameCount%50===0){
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = 500;
  bullet.x = x;                                           
  bullet.shapeColor = "red";
  bullet.velocityX = -5;
  bullet.lifetime = 1000;
  bulletGroup1.add(bullet);
    }
  }

}
function shoot(){
  createBullet(player.x);

}
function jump(){
  player.velocityY=-10;
}
function goleft(){
  writePosition(-4,0);
}
function goright(){
  writePosition(+4,0);
}







