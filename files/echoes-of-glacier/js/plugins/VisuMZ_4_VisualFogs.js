//=============================================================================
// VisuStella MZ - Visual Fogs
// VisuMZ_4_VisualFogs.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualFogs = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualFogs = VisuMZ.VisualFogs || {};
VisuMZ.VisualFogs.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.11] [VisualFogs]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Fogs_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Fogs are a handy feature long removed from RPG Maker since RPG Maker XP.
 * This plugin reintroduces them back into RPG Maker MZ. Fogs function similar
 * to parallaxes, except rather than being under the tile map, fogs appear
 * above the tile map and the characters. This plugin gives you an unlimited
 * amount of fogs to apply to each map alongside many controls to make the fogs
 * appear more vivid.
 * 
 * A restricted fog area system is also added to this plugin to make fogs
 * appear only within certain regions and/or terrain tags. This way, you can
 * utilize parallaxes as masked layers for obscured sections of the map.
 * 
 * Sometimes, fogs may be too intrusive to the player's visibility. A vignette
 * feature has been added to make fogs appear only on the borders or certain
 * sides of the screen. This way, fogs can still add to the atmosphere without
 * obscuring too much of the visible screen.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add, change, and/or remove fogs through map notetags.
 * * Lots of customization options for each of the fogs.
 * * Limit where fogs can be displayed on the map through regions and/or
 *   terrain tags to obscure parts of the map.
 * * Use vignettes to obscure sides of the screen without affecting the center.
 * * Use Plugin Commands midway through the game to add, change, fade, and/or
 *   remove fogs as needed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * Fogs
 * 
 * Fogs are not an inherent feature for the map editor. They need to be added
 * through map notetags or Plugin Commands.
 * 
 * Each of the fogs added through this plugin's notetags and/or commands are
 * assigned an ID. Referring back to the ID later will allow you to update
 * and/or remove that fog when needed.
 * 
 * When fogs are created, they appear above the tile map and characters, but
 * below the weather. This means they are created between the two layers when
 * the map's sprites are generated.
 * 
 * Fogs will behave very similar to parallaxes in how they move about the
 * screen. This means that if a fog is set to looping, it will loop in
 * accordance to the screen's display coordinates. This is to maintain
 * consistency with how the RPG Maker MZ engine behaves.
 *
 * ---
 * 
 * Regions and Terrain Tags
 * 
 * If you don't want a fog to appear for the whole entire foreground and want
 * to confine them to certain areas of the map, you can assign regions or
 * terrain tags for them to appear in.
 * 
 * *NOTE*: This effect does not work on looping maps.
 * 
 * Only the parts of the map marked by the designated regions and/or terrain
 * tags will reveal the fog. Those parts will be little squares each,
 * equal to the size of a tile. They have soft borders due to blurring options.
 * The foggy tiles will be slightly larger than normal due to spill values.
 * 
 * You may notice that some tiles don't blur well when they are towards the
 * right and bottom sides of the screen when the blur values are higher than
 * normal. This is a known issue with Pixi JS's filters and there's not much
 * the VisuStella team can do about it. Instead, what we recommend is that you
 * use a fog vignette on an upper layer to mask the bleeding issue.
 * 
 * Each fog layer can have their own custom regions and/or terrain tags to
 * appear in. These can be adjusted through the notetag settings or through the
 * Plugin Commands provided by this plugin. Fog layers can be limited to
 * multiple regions and/or terrain tags at the same time.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Vignettes
 * 
 * If you don't want fogs to obscure the whole screen, use a vignette to make
 * them appear only at the sides of the screen. You can use custom vignette
 * masks or rendered ones provided by this plugin.
 * 
 * If you decide to make a custom vignette mask, create them similar to regular
 * image masks. This means that white areas of the masking image will be the
 * parts of the screen where the fog appears while the black areas of the image
 * will hide the fog. You can use gradients to make the vignette mask appear
 * more smooth.
 * 
 * Vignettes cannot be used with region and terrain tags. This is because the
 * region and terrain tag tiles move alongside the screen while vignettes are
 * always locked onto the borders of the screen. However, if you wish to use
 * both, just apply two different fog layers instead.
 * 
 * ---
 * 
 * Not For Battle
 * 
 * For clarification, the VisuStella MZ Visual Fogs plugin is NOT made for
 * battle. There's a separate plugin for that called Visual Battle Environment.
 * The reason why fogs aren't made for battle is because the way fogs are
 * handled in map vary from how they would be handled in battle. Using the
 * Visual Fogs Plugin Commands will only alter the fog appearances when the
 * player finishes battle.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Fog-Related Notetags ===
 * 
 * ---
 *
 * <Fog id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Fog id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a regular fog layer for this map by default.
 * - Replace 'id' with a number value to assign to the fog.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no fog will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a fog found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 *
 * ---
 * 
 * -=-=- Optional Properties -=-=-
 * 
 * Replace the 'optional property' segment of the notetags above with any of
 * the text below to acquire their effects. You can add/remove as many of the
 * optional properties as you need.
 * 
 * ---
 * 
 * Horz Scroll: x
 * Vert Scroll: y
 * 
 * - This enables horizontal or vertical scrolling for the fog.
 * - Replace 'x' or 'y' with a Number value to determine how fast they will
 *   scroll across the screen.
 * - Use a negative value to make them scroll the other way.
 * - These effects are mutually exclusive from the "Map Locked" property.
 * 
 * ---
 * 
 * Map Locked
 * 
 * - This will cause the fog to only scroll when the map scrolls.
 * - This has the same effect as naming a fog with "!" in front of
 *   its filename.
 * - If the filename used for this fog has "!" in front of it, the
 *   Map Locked effect will be automatically turned on.
 * - These effect is mutually exclusive from the "Horz Scroll" and
 *   "Vert Scroll" properties.
 * 
 * ---
 * 
 * Opacity: x
 * Opacity: x%
 * 
 * - Changes the opacity level of the fog.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * 
 * ---
 * 
 * Blend Mode: Normal
 * Blend Mode: Additive
 * Blend Mode: Multiply
 * Blend Mode: Screen
 * 
 * - Sets the blend mode for the icon on the fog.
 * - Use only one of the above.
 * 
 * ---
 * 
 * Hue: x
 * Hue Shift: x
 * 
 * - Changes the hue of the fog to 'x' so that you don't need to create
 *   multiple copies of the files with different colors.
 * - Replace 'x' with a number value between 0 and 360.
 * - If the "Hue Shift" property is also used, then adjust the hue of the
 *   fog each frame by 'x' amount.
 *   - 'x' can be positive or negative.
 * 
 * ---
 * 
 * Color Tone: red, green, blue, gray
 * 
 * - Changes the color tone or tint of the fog.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * 
 * ---
 * 
 * Region: id
 * Regions: id, id, id
 * 
 * - Forces the fog to only become visible on tiles marked regions with a
 *   matching ID (alongside valid terrain tags).
 * - If this isn't used, then the fog will be as large as the screen.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the fog can appear on.
 * - This feature cannot be used with Vignettes.
 * - This feature cannot be used with looping maps.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Terrain Tag: id
 * Terrain Tags: id, id, id
 * 
 * - Forces the fog to only become visible on tiles marked terrain tags
 *   with a matching ID (alongside valid regions).
 * - If this isn't used, then the fog will be as large as the screen.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the fog can appear on.
 * - This feature cannot be used with Vignettes.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Tile Blur: x
 * 
 * - Determines how soft the borders are around the revealed fog tiles.
 * - Use larger numbers to blur them more.
 * - Use a value of zero to remove any blur.
 * 
 * ---
 * 
 * Tile Spill: x
 * 
 * - Determines how much larger to make the revealed fog tiles.
 * - Use larger numbers to spill more and make the tiles larger.
 * - Use a value of zero to not spill at all and use the exact tile sizes.
 * 
 * ---
 * 
 * Vignette: type
 * 
 * - Makes the fog appear along the edge of the screen rather than the entire
 *   visible game screen.
 * - Replace 'type' with any of the following:
 *   - Border
 *   - Horizontal
 *   - Vertical
 *   - Upper
 *   - Lower
 *   - Left
 *   - Right
 * 
 * ---
 * 
 * Custom Vignette: filename
 * 
 * - Allows you to use a custom parallax image as a vignette.
 * - Replace 'filename' with the filename of the image you want to use as
 *   a vignette found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Custom vignettes are used as masks.
 *   - White areas on the image determine the visible parts of the fog.
 *   - Black areas on the image determine the invisible parts of the fog.
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
 * === Fog Plugin Commands ===
 * 
 * ---
 *
 * Fog: Add/Change Settings
 * - Add/Change settings for target fog.
 * - Does not alter the map editor's fog.
 *
 *   Required:
 *
 *     ID:
 *     - What is the ID of this fog to be added/changed?
 *
 *     Filename:
 *     - What is the filename of the fog?
 * 
 *   Optional Settings:
 * 
 *     Scrolling:
 * 
 *       Map Lock?:
 *       - Lock the fog to the map's scrolling?
 *       - Automatically enable if the filename starts with "!"
 *
 *       Loop Horizontally?:
 *       - Loop the fog horizontally?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the horizontal scroll speed?
 *         - Use a negative value to invert the direction.
 *
 *       Loop Vertically?:
 *       - Loop the fog vertically?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the vertical scroll speed?
 *         - Use a negative value to invert the direction.
 * 
 *     Appearance:
 *
 *       Opacity:
 *       - What is the opacity level for this fog?
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the fog?
 *       - You may use JavaScript code.
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Hue:
 *       - Do you wish to adjust this fog's hue?
 *       - You may use JavaScript code.
 *
 *       Hue Shift:
 *       - How much do you want the hue to shift each frame?
 *       - You may use JavaScript code.
 *
 *       Color Tone:
 *       - What tone do you want for the fog?
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Location:
 *
 *       Regions:
 *       - Which regions will show this fog?
 *       - Does not work with 0. Leave empty to ignore.
 *
 *       Terrain Tags:
 *       - Which terrain tags will show this fog?
 *       - Does not work with 0. Leave empty to ignore.
 * 
 *       Tile Blur:
 *       - What's the blur level you wish to use for tiles?
 *       - You may use JavaScript code.
 * 
 *       Tile Spill:
 *       - What's the spill amount you wish to use for tiles?
 *       - You may use JavaScript code.
 * 
 *     Vignette:
 *
 *       Type:
 *       - What vignette do you want to use for this fog?
 *       - This will override location settings.
 * 
 *       Custom:
 *       - Do you wish to use a custom vignette instead?
 *       - Automatically changes the type to "Custom".
 *
 * ---
 * 
 * Fog: Fade Opacity
 * - Fades the target fog(s) opacity to a different value.
 * 
 *   ID(s):
 *   - Target which fog(s)?
 *   - Cannot target the map editor's fog.
 * 
 *   Target Opacity:
 *   - What opacity level to this value (0-255).
 *   - You may use JavaScript code to determine the value.
 * 
 *   Duration:
 *   - How many frames should this change take?
 *   - You may use JavaScript code to determine the value.
 * 
 * ---
 *
 * Fog: Remove
 * - Removes target fog(s).
 *
 *   ID(s):
 *   - Remove which fog(s)?
 *   - Cannot remove the map editor's fog.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Settings
 * ============================================================================
 *
 * The below are the default settings when it comes to creating fogs through
 * map notetags.
 *
 * ---
 *
 * Defaults
 * 
 *   Fog Opacity:
 *   - What is the default fog opacity level for map notetags?
 * 
 *   Blend Mode:
 *   - What is the default fog blend mode for map notetags?
 *     - Normal
 *     - Additive
 *     - Multiply
 *     - Screen
 * 
 *   Tile Blur:
 *   - What is the default fog tile blur intensity for map notetags?
 * 
 *   Tile Spill:
 *   - What is the default fog tile spill amount for map notetags?
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.11: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where having a '!' at the start of a fog graphic file's name
 *    did not automatically incur map lock when done from plugin commands.
 *    Fix made by Arisu.
 * 
 * Version 1.10: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.09: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon using the "Return to Title
 *    Screen" event command with the "Event Title Screen" plugin installed. Fix
 *    made by Irina.
 * 
 * Version 1.08: June 15, 2023
 * * Bug Fixes!
 * ** Fixes a visual bug involving the borders with the zoom animation upon
 *    entering a random encounter. Fix made by Arisu.
 * 
 * Version 1.07: August 4, 2022
 * * Compatibility Update!
 * ** Vignettes now work better with zoom.
 * 
 * Version 1.06: July 7, 2022
 * * Feature Update!
 * ** Blend modes are now revamped for the fogs to behave more like they do for
 *    pictures for better accuracy. Update made by Irina.
 * 
 * Version 1.05: December 9, 2021
 * * Documentation Update!
 * ** Added section to "Major Changes" for clarification purposes:
 * *** Not For Battle
 * *** For clarification, the VisuStella MZ Visual Fogs plugin is NOT made for
 *     battle. There's a separate plugin for that called Visual Battle
 *     Environment. The reason why fogs aren't made for battle is because the
 *     way fogs are handled in map vary from how they would be handled in
 *     battle. Using the Visual Fogs Plugin Commands will only alter the fog
 *     appearances when the player finishes battle.
 * * Feature Update!
 * ** Added fail safes to prevent Plugin Command usage during battle to cause
 *    problems while inside battle test. Update made by Irina.
 * 
 * Version 1.04: June 25, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for Event Title Scene.
 * 
 * Version 1.03: May 28, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: May 21, 2021
 * * Documentation Update!
 * ** Added a clause we forgot to mention that region-locked fog effects only
 *    work on maps with no looping. A note will be added to the "Regions and
 *    Terrain Tags" and notetag sections. We apologize for any inconveniences
 *    this may cause.
 * 
 * Version 1.01: May 7, 2021
 * * Bug Fixes!
 * ** Cached vignettes will no longer be cleared from memory. Fix by Irina.
 *
 * Version 1.00 Official Release Date: March 5, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FogAddChangeSettings
 * @text Fog: Add/Change Settings
 * @desc Add/Change settings for target fog.
 * Does not alter the map editor's fog.
 * 
 * @arg Required
 *
 * @arg id:num
 * @text ID
 * @parent Required
 * @type number
 * @min 1
 * @desc What is the ID of this fog to be added/changed?
 * @default 1
 *
 * @arg filename:str
 * @text Filename
 * @parent Required
 * @type file
 * @dir img/parallaxes/
 * @desc What is the filename of the fog?
 * @default >>>ATTENTION<<<
 *
 * @arg Optional:struct
 * @text Optional Settings
 * @type struct<Optional>
 * @desc Optional settings regarding Visual Fogs.
 * @default {"Scrolling":"","_fogZero:eval":"false","_fogLoopX:eval":"false","_fogSx:eval":"+0","_fogLoopY:eval":"false","_fogSy:eval":"+0","Appearance":"","opacity:eval":"200","blendMode:eval":"1","hue:eval":"0","hueShift:eval":"+0","colorTone:eval":"[0, 0, 0, 0]","Location":"","maskRegions:arraynum":"[]","maskTerrainTags:arraynum":"[]","maskBlur:eval":"10","maskSpill:eval":"10","Vignette":"","vignette:str":"None","vignetteFilename:str":""}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FogFadeOpacity
 * @text Fog: Fade Opacity
 * @desc Fades the target fog(s) opacity to a different value.
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Target which fog(s)?
 * Cannot target the map editor's fog.
 * @default ["1"]
 *
 * @arg targetOpacity:eval
 * @text Target Opacity
 * @desc What opacity level to this value (0-255).
 * You may use JavaScript code to determine the value.
 * @default 255
 *
 * @arg opacityDuration:eval
 * @text Duration
 * @desc How many frames should this change take?
 * You may use JavaScript code to determine the value.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FogRemove
 * @text Fog: Remove
 * @desc Removes target fog(s).
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Remove which fog(s)?
 * Cannot remove the map editor's fog.
 * @default ["1"]
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
 * @param VisualFogs
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Defaults
 *
 * @param FogOpacity:num
 * @text Fog Opacity
 * @parent Defaults
 * @type number
 * @max 255
 * @desc What is the default fog opacity level for map notetags?
 * @default 200
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Defaults
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What is the default fog blend mode for map notetags?
 * @default 1
 *
 * @param MaskBlur:num
 * @text Tile Blur
 * @parent Defaults
 * @type number
 * @desc What is the default fog tile blur intensity for map notetags?
 * @default 10
 *
 * @param MaskSpill:num
 * @text Tile Spill
 * @parent Defaults
 * @type number
 * @desc What is the default fog tile spill amount for map notetags?
 * @default 10
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Optional Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Optional:
 * 
 * @param Scrolling
 * 
 * @param _fogZero:eval
 * @text Map Lock?
 * @parent Scrolling
 * @type boolean
 * @on Map Lock
 * @off No Map Lock
 * @desc Lock the fog to the map's scrolling?
 * Automatically enable if the filename starts with "!"
 * @default false
 * 
 * @param _fogLoopX:eval
 * @text Loop Horizontally?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the fog horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _fogSx:eval
 * @text Scroll:
 * @parent _fogLoopX:eval
 * @desc What is the horizontal scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param _fogLoopY:eval
 * @text Loop Vertically?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the fog horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _fogSy:eval
 * @text Scroll:
 * @parent _fogLoopY:eval
 * @desc What is the vertical scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param Appearance
 *
 * @param opacity:eval
 * @text Opacity
 * @parent Appearance
 * @desc What is the opacity level for this fog?
 * You may use JavaScript code.
 * @default 200
 *
 * @param blendMode:eval
 * @text Blend Mode
 * @parent Appearance
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the fog?
 * You may use JavaScript code.
 * @default 1
 *
 * @param hue:eval
 * @text Hue
 * @parent Appearance
 * @desc Do you wish to adjust this fog's hue?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hueShift:eval
 * @text Hue Shift
 * @parent hue:eval
 * @desc How much do you want the hue to shift each frame?
 * You may use JavaScript code.
 * @default +0
 *
 * @param colorTone:eval
 * @text Color Tone
 * @parent Appearance
 * @desc What tone do you want for the fog?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 * 
 * @param Location
 *
 * @param maskRegions:arraynum
 * @text Regions
 * @parent Location
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions will show this fog?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Location
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags will show this fog?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskBlur:eval
 * @text Tile Blur
 * @parent Location
 * @desc What's the blur level you wish to use for tiles?
 * You may use JavaScript code.
 * @default 10
 *
 * @param maskSpill:eval
 * @text Tile Spill
 * @parent Location
 * @desc What's the spill amount you wish to use for tiles?
 * You may use JavaScript code.
 * @default 10
 * 
 * @param Vignette
 *
 * @param vignette:str
 * @text Type
 * @parent Vignette
 * @type select
 * @option None
 * @option Border
 * @option Horizontal
 * @option Vertical
 * @option Upper
 * @option Lower
 * @option Left
 * @option Right
 * @desc What vignette do you want to use for this fog?
 * This will override location settings.
 * @default None
 *
 * @param vignetteFilename:str
 * @text Custom
 * @parent Vignette
 * @type file
 * @dir img/parallaxes/
 * @desc Do you wish to use a custom vignette instead?
 * Automatically changes the type to "Custom".
 * @default 
 *
 */
//=============================================================================

const _0x17b336=_0x1fbe;(function(_0x588fed,_0x5cba09){const _0x3d7f47=_0x1fbe,_0x5b52b=_0x588fed();while(!![]){try{const _0xdba05f=-parseInt(_0x3d7f47(0x143))/0x1+parseInt(_0x3d7f47(0x17a))/0x2*(-parseInt(_0x3d7f47(0x170))/0x3)+parseInt(_0x3d7f47(0x155))/0x4*(-parseInt(_0x3d7f47(0x142))/0x5)+parseInt(_0x3d7f47(0x15d))/0x6+parseInt(_0x3d7f47(0x15e))/0x7*(-parseInt(_0x3d7f47(0x1b6))/0x8)+-parseInt(_0x3d7f47(0x1c0))/0x9*(-parseInt(_0x3d7f47(0x19b))/0xa)+parseInt(_0x3d7f47(0x222))/0xb;if(_0xdba05f===_0x5cba09)break;else _0x5b52b['push'](_0x5b52b['shift']());}catch(_0x2ed411){_0x5b52b['push'](_0x5b52b['shift']());}}}(_0x9fb3,0x93db6));var label=_0x17b336(0x15c),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x17b336(0x1b3)](function(_0x26cb65){const _0x346f08=_0x17b336;return _0x26cb65[_0x346f08(0x1e6)]&&_0x26cb65['description'][_0x346f08(0x1c1)]('['+label+']');})[0x0];function _0x1fbe(_0x25111b,_0x284e58){const _0x9fb319=_0x9fb3();return _0x1fbe=function(_0x1fbeed,_0x45837b){_0x1fbeed=_0x1fbeed-0x140;let _0x32c047=_0x9fb319[_0x1fbeed];return _0x32c047;},_0x1fbe(_0x25111b,_0x284e58);}function _0x9fb3(){const _0x53ae38=['scrollUp','opacity','updateOrigin','DEFAULT_FOG_OPACITY','rSssc','Game_Map_setDisplayPos','right','isLoopHorizontal','updateOpacity','BYaqu','egyIg','createMaskTileBitmap','_maskSprite','scrollLeft','map','OgOXP','3711230MJzDeV','VmLJZ','displayY','XzcKf','zoomScale','MaskSpill','HYfCW','MmHcc','OpacityRate','fDYzB','ARRAYSTRUCT','dSJdb','VisuMZ_2_TileGrafterSystem','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_createColorFilter','Game_Map_scrollUp','FogFadeOpacity','ARRAYNUM','find','bitmap','updateBlendMode','KlFyW','return\x200','hue','filter','prototype','uRKCW','5023888uwKkwa','MaskBlur','blendMode','hasOwnProperty','lower','MaskTerrainTags','_colorFilter','constructor','settings','isSceneMap','9HxFoCz','includes','displayX','removeVisualFogLayer','removeVisualFog','HueShift','WEBpn','_hue','nrLhB','maskBlur','_grafterRefreshRegions','ScrollLock','setupVisualFogs','hkizF','format','BlurFilter','initialize','updateMask','#ffffff','MrzrU','children','AnbEk','ARRAYEVAL','setColorTone','puLaD','TMRYg','parse','_fogY','update','_fogZero','rgba(0,\x200,\x200,\x200)','SpriteMaskFilter','vignetteFilename','_id','JSON','tteOs','match','hrson','status','Game_Map_setup','PremadeVignette','scrollDown','Jnond','createFogContainer','hueShift','setup','VBBBR','tileHeight','>>>ATTENTION<<<','scrollRight','ConvertParams','Tone','Game_Map_scrollDown','eyWZo','list','updateParallax','maskRegions','DEFAULT_FOG_BLEND_MODE','isInstanceOfSceneMap','xWHcD','round','BlendMode','kSdOh','custom','origin','createNewFogLayer','mLXKW','HorzLoop','_fogLoopY','updateTone','createMaskBitmap','NORMAL','_colorTone','clamp','ARRAYJSON','xUlPo','horizontal','yeyoi','FUNC','trim','getFogVignette_right','_updateColorFilter','blur','NUM','split','HkSwu','create','OpacityFlat','indexOf','getFogVignette_vertical','exit','_fogLoopX','getFogVignette_%1','_visualFogSettings','_fogSx','empty','note','_displayX','24113364JmNXLb','_maskFilter','getFogVignette_lower','FogAddChangeSettings','vcBeo','_baseSprite','fillRect','border','getFogVignette','Spriteset_Map_createWeather','call','jBedN','filename','_displayY','sortVisualFogs','_fogVignettes','addChild','getVisualFogs','name','clone','DEFAULT_FOG_TILE_BLUR','sort','floor','upper','BmanP','colorTone','tkERH','setHue','CustomVignette','isLoopVertical','width','charAt','maskTerrainTags','STR','updateHue','wqtIP','DEFAULT_FOG_TILE_SPILL','max','height','MaskRegions','STRUCT','Game_Map_scrollLeft','loadCustomVignette','End','njlqC','NMLOK','GMlSs','VisuMZ_4_MapCameraZoom','MlNPV','UBLRu','YOfJM','Settings','TemplateSettings','getVisualFogOx','scale','equals','getVisualFogOy','terrainTag','Filename','Optional','RVdMX','makeDeepCopy','gradientFillRect','toLowerCase','1555wDGlnL','1168185AfAGbB','findTargetVisualFog','createFogLayers','oxhqv','olcQP','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','FogRemove','_customModified','vignette','tileWidth','setDisplayPos','createMaskSprite','loadBitmap','registerCommand','opacityDuration','getFogVignette_empty','left','ceil','9652npZkRG','_spriteset','_fogSy','Argument\x20must\x20be\x20an\x20array','targetOpacity','addLoadListener','Game_Map_scrollRight','VisualFogs','6897360kYnwDL','7YkwGjT','ARRAYSTR','wASiN','OxPFB','createWeather','zIbSA','none','loadParallax','move','tqwPH','getVisualFogSettings','MULTIPLY','screenTileX','kdNAB','updateVisualFogSettings','_fogName','_fogX','loadTemplateVignette','99GxXXWp','AmjbO','_scene','_blurFilter','maskSpill','XLqZS','SCREEN','_fogContainer','filters','updateVisualFogLayer','33974sYigfY','length','toUpperCase','ggxjP','ADDITIVE','getFogVignette_horizontal','push','screenTileY','RegExp','UMqGd','bind','YSoeN','version','removeChild','DvDAT','_fogDataRef','oQyFF'];_0x9fb3=function(){return _0x53ae38;};return _0x9fb3();}VisuMZ[label]['Settings']=VisuMZ[label][_0x17b336(0x255)]||{},VisuMZ[_0x17b336(0x1f2)]=function(_0x111a57,_0x12a298){const _0x5f278e=_0x17b336;for(const _0x434587 in _0x12a298){if(_0x434587[_0x5f278e(0x1e4)](/(.*):(.*)/i)){if(_0x5f278e(0x25e)===_0x5f278e(0x19e))_0x3404c8['_fogX']+=_0x5b6d34[_0x5f278e(0x21e)]/this[_0x5f278e(0x14c)]()/0x2;else{const _0x3b1e35=String(RegExp['$1']),_0x2c1fcc=String(RegExp['$2'])[_0x5f278e(0x17c)]()['trim']();let _0x5484df,_0x23ad4b,_0x567407;switch(_0x2c1fcc){case _0x5f278e(0x213):_0x5484df=_0x12a298[_0x434587]!==''?Number(_0x12a298[_0x434587]):0x0;break;case _0x5f278e(0x1ac):_0x23ad4b=_0x12a298[_0x434587]!==''?JSON[_0x5f278e(0x1da)](_0x12a298[_0x434587]):[],_0x5484df=_0x23ad4b[_0x5f278e(0x199)](_0x4edeb1=>Number(_0x4edeb1));break;case'EVAL':_0x5484df=_0x12a298[_0x434587]!==''?eval(_0x12a298[_0x434587]):null;break;case _0x5f278e(0x1d6):_0x23ad4b=_0x12a298[_0x434587]!==''?JSON[_0x5f278e(0x1da)](_0x12a298[_0x434587]):[],_0x5484df=_0x23ad4b[_0x5f278e(0x199)](_0x5771c1=>eval(_0x5771c1));break;case _0x5f278e(0x1e2):_0x5484df=_0x12a298[_0x434587]!==''?JSON[_0x5f278e(0x1da)](_0x12a298[_0x434587]):'';break;case _0x5f278e(0x20a):_0x23ad4b=_0x12a298[_0x434587]!==''?JSON[_0x5f278e(0x1da)](_0x12a298[_0x434587]):[],_0x5484df=_0x23ad4b[_0x5f278e(0x199)](_0x45c9b0=>JSON[_0x5f278e(0x1da)](_0x45c9b0));break;case _0x5f278e(0x20e):_0x5484df=_0x12a298[_0x434587]!==''?new Function(JSON[_0x5f278e(0x1da)](_0x12a298[_0x434587])):new Function(_0x5f278e(0x1b1));break;case'ARRAYFUNC':_0x23ad4b=_0x12a298[_0x434587]!==''?JSON[_0x5f278e(0x1da)](_0x12a298[_0x434587]):[],_0x5484df=_0x23ad4b['map'](_0x46c470=>new Function(JSON[_0x5f278e(0x1da)](_0x46c470)));break;case _0x5f278e(0x243):_0x5484df=_0x12a298[_0x434587]!==''?String(_0x12a298[_0x434587]):'';break;case _0x5f278e(0x15f):_0x23ad4b=_0x12a298[_0x434587]!==''?JSON['parse'](_0x12a298[_0x434587]):[],_0x5484df=_0x23ad4b[_0x5f278e(0x199)](_0x22209f=>String(_0x22209f));break;case _0x5f278e(0x24a):_0x567407=_0x12a298[_0x434587]!==''?JSON[_0x5f278e(0x1da)](_0x12a298[_0x434587]):{},_0x5484df=VisuMZ['ConvertParams']({},_0x567407);break;case _0x5f278e(0x1a5):_0x23ad4b=_0x12a298[_0x434587]!==''?JSON['parse'](_0x12a298[_0x434587]):[],_0x5484df=_0x23ad4b[_0x5f278e(0x199)](_0x4db31d=>VisuMZ[_0x5f278e(0x1f2)]({},JSON[_0x5f278e(0x1da)](_0x4db31d)));break;default:continue;}_0x111a57[_0x3b1e35]=_0x5484df;}}}return _0x111a57;},(_0x2807d6=>{const _0x34ec01=_0x17b336,_0x4b6524=_0x2807d6[_0x34ec01(0x234)];for(const _0x45eb0f of dependencies){if(_0x34ec01(0x23c)!==_0x34ec01(0x23c)){const _0x415e78=_0x28fe2a(_0x2410c0['$1']);if(_0x415e78>0x0&&_0x415e78===_0x18ee82['id']&&_0x3e35c4[_0x34ec01(0x22e)]!=='')_0x10395a[_0x34ec01(0x180)](_0x5d32a5);_0x8e063f=_0x163983['makeDeepCopy'](_0x18efa0);}else{if(!Imported[_0x45eb0f]){alert(_0x34ec01(0x1a8)[_0x34ec01(0x1ce)](_0x4b6524,_0x45eb0f)),SceneManager[_0x34ec01(0x21a)]();break;}}}const _0x1926df=_0x2807d6['description'];if(_0x1926df[_0x34ec01(0x1e4)](/\[Version[ ](.*?)\]/i)){if(_0x34ec01(0x18f)==='rSssc'){const _0x3d7db2=Number(RegExp['$1']);_0x3d7db2!==VisuMZ[label][_0x34ec01(0x186)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x34ec01(0x1ce)](_0x4b6524,_0x3d7db2)),SceneManager['exit']());}else _0x29655b[_0x34ec01(0x1c9)]=_0x336f68[_0x34ec01(0x247)](_0x2ad8ea(_0x288d4f['$1'])||0x0,0x0);}if(_0x1926df[_0x34ec01(0x1e4)](/\[Tier[ ](\d+)\]/i)){const _0x3daadc=Number(RegExp['$1']);_0x3daadc<tier?(alert(_0x34ec01(0x148)['format'](_0x4b6524,_0x3daadc,tier)),SceneManager['exit']()):tier=Math[_0x34ec01(0x247)](_0x3daadc,tier);}VisuMZ[_0x34ec01(0x1f2)](VisuMZ[label]['Settings'],_0x2807d6['parameters']);})(pluginData),VisuMZ['VisualFogs'][_0x17b336(0x256)]=function(){const _0x5c2485=_0x17b336;return{'id':0x0,'filename':'','_fogZero':![],'_fogLoopX':![],'_fogLoopY':![],'_fogSx':0x0,'_fogSy':0x0,'_fogX':0x0,'_fogY':0x0,'opacity':Game_Map['DEFAULT_FOG_OPACITY'],'targetOpacity':Game_Map[_0x5c2485(0x18e)],'opacityDuration':0x0,'blendMode':Game_Map[_0x5c2485(0x1f9)],'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[],'maskBlur':Game_Map['DEFAULT_FOG_TILE_BLUR'],'maskSpill':Game_Map[_0x5c2485(0x246)],'vignette':'none','vignetteFilename':''};},PluginManager[_0x17b336(0x150)](pluginData[_0x17b336(0x234)],_0x17b336(0x225),_0x3a524c=>{const _0x554993=_0x17b336;VisuMZ[_0x554993(0x1f2)](_0x3a524c,_0x3a524c);if(_0x3a524c['id']<=0x0)return;if(_0x3a524c['filename']===''||_0x3a524c['filename']==='>>>ATTENTION<<<')return;let _0x3e0f4e=JsonEx[_0x554993(0x25f)](_0x3a524c[_0x554993(0x25d)]);if(!_0x3e0f4e[_0x554993(0x1b9)](_0x554993(0x1f8)))_0x3e0f4e=VisuMZ[_0x554993(0x15c)][_0x554993(0x256)]();_0x3e0f4e['filename']=_0x3a524c[_0x554993(0x22e)],_0x3e0f4e['id']=_0x3a524c['id'];while(_0x3e0f4e[_0x554993(0x23b)][_0x554993(0x17b)]<0x4){'kSdOh'===_0x554993(0x1fe)?_0x3e0f4e['colorTone'][_0x554993(0x180)](0x0):this[_0x554993(0x24c)]();}_0x3e0f4e['_fogX']=0x0,_0x3e0f4e['_fogY']=0x0,_0x3e0f4e[_0x554993(0x159)]=_0x3a524c[_0x554993(0x18c)],_0x3e0f4e[_0x554993(0x151)]=0x0,_0x3e0f4e[_0x554993(0x14b)]=_0x3e0f4e[_0x554993(0x14b)]||'none',_0x3e0f4e[_0x554993(0x14b)]=_0x3e0f4e[_0x554993(0x14b)][_0x554993(0x141)]()['trim']();if(_0x3e0f4e[_0x554993(0x1e0)]!==''){if('Wiewu'!==_0x554993(0x1cd))_0x3e0f4e['vignette']=_0x554993(0x1ff);else return _0x270cbd[_0x554993(0x16e)]*this[_0x554993(0x14c)]()/0x2;}$gameMap['addChangeVisualFog'](_0x3e0f4e);}),PluginManager['registerCommand'](pluginData['name'],_0x17b336(0x1ab),_0x1ded14=>{const _0x1b54b4=_0x17b336;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x1b54b4(0x1f2)](_0x1ded14,_0x1ded14);const _0x232755=_0x1ded14[_0x1b54b4(0x1f6)];for(const _0x44f351 of _0x232755){if(_0x1b54b4(0x1e3)!==_0x1b54b4(0x22d)){const _0x4f69b9=$gameMap[_0x1b54b4(0x168)](_0x44f351);if(!_0x4f69b9)continue;_0x4f69b9[_0x1b54b4(0x159)]=_0x1ded14[_0x1b54b4(0x159)]||0x0,_0x4f69b9[_0x1b54b4(0x151)]=_0x1ded14[_0x1b54b4(0x151)]||0x0,_0x4f69b9[_0x1b54b4(0x151)]<=0x0&&(_0x1b54b4(0x1d3)!=='EAqto'?_0x4f69b9[_0x1b54b4(0x18c)]=_0x4f69b9[_0x1b54b4(0x159)]:_0x2d87f0[_0x1b54b4(0x172)]['_grafterRefreshRegions']['push'](_0x105e4a));}else _0x492800[_0x1b54b4(0x1b2)]=_0x4e797d(_0x2c9ba7['$1'])['clamp'](0x0,0x168);}}),PluginManager[_0x17b336(0x150)](pluginData[_0x17b336(0x234)],_0x17b336(0x149),_0x58f372=>{const _0x3a3112=_0x17b336;if(!SceneManager[_0x3a3112(0x1fa)]())return;VisuMZ[_0x3a3112(0x1f2)](_0x58f372,_0x58f372);const _0x5bec6e=_0x58f372[_0x3a3112(0x1f6)];for(const _0x1b6d76 of _0x5bec6e){'oxhqv'===_0x3a3112(0x146)?$gameMap['removeVisualFog'](_0x1b6d76):this['_hue']!==_0x48e5c2(_0x3077c2)&&(this[_0x3a3112(0x1c7)]=_0x203ab3(_0xae9c3),this[_0x3a3112(0x211)]());}}),VisuMZ[_0x17b336(0x15c)][_0x17b336(0x182)]={'Start':/<(?:FOG)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'End':/<\/(?:FOG)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'Filename':/(?:FILENAME|NAME):[ ](.*)/i,'HorzLoop':/(?:HORZ|HORIZONTAL) (?:LOOP|SCROLL):[ ](.*)/i,'VertLoop':/(?:VERT|VERTICAL) (?:LOOP|SCROLL):[ ](.*)/i,'ScrollLock':/<(?:MAP|SCROLL)[ ](?:LOCK|LOCKED)>/i,'OpacityRate':/(?:OPACITY):[ ](\d+)([%％])/i,'OpacityFlat':/(?:OPACITY):[ ](\d+)/i,'BlendMode':/BLEND MODE:[ ](.*)/i,'Hue':/HUE:[ ](\d+)/i,'HueShift':/HUE (?:SHIFT|SPEED):[ ](.*)/i,'Tone':/(?:COLOR TONE|TONE|TINT):[ ](.*)/i,'MaskRegions':/(?:REGION|REGIONS):[ ](.*)/i,'MaskTerrainTags':/TERRAIN (?:TAG|TAGS):[ ](.*)/i,'MaskBlur':/(?:TILE BLUR|BLUR):[ ](.*)/i,'MaskSpill':/(?:TILE SPILL|SPILL):[ ](.*)/i,'CustomVignette':/CUSTOM (?:VIGNETTE|OVERLAY):[ ](.*)/i,'PremadeVignette':/(?:VIGNETTE|OVERLAY):[ ](.*)/i},ImageManager[_0x17b336(0x22a)]=function(_0x2fee1f){const _0x267064=_0x17b336;if(!_0x2fee1f)return this[_0x267064(0x152)]();this[_0x267064(0x231)]=this[_0x267064(0x231)]||{},_0x2fee1f=_0x2fee1f[_0x267064(0x141)]()['trim']();const _0x1e9ae0=_0x267064(0x21c)[_0x267064(0x1ce)](_0x2fee1f);if(this[_0x267064(0x231)][_0x2fee1f])return this[_0x267064(0x231)][_0x2fee1f];else{if(this[_0x1e9ae0]){if('fDYzB'!==_0x267064(0x1a4))_0x4d4240[_0x267064(0x14b)]=(_0xc718c4(_0x35b535['$1'])||'')['toLowerCase']();else return this[_0x1e9ae0]();}else return this[_0x267064(0x152)]();}},ImageManager[_0x17b336(0x152)]=function(){const _0x371049=_0x17b336;if(this['_fogVignettes']['empty'])return this[_0x371049(0x231)]['empty'];const _0x2df6da=new Bitmap(Graphics[_0x371049(0x240)],Graphics[_0x371049(0x248)]);return _0x2df6da[_0x371049(0x228)](0x0,0x0,_0x2df6da['width'],_0x2df6da['height'],'#ffffff'),_0x2df6da[_0x371049(0x14a)]=![],this[_0x371049(0x231)]=this[_0x371049(0x231)]||{},this[_0x371049(0x231)][_0x371049(0x21f)]=_0x2df6da,_0x2df6da;},ImageManager['getFogVignette_upper']=function(){const _0x20c0c5=_0x17b336,_0x233c3e=new Bitmap(Graphics[_0x20c0c5(0x240)],Graphics['height']),_0xada9fb=_0x20c0c5(0x1de),_0x571d2c=_0x20c0c5(0x1d2);return _0x233c3e['gradientFillRect'](0x0,0x0,Graphics[_0x20c0c5(0x240)],Math['ceil'](Graphics[_0x20c0c5(0x248)]/0x3),_0x571d2c,_0xada9fb,!![]),_0x233c3e[_0x20c0c5(0x14a)]=![],this['_fogVignettes']=this[_0x20c0c5(0x231)]||{},this['_fogVignettes'][_0x20c0c5(0x239)]=_0x233c3e,_0x233c3e;},ImageManager[_0x17b336(0x224)]=function(){const _0x270129=_0x17b336,_0x3b098b=new Bitmap(Graphics[_0x270129(0x240)],Graphics['height']),_0x503963='rgba(0,\x200,\x200,\x200)',_0xdcfa59='#ffffff';return _0x3b098b[_0x270129(0x140)](0x0,Math[_0x270129(0x154)](Graphics[_0x270129(0x248)]*0x2/0x3),Graphics[_0x270129(0x240)],Math[_0x270129(0x154)](Graphics['height']/0x3),_0x503963,_0xdcfa59,!![]),_0x3b098b[_0x270129(0x14a)]=![],this['_fogVignettes']=this['_fogVignettes']||{},this[_0x270129(0x231)][_0x270129(0x1ba)]=_0x3b098b,_0x3b098b;},ImageManager[_0x17b336(0x17f)]=function(){const _0x5f44ec=_0x17b336,_0x4cb365=new Bitmap(Graphics[_0x5f44ec(0x240)],Graphics['height']),_0x590082='rgba(0,\x200,\x200,\x200)',_0x2daf07=_0x5f44ec(0x1d2);return _0x4cb365['gradientFillRect'](0x0,0x0,Graphics[_0x5f44ec(0x240)],Math['ceil'](Graphics[_0x5f44ec(0x248)]/0x3),_0x2daf07,_0x590082,!![]),_0x4cb365[_0x5f44ec(0x140)](0x0,Math['ceil'](Graphics[_0x5f44ec(0x248)]*0x2/0x3),Graphics[_0x5f44ec(0x240)],Math[_0x5f44ec(0x154)](Graphics[_0x5f44ec(0x248)]/0x3),_0x590082,_0x2daf07,!![]),_0x4cb365[_0x5f44ec(0x14a)]=![],this[_0x5f44ec(0x231)]=this[_0x5f44ec(0x231)]||{},this['_fogVignettes']['horizontal']=_0x4cb365,_0x4cb365;},ImageManager['getFogVignette_left']=function(){const _0xc5de30=_0x17b336,_0x378d41=new Bitmap(Graphics[_0xc5de30(0x240)],Graphics['height']),_0x3ddd4a='rgba(0,\x200,\x200,\x200)',_0x26b839='#ffffff';return _0x378d41[_0xc5de30(0x140)](0x0,0x0,Math[_0xc5de30(0x154)](Graphics[_0xc5de30(0x240)]/0x3),Graphics[_0xc5de30(0x248)],_0x26b839,_0x3ddd4a,![]),_0x378d41[_0xc5de30(0x14a)]=![],this['_fogVignettes']=this[_0xc5de30(0x231)]||{},this[_0xc5de30(0x231)][_0xc5de30(0x153)]=_0x378d41,_0x378d41;},ImageManager[_0x17b336(0x210)]=function(){const _0x5d0f8e=_0x17b336,_0x4493a4=new Bitmap(Graphics['width'],Graphics['height']),_0x900e90='rgba(0,\x200,\x200,\x200)',_0x47ea4c=_0x5d0f8e(0x1d2);return _0x4493a4[_0x5d0f8e(0x140)](Math[_0x5d0f8e(0x154)](Graphics[_0x5d0f8e(0x240)]*0x2/0x3),0x0,Math[_0x5d0f8e(0x154)](Graphics[_0x5d0f8e(0x240)]/0x3),Graphics[_0x5d0f8e(0x248)],_0x900e90,_0x47ea4c,![]),_0x4493a4[_0x5d0f8e(0x14a)]=![],this[_0x5d0f8e(0x231)]=this[_0x5d0f8e(0x231)]||{},this[_0x5d0f8e(0x231)][_0x5d0f8e(0x191)]=_0x4493a4,_0x4493a4;},ImageManager[_0x17b336(0x219)]=function(){const _0x4601d3=_0x17b336,_0x139c8b=new Bitmap(Graphics[_0x4601d3(0x240)],Graphics[_0x4601d3(0x248)]),_0x301ee4=_0x4601d3(0x1de),_0x1aa906=_0x4601d3(0x1d2);return _0x139c8b[_0x4601d3(0x140)](0x0,0x0,Math[_0x4601d3(0x154)](Graphics[_0x4601d3(0x240)]/0x3),Graphics[_0x4601d3(0x248)],_0x1aa906,_0x301ee4,![]),_0x139c8b['gradientFillRect'](Math[_0x4601d3(0x154)](Graphics[_0x4601d3(0x240)]*0x2/0x3),0x0,Math[_0x4601d3(0x154)](Graphics[_0x4601d3(0x240)]/0x3),Graphics[_0x4601d3(0x248)],_0x301ee4,_0x1aa906,![]),_0x139c8b[_0x4601d3(0x14a)]=![],this['_fogVignettes']=this[_0x4601d3(0x231)]||{},this[_0x4601d3(0x231)]['vertical']=_0x139c8b,_0x139c8b;},ImageManager['getFogVignette_border']=function(){const _0x7fbef7=_0x17b336,_0x190db0=new Bitmap(Graphics[_0x7fbef7(0x240)],Graphics['height']),_0x2bc8ec='rgba(0,\x200,\x200,\x200)',_0x2750f0=_0x7fbef7(0x1d2);return _0x190db0[_0x7fbef7(0x140)](0x0,0x0,Graphics[_0x7fbef7(0x240)],Math[_0x7fbef7(0x154)](Graphics['height']/0x3),_0x2750f0,_0x2bc8ec,!![]),_0x190db0['gradientFillRect'](0x0,Math[_0x7fbef7(0x154)](Graphics[_0x7fbef7(0x248)]*0x2/0x3),Graphics['width'],Math[_0x7fbef7(0x154)](Graphics[_0x7fbef7(0x248)]/0x3),_0x2bc8ec,_0x2750f0,!![]),_0x190db0[_0x7fbef7(0x140)](0x0,0x0,Math['ceil'](Graphics[_0x7fbef7(0x240)]/0x3),Graphics['height'],_0x2750f0,_0x2bc8ec,![]),_0x190db0[_0x7fbef7(0x140)](Math['ceil'](Graphics[_0x7fbef7(0x240)]*0x2/0x3),0x0,Math[_0x7fbef7(0x154)](Graphics[_0x7fbef7(0x240)]/0x3),Graphics[_0x7fbef7(0x248)],_0x2bc8ec,_0x2750f0,![]),_0x190db0[_0x7fbef7(0x14a)]=![],this[_0x7fbef7(0x231)]=this[_0x7fbef7(0x231)]||{},this[_0x7fbef7(0x231)][_0x7fbef7(0x229)]=_0x190db0,_0x190db0;},SceneManager[_0x17b336(0x1bf)]=function(){const _0x3010de=_0x17b336;return this['_scene']&&this[_0x3010de(0x172)][_0x3010de(0x1bd)]===Scene_Map;},SceneManager[_0x17b336(0x1fa)]=function(){const _0x584e84=_0x17b336;return this[_0x584e84(0x172)]&&this[_0x584e84(0x172)]instanceof Scene_Map;},VisuMZ['VisualFogs'][_0x17b336(0x1e7)]=Game_Map[_0x17b336(0x1b4)]['setup'],Game_Map[_0x17b336(0x1b4)][_0x17b336(0x1ed)]=function(_0x2c6989){const _0x104812=_0x17b336;VisuMZ['VisualFogs'][_0x104812(0x1e7)][_0x104812(0x22c)](this,_0x2c6989),this[_0x104812(0x1cc)]();},Game_Map[_0x17b336(0x18e)]=VisuMZ[_0x17b336(0x15c)][_0x17b336(0x255)]['FogOpacity'],Game_Map['DEFAULT_FOG_BLEND_MODE']=VisuMZ[_0x17b336(0x15c)][_0x17b336(0x255)]['BlendMode'],Game_Map[_0x17b336(0x236)]=VisuMZ[_0x17b336(0x15c)][_0x17b336(0x255)][_0x17b336(0x1b7)],Game_Map[_0x17b336(0x246)]=VisuMZ[_0x17b336(0x15c)]['Settings']['MaskSpill'],Game_Map[_0x17b336(0x1b4)][_0x17b336(0x1cc)]=function(){const _0x53dfbb=_0x17b336;this[_0x53dfbb(0x21d)]=[null];if(!$dataMap)return;const _0x5a11cf=VisuMZ[_0x53dfbb(0x15c)]['CreateLayerData']();for(const _0x42a023 of _0x5a11cf){if('nrLhB'===_0x53dfbb(0x1c8)){if(!_0x42a023)continue;this['_visualFogSettings'][_0x42a023['id']]=_0x42a023;}else this[_0x53dfbb(0x1d7)](this['settings']()['colorTone']);}},VisuMZ[_0x17b336(0x15c)]['CreateLayerData']=function(){const _0x197659=_0x17b336;if(!$dataMap)return[];const _0x3d6435=[],_0x378108=VisuMZ[_0x197659(0x15c)][_0x197659(0x256)]();if(!$dataMap[_0x197659(0x220)])return[];const _0x518f55=VisuMZ[_0x197659(0x15c)][_0x197659(0x182)],_0x34d5dd=$dataMap['note']['split'](/[\r\n]+/);let _0x4a6a1d=JsonEx[_0x197659(0x25f)](_0x378108);for(const _0x1d4293 of _0x34d5dd){if(_0x1d4293[_0x197659(0x1e4)](_0x518f55['Start']))_0x197659(0x1d8)!==_0x197659(0x1d8)?(this[_0x197659(0x16d)]=this[_0x197659(0x1be)]()['filename'],this['bitmap']=_0x45e029[_0x197659(0x165)](this['_fogName'])):_0x4a6a1d['id']=Number(RegExp['$1']);else{if(_0x1d4293['match'](_0x518f55[_0x197659(0x24d)])){const _0x1423ff=Number(RegExp['$1']);if(_0x1423ff>0x0&&_0x1423ff===_0x4a6a1d['id']&&_0x4a6a1d[_0x197659(0x22e)]!=='')_0x3d6435['push'](_0x4a6a1d);_0x4a6a1d=JsonEx[_0x197659(0x25f)](_0x378108);}else{if(_0x4a6a1d['id']<=0x0)continue;}}if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x25c)]))_0x4a6a1d['filename']=String(RegExp['$1'])[_0x197659(0x20f)](),_0x4a6a1d['filename'][_0x197659(0x241)](0x0)==='!'&&(_0x4a6a1d[_0x197659(0x1dd)]=!![]);else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x203)]))_0x197659(0x23a)==='SfTrn'?(_0x57000f[_0x197659(0x1e0)]=(_0x39257b(_0x48b872['$1'])||'')[_0x197659(0x20f)](),_0x2e1fe8[_0x197659(0x14b)]=_0x197659(0x1ff)):(_0x4a6a1d[_0x197659(0x21b)]=!![],_0x4a6a1d[_0x197659(0x21e)]=Number(RegExp['$1'])||0x0);else{if(_0x1d4293['match'](_0x518f55['VertLoop']))_0x197659(0x252)!==_0x197659(0x252)?this['createMaskTileBitmap']():(_0x4a6a1d[_0x197659(0x204)]=!![],_0x4a6a1d['_fogSy']=Number(RegExp['$1'])||0x0);else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x1cb)])){if(_0x197659(0x188)===_0x197659(0x24e))return this[_0x197659(0x177)][_0x197659(0x1d4)][_0x197659(0x1ad)](_0xf2683a=>_0xf2683a[_0x197659(0x1e1)]===_0x27f133);else _0x4a6a1d[_0x197659(0x1dd)]=!![];}else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x1a3)])){const _0x37bab1=Number(RegExp['$1'])*0.01;_0x4a6a1d[_0x197659(0x18c)]=Math[_0x197659(0x1fc)](_0x37bab1*0xff)[_0x197659(0x209)](0x0,0xff);}else{if(_0x1d4293['match'](_0x518f55[_0x197659(0x217)]))_0x4a6a1d['opacity']=Number(RegExp['$1'])[_0x197659(0x209)](0x0,0xff);else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x1fd)])){if(_0x197659(0x20b)!=='atdjI'){const _0x45d431=String(RegExp['$1'])[_0x197659(0x17c)]()[_0x197659(0x20f)](),_0x5ec67e=[_0x197659(0x207),_0x197659(0x17e),_0x197659(0x169),_0x197659(0x176)];_0x4a6a1d[_0x197659(0x1b8)]=_0x5ec67e['indexOf'](_0x45d431)[_0x197659(0x209)](0x0,0x3);}else{if(!_0xd560b4[_0x197659(0x1fa)]())return;_0x166861[_0x197659(0x1f2)](_0x24bf3c,_0x205008);const _0x3b6209=_0x13b3bf[_0x197659(0x1f6)];for(const _0x42e438 of _0x3b6209){_0x19e890[_0x197659(0x1c4)](_0x42e438);}}}else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55['Hue']))_0x197659(0x18a)==='oQyFF'?_0x4a6a1d[_0x197659(0x1b2)]=Number(RegExp['$1'])['clamp'](0x0,0x168):_0x329480['_fogY']+=this[_0x197659(0x22f)]-_0x256dbb;else{if(_0x1d4293['match'](_0x518f55[_0x197659(0x1c5)]))_0x197659(0x245)!==_0x197659(0x253)?_0x4a6a1d[_0x197659(0x1ec)]=Number(RegExp['$1'])||0x0:this['_maskFilter']&&(this['_maskFilter'][_0x197659(0x1b8)]=this[_0x197659(0x1be)]()[_0x197659(0x1b8)]);else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x1f3)])){if('mPBPz'===_0x197659(0x147))this[_0x197659(0x197)]['bitmap']['fillRect'](_0x1a41a5*_0x5b955a-_0xb1a6dd,_0x45c315*_0x1c5d51-_0x230a82,_0x5410ee,_0x376627,_0x197659(0x1d2)),_0x14605e[_0x197659(0x1a7)]&&_0x3b7aa4[_0x197659(0x1c1)](_0x1b888d)&&_0x573f63[_0x197659(0x172)][_0x197659(0x1ca)][_0x197659(0x180)](_0x539773);else{const _0x4ca4f0=String(RegExp['$1'])[_0x197659(0x214)](',')[_0x197659(0x199)](_0x35caf3=>Number(_0x35caf3)||0x0);while(_0x4ca4f0[_0x197659(0x17b)]<0x4)_0x4ca4f0['push'](0x0);_0x4a6a1d[_0x197659(0x23b)]=_0x4ca4f0;}}else{if(_0x1d4293['match'](_0x518f55[_0x197659(0x249)])){const _0x45859e=String(RegExp['$1'])[_0x197659(0x214)](',')[_0x197659(0x199)](_0x39d28a=>Number(_0x39d28a)||0x1);_0x4a6a1d[_0x197659(0x1f8)]=_0x45859e;}else{if(_0x1d4293['match'](_0x518f55[_0x197659(0x1bb)])){const _0x3b946c=String(RegExp['$1'])[_0x197659(0x214)](',')[_0x197659(0x199)](_0x5e40c7=>Number(_0x5e40c7)||0x1);_0x4a6a1d[_0x197659(0x242)]=_0x3b946c;}else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x1b7)]))_0x4a6a1d[_0x197659(0x1c9)]=Math[_0x197659(0x247)](Number(RegExp['$1'])||0x0,0x0);else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x1a0)]))_0x4a6a1d[_0x197659(0x174)]=Math['max'](Number(RegExp['$1'])||0x0,0x0);else{if(_0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x23e)]))_0x4a6a1d[_0x197659(0x1e0)]=(String(RegExp['$1'])||'')[_0x197659(0x20f)](),_0x4a6a1d[_0x197659(0x14b)]=_0x197659(0x1ff);else _0x1d4293[_0x197659(0x1e4)](_0x518f55[_0x197659(0x1e8)])&&(_0x4a6a1d[_0x197659(0x14b)]=(String(RegExp['$1'])||'')[_0x197659(0x141)]());}}}}}}}}}}}}}}}return _0x3d6435;},Game_Map['prototype'][_0x17b336(0x233)]=function(){const _0x859cb9=_0x17b336;return this[_0x859cb9(0x21d)]===undefined&&this[_0x859cb9(0x1cc)](),this[_0x859cb9(0x21d)]['filter'](_0x18f899=>!!_0x18f899);},Game_Map[_0x17b336(0x1b4)][_0x17b336(0x168)]=function(_0x137abc){const _0x37f48c=_0x17b336;return this[_0x37f48c(0x21d)]=this['_visualFogSettings']||[],this[_0x37f48c(0x21d)][_0x137abc]||null;},Game_Map[_0x17b336(0x1b4)]['getVisualFogOx']=function(_0x1056cc){const _0x3e4eed=_0x17b336,_0x2ef097=this[_0x3e4eed(0x168)](_0x1056cc);if(_0x2ef097[_0x3e4eed(0x1dd)])return _0x2ef097['_fogX']*this['tileWidth']();else return _0x2ef097['_fogLoopX']?_0x2ef097['_fogX']*this['tileWidth']()/0x2:0x0;},Game_Map[_0x17b336(0x1b4)]['getVisualFogOy']=function(_0x4a56ac){const _0x2804ce=_0x17b336,_0x2b2b4c=this[_0x2804ce(0x168)](_0x4a56ac);if(_0x2b2b4c[_0x2804ce(0x1dd)]){if('UNhcQ'===_0x2804ce(0x161))_0x1c263f=_0x113ac1['max'](_0x2bdd8a,_0x594f04);else return _0x2b2b4c[_0x2804ce(0x1db)]*this[_0x2804ce(0x1ef)]();}else{if(_0x2b2b4c[_0x2804ce(0x204)]){if('uRKCW'===_0x2804ce(0x1b5))return _0x2b2b4c[_0x2804ce(0x1db)]*this[_0x2804ce(0x1ef)]()/0x2;else this['_fogContainer']=new _0xba2079(),this[_0x2804ce(0x227)][_0x2804ce(0x232)](this['_fogContainer']),this[_0x2804ce(0x189)]=[null];}else return 0x0;}},Game_Map[_0x17b336(0x1b4)][_0x17b336(0x1c4)]=function(_0xec61a8){const _0x53dc09=_0x17b336;this[_0x53dc09(0x21d)]=this[_0x53dc09(0x21d)]||[];if(!this['_visualFogSettings'][_0xec61a8])return;this[_0x53dc09(0x21d)][_0xec61a8]=null;const _0x17a113=SceneManager['_scene'][_0x53dc09(0x156)];_0x17a113&&(_0x53dc09(0x202)===_0x53dc09(0x1e5)?(_0x11fcb6[_0x53dc09(0x14f)](),_0x597cc3&&_0x77b8e5[_0x53dc09(0x1ae)]['addLoadListener'](_0x6111d4['createMaskBitmap'][_0x53dc09(0x184)](_0x1317a7))):_0x17a113[_0x53dc09(0x1c3)](_0xec61a8));},Game_Map[_0x17b336(0x1b4)]['addChangeVisualFog']=function(_0x11fb4f){const _0x26cf96=_0x17b336,_0x173c8c=_0x11fb4f['id'];if(_0x11fb4f['filename'][_0x26cf96(0x241)](0x0)==='!'){if(_0x26cf96(0x163)!==_0x26cf96(0x1d5))_0x11fb4f['_fogZero']=!![];else{_0x1f8bfc['ConvertParams'](_0x4f1352,_0xb9f723);if(_0x347d68['id']<=0x0)return;if(_0x318582['filename']===''||_0x49f1aa['filename']===_0x26cf96(0x1f0))return;let _0x41d4cd=_0x7d5a55[_0x26cf96(0x25f)](_0x5f41ca['Optional']);if(!_0x41d4cd[_0x26cf96(0x1b9)](_0x26cf96(0x1f8)))_0x41d4cd=_0x10569a['VisualFogs'][_0x26cf96(0x256)]();_0x41d4cd['filename']=_0xf77c7a[_0x26cf96(0x22e)],_0x41d4cd['id']=_0x138853['id'];while(_0x41d4cd['colorTone'][_0x26cf96(0x17b)]<0x4){_0x41d4cd[_0x26cf96(0x23b)][_0x26cf96(0x180)](0x0);}_0x41d4cd['_fogX']=0x0,_0x41d4cd[_0x26cf96(0x1db)]=0x0,_0x41d4cd[_0x26cf96(0x159)]=_0x1f73ad['opacity'],_0x41d4cd['opacityDuration']=0x0,_0x41d4cd[_0x26cf96(0x14b)]=_0x41d4cd[_0x26cf96(0x14b)]||'none',_0x41d4cd[_0x26cf96(0x14b)]=_0x41d4cd['vignette'][_0x26cf96(0x141)]()[_0x26cf96(0x20f)](),_0x41d4cd[_0x26cf96(0x1e0)]!==''&&(_0x41d4cd[_0x26cf96(0x14b)]='custom'),_0x52a80c['addChangeVisualFog'](_0x41d4cd);}}let _0x4083cf=![];this[_0x26cf96(0x21d)]=this[_0x26cf96(0x21d)]||[];if(this['_visualFogSettings'][_0x173c8c]){if(_0x26cf96(0x1f5)!=='eyWZo')_0x56cf2f['_fogY']+=this[_0x26cf96(0x22f)]-_0x378225;else{const _0x2d43bb=this['_visualFogSettings'][_0x173c8c];if(!_0x2d43bb[_0x26cf96(0x1f8)][_0x26cf96(0x259)](_0x11fb4f[_0x26cf96(0x1f8)]))_0x4083cf=!![];else{if(!_0x2d43bb[_0x26cf96(0x242)][_0x26cf96(0x259)](_0x11fb4f[_0x26cf96(0x242)]))_0x26cf96(0x160)!==_0x26cf96(0x160)?(_0x38c319[_0x26cf96(0x15c)][_0x26cf96(0x1e7)]['call'](this,_0x471475),this[_0x26cf96(0x1cc)]()):_0x4083cf=!![];else _0x2d43bb['vignette']!==_0x26cf96(0x164)&&(_0x4083cf=!![]);}}}this['_visualFogSettings'][_0x173c8c]=_0x11fb4f;if(!SceneManager[_0x26cf96(0x1bf)]())return;const _0x5146c2=SceneManager[_0x26cf96(0x172)][_0x26cf96(0x156)];_0x5146c2&&_0x5146c2[_0x26cf96(0x179)](_0x173c8c,_0x4083cf);},VisuMZ[_0x17b336(0x15c)]['Game_Map_setDisplayPos']=Game_Map['prototype'][_0x17b336(0x14d)],Game_Map['prototype'][_0x17b336(0x14d)]=function(_0x18af3e,_0x4b58d1){const _0x45e89d=_0x17b336;VisuMZ['VisualFogs'][_0x45e89d(0x190)]['call'](this,_0x18af3e,_0x4b58d1);for(const _0x47c665 of this[_0x45e89d(0x233)]()){if(!_0x47c665)continue;this['isLoopHorizontal']()?_0x47c665[_0x45e89d(0x16e)]=_0x18af3e:_0x45e89d(0x16b)==='WXiHV'?(_0x1fda3b(_0x45e89d(0x148)['format'](_0x21d391,_0x53f425,_0x19d025)),_0x18a31e[_0x45e89d(0x21a)]()):_0x47c665[_0x45e89d(0x16e)]=this[_0x45e89d(0x221)],this[_0x45e89d(0x23f)]()?_0x47c665[_0x45e89d(0x1db)]=_0x4b58d1:_0x45e89d(0x215)!==_0x45e89d(0x24f)?_0x47c665[_0x45e89d(0x1db)]=this['_displayY']:_0x3ca2b9[_0x45e89d(0x204)]&&(_0x2fbc9a[_0x45e89d(0x1db)]+=_0x153c9e);}},VisuMZ['VisualFogs'][_0x17b336(0x24b)]=Game_Map['prototype']['scrollLeft'],Game_Map[_0x17b336(0x1b4)][_0x17b336(0x198)]=function(_0x56dd3){const _0x353490=_0x17b336,_0x5dbd8c=this['_displayX'];VisuMZ['VisualFogs'][_0x353490(0x24b)]['call'](this,_0x56dd3);for(const _0x42268a of this[_0x353490(0x233)]()){if(!_0x42268a)continue;if(this[_0x353490(0x192)]()){if(_0x42268a['_fogLoopX']){if(_0x353490(0x17d)===_0x353490(0x1a6)){const _0x534010=new _0x224f73(_0x4c8e39[_0x353490(0x240)],_0x337583[_0x353490(0x248)]),_0x5b4344=_0x353490(0x1de),_0xf49c87=_0x353490(0x1d2);return _0x534010[_0x353490(0x140)](0x0,0x0,_0x23de3d[_0x353490(0x240)],_0x28c0f3[_0x353490(0x154)](_0x2c42f6[_0x353490(0x248)]/0x3),_0xf49c87,_0x5b4344,!![]),_0x534010[_0x353490(0x140)](0x0,_0x555f47[_0x353490(0x154)](_0x59a381[_0x353490(0x248)]*0x2/0x3),_0x20f0fd[_0x353490(0x240)],_0x32b4e7[_0x353490(0x154)](_0x296522[_0x353490(0x248)]/0x3),_0x5b4344,_0xf49c87,!![]),_0x534010[_0x353490(0x14a)]=![],this[_0x353490(0x231)]=this['_fogVignettes']||{},this[_0x353490(0x231)][_0x353490(0x20c)]=_0x534010,_0x534010;}else _0x42268a[_0x353490(0x16e)]-=_0x56dd3;}}else this[_0x353490(0x240)]()>=this[_0x353490(0x16a)]()&&(_0x42268a[_0x353490(0x16e)]+=this['_displayX']-_0x5dbd8c);}},VisuMZ['VisualFogs'][_0x17b336(0x15b)]=Game_Map['prototype'][_0x17b336(0x1f1)],Game_Map[_0x17b336(0x1b4)][_0x17b336(0x1f1)]=function(_0x8e01d3){const _0x334f35=_0x17b336,_0x264705=this[_0x334f35(0x221)];VisuMZ[_0x334f35(0x15c)][_0x334f35(0x15b)][_0x334f35(0x22c)](this,_0x8e01d3);for(const _0x177996 of this[_0x334f35(0x233)]()){if(!_0x177996)continue;if(this[_0x334f35(0x192)]()){if(_0x177996[_0x334f35(0x21b)]){if('yeyoi'!==_0x334f35(0x20d)){const _0xb0a04d=this[_0x334f35(0x1be)]()['vignetteFilename'];this[_0x334f35(0x197)][_0x334f35(0x1ae)]=_0x414bc7[_0x334f35(0x165)](_0xb0a04d),this['_maskSprite'][_0x334f35(0x1ae)][_0x334f35(0x14a)]=![];}else _0x177996[_0x334f35(0x16e)]+=_0x8e01d3;}}else{if(this['width']()>=this[_0x334f35(0x16a)]()){if(_0x334f35(0x1a1)!==_0x334f35(0x1a2))_0x177996[_0x334f35(0x16e)]+=this['_displayX']-_0x264705;else{if(this[_0x334f35(0x231)][_0x334f35(0x21f)])return this['_fogVignettes'][_0x334f35(0x21f)];const _0x3be729=new _0x3b4be7(_0x2dfaf6['width'],_0x1e253e[_0x334f35(0x248)]);return _0x3be729['fillRect'](0x0,0x0,_0x3be729['width'],_0x3be729[_0x334f35(0x248)],'#ffffff'),_0x3be729[_0x334f35(0x14a)]=![],this['_fogVignettes']=this[_0x334f35(0x231)]||{},this['_fogVignettes'][_0x334f35(0x21f)]=_0x3be729,_0x3be729;}}}}},VisuMZ[_0x17b336(0x15c)]['Game_Map_scrollDown']=Game_Map[_0x17b336(0x1b4)][_0x17b336(0x1e9)],Game_Map['prototype'][_0x17b336(0x1e9)]=function(_0x1f691c){const _0x525eb2=_0x17b336,_0x65bb88=this[_0x525eb2(0x22f)];VisuMZ[_0x525eb2(0x15c)][_0x525eb2(0x1f4)][_0x525eb2(0x22c)](this,_0x1f691c);for(const _0x21c7c3 of this[_0x525eb2(0x233)]()){if(!_0x21c7c3)continue;if(this[_0x525eb2(0x23f)]())_0x21c7c3[_0x525eb2(0x204)]&&(_0x21c7c3[_0x525eb2(0x1db)]+=_0x1f691c);else this['height']()>=this[_0x525eb2(0x181)]()&&(_0x21c7c3['_fogY']+=this['_displayY']-_0x65bb88);}},VisuMZ['VisualFogs'][_0x17b336(0x1aa)]=Game_Map[_0x17b336(0x1b4)][_0x17b336(0x18b)],Game_Map[_0x17b336(0x1b4)]['scrollUp']=function(_0x23d7a3){const _0x50248f=_0x17b336,_0x674cb0=this[_0x50248f(0x22f)];VisuMZ[_0x50248f(0x15c)][_0x50248f(0x1aa)][_0x50248f(0x22c)](this,_0x23d7a3);for(const _0x2794a8 of this[_0x50248f(0x233)]()){if(_0x50248f(0x167)!==_0x50248f(0x167))this[_0x50248f(0x197)]=new _0x1547f0(),this[_0x50248f(0x206)]();else{if(!_0x2794a8)continue;if(this[_0x50248f(0x23f)]()){if(_0x50248f(0x1c6)==='RsVEB'){const _0x19cc29=_0x40ad15(_0x45e26e['$1'])[_0x50248f(0x17c)]()[_0x50248f(0x20f)](),_0x17bb79=[_0x50248f(0x207),_0x50248f(0x17e),'MULTIPLY',_0x50248f(0x176)];_0x1a2229[_0x50248f(0x1b8)]=_0x17bb79[_0x50248f(0x218)](_0x19cc29)[_0x50248f(0x209)](0x0,0x3);}else _0x2794a8[_0x50248f(0x204)]&&('QXxmB'==='QXxmB'?_0x2794a8[_0x50248f(0x1db)]-=_0x23d7a3:_0x5eb2f3[_0x50248f(0x18c)]=_0x4f2f71['targetOpacity']);}else this[_0x50248f(0x248)]()>=this['screenTileY']()&&(_0x2794a8[_0x50248f(0x1db)]+=this[_0x50248f(0x22f)]-_0x674cb0);}}},VisuMZ[_0x17b336(0x15c)]['Game_Map_updateParallax']=Game_Map[_0x17b336(0x1b4)][_0x17b336(0x1f7)],Game_Map[_0x17b336(0x1b4)][_0x17b336(0x1f7)]=function(){const _0x5d056e=_0x17b336;VisuMZ[_0x5d056e(0x15c)]['Game_Map_updateParallax']['call'](this);for(const _0x401501 of this[_0x5d056e(0x233)]()){if(_0x5d056e(0x183)===_0x5d056e(0x183)){if(!_0x401501)continue;this['updateVisualFogSettings'](_0x401501);}else this[_0x5d056e(0x23d)](this['settings']()[_0x5d056e(0x1b2)]);}},Game_Map[_0x17b336(0x1b4)][_0x17b336(0x16c)]=function(_0x65b6f2){const _0x53abfd=_0x17b336;_0x65b6f2[_0x53abfd(0x21b)]&&(_0x65b6f2[_0x53abfd(0x16e)]+=_0x65b6f2[_0x53abfd(0x21e)]/this[_0x53abfd(0x14c)]()/0x2);_0x65b6f2[_0x53abfd(0x204)]&&(_0x53abfd(0x1b0)===_0x53abfd(0x226)?(this[_0x53abfd(0x1c7)]=_0x3c1042(_0x259164),this['_updateColorFilter']()):_0x65b6f2[_0x53abfd(0x1db)]+=_0x65b6f2[_0x53abfd(0x157)]/this[_0x53abfd(0x1ef)]()/0x2);_0x65b6f2[_0x53abfd(0x1b2)]+=_0x65b6f2[_0x53abfd(0x1ec)];if(_0x65b6f2['opacityDuration']>0x0){const _0x1f369d=_0x65b6f2['opacityDuration'];_0x65b6f2['opacity']=(_0x65b6f2[_0x53abfd(0x18c)]*(_0x1f369d-0x1)+_0x65b6f2[_0x53abfd(0x159)])/_0x1f369d,_0x65b6f2[_0x53abfd(0x151)]--;}};function Sprite_VisualFog(){this['initialize'](...arguments);}Sprite_VisualFog[_0x17b336(0x1b4)]=Object[_0x17b336(0x216)](TilingSprite[_0x17b336(0x1b4)]),Sprite_VisualFog[_0x17b336(0x1b4)]['constructor']=Sprite_VisualFog,Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x1d0)]=function(_0x4e776d){const _0x3d6532=_0x17b336;this[_0x3d6532(0x1e1)]=_0x4e776d,TilingSprite['prototype'][_0x3d6532(0x1d0)][_0x3d6532(0x22c)](this),this['_createColorFilter'](),this[_0x3d6532(0x14f)](),this[_0x3d6532(0x1ae)]['addLoadListener'](this[_0x3d6532(0x14e)][_0x3d6532(0x184)](this));},Sprite_VisualFog['prototype'][_0x17b336(0x1be)]=function(){const _0x2fb7fb=_0x17b336;return $gameMap[_0x2fb7fb(0x168)](this['_id']);},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x1a9)]=function(){const _0x49d655=_0x17b336;this[_0x49d655(0x1c7)]=0x0,this[_0x49d655(0x208)]=[0x0,0x0,0x0,0x0],this[_0x49d655(0x1bc)]=new ColorFilter(),!this[_0x49d655(0x178)]&&(this[_0x49d655(0x178)]=[]),this[_0x49d655(0x178)][_0x49d655(0x180)](this['_colorFilter']);},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x211)]=function(){const _0x4055dc=_0x17b336;!this['_colorFilter']&&(_0x4055dc(0x1fb)===_0x4055dc(0x1d9)?_0x3ddaa3['_fogY']+=_0xe58831[_0x4055dc(0x157)]/this[_0x4055dc(0x1ef)]()/0x2:this[_0x4055dc(0x1a9)]()),this[_0x4055dc(0x1bc)][_0x4055dc(0x23d)](this['_hue']),this[_0x4055dc(0x1bc)]['setColorTone'](this[_0x4055dc(0x208)]);},Sprite_VisualFog[_0x17b336(0x1b4)]['loadBitmap']=function(){const _0x52cf05=_0x17b336;this[_0x52cf05(0x16d)]=this[_0x52cf05(0x1be)]()[_0x52cf05(0x22e)],this['bitmap']=ImageManager['loadParallax'](this['_fogName']);},Sprite_VisualFog[_0x17b336(0x1b4)]['createMaskSprite']=function(){const _0x32a4b8=_0x17b336;this['_maskSprite']=new Sprite(),this[_0x32a4b8(0x206)]();},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x206)]=function(){const _0x18bb4c=_0x17b336;this[_0x18bb4c(0x197)][_0x18bb4c(0x1ae)]&&this[_0x18bb4c(0x187)](this['_maskSprite']);const _0x50c43b=this[_0x18bb4c(0x1be)]()['maskRegions'],_0x3bb1d5=this['settings']()[_0x18bb4c(0x242)];if(this[_0x18bb4c(0x1be)]()[_0x18bb4c(0x14b)]===_0x18bb4c(0x1ff))this[_0x18bb4c(0x24c)]();else{if(this[_0x18bb4c(0x1be)]()[_0x18bb4c(0x14b)]!==_0x18bb4c(0x164))_0x18bb4c(0x19c)!==_0x18bb4c(0x185)?this['loadTemplateVignette']():_0x3e0297[_0x18bb4c(0x21b)]&&(_0x57b43b[_0x18bb4c(0x16e)]+=_0x359c1f);else{if(_0x50c43b[_0x18bb4c(0x17b)]>0x0||_0x3bb1d5['length']>0x0)this[_0x18bb4c(0x196)]();else this['settings']()[_0x18bb4c(0x14b)]===_0x18bb4c(0x164)&&this['loadTemplateVignette']();}}this[_0x18bb4c(0x232)](this[_0x18bb4c(0x197)]),this[_0x18bb4c(0x223)]=new PIXI[(_0x18bb4c(0x1df))](this[_0x18bb4c(0x197)]),this[_0x18bb4c(0x178)][_0x18bb4c(0x180)](this[_0x18bb4c(0x223)]);if(this[_0x18bb4c(0x173)])this[_0x18bb4c(0x178)][_0x18bb4c(0x180)](this[_0x18bb4c(0x173)]);},Sprite_VisualFog['prototype'][_0x17b336(0x24c)]=function(){const _0x10ca50=_0x17b336,_0x501179=this['settings']()[_0x10ca50(0x1e0)];this[_0x10ca50(0x197)][_0x10ca50(0x1ae)]=ImageManager[_0x10ca50(0x165)](_0x501179),this[_0x10ca50(0x197)][_0x10ca50(0x1ae)][_0x10ca50(0x14a)]=![];},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x16f)]=function(){const _0x29eb40=_0x17b336,_0x5adfff=this['settings']()['vignette'];this[_0x29eb40(0x197)]['bitmap']=ImageManager[_0x29eb40(0x22a)](_0x5adfff);},Sprite_VisualFog[_0x17b336(0x1b4)]['createMaskTileBitmap']=function(){const _0x374a3b=_0x17b336,_0x5b379c=this[_0x374a3b(0x1be)]()[_0x374a3b(0x1f8)],_0x5e70fb=this[_0x374a3b(0x1be)]()[_0x374a3b(0x242)];if(_0x5b379c[_0x374a3b(0x17b)]<=0x0&&_0x5e70fb['length']<=0x0)return;if($gameMap[_0x374a3b(0x192)]()||$gameMap[_0x374a3b(0x23f)]())return;const _0x4a6cfc=$gameMap['width'](),_0x50d3b5=$gameMap[_0x374a3b(0x248)](),_0xf0b304=$gameMap[_0x374a3b(0x14c)](),_0x1ba0eb=$gameMap[_0x374a3b(0x1ef)](),_0x23fe45=this[_0x374a3b(0x1be)]()['maskSpill'],_0x13120b=_0xf0b304+_0x23fe45*0x2,_0x57bf5b=_0x1ba0eb+_0x23fe45*0x2;this[_0x374a3b(0x197)]['bitmap']=new Bitmap(_0x4a6cfc*_0xf0b304,_0x50d3b5*_0x1ba0eb);for(let _0x527d34=0x0;_0x527d34<_0x4a6cfc;_0x527d34++){for(let _0x361ba8=0x0;_0x361ba8<_0x50d3b5;_0x361ba8++){const _0x43f80d=$gameMap['regionId'](_0x527d34,_0x361ba8);(_0x5b379c[_0x374a3b(0x1c1)](_0x43f80d)||_0x5e70fb[_0x374a3b(0x1c1)]($gameMap[_0x374a3b(0x25b)](_0x527d34,_0x361ba8)))&&(this[_0x374a3b(0x197)][_0x374a3b(0x1ae)][_0x374a3b(0x228)](_0x527d34*_0xf0b304-_0x23fe45,_0x361ba8*_0x1ba0eb-_0x23fe45,_0x13120b,_0x57bf5b,_0x374a3b(0x1d2)),Imported[_0x374a3b(0x1a7)]&&_0x5b379c['includes'](_0x43f80d)&&SceneManager[_0x374a3b(0x172)][_0x374a3b(0x1ca)][_0x374a3b(0x180)](_0x43f80d));}}this[_0x374a3b(0x178)]=[];!!PIXI[_0x374a3b(0x178)][_0x374a3b(0x1cf)]&&!this['_blurFilter']&&(_0x374a3b(0x250)===_0x374a3b(0x250)?this[_0x374a3b(0x173)]=new PIXI[(_0x374a3b(0x178))]['BlurFilter'](clamp=!![]):_0x5aef35=!![]);if(this[_0x374a3b(0x173)]){if(_0x374a3b(0x175)!==_0x374a3b(0x19a)){const _0x5b16e2=this['settings']()[_0x374a3b(0x1c9)];this[_0x374a3b(0x173)][_0x374a3b(0x212)]=_0x5b16e2||0.01;}else{const _0x4480fe=_0x532c4b(_0x28f431['$1']);_0x4480fe<_0x24ba24?(_0x8d0ee(_0x374a3b(0x148)['format'](_0x31dd7e,_0x4480fe,_0x53cfb7)),_0x313bf1['exit']()):_0x266033=_0x4f562f[_0x374a3b(0x247)](_0x4480fe,_0x54d1cf);}}},Sprite_VisualFog[_0x17b336(0x1b4)]['drawMaskTile']=function(_0x31a136,_0xb10d35){},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x1dc)]=function(){const _0x18b7c7=_0x17b336;TilingSprite['prototype']['update'][_0x18b7c7(0x22c)](this);if(!this[_0x18b7c7(0x1ae)])return;if(!this[_0x18b7c7(0x1be)]())return;this[_0x18b7c7(0x193)](),this[_0x18b7c7(0x18d)](),this[_0x18b7c7(0x1af)](),this['updateHue'](),this['updateTone'](),this['updateMask']();},Sprite_VisualFog[_0x17b336(0x1b4)]['updateOpacity']=function(){const _0xaba00c=_0x17b336;this[_0xaba00c(0x18c)]=this[_0xaba00c(0x1be)]()[_0xaba00c(0x18c)];},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x18d)]=function(){const _0x176961=_0x17b336;this[_0x176961(0x200)]['x']=$gameMap[_0x176961(0x257)](this[_0x176961(0x1e1)]),this[_0x176961(0x200)]['y']=$gameMap[_0x176961(0x25a)](this[_0x176961(0x1e1)]);},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x1af)]=function(){const _0x45338c=_0x17b336;this[_0x45338c(0x223)]&&(this[_0x45338c(0x223)]['blendMode']=this[_0x45338c(0x1be)]()['blendMode']);},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x244)]=function(){const _0x4ea536=_0x17b336;this[_0x4ea536(0x23d)](this[_0x4ea536(0x1be)]()[_0x4ea536(0x1b2)]);},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x23d)]=function(_0x492c82){const _0x3b218f=_0x17b336;this['_hue']!==Number(_0x492c82)&&(this[_0x3b218f(0x1c7)]=Number(_0x492c82),this['_updateColorFilter']());},Sprite_VisualFog[_0x17b336(0x1b4)][_0x17b336(0x205)]=function(){const _0x5ddb10=_0x17b336;this['setColorTone'](this['settings']()[_0x5ddb10(0x23b)]);},Sprite_VisualFog['prototype'][_0x17b336(0x1d7)]=function(_0x32083e){const _0xc21be0=_0x17b336;if(!(_0x32083e instanceof Array))throw new Error(_0xc21be0(0x158));if(!this[_0xc21be0(0x208)][_0xc21be0(0x259)](_0x32083e)){if('SrdPl'!==_0xc21be0(0x1ee))this[_0xc21be0(0x208)]=_0x32083e[_0xc21be0(0x235)](),this['_updateColorFilter']();else{_0x2d5fc3[_0xc21be0(0x1b4)][_0xc21be0(0x1dc)]['call'](this);if(!this[_0xc21be0(0x1ae)])return;if(!this[_0xc21be0(0x1be)]())return;this['updateOpacity'](),this[_0xc21be0(0x18d)](),this[_0xc21be0(0x1af)](),this[_0xc21be0(0x244)](),this[_0xc21be0(0x205)](),this[_0xc21be0(0x1d1)]();}}},Sprite_VisualFog['prototype'][_0x17b336(0x1d1)]=function(){const _0xe26aed=_0x17b336;if(!this[_0xe26aed(0x197)])return;const _0xe1753d=this[_0xe26aed(0x1be)]()[_0xe26aed(0x1f8)],_0x35294e=this['settings']()[_0xe26aed(0x242)];if(this[_0xe26aed(0x1be)]()['vignette']!=='none'){this[_0xe26aed(0x197)]['x']=0x0,this['_maskSprite']['y']=0x0;if(!Imported[_0xe26aed(0x251)])return;this[_0xe26aed(0x197)]['scale']['x']=0x1/$gameScreen[_0xe26aed(0x19f)](),this[_0xe26aed(0x197)][_0xe26aed(0x258)]['y']=0x1/$gameScreen[_0xe26aed(0x19f)]();}else{if(_0xe1753d[_0xe26aed(0x17b)]>0x0||_0x35294e['length']>0x0){if(_0xe26aed(0x195)===_0xe26aed(0x1ea))return this[_0xe26aed(0x152)]();else this['_maskSprite']['x']=Math['floor'](-$gameMap[_0xe26aed(0x1c2)]()*$gameMap[_0xe26aed(0x14c)]()),this[_0xe26aed(0x197)]['y']=Math[_0xe26aed(0x238)](-$gameMap[_0xe26aed(0x19d)]()*$gameMap[_0xe26aed(0x1ef)]()),this[_0xe26aed(0x197)][_0xe26aed(0x258)]['x']=0x1,this[_0xe26aed(0x197)]['scale']['y']=0x1;}else this[_0xe26aed(0x1be)]()['vignette']==='none'&&(this[_0xe26aed(0x197)]['x']=0x0,this[_0xe26aed(0x197)]['y']=0x0,this[_0xe26aed(0x197)]['scale']['x']=0x1,this[_0xe26aed(0x197)][_0xe26aed(0x258)]['y']=0x1);}},VisuMZ['VisualFogs'][_0x17b336(0x22b)]=Spriteset_Map['prototype'][_0x17b336(0x162)],Spriteset_Map['prototype'][_0x17b336(0x162)]=function(){const _0x18168d=_0x17b336;this[_0x18168d(0x1eb)](),this[_0x18168d(0x145)](),this[_0x18168d(0x230)](),VisuMZ[_0x18168d(0x15c)][_0x18168d(0x22b)][_0x18168d(0x22c)](this);},Spriteset_Map[_0x17b336(0x1b4)][_0x17b336(0x1eb)]=function(){const _0x170b93=_0x17b336;this['_fogContainer']=new Sprite(),this[_0x170b93(0x227)][_0x170b93(0x232)](this[_0x170b93(0x177)]),this[_0x170b93(0x189)]=[null];},Spriteset_Map[_0x17b336(0x1b4)][_0x17b336(0x145)]=function(){const _0x3d455=_0x17b336,_0x1759d0=$gameMap[_0x3d455(0x233)]();for(const _0x11e22e of _0x1759d0){if(!_0x11e22e)continue;this['createNewFogLayer'](_0x11e22e);}},Spriteset_Map[_0x17b336(0x1b4)][_0x17b336(0x201)]=function(_0x26617a){const _0x24fdbc=_0x17b336;if(!_0x26617a)return;const _0xefeace=new Sprite_VisualFog(_0x26617a['id']);_0xefeace[_0x24fdbc(0x166)](0x0,0x0,Graphics[_0x24fdbc(0x240)],Graphics[_0x24fdbc(0x248)]),this[_0x24fdbc(0x177)][_0x24fdbc(0x232)](_0xefeace);},Spriteset_Map[_0x17b336(0x1b4)]['sortVisualFogs']=function(){const _0x18d95a=_0x17b336;this['_fogContainer'][_0x18d95a(0x1d4)][_0x18d95a(0x237)]((_0x5382f4,_0x9386b2)=>_0x5382f4['_id']-_0x9386b2[_0x18d95a(0x1e1)]);},Spriteset_Map[_0x17b336(0x1b4)]['findTargetVisualFog']=function(_0x135548){const _0x2d892b=_0x17b336;return this['_fogContainer'][_0x2d892b(0x1d4)][_0x2d892b(0x1ad)](_0x3a8280=>_0x3a8280[_0x2d892b(0x1e1)]===_0x135548);},Spriteset_Map['prototype']['removeVisualFogLayer']=function(_0x573f87){const _0x10265e=_0x17b336,_0x9a448d=this[_0x10265e(0x144)](_0x573f87);if(_0x9a448d){if(_0x10265e(0x254)===_0x10265e(0x171))return _0x45417b[_0x10265e(0x168)](this['_id']);else this[_0x10265e(0x177)]['removeChild'](_0x9a448d);}},Spriteset_Map[_0x17b336(0x1b4)][_0x17b336(0x179)]=function(_0x33866a,_0x109f04){const _0x280516=_0x17b336,_0x3feda4=this[_0x280516(0x144)](_0x33866a);!_0x3feda4?(this[_0x280516(0x201)]($gameMap[_0x280516(0x168)](_0x33866a)),this[_0x280516(0x230)]()):_0x280516(0x194)!=='AGANQ'?(_0x3feda4[_0x280516(0x14f)](),_0x109f04&&_0x3feda4[_0x280516(0x1ae)][_0x280516(0x15a)](_0x3feda4[_0x280516(0x206)][_0x280516(0x184)](_0x3feda4))):this['loadTemplateVignette']();};