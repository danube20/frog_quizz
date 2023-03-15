class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.image = new Image();
    this.image.src = "../images/Sprite/quieta_2.png";

    this.width = 514;
    this.height = 392;
    this.image.frames = 0;
    this.image.framesIndex = 0;

    this.posX = 0;
    this.posY = 0;

    this.velMOVE = 20;

    this.keys = keys;

    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
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
}
