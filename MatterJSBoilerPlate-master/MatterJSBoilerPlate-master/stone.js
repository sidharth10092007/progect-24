class Stone {
    constructor(x,y,width,height){
        var option = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
      }
      this.body = Bodies.rectangle(x,y,width,height,option);
      this.width = width;
      this.height = height;

      world.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        roteate(angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("black");
        rect(0,0,this.width,this.height); 
        pop();
    }
}