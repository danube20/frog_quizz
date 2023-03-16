class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.image = new Image();
    this.image.src = "../images/Sprite/quietaup_20.png";

    this.width = 280;
    this.height = 239;
    this.image.frames = 20;
    this.image.framesIndex = 0;
    this.lastMove;

    this.posX = 250;
    this.posY = 600;

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
          this.image.frames = 20;
          this.posX += this.velMOVE;
          this.image.src = "../images/Sprite/saltodch_20.png";
          this.lastMove = "right";
          break;
        case this.keys.LEFT:
          this.image.frames = 20;
          this.posX -= this.velMOVE;
          this.image.src = "../images/Sprite/saltoizq_20.png";
          this.lastMove = "left";
          break;
        case this.keys.UP:
          this.image.frames = 20;
          this.posY -= this.velMOVE;
          this.image.src = "../images/Sprite/movimientoarriba_20.png";
          this.lastMove = "up";
          break;
        case this.keys.DOWN:
          this.image.frames = 20;
          this.posY += this.velMOVE;
          this.image.src = "../images/Sprite/movimientoabajo_20.png";
          this.lastMove = "down";
      }
    });
    document.addEventListener("keyup", (e) => {
      if (this.lastMove === "up") {
        this.image.src = "../images/Sprite/quietaup_20.png";
      }
      if (this.lastMove === "down") {
        this.image.frames = 1;
        this.image.src = "../images/Sprite/quietadown.png";
      }
      if (this.lastMove === "right") {
        this.image.src = "../images/Sprite/quietadch_20.png";
      }
      if (this.lastMove === "left") {
        this.image.src = "../images/Sprite/quietaizq_20.png";
      }
    });
  }

  animate(framesCounter) {
    if (framesCounter % 3 === 0) {
      this.image.framesIndex++;
    }

    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
}
