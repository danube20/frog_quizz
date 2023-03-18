class Masks {
  constructor(ctx, posX, posY, w, h) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.w = w;
    this.h = h;
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  }

  draw() {
    this.ctx.fillRect(posX, posY, w, h);
  }
}
