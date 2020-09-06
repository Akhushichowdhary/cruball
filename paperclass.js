class PaperBall{ constructor(x,y,radius){
    var option = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2,
    }
    this.body = Bodies.circle(x,y,radius/2,option);
    
    World.add(world,this.body);
   

}
display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill ("pink")
    ellipse(pos.x,pos.y,this.radius,this.radius);
}
}
    