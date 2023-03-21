class TableDown {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 188;
    this.height = 150;

    this.image = new Image();
    this.image.src = "/images/Wood03.png";

    this.posX = -this.width;
    this.posY = 500;

    this.velX = 1;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.move();
  }

  move() {
    if (!Game.atQuizz) {
      this.posX += this.velX;
    }
  }
}
