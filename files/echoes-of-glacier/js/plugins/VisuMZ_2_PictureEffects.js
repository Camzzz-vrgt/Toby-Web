//=============================================================================
// VisuStella MZ - Picture Effects
// VisuMZ_2_PictureEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PictureEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PictureEffects = VisuMZ.PictureEffects || {};
VisuMZ.PictureEffects.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.00] [PictureEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Picture_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Picture Effects is a comprehensive toolkit for enhancing RPG Maker MZ's
 * picture by allowing various effects and transitions within your game. With
 * over 70 different types of effects, users can adjust and animate pictures in
 * various ways, ranging from banner-style transitions, hue shifts, many tonal
 * changes, blur effects, transformations, and more.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Over 70 different Plugin Commands that will adjust and move pictures to
 *   perform various Picture Effects.
 * * A plethora of picture transitions are available that are useful for banner
 *   like images to enter/exit from view.
 * * Quick Plugin Commands that allow sorting a bunch of pictures on the screen
 *   into single file lines, by rows, or by columns.
 * * Some effects have the ability to transform images into other graphics.
 * * A batch of tone shifting effects that may be tedious to do otherwise.
 * * Hue shifts can be applied to pictures to give more color variety.
 * * Blur Filters can now be applied to pictures to add blurry effects.
 * * Hovering and Sidestep effects allow pictures to move continuously up/down
 *   and/or left/right without constant event commands.
 * * Breathing effects can make pictures look like they're breathing in and out
 *   in an alive fashion.
 * * Swaying effects allow the pictures to rock its angles back and forth.
 * * A depth of field effect where the player's mouse position can shift the
 *   perspective of a picture by having it go a certain direction.
 * * Z Layer is now added to pictures. Game devs can now easily move pictures
 *   in front or behind other pictures by simply changing their Z values.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Instructions - Quick Start
 * ============================================================================
 *
 * Here are some quick instructions on getting started.
 *
 * ---
 * 
 * Step 1: "Show Picture" Event Command
 * 
 * 1. Create a new event and use the "Show Picture" event command.
 * 2. Pick the image you want and the position you want the image to be
 *    displayed at. We recommend using "Center" for the position origin.
 * 3. This will be where the image either starts or ends. The relative position
 *    will vary depending on the Picture Effect and its parameters used.
 * 4. Remember the Picture's ID number. This will be used later.
 * 
 * ---
 * 
 * Step 2: "Picture Effect" Plugin Command
 * 
 * 1. Immediately after the "Show Picture" event command, under event commands,
 *    select "Plugin Command" and select the "VisuMZ_2_PictureEffects" plugin
 *    from the list.
 * 2. Select the desired "Picture Effect" you wish to apply.
 * 3. Under the "Picture ID(s)" parameter, insert the ID of the picture from
 *    Step 1.
 * 4. Adjust the other parameters as needed.
 * 
 * ---
 * 
 * Step 3: Play Test
 * 
 * 1. Save the event and save the game project.
 * 2. Click Play Test and launch the event to make sure the effect is working
 *    properly. Some effects are jointed (namely the ones with "In/Out" in
 *    their Plugin Command names). You may need to put them back to back.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Event Commands
 * 
 * Keep in mind that when Picture Effects are used, using event commands that
 * move, show, or erase the picture will very likely have an impact on how the
 * Picture Effects are carried out. It is best for you to wait until they're
 * done to make sure the Picture Effects are working as intended.
 * 
 * We are not responsible for how Picture Effects turn out if you interrupt
 * them with event commands, script calls, or other Plugin Commands.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 *
 * === Effects - A - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Angry
 * - Picture(s) gets angry and turns red while shaking.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange By Column
 * - Picture(s) gets arranged by columns across the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Max Column Size:
 *   - What is the max column size before creating a new one?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange By Row
 * - Picture(s) gets arranged by rows across the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Max Row Size:
 *   - What is the max row size before creating a new one?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange Horizontally
 * - Picture(s) gets spread horizontally on the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Y:
 *   - What Y coordinate do you want pictures arranged at?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange Vertically
 * - Picture(s) gets spread vertically on the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target X:
 *   - What X coordinate do you want pictures arranged at?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - B - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Banner In/Out
 * - Picture(s) slides in from the side to the center, and then slides out to
 *   the side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   From Direction:
 *   - Select which direction the effect starts from.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Berserk
 * - Picture(s) breathes heavily and turns into a reddish tone.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Blur
 * - Picture(s) gets blurry (or not).
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Breathing
 * - Picture(s) breathes in and out continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Scale Range X:
 *   Scale Range Y:
 *   - What is the horizontal/vertical breathing scale range?
 * 
 *   Speed Rate X:
 *   Speed Rate Y:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. 0 for instant change.
 * 
 * ---
 * 
 * === Effects - C - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Capsule Burst
 * - Picture(s) wobbles back and forth and transforms into a new image.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Scale Change:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Spazz Distance:
 *   - Potential spazz distance for this effect.
 * 
 *   Wobble Angle:
 *   - How many degrees does this wobble?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Card Flip
 * - Picture(s) flips like a card and shows its back.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Back Image:
 *   - Filename used for the card back image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Mirror Back?:
 *   - Mirror the back image?
 *   - If no back image is used, effect is always mirrored.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Charm
 * - Picture(s) subject becomes charmed and enamored.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Scale Change:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Chilly
 * - Picture(s) spazzes and wobbles and turns light blue-ish.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Spazz Distance:
 *   - Potential distance for this effect.
 * 
 *   Wobble Angle:
 *   - Potential angle for this effect.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Confused
 * - Picture(s) acts as if it's confused and moves in random directions.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Degrees:
 *   - How many degrees does this sway back and forth?
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - D - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Damage
 * - Picture(s) gets damaged and turns red while violently shaking.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Depth of Field
 * - Picture(s) is given an image depth of field and will change based off the
 *   mouse cursor position continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 *   - Use negative numbers to go opposite directions.
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 *   - Use negative numbers to go opposite directions.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Dizzy
 * - Picture(s) acts as if it's dizzy and moves in a circle.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Degrees:
 *   - How many degrees does this sway back and forth?
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Drop In/Out
 * - Picture(s) drops downward in, and sinks further downward out.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's drop distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - E - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Electrocuted
 * - Picture(s) gets electrocuted and flashes two different colors while
 *   spazzing.
 * - WARNING! Flashing lights!
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone 1:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Color Tone 2:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Spazz Distance:
 *   - Potential distance for this effect.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Expand In/Out
 * - Picture(s) expands as it enters and further as it exits.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - F - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Fade Change
 * - Picture(s) fades in and out while transforming in the middle.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Fade In/Out
 * - Picture(s) fade in from nothing and fade out to nothing.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Fade Layer Switch
 * - Picture(s) fade in and out while switching layers in between.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Z:
 *   - What Z Layer do you wish to assign this picture(s)?
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Fear
 * - Picture(s) goes pale and slowly regains color.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Flash Change
 * - Picture(s) flashes a few times before changing into a different graphic.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Flash Times:
 *   - How many times to flash the tone without changing?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Flying Card
 * - Picture(s) flies out from current position to front of the screen and ends
 *   up in the center.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   To Direction:
 *   - Select which side of the screen the effect flies towards.
 * 
 *   Angle:
 *   - What is the angle at which the picture(s) stops at the front?
 * 
 *   Front Scale:
 *   - What is the scale of the picture(s) at the front?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Focus In/Out
 * - Picture(s) focuses into view and clarity and out of.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - G - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Ghost In/Out
 * - Picture(s) changes into or out of an etheral form.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Flash Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Ghost Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Glow
 * - Picture(s) glows for a duration.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - H - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Heal
 * - Picture(s) glows and blurs a bit for a healing effect.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Hoppity
 * - Picture(s) jumps up in place and back down.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Height:
 *   - How high do you want the picture(s) to hop.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Hover
 * - Picture(s) gains hover effect, floating up and down visually continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Speed Rate:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 * ---
 * 
 * EFFECT: Hue Shift By
 * - Picture(s) shifts by a relative hue value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Hue Shift:
 *   - Insert a hue value here. (0 - 360)
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Hue Shift To
 * - Picture(s) shifts to a specific hue value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Hue:
 *   - Insert a hue value here. (0 - 360)
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - I - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Illusion
 * - Picture(s) appears on random parts of the screen before landing in place.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Duration:
 *   - How long each extension's effect?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - J - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Jiggle
 * - Picture(s) jiggles from top to bottom, side to side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Jump By X/Y
 * - Picture(s) jumps by relative X/Y values.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Height:
 *   - How high do you want the picture(s) to hop.0
 * 
 *   Distance X:
 *   - How far should picture(s) jump horizontally?
 *   - You may use JavaScript. Negative: left. Positive: right.
 * 
 *   Distance Y:
 *   - How far should picture(s) jump vertically?
 *   - You may use JavaScript. Negative: up. Positive: down.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Jump To X/Y
 * - Picture(s) jumps to X/Y coordinate.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Height:
 *   - How high do you want the picture(s) to hop.0
 * 
 *   Target X:
 *   - What is the target X destination?
 *   - You may use JavaScript.
 * 
 *   Target Y:
 *   - What is the target Y destination?
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - L - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Levitate In/Out
 * - Picture(s) floats upward in, and floats upward out.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's levitation distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - M - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Mana Restore
 * - Picture(s) glows, hue shifts, and blurs a bit for a restoration effect.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Merge & Change
 * - Picture(s) merge together to transform into a new graphic.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 *   - First image is transformed. Others have 0 opacity.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Target X:
 *   - What is the target X destination?
 *   - You may use JavaScript.
 * 
 *   Target Y:
 *   - What is the target Y destination?
 *   - You may use JavaScript.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - O - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Open & Close
 * - Picture(s) opens and closes like an in-game window.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - P - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Petrify
 * - Picture(s) struggles as it becomes petrified..
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Petrify Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Scale Maximum:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Scale Minimum:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Phase In/Out
 * - Picture(s) phases into view and out of view.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Piece In/Out
 * - Picture(s) flies in and out from a random screen border area.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Border Scale:
 *   - What is the scale of the picture(s) at the border?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Poison
 * - Picture(s) subject receives poison and becomes sickly.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance:
 *   - How far should the max horizontal distance be?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Power Up Change
 * - Picture(s) switches between two images before changing completely.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Effect Times:
 *   - How many times to switch images?
 * 
 *   Duration:
 *   - How long is each switch's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Psychedelic
 * - Picture(s) shifts hue all the way around.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Pulse
 * - Picture(s) pulses towards its new scale.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Scale:
 *   - What is the target scale of the picture(s)?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - Q - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Quick Press
 * - Picture(s) is quickly pressed and rebounds back into place.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance X:
 *   - What is this effect's X distance?
 * 
 *   Distance 16:
 *   - What is this effect's Y distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - R - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Random In/Out
 * - Picture(s) fades in and out in random positions.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's max randomized distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Roll In/Out
 * - Picture(s) rolls in from the side and out to the other.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's roll distance?
 * 
 *   From Direction:
 *   - Select which direction the effect starts from.
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin while rolling?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Rotate
 * - Picture(s) rotates clockwise or counter clockwise.
 * - Apply opposite if the picture(s) is mirrored.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   From Direction:
 *   - Select which direction the effect rotates.
 *   - Apply opposite if the picture(s) is mirrored.
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin while rolling?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - S - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Shakey
 * - Picture(s) shakes back and forth from side to side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Distance:
 *   - What is this effect's shake distance?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Shrink In/Out
 * - Picture(s) shrinks in and shrinks further inward.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Sidestep
 * - Picture(s) gains sidestep effect, moving left and right visually
 *   continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Speed Rate:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 * ---
 * 
 * EFFECT: Spazz
 * - Picture(s) spazzes up, down, left, right at random.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Distance:
 *   - What is this effect's spazz distance?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Spin Change
 * - Picture(s) spins and changes into a different graphic.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Scale Change:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin before transforming?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Spin In/Out
 * - Picture(s) spins into view and out of view.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin while rolling?
 * 
 *   Vanish Scale:
 *   - What is the scale of the picture(s) when null?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Squish In/Out
 * - Picture(s) squishes as it enters and further as it exits.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Stretch In/Out
 * - Picture(s) stretches as it enters and further as it exits.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Submerge In/Out
 * - Picture(s) enters and exits the bottom of the screen.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Swaying
 * - Picture(s) angles back and forth from side to side continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Angle Range:
 *   - How many degrees should the picture sway?
 * 
 *   Speed Rate:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 * ---
 * 
 * === Effects - T - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Teleport In/Out
 * - Picture(s) teleports into view and out of view.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Television In/Out
 * - Picture(s) snaps in and out like a television screen.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Tint Shift By
 * - Picture(s) changes tone and its own Z Layer relatively.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Adjust Z:
 *   - Adjust the Z value of target picture(s) by this.
 *   - You may use JavaScript. + Move Front. - Move Back.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Tint Shift To
 * - Picture(s) changes tone and its Z Layer to a specific value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Z:
 *   - What Z Layer do you wish to assign this picture(s)?
 *   - You may use JavaScript.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Transform
 * - Picture(s) transforms into another image with no other effects.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 * ---
 * 
 * === Effects - U - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: UFO In/Out
 * - Picture(s) enters and exits the top of the screen.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - V - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Vibrate
 * - Picture(s) vibrates a certain distance from start to end.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - W - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Wobble
 * - Picture(s) wobbles its angle from side to side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Degrees:
 *   - How many degrees does this wobble?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - Z - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Z Layer Change By
 * - Picture(s) changes its Z layer to a relative value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Adjust Z:
 *   - Adjust the Z value of target picture(s) by this.
 *   - You may use JavaScript. + Move Front. - Move Back.
 * 
 * ---
 * 
 * EFFECT: Z Layer Set To
 * - Picture(s) changes its Z layer to a specific value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Z:
 *   - What Z Layer do you wish to assign this picture(s)?
 *   - You may use JavaScript.
 * 
 * ---
 * 
 * EFFECT: Zoom In/Out
 * - Picture(s) zooms into view and out of.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.00 Official Release Date: February 21, 2024
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Angry
 * @text EFFECT: Angry
 * @desc Picture(s) gets angry and turns red while shaking.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [128, -64, -64, 0]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 36
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 24
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Col
 * @text EFFECT: Arrange By Column
 * @desc Picture(s) gets arranged by columns across the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Size:eval
 * @text Max Column Size
 * @desc What is the max column size before creating a new one?
 * You may use JavaScript.
 * @default 3
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Row
 * @text EFFECT: Arrange By Row
 * @desc Picture(s) gets arranged by rows across the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Size:eval
 * @text Max Row Size
 * @desc What is the max row size before creating a new one?
 * You may use JavaScript.
 * @default 5
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Horz
 * @text EFFECT: Arrange Horizontally
 * @desc Picture(s) gets spread horizontally on the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg TargetY:eval
 * @text Target Y
 * @desc What Y coordinate do you want pictures arranged at?
 * You may use JavaScript.
 * @default Graphics.height / 2
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Vert
 * @text EFFECT: Arrange Vertically
 * @desc Picture(s) gets spread vertically on the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg TargetX:eval
 * @text Target X
 * @desc What X coordinate do you want pictures arranged at?
 * You may use JavaScript.
 * @default Graphics.width / 2
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_B
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Banner_InOut
 * @text EFFECT: Banner In/Out
 * @desc Picture(s) slides in from the side to the center,
 * and then slides out to the side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Direction:str
 * @text From Direction
 * @type select
 * @option From Left
 * @option From Right
 * @desc Select which direction the effect starts from.
 * @default From Left
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Berserk
 * @text EFFECT: Berserk
 * @desc Picture(s) breathes heavily and turns into a reddish tone.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [128, -64, -64, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Blur
 * @text EFFECT: Blur
 * @desc Picture(s) gets blurry (or not).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Breathing
 * @text EFFECT: Breathing
 * @desc Picture(s) breathes in and out continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg RangeX:num
 * @text Scale Range X
 * @desc What is the horizontal breathing scale range?
 * @default 1
 *
 * @arg RangeY:num
 * @text Scale Range Y
 * @desc What is the vertical breathing scale range?
 * @default 2
 *
 * @arg RateX:num
 * @text Speed Rate X
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.02
 *
 * @arg RateY:num
 * @text Speed Rate Y
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.02
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_C
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Capsule_Burst
 * @text EFFECT: Capsule Burst
 * @desc Picture(s) wobbles back and forth and transforms into a new image.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [240, 240, 240, 0]
 *
 * @arg Scale:num
 * @text Scale Change
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.8
 *
 * @arg Spazz:num
 * @text Spazz Distance
 * @type number
 * @desc Potential spazz distance for this effect.
 * @default 8
 *
 * @arg Wobble:num
 * @text Wobble Angle
 * @type number
 * @desc How many degrees does this wobble?
 * @default 30
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 180
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Card_Flip
 * @text EFFECT: Card Flip
 * @desc Picture(s) flips like a card and shows its back.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg BackFilename:str
 * @text Back Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the card back image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @arg BackMirror:eval
 * @text Mirror Back?
 * @parent BackFilename:str
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the back image?
 * If no back image is used, effect is always mirrored.
 * @default false
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Charm
 * @text EFFECT: Charm
 * @desc Picture(s) subject becomes charmed and enamored.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Scale:num
 * @text Scale Change
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 1.2
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [153, 68, 128, 68]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Chilly
 * @text EFFECT: Chilly
 * @desc Picture(s) spazzes and wobbles and turns light blue-ish.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [-100, 128, 128, 0]
 *
 * @arg Spazz:num
 * @text Spazz Distance
 * @type number
 * @desc Potential distance for this effect.
 * @default 10
 *
 * @arg Wobble:num
 * @text Wobble Angle
 * @type number
 * @desc Potential angle for this effect.
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Confused
 * @text EFFECT: Confused
 * @desc Picture(s) acts as if it's confused and moves in random directions.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 2
 *
 * @arg Degrees:num
 * @text Degrees
 * @type number
 * @min 1
 * @max 360
 * @desc How many degrees does this sway back and forth?
 * @default 10
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 36
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 24
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_D
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Damage
 * @text EFFECT: Damage
 * @desc Picture(s) gets damaged and turns red while violently shaking.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [128, -64, -64, 0]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 48
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 12
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Depth
 * @text EFFECT: Depth of Field
 * @desc Picture(s) is given an image depth of field and will change
 * based off the mouse cursor position continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceX:eval
 * @text Distance X
 * @desc How far should the max horizontal distance be?
 * Use negative numbers to go opposite directions.
 * @default +48
 *
 * @arg DistanceY:eval
 * @text Distance Y
 * @desc How far should the max vertical distance be?
 * Use negative numbers to go opposite directions.
 * @default +12
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 0
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dizzy
 * @text EFFECT: Dizzy
 * @desc Picture(s) acts as if it's dizzy and moves in a circle.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 2
 *
 * @arg Degrees:num
 * @text Degrees
 * @type number
 * @min 1
 * @max 360
 * @desc How many degrees does this sway back and forth?
 * @default 10
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 36
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 24
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Drop_InOut
 * @text EFFECT: Drop In/Out
 * @desc Picture(s) drops downward in, and sinks further downward out.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's drop distance?
 * @default 192
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_E
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Electrocuted
 * @text EFFECT: Electrocuted
 * @desc Picture(s) gets electrocuted and flashes two different colors
 * while spazzing. WARNING! Flashing lights!
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone1:eval
 * @text Color Tone 1
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [196, 128, 0, 255]
 *
 * @arg Tone2:eval
 * @text Color Tone 2
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 255]
 *
 * @arg Spazz:num
 * @text Spazz Distance
 * @type number
 * @desc Potential distance for this effect.
 * @default 10
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Expand_InOut
 * @text EFFECT: Expand In/Out
 * @desc Picture(s) expands as it enters and further as it exits.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_F
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fade_Change
 * @text EFFECT: Fade Change
 * @desc Picture(s) fades in and out while transforming in the middle.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fade_InOut
 * @text EFFECT: Fade In/Out
 * @desc Picture(s) fade in from nothing and fade out to nothing.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fade_Layer_Switch
 * @text EFFECT: Fade Layer Switch
 * @desc Picture(s) fade in and out while switching layers in between.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Target Z
 * @desc What Z Layer do you wish to assign this picture(s)?
 * You may use JavaScript.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fear
 * @text EFFECT: Fear
 * @desc Picture(s) goes pale and slowly regains color.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 68, 192]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Flash_Change
 * @text EFFECT: Flash Change
 * @desc Picture(s) flashes a few times before changing into a different graphic.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [192, 192, 192, 0]
 *
 * @arg Times:num
 * @text Flash Times
 * @parent Tone:eval
 * @type number
 * @min 1
 * @max 10
 * @desc How many times to flash the tone without changing?
 * @default 3
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FlyingCard
 * @text EFFECT: Flying Card
 * @desc Picture(s) flies out from current position to front of the screen and ends up in the center.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Direction:str
 * @text To Direction
 * @type select
 * @option To Left
 * @option To Right
 * @desc Select which side of the screen the effect flies towards.
 * @default To Right
 *
 * @arg Angle:num
 * @text Angle
 * @type number
 * @max 360
 * @desc What is the angle at which the picture(s) stops at the front?
 * @default 30
 *
 * @arg Scale:eval
 * @text Front Scale
 * @desc What is the scale of the picture(s) at the front?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 2.0
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin?
 * @default 5
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Focus_InOut
 * @text EFFECT: Focus In/Out
 * @desc Picture(s) focuses into view and clarity and out of.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_G
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ghost_InOut
 * @text EFFECT: Ghost In/Out
 * @desc Picture(s) changes into or out of an etheral form.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg FlashTone:eval
 * @text Flash Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [255, 255, 255, 0]
 *
 * @arg GhostTone:eval
 * @text Ghost Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Glow
 * @text EFFECT: Glow
 * @desc Picture(s) glows for a duration.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Tone:eval
 * @text Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [136, 136, 136, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_H
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Heal
 * @text EFFECT: Heal
 * @desc Picture(s) glows and blurs a bit for a healing effect.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [68, 192, 160, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hoppity
 * @text EFFECT: Hoppity
 * @desc Picture(s) jumps up in place and back down.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Height:num
 * @text Height
 * @type number
 * @desc How high do you want the picture(s) to hop.
 * @default 40
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hover
 * @text EFFECT: Hover
 * @desc Picture(s) gains hover effect, floating up and down visually continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 100
 *
 * @arg Rate:num
 * @text Speed Rate
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.05
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hue_Shift_By
 * @text EFFECT: Hue Shift By
 * @desc Picture(s) shifts by a relative hue value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Hue:eval
 * @text Hue Shift
 * @desc Insert a hue value here. (0 - 360)
 * You may use JavaScript.
 * @default +0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hue_Shift_To
 * @text EFFECT: Hue Shift To
 * @desc Picture(s) shifts to a specific hue value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Hue:eval
 * @text Target Hue
 * @desc Insert a hue value here. (0 - 360)
 * You may use JavaScript.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_I
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Illusion
 * @text EFFECT: Illusion
 * @desc Picture(s) appears on random parts of the screen before landing in place.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long each extension's effect?
 * 60 frames = 1 second. Minimum: 10.
 * @default 30
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_J
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Jiggle
 * @text EFFECT: Jiggle
 * @desc Picture(s) jiggles from top to bottom, side to side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 5
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JumpBy
 * @text EFFECT: Jump By X/Y
 * @desc Picture(s) jumps by relative X/Y values.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Height:num
 * @text Height
 * @type number
 * @desc How high do you want the picture(s) to hop.
 * @default 100
 *
 * @arg DistanceX:eval
 * @text Distance X
 * @desc How far should picture(s) jump horizontally?
 * You may use JavaScript. Negative: left. Positive: right.
 * @default +200
 *
 * @arg DistanceY:eval
 * @text Distance Y
 * @desc How far should picture(s) jump vertically?
 * You may use JavaScript. Negative: up. Positive: down.
 * @default +60
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JumpTo
 * @text EFFECT: Jump To X/Y
 * @desc Picture(s) jumps to X/Y coordinate.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Height:num
 * @text Height
 * @type number
 * @desc How high do you want the picture(s) to hop.
 * @default 100
 *
 * @arg TargetX:eval
 * @text Target X
 * @desc What is the target X destination?
 * You may use JavaScript.
 * @default Graphics.width / 2
 *
 * @arg TargetY:eval
 * @text Target Y
 * @desc What is the target Y destination?
 * You may use JavaScript.
 * @default Graphics.height / 2
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_L
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Levitate_InOut
 * @text EFFECT: Levitate In/Out
 * @desc Picture(s) floats upward in, and floats upward out.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's levitation distance?
 * @default 96
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_M
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Mana_Restore
 * @text EFFECT: Mana Restore
 * @desc Picture(s) glows, hue shifts, and blurs a bit for a restoration effect.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [68, 96, 192, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Merge_Change
 * @text EFFECT: Merge & Change
 * @desc Picture(s) merge together to transform into a new graphic.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * First image is transformed. Others have 0 opacity.
 * @default 
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg TargetX:eval
 * @text Target X
 * @desc What is the target X destination?
 * You may use JavaScript.
 * @default Graphics.width / 2
 *
 * @arg TargetY:eval
 * @text Target Y
 * @desc What is the target Y destination?
 * You may use JavaScript.
 * @default Graphics.height / 2
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [240, 240, 240, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_O
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Open_InOut
 * @text EFFECT: Open & Close
 * @desc Picture(s) opens and closes like an in-game window.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option Open
 * @option Close
 * @desc What effect type is this?
 * @default Open
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_P
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Petrify
 * @text EFFECT: Petrify
 * @desc Picture(s) struggles as it becomes petrified..
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg FlashTone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [192, 192, 192, 0]
 *
 * @arg PetrifyTone:eval
 * @text Petrify Tone
 * @parent FlashTone:eval
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 255]
 *
 * @arg ScaleMax:num
 * @text Scale Maximum
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 1.1
 *
 * @arg ScaleMin:num
 * @text Scale Minimum
 * @parent ScaleMax:num
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.9
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Phase_InOut
 * @text EFFECT: Phase In/Out
 * @desc Picture(s) phases into view and out of view.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Piece_InOut
 * @text EFFECT: Piece In/Out
 * @desc Picture(s) flies in and out from a random screen border area.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Scale:eval
 * @text Border Scale
 * @desc What is the scale of the picture(s) at the border?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 2.0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Poison
 * @text EFFECT: Poison
 * @desc Picture(s) subject receives poison and becomes sickly.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 24
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 128, -68, 68]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PowerUp_Change
 * @text EFFECT: Power Up Change
 * @desc Picture(s) switches between two images before changing completely.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @max 10
 * @desc How many times to switch images?
 * @default 3
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is each switch's duration?
 * 60 frames = 1 second.
 * @default 4
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Psychedelic
 * @text EFFECT: Psychedelic
 * @desc Picture(s) shifts hue all the way around.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Pulse
 * @text EFFECT: Pulse
 * @desc Picture(s) pulses towards its new scale.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Scale:eval
 * @text Target Scale
 * @desc What is the target scale of the picture(s)?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 1.0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Q
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuickPress
 * @text EFFECT: Quick Press
 * @desc Picture(s) is quickly pressed and rebounds back into place.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @min 0
 * @desc What is this effect's X distance?
 * @default 8
 *
 * @arg DistanceY:num
 * @text Distance 16
 * @type number
 * @min 0
 * @desc What is this effect's Y distance?
 * @default 16
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 4
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_R
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Random_InOut
 * @text EFFECT: Random In/Out
 * @desc Picture(s) fades in and out in random positions.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's max randomized distance?
 * @default 200
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Roll_InOut
 * @text EFFECT: Roll In/Out
 * @desc Picture(s) rolls in from the side and out to the other.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's roll distance?
 * @default 500
 *
 * @arg Direction:str
 * @text From Direction
 * @type select
 * @option From Left
 * @option From Right
 * @desc Select which direction the effect starts from.
 * @default From Left
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin while rolling?
 * @default 1
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Rotate
 * @text EFFECT: Rotate
 * @desc Picture(s) rotates clockwise or counter clockwise.
 * Apply opposite if the picture(s) is mirrored.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Direction:str
 * @text From Direction
 * @type select
 * @option Clockwise
 * @option Counter Clockwise
 * @desc Select which direction the effect rotates.
 * Apply opposite if the picture(s) is mirrored.
 * @default Clockwise
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin while rolling?
 * @default 1
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_S
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Shakey
 * @text EFFECT: Shakey
 * @desc Picture(s) shakes back and forth from side to side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's shake distance?
 * @default 8
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Shrink_InOut
 * @text EFFECT: Shrink In/Out
 * @desc Picture(s) shrinks in and shrinks further inward.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Spazz
 * @text EFFECT: Spazz
 * @desc Picture(s) spazzes up, down, left, right at random.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's spazz distance?
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Sidestep
 * @text EFFECT: Sidestep
 * @desc Picture(s) gains sidestep effect, moving left and right visually continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 100
 *
 * @arg Rate:num
 * @text Speed Rate
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.05
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Spin_Change
 * @text EFFECT: Spin Change
 * @desc Picture(s) spins and changes into a different graphic.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Scale:num
 * @text Scale Change
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.5
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @min 1
 * @desc How many times does the picture(s) spin before transforming?
 * @default 3
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20
 * @default 120
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Spin_InOut
 * @text EFFECT: Spin In/Out
 * @desc Picture(s) spins into view and out of view.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin while rolling?
 * @default 2
 *
 * @arg Scale:eval
 * @text Vanish Scale
 * @desc What is the scale of the picture(s) when null?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Squish_InOut
 * @text EFFECT: Squish In/Out
 * @desc Picture(s) squishes as it enters and further as it exits.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 30
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Stretch_InOut
 * @text EFFECT: Stretch In/Out
 * @desc Picture(s) stretches as it enters and further as it exits.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 30
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Submerge_InOut
 * @text EFFECT: Submerge In/Out
 * @desc Picture(s) enters and exits the bottom of the screen.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 128, 160, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Swaying
 * @text EFFECT: Swaying
 * @desc Picture(s) sways back and forth from angle to angle continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Range:num
 * @text Angle Range
 * @type number
 * @desc How many degrees should the picture sway?
 * @default 15
 *
 * @arg Rate:num
 * @text Speed Rate
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.05
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_T
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Teleport_InOut
 * @text EFFECT: Teleport In/Out
 * @desc Picture(s) teleports into view and out of view.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [240, 240, 240, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Television_InOut
 * @text EFFECT: Television In/Out
 * @desc Picture(s) snaps in and out like a television screen.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Tint_Shift_By
 * @text EFFECT: Tint Shift By
 * @desc Picture(s) changes tone and its own Z Layer relatively.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Adjust Z
 * @desc Adjust the Z value of target picture(s) by this.
 * You may use JavaScript. + Move Front. - Move Back.
 * @default +0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Tint_Shift_To
 * @text EFFECT: Tint Shift To
 * @desc Picture(s) changes tone and its Z Layer to a specific value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Target Z
 * @desc What Z Layer do you wish to assign this picture(s)?
 * You may use JavaScript.
 * @default 0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Transform
 * @text EFFECT: Transform
 * @desc Picture(s) transforms into another image with no other effects.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_U
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command UFO_InOut
 * @text EFFECT: UFO In/Out
 * @desc Picture(s) enters and exits the top of the screen.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [68, 68, 128, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_V
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Vibrate
 * @text EFFECT: Vibrate
 * @desc Picture(s) vibrates a certain distance from start to end.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 30
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 24
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 12
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_W
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wobble
 * @text EFFECT: Wobble
 * @desc Picture(s) wobbles its angle from side to side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Degrees:num
 * @text Degrees
 * @type number
 * @min 1
 * @max 360
 * @desc How many degrees does this wobble?
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Z
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Z_Layer_Change_By
 * @text EFFECT: Z Layer Change By
 * @desc Picture(s) changes its Z layer to a relative value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Adjust Z
 * @desc Adjust the Z value of target picture(s) by this.
 * You may use JavaScript. + Move Front. - Move Back.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Z_Layer_Set_To
 * @text EFFECT: Z Layer Set To
 * @desc Picture(s) changes its Z layer to a specific value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Target Z
 * @desc What Z Layer do you wish to assign this picture(s)?
 * You may use JavaScript.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Zoom_InOut
 * @text EFFECT: Zoom In/Out
 * @desc Picture(s) zooms into view and out of.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 */
//=============================================================================

const _0x53ce3c=_0x1029;(function(_0x540b8e,_0x4f6a62){const _0x539b5b=_0x1029,_0x3496bc=_0x540b8e();while(!![]){try{const _0x4a588d=-parseInt(_0x539b5b(0x2b1))/0x1+parseInt(_0x539b5b(0x292))/0x2+parseInt(_0x539b5b(0x1e4))/0x3*(parseInt(_0x539b5b(0x214))/0x4)+parseInt(_0x539b5b(0x227))/0x5+-parseInt(_0x539b5b(0x314))/0x6+parseInt(_0x539b5b(0x2d0))/0x7*(-parseInt(_0x539b5b(0x215))/0x8)+-parseInt(_0x539b5b(0x2d9))/0x9;if(_0x4a588d===_0x4f6a62)break;else _0x3496bc['push'](_0x3496bc['shift']());}catch(_0x1e6b47){_0x3496bc['push'](_0x3496bc['shift']());}}}(_0x4e8c,0xb717c));var label=_0x53ce3c(0x375),tier=tier||0x0,dependencies=[_0x53ce3c(0x198)],pluginData=$plugins[_0x53ce3c(0x171)](function(_0xa4891f){const _0x46540a=_0x53ce3c;return _0xa4891f['status']&&_0xa4891f[_0x46540a(0x303)][_0x46540a(0x273)]('['+label+']');})[0x0];function _0x1029(_0x2a84a6,_0x2e761e){const _0x4e8cbb=_0x4e8c();return _0x1029=function(_0x102961,_0x1edca5){_0x102961=_0x102961-0x167;let _0x24b64c=_0x4e8cbb[_0x102961];return _0x24b64c;},_0x1029(_0x2a84a6,_0x2e761e);}function _0x4e8c(){const _0x33fedc=['getTotalQueueDuration','setupEffect_Capsule_Burst','InQuint','setupEffect_UfoInOut','ARRAYJSON','zRBqx','changeBreathing','targetDistance','SGMWw','6348215bWbhqW','current','JHhEk','distance','changeHover','depthX','Game_Picture_x','JqCbR','SyIzM','Template_InOut','_pictureEffectsSidestep','targetMoveX','prototype','setupEffect_LevitateInOut','updatePictureEffectsDepth','rUlSj','zuyFC','setupEffect_Angry','DistanceY','currentAngle','setupEffect_PieceInOut','setupEffect_Dizzy','updatePictureEffectsHueFilter','length','snwkY','updatePictureEffectsBreathing','updateAlterXy','indexOf','initRotationCoreEngine','KuRvs','updatePictureEffectsBlurFilter','RangeX','jfTso','UpGRf','_duration','VZmIH','_coreEasingType','Focus_InOut','Drop_InOut','random','FlyingCard','match','_toneDuration','GSHgE','Hoppity','setupEffect_FadeInOut','_pictureEffectsDepth','max','IOvSY','Template_Normal','pictureEffectsSway','Game_Picture_y','OqMwW','addLoadListener','Vibrate','rjyVL','_opacity','setupEffect_Transform','AdLls','Ghost_InOut','setupEffect_ZoomInOut','changeDepth','initPictureEffects','ceil','Damage','NmuQk','pow','_blendMode','getPictureEffectsHue','hUBoC','EffectIn','QqBIe','_pictureId','JumpBy','min','DHTRC','includes','exit','PictureIDs','_name','update','anglePlus','updateQueue','setupEffect_Arrange_Vert','setupEffect_QuickPress','InOutCubic','width','unmovedMouseX','addToQueue','Distance','call','_scaleY','ekKVa','imxPN','laAmF','PDpWq','wait','OltGn','OutSine','Duration','toneDuration','setupEffect_SpinInOut','setupEffect_Hoppity','YzzQO','qEFKw','currentHue','updatePictureEffectFilters','2783992RTppyV','Spriteset_Base_updatePictureSettings','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','setupEffect_SpinChange','mwWse','_toneTarget','moveX','angleDuration','setupEffect_Arrange_Row','OutCubic','targetRangeX','blur','format','setupEffect_OpenInOut','setupEffect_Template','SBQnq','blurDuration','updateHueQueueData','updatePictureEffectsLayerZ','CkpYh','bfvkf','setAsQueue','targetTone','FiKde','Height','targetOpacity','eQBpO','Roll_InOut','targetAngle','targetRateX','setupEffect_FadeChange','343118wXoCUy','targetMoveY','CmaEd','RangeY','initPictureEffectsXyAlter','Z_Layer_Change_By','updatePictureEffects','updateHover','TargetX','Card_Flip','targetScaleX','setupEffect_Poison','setupEffect_Fear','setupEffect_PulseScale','LVUKR','rate','Angry','Tone1','setupEffect_FlyingCard','TpBQH','easingType','Size','sort','setupEffect_TintShiftBy','JTnSr','kfRmu','AnchorX','lxTBO','setupEffect_DropInOut','rateX','setupEffect_Vibrate','105581bvjMJQ','pictureEffectsScaleX','targetHue','_pictureEffectsHover','setupEffect_Damage','To\x20Left','setupEffect_Chilly','trim','Rate','3481461yujaHT','updatePictureEffectsHue','parse','AnchorY','targetDistanceX','LZbAw','Dizzy','ARRAYNUM','setupEffect_JumpByXy','jMdwu','Degrees','fcUqj','updateOther','Settings','hueDuration','CxtjR','blendMode','Fade_Layer_Switch','clamp','PNobw','Wobble','nySRt','rangeX','setupEffect_ExpandInOut','initPictureEffectsBreathing','QmXDG','EsFBY','LXkiW','show','updateBlurQueueData','getPictureEffectsBlurFilter','Zoom_InOut','sQmBn','ckrVw','updateToneQueueData','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Open_InOut','targetRate','setupEffect_Spazz','angle','_scaleX','_blurFilterData','description','tone','vgTDR','Times','OOfIQ','gbVfZ','ARRAYEVAL','XnxGq','ygBfj','From\x20Right','setupEffect_FocusInOut','cxhQP','map','VxhwE','JhrHS','setupEffect_Confused','Fade_Change','3347268KcsTUS','InCubic','xPyKk','targetAnchor','remove','setupEffect_PowerUpChange','Tint_Shift_By','setupEffect_Card_Flip','dUgXU','Tone','Hover','UtvCa','Sidestep','Mana_Restore','BJZxc','setupEffect_Arrange_Horz','setupEffect_Arrange_Col','Direction','_pictureContainer','changeZ','setupEffect_HueShiftTo','Game_Picture_angle','initialize','_tone','anchor','ViXvM','filename','setupEffect_PsycheScale','Petrify','PowerUp_Change','xBGtq','setupEffect_ManaRestore','picture','NeiwY','setupEffect_SquishInOut','rng','QdEIy','InBack','zGSpV','EPodY','loadPicture','Z_Layer_Set_To','frameCount','tbUvj','angleEasingType','mRabo','setupEffect_TeleportInOut','Sprite_Picture_initialize','updateMoveQueueData','setupEffect_MergeChange','changeSidestep','initPictureEffectsSway','STR','in\x20order\x20for\x20VisuMZ_2_PictureEffects\x20to\x20work.','setHue','_pictureEffectsColorFilter','hue','_pictureEffectsBlurFilter','Breathing','setupEffect_Jiggle','clone','randomInt','Vqesv','setupEffect_Glow','UFO_InOut','FfpNy','_anchor','icBiL','push','KpFdb','distanceY','setupEffect_Rotate','shift','Hue_Shift_By','setupEffect_BannerInOut','target','Game_Picture_scaleY','Transform','Wait','range','setupEffect_Charm','fIarG','doesQueueExist','Charm','ARRAYFUNC','targetRng','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','FlashTone','UDXKg','ImSgx','EVAL','setupEffect_Petrify','FiSdR','vZucw','OutBack','getLastPluginCommandInterpreter','height','PictureEffects','_easingType','FUNC','Pulse','yoiBe','AlHFB','Teleport_InOut','initPictureEffectsLayerZ','cos','baEef','getPictureEffectsHueFilter','Berserk','targetRangeY','BackMirror','oHiWR','Psychedelic','Counter\x20Clockwise','fPElZ','NgVqM','Angle','TwhXx','version','setupEffect_Shakey','Game_Picture_update','return\x200','setupEffect_JumpToXy','YIoFl','tvlhX','duration','filter','Arrange_Row','kSzZM','IYuVD','GLDdv','currentBlur','Open','floor','lurET','reduce','unmovedMouseY','Spazz','PIjoN','_pictureEffectsLayerZ','rangeY','getPictureEffectsBlur','Spin_Change','updatePictureEffectsDepthRates','qQlKS','setupEffect_Wobble','YXogN','Banner_InOut','setupEffect_GhostInOut','sMfvZ','depthY','updatePictureEffectsBlendMode','bind','clearQueue','Rng','TargetY','Arrange_Vert','Submerge_InOut','status','lMhXV','ZgJGN','MzwDQ','QuickPress','Electrocuted','updateZLayerQueueData','VisuMZ_0_CoreEngine','ARRAYSTRUCT','setupEffect_ShrinkInOut','setupEffect_RandomInOut','pJimu','InOutSine','changeAlterXy','igXpT','Blur','jbtnq','OQgSd','sGnrK','initPictureEffectsDepth','Squish_InOut','_anglePlus','registerCommand','setupEffect_Illusion','OutQuint','Sprite_Picture_updateOther','updateSidestep','updateRotateQueueData','uxAsf','TuOoD','DcRLf','SortByLayerZ','vZlfE','Game_Picture_initialize','Scale','targetRateY','setupEffect_Blur','Arrange_Horz','_targetY','updatePictureEffectsBlur','setupEffect_Berserk','Expand_InOut','Range','Linear','setupEffect_HueShiftBy','setupEffect_StretchInOut','setupEffect_Heal','zDfSl','OutBounce','TVOof','unXPw','Arrange_Col','targetBlur','rERmx','Spin_InOut','ycCoL','changeSwaying','_targetAnchor','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','setupEffect_FadeLayerSwitch','iVViH','updatePictureEffectsDepthChanges','RateY','setupEffect_PhaseInOut','Hzrfu','Levitate_InOut','AvVoi','Jiggle','updatePictureSettings','updatePictureEffectsSway','initPictureEffectsFilterData','updatePictureLayerZ','wqTjZ','_initiatedPictureEffectsBlendMode','RIXmj','_targetOpacity','BlurFilter','scaleX','_queueChanges','pictureEffectsScaleY','ENITS','DistanceX','setupEffect_Electrocuted','91941BiMFrT','distanceX','Filename','AYQch','vsnui','duxRi','setupEffect_RollInOut','makeDeepCopy','targetScaleY','setupEffect_FlashChange','IrkFO','enabled','Spins','yEhpX','Capsule_Burst','NawsC','plusHover','plusSidestep','moveY','Swaying','Game_Picture_show','ljRjZ','setupEffect_TemplateInOut','setZ','uDVcO','setupEffect_SubmergeInOut','Flash_Change','mXMFt','getQueue','name','xYOCo','Merge_Change','setEasingType','filters','_targetScaleX','_pictureEffectsBreathing','Glow','rateY','round','_pictureEffectsSway','XfVhk','children','cwCMJ','wholeDuration','ConvertParams','opacity','scaleY','_targetX','80ePSoRb','656cSQFPU','jNwEs','OCmwM','RRyEK','setupEffect_TelevisionInOut','targetRange','_hueFilterData','_targetScaleY','abs'];_0x4e8c=function(){return _0x33fedc;};return _0x4e8c();}VisuMZ[label][_0x53ce3c(0x2e6)]=VisuMZ[label][_0x53ce3c(0x2e6)]||{},VisuMZ[_0x53ce3c(0x210)]=function(_0x2ac852,_0x52ab97){const _0x448542=_0x53ce3c;for(const _0x18ed6a in _0x52ab97){if(_0x448542(0x26e)!==_0x448542(0x26e))_0x55f840[_0x448542(0x1ef)]=!![],_0x1f38b5['targetBlur']=_0xab76c6['targetBlur'];else{if(_0x18ed6a[_0x448542(0x250)](/(.*):(.*)/i)){const _0x4df7f8=String(RegExp['$1']),_0x1a16f5=String(RegExp['$2'])['toUpperCase']()[_0x448542(0x2d7)]();let _0x237e0e,_0x402fac,_0xee14f0;switch(_0x1a16f5){case'NUM':_0x237e0e=_0x52ab97[_0x18ed6a]!==''?Number(_0x52ab97[_0x18ed6a]):0x0;break;case _0x448542(0x2e0):_0x402fac=_0x52ab97[_0x18ed6a]!==''?JSON['parse'](_0x52ab97[_0x18ed6a]):[],_0x237e0e=_0x402fac[_0x448542(0x30f)](_0x44d6d0=>Number(_0x44d6d0));break;case _0x448542(0x36e):_0x237e0e=_0x52ab97[_0x18ed6a]!==''?eval(_0x52ab97[_0x18ed6a]):null;break;case _0x448542(0x309):_0x402fac=_0x52ab97[_0x18ed6a]!==''?JSON[_0x448542(0x2db)](_0x52ab97[_0x18ed6a]):[],_0x237e0e=_0x402fac[_0x448542(0x30f)](_0x1ef3ec=>eval(_0x1ef3ec));break;case'JSON':_0x237e0e=_0x52ab97[_0x18ed6a]!==''?JSON[_0x448542(0x2db)](_0x52ab97[_0x18ed6a]):'';break;case _0x448542(0x222):_0x402fac=_0x52ab97[_0x18ed6a]!==''?JSON[_0x448542(0x2db)](_0x52ab97[_0x18ed6a]):[],_0x237e0e=_0x402fac[_0x448542(0x30f)](_0x5d585c=>JSON['parse'](_0x5d585c));break;case _0x448542(0x377):_0x237e0e=_0x52ab97[_0x18ed6a]!==''?new Function(JSON['parse'](_0x52ab97[_0x18ed6a])):new Function(_0x448542(0x16c));break;case _0x448542(0x368):_0x402fac=_0x52ab97[_0x18ed6a]!==''?JSON[_0x448542(0x2db)](_0x52ab97[_0x18ed6a]):[],_0x237e0e=_0x402fac[_0x448542(0x30f)](_0x131a88=>new Function(JSON[_0x448542(0x2db)](_0x131a88)));break;case _0x448542(0x348):_0x237e0e=_0x52ab97[_0x18ed6a]!==''?String(_0x52ab97[_0x18ed6a]):'';break;case'ARRAYSTR':_0x402fac=_0x52ab97[_0x18ed6a]!==''?JSON['parse'](_0x52ab97[_0x18ed6a]):[],_0x237e0e=_0x402fac[_0x448542(0x30f)](_0x576eef=>String(_0x576eef));break;case'STRUCT':_0xee14f0=_0x52ab97[_0x18ed6a]!==''?JSON['parse'](_0x52ab97[_0x18ed6a]):{},_0x237e0e=VisuMZ['ConvertParams']({},_0xee14f0);break;case _0x448542(0x199):_0x402fac=_0x52ab97[_0x18ed6a]!==''?JSON[_0x448542(0x2db)](_0x52ab97[_0x18ed6a]):[],_0x237e0e=_0x402fac[_0x448542(0x30f)](_0x5b7435=>VisuMZ[_0x448542(0x210)]({},JSON[_0x448542(0x2db)](_0x5b7435)));break;default:continue;}_0x2ac852[_0x4df7f8]=_0x237e0e;}}}return _0x2ac852;},(_0x4af51a=>{const _0x4883a6=_0x53ce3c,_0x39f4cc=_0x4af51a['name'];for(const _0x606cd of dependencies){if('TYFqT'===_0x4883a6(0x31f)){let _0x41f97b=_0x37f9cc[_0x4883a6(0x375)]['Game_Picture_x'][_0x4883a6(0x281)](this);return _0x41f97b+=this['plusSidestep'](),_0x41f97b+=this['depthX'](),_0x41f97b;}else{if(!Imported[_0x606cd]){alert(_0x4883a6(0x2fc)[_0x4883a6(0x29e)](_0x39f4cc,_0x606cd)),SceneManager[_0x4883a6(0x274)]();break;}}}const _0x5cb634=_0x4af51a[_0x4883a6(0x303)];if(_0x5cb634['match'](/\[Version[ ](.*?)\]/i)){if(_0x4883a6(0x1e9)!==_0x4883a6(0x1e9)){const _0x426bcd=_0x394dbf['children'];_0x426bcd[_0x4883a6(0x2c7)]((_0x420e7c,_0x185c25)=>{if(_0x420e7c['_z']!==_0x185c25['_z'])return _0x420e7c['_z']-_0x185c25['_z'];return _0x420e7c['_pictureId']-_0x185c25['_pictureId'];});}else{const _0x5cf6d4=Number(RegExp['$1']);_0x5cf6d4!==VisuMZ[label][_0x4883a6(0x169)]&&(alert(_0x4883a6(0x294)[_0x4883a6(0x29e)](_0x39f4cc,_0x5cf6d4)),SceneManager['exit']());}}if(_0x5cb634[_0x4883a6(0x250)](/\[Tier[ ](\d+)\]/i)){const _0x17f9e3=Number(RegExp['$1']);if(_0x17f9e3<tier){if(_0x4883a6(0x36d)===_0x4883a6(0x36d))alert(_0x4883a6(0x36a)[_0x4883a6(0x29e)](_0x39f4cc,_0x17f9e3,tier)),SceneManager[_0x4883a6(0x274)]();else{const _0x448ac2=_0x16b9b6[_0x4883a6(0x373)]();if(_0x448ac2)_0x448ac2[_0x4883a6(0x287)](_0x206d4f+0x1);}}else tier=Math[_0x4883a6(0x256)](_0x17f9e3,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x4883a6(0x2e6)],_0x4af51a['parameters']);})(pluginData);if(VisuMZ['CoreEngine']['version']<1.77){let text='';text+=_0x53ce3c(0x1cb),text+=_0x53ce3c(0x349),alert(text),SceneManager['exit']();}VisuMZ[_0x53ce3c(0x375)][_0x53ce3c(0x1b2)]=Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x32a)],Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x32a)]=function(){const _0xbeb84f=_0x53ce3c;VisuMZ[_0xbeb84f(0x375)][_0xbeb84f(0x1b2)][_0xbeb84f(0x281)](this),this[_0xbeb84f(0x265)]();},VisuMZ['PictureEffects'][_0x53ce3c(0x1f8)]=Game_Picture[_0x53ce3c(0x233)]['show'],Game_Picture['prototype'][_0x53ce3c(0x2f5)]=function(_0x2c770a,_0x4803a5,_0x35b26a,_0x51bda1,_0x5931a0,_0x2ed4cb,_0xfe79d1,_0x4517fb){const _0x48d9fd=_0x53ce3c;VisuMZ[_0x48d9fd(0x375)]['Game_Picture_show'][_0x48d9fd(0x281)](this,_0x2c770a,_0x4803a5,_0x35b26a,_0x51bda1,_0x5931a0,_0x2ed4cb,_0xfe79d1,_0x4517fb),this[_0x48d9fd(0x265)]();},Game_Picture['prototype'][_0x53ce3c(0x265)]=function(){const _0x53bbdd=_0x53ce3c;this[_0x53bbdd(0x18c)](),this[_0x53bbdd(0x1d7)](),this[_0x53bbdd(0x2b5)](),this[_0x53bbdd(0x1a4)](),this[_0x53bbdd(0x2f1)](),this['initPictureEffectsSway'](),this['initPictureEffectsLayerZ']();},VisuMZ['PictureEffects'][_0x53ce3c(0x22d)]=Game_Picture['prototype']['x'],Game_Picture[_0x53ce3c(0x233)]['x']=function(){const _0x43f48f=_0x53ce3c;let _0x38ceaf=VisuMZ[_0x43f48f(0x375)][_0x43f48f(0x22d)][_0x43f48f(0x281)](this);return _0x38ceaf+=this[_0x43f48f(0x1f5)](),_0x38ceaf+=this[_0x43f48f(0x22c)](),_0x38ceaf;},VisuMZ['PictureEffects'][_0x53ce3c(0x25a)]=Game_Picture[_0x53ce3c(0x233)]['y'],Game_Picture[_0x53ce3c(0x233)]['y']=function(){const _0x23c255=_0x53ce3c;let _0xd1643a=VisuMZ[_0x23c255(0x375)][_0x23c255(0x25a)][_0x23c255(0x281)](this);return _0xd1643a+=this[_0x23c255(0x1f4)](),_0xd1643a+=this['depthY'](),_0xd1643a;},VisuMZ[_0x53ce3c(0x375)]['Game_Picture_scaleX']=Game_Picture['prototype'][_0x53ce3c(0x1de)],Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1de)]=function(){const _0x3f27e2=_0x53ce3c;let _0x87496=VisuMZ[_0x3f27e2(0x375)]['Game_Picture_scaleX']['call'](this);return _0x87496+=this['pictureEffectsScaleX'](),_0x87496;},VisuMZ[_0x53ce3c(0x375)][_0x53ce3c(0x360)]=Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x212)],Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x212)]=function(){const _0x2c6dfe=_0x53ce3c;let _0x23f8af=VisuMZ[_0x2c6dfe(0x375)][_0x2c6dfe(0x360)][_0x2c6dfe(0x281)](this);return _0x23f8af+=this[_0x2c6dfe(0x1e0)](),_0x23f8af;},VisuMZ['PictureEffects'][_0x53ce3c(0x329)]=Game_Picture[_0x53ce3c(0x233)]['angle'],Game_Picture['prototype'][_0x53ce3c(0x300)]=function(){const _0x4e04d4=_0x53ce3c;let _0x382ba9=VisuMZ[_0x4e04d4(0x375)][_0x4e04d4(0x329)][_0x4e04d4(0x281)](this);return _0x382ba9+=this['pictureEffectsSway'](),_0x382ba9;},Game_Picture['prototype'][_0x53ce3c(0x18c)]=function(){const _0x13c8fa=_0x53ce3c;this[_0x13c8fa(0x1df)]=[];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x200)]=function(){const _0x3eca54=_0x53ce3c;if(this[_0x3eca54(0x1df)]===undefined)this[_0x3eca54(0x265)]();return this[_0x3eca54(0x1df)];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x366)]=function(){const _0x267e77=_0x53ce3c;return this[_0x267e77(0x200)]()[_0x267e77(0x23e)]>0x0;},Game_Picture[_0x53ce3c(0x233)]['addToQueue']=function(_0x5b764d){const _0x3a6c8c=_0x53ce3c;if(this[_0x3a6c8c(0x1df)]===undefined)this['initPictureEffects']();_0x5b764d[_0x3a6c8c(0x170)]===undefined&&(_0x5b764d[_0x3a6c8c(0x170)]=0x1),this['_queueChanges'][_0x3a6c8c(0x358)](_0x5b764d);},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2a7)]=function(_0x48f020){const _0x43fcf8=_0x53ce3c;if(this[_0x43fcf8(0x1df)]===undefined)this[_0x43fcf8(0x265)]();this[_0x43fcf8(0x1df)]=_0x48f020;},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x21e)]=function(){const _0x1875f5=_0x53ce3c;return this[_0x1875f5(0x200)]()[_0x1875f5(0x17a)]((_0x152025,_0x1aa4c0)=>_0x152025+_0x1aa4c0[_0x1875f5(0x170)],0x0);},VisuMZ[_0x53ce3c(0x375)][_0x53ce3c(0x16b)]=Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x277)],Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x277)]=function(){const _0x557526=_0x53ce3c;VisuMZ[_0x557526(0x375)]['Game_Picture_update']['call'](this),this[_0x557526(0x291)](),this['updatePictureEffectsXyAlter'](),this[_0x557526(0x235)](),this[_0x557526(0x240)](),this['updatePictureEffectsSway'](),this['_duration']<=0x0&&this[_0x557526(0x366)]()&&this[_0x557526(0x279)]();},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x279)]=function(){const _0xee01ca=_0x53ce3c,_0x6d2c75=this[_0xee01ca(0x1df)][_0xee01ca(0x35c)]();this['updateMoveQueueData'](_0x6d2c75),this['updateRotateQueueData'](_0x6d2c75),this['updateToneQueueData'](_0x6d2c75),this[_0xee01ca(0x2f6)](_0x6d2c75),this['updateHueQueueData'](_0x6d2c75),this[_0xee01ca(0x197)](_0x6d2c75);},Game_Picture['prototype'][_0x53ce3c(0x344)]=function(_0x92ac79){const _0x18d1fb=_0x53ce3c;if(!_0x92ac79)return;_0x92ac79[_0x18d1fb(0x32e)]!==undefined&&(this[_0x18d1fb(0x276)]=_0x92ac79['filename']);_0x92ac79[_0x18d1fb(0x32c)]!==undefined&&(this['_anchor']=JsonEx['makeDeepCopy'](_0x92ac79[_0x18d1fb(0x32c)]),this[_0x18d1fb(0x1ca)]=JsonEx[_0x18d1fb(0x1eb)](_0x92ac79[_0x18d1fb(0x32c)]));if(_0x92ac79['targetAnchor']!==undefined){if('NTUTF'!==_0x18d1fb(0x236))this[_0x18d1fb(0x1ca)]=JsonEx[_0x18d1fb(0x1eb)](_0x92ac79[_0x18d1fb(0x317)]);else{const _0x9488b9=_0x143d5f['getLastPluginCommandInterpreter']();if(_0x9488b9)_0x9488b9[_0x18d1fb(0x287)](_0x2fd5ea+0x1);}}_0x92ac79[_0x18d1fb(0x298)]!==undefined&&(this['_x']=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x298)]),this[_0x18d1fb(0x213)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x298)]));_0x92ac79[_0x18d1fb(0x1f6)]!==undefined&&(this['_y']=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x1f6)]),this[_0x18d1fb(0x1b7)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x1f6)]));_0x92ac79[_0x18d1fb(0x232)]!==undefined&&(this[_0x18d1fb(0x213)]=Math['round'](_0x92ac79[_0x18d1fb(0x232)]));_0x92ac79[_0x18d1fb(0x2b2)]!==undefined&&(this[_0x18d1fb(0x1b7)]=Math['round'](_0x92ac79[_0x18d1fb(0x2b2)]));_0x92ac79[_0x18d1fb(0x1de)]!==undefined&&(this[_0x18d1fb(0x301)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x1de)]),this[_0x18d1fb(0x206)]=Math['round'](_0x92ac79['scaleX']));if(_0x92ac79[_0x18d1fb(0x212)]!==undefined){if('WYkMV'!=='WYkMV'){const _0x5a8aaf=_0x490213[_0x18d1fb(0x373)]();if(_0x5a8aaf)_0x5a8aaf['wait'](_0x5dd695+0x1);}else this[_0x18d1fb(0x282)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x212)]),this[_0x18d1fb(0x21c)]=Math['round'](_0x92ac79['scaleY']);}_0x92ac79[_0x18d1fb(0x2bb)]!==undefined&&(this[_0x18d1fb(0x206)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x2bb)]));_0x92ac79[_0x18d1fb(0x1ec)]!==undefined&&(this[_0x18d1fb(0x21c)]=Math[_0x18d1fb(0x20a)](_0x92ac79['targetScaleY']));if(_0x92ac79['opacity']!==undefined){if(_0x18d1fb(0x194)===_0x18d1fb(0x194))this[_0x18d1fb(0x25f)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x211)]),this[_0x18d1fb(0x1dc)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x211)]);else{const _0x4fcba3=_0x38b94c[_0x18d1fb(0x373)]();if(_0x4fcba3)_0x4fcba3[_0x18d1fb(0x287)](_0x164473+0x1);}}_0x92ac79[_0x18d1fb(0x2ab)]!==undefined&&(this['_targetOpacity']=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x2ab)]));_0x92ac79[_0x18d1fb(0x2e9)]!==undefined&&(this[_0x18d1fb(0x26a)]=_0x92ac79[_0x18d1fb(0x2e9)]);if(!_0x92ac79['duration'])_0x92ac79['duration']=0x0;this[_0x18d1fb(0x249)]=Math[_0x18d1fb(0x20a)](_0x92ac79[_0x18d1fb(0x170)]),this['_wholeDuration']=Math[_0x18d1fb(0x20a)](_0x92ac79['duration']),_0x92ac79['easingType']!==undefined&&(this[_0x18d1fb(0x376)]=_0x92ac79[_0x18d1fb(0x2c5)],this[_0x18d1fb(0x24b)]=_0x92ac79[_0x18d1fb(0x2c5)]);},Game_Picture['prototype'][_0x53ce3c(0x1ac)]=function(_0x50046f){const _0x1b82b1=_0x53ce3c;if(this[_0x1b82b1(0x1a6)]===undefined)this[_0x1b82b1(0x243)]();if(_0x50046f[_0x1b82b1(0x23a)]!==undefined){if(_0x1b82b1(0x2a6)==='bfvkf')this[_0x1b82b1(0x1a6)][_0x1b82b1(0x228)]=Math[_0x1b82b1(0x20a)](_0x50046f[_0x1b82b1(0x23a)]),this[_0x1b82b1(0x1a6)][_0x1b82b1(0x35f)]=Math['round'](_0x50046f['currentAngle']);else{const _0x21ddb7=_0x392f94['getLastPluginCommandInterpreter']();if(_0x21ddb7)_0x21ddb7[_0x1b82b1(0x287)](_0xe8feae+0x1);}}_0x50046f[_0x1b82b1(0x2ae)]!==undefined&&(this[_0x1b82b1(0x1a6)]['target']=Math[_0x1b82b1(0x20a)](_0x50046f['targetAngle']));if(!_0x50046f[_0x1b82b1(0x170)])_0x50046f['duration']=0x0;this['_anglePlus'][_0x1b82b1(0x170)]=Math[_0x1b82b1(0x20a)](_0x50046f[_0x1b82b1(0x170)]),this['_anglePlus'][_0x1b82b1(0x20f)]=Math[_0x1b82b1(0x20a)](_0x50046f['duration']),_0x50046f[_0x1b82b1(0x299)]!==undefined&&(_0x1b82b1(0x383)===_0x1b82b1(0x383)?(this[_0x1b82b1(0x1a6)][_0x1b82b1(0x170)]=Math[_0x1b82b1(0x20a)](_0x50046f[_0x1b82b1(0x299)]),this[_0x1b82b1(0x1a6)][_0x1b82b1(0x20f)]=Math[_0x1b82b1(0x20a)](_0x50046f[_0x1b82b1(0x299)])):(this[_0x1b82b1(0x27f)]({'duration':_0x29a3b9,'targetTone':_0x5c5d5a[_0x1b82b1(0x350)](),'toneDuration':_0x4f2f26,'targetBlur':0xa,'blurDuration':_0x414eef,'easingType':_0x1b82b1(0x1bc)}),this['addToQueue']({'duration':0x0,'opacity':0x0,'tone':this[_0x1b82b1(0x32b)]?this[_0x1b82b1(0x32b)]['clone']():[0x0,0x0,0x0,0x0],'currentBlur':0x0}))),_0x50046f[_0x1b82b1(0x340)]!==undefined&&(this[_0x1b82b1(0x1a6)]['easingType']=_0x50046f[_0x1b82b1(0x340)]);},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2fb)]=function(_0x148291){const _0x7e6b34=_0x53ce3c;if(!_0x148291)return;_0x148291['tone']!==undefined&&(this[_0x7e6b34(0x32b)]=_0x148291['tone'][_0x7e6b34(0x350)](),this[_0x7e6b34(0x297)]=_0x148291[_0x7e6b34(0x304)]['clone']()),_0x148291[_0x7e6b34(0x2a8)]!==undefined&&(_0x7e6b34(0x2f3)!==_0x7e6b34(0x2fa)?(this[_0x7e6b34(0x32b)]=this[_0x7e6b34(0x32b)]?this['_tone']:[0x0,0x0,0x0,0x0],this[_0x7e6b34(0x297)]=_0x148291[_0x7e6b34(0x2a8)][_0x7e6b34(0x350)]()):(this[_0x7e6b34(0x32b)]=this[_0x7e6b34(0x32b)]?this[_0x7e6b34(0x32b)]:[0x0,0x0,0x0,0x0],this[_0x7e6b34(0x297)]=_0x1ae0da['targetTone'][_0x7e6b34(0x350)]())),_0x148291[_0x7e6b34(0x28b)]!==undefined&&(_0x7e6b34(0x1ee)!==_0x7e6b34(0x2a9)?this[_0x7e6b34(0x251)]=Math['round'](_0x148291[_0x7e6b34(0x28b)]):(this['_blurFilterData']={'enabled':![],'blur':0x0,'targetBlur':0x0,'duration':0x0},this[_0x7e6b34(0x21b)]={'enabled':![],'hue':0x0,'targetHue':0x0,'duration':0x0}));},Game_Picture['prototype'][_0x53ce3c(0x1d7)]=function(){const _0x100dfc=_0x53ce3c;this[_0x100dfc(0x302)]={'enabled':![],'blur':0x0,'targetBlur':0x0,'duration':0x0},this[_0x100dfc(0x21b)]={'enabled':![],'hue':0x0,'targetHue':0x0,'duration':0x0};},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x291)]=function(){const _0x18b974=_0x53ce3c;this[_0x18b974(0x245)](),this[_0x18b974(0x23d)]();},Game_Picture['prototype'][_0x53ce3c(0x2f7)]=function(){const _0x5ebec5=_0x53ce3c;if(this[_0x5ebec5(0x302)]===undefined)this[_0x5ebec5(0x1d7)]();return this[_0x5ebec5(0x302)];},Game_Picture['prototype']['getPictureEffectsBlur']=function(){const _0x2b7334=_0x53ce3c;if(this[_0x2b7334(0x302)]===undefined)this[_0x2b7334(0x1d7)]();return this[_0x2b7334(0x302)][_0x2b7334(0x29d)];},Game_Picture[_0x53ce3c(0x233)]['updatePictureEffectsBlurFilter']=function(){const _0x5e7793=_0x53ce3c,_0x59434f=this[_0x5e7793(0x2f7)]();if(!_0x59434f['enabled'])return;if(_0x59434f['duration']<=0x0)return;const _0x346829=_0x59434f[_0x5e7793(0x170)];_0x59434f[_0x5e7793(0x29d)]=(_0x59434f['blur']*(_0x346829-0x1)+_0x59434f[_0x5e7793(0x1c5)])/_0x346829,_0x59434f['duration']--;if(_0x59434f[_0x5e7793(0x170)]<=0x0){if(_0x5e7793(0x308)==='gbVfZ')_0x59434f[_0x5e7793(0x29d)]=_0x59434f[_0x5e7793(0x1c5)];else return _0x5e103c[_0x5e7793(0x191)]&&_0x24b2c3[_0x5e7793(0x303)]['includes']('['+_0x2b3721+']');}},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2f6)]=function(_0x25755a){const _0x223fe7=_0x53ce3c,_0x238d9d=this[_0x223fe7(0x2f7)]();_0x25755a[_0x223fe7(0x176)]!==undefined&&(_0x238d9d[_0x223fe7(0x1ef)]=!![],_0x238d9d[_0x223fe7(0x29d)]=_0x25755a['currentBlur'],_0x238d9d['targetBlur']=_0x25755a[_0x223fe7(0x176)]),_0x25755a[_0x223fe7(0x1c5)]!==undefined&&(_0x238d9d[_0x223fe7(0x1ef)]=!![],_0x238d9d[_0x223fe7(0x1c5)]=_0x25755a['targetBlur']),_0x25755a[_0x223fe7(0x2a2)]!==undefined&&(_0x238d9d[_0x223fe7(0x1ef)]=!![],_0x238d9d[_0x223fe7(0x170)]=Math[_0x223fe7(0x20a)](_0x25755a[_0x223fe7(0x2a2)]));},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x37f)]=function(){const _0x5b3377=_0x53ce3c;if(this[_0x5b3377(0x21b)]===undefined)this[_0x5b3377(0x1d7)]();return this[_0x5b3377(0x21b)];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x26b)]=function(){const _0x11cbd3=_0x53ce3c;return this[_0x11cbd3(0x37f)]()[_0x11cbd3(0x34c)];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x23d)]=function(){const _0x56c22b=_0x53ce3c,_0x43ccb3=this[_0x56c22b(0x37f)]();if(!_0x43ccb3[_0x56c22b(0x1ef)])return;if(_0x43ccb3[_0x56c22b(0x170)]<=0x0)return;const _0x56b748=_0x43ccb3['duration'];_0x43ccb3['hue']=(_0x43ccb3[_0x56c22b(0x34c)]*(_0x56b748-0x1)+_0x43ccb3['targetHue'])/_0x56b748,_0x43ccb3[_0x56c22b(0x170)]--,_0x43ccb3[_0x56c22b(0x170)]<=0x0&&(_0x43ccb3[_0x56c22b(0x34c)]=_0x43ccb3['targetHue']);},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2a3)]=function(_0xa41e61){const _0x250c03=_0x53ce3c,_0x3a9372=this[_0x250c03(0x37f)]();_0xa41e61[_0x250c03(0x290)]!==undefined&&(_0x3a9372['enabled']=!![],_0x3a9372[_0x250c03(0x34c)]=Math['round'](_0xa41e61['currentHue']),_0x3a9372[_0x250c03(0x2d2)]=Math[_0x250c03(0x20a)](_0xa41e61[_0x250c03(0x290)])),_0xa41e61[_0x250c03(0x2d2)]!==undefined&&(_0x3a9372[_0x250c03(0x1ef)]=!![],_0x3a9372[_0x250c03(0x2d2)]=Math[_0x250c03(0x20a)](_0xa41e61[_0x250c03(0x2d2)])),_0xa41e61[_0x250c03(0x2e7)]!==undefined&&(_0x3a9372[_0x250c03(0x1ef)]=!![],_0x3a9372[_0x250c03(0x170)]=Math[_0x250c03(0x20a)](_0xa41e61[_0x250c03(0x2e7)]));},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2b5)]=function(){const _0x43aa5a=_0x53ce3c;this['_pictureEffectsHover']={'y':0x0,'distance':0x0,'targetDistance':0x0,'rate':-0x2707,'targetRate':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0},this[_0x43aa5a(0x231)]={'x':0x0,'distance':0x0,'targetDistance':0x0,'rate':-0x2707,'targetRate':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};},Game_Picture[_0x53ce3c(0x233)]['updatePictureEffectsXyAlter']=function(){const _0x240bb3=_0x53ce3c;this[_0x240bb3(0x2b8)](),this[_0x240bb3(0x1ab)]();},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x19e)]=function(_0x57b686,_0x53f891,_0x587a1a,_0x436ba6,_0x2aae74){const _0x3a15d5=_0x53ce3c;_0x57b686[_0x3a15d5(0x225)]=_0x53f891,_0x57b686[_0x3a15d5(0x2fe)]=_0x587a1a,_0x57b686['targetRng']=_0x436ba6,_0x57b686['duration']=_0x2aae74,_0x57b686['rate']===-0x2707&&(_0x57b686['rate']=_0x57b686[_0x3a15d5(0x2fe)]),_0x57b686[_0x3a15d5(0x337)]===-0x2707&&(_0x57b686['rng']=_0x57b686['targetRng']),_0x2aae74<=0x0&&('lgXhr'!==_0x3a15d5(0x20e)?(_0x57b686[_0x3a15d5(0x22a)]=_0x53f891,_0x57b686['rate']=_0x587a1a,_0x57b686[_0x3a15d5(0x337)]=_0x436ba6):this['initPictureEffectsXyAlter']());},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x241)]=function(_0x39d691,_0x528150){const _0xd405a8=_0x53ce3c;if(_0x39d691[_0xd405a8(0x170)]>0x0){if(_0xd405a8(0x1ae)===_0xd405a8(0x1ae)){const _0x4aaf44=_0x39d691[_0xd405a8(0x170)];_0x39d691[_0xd405a8(0x22a)]=(_0x39d691[_0xd405a8(0x22a)]*(_0x4aaf44-0x1)+_0x39d691[_0xd405a8(0x225)])/_0x4aaf44,_0x39d691['rate']=(_0x39d691[_0xd405a8(0x2c0)]*(_0x4aaf44-0x1)+_0x39d691[_0xd405a8(0x2fe)])/_0x4aaf44,_0x39d691[_0xd405a8(0x337)]=(_0x39d691[_0xd405a8(0x337)]*(_0x4aaf44-0x1)+_0x39d691['targetRng'])/_0x4aaf44,_0x39d691[_0xd405a8(0x170)]--;}else{_0x219500[_0xd405a8(0x33c)](_0x5bbc27),_0x100730=_0x3c3a41[_0xd405a8(0x256)](_0x2281b0||0x14,0x14);let _0x577e34=_0x135593[_0xd405a8(0x178)](_0x25e6a1/0x4);this[_0xd405a8(0x18c)](),this[_0xd405a8(0x27f)]({'targetTone':_0x35e265[_0xd405a8(0x350)](),'toneDuration':_0x95a7bf,'duration':0x0});const _0x297e36=_0x577e34;while(_0x577e34--){const _0x2454e5=0x1-(0x1-_0x54b8c7)*((_0x297e36-_0x577e34)/_0x297e36);this[_0xd405a8(0x27f)]({'targetMoveX':this['_x']+(_0x5ac33a[_0xd405a8(0x24e)]()>0.5?-0x1:0x1)*_0x1cf8f3,'targetMoveY':this['_y']+(_0xe28c75[_0xd405a8(0x24e)]()>0.5?-0x1:0x1)*_0x14236a,'targetScaleX':this['_scaleX']*_0x2454e5,'targetScaleY':this[_0xd405a8(0x282)]*_0x2454e5,'targetAngle':this[_0xd405a8(0x278)]()+(_0x577e34%0x2===0x0?-0x1:0x1)*_0x23a1e0,'duration':0x4});}this[_0xd405a8(0x27f)]({'filename':_0x53faf5,'moveX':this['_x'],'moveY':this['_y'],'scaleX':this[_0xd405a8(0x301)],'scaleY':this[_0xd405a8(0x282)],'currentAngle':this[_0xd405a8(0x278)](),'duration':0x0,'targetTone':[0x0,0x0,0x0,0x0],'toneDuration':_0x2be5f6/0x3,'easingType':_0xd405a8(0x1bc)});}}const _0x597782=Graphics[_0xd405a8(0x33e)]+_0x39d691['rng'];_0x39d691[_0x528150]=Math[_0xd405a8(0x37d)](_0x597782*_0x39d691[_0xd405a8(0x2c0)])*_0x39d691[_0xd405a8(0x22a)];},Game_Picture[_0x53ce3c(0x233)]['changeHover']=function(_0x254286,_0x1767fe,_0x41c022,_0x4984bb){const _0x38999e=_0x53ce3c;this[_0x38999e(0x2d3)]===undefined&&(_0x38999e(0x33a)==='zGSpV'?this[_0x38999e(0x2b5)]():(this['addToQueue']({'scaleX':this[_0x38999e(0x301)]*0.05,'opacity':0x0,'duration':0x0,'easingType':'Linear'}),this[_0x38999e(0x27f)]({'targetScaleX':this['_scaleX'],'targetOpacity':this[_0x38999e(0x25f)]||0xff,'duration':_0x4c3908,'easingType':_0x38999e(0x19d)}))),this['changeAlterXy'](this[_0x38999e(0x2d3)],_0x254286,_0x1767fe,_0x41c022,_0x4984bb);},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2b8)]=function(){const _0x24c873=_0x53ce3c;if(this[_0x24c873(0x2d3)]===undefined){if(_0x24c873(0x2ac)===_0x24c873(0x2ac))this[_0x24c873(0x2b5)]();else{const _0x2614ab=_0x11e823[_0x24c873(0x373)]();if(_0x2614ab)_0x2614ab[_0x24c873(0x287)](_0x4c0bad+0x1);}}const _0x536cc1=this[_0x24c873(0x2d3)];this['updateAlterXy'](_0x536cc1,'y');},Game_Picture['prototype'][_0x53ce3c(0x1f4)]=function(){const _0xf6b0d4=_0x53ce3c;return this[_0xf6b0d4(0x2d3)]===undefined&&this[_0xf6b0d4(0x2b5)](),this[_0xf6b0d4(0x2d3)]['y'];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x346)]=function(_0x5c56e7,_0x4238ef,_0x5befd2,_0x459394){const _0x1516df=_0x53ce3c;this['_pictureEffectsSidestep']===undefined&&this[_0x1516df(0x2b5)](),this[_0x1516df(0x19e)](this[_0x1516df(0x231)],_0x5c56e7,_0x4238ef,_0x5befd2,_0x459394);},Game_Picture['prototype'][_0x53ce3c(0x1ab)]=function(){const _0x3c82b7=_0x53ce3c;this['_pictureEffectsSidestep']===undefined&&(_0x3c82b7(0x1d1)==='Hzrfu'?this[_0x3c82b7(0x2b5)]():this[_0x3c82b7(0x27f)]({'targetScaleX':this[_0x3c82b7(0x301)]*0x4,'targetScaleY':this[_0x3c82b7(0x282)]*0x4,'targetOpacity':0x0,'duration':_0x3e9dfb,'easingType':_0x3c82b7(0x19d)}));const _0x4290a7=this[_0x3c82b7(0x231)];this[_0x3c82b7(0x241)](_0x4290a7,'x');},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1f5)]=function(){const _0x362ea4=_0x53ce3c;if(this['_pictureEffectsSidestep']===undefined){if(_0x362ea4(0x1e7)!==_0x362ea4(0x1e7)){const _0x547843=_0x438064['getLastPluginCommandInterpreter']();if(_0x547843)_0x547843[_0x362ea4(0x287)](_0x35ade4+0x1);}else this[_0x362ea4(0x2b5)]();}return this[_0x362ea4(0x231)]['x'];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1a4)]=function(){const _0x396412=_0x53ce3c;this[_0x396412(0x255)]={'distanceX':0x0,'targetDistanceX':0x0,'distanceY':0x0,'targetDistanceY':0x0,'rateX':0x0,'rateY':0x0,'duration':0x0,'unmovedMouseX':!![],'unmovedMouseY':!![]};},Game_Picture['prototype'][_0x53ce3c(0x22c)]=function(){const _0x1afece=_0x53ce3c;this[_0x1afece(0x255)]===undefined&&this[_0x1afece(0x1a4)]();const _0x35bc2a=this[_0x1afece(0x255)];return _0x35bc2a[_0x1afece(0x1e5)]/0x2*_0x35bc2a['rateX'];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x189)]=function(){const _0x181218=_0x53ce3c;this['_pictureEffectsDepth']===undefined&&this[_0x181218(0x1a4)]();const _0x12a0a0=this[_0x181218(0x255)];return _0x12a0a0[_0x181218(0x35a)]/0x2*_0x12a0a0[_0x181218(0x209)];},Game_Picture[_0x53ce3c(0x233)]['changeDepth']=function(_0xf1c11c,_0x33579a,_0x56fcb4){const _0x3ea375=_0x53ce3c;if(this[_0x3ea375(0x255)]===undefined){if(_0x3ea375(0x288)===_0x3ea375(0x288))this[_0x3ea375(0x1a4)]();else{if(this[_0x3ea375(0x17e)]===_0x52f3f0)this[_0x3ea375(0x37c)]();this[_0x3ea375(0x17e)]=_0x115b03(_0x5cdce5);}}const _0x12cc60=this[_0x3ea375(0x255)];_0x12cc60[_0x3ea375(0x2dd)]=_0xf1c11c,_0x12cc60['targetDistanceY']=_0x33579a,_0x12cc60['duration']=_0x56fcb4,_0x56fcb4<=0x0&&(_0x12cc60['distanceX']=_0xf1c11c,_0x12cc60[_0x3ea375(0x35a)]=_0x33579a);},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x235)]=function(){const _0x573751=_0x53ce3c;this[_0x573751(0x1ce)](),this[_0x573751(0x182)]();},Game_Picture[_0x53ce3c(0x233)]['updatePictureEffectsDepthChanges']=function(){const _0xc9335e=_0x53ce3c;this['_pictureEffectsDepth']===undefined&&this[_0xc9335e(0x1a4)]();const _0xbd5039=this['_pictureEffectsDepth'];if(_0xbd5039[_0xc9335e(0x170)]<=0x0)return;const _0x214040=_0xbd5039[_0xc9335e(0x170)];_0xbd5039[_0xc9335e(0x1e5)]=(_0xbd5039[_0xc9335e(0x1e5)]*(_0x214040-0x1)+_0xbd5039[_0xc9335e(0x2dd)])/_0x214040,_0xbd5039[_0xc9335e(0x35a)]=(_0xbd5039[_0xc9335e(0x35a)]*(_0x214040-0x1)+_0xbd5039['targetDistanceY'])/_0x214040,_0xbd5039[_0xc9335e(0x170)]--;},Game_Picture['prototype']['updatePictureEffectsDepthRates']=function(){const _0x591df0=_0x53ce3c;this[_0x591df0(0x255)]===undefined&&this[_0x591df0(0x1a4)]();const _0x464ec5=this[_0x591df0(0x255)];if(TouchInput['_x']>0x0)_0x464ec5[_0x591df0(0x27e)]=![];if(TouchInput['_y']>0x0)_0x464ec5[_0x591df0(0x17b)]=![];const _0x1471c5=_0x464ec5[_0x591df0(0x27e)]?Graphics[_0x591df0(0x27d)]/0x2:0x0,_0x1c8486=_0x464ec5['unmovedMouseY']?Graphics['height']/0x2:0x0,_0x126eb6=TouchInput['_x']||_0x1471c5,_0x3a5c89=TouchInput['_y']||_0x1c8486;_0x464ec5[_0x591df0(0x2ce)]=-(_0x126eb6/Graphics[_0x591df0(0x27d)]*0x2-0x1),_0x464ec5[_0x591df0(0x209)]=-(_0x3a5c89/Graphics[_0x591df0(0x374)]*0x2-0x1);},Game_Picture['prototype'][_0x53ce3c(0x2f1)]=function(){this['_pictureEffectsBreathing']={'scaleX':0x0,'scaleY':0x0,'rangeX':0x0,'targetRangeX':0x0,'rangeY':0x0,'targetRangeY':0x0,'rateX':-0x2707,'targetRateX':-0x2707,'rateY':-0x2707,'targetRateY':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2d1)]=function(){const _0x5d4196=_0x53ce3c;return this[_0x5d4196(0x207)]===undefined&&this[_0x5d4196(0x2f1)](),this[_0x5d4196(0x207)][_0x5d4196(0x1de)];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1e0)]=function(){const _0xf708e4=_0x53ce3c;return this[_0xf708e4(0x207)]===undefined&&this[_0xf708e4(0x2f1)](),this[_0xf708e4(0x207)][_0xf708e4(0x212)];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x224)]=function(_0x223fcc,_0x12eb1e,_0x19d83a,_0x1d9264,_0x3a2065,_0x1ee357){const _0x9b24dd=_0x53ce3c;if(this['_pictureEffectsBreathing']===undefined){if('BJZxc'!==_0x9b24dd(0x322)){this[_0x9b24dd(0x34d)]&&this['filters']['remove'](this[_0x9b24dd(0x34d)]);this[_0x9b24dd(0x34d)]=_0x3d15ef;return;}else this[_0x9b24dd(0x2f1)]();}const _0x3165f1=this['_pictureEffectsBreathing'];_0x3165f1[_0x9b24dd(0x29c)]=_0x223fcc,_0x3165f1['targetRangeY']=_0x12eb1e,_0x3165f1[_0x9b24dd(0x2af)]=_0x19d83a,_0x3165f1[_0x9b24dd(0x1b4)]=_0x1d9264,_0x3165f1[_0x9b24dd(0x369)]=_0x3a2065,_0x3165f1[_0x9b24dd(0x170)]=_0x1ee357,_0x3165f1[_0x9b24dd(0x2ce)]===-0x2707&&(_0x9b24dd(0x24a)===_0x9b24dd(0x22f)?(_0x1cbfb2[_0x9b24dd(0x375)][_0x9b24dd(0x293)][_0x9b24dd(0x281)](this),this['updatePictureLayerZ']()):_0x3165f1['rateX']=_0x3165f1[_0x9b24dd(0x2af)]),_0x3165f1[_0x9b24dd(0x209)]===-0x2707&&(_0x3165f1['rateY']=_0x3165f1['targetRateY']),_0x3165f1['rng']===-0x2707&&(_0x3165f1['rng']=_0x3165f1['targetRng']),_0x1ee357<=0x0&&(_0x3165f1[_0x9b24dd(0x2ef)]=_0x223fcc,_0x3165f1[_0x9b24dd(0x17f)]=_0x12eb1e,_0x3165f1[_0x9b24dd(0x2ce)]=_0x19d83a,_0x3165f1[_0x9b24dd(0x209)]=_0x1d9264,_0x3165f1[_0x9b24dd(0x337)]=_0x3a2065);},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x240)]=function(){const _0x1a13d0=_0x53ce3c;this['_pictureEffectsBreathing']===undefined&&this[_0x1a13d0(0x2f1)]();const _0x2590cb=this[_0x1a13d0(0x207)];if(_0x2590cb[_0x1a13d0(0x170)]>0x0){if(_0x1a13d0(0x2f4)===_0x1a13d0(0x2f4)){const _0x1a4493=_0x2590cb[_0x1a13d0(0x170)];_0x2590cb[_0x1a13d0(0x2ef)]=(_0x2590cb['rangeX']*(_0x1a4493-0x1)+_0x2590cb['targetRangeX'])/_0x1a4493,_0x2590cb[_0x1a13d0(0x17f)]=(_0x2590cb[_0x1a13d0(0x17f)]*(_0x1a4493-0x1)+_0x2590cb[_0x1a13d0(0x381)])/_0x1a4493,_0x2590cb[_0x1a13d0(0x2ce)]=(_0x2590cb['rateX']*(_0x1a4493-0x1)+_0x2590cb['targetRateX'])/_0x1a4493,_0x2590cb['rateY']=(_0x2590cb['rateY']*(_0x1a4493-0x1)+_0x2590cb['targetRateY'])/_0x1a4493,_0x2590cb['rng']=(_0x2590cb[_0x1a13d0(0x337)]*(_0x1a4493-0x1)+_0x2590cb[_0x1a13d0(0x369)])/_0x1a4493,_0x2590cb[_0x1a13d0(0x170)]--;}else{const _0x4df8c0=_0x569041[_0x1a13d0(0x373)]();if(_0x4df8c0)_0x4df8c0[_0x1a13d0(0x287)](_0x37647f+0x1);}}const _0x3f2afe=Graphics[_0x1a13d0(0x33e)]+_0x2590cb[_0x1a13d0(0x337)];_0x2590cb[_0x1a13d0(0x1de)]=Math['cos'](_0x3f2afe*_0x2590cb[_0x1a13d0(0x2ce)])*_0x2590cb[_0x1a13d0(0x2ef)],_0x2590cb[_0x1a13d0(0x212)]=Math[_0x1a13d0(0x37d)](_0x3f2afe*_0x2590cb['rateY'])*-_0x2590cb[_0x1a13d0(0x17f)];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x347)]=function(){this['_pictureEffectsSway']={'angle':0x0,'range':0x0,'targetRange':0x0,'rate':-0x2707,'targetRate':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x259)]=function(){const _0x15ca0d=_0x53ce3c;return this[_0x15ca0d(0x20b)]===undefined&&this[_0x15ca0d(0x347)](),this[_0x15ca0d(0x20b)][_0x15ca0d(0x300)];},Game_Picture['prototype']['changeSwaying']=function(_0x23a365,_0x14724f,_0xf4e364,_0xe2db8a){const _0x506592=_0x53ce3c;this[_0x506592(0x20b)]===undefined&&this[_0x506592(0x347)]();const _0x114542=this['_pictureEffectsSway'];_0x114542[_0x506592(0x21a)]=_0x23a365,_0x114542[_0x506592(0x2fe)]=_0x14724f,_0x114542[_0x506592(0x369)]=_0xf4e364,_0x114542['duration']=_0xe2db8a;_0x114542['rate']===-0x2707&&(_0x114542[_0x506592(0x2c0)]=_0x114542[_0x506592(0x2fe)]);if(_0x114542[_0x506592(0x337)]===-0x2707){if(_0x506592(0x37e)==='Ojlns'){const _0xf994d=_0x58780b[_0x506592(0x373)]();if(_0xf994d)_0xf994d[_0x506592(0x287)](_0x52dcb5+0x1);}else _0x114542[_0x506592(0x337)]=_0x114542['targetRng'];}_0xe2db8a<=0x0&&(_0x114542[_0x506592(0x363)]=_0x23a365,_0x114542[_0x506592(0x2c0)]=_0x14724f,_0x114542[_0x506592(0x337)]=_0xf4e364);},Game_Picture['prototype'][_0x53ce3c(0x1d6)]=function(){const _0x18e271=_0x53ce3c;this[_0x18e271(0x20b)]===undefined&&this[_0x18e271(0x347)]();const _0x173b7a=this[_0x18e271(0x20b)];if(_0x173b7a[_0x18e271(0x170)]>0x0){const _0x9c9b08=_0x173b7a['duration'];_0x173b7a[_0x18e271(0x363)]=(_0x173b7a[_0x18e271(0x363)]*(_0x9c9b08-0x1)+_0x173b7a['targetRange'])/_0x9c9b08,_0x173b7a[_0x18e271(0x2c0)]=(_0x173b7a['rate']*(_0x9c9b08-0x1)+_0x173b7a[_0x18e271(0x2fe)])/_0x9c9b08,_0x173b7a['rng']=(_0x173b7a['rng']*(_0x9c9b08-0x1)+_0x173b7a[_0x18e271(0x369)])/_0x9c9b08,_0x173b7a[_0x18e271(0x170)]--;}const _0x4e1b9d=Graphics['frameCount']+_0x173b7a['rng'];_0x173b7a[_0x18e271(0x300)]=Math[_0x18e271(0x37d)](_0x4e1b9d*_0x173b7a[_0x18e271(0x2c0)])*_0x173b7a[_0x18e271(0x363)];},Game_Picture['prototype'][_0x53ce3c(0x37c)]=function(){const _0x30653c=_0x53ce3c;this[_0x30653c(0x17e)]=0x0;},Game_Picture['prototype']['z']=function(){const _0x3e1b9e=_0x53ce3c;if(this['_pictureEffectsLayerZ']===undefined)this['initPictureEffectsLayerZ']();return this[_0x3e1b9e(0x17e)];},Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1fb)]=function(_0x157341){const _0x52dfb6=_0x53ce3c;if(this[_0x52dfb6(0x17e)]===undefined)this[_0x52dfb6(0x37c)]();this['_pictureEffectsLayerZ']=Number(_0x157341);},Game_Picture[_0x53ce3c(0x233)]['changeZ']=function(_0x2fb312){const _0x574062=_0x53ce3c;if(this[_0x574062(0x17e)]===undefined)this[_0x574062(0x37c)]();this[_0x574062(0x17e)]+=_0x2fb312;},Game_Picture['prototype'][_0x53ce3c(0x197)]=function(_0xea0051){const _0x12f2f1=_0x53ce3c;_0xea0051[_0x12f2f1(0x1fb)]!==undefined&&(this['_pictureEffectsLayerZ']=_0xea0051[_0x12f2f1(0x1fb)]),_0xea0051[_0x12f2f1(0x327)]!==undefined&&(this[_0x12f2f1(0x17e)]+=_0xea0051[_0x12f2f1(0x327)]);},VisuMZ['PictureEffects'][_0x53ce3c(0x343)]=Sprite_Picture['prototype'][_0x53ce3c(0x32a)],Sprite_Picture['prototype'][_0x53ce3c(0x32a)]=function(_0x2d659e){const _0x938292=_0x53ce3c;this['_z']=0x0,VisuMZ['PictureEffects'][_0x938292(0x343)][_0x938292(0x281)](this,_0x2d659e);},VisuMZ[_0x53ce3c(0x375)][_0x53ce3c(0x1aa)]=Sprite_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2e5)],Sprite_Picture[_0x53ce3c(0x233)]['updateOther']=function(){const _0x5ce94d=_0x53ce3c;VisuMZ[_0x5ce94d(0x375)][_0x5ce94d(0x1aa)][_0x5ce94d(0x281)](this);if(this['picture']()){if(_0x5ce94d(0x1ad)==='UThqk'){let _0xb4ee17=_0x5d0ccd[_0x5ce94d(0x375)][_0x5ce94d(0x329)][_0x5ce94d(0x281)](this);return _0xb4ee17+=this[_0x5ce94d(0x259)](),_0xb4ee17;}else this[_0x5ce94d(0x2b7)]();}},Sprite_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2b7)]=function(){const _0x269a58=_0x53ce3c;this[_0x269a58(0x1b8)](),this['updatePictureEffectsHue'](),this[_0x269a58(0x18a)](),this[_0x269a58(0x2a4)]();},Sprite_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1b8)]=function(){const _0xbee060=_0x53ce3c,_0x3c4552=this[_0xbee060(0x334)](),_0x49bfd1=_0x3c4552[_0xbee060(0x2f7)]();if(!_0x49bfd1[_0xbee060(0x1ef)]){if('oKRoz'!==_0xbee060(0x2bf)){this[_0xbee060(0x34d)]&&this[_0xbee060(0x205)][_0xbee060(0x318)](this[_0xbee060(0x34d)]);this[_0xbee060(0x34d)]=undefined;return;}else{const _0x4d0280=_0xedd3c9[_0xbee060(0x373)]();if(_0x4d0280)_0x4d0280[_0xbee060(0x287)](_0x18ed7a+0x1);}}if(!this[_0xbee060(0x34d)]){if(_0xbee060(0x252)===_0xbee060(0x252))this[_0xbee060(0x34d)]=new PIXI[(_0xbee060(0x205))][(_0xbee060(0x1dd))](0x0),this[_0xbee060(0x205)]=this[_0xbee060(0x205)]||[],this[_0xbee060(0x205)][_0xbee060(0x358)](this[_0xbee060(0x34d)]),this[_0xbee060(0x34b)]&&(_0xbee060(0x359)==='KpFdb'?this[_0xbee060(0x205)]['push'](this[_0xbee060(0x34b)]):this[_0xbee060(0x27f)]({'targetOpacity':0x0,'targetScaleX':this[_0xbee060(0x301)]*0.5,'targetScaleY':this[_0xbee060(0x282)]*0.5,'duration':_0x5dbf5f,'targetBlur':0xa,'blurDuration':_0x5d9c16,'easingType':_0xbee060(0x19d)}));else{_0x286b6b=_0x3a08c3||0x1,_0x4a2c39=_0x4c3a2c??0x18,_0x52eac2=_0x20e3e8??0xc,this[_0xbee060(0x18c)]();const _0x14089d=_0xacfa8a/0x2;while(_0x577746--){const _0xd19065=0x1-_0x3a5dd7['abs'](_0x4475ed-_0x14089d)/_0x14089d;this[_0xbee060(0x27f)]({'moveX':this['_x']+(_0x3d415a[_0xbee060(0x24e)]()>0.5?-0x1:0x1)*(_0x34ea20*_0xd19065),'moveY':this['_y']+(_0xb64c14[_0xbee060(0x24e)]()>0.5?-0x1:0x1)*(_0x14b553*_0xd19065),'duration':0x1,'easingType':_0xbee060(0x1bc)});}this[_0xbee060(0x27f)]({'moveX':this['_x'],'moveY':this['_y'],'duration':0x1});}}const _0x260b2b=this[_0xbee060(0x34d)];_0x260b2b[_0xbee060(0x29d)]=_0x49bfd1[_0xbee060(0x29d)];},Sprite_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2da)]=function(){const _0x1982ce=_0x53ce3c,_0x18f4b5=this[_0x1982ce(0x334)](),_0x36d2bc=_0x18f4b5[_0x1982ce(0x26b)]();this[_0x1982ce(0x34a)](_0x36d2bc);},Sprite_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x18a)]=function(){const _0x50876e=_0x53ce3c,_0x4b0de7=this['picture']();if(_0x4b0de7['blendMode']()===0x0&&!this[_0x50876e(0x1da)])return;if(!this['filters'])return;if(this[_0x50876e(0x205)][_0x50876e(0x23e)]<=0x0)return;this[_0x50876e(0x1da)]=!![];!this[_0x50876e(0x34b)]&&(this[_0x50876e(0x34b)]=new ColorFilter(),this[_0x50876e(0x205)]=this[_0x50876e(0x205)]||[],this[_0x50876e(0x205)][_0x50876e(0x358)](this[_0x50876e(0x34b)]));const _0x14acf3=this[_0x50876e(0x34b)];_0x14acf3['blendMode']=_0x4b0de7[_0x50876e(0x2e9)]();},Sprite_Picture['prototype'][_0x53ce3c(0x2a4)]=function(){const _0x680b80=_0x53ce3c;this['_z']=this[_0x680b80(0x334)]()['z']();},VisuMZ[_0x53ce3c(0x375)][_0x53ce3c(0x293)]=Spriteset_Base[_0x53ce3c(0x233)]['updatePictureSettings'],Spriteset_Base[_0x53ce3c(0x233)][_0x53ce3c(0x1d5)]=function(){const _0x59ce61=_0x53ce3c;VisuMZ[_0x59ce61(0x375)]['Spriteset_Base_updatePictureSettings'][_0x59ce61(0x281)](this),this[_0x59ce61(0x1d8)]();},Spriteset_Base[_0x53ce3c(0x233)][_0x53ce3c(0x1d8)]=function(){const _0x387d6e=_0x53ce3c;if(!this['_pictureContainer'])return;VisuMZ[_0x387d6e(0x375)][_0x387d6e(0x1b0)](this[_0x387d6e(0x326)]);},VisuMZ[_0x53ce3c(0x375)][_0x53ce3c(0x1b0)]=function(_0x1b5430){const _0x1f3368=_0x53ce3c,_0x48f1d3=_0x1b5430[_0x1f3368(0x20d)];_0x48f1d3['sort']((_0x4fcd53,_0x20bd18)=>{const _0x3baaea=_0x1f3368;if(_0x4fcd53['_z']!==_0x20bd18['_z'])return _0x4fcd53['_z']-_0x20bd18['_z'];return _0x4fcd53[_0x3baaea(0x26f)]-_0x20bd18[_0x3baaea(0x26f)];});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x258),_0x107434=>{const _0x3259a0=_0x53ce3c;VisuMZ['ConvertParams'](_0x107434,_0x107434);const _0x49fccd=_0x107434['PictureIDs'];if(_0x49fccd[_0x3259a0(0x23e)]<=0x0)return;const _0x192a8c=Math[_0x3259a0(0x256)](Number(_0x107434[_0x3259a0(0x306)]),0x1),_0x74c5b7=Math[_0x3259a0(0x256)](Number(_0x107434['Distance']),0x1),_0x4dd2a7=Math[_0x3259a0(0x256)](Number(_0x107434[_0x3259a0(0x2e3)]),0x1),_0x42df9a=_0x107434['Tone']||[0x0,0x0,0x0,0x0],_0x174abf=Math['max'](Number(_0x107434[_0x3259a0(0x28a)]),0x1);let _0x419762=0x0;for(const _0x41e192 of _0x49fccd){if(_0x3259a0(0x261)!==_0x3259a0(0x1d3)){const _0x291811=$gameScreen['picture'](_0x41e192);if(!_0x291811)continue;_0x291811[_0x3259a0(0x2a0)](_0x192a8c,_0x4dd2a7),_0x419762=_0x291811['getTotalQueueDuration']();}else{_0xf5e0f3=_0x2ff4f2||0x3c,_0x52a1eb=_0x30b785[_0x3259a0(0x256)](_0x142d42,0xa),_0x3807f7=_0x282967,_0x657649=_0x27f5f5??0x24,_0x271219=_0x3e6404??0x18,this[_0x3259a0(0x18c)](),this[_0x3259a0(0x27f)]({'targetTone':_0x18d996[_0x3259a0(0x350)](),'toneDuration':_0x5d12dd/0x4*0x6,'duration':0x0});const _0x4713ff=_0x2934a4/0x2;while(_0x1e5e4a--){const _0x3fba63=0x1-_0x50ab22[_0x3259a0(0x21d)](_0x2928f8-_0x4713ff)/_0x4713ff;this[_0x3259a0(0x27f)]({'moveX':this['_x']+(_0x380a17['random']()>0.5?-0x1:0x1)*_0x1f9ca3[_0x3259a0(0x351)](_0x52921c['ceil'](_0x35f556*_0x3fba63)),'moveY':this['_y']+(_0x5a70db[_0x3259a0(0x24e)]()>0.5?-0x1:0x1)*_0x3c5e25[_0x3259a0(0x351)](_0x4baa80['ceil'](_0x270c3c*_0x3fba63)),'duration':0x1,'easingType':'Linear'});}this[_0x3259a0(0x27f)]({'targetTone':this[_0x3259a0(0x32b)]?this['_tone']['clone']():[0x0,0x0,0x0,0x0],'toneDuration':_0x16811c/0xa*0x6,'moveX':this['_x'],'moveY':this['_y'],'duration':0x0});}}if(_0x107434[_0x3259a0(0x362)]){if(_0x3259a0(0x352)===_0x3259a0(0x19c))this['clearQueue'](),this[_0x3259a0(0x27f)]({'targetHue':_0x360f2b,'hueDuration':_0x571b94,'duration':_0x48e0bf?_0x2ad2d1:0x0});else{const _0x43db98=$gameTemp['getLastPluginCommandInterpreter']();if(_0x43db98)_0x43db98[_0x3259a0(0x287)](_0x419762+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2a0)]=function(_0x3d7ca5,_0x4c1c3b){const _0x1b5a06=_0x53ce3c;this[_0x1b5a06(0x18c)](),this[_0x1b5a06(0x27f)]({'duration':0x0,'easingType':_0x1b5a06(0x1bc)});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x230),_0x521f12=>{const _0x158ab3=_0x53ce3c;VisuMZ[_0x158ab3(0x210)](_0x521f12,_0x521f12);const _0x272d47=_0x521f12['PictureIDs'];if(_0x272d47[_0x158ab3(0x23e)]<=0x0)return;const _0x169a73=_0x521f12[_0x158ab3(0x26d)]==='In',_0x4a79bb=_0x521f12[_0x158ab3(0x325)]===_0x158ab3(0x30c),_0x3f1f68=Math[_0x158ab3(0x256)](Number(_0x521f12[_0x158ab3(0x28a)]),0x1);let _0xbb2b5d=0x0;for(const _0x392d17 of _0x272d47){if(_0x158ab3(0x2cc)!==_0x158ab3(0x2cc))return this[_0x158ab3(0x231)]===_0x2f5cb3&&this[_0x158ab3(0x2b5)](),this[_0x158ab3(0x231)]['x'];else{const _0xf8550=$gameScreen[_0x158ab3(0x334)](_0x392d17);if(!_0xf8550)continue;_0xf8550[_0x158ab3(0x1fa)](_0x169a73,_0x3f1f68),_0xbb2b5d=_0xf8550[_0x158ab3(0x21e)]();}}if(_0x521f12[_0x158ab3(0x362)]){const _0xbbb753=$gameTemp[_0x158ab3(0x373)]();if(_0xbbb753)_0xbbb753[_0x158ab3(0x287)](_0xbb2b5d+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x1fa)]=function(_0x1c7785,_0x1cee03){const _0x192e8b=_0x53ce3c;this[_0x192e8b(0x18c)]();if(_0x1c7785)this[_0x192e8b(0x27f)]({'duration':0x0,'easingType':_0x192e8b(0x1bc)});else{if(_0x192e8b(0x30b)===_0x192e8b(0x30b))this[_0x192e8b(0x27f)]({'duration':0x0,'easingType':'Linear'});else{const _0x193069=_0x6d32a5['getLastPluginCommandInterpreter']();if(_0x193069)_0x193069['wait'](_0x54bf16+0x1);}}},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x2c1),_0x1972ae=>{const _0x528b25=_0x53ce3c;VisuMZ['ConvertParams'](_0x1972ae,_0x1972ae);const _0x5e1377=_0x1972ae[_0x528b25(0x275)];if(_0x5e1377[_0x528b25(0x23e)]<=0x0)return;const _0x37c444=_0x1972ae[_0x528b25(0x31d)],_0x3d33d1=Math[_0x528b25(0x256)](Number(_0x1972ae[_0x528b25(0x1e2)]),0x1),_0x47b929=Math['max'](Number(_0x1972ae[_0x528b25(0x239)]),0x1),_0x3ab999=Math[_0x528b25(0x256)](Number(_0x1972ae[_0x528b25(0x28a)]),0xa);let _0x1ebae1=0x0;for(const _0x1abb0c of _0x5e1377){const _0x642a85=$gameScreen[_0x528b25(0x334)](_0x1abb0c);if(!_0x642a85)continue;_0x642a85[_0x528b25(0x238)](_0x37c444,_0x3d33d1,_0x47b929,_0x3ab999),_0x1ebae1=_0x642a85[_0x528b25(0x21e)]();}if(_0x1972ae[_0x528b25(0x362)]){const _0xe435b5=$gameTemp['getLastPluginCommandInterpreter']();if(_0xe435b5)_0xe435b5[_0x528b25(0x287)](_0x1ebae1+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x238)]=function(_0x342847,_0x2a5b2f,_0x395565,_0x572c01){const _0x3b3c0e=_0x53ce3c;_0x572c01=_0x572c01||0x3c,_0x572c01=Math[_0x3b3c0e(0x256)](_0x572c01,0xa),times=_0x572c01,_0x2a5b2f=_0x2a5b2f??0x24,_0x395565=_0x395565??0x18,this['clearQueue'](),this[_0x3b3c0e(0x27f)]({'targetTone':_0x342847['clone'](),'toneDuration':_0x572c01/0x4*0x6,'duration':0x0});const _0x5df635=times/0x2;while(times--){const _0x501a42=0x1-Math[_0x3b3c0e(0x21d)](times-_0x5df635)/_0x5df635;this[_0x3b3c0e(0x27f)]({'moveX':this['_x']+(Math[_0x3b3c0e(0x24e)]()>0.5?-0x1:0x1)*Math[_0x3b3c0e(0x351)](Math[_0x3b3c0e(0x266)](_0x2a5b2f*_0x501a42)),'moveY':this['_y']+(Math[_0x3b3c0e(0x24e)]()>0.5?-0x1:0x1)*Math[_0x3b3c0e(0x351)](Math[_0x3b3c0e(0x266)](_0x395565*_0x501a42)),'duration':0x1,'easingType':_0x3b3c0e(0x1bc)});}this['addToQueue']({'targetTone':this[_0x3b3c0e(0x32b)]?this[_0x3b3c0e(0x32b)]['clone']():[0x0,0x0,0x0,0x0],'toneDuration':_0x572c01/0xa*0x6,'moveX':this['_x'],'moveY':this['_y'],'duration':0x0});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1c4),_0x5f3aff=>{const _0x2ac8b8=_0x53ce3c;VisuMZ['ConvertParams'](_0x5f3aff,_0x5f3aff);const _0x2b945e=_0x5f3aff[_0x2ac8b8(0x275)];if(_0x2b945e[_0x2ac8b8(0x23e)]<=0x0)return;const _0x5651ce=Math[_0x2ac8b8(0x256)](Math['round'](Number(_0x5f3aff[_0x2ac8b8(0x2c6)]||0x1)),0x1),_0x8c21a4={'x':Number(_0x5f3aff[_0x2ac8b8(0x2cb)]||0x0),'y':Number(_0x5f3aff[_0x2ac8b8(0x2dc)]||0x0)},_0x3b4754=_0x2b945e[_0x2ac8b8(0x23e)],_0x5855d0=Math[_0x2ac8b8(0x256)](Number(_0x5f3aff['Duration']),0x1);let _0x21adba=0x0;for(const _0xc31ea1 of _0x2b945e){const _0x51453c=$gameScreen[_0x2ac8b8(0x334)](_0xc31ea1);if(!_0x51453c)continue;const _0x24f79f=_0x2b945e[_0x2ac8b8(0x242)](_0xc31ea1);_0x51453c[_0x2ac8b8(0x324)](_0x5651ce,_0x8c21a4,_0x24f79f,_0x3b4754,_0x5855d0),_0x21adba=_0x51453c[_0x2ac8b8(0x21e)]();}if(_0x5f3aff[_0x2ac8b8(0x362)]){if(_0x2ac8b8(0x1c2)!==_0x2ac8b8(0x26c)){const _0x268ff3=$gameTemp[_0x2ac8b8(0x373)]();if(_0x268ff3)_0x268ff3[_0x2ac8b8(0x287)](_0x21adba+0x1);}else this[_0x2ac8b8(0x1ca)]=_0x5533aa[_0x2ac8b8(0x1eb)](_0x30ad45[_0x2ac8b8(0x317)]);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_Arrange_Col']=function(_0x2a175b,_0x440145,_0x43a4c8,_0x13858c,_0x17e587){const _0x5e2ec4=_0x53ce3c,_0x3fa5ef=Math[_0x5e2ec4(0x266)](_0x13858c/_0x2a175b),_0x54fce3=Math[_0x5e2ec4(0x178)](_0x43a4c8/_0x2a175b),_0x25512f=_0x43a4c8%_0x2a175b,_0x23159d=Graphics['width']*(_0x54fce3+0x1)/(_0x3fa5ef+0x1);let _0x546e1d=Graphics[_0x5e2ec4(0x374)]*(_0x25512f+0x1)/(_0x2a175b+0x1);if(_0x54fce3+0x1===_0x3fa5ef){if(_0x5e2ec4(0x173)!==_0x5e2ec4(0x173)){const _0x23a74d=this[_0x5e2ec4(0x37f)]();if(!_0x23a74d[_0x5e2ec4(0x1ef)])return;if(_0x23a74d[_0x5e2ec4(0x170)]<=0x0)return;const _0xc13d45=_0x23a74d['duration'];_0x23a74d[_0x5e2ec4(0x34c)]=(_0x23a74d[_0x5e2ec4(0x34c)]*(_0xc13d45-0x1)+_0x23a74d[_0x5e2ec4(0x2d2)])/_0xc13d45,_0x23a74d[_0x5e2ec4(0x170)]--,_0x23a74d[_0x5e2ec4(0x170)]<=0x0&&(_0x23a74d[_0x5e2ec4(0x34c)]=_0x23a74d[_0x5e2ec4(0x2d2)]);}else{const _0x423a0e=_0x13858c-(_0x3fa5ef-0x1)*_0x2a175b;_0x423a0e!==0x0&&(_0x546e1d=Graphics[_0x5e2ec4(0x374)]*(_0x25512f+0x1)/(_0x423a0e+0x1));}}this[_0x5e2ec4(0x27f)]({'targetMoveX':_0x23159d,'targetMoveY':_0x546e1d,'targetAnchor':{'x':_0x440145['x'],'y':_0x440145['y']},'duration':_0x17e587,'easingType':_0x5e2ec4(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x172),_0x3bdf6e=>{const _0x48009c=_0x53ce3c;VisuMZ[_0x48009c(0x210)](_0x3bdf6e,_0x3bdf6e);const _0x454c71=_0x3bdf6e[_0x48009c(0x275)];if(_0x454c71[_0x48009c(0x23e)]<=0x0)return;const _0x3f0022=Math['max'](Math[_0x48009c(0x20a)](Number(_0x3bdf6e[_0x48009c(0x2c6)]||0x1)),0x1),_0x45bd4f={'x':Number(_0x3bdf6e[_0x48009c(0x2cb)]||0x0),'y':Number(_0x3bdf6e[_0x48009c(0x2dc)]||0x0)},_0x15e906=_0x454c71['length'],_0x315534=Math['max'](Number(_0x3bdf6e[_0x48009c(0x28a)]),0x1);let _0x38e866=0x0;for(const _0x3799d6 of _0x454c71){const _0x4d6347=$gameScreen[_0x48009c(0x334)](_0x3799d6);if(!_0x4d6347)continue;const _0x1af766=_0x454c71[_0x48009c(0x242)](_0x3799d6);_0x4d6347[_0x48009c(0x29a)](_0x3f0022,_0x45bd4f,_0x1af766,_0x15e906,_0x315534),_0x38e866=_0x4d6347[_0x48009c(0x21e)]();}if(_0x3bdf6e[_0x48009c(0x362)]){const _0x794b07=$gameTemp[_0x48009c(0x373)]();if(_0x794b07)_0x794b07[_0x48009c(0x287)](_0x38e866+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x29a)]=function(_0x1eebdf,_0x418a8f,_0x3f225f,_0x53ad36,_0x40a232){const _0x52261b=_0x53ce3c,_0x67986d=Math['ceil'](_0x53ad36/_0x1eebdf),_0xdefe5e=Math[_0x52261b(0x178)](_0x3f225f/_0x1eebdf),_0xd3b90d=_0x3f225f%_0x1eebdf,_0x4bb5aa=Graphics[_0x52261b(0x374)]*(_0xdefe5e+0x1)/(_0x67986d+0x1);let _0x3fdd67=Graphics[_0x52261b(0x27d)]*(_0xd3b90d+0x1)/(_0x1eebdf+0x1);if(_0xdefe5e+0x1===_0x67986d){const _0x517498=_0x53ad36-(_0x67986d-0x1)*_0x1eebdf;_0x517498!==0x0&&(_0x3fdd67=Graphics[_0x52261b(0x27d)]*(_0xd3b90d+0x1)/(_0x517498+0x1));}this['addToQueue']({'targetMoveX':_0x3fdd67,'targetMoveY':_0x4bb5aa,'targetAnchor':{'x':_0x418a8f['x'],'y':_0x418a8f['y']},'duration':_0x40a232,'easingType':_0x52261b(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x1b6),_0x31737c=>{const _0x45f6f2=_0x53ce3c;VisuMZ['ConvertParams'](_0x31737c,_0x31737c);const _0x3bc812=_0x31737c[_0x45f6f2(0x275)];if(_0x3bc812['length']<=0x0)return;const _0x2b9c66=Math[_0x45f6f2(0x20a)](Number(_0x31737c[_0x45f6f2(0x18e)]||0x0)),_0x5aab1b={'x':Number(_0x31737c[_0x45f6f2(0x2cb)]||0x0),'y':Number(_0x31737c['AnchorY']||0x0)},_0x534663=_0x3bc812[_0x45f6f2(0x23e)],_0x3c3c17=Math[_0x45f6f2(0x256)](Number(_0x31737c[_0x45f6f2(0x28a)]),0x1);let _0x20c63b=0x0;for(const _0x40caa2 of _0x3bc812){if('qQlKS'!==_0x45f6f2(0x183)){_0x3481c=(_0x17d380*_0x29e469+_0x54f13e)/(_0x179fb1+0x1),_0x5af77a=(_0x312727*_0x399c50+_0x102b4e)/(_0x2c37e5+0x1);const _0x95669e=_0x4ce434-(_0x481f92+0x1),_0xb42a8e=_0x671017/0x2,_0x606513=_0x332974,_0x37eae3=-_0x606513/_0x4ea928[_0x45f6f2(0x269)](_0xb42a8e,0x2),_0x3139e6=_0x37eae3*_0x1344ff[_0x45f6f2(0x269)](_0x95669e-_0xb42a8e,0x2)+_0x606513;this[_0x45f6f2(0x27f)]({'moveX':_0x239635,'moveY':_0x4b53d1-_0x3139e6,'duration':0x1});}else{const _0x367d16=$gameScreen[_0x45f6f2(0x334)](_0x40caa2);if(!_0x367d16)continue;const _0x407279=_0x3bc812[_0x45f6f2(0x242)](_0x40caa2);_0x367d16[_0x45f6f2(0x323)](_0x2b9c66,_0x5aab1b,_0x407279,_0x534663,_0x3c3c17),_0x20c63b=_0x367d16[_0x45f6f2(0x21e)]();}}if(_0x31737c[_0x45f6f2(0x362)]){const _0xb729d1=$gameTemp[_0x45f6f2(0x373)]();if(_0xb729d1)_0xb729d1['wait'](_0x20c63b+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x323)]=function(_0x5ea51a,_0x458ee1,_0x25e2cd,_0x3d5641,_0x19248f){const _0x2fe003=_0x53ce3c,_0x306387=Graphics['width']*(_0x25e2cd+0x1)/(_0x3d5641+0x1);this[_0x2fe003(0x27f)]({'targetMoveX':_0x306387,'targetMoveY':_0x5ea51a,'targetAnchor':{'x':_0x458ee1['x'],'y':_0x458ee1['y']},'duration':_0x19248f,'easingType':_0x2fe003(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x18f),_0x18bd08=>{const _0x220c36=_0x53ce3c;VisuMZ[_0x220c36(0x210)](_0x18bd08,_0x18bd08);const _0x365183=_0x18bd08[_0x220c36(0x275)];if(_0x365183[_0x220c36(0x23e)]<=0x0)return;const _0x43b332=Math[_0x220c36(0x20a)](Number(_0x18bd08[_0x220c36(0x2b9)]||0x0)),_0x5c06f9={'x':Number(_0x18bd08['AnchorX']||0x0),'y':Number(_0x18bd08[_0x220c36(0x2dc)]||0x0)},_0x354265=_0x365183[_0x220c36(0x23e)],_0x20602e=Math[_0x220c36(0x256)](Number(_0x18bd08[_0x220c36(0x28a)]),0x1);let _0x5b75b2=0x0;for(const _0x57f482 of _0x365183){if(_0x220c36(0x1c3)==='YzEOM')this[_0x220c36(0x27f)]({'targetScaleY':this[_0x220c36(0x282)]*0.05,'duration':_0x50e288-0x2,'easingType':_0x220c36(0x1a9)}),this[_0x220c36(0x27f)]({'targetOpacity':0x0,'duration':0x2,'easingType':_0x220c36(0x1bc)});else{const _0xa2da8c=$gameScreen[_0x220c36(0x334)](_0x57f482);if(!_0xa2da8c)continue;const _0x19c467=_0x365183[_0x220c36(0x242)](_0x57f482);_0xa2da8c[_0x220c36(0x27a)](_0x43b332,_0x5c06f9,_0x19c467,_0x354265,_0x20602e),_0x5b75b2=_0xa2da8c[_0x220c36(0x21e)]();}}if(_0x18bd08[_0x220c36(0x362)]){if(_0x220c36(0x2e4)==='IZzYL'){const _0x229db7=_0x5103a0[_0x220c36(0x373)]();if(_0x229db7)_0x229db7['wait'](_0x3d6ad4+0x1);}else{const _0x41a2aa=$gameTemp['getLastPluginCommandInterpreter']();if(_0x41a2aa)_0x41a2aa['wait'](_0x5b75b2+0x1);}}}),Game_Picture['prototype'][_0x53ce3c(0x27a)]=function(_0x2ef91b,_0x3f305f,_0x3008d7,_0x25627e,_0x2de72d){const _0x14cc44=_0x53ce3c,_0x1822d2=Graphics[_0x14cc44(0x374)]*(_0x3008d7+0x1)/(_0x25627e+0x1);this[_0x14cc44(0x27f)]({'targetMoveX':_0x2ef91b,'targetMoveY':_0x1822d2,'targetAnchor':{'x':_0x3f305f['x'],'y':_0x3f305f['y']},'duration':_0x2de72d,'easingType':_0x14cc44(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x186),_0x236072=>{const _0x42e68f=_0x53ce3c;VisuMZ['ConvertParams'](_0x236072,_0x236072);const _0x2bb611=_0x236072[_0x42e68f(0x275)];if(_0x2bb611['length']<=0x0)return;const _0x46315c=_0x236072[_0x42e68f(0x26d)]==='In',_0x128c52=_0x236072['Direction']===_0x42e68f(0x30c);let _0x1ef2c6=0x0;for(const _0x40ab8f of _0x2bb611){const _0x5765b0=$gameScreen[_0x42e68f(0x334)](_0x40ab8f);if(!_0x5765b0)continue;_0x5765b0[_0x42e68f(0x35e)](_0x46315c,_0x128c52),_0x1ef2c6=_0x5765b0[_0x42e68f(0x21e)]();}if(_0x236072['Wait']){if('igLAc'===_0x42e68f(0x1db))this['addToQueue']({'moveX':this['_x']+_0x353524[_0x42e68f(0x351)]((_0x56f93c%0x2===0x0?-0x1:0x1)*_0x2c41e2[_0x42e68f(0x271)](_0x44eee6-_0x3b3be7,0x10)),'moveY':this['_y']+_0x583d15[_0x42e68f(0x351)]((_0x3fab34%0x2===0x0?-0x1:0x1)*_0x30a889['min'](_0x463638-_0x131613,0x8)),'duration':0x1,'easingType':'Linear'});else{const _0x170695=$gameTemp[_0x42e68f(0x373)]();if(_0x170695)_0x170695[_0x42e68f(0x287)](_0x1ef2c6+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x35e)]=function(_0x308157,_0x1e28b2){const _0x39b945=_0x53ce3c;this[_0x39b945(0x18c)](),_0x308157?(this[_0x39b945(0x27f)]({'anchor':{'x':0.5,'y':0.5},'moveX':this['_x']+(_0x1e28b2?0x1:-0x1)*Graphics['width'],'scaleX':this[_0x39b945(0x301)]*1.2,'scaleY':this['_scaleX']*0.1,'opacity':0x0,'duration':0x0,'easingType':_0x39b945(0x1bc)}),this[_0x39b945(0x27f)]({'targetMoveX':this['_x'],'targetScaleX':this[_0x39b945(0x301)]*0.8,'targetScaleY':this['_scaleY']*1.2,'targetOpacity':0xc0,'duration':0x14}),this[_0x39b945(0x27f)]({'targetScaleX':this['_scaleX']*0x1,'targetScaleY':this[_0x39b945(0x282)]*0x1,'targetOpacity':0xff,'duration':0xa})):(this[_0x39b945(0x27f)]({'targetMoveX':this['_x'],'targetScaleX':this[_0x39b945(0x301)]*0.8,'targetScaleY':this['_scaleY']*1.2,'targetOpacity':0xc0,'duration':0xa,'easingType':_0x39b945(0x1bc)}),this[_0x39b945(0x27f)]({'targetMoveX':this['_x']+(_0x1e28b2?-0x1:0x1)*Graphics[_0x39b945(0x27d)],'targetScaleX':this[_0x39b945(0x301)]*1.2,'targetScaleY':this[_0x39b945(0x282)]*0.1,'targetOpacity':0x0,'duration':0x14}));},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x380),_0x53c983=>{const _0x3e1c78=_0x53ce3c;VisuMZ['ConvertParams'](_0x53c983,_0x53c983);const _0x3c1660=_0x53c983['PictureIDs'];if(_0x3c1660[_0x3e1c78(0x23e)]<=0x0)return;const _0x352730=_0x53c983[_0x3e1c78(0x31d)]||[0x0,0x0,0x0,0x0],_0x56a3d7=Math['max'](Number(_0x53c983[_0x3e1c78(0x28a)]),0xa);let _0x1972b6=0x0;for(const _0x293140 of _0x3c1660){if(_0x3e1c78(0x36c)!==_0x3e1c78(0x202)){const _0x149f58=$gameScreen['picture'](_0x293140);if(!_0x149f58)continue;_0x149f58[_0x3e1c78(0x1b9)](_0x352730,_0x56a3d7),_0x1972b6=_0x149f58[_0x3e1c78(0x21e)]();}else{const _0x550a2c=_0x770b26/_0x808c28;this[_0x3e1c78(0x27f)]({'moveX':this['_x']+(_0x30b384%0x2===0x0?-0x1:0x1)*_0x3ea3ba['randomInt'](_0x114285[_0x3e1c78(0x266)](_0x42c919*_0x550a2c)),'moveY':this['_y']+(_0x2df8d9%0x2===0x0?-0x1:0x1)*_0x38e478[_0x3e1c78(0x351)](_0x5806d6[_0x3e1c78(0x266)](_0x275a89*_0x550a2c)),'duration':0x1,'easingType':_0x3e1c78(0x1bc)});}}if(_0x53c983[_0x3e1c78(0x362)]){const _0x352eb9=$gameTemp[_0x3e1c78(0x373)]();if(_0x352eb9)_0x352eb9[_0x3e1c78(0x287)](_0x1972b6+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1b9)]=function(_0x30a303,_0xd442c8){const _0x240c32=_0x53ce3c;let _0xe9711c=_0xd442c8-0x8;this[_0x240c32(0x18c)](),this[_0x240c32(0x27f)]({'targetTone':_0x30a303[_0x240c32(0x350)](),'toneDuration':_0xe9711c,'duration':0x0,'easingType':'Linear'});while(_0xe9711c--){this[_0x240c32(0x27f)]({'moveX':this['_x']+Math[_0x240c32(0x351)]((_0xe9711c%0x2===0x0?-0x1:0x1)*Math['min'](_0xd442c8-_0xe9711c,0x10)),'moveY':this['_y']+Math[_0x240c32(0x351)]((_0xe9711c%0x2===0x0?-0x1:0x1)*Math['min'](_0xd442c8-_0xe9711c,0x8)),'duration':0x1,'easingType':'Linear'});}this['addToQueue']({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':0x8,'easingType':'Linear'});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x1a0),_0x1b5bca=>{const _0x294ba1=_0x53ce3c;VisuMZ['ConvertParams'](_0x1b5bca,_0x1b5bca);const _0x414b65=_0x1b5bca[_0x294ba1(0x275)];if(_0x414b65['length']<=0x0)return;const _0x5aa64a=Number(_0x1b5bca[_0x294ba1(0x1a0)]),_0x4d1c8e=Math[_0x294ba1(0x256)](Number(_0x1b5bca[_0x294ba1(0x28a)]),0x1);let _0x3ad292=0x0;for(const _0x3869a8 of _0x414b65){const _0xd5c6bd=$gameScreen['picture'](_0x3869a8);if(!_0xd5c6bd)continue;_0xd5c6bd[_0x294ba1(0x1b5)](_0x5aa64a,_0x4d1c8e,_0x1b5bca['Wait']),_0x3ad292=_0xd5c6bd[_0x294ba1(0x21e)]();}if(_0x1b5bca[_0x294ba1(0x362)]){if(_0x294ba1(0x2e8)!=='CxtjR'){this[_0x294ba1(0x18c)]();let _0x5af246=this['_x'],_0x279856=this['_y'];const _0x5533ee=_0x37649a;let _0x2aeae3=_0x5533ee;this['setEasingType'](_0x294ba1(0x1bc));while(_0x2aeae3--){_0x5af246=(_0x5af246*_0x2aeae3+_0x5f5933)/(_0x2aeae3+0x1),_0x279856=(_0x279856*_0x2aeae3+_0x52d7e2)/(_0x2aeae3+0x1);const _0xdc98ce=_0x5533ee-(_0x2aeae3+0x1),_0x225cf6=_0x5533ee/0x2,_0x247f0c=_0x1334a2,_0x2a0ea1=-_0x247f0c/_0x2534ea[_0x294ba1(0x269)](_0x225cf6,0x2),_0x41ee34=_0x2a0ea1*_0x58100a[_0x294ba1(0x269)](_0xdc98ce-_0x225cf6,0x2)+_0x247f0c;this[_0x294ba1(0x27f)]({'moveX':_0x5af246,'moveY':_0x279856-_0x41ee34,'duration':0x1});}this[_0x294ba1(0x27f)]({'moveX':_0x54f12c,'moveY':_0x47f677,'duration':0x0});}else{const _0x104a93=$gameTemp[_0x294ba1(0x373)]();if(_0x104a93)_0x104a93[_0x294ba1(0x287)](_0x3ad292+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1b5)]=function(_0xf0c923,_0x53f52d,_0x5f4d79){const _0x5df440=_0x53ce3c;this[_0x5df440(0x18c)](),this['addToQueue']({'targetBlur':_0xf0c923,'blurDuration':_0x53f52d,'duration':_0x5f4d79?_0x53f52d:0x0,'easingType':'Linear'});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x34e),_0x4b6027=>{const _0x25fbf2=_0x53ce3c;VisuMZ[_0x25fbf2(0x210)](_0x4b6027,_0x4b6027);const _0x64b918=_0x4b6027[_0x25fbf2(0x275)];if(_0x64b918[_0x25fbf2(0x23e)]<=0x0)return;const _0x1b88ce=Number(_0x4b6027[_0x25fbf2(0x246)])||0x0,_0x4874d6=Number(_0x4b6027[_0x25fbf2(0x2b4)])||0x0,_0x561cd5=Number(_0x4b6027['RateX'])||0x0,_0x3d4049=Number(_0x4b6027[_0x25fbf2(0x1cf)])||0x0,_0xf28382=Number(_0x4b6027[_0x25fbf2(0x18d)])||0x0,_0xb5e82e=Math[_0x25fbf2(0x256)](Number(_0x4b6027['Duration']),0x0);for(const _0x54fbb9 of _0x64b918){const _0x391aab=$gameScreen[_0x25fbf2(0x334)](_0x54fbb9);if(!_0x391aab)continue;_0x391aab[_0x25fbf2(0x224)](_0x1b88ce,_0x4874d6,_0x561cd5,_0x3d4049,_0xf28382,_0xb5e82e);}if(_0x4b6027['Wait']&&_0xb5e82e>0x0){if(_0x25fbf2(0x311)===_0x25fbf2(0x311)){const _0x4d0e54=$gameTemp[_0x25fbf2(0x373)]();if(_0x4d0e54)_0x4d0e54['wait'](_0xb5e82e);}else _0x330290=_0x35c1fb||0x1f4,_0xaa923f=_0x3204b5||0x1,_0x4326e4=_0x5d59db||0x3c,this[_0x25fbf2(0x18c)](),_0x37f065?(this[_0x25fbf2(0x27f)]({'anchor':{'x':0.5,'y':0.5},'currentAngle':-_0x5926a6*0x168+this[_0x25fbf2(0x278)](),'moveX':this['_x']+(_0x33da0b?_0x390783:-_0x255d69),'opacity':0x0,'duration':0x0}),this[_0x25fbf2(0x27f)]({'targetAngle':this[_0x25fbf2(0x278)](),'targetOpacity':this[_0x25fbf2(0x25f)]||0xff,'targetMoveX':this['_x'],'duration':_0x3c94fa,'easingType':_0x25fbf2(0x1bc)})):this[_0x25fbf2(0x27f)]({'targetAngle':_0x3bccce*0x168+this[_0x25fbf2(0x278)](),'targetMoveX':this['_x']+(_0xa40df5?-_0x4b2149:_0xa57cfb),'targetOpacity':0x0,'anchor':{'x':0.5,'y':0.5},'duration':_0x4e0f28,'easingType':_0x25fbf2(0x1bc)});}}),PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x1f2),_0x291c65=>{const _0xdb5f98=_0x53ce3c;VisuMZ[_0xdb5f98(0x210)](_0x291c65,_0x291c65);const _0x2ae34c=_0x291c65[_0xdb5f98(0x275)];if(_0x2ae34c[_0xdb5f98(0x23e)]<=0x0)return;const _0x589eca=_0x291c65[_0xdb5f98(0x1e6)]||'';if(_0x589eca==='')return;const _0x432480=Number(_0x291c65[_0xdb5f98(0x1b3)]),_0x38429c=Number(_0x291c65[_0xdb5f98(0x17c)]||0x0),_0x338e87=_0x291c65['Tone'],_0x54e710=Math[_0xdb5f98(0x256)](Number(_0x291c65[_0xdb5f98(0x2ed)]),0x0),_0x43c63e=Math[_0xdb5f98(0x256)](Number(_0x291c65[_0xdb5f98(0x28a)]),0xa);let _0x5ef0cb=0x0;for(const _0x38b388 of _0x2ae34c){if(_0xdb5f98(0x286)===_0xdb5f98(0x286)){const _0xc7f09a=$gameScreen['picture'](_0x38b388);if(!_0xc7f09a)continue;_0xc7f09a[_0xdb5f98(0x21f)](_0x589eca,_0x432480,_0x38429c,_0x338e87,_0x54e710,_0x43c63e),_0x5ef0cb=_0xc7f09a[_0xdb5f98(0x21e)]();}else this[_0xdb5f98(0x1a4)]();}if(_0x291c65[_0xdb5f98(0x362)]){const _0x3050a4=$gameTemp[_0xdb5f98(0x373)]();if(_0x3050a4)_0x3050a4[_0xdb5f98(0x287)](_0x5ef0cb+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x21f)]=function(_0x2e8515,_0x49722e,_0x118817,_0x15dd5b,_0x559fff,_0x69e313){const _0x49244b=_0x53ce3c;ImageManager[_0x49244b(0x33c)](_0x2e8515),_0x69e313=Math[_0x49244b(0x256)](_0x69e313||0x14,0x14);let _0x975730=Math[_0x49244b(0x178)](_0x69e313/0x4);this['clearQueue'](),this[_0x49244b(0x27f)]({'targetTone':_0x15dd5b[_0x49244b(0x350)](),'toneDuration':_0x69e313,'duration':0x0});const _0x45c3e5=_0x975730;while(_0x975730--){if('CkpYh'===_0x49244b(0x2a5)){const _0x4449eb=0x1-(0x1-_0x49722e)*((_0x45c3e5-_0x975730)/_0x45c3e5);this[_0x49244b(0x27f)]({'targetMoveX':this['_x']+(Math[_0x49244b(0x24e)]()>0.5?-0x1:0x1)*_0x118817,'targetMoveY':this['_y']+(Math[_0x49244b(0x24e)]()>0.5?-0x1:0x1)*_0x118817,'targetScaleX':this[_0x49244b(0x301)]*_0x4449eb,'targetScaleY':this['_scaleY']*_0x4449eb,'targetAngle':this[_0x49244b(0x278)]()+(_0x975730%0x2===0x0?-0x1:0x1)*_0x559fff,'duration':0x4});}else{const _0x53f75e=this['getPictureEffectsHueFilter']();_0x15fb6b[_0x49244b(0x290)]!==_0xcbe204&&(_0x53f75e[_0x49244b(0x1ef)]=!![],_0x53f75e[_0x49244b(0x34c)]=_0x364a1e[_0x49244b(0x20a)](_0x597337[_0x49244b(0x290)]),_0x53f75e[_0x49244b(0x2d2)]=_0x4683d5[_0x49244b(0x20a)](_0x41c920[_0x49244b(0x290)])),_0x3c5932[_0x49244b(0x2d2)]!==_0x3f78e2&&(_0x53f75e['enabled']=!![],_0x53f75e['targetHue']=_0x317db1[_0x49244b(0x20a)](_0xe2ab9b[_0x49244b(0x2d2)])),_0x11d482[_0x49244b(0x2e7)]!==_0x462e2b&&(_0x53f75e[_0x49244b(0x1ef)]=!![],_0x53f75e[_0x49244b(0x170)]=_0x164bf1[_0x49244b(0x20a)](_0x17f6c7[_0x49244b(0x2e7)]));}}this[_0x49244b(0x27f)]({'filename':_0x2e8515,'moveX':this['_x'],'moveY':this['_y'],'scaleX':this['_scaleX'],'scaleY':this['_scaleY'],'currentAngle':this[_0x49244b(0x278)](),'duration':0x0,'targetTone':[0x0,0x0,0x0,0x0],'toneDuration':_0x69e313/0x3,'easingType':_0x49244b(0x1bc)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x2ba),_0x4aece9=>{const _0x184abb=_0x53ce3c;VisuMZ['ConvertParams'](_0x4aece9,_0x4aece9);const _0x3ea13f=_0x4aece9['PictureIDs'];if(_0x3ea13f[_0x184abb(0x23e)]<=0x0)return;const _0x3711cb=_0x4aece9['BackFilename']||'',_0x161b69=_0x4aece9[_0x184abb(0x382)],_0x269709=Math[_0x184abb(0x256)](_0x4aece9[_0x184abb(0x28a)]||0xa,0xa);let _0x280c59=0x0;for(const _0x56643e of _0x3ea13f){if('CaEfK'==='rPAFG'){const _0x312df4=_0x4b49c1[_0x184abb(0x373)]();if(_0x312df4)_0x312df4[_0x184abb(0x287)](_0x582313+0x1);}else{const _0x17100c=$gameScreen[_0x184abb(0x334)](_0x56643e);if(!_0x17100c)continue;_0x17100c[_0x184abb(0x31b)](_0x3711cb,_0x161b69,_0x269709),_0x280c59=_0x17100c['getTotalQueueDuration']();}}if(_0x4aece9[_0x184abb(0x362)]){if(_0x184abb(0x179)!==_0x184abb(0x168)){const _0x1900a6=$gameTemp['getLastPluginCommandInterpreter']();if(_0x1900a6)_0x1900a6[_0x184abb(0x287)](_0x280c59+0x1);}else{const _0x26c1e7=_0x17a0a2[_0x184abb(0x373)]();if(_0x26c1e7)_0x26c1e7[_0x184abb(0x287)](_0x1452d5+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x31b)]=function(_0x240bf0,_0x23419c,_0x2a7c59){const _0x73ab27=_0x53ce3c;_0x240bf0=_0x240bf0||'',_0x2a7c59=Math['max'](_0x2a7c59||0xa,0xa);if(_0x240bf0!=='')ImageManager[_0x73ab27(0x33c)](_0x240bf0);this[_0x73ab27(0x18c)](),this[_0x73ab27(0x27f)]({'targetScaleX':0x0,'duration':Math['floor'](_0x2a7c59/0x2),'easingType':_0x73ab27(0x1bc)}),_0x240bf0!==''?this[_0x73ab27(0x27f)]({'filename':_0x240bf0,'targetScaleX':Math[_0x73ab27(0x21d)](this[_0x73ab27(0x301)])*(_0x23419c?-0x1:0x1),'duration':Math[_0x73ab27(0x266)](_0x2a7c59/0x2),'easingType':_0x73ab27(0x1bc)}):this[_0x73ab27(0x27f)]({'targetScaleX':this['_scaleX']*-0x1,'duration':Math[_0x73ab27(0x266)](_0x2a7c59/0x2),'easingType':'Linear'});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x367),_0x2c2f74=>{const _0x4f5dc5=_0x53ce3c;VisuMZ[_0x4f5dc5(0x210)](_0x2c2f74,_0x2c2f74);const _0x258a77=_0x2c2f74[_0x4f5dc5(0x275)];if(_0x258a77[_0x4f5dc5(0x23e)]<=0x0)return;const _0x444f5b=Math['max'](Number(_0x2c2f74[_0x4f5dc5(0x1b3)]),0x0),_0x4efe44=_0x2c2f74[_0x4f5dc5(0x31d)]||[0x0,0x0,0x0,0x0],_0x4a6335=Math[_0x4f5dc5(0x256)](Number(_0x2c2f74[_0x4f5dc5(0x28a)]),0x1);let _0x5a9da7=0x0;for(const _0x2998d4 of _0x258a77){const _0x5ea884=$gameScreen['picture'](_0x2998d4);if(!_0x5ea884)continue;_0x5ea884[_0x4f5dc5(0x364)](_0x444f5b,_0x4efe44,_0x4a6335),_0x5a9da7=_0x5ea884[_0x4f5dc5(0x21e)]();}if(_0x2c2f74[_0x4f5dc5(0x362)]){if('jfTso'!==_0x4f5dc5(0x247))_0x30c561[_0x4f5dc5(0x33c)](_0x3e3546),this[_0x4f5dc5(0x18c)](),this[_0x4f5dc5(0x27f)]({'targetOpacity':0x0,'duration':_0x523d5a[_0x4f5dc5(0x266)](_0x4cf3b1/0x2),'easingType':_0x4f5dc5(0x19d)}),this[_0x4f5dc5(0x27f)]({'filename':_0x245167,'targetOpacity':this[_0x4f5dc5(0x25f)]||0xff,'duration':_0x346597['floor'](_0x5a89a1/0x2),'easingType':'InOutSine'});else{const _0x139df4=$gameTemp[_0x4f5dc5(0x373)]();if(_0x139df4)_0x139df4[_0x4f5dc5(0x287)](_0x5a9da7+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x364)]=function(_0x3a0b79,_0x305de4,_0x21ef0e){const _0x1ee75e=_0x53ce3c,_0x31cc1f=Math[_0x1ee75e(0x178)](_0x21ef0e/0x5);this[_0x1ee75e(0x18c)](),this['addToQueue']({'targetScaleX':this[_0x1ee75e(0x301)]*_0x3a0b79,'targetScaleY':this['_scaleY']*_0x3a0b79,'duration':_0x31cc1f*0x3,'targetTone':_0x305de4[_0x1ee75e(0x350)](),'toneDuration':_0x31cc1f*0x1,'easingType':_0x1ee75e(0x19d)}),this[_0x1ee75e(0x27f)]({'targetScaleX':this[_0x1ee75e(0x301)],'targetScaleY':this['_scaleY'],'duration':_0x21ef0e-_0x31cc1f*0x3,'targetTone':this['_tone']?this[_0x1ee75e(0x32b)][_0x1ee75e(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x31cc1f,'easingType':_0x1ee75e(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Chilly',_0x431af5=>{const _0x4c6929=_0x53ce3c;VisuMZ[_0x4c6929(0x210)](_0x431af5,_0x431af5);const _0x2a41d8=_0x431af5[_0x4c6929(0x275)];if(_0x2a41d8[_0x4c6929(0x23e)]<=0x0)return;const _0x204440=Math[_0x4c6929(0x256)](_0x431af5[_0x4c6929(0x306)],0x1),_0x22cf3f=_0x431af5[_0x4c6929(0x31d)],_0x382c1c=Math[_0x4c6929(0x256)](_0x431af5[_0x4c6929(0x17c)],0x0),_0x3e775e=Math[_0x4c6929(0x256)](_0x431af5[_0x4c6929(0x2ed)],0x0);let _0x5d9c36=0x0;for(const _0x56b579 of _0x2a41d8){const _0x118d14=$gameScreen[_0x4c6929(0x334)](_0x56b579);if(!_0x118d14)continue;_0x118d14[_0x4c6929(0x2d6)](_0x204440,_0x22cf3f,_0x382c1c,_0x3e775e),_0x5d9c36=_0x118d14[_0x4c6929(0x21e)]();}if(_0x431af5['Wait']){const _0x39dfc7=$gameTemp['getLastPluginCommandInterpreter']();if(_0x39dfc7)_0x39dfc7[_0x4c6929(0x287)](_0x5d9c36+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x2d6)]=function(_0x54848a,_0x57c7b0,_0x6960ee,_0x416b50){const _0x1ac4ed=_0x53ce3c;_0x54848a=_0x54848a||0xa,_0x6960ee=_0x6960ee??0xa,_0x416b50=_0x416b50??0xa,this[_0x1ac4ed(0x18c)](),this['addToQueue']({'targetTone':_0x57c7b0[_0x1ac4ed(0x350)](),'toneDuration':_0x54848a/0x3*0x6,'duration':0x0});let _0x2eeea2=_0x54848a;while(_0x54848a--){this[_0x1ac4ed(0x27f)]({'targetMoveX':this['_x']+(Math[_0x1ac4ed(0x24e)]()>0.5?-0x1:0x1)*(Math['randomInt'](_0x6960ee)+0x1),'targetMoveY':this['_y']+(Math[_0x1ac4ed(0x24e)]()>0.5?-0x1:0x1)*(Math['randomInt'](_0x6960ee)+0x1),'targetAngle':this[_0x1ac4ed(0x278)]()+Math['randomInt'](_0x416b50),'duration':0x2,'easingType':'Linear'}),this[_0x1ac4ed(0x27f)]({'targetMoveX':this['_x']+(Math[_0x1ac4ed(0x24e)]()>0.5?-0x1:0x1)*(Math['randomInt'](_0x6960ee)+0x1),'targetMoveY':this['_y']+(Math[_0x1ac4ed(0x24e)]()>0.5?-0x1:0x1)*(Math[_0x1ac4ed(0x351)](_0x6960ee)+0x1),'targetAngle':this['anglePlus']()-Math['randomInt'](_0x416b50),'duration':0x4,'easingType':_0x1ac4ed(0x1bc)});}this['addToQueue']({'targetTone':this[_0x1ac4ed(0x32b)]?this[_0x1ac4ed(0x32b)][_0x1ac4ed(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x2eeea2/0x3*0x6,'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x1ac4ed(0x278)](),'duration':0x2,'easingType':_0x1ac4ed(0x1bc)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Confused',_0x1f6e05=>{const _0x3f0ce1=_0x53ce3c;VisuMZ['ConvertParams'](_0x1f6e05,_0x1f6e05);const _0x5b3540=_0x1f6e05['PictureIDs'];if(_0x5b3540[_0x3f0ce1(0x23e)]<=0x0)return;const _0x50a62a=Math[_0x3f0ce1(0x256)](Number(_0x1f6e05[_0x3f0ce1(0x306)]),0x1),_0x991ad0=Math[_0x3f0ce1(0x256)](Number(_0x1f6e05[_0x3f0ce1(0x1e2)]),0x1),_0x1f44f5=Math[_0x3f0ce1(0x256)](Number(_0x1f6e05[_0x3f0ce1(0x239)]),0x1),_0x2e5ec6=Math['max'](Number(_0x1f6e05['Degrees']),0x1);let _0x13d27e=0x0;for(const _0x41bfad of _0x5b3540){const _0x532e7=$gameScreen['picture'](_0x41bfad);if(!_0x532e7)continue;_0x532e7['setupEffect_Confused'](_0x50a62a,_0x991ad0,_0x1f44f5,_0x2e5ec6),_0x13d27e=_0x532e7[_0x3f0ce1(0x21e)]();}if(_0x1f6e05[_0x3f0ce1(0x362)]){if(_0x3f0ce1(0x174)!==_0x3f0ce1(0x316)){const _0x188719=$gameTemp[_0x3f0ce1(0x373)]();if(_0x188719)_0x188719[_0x3f0ce1(0x287)](_0x13d27e+0x1);}else{_0x2cba83['loadPicture'](_0x2a0249);let _0x11fb4a=_0x4d7226;this[_0x3f0ce1(0x18c)]();while(_0x11fb4a--){this['addToQueue']({'filename':_0x2e29ef,'duration':_0x4b89d8}),this[_0x3f0ce1(0x27f)]({'filename':this['_name'],'duration':_0x1c469b});}this[_0x3f0ce1(0x27f)]({'filename':_0x437889,'duration':0x0});}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x312)]=function(_0x5ddeee,_0x59628b,_0x292533,_0x24a4cb){const _0x5716f0=_0x53ce3c;this[_0x5716f0(0x18c)]();while(_0x5ddeee--){let _0x2c4583=[0x1,0x2,0x3,0x4,0x6,0x7,0x8,0x9],_0x2446b6=-0x1;while(_0x2c4583[_0x5716f0(0x23e)]>0x0){_0x2446b6*=-0x1;const _0x2719d9=_0x2c4583[Math[_0x5716f0(0x351)](_0x2c4583[_0x5716f0(0x23e)])];_0x2c4583[_0x5716f0(0x318)](_0x2719d9);switch(_0x2719d9){case 0x1:this[_0x5716f0(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']+_0x292533,'targetAngle':this['anglePlus']()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':_0x5716f0(0x19d)});break;case 0x2:this[_0x5716f0(0x27f)]({'targetMoveX':this['_x']-_0x59628b*0.7071,'targetMoveY':this['_y']+_0x292533*0.7071,'targetAngle':this[_0x5716f0(0x278)]()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':'InOutSine'});break;case 0x3:this[_0x5716f0(0x27f)]({'targetMoveX':this['_x']-_0x59628b,'targetMoveY':this['_y'],'targetAngle':this[_0x5716f0(0x278)]()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':_0x5716f0(0x19d)});break;case 0x4:this['addToQueue']({'targetMoveX':this['_x']-_0x59628b*0.7071,'targetMoveY':this['_y']-_0x292533*0.7071,'targetAngle':this[_0x5716f0(0x278)]()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':_0x5716f0(0x19d)});break;case 0x6:this[_0x5716f0(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']-_0x292533,'targetAngle':this[_0x5716f0(0x278)]()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':_0x5716f0(0x19d)});break;case 0x7:this[_0x5716f0(0x27f)]({'targetMoveX':this['_x']+_0x59628b*0.7071,'targetMoveY':this['_y']-_0x292533*0.7071,'targetAngle':this['anglePlus']()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':_0x5716f0(0x19d)});break;case 0x8:this[_0x5716f0(0x27f)]({'targetMoveX':this['_x']+_0x59628b,'targetMoveY':this['_y'],'targetAngle':this['anglePlus']()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':_0x5716f0(0x19d)});break;case 0x9:this['addToQueue']({'targetMoveX':this['_x']+_0x59628b*0.7071,'targetMoveY':this['_y']+_0x292533*0.7071,'targetAngle':this[_0x5716f0(0x278)]()+_0x24a4cb*_0x2446b6,'duration':0xa,'easingType':_0x5716f0(0x19d)});break;}}}this['addToQueue']({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x5716f0(0x278)](),'duration':0x14,'easingType':'OutBack'});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x267),_0x518a18=>{const _0x3f70b4=_0x53ce3c;VisuMZ[_0x3f70b4(0x210)](_0x518a18,_0x518a18);const _0x150eed=_0x518a18[_0x3f70b4(0x275)];if(_0x150eed[_0x3f70b4(0x23e)]<=0x0)return;const _0x5d373d=_0x518a18[_0x3f70b4(0x31d)],_0x21bcfe=Math[_0x3f70b4(0x256)](Number(_0x518a18['DistanceX']),0x1),_0x46be62=Math['max'](Number(_0x518a18[_0x3f70b4(0x239)]),0x1),_0x568d6d=Math[_0x3f70b4(0x256)](Number(_0x518a18[_0x3f70b4(0x28a)]),0xa);let _0x4f4ff5=0x0;for(const _0x32ee4c of _0x150eed){const _0x285d03=$gameScreen[_0x3f70b4(0x334)](_0x32ee4c);if(!_0x285d03)continue;_0x285d03[_0x3f70b4(0x2d4)](_0x5d373d,_0x21bcfe,_0x46be62,_0x568d6d),_0x4f4ff5=_0x285d03['getTotalQueueDuration']();}if(_0x518a18[_0x3f70b4(0x362)]){if(_0x3f70b4(0x1b1)!==_0x3f70b4(0x1b1))this[_0x3f70b4(0x27f)]({'scaleY':this[_0x3f70b4(0x282)]*0.05,'opacity':this['_opacity']||0xff,'duration':0x0,'easingType':_0x3f70b4(0x1bc)}),this['addToQueue']({'targetScaleY':this[_0x3f70b4(0x282)],'duration':_0xd386f3,'easingType':_0x3f70b4(0x220)});else{const _0x372aef=$gameTemp['getLastPluginCommandInterpreter']();if(_0x372aef)_0x372aef['wait'](_0x4f4ff5+0x1);}}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_Damage']=function(_0x2191e7,_0x41824a,_0xcf5486,_0x3f457f){const _0x450e51=_0x53ce3c;_0x3f457f=_0x3f457f||0x3c,_0x3f457f=Math[_0x450e51(0x256)](_0x3f457f,0xa),times=_0x3f457f,_0x41824a=_0x41824a??0x30,_0xcf5486=_0xcf5486??0xc,this[_0x450e51(0x18c)](),this['addToQueue']({'tone':[0x80,0x80,0x80,0x80],'targetTone':_0x2191e7[_0x450e51(0x350)](),'toneDuration':_0x3f457f/0x3,'duration':0x0});while(times--){if(_0x450e51(0x1c8)==='GLezC'){const _0x5915c5=_0x56806c[_0x450e51(0x178)](_0x5667bd/0x7);this[_0x450e51(0x18c)](),this[_0x450e51(0x27f)]({'targetScaleX':this[_0x450e51(0x301)]*_0x2a9f6f,'targetScaleY':this[_0x450e51(0x282)]*_0x4e5abc,'duration':_0x5915c5,'easingType':_0x450e51(0x1bc)}),this['addToQueue']({'targetScaleX':this['_scaleX']*_0x316d7c,'targetScaleY':this[_0x450e51(0x282)]*_0x44f847,'duration':_0x5915c5,'easingType':_0x450e51(0x1bc)}),this[_0x450e51(0x27f)]({'targetTone':_0x40acd4[_0x450e51(0x350)](),'toneDuration':_0x5915c5*0x4,'targetScaleX':this[_0x450e51(0x301)]*_0x4f8c6f,'targetScaleY':this['_scaleY']*_0x52efd8,'duration':_0x5915c5,'easingType':_0x450e51(0x1bc)}),this[_0x450e51(0x27f)]({'targetScaleX':this[_0x450e51(0x301)]*_0x452f51,'targetScaleY':this['_scaleY']*_0x3220d1,'duration':_0x5915c5,'easingType':_0x450e51(0x1bc)}),this['addToQueue']({'targetScaleX':this['_scaleX']*_0x2544e4,'targetScaleY':this[_0x450e51(0x282)]*_0xf8f24c,'duration':_0x5915c5,'easingType':_0x450e51(0x1bc)}),this['addToQueue']({'targetScaleX':this[_0x450e51(0x301)]*_0x20e449,'targetScaleY':this[_0x450e51(0x282)]*_0x566de3,'duration':_0x5915c5,'easingType':_0x450e51(0x1bc)}),this[_0x450e51(0x27f)]({'targetTone':_0x3308b8,'toneDuration':_0x5915c5,'scaleX':this[_0x450e51(0x301)],'scaleY':this[_0x450e51(0x282)],'duration':_0x3e4950-_0x5915c5*0x6,'easingType':_0x450e51(0x1bc)});}else{const _0x5c8090=times/_0x3f457f;this[_0x450e51(0x27f)]({'moveX':this['_x']+(times%0x2===0x0?-0x1:0x1)*Math[_0x450e51(0x351)](Math[_0x450e51(0x266)](_0x41824a*_0x5c8090)),'moveY':this['_y']+(times%0x2===0x0?-0x1:0x1)*Math['randomInt'](Math[_0x450e51(0x266)](_0xcf5486*_0x5c8090)),'duration':0x1,'easingType':_0x450e51(0x1bc)});}}this[_0x450e51(0x27f)]({'targetTone':this[_0x450e51(0x32b)]?this[_0x450e51(0x32b)][_0x450e51(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x3f457f/0xa*0x6,'moveX':this['_x'],'moveY':this['_y'],'duration':0x0});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Depth',_0x3e78e0=>{const _0x17cd65=_0x53ce3c;VisuMZ[_0x17cd65(0x210)](_0x3e78e0,_0x3e78e0);const _0x42910a=_0x3e78e0[_0x17cd65(0x275)];if(_0x42910a['length']<=0x0)return;const _0x5031b4=Number(_0x3e78e0[_0x17cd65(0x1e2)]),_0x38a972=Number(_0x3e78e0[_0x17cd65(0x239)]),_0x51ef60=Math['max'](Number(_0x3e78e0['Duration']),0x0);for(const _0x32eba6 of _0x42910a){const _0xc17e3c=$gameScreen[_0x17cd65(0x334)](_0x32eba6);if(!_0xc17e3c)continue;_0xc17e3c[_0x17cd65(0x264)](_0x5031b4,_0x38a972,_0x51ef60);}if(_0x3e78e0['Wait']&&_0x51ef60>0x0){const _0x4713d0=$gameTemp[_0x17cd65(0x373)]();if(_0x4713d0)_0x4713d0[_0x17cd65(0x287)](_0x51ef60);}}),PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x2df),_0x38e59d=>{const _0x26e4ae=_0x53ce3c;VisuMZ[_0x26e4ae(0x210)](_0x38e59d,_0x38e59d);const _0x4e4064=_0x38e59d[_0x26e4ae(0x275)];if(_0x4e4064[_0x26e4ae(0x23e)]<=0x0)return;const _0x1777ca=Math[_0x26e4ae(0x256)](Number(_0x38e59d[_0x26e4ae(0x306)]),0x1),_0x1dc0ea=Math['max'](Number(_0x38e59d[_0x26e4ae(0x1e2)]),0x1),_0x25a0ae=Math[_0x26e4ae(0x256)](Number(_0x38e59d[_0x26e4ae(0x239)]),0x1),_0x434ea1=Math['max'](Number(_0x38e59d[_0x26e4ae(0x2e3)]),0x1);let _0x196996=0x0;for(const _0x4ddfde of _0x4e4064){const _0x40b038=$gameScreen['picture'](_0x4ddfde);if(!_0x40b038)continue;_0x40b038[_0x26e4ae(0x23c)](_0x1777ca,_0x1dc0ea,_0x25a0ae,_0x434ea1),_0x196996=_0x40b038[_0x26e4ae(0x21e)]();}if(_0x38e59d[_0x26e4ae(0x362)]){if(_0x26e4ae(0x310)===_0x26e4ae(0x1c6)){const _0x20e59b=_0x2309e1[_0x26e4ae(0x373)]();if(_0x20e59b)_0x20e59b[_0x26e4ae(0x287)](_0x17f0f3+0x1);}else{const _0x15462d=$gameTemp[_0x26e4ae(0x373)]();if(_0x15462d)_0x15462d[_0x26e4ae(0x287)](_0x196996+0x1);}}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_Dizzy']=function(_0x553064,_0x2e6ca9,_0x236c11,_0x4486d7){const _0x3a1cd9=_0x53ce3c;this[_0x3a1cd9(0x18c)]();while(_0x553064--){if(_0x3a1cd9(0x28e)!==_0x3a1cd9(0x28e)){const _0x1073ff=0x1-_0x48a5fd/_0x2e9b3c;this[_0x3a1cd9(0x27f)]({'moveX':this['_x']+(_0x2bf66c[_0x3a1cd9(0x24e)]()>0.5?-0x1:0x1)*_0x5b7883[_0x3a1cd9(0x351)](_0x3b5299[_0x3a1cd9(0x20a)](_0x554c2e)),'moveY':this['_y']+(_0x3a3ba7[_0x3a1cd9(0x24e)]()>0.5?-0x1:0x1)*_0x21c591['randomInt'](_0x20962[_0x3a1cd9(0x20a)](_0x2b76e2)),'opacity':this[_0x3a1cd9(0x25f)]*(0x1-_0x1073ff),'duration':0x1});}else this[_0x3a1cd9(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']+_0x236c11,'targetAngle':this['anglePlus']()-_0x4486d7,'duration':0xa,'easingType':_0x3a1cd9(0x19d)}),this['addToQueue']({'targetMoveX':this['_x']-_0x2e6ca9*0.7071,'targetMoveY':this['_y']+_0x236c11*0.7071,'targetAngle':this[_0x3a1cd9(0x278)]()+_0x4486d7,'duration':0xa,'easingType':'InOutSine'}),this['addToQueue']({'targetMoveX':this['_x']-_0x2e6ca9,'targetMoveY':this['_y'],'targetAngle':this[_0x3a1cd9(0x278)]()-_0x4486d7,'duration':0xa,'easingType':_0x3a1cd9(0x19d)}),this[_0x3a1cd9(0x27f)]({'targetMoveX':this['_x']-_0x2e6ca9*0.7071,'targetMoveY':this['_y']-_0x236c11*0.7071,'targetAngle':this['anglePlus']()+_0x4486d7,'duration':0xa,'easingType':_0x3a1cd9(0x19d)}),this[_0x3a1cd9(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']-_0x236c11,'targetAngle':this[_0x3a1cd9(0x278)]()-_0x4486d7,'duration':0xa,'easingType':'InOutSine'}),this[_0x3a1cd9(0x27f)]({'targetMoveX':this['_x']+_0x2e6ca9*0.7071,'targetMoveY':this['_y']-_0x236c11*0.7071,'targetAngle':this[_0x3a1cd9(0x278)]()+_0x4486d7,'duration':0xa,'easingType':'InOutSine'}),this[_0x3a1cd9(0x27f)]({'targetMoveX':this['_x']+_0x2e6ca9,'targetMoveY':this['_y'],'targetAngle':this[_0x3a1cd9(0x278)]()-_0x4486d7,'duration':0xa,'easingType':_0x3a1cd9(0x19d)}),this[_0x3a1cd9(0x27f)]({'targetMoveX':this['_x']+_0x2e6ca9*0.7071,'targetMoveY':this['_y']+_0x236c11*0.7071,'targetAngle':this['anglePlus']()+_0x4486d7,'duration':0xa,'easingType':'InOutSine'});}this[_0x3a1cd9(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x3a1cd9(0x278)](),'duration':0x14,'easingType':'OutBack'});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x24d),_0x5dad5f=>{const _0x4f938c=_0x53ce3c;VisuMZ[_0x4f938c(0x210)](_0x5dad5f,_0x5dad5f);const _0xcc053a=_0x5dad5f[_0x4f938c(0x275)];if(_0xcc053a[_0x4f938c(0x23e)]<=0x0)return;const _0x2022c0=_0x5dad5f[_0x4f938c(0x26d)]==='In',_0x50f328=Math[_0x4f938c(0x256)](Number(_0x5dad5f['Distance']),0x1),_0x431003=Math['max'](Number(_0x5dad5f[_0x4f938c(0x28a)]),0x1);let _0x3ffff3=0x0;for(const _0x476927 of _0xcc053a){const _0x153d88=$gameScreen['picture'](_0x476927);if(!_0x153d88)continue;_0x153d88[_0x4f938c(0x2cd)](_0x2022c0,_0x50f328,_0x431003),_0x3ffff3=_0x153d88[_0x4f938c(0x21e)]();}if(_0x5dad5f[_0x4f938c(0x362)]){if(_0x4f938c(0x355)===_0x4f938c(0x2b3))_0x5997ce[_0x4f938c(0x1e5)]=_0x191a4a,_0x193866['distanceY']=_0xbb7b52;else{const _0x4dcbcb=$gameTemp[_0x4f938c(0x373)]();if(_0x4dcbcb)_0x4dcbcb[_0x4f938c(0x287)](_0x3ffff3+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2cd)]=function(_0x1ae20b,_0x5f324b,_0x5c5182){const _0x1d2cf6=_0x53ce3c;_0x5f324b=_0x5f324b||0x60,_0x5c5182=_0x5c5182||0x3c,this['clearQueue']();if(_0x1ae20b){if(_0x1d2cf6(0x284)!==_0x1d2cf6(0x1f3))this[_0x1d2cf6(0x27f)]({'moveY':this['_y']-_0x5f324b,'scaleX':this[_0x1d2cf6(0x301)]*0.9,'scaleY':this[_0x1d2cf6(0x282)]*1.2,'opacity':0x0,'duration':0x0,'easingType':'Linear'}),this['addToQueue']({'targetMoveY':this['_y'],'targetScaleX':this['_scaleX'],'targetScaleY':this[_0x1d2cf6(0x282)],'targetOpacity':this[_0x1d2cf6(0x25f)]||0xff,'duration':_0x5c5182,'easingType':_0x1d2cf6(0x372)});else{const _0x1936ee=this[_0x1d2cf6(0x2f7)]();_0x3d13a2[_0x1d2cf6(0x176)]!==_0x130b64&&(_0x1936ee['enabled']=!![],_0x1936ee['blur']=_0x1f6164[_0x1d2cf6(0x176)],_0x1936ee[_0x1d2cf6(0x1c5)]=_0x547997['currentBlur']),_0x23ed32['targetBlur']!==_0x42040e&&(_0x1936ee[_0x1d2cf6(0x1ef)]=!![],_0x1936ee['targetBlur']=_0x3393ed[_0x1d2cf6(0x1c5)]),_0x5b3acf[_0x1d2cf6(0x2a2)]!==_0x2c8992&&(_0x1936ee[_0x1d2cf6(0x1ef)]=!![],_0x1936ee[_0x1d2cf6(0x170)]=_0x19fa63['round'](_0x8f82dd[_0x1d2cf6(0x2a2)]));}}else this[_0x1d2cf6(0x27f)]({'targetMoveY':this['_y']+_0x5f324b,'targetOpacity':0x0,'duration':_0x5c5182,'easingType':_0x1d2cf6(0x220)});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x196),_0x52c78a=>{const _0x2dcedd=_0x53ce3c;VisuMZ[_0x2dcedd(0x210)](_0x52c78a,_0x52c78a);const _0x22b121=_0x52c78a[_0x2dcedd(0x275)];if(_0x22b121[_0x2dcedd(0x23e)]<=0x0)return;const _0x40a7dd=_0x52c78a[_0x2dcedd(0x2c2)],_0xfc6cf9=_0x52c78a['Tone2'],_0xb14597=Math['max'](_0x52c78a['Spazz'],0x0),_0x4513bd=Math[_0x2dcedd(0x256)](Number(_0x52c78a['Duration']),0xa);let _0x4bbab7=0x0;for(const _0x4199dc of _0x22b121){if(_0x2dcedd(0x272)!==_0x2dcedd(0x272)){let _0x3cfbe2=_0x262b85['PictureEffects'][_0x2dcedd(0x360)][_0x2dcedd(0x281)](this);return _0x3cfbe2+=this[_0x2dcedd(0x1e0)](),_0x3cfbe2;}else{const _0x48803f=$gameScreen[_0x2dcedd(0x334)](_0x4199dc);if(!_0x48803f)continue;_0x48803f[_0x2dcedd(0x1e3)](_0x40a7dd,_0xfc6cf9,_0xb14597,_0x4513bd),_0x4bbab7=_0x48803f['getTotalQueueDuration']();}}if(_0x52c78a[_0x2dcedd(0x362)]){if(_0x2dcedd(0x1c0)!==_0x2dcedd(0x1c0))_0x18b2e3[_0x2dcedd(0x337)]=_0x424d28[_0x2dcedd(0x369)];else{const _0x44b4b5=$gameTemp[_0x2dcedd(0x373)]();if(_0x44b4b5)_0x44b4b5[_0x2dcedd(0x287)](_0x4bbab7+0x1);}}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_Electrocuted']=function(_0x304141,_0x427034,_0x534966,_0x165795){const _0x1fd5eb=_0x53ce3c;_0x165795=_0x165795||0x3c,_0x165795=Math['max'](_0x165795,0xa),times=_0x165795,_0x534966=_0x534966??0xa,this[_0x1fd5eb(0x18c)]();while(times--){this[_0x1fd5eb(0x27f)]({'moveX':this['_x']+(Math[_0x1fd5eb(0x24e)]()>0.5?-0x1:0x1)*(Math['randomInt'](_0x534966)+0x1),'moveY':this['_y']+(Math[_0x1fd5eb(0x24e)]()>0.5?-0x1:0x1)*(Math[_0x1fd5eb(0x351)](_0x534966)+0x1),'tone':(times%0x6>=0x3?_0x304141:_0x427034)['clone'](),'duration':0x1,'easingType':'Linear'});}this['addToQueue']({'targetTone':this[_0x1fd5eb(0x32b)]?this[_0x1fd5eb(0x32b)][_0x1fd5eb(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x165795/0xa*0x6,'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':0x0,'easingType':_0x1fd5eb(0x1bc)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1ba),_0x3806b2=>{const _0x57a286=_0x53ce3c;VisuMZ[_0x57a286(0x210)](_0x3806b2,_0x3806b2);const _0x1a482d=_0x3806b2[_0x57a286(0x275)];if(_0x1a482d[_0x57a286(0x23e)]<=0x0)return;const _0x2d05db=_0x3806b2[_0x57a286(0x26d)]==='In',_0x2adca0=Math[_0x57a286(0x256)](Number(_0x3806b2['Duration']),0x1);let _0x3b921e=0x0;for(const _0x20cabd of _0x1a482d){const _0x1c1163=$gameScreen['picture'](_0x20cabd);if(!_0x1c1163)continue;_0x1c1163[_0x57a286(0x2f0)](_0x2d05db,_0x2adca0),_0x3b921e=_0x1c1163[_0x57a286(0x21e)]();}if(_0x3806b2[_0x57a286(0x362)]){const _0x18ef6b=$gameTemp['getLastPluginCommandInterpreter']();if(_0x18ef6b)_0x18ef6b['wait'](_0x3b921e+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_ExpandInOut']=function(_0x44faee,_0x28ba60){const _0x1c6c1d=_0x53ce3c;_0x28ba60=_0x28ba60||0x14,this[_0x1c6c1d(0x18c)]();if(_0x44faee){if(_0x1c6c1d(0x188)!==_0x1c6c1d(0x1d9))this[_0x1c6c1d(0x27f)]({'scaleX':this[_0x1c6c1d(0x301)]*0.05,'scaleY':this[_0x1c6c1d(0x282)]*0.05,'opacity':0x0,'duration':0x0,'easingType':_0x1c6c1d(0x1bc)}),this[_0x1c6c1d(0x27f)]({'targetScaleX':this['_scaleX'],'targetScaleY':this[_0x1c6c1d(0x282)],'targetOpacity':this[_0x1c6c1d(0x25f)]||0xff,'duration':_0x28ba60,'easingType':_0x1c6c1d(0x19d)});else{const _0x4cea42=_0x3ef3bd[_0x1c6c1d(0x373)]();if(_0x4cea42)_0x4cea42[_0x1c6c1d(0x287)](_0x3b98ff+0x1);}}else _0x1c6c1d(0x2f2)!==_0x1c6c1d(0x2f2)?this[_0x1c6c1d(0x27f)]({'targetAngle':_0x4a0967*0x168+this[_0x1c6c1d(0x278)](),'targetMoveX':this['_x']+(_0x3f9a36?-_0x320460:_0x1d79f2),'targetOpacity':0x0,'anchor':{'x':0.5,'y':0.5},'duration':_0x292780,'easingType':'Linear'}):this[_0x1c6c1d(0x27f)]({'targetScaleX':this['_scaleX']*0x4,'targetScaleY':this[_0x1c6c1d(0x282)]*0x4,'targetOpacity':0x0,'duration':_0x28ba60,'easingType':_0x1c6c1d(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x313),_0x3f6892=>{const _0x4c1598=_0x53ce3c;VisuMZ['ConvertParams'](_0x3f6892,_0x3f6892);const _0x507a4f=_0x3f6892[_0x4c1598(0x275)];if(_0x507a4f[_0x4c1598(0x23e)]<=0x0)return;const _0xe4992a=_0x3f6892['Filename']||'';if(_0xe4992a==='')return;const _0xedd0fb=Math[_0x4c1598(0x256)](Number(_0x3f6892['Duration']),0xa);let _0x5cc454=0x0;for(const _0x201d27 of _0x507a4f){if(_0x4c1598(0x22e)==='JqCbR'){const _0x592b65=$gameScreen[_0x4c1598(0x334)](_0x201d27);if(!_0x592b65)continue;_0x592b65['setupEffect_FadeChange'](_0xe4992a,_0xedd0fb),_0x5cc454=_0x592b65[_0x4c1598(0x21e)]();}else this[_0x4c1598(0x207)]={'scaleX':0x0,'scaleY':0x0,'rangeX':0x0,'targetRangeX':0x0,'rangeY':0x0,'targetRangeY':0x0,'rateX':-0x2707,'targetRateX':-0x2707,'rateY':-0x2707,'targetRateY':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};}if(_0x3f6892[_0x4c1598(0x362)]){if(_0x4c1598(0x2de)===_0x4c1598(0x2de)){const _0x272972=$gameTemp[_0x4c1598(0x373)]();if(_0x272972)_0x272972[_0x4c1598(0x287)](_0x5cc454+0x1);}else this[_0x4c1598(0x27f)]({'opacity':0x0,'scaleX':this[_0x4c1598(0x301)]*0.8,'scaleY':this[_0x4c1598(0x282)]*0.8,'currentBlur':0xa,'duration':0x0}),this['addToQueue']({'targetOpacity':this[_0x4c1598(0x25f)]||0xff,'targetScaleX':this[_0x4c1598(0x301)],'targetScaleY':this[_0x4c1598(0x282)],'targetBlur':0x0,'duration':_0x138fbb,'blurDuration':_0x501aa1,'easingType':_0x4c1598(0x372)});}}),Game_Picture['prototype'][_0x53ce3c(0x2b0)]=function(_0x45891a,_0x445b79){const _0x148599=_0x53ce3c;ImageManager[_0x148599(0x33c)](_0x45891a),this['clearQueue'](),this[_0x148599(0x27f)]({'targetOpacity':0x0,'duration':Math[_0x148599(0x266)](_0x445b79/0x2),'easingType':_0x148599(0x19d)}),this['addToQueue']({'filename':_0x45891a,'targetOpacity':this[_0x148599(0x25f)]||0xff,'duration':Math[_0x148599(0x178)](_0x445b79/0x2),'easingType':'InOutSine'});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],'Fade_InOut',_0x2ce8c3=>{const _0x5dd7f4=_0x53ce3c;VisuMZ['ConvertParams'](_0x2ce8c3,_0x2ce8c3);const _0x233e38=_0x2ce8c3[_0x5dd7f4(0x275)];if(_0x233e38[_0x5dd7f4(0x23e)]<=0x0)return;const _0x183bc4=_0x2ce8c3[_0x5dd7f4(0x26d)]==='In',_0x514ca1=Math[_0x5dd7f4(0x256)](Number(_0x2ce8c3[_0x5dd7f4(0x28a)]),0x1);let _0x570365=0x0;for(const _0x1fd2c6 of _0x233e38){const _0x30bd54=$gameScreen[_0x5dd7f4(0x334)](_0x1fd2c6);if(!_0x30bd54)continue;_0x30bd54[_0x5dd7f4(0x254)](_0x183bc4,_0x514ca1),_0x570365=_0x30bd54[_0x5dd7f4(0x21e)]();}if(_0x2ce8c3[_0x5dd7f4(0x362)]){const _0x3d0556=$gameTemp['getLastPluginCommandInterpreter']();if(_0x3d0556)_0x3d0556['wait'](_0x570365+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_FadeInOut']=function(_0x5212f7,_0x4d90d7){const _0x2d51fa=_0x53ce3c;_0x4d90d7=_0x4d90d7||0x3c,this[_0x2d51fa(0x18c)]();if(_0x5212f7)this[_0x2d51fa(0x27f)]({'opacity':0x0,'duration':0x0}),this[_0x2d51fa(0x27f)]({'targetOpacity':this[_0x2d51fa(0x25f)]||0xff,'duration':_0x4d90d7,'easingType':_0x2d51fa(0x27c)});else{if(_0x2d51fa(0x338)===_0x2d51fa(0x338))this[_0x2d51fa(0x27f)]({'targetOpacity':0x0,'duration':_0x4d90d7,'easingType':_0x2d51fa(0x27c)});else{const _0x442392=_0x27c05c['getLastPluginCommandInterpreter']();if(_0x442392)_0x442392['wait'](_0x32a7e8+0x1);}}},PluginManager['registerCommand'](pluginData['name'],_0x53ce3c(0x2ea),_0x4ac52a=>{const _0x324f22=_0x53ce3c;VisuMZ[_0x324f22(0x210)](_0x4ac52a,_0x4ac52a);const _0x4b2704=_0x4ac52a[_0x324f22(0x275)];if(_0x4b2704[_0x324f22(0x23e)]<=0x0)return;const _0x423fc4=Number(_0x4ac52a['Z'])||0x0,_0x187803=Math[_0x324f22(0x256)](Number(_0x4ac52a[_0x324f22(0x28a)]),0x1);let _0x72c86b=0x0;for(const _0x507016 of _0x4b2704){const _0x448124=$gameScreen[_0x324f22(0x334)](_0x507016);if(!_0x448124)continue;_0x448124[_0x324f22(0x1cc)](_0x423fc4,_0x187803),_0x72c86b=_0x448124[_0x324f22(0x21e)]();}if(_0x4ac52a[_0x324f22(0x362)]){if(_0x324f22(0x2c9)===_0x324f22(0x226))_0x4d68cc=_0x405034||0x14,this['clearQueue'](),_0x1ea490?(this[_0x324f22(0x27f)]({'scaleX':this[_0x324f22(0x301)]*0x4,'opacity':0x0,'duration':0x0,'easingType':_0x324f22(0x1bc)}),this['addToQueue']({'targetScaleX':this[_0x324f22(0x301)],'targetOpacity':this['_opacity']||0xff,'duration':_0x37538c,'easingType':_0x324f22(0x19d)})):this[_0x324f22(0x27f)]({'targetScaleX':this[_0x324f22(0x301)]*0.05,'targetOpacity':0x0,'duration':_0x5d4326,'easingType':_0x324f22(0x19d)});else{const _0x562ad3=$gameTemp[_0x324f22(0x373)]();if(_0x562ad3)_0x562ad3[_0x324f22(0x287)](_0x72c86b+0x1);}}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_FadeLayerSwitch']=function(_0xa53888,_0x2670ac){const _0x24d0f8=_0x53ce3c;this[_0x24d0f8(0x18c)](),this[_0x24d0f8(0x27f)]({'targetOpacity':0x0,'duration':Math[_0x24d0f8(0x266)](_0x2670ac/0x2),'easingType':_0x24d0f8(0x1bc)}),this[_0x24d0f8(0x27f)]({'setZ':_0xa53888,'targetOpacity':this[_0x24d0f8(0x25f)],'duration':Math['floor'](_0x2670ac/0x2),'easingType':_0x24d0f8(0x1bc)});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],'Fear',_0x4dc681=>{const _0xad4682=_0x53ce3c;VisuMZ[_0xad4682(0x210)](_0x4dc681,_0x4dc681);const _0x4eb606=_0x4dc681[_0xad4682(0x275)];if(_0x4eb606[_0xad4682(0x23e)]<=0x0)return;const _0x4ce602=_0x4dc681['Tone']||[0x0,0x0,0x0,0x0],_0x48be14=Math['max'](Number(_0x4dc681[_0xad4682(0x28a)]),0x1);let _0x2640d1=0x0;for(const _0x15556c of _0x4eb606){const _0x550af8=$gameScreen[_0xad4682(0x334)](_0x15556c);if(!_0x550af8)continue;_0x550af8[_0xad4682(0x2bd)](_0x4ce602,_0x48be14),_0x2640d1=_0x550af8[_0xad4682(0x21e)]();}if(_0x4dc681[_0xad4682(0x362)]){if(_0xad4682(0x30e)!=='cxhQP'){this['clearQueue']();const _0x34d4ec=_0x595f24[_0xad4682(0x33c)](_0x2b6db0);_0x34d4ec['addLoadListener'](this[_0xad4682(0x27f)]['bind'](this,{'filename':_0x4d5c8e,'duration':0x0,'easingType':_0xad4682(0x1bc)}));}else{const _0xc85f12=$gameTemp[_0xad4682(0x373)]();if(_0xc85f12)_0xc85f12[_0xad4682(0x287)](_0x2640d1+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2bd)]=function(_0x51c9cd,_0x46eac2){const _0x2968e1=_0x53ce3c;this[_0x2968e1(0x18c)](),this[_0x2968e1(0x27f)]({'tone':_0x51c9cd[_0x2968e1(0x350)](),'duration':Math['floor'](_0x46eac2/0x2),'easingType':_0x2968e1(0x1bc)}),this[_0x2968e1(0x27f)]({'targetTone':this[_0x2968e1(0x32b)]?this[_0x2968e1(0x32b)][_0x2968e1(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':Math[_0x2968e1(0x266)](_0x46eac2/0x2),'duration':Math[_0x2968e1(0x266)](_0x46eac2/0x2),'easingType':_0x2968e1(0x1bc)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1fe),_0x2c452c=>{const _0x18b3f5=_0x53ce3c;VisuMZ[_0x18b3f5(0x210)](_0x2c452c,_0x2c452c);const _0x4e013c=_0x2c452c['PictureIDs'];if(_0x4e013c['length']<=0x0)return;const _0x56041e=_0x2c452c[_0x18b3f5(0x1e6)]||'';if(_0x56041e==='')return;const _0x546e6c=_0x2c452c[_0x18b3f5(0x31d)]||[0x0,0x0,0x0,0x0],_0x54683f=Number(_0x2c452c[_0x18b3f5(0x306)])[_0x18b3f5(0x2eb)](0x1,0xa),_0x3da5b3=Math[_0x18b3f5(0x256)](Number(_0x2c452c[_0x18b3f5(0x28a)]),0x1);let _0x354cd8=0x0;for(const _0x4c481e of _0x4e013c){const _0x33e4f2=$gameScreen[_0x18b3f5(0x334)](_0x4c481e);if(!_0x33e4f2)continue;_0x33e4f2[_0x18b3f5(0x1ed)](_0x56041e,_0x546e6c,_0x54683f,_0x3da5b3),_0x354cd8=_0x33e4f2[_0x18b3f5(0x21e)]();}if(_0x2c452c[_0x18b3f5(0x362)]){const _0x478168=$gameTemp[_0x18b3f5(0x373)]();if(_0x478168)_0x478168[_0x18b3f5(0x287)](_0x354cd8+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1ed)]=function(_0x26801c,_0x18e400,_0xbb52a3,_0x323079){const _0x14a158=_0x53ce3c;ImageManager[_0x14a158(0x33c)](_0x26801c),this[_0x14a158(0x18c)]();const _0x368128=Math[_0x14a158(0x178)](_0x323079/0x2/_0xbb52a3);let _0x3fe2c4=_0xbb52a3;while(_0x3fe2c4--){if('ZGOrX'==='ZGOrX')this[_0x14a158(0x27f)]({'tone':_0x18e400[_0x14a158(0x350)](),'targetTone':this[_0x14a158(0x32b)]?this[_0x14a158(0x32b)][_0x14a158(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x368128,'duration':_0x368128,'easingType':'Linear'});else{_0x416072=_0xf0b45c||0x3c,_0x5c45c4=_0x41aae5[_0x14a158(0x256)](_0x143ce8,0xa),_0xcdcad6=_0x3677c8,_0x246811=_0xa00860??0x30,_0x38e5a8=_0x57d3ff??0xc,this[_0x14a158(0x18c)](),this[_0x14a158(0x27f)]({'tone':[0x80,0x80,0x80,0x80],'targetTone':_0x333327[_0x14a158(0x350)](),'toneDuration':_0x5bf61d/0x3,'duration':0x0});while(_0x1deaf7--){const _0x4c9b06=_0x590fc2/_0x2f04c0;this[_0x14a158(0x27f)]({'moveX':this['_x']+(_0x37b18f%0x2===0x0?-0x1:0x1)*_0x38ed90['randomInt'](_0x4997f1[_0x14a158(0x266)](_0x180d65*_0x4c9b06)),'moveY':this['_y']+(_0x2741af%0x2===0x0?-0x1:0x1)*_0x348aec[_0x14a158(0x351)](_0x3b027c['ceil'](_0x2adfce*_0x4c9b06)),'duration':0x1,'easingType':_0x14a158(0x1bc)});}this[_0x14a158(0x27f)]({'targetTone':this[_0x14a158(0x32b)]?this[_0x14a158(0x32b)][_0x14a158(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x5c5a07/0xa*0x6,'moveX':this['_x'],'moveY':this['_y'],'duration':0x0});}}this[_0x14a158(0x27f)]({'filename':_0x26801c,'tone':_0x18e400['clone'](),'targetTone':this[_0x14a158(0x32b)]?this[_0x14a158(0x32b)]['clone']():[0x0,0x0,0x0,0x0],'toneDuration':_0x323079-_0x368128*_0xbb52a3,'duration':_0x323079-_0x368128*_0xbb52a3,'easingType':_0x14a158(0x1bc)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x24f),_0x184139=>{const _0x581aee=_0x53ce3c;VisuMZ[_0x581aee(0x210)](_0x184139,_0x184139);const _0x23b949=_0x184139['PictureIDs'];if(_0x23b949['length']<=0x0)return;const _0x117700=_0x184139['Direction']===_0x581aee(0x2d5),_0x424333=Number(_0x184139[_0x581aee(0x167)]),_0x497ff2=Number(_0x184139[_0x581aee(0x1b3)]),_0x5e44b8=Number(_0x184139[_0x581aee(0x1f0)]);let _0x3b5f2a=0x0;for(const _0x3cfe31 of _0x23b949){const _0x2e44ef=$gameScreen[_0x581aee(0x334)](_0x3cfe31);if(!_0x2e44ef)continue;_0x2e44ef[_0x581aee(0x2c3)](_0x117700,_0x424333,_0x497ff2,_0x5e44b8),_0x3b5f2a=_0x2e44ef[_0x581aee(0x21e)]();}if(_0x184139[_0x581aee(0x362)]){if(_0x581aee(0x2f9)===_0x581aee(0x217))this[_0x581aee(0x20b)]={'angle':0x0,'range':0x0,'targetRange':0x0,'rate':-0x2707,'targetRate':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};else{const _0x7ae476=$gameTemp[_0x581aee(0x373)]();if(_0x7ae476)_0x7ae476[_0x581aee(0x287)](_0x3b5f2a+0x1);}}}),Game_Picture['prototype'][_0x53ce3c(0x2c3)]=function(_0x37b30b,_0x132861,_0x288991,_0x5530a9){const _0x4cafee=_0x53ce3c;_0x132861=_0x132861??0x1e,_0x5530a9=_0x5530a9??0x5,_0x288991=_0x288991??0x2,this[_0x4cafee(0x18c)](),this[_0x4cafee(0x27f)]({'anchor':{'x':0.5,'y':0.5},'scaleX':this[_0x4cafee(0x301)]*0.1,'scaleY':this[_0x4cafee(0x282)]*0.1,'opacity':0x0,'blendMode':0x0,'duration':0x0,'easingType':_0x4cafee(0x1bc)}),this['addToQueue']({'targetMoveX':Graphics[_0x4cafee(0x27d)]*(_0x37b30b?0.25:0.75),'targetMoveY':Graphics[_0x4cafee(0x374)]*0.5,'targetScaleX':this[_0x4cafee(0x301)]*_0x288991,'targetScaleY':this[_0x4cafee(0x282)]*_0x288991,'targetOpacity':this[_0x4cafee(0x25f)]*0x4,'targetAngle':_0x132861+0x168*_0x5530a9,'duration':0x3c}),this[_0x4cafee(0x27f)]({'targetOpacity':this[_0x4cafee(0x25f)]||0xff,'duration':0xa}),this[_0x4cafee(0x27f)]({'targetMoveX':Graphics['width']*0.5,'targetMoveY':(Graphics[_0x4cafee(0x374)]-0xe6)/0x2,'targetScaleX':this['_scaleX'],'targetScaleY':this[_0x4cafee(0x282)],'targetAngle':0x0,'duration':0x28}),this[_0x4cafee(0x27f)]({'targetMoveX':Graphics['width']*0.5,'targetMoveY':(Graphics[_0x4cafee(0x374)]-0x14a)/0x2,'targetScaleX':this[_0x4cafee(0x301)]*1.2,'targetScaleY':this[_0x4cafee(0x301)]*1.2,'duration':0xa}),this[_0x4cafee(0x27f)]({'duration':0x5}),this[_0x4cafee(0x27f)]({'targetAngle':-0xa,'duration':0x4}),this[_0x4cafee(0x27f)]({'targetAngle':0xa,'duration':0x8}),this[_0x4cafee(0x27f)]({'targetAngle':0x0,'duration':0x4}),this[_0x4cafee(0x27f)]({'targetMoveX':Graphics['width']*0.5,'targetMoveY':Graphics[_0x4cafee(0x374)]/0x2,'targetScaleX':this['_scaleX']*0x2,'targetScaleY':this[_0x4cafee(0x282)]*0.3,'duration':0xa}),this[_0x4cafee(0x27f)]({'duration':0x5}),this[_0x4cafee(0x27f)]({'targetMoveY':(Graphics[_0x4cafee(0x374)]-0xb4)/0x2,'targetScaleX':this[_0x4cafee(0x301)]*0.8,'targetScaleY':this[_0x4cafee(0x282)]*1.2,'duration':0x5}),this[_0x4cafee(0x27f)]({'targetScaleX':this['_scaleX'],'targetScaleY':this[_0x4cafee(0x282)],'duration':0xa});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x24c),_0x824e33=>{const _0x3da42c=_0x53ce3c;VisuMZ[_0x3da42c(0x210)](_0x824e33,_0x824e33);const _0x251ce3=_0x824e33['PictureIDs'];if(_0x251ce3[_0x3da42c(0x23e)]<=0x0)return;const _0x4c6fc7=_0x824e33[_0x3da42c(0x26d)]==='In',_0x125275=Math['max'](Number(_0x824e33['Duration']),0x1);let _0x54856b=0x0;for(const _0x2293b7 of _0x251ce3){if('LWkwc'===_0x3da42c(0x25b)){const _0x5535e7=_0x1ec4e1['getLastPluginCommandInterpreter']();if(_0x5535e7)_0x5535e7[_0x3da42c(0x287)](_0x381962+0x1);}else{const _0x3cb1b5=$gameScreen[_0x3da42c(0x334)](_0x2293b7);if(!_0x3cb1b5)continue;_0x3cb1b5[_0x3da42c(0x30d)](_0x4c6fc7,_0x125275),_0x54856b=_0x3cb1b5[_0x3da42c(0x21e)]();}}if(_0x824e33[_0x3da42c(0x362)]){const _0x11a2a4=$gameTemp['getLastPluginCommandInterpreter']();if(_0x11a2a4)_0x11a2a4[_0x3da42c(0x287)](_0x54856b+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x30d)]=function(_0x53d82f,_0x16c5db){const _0x5c5e24=_0x53ce3c;_0x16c5db=_0x16c5db||0x14,_0x16c5db=Math[_0x5c5e24(0x256)](_0x16c5db,0xa),this[_0x5c5e24(0x18c)](),_0x53d82f?(this['addToQueue']({'opacity':0x0,'scaleX':this[_0x5c5e24(0x301)]*0.5,'scaleY':this[_0x5c5e24(0x282)]*0.5,'currentBlur':0xa,'duration':0x0}),this[_0x5c5e24(0x27f)]({'targetOpacity':this[_0x5c5e24(0x25f)]||0xff,'targetScaleX':this[_0x5c5e24(0x301)],'targetScaleY':this[_0x5c5e24(0x282)],'duration':_0x16c5db,'targetBlur':0x0,'blurDuration':_0x16c5db,'easingType':'InOutSine'})):this[_0x5c5e24(0x27f)]({'targetOpacity':0x0,'targetScaleX':this['_scaleX']*0.5,'targetScaleY':this['_scaleY']*0.5,'duration':_0x16c5db,'targetBlur':0xa,'blurDuration':_0x16c5db,'easingType':_0x5c5e24(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x262),_0x52fed=>{const _0x4c275e=_0x53ce3c;VisuMZ['ConvertParams'](_0x52fed,_0x52fed);const _0x54d099=_0x52fed[_0x4c275e(0x275)];if(_0x54d099[_0x4c275e(0x23e)]<=0x0)return;const _0x4df630=_0x52fed[_0x4c275e(0x26d)]==='In',_0x2a3bf0=Number(_0x52fed['Blur']),_0x2b4da8=_0x52fed[_0x4c275e(0x36b)]||[0xff,0xff,0xff,0x0],_0x12a67a=_0x52fed['GhostTone']||[-0x44,-0x44,0x0,0x44],_0x697116=Math[_0x4c275e(0x256)](Number(_0x52fed['Duration']),0x1);let _0x5d126a=0x0;for(const _0x363728 of _0x54d099){const _0x2adfb3=$gameScreen[_0x4c275e(0x334)](_0x363728);if(!_0x2adfb3)continue;_0x2adfb3[_0x4c275e(0x187)](_0x4df630,_0x2a3bf0,_0x2b4da8,_0x12a67a,_0x697116),_0x5d126a=_0x2adfb3['getTotalQueueDuration']();}if(_0x52fed['Wait']){const _0x539be9=$gameTemp['getLastPluginCommandInterpreter']();if(_0x539be9)_0x539be9[_0x4c275e(0x287)](_0x5d126a+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_GhostInOut']=function(_0xb72c5,_0x30278f,_0x3ffca1,_0x12cc15,_0x3051d8){const _0x27ef6e=_0x53ce3c;_0x3051d8=_0x3051d8||0x3c,this[_0x27ef6e(0x18c)](),this[_0x27ef6e(0x27f)]({'duration':_0x3051d8,'targetTone':_0x3ffca1[_0x27ef6e(0x350)](),'toneDuration':_0x3051d8}),_0xb72c5?this[_0x27ef6e(0x27f)]({'duration':0x0,'targetTone':_0x12cc15['clone'](),'toneDuration':_0x3051d8/0xa,'currentBlur':_0x30278f,'blendMode':0x1}):this['addToQueue']({'duration':0x0,'targetTone':[0x0,0x0,0x0,0x0],'toneDuration':_0x3051d8/0xa,'blendMode':0x0,'currentBlur':0x0});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x208),_0x526ccd=>{const _0x2bf945=_0x53ce3c;VisuMZ['ConvertParams'](_0x526ccd,_0x526ccd);const _0x587838=_0x526ccd['PictureIDs'];if(_0x587838[_0x2bf945(0x23e)]<=0x0)return;const _0x2c54df=Math[_0x2bf945(0x256)](Number(_0x526ccd[_0x2bf945(0x1a0)]),0x0),_0x10b1cb=_0x526ccd['Tone']||[0x0,0x0,0x0,0x0],_0x25f779=Math['max'](Number(_0x526ccd[_0x2bf945(0x28a)]),0xa);let _0x13d944=0x0;for(const _0x34b95b of _0x587838){const _0x5951ce=$gameScreen[_0x2bf945(0x334)](_0x34b95b);if(!_0x5951ce)continue;_0x5951ce['setupEffect_Glow'](_0x2c54df,_0x10b1cb,_0x25f779),_0x13d944=_0x5951ce['getTotalQueueDuration']();}if(_0x526ccd[_0x2bf945(0x362)]){const _0x455c1d=$gameTemp[_0x2bf945(0x373)]();if(_0x455c1d)_0x455c1d[_0x2bf945(0x287)](_0x13d944+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x353)]=function(_0x139760,_0x59dd0f,_0xc418ee){const _0x2bd1af=_0x53ce3c,_0x31837c=Math[_0x2bd1af(0x178)](_0xc418ee/0x3);this['clearQueue'](),this[_0x2bd1af(0x27f)]({'targetBlur':_0x139760,'blurDuration':_0x31837c,'targetTone':_0x59dd0f[_0x2bd1af(0x350)](),'toneDuration':_0x31837c,'duration':_0x31837c}),this['addToQueue']({'duration':_0x31837c}),this['addToQueue']({'targetTone':this['_tone']?this[_0x2bd1af(0x32b)]['clone']():[0x0,0x0,0x0,0x0],'toneDuration':_0xc418ee-_0x31837c*0x2,'targetBlur':this[_0x2bd1af(0x180)](),'blurDuration':_0xc418ee-_0x31837c*0x2,'duration':_0xc418ee-_0x31837c*0x2,'easingType':'Linear'});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],'Heal',_0x322657=>{const _0x122027=_0x53ce3c;VisuMZ['ConvertParams'](_0x322657,_0x322657);const _0x583896=_0x322657[_0x122027(0x275)];if(_0x583896[_0x122027(0x23e)]<=0x0)return;const _0x5e83a7=Number(_0x322657[_0x122027(0x1a0)])||0x0,_0x186f2b=_0x322657['Tone']||[0x0,0x0,0x0,0x0],_0x2cb215=Math['max'](Number(_0x322657[_0x122027(0x28a)]),0x1);let _0x4f3a1c=0x0;for(const _0x534e76 of _0x583896){const _0x4c313e=$gameScreen[_0x122027(0x334)](_0x534e76);if(!_0x4c313e)continue;_0x4c313e[_0x122027(0x1bf)](_0x5e83a7,_0x186f2b,_0x2cb215),_0x4f3a1c=_0x4c313e[_0x122027(0x21e)]();}if(_0x322657[_0x122027(0x362)]){const _0x45ebe8=$gameTemp[_0x122027(0x373)]();if(_0x45ebe8)_0x45ebe8['wait'](_0x4f3a1c+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_Heal']=function(_0x3162f3,_0x3cbbc9,_0x52dabb){const _0x440ab9=_0x53ce3c;this['clearQueue'](),this[_0x440ab9(0x27f)]({'targetBlur':_0x3162f3,'blurDuration':_0x52dabb*0x2/0x5,'targetTone':_0x3cbbc9['clone'](),'toneDuration':_0x52dabb/0x4,'duration':Math['floor'](_0x52dabb/0x2),'easingType':_0x440ab9(0x1bc)}),this[_0x440ab9(0x27f)]({'targetBlur':this[_0x440ab9(0x180)](),'blurDuration':Math[_0x440ab9(0x266)](_0x52dabb/0x2),'targetTone':this[_0x440ab9(0x32b)]?this[_0x440ab9(0x32b)][_0x440ab9(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':Math['ceil'](_0x52dabb/0x2),'duration':Math[_0x440ab9(0x266)](_0x52dabb/0x2),'easingType':_0x440ab9(0x1bc)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x253),_0x1e44cd=>{const _0x5549fb=_0x53ce3c;VisuMZ[_0x5549fb(0x210)](_0x1e44cd,_0x1e44cd);const _0xeabd77=_0x1e44cd[_0x5549fb(0x275)];if(_0xeabd77['length']<=0x0)return;const _0x322e24=Math[_0x5549fb(0x256)](Number(_0x1e44cd[_0x5549fb(0x2aa)]),0x1),_0x519094=Math['max'](Number(_0x1e44cd['Duration']),0xa);let _0x208749=0x0;for(const _0x2205d0 of _0xeabd77){const _0x49eadf=$gameScreen[_0x5549fb(0x334)](_0x2205d0);if(!_0x49eadf)continue;_0x49eadf['setupEffect_Hoppity'](_0x322e24,_0x519094),_0x208749=_0x49eadf[_0x5549fb(0x21e)]();}if(_0x1e44cd['Wait']){const _0xbe704a=$gameTemp[_0x5549fb(0x373)]();if(_0xbe704a)_0xbe704a['wait'](_0x208749+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x28d)]=function(_0x176b22,_0x554185){const _0xf05e29=_0x53ce3c;_0x176b22=_0x176b22||0x28,_0x554185=_0x554185??0x28,_0x554185=Math['max'](_0x554185,0xa),this[_0xf05e29(0x18c)](),this['addToQueue']({'targetMoveY':this['_y']-_0x176b22,'duration':(_0x554185-0x2)/0x2,'easingType':_0xf05e29(0x29b)}),this[_0xf05e29(0x27f)]({'targetMoveY':this['_y']+Math[_0xf05e29(0x271)](_0x176b22/0x2,0xa),'duration':(_0x554185-0x2)/0x2,'easingType':_0xf05e29(0x315)}),this[_0xf05e29(0x27f)]({'targetMoveY':this['_y'],'duration':0x2,'easingType':_0xf05e29(0x1bc)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x31e),_0x38cc7d=>{const _0x45a59b=_0x53ce3c;VisuMZ[_0x45a59b(0x210)](_0x38cc7d,_0x38cc7d);const _0x2841b2=_0x38cc7d[_0x45a59b(0x275)];if(_0x2841b2[_0x45a59b(0x23e)]<=0x0)return;const _0xa9db37=Number(_0x38cc7d[_0x45a59b(0x239)])||0x0,_0x48125f=Number(_0x38cc7d[_0x45a59b(0x2d8)])||0x0,_0x1339c6=Number(_0x38cc7d[_0x45a59b(0x18d)])||0x0,_0x1406b8=Math[_0x45a59b(0x256)](Number(_0x38cc7d[_0x45a59b(0x28a)]),0x0);for(const _0x85ccd1 of _0x2841b2){if('Thgyc'==='OCKlO')this['clearQueue'](),this[_0x45a59b(0x27f)]({'targetBlur':_0x3ceed2,'blurDuration':_0x155cc1*0x2/0x5,'targetTone':_0xb8142a[_0x45a59b(0x350)](),'toneDuration':_0x2b2e47/0x4,'duration':_0x30f683[_0x45a59b(0x178)](_0x3c3b25/0x2),'targetHue':this[_0x45a59b(0x26b)]()+0x168,'hueDuration':_0x4f1d38,'easingType':_0x45a59b(0x1bc)}),this[_0x45a59b(0x27f)]({'targetBlur':this[_0x45a59b(0x180)](),'blurDuration':_0x4c233e[_0x45a59b(0x266)](_0x3a7d38/0x2),'targetTone':this[_0x45a59b(0x32b)]?this['_tone'][_0x45a59b(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x1a1e68[_0x45a59b(0x266)](_0x48a7d2/0x2),'duration':_0x587aca[_0x45a59b(0x266)](_0x38d4ea/0x2),'easingType':_0x45a59b(0x1bc)}),this[_0x45a59b(0x27f)]({'currentHue':this['getPictureEffectsHue'](),'duration':0x0});else{const _0x3245ba=$gameScreen['picture'](_0x85ccd1);if(!_0x3245ba)continue;_0x3245ba[_0x45a59b(0x22b)](_0xa9db37,_0x48125f,_0x1339c6,_0x1406b8);}}if(_0x38cc7d[_0x45a59b(0x362)]&&_0x1406b8>0x0){if(_0x45a59b(0x379)!==_0x45a59b(0x285)){const _0x29ee90=$gameTemp[_0x45a59b(0x373)]();if(_0x29ee90)_0x29ee90['wait'](_0x1406b8);}else _0x43101b=_0x3d0854[_0x45a59b(0x27d)]*(_0x575752+0x1)/(_0x1f0c4e+0x1);}}),PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x35d),_0xbb7d95=>{const _0x5a3cf8=_0x53ce3c;VisuMZ['ConvertParams'](_0xbb7d95,_0xbb7d95);const _0x325eec=_0xbb7d95['PictureIDs'];if(_0x325eec['length']<=0x0)return;const _0x34bcf4=Number(_0xbb7d95['Hue'])||0x0,_0x31fc7c=Math[_0x5a3cf8(0x256)](Number(_0xbb7d95[_0x5a3cf8(0x28a)]),0x1);let _0x135968=0x0;for(const _0x52e5a0 of _0x325eec){if(_0x5a3cf8(0x237)===_0x5a3cf8(0x341))this[_0x5a3cf8(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']+_0x3757d9,'targetAngle':this[_0x5a3cf8(0x278)]()-_0x31698d,'duration':0xa,'easingType':_0x5a3cf8(0x19d)}),this[_0x5a3cf8(0x27f)]({'targetMoveX':this['_x']-_0x5b05dc*0.7071,'targetMoveY':this['_y']+_0x3a7b6b*0.7071,'targetAngle':this[_0x5a3cf8(0x278)]()+_0x41c1e9,'duration':0xa,'easingType':_0x5a3cf8(0x19d)}),this[_0x5a3cf8(0x27f)]({'targetMoveX':this['_x']-_0x5650e8,'targetMoveY':this['_y'],'targetAngle':this[_0x5a3cf8(0x278)]()-_0x58c378,'duration':0xa,'easingType':_0x5a3cf8(0x19d)}),this[_0x5a3cf8(0x27f)]({'targetMoveX':this['_x']-_0x1e3e56*0.7071,'targetMoveY':this['_y']-_0x3daac2*0.7071,'targetAngle':this[_0x5a3cf8(0x278)]()+_0x256932,'duration':0xa,'easingType':_0x5a3cf8(0x19d)}),this[_0x5a3cf8(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']-_0x346ed4,'targetAngle':this[_0x5a3cf8(0x278)]()-_0xae2523,'duration':0xa,'easingType':'InOutSine'}),this['addToQueue']({'targetMoveX':this['_x']+_0xabc4fb*0.7071,'targetMoveY':this['_y']-_0x419b66*0.7071,'targetAngle':this[_0x5a3cf8(0x278)]()+_0x533d60,'duration':0xa,'easingType':_0x5a3cf8(0x19d)}),this[_0x5a3cf8(0x27f)]({'targetMoveX':this['_x']+_0x196da9,'targetMoveY':this['_y'],'targetAngle':this[_0x5a3cf8(0x278)]()-_0xabdd7b,'duration':0xa,'easingType':'InOutSine'}),this[_0x5a3cf8(0x27f)]({'targetMoveX':this['_x']+_0x3e556f*0.7071,'targetMoveY':this['_y']+_0x1e3d91*0.7071,'targetAngle':this[_0x5a3cf8(0x278)]()+_0x65b6e5,'duration':0xa,'easingType':_0x5a3cf8(0x19d)});else{const _0x59ff66=$gameScreen[_0x5a3cf8(0x334)](_0x52e5a0);if(!_0x59ff66)continue;_0x59ff66[_0x5a3cf8(0x1bd)](_0x34bcf4,_0x31fc7c,_0xbb7d95['Wait']),_0x135968=_0x59ff66[_0x5a3cf8(0x21e)]();}}if(_0xbb7d95[_0x5a3cf8(0x362)]){if(_0x5a3cf8(0x387)===_0x5a3cf8(0x365)){const _0x391ce5=_0x2c0377['getLastPluginCommandInterpreter']();if(_0x391ce5)_0x391ce5[_0x5a3cf8(0x287)](_0x3f1afe+0x1);}else{const _0x132441=$gameTemp[_0x5a3cf8(0x373)]();if(_0x132441)_0x132441[_0x5a3cf8(0x287)](_0x135968+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1bd)]=function(_0x5cec7d,_0x281ca1,_0x3b1662){const _0x5eaf33=_0x53ce3c;this[_0x5eaf33(0x18c)](),this['addToQueue']({'targetHue':this['getPictureEffectsHue']()+_0x5cec7d,'hueDuration':_0x281ca1,'duration':_0x3b1662?_0x281ca1:0x0});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Hue_Shift_To',_0x4c6306=>{const _0xd55b2=_0x53ce3c;VisuMZ['ConvertParams'](_0x4c6306,_0x4c6306);const _0x1915a4=_0x4c6306[_0xd55b2(0x275)];if(_0x1915a4[_0xd55b2(0x23e)]<=0x0)return;const _0x3fa645=Number(_0x4c6306['Hue'])||0x0,_0x133bd0=Math[_0xd55b2(0x256)](Number(_0x4c6306['Duration']),0x1);let _0x125c92=0x0;for(const _0x4b0706 of _0x1915a4){if(_0xd55b2(0x2ec)!==_0xd55b2(0x2ec))this[_0xd55b2(0x17e)]=_0x22eabb[_0xd55b2(0x1fb)];else{const _0x319681=$gameScreen[_0xd55b2(0x334)](_0x4b0706);if(!_0x319681)continue;_0x319681[_0xd55b2(0x328)](_0x3fa645,_0x133bd0,_0x4c6306[_0xd55b2(0x362)]),_0x125c92=_0x319681['getTotalQueueDuration']();}}if(_0x4c6306[_0xd55b2(0x362)]){const _0x56705d=$gameTemp[_0xd55b2(0x373)]();if(_0x56705d)_0x56705d[_0xd55b2(0x287)](_0x125c92+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x328)]=function(_0x8ea60a,_0x255c9b,_0x515587){this['clearQueue'](),this['addToQueue']({'targetHue':_0x8ea60a,'hueDuration':_0x255c9b,'duration':_0x515587?_0x255c9b:0x0});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Illusion',_0x5a8e94=>{const _0x36c368=_0x53ce3c;VisuMZ['ConvertParams'](_0x5a8e94,_0x5a8e94);const _0x537a86=_0x5a8e94[_0x36c368(0x275)];if(_0x537a86[_0x36c368(0x23e)]<=0x0)return;const _0x288baf=Math[_0x36c368(0x256)](Number(_0x5a8e94['Times']),0x1),_0x2c0e44=Math['max'](Number(_0x5a8e94['Duration']),0xa);let _0x327e93=0x0;for(const _0x366bfa of _0x537a86){if('XnxGq'!==_0x36c368(0x30a)){const _0x59571d=_0x302d01[_0x36c368(0x373)]();if(_0x59571d)_0x59571d[_0x36c368(0x287)](_0x20362b+0x1);}else{const _0x264581=$gameScreen[_0x36c368(0x334)](_0x366bfa);if(!_0x264581)continue;_0x264581[_0x36c368(0x1a8)](_0x288baf,_0x2c0e44),_0x327e93=_0x264581[_0x36c368(0x21e)]();}}if(_0x5a8e94[_0x36c368(0x362)]){const _0x2232ba=$gameTemp['getLastPluginCommandInterpreter']();if(_0x2232ba)_0x2232ba[_0x36c368(0x287)](_0x327e93+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_Illusion']=function(_0x3d7fae,_0x5338de){const _0x5d1562=_0x53ce3c;_0x3d7fae=_0x3d7fae||0x1,this[_0x5d1562(0x18c)]();while(_0x3d7fae--){let _0x402fc6=Math[_0x5d1562(0x351)](Graphics[_0x5d1562(0x27d)]/0x2)+Graphics[_0x5d1562(0x27d)]/0x4,_0xe343c3=Math[_0x5d1562(0x351)](Graphics[_0x5d1562(0x374)]/0x2)+Graphics[_0x5d1562(0x374)]/0x4,_0xe5e475=(Math[_0x5d1562(0x24e)]()>0.5?-0x1:0x1)*Math[_0x5d1562(0x351)](Math['round'](Graphics['width']/0xa)),_0x856460=(Math[_0x5d1562(0x24e)]()>0.5?-0x1:0x1)*Math[_0x5d1562(0x351)](Math['round'](Graphics['height']/0xa));const _0x391fdf=Math[_0x5d1562(0x24e)]()*0.3+0.5;this['addToQueue']({'moveX':_0x402fc6,'moveY':_0xe343c3,'scaleX':this['_scaleX']*_0x391fdf,'scaleY':this[_0x5d1562(0x282)]*_0x391fdf,'opacity':0x0,'currentBlur':0xa,'duration':0x0}),this[_0x5d1562(0x27f)]({'targetMoveX':_0x402fc6+_0xe5e475/0x2,'targetMoveY':_0xe343c3+_0x856460/0x2,'targetOpacity':this[_0x5d1562(0x25f)]||0xff,'targetBlur':0x3,'blurDuration':Math[_0x5d1562(0x266)](_0x5338de/0x2),'duration':Math[_0x5d1562(0x266)](_0x5338de/0x2)}),this['addToQueue']({'targetMoveX':_0x402fc6+_0xe5e475,'targetMoveY':_0xe343c3+_0x856460,'targetOpacity':0x0,'targetBlur':0xa,'blurDuration':Math[_0x5d1562(0x178)](_0x5338de/0x2),'duration':Math[_0x5d1562(0x178)](_0x5338de/0x2)});}this[_0x5d1562(0x27f)]({'moveX':this['_x'],'moveY':this['_y'],'scaleX':this[_0x5d1562(0x301)],'scaleY':this[_0x5d1562(0x282)],'opacity':0x0,'currentBlur':0xa,'duration':0x0}),this[_0x5d1562(0x27f)]({'targetOpacity':this['_opacity']||0xff,'duration':_0x5338de,'targetBlur':0x0,'blurDuration':_0x5338de,'easingType':_0x5d1562(0x1bc)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1d4),_0x19da26=>{const _0x508237=_0x53ce3c;VisuMZ[_0x508237(0x210)](_0x19da26,_0x19da26);const _0x27ef14=_0x19da26['PictureIDs'];if(_0x27ef14[_0x508237(0x23e)]<=0x0)return;const _0x3fc61b=Math[_0x508237(0x256)](_0x19da26[_0x508237(0x306)],0x1);let _0x103579=0x0;for(const _0x54e75f of _0x27ef14){const _0x55e5f4=$gameScreen['picture'](_0x54e75f);if(!_0x55e5f4)continue;_0x55e5f4['setupEffect_Jiggle'](_0x3fc61b),_0x103579=_0x55e5f4[_0x508237(0x21e)]();}if(_0x19da26[_0x508237(0x362)]){const _0x6bbd26=$gameTemp[_0x508237(0x373)]();if(_0x6bbd26)_0x6bbd26['wait'](_0x103579+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x34f)]=function(_0x2efd7d){const _0x10ec44=_0x53ce3c;_0x2efd7d=_0x2efd7d||0x1,this[_0x10ec44(0x18c)]();while(_0x2efd7d--){this['addToQueue']({'targetScaleX':this[_0x10ec44(0x301)]*0.9,'targetScaleY':this[_0x10ec44(0x282)]*1.1,'duration':0xf,'easingType':_0x10ec44(0x19d)}),this['addToQueue']({'targetScaleX':this[_0x10ec44(0x301)]*1.1,'targetScaleY':this[_0x10ec44(0x282)]*0.9,'duration':0xf,'easingType':'InOutSine'});}this['addToQueue']({'targetScaleX':this[_0x10ec44(0x301)],'targetScaleY':this[_0x10ec44(0x282)],'duration':0xa,'easingType':_0x10ec44(0x19d)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x270),_0x344ed4=>{const _0x59d374=_0x53ce3c;VisuMZ[_0x59d374(0x210)](_0x344ed4,_0x344ed4);const _0x54b9cd=_0x344ed4[_0x59d374(0x275)];if(_0x54b9cd[_0x59d374(0x23e)]<=0x0)return;const _0x16aee0=Math[_0x59d374(0x256)](Number(_0x344ed4[_0x59d374(0x2aa)]),0x0),_0x780618=Math[_0x59d374(0x20a)](Number(_0x344ed4[_0x59d374(0x1e2)])),_0x4ad272=Math[_0x59d374(0x20a)](Number(_0x344ed4['DistanceY'])),_0x5a75b0=Math[_0x59d374(0x256)](Number(_0x344ed4['Duration']),0x1);let _0x48bfd5=0x0;for(const _0xd4ac68 of _0x54b9cd){if(_0x59d374(0x357)===_0x59d374(0x357)){const _0x29feaf=$gameScreen['picture'](_0xd4ac68);if(!_0x29feaf)continue;_0x29feaf['setupEffect_JumpByXy'](_0x780618,_0x4ad272,_0x16aee0,_0x5a75b0),_0x48bfd5=_0x29feaf[_0x59d374(0x21e)]();}else{const _0x19eda0=_0x59431e[_0x59d374(0x373)]();if(_0x19eda0)_0x19eda0['wait'](_0xf9a2f3+0x1);}}if(_0x344ed4[_0x59d374(0x362)]){const _0x496716=$gameTemp[_0x59d374(0x373)]();if(_0x496716)_0x496716['wait'](_0x48bfd5+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x2e1)]=function(_0x376185,_0x55ec04,_0x40bdeb,_0x305ce9){const _0x3f32c7=_0x53ce3c;this[_0x3f32c7(0x18c)]();let _0x3bc36a=this['_x'],_0x168c7f=this['_y'];const _0x39ea59=_0x3bc36a+_0x376185,_0xc7c952=_0x168c7f+_0x55ec04,_0x426387=_0x305ce9;let _0x1bb73e=_0x426387;this[_0x3f32c7(0x204)]('Linear');while(_0x1bb73e--){if(_0x3f32c7(0x371)!=='TuiNJ'){_0x3bc36a=(_0x3bc36a*_0x1bb73e+_0x39ea59)/(_0x1bb73e+0x1),_0x168c7f=(_0x168c7f*_0x1bb73e+_0xc7c952)/(_0x1bb73e+0x1);const _0x57e518=_0x426387-(_0x1bb73e+0x1),_0x208b46=_0x426387/0x2,_0x20a405=_0x40bdeb,_0x5c6050=-_0x20a405/Math[_0x3f32c7(0x269)](_0x208b46,0x2),_0x43153b=_0x5c6050*Math[_0x3f32c7(0x269)](_0x57e518-_0x208b46,0x2)+_0x20a405;this['addToQueue']({'moveX':_0x3bc36a,'moveY':_0x168c7f-_0x43153b,'duration':0x1});}else{if(this[_0x3f32c7(0x21b)]===_0x410772)this[_0x3f32c7(0x1d7)]();return this[_0x3f32c7(0x21b)];}}this[_0x3f32c7(0x27f)]({'moveX':_0x39ea59,'moveY':_0xc7c952,'duration':0x0});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],'JumpTo',_0x176a81=>{const _0x4aa145=_0x53ce3c;VisuMZ[_0x4aa145(0x210)](_0x176a81,_0x176a81);const _0x2e7011=_0x176a81[_0x4aa145(0x275)];if(_0x2e7011[_0x4aa145(0x23e)]<=0x0)return;const _0x2e7a25=Math[_0x4aa145(0x256)](Number(_0x176a81['Height']),0x0),_0x5c87ae=Math[_0x4aa145(0x20a)](Number(_0x176a81[_0x4aa145(0x2b9)])),_0x672162=Math['round'](Number(_0x176a81['TargetY'])),_0x100fff=Math[_0x4aa145(0x256)](Number(_0x176a81[_0x4aa145(0x28a)]),0x1);let _0x46b7e2=0x0;for(const _0x2e6faf of _0x2e7011){const _0x33e4e8=$gameScreen[_0x4aa145(0x334)](_0x2e6faf);if(!_0x33e4e8)continue;_0x33e4e8[_0x4aa145(0x16d)](_0x5c87ae,_0x672162,_0x2e7a25,_0x100fff),_0x46b7e2=_0x33e4e8[_0x4aa145(0x21e)]();}if(_0x176a81['Wait']){if('ZgJGN'!==_0x4aa145(0x193)){const _0x4c649e=_0x4fa42d['getLastPluginCommandInterpreter']();if(_0x4c649e)_0x4c649e[_0x4aa145(0x287)](_0x26f3f0+0x1);}else{const _0x2a5e0f=$gameTemp[_0x4aa145(0x373)]();if(_0x2a5e0f)_0x2a5e0f[_0x4aa145(0x287)](_0x46b7e2+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x16d)]=function(_0x45f2e7,_0x1d3095,_0x1755ae,_0x310c39){const _0x12ff55=_0x53ce3c;this[_0x12ff55(0x18c)]();let _0x26fa21=this['_x'],_0x588a6a=this['_y'];const _0x5a77de=_0x310c39;let _0x505047=_0x5a77de;this[_0x12ff55(0x204)](_0x12ff55(0x1bc));while(_0x505047--){if(_0x12ff55(0x16e)!==_0x12ff55(0x1a2)){_0x26fa21=(_0x26fa21*_0x505047+_0x45f2e7)/(_0x505047+0x1),_0x588a6a=(_0x588a6a*_0x505047+_0x1d3095)/(_0x505047+0x1);const _0xaa0f67=_0x5a77de-(_0x505047+0x1),_0x1a5b20=_0x5a77de/0x2,_0x1312f9=_0x1755ae,_0xefdd9d=-_0x1312f9/Math[_0x12ff55(0x269)](_0x1a5b20,0x2),_0x4fed1c=_0xefdd9d*Math[_0x12ff55(0x269)](_0xaa0f67-_0x1a5b20,0x2)+_0x1312f9;this[_0x12ff55(0x27f)]({'moveX':_0x26fa21,'moveY':_0x588a6a-_0x4fed1c,'duration':0x1});}else this[_0x12ff55(0x18c)](),this[_0x12ff55(0x27f)]({'tone':_0x4d8b19[_0x12ff55(0x350)](),'duration':_0x19d2d2[_0x12ff55(0x178)](_0x2a6cfd/0x2),'easingType':'Linear'}),this[_0x12ff55(0x27f)]({'targetTone':this['_tone']?this[_0x12ff55(0x32b)][_0x12ff55(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x5f0ae7['ceil'](_0x2ce9ea/0x2),'duration':_0x1bf8d7[_0x12ff55(0x266)](_0x4bd15a/0x2),'easingType':_0x12ff55(0x1bc)});}this[_0x12ff55(0x27f)]({'moveX':_0x45f2e7,'moveY':_0x1d3095,'duration':0x0});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1d2),_0x3e6b1a=>{const _0x482415=_0x53ce3c;VisuMZ[_0x482415(0x210)](_0x3e6b1a,_0x3e6b1a);const _0x31c4a6=_0x3e6b1a[_0x482415(0x275)];if(_0x31c4a6['length']<=0x0)return;const _0x310d49=_0x3e6b1a[_0x482415(0x26d)]==='In',_0x5e68d3=Math[_0x482415(0x256)](Number(_0x3e6b1a[_0x482415(0x280)]),0x1),_0x1b0eec=Math['max'](Number(_0x3e6b1a[_0x482415(0x28a)]),0x1);let _0x44b01f=0x0;for(const _0x39eef0 of _0x31c4a6){const _0x5d04d5=$gameScreen[_0x482415(0x334)](_0x39eef0);if(!_0x5d04d5)continue;_0x5d04d5[_0x482415(0x234)](_0x310d49,_0x5e68d3,_0x1b0eec),_0x44b01f=_0x5d04d5[_0x482415(0x21e)]();}if(_0x3e6b1a['Wait']){const _0x585f64=$gameTemp[_0x482415(0x373)]();if(_0x585f64)_0x585f64[_0x482415(0x287)](_0x44b01f+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x234)]=function(_0x5d78e8,_0x255248,_0x58892e){const _0x231ea3=_0x53ce3c;_0x255248=_0x255248||0x60,_0x58892e=_0x58892e||0x3c,this[_0x231ea3(0x18c)](),_0x5d78e8?(this[_0x231ea3(0x27f)]({'moveY':this['_y']+_0x255248,'scaleX':this['_scaleX']*1.2,'scaleY':this[_0x231ea3(0x282)]*1.5,'opacity':0x0,'duration':0x0,'easingType':_0x231ea3(0x1bc)}),this['addToQueue']({'targetMoveY':this['_y'],'targetScaleX':this[_0x231ea3(0x301)],'targetScaleY':this[_0x231ea3(0x282)],'targetOpacity':this[_0x231ea3(0x25f)]||0xff,'duration':_0x58892e,'easingType':'OutBack'})):this[_0x231ea3(0x27f)]({'targetMoveY':this['_y']-_0x255248,'targetScaleX':this[_0x231ea3(0x301)]*0.8,'targetScaleY':this[_0x231ea3(0x282)]*0.5,'targetOpacity':0x0,'duration':_0x58892e,'easingType':_0x231ea3(0x339)});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x321),_0x5f0f53=>{const _0x5b533b=_0x53ce3c;VisuMZ[_0x5b533b(0x210)](_0x5f0f53,_0x5f0f53);const _0x195148=_0x5f0f53[_0x5b533b(0x275)];if(_0x195148[_0x5b533b(0x23e)]<=0x0)return;const _0x174e3e=Number(_0x5f0f53['Blur'])||0x0,_0x47bc29=_0x5f0f53[_0x5b533b(0x31d)]||[0x0,0x0,0x0,0x0],_0x4871f7=Math[_0x5b533b(0x256)](Number(_0x5f0f53[_0x5b533b(0x28a)]),0x1);let _0x1ad161=0x0;for(const _0xdb2033 of _0x195148){const _0x574b42=$gameScreen['picture'](_0xdb2033);if(!_0x574b42)continue;_0x574b42[_0x5b533b(0x333)](_0x174e3e,_0x47bc29,_0x4871f7),_0x1ad161=_0x574b42[_0x5b533b(0x21e)]();}if(_0x5f0f53[_0x5b533b(0x362)]){if(_0x5b533b(0x1ff)!==_0x5b533b(0x1ff))this[_0x5b533b(0x27f)]({'duration':0x0,'targetTone':[0x0,0x0,0x0,0x0],'toneDuration':_0xad6f47/0xa,'blendMode':0x0,'currentBlur':0x0});else{const _0x1089af=$gameTemp[_0x5b533b(0x373)]();if(_0x1089af)_0x1089af[_0x5b533b(0x287)](_0x1ad161+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x333)]=function(_0x373062,_0x37a2d8,_0x177c67){const _0xb6fd7e=_0x53ce3c;this[_0xb6fd7e(0x18c)](),this[_0xb6fd7e(0x27f)]({'targetBlur':_0x373062,'blurDuration':_0x177c67*0x2/0x5,'targetTone':_0x37a2d8[_0xb6fd7e(0x350)](),'toneDuration':_0x177c67/0x4,'duration':Math[_0xb6fd7e(0x178)](_0x177c67/0x2),'targetHue':this[_0xb6fd7e(0x26b)]()+0x168,'hueDuration':_0x177c67,'easingType':_0xb6fd7e(0x1bc)}),this['addToQueue']({'targetBlur':this[_0xb6fd7e(0x180)](),'blurDuration':Math[_0xb6fd7e(0x266)](_0x177c67/0x2),'targetTone':this[_0xb6fd7e(0x32b)]?this['_tone']['clone']():[0x0,0x0,0x0,0x0],'toneDuration':Math['ceil'](_0x177c67/0x2),'duration':Math['ceil'](_0x177c67/0x2),'easingType':_0xb6fd7e(0x1bc)}),this[_0xb6fd7e(0x27f)]({'currentHue':this[_0xb6fd7e(0x26b)](),'duration':0x0});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x203),_0x340ae0=>{const _0x29ad8f=_0x53ce3c;VisuMZ['ConvertParams'](_0x340ae0,_0x340ae0);const _0x4e6cfd=_0x340ae0[_0x29ad8f(0x275)];if(_0x4e6cfd[_0x29ad8f(0x23e)]<=0x0)return;const _0x50bdbd=_0x340ae0[_0x29ad8f(0x1e6)]||'';if(_0x50bdbd==='')return;const _0x21dd3d=Number(_0x340ae0[_0x29ad8f(0x1a0)])||0x0,_0x234a89=Math[_0x29ad8f(0x20a)](Number(_0x340ae0[_0x29ad8f(0x2b9)])),_0xa270ef=Math[_0x29ad8f(0x20a)](Number(_0x340ae0[_0x29ad8f(0x18e)])),_0x2df7b3=_0x340ae0[_0x29ad8f(0x31d)]||[0x0,0x0,0x0,0x0],_0x3f0183=Math['max'](Number(_0x340ae0[_0x29ad8f(0x28a)]),0x1);let _0x4b2d48=0x0;for(const _0xa1493d of _0x4e6cfd){if(_0x29ad8f(0x185)!==_0x29ad8f(0x218)){const _0x397905=$gameScreen[_0x29ad8f(0x334)](_0xa1493d);if(!_0x397905)continue;_0x397905[_0x29ad8f(0x345)](_0x50bdbd,_0x21dd3d,_0x234a89,_0xa270ef,_0x2df7b3,_0x4b2d48===0x0,_0x3f0183),_0x4b2d48=_0x397905[_0x29ad8f(0x21e)]();}else return this[_0x29ad8f(0x2d3)]===_0x44185d&&this[_0x29ad8f(0x2b5)](),this['_pictureEffectsHover']['y'];}if(_0x340ae0[_0x29ad8f(0x362)]){const _0x488ddb=$gameTemp[_0x29ad8f(0x373)]();if(_0x488ddb)_0x488ddb[_0x29ad8f(0x287)](_0x4b2d48+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_MergeChange']=function(_0xa10259,_0x2e9c47,_0x21a14e,_0x2752dd,_0x55ddc7,_0x7ac616,_0x4e9881){const _0x20128d=_0x53ce3c;ImageManager[_0x20128d(0x33c)](_0xa10259),this['clearQueue'](),this['addToQueue']({'targetMoveX':_0x21a14e,'targetMoveY':_0x2752dd,'duration':_0x4e9881,'targetBlur':_0x2e9c47,'blurDuration':_0x4e9881,'targetTone':_0x55ddc7[_0x20128d(0x350)](),'toneDuration':_0x4e9881,'easingType':'InOutBack'}),this[_0x20128d(0x27f)]({'filename':_0xa10259,'opacity':_0x7ac616?this['_opacity']:0x0,'duration':0x0,'targetBlur':this[_0x20128d(0x180)](),'blurDuration':_0x4e9881/0x2,'targetTone':this['_tone']?this[_0x20128d(0x32b)][_0x20128d(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x4e9881/0x4,'easingType':_0x20128d(0x1bc)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x2fd),_0x4173ce=>{const _0x41aff5=_0x53ce3c;VisuMZ[_0x41aff5(0x210)](_0x4173ce,_0x4173ce);const _0x30314a=_0x4173ce['PictureIDs'];if(_0x30314a['length']<=0x0)return;const _0x2159c3=_0x4173ce[_0x41aff5(0x26d)]===_0x41aff5(0x177),_0x5e0062=Math['max'](Number(_0x4173ce[_0x41aff5(0x28a)]),0x1);let _0x5215c9=0x0;for(const _0x567cac of _0x30314a){if(_0x41aff5(0x33b)==='AeYZR')return _0xdf5c69['_z']-_0x25ac24['_z'];else{const _0x26b89c=$gameScreen[_0x41aff5(0x334)](_0x567cac);if(!_0x26b89c)continue;_0x26b89c[_0x41aff5(0x29f)](_0x2159c3,_0x5e0062),_0x5215c9=_0x26b89c[_0x41aff5(0x21e)]();}}if(_0x4173ce['Wait']){const _0x2212fe=$gameTemp[_0x41aff5(0x373)]();if(_0x2212fe)_0x2212fe[_0x41aff5(0x287)](_0x5215c9+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_OpenInOut']=function(_0x2353c6,_0x9330ec){const _0x51d88a=_0x53ce3c;_0x9330ec=_0x9330ec||0x14,this[_0x51d88a(0x18c)]();if(_0x2353c6){if(_0x51d88a(0x1f1)===_0x51d88a(0x1cd)){if(this[_0x51d88a(0x17e)]===_0x39099a)this[_0x51d88a(0x37c)]();return this[_0x51d88a(0x17e)];}else this[_0x51d88a(0x27f)]({'scaleY':this[_0x51d88a(0x282)]*0.05,'opacity':this['_opacity']||0xff,'duration':0x0,'easingType':_0x51d88a(0x1bc)}),this[_0x51d88a(0x27f)]({'targetScaleY':this[_0x51d88a(0x282)],'duration':_0x9330ec,'easingType':_0x51d88a(0x220)});}else this[_0x51d88a(0x27f)]({'targetScaleY':this[_0x51d88a(0x282)]*0.05,'duration':_0x9330ec-0x2,'easingType':_0x51d88a(0x1a9)}),this[_0x51d88a(0x27f)]({'targetOpacity':0x0,'duration':0x2,'easingType':_0x51d88a(0x1bc)});},PluginManager['registerCommand'](pluginData['name'],_0x53ce3c(0x330),_0x1b6289=>{const _0x4fc758=_0x53ce3c;VisuMZ[_0x4fc758(0x210)](_0x1b6289,_0x1b6289);const _0x40e8ff=_0x1b6289[_0x4fc758(0x275)];if(_0x40e8ff[_0x4fc758(0x23e)]<=0x0)return;const _0x2e22fb=_0x1b6289[_0x4fc758(0x36b)]||[0x0,0x0,0x0,0x0],_0x1ff0cc=_0x1b6289['PetrifyTone']||[0x0,0x0,0x0,0x0],_0x43c2b9=Number(_0x1b6289['ScaleMax']),_0x4ca5d1=Number(_0x1b6289['ScaleMin']),_0x28fa64=Math['max'](Number(_0x1b6289[_0x4fc758(0x28a)]),0x14);let _0x52b34a=0x0;for(const _0x312940 of _0x40e8ff){const _0xc7b336=$gameScreen[_0x4fc758(0x334)](_0x312940);if(!_0xc7b336)continue;_0xc7b336['setupEffect_Petrify'](_0x2e22fb,_0x1ff0cc,_0x43c2b9,_0x4ca5d1,_0x28fa64),_0x52b34a=_0xc7b336[_0x4fc758(0x21e)]();}if(_0x1b6289[_0x4fc758(0x362)]){if(_0x4fc758(0x37a)!==_0x4fc758(0x37a))this[_0x4fc758(0x27f)]({'moveY':this['_y']-_0xdf3fb2,'scaleX':this['_scaleX']*0.9,'scaleY':this[_0x4fc758(0x282)]*1.2,'opacity':0x0,'duration':0x0,'easingType':_0x4fc758(0x1bc)}),this['addToQueue']({'targetMoveY':this['_y'],'targetScaleX':this[_0x4fc758(0x301)],'targetScaleY':this[_0x4fc758(0x282)],'targetOpacity':this['_opacity']||0xff,'duration':_0x43a19,'easingType':_0x4fc758(0x372)});else{const _0x2c94e9=$gameTemp[_0x4fc758(0x373)]();if(_0x2c94e9)_0x2c94e9[_0x4fc758(0x287)](_0x52b34a+0x1);}}}),Game_Picture['prototype'][_0x53ce3c(0x36f)]=function(_0xb77b2b,_0x45be95,_0x4f0b55,_0x60537d,_0xb197b5){const _0x54a3e0=_0x53ce3c,_0xe8d6da=Math['floor'](_0xb197b5/0x7);this['clearQueue'](),this['addToQueue']({'targetScaleX':this[_0x54a3e0(0x301)]*_0x4f0b55,'targetScaleY':this[_0x54a3e0(0x282)]*_0x60537d,'duration':_0xe8d6da,'easingType':_0x54a3e0(0x1bc)}),this['addToQueue']({'targetScaleX':this[_0x54a3e0(0x301)]*_0x60537d,'targetScaleY':this['_scaleY']*_0x4f0b55,'duration':_0xe8d6da,'easingType':_0x54a3e0(0x1bc)}),this[_0x54a3e0(0x27f)]({'targetTone':_0xb77b2b[_0x54a3e0(0x350)](),'toneDuration':_0xe8d6da*0x4,'targetScaleX':this[_0x54a3e0(0x301)]*_0x4f0b55,'targetScaleY':this[_0x54a3e0(0x282)]*_0x60537d,'duration':_0xe8d6da,'easingType':_0x54a3e0(0x1bc)}),this[_0x54a3e0(0x27f)]({'targetScaleX':this['_scaleX']*_0x60537d,'targetScaleY':this[_0x54a3e0(0x282)]*_0x4f0b55,'duration':_0xe8d6da,'easingType':_0x54a3e0(0x1bc)}),this[_0x54a3e0(0x27f)]({'targetScaleX':this[_0x54a3e0(0x301)]*_0x4f0b55,'targetScaleY':this[_0x54a3e0(0x282)]*_0x60537d,'duration':_0xe8d6da,'easingType':_0x54a3e0(0x1bc)}),this[_0x54a3e0(0x27f)]({'targetScaleX':this[_0x54a3e0(0x301)]*_0x60537d,'targetScaleY':this[_0x54a3e0(0x282)]*_0x4f0b55,'duration':_0xe8d6da,'easingType':_0x54a3e0(0x1bc)}),this[_0x54a3e0(0x27f)]({'targetTone':_0x45be95,'toneDuration':_0xe8d6da,'scaleX':this[_0x54a3e0(0x301)],'scaleY':this[_0x54a3e0(0x282)],'duration':_0xb197b5-_0xe8d6da*0x6,'easingType':_0x54a3e0(0x1bc)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],'Phase_InOut',_0x47ecfa=>{const _0x777d0f=_0x53ce3c;VisuMZ[_0x777d0f(0x210)](_0x47ecfa,_0x47ecfa);const _0x1349e4=_0x47ecfa[_0x777d0f(0x275)];if(_0x1349e4[_0x777d0f(0x23e)]<=0x0)return;const _0x3c5d7c=_0x47ecfa[_0x777d0f(0x26d)]==='In',_0x519ab7=Math['max'](Number(_0x47ecfa['Duration']),0x1);let _0x42683a=0x0;for(const _0x29bb11 of _0x1349e4){const _0x1b4c4d=$gameScreen['picture'](_0x29bb11);if(!_0x1b4c4d)continue;_0x1b4c4d[_0x777d0f(0x1d0)](_0x3c5d7c,_0x519ab7),_0x42683a=_0x1b4c4d[_0x777d0f(0x21e)]();}if(_0x47ecfa['Wait']){if(_0x777d0f(0x257)===_0x777d0f(0x1a3))this['addToQueue']({'duration':0x0,'easingType':_0x777d0f(0x1bc)});else{const _0x57d1af=$gameTemp[_0x777d0f(0x373)]();if(_0x57d1af)_0x57d1af[_0x777d0f(0x287)](_0x42683a+0x1);}}}),Game_Picture['prototype']['setupEffect_PhaseInOut']=function(_0x33856d,_0x9edf44){const _0x1480c3=_0x53ce3c;_0x9edf44=_0x9edf44||0x14,_0x9edf44=Math[_0x1480c3(0x256)](_0x9edf44,0xa),this[_0x1480c3(0x18c)](),_0x33856d?(this[_0x1480c3(0x27f)]({'opacity':0x0,'scaleX':this['_scaleX']*0.8,'scaleY':this[_0x1480c3(0x282)]*0.8,'currentBlur':0xa,'duration':0x0}),this[_0x1480c3(0x27f)]({'targetOpacity':this['_opacity']||0xff,'targetScaleX':this['_scaleX'],'targetScaleY':this['_scaleY'],'targetBlur':0x0,'duration':_0x9edf44,'blurDuration':_0x9edf44,'easingType':_0x1480c3(0x372)})):this['addToQueue']({'targetOpacity':0x0,'targetScaleX':this[_0x1480c3(0x301)]*0.8,'targetScaleY':this[_0x1480c3(0x282)]*0.8,'targetBlur':0xa,'duration':_0x9edf44,'blurDuration':_0x9edf44,'easingType':_0x1480c3(0x339)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Piece_InOut',_0x1615cc=>{const _0x4ede7d=_0x53ce3c;VisuMZ[_0x4ede7d(0x210)](_0x1615cc,_0x1615cc);const _0x457bae=_0x1615cc[_0x4ede7d(0x275)];if(_0x457bae[_0x4ede7d(0x23e)]<=0x0)return;const _0x4499f2=_0x1615cc[_0x4ede7d(0x26d)]==='In',_0x27ba58=Number(_0x1615cc[_0x4ede7d(0x1b3)]),_0x4ad9b6=Math['max'](Number(_0x1615cc[_0x4ede7d(0x28a)]),0x1);let _0x54bd2b=0x0;for(const _0x24d3a3 of _0x457bae){const _0x16bc94=$gameScreen['picture'](_0x24d3a3);if(!_0x16bc94)continue;_0x16bc94[_0x4ede7d(0x23b)](_0x4499f2,_0x27ba58,_0x4ad9b6),_0x54bd2b=_0x16bc94[_0x4ede7d(0x21e)]();}if(_0x1615cc['Wait']){if(_0x4ede7d(0x2ca)==='RZVUj'){this[_0x4ede7d(0x255)]===_0x33ca3a&&this[_0x4ede7d(0x1a4)]();const _0x5dd264=this['_pictureEffectsDepth'];return _0x5dd264['distanceY']/0x2*_0x5dd264[_0x4ede7d(0x209)];}else{const _0xac96af=$gameTemp[_0x4ede7d(0x373)]();if(_0xac96af)_0xac96af[_0x4ede7d(0x287)](_0x54bd2b+0x1);}}}),Game_Picture['prototype'][_0x53ce3c(0x23b)]=function(_0x419b8f,_0xb2ec33,_0x4cb358){const _0xce9717=_0x53ce3c;_0xb2ec33=_0xb2ec33??0x2,_0x4cb358=_0x4cb358??0x3c;let _0x4c7d5b=0x0,_0x13c180=0x0,_0x8a2f15=(Math['random']()>0.5?-0x1:0x1)*Math['randomInt'](0x168)+0x168*0x2;const _0x46f2ff=[0x2,0x4,0x6,0x8][Math[_0xce9717(0x351)](0x4)];switch(_0x46f2ff){case 0x2:case 0x8:_0x4c7d5b=Math[_0xce9717(0x351)](Graphics[_0xce9717(0x27d)]);break;case 0x4:case 0x6:_0x13c180=Math[_0xce9717(0x351)](Graphics[_0xce9717(0x374)]);break;}switch(_0x46f2ff){case 0x2:_0x13c180=Graphics[_0xce9717(0x374)];break;case 0x8:_0x13c180=0x0;break;case 0x4:_0x4c7d5b=0x0;break;case 0x6:_0x4c7d5b=Graphics[_0xce9717(0x27d)];break;}this['clearQueue'](),_0x419b8f?(this[_0xce9717(0x27f)]({'moveX':_0x4c7d5b,'moveY':_0x13c180,'opacity':0x0,'currentAngle':_0x8a2f15,'scaleX':this[_0xce9717(0x301)]*_0xb2ec33,'scaleY':this[_0xce9717(0x282)]*_0xb2ec33,'duration':0x0}),this[_0xce9717(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0xce9717(0x278)](),'targetOpacity':this[_0xce9717(0x25f)]||0xff,'targetScaleX':this[_0xce9717(0x301)],'targetScaleY':this[_0xce9717(0x282)],'duration':_0x4cb358,'easingType':_0xce9717(0x372)})):this[_0xce9717(0x27f)]({'targetMoveX':_0x4c7d5b,'targetMoveY':_0x13c180,'targetAngle':_0x8a2f15,'targetOpacity':0x0,'targetScaleX':this[_0xce9717(0x301)]*_0xb2ec33,'targetScaleY':this['_scaleY']*_0xb2ec33,'duration':_0x4cb358,'easingType':_0xce9717(0x339)});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],'Poison',_0x14732f=>{const _0x203d93=_0x53ce3c;VisuMZ[_0x203d93(0x210)](_0x14732f,_0x14732f);const _0x3f07c2=_0x14732f[_0x203d93(0x275)];if(_0x3f07c2['length']<=0x0)return;const _0x4aa4f6=Math[_0x203d93(0x256)](Number(_0x14732f[_0x203d93(0x280)]),0x0),_0x3b281f=_0x14732f[_0x203d93(0x31d)]||[0x0,0x0,0x0,0x0],_0x3017fa=Math[_0x203d93(0x256)](Number(_0x14732f['Duration']),0x1);let _0x5f1611=0x0;for(const _0xa5cff6 of _0x3f07c2){const _0x58ab5d=$gameScreen['picture'](_0xa5cff6);if(!_0x58ab5d)continue;_0x58ab5d[_0x203d93(0x2bc)](_0x4aa4f6,_0x3b281f,_0x3017fa),_0x5f1611=_0x58ab5d[_0x203d93(0x21e)]();}if(_0x14732f['Wait']){if(_0x203d93(0x307)!=='OOfIQ')this[_0x203d93(0x18c)](),this[_0x203d93(0x27f)]({'targetBlur':_0xfd5484,'blurDuration':_0x18c49e,'duration':_0x4bc81d?_0x37a235:0x0,'easingType':_0x203d93(0x1bc)});else{const _0x47f65c=$gameTemp[_0x203d93(0x373)]();if(_0x47f65c)_0x47f65c['wait'](_0x5f1611+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2bc)]=function(_0x556a7c,_0x35a1b5,_0x15227b){const _0x55c1e0=_0x53ce3c,_0x56a904=Math['floor'](_0x15227b/0x5);this['clearQueue'](),this[_0x55c1e0(0x27f)]({'targetMoveX':this['_x']-_0x556a7c,'duration':_0x56a904,'targetTone':_0x35a1b5['clone'](),'toneDuration':_0x56a904*0x3,'easingType':'InOutSine'}),this[_0x55c1e0(0x27f)]({'targetMoveX':this['_x']+_0x556a7c,'duration':_0x56a904,'easingType':_0x55c1e0(0x19d)}),this[_0x55c1e0(0x27f)]({'targetMoveX':this['_x']-_0x556a7c,'duration':_0x56a904,'easingType':'InOutSine'}),this[_0x55c1e0(0x27f)]({'targetMoveX':this['_x']+_0x556a7c,'duration':_0x56a904,'easingType':'InOutSine'}),this[_0x55c1e0(0x27f)]({'targetMoveX':this['_x'],'duration':_0x15227b-_0x56a904*0x4,'targetTone':this[_0x55c1e0(0x32b)]?this[_0x55c1e0(0x32b)][_0x55c1e0(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x56a904,'easingType':_0x55c1e0(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x331),_0x150f9a=>{const _0x4a91c3=_0x53ce3c;VisuMZ[_0x4a91c3(0x210)](_0x150f9a,_0x150f9a);const _0x214e08=_0x150f9a['PictureIDs'];if(_0x214e08['length']<=0x0)return;const _0x17f3fe=_0x150f9a[_0x4a91c3(0x1e6)]||'';if(_0x17f3fe==='')return;const _0x428e7f=Math[_0x4a91c3(0x256)](Number(_0x150f9a[_0x4a91c3(0x306)]),0x1),_0x10b2f2=Math[_0x4a91c3(0x256)](Number(_0x150f9a['Duration']),0x1);let _0x9c7f64=0x0;for(const _0x4bc886 of _0x214e08){const _0x8fa083=$gameScreen[_0x4a91c3(0x334)](_0x4bc886);if(!_0x8fa083)continue;_0x8fa083[_0x4a91c3(0x319)](_0x17f3fe,_0x428e7f,_0x10b2f2),_0x9c7f64=_0x8fa083['getTotalQueueDuration']();}if(_0x150f9a[_0x4a91c3(0x362)]){const _0x34794c=$gameTemp['getLastPluginCommandInterpreter']();if(_0x34794c)_0x34794c[_0x4a91c3(0x287)](_0x9c7f64+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x319)]=function(_0xce5c1e,_0x7b859e,_0x2732b6){const _0xb4bd1d=_0x53ce3c;ImageManager[_0xb4bd1d(0x33c)](_0xce5c1e);let _0x562b1d=_0x7b859e;this[_0xb4bd1d(0x18c)]();while(_0x562b1d--){this[_0xb4bd1d(0x27f)]({'filename':_0xce5c1e,'duration':_0x2732b6}),this['addToQueue']({'filename':this[_0xb4bd1d(0x276)],'duration':_0x2732b6});}this['addToQueue']({'filename':_0xce5c1e,'duration':0x0});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x384),_0x159cd1=>{const _0x2bd065=_0x53ce3c;VisuMZ[_0x2bd065(0x210)](_0x159cd1,_0x159cd1);const _0x59751a=_0x159cd1[_0x2bd065(0x275)];if(_0x59751a[_0x2bd065(0x23e)]<=0x0)return;const _0x226dc9=Math[_0x2bd065(0x256)](Number(_0x159cd1[_0x2bd065(0x28a)]),0x1);let _0x29d0b7=0x0;for(const _0x382488 of _0x59751a){const _0x1c880e=$gameScreen[_0x2bd065(0x334)](_0x382488);if(!_0x1c880e)continue;_0x1c880e[_0x2bd065(0x32f)](_0x226dc9),_0x29d0b7=_0x1c880e[_0x2bd065(0x21e)]();}if(_0x159cd1['Wait']){const _0x38ec82=$gameTemp[_0x2bd065(0x373)]();if(_0x38ec82)_0x38ec82['wait'](_0x29d0b7+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x32f)]=function(_0x3d94c6){const _0x51ddf9=_0x53ce3c;this[_0x51ddf9(0x18c)](),this[_0x51ddf9(0x27f)]({'duration':_0x3d94c6,'targetHue':this[_0x51ddf9(0x26b)]()+0x168,'hueDuration':_0x3d94c6,'easingType':'Linear'}),this[_0x51ddf9(0x27f)]({'duration':0x0,'currentHue':this[_0x51ddf9(0x26b)](),'easingType':'Linear'});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x378),_0x2069d4=>{const _0x2d6080=_0x53ce3c;VisuMZ['ConvertParams'](_0x2069d4,_0x2069d4);const _0x3a920f=_0x2069d4[_0x2d6080(0x275)];if(_0x3a920f[_0x2d6080(0x23e)]<=0x0)return;const _0x46c4c7=Number(_0x2069d4[_0x2d6080(0x1b3)])*0x64,_0x3ce145=Math['max'](Number(_0x2069d4[_0x2d6080(0x28a)]),0x1);let _0x3aac46=0x0;for(const _0x41037d of _0x3a920f){if('CUyTZ'===_0x2d6080(0x296))_0x405a1b=_0x1db4f0||0x14,this[_0x2d6080(0x18c)](),_0x5dbb53?(this['addToQueue']({'scaleX':this[_0x2d6080(0x301)]*0.05,'scaleY':this[_0x2d6080(0x282)]*0.05,'opacity':0x0,'duration':0x0,'easingType':_0x2d6080(0x1bc)}),this[_0x2d6080(0x27f)]({'targetScaleX':this[_0x2d6080(0x301)],'targetScaleY':this['_scaleY'],'targetOpacity':this[_0x2d6080(0x25f)]||0xff,'duration':_0x5b128f,'easingType':'InOutSine'})):this[_0x2d6080(0x27f)]({'targetScaleX':this[_0x2d6080(0x301)]*0x4,'targetScaleY':this[_0x2d6080(0x282)]*0x4,'targetOpacity':0x0,'duration':_0x40f336,'easingType':_0x2d6080(0x19d)});else{const _0x161d2b=$gameScreen['picture'](_0x41037d);if(!_0x161d2b)continue;_0x161d2b[_0x2d6080(0x2be)](_0x46c4c7,_0x3ce145),_0x3aac46=_0x161d2b[_0x2d6080(0x21e)]();}}if(_0x2069d4['Wait']){const _0x1242e2=$gameTemp[_0x2d6080(0x373)]();if(_0x1242e2)_0x1242e2[_0x2d6080(0x287)](_0x3aac46+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x2be)]=function(_0x1fd4ec,_0x54d201){const _0x5439e2=_0x53ce3c;_0x54d201=_0x54d201||0x3c,this[_0x5439e2(0x18c)](),this[_0x5439e2(0x27f)]({'targetScaleX':_0x1fd4ec,'targetScaleY':_0x1fd4ec,'duration':0x3c,'easingType':_0x5439e2(0x1c1)});},PluginManager['registerCommand'](pluginData['name'],_0x53ce3c(0x195),_0x127638=>{const _0x4a9585=_0x53ce3c;VisuMZ[_0x4a9585(0x210)](_0x127638,_0x127638);const _0x5b9255=_0x127638[_0x4a9585(0x275)];if(_0x5b9255[_0x4a9585(0x23e)]<=0x0)return;const _0x2dfa2b=Number(_0x127638[_0x4a9585(0x1e2)]),_0x744f5d=Number(_0x127638['DistanceY']),_0x49cc0c=Math[_0x4a9585(0x256)](Number(_0x127638[_0x4a9585(0x28a)]),0x1);let _0x3594de=0x0;for(const _0x395eed of _0x5b9255){if('UccOd'===_0x4a9585(0x248))_0x146055['blur']=_0xa7f756[_0x4a9585(0x1c5)];else{const _0x23ff06=$gameScreen['picture'](_0x395eed);if(!_0x23ff06)continue;_0x23ff06[_0x4a9585(0x27b)](_0x2dfa2b,_0x744f5d,_0x49cc0c),_0x3594de=_0x23ff06[_0x4a9585(0x21e)]();}}if(_0x127638['Wait']){const _0x568629=$gameTemp[_0x4a9585(0x373)]();if(_0x568629)_0x568629[_0x4a9585(0x287)](_0x3594de+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x27b)]=function(_0x5f19a3,_0x56098f,_0x248f86){const _0x28cc4f=_0x53ce3c;_0x5f19a3=_0x5f19a3??0x8,_0x56098f=_0x56098f??0x10,_0x248f86=_0x248f86||0x4,this[_0x28cc4f(0x18c)](),this[_0x28cc4f(0x27f)]({'targetMoveX':this['_x']+_0x5f19a3,'targetMoveY':this['_y']+_0x56098f,'duration':_0x248f86,'easingType':'Linear'}),this[_0x28cc4f(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':_0x248f86});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],'Random_InOut',_0xe9ddc7=>{const _0x4ff0a9=_0x53ce3c;VisuMZ[_0x4ff0a9(0x210)](_0xe9ddc7,_0xe9ddc7);const _0xa38def=_0xe9ddc7[_0x4ff0a9(0x275)];if(_0xa38def[_0x4ff0a9(0x23e)]<=0x0)return;const _0x5b97ac=_0xe9ddc7[_0x4ff0a9(0x26d)]==='In',_0x59d7a1=Math[_0x4ff0a9(0x256)](Number(_0xe9ddc7[_0x4ff0a9(0x280)]),0x1),_0x2a3acb=Math[_0x4ff0a9(0x256)](Number(_0xe9ddc7[_0x4ff0a9(0x28a)]),0x1);let _0x828d2f=0x0;for(const _0x23ef7f of _0xa38def){if(_0x4ff0a9(0x175)==='GLDdv'){const _0x205841=$gameScreen[_0x4ff0a9(0x334)](_0x23ef7f);if(!_0x205841)continue;_0x205841[_0x4ff0a9(0x19b)](_0x5b97ac,_0x59d7a1,_0x2a3acb),_0x828d2f=_0x205841[_0x4ff0a9(0x21e)]();}else this['addToQueue']({'targetMoveY':this['_y']+_0x138094,'targetOpacity':0x0,'duration':_0x3db491,'easingType':_0x4ff0a9(0x220)});}if(_0xe9ddc7[_0x4ff0a9(0x362)]){const _0x5e2269=$gameTemp[_0x4ff0a9(0x373)]();if(_0x5e2269)_0x5e2269[_0x4ff0a9(0x287)](_0x828d2f+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x19b)]=function(_0x3e0da1,_0x3bc075,_0x454a36){const _0x12f3c1=_0x53ce3c;_0x3bc075=_0x3bc075||0x1,_0x454a36=_0x454a36||0x3c,this[_0x12f3c1(0x18c)]();if(_0x3e0da1){let _0x5243ca=_0x454a36;while(_0x5243ca--){const _0x1ed699=_0x5243ca/_0x454a36;this[_0x12f3c1(0x27f)]({'moveX':this['_x']+(Math[_0x12f3c1(0x24e)]()>0.5?-0x1:0x1)*Math[_0x12f3c1(0x351)](Math[_0x12f3c1(0x20a)](_0x3bc075)),'moveY':this['_y']+(Math[_0x12f3c1(0x24e)]()>0.5?-0x1:0x1)*Math[_0x12f3c1(0x351)](Math['round'](_0x3bc075)),'opacity':this[_0x12f3c1(0x25f)]*(0x1-_0x1ed699),'duration':0x1});}this[_0x12f3c1(0x27f)]({'moveX':this['_x'],'moveY':this['_y'],'opacity':this['_opacity']||0xff,'duration':0x0});}else{if(_0x12f3c1(0x28f)!==_0x12f3c1(0x28f)){this[_0x12f3c1(0x231)]===_0x3a33a4&&this[_0x12f3c1(0x2b5)]();const _0x1ca713=this[_0x12f3c1(0x231)];this['updateAlterXy'](_0x1ca713,'x');}else{let _0x56929f=_0x454a36;while(_0x56929f--){if(_0x12f3c1(0x335)!=='NeiwY')this[_0x12f3c1(0x34b)]=new _0x2762de(),this['filters']=this['filters']||[],this[_0x12f3c1(0x205)][_0x12f3c1(0x358)](this['_pictureEffectsColorFilter']);else{const _0xfb8b37=0x1-_0x56929f/_0x454a36;this[_0x12f3c1(0x27f)]({'moveX':this['_x']+(Math[_0x12f3c1(0x24e)]()>0.5?-0x1:0x1)*Math[_0x12f3c1(0x351)](Math[_0x12f3c1(0x20a)](_0x3bc075)),'moveY':this['_y']+(Math['random']()>0.5?-0x1:0x1)*Math[_0x12f3c1(0x351)](Math[_0x12f3c1(0x20a)](_0x3bc075)),'opacity':this[_0x12f3c1(0x25f)]*(0x1-_0xfb8b37),'duration':0x1});}}this[_0x12f3c1(0x27f)]({'moveX':this['_x'],'moveY':this['_y'],'opacity':0x0,'duration':0x0});}}},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x2ad),_0x133513=>{const _0x15a3fa=_0x53ce3c;VisuMZ[_0x15a3fa(0x210)](_0x133513,_0x133513);const _0x166ecc=_0x133513[_0x15a3fa(0x275)];if(_0x166ecc['length']<=0x0)return;const _0x36b69f=_0x133513[_0x15a3fa(0x26d)]==='In',_0x3ef6a1=Math[_0x15a3fa(0x256)](Number(_0x133513[_0x15a3fa(0x280)]),0x1),_0x24258f=_0x133513[_0x15a3fa(0x325)]==='From\x20Right',_0x39328a=Math['max'](Number(_0x133513[_0x15a3fa(0x1f0)]),0x1),_0x172d80=Math[_0x15a3fa(0x256)](Number(_0x133513[_0x15a3fa(0x28a)]),0x1);let _0x26da94=0x0;for(const _0x458692 of _0x166ecc){const _0x3539f4=$gameScreen[_0x15a3fa(0x334)](_0x458692);if(!_0x3539f4)continue;_0x3539f4[_0x15a3fa(0x1ea)](_0x36b69f,_0x3ef6a1,_0x24258f,_0x39328a,_0x172d80),_0x26da94=_0x3539f4['getTotalQueueDuration']();}if(_0x133513[_0x15a3fa(0x362)]){const _0x1b0b1d=$gameTemp['getLastPluginCommandInterpreter']();if(_0x1b0b1d)_0x1b0b1d[_0x15a3fa(0x287)](_0x26da94+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1ea)]=function(_0x2961ab,_0xe77762,_0x1bf6aa,_0x4799ba,_0x236cd5){const _0x1b6f58=_0x53ce3c;_0xe77762=_0xe77762||0x1f4,_0x4799ba=_0x4799ba||0x1,_0x236cd5=_0x236cd5||0x3c,this['clearQueue'](),_0x2961ab?(this[_0x1b6f58(0x27f)]({'anchor':{'x':0.5,'y':0.5},'currentAngle':-_0x4799ba*0x168+this[_0x1b6f58(0x278)](),'moveX':this['_x']+(_0x1bf6aa?_0xe77762:-_0xe77762),'opacity':0x0,'duration':0x0}),this[_0x1b6f58(0x27f)]({'targetAngle':this[_0x1b6f58(0x278)](),'targetOpacity':this[_0x1b6f58(0x25f)]||0xff,'targetMoveX':this['_x'],'duration':_0x236cd5,'easingType':_0x1b6f58(0x1bc)})):this[_0x1b6f58(0x27f)]({'targetAngle':_0x4799ba*0x168+this[_0x1b6f58(0x278)](),'targetMoveX':this['_x']+(_0x1bf6aa?-_0xe77762:_0xe77762),'targetOpacity':0x0,'anchor':{'x':0.5,'y':0.5},'duration':_0x236cd5,'easingType':'Linear'});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],'Rotate',_0x5202d0=>{const _0x239e5a=_0x53ce3c;VisuMZ[_0x239e5a(0x210)](_0x5202d0,_0x5202d0);const _0xcf883b=_0x5202d0[_0x239e5a(0x275)];if(_0xcf883b['length']<=0x0)return;const _0xa1e6c1=_0x5202d0['Direction']===_0x239e5a(0x385),_0xf3134b=Math[_0x239e5a(0x256)](Number(_0x5202d0[_0x239e5a(0x1f0)]),0x1),_0x45dd89=Math[_0x239e5a(0x256)](Number(_0x5202d0[_0x239e5a(0x28a)]),0x1);let _0x31a0f6=0x0;for(const _0x5cf053 of _0xcf883b){const _0x159099=$gameScreen[_0x239e5a(0x334)](_0x5cf053);if(!_0x159099)continue;_0x159099[_0x239e5a(0x35b)](_0xa1e6c1,_0xf3134b,_0x45dd89),_0x31a0f6=_0x159099['getTotalQueueDuration']();}if(_0x5202d0[_0x239e5a(0x362)]){const _0x2579da=$gameTemp[_0x239e5a(0x373)]();if(_0x2579da)_0x2579da['wait'](_0x31a0f6+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x35b)]=function(_0x1afb4d,_0x47db7c,_0x336d1e){const _0x4a0eaf=_0x53ce3c;_0x47db7c=_0x47db7c||0x1,_0x336d1e=_0x336d1e||0x0,this[_0x4a0eaf(0x18c)](),this[_0x4a0eaf(0x27f)]({'targetAngle':this['anglePlus']()+(_0x1afb4d?-0x1:0x1)*(_0x47db7c*0x168),'duration':_0x336d1e,'easingType':_0x4a0eaf(0x1bc)}),this[_0x4a0eaf(0x27f)]({'currentAngle':this['anglePlus'](),'duration':0x0,'easingType':_0x4a0eaf(0x1bc)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Shakey',_0x59f4bc=>{const _0x145288=_0x53ce3c;VisuMZ[_0x145288(0x210)](_0x59f4bc,_0x59f4bc);const _0xf217c3=_0x59f4bc[_0x145288(0x275)];if(_0xf217c3['length']<=0x0)return;const _0x50a44b=Math[_0x145288(0x256)](Number(_0x59f4bc['Times']),0x1),_0x7578d8=Math[_0x145288(0x256)](Number(_0x59f4bc[_0x145288(0x280)]),0x1);let _0x197aa4=0x0;for(const _0x5bf55b of _0xf217c3){if(_0x145288(0x31c)===_0x145288(0x31c)){const _0x4b03f6=$gameScreen[_0x145288(0x334)](_0x5bf55b);if(!_0x4b03f6)continue;_0x4b03f6[_0x145288(0x16a)](_0x50a44b,_0x7578d8),_0x197aa4=_0x4b03f6[_0x145288(0x21e)]();}else this['updatePictureEffectsDepthChanges'](),this[_0x145288(0x182)]();}if(_0x59f4bc[_0x145288(0x362)]){if('uTmiZ'==='fzIri'){if(this[_0x145288(0x17e)]===_0x22d10a)this[_0x145288(0x37c)]();this[_0x145288(0x17e)]+=_0x4b34cc;}else{const _0x45f39a=$gameTemp['getLastPluginCommandInterpreter']();if(_0x45f39a)_0x45f39a[_0x145288(0x287)](_0x197aa4+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x16a)]=function(_0x449508,_0x49be39){const _0x13ef67=_0x53ce3c;_0x449508=_0x449508||0xa,_0x49be39=_0x49be39||0x8,this['clearQueue']();while(_0x449508--){this[_0x13ef67(0x27f)]({'targetMoveX':this['_x']+_0x49be39,'duration':0x2,'easingType':_0x13ef67(0x1bc)}),this[_0x13ef67(0x27f)]({'targetMoveX':this['_x']-_0x49be39,'duration':0x4,'easingType':_0x13ef67(0x1bc)});}this[_0x13ef67(0x27f)]({'targetMoveX':this['_x'],'duration':0x2});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],'Shrink_InOut',_0x2f8924=>{const _0x105e6a=_0x53ce3c;VisuMZ['ConvertParams'](_0x2f8924,_0x2f8924);const _0x53e43a=_0x2f8924[_0x105e6a(0x275)];if(_0x53e43a[_0x105e6a(0x23e)]<=0x0)return;const _0x17731e=_0x2f8924[_0x105e6a(0x26d)]==='In',_0x17e2f0=Math[_0x105e6a(0x256)](Number(_0x2f8924[_0x105e6a(0x28a)]),0x1);let _0xfbb778=0x0;for(const _0x3d393b of _0x53e43a){const _0x4c2755=$gameScreen[_0x105e6a(0x334)](_0x3d393b);if(!_0x4c2755)continue;_0x4c2755[_0x105e6a(0x19a)](_0x17731e,_0x17e2f0),_0xfbb778=_0x4c2755[_0x105e6a(0x21e)]();}if(_0x2f8924[_0x105e6a(0x362)]){if(_0x105e6a(0x17d)!==_0x105e6a(0x2ee)){const _0x176076=$gameTemp[_0x105e6a(0x373)]();if(_0x176076)_0x176076[_0x105e6a(0x287)](_0xfbb778+0x1);}else{_0x4d089d=_0x9f5275||0xa,_0x3685f5=_0x3e738c??0xa,_0x19e5ce=_0x1d0bbf??0xa,this[_0x105e6a(0x18c)](),this[_0x105e6a(0x27f)]({'targetTone':_0x1568f9['clone'](),'toneDuration':_0x5bf7ea/0x3*0x6,'duration':0x0});let _0x4fe32c=_0x5b1817;while(_0x3880ce--){this[_0x105e6a(0x27f)]({'targetMoveX':this['_x']+(_0x3a07a6[_0x105e6a(0x24e)]()>0.5?-0x1:0x1)*(_0x659318[_0x105e6a(0x351)](_0xb43412)+0x1),'targetMoveY':this['_y']+(_0x283919[_0x105e6a(0x24e)]()>0.5?-0x1:0x1)*(_0x129f46['randomInt'](_0x55a721)+0x1),'targetAngle':this[_0x105e6a(0x278)]()+_0x12e80f['randomInt'](_0x534142),'duration':0x2,'easingType':_0x105e6a(0x1bc)}),this['addToQueue']({'targetMoveX':this['_x']+(_0x48b0da['random']()>0.5?-0x1:0x1)*(_0x466e23[_0x105e6a(0x351)](_0x14d614)+0x1),'targetMoveY':this['_y']+(_0x4cb587[_0x105e6a(0x24e)]()>0.5?-0x1:0x1)*(_0x15632a['randomInt'](_0x34b425)+0x1),'targetAngle':this[_0x105e6a(0x278)]()-_0x232c7d['randomInt'](_0x1bddca),'duration':0x4,'easingType':'Linear'});}this[_0x105e6a(0x27f)]({'targetTone':this[_0x105e6a(0x32b)]?this[_0x105e6a(0x32b)][_0x105e6a(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x4fe32c/0x3*0x6,'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x105e6a(0x278)](),'duration':0x2,'easingType':'Linear'});}}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_ShrinkInOut']=function(_0x4368d9,_0x1d020f){const _0x54b03f=_0x53ce3c;_0x1d020f=_0x1d020f||0x14,this[_0x54b03f(0x18c)](),_0x4368d9?(this[_0x54b03f(0x27f)]({'scaleX':this['_scaleX']*0x4,'scaleY':this[_0x54b03f(0x282)]*0x4,'opacity':0x0,'duration':0x0,'easingType':'Linear'}),this[_0x54b03f(0x27f)]({'targetScaleX':this[_0x54b03f(0x301)],'targetScaleY':this[_0x54b03f(0x282)],'targetOpacity':this[_0x54b03f(0x25f)]||0xff,'duration':_0x1d020f,'easingType':_0x54b03f(0x19d)})):_0x54b03f(0x192)==='lMhXV'?this[_0x54b03f(0x27f)]({'targetScaleX':this[_0x54b03f(0x301)]*0.05,'targetScaleY':this[_0x54b03f(0x282)]*0.05,'targetOpacity':0x0,'duration':_0x1d020f,'easingType':'InOutSine'}):this[_0x54b03f(0x2b5)]();},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x17c),_0x1ac961=>{const _0x1bbc3f=_0x53ce3c;VisuMZ[_0x1bbc3f(0x210)](_0x1ac961,_0x1ac961);const _0x1c0321=_0x1ac961[_0x1bbc3f(0x275)];if(_0x1c0321[_0x1bbc3f(0x23e)]<=0x0)return;const _0x33943f=Math[_0x1bbc3f(0x256)](Number(_0x1ac961[_0x1bbc3f(0x306)]),0x1),_0x75e3f1=Math[_0x1bbc3f(0x256)](Number(_0x1ac961[_0x1bbc3f(0x280)]),0x1);let _0x1eb46e=0x0;for(const _0x2f7510 of _0x1c0321){const _0x42581f=$gameScreen[_0x1bbc3f(0x334)](_0x2f7510);if(!_0x42581f)continue;_0x42581f[_0x1bbc3f(0x2ff)](_0x33943f,_0x75e3f1),_0x1eb46e=_0x42581f[_0x1bbc3f(0x21e)]();}if(_0x1ac961[_0x1bbc3f(0x362)]){if(_0x1bbc3f(0x223)!==_0x1bbc3f(0x216)){const _0x61040b=$gameTemp['getLastPluginCommandInterpreter']();if(_0x61040b)_0x61040b[_0x1bbc3f(0x287)](_0x1eb46e+0x1);}else{const _0x5484d3=_0x3bf404[_0x1bbc3f(0x373)]();if(_0x5484d3)_0x5484d3[_0x1bbc3f(0x287)](_0x5694a9+0x1);}}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x2ff)]=function(_0x3d718f,_0xa476df){const _0x5641e5=_0x53ce3c;_0x3d718f=_0x3d718f||0xa,_0xa476df=_0xa476df||0xa,this[_0x5641e5(0x18c)]();while(_0x3d718f--){this['addToQueue']({'targetMoveX':this['_x']+(Math[_0x5641e5(0x24e)]()>0.5?-0x1:0x1)*(Math[_0x5641e5(0x351)](_0xa476df)+0x1),'targetMoveY':this['_y']+(Math[_0x5641e5(0x24e)]()>0.5?-0x1:0x1)*(Math[_0x5641e5(0x351)](_0xa476df)+0x1),'duration':0x2,'easingType':_0x5641e5(0x1bc)});}this['addToQueue']({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':0x2,'easingType':'Linear'});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x320),_0x300ba2=>{const _0x3aa7b2=_0x53ce3c;VisuMZ[_0x3aa7b2(0x210)](_0x300ba2,_0x300ba2);const _0x7c171c=_0x300ba2[_0x3aa7b2(0x275)];if(_0x7c171c[_0x3aa7b2(0x23e)]<=0x0)return;const _0x34905f=Number(_0x300ba2[_0x3aa7b2(0x1e2)])||0x0,_0x980c37=Number(_0x300ba2[_0x3aa7b2(0x2d8)])||0x0,_0x4efcc7=Number(_0x300ba2[_0x3aa7b2(0x18d)])||0x0,_0x2e5856=Math[_0x3aa7b2(0x256)](Number(_0x300ba2[_0x3aa7b2(0x28a)]),0x0);for(const _0x4b6251 of _0x7c171c){if('bIIWI'!=='gTGJx'){const _0x267416=$gameScreen[_0x3aa7b2(0x334)](_0x4b6251);if(!_0x267416)continue;_0x267416['changeSidestep'](_0x34905f,_0x980c37,_0x4efcc7,_0x2e5856);}else{const _0x120b9c=_0x3c0827[_0x3aa7b2(0x373)]();if(_0x120b9c)_0x120b9c['wait'](_0x2d5878+0x1);}}if(_0x300ba2['Wait']&&_0x2e5856>0x0){if(_0x3aa7b2(0x1a1)==='mlIEB')this[_0x3aa7b2(0x27f)]({'moveY':this['_y']+_0x26d309,'scaleX':this[_0x3aa7b2(0x301)]*1.2,'scaleY':this[_0x3aa7b2(0x282)]*1.5,'opacity':0x0,'duration':0x0,'easingType':_0x3aa7b2(0x1bc)}),this['addToQueue']({'targetMoveY':this['_y'],'targetScaleX':this[_0x3aa7b2(0x301)],'targetScaleY':this[_0x3aa7b2(0x282)],'targetOpacity':this[_0x3aa7b2(0x25f)]||0xff,'duration':_0x575376,'easingType':_0x3aa7b2(0x372)});else{const _0x418577=$gameTemp[_0x3aa7b2(0x373)]();if(_0x418577)_0x418577[_0x3aa7b2(0x287)](_0x2e5856);}}}),PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x181),_0x1fd6fa=>{const _0x395c2b=_0x53ce3c;VisuMZ['ConvertParams'](_0x1fd6fa,_0x1fd6fa);const _0x107b8e=_0x1fd6fa[_0x395c2b(0x275)];if(_0x107b8e[_0x395c2b(0x23e)]<=0x0)return;const _0x38182c=_0x1fd6fa[_0x395c2b(0x1e6)]||'';if(_0x38182c==='')return;const _0x511c5b=Number(_0x1fd6fa[_0x395c2b(0x1b3)]),_0x44099a=Math['max'](Number(_0x1fd6fa['Spins']),0x1),_0x528120=Math[_0x395c2b(0x256)](Number(_0x1fd6fa[_0x395c2b(0x28a)]),0x1);let _0x706687=0x0;for(const _0x10a9e3 of _0x107b8e){if(_0x395c2b(0x1e1)===_0x395c2b(0x2a1))this[_0x395c2b(0x27f)]({'duration':0x0,'targetTone':_0x125922[_0x395c2b(0x350)](),'toneDuration':_0x55a342/0xa,'currentBlur':_0x1ff6a8,'blendMode':0x1});else{const _0x1028ae=$gameScreen[_0x395c2b(0x334)](_0x10a9e3);if(!_0x1028ae)continue;_0x1028ae[_0x395c2b(0x295)](_0x38182c,_0x511c5b,_0x44099a,_0x528120),_0x706687=_0x1028ae[_0x395c2b(0x21e)]();}}if(_0x1fd6fa[_0x395c2b(0x362)]){const _0x475331=$gameTemp[_0x395c2b(0x373)]();if(_0x475331)_0x475331[_0x395c2b(0x287)](_0x706687+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x295)]=function(_0x1f4720,_0x49b0ba,_0x306562,_0xf87411){const _0x31b137=_0x53ce3c;ImageManager['loadPicture'](_0x1f4720),this[_0x31b137(0x18c)](),this[_0x31b137(0x27f)]({'targetAnchor':{'x':0.5,'y':0.5},'targetAngle':this[_0x31b137(0x278)]()+_0x306562*0x168,'targetScaleX':this[_0x31b137(0x301)]*_0x49b0ba,'targetScaleY':this[_0x31b137(0x282)]*_0x49b0ba,'duration':Math['ceil'](_0xf87411/0x2),'easingType':_0x31b137(0x19d)}),this['addToQueue']({'filename':_0x1f4720,'targetAnchor':JsonEx[_0x31b137(0x1eb)](this[_0x31b137(0x356)]),'currentAngle':this[_0x31b137(0x278)]()-_0x306562*0x168,'targetAngle':this[_0x31b137(0x278)](),'targetScaleX':this[_0x31b137(0x301)],'targetScaleY':this[_0x31b137(0x282)],'duration':Math[_0x31b137(0x178)](_0xf87411/0x2),'easingType':_0x31b137(0x19d)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1c7),_0x49ed9b=>{const _0x253f5e=_0x53ce3c;VisuMZ[_0x253f5e(0x210)](_0x49ed9b,_0x49ed9b);const _0x3968ef=_0x49ed9b[_0x253f5e(0x275)];if(_0x3968ef[_0x253f5e(0x23e)]<=0x0)return;const _0x546607=_0x49ed9b[_0x253f5e(0x26d)]==='In',_0x3a57d9=Math[_0x253f5e(0x256)](Number(_0x49ed9b[_0x253f5e(0x1f0)]),0x1),_0xf476c7=Number(_0x49ed9b[_0x253f5e(0x1b3)]),_0xfd1d5f=Math[_0x253f5e(0x256)](Number(_0x49ed9b[_0x253f5e(0x28a)]),0x1);let _0x3ab6a7=0x0;for(const _0x5b6b6f of _0x3968ef){const _0x2819fa=$gameScreen[_0x253f5e(0x334)](_0x5b6b6f);if(!_0x2819fa)continue;_0x2819fa[_0x253f5e(0x28c)](_0x546607,_0x3a57d9,_0xf476c7,_0xfd1d5f),_0x3ab6a7=_0x2819fa[_0x253f5e(0x21e)]();}if(_0x49ed9b['Wait']){const _0x12da4a=$gameTemp[_0x253f5e(0x373)]();if(_0x12da4a)_0x12da4a['wait'](_0x3ab6a7+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_SpinInOut']=function(_0xdb9aae,_0x3fb6d3,_0x1cc4ca,_0x583913){const _0x44cb95=_0x53ce3c;_0x3fb6d3=_0x3fb6d3||0x2,_0x1cc4ca=_0x1cc4ca||0.5,_0x583913=_0x583913||0x3c,this[_0x44cb95(0x18c)](),_0xdb9aae?(this['addToQueue']({'anchor':{'x':0.5,'y':0.5},'currentAngle':-_0x3fb6d3*0x168+this[_0x44cb95(0x278)](),'scaleX':this['_scaleX']*_0x1cc4ca,'scaleY':this[_0x44cb95(0x282)]*_0x1cc4ca,'opacity':0x0,'duration':0x0}),this[_0x44cb95(0x27f)]({'targetAngle':this[_0x44cb95(0x278)](),'targetOpacity':this[_0x44cb95(0x25f)]||0xff,'targetScaleX':this['_scaleX'],'targetScaleY':this['_scaleY'],'duration':_0x583913,'easingType':_0x44cb95(0x289)})):this[_0x44cb95(0x27f)]({'anchor':{'x':0.5,'y':0.5},'targetAngle':_0x3fb6d3*0x168+this[_0x44cb95(0x278)](),'targetOpacity':0x0,'targetScaleX':this[_0x44cb95(0x301)]*_0x1cc4ca,'targetScaleY':this['_scaleY']*_0x1cc4ca,'duration':_0x583913,'easingType':_0x44cb95(0x289)});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1a5),_0x4b57fd=>{const _0x18dc1=_0x53ce3c;VisuMZ[_0x18dc1(0x210)](_0x4b57fd,_0x4b57fd);const _0x251d77=_0x4b57fd['PictureIDs'];if(_0x251d77[_0x18dc1(0x23e)]<=0x0)return;const _0x2a7249=_0x4b57fd['EffectIn']==='In',_0x3d5a3e=Math[_0x18dc1(0x256)](Number(_0x4b57fd[_0x18dc1(0x28a)]),0x1);let _0x455d9b=0x0;for(const _0x8bcdc6 of _0x251d77){if(_0x18dc1(0x332)!==_0x18dc1(0x33f)){const _0x58f147=$gameScreen['picture'](_0x8bcdc6);if(!_0x58f147)continue;_0x58f147['setupEffect_SquishInOut'](_0x2a7249,_0x3d5a3e),_0x455d9b=_0x58f147['getTotalQueueDuration']();}else this[_0x18dc1(0x27f)]({'targetOpacity':0x0,'targetScaleX':this[_0x18dc1(0x301)]*1.5,'targetScaleY':this[_0x18dc1(0x282)]*1.5,'duration':_0x35d265,'targetBlur':0xa,'blurDuration':_0x537ae5,'easingType':_0x18dc1(0x19d)});}if(_0x4b57fd[_0x18dc1(0x362)]){const _0x134f91=$gameTemp[_0x18dc1(0x373)]();if(_0x134f91)_0x134f91[_0x18dc1(0x287)](_0x455d9b+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x336)]=function(_0x4e5494,_0x3d702b){const _0x18613b=_0x53ce3c;_0x3d702b=_0x3d702b||0x14,this['clearQueue'](),_0x4e5494?(this[_0x18613b(0x27f)]({'scaleX':this['_scaleX']*0x4,'opacity':0x0,'duration':0x0,'easingType':_0x18613b(0x1bc)}),this[_0x18613b(0x27f)]({'targetScaleX':this[_0x18613b(0x301)],'targetOpacity':this[_0x18613b(0x25f)]||0xff,'duration':_0x3d702b,'easingType':_0x18613b(0x19d)})):'RJbur'===_0x18613b(0x386)?(this[_0x18613b(0x18c)](),this[_0x18613b(0x27f)]({'setZ':_0x210e98,'duration':_0xc417f0,'targetTone':_0x48cb81[_0x18613b(0x350)](),'toneDuration':_0x1b45aa})):this['addToQueue']({'targetScaleX':this[_0x18613b(0x301)]*0.05,'targetOpacity':0x0,'duration':_0x3d702b,'easingType':'InOutSine'});},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],'Stretch_InOut',_0x3a0395=>{const _0xe4e94c=_0x53ce3c;VisuMZ['ConvertParams'](_0x3a0395,_0x3a0395);const _0x1574ca=_0x3a0395[_0xe4e94c(0x275)];if(_0x1574ca[_0xe4e94c(0x23e)]<=0x0)return;const _0x93bb67=_0x3a0395[_0xe4e94c(0x26d)]==='In',_0x57d51d=Math[_0xe4e94c(0x256)](Number(_0x3a0395[_0xe4e94c(0x28a)]),0x1);let _0x2073bb=0x0;for(const _0x367ec2 of _0x1574ca){const _0xfd2e7b=$gameScreen[_0xe4e94c(0x334)](_0x367ec2);if(!_0xfd2e7b)continue;_0xfd2e7b['setupEffect_StretchInOut'](_0x93bb67,_0x57d51d),_0x2073bb=_0xfd2e7b['getTotalQueueDuration']();}if(_0x3a0395[_0xe4e94c(0x362)]){const _0x514e0e=$gameTemp[_0xe4e94c(0x373)]();if(_0x514e0e)_0x514e0e[_0xe4e94c(0x287)](_0x2073bb+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1be)]=function(_0x1d11e3,_0x152e04){const _0x51a7b3=_0x53ce3c;_0x152e04=_0x152e04||0x14,this[_0x51a7b3(0x18c)]();if(_0x1d11e3)this[_0x51a7b3(0x27f)]({'scaleX':this[_0x51a7b3(0x301)]*0.05,'opacity':0x0,'duration':0x0,'easingType':_0x51a7b3(0x1bc)}),this[_0x51a7b3(0x27f)]({'targetScaleX':this[_0x51a7b3(0x301)],'targetOpacity':this['_opacity']||0xff,'duration':_0x152e04,'easingType':_0x51a7b3(0x19d)});else{if(_0x51a7b3(0x2e2)==='jMdwu')this['addToQueue']({'targetScaleX':this[_0x51a7b3(0x301)]*0x4,'targetOpacity':0x0,'duration':_0x152e04,'easingType':_0x51a7b3(0x19d)});else{if(_0x3254ba['_z']!==_0x1e694f['_z'])return _0x5bb00c['_z']-_0x3364d9['_z'];return _0x5a9e04[_0x51a7b3(0x26f)]-_0x50b0df[_0x51a7b3(0x26f)];}}},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x190),_0x466a5f=>{const _0x4362ed=_0x53ce3c;VisuMZ[_0x4362ed(0x210)](_0x466a5f,_0x466a5f);const _0xdc9be5=_0x466a5f['PictureIDs'];if(_0xdc9be5[_0x4362ed(0x23e)]<=0x0)return;const _0x54c88e=_0x466a5f[_0x4362ed(0x26d)]==='In',_0x1675e3=_0x466a5f[_0x4362ed(0x31d)]||[0x0,0x80,0xa0,0x0],_0x410dee=Math['max'](Number(_0x466a5f[_0x4362ed(0x28a)]),0xa);let _0x2e1dc3=0x0;for(const _0xa02356 of _0xdc9be5){if(_0x4362ed(0x1e8)==='vsnui'){const _0x25dcf7=$gameScreen[_0x4362ed(0x334)](_0xa02356);if(!_0x25dcf7)continue;_0x25dcf7[_0x4362ed(0x1fd)](_0x54c88e,_0x1675e3,_0x410dee),_0x2e1dc3=_0x25dcf7[_0x4362ed(0x21e)]();}else this[_0x4362ed(0x27f)]({'targetMoveX':this['_x'],'targetScaleX':this[_0x4362ed(0x301)]*0.8,'targetScaleY':this[_0x4362ed(0x282)]*1.2,'targetOpacity':0xc0,'duration':0xa,'easingType':_0x4362ed(0x1bc)}),this[_0x4362ed(0x27f)]({'targetMoveX':this['_x']+(_0x5dcd7e?-0x1:0x1)*_0x57150f[_0x4362ed(0x27d)],'targetScaleX':this[_0x4362ed(0x301)]*1.2,'targetScaleY':this['_scaleY']*0.1,'targetOpacity':0x0,'duration':0x14});}if(_0x466a5f[_0x4362ed(0x362)]){const _0x112099=$gameTemp[_0x4362ed(0x373)]();if(_0x112099)_0x112099[_0x4362ed(0x287)](_0x2e1dc3+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x1fd)]=function(_0x3cd125,_0x39463a,_0x777806){const _0x325657=_0x53ce3c;_0x777806=_0x777806||0x3c,this['clearQueue'](),_0x3cd125?_0x325657(0x1f9)!=='CvIcr'?this[_0x325657(0x27f)]({'moveY':Graphics[_0x325657(0x374)],'targetMoveY':this['_y'],'opacity':0x0,'targetOpacity':this[_0x325657(0x25f)]||0xff,'duration':_0x777806,'tone':_0x39463a[_0x325657(0x350)](),'targetTone':this[_0x325657(0x32b)]?this['_tone'][_0x325657(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x777806,'easingType':'OutBack'}):this['addToQueue']({'targetTone':_0xfa2a7f[_0x325657(0x350)](),'toneDuration':_0x11b1de,'targetMoveY':_0x29e86e[_0x325657(0x374)],'targetOpacity':0x0,'duration':_0x3cab37,'blendMode':this['_blendMode'],'easingType':_0x325657(0x339)}):this['addToQueue']({'targetTone':_0x39463a[_0x325657(0x350)](),'toneDuration':_0x777806,'targetMoveY':Graphics[_0x325657(0x374)],'targetOpacity':0x0,'duration':_0x777806,'blendMode':this[_0x325657(0x26a)],'easingType':'InBack'});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x1f7),_0x578ee8=>{const _0x4a9058=_0x53ce3c;VisuMZ[_0x4a9058(0x210)](_0x578ee8,_0x578ee8);const _0x85ec37=_0x578ee8[_0x4a9058(0x275)];if(_0x85ec37[_0x4a9058(0x23e)]<=0x0)return;const _0x4e2cbf=Number(_0x578ee8[_0x4a9058(0x1bb)])||0x0,_0x37390b=Number(_0x578ee8[_0x4a9058(0x2d8)])||0x0,_0x11f076=Number(_0x578ee8[_0x4a9058(0x18d)])||0x0,_0x91175e=Math[_0x4a9058(0x256)](Number(_0x578ee8['Duration']),0x0);for(const _0x3e3337 of _0x85ec37){if(_0x4a9058(0x305)===_0x4a9058(0x2c4))_0x27a99d=_0x24508b??0x1e,_0x5b497c=_0x4f765d??0x5,_0x3b4b8f=_0x1bf4f4??0x2,this[_0x4a9058(0x18c)](),this[_0x4a9058(0x27f)]({'anchor':{'x':0.5,'y':0.5},'scaleX':this[_0x4a9058(0x301)]*0.1,'scaleY':this[_0x4a9058(0x282)]*0.1,'opacity':0x0,'blendMode':0x0,'duration':0x0,'easingType':_0x4a9058(0x1bc)}),this[_0x4a9058(0x27f)]({'targetMoveX':_0x3db81c[_0x4a9058(0x27d)]*(_0x4f02d?0.25:0.75),'targetMoveY':_0x19d2ae[_0x4a9058(0x374)]*0.5,'targetScaleX':this[_0x4a9058(0x301)]*_0x38354d,'targetScaleY':this[_0x4a9058(0x282)]*_0x2b0b94,'targetOpacity':this[_0x4a9058(0x25f)]*0x4,'targetAngle':_0x41658b+0x168*_0x25bafd,'duration':0x3c}),this[_0x4a9058(0x27f)]({'targetOpacity':this[_0x4a9058(0x25f)]||0xff,'duration':0xa}),this['addToQueue']({'targetMoveX':_0x463c43[_0x4a9058(0x27d)]*0.5,'targetMoveY':(_0x35980b[_0x4a9058(0x374)]-0xe6)/0x2,'targetScaleX':this[_0x4a9058(0x301)],'targetScaleY':this[_0x4a9058(0x282)],'targetAngle':0x0,'duration':0x28}),this[_0x4a9058(0x27f)]({'targetMoveX':_0x261621[_0x4a9058(0x27d)]*0.5,'targetMoveY':(_0x489914[_0x4a9058(0x374)]-0x14a)/0x2,'targetScaleX':this[_0x4a9058(0x301)]*1.2,'targetScaleY':this[_0x4a9058(0x301)]*1.2,'duration':0xa}),this['addToQueue']({'duration':0x5}),this[_0x4a9058(0x27f)]({'targetAngle':-0xa,'duration':0x4}),this[_0x4a9058(0x27f)]({'targetAngle':0xa,'duration':0x8}),this[_0x4a9058(0x27f)]({'targetAngle':0x0,'duration':0x4}),this[_0x4a9058(0x27f)]({'targetMoveX':_0x4f4cd3[_0x4a9058(0x27d)]*0.5,'targetMoveY':_0x57dc07['height']/0x2,'targetScaleX':this[_0x4a9058(0x301)]*0x2,'targetScaleY':this[_0x4a9058(0x282)]*0.3,'duration':0xa}),this[_0x4a9058(0x27f)]({'duration':0x5}),this['addToQueue']({'targetMoveY':(_0x68eb78[_0x4a9058(0x374)]-0xb4)/0x2,'targetScaleX':this[_0x4a9058(0x301)]*0.8,'targetScaleY':this['_scaleY']*1.2,'duration':0x5}),this['addToQueue']({'targetScaleX':this[_0x4a9058(0x301)],'targetScaleY':this[_0x4a9058(0x282)],'duration':0xa});else{const _0x416208=$gameScreen['picture'](_0x3e3337);if(!_0x416208)continue;_0x416208[_0x4a9058(0x1c9)](_0x4e2cbf,_0x37390b,_0x11f076,_0x91175e);}}if(_0x578ee8[_0x4a9058(0x362)]&&_0x91175e>0x0){if(_0x4a9058(0x19f)!=='igXpT')this['addToQueue']({'duration':0x0,'easingType':'Linear'});else{const _0x2044c7=$gameTemp[_0x4a9058(0x373)]();if(_0x2044c7)_0x2044c7['wait'](_0x91175e);}}}),PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],_0x53ce3c(0x37b),_0x503525=>{const _0x2fa2e2=_0x53ce3c;VisuMZ['ConvertParams'](_0x503525,_0x503525);const _0xd150bb=_0x503525[_0x2fa2e2(0x275)];if(_0xd150bb[_0x2fa2e2(0x23e)]<=0x0)return;const _0x5a7259=_0x503525['EffectIn']==='In',_0x104d17=_0x503525[_0x2fa2e2(0x31d)]||[0xf0,0xf0,0xf0,0x0],_0xed8b96=Math[_0x2fa2e2(0x256)](Number(_0x503525['Duration']),0x1);let _0x3d654e=0x0;for(const _0x380969 of _0xd150bb){const _0x219e49=$gameScreen[_0x2fa2e2(0x334)](_0x380969);if(!_0x219e49)continue;_0x219e49[_0x2fa2e2(0x342)](_0x5a7259,_0x104d17,_0xed8b96),_0x3d654e=_0x219e49['getTotalQueueDuration']();}if(_0x503525['Wait']){const _0x15e31c=$gameTemp[_0x2fa2e2(0x373)]();if(_0x15e31c)_0x15e31c[_0x2fa2e2(0x287)](_0x3d654e+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x342)]=function(_0x1f792d,_0x1ff77c,_0x440e54){const _0x5cf025=_0x53ce3c;_0x440e54=_0x440e54||0x3c,this[_0x5cf025(0x18c)]();if(_0x1f792d){if(_0x5cf025(0x16f)!=='tvlhX'){const _0x10ebac=_0x32a0c4[_0x5cf025(0x373)]();if(_0x10ebac)_0x10ebac['wait'](_0x534725+0x1);}else this[_0x5cf025(0x27f)]({'opacity':0x0,'duration':0x0,'currentBlur':0xa}),this[_0x5cf025(0x27f)]({'opacity':this[_0x5cf025(0x25f)]||0xff,'duration':_0x440e54,'tone':_0x1ff77c[_0x5cf025(0x350)](),'targetBlur':0x0,'blurDuration':_0x440e54,'targetTone':this[_0x5cf025(0x32b)]?this['_tone'][_0x5cf025(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x440e54,'easingType':'Linear'});}else{if(_0x5cf025(0x229)!==_0x5cf025(0x229)){_0xaeab92=_0x301dea||0xa,_0x5e1e28=_0xd31a23||0xa,this[_0x5cf025(0x18c)]();while(_0x5c1bd0--){this[_0x5cf025(0x27f)]({'targetMoveX':this['_x']+(_0x4e0d8a[_0x5cf025(0x24e)]()>0.5?-0x1:0x1)*(_0xb20a1a[_0x5cf025(0x351)](_0xde321a)+0x1),'targetMoveY':this['_y']+(_0x2fe137[_0x5cf025(0x24e)]()>0.5?-0x1:0x1)*(_0x186dfa[_0x5cf025(0x351)](_0x13ac57)+0x1),'duration':0x2,'easingType':_0x5cf025(0x1bc)});}this[_0x5cf025(0x27f)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':0x2,'easingType':'Linear'});}else this[_0x5cf025(0x27f)]({'duration':_0x440e54,'targetTone':_0x1ff77c[_0x5cf025(0x350)](),'toneDuration':_0x440e54,'targetBlur':0xa,'blurDuration':_0x440e54,'easingType':_0x5cf025(0x1bc)}),this[_0x5cf025(0x27f)]({'duration':0x0,'opacity':0x0,'tone':this[_0x5cf025(0x32b)]?this[_0x5cf025(0x32b)][_0x5cf025(0x350)]():[0x0,0x0,0x0,0x0],'currentBlur':0x0});}},PluginManager[_0x53ce3c(0x1a7)](pluginData['name'],'Television_InOut',_0x30e5ae=>{const _0x5219f5=_0x53ce3c;VisuMZ[_0x5219f5(0x210)](_0x30e5ae,_0x30e5ae);const _0x1d0bc2=_0x30e5ae['PictureIDs'];if(_0x1d0bc2[_0x5219f5(0x23e)]<=0x0)return;const _0x46206a=_0x30e5ae[_0x5219f5(0x26d)]==='In',_0xdd092b=Math[_0x5219f5(0x256)](Number(_0x30e5ae[_0x5219f5(0x28a)]),0x1);let _0x3876ac=0x0;for(const _0x26742d of _0x1d0bc2){const _0x512ccf=$gameScreen[_0x5219f5(0x334)](_0x26742d);if(!_0x512ccf)continue;_0x512ccf[_0x5219f5(0x219)](_0x46206a,_0xdd092b),_0x3876ac=_0x512ccf[_0x5219f5(0x21e)]();}if(_0x30e5ae[_0x5219f5(0x362)]){const _0x595cc1=$gameTemp['getLastPluginCommandInterpreter']();if(_0x595cc1)_0x595cc1[_0x5219f5(0x287)](_0x3876ac+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x219)]=function(_0x13e0af,_0x4b0b95){const _0x490fdd=_0x53ce3c;_0x4b0b95=_0x4b0b95||0x14,this['clearQueue'](),_0x13e0af?'rjyVL'!==_0x490fdd(0x25e)?(this[_0x490fdd(0x27f)]({'opacity':0x0,'scaleX':this[_0x490fdd(0x301)]*1.5,'scaleY':this[_0x490fdd(0x282)]*1.5,'currentBlur':0xa,'duration':0x0}),this['addToQueue']({'targetOpacity':this[_0x490fdd(0x25f)]||0xff,'targetScaleX':this['_scaleX'],'targetScaleY':this['_scaleY'],'duration':_0x59e904,'targetBlur':0x0,'blurDuration':_0x5bddf1,'easingType':'InOutSine'})):(this[_0x490fdd(0x27f)]({'scaleX':this[_0x490fdd(0x301)]*0xa,'scaleY':this[_0x490fdd(0x282)]*0.05,'opacity':this[_0x490fdd(0x25f)]||0xff,'duration':0x0,'currentBlur':0xa,'easingType':'Linear'}),this[_0x490fdd(0x27f)]({'targetScaleX':this[_0x490fdd(0x301)],'targetScaleY':this[_0x490fdd(0x282)],'duration':_0x4b0b95,'targetBlur':0x0,'blurDuration':_0x4b0b95,'easingType':_0x490fdd(0x220)})):_0x490fdd(0x268)===_0x490fdd(0x1af)?(this[_0x490fdd(0x282)]=_0x4786df[_0x490fdd(0x20a)](_0xf59da4['scaleY']),this[_0x490fdd(0x21c)]=_0x2dbce4['round'](_0x5f3cb4[_0x490fdd(0x212)])):(this[_0x490fdd(0x27f)]({'targetScaleX':this['_scaleX']*0xa,'targetScaleY':this['_scaleY']*0.05,'duration':_0x4b0b95-0x2,'targetBlur':0xa,'blurDuration':_0x4b0b95-0x2,'easingType':_0x490fdd(0x1a9)}),this[_0x490fdd(0x27f)]({'targetOpacity':0x0,'duration':0x2,'targetBlur':0x0,'easingType':'Linear'}));},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x31a),_0x5bb5d2=>{const _0x304ca0=_0x53ce3c;VisuMZ[_0x304ca0(0x210)](_0x5bb5d2,_0x5bb5d2);const _0x122a61=_0x5bb5d2[_0x304ca0(0x275)];if(_0x122a61[_0x304ca0(0x23e)]<=0x0)return;const _0x5422be=Number(_0x5bb5d2['Z'])||0x0,_0x551ebd=_0x5bb5d2[_0x304ca0(0x31d)]||[0x0,0x0,0x0,0x0],_0x3d094f=Math['max'](Number(_0x5bb5d2[_0x304ca0(0x28a)]),0x1);let _0x3d1ae9=0x0;for(const _0x1905e5 of _0x122a61){const _0x31a751=$gameScreen[_0x304ca0(0x334)](_0x1905e5);if(!_0x31a751)continue;_0x31a751[_0x304ca0(0x2c8)](_0x5422be,_0x551ebd,_0x3d094f),_0x3d1ae9=_0x31a751[_0x304ca0(0x21e)]();}if(_0x5bb5d2[_0x304ca0(0x362)]){const _0x524945=$gameTemp[_0x304ca0(0x373)]();if(_0x524945)_0x524945[_0x304ca0(0x287)](_0x3d1ae9+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_TintShiftBy']=function(_0x2767a9,_0x3032dd,_0x5bcccc){const _0x57b3f7=_0x53ce3c;this['clearQueue'](),this['addToQueue']({'changeZ':_0x2767a9,'duration':_0x5bcccc,'targetTone':_0x3032dd[_0x57b3f7(0x350)](),'toneDuration':_0x5bcccc});},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],'Tint_Shift_To',_0x436ad9=>{const _0x43c3ff=_0x53ce3c;VisuMZ[_0x43c3ff(0x210)](_0x436ad9,_0x436ad9);const _0x2f9876=_0x436ad9[_0x43c3ff(0x275)];if(_0x2f9876[_0x43c3ff(0x23e)]<=0x0)return;const _0x28d791=Number(_0x436ad9['Z'])||0x0,_0x1a9636=_0x436ad9[_0x43c3ff(0x31d)]||[0x0,0x0,0x0,0x0],_0x4bb85b=Math[_0x43c3ff(0x256)](Number(_0x436ad9[_0x43c3ff(0x28a)]),0x1);let _0x3a4f20=0x0;for(const _0x56bba7 of _0x2f9876){const _0x3bbbb5=$gameScreen[_0x43c3ff(0x334)](_0x56bba7);if(!_0x3bbbb5)continue;_0x3bbbb5['setupEffect_TintShiftTo'](_0x28d791,_0x1a9636,_0x4bb85b),_0x3a4f20=_0x3bbbb5[_0x43c3ff(0x21e)]();}if(_0x436ad9[_0x43c3ff(0x362)]){const _0x428b60=$gameTemp[_0x43c3ff(0x373)]();if(_0x428b60)_0x428b60['wait'](_0x3a4f20+0x1);}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_TintShiftTo']=function(_0x5a974a,_0xe76c29,_0x15e10e){const _0x55ad27=_0x53ce3c;this[_0x55ad27(0x18c)](),this['addToQueue']({'setZ':_0x5a974a,'duration':_0x15e10e,'targetTone':_0xe76c29[_0x55ad27(0x350)](),'toneDuration':_0x15e10e});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x361),_0x1114b4=>{const _0x49c17c=_0x53ce3c;VisuMZ[_0x49c17c(0x210)](_0x1114b4,_0x1114b4);const _0x204c65=_0x1114b4[_0x49c17c(0x275)];if(_0x204c65[_0x49c17c(0x23e)]<=0x0)return;const _0x3082c8=_0x1114b4[_0x49c17c(0x1e6)]||'';if(_0x3082c8==='')return;let _0x1a2211=0x0;for(const _0x3c7ca3 of _0x204c65){if(_0x49c17c(0x20c)==='KTXys')this[_0x49c17c(0x1a6)][_0x49c17c(0x170)]=_0x5ab9b0[_0x49c17c(0x20a)](_0x3a6ca9[_0x49c17c(0x299)]),this[_0x49c17c(0x1a6)][_0x49c17c(0x20f)]=_0x1db393[_0x49c17c(0x20a)](_0x5deefd[_0x49c17c(0x299)]);else{const _0x1e5fd5=$gameScreen[_0x49c17c(0x334)](_0x3c7ca3);if(!_0x1e5fd5)continue;_0x1e5fd5['setupEffect_Transform'](_0x3082c8),_0x1a2211=_0x1e5fd5[_0x49c17c(0x21e)]();}}if(_0x1114b4['Wait']){const _0x166536=$gameTemp[_0x49c17c(0x373)]();if(_0x166536)_0x166536[_0x49c17c(0x287)](_0x1a2211+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x260)]=function(_0x42092f){const _0x273b75=_0x53ce3c;this[_0x273b75(0x18c)]();const _0x291ff5=ImageManager[_0x273b75(0x33c)](_0x42092f);_0x291ff5[_0x273b75(0x25c)](this[_0x273b75(0x27f)][_0x273b75(0x18b)](this,{'filename':_0x42092f,'duration':0x0,'easingType':'Linear'}));},PluginManager['registerCommand'](pluginData['name'],_0x53ce3c(0x354),_0x473ca3=>{const _0x2f22dc=_0x53ce3c;VisuMZ[_0x2f22dc(0x210)](_0x473ca3,_0x473ca3);const _0x45bafc=_0x473ca3[_0x2f22dc(0x275)];if(_0x45bafc[_0x2f22dc(0x23e)]<=0x0)return;const _0x4fbd4c=_0x473ca3[_0x2f22dc(0x26d)]==='In',_0x4152e5=_0x473ca3[_0x2f22dc(0x31d)]||[0x44,0x44,0x80,0x0],_0x93f3ad=Math[_0x2f22dc(0x256)](Number(_0x473ca3['Duration']),0xa);let _0x15469f=0x0;for(const _0x40d377 of _0x45bafc){const _0xd38ac2=$gameScreen[_0x2f22dc(0x334)](_0x40d377);if(!_0xd38ac2)continue;_0xd38ac2[_0x2f22dc(0x221)](_0x4fbd4c,_0x4152e5,_0x93f3ad),_0x15469f=_0xd38ac2[_0x2f22dc(0x21e)]();}if(_0x473ca3['Wait']){const _0x31983e=$gameTemp[_0x2f22dc(0x373)]();if(_0x31983e)_0x31983e[_0x2f22dc(0x287)](_0x15469f+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x221)]=function(_0xa68b03,_0x93fa61,_0x48ae64){const _0xa4d082=_0x53ce3c;_0x48ae64=_0x48ae64||0x3c,this['clearQueue'](),_0xa68b03?(this[_0xa4d082(0x27f)]({'moveY':0x0,'targetMoveY':this['_y'],'opacity':0x0,'targetOpacity':this[_0xa4d082(0x25f)]||0xff,'duration':_0x48ae64*0.9,'tone':_0x93fa61[_0xa4d082(0x350)](),'blendMode':0x1,'easingType':'InOutSine'}),this[_0xa4d082(0x27f)]({'tone':[0xff,0xff,0xff,0x0],'targetTone':this[_0xa4d082(0x32b)]?this[_0xa4d082(0x32b)][_0xa4d082(0x350)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x48ae64*0.1,'blendMode':this[_0xa4d082(0x26a)],'duration':_0x48ae64*0.1})):(this[_0xa4d082(0x27f)]({'targetTone':[0xff,0xff,0xff,0x0],'toneDuration':_0x48ae64*0.1,'duration':_0x48ae64*0.1,'blendMode':this[_0xa4d082(0x26a)]}),this['addToQueue']({'targetMoveY':0x0,'targetOpacity':0x0,'duration':_0x48ae64*0.9,'targetTone':_0x93fa61[_0xa4d082(0x350)](),'toneDuration':_0x48ae64*0.1,'blendMode':0x1,'easingType':'InOutSine'}));},PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x25d),_0x216882=>{const _0x448b78=_0x53ce3c;VisuMZ[_0x448b78(0x210)](_0x216882,_0x216882);const _0x1397ae=_0x216882[_0x448b78(0x275)];if(_0x1397ae['length']<=0x0)return;const _0x31b3fc=Math[_0x448b78(0x256)](Number(_0x216882[_0x448b78(0x306)]),0x1),_0x50cd0a=Math[_0x448b78(0x256)](Number(_0x216882[_0x448b78(0x1e2)]),0x1),_0x472d33=Math['max'](Number(_0x216882['DistanceY']),0x1);let _0x5b221e=0x0;for(const _0x3f7947 of _0x1397ae){const _0x51ca7b=$gameScreen[_0x448b78(0x334)](_0x3f7947);if(!_0x51ca7b)continue;_0x51ca7b[_0x448b78(0x2cf)](_0x31b3fc,_0x50cd0a,_0x472d33),_0x5b221e=_0x51ca7b[_0x448b78(0x21e)]();}if(_0x216882['Wait']){if(_0x448b78(0x283)!=='ekKVa'){const _0x46d789=_0x5c22dd[_0x448b78(0x373)]();if(_0x46d789)_0x46d789[_0x448b78(0x287)](_0x2b2dad+0x1);}else{const _0x185bb8=$gameTemp[_0x448b78(0x373)]();if(_0x185bb8)_0x185bb8['wait'](_0x5b221e+0x1);}}}),Game_Picture[_0x53ce3c(0x233)]['setupEffect_Vibrate']=function(_0x5f3af3,_0x2043a9,_0x2168d4){const _0x4792a7=_0x53ce3c;_0x5f3af3=_0x5f3af3||0x1,_0x2043a9=_0x2043a9??0x18,_0x2168d4=_0x2168d4??0xc,this[_0x4792a7(0x18c)]();const _0x648747=_0x5f3af3/0x2;while(_0x5f3af3--){const _0xe47b5c=0x1-Math[_0x4792a7(0x21d)](_0x5f3af3-_0x648747)/_0x648747;this[_0x4792a7(0x27f)]({'moveX':this['_x']+(Math['random']()>0.5?-0x1:0x1)*(_0x2043a9*_0xe47b5c),'moveY':this['_y']+(Math['random']()>0.5?-0x1:0x1)*(_0x2168d4*_0xe47b5c),'duration':0x1,'easingType':'Linear'});}this['addToQueue']({'moveX':this['_x'],'moveY':this['_y'],'duration':0x1});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x2ed),_0x30f362=>{const _0x409c16=_0x53ce3c;VisuMZ[_0x409c16(0x210)](_0x30f362,_0x30f362);const _0x421bb8=_0x30f362['PictureIDs'];if(_0x421bb8[_0x409c16(0x23e)]<=0x0)return;const _0x328e9d=Math['max'](Number(_0x30f362[_0x409c16(0x306)]),0x1),_0x26c35=Math['max'](Number(_0x30f362[_0x409c16(0x2e3)]),0x1);let _0x4542d5=0x0;for(const _0x13db4d of _0x421bb8){const _0x1a6098=$gameScreen[_0x409c16(0x334)](_0x13db4d);if(!_0x1a6098)continue;_0x1a6098[_0x409c16(0x184)](_0x328e9d,_0x26c35),_0x4542d5=_0x1a6098[_0x409c16(0x21e)]();}if(_0x30f362['Wait']){const _0x32925f=$gameTemp[_0x409c16(0x373)]();if(_0x32925f)_0x32925f['wait'](_0x4542d5+0x1);}}),Game_Picture[_0x53ce3c(0x233)][_0x53ce3c(0x184)]=function(_0xf48a24,_0x577e8f){const _0x1fd921=_0x53ce3c;_0xf48a24=_0xf48a24||0xa,_0x577e8f=_0x577e8f||0xa,this[_0x1fd921(0x18c)]();while(_0xf48a24--){_0x1fd921(0x244)===_0x1fd921(0x1fc)?(_0x55aaa1=_0x983dea||0x28,_0x4f80d8=_0x5a7a49??0x28,_0x1a253c=_0x3a66e9['max'](_0x494b97,0xa),this['clearQueue'](),this[_0x1fd921(0x27f)]({'targetMoveY':this['_y']-_0x341103,'duration':(_0x4d220c-0x2)/0x2,'easingType':_0x1fd921(0x29b)}),this[_0x1fd921(0x27f)]({'targetMoveY':this['_y']+_0x3b8910['min'](_0x3ebcab/0x2,0xa),'duration':(_0x238faa-0x2)/0x2,'easingType':_0x1fd921(0x315)}),this[_0x1fd921(0x27f)]({'targetMoveY':this['_y'],'duration':0x2,'easingType':_0x1fd921(0x1bc)})):(this[_0x1fd921(0x27f)]({'targetAngle':this[_0x1fd921(0x278)]()+_0x577e8f,'duration':0x2,'easingType':'Linear'}),this[_0x1fd921(0x27f)]({'targetAngle':this[_0x1fd921(0x278)]()-_0x577e8f,'duration':0x4,'easingType':_0x1fd921(0x1bc)}));}this[_0x1fd921(0x27f)]({'targetAngle':this[_0x1fd921(0x278)](),'duration':0x2});},PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x2b6),_0x3f49c1=>{const _0x89ab79=_0x53ce3c;VisuMZ[_0x89ab79(0x210)](_0x3f49c1,_0x3f49c1);const _0x14acb3=_0x3f49c1[_0x89ab79(0x275)];if(_0x14acb3[_0x89ab79(0x23e)]<=0x0)return;const _0x43ada5=Number(_0x3f49c1['Z'])||0x0;for(const _0x1df5cd of _0x14acb3){if('DjMPz'===_0x89ab79(0x23f))this[_0x89ab79(0x18c)](),_0x5ad2fe?this[_0x89ab79(0x27f)]({'duration':0x0,'easingType':_0x89ab79(0x1bc)}):this[_0x89ab79(0x27f)]({'duration':0x0,'easingType':_0x89ab79(0x1bc)});else{const _0x5a8a7b=$gameScreen[_0x89ab79(0x334)](_0x1df5cd);if(!_0x5a8a7b)continue;_0x5a8a7b['setZ'](_0x43ada5);}}}),PluginManager[_0x53ce3c(0x1a7)](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x33d),_0x5a3de8=>{const _0x52146c=_0x53ce3c;VisuMZ[_0x52146c(0x210)](_0x5a3de8,_0x5a3de8);const _0x3d6241=_0x5a3de8['PictureIDs'];if(_0x3d6241['length']<=0x0)return;const _0x562e51=Number(_0x5a3de8['Z'])||0x0;for(const _0x23a2dd of _0x3d6241){const _0x46ea35=$gameScreen[_0x52146c(0x334)](_0x23a2dd);if(!_0x46ea35)continue;_0x46ea35['setZ'](_0x562e51);}}),PluginManager['registerCommand'](pluginData[_0x53ce3c(0x201)],_0x53ce3c(0x2f8),_0x28e058=>{const _0x3348d9=_0x53ce3c;VisuMZ[_0x3348d9(0x210)](_0x28e058,_0x28e058);const _0x205397=_0x28e058['PictureIDs'];if(_0x205397[_0x3348d9(0x23e)]<=0x0)return;const _0x4f29e2=_0x28e058[_0x3348d9(0x26d)]==='In',_0x4cd9e9=Math['max'](Number(_0x28e058[_0x3348d9(0x28a)]),0x1);let _0x36b0db=0x0;for(const _0x4a3112 of _0x205397){const _0x584bc6=$gameScreen[_0x3348d9(0x334)](_0x4a3112);if(!_0x584bc6)continue;_0x584bc6[_0x3348d9(0x263)](_0x4f29e2,_0x4cd9e9),_0x36b0db=_0x584bc6[_0x3348d9(0x21e)]();}if(_0x28e058[_0x3348d9(0x362)]){const _0x595106=$gameTemp[_0x3348d9(0x373)]();if(_0x595106)_0x595106[_0x3348d9(0x287)](_0x36b0db+0x1);}}),Game_Picture['prototype'][_0x53ce3c(0x263)]=function(_0x2a8a88,_0x35e7c8){const _0x527af5=_0x53ce3c;_0x35e7c8=_0x35e7c8||0x14,_0x35e7c8=Math[_0x527af5(0x256)](_0x35e7c8,0xa),this[_0x527af5(0x18c)]();if(_0x2a8a88)this[_0x527af5(0x27f)]({'opacity':0x0,'scaleX':this['_scaleX']*1.5,'scaleY':this[_0x527af5(0x282)]*1.5,'currentBlur':0xa,'duration':0x0}),this['addToQueue']({'targetOpacity':this[_0x527af5(0x25f)]||0xff,'targetScaleX':this[_0x527af5(0x301)],'targetScaleY':this[_0x527af5(0x282)],'duration':_0x35e7c8,'targetBlur':0x0,'blurDuration':_0x35e7c8,'easingType':_0x527af5(0x19d)});else{if(_0x527af5(0x370)===_0x527af5(0x32d)){_0x39d869=_0x16310f||0x1,this[_0x527af5(0x18c)]();while(_0x36e461--){let _0x4a0a96=_0x53d686[_0x527af5(0x351)](_0x33f2c2['width']/0x2)+_0x18391d[_0x527af5(0x27d)]/0x4,_0xf87320=_0x3d471c[_0x527af5(0x351)](_0x5a87b3[_0x527af5(0x374)]/0x2)+_0x266df3[_0x527af5(0x374)]/0x4,_0x509774=(_0x457a48[_0x527af5(0x24e)]()>0.5?-0x1:0x1)*_0x28790d[_0x527af5(0x351)](_0x53978a[_0x527af5(0x20a)](_0x19a089['width']/0xa)),_0x3f1ec6=(_0x3298c5[_0x527af5(0x24e)]()>0.5?-0x1:0x1)*_0x5e6b02[_0x527af5(0x351)](_0x4d5d3c[_0x527af5(0x20a)](_0xe7f332[_0x527af5(0x374)]/0xa));const _0xef35c4=_0x46e095[_0x527af5(0x24e)]()*0.3+0.5;this[_0x527af5(0x27f)]({'moveX':_0x4a0a96,'moveY':_0xf87320,'scaleX':this[_0x527af5(0x301)]*_0xef35c4,'scaleY':this[_0x527af5(0x282)]*_0xef35c4,'opacity':0x0,'currentBlur':0xa,'duration':0x0}),this['addToQueue']({'targetMoveX':_0x4a0a96+_0x509774/0x2,'targetMoveY':_0xf87320+_0x3f1ec6/0x2,'targetOpacity':this['_opacity']||0xff,'targetBlur':0x3,'blurDuration':_0x3326c4[_0x527af5(0x266)](_0x21e4c1/0x2),'duration':_0x57d9fe[_0x527af5(0x266)](_0x26d717/0x2)}),this[_0x527af5(0x27f)]({'targetMoveX':_0x4a0a96+_0x509774,'targetMoveY':_0xf87320+_0x3f1ec6,'targetOpacity':0x0,'targetBlur':0xa,'blurDuration':_0x479ab4[_0x527af5(0x178)](_0x4a2abd/0x2),'duration':_0x50d605[_0x527af5(0x178)](_0x15c45d/0x2)});}this[_0x527af5(0x27f)]({'moveX':this['_x'],'moveY':this['_y'],'scaleX':this[_0x527af5(0x301)],'scaleY':this['_scaleY'],'opacity':0x0,'currentBlur':0xa,'duration':0x0}),this[_0x527af5(0x27f)]({'targetOpacity':this[_0x527af5(0x25f)]||0xff,'duration':_0x19951b,'targetBlur':0x0,'blurDuration':_0xb4209b,'easingType':_0x527af5(0x1bc)});}else this[_0x527af5(0x27f)]({'targetOpacity':0x0,'targetScaleX':this[_0x527af5(0x301)]*1.5,'targetScaleY':this[_0x527af5(0x282)]*1.5,'duration':_0x35e7c8,'targetBlur':0xa,'blurDuration':_0x35e7c8,'easingType':_0x527af5(0x19d)});}};