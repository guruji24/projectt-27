
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,20,1700,30);
	bob1 = new Ball(100,400)
	bob2 = new Ball(200,400);
	bob3 = new Ball(300,400);
	bob4 = new Ball(400,400);
	bob5 = new Ball(500,400);

	rope1 = new Chain(bob1.body,roof.body,{x:40,y:20});
	rope2 = new Chain(bob2.body,roof.body,{x:100,y:20});
	rope3 = new Chain(bob3.body,roof.body,{x:150,y:20});
	rope4 = new Chain(bob4.body,roof.body,{x:200,y:20});
	rope5 = new Chain(bob5.body,roof.body,{x:250,y:20});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bob2.display();
  bob1.display();
rope1.display();
rope2.display();
bob3.display();
rope3.display();
bob4.display();
rope4.display();
bob5.display();
rope5.display();
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}



