class River {
  constructor(ctx, w) {
    this.ctx = ctx;
    this.width = w;
    this.height = 240;

    this.image = new Image();
    this.image.src = "./images/river.png";

    this.posX = 0;
    this.posY = 390;

    this.velX = 0.2;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.image,
      this.posX + this.width,
      this.posY,
      this.width,
      this.height
    );
    this.move();
  }

  move() {
    this.posX -= this.velX;
    if (this.posX <= -this.width) {
      this.posX = 0;
    }
  }
}
