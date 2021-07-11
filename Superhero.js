class Superhero{
    constructor(x,y,width,height,angle){
        var options = {
            density : 1,
            frictionAir : 0.005
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Superhero.png")
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        pop();
        image(this.image,this.body.position.x,this.body.position.y,200,90);
    }
}