// Audio mechanic adapted from the Week 10 p5.js FFT tutorial.
// ChatGPT helped develop the willow visual and organise the code into separate files.

let song;
let fft;
let button;
let currentLengths = [];

let numBins = 128;
let smoothing = 0.8;

// Horizontal positions of 12 branches, expressed as fractions of canvas width.
// Six are on the left and six are on the right.
let willowPositions = [
  0.05, 0.12, 0.19, 0.26, 0.33, 0.40,
  0.60, 0.67, 0.74, 0.81, 0.88, 0.95
];

function preloadWillowAudio() {
  song = loadSound("assets/FridayMorning.mp3");
}

function setupWillowAudio() {
  for (let i = 0; i < willowPositions.length; i++) {
    currentLengths.push(height * 0.10);
  }

  fft = new p5.FFT(smoothing, numBins);
  song.connect(fft);

  button = createButton("Play/Pause");
  button.mousePressed(playPause);
  positionButton();
}

function drawWillowAudio() {
  let spectrum = fft.analyze();

  let palette = [
    color(37, 82, 58),
    color(63, 112, 76),
    color(91, 140, 101),
    color(48, 105, 87)
  ];

  for (let i = 0; i < willowPositions.length; i++) {
    // Each branch uses a different frequency value.
    let energy = spectrum[i * 2];
    let x = willowPositions[i] * width;

    // Stronger frequency energy makes the branch longer.
    let targetLength = map(
      energy, 0, 255,
      height * 0.10, height * 0.42
    );

    // Change length gradually for gentler movement.
    currentLengths[i] = lerp(currentLengths[i], targetLength, 0.06);
    drawWillow(x, currentLengths[i], palette[i % 4]);
  }
}

function drawWillow(x, length, willowColor) {
  noFill();

  // Draw a pale copy, shifted slightly right and down.
  push();
  translate(2, 2);
  stroke(205, 225, 195, 200);

  strokeWeight(5);
  bezier(x, 0, x - 6, length * 0.3,
         x + 6, length * 0.7, x, length);

  strokeWeight(3);
  line(x - 2, length * 0.35, x - 11, length * 0.35 + 16);
  line(x + 2, length * 0.75, x + 7, length * 0.75 + 8);
  pop();

  // Draw the original green branch in front.
  stroke(willowColor);
  strokeWeight(5);
  bezier(x, 0, x - 6, length * 0.3,
         x + 6, length * 0.7, x, length);

  strokeWeight(3);
  line(x - 2, length * 0.35, x - 11, length * 0.35 + 16);
  line(x + 2, length * 0.75, x + 7, length * 0.75 + 8);
}

function playPause() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.loop();
  }
}

function positionButton() {
  button.position((width - button.width) / 2, height - button.height - 10);
}

function resizeWillowAudio() {
  positionButton();
}
