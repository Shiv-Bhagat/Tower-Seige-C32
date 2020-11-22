class Ball{
    constructor(x,y,r){
        var options = {
            density:1.2,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r=r;
this.P=loadImage("polygon.png")
    }
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        imageMode (CENTER)
        image (this.P,0,0,this.r*2,this.r*2)
        pop ();
        
        
        
    }
}