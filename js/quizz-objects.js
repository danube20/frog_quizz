class QuizzObject {
    constructor(ctx, posX, posY) {
      this.ctx = ctx;

      this.width = 90;
      this.height = 90;

      this.posX = posX;
      this.posY = posY;
      
      this.image = new Image();
      this.image.frames = 14;
      this.image.framesIndex = 0;
      this.image.src = "./images/quiz/questionmark.png";
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

    animate(framesCounter) {
      if (framesCounter % 7 === 0) {
        this.image.framesIndex++;
      }
  
      if (this.image.framesIndex >= this.image.frames) {
        this.image.framesIndex = 0;
      }
    }

}

// class FirstObject extends QuizzObject {
//   constructor(ctx, posX, posY, imgSrc) {
//     super(ctx, posX, posY, imgSrc)
//   }
// }

// class SecondObject extends QuizzObject {
//   constructor(ctx, posX, posY, imgSrc) {
//     super(ctx, posX, posY, imgSrc)
//   }
// }

