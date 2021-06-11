class Box {
    constructor(x,y,w,h,vX, vY){
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vx = vX;
        this.vy = vY;

    }
    display(){
        rect(this.x, this.y, this.w, this.h);
    }

    move(){
        this.x += this.vx;
        this.y += this.vy;
    }

    bounce(){
        if (this.x < 0 || this.x > width){
            this.vx = -this.vx;
        }
        if (this.y < 0 || this.y > height){
           this.vy = -this.vy;
        }
    }
}