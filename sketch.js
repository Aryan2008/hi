const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  stroke(255)
 platform=new Platform(400,330,200,20) 

box1=new Box(325,305,50,50);
box2=new Box(375,305,50,50);
box3=new Box(425,305,50,50);
box4=new Box(475,305,50,50);
box5=new Box(350,255,50,50);
box6=new Box(400,255,50,50);
box7=new Box(450,255,50,50);
box8=new Box(375,205,50,50);
box9=new Box(425,205,50,50);
box10=new Box(400,155,50,50);
polygen=new Polygen(50,200,40,40)
slingshot=new Slingshot(polygen.body,{x:150,y:200});
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);
  platform.display();
  polygen.display();
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display(); 
 box10.display();
slingshot.display();

 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygen.body,{x:mouseX,y:mouseY})
  
  }
  function mouseReleased(){
      slingshot.fly();
  }