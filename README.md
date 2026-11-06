# Creative_Coding_Final_Project

Inspiration
Inspired by the painting "Lily pond" by Claude Monet.


Techniques

Perlin - Use map to convert noise value (0,1) into movement value (-this.moveX to this.moveX),(-this.moveY to this.moveY) to use noise value to influenced objects offset.



Mechanic Ownership
Perlin Noise - Paritta Kijmahanon
Perlin Noise is used to create a water surface effect. The level of movement is different between the each element, such as ripple have more movement than lilypads' shadow.


AI acknowledgement
ChatGPT is used to generate the code example base on the input function, which then later altered to fit the project.


External Reference



Interaction Instructions

Click the water to generate the lilypad.
Click again on the lilypad to generate water lily.
Click on water lily to make the flower bloom and shut.
Press Play/Pause to play music.



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
