
 // Time-based Mechanic - Monet Water Lilies
 // Developed with assistance from ChatGPT (OpenAI).
 // This code uses p5.js millis() to track a repeating day-night cycle.

 const cycleDuration = 60000; // One full cycle takes 60 seconds

 function getTimePhase() {
   let progress = (millis() % cycleDuration) / cycleDuration;

   if (progress < 0.25) {
     return "Day";
   } else if (progress < 0.5) {
     return "Dusk";
   } else if (progress < 0.75) {
     return "Night";
   } else {
     return "Dawn";
   }
 }

 // Smooth colour transitions between day, dusk, night and dawn.
 // Developed with assistance from ChatGPT (OpenAI).

 function getTimeColor() {
   let progress = (millis() % cycleDuration) / cycleDuration;

   let day = color(160, 210, 235);
   let dusk = color(245, 150, 115);
   let night = color(25, 40, 85);
   let dawn = color(250, 195, 155);

   let colors = [day, dusk, night, dawn, day];

   let position = progress * 4;
   let index = floor(position);
   let amount = position - index;

   return lerpColor(colors[index], colors[index + 1], amount);
 }
