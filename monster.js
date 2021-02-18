class Monster{
    constructor(x,y,width,height){
var options = {
    isStatic: true
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
this.image("Monster-02.png")
World.add(world, this.body)
    }
    display(){
    var pos = this.body.position
    push ()
    translate(this.body.position.x, this.body.position.y)
    rectMode(CENTER)
    rotate (angle)
    strokeWeight(4)
    image(this.image,0,0,this.width,this.height)
    pop ()    
    }
}