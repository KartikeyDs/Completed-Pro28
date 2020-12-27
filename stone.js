class stone
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body=Bodies.circle(x,y,r/2,options);
        this.r=r;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }

    display()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}