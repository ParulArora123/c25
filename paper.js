class paper{

    constructor(x,y,width,height){

var options={
    isStatic:false,
    density:1.2,
    friction:0,
    restitution:0.3
}
    
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("paper.png")
    World.add(world,this.body)

    }

    display(){
        var angle=this.body.angle;
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,67,67)
        pop()
    
    
    
        
    }
}