class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.image = new Image();
    this.image.src = "./images/Sprite/quietaup_20.png";

    this.width = 280;
    this.height = 239;
    this.image.frames = 20;
    this.image.framesIndex = 0;
    this.lastMove = undefined;

    this.posX = 200;
    this.posY = 700;

    this.velMOVE = 3;

    this.keys = keys;

    this.keyPressed = [];

    this.setEventHandlers();
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

  movement() {
    if (!Game.atQuizz) {
      this.keyPressed.forEach((elm) => {
        if (
          (elm.includes("ArrowRight") &&
            this.posX + this.width - 74 <= Game.width &&
            !Game.maskCollision()) ||
          (this.posX + this.width - 74 <= Game.width &&
            Game.maskCollision() &&
            this.lastMove !== "right")
        ) {
          this.lastMove = "right";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posX += this.velMOVE;
          this.image.src = "./images/Sprite/saltodch_20.png";
        } else if (
          (elm.includes("ArrowLeft") &&
            this.posX + 109 >= 0 &&
            !Game.maskCollision()) ||
          (this.posX + 109 >= 0 &&
            Game.maskCollision() &&
            this.lastMove !== "left")
        ) {
          this.lastMove = "left";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posX -= this.velMOVE;
          this.image.src = "./images/Sprite/saltoizq_20.png";
        } else if (
          (elm.includes("ArrowUp") &&
            this.posY + 74 >= 0 &&
            !Game.maskCollision()) ||
          (this.posY + 74 >= 0 &&
            Game.maskCollision() &&
            this.lastMove !== "up")
        ) {
          this.lastMove = "up";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posY -= this.velMOVE;
          this.image.src = "./images/Sprite/movimientoarriba_20.png";
        } else if (
          (elm.includes("ArrowDown") &&
            this.posY + this.height - 71 <= Game.height &&
            !Game.maskCollision()) ||
          (this.posY + this.height - 71 <= Game.height &&
            Game.maskCollision() &&
            this.lastMove !== "down")
        ) {
          this.lastMove = "down";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posY += this.velMOVE;
          this.image.src = "./images/Sprite/movimientoabajo_20.png";
        }
      });
    }
  }

  setEventHandlers() {
    if (!Game.atQuizz) {
      document.addEventListener("keydown", (event) => {
        const { key } = event;
        if (key === "ArrowRight" && !this.keyPressed.includes("ArrowRight"))
          this.keyPressed.push("ArrowRight");
        else if (key === "ArrowLeft" && !this.keyPressed.includes("ArrowLeft"))
          this.keyPressed.push("ArrowLeft");
        else if (key === "ArrowUp" && !this.keyPressed.includes("ArrowUp"))
          this.keyPressed.push("ArrowUp");
        else if (key === "ArrowDown" && !this.keyPressed.includes("ArrowDown"))
          this.keyPressed.push("ArrowDown");
        else return null;
      });

      document.addEventListener("keyup", (event) => {
        const { key } = event;
        if (key === "ArrowLeft") {
          this.keyPressed = [];
          this.image.src = "./images/Sprite/quietaizq_20.png";
        } else if (key === "ArrowRight") {
          this.keyPressed = [];
          this.image.src = "./images/Sprite/quietadch_20.png";
        } else if (key === "ArrowUp") {
          this.keyPressed = [];
          this.image.src = "./images/Sprite/quietaup_20.png";
        } else if (key === "ArrowDown") {
          this.keyPressed = [];
          this.image.src = "./images/Sprite/quietadown_20.png";
        } else return null;
      });
    }
  }
  animate(framesCounter) {
    if (framesCounter % 2 === 0) {
      this.image.framesIndex++;
    }

    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
}
