# Creative_Coding_Final_Project

Paritta Kijmahanon (Perlin Noise and Randomness)

Inspiration
Inspired by the painting "Lily pond" by Claude Monet, I design the water ripple to have a shape like paint brush slowly swaying, reminiscing water surface in the impressionism painting. Each layer have different movement speed value to give an illusion of depth and dynamic.


Techniques

Perlin Noise function is created seperatedly in noiseSurface.js. The class contains constructor for image strip size, movement of x and y axis, speed of the movement, and image path.

 The image is divided into horizontal strips, each influenced by a Perlin noise value that changes over time. 
 
 The map() function converts the noise values (0–1) into movement ranges (-this.moveX to this.moveX and -this.moveY to this.moveY).
 
These values are then used to offset each strip's X and Y positions, creating a smooth, continuous distortion effect that simulates water movement.

Randomness is put into perlin noise strength to create more subtle and smooth difference in the movement.


Mechanic Ownership
Perlin Noise - Paritta Kijmahanon
Perlin Noise is used to create a water surface effect. The level of movement is different between the each element, such as ripple have more movement than lilypads' shadow.


AI acknowledgement
ChatGPT is used to help assisted in initial findings and debugging error. ChatGPT’s assistance is acknowledged in code comments in noiseSurface.js.

Interaction Instructions
Perlin Noise operated as the project's background element. Images used are tailored to fit the visual of the user interaction mechanics and fit the lighting of the time-based mechanic as much as possible.








Inspiration and Design- time-mechanic（Honghan）

My contribution explores how changing light can transform our reinterpretation of Monet’s Water Lilies. A repeating day–night cycle gives the scene a sense of passing time, transitioning between bright daylight, warm dusk, deep-blue night and soft dawn.

Techniques and Code Structure

The time-based mechanic is implemented in a separate file, time-mechanic.js. A complete cycle lasts 60 seconds, consisting of four phases: Day, Dusk, Night and Dawn. Each phase lasts 15 seconds.

getTimeProgress(): Uses p5.js’s millis() to track elapsed time and the modulo operator to calculate progress through the current cycle.

getTimePhase(): Identifies the current phase.

blendTimeColors(): Uses map() and constrain() to calculate transition progress, then combines smoothstep easing with lerpColor() to create smooth colour transitions between neighbouring phases.

getTimeColor(): Provides the background colour as it changes over time.

drawTimeLighting(): Draws a translucent colour overlay across the entire canvas. Since the image layers cover the background, this overlay allows lighting changes to affect the whole scene while preserving the original details.

The constant cycleDuration controls the cycle length. The main file, sketch.js, integrates the time-based mechanic by calling getTimeColor() to set the background colour and drawTimeLighting() after drawing the other visual elements. The overlay uses push() and pop() to save and restore drawing settings, avoiding interference with the other mechanics.

Interaction Instructions

The time-based mechanic starts automatically when the sketch runs. No mouse or keyboard input is required. Watch for at least 60 seconds to see a complete day–night cycle. Refreshing the page restarts the cycle from Day.

AI Acknowledgement

I used ChatGPT (OpenAI) to assist with organising the code. ChatGPT’s assistance is acknowledged in code comments in time-mechanic.js.






Shuoxuan Chen -User input

Concept and Interaction

The User Input mechanic allows users to actively participate in Living Water Lilies by interacting with the pond through mouse clicks.

When users click on the water, a new lily pad appears and gradually grows. Clicking on an existing lily pad creates a pink water lily, which can then be opened and closed through further clicks.

This interaction was designed to create a gentle and natural experience that reflects the peaceful atmosphere of Monet's Water Lilies.

Techniques and Implementation

This mechanic uses mouse interaction, arrays, objects, conditional statements, loops, and linear interpolation in p5.js.

mousePressed() detects mouse clicks and triggers the appropriate interaction.

addUserLilyPad() creates a new lily pad at the mouse position.

drawUserLilyPads() updates and draws the lily pads.

checkUserLilyPadClick() detects clicks on existing lily pads and controls their flower states.

drawLilyPadFlowers() draws the flowers and animates their opening and closing.

dist() calculates the distance between the mouse position and an interactive object.

lerp() creates smooth growth and blooming animations.

Arrays and objects store the positions, sizes, and interaction states of the lily pads.

Code Structure

The User Input mechanic is implemented in a separate file, user-input.js, and integrated into the main sketch.js file. This modular structure helps keep the code organised and separates the mechanic from other parts of the project.

Interaction Instructions

1. Click on an empty area of the pond to create a new lily pad.
2. Wait for the lily pad to grow, then click on it to create a pink water lily.
3. Click on the flower again to close it.
4. Click again to reopen the flower.

Users can repeat these interactions to create multiple lily pads and flowers across the pond.

AI Acknowledgement

ChatGPT was used to assist with developing and refining the User Input mechanic. It helped with organising the interaction logic, implementing mouse-click detection, and improving the smooth growth and flower animations.
