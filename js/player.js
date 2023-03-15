class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.image = new Image();
    this.image.src = "../images/Sprite/quieta_20.png";

    this.width = 280;
    this.height = 239;
    this.image.frames = 20;
    this.image.framesIndex = 0;

    this.posX = 0;
    this.posY = 0;

    this.velMOVE = 20;

    this.keys = keys;

    this.setListeners();
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


  setListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.RIGHT:
          this.posX += this.velMOVE;
          break;
        case this.keys.LEFT:
          this.posX -= this.velMOVE;
          break;
        case this.keys.UP:
          this.posY -= this.velMOVE;
          break;
        case this.keys.DOWN:
          this.posY += this.velMOVE;
      }
    });
  }

  animate(framesCounter) {
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }

    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
}
