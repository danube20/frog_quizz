class Obstacle {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 188;
    this.height = 120;
    this.velX = 3;
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
    this.move();
  }

  animate(framesCounter) {
    if (!Game.atQuizz) {
      if (framesCounter % 5 == 0) {
        this.image.framesIndex++;
      }

      if (this.image.framesIndex >= this.image.frames) {
        this.image.framesIndex = 0;
      }
    }
  }

  move() {
    if (!Game.atQuizz) {
      this.posX -= this.velX;
    }
  }
}

class ObstacleUp extends Obstacle {
  constructor(ctx) {
    super(ctx);
    this.posX = Game.width;
    this.posY = 360;

    this.obstaclesImages = [
      "./images/Sprite/cocheup1_20.png",
      "./images/Sprite/cocheup2_20.png",
      "./images/Sprite/cocheup3_20.png",
    ];

    this.image = new Image();
    this.randomIdx = Math.floor(Math.random() * this.obstaclesImages.length);
    this.image.src = this.obstaclesImages[this.randomIdx];
    this.image.frames = 20;
    this.image.framesIndex = 0;
  }
}

class ObstacleDown extends Obstacle {
  constructor(ctx) {
    super(ctx);
    this.posX = -this.width - 10;
    this.posY = 490;
    this.width = -188;

    this.obstaclesImages = [
      "./images/Sprite/cochedown1_20.png",
      "./images/Sprite/cochedown2_20.png",
      "./images/Sprite/cochedown3_20.png",
    ];

    this.image = new Image();
    this.randomIdx = Math.floor(Math.random() * this.obstaclesImages.length);
    this.image.src = this.obstaclesImages[this.randomIdx];
    this.image.frames = 20;
    this.image.framesIndex = 0;
  }

  move() {
    if (!Game.atQuizz) {
      this.posX += this.velX;
    }
  }
}
