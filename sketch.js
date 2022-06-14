
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, ground_img, b1, b1_img;

function preload(){

  b1_img = loadImage("assets/b1.png");
  ground_img = loadImage("assets/ground.png");
  b1_sound = loadSound("assets/blue_bird_naruto.mp3");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  var ground = createSprite(width/2, height, width, height/1.5);
  ground.addImage(ground_img);
  ground.scale = 4.5

  var b1 = createSprite(width/10 + 15 , height - 180, 50, 50);
  b1.addImage(b1_img);
  b1.scale = 0.1;
}
 00
function draw() {
  background(10,10,10);  
  Engine.update(engine);

  //if(mousePressedOver(b1_img)){
    b1_sound.play();
 // }

  drawSprites();
}
