var paperObject,paper,ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(100,0,30)
	ground = new Ground(600,600,1200,20)
	box1 = new Dustbin(620,575,160,20)
	box2 = new Dustbin1(535,495,20,180)
	box3 = new Dustbin1(705,495,20,180)
	
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  paper.display();
  box2.display();
  box3.display();
  box1.display();


  drawSprites();
 
}
function keyPressed(){
 
	if(keyCode === UP_ARROW) {


		Body.applyForce(paper.body,paper.body.position,{x:150,y:-160});

	}


}


