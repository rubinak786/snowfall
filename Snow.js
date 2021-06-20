class Snow{
    constructor(x,y){
        var options={
            density : 1,
            friction : 1,
            restitution : 0.5
        }
        this.body = Bodies.circle(x,y,2,options);
        World.add(world,this.body);
        this.image = loadImage("snow4.webp");
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y: random(0,400)});
        }
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
    }
}