// Living Water Lilies - User Input Mechanic
// Interaction 1: Click on water to create a lily pad.
// AI-assisted draft, reviewed and tested by the student.

// Store all lily pads created by the user.
let userLilyPads = [];

// Add a new lily pad at the mouse position.
function addUserLilyPad() {
  let lilyPad = {
    x: mouseX,
    y: mouseY,
    size: 0,
    targetSize: random(45, 70)
  };

  userLilyPads.push(lilyPad);
}

// Draw and animate all user-created lily pads.
function drawUserLilyPads() {
  for (let lilyPad of userLilyPads) {

    // Smoothly increase the size of the lily pad.
    lilyPad.size = lerp(
      lilyPad.size,
      lilyPad.targetSize,
      0.08
    );

    push();

    fill(75, 130, 85);
    stroke(45, 95, 65);
    strokeWeight(2);

    ellipse(
      lilyPad.x,
      lilyPad.y,
      lilyPad.size,
      lilyPad.size * 0.7
    );

    pop();
  }
}
