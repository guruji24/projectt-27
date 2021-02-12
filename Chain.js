class Chain{
    constructor(body1,body2,point){
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB: point,
            length: 150,
            stiffness: 0.2
        }
        this.chain = Constraint.create(options);
        this.point = point
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position
            var pointB = this.chain.bodyB.position

            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x + this.point.x,pointB.y+this.point.y);
        }
    }

}