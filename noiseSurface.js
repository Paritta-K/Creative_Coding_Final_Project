class NoiseLayer {

  constructor(img, stripH, moveX, moveY, speed) {

    this.img = img;


    // Horizontal strip size
    this.stripH = stripH;


    // Movement
    this.moveX = moveX;
    this.moveY = moveY;


    // speed
    this.speed = speed;


    // Noise time
    this.time = 0;


    // smooth control
    // nearby strips move together
    this.noiseScale = 0.015;
  }


  update() {

    
    this.time += this.speed;

  }


  display() {

    // Go down the image
    // one horizontal strip at a time

    for (
      let y = 0;
      y < this.img.height;
      y += this.stripH
    ) {


      // --------------------------
      // X MOVEMENT
      // --------------------------

      let noiseX = noise(
        y * this.noiseScale,
        this.time
      );


      let offsetX = map(
        noiseX,
        0,
        1,
        -this.moveX,
        this.moveX
      );


  

      let noiseY = noise(
        y * this.noiseScale + 100,
        this.time
      );


      let offsetY = map(
        noiseY,
        0,
        1,
        -this.moveY,
        this.moveY
      );


     

      image(
        this.img,

        
        offsetX,
        y + offsetY,
        this.img.width,
        this.stripH + 1,

       
        0,
        y,
        this.img.width,
        this.stripH
      );
    }
  }


  run() {

    this.update();

    this.display();

  }
}