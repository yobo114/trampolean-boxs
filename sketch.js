

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world; 
var box1;
var box2; 
var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(220,200,50,100);
  box2 = new Box (200,300,50,60 );
  ground = new Ground (200,390,400,20);

} 
function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}