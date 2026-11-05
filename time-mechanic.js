// Time-based mechanic - Monet Water Lilies.
// Developed with assistance from ChatGPT (OpenAI).
const cycleDuration = 60000; // A complete day takes 60 seconds.

// Each quarter holds its light briefly, then eases into the next phase.
function getTimeProgress() {
  return (millis() % cycleDuration) / cycleDuration;
}

function getTimePhase() {
  const phases = ["Day", "Dusk", "Night", "Dawn"];
  return phases[floor(getTimeProgress() * 4)];
}

function blendTimeColors(colors) {
  const position = getTimeProgress() * 4;
  const index = floor(position);
  const transition = constrain(map(position - index, 0.3, 1, 0, 1), 0, 1);
  const amount = transition * transition * (3 - 2 * transition);
  return lerpColor(colors[index], colors[(index + 1) % colors.length], amount);
}

function getTimeColor() {
  return blendTimeColors([
    color(160, 210, 235),
    color(245, 150, 115),
    color(25, 40, 85),
    color(250, 195, 155)
  ]);
}

function drawTimeLighting() {
  // The image layers cover the background, so light must also cover them.
  // Alpha keeps the original painting and interactive elements visible.
  const light = blendTimeColors([
    color(255, 242, 205, 0),
    color(244, 125, 75, 70),
    color(8, 16, 48, 175),
    color(249, 176, 162, 55)
  ]);

  push();
  colorMode(RGB, 255);
  blendMode(BLEND);
  rectMode(CORNER);
  noStroke();
  fill(light);
  rect(0, 0, width, height);
  pop();
}
