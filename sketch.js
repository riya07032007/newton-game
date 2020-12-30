
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}
 var bobDiameter
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,200,400,30)
	
	bob1 = new Bob(250,600,70)
	rope1 = new Rope(bob1.body,ground.body,-150,0)
	

	bob2 = new Bob(320,600,70)
	rope2 = new Rope(bob2.body,ground.body,-87,0)
	bob3 = new Bob(390,600,70)
	rope3 = new Rope(bob3.body,ground.body,-10,0)
	bob4 = new Bob(460,600,70)
	rope4 = new Rope(bob4.body,ground.body,55,0)
	bob5 = new Bob(530,600,70)
	rope5 = new Rope(bob5.body,ground.body,130,0)
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW)

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-180,y:40})
}




