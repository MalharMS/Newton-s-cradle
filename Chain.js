class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
        }
        display(){
            var pointA= this.Chain.bodyA.position;
            var pointB= this.Chain.bodyB.position;

            //stroke(0);
            strokeWeight (1)
            var hook1x = pointA.x
            var hook1y = pointA.y
            
            var hook1x2 = pointB.x+this.offsetX
            var Anchor2Y = pointB.y+this.offsetY
            line (hook1x,hook1y,hook1x2,Anchor2Y);
        }
        
}
