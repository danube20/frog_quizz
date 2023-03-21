class ObstacleUp {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 188;
    this.height = 120;

    this.image = new Image();
    this.image.src = "./images/Sprite/cocheup2_20.png";

    this.posX = Game.width;
    this.posY = 360;

    this.image.frames = 20;
    this.image.framesIndex = 0;
    this.velX = 3;
  }
  // getImage() {

  //   if (random === 0) {
  //     this.image.src = "../images/Sprite/cocheup2_20.png";
  //   }

  //   if (random === 1) {
  //     this.image.src = "../images/Sprite/cocheup3_20.png";
  //   }

  //   if (random === 2) {
  //     this.image.src = "../images/Sprite/cocheup1_20.png";
  //   }
  // }
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
