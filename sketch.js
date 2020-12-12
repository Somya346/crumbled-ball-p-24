const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, World;

var paper1,ground1;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	
	engine = Engine.create();
  world = engine.world;
  
  box1=createSprite(300,600,20,100);
	box1.shapeColor=color(255,0,0);

	box2=createSprite(410,650,200,20);
	box2.shapeColor=color(255,0,0);

	box3=createSprite(520,600,20,100);
	box3.shapeColor=color(255,0,0);


paper1= new paper(200, 400, 10,10);	
ground1= new ground(600,height,1200,20);

  //Create the Bodies Here.
  
  var ground_options={
    isStatic: true
  }

  ground1 = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground1);

var paperBody_options= {
  restitution: 1.0
  }
  paperBody=Bodies.circle(width/2, 200, 5, {isStatic: true})
World.add(world,paperBody);


  
   Engine.run(engine);
  }


function draw() {
rectMode(center);
   background(0);

   rect(ground1.position.x,ground1.position.y,400,20);
 Engine.update(engine);
  console.log(ground1);
  paper1.display();
  ground1.dispkay();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBody.body, paperBody.body.position,{x:85, y:-85});
  }
}


