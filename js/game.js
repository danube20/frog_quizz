const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  obstacles: [],
  quizzObjects: undefined,

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
      //   this.generateObstacles();
      //   this.clearObstacles();
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
    this.obstacles = new Obstacle(this.ctx);
  },

  drawAll() {
      this.background.draw();
      this.quizzObjects.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.draw(this.framesCounter);
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateObstacles() {
    // Use framesCounter to generate new Obstacles
    if (this.framesCounter % 100 === 0) {
      this.obstacles.push(
        new Obstacle(
          this.ctx,
          this.width,
          this.player.posY0,
          this.player.height
        )
      );
    }
  },

  clearObstacles() {
    // Clear obstacles array (.filter 👀)
    this.obstacles = this.obstacles.filter(function (obs) {
      return obs.posX <= this.width;
    });
  },
};
