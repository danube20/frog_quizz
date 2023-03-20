const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  obstacleUp: undefined,
  obstacleDown: undefined,
  obstaclesDown: [],
  obstaclesUp: [],
  quizzObjects: [],
  explosionsArray: [],
  lifes: 3,
  masksArray: [],
  crashAudio: new Audio("./sounds/crash.mp3"),
  jumpAudio: new Audio("./sounds/jump.mp3"),
  backSound: new Audio("./sounds/backsound.mp3"),
  gameOverSound: new Audio("./sounds/gameover.mp3"),
  croacSound: new Audio("./sounds/croac.mp3"),
  croacTimer: 0,
  correctAnswers: 0,
  playing: true,

  keys: {
    ENTER: 13,
  },

  init() {
    this.setContext();
    this.setDimensions();
    this.start();
    this.generateMasks();
    this.generateQuizzObjects();
    this.generateObstaclesUp();
    this.generateObstaclesDown();
  },

  setContext() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
  },

  setDimensions() {
    this.width = 646;
    this.height = 964;
    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
  },

  start() {
    this.reset();
    document.querySelector("#lifes").style.visibility = "visible";
    this.backSound.play();
    this.backSound.loop = true;
    this.interval = setInterval(() => {
      this.framesCounter++;
      this.croacTimer++;
      if (this.framesCounter > 3000) {
        this.framesCounter = 0;
      }
      this.clear();

      this.drawAll();
      this.printLifes();
      this.generateObstaclesUp();
      this.generateObstaclesDown();
      this.clearObstaclesUp();
      this.clearObstaclesDown();
      // this.quizzObjects.forEach((quiz) => {
      //   quiz.draw(this.framesCounter);
      // });
      if (this.croacTimer === 800) {
        this.croacTimer = 0;
        this.croacSound.play();
      }

      if (this.isCollisionUp() || this.isCollisionDown()) {
        this.generateExplosion();
        this.crashAudio.play();
        this.lifes--;
        this.player.posX = 200;
        this.player.posY = 700;
      }

      if (this.quizzCollision()) {
        this.clearQuizzObject();
        this.displayCard();
      }
      if (this.lifes === 0) {
        this.gameOver();
      }
    }, 1000 / this.FPS);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.gameW, this.gameH, this.keys);
    this.obstacleUp = new ObstacleUp(this.ctx);
    this.obstacleDown = new ObstacleDown(this.ctx);
    this.explosion = new Explosion(this.ctx);
  },

  drawAll() {
    this.background.draw();

    this.player.draw(this.framesCounter);
    this.obstaclesUp.forEach((obs) => {
      obs.draw(this.framesCounter);
    });
    this.obstaclesDown.forEach((obs) => {
      obs.draw(this.framesCounter);
    });
    this.explosionsArray.forEach((exp) => {
      exp.draw(this.framesCounter);
    });
    this.masksArray.forEach((mask) => {
      mask.draw();
    });

    this.quizzObjects.forEach((quiz) => {
      quiz.draw(this.framesCounter);
    });
    this.player.movement();
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateMasks() {
    //torre arr iz
    this.masksArray.push(new Mask(this.ctx, 60, 20, 100, 250)),
      //arbol arr iz
      this.masksArray.push(new Mask(this.ctx, 20, 210, 70, 120)),
      //valla arr
      this.masksArray.push(new Mask(this.ctx, 390, 80, 136, 46)),
      //muro arr
      this.masksArray.push(new Mask(this.ctx, 520, 124, 156, 46)),
      //arbol arr dch
      this.masksArray.push(new Mask(this.ctx, 540, 20, 100, 110)),
      //seto arriba dch
      this.masksArray.push(new Mask(this.ctx, 510, 190, 90, 96)),
      //valla ab
      this.masksArray.push(new Mask(this.ctx, 50, 820, 126, 46)),
      //arbol ab iz
      this.masksArray.push(new Mask(this.ctx, 20, 700, 70, 120)),
      //muro ab
      this.masksArray.push(new Mask(this.ctx, 30, 670, 136, 46)),
      //setito ab iz
      this.masksArray.push(new Mask(this.ctx, 54, 900, 60, 60)),
      //setito ab dch
      this.masksArray.push(new Mask(this.ctx, 420, 830, 60, 60)),
      //casa ab dch
      this.masksArray.push(new Mask(this.ctx, 480, 760, 160, 160));
  },

  generateQuizzObjects() {
    this.quizzObjects.push(new QuizzObject(this.ctx, 100, 650));
    this.quizzObjects.push(new QuizzObject(this.ctx, 200, 650));
  },

  generateObstaclesDown() {
    if (this.framesCounter % 250 === 0) {
      this.obstaclesDown.push(new ObstacleDown(this.ctx));
    }
  },

  generateObstaclesUp() {
    if (this.framesCounter % 300 === 0) {
      this.obstaclesUp.push(new ObstacleUp(this.ctx));
    }
  },

  clearObstaclesDown() {
    this.obstaclesDown = this.obstaclesDown.filter(function (obs) {
      return obs.posX <= Game.width;
    });
  },

  generateExplosion() {
    this.explosionsArray.push(new Explosion(this.ctx));
  },

  clearObstaclesUp() {
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
    clearInterval(this.interval);
    const lifesImage = document.getElementById("lifes");
    lifesImage.src = "images/0lifes.png";
    this.backSound.pause();
    this.gameOverSound.play();

    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.ENTER:
          window.location.reload();
          break;
      }
    });
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "red";
    this.ctx.font = "40px Arial";
    this.ctx.fillText(`Game Over`, 220, 350);
    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Arial";
    this.ctx.fillText(`Press ENTER to retry`, 130, 450);
  },

  printLifes() {
    const lifesImage = document.getElementById("lifes");
    if (this.lifes === 2) {
      lifesImage.src = "images/2lifes.png";
    }

    if (this.lifes === 1) {
      lifesImage.src = "images/1life.png";
    }
  },

  maskCollision() {
    return this.masksArray.some((mask) => {
      return (
        this.player.posX + 109 <= mask.posX + mask.width &&
        this.player.posX + this.player.width - 103 >= mask.posX &&
        this.player.posY + 74 <= mask.posY + mask.height &&
        this.player.posY + this.player.height - 71 >= mask.posY
      );
    });
  },

  quizzCollision() {
    return this.quizzObjects.some((quizz) => {
      return (
        this.player.posX + 109 <= quizz.posX + quizz.width - 26.5 &&
        this.player.posX + this.player.width - 103 >= quizz.posX + 26.5 &&
        this.player.posY + 74 <= quizz.posY + quizz.height - 11.5 &&
        this.player.posY + this.player.height - 71 >= quizz.posY + 12.5
      );
    });
  },

  displayCard() {
    let quizzBox = document.querySelector("#quizz-box");
    quizzBox.style.visibility = "visible";
  },

  clearQuizzObject() {
    this.quizzObjects.forEach((quizz, i) => {
      if (
        this.player.posX + 109 <= quizz.posX + quizz.width &&
        this.player.posX + this.player.width - 103 >= quizz.posX &&
        this.player.posY + 74 <= quizz.posY + quizz.height &&
        this.player.posY + this.player.height - 71 >= quizz.posY
      ) {
        this.quizzObjects.splice(i, 1);
      }
    });
  },
};
