class heart{
    constructor(){
        this.body = Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height = 50;
        world.add(world,this.body);
        this.image = loadImage("redheart1.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(center);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
