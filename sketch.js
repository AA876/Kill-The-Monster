const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const World = Matter.World

function preload() {
backgroudimg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1200, 800)
  engine = Engine.create()
  world = Engine.World

  hero = new Hero(200,100,20,20)

  box1 = new Box(400,height,40,40)
  box2 = new Box(400,height-40,40,40)

  monster = new Monster(800,300,20,20)

  slingshot = new Rope(hero.body,{x:200, y:200});
}

function draw() {
  Engine.update(engine)
  background(backgroundimg)

  hero.display()
  box1.display()
  box2.display()
  monster.display()
  slingshot.display()

  drawSprites()

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}