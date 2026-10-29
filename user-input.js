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
// Interaction 2: Click an existing flower to open or close it.
// AI-assisted draft, reviewed by the student.

// Temporary flower data for independent testing.
// These flowers can later be replaced by the group's flower data.
let userFlowers = [
  { x: 150, y: 130, isOpen: false },
  { x: 350, y: 250, isOpen: true }
];

// Check whether the user clicked on an existing flower.
function checkUserFlowerClick() {

  for (let flower of userFlowers) {

    let distance = dist(mouseX, mouseY, flower.x, flower.y);

    if (distance < 30) {

      // Switch between open and closed.
      flower.isOpen = !flower.isOpen;

      // Stop after finding the clicked flower.
      return true;
    }
  }

  // No flower was clicked.
  return false;
}

// Draw the existing flowers.
function drawUserFlowers() {

  for (let flower of userFlowers) {

    push();
    translate(flower.x, flower.y);

    noStroke();

    if (flower.isOpen) {

      // Open flower: five visible petals.
      fill(245, 185, 205);

      for (let i = 0; i < 5; i++) {
        push();
        rotate(i * TWO_PI / 5);
        ellipse(0, -15, 18, 32);
        pop();
      }

    } else {

      // Closed flower: small overlapping petals.
      fill(220, 130, 170);

      ellipse(-6, 0, 12, 25);
      ellipse(6, 0, 12, 25);
      ellipse(0, -4, 12, 30);
    }

    // Flower centre.
    fill(245, 205, 90);
    circle(0, 0, 10);

    pop();
  }
}
