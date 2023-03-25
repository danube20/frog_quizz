class Table {
  constructor(ctx) {
    this.ctx = ctx;

    this.image = new Image();
    this.image.src = "/images/Wood03.png";

    this.velX = 1;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.move();
  }
}

class TableUp extends Table {
  constructor(ctx) {
    super(ctx);
    this.width = 188;
    this.height = 150;
    this.posX = Game.width;
    this.posY = 380;
  }
  move() {
    if (!Game.atQuizz) {
      this.posX -= this.velX;
    }
  }
}

class TableDown extends Table {
  constructor(ctx) {
    super(ctx);
    this.width = 188;
    this.height = 150;
    this.posX = -this.width;
    this.posY = 500;
  }
  move() {
    if (!Game.atQuizz) {
      this.posX += this.velX;
    }
  }
}
