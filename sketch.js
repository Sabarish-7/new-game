
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];

function preload()
{
	
}



function setup() {
	createCanvas(1350, 650);
	engine = Engine.create();
	world = engine.world;


 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  //Sethu Sabarish S


  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),random(height/2-30, height/2+30),10))
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }


 
  drawSprites();

  
  



}



