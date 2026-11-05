
let lilyPad;
let colorNoise;
let rippleNoise;
let shineNoise;
let lilyPadShadowNoise;


function preload() {
 // Load image and Noise function
  lilyPad = loadImage("assets/lilyPad.png");
  shineNoise = new NoiseLayer(10,50,10,0.004,"assets/water shine.png");
  rippleNoise = new NoiseLayer(15,50,0,0.004,"assets/water ripple.png");
  colorNoise = new NoiseLayer(15,50,10,0.002,"assets/water color.png");
  lilyPadShadowNoise = new NoiseLayer(5,15,0,0.004,"assets/lily pad shadow.png"); 
  
  // Load the music file.
  preloadWillowAudio();
}

function setup() {
  createCanvas(1500, 1440);
  
  // Set up the FFT analyser, willow lengths and playback button.
  createCanvas(windowWidth, windowHeight);
  setupWillowAudio();

  
}

function draw() {
background(getTimeColor());

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

  // Draw the willow branches using the current audio values.
  drawWillowAudio();
// Draw the lily pads created by the user.
drawUserLilyPads();

// Draw the interactive flowers.
drawUserFlowers();
  // Apply the time-of-day light to the complete scene.
drawTimeLighting();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Reposition the audio button after resizing.
  resizeWillowAudio();
}
// Handle mouse interactions.
function mousePressed() {

  // Click a flower to open or close it.
  if (checkUserFlowerClick()) {
    return;
  }

  // Click inside the canvas to add a lily pad.
  if (mouseX >= 0 && mouseX < width &&
      mouseY >= 0 && mouseY < height) {
    addUserLilyPad();
  }
}
