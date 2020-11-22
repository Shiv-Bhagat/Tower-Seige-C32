//a class that creates a constraint
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(slingshot){
        this.sling.bodyA = slingshot
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(4);
            stroke(250, 121, 40);
            push ();
            if (pointA.x < 220){
                strokeWeight(3)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
           // image(this.sling3,pointA.x-30,pointA.y,15,30)
            }
            else
            {
                strokeWeight(7)
                line(pointA.x, pointA.y, pointB.x, pointB.y);
          //  line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
           // image(this.sling3,pointA.x-30,pointA.y,15,30)
            }
            pop ();
        }
        
    }
    
}