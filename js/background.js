class Background {
  constructor(ctx, w, h, posX, posY) {
    this.ctx = ctx;
    this.width = w;
    this.height = h;
    this.posX = posX;
    this.posY = posY;

    this.posX = 0;
    this.posY = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
}

class BackgroundOne extends Background {
  constructor(ctx, w, h, posX, posY) {
    super(ctx, w, h, posX, posY);
    this.image = new Image();
    this.image.src = "../images/background/background-1.png";
  }
}

class BackgroundTwo extends Background {
  constructor(ctx, w, h, posX, posY) {
    super(ctx, w, h, posX, posY);
    this.image = new Image();
    this.image.src = "../images/background/background-2.png";
  }
}
