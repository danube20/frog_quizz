class Splashdown {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 140;
    this.height = 140;

    this.image = new Image();
    this.image.src = "./images/Sprite/splashdown.png";

    this.posX = Game.player.posX;
    this.posY = Game.player.posY - 70;

    this.image.frames = 11;
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
      Game.splashdownsArray = [];
    }
  }
}
