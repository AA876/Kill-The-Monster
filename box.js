class Box{
    constructor(x,y,width,height){
var options = {
    'friction':0.9,
    'resitution':0.3
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
World.add(world, this.body)
    }
    display(){
    var pos = this.body.position
    push ()
    translate(this.body.position.x, this.body.position.y)
    rectMode(CENTER)
    rotate (angle)
    strokeWeight(4)
    stroke("red")
    fill ("lightgreen")
    rect(0,0,this.width,this.height)
    pop ()    
    }
}