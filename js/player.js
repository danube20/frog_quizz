class Player {
  constructor(ctx, gameW, gameH, keys, tileMap) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.image = new Image();
    this.image.src = "../images/Sprite/quietaup_20.png";

    this.width = 148;
    this.height = 148;
    this.image.frames = 20;
    this.image.framesIndex = 0;
    this.lastMove = undefined;
    this.rightTile = 0;
    this.leftTile = 0;
    this.upTile = 0;
    this.downTile = 0;
    this.actualTile = undefined;
    this.requestedMovingDirection = null;

    this.map = map;

    this.posX = 259;
    this.posY = 777;

    this.velMOVE = 3;

    this.keys = keys;

    this.keyPressed = [];

    this.tileMap = tileMap;
    this.tileSize = 37;

    this.setEventHandlers();

    this.horizontalRect = {
      x: this.posX + this.velMOVE,
      y: this.posY,
      width: this.width,
      height: this.height,
    };

    this.verticalRect = {
      x: this.posX,
      y: this.posY + this.velMOVE,
      width: this.width,
      height: this.height,
    };

    this.column = 0;
    this.row = 0;
    this.nextColumn = 0;
    this.nextRow = 0;
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
    this.didCollideWithEnviroment(this.posX + 58, this.posY + 39);
  }

  movement() {
    if (!Game.atQuizz) {
      this.keyPressed.forEach((elm) => {
        if (
          elm.includes("ArrowRight") &&
          // this.posX + this.width - 74 <= Game.width &&
          this.map[this.row][this.column + 1] === 0 &&
          this.column <= 17
        ) {
          this.lastMove = "right";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posX += this.velMOVE;
          this.image.src = "../images/Sprite/saltodch_20.png";
        } else if (
          elm.includes("ArrowLeft") &&
          // this.posX + 109 >= 0 &&
          this.map[this.row][this.column - 1] === 0 &&
          this.column >= 1
        ) {
          this.lastMove = "left";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posX -= this.velMOVE;
          this.image.src = "../images/Sprite/saltoizq_20.png";
        } else if (
          elm.includes("ArrowUp") &&
          // this.posY + 74 >= 0 &&
          this.map[this.row - 1][this.column] === 0 &&
          this.row >= 1
        ) {
          this.lastMove = "up";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posY -= this.velMOVE;
          this.image.src = "../images/Sprite/movimientoarriba_20.png";
        } else if (
          elm.includes("ArrowDown") &&
          // this.posY + this.height - 71 <= Game.height &&
          this.map[this.row + 1][this.column] === 0 &&
          this.row <= 24
        ) {
          this.lastMove = "down";
          Game.jumpAudio.play();
          this.image.frames = 20;
          this.posY += this.velMOVE;
          this.image.src = "../images/Sprite/movimientoabajo_20.png";
        }
      });
    }
  }

  setEventHandlers() {
    if (!Game.atQuizz) {
      document.addEventListener("keydown", (event) => {
        Game.croacSound.pause();
        const { key } = event;
        if (key === "ArrowRight" && !this.keyPressed.includes("ArrowRight")) {
          this.keyPressed.push("ArrowRight");
          Game.croacTimer = 0;
        } else if (
          key === "ArrowLeft" &&
          !this.keyPressed.includes("ArrowLeft")
        ) {
          this.keyPressed.push("ArrowLeft");
          Game.croacTimer = 0;
        } else if (key === "ArrowUp" && !this.keyPressed.includes("ArrowUp")) {
          this.keyPressed.push("ArrowUp");
          Game.croacTimer = 0;
        } else if (
          key === "ArrowDown" &&
          !this.keyPressed.includes("ArrowDown")
        ) {
          this.keyPressed.push("ArrowDown");
          Game.croacTimer = 0;
        } else return null;
      });

      document.addEventListener("keyup", (event) => {
        const { key } = event;
        if (key === "ArrowLeft") {
          this.keyPressed = [];
          this.image.src = "../images/Sprite/quietaizq_20.png";
        } else if (key === "ArrowRight") {
          this.keyPressed = [];
          this.image.src = "../images/Sprite/quietadch_20.png";
        } else if (key === "ArrowUp") {
          this.keyPressed = [];
          this.image.src = "../images/Sprite/quietaup_20.png";
        } else if (key === "ArrowDown") {
          this.keyPressed = [];
          this.image.src = "../images/Sprite/quietadown_20.png";
        } else return null;
      });
    }
  }

  //Check position and movement posibilities looking at the matrix map
  didCollideWithEnviroment(x, y) {
    this.column = Math.round(x / this.tileSize);
    this.row = Math.round(y / this.tileSize);

    if (
      Number.isInteger(x / this.tileSize) &&
      Number.isInteger(y / this.tileSize)
    ) {
      this.column = x / this.tileSize;
      this.row = y / this.tileSize;
      if (this.column <= 17) {
        this.rightTile = this.map[this.row][this.column + 1];
      }
      if (this.column >= 1) {
        this.leftTile = this.map[this.row][this.column - 1];
      }
      if (this.row >= 1) {
        this.upTile = this.map[this.row - 1][this.column];
      }
      if (this.row <= 24) {
        this.downTile = this.map[this.row + 1][this.column];
      }
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
