class Explosion {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 120;
    this.height = 120;

    this.image = new Image();
    this.image.src = "../images/Sprite/colision.png";

    this.posX = Game.player.posX + 109;
    this.posY = Game.player.posY + 74;

    this.image.frames = 6;
    this.image.framesIndex = 0;
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
  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }

    if (this.image.framesIndex >= this.image.frames) {
      Game.explosionsArray = [];
    }
  }
}
