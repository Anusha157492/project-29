class Platform{
    constructor(x,y,width,height){
       var options ={
           isStatic: true,
        }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          world.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(64,45,38);
        rectMode(CENTER);
        rect(pose.x, pose.y, this.width, this.height);
        

    }
}