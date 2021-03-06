const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var hasfired = false;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,450,400,10);
  box1 = new Box(500,400,50,70);
  box2 = new Box(550,400,50,70);
  box3 = new Box(600,400,50,70);
  box4 = new Box(650,400,50,70);
  box5 = new Box(700,400,50,70);
  box6 = new Box(600,350,50,70);
  box7 = new Box(550,350,50,70);
  box8= new Box(650,350,50,70);
  box9 = new Box(600,300,50,70);

  ground2 = new Ground(1000,250,200,10);
  set1 = new Box(1000,215,25,70);
  set2 = new Box(1025,215,25,70);
  set3 = new Box(975,215,25,70);
  set4 = new Box(1012.5,145,25,70);
  set5 = new Box(987.5,145,25,70);
  set6 = new Box(1000,75,25,70);

  stone = new Polygon();
  slingshot = new SlingShot(stone.body,{x:200,y:300});
}

function draw() {
  background(200,200,200);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  set1.display();
  set2.display();
  set3.display();
  set4.display();
  set5.display();
  set6.display();

  stone.display();
  slingshot.display();


  Engine.update(engine);
  ground.display();
  ground2.display();
  drawSprites();
}
function mouseDragged(){
  if(hasfired === false){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  hasfired = true;
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone.body);
      hasfired = false;
  }
}