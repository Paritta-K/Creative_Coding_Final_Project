class NoiseLayer {

  constructor(stripH, moveX, moveY, speed, image_path) {

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

    this.img = loadImage(image_path);
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



      // X MOVEMENT

      // generate noise for X axis, determine by y position
      let noiseX = noise(
        y * this.noiseScale,
        this.time
      );

      // influence x position, determine the range of movement
      let offsetX = map(
        noiseX,
        0,
        1,
        -this.moveX,
        this.moveX
      );



      // Y MOVEMENT

      // generate noise for y axis, different perlin noise valur than x
      let noiseY = noise(
        y * this.noiseScale + 100,
        this.time
      );

      // influence y position, determine the range of movement
      let offsetY = map(
        noiseY,
        0,
        1,
        -this.moveY,
        this.moveY
      );



      // draw image
      image(
        this.img,


        // strip drawn on image
        offsetX,
        y + offsetY,
        this.img.width,
        this.stripH,


        // how original image is copied
        0,
        y,
        this.img.width,
        this.stripH
      );
    }
  }

  // combine update and display into single method.
  run() {

    this.update();

    this.display();

  }
}

/* ChatGPT is used to create an example of the code structure, 
which is then modified to suits the purpose of he class*/