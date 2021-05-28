class Target{
    constructor(x,y,width, height){


        var options = {
                     
        }

        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.visibility=255

        World.add(world,this.body)

        this.image=loadImage("target.png")

    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle

        if (this.body.speed<4){     
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            imageMode(CENTER)
            //fill("red")
            image(this.image,0,0,this.width,this.height)
            pop()
        }
        else{

        World.remove(world,this.body)
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        //fill("red")
        this.visibility-=5
        tint(255,this.visibility)
        image(this.image,0,0,this.width,this.height)
        pop()
        }
    }
}