const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button

function setup() {
  createCanvas(500,700);

  ball = new Ball(200,50,20,20);
  blower = new Blower(200,150,50,10);
  blowerMouth = new BlowerMouth(200, 500, 40,10);

  engine = Engine.create();
  world = engine.world;
  
  button = createButton('Click to Blow');
  button.position(width/2,height-100);
  button.class("blowButton")
  button.mouseClicked(Blow);


}

function draw() 
{
  background(51);
  
  ball.show();
  blower.show();
  blowerMouth.show();

  Engine.update(engine);
  
}

function Blow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:0.5});
  
  }

