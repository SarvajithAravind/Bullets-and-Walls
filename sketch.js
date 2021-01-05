var wall, thickness;
var bullet, speed, weight;

function setup() {
  console.log("****setup*****")
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 5);
  bullet.shapeColor = "white";
  thickness = random(22,83);
  weight = random(30,52);
  speed = random(223, 321);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;
  
}

function draw() {
  background(0,0,0);
  bullet.velocityX = speed;
  console.log("****draw****",speed)
  speed = random(223,321);
  console.log("****draw1****",speed)
  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
 drawSprites();
}

function hasCollided(lbullet, lwall)
{
  console.log("****hasCollided*****")
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge= lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}