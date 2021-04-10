var bg, bgIMG;
var bow, bowIMG
var ar,arr
var gb,pb,rb,bb
var gbI,pbI,rbI,bbI
var score =0


function preload(){
  createCanvas(600,600);
  bgIMG = loadImage("background0.png")
  bowIMG = loadImage("bow0.png")
  ar = loadImage("arrow0.png")
  gbI = loadImage("green_balloon0.png")
  pbI = loadImage("pink_balloon0.png")
 
  rbI = loadImage("red_balloon0.png")
  bbI = loadImage("blue_balloon0.png")
  
}

function setup() {
  
  
  bg = createSprite(200,200,0,0)
  bg.addImage("bgbg",bgIMG)
  bg.scale = 2.5
  bg.x = bg.width/2
  
  bow = createSprite(390,200,1,1)
  bow.addImage("shoot",bowIMG)

  
  
  
  
}


function draw() {
  

  
background("blue")

text("score = " +  score,330,20)
  
bg.velocityX = -2
  
if(bg.x < 0){
  bg.x = bg.width/2
}

  bow.y = mouseY
  
if(keyWentDown("space")){
  arr = createSprite(390,bow.y,0,0)
  arr.addImage("arro",ar)
  arr.scale = 0.25
  arr.velocityX = -5
  

}
  
drawSprites()
spawnObstacles()
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(random(1,6),random(200,400),10,40);
   
   obstacle.scale = 0.1
   obstacle.velocityX = 6;
   obstacle.lifetime = 134;
   
   if(obstacle.isTouching(arr)){
     score = score + 1
   }
   
       var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(gbI);
        
              break;
      case 2: obstacle.addImage(pbI);
       
              break;
      case 3: obstacle.addImage(bbI);
      
              break;
      case 4: obstacle.addImage(rbI);
        break;
  }
 }
}  