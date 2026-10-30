let lilyPad;
let waterShine;
let waterRipple;
let waterColor;
let lilyPadShadow;

// Noise
let colorNoise;
let rippleNoise;
let shineNoise;
let lilyPadShadowNoise;


function preload() {
  lilyPad = loadImage("assets/lilyPad.png");
  waterShine = loadImage("assets/water shine.png");
  waterRipple = loadImage("assets/water ripple.png");
  waterColor = loadImage("assets/water color.png");
  lilyPadShadow = loadImage("assets/lily pad shadow.png");
}


function setup() {
  createCanvas(1500, 1440);

  // moiseLayer
  colorNoise = new NoiseLayer(
    waterColor,
    50,        // height
    20,        // horizontal movement
    10,      // vertical movement
    0.002     // speed
  );


  // More noticeable ripple movement
  rippleNoise = new NoiseLayer(
    waterRipple,
    30,
    50,
    0,
    0.004
  );


  // Slightly faster light movement
  shineNoise = new NoiseLayer(
    waterShine,
    10,
    40,
    0,
    0.004
  );

  lilyPadShadowNoise = new NoiseLayer(
    lilyPadShadow,
    40,
    30,
    0,
    0.004

  );
}

function draw() {
  background(0, 83, 100);


  // Water base
  colorNoise.run();


  // Water ripples
  rippleNoise.run();


  // Water highlights
  shineNoise.run();


  // Lily pad shadow stays mostly static
  lilyPadShadowNoise.run();


  // Lily pad stays static
  image(lilyPad, 0, 0);
}