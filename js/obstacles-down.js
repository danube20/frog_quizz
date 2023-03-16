class ObstacleDown {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 188;
    this.height = 120;

    this.image = new Image();
    this.image.src = "../images/Sprite/cochedown1_20.png";

    this.posX = -this.width-10;
    this.posY = 426;

    this.image.frames = 20;
    this.image.framesIndex = 0;

    this.velX = 3;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      (this.image.width / this.image.frames) * this.image.framesIndex,
      0,
      this.image.width / this.image.frames,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.animate(framesCounter);
    this.move();

  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }

    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }

  move() {
    this.posX += this.velX;
  }
}
