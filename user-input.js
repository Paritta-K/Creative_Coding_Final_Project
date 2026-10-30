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
  { x: 150, y: 130, isOpen: false, openness: 0 },
  { x: 350, y: 250, isOpen: true, openness: 1 }
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
// Draw flowers with smooth opening and closing animation.
// Draw flowers with smooth opening and closing animation.
function drawUserFlowers() {

  for (let flower of userFlowers) {

    // Set the target openness.
    let target = flower.isOpen ? 1 : 0;

    // Smoothly animate the opening and closing.
    flower.openness = lerp(flower.openness, target, 0.08);

    push();
    translate(flower.x, flower.y);
    noStroke();

    // Draw five petals when the flower opens.
    fill(245, 185, 205);

    for (let i = 0; i < 5; i++) {
      push();
      rotate(i * TWO_PI / 5);

      // Petals gradually spread out.
      let petalY = lerp(-3, -15, flower.openness);
      let petalWidth = lerp(0, 18, flower.openness);
      let petalHeight = lerp(0, 32, flower.openness);

      ellipse(0, petalY, petalWidth, petalHeight);

      pop();
    }

    // Draw a closed flower bud.
    // The bud becomes smaller as the flower opens.
    let budWidth = lerp(16, 0, flower.openness);
    let budHeight = lerp(30, 0, flower.openness);

    fill(220, 130, 170);
    ellipse(0, -8, budWidth, budHeight);

    // Draw the yellow centre as the flower opens.
    fill(245, 205, 90);
    circle(0, 0, 10 * flower.openness);

    pop();
  }
}
