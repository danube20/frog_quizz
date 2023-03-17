class Masks {
    constructor (ctx){
        this.ctx = ctx;
    }

    draw(){
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        this.ctx.fillRect(10, 0, 150, 226)
        this.ctx.fillRect(10, 170, 70, 120)
        this.ctx.fillRect(480,600,160,200)
        this.ctx.fillRect(380, 80, 260, 66)
    }
}