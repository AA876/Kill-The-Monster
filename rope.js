class Rope{
    constructor(bodyA, bodyB){
var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness: 1.2,
    length: 250
}
this.pointB = pointB
this.rope = Constraint.create(options)
World.add(world, this.rope)
    }
attach(){
this.rope.bodyA = body
}

fly(){
this.rope.bodyA = null    
}

    display(){
    if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
    push ()
    stroke("brown");
    strokeWeight(0);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
    }
}