const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var targetArray=[]

function preload(){
  ballI=loadImage("polygon.png")
}

function setup(){
  createCanvas(1200,600)

  GS=0

  engine=Engine.create()
  world=engine.world

  p1=new platform(690,500,250,10)
  p2=new platform(1000,400,200,10);

  fill("orange")
  for(var i=600;i<810;i+=30){
    targetArray.push(new Target(i,475,30,40))
  }
  for(var i=630;i<780;i+=30){
    targetArray.push(new Target(i,435,30,40))
  }
  for(var i=660;i<750;i+=30){
    targetArray.push(new Target(i,395,30,40))
  }
  for(var i=690;i<720;i+=30){
    targetArray.push(new Target(i,355,30,40))
  }
  for(var i=940;i<1090;i+=30){
    targetArray.push(new Target(i,375,30,40))
  }
  for(var i=970;i<1060;i+=30){
    targetArray.push(new Target(i,335,30,40))
  }
  for(var i=1000;i<1030;i+=30){
    targetArray.push(new Target(i,295,30,40))
  }

  ground1=new ground()

 
  polygon=Bodies.polygon(30,30,6,20)
  polygon.radius=20
  World.add(world,polygon)

  sling1=new slingshot(this.polygon,{x:250,y:150})
}

function draw(){
  background(0)
  Engine.update(engine)


  text(mouseX+","+mouseY,mouseX,mouseY)
  p1.display()
  p2.display()

  for(var i=0;i<targetArray.length;i++){
    targetArray[i].display()
  }

  ground1.display()

  imageMode(CENTER)
  image(ballI,polygon.position.x,polygon.position.y,40,40)

  sling1.display()
}

function mouseDragged(){
  if (GS==0){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  sling1.fly()
  GS=1
}

function keyPressed(){
  if(keyCode===32){
    sling1.attach(polygon)
    GS=0
  }
}

