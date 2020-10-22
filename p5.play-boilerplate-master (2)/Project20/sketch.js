var bullet,wall;
var speed,weight,thickness;
var damage;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";
  wall = createSprite(1500,200,thickness,height / 2);
  wall.shapeColor = (80,80,80);
  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
}

function draw() {
  background(0,0,0);  

  bullet.velocityX = speed;
  bullet.collide(wall);

  fill(255,255,255);
  text("Damage: " + damage, 1000, 100);

  if (damage > 10) {
    wall.shapeColor = "red";
  } else {
    wall.shapeColor = "green";
  }
  

  drawSprites();
}