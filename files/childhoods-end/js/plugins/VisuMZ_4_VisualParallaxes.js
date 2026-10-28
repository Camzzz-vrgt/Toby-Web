//=============================================================================
// VisuStella MZ - Visual Parallaxes
// VisuMZ_4_VisualParallaxes.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualParallaxes = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualParallaxes = VisuMZ.VisualParallaxes || {};
VisuMZ.VisualParallaxes.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.11] [VisualParallaxes]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Parallaxes_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, RPG Maker MZ only allows each map to have one parallax. Such a
 * limit makes it difficult to create different layers of objects to portray
 * distance and the like. This plugin will remedy that by allowing you to add
 * an unlimited amount of parallaxes per map alongside many controls to make
 * the parallaxes more vivid.
 * 
 * A restricted parallax area system is also added to this plugin to make
 * parallaxes appear only within certain regions and/or terrain tags. This way,
 * you can utilize parallaxes as masked layers for water surfaces and the like.
 * 
 * To make the most out of this, with the tilesets are formatted properly,
 * reflective water and reflective solid surfaces are also new effects added
 * through this plugin. Water effects will show ripples while reflective solid
 * surfaces are static.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add, change, and/or remove parallaxes through map notetags.
 * * Lots of customization options for each of the parallaxes.
 * * Limit where parallaxes can be displayed on the map through regions and/or
 *   terrain tags.
 * * Create reflective surfaces for water and solid ground as long as the
 *   tilesets have been formatted properly.
 * * Use Plugin Commands midway through the game to add, change, fade, and/or
 *   remove parallaxes as needed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Recommended Plugin List ------
 *
 * * Pixi JS Filters*
 *
 * This plugin recommends the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You can use this plugin without
 * it, but there will be features missing.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
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
 * Parallaxes
 * 
 * The map editor's inherent parallax will remain untouched and unable to
 * utilize the extra features provided by this plugin. However, you can just
 * simply create a new parallax layer over it and hide it from view if needed.
 * 
 * Each of the parallaxes added through this plugin's notetags and/or commands
 * are assigned an ID. Referring back to the ID later will allow you to update
 * and/or remove that parallax when needed.
 * 
 * The new parallaxes are created on a separate layer from the map editor's
 * parallax and isn't included with the new parallaxes. Layers with higher ID's
 * will appear above layers with lower ID's.
 * 
 * However, other than that, all of the new parallaxes follow the same rules as
 * the map editor's parallax. This means that they will not appear above the
 * tile map and require transparent tiles to be seen. They will also scroll the
 * same way the original parallax does to provide consistency.
 *
 * ---
 * 
 * Regions and Terrain Tags
 * 
 * If you don't want a parallax to appear for the whole entire background and
 * want to confine them to certain areas of the map, you can assign regions or
 * terrain tags for them to appear in.
 * 
 * Only the parts of the map marked by the designated regions and/or terrain
 * tags will reveal the parallax. Those parts will be little squares each,
 * equal to the size of a tile. They have hard borders and do not have any
 * smoothing options in order to display the parallax tiles accurately.
 * 
 * Each parallax layer can have their own custom regions and/or terrain tags to
 * appear in. These can be adjusted through the notetag settings or through the
 * Plugin Commands provided by this plugin. Parallax layers can be limited to
 * multiple regions and/or terrain tags at the same time.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Reflections
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * By default, water-based reflections are assigned the Terrain Tag 1 and solid
 * ground reflections are assigned the Terrain Tag 2. In order to make water
 * tiles show water reflections, you need to mark their tiles in the database's
 * tilesets with 1's. To mark reflective ground surfaces, mark them with 2's.
 * If the tiles are not tagged properly, the reflections will not be shown.
 * 
 * In the Plugin Parameters and notetags, you can decide if the reflections
 * will appear above the parallaxes or below them. By default, they will appear
 * above them. However, if you change them to appear below the parallaxes, then
 * pay attention to the opacity level of the parallaxes. If the parallaxes are
 * too opaque, you will barely see the reflection.
 * 
 * Once again, both water and ground tiles need to be semi-transparent or fully
 * transparent in order for reflections to be seen.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Not For Battle
 * 
 * For clarification, the VisuStella MZ Visual Parallaxes plugin is NOT made
 * for battle. There's a separate plugin for that called Visual Battle
 * Environment. The reason why parallaxes aren't made for battle is because the
 * way parallaxes are handled in map vary from how they would be handled in
 * battle. Using the Visual Parallax Plugin Commands will only alter the
 * parallax appearances when the player finishes battle.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Pixi JS Filters
 *
 * If the game project has Pixi JS Filters installed, then water reflections
 * will have a ripple effect. This is based off the Pixi JS ReflectionFilter
 * and will follow their rules. There are a couple of settings that can be
 * adjusted to customize the reflective properties.
 * 
 * Boundary: Vertical position of the reflection point, default is 50% (middle)
 * smaller numbers produce a larger reflection, larger numbers produce a
 * smaller reflection. This also means that reflections closer to the edges
 * will also have a different visual ripple effect than those towards the
 * middle of the reflection.
 * 
 * Amplitude: Starting and ending amplitude of waves allows you to control the
 * intensity of the reflection ripples. Use larger numbers for more intensity.
 * You have control over the values for the start and end values.
 * 
 * Wavelength: Starting and ending wavelength values determine the size of the
 * ripples for the reflection filter. Use larger numbers for larger wave sizes.
 * You have control over the values for the start and end values.
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
 * === Parallax-Related Notetags ===
 * 
 * ---
 *
 * <Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a regular parallax layer for this map by default.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 *
 * ---
 *
 * <Water Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Water Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a water-based parallax layer for this map by default.
 *   - This will utilize the water reflection properties and will only appear
 *     on water-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Solid Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Solid Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a solid-based parallax layer for this map by default.
 *   - This will utilize the solid reflection properties and will only appear
 *     on solid-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
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
 * - This enables horizontal or vertical scrolling for the parallax.
 * - Replace 'x' or 'y' with a Number value to determine how fast they will
 *   scroll across the screen.
 * - Use a negative value to make them scroll the other way.
 * - These effects are mutually exclusive from the "Map Locked" property.
 * 
 * ---
 * 
 * Map Locked
 * 
 * - This will cause the parallax to only scroll when the map scrolls.
 * - This has the same effect as naming a parallax with "!" in front of
 *   its filename.
 * - If the filename used for this parallax has "!" in front of it, the
 *   Map Locked effect will be automatically turned on.
 * - These effect is mutually exclusive from the "Horz Scroll" and
 *   "Vert Scroll" properties.
 * 
 * ---
 * 
 * Opacity: x
 * Opacity: x%
 * 
 * - Changes the opacity level of the parallax.
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
 * - Sets the blend mode for the icon on the parallax.
 * - Use only one of the above.
 * 
 * ---
 * 
 * Hue: x
 * Hue Shift: x
 * 
 * - Changes the hue of the parallax to 'x' so that you don't need to create
 *   multiple copies of the files with different colors.
 * - Replace 'x' with a number value between 0 and 360.
 * - If the "Hue Shift" property is also used, then adjust the hue of the
 *   parallax each frame by 'x' amount.
 *   - 'x' can be positive or negative.
 * 
 * ---
 * 
 * Color Tone: red, green, blue, gray
 * 
 * - Changes the color tone or tint of the parallax.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * 
 * ---
 * 
 * Region: id
 * Regions: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked regions with a
 *   matching ID (alongside valid terrain tags).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Terrain Tag: id
 * Terrain Tags: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked terrain tags
 *   with a matching ID (alongside valid regions).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * === Event Reflection-Related Notetags ===
 * 
 * ---
 *
 * <No Reflection>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This will cause the event to not show any reflection on reflective tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Reflection-Related Notetags ===
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * ---
 *
 * <Water Reflection Region: id>
 * <Water Reflection Regions: id, id, id>
 *
 * <Solid Reflection Region: id>
 * <Solid Reflection Regions: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the region ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Water Reflection Terrain Tag: id>
 * <Water Reflection Terrain Tags: id, id, id>
 *
 * <Solid Reflection Terrain Tag: id>
 * <Solid Reflection Terrain Tags: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the terrain tag ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain Tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 * 
 * <No Reflections>
 * 
 * - Used for: Map Notetags
 * - Disable water and map reflections on the current map.
 * 
 * ---
 *
 * <Water Reflection Top>
 * <Water Reflection Bottom>
 *
 * <Solid Reflection Top>
 * <Solid Reflection Bottom>
 *
 * - Used for: Map Notetags
 * - This will put the reflection layer either above all of the newly added
 *   parallaxes or below them.
 *   - If placed below, the reflection layer will not appear below the map
 *     editor's parallax layer.
 *   - If you change them to appear below the parallaxes, then pay attention to
 *     the opacity level of the parallaxes. If the parallaxes are too opaque,
 *     you will barely see the reflection.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Blur: x>
 * 
 * <Solid Reflection Blur: x>
 *
 * - Used for: Map Notetags
 * - Changes how much the water/solid tiles will blur the reflection for
 *   this map.
 * - Replace 'x' with a decimal Number value. Use a number between 0 and 1 for
 *   the best results.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Opacity: x>
 * <Water Reflection Opacity: x%>
 * 
 * <Solid Reflection Opacity: x>
 * <Solid Reflection Opacity: x%>
 *
 * - Used for: Map Notetags
 * - Changes the opacity level of the tile's reflection.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 * 
 * <Water Reflection Boundary: x>
 *
 * <Water Reflection Amplitude: start, end>
 * 
 * <Water Reflection Wavelength: start, end>
 *
 * - Used for: Map Notetags
 * - Requires Pixi JS Filters installed for the game project.
 * - These settings adjust the water reflection's ripple intensity.
 * - Replace Boundary's 'x' with a number value between 0 and 1.
 *   - Vertical position of the reflection point, default is 50% (middle)
 *     smaller numbers produce a larger reflection, larger numbers produce a
 *     smaller reflection. This also means that reflections closer to the edges
 *     will also have a different visual ripple effect than those towards the
 *     middle of the reflection.
 * - Replace Amplitude's 'start' and 'end' with number values representing how
 *   much to alter the intensity by.
 *   - Starting and ending amplitude of waves allows you to control the
 *     intensity of the reflection ripples.
 *   - Use larger numbers for more intensity.
 * - Replace Wavelength's 'start' and 'end' with number values representing the
 *   wave size.
 *   - Starting and ending wavelength values determine the size of the ripples
 *     for the reflection filter.
 *   - Use larger numbers for larger wave sizes.
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
 * === Parallax Plugin Commands ===
 * 
 * ---
 *
 * Parallax: Add/Change Settings
 * - Add/Change settings for target parallax.
 * - Does not alter the map editor's parallax.
 *
 *   Required:
 *
 *     ID:
 *     - What is the ID of this parallax to be added/changed?
 *
 *     Filename:
 *     - What is the filename of the parallax?
 *
 *     Type:
 *     - What kind of parallax is this going to be?
 *     - Normal
 *     - Water
 *     - Solid
 * 
 *   Optional Settings:
 * 
 *     Scrolling:
 *
 *       Map Lock?:
 *       - Lock the parallax to the map's scrolling?
 *       - Automatically enable if the filename starts with "!"
 *
 *       Loop Horizontally?:
 *       - Loop the parallax horizontally?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the horizontal scroll speed?
 *         - Use a negative value to invert the direction.
 *
 *       Loop Vertically?:
 *       - Loop the parallax vertically?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the vertical scroll speed?
 *         - Use a negative value to invert the direction.
 * 
 *     Appearance:
 *
 *       Opacity:
 *       - What is the opacity level for this parallax?
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the parallax?
 *       - You may use JavaScript code.
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Hue:
 *       - Do you wish to adjust this parallax's hue?
 *       - You may use JavaScript code.
 *
 *       Hue Shift:
 *       - How much do you want the hue to shift each frame?
 *       - You may use JavaScript code.
 *
 *       Color Tone:
 *       - What tone do you want for the parallax?
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Location:
 *
 *       Regions:
 *       - Which regions will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 *       Terrain Tags:
 *       - Which terrain tags will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 * ---
 * 
 * Parallax: Fade Opacity
 * - Fades the target parallax(es) opacity to a different value.
 * 
 *   ID(s):
 *   - Target which parallax(es)?
 *   - Cannot target the map editor's parallax.
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
 * Parallax: Remove
 * - Removes target parallax(es).
 *
 *   ID(s):
 *   - Remove which parallax(es)?
 *   - Cannot remove the map editor's parallax.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Water Reflection Settings
 * ============================================================================
 *
 * These are the default settings for water-based reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
 * 
 *   Water Boundary:
 *   - At which point is the water boundary?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Amplitude Start:
 *   - What should be the starting amplitude value?
 * 
 *   Amplitude End:
 *   - What should be the ending amplitude value?
 * 
 *   Wavelength Start:
 *   - What should be the starting wavelength value?
 * 
 *   Wavelength End:
 *   - What should be the ending wavelength value?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Solid Reflection Settings
 * ============================================================================
 *
 * These are the default settings for solid ground reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
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
 * ** Fixed a bug where having a '!' at the start of a parallax file's name
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
 * Version 1.08: May 18, 2023
 * * Bug Fixes!
 * ** Reflections should now work properly with VisuMZ_1_EventsMoveCore's
 *    latest version. Fix made by Arisu.
 * 
 * Version 1.07: August 4, 2022
 * * Compatibility Update!
 * ** Map Locked parallaxes now work better with smooth scroll.
 * 
 * Version 1.06: July 7, 2022
 * * Feature Update!
 * ** Blend modes are now revamped for the parallaxes to behave more like they
 *    do for pictures for better accuracy. Update made by Irina.
 * 
 * Version 1.05: January 27, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: January 6, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: December 9, 2021
 * * Documentation Update!
 * ** Added section to "Major Changes" for clarification purposes:
 * *** Not For Battle
 * *** For clarification, the VisuStella MZ Visual Parallxes plugin is NOT made
 *     for battle. There's a separate plugin for that called Visual Battle
 *     Environment. The reason why parallaxes aren't made for battle is because
 *     the way parallaxes are handled in map vary from how they would be
 *     handled in battle. Using the Visual Parallaxes Plugin Commands will only
 *     alter the parallax appearances when the player finishes battle.
 * * Feature Update!
 * ** Added fail safes to prevent Plugin Command usage during battle to cause
 *    problems while inside battle test. Update made by Irina.
 * 
 * Version 1.02: June 25, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for Event Title Scene.
 * 
 * Version 1.01: May 28, 2021
 * * Feature Update!
 * ** Fail safe added for those without Pixi JS Filters added.
 * ** Removed the VisuStella MZ Core Engine requirement.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 *
 * Version 1.00 Official Release Date: March 12, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxAddChangeSettings
 * @text Parallax: Add/Change Settings
 * @desc Add/Change settings for target parallax.
 * Does not alter the map editor's parallax.
 * 
 * @arg Required
 *
 * @arg id:num
 * @text ID
 * @parent Required
 * @type number
 * @min 1
 * @desc What is the ID of this parallax to be added/changed?
 * @default 1
 *
 * @arg filename:str
 * @text Filename
 * @parent Required
 * @type file
 * @dir img/parallaxes/
 * @desc What is the filename of the parallax?
 * @default >>>ATTENTION<<<
 *
 * @arg type:str
 * @text Type
 * @parent Required
 * @type select
 * @option Normal
 * @value normal
 * @option Water
 * @value water
 * @option Solid
 * @value solid
 * @desc What kind of parallax is this going to be?
 * @default normal
 *
 * @arg Optional:struct
 * @text Optional Settings
 * @type struct<Optional>
 * @desc Optional settings regarding Visual Parallaxes.
 * @default {"Scrolling":"","_parallaxZero:eval":"false","_parallaxLoopX:eval":"false","_parallaxSx:eval":"+0","_parallaxLoopY:eval":"false","_parallaxSy:eval":"+0","Appearance":"","opacity:eval":"255","blendMode:eval":"0","hue:eval":"0","hueShift:eval":"+0","colorTone:eval":"[0, 0, 0, 0]","Location":"","maskRegions:arraynum":"[]","maskTerrainTags:arraynum":"[]"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxFadeOpacity
 * @text Parallax: Fade Opacity
 * @desc Fades the target parallax(es) opacity to a different value.
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Target which parallax(es)?
 * Cannot target the map editor's parallax.
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
 * @command ParallaxRemove
 * @text Parallax: Remove
 * @desc Removes target parallax(es).
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Remove which parallax(es)?
 * Cannot remove the map editor's parallax.
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
 * @param VisualParallaxes
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param WaterReflect:struct
 * @text Water Reflection Settings
 * @type struct<WaterReflect>
 * @desc These are the default settings for water-based reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"1\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128","Boundary:num":"0.1","AmpStart:num":"2","AmpEnd:num":"4","WaveStart:num":"4","WaveEnd:num":"16"}
 *
 * @param SolidReflect:struct
 * @text Solid Reflection Settings
 * @type struct<SolidReflect>
 * @desc These are the default settings for solid ground reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"2\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128"}
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
 * Water Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WaterReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["1"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place water reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
 *
 * @param Boundary:num
 * @text Water Boundary
 * @parent Appearance
 * @desc At which point is the water boundary?
 * Use a decimal number between 0 and 1.
 * @default 0.1
 *
 * @param AmpStart:num
 * @text Amplitude Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting amplitude value?
 * @default 2
 *
 * @param AmpEnd:num
 * @text Amplitude End
 * @parent Appearance
 * @type number
 * @desc What should be the ending amplitude value?
 * @default 4
 *
 * @param WaveStart:num
 * @text Wavelength Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting wavelength value?
 * @default 4
 *
 * @param WaveEnd:num
 * @text Wavelength End
 * @parent Appearance
 * @type number
 * @desc What should be the ending wavelength value?
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * Solid Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SolidReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["2"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place solid reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
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
 * @param _parallaxZero:eval
 * @text Map Lock?
 * @parent Scrolling
 * @type boolean
 * @on Map Lock
 * @off No Map Lock
 * @desc Lock the parallax to the map's scrolling?
 * Automatically enable if the filename starts with "!"
 * @default false
 * 
 * @param _parallaxLoopX:eval
 * @text Loop Horizontally?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSx:eval
 * @text Scroll:
 * @parent _parallaxLoopX:eval
 * @desc What is the horizontal scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param _parallaxLoopY:eval
 * @text Loop Vertically?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSy:eval
 * @text Scroll:
 * @parent _parallaxLoopY:eval
 * @desc What is the vertical scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param Appearance
 *
 * @param opacity:eval
 * @text Opacity
 * @parent Appearance
 * @desc What is the opacity level for this parallax?
 * You may use JavaScript code.
 * @default 255
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
 * @desc What kind of blend mode do you wish to apply to the parallax?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hue:eval
 * @text Hue
 * @parent Appearance
 * @desc Do you wish to adjust this parallax's hue?
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
 * @desc What tone do you want for the parallax?
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
 * @desc Which regions will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Location
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 */
//=============================================================================

function _0x4916(_0x4f247b,_0x8594ca){const _0x3515d5=_0x3515();return _0x4916=function(_0x49164f,_0x20894c){_0x49164f=_0x49164f-0xd2;let _0x404371=_0x3515d5[_0x49164f];return _0x404371;},_0x4916(_0x4f247b,_0x8594ca);}const _0x37b6b3=_0x4916;(function(_0x318c47,_0x43b706){const _0x3c40dc=_0x4916,_0x1e0332=_0x318c47();while(!![]){try{const _0x361049=parseInt(_0x3c40dc(0x133))/0x1*(-parseInt(_0x3c40dc(0x158))/0x2)+parseInt(_0x3c40dc(0x1f0))/0x3+-parseInt(_0x3c40dc(0x236))/0x4+parseInt(_0x3c40dc(0x1fb))/0x5*(-parseInt(_0x3c40dc(0x1b7))/0x6)+-parseInt(_0x3c40dc(0x1af))/0x7*(-parseInt(_0x3c40dc(0x18a))/0x8)+-parseInt(_0x3c40dc(0x1a3))/0x9+parseInt(_0x3c40dc(0x16f))/0xa;if(_0x361049===_0x43b706)break;else _0x1e0332['push'](_0x1e0332['shift']());}catch(_0x514b51){_0x1e0332['push'](_0x1e0332['shift']());}}}(_0x3515,0x1a08f));var label=_0x37b6b3(0x16c),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x37b6b3(0x107)](function(_0xabe1f6){const _0x22261b=_0x37b6b3;return _0xabe1f6['status']&&_0xabe1f6[_0x22261b(0x163)][_0x22261b(0x123)]('['+label+']');})[0x0];VisuMZ[label][_0x37b6b3(0x217)]=VisuMZ[label][_0x37b6b3(0x217)]||{},VisuMZ['ConvertParams']=function(_0x4a05b6,_0x4efced){const _0x14c100=_0x37b6b3;for(const _0x4e57fb in _0x4efced){if(_0x14c100(0xff)!==_0x14c100(0xff)){const _0x5ecd3e=_0xb43729['VisualParallaxes'][_0x14c100(0x1a5)],_0x2816b8=_0x4486e0['note']||'';if(_0x2816b8[_0x14c100(0x1be)](_0x5ecd3e[_0x14c100(0x1db)]))return _0x4f26cf(_0x5f28d4['$1'])[_0x14c100(0x113)](',')[_0x14c100(0x1a8)](_0x20d669=>_0x519e3e(_0x20d669)||0x1)[_0x14c100(0x156)](0x0);return _0x16fee3[_0x14c100(0x157)](_0x14b76a[_0x14c100(0x1ed)])[_0x14c100(0x156)](0x0);}else{if(_0x4e57fb[_0x14c100(0x1be)](/(.*):(.*)/i)){const _0x2f51f1=String(RegExp['$1']),_0x38ffe6=String(RegExp['$2'])[_0x14c100(0x1c9)]()[_0x14c100(0x14f)]();let _0x1f8d05,_0x233bed,_0x5e4a2f;switch(_0x38ffe6){case _0x14c100(0x197):_0x1f8d05=_0x4efced[_0x4e57fb]!==''?Number(_0x4efced[_0x4e57fb]):0x0;break;case _0x14c100(0xda):_0x233bed=_0x4efced[_0x4e57fb]!==''?JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb]):[],_0x1f8d05=_0x233bed[_0x14c100(0x1a8)](_0x66a460=>Number(_0x66a460));break;case _0x14c100(0x226):_0x1f8d05=_0x4efced[_0x4e57fb]!==''?eval(_0x4efced[_0x4e57fb]):null;break;case _0x14c100(0x17f):_0x233bed=_0x4efced[_0x4e57fb]!==''?JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb]):[],_0x1f8d05=_0x233bed[_0x14c100(0x1a8)](_0x4fefa0=>eval(_0x4fefa0));break;case _0x14c100(0x122):_0x1f8d05=_0x4efced[_0x4e57fb]!==''?JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb]):'';break;case _0x14c100(0x14b):_0x233bed=_0x4efced[_0x4e57fb]!==''?JSON['parse'](_0x4efced[_0x4e57fb]):[],_0x1f8d05=_0x233bed['map'](_0x53a676=>JSON[_0x14c100(0x1ce)](_0x53a676));break;case _0x14c100(0xd5):_0x1f8d05=_0x4efced[_0x4e57fb]!==''?new Function(JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb])):new Function(_0x14c100(0x213));break;case _0x14c100(0x223):_0x233bed=_0x4efced[_0x4e57fb]!==''?JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb]):[],_0x1f8d05=_0x233bed[_0x14c100(0x1a8)](_0x102cbb=>new Function(JSON['parse'](_0x102cbb)));break;case _0x14c100(0x151):_0x1f8d05=_0x4efced[_0x4e57fb]!==''?String(_0x4efced[_0x4e57fb]):'';break;case _0x14c100(0x128):_0x233bed=_0x4efced[_0x4e57fb]!==''?JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb]):[],_0x1f8d05=_0x233bed[_0x14c100(0x1a8)](_0x4367b4=>String(_0x4367b4));break;case _0x14c100(0x173):_0x5e4a2f=_0x4efced[_0x4e57fb]!==''?JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb]):{},_0x1f8d05=VisuMZ[_0x14c100(0x11b)]({},_0x5e4a2f);break;case _0x14c100(0xdc):_0x233bed=_0x4efced[_0x4e57fb]!==''?JSON[_0x14c100(0x1ce)](_0x4efced[_0x4e57fb]):[],_0x1f8d05=_0x233bed[_0x14c100(0x1a8)](_0xf8f37b=>VisuMZ[_0x14c100(0x11b)]({},JSON[_0x14c100(0x1ce)](_0xf8f37b)));break;default:continue;}_0x4a05b6[_0x2f51f1]=_0x1f8d05;}}}return _0x4a05b6;},(_0x51890c=>{const _0x371f09=_0x37b6b3,_0x4b0146=_0x51890c[_0x371f09(0x10e)];for(const _0x29b6e5 of dependencies){if(_0x371f09(0x168)==='ggJwJ')_0x2fef61[_0x371f09(0x161)]=_0x6edb29['makeDeepCopy'](_0x1840e9['getSolidReflectionRegions']()),_0x2df5a1['maskTerrainTags']=_0x58b076[_0x371f09(0x157)](_0x42dbe5[_0x371f09(0xea)]());else{if(!Imported[_0x29b6e5]){if(_0x371f09(0x165)!==_0x371f09(0x218)){alert(_0x371f09(0x1c5)['format'](_0x4b0146,_0x29b6e5)),SceneManager['exit']();break;}else{_0x24120b[_0x371f09(0x16c)][_0x371f09(0x181)]['call'](this);if(!_0x59c3c3['getWaterReflectionTop']())this[_0x371f09(0x12f)]();if(!_0x4478fe[_0x371f09(0xe4)]())this[_0x371f09(0x1d2)]();this[_0x371f09(0x111)](),this['createParallaxLayers'](),this[_0x371f09(0x130)]();if(_0x4e559b[_0x371f09(0x21d)]())this[_0x371f09(0x12f)]();if(_0x401f0e[_0x371f09(0xe4)]())this[_0x371f09(0x1d2)]();}}}}const _0x9593a1=_0x51890c[_0x371f09(0x163)];if(_0x9593a1[_0x371f09(0x1be)](/\[Version[ ](.*?)\]/i)){if('pYfPd'===_0x371f09(0x1b8)){const _0x10183b=Number(RegExp['$1']);_0x10183b!==VisuMZ[label][_0x371f09(0x140)]&&(alert(_0x371f09(0x1cc)['format'](_0x4b0146,_0x10183b)),SceneManager[_0x371f09(0x109)]());}else _0x1d578a[_0x371f09(0x203)]=!![],_0x2a7e45[_0x371f09(0x176)]=_0x727b67(_0x32af3d['$1'])||0x0;}if(_0x9593a1[_0x371f09(0x1be)](/\[Tier[ ](\d+)\]/i)){const _0x5ad06c=Number(RegExp['$1']);_0x5ad06c<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x4b0146,_0x5ad06c,tier)),SceneManager[_0x371f09(0x109)]()):tier=Math[_0x371f09(0x228)](_0x5ad06c,tier);}VisuMZ[_0x371f09(0x11b)](VisuMZ[label][_0x371f09(0x217)],_0x51890c[_0x371f09(0x13e)]);})(pluginData),VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x13f)]=function(){return{'id':0x0,'filename':'','_parallaxZero':![],'_parallaxLoopX':![],'_parallaxLoopY':![],'_parallaxSx':0x0,'_parallaxSy':0x0,'_parallaxX':0x0,'_parallaxY':0x0,'opacity':0xff,'targetOpacity':0xff,'opacityDuration':0x0,'blendMode':0x0,'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[]};},PluginManager['registerCommand'](pluginData[_0x37b6b3(0x10e)],_0x37b6b3(0x21f),_0x4a8467=>{const _0x1043e6=_0x37b6b3;VisuMZ[_0x1043e6(0x11b)](_0x4a8467,_0x4a8467);if(_0x4a8467['id']<=0x0)return;if(_0x4a8467['filename']===''||_0x4a8467[_0x1043e6(0x195)]===_0x1043e6(0xf9))return;let _0x4066e1=JsonEx['makeDeepCopy'](_0x4a8467['Optional']);if(!_0x4066e1[_0x1043e6(0x10d)](_0x1043e6(0x161)))_0x4066e1=VisuMZ[_0x1043e6(0x16c)][_0x1043e6(0x13f)]();_0x4066e1['filename']=_0x4a8467['filename'],_0x4066e1['id']=_0x4a8467['id'];_0x4a8467[_0x1043e6(0x1fc)]===_0x1043e6(0x18b)&&(_0x4066e1[_0x1043e6(0x161)]['length']<=0x0&&(_0x4066e1[_0x1043e6(0x161)]=JsonEx['makeDeepCopy']($gameMap[_0x1043e6(0xe3)]())),_0x4066e1[_0x1043e6(0x1eb)][_0x1043e6(0xd3)]<=0x0&&(_0x4066e1[_0x1043e6(0x1eb)]=JsonEx[_0x1043e6(0x157)]($gameMap[_0x1043e6(0xdd)]())));_0x4a8467[_0x1043e6(0x1fc)]===_0x1043e6(0x17e)&&(_0x4066e1[_0x1043e6(0x161)]['length']<=0x0&&('ggiMV'===_0x1043e6(0x172)?_0x4066e1[_0x1043e6(0x161)]=JsonEx['makeDeepCopy']($gameMap[_0x1043e6(0xe4)]()):(_0x2326d2['loadBitmap'](),_0x583c0c&&_0x37fa60[_0x1043e6(0x1c7)][_0x1043e6(0x1e1)](_0x1a9638['createMaskBitmap'][_0x1043e6(0x126)](_0xa935bd)))),_0x4066e1[_0x1043e6(0x1eb)][_0x1043e6(0xd3)]<=0x0&&('jsTzy'==='jsTzy'?_0x4066e1[_0x1043e6(0x1eb)]=JsonEx['makeDeepCopy']($gameMap['getSolidReflectionTerrainTags']()):(_0x4cc5a8(_0x1043e6(0x1cc)[_0x1043e6(0x101)](_0x1cc66c,_0x413bf0)),_0x23f591[_0x1043e6(0x109)]())));while(_0x4066e1[_0x1043e6(0x193)][_0x1043e6(0xd3)]<0x4){_0x1043e6(0x1ac)!=='HEibj'?(_0x3f8bc8[_0x1043e6(0x16c)][_0x1043e6(0x103)]['call'](this),this['initVisualParallaxesEffects']()):_0x4066e1[_0x1043e6(0x193)]['push'](0x0);}_0x4066e1[_0x1043e6(0x232)]=0x0,_0x4066e1['_parallaxY']=0x0,_0x4066e1[_0x1043e6(0x150)]=_0x4a8467[_0x1043e6(0x15e)],_0x4066e1[_0x1043e6(0x1c0)]=0x0,$gameMap[_0x1043e6(0xf8)](_0x4066e1);}),PluginManager[_0x37b6b3(0xd6)](pluginData['name'],_0x37b6b3(0xe8),_0x59190d=>{const _0x3dd54e=_0x37b6b3;if(!SceneManager[_0x3dd54e(0x1a2)]())return;VisuMZ[_0x3dd54e(0x11b)](_0x59190d,_0x59190d);const _0x7df6d2=_0x59190d[_0x3dd54e(0x13c)];for(const _0x158b4f of _0x7df6d2){const _0x36e4c4=$gameMap[_0x3dd54e(0x1a1)](_0x158b4f);if(!_0x36e4c4)continue;_0x36e4c4[_0x3dd54e(0x150)]=_0x59190d[_0x3dd54e(0x150)]||0x0,_0x36e4c4[_0x3dd54e(0x1c0)]=_0x59190d[_0x3dd54e(0x1c0)]||0x0,_0x36e4c4[_0x3dd54e(0x1c0)]<=0x0&&(_0x36e4c4[_0x3dd54e(0x15e)]=_0x36e4c4[_0x3dd54e(0x150)]);}}),PluginManager[_0x37b6b3(0xd6)](pluginData[_0x37b6b3(0x10e)],'ParallaxRemove',_0x5870b1=>{const _0x295b4f=_0x37b6b3;if(!SceneManager[_0x295b4f(0x1a2)]())return;VisuMZ[_0x295b4f(0x11b)](_0x5870b1,_0x5870b1);const _0x16b0cc=_0x5870b1['list'];for(const _0x2f0687 of _0x16b0cc){$gameMap[_0x295b4f(0x1a4)](_0x2f0687);}}),VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x1a5)]={'Start':/<(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'End':/<\/(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'Filename':/(?:FILENAME|NAME):[ ](.*)/i,'HorzLoop':/(?:HORZ|HORIZONTAL) (?:LOOP|SCROLL):[ ](.*)/i,'VertLoop':/(?:VERT|VERTICAL) (?:LOOP|SCROLL):[ ](.*)/i,'ScrollLock':/<(?:MAP|SCROLL)[ ](?:LOCK|LOCKED)>/i,'OpacityRate':/(?:OPACITY):[ ](\d+)([%％])/i,'OpacityFlat':/(?:OPACITY):[ ](\d+)/i,'BlendMode':/BLEND MODE:[ ](.*)/i,'Hue':/HUE:[ ](\d+)/i,'HueShift':/HUE (?:SHIFT|SPEED):[ ](.*)/i,'Tone':/(?:COLOR TONE|TONE|TINT):[ ](.*)/i,'MaskRegions':/(?:REGION|REGIONS):[ ](.*)/i,'MaskTerrainTags':/TERRAIN (?:TAG|TAGS):[ ](.*)/i,'WaterRegions':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'WaterTerrainTags':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'WaterTop':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TOP>/i,'WaterBottom':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOTTOM>/i,'WaterBlur':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BLUR:[ ](.*)>/i,'WaterOpacityRate':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'WaterOpacityFlat':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)>/i,'WaterBoundary':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOUNDARY:[ ](.*)>/i,'WaterAmplitude':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:AMP|AMPLITUDE):[ ](.*)>/i,'WaterWavelength':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:WAVE|WAVELENGTH):[ ](.*)>/i,'SolidRegions':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'SolidTerrainTags':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'SolidTop':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TOP>/i,'SolidBottom':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BOTTOM>/i,'SolidBlur':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BLUR:[ ](.*)>/i,'SolidOpacityRate':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'SolidOpacityFlat':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)>/i,'NoReflection':/<NO (?:REFLECT|REFLECTION|REFLECTIONS)>/i},SceneManager[_0x37b6b3(0xfe)]=function(){const _0x48f73f=_0x37b6b3;return this[_0x48f73f(0xe1)]&&this['_scene'][_0x48f73f(0x1d4)]===Scene_Map;},SceneManager[_0x37b6b3(0x1a2)]=function(){const _0x30ea57=_0x37b6b3;return this[_0x30ea57(0xe1)]&&this['_scene']instanceof Scene_Map;},VisuMZ[_0x37b6b3(0x16c)]['Game_Map_setup']=Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x10a)],Game_Map[_0x37b6b3(0x13d)]['setup']=function(_0x523e97){const _0x53209a=_0x37b6b3;VisuMZ[_0x53209a(0x16c)][_0x53209a(0x12e)]['call'](this,_0x523e97),this[_0x53209a(0x234)](),this['registerReflectionSettings']();},Game_Map[_0x37b6b3(0x1c8)]=VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)][_0x37b6b3(0x220)][_0x37b6b3(0x231)],Game_Map[_0x37b6b3(0x114)]=VisuMZ['VisualParallaxes'][_0x37b6b3(0x217)][_0x37b6b3(0x220)]['TerrainTags'],Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1fd)]=function(){const _0x10a557=_0x37b6b3;if(DataManager[_0x10a557(0x16d)]())return!![];if(this['isLoopHorizontal']()||this[_0x10a557(0x1a9)]())return!![];const _0x25fd6c=VisuMZ[_0x10a557(0x16c)][_0x10a557(0x1a5)],_0xc6ecef=$dataMap[_0x10a557(0xd8)]||'';return _0xc6ecef[_0x10a557(0x1be)](_0x25fd6c[_0x10a557(0x131)])?!![]:![];},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0xe3)]=function(){const _0x518f76=_0x37b6b3,_0x1c980b=VisuMZ[_0x518f76(0x16c)][_0x518f76(0x1a5)],_0x525894=$dataMap[_0x518f76(0xd8)]||'';if(_0x525894[_0x518f76(0x1be)](_0x1c980b['WaterRegions'])){if(_0x518f76(0x200)!==_0x518f76(0x200)){_0x57f128['id']=_0x3f235e(_0x1a28ac['$1']);if(_0x29080d[_0x518f76(0x1be)](/WATER/i))_0x5851d6['maskRegions']=_0xe4be12[_0x518f76(0x157)](_0x24d0c7[_0x518f76(0xe3)]()),_0x58b284[_0x518f76(0x1eb)]=_0x831ce3[_0x518f76(0x157)](_0x4c3ef2[_0x518f76(0xdd)]());else _0x216edf['match'](/SOLID/i)&&(_0x2fcb78[_0x518f76(0x161)]=_0x192e64[_0x518f76(0x157)](_0x57193b[_0x518f76(0xe4)]()),_0x3a1cd2[_0x518f76(0x1eb)]=_0x416ff5[_0x518f76(0x157)](_0x209c02['getSolidReflectionTerrainTags']()));}else return String(RegExp['$1'])[_0x518f76(0x113)](',')[_0x518f76(0x1a8)](_0x36b0c4=>Number(_0x36b0c4)||0x1)[_0x518f76(0x156)](0x0);}return JsonEx[_0x518f76(0x157)](Game_Map['DEFAULT_WATER_REFLECTION_REGIONS'])[_0x518f76(0x156)](0x0);},Game_Map[_0x37b6b3(0x13d)]['getWaterReflectionTerrainTags']=function(){const _0x4b83c9=_0x37b6b3,_0x571321=VisuMZ[_0x4b83c9(0x16c)][_0x4b83c9(0x1a5)],_0x1bf9cb=$dataMap['note']||'';if(_0x1bf9cb['match'](_0x571321[_0x4b83c9(0x1e7)])){if(_0x4b83c9(0x230)!==_0x4b83c9(0x12b))return String(RegExp['$1'])[_0x4b83c9(0x113)](',')['map'](_0x157d7d=>Number(_0x157d7d)||0x1)[_0x4b83c9(0x156)](0x0);else this[_0x4b83c9(0x14a)](this[_0x4b83c9(0x20c)]()[_0x4b83c9(0x235)]);}return JsonEx[_0x4b83c9(0x157)](Game_Map[_0x4b83c9(0x114)])['remove'](0x0);},Game_Map[_0x37b6b3(0x210)]=VisuMZ['VisualParallaxes'][_0x37b6b3(0x217)][_0x37b6b3(0x220)][_0x37b6b3(0xe0)],Game_Map['DEFAULT_WATER_REFLECTION_FILTER_BLUR']=VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)][_0x37b6b3(0x220)]['Blur'],Game_Map[_0x37b6b3(0x194)]=VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)][_0x37b6b3(0x220)][_0x37b6b3(0x108)],Game_Map[_0x37b6b3(0x1f6)]=VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)]['WaterReflect'][_0x37b6b3(0x198)],Game_Map[_0x37b6b3(0x135)]=[VisuMZ[_0x37b6b3(0x16c)]['Settings'][_0x37b6b3(0x220)]['AmpStart'],VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)][_0x37b6b3(0x220)]['AmpEnd']],Game_Map[_0x37b6b3(0x188)]=[VisuMZ['VisualParallaxes'][_0x37b6b3(0x217)][_0x37b6b3(0x220)][_0x37b6b3(0x116)],VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)][_0x37b6b3(0x220)][_0x37b6b3(0x175)]],Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x21d)]=function(){const _0x250233=_0x37b6b3,_0x935a54=VisuMZ[_0x250233(0x16c)]['RegExp'],_0x37c5e9=$dataMap[_0x250233(0xd8)]||'';if(_0x37c5e9['match'](_0x935a54[_0x250233(0x1f7)])){if(_0x250233(0x204)===_0x250233(0x204))return!![];else _0x8546a[_0x250233(0x1a7)]-=_0x4b8ec2;}else{if(_0x37c5e9[_0x250233(0x1be)](_0x935a54['WaterBottom'])){if('ixuPn'===_0x250233(0x1d6))for(let _0x4e96ad=0x0;_0x4e96ad<_0x3adb72;_0x4e96ad++){const _0x26d33d=_0x3275f6[_0x250233(0xdf)](_0x1e44de,_0x4e96ad);(_0x124b3c[_0x250233(0x123)](_0x26d33d)||_0xe64c83[_0x250233(0x123)](_0x370d6e[_0x250233(0x1b0)](_0x557908,_0x4e96ad)))&&(this[_0x250233(0x1b5)][_0x250233(0x1c7)][_0x250233(0x206)](_0x4a3806*_0x2dae0e,_0x4e96ad*_0x220879,_0xa2c713,_0x547404,_0x250233(0x1a6)),_0x558368['VisuMZ_2_TileGrafterSystem']&&_0x1af5d4[_0x250233(0xe1)]['_grafterRefreshRegions'][_0x250233(0xd4)](_0x26d33d));}else return![];}}return Game_Map['DEFAULT_WATER_REFLECTION_FILTER_TOP'];},Game_Map['prototype']['getWaterReflectionBlur']=function(){const _0x31b760=_0x37b6b3,_0x2f7e75=VisuMZ[_0x31b760(0x16c)]['RegExp'],_0x20eaf2=$dataMap['note']||'';if(_0x20eaf2[_0x31b760(0x1be)](_0x2f7e75['WaterBlur'])){if('IqXVU'===_0x31b760(0x17a))_0x2d237a[_0x31b760(0x161)]=_0x2e5884[_0x31b760(0x157)](_0xe322d0[_0x31b760(0xe4)]());else return Math['max'](0x0,Number(RegExp['$1'])||0x0);}return Game_Map[_0x31b760(0x178)];},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1dc)]=function(){const _0x19d4a7=_0x37b6b3,_0x59d391=VisuMZ[_0x19d4a7(0x16c)]['RegExp'],_0x196bbf=$dataMap[_0x19d4a7(0xd8)]||'';if(_0x196bbf[_0x19d4a7(0x1be)](_0x59d391['WaterOpacityRate']))return Math[_0x19d4a7(0x1d7)]((Number(RegExp['$1'])||0x0)*0.01*0xff)[_0x19d4a7(0x105)](0x0,0xff);else{if(_0x196bbf['match'](_0x59d391[_0x19d4a7(0x129)]))return _0x19d4a7(0x141)!==_0x19d4a7(0x1cd)?(Number(RegExp['$1'])||0x0)[_0x19d4a7(0x105)](0x0,0xff):(_0x584ea6(_0x4d8f1e['$1'])||0x0)[_0x19d4a7(0x105)](0x0,0xff);}return Game_Map[_0x19d4a7(0x22f)];},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1d5)]=function(){const _0x88b7a4=_0x37b6b3,_0xfd1796=VisuMZ[_0x88b7a4(0x16c)][_0x88b7a4(0x1a5)],_0x272dd0=$dataMap[_0x88b7a4(0xd8)]||'';if(_0x272dd0[_0x88b7a4(0x1be)](_0xfd1796[_0x88b7a4(0x190)]))return(Number(RegExp['$1'])||0x0)['clamp'](0x0,0x1);return Game_Map[_0x88b7a4(0x1f6)];},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1e2)]=function(){const _0x2a5a94=_0x37b6b3,_0x101d1a=VisuMZ['VisualParallaxes'][_0x2a5a94(0x1a5)],_0x47b2e8=$dataMap['note']||'';if(_0x47b2e8[_0x2a5a94(0x1be)](_0x101d1a[_0x2a5a94(0xe5)])){const _0x556553=String(RegExp['$1'])[_0x2a5a94(0x113)](',')['map'](_0x1f0415=>Number(_0x1f0415)||0x0);if(_0x556553['length']<=0x1)_0x556553[0x1]=_0x556553[0x0];}return JsonEx[_0x2a5a94(0x157)](Game_Map[_0x2a5a94(0x135)])[_0x2a5a94(0x156)](0x0);},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1ad)]=function(){const _0x6cb584=_0x37b6b3,_0x573655=VisuMZ[_0x6cb584(0x16c)]['RegExp'],_0x9b9038=$dataMap['note']||'';if(_0x9b9038[_0x6cb584(0x1be)](_0x573655[_0x6cb584(0xe5)])){const _0x57c7ff=String(RegExp['$1'])['split'](',')['map'](_0x542d02=>Number(_0x542d02)||0x0);if(_0x57c7ff[_0x6cb584(0xd3)]<=0x1)_0x57c7ff[0x1]=_0x57c7ff[0x0];}return JsonEx[_0x6cb584(0x157)](Game_Map['DEFAULT_WATER_REFLECTION_FILTER_WAVELENGTH'])[_0x6cb584(0x156)](0x0);},Game_Map[_0x37b6b3(0x166)]=VisuMZ['VisualParallaxes'][_0x37b6b3(0x217)][_0x37b6b3(0xf4)][_0x37b6b3(0x231)],Game_Map[_0x37b6b3(0x1ed)]=VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)][_0x37b6b3(0xf4)][_0x37b6b3(0x187)],Game_Map[_0x37b6b3(0x13d)]['getSolidReflectionRegions']=function(){const _0x177ed2=_0x37b6b3,_0x4def39=VisuMZ[_0x177ed2(0x16c)]['RegExp'],_0x5308c8=$dataMap[_0x177ed2(0xd8)]||'';if(_0x5308c8[_0x177ed2(0x1be)](_0x4def39['SolidRegions'])){if(_0x177ed2(0x1e8)===_0x177ed2(0x1e8))return String(RegExp['$1'])['split'](',')[_0x177ed2(0x1a8)](_0x5e9364=>Number(_0x5e9364)||0x1)[_0x177ed2(0x156)](0x0);else{_0x3892e1[_0x177ed2(0x203)]&&(_0x2ea81b[_0x177ed2(0x232)]+=_0x6097c5[_0x177ed2(0x176)]/this[_0x177ed2(0x119)]()/0x2);_0x14fb52[_0x177ed2(0x110)]&&(_0x68f55f['_parallaxY']+=_0x5e7828[_0x177ed2(0x20a)]/this[_0x177ed2(0xf0)]()/0x2);_0x1c44ef['hue']+=_0xf0880a[_0x177ed2(0x159)];if(_0x5f0fff[_0x177ed2(0x1c0)]>0x0){const _0x6f45d1=_0x110f70[_0x177ed2(0x1c0)];_0x581ff9[_0x177ed2(0x15e)]=(_0x5c053a[_0x177ed2(0x15e)]*(_0x6f45d1-0x1)+_0x16de6a[_0x177ed2(0x150)])/_0x6f45d1,_0x58d5f7[_0x177ed2(0x1c0)]--;}}}return JsonEx[_0x177ed2(0x157)](Game_Map[_0x177ed2(0x166)])[_0x177ed2(0x156)](0x0);},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0xea)]=function(){const _0x1c1d03=_0x37b6b3,_0x364fe1=VisuMZ['VisualParallaxes'][_0x1c1d03(0x1a5)],_0x16b20f=$dataMap[_0x1c1d03(0xd8)]||'';if(_0x16b20f[_0x1c1d03(0x1be)](_0x364fe1[_0x1c1d03(0x1db)]))return String(RegExp['$1'])[_0x1c1d03(0x113)](',')[_0x1c1d03(0x1a8)](_0x36aaa1=>Number(_0x36aaa1)||0x1)['remove'](0x0);return JsonEx[_0x1c1d03(0x157)](Game_Map[_0x1c1d03(0x1ed)])[_0x1c1d03(0x156)](0x0);},Game_Map[_0x37b6b3(0x134)]=VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)][_0x37b6b3(0xf4)]['Top'],Game_Map[_0x37b6b3(0x18f)]=VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x217)]['SolidReflect'][_0x37b6b3(0xfd)],Game_Map[_0x37b6b3(0x22f)]=VisuMZ[_0x37b6b3(0x16c)]['Settings'][_0x37b6b3(0xf4)]['Opacity'],Game_Map[_0x37b6b3(0x13d)]['getSolidReflectionTop']=function(){const _0x254aa5=_0x37b6b3,_0x51a1c0=VisuMZ[_0x254aa5(0x16c)][_0x254aa5(0x1a5)],_0x3e6054=$dataMap[_0x254aa5(0xd8)]||'';if(_0x3e6054['match'](_0x51a1c0[_0x254aa5(0x1d1)])){if(_0x254aa5(0x1e3)!=='pWiba')return!![];else _0x533a7e[_0x254aa5(0x16c)][_0x254aa5(0x199)][_0x254aa5(0x1f1)](this),this[_0x254aa5(0xf7)]();}else{if(_0x3e6054[_0x254aa5(0x1be)](_0x51a1c0['SolidBottom']))return![];}return Game_Map[_0x254aa5(0x134)];},Game_Map[_0x37b6b3(0x13d)]['getSolidReflectionBlur']=function(){const _0x265b4c=_0x37b6b3,_0x16e18a=VisuMZ[_0x265b4c(0x16c)][_0x265b4c(0x1a5)],_0x15cd8c=$dataMap['note']||'';if(_0x15cd8c['match'](_0x16e18a[_0x265b4c(0x169)]))return Math[_0x265b4c(0x228)](0x0,Number(RegExp['$1'])||0x0);return Game_Map[_0x265b4c(0x18f)];},Game_Map['prototype'][_0x37b6b3(0x18c)]=function(){const _0x1892ec=_0x37b6b3,_0x14f311=VisuMZ[_0x1892ec(0x16c)]['RegExp'],_0x461f61=$dataMap[_0x1892ec(0xd8)]||'';if(_0x461f61[_0x1892ec(0x1be)](_0x14f311[_0x1892ec(0x21e)]))return Math[_0x1892ec(0x1d7)]((Number(RegExp['$1'])||0x0)*0.01*0xff)[_0x1892ec(0x105)](0x0,0xff);else{if(_0x461f61[_0x1892ec(0x1be)](_0x14f311[_0x1892ec(0x227)]))return(Number(RegExp['$1'])||0x0)[_0x1892ec(0x105)](0x0,0xff);}return Game_Map[_0x1892ec(0x22f)];},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x182)]=function(){const _0x123dcf=_0x37b6b3,_0x4ed710=this[_0x123dcf(0xe3)](),_0x5a04d1=this[_0x123dcf(0xdd)](),_0x548c14=this[_0x123dcf(0xe4)](),_0xc1049=this[_0x123dcf(0xea)](),_0xb12210=this[_0x123dcf(0x208)](),_0x320a28=this[_0x123dcf(0x215)]();this[_0x123dcf(0x1fa)]=![],this[_0x123dcf(0xfb)]=![];for(let _0x6f14a8=0x0;_0x6f14a8<_0xb12210;_0x6f14a8++){for(let _0x36bfc7=0x0;_0x36bfc7<_0xb12210;_0x36bfc7++){if('sURGC'===_0x123dcf(0x183)){const _0x467bcc=this[_0x123dcf(0xdf)](_0x6f14a8,_0x36bfc7);if(_0x4ed710['includes'](_0x467bcc)){if('mVNTu'==='DvKDd')return this[_0x123dcf(0xe1)]&&this['_scene'][_0x123dcf(0x1d4)]===_0x4f131c;else this[_0x123dcf(0x1fa)]=!![];}_0x548c14[_0x123dcf(0x123)](_0x467bcc)&&(this[_0x123dcf(0xfb)]=!![]);const _0x17785a=this['terrainTag'](_0x6f14a8,_0x36bfc7);_0x5a04d1[_0x123dcf(0x123)](_0x17785a)&&('gsOrV'==='gsOrV'?this[_0x123dcf(0x1fa)]=!![]:_0x397487[_0x123dcf(0x15e)]=_0x1f071c(_0x12264a['$1'])[_0x123dcf(0x105)](0x0,0xff));if(_0xc1049[_0x123dcf(0x123)](_0x17785a)){if(_0x123dcf(0x19e)==='wrytD')this[_0x123dcf(0xfb)]=!![];else return![];}if(this[_0x123dcf(0x1fa)]&&this[_0x123dcf(0xfb)])break;}else this[_0x123dcf(0x17d)][_0x123dcf(0x146)]=new _0x1e8f50['filters'][(_0x123dcf(0x229))]({'boundary':_0x24a702[_0x123dcf(0x1d5)](),'amplitude':_0x1201c2[_0x123dcf(0x1e2)](),'waveLength':_0x48929e[_0x123dcf(0x1ad)](),'mirror':![]});}}},Game_Map['prototype'][_0x37b6b3(0xdb)]=function(){const _0xaefcd8=_0x37b6b3;if(this[_0xaefcd8(0x1fa)]===undefined)this[_0xaefcd8(0x182)]();return this[_0xaefcd8(0x1fa)];},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x171)]=function(){const _0x45cb56=_0x37b6b3;if(this[_0x45cb56(0xfb)]===undefined)this[_0x45cb56(0x182)]();return this[_0x45cb56(0xfb)];},Game_Map['prototype'][_0x37b6b3(0x234)]=function(){const _0x2d7fbb=_0x37b6b3;this['_visualParallaxSettings']=[null];if(!$dataMap)return;const _0x28eba2=VisuMZ[_0x2d7fbb(0x16c)]['CreateLayerData']();for(const _0x547b66 of _0x28eba2){if(_0x2d7fbb(0xf2)!==_0x2d7fbb(0x19f)){if(!_0x547b66)continue;this[_0x2d7fbb(0xd9)][_0x547b66['id']]=_0x547b66;}else _0x431857[_0x2d7fbb(0x20f)]=!![];}},VisuMZ['VisualParallaxes']['CreateLayerData']=function(){const _0x2e7a1d=_0x37b6b3;if(!$dataMap)return[];const _0x559e8c=[],_0x55acaa=VisuMZ[_0x2e7a1d(0x16c)]['TemplateSettings']();if(!$dataMap[_0x2e7a1d(0xd8)])return[];const _0x3d3161=VisuMZ[_0x2e7a1d(0x16c)][_0x2e7a1d(0x1a5)],_0x3222c7=$dataMap[_0x2e7a1d(0xd8)]['split'](/[\r\n]+/);let _0x305b56=JsonEx[_0x2e7a1d(0x157)](_0x55acaa);for(const _0x4358c8 of _0x3222c7){if(_0x4358c8['match'](_0x3d3161[_0x2e7a1d(0x1ef)])){if(_0x2e7a1d(0x120)!==_0x2e7a1d(0x120))_0x2d45f0[_0x2e7a1d(0x232)]+=_0x22dd54[_0x2e7a1d(0x176)]/this[_0x2e7a1d(0x119)]()/0x2;else{_0x305b56['id']=Number(RegExp['$1']);if(_0x4358c8[_0x2e7a1d(0x1be)](/WATER/i))_0x305b56[_0x2e7a1d(0x161)]=JsonEx[_0x2e7a1d(0x157)]($gameMap[_0x2e7a1d(0xe3)]()),_0x305b56[_0x2e7a1d(0x1eb)]=JsonEx[_0x2e7a1d(0x157)]($gameMap[_0x2e7a1d(0xdd)]());else{if(_0x4358c8['match'](/SOLID/i)){if(_0x2e7a1d(0x1bb)!==_0x2e7a1d(0x15c))_0x305b56['maskRegions']=JsonEx[_0x2e7a1d(0x157)]($gameMap[_0x2e7a1d(0xe4)]()),_0x305b56[_0x2e7a1d(0x1eb)]=JsonEx[_0x2e7a1d(0x157)]($gameMap['getSolidReflectionTerrainTags']());else{const _0x2a35be=_0x56c7d6(_0x154385['$1'])*0.01;_0x253e2f[_0x2e7a1d(0x15e)]=_0x279992['round'](_0x2a35be*0xff)[_0x2e7a1d(0x105)](0x0,0xff);}}}}}else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x22b)])){const _0x4a8bb1=Number(RegExp['$1']);if(_0x4a8bb1>0x0&&_0x4a8bb1===_0x305b56['id']&&_0x305b56[_0x2e7a1d(0x195)]!=='')_0x559e8c[_0x2e7a1d(0xd4)](_0x305b56);_0x305b56=JsonEx[_0x2e7a1d(0x157)](_0x55acaa);}else{if(_0x305b56['id']<=0x0)continue;}}if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161['Filename']))_0x2e7a1d(0x15a)!==_0x2e7a1d(0x15a)?this[_0x2e7a1d(0x117)]=[]:(_0x305b56[_0x2e7a1d(0x195)]=String(RegExp['$1'])[_0x2e7a1d(0x14f)](),_0x305b56[_0x2e7a1d(0x195)][_0x2e7a1d(0x1c6)](0x0)==='!'&&('gBRfE'!==_0x2e7a1d(0x167)?_0x1289bb[_0x2e7a1d(0x15e)]=_0x391963[_0x2e7a1d(0x150)]:_0x305b56[_0x2e7a1d(0x20f)]=!![]));else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x207)]))_0x2e7a1d(0x180)!==_0x2e7a1d(0x180)?(this[_0x2e7a1d(0x1b5)]['bitmap']['fillRect'](_0x23e043*_0x3b9f9d,_0x18d95e*_0x4d6b2f,_0x27e5dc,_0x2b1b1e,_0x2e7a1d(0x1a6)),_0xa6ba74[_0x2e7a1d(0x1e0)]&&_0x3900df[_0x2e7a1d(0xe1)][_0x2e7a1d(0x1b4)][_0x2e7a1d(0xd4)](_0x1b1b2c)):(_0x305b56[_0x2e7a1d(0x203)]=!![],_0x305b56[_0x2e7a1d(0x176)]=Number(RegExp['$1'])||0x0);else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x145)]))_0x305b56[_0x2e7a1d(0x110)]=!![],_0x305b56[_0x2e7a1d(0x20a)]=Number(RegExp['$1'])||0x0;else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x104)]))_0x305b56[_0x2e7a1d(0x20f)]=!![];else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161['OpacityRate'])){const _0x20f764=Number(RegExp['$1'])*0.01;_0x305b56[_0x2e7a1d(0x15e)]=Math['round'](_0x20f764*0xff)[_0x2e7a1d(0x105)](0x0,0xff);}else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x106)]))_0x305b56[_0x2e7a1d(0x15e)]=Number(RegExp['$1'])[_0x2e7a1d(0x105)](0x0,0xff);else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x1ba)])){const _0x4f8626=String(RegExp['$1'])[_0x2e7a1d(0x1c9)]()[_0x2e7a1d(0x14f)](),_0x44a178=['NORMAL','ADDITIVE',_0x2e7a1d(0x1df),_0x2e7a1d(0x13a)];_0x305b56['blendMode']=_0x44a178['indexOf'](_0x4f8626)[_0x2e7a1d(0x105)](0x0,0x3);}else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x1c1)])){if(_0x2e7a1d(0x12a)!==_0x2e7a1d(0x12a)){const _0x1db2c6=_0xa6b58f(_0x202b79['$1'])['split'](',')['map'](_0x5ec887=>_0x4d000b(_0x5ec887)||0x0);if(_0x1db2c6[_0x2e7a1d(0xd3)]<=0x1)_0x1db2c6[0x1]=_0x1db2c6[0x0];}else _0x305b56[_0x2e7a1d(0x235)]=Number(RegExp['$1'])[_0x2e7a1d(0x105)](0x0,0x168);}else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x1ae)]))_0x305b56[_0x2e7a1d(0x159)]=Number(RegExp['$1'])||0x0;else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161['Tone'])){const _0x51ee79=String(RegExp['$1'])[_0x2e7a1d(0x113)](',')[_0x2e7a1d(0x1a8)](_0x33cb7e=>Number(_0x33cb7e)||0x0);while(_0x51ee79[_0x2e7a1d(0xd3)]<0x4)_0x51ee79['push'](0x0);_0x305b56[_0x2e7a1d(0x193)]=_0x51ee79;}else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x10b)])){const _0x4e8b50=String(RegExp['$1'])['split'](',')['map'](_0x3635af=>Number(_0x3635af)||0x1);_0x305b56['maskRegions']=_0x4e8b50;}else{if(_0x4358c8[_0x2e7a1d(0x1be)](_0x3d3161[_0x2e7a1d(0x214)])){if(_0x2e7a1d(0x1e5)!==_0x2e7a1d(0x1e5)){if(!this['_maskSprite'])return;const _0x43c7a0=this[_0x2e7a1d(0x20c)]()[_0x2e7a1d(0x161)],_0x18bbb6=this[_0x2e7a1d(0x20c)]()[_0x2e7a1d(0x1eb)];if(_0x43c7a0[_0x2e7a1d(0xd3)]<=0x0&&_0x18bbb6[_0x2e7a1d(0xd3)]<=0x0)return;if(_0x4f9742['isLoopHorizontal']()||_0x5de682[_0x2e7a1d(0x1a9)]())return;this[_0x2e7a1d(0x1b5)]['x']=_0x4b53c7[_0x2e7a1d(0x121)](-_0x1a63e5[_0x2e7a1d(0x152)]()*_0xcbb56c['tileWidth']()),this[_0x2e7a1d(0x1b5)]['y']=_0x351b54[_0x2e7a1d(0x121)](-_0xc37361[_0x2e7a1d(0x15d)]()*_0x2856ad[_0x2e7a1d(0xf0)]());}else{const _0xf91e06=String(RegExp['$1'])[_0x2e7a1d(0x113)](',')[_0x2e7a1d(0x1a8)](_0x5446cb=>Number(_0x5446cb)||0x1);_0x305b56['maskTerrainTags']=_0xf91e06;}}}}}}}}}}}}}}return _0x559e8c;},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x21b)]=function(){const _0xe76b66=_0x37b6b3;if(this['_visualParallaxSettings']===undefined){if(_0xe76b66(0x160)==='xCVjw'){const _0x201fe9=_0x2d683d(_0x17e517['$1']);_0x201fe9<_0x465ea8?(_0x46253e(_0xe76b66(0x1b6)[_0xe76b66(0x101)](_0x23028,_0x201fe9,_0x3b97e9)),_0x1ed1d5['exit']()):_0x1d6884=_0x1eac11[_0xe76b66(0x228)](_0x201fe9,_0x37cb22);}else this[_0xe76b66(0x234)]();}return this[_0xe76b66(0xd9)]['filter'](_0x3748cc=>!!_0x3748cc);},Game_Map['prototype']['getVisualParallaxSettings']=function(_0x4a2851){const _0x1e2e0b=_0x37b6b3;return this[_0x1e2e0b(0xd9)]=this[_0x1e2e0b(0xd9)]||[],this[_0x1e2e0b(0xd9)][_0x4a2851]||null;},Game_Map['prototype'][_0x37b6b3(0x21a)]=function(_0x1ea2ae){const _0x1307cf=_0x37b6b3,_0x69a94d=this[_0x1307cf(0x1a1)](_0x1ea2ae);if(_0x69a94d[_0x1307cf(0x20f)])return Math[_0x1307cf(0x121)](_0x69a94d[_0x1307cf(0x232)]*this[_0x1307cf(0x119)]());else{if(_0x69a94d[_0x1307cf(0x203)]){if(_0x1307cf(0x1f9)===_0x1307cf(0x20d))!this[_0x1307cf(0x136)]&&this[_0x1307cf(0xe6)](),this['_colorFilter'][_0x1307cf(0x14a)](this['_hue']),this[_0x1307cf(0x136)]['setColorTone'](this[_0x1307cf(0x185)]);else return _0x69a94d['_parallaxX']*this[_0x1307cf(0x119)]()/0x2;}else return 0x0;}},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x205)]=function(_0xd59bee){const _0x1e4c35=_0x37b6b3,_0x501161=this[_0x1e4c35(0x1a1)](_0xd59bee);if(_0x501161['_parallaxZero'])return Math[_0x1e4c35(0x121)](_0x501161[_0x1e4c35(0x1a7)]*this[_0x1e4c35(0xf0)]());else{if(_0x501161['_parallaxLoopY']){if('jOekP'!==_0x1e4c35(0x20e))return _0x501161[_0x1e4c35(0x1a7)]*this[_0x1e4c35(0xf0)]()/0x2;else{if(_0x19d5d2!=='')_0x35b28d+='\x0a';_0x52ede3+=_0x1721aa[_0x1e4c35(0x13e)][0x0];}}else return 0x0;}},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1a4)]=function(_0x37c240){const _0x54f1d6=_0x37b6b3;this[_0x54f1d6(0xd9)]=this[_0x54f1d6(0xd9)]||[];if(!this['_visualParallaxSettings'][_0x37c240])return;this[_0x54f1d6(0xd9)][_0x37c240]=null;const _0x10308b=SceneManager[_0x54f1d6(0xe1)][_0x54f1d6(0x19d)];_0x10308b&&_0x10308b['removeVisualParallaxLayer'](_0x37c240);},Game_Map['prototype'][_0x37b6b3(0xf8)]=function(_0x2b569e){const _0x796c69=_0x37b6b3,_0x1fd4c1=_0x2b569e['id'];_0x2b569e[_0x796c69(0x195)][_0x796c69(0x1c6)](0x0)==='!'&&(_0x2b569e[_0x796c69(0x20f)]=!![]);let _0x8dd5cf=![];this['_visualParallaxSettings']=this[_0x796c69(0xd9)]||[];if(this[_0x796c69(0xd9)][_0x1fd4c1]){const _0x29939=this[_0x796c69(0xd9)][_0x1fd4c1];if(!_0x29939[_0x796c69(0x161)][_0x796c69(0x148)](_0x2b569e[_0x796c69(0x161)])){if('nqzVZ'===_0x796c69(0x17b))_0x8dd5cf=!![];else return![];}else!_0x29939['maskTerrainTags']['equals'](_0x2b569e[_0x796c69(0x1eb)])&&('dpaAR'==='vyBSb'?this[_0x796c69(0x184)]['blendMode']=this['settings']()[_0x796c69(0xef)]:_0x8dd5cf=!![]);}this['_visualParallaxSettings'][_0x1fd4c1]=_0x2b569e;if(!SceneManager[_0x796c69(0xfe)]())return;const _0x46f7ae=SceneManager['_scene'][_0x796c69(0x19d)];_0x46f7ae&&_0x46f7ae['updateVisualParallaxLayer'](_0x1fd4c1,_0x8dd5cf);},VisuMZ['VisualParallaxes']['Game_Map_setDisplayPos']=Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x19b)],Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x19b)]=function(_0x3ac697,_0x224322){const _0x44df7c=_0x37b6b3;VisuMZ[_0x44df7c(0x16c)][_0x44df7c(0xec)][_0x44df7c(0x1f1)](this,_0x3ac697,_0x224322);for(const _0x523237 of this[_0x44df7c(0x21b)]()){if(!_0x523237)continue;if(this[_0x44df7c(0xfa)]())_0x523237['_parallaxX']=_0x3ac697;else{if(_0x44df7c(0x221)===_0x44df7c(0x221))_0x523237[_0x44df7c(0x232)]=this[_0x44df7c(0x14c)];else return _0x3fe765['max'](0x0,_0x4f169d(_0x412b4e['$1'])||0x0);}if(this[_0x44df7c(0x1a9)]())_0x523237['_parallaxY']=_0x224322;else{if('chOLF'===_0x44df7c(0x202))_0x523237[_0x44df7c(0x1a7)]=this[_0x44df7c(0x138)];else{const _0x18da7a=_0x9ce037[_0x44df7c(0x16c)][_0x44df7c(0x1a5)],_0x457abe=_0x1d6f0f[_0x44df7c(0xd8)]||'';if(_0x457abe[_0x44df7c(0x1be)](_0x18da7a[_0x44df7c(0x1d1)]))return!![];else{if(_0x457abe['match'](_0x18da7a[_0x44df7c(0x124)]))return![];}return _0x5baa63[_0x44df7c(0x134)];}}}},VisuMZ[_0x37b6b3(0x16c)]['Game_Map_scrollLeft']=Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1cb)],Game_Map['prototype'][_0x37b6b3(0x1cb)]=function(_0x23a28e){const _0x364284=_0x37b6b3,_0x2d0c11=this[_0x364284(0x14c)];VisuMZ[_0x364284(0x16c)][_0x364284(0xe2)]['call'](this,_0x23a28e);for(const _0x224367 of this['getVisualParallaxes']()){if('uXtBy'!==_0x364284(0xed)){if(!_0x224367)continue;if(this[_0x364284(0xfa)]()){if(_0x364284(0x1e6)===_0x364284(0x233)){const _0x18103f=_0x4d1385[_0x364284(0x16c)][_0x364284(0x1a5)],_0x1270e4=_0x7378e[_0x364284(0xd8)]||'';if(_0x1270e4['match'](_0x18103f[_0x364284(0x1f7)]))return!![];else{if(_0x1270e4[_0x364284(0x1be)](_0x18103f[_0x364284(0x11c)]))return![];}return _0x547060[_0x364284(0x210)];}else{if(_0x224367[_0x364284(0x203)]){if('rhtTm'!=='nolAt')_0x224367[_0x364284(0x232)]-=_0x23a28e;else{const _0x336895=this['event']()[_0x364284(0xd8)];if(_0x336895==='')return;this[_0x364284(0xfc)](_0x336895);}}}}else{if(this['width']()>=this['screenTileX']()){if('Kijyl'!==_0x364284(0x1c2))_0x224367[_0x364284(0x232)]+=this['_displayX']-_0x2d0c11;else return!![];}}}else return(_0x253bfb(_0x189131['$1'])||0x0)[_0x364284(0x105)](0x0,0xff);}},VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x137)]=Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x192)],Game_Map['prototype']['scrollRight']=function(_0x2ce169){const _0x37c707=_0x37b6b3,_0xebad93=this[_0x37c707(0x14c)];VisuMZ['VisualParallaxes'][_0x37c707(0x137)][_0x37c707(0x1f1)](this,_0x2ce169);for(const _0x484e72 of this[_0x37c707(0x21b)]()){if(!_0x484e72)continue;if(this[_0x37c707(0xfa)]()){if(_0x484e72[_0x37c707(0x203)]){if(_0x37c707(0x142)!==_0x37c707(0x142)){if(!this[_0x37c707(0x177)]&&_0x58dc35[_0x37c707(0xdb)]())this[_0x37c707(0x17d)][_0x37c707(0x1f2)](this[_0x37c707(0x1de)]),this[_0x37c707(0x177)]=!![];else this['_waterReflectAdded']&&!_0x2b5c29['hasWaterReflections']()&&(this[_0x37c707(0x17d)][_0x37c707(0x1bf)](this[_0x37c707(0x1de)]),this['_waterReflectAdded']=![]);}else _0x484e72[_0x37c707(0x232)]+=_0x2ce169;}}else this[_0x37c707(0x208)]()>=this[_0x37c707(0x11a)]()&&(_0x484e72[_0x37c707(0x232)]+=this[_0x37c707(0x14c)]-_0xebad93);}},VisuMZ['VisualParallaxes'][_0x37b6b3(0x100)]=Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x17c)],Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x17c)]=function(_0x1ffd91){const _0x8e907f=_0x37b6b3,_0x3637ba=this[_0x8e907f(0x138)];VisuMZ[_0x8e907f(0x16c)][_0x8e907f(0x100)][_0x8e907f(0x1f1)](this,_0x1ffd91);for(const _0x1898e4 of this[_0x8e907f(0x21b)]()){if(!_0x1898e4)continue;if(this[_0x8e907f(0x1a9)]())_0x1898e4['_parallaxLoopY']&&(_0x8e907f(0x1c3)===_0x8e907f(0x1c3)?_0x1898e4['_parallaxY']+=_0x1ffd91:_0x3cb4b0['_parallaxZero']=!![]);else this['height']()>=this[_0x8e907f(0xd7)]()&&(_0x1898e4['_parallaxY']+=this[_0x8e907f(0x138)]-_0x3637ba);}},VisuMZ[_0x37b6b3(0x16c)]['Game_Map_scrollUp']=Game_Map['prototype'][_0x37b6b3(0x16a)],Game_Map['prototype'][_0x37b6b3(0x16a)]=function(_0x58742f){const _0x230b38=_0x37b6b3,_0x57c318=this[_0x230b38(0x138)];VisuMZ[_0x230b38(0x16c)]['Game_Map_scrollUp'][_0x230b38(0x1f1)](this,_0x58742f);for(const _0x2aeba7 of this[_0x230b38(0x21b)]()){if(!_0x2aeba7)continue;if(this[_0x230b38(0x1a9)]()){if(_0x230b38(0x10c)===_0x230b38(0x10c))_0x2aeba7[_0x230b38(0x110)]&&(_0x2aeba7['_parallaxY']-=_0x58742f);else return this[_0x230b38(0xd9)]===_0x1c1f45&&this[_0x230b38(0x234)](),this[_0x230b38(0xd9)][_0x230b38(0x107)](_0x2a0683=>!!_0x2a0683);}else this[_0x230b38(0x215)]()>=this[_0x230b38(0xd7)]()&&(_0x2aeba7[_0x230b38(0x1a7)]+=this['_displayY']-_0x57c318);}},VisuMZ['VisualParallaxes'][_0x37b6b3(0xeb)]=Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1e4)],Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1e4)]=function(){const _0x531c7f=_0x37b6b3;VisuMZ['VisualParallaxes'][_0x531c7f(0xeb)]['call'](this);for(const _0x4c143a of this[_0x531c7f(0x21b)]()){if(_0x531c7f(0x162)!=='TVkVZ'){if(!_0x4c143a)continue;this[_0x531c7f(0x22a)](_0x4c143a);}else{const _0x488f75=this['findTargetVisualParallax'](_0x56bd14);_0x488f75&&this[_0x531c7f(0x1d8)][_0x531c7f(0x1bf)](_0x488f75);}}},Game_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x22a)]=function(_0x1896c3){const _0x436f72=_0x37b6b3;_0x1896c3['_parallaxLoopX']&&(_0x1896c3[_0x436f72(0x232)]+=_0x1896c3[_0x436f72(0x176)]/this[_0x436f72(0x119)]()/0x2);_0x1896c3['_parallaxLoopY']&&(_0x1896c3[_0x436f72(0x1a7)]+=_0x1896c3['_parallaxSy']/this[_0x436f72(0xf0)]()/0x2);_0x1896c3['hue']+=_0x1896c3[_0x436f72(0x159)];if(_0x1896c3[_0x436f72(0x1c0)]>0x0){if('lFeAL'!==_0x436f72(0x1f8))return(_0x43faa5(_0x56f3f3['$1'])||0x0)[_0x436f72(0x105)](0x0,0x1);else{const _0x2cbe18=_0x1896c3['opacityDuration'];_0x1896c3[_0x436f72(0x15e)]=(_0x1896c3['opacity']*(_0x2cbe18-0x1)+_0x1896c3['targetOpacity'])/_0x2cbe18,_0x1896c3[_0x436f72(0x1c0)]--;}}},VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x103)]=Game_Event['prototype'][_0x37b6b3(0xf5)],Game_Event[_0x37b6b3(0x13d)][_0x37b6b3(0xf5)]=function(){const _0x231f2a=_0x37b6b3;VisuMZ[_0x231f2a(0x16c)]['Game_Event_clearPageSettings'][_0x231f2a(0x1f1)](this),this[_0x231f2a(0x224)]();},VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x211)]=Game_Event[_0x37b6b3(0x13d)]['setupPageSettings'],Game_Event[_0x37b6b3(0x13d)][_0x37b6b3(0x139)]=function(){const _0x2ac805=_0x37b6b3;VisuMZ[_0x2ac805(0x16c)]['Game_Event_setupPageSettings']['call'](this),this['setupVisualParallaxesEffects']();},Game_Event[_0x37b6b3(0x13d)][_0x37b6b3(0x102)]=function(){const _0x202980=_0x37b6b3;if(!this[_0x202980(0x22d)]())return;this['initVisualParallaxesEffects'](),this[_0x202980(0x13b)](),this['setupVisualParallaxesCommentTags']();},Game_Event[_0x37b6b3(0x13d)][_0x37b6b3(0x13b)]=function(){const _0x27e61b=_0x37b6b3,_0x41e487=this[_0x27e61b(0x22d)]()[_0x27e61b(0xd8)];if(_0x41e487==='')return;this[_0x27e61b(0xfc)](_0x41e487);},Game_Event[_0x37b6b3(0x13d)]['setupVisualParallaxesCommentTags']=function(){const _0x20e108=_0x37b6b3;if(!this[_0x20e108(0x170)]())return;const _0x1a1431=this[_0x20e108(0x13c)]();let _0x201b29='';for(const _0x573fbd of _0x1a1431){if([0x6c,0x198][_0x20e108(0x123)](_0x573fbd[_0x20e108(0x1ee)])){if(_0x201b29!=='')_0x201b29+='\x0a';_0x201b29+=_0x573fbd[_0x20e108(0x13e)][0x0];}}this[_0x20e108(0xfc)](_0x201b29);},Game_Event[_0x37b6b3(0x13d)][_0x37b6b3(0x224)]=function(){this['_noReflection']=![];},Game_Event[_0x37b6b3(0x13d)][_0x37b6b3(0xfc)]=function(_0x291d19){const _0x36e248=_0x37b6b3,_0x1cd305=VisuMZ['VisualParallaxes']['RegExp'];if(_0x291d19['match'](_0x1cd305[_0x36e248(0x131)])){if(_0x36e248(0x132)!==_0x36e248(0x132))return 0x0;else this[_0x36e248(0x19c)]=!![];}};function Sprite_VisualParallax(){const _0x5ea87e=_0x37b6b3;this[_0x5ea87e(0x10f)](...arguments);}Sprite_VisualParallax[_0x37b6b3(0x13d)]=Object[_0x37b6b3(0x189)](TilingSprite[_0x37b6b3(0x13d)]),Sprite_VisualParallax[_0x37b6b3(0x13d)]['constructor']=Sprite_VisualParallax,Sprite_VisualParallax['prototype'][_0x37b6b3(0x10f)]=function(_0x54fb61){const _0x5324f7=_0x37b6b3;this[_0x5324f7(0x16e)]=_0x54fb61,TilingSprite[_0x5324f7(0x13d)][_0x5324f7(0x10f)]['call'](this),this['_createColorFilter'](),this[_0x5324f7(0x14e)](),this[_0x5324f7(0x1c7)][_0x5324f7(0x1e1)](this[_0x5324f7(0x1d3)][_0x5324f7(0x126)](this));},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x20c)]=function(){const _0x51dd8f=_0x37b6b3;return $gameMap[_0x51dd8f(0x1a1)](this[_0x51dd8f(0x16e)]);},Sprite_VisualParallax['prototype'][_0x37b6b3(0xe6)]=function(){const _0x3efb09=_0x37b6b3;this[_0x3efb09(0x222)]=0x0,this[_0x3efb09(0x185)]=[0x0,0x0,0x0,0x0],this[_0x3efb09(0x136)]=new ColorFilter();if(!this['filters']){if(_0x3efb09(0x149)!==_0x3efb09(0x149)){const _0x49aff8=_0x21b050[_0x3efb09(0x16c)][_0x3efb09(0x1a5)],_0x9dfe7=_0x37f5bd['note']||'';if(_0x9dfe7[_0x3efb09(0x1be)](_0x49aff8[_0x3efb09(0x12d)]))return _0x238b41[_0x3efb09(0x1d7)]((_0x58587b(_0x59e53a['$1'])||0x0)*0.01*0xff)[_0x3efb09(0x105)](0x0,0xff);else{if(_0x9dfe7[_0x3efb09(0x1be)](_0x49aff8[_0x3efb09(0x129)]))return(_0x180525(_0x25303e['$1'])||0x0)[_0x3efb09(0x105)](0x0,0xff);}return _0x5548ff[_0x3efb09(0x22f)];}else this[_0x3efb09(0x117)]=[];}this[_0x3efb09(0x117)][_0x3efb09(0xd4)](this[_0x3efb09(0x136)]);},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x118)]=function(){const _0x1fb49f=_0x37b6b3;if(!this[_0x1fb49f(0x136)]){if(_0x1fb49f(0x1b3)!==_0x1fb49f(0x1b3))return 0x0;else this[_0x1fb49f(0xe6)]();}this[_0x1fb49f(0x136)][_0x1fb49f(0x14a)](this[_0x1fb49f(0x222)]),this[_0x1fb49f(0x136)][_0x1fb49f(0x18d)](this[_0x1fb49f(0x185)]);},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x14e)]=function(){const _0x356e87=_0x37b6b3;this['_parallaxName']=this['settings']()['filename'],this[_0x356e87(0x1c7)]=ImageManager['loadParallax'](this[_0x356e87(0x14d)]);},Sprite_VisualParallax['prototype'][_0x37b6b3(0x1d3)]=function(){const _0x169138=_0x37b6b3;this[_0x169138(0x1b5)]=new Sprite(),this[_0x169138(0x1f5)]();},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x1f5)]=function(){const _0x52ffb1=_0x37b6b3;this[_0x52ffb1(0x1b5)][_0x52ffb1(0x1c7)]&&(_0x52ffb1(0x196)!==_0x52ffb1(0x186)?(this[_0x52ffb1(0x1b5)][_0x52ffb1(0x1c7)][_0x52ffb1(0x112)](),this[_0x52ffb1(0x1bf)](this[_0x52ffb1(0x1b5)])):_0x416672[_0x52ffb1(0x20f)]=!![]);const _0x4c6769=new Bitmap(Graphics[_0x52ffb1(0x208)],Graphics['height']);_0x4c6769[_0x52ffb1(0x206)](0x0,0x0,_0x4c6769[_0x52ffb1(0x208)],_0x4c6769[_0x52ffb1(0x215)],_0x52ffb1(0x1a6)),this['_maskSprite'][_0x52ffb1(0x1c7)]=_0x4c6769,this['addChild'](this['_maskSprite']),this['_maskFilter']=new PIXI[(_0x52ffb1(0x1aa))](this[_0x52ffb1(0x1b5)]),this[_0x52ffb1(0x117)][_0x52ffb1(0xd4)](this['_maskFilter']);const _0x17637c=this[_0x52ffb1(0x20c)]()[_0x52ffb1(0x161)],_0x432630=this[_0x52ffb1(0x20c)]()[_0x52ffb1(0x1eb)];if(_0x17637c['length']<=0x0&&_0x432630['length']<=0x0)return;if($gameMap[_0x52ffb1(0xfa)]()||$gameMap[_0x52ffb1(0x1a9)]())return;const _0x38301c=$gameMap[_0x52ffb1(0x208)](),_0x13a918=$gameMap['height'](),_0x41a671=$gameMap[_0x52ffb1(0x119)](),_0xaf5f8a=$gameMap[_0x52ffb1(0xf0)]();this[_0x52ffb1(0x1b5)][_0x52ffb1(0x1c7)]=new Bitmap(_0x38301c*_0x41a671,_0x13a918*_0xaf5f8a);for(let _0x44afce=0x0;_0x44afce<_0x38301c;_0x44afce++){if('yERLX'!==_0x52ffb1(0x1f4))for(let _0x4eb738=0x0;_0x4eb738<_0x13a918;_0x4eb738++){if(_0x52ffb1(0x1cf)==='NWzUz')_0x2d91d1['VisualParallaxes']['Game_Event_setupPageSettings'][_0x52ffb1(0x1f1)](this),this[_0x52ffb1(0x102)]();else{const _0x5b502e=$gameMap['regionId'](_0x44afce,_0x4eb738);if(_0x17637c[_0x52ffb1(0x123)](_0x5b502e)||_0x432630['includes']($gameMap[_0x52ffb1(0x1b0)](_0x44afce,_0x4eb738))){if(_0x52ffb1(0x22c)===_0x52ffb1(0x20b)){const _0x420e33=_0x23fecb[_0x52ffb1(0x16c)][_0x52ffb1(0x1a5)],_0x306f84=_0x40a0ed[_0x52ffb1(0xd8)]||'';if(_0x306f84[_0x52ffb1(0x1be)](_0x420e33[_0x52ffb1(0x1e7)]))return _0x4b419b(_0xd3f013['$1'])['split'](',')['map'](_0x37f6e8=>_0x31da96(_0x37f6e8)||0x1)[_0x52ffb1(0x156)](0x0);return _0x49e6f1[_0x52ffb1(0x157)](_0x36c67e['DEFAULT_WATER_REFLECTION_TERRAINTAGS'])[_0x52ffb1(0x156)](0x0);}else this[_0x52ffb1(0x1b5)][_0x52ffb1(0x1c7)][_0x52ffb1(0x206)](_0x44afce*_0x41a671,_0x4eb738*_0xaf5f8a,_0x41a671,_0xaf5f8a,_0x52ffb1(0x1a6)),Imported[_0x52ffb1(0x1e0)]&&SceneManager[_0x52ffb1(0xe1)][_0x52ffb1(0x1b4)]['push'](_0x5b502e);}}}else this[_0x52ffb1(0x1d8)][_0x52ffb1(0x1bf)](_0x2bb33e);}},Sprite_VisualParallax['prototype']['update']=function(){const _0x5e71dc=_0x37b6b3;TilingSprite[_0x5e71dc(0x13d)][_0x5e71dc(0x179)]['call'](this);if(!this[_0x5e71dc(0x1c7)])return;if(!this[_0x5e71dc(0x20c)]())return;this[_0x5e71dc(0x191)](),this[_0x5e71dc(0x147)](),this[_0x5e71dc(0xe7)](),this[_0x5e71dc(0x21c)](),this[_0x5e71dc(0x154)](),this[_0x5e71dc(0x115)]();},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x191)]=function(){const _0x3eb1e6=_0x37b6b3;this[_0x3eb1e6(0x15e)]=this[_0x3eb1e6(0x20c)]()[_0x3eb1e6(0x15e)];},Sprite_VisualParallax['prototype'][_0x37b6b3(0x147)]=function(){const _0x1daec=_0x37b6b3;this['origin']['x']=$gameMap[_0x1daec(0x21a)](this[_0x1daec(0x16e)]),this[_0x1daec(0x219)]['y']=$gameMap[_0x1daec(0x205)](this['_id']);},Sprite_VisualParallax['prototype'][_0x37b6b3(0xe7)]=function(){const _0x51b25c=_0x37b6b3;this[_0x51b25c(0x184)]&&(this[_0x51b25c(0x184)][_0x51b25c(0xef)]=this[_0x51b25c(0x20c)]()[_0x51b25c(0xef)]);},Sprite_VisualParallax[_0x37b6b3(0x13d)]['updateHue']=function(){const _0x1b0524=_0x37b6b3;this[_0x1b0524(0x14a)](this[_0x1b0524(0x20c)]()[_0x1b0524(0x235)]);},Sprite_VisualParallax['prototype']['setHue']=function(_0x4d00a4){const _0x1daafb=_0x37b6b3;this[_0x1daafb(0x222)]!==Number(_0x4d00a4)&&(_0x1daafb(0x1c4)!==_0x1daafb(0x1bd)?(this[_0x1daafb(0x222)]=Number(_0x4d00a4),this[_0x1daafb(0x118)]()):(_0x4f6e66['_parallaxLoopY']=!![],_0xf8baf2['_parallaxSy']=_0x3545ca(_0x4b290f['$1'])||0x0));},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x154)]=function(){const _0x16cd13=_0x37b6b3;this[_0x16cd13(0x18d)](this[_0x16cd13(0x20c)]()[_0x16cd13(0x193)]);},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x18d)]=function(_0x12021b){const _0x4c3246=_0x37b6b3;if(!(_0x12021b instanceof Array)){if(_0x4c3246(0x1ca)===_0x4c3246(0x1ca))throw new Error('Argument\x20must\x20be\x20an\x20array');else _0x4cac91[_0x4c3246(0x161)]['length']<=0x0&&(_0x53aed7[_0x4c3246(0x161)]=_0x505e7a[_0x4c3246(0x157)](_0x37bb5b[_0x4c3246(0xe4)]())),_0x390d79[_0x4c3246(0x1eb)][_0x4c3246(0xd3)]<=0x0&&(_0x273296['maskTerrainTags']=_0x375b94[_0x4c3246(0x157)](_0x2f89d5[_0x4c3246(0xea)]()));}!this[_0x4c3246(0x185)][_0x4c3246(0x148)](_0x12021b)&&(_0x4c3246(0x19a)===_0x4c3246(0x1da)?this[_0x4c3246(0x1fa)]=!![]:(this['_colorTone']=_0x12021b['clone'](),this[_0x4c3246(0x118)]()));},Sprite_VisualParallax[_0x37b6b3(0x13d)][_0x37b6b3(0x115)]=function(){const _0x53f031=_0x37b6b3;if(!this['_maskSprite'])return;const _0x40aa2b=this[_0x53f031(0x20c)]()[_0x53f031(0x161)],_0x1f62bd=this[_0x53f031(0x20c)]()['maskTerrainTags'];if(_0x40aa2b['length']<=0x0&&_0x1f62bd[_0x53f031(0xd3)]<=0x0)return;if($gameMap['isLoopHorizontal']()||$gameMap[_0x53f031(0x1a9)]())return;this[_0x53f031(0x1b5)]['x']=Math[_0x53f031(0x121)](-$gameMap[_0x53f031(0x152)]()*$gameMap['tileWidth']()),this[_0x53f031(0x1b5)]['y']=Math[_0x53f031(0x121)](-$gameMap[_0x53f031(0x15d)]()*$gameMap[_0x53f031(0xf0)]());};function _0x3515(){const _0x145880=['createWaterReflectionMask','WaterOpacityRate','Game_Map_setup','createWaterReflectionLayer','sortVisualParallaxes','NoReflection','kjuSL','8mOaVTi','DEFAULT_SOLID_REFLECTION_FILTER_TOP','DEFAULT_WATER_REFLECTION_FILTER_AMPLITUDE','_colorFilter','Game_Map_scrollRight','_displayY','setupPageSettings','SCREEN','setupVisualParallaxesNotetags','list','prototype','parameters','TemplateSettings','version','DpXlX','Znefq','createParallax','GsiYZ','VertLoop','_reflectFilter','updateOrigin','equals','sCwzT','setHue','ARRAYJSON','_displayX','_parallaxName','loadBitmap','trim','targetOpacity','STR','displayX','_scaleY','updateTone','createSolidReflectionMask','remove','makeDeepCopy','31156szWMGt','hueShift','iBSTy','children','jUqDf','displayY','opacity','FRFGL','FkpEn','maskRegions','tQTar','description','_parallaxDataRef','wyoBZ','DEFAULT_SOLID_REFLECTION_REGIONS','gBRfE','DwOqi','SolidBlur','scrollUp','BBNJQ','VisualParallaxes','isEventTest','_id','4611590dhKdrx','page','hasSolidReflections','ggiMV','STRUCT','followers','WaveEnd','_parallaxSx','_waterReflectAdded','DEFAULT_WATER_REFLECTION_FILTER_BLUR','update','wmbho','nqzVZ','scrollDown','_waterReflectLayer','wasolidter','ARRAYEVAL','Igbvg','Spriteset_Map_createParallax','registerReflectionSettings','sURGC','_maskFilter','_colorTone','JlhSx','TerrainTags','DEFAULT_WATER_REFLECTION_FILTER_WAVELENGTH','create','16sgldQv','water','getSolidReflectionOpacity','setColorTone','utEDD','DEFAULT_SOLID_REFLECTION_FILTER_BLUR','WaterBoundary','updateOpacity','scrollRight','colorTone','DEFAULT_WATER_REFLECTION_FILTER_OPACITY','filename','EIgux','NUM','Boundary','Spriteset_Map_createCharacters','errTs','setDisplayPos','_noReflection','_spriteset','wrytD','qVzPm','createReflectionMask','getVisualParallaxSettings','isInstanceOfSceneMap','288135Yjupge','removeVisualParallax','RegExp','#ffffff','_parallaxY','map','isLoopVertical','SpriteMaskFilter','removeVisualParallaxLayer','HEibj','getWaterReflectionWavelength','HueShift','301371GHQXqn','terrainTag','kNvoX','mgdIz','ucmfD','_grafterRefreshRegions','_maskSprite','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','377382tzfwrg','pYfPd','_baseSprite','BlendMode','VTyxy','_scaleX','pTMvV','match','removeChild','opacityDuration','Hue','LzdfG','JCxMP','Qxycv','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','charAt','bitmap','DEFAULT_WATER_REFLECTION_REGIONS','toUpperCase','NvTtt','scrollLeft','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','yknHK','parse','fKloy','_mask','SolidTop','createSolidReflectionLayer','createMaskSprite','constructor','getWaterReflectionBoundary','ACIgF','round','_parallaxContainer','_character','bFhSV','SolidTerrainTags','getWaterReflectionOpacity','updateWaterReflections','_waterReflectContainer','MULTIPLY','VisuMZ_2_TileGrafterSystem','addLoadListener','getWaterReflectionAmplitude','VWhiz','updateParallax','gAMjd','XYkcb','WaterTerrainTags','sPkkP','_solidReflectLayer','mask','maskTerrainTags','getSolidReflectionBlur','DEFAULT_SOLID_REFLECTION_TERRAINTAGS','code','Start','57231lQGQsV','call','addChild','scale','ghMJI','createMaskBitmap','DEFAULT_WATER_REFLECTION_FILTER_BOUNDARY','WaterTop','lFeAL','mNQtO','_hasWaterReflections','10vUZeUK','type','noReflections','_solidReflectContainer','_solidReflectAdded','fDfts','find','chOLF','_parallaxLoopX','UNnvj','getVisualParallaxOy','fillRect','HorzLoop','width','HPJqt','_parallaxSy','ZDWah','settings','ZxeoD','qzoMP','_parallaxZero','DEFAULT_WATER_REFLECTION_FILTER_TOP','Game_Event_setupPageSettings','_reflection','return\x200','MaskTerrainTags','height','updateVisualParallaxLayer','Settings','YpDcR','origin','getVisualParallaxOx','getVisualParallaxes','updateHue','getWaterReflectionTop','SolidOpacityRate','ParallaxAddChangeSettings','WaterReflect','JsBbz','_hue','ARRAYFUNC','initVisualParallaxesEffects','updateScaleBase','EVAL','SolidOpacityFlat','max','ReflectionFilter','updateVisualParallaxSettings','End','BuPgr','event','events','DEFAULT_SOLID_REFLECTION_FILTER_OPACITY','nBvZO','Regions','_parallaxX','yoedY','setupVisualParallaxes','hue','709080sZLuWw','reverseData','length','push','FUNC','registerCommand','screenTileY','note','_visualParallaxSettings','ARRAYNUM','hasWaterReflections','ARRAYSTRUCT','getWaterReflectionTerrainTags','IzmpM','regionId','Top','_scene','Game_Map_scrollLeft','getWaterReflectionRegions','getSolidReflectionRegions','WaterAmplitude','_createColorFilter','updateBlendMode','ParallaxFadeOpacity','_blurFilter','getSolidReflectionTerrainTags','Game_Map_updateParallax','Game_Map_setDisplayPos','lfVvo','BlurFilter','blendMode','tileHeight','createParallaxLayers','BLAxT','move','SolidReflect','clearPageSettings','createNewParallaxLayer','createCharacterReflections','addChangeVisualParallax','>>>ATTENTION<<<','isLoopHorizontal','_hasSolidReflections','checkVisualParallaxesStringTags','Blur','isSceneMap','mtKAR','Game_Map_scrollDown','format','setupVisualParallaxesEffects','Game_Event_clearPageSettings','ScrollLock','clamp','OpacityFlat','filter','Opacity','exit','setup','MaskRegions','SVpIZ','hasOwnProperty','name','initialize','_parallaxLoopY','createParallaxContainer','destroy','split','DEFAULT_WATER_REFLECTION_TERRAINTAGS','updateMask','WaveStart','filters','_updateColorFilter','tileWidth','screenTileX','ConvertParams','WaterBottom','createCharacters','findTargetVisualParallax','zWTnj','OOsPE','floor','JSON','includes','SolidBottom','tUZte','bind','time','ARRAYSTR','WaterOpacityFlat','TioMm','CnCaG'];_0x3515=function(){return _0x145880;};return _0x3515();}function Sprite_ReflectionCharacter(){const _0x1cd049=_0x37b6b3;this[_0x1cd049(0x10f)](...arguments);}Sprite_ReflectionCharacter[_0x37b6b3(0x13d)]=Object['create'](Sprite_Character[_0x37b6b3(0x13d)]),Sprite_ReflectionCharacter[_0x37b6b3(0x13d)][_0x37b6b3(0x1d4)]=Sprite_ReflectionCharacter,Sprite_ReflectionCharacter['prototype']['setupRadialLight']=function(_0x4af609){},Sprite_ReflectionCharacter[_0x37b6b3(0x13d)][_0x37b6b3(0x179)]=function(){const _0xf0fb03=_0x37b6b3;Sprite_Character[_0xf0fb03(0x13d)]['update'][_0xf0fb03(0x1f1)](this);},Sprite_ReflectionCharacter['prototype'][_0x37b6b3(0x225)]=function(){const _0x5b2ea8=_0x37b6b3;this[_0x5b2ea8(0x1f3)]['x']=this[_0x5b2ea8(0x1d9)][_0x5b2ea8(0x1bc)],this['scale']['y']=-this[_0x5b2ea8(0x1d9)][_0x5b2ea8(0x153)];},VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x181)]=Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x143)],Spriteset_Map['prototype'][_0x37b6b3(0x143)]=function(){const _0x3dad4d=_0x37b6b3;VisuMZ[_0x3dad4d(0x16c)][_0x3dad4d(0x181)]['call'](this);if(!$gameMap[_0x3dad4d(0x21d)]())this['createWaterReflectionLayer']();if(!$gameMap[_0x3dad4d(0xe4)]())this[_0x3dad4d(0x1d2)]();this[_0x3dad4d(0x111)](),this['createParallaxLayers'](),this['sortVisualParallaxes']();if($gameMap[_0x3dad4d(0x21d)]())this[_0x3dad4d(0x12f)]();if($gameMap[_0x3dad4d(0xe4)]())this[_0x3dad4d(0x1d2)]();},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x12f)]=function(){const _0x313064=_0x37b6b3;if(!PIXI[_0x313064(0x117)])return;if($gameMap[_0x313064(0xfa)]()||$gameMap['isLoopVertical']())return;if($gameMap[_0x313064(0x1fd)]())return;this['_waterReflectLayer']=new Sprite(),this['_waterReflectContainer']=new Sprite(),this[_0x313064(0x177)]=![],this[_0x313064(0x1b9)][_0x313064(0x1f2)](this[_0x313064(0x17d)]),this[_0x313064(0x17d)][_0x313064(0x117)]=[],this[_0x313064(0x17d)]['opacity']=$gameMap['getWaterReflectionOpacity'](),!!PIXI[_0x313064(0x117)][_0x313064(0x229)]&&(this[_0x313064(0x17d)][_0x313064(0x146)]=new PIXI['filters']['ReflectionFilter']({'boundary':$gameMap['getWaterReflectionBoundary'](),'amplitude':$gameMap[_0x313064(0x1e2)](),'waveLength':$gameMap[_0x313064(0x1ad)](),'mirror':![]})),!!PIXI[_0x313064(0x117)][_0x313064(0xee)]&&(_0x313064(0x1b2)!==_0x313064(0x1b2)?(this[_0x313064(0x222)]=_0x22e754(_0x10b0e4),this[_0x313064(0x118)]()):(this['_waterReflectLayer']['_blurFilter']=new PIXI['filters'][(_0x313064(0xee))]($gameMap['getWaterReflectionBlur']()),this[_0x313064(0x17d)][_0x313064(0x117)][_0x313064(0xd4)](this[_0x313064(0x17d)][_0x313064(0xe9)]))),this[_0x313064(0x12c)]();},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x12c)]=function(){const _0x2ba861=_0x37b6b3,_0x16b34d=$gameMap[_0x2ba861(0xe3)](),_0x353cf2=$gameMap[_0x2ba861(0xdd)](),_0x577ebf=this[_0x2ba861(0x1a0)](_0x16b34d,_0x353cf2);_0x577ebf&&(_0x2ba861(0x16b)===_0x2ba861(0x16b)?(this[_0x2ba861(0x1f2)](_0x577ebf),this[_0x2ba861(0x17d)][_0x2ba861(0x1ea)]=_0x577ebf):(_0x1d15d7[_0x2ba861(0x195)]=_0x4b6112(_0x2b70b9['$1'])[_0x2ba861(0x14f)](),_0x2204aa[_0x2ba861(0x195)]['charAt'](0x0)==='!'&&(_0x22cdc8[_0x2ba861(0x20f)]=!![])));},Spriteset_Map['prototype'][_0x37b6b3(0x1d2)]=function(){const _0x100d10=_0x37b6b3;if(!PIXI[_0x100d10(0x117)])return;if($gameMap[_0x100d10(0xfa)]()||$gameMap[_0x100d10(0x1a9)]())return;if($gameMap[_0x100d10(0x1fd)]())return;this[_0x100d10(0x1e9)]=new Sprite(),this['_solidReflectContainer']=new Sprite(),this[_0x100d10(0x1ff)]=![],this[_0x100d10(0x1b9)]['addChild'](this[_0x100d10(0x1e9)]),this[_0x100d10(0x1e9)][_0x100d10(0x117)]=[],this[_0x100d10(0x1e9)][_0x100d10(0x15e)]=$gameMap[_0x100d10(0x18c)](),!!PIXI[_0x100d10(0x117)][_0x100d10(0xee)]&&(this['_solidReflectLayer'][_0x100d10(0xe9)]=new PIXI[(_0x100d10(0x117))]['BlurFilter']($gameMap[_0x100d10(0x1ec)]()),this[_0x100d10(0x1e9)][_0x100d10(0x117)][_0x100d10(0xd4)](this[_0x100d10(0x1e9)][_0x100d10(0xe9)])),this['createSolidReflectionMask']();},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x155)]=function(){const _0xa90302=_0x37b6b3,_0x2e58ae=$gameMap['getSolidReflectionRegions'](),_0x3459da=$gameMap[_0xa90302(0xea)](),_0x435f03=this[_0xa90302(0x1a0)](_0x2e58ae,_0x3459da);_0x435f03&&(this[_0xa90302(0x1f2)](_0x435f03),this['_solidReflectLayer']['mask']=_0x435f03);},Spriteset_Map['prototype'][_0x37b6b3(0x1a0)]=function(_0x46b856,_0x4a7563){const _0x34bb75=_0x37b6b3;if(_0x46b856[_0x34bb75(0xd3)]<=0x0&&_0x4a7563[_0x34bb75(0xd3)]<=0x0)return null;const _0x2e88e8=$gameMap[_0x34bb75(0x208)](),_0x1948c7=$gameMap[_0x34bb75(0x215)](),_0x6912f=$gameMap[_0x34bb75(0x119)](),_0x3f82d9=$gameMap['tileHeight'](),_0x879dbd=0x0,_0x189b71=_0x879dbd*0x2,_0x231fb=new Sprite();_0x231fb[_0x34bb75(0x1c7)]=new Bitmap(_0x2e88e8*_0x6912f,_0x1948c7*_0x3f82d9);for(let _0x27fa6b=0x0;_0x27fa6b<_0x2e88e8;_0x27fa6b++){for(let _0x45cd1d=0x0;_0x45cd1d<_0x1948c7;_0x45cd1d++){const _0x145f38=$gameMap[_0x34bb75(0xdf)](_0x27fa6b,_0x45cd1d);if(_0x46b856[_0x34bb75(0x123)](_0x145f38)||_0x4a7563[_0x34bb75(0x123)]($gameMap[_0x34bb75(0x1b0)](_0x27fa6b,_0x45cd1d))){if(_0x34bb75(0x144)!==_0x34bb75(0x144))return _0x347c49(_0x2b6c8d['$1'])[_0x34bb75(0x113)](',')[_0x34bb75(0x1a8)](_0x5584f8=>_0x8294ca(_0x5584f8)||0x1)['remove'](0x0);else _0x231fb[_0x34bb75(0x1c7)][_0x34bb75(0x206)](_0x27fa6b*_0x6912f+_0x879dbd,_0x45cd1d*_0x3f82d9+_0x879dbd,_0x6912f-_0x189b71,_0x3f82d9-_0x189b71,_0x34bb75(0x1a6)),Imported[_0x34bb75(0x1e0)]&&SceneManager[_0x34bb75(0xe1)][_0x34bb75(0x1b4)][_0x34bb75(0xd4)](_0x145f38);}}}return _0x231fb;},VisuMZ[_0x37b6b3(0x16c)][_0x37b6b3(0x199)]=Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x11d)],Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x11d)]=function(){const _0x3bb20a=_0x37b6b3;VisuMZ['VisualParallaxes'][_0x3bb20a(0x199)][_0x3bb20a(0x1f1)](this),this[_0x3bb20a(0xf7)]();},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0xf7)]=function(){const _0x3e8dee=_0x37b6b3;if($gameMap[_0x3e8dee(0x1fd)]())return;const _0x168caa=[],_0x10f3ce=[];for(const _0xcdbab5 of $gameMap[_0x3e8dee(0x22e)]()){if(_0xcdbab5[_0x3e8dee(0x19c)])continue;_0x168caa[_0x3e8dee(0xd4)](new Sprite_ReflectionCharacter(_0xcdbab5)),_0x10f3ce[_0x3e8dee(0xd4)](new Sprite_ReflectionCharacter(_0xcdbab5));}for(const _0x4ddb3a of $gameMap['vehicles']()){'itVGe'==='itVGe'?(_0x168caa[_0x3e8dee(0xd4)](new Sprite_ReflectionCharacter(_0x4ddb3a)),_0x10f3ce['push'](new Sprite_ReflectionCharacter(_0x4ddb3a))):_0x182df5[_0x3e8dee(0x216)](_0x29afde,_0x95f29e);}for(const _0xc0c15 of $gamePlayer[_0x3e8dee(0x174)]()[_0x3e8dee(0xd2)]()){_0x168caa[_0x3e8dee(0xd4)](new Sprite_ReflectionCharacter(_0xc0c15)),_0x10f3ce[_0x3e8dee(0xd4)](new Sprite_ReflectionCharacter(_0xc0c15));}_0x168caa['push'](new Sprite_ReflectionCharacter($gamePlayer)),_0x10f3ce['push'](new Sprite_ReflectionCharacter($gamePlayer));if(this[_0x3e8dee(0x17d)]){if(_0x3e8dee(0x15f)!==_0x3e8dee(0xde))for(const _0x45e298 of _0x168caa){_0x45e298[_0x3e8dee(0x212)]=!![],this[_0x3e8dee(0x1de)][_0x3e8dee(0x1f2)](_0x45e298),_0x45e298[_0x3e8dee(0x1f3)]['y']=-0.85,_0x45e298[_0x3e8dee(0x117)]=_0x45e298[_0x3e8dee(0x117)]||[],this[_0x3e8dee(0x17d)][_0x3e8dee(0x146)]&&_0x45e298['filters'][_0x3e8dee(0xd4)](this[_0x3e8dee(0x17d)][_0x3e8dee(0x146)]);}else _0x55907d['bitmap']['addLoadListener'](_0x7de83d[_0x3e8dee(0x1f5)][_0x3e8dee(0x126)](_0x5ca923));}if(this[_0x3e8dee(0x1e9)]){if(_0x3e8dee(0x209)!==_0x3e8dee(0x209)){if(this[_0x3e8dee(0xfb)]===_0x5a1a89)this[_0x3e8dee(0x182)]();return this[_0x3e8dee(0xfb)];}else for(const _0x208e5c of _0x10f3ce){_0x208e5c[_0x3e8dee(0x212)]=!![],this[_0x3e8dee(0x1fe)][_0x3e8dee(0x1f2)](_0x208e5c),_0x208e5c[_0x3e8dee(0x1f3)]['y']=-0.85;}}},VisuMZ[_0x37b6b3(0x16c)]['Spriteset_Map_update']=Spriteset_Map['prototype'][_0x37b6b3(0x179)],Spriteset_Map[_0x37b6b3(0x13d)]['update']=function(){const _0x511135=_0x37b6b3;VisuMZ[_0x511135(0x16c)]['Spriteset_Map_update'][_0x511135(0x1f1)](this),this['updateWaterReflections'](),this['updateSolidReflections']();},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x1dd)]=function(){const _0x533d23=_0x37b6b3;if(!this[_0x533d23(0x17d)])return;if($gameMap){if(!this[_0x533d23(0x177)]&&$gameMap['hasWaterReflections']())this[_0x533d23(0x17d)][_0x533d23(0x1f2)](this[_0x533d23(0x1de)]),this[_0x533d23(0x177)]=!![];else this[_0x533d23(0x177)]&&!$gameMap[_0x533d23(0xdb)]()&&(this[_0x533d23(0x17d)]['removeChild'](this[_0x533d23(0x1de)]),this['_waterReflectAdded']=![]);}if(this['_waterReflectLayer']['_reflectFilter']){if(_0x533d23(0x18e)!=='GSobm')this[_0x533d23(0x17d)][_0x533d23(0x146)][_0x533d23(0x127)]+=0.05;else{const _0x1ca2f7=this[_0x533d23(0xd9)][_0xe6cf2b];if(!_0x1ca2f7[_0x533d23(0x161)][_0x533d23(0x148)](_0x3756e1['maskRegions']))_0x3695b0=!![];else!_0x1ca2f7[_0x533d23(0x1eb)][_0x533d23(0x148)](_0x34f8b5[_0x533d23(0x1eb)])&&(_0x458a8b=!![]);}}const _0x52905e=this[_0x533d23(0x17d)][_0x533d23(0x1d0)];_0x52905e&&(_0x52905e['x']=Math[_0x533d23(0x121)](-$gameMap['displayX']()*$gameMap[_0x533d23(0x119)]()),_0x52905e['y']=Math['floor'](-$gameMap[_0x533d23(0x15d)]()*$gameMap[_0x533d23(0xf0)]()));},Spriteset_Map[_0x37b6b3(0x13d)]['updateSolidReflections']=function(){const _0x398bdd=_0x37b6b3;if(!this[_0x398bdd(0x1e9)])return;if($gameMap){if(_0x398bdd(0x1b1)!==_0x398bdd(0x1b1))throw new _0x599754('Argument\x20must\x20be\x20an\x20array');else{if(!this[_0x398bdd(0x1ff)]&&$gameMap[_0x398bdd(0x171)]())this[_0x398bdd(0x1e9)][_0x398bdd(0x1f2)](this[_0x398bdd(0x1fe)]),this[_0x398bdd(0x1ff)]=!![];else{if(this[_0x398bdd(0x1ff)]&&!$gameMap['hasSolidReflections']()){if(_0x398bdd(0x11f)==='zWTnj')this[_0x398bdd(0x1e9)][_0x398bdd(0x1bf)](this[_0x398bdd(0x1fe)]),this[_0x398bdd(0x1ff)]=![];else{this[_0x398bdd(0xd9)]=this[_0x398bdd(0xd9)]||[];if(!this[_0x398bdd(0xd9)][_0x36982c])return;this['_visualParallaxSettings'][_0x92a595]=null;const _0x40d1ab=_0x13d349['_scene'][_0x398bdd(0x19d)];_0x40d1ab&&_0x40d1ab['removeVisualParallaxLayer'](_0x3a49fe);}}}}}const _0xec6e78=this[_0x398bdd(0x1e9)][_0x398bdd(0x1d0)];_0xec6e78&&(_0xec6e78['x']=Math[_0x398bdd(0x121)](-$gameMap[_0x398bdd(0x152)]()*$gameMap['tileWidth']()),_0xec6e78['y']=Math['floor'](-$gameMap[_0x398bdd(0x15d)]()*$gameMap['tileHeight']()));},Spriteset_Map['prototype'][_0x37b6b3(0x111)]=function(){const _0x5eacd=_0x37b6b3;this[_0x5eacd(0x1d8)]=new Sprite(),this['_baseSprite'][_0x5eacd(0x1f2)](this['_parallaxContainer']),this[_0x5eacd(0x164)]=[null];},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0xf1)]=function(){const _0x2cd673=_0x37b6b3,_0x90e9f5=$gameMap[_0x2cd673(0x21b)]();for(const _0x56bd38 of _0x90e9f5){if(!_0x56bd38)continue;this['createNewParallaxLayer'](_0x56bd38);}},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0xf6)]=function(_0x5f9570){const _0x502102=_0x37b6b3;if(!_0x5f9570)return;const _0x511a81=new Sprite_VisualParallax(_0x5f9570['id']);_0x511a81[_0x502102(0xf3)](0x0,0x0,Graphics['width'],Graphics[_0x502102(0x215)]),this[_0x502102(0x1d8)]['addChild'](_0x511a81);},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x130)]=function(){const _0x4585ae=_0x37b6b3;this['_parallaxContainer'][_0x4585ae(0x15b)]['sort']((_0x119882,_0x451b0c)=>_0x119882['_id']-_0x451b0c['_id']);},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x11e)]=function(_0x46130f){const _0x41378b=_0x37b6b3;return this['_parallaxContainer'][_0x41378b(0x15b)][_0x41378b(0x201)](_0x319500=>_0x319500[_0x41378b(0x16e)]===_0x46130f);},Spriteset_Map['prototype'][_0x37b6b3(0x1ab)]=function(_0xea3f60){const _0x3dc7fa=_0x37b6b3,_0x4d0ae7=this[_0x3dc7fa(0x11e)](_0xea3f60);if(_0x4d0ae7){if(_0x3dc7fa(0x125)===_0x3dc7fa(0x125))this[_0x3dc7fa(0x1d8)]['removeChild'](_0x4d0ae7);else{const _0x25ae0f=_0x1f0bff(_0x2a1c5d['$1'])[_0x3dc7fa(0x113)](',')['map'](_0x4629fa=>_0x5730eb(_0x4629fa)||0x1);_0x2e1dd0['maskRegions']=_0x25ae0f;}}},Spriteset_Map[_0x37b6b3(0x13d)][_0x37b6b3(0x216)]=function(_0x3892ff,_0x38c28d){const _0x47e122=_0x37b6b3,_0x4bba6e=this[_0x47e122(0x11e)](_0x3892ff);!_0x4bba6e?(this[_0x47e122(0xf6)]($gameMap[_0x47e122(0x1a1)](_0x3892ff)),this[_0x47e122(0x130)]()):(_0x4bba6e[_0x47e122(0x14e)](),_0x38c28d&&_0x4bba6e[_0x47e122(0x1c7)][_0x47e122(0x1e1)](_0x4bba6e[_0x47e122(0x1f5)][_0x47e122(0x126)](_0x4bba6e)));};