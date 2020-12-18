//Engine, World, Bodies = Matter.js
//Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//function setup()
/* 1. Create the physics Engine inside a vble called 'engine' using 'Engine.create()' => Matter.Engine.create()
2. Create a world for the physics Engine inside a vble called 'world' using 'engine.world'
3. Create a rectanguler or circular body using 'Bodies.rectangle(x,y,width,height)/Bodies.circle(x,y,radius)' inside a vble
4. Add the bodies to the world using 'World.add(world,object_name);'
5. Give options to the bodies if necessary

function draw()
6. Inside the function draw, represent the Bodies.rectangle or Bodies.circle using 'rect' or 'ellipse'
7. Update the physics Engine using 'Engine.update(engine')*/

var engine;
var world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  //1
engine = Engine.create();

//2
world = engine.world;

//to make the ground a static one (immovable)
var groundOptions = {
isStatic: true
}
//3
ground = Bodies.rectangle(200,380,400,20,groundOptions);
World.add(world,ground);

//to make the ball a bouncy one
var ballOptions = {
restitution:1

}

ball = Bodies.circle(200,100,30,ballOptions);
World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30,30);
  drawSprites();
}

//sprite (ball) -> ball.x = 50;
//object from phy eng -> objectname.position.x = 50