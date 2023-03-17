const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  obstaclesDown: [],
  obstaclesUp: [],
  quizzObjects: undefined,
  lifes: 3,
  masksArray: [],

  keys: {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  },

  init() {
    this.setContext();
    this.setDimensions();
    this.start();
  },

  setContext() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
  },

  setDimensions() {
    this.width = innerWidth / 2;
    this.height = innerHeight;
    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      this.framesCounter++;
      if (this.framesCounter > 3000) {
        this.framesCounter = 0;
      }
      this.clear();
      this.drawAll();
      this.generateMasks();
      this.generateObstaclesUp();
      this.generateObstaclesDown();
      this.clearObstaclesUp();
      this.clearObstaclesDown();

      if (this.isCollisionUp() || this.isCollisionDown()) {
        this.lifes--;
        this.player.posX = 200;
        this.player.posY = 600;
      }
      if (this.lifes === 0) {
        this.gameOver();
      }
    }, 1000 / this.FPS);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.gameW, this.gameH, this.keys);
    this.quizzObjects = new PowerUpObject(
      this.ctx,
      300,
      350,
      "./images/quiz/question-mark.png"
    );
    this.obstaclesUp = [];
    this.obstaclesDown = [];
  },

  drawAll() {
    this.background.draw();
    this.quizzObjects.draw();
    this.player.draw(this.framesCounter);
    this.printLifes();
    this.obstaclesUp.forEach(function (obs) {
      obs.draw();
    });
    this.obstaclesDown.forEach(function (obs) {
      obs.draw();
    });
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateObstaclesDown() {
    // Use framesCounter to generate new Obstacles
    if (this.framesCounter % 200 === 0) {
      this.obstaclesDown.push(
        new ObstacleDown(
          this.ctx,
          this.width,
          this.player.posY0,
          this.player.height
        )
      );
    }
  },

  generateObstaclesUp() {
    if (this.framesCounter % 200 === 0) {
      this.obstaclesUp.push(
        new ObstacleUp(
          this.ctx,
          this.width,
          this.player.posY0,
          this.player.height
        )
      );
    }
  },

  clearObstaclesDown() {
    // Clear obstacles array (.filter 👀)
    this.obstaclesDown = this.obstaclesDown.filter(function (obs) {
      return obs.posX <= Game.width;
    });
  },

  clearObstaclesUp() {
    // Clear obstacles array (.filter 👀)
    this.obstaclesUp = this.obstaclesUp.filter(function (obs) {
      return obs.posX >= -obs.width;
    });
  },

  isCollisionUp() {
    return this.obstaclesUp.some((obs) => {
      return (
        this.player.posX + 109 <= obs.posX + obs.width - 31 &&
        this.player.posX + this.player.width - 103 >= obs.posX + 27 &&
        this.player.posY + 74 <= obs.posY + obs.height - 16 &&
        this.player.posY + this.player.height - 71 >= obs.posY + 5
      );
    });
  },

  isCollisionDown() {
    return this.obstaclesDown.some((obs) => {
      return (
        this.player.posX + 109 <= obs.posX + obs.width - 31 &&
        this.player.posX + this.player.width - 103 >= obs.posX + 27 &&
        this.player.posY + 74 <= obs.posY + obs.height - 16 &&
        this.player.posY + this.player.height - 71 >= obs.posY + 10
      );
    });
  },

  gameOver() {
    // .clearInterval
    clearInterval(this.interval);
  },

  printLifes() {
    let lifesImage = document.getElementsByClassName("lifes");
    if (this.lifes === 3) {
      () => {
        lifesImage.setAttribute("src", "images/3lifes.png");
      };
    }

    if (this.lifes === 2) {
      () => {
        lifesImage.setAttribute("src", "images/2lifes.png");
      };
    }

    if (this.lifes === 1) {
      () => {
        lifesImage.setAttribute("src", "images/1life.png");
      };
    }
  },

  generateMasks() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    //torre arr iz
    this.masksArray = [this.ctx.fillRect(10, 0, 150, 226),
    //arbol arr iz
    this.ctx.fillRect(10, 170, 70, 120),
    //casa ab dch
    this.ctx.fillRect(480, 600, 160, 200),
    //valla arr
    this.ctx.fillRect(388, 74, 136, 46),
    //muro arr
    this.ctx.fillRect(520, 104, 136, 46),
    //arbol arr dch
    this.ctx.fillRect(540, 0, 100, 110),
    //seto arriba dch
    this.ctx.fillRect(500, 170, 100, 96),
    //valla ab
    this.ctx.fillRect(40, 706, 136, 46),
    //arbol ab iz
    this.ctx.fillRect(0, 600, 70, 120),
    //muro ab
    this.ctx.fillRect(30, 566, 136, 46),
    //setito ab iz
    this.ctx.fillRect(44, 766, 60, 60),
    //setito ab dch
    this.ctx.fillRect(420, 720, 60, 60)]
  },
};
