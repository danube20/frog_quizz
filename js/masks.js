class Mask {
  constructor(ctx, posX, posY, w, h) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.width = w;
    this.height = h;


  }

  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
