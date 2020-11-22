class Block{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
        }
        this.visibility=255;
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
          if(this.body.speed <12){
       var pos =this.body.position;
        push ();
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        rectMode(CENTER);
        fill(238, 3, 158);
        rect(0,0, this.width, this.height);
        pop ();
          
          }else{
            push();
            World.remove(world,this.body)
           
            this.visibility=this.visibility-5;
            tint (255,this.visibility)
            pop ();
          }
        }
        score(){
          if(this.visibility<0&&this.visibility>-105){
            score++;


          }
          
        }
      }

