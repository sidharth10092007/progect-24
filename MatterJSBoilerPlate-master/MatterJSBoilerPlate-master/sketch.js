
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,box1,log1,rubber;

function setup() {
	var canvas = createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

	box1 = new Box(700,320,70,70);
	rubber=new Rubber(500,320,70,70)
	
	log1=new Log(100,100)

	


	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  ground.display();
  box1.display();
  rubber.display();
  log1.display();
 
  
  drawSprites();
 
}



