
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


  
ball1=new Ball(300,350,50);
ball2=new Ball(350,350,50);
ball3=new Ball(400,350,50);
ball4=new Ball(450,350,50);
ball5=new Ball(500,350,50);


  ground1 = new Ground(400,100,300,40);
  rope1= new Chain(ball1.body,ground1.body,-50*2,0);
  rope2= new Chain(ball2.body,ground1.body,-25*2,0);
  rope3= new Chain(ball3.body,ground1.body,-0*2,0);
  rope4= new Chain(ball4.body,ground1.body,25*2,0);
  rope5= new Chain(ball5.body,ground1.body,50*2,0);
	Engine.run(engine);
  
}


function draw() {
  background(255)

  rectMode(CENTER);
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball3.display();
  ball4.display();
  ball5.display();

  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100}); } 
  
}





