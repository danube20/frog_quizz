class QuizzObject {
    constructor(ctx, posX, posY, imgSrc) {
      this.ctx = ctx;

      this.width = 200;
      this.height = 200;

      this.posX = posX;
      this.posY = posY;
      this.image = new Image();
      this.image.src = imgSrc;
    }

    draw() {
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    }

}

class PowerUpObject extends QuizzObject {
  constructor(ctx, posX, posY, imgSrc) {
    super(ctx, posX, posY, imgSrc)
  }
}