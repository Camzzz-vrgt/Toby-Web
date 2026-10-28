//=============================================================================
// VisuStella MZ - Unique Tile Effects
// VisuMZ_4_UniqueTileEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_UniqueTileEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.UniqueTileEffects = VisuMZ.UniqueTileEffects || {};
VisuMZ.UniqueTileEffects.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.07] [UniqueTileEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Unique_Tile_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to add new properties to tiles, by marking them with
 * regions or assigning those properties to the terrain tags. These new unique
 * tile effects allow more player and event interactivity with the environment.
 * Such interactivity ranges from tiles that cause the character to slide from
 * one end to the other to other tiles that bounce the character forward.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Slippery tiles will cause affected characters on them to slide forward
 *   until they stop and hit a solid object or wall.
 * * Some tiles can force movement in a specific direction by simply standing
 *   on top of them.
 * * Pitfall tiles can have the player dropping into them and taking damage.
 *   Objects can also be thrown into them and having them erased.
 * * The player and characters can now fall into the water and drown. However,
 *   players can also learn how to swim and turn water tiles into traversible
 *   parts of the map.
 * * Quicksand tiles will cause affected characters to sink down further
 *   whenever they take a step up to a limited amount of times.
 * * Lava tiles will cause affected characters to burn constantly.
 * * Shock tiles instantly jolt characters that step upon them. If it's the
 *   player, send them back to their previous position, too.
 * * Bounce tiles will cause characters that step onto them to bounce forward a
 *   certain number of tiles based on the bounce strength.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_2_MovementEffects
 *
 * Footstep sounds can be played for certain unique tiles if the VisuStella MZ
 * Movement Effects plugin is installed. Modify the settings found in the
 * Plugin Parameters to allow them to do so.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_MovementEffects
 * 
 * Smart Rush, Smart Jump, and Smart Blink cannot be used while on certain
 * unique tiles, like slippery tiles and force move tiles. This is because the
 * movement behavior will conflict with these tiles' properties. Some actions
 * like Smart Rush will be cut short when going onto these regions.
 * 
 * The general footstep sound effects will also stop playing on these unique
 * tiles. Instead, different sound effects declared through the Unique Tile
 * Effects plugin will be played instead.
 * 
 * Both Smart Rush and Smart Jump can move the player into a pitfall and other
 * similar tiles. Smart Blink, however, will not.
 * 
 * ---
 * 
 * VisuMZ_3_EventChainReact
 * 
 * While on certain unique tiles, some objects cannot be pushed or pulled. For
 * example, the player cannot pull objects with the Plugin Commands while there
 * is a slippery tile or force move tile behind the player.
 * 
 * Objects also cannot be pulled while on unique tiles like slippery tiles and
 * force move tiles.
 * 
 * ---
 *
 * ============================================================================
 * Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!
 * ============================================================================
 *
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * Naturally, this causes problems with the Unique Tile Effects plugin as the
 * water tiles allow for swimming and drowning.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 *
 * ---
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * ---
 * 
 * As of version 1.9.0+, these two methods no longer work to fix the problem.
 * There is a Plugin Parameter added to disable the error message. However,
 * this does not mean that the tileset flag data is fixed. Turn off the error
 * message at your will.
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
 * === Bounce Tile-Related Notetags ===
 * 
 * Bounce tiles will cause affected characters that step over them to jump
 * forward a specified amount of spaces based on their regions/terrain tags.
 * This allows characters to scale past obstacles and/or other events!
 * 
 * This jump effect has no rules other than it jumps forward that many spaces.
 * The no rules bit means the jump tile is capable of launching characters into
 * walls and/or on top of other events, so place your bounce tiles carefully!
 * We are not responsible for any weird landing locations!
 * 
 * If you are making maps where events can launch themselves with the aid of
 * bounce tiles, we recommend putting either slippery tiles or force move tiles
 * to move those events out of the way in the scenario where the player is
 * following behind. This is to prevent the player from landing on top of the
 * event.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Bounce d Region: x>
 * <Bounce d Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become bounce tiles, causing
 *   the characters to jump forward a specific 'distance'.
 * - Replace 'd' with a number from 1 to 9 representing the distance to jump.
 *   Numbers above 10 will be ignored to prevent clipping bugs.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a bounce tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Bounce d Terrain Tag: x>
 * <Bounce d Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become bounce tiles,
 *   causing the characters to jump forward a specific 'distance'.
 * - Replace 'd' with a number from 1 to 9 representing the distance to jump.
 *   Numbers above 10 will be ignored to prevent clipping bugs.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a bounce tile marker.
 *
 * ---
 *
 * <Can Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by bounce tiles and jump.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by bounce tiles and not jump.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Bounce>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by bounce tiles and not jump.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by bounce tiles and not jump.
 *
 * ---
 *
 * <Avoid Bounce>
 * <Beware Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on bounce tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Bounce>
 * <Ignore Bounce>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto bounce tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Force Move Tile-Related Notetags ===
 * 
 * Force move tiles cause affected characters on top of them to move in a
 * specified direction continuously. This means that even if a character is
 * stopped midway, transferred to the tile, or relocated to the force move
 * tile, once the path is clear, the character will be sent automatically
 * moving in the designated direction.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Force direction Region: x>
 * <Force direction Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become force move tiles,
 *   causing the characters on top of the go moving in the direction the tiles
 *   direct them to upon stepping on them.
 * - Replace 'direction' with a string that is either 'down', 'left', 'right',
 *   or 'up' (without the quotes) to designate the direction the tile will
 *   automatically move the character.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a force move tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Force direction Terrain Tag: x>
 * <Force direction Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these regions will become force move tiles,
 *   causing the characters on top of the go moving in the direction the tiles
 *   direct them to upon stepping on them.
 * - Replace 'direction' with a string that is either 'down', 'left', 'right',
 *   or 'up' (without the quotes) to designate the direction the tile will
 *   automatically move the character.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a force move tile marker.
 *
 * ---
 *
 * <Can Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by force move tiles.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by force move tiles.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Force Move>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by force move tiles.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by force move tiles.
 *
 * ---
 *
 * <Avoid Force Move>
 * <Beware Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on force move tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Force Move>
 * <Ignore Force Move>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto force move tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Lava Tile-Related Notetags ===
 * 
 * Lava tiles cause affected characters on top of them to continuously burn
 * over time regardless of whether or not they're moving on the lava tile.
 * When this happens to a player, the party will take lava burn damage, and
 * events will be erased.
 * 
 * When the character steps off a lava tile and is still surviving, the
 * otherwise continuously lava effect wears off. However, the damage remains
 * for the events and the number of times they can survive further lava burns
 * has been reduced.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Lava Region: x>
 * <Lava Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become lava tiles, causing
 *   the characters on top to continuously take damage regardless of whether or
 *   not they're moving on the lava tile.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a lava tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Lava Terrain Tag: x>
 * <Lava Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become lava tiles,
 *   causing the characters on top to continuously take damage regardless of
 *   whether or not they're moving on the lava tile.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a lava tile marker.
 *
 * ---
 *
 * <Can Lava Burn>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by lava tiles and burn.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Lava Burn>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by lava tiles and not burn.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Lava Burn>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by lava tiles and not burn.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by lava tiles and not burn.
 *
 * ---
 * 
 * <Lava Burn Max: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the event can be affected by lava tiles and burn, this determines the
 *   maximum amount of times they can burn before erasure.
 * - Replace 'x' with a number representing the maximum number of times the
 *   event can burn before erasure.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Avoid Lava>
 * <Beware Lava>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on lava tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Lava>
 * <Ignore Lava>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto lava tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Pitfall Tile-Related Notetags ===
 * 
 * Pitfalls (or bottomless pits) are tiles that when an affected character
 * walks over it, the character will fall to its doom. Players will have their
 * whole party take fall damage and return to a previously safe location.
 * Events will be erased as if an event command took care of them. Characters
 * can jump over pitfalls and be unharmed. Jumping directly into a pitfall will
 * trigger a lethal reaction.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Pitfall Region: x>
 * <Pitfall Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become pitfall tiles,
 *   causing the characters that walk over them to fall in.
 *   - If the player character falls in, the party takes damage.
 *   - If an event falls in, it is erased.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a pitfall tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Pitfall Terrain Tag: x>
 * <Pitfall Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become pitfall tiles,
 *   causing the characters on top of the go sliding in the direction they're
 *   facing upon stepping on them.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a pitfall tile marker.
 *
 * ---
 * 
 * <Pitfall Transfer: mapID>
 * <Pitfall Transfer: mapID, x, y>
 * 
 * - Used for: Map Notetags
 * - If the player falls into a pitfall tile on this specific map, the player
 *   will be transferred to a different map (after taking damage).
 *   - If the <Pitfall Transfer: mapID> variant is used, transfer the player to
 *     the new map, but keep the current X, Y coordinates.
 *   - If the <Pitfall Transfer: mapID, x, y> variant is used, transfer the
 *     player to specific X, Y coordinates, too.
 *   - The player's direction will be retained in both cases.
 * - Replace 'mapID' with a number representing the ID of the map to transfer
 *   to. Use '0' to keep it to the current map.
 * - Replace 'x' and 'y' with numbers representing the respective target X and
 *   Y coordinates on the new map. If these aren't used, then the player will
 *   retain the current X and Y coordinates.
 * 
 * ---
 *
 * <Can Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by pitfall tiles and fall in.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by pitfall tiles and can't fall in. They are
 *   also unable to walk into them without Through-state assistance.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Pitfall>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by pitfall tiles and can't fall in.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by pitfall tiles and can't fall in.
 *
 * ---
 *
 * <Avoid Pitfall>
 * <Beware Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on pitfall tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Pitfall>
 * <Ignore Pitfall>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto pitfall tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Quicksand Tile-Related Notetags ===
 * 
 * Quicksand tiles cause affected characters on top of them to slowly sink
 * deeper with each step they take and visibly go deeper until they fully sink.
 * When this happens to a player, the party will take sandsink damage and then
 * return to a previously safe location. Events will be erased.
 * 
 * When a character steps on a non-quicksand tile, the sandsink counter resets
 * and the character fully resurfaces itself from the ground.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Quicksand Region: x>
 * <Quicksand Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become quicksand tiles,
 *   causing the characters to slowly sink deeper with each step.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a quicksand tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Quicksand Terrain Tag: x>
 * <Quicksand Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become quicksand tiles,
 *   causing the characters to slowly sink deeper with each step.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a quicksand tile marker.
 *
 * ---
 *
 * <Can Sandsink>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by quicksand tiles and sandsink.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Sandsink>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by quicksand tiles and not sandsink.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Sandsink>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by quicksand tiles and not sandsink.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by quicksand tiles and not sandsink.
 *
 * ---
 *
 * <Avoid Quicksand>
 * <Beware Quicksand>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on quicksand tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Quicksand>
 * <Ignore Quicksand>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto quicksand tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Shock Tile-Related Notetags ===
 * 
 * When characters that are affected by shock tiles and step over them, the
 * tile will shock and zap them. The player will have the whole party take
 * shock damage and then return to a previously safe location. Events will be
 * erased immediately.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Shock Region: x>
 * <Shock Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become shock tiles, causing
 *   the characters to be shocked and zapped.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a shock tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Shock Terrain Tag: x>
 * <Shock Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become shock tiles,
 *   causing the characters to be shocked and zapped.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a shock tile marker.
 *
 * ---
 *
 * <Can Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by shock tiles and being zapped.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by shock tiles and not be zapped.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Sandsink>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by shock tiles and not be zapped.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by shock tiles and not be zapped.
 *
 * ---
 *
 * <Avoid Shock>
 * <Beware Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on shock tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Shock>
 * <Ignore Shock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto shock tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Slippery Tile-Related Notetags ===
 * 
 * Slippery tiles cause affected characters on top of them to slide forward
 * until they hit a wall or another object. Once they stop, they can turn and
 * move a different direction. If this new direction is still on the slippery
 * tile, the character will continue sliding that direction, too.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Slippery Region: x>
 * <Slippery Regions: x, x, x>
 *
 * - Used for: Map Notetags
 * - Any map tiles marked with these regions will become slippery tiles,
 *   causing the characters on top of the go sliding in the direction they're
 *   facing upon stepping on them.
 * - Replace 'x' with a number from 1 to 255 representing the ID of the region
 *   you wish to use as a slippery tile marker.
 * - If you use this notetag, it will override the default region settings
 *   found in the Plugin Parameters.
 *
 * ---
 *
 * <Slippery Terrain Tag: x>
 * <Slippery Terrain Tags: x, x, x>
 *
 * - Used for: Tileset Notetags
 * - Any map tiles marked with these terrain tags will become slippery tiles,
 *   causing the characters on top of the go sliding in the direction they're
 *   facing upon stepping on them.
 * - Replace 'x' with a number from 1 to 7 representing the ID of the terrain
 *   tag you wish to use as a slippery tile marker.
 *
 * ---
 *
 * <Can Slip>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by slippery tiles and slide.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Slip>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by slippery tiles and not slide.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Slip>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become unaffected by slippery tiles and not slide.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become unaffected by slippery tiles and not slide.
 *
 * ---
 *
 * <Avoid Slippery>
 * <Beware Slippery>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on slippery tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Slippery>
 * <Ignore Slippery>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto slippery tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Water Tile-Related Notetags ===
 * 
 * Water tiles are anything that a boat or ship can pass over and do not need
 * to be marked by regions or terrain tags.  Water tiles can cause affected
 * characters to drown in them when walking over them. Players will have their
 * whole party take drowning damage and then return to a previously safe
 * location. Events will be erased. If the player is given the ability to swim,
 * the player can traverse water tiles without any drowning problems.
 * 
 * Each tile can only have one unique tile effect on them at a time.
 * 
 * ---
 *
 * <Can Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event capable of being affected by water tiles and drown.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Anti-Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event unaffected by water tiles and not drown. They are also
 *   unable to naturally walk into them withou Through-state assistance.
 * - This will override the default settings found in the Plugin Parameters.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Can Swim>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - If the party has an actor equipped a weapon or armor with this notetag, 
 *   the player will become able to swim in water and traverse them.
 * - If the party has a regular item with this notetag in their inventory,
 *   the player will become able to swim in water and traverse them.
 *
 * ---
 *
 * <Avoid Drown>
 * <Beware Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the event to avoid stepping on water tiles when self moving.
 * - The event can still step onto them when moved via event movement routes.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Careless Drown>
 * <Ignore Drown>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event can carelessly move onto water tiles when self moving.
 * - This will override the default settings found in the Plugin Parameters.
 * - The notetag and comment tag variants do the same thing. Which you choose
 *   to use is entirely up to personal preference.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Player Plugin Commands ===
 * 
 * ---
 *
 * Player: Set Bounce Status
 * - Changes the player character's ability to navigate on Bounce Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Bounce Tiles.
 *
 * ---
 *
 * Player: Set Force Move Status
 * - Changes the player character's ability to navigate on Force Move Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Force Move Tiles.
 *
 * ---
 *
 * Player: Set Lava Status
 * - Changes the player character's ability to navigate on Lava Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Lava Tiles.
 *
 * ---
 *
 * Player: Set Quicksand Status
 * - Changes the player character's ability to navigate on Quicksand Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Quicksand Tiles.
 *
 * ---
 *
 * Player: Set Shock Status
 * - Changes the player character's ability to navigate on Shock Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Shock Tiles.
 *
 * ---
 *
 * Player: Set Slippery Status
 * - Changes the player character's ability to navigate on Slippery Tiles.
 *
 *   Immune?:
 *   - Changes the player character's ability to navigate on Slippery Tiles.
 *
 * ---
 *
 * Player: Set Swimming Status
 * - Changes the player character's ability to navigate on water tiles.
 *
 *   Allow?:
 *   - Changes the player character's ability to navigate on water tiles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Bounce Tile Settings
 * ============================================================================
 *
 * Settings related to Bounce Tiles.
 * 
 * Bounce tiles will cause affected characters that step over them to jump
 * forward a specified amount of spaces based on their regions/terrain tags.
 * This allows characters to scale past obstacles and/or other events!
 * 
 * This jump effect has no rules other than it jumps forward that many spaces.
 * The no rules bit means the jump tile is capable of launching characters into
 * walls and/or on top of other events, so place your bounce tiles carefully!
 * We are not responsible for any weird landing locations!
 * 
 * If you are making maps where events can launch themselves with the aid of
 * bounce tiles, we recommend putting either slippery tiles or force move tiles
 * to move those events out of the way in the scenario where the player is
 * following behind. This is to prevent the player from landing on top of the
 * event.
 *
 * ---
 *
 * General
 * 
 *   Default Region(s):
 * 
 *     Bounce 1-9 Region(s):
 *     - Which region(s) will be used to mark this tile type?
 *     - Ignore if map has <Bounce 1-9 Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 *
 * ---
 *
 * Sound Effects
 * 
 *   Effect:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Force Move Tile Settings
 * ============================================================================
 *
 * Settings related to Force Move Tiles.
 * 
 * Force move tiles cause affected characters on top of them to move in a
 * specified direction continuously. This means that even if a character is
 * stopped midway, transferred to the tile, or relocated to the force move
 * tile, once the path is clear, the character will be sent automatically
 * moving in the designated direction.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 * 
 *     Down Region(s):
 *     Left Region(s):
 *     Right Region(s):
 *     Up Region(s):
 *     - Which region(s) will be used to mark this tile type?
 *     - Ignore if map has <Force direction Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 * 
 *   Tile Sprite Pattern:
 *   - Forces this sprite pattern when on this tile type.
 *   - Use -1 to allow characters to freely animate.
 *
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Lava Tile Settings
 * ============================================================================
 *
 * Settings related to Lava Tiles.
 * 
 * Lava tiles cause affected characters on top of them to continuously burn
 * over time regardless of whether or not they're moving on the lava tile.
 * When this happens to a player, the party will take lava burn damage, and
 * events will be erased.
 * 
 * When the character steps off a lava tile and is still surviving, the
 * otherwise continuously lava effect wears off. However, the damage remains
 * for the events and the number of times they can survive further lava burns
 * has been reduced.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Lava Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *     Event Lava Burn Max:
 *     - Default number of times an event can suffer lava burns before
 *       being erased.
 * 
 *   Lava Burn Frame Delay:
 *   - Frames to delay lava burn iterations from one another.
 *   - Lower: less delay.
 *   - Higher: larger delay.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 * 
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Pitfall Tile Settings
 * ============================================================================
 *
 * Settings related to Pitfall Tiles.
 * 
 * Pitfalls (or bottomless pits) are tiles that when an affected character
 * walks over it, the character will fall to its doom. Players will have their
 * whole party take fall damage and return to a previously safe location.
 * Events will be erased as if an event command took care of them. Characters
 * can jump over pitfalls and be unharmed. Jumping directly into a pitfall will
 * trigger a lethal reaction.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Pitfall Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Fall Duration:
 *   - How many frames will the falling animation take?
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Fall:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quicksand Tile Settings
 * ============================================================================
 *
 * Settings related to Quicksand Tiles.
 * 
 * Quicksand tiles cause affected characters on top of them to slowly sink
 * deeper with each step they take and visibly go deeper until they fully sink.
 * When this happens to a player, the party will take sandsink damage and then
 * return to a previously safe location. Events will be erased.
 * 
 * When a character steps on a non-quicksand tile, the sandsink counter resets
 * and the character fully resurfaces itself from the ground.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Quicksand Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Steps to Sandsink:
 *   - How many steps will it take on quicksand before sandsinking a character?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shock Tile Settings
 * ============================================================================
 *
 * Settings related to Shock Tiles.
 * 
 * When characters that are affected by shock tiles and step over them, the
 * tile will shock and zap them. The player will have the whole party take
 * shock damage and then return to a previously safe location. Events will be
 * erased immediately.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Shock Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Shock Input Delay:
 *   - How many frames to wait before giving player move input?
 *   - Lower: less delay. Higher: larger delay.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 * 
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Slippery Tile Settings
 * ============================================================================
 *
 * Settings related to Slippery Tiles.
 * 
 * Slippery tiles cause affected characters on top of them to slide forward
 * until they hit a wall or another object. Once they stop, they can turn and
 * move a different direction. If this new direction is still on the slippery
 * tile, the character will continue sliding that direction, too.
 *
 * ---
 * 
 * General
 * 
 *   Default Region(s):
 *   - Which region(s) will be used to mark this tile type?
 *   - Ignore if map has <Slippery Region: x> notetag.
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 * 
 *   Tile Sprite Pattern:
 *   - Forces this sprite pattern when on this tile type.
 *   - Use -1 to allow characters to freely animate.
 *
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Water Tile Settings
 * ============================================================================
 *
 * Settings related to Water Tiles.
 * 
 * Water tiles are anything that a boat or ship can pass over and do not need
 * to be marked by regions or terrain tags.  Water tiles can cause affected
 * characters to drown in them when walking over them. Players will have their
 * whole party take drowning damage and then return to a previously safe
 * location. Events will be erased. If the player is given the ability to swim,
 * the player can traverse water tiles without any drowning problems.
 *
 * ---
 * 
 * General
 * 
 *   Event Defaults:
 * 
 *     Default Affected:
 *     - Are events affected by this tile by default?
 * 
 *     Default Avoid:
 *     - Will events avoid stepping on this tile by default?
 * 
 *   Drowning Duration:
 *   - How many frames will the drowning animation take?
 * 
 *   Player Can Drown?:
 *   - Allow the player to be able to step into water tiles without the ability
 *     to swim and causing player to drown?
 * 
 *   Swimming Depth:
 *   - How many pixels will the player character be submerged when in a state
 *     of swimming?
 * 
 *   Tile Move Speed:
 *   - Forces this move speed when on this tile type.
 *   - Use 0 to use the character's current move speed.
 *
 * ---
 * 
 * Damage Calculation
 * 
 *   Allow Death?:
 *   - Can actors die from the damage dealt by this tile?
 * 
 *   Rate Damage:
 *   - What percentile of the actor's MaxHP is dealt as damage?
 * 
 *   Flat Damage:
 *   - What flat amount of damage is dealt to the actor?
 * 
 * ---
 *
 * Sound Effects
 * 
 *   Footsteps:
 * 
 *     Enabled?:
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 *     - Requires VisuMZ_2_MovementEffects.
 * 
 *   Drown:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
 * 
 *   Damage:
 * 
 *     Filename:
 *     Volume:
 *     Pitch:
 *     Pan:
 *     - Properties of the sound effect played.
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
 * Version 1.07: May 15, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!" section:
 * *** As of version 1.9.0+, these two methods no longer work to fix the
 *     problem. There is a Plugin Parameter added to disable the error message.
 *     However, this does not mean that the tileset flag data is fixed. Turn
 *     off the error message at your will.
 * * Added new Plugin Parameter:
 * ** Plugin Parameters > Enable Error Message?
 * *** Display error message for tilesets with incomplete flag data?
 * *** Disabling does not fix the problem.
 * 
 * Version 1.06: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a <Can Swim> notetag to allow inventory held items to work with it.
 *    Fix made by Arisu.
 * 
 * Version 1.05: November 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug where an updated version of Events & Movement Core would
 *    block the pitfall animation for the character sprite. Fix made by Arisu.
 * ** Fixed a bug where events were unable to fall into the water due to a few
 *    notetags clashing. Fix made by Arisu.
 * 
 * Version 1.04: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause repeating flag errors that cannot be stopped
 *    unless you had the VisuStella MZ Core Engine installed. Fix by Irina.
 * ** Fixed a compatibility issue with "Event Title Scene" upon using the
 *    "Return to Title Screen" event command. Fix made by Irina.
 * 
 * Version 1.03: April 13, 2023
 * * Bug Fixes!
 * ** <Anti-Drown> and <Anti-Pitfall> notetags should now work properly for
 *    events. Fix made by Arisu.
 * ** Moving into a wall while in the quicksand will no longer result in
 *    instant KO. Fix made by Arisu.
 * ** While swimming, player can no longer move off onto land tiles that are
 *    not normally passable. Fix made by Arisu.
 * ** Cliff tiles can no longer be bypassed via swimming. Fix made by Arisu.
 * 
 * Version 1.02: January 20, 2023
 * * Bug Fixes!
 * ** If followers are disabled, they no longer trigger footstep sound effects
 *    on unique tiles. Fix made by Arisu.
 * ** When entering water from a bush tile, sprite glitches should no longer
 *    occur. Fix made by Arisu.
 * * Feature Update!
 * ** This plugin is now automatically disabled when doing an event command
 *    test from right-clicking an event and clicking "Test" in order to enable
 *    a controlled environment for event testing. Fix made by Irina.
 * 
 * Version 1.01: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a bug where you cannot respawn on X = 0 or Y = 0.
 * * Documentation Update!
 * ** Added new section: "Warning! RPG Maker MZ Version 1.5.0+ Water-Tile Bug!"
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** Naturally, this causes problems with the Unique Tile Effects plugin as
 *     the water tiles allow for swimming and drowning.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * 
 * Version 1.00 Official Release Date: January 6, 2023
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
 * @command PlayerSetAntiBounce
 * @text Player: Set Bounce Status
 * @desc Changes the player character's ability to navigate on Bounce Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Bounce
 * @off Force Bounce
 * @desc Changes the player character's ability to navigate on Bounce Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiForceMove
 * @text Player: Set Force Move Status
 * @desc Changes the player character's ability to navigate on Force Move Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Force Move
 * @off Force Move
 * @desc Changes the player character's ability to navigate on Force Move Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiLava
 * @text Player: Set Lava Status
 * @desc Changes the player character's ability to walk on Lava Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Burn
 * @off Can Burn
 * @desc Changes the player character's ability to walk on Lava Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiQuicksand
 * @text Player: Set Quicksand Status
 * @desc Changes the player character's ability to walk on Quicksand Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Sink
 * @off Can Sink
 * @desc Changes the player character's ability to walk on Quicksand Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiShock
 * @text Player: Set Shock Status
 * @desc Changes the player character's ability to walk on Shock Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Shock
 * @off Can Shock
 * @desc Changes the player character's ability to walk on Shock Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAntiSlippery
 * @text Player: Set Slippery Status
 * @desc Changes the player character's ability to walk on Slippery Tiles.
 *
 * @arg Setting:eval
 * @text Immune?
 * @type boolean
 * @on No Slip
 * @off Can Slip
 * @desc Changes the player character's ability to walk on Slippery Tiles.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerSetAllowSwimming
 * @text Player: Set Swimming Status
 * @desc Changes the player character's ability to swim on water Tiles.
 *
 * @arg Setting:eval
 * @text Allow?
 * @type boolean
 * @on Can Swim
 * @off Cannot Swim
 * @desc Changes the player character's ability to swim on water Tiles.
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
 * @param UniqueTileEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param NotetagPartyWide:eval
 * @text Reserve Party Notetags?
 * @type boolean
 * @on All Members Allowed
 * @off Battle Members Only
 * @desc Should immunity notetags check all party members including
 * the reserve members or only battle members?
 * @default true
 *
 * @param EnableErrorMsg:eval
 * @text Enable Error Message?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Display error message for tilesets with incomplete flag
 * data? Disabling does not fix the problem.
 * @default true
 *
 * @param Bounce:struct
 * @text Bounce Tile Settings
 * @type struct<Bounce>
 * @desc Settings related to Bounce Tiles.
 * @default {"General":"","DefaultRegions":"","Bounce1Regions:arraynum":"[]","Bounce2Regions:arraynum":"[]","Bounce3Regions:arraynum":"[]","Bounce4Regions:arraynum":"[]","Bounce5Regions:arraynum":"[]","Bounce6Regions:arraynum":"[]","Bounce7Regions:arraynum":"[]","Bounce8Regions:arraynum":"[]","Bounce9Regions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"false","Sound":"","Effect":"","effectName:str":"Jump2","effectVolume:num":"50","effectPitch:num":"120","effectPan:num":"0"}
 *
 * @param ForceMove:struct
 * @text Force Move Tile Settings
 * @type struct<ForceMove>
 * @desc Settings related to Force Move Tiles.
 * @default {"General":"","DefaultRegions":"","DownRegions:arraynum":"[]","LeftRegions:arraynum":"[]","RightRegions:arraynum":"[]","UpRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"false","MoveSpeed:num":"6","Pattern:num":"2","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Skill1","footstepsVolume:num":"10","footstepsPitch:num":"130","footstepsPan:num":"0"}
 *
 * @param Lava:struct
 * @text Lava Tile Settings
 * @type struct<Lava>
 * @desc Settings related to Lava Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","LavaBurnEventMax:num":"6","LavaBurnTimer:num":"20","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.05","DmgFlat:num":"50","Animation":"","AnimationID:num":"0","AnimationMirror:eval":"false","AnimationMute:eval":"false","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Fire2","footstepsVolume:num":"10","footstepsPitch:num":"120","footstepsPan:num":"0","Damage":"","damageName:str":"Fire8","damageVolume:num":"30","damagePitch:num":"100","damagePan:num":"0"}
 *
 * @param Pitfall:struct
 * @text Pitfall Tile Settings
 * @type struct<Pitfall>
 * @desc Settings related to Pitfall Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","EffectDuration:num":"20","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.20","DmgFlat:num":"20","Sound":"","Effect":"","effectName:str":"Fall","effectVolume:num":"50","effectPitch:num":"80","effectPan:num":"0","Damage":"","damageName:str":"Earth4","damageVolume:num":"30","damagePitch:num":"80","damagePan:num":"0"}
 *
 * @param Quicksand:struct
 * @text Quicksand Tile Settings
 * @type struct<Quicksand>
 * @desc Settings related to Quicksand Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","StepsSandSink:num":"10","MoveSpeed:num":"3","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.30","DmgFlat:num":"40","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Blow2","footstepsVolume:num":"10","footstepsPitch:num":"60","footstepsPan:num":"0","Damage":"","damageName:str":"Earth3","damageVolume:num":"30","damagePitch:num":"120","damagePan:num":"0"}
 *
 * @param Shock:struct
 * @text Shock Tile Settings
 * @type struct<Shock>
 * @desc Settings related to Shock Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","ShockTimer:num":"60","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.25","DmgFlat:num":"60","Animation":"","AnimationID:num":"0","AnimationMirror:eval":"false","AnimationMute:eval":"false","Sound":"","Damage":"","damageName:str":"Thunder3","damageVolume:num":"30","damagePitch:num":"120","damagePan:num":"0"}
 *
 * @param Slippery:struct
 * @text Slippery Tile Settings
 * @type struct<Slippery>
 * @desc Settings related to Slippery Tiles.
 * @default {"General":"","DefaultRegions:arraynum":"[]","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"false","MoveSpeed:num":"4","Pattern:num":"2","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Sand","footstepsVolume:num":"10","footstepsPitch:num":"150","footstepsPan:num":"0"}
 *
 * @param Swimming:struct
 * @text Water Tile Settings
 * @type struct<Swimming>
 * @desc Settings related to Water Tiles.
 * @default {"General":"","EventDefaults":"","DefaultAffected:eval":"false","DefaultAvoid:eval":"true","EffectDuration:num":"30","playerCanDrown:eval":"true","SwimmingDepth:num":"16","MoveSpeed:num":"4","DmgCalc":"","DmgDeathAllow:eval":"true","DmgRate:num":"0.10","DmgFlat:num":"15","Sound":"","Footsteps":"","footstepsEnabled:eval":"true","footstepsName:str":"Water1","footstepsVolume:num":"10","footstepsPitch:num":"80","footstepsPan:num":"0","Effect":"","effectName:str":"Dive","effectVolume:num":"50","effectPitch:num":"120","effectPan:num":"0","Damage":"","damageName:str":"Water3","damageVolume:num":"30","damagePitch:num":"80","damagePan:num":"0"}
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
 * Slippery Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Slippery:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Slippery Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default false
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 4
 *
 * @param Pattern:num
 * @text Tile Sprite Pattern
 * @parent General
 * @desc Forces this sprite pattern when on this tile type.
 * Use -1 to allow characters to freely animate.
 * @default 2
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Sand
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 150
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Force Move Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ForceMove:
 *
 * @param General
 *
 * @param DefaultRegions
 * @text Default Region(s)
 * @parent General
 *
 * @param DownRegions:arraynum
 * @text Down Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Down Region: x> notetag.
 * @default []
 *
 * @param LeftRegions:arraynum
 * @text Left Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Left Region: x> notetag.
 * @default []
 *
 * @param RightRegions:arraynum
 * @text Right Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Right Region: x> notetag.
 * @default []
 *
 * @param UpRegions:arraynum
 * @text Up Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Force Up Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default false
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 6
 *
 * @param Pattern:num
 * @text Tile Sprite Pattern
 * @parent General
 * @desc Forces this sprite pattern when on this tile type.
 * Use -1 to allow characters to freely animate.
 * @default 2
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Skill1
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 130
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Pitfall Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Pitfall:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Pitfall Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param EffectDuration:num
 * @text Fall Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames will the falling animation take?
 * @default 20
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.20
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 20
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Effect
 * @text Fall
 * @parent Sound
 *
 * @param effectName:str
 * @text Filename
 * @parent Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Fall
 *
 * @param effectVolume:num
 * @text Volume
 * @parent Effect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param effectPitch:num
 * @text Pitch
 * @parent Effect
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param effectPan:num
 * @text Pan
 * @parent Effect
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Earth4
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Swimming Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Swimming:
 *
 * @param General
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param EffectDuration:num
 * @text Drowning Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames will the drowning animation take?
 * @default 30
 *
 * @param playerCanDrown:eval
 * @text Player Can Drown?
 * @parent General
 * @type boolean
 * @on Drown
 * @off Avoid
 * @desc Allow the player to be able to step into water tiles
 * without the ability to swim and causing player to drown?
 * @default true
 *
 * @param SwimmingDepth:num
 * @text Swimming Depth
 * @parent General
 * @type number
 * @desc How many pixels will the player character be submerged
 * when in a state of swimming?
 * @default 16
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 4
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.10
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 15
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Water1
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 80
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 * 
 * @param Effect
 * @text Drown
 * @parent Sound
 *
 * @param effectName:str
 * @text Filename
 * @parent Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Dive
 *
 * @param effectVolume:num
 * @text Volume
 * @parent Effect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param effectPitch:num
 * @text Pitch
 * @parent Effect
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param effectPan:num
 * @text Pan
 * @parent Effect
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Water3
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 80
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Quicksand Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Quicksand:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Quicksand Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param StepsSandSink:num
 * @text Steps to Sandsink
 * @parent General
 * @type number
 * @min 1
 * @desc How many steps will it take on quicksand before
 * sandsinking a character?
 * @default 10
 *
 * @param MoveSpeed:num
 * @text Tile Move Speed
 * @parent General
 * @type number
 * @desc Forces this move speed when on this tile type.
 * Use 0 to use the character's current move speed.
 * @default 3
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.30
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 40
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Blow2
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 60
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Earth3
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Lava Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Lava:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Lava Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param LavaBurnEventMax:num
 * @text Event Lava Burn Max
 * @parent EventDefaults
 * @type number
 * @min 1
 * @desc Default number of times an event can suffer lava burns
 * before being erased.
 * @default 6
 *
 * @param LavaBurnTimer:num
 * @text Lava Burn Frame Delay
 * @parent General
 * @type number
 * @min 1
 * @desc Frames to delay lava burn iterations from one another.
 * Lower: less delay. Higher: larger delay.
 * @default 20
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.05
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 50
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 0
 *
 * @param AnimationMirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Footsteps
 * @text Footsteps
 * @parent Sound
 *
 * @param footstepsEnabled:eval
 * @text Enabled?
 * @parent Footsteps
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable footstep sounds for this tile?
 * Requires VisuMZ_2_MovementEffects!
 * @default true
 *
 * @param footstepsName:str
 * @text Filename
 * @parent Footsteps
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default Fire2
 *
 * @param footstepsVolume:num
 * @text Volume
 * @parent Footsteps
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 10
 *
 * @param footstepsPitch:num
 * @text Pitch
 * @parent Footsteps
 * @type number
 * @desc Pitch of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 120
 *
 * @param footstepsPan:num
 * @text Pan
 * @parent Footsteps
 * @desc Pan of the sound effect played.
 * Requires VisuMZ_2_MovementEffects!
 * @default 0
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Fire8
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Shock Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Shock:
 *
 * @param General
 *
 * @param DefaultRegions:arraynum
 * @text Default Region(s)
 * @parent General
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Shock Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default true
 *
 * @param ShockTimer:num
 * @text Shock Input Delay
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames to wait before giving player move input?
 * Lower: less delay. Higher: larger delay.
 * @default 60
 *
 * @param DmgCalc
 * @text Damage Calculation
 *
 * @param DmgDeathAllow:eval
 * @text Allow Death?
 * @parent DmgCalc
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Can actors die from the damage dealt by this tile?
 * @default true
 *
 * @param DmgRate:num
 * @text Rate Damage
 * @parent DmgCalc
 * @desc What percentile of the actor's MaxHP is dealt as damage?
 * @default 0.25
 *
 * @param DmgFlat:num
 * @text Flat Damage
 * @parent DmgCalc
 * @type number
 * @desc What flat amount of damage is dealt to the actor?
 * @default 60
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 0
 *
 * @param AnimationMirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Damage
 * @parent Sound
 *
 * @param damageName:str
 * @text Filename
 * @parent Damage
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Thunder3
 *
 * @param damageVolume:num
 * @text Volume
 * @parent Damage
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 30
 *
 * @param damagePitch:num
 * @text Pitch
 * @parent Damage
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param damagePan:num
 * @text Pan
 * @parent Damage
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Bounce Tile Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Bounce:
 *
 * @param General
 *
 * @param DefaultRegions
 * @text Default Region(s)
 * @parent General
 *
 * @param Bounce1Regions:arraynum
 * @text Bounce 1 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 1 Region: x> notetag.
 * @default []
 *
 * @param Bounce2Regions:arraynum
 * @text Bounce 2 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 2 Region: x> notetag.
 * @default []
 *
 * @param Bounce3Regions:arraynum
 * @text Bounce 3 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 3 Region: x> notetag.
 * @default []
 *
 * @param Bounce4Regions:arraynum
 * @text Bounce 4 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 4 Region: x> notetag.
 * @default []
 *
 * @param Bounce5Regions:arraynum
 * @text Bounce 5 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 5 Region: x> notetag.
 * @default []
 *
 * @param Bounce6Regions:arraynum
 * @text Bounce 6 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 6 Region: x> notetag.
 * @default []
 *
 * @param Bounce7Regions:arraynum
 * @text Bounce 7 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 7 Region: x> notetag.
 * @default []
 *
 * @param Bounce8Regions:arraynum
 * @text Bounce 8 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 8 Region: x> notetag.
 * @default []
 *
 * @param Bounce9Regions:arraynum
 * @text Bounce 9 Region(s)
 * @parent DefaultRegions
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which region(s) will be used to mark this tile type?
 * Ignore if map has <Bounce 9 Region: x> notetag.
 * @default []
 * 
 * @param EventDefaults
 * @text Event Defaults
 * @parent General
 *
 * @param DefaultAffected:eval
 * @text Default Affected
 * @parent EventDefaults
 * @type boolean
 * @on Affected
 * @off Unaffected
 * @desc Are events affected by this tile by default?
 * @default false
 *
 * @param DefaultAvoid:eval
 * @text Default Avoid
 * @parent EventDefaults
 * @type boolean
 * @on Avoid
 * @off Normal
 * @desc Will events avoid stepping on this tile by default?
 * @default false
 * 
 * @param Sound
 * @text Sound Effects
 * 
 * @param Effect
 * @parent Sound
 *
 * @param effectName:str
 * @text Filename
 * @parent Effect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Jump2
 *
 * @param effectVolume:num
 * @text Volume
 * @parent Effect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 50
 *
 * @param effectPitch:num
 * @text Pitch
 * @parent Effect
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param effectPan:num
 * @text Pan
 * @parent Effect
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

const _0x3cdf07=_0x3d76;function _0x3d76(_0x200851,_0x4aad2c){const _0x10c57e=_0x10c5();return _0x3d76=function(_0x3d76c7,_0x144b58){_0x3d76c7=_0x3d76c7-0x19f;let _0x190285=_0x10c57e[_0x3d76c7];return _0x190285;},_0x3d76(_0x200851,_0x4aad2c);}(function(_0x40f605,_0x13f980){const _0x4d1090=_0x3d76,_0x25e8a3=_0x40f605();while(!![]){try{const _0x510498=-parseInt(_0x4d1090(0x2a1))/0x1+-parseInt(_0x4d1090(0x216))/0x2*(-parseInt(_0x4d1090(0x28b))/0x3)+-parseInt(_0x4d1090(0x255))/0x4*(parseInt(_0x4d1090(0x247))/0x5)+-parseInt(_0x4d1090(0x25f))/0x6+-parseInt(_0x4d1090(0x1df))/0x7+parseInt(_0x4d1090(0x354))/0x8+parseInt(_0x4d1090(0x2c9))/0x9;if(_0x510498===_0x13f980)break;else _0x25e8a3['push'](_0x25e8a3['shift']());}catch(_0x202597){_0x25e8a3['push'](_0x25e8a3['shift']());}}}(_0x10c5,0x6a30c));var label=_0x3cdf07(0x281),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x2347c8){const _0xc2590d=_0x3cdf07;return _0x2347c8['status']&&_0x2347c8[_0xc2590d(0x19f)][_0xc2590d(0x251)]('['+label+']');})[0x0];VisuMZ[label][_0x3cdf07(0x299)]=VisuMZ[label][_0x3cdf07(0x299)]||{},VisuMZ[_0x3cdf07(0x1ef)]=function(_0x57d80f,_0x10d84f){const _0x5073c9=_0x3cdf07;for(const _0x20b9a4 in _0x10d84f){if(_0x20b9a4[_0x5073c9(0x2b1)](/(.*):(.*)/i)){const _0x285714=String(RegExp['$1']),_0x5ced99=String(RegExp['$2'])[_0x5073c9(0x260)]()[_0x5073c9(0x254)]();let _0xa53448,_0x434307,_0x1b897c;switch(_0x5ced99){case _0x5073c9(0x2cd):_0xa53448=_0x10d84f[_0x20b9a4]!==''?Number(_0x10d84f[_0x20b9a4]):0x0;break;case'ARRAYNUM':_0x434307=_0x10d84f[_0x20b9a4]!==''?JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4]):[],_0xa53448=_0x434307[_0x5073c9(0x31a)](_0x5e6eb0=>Number(_0x5e6eb0));break;case _0x5073c9(0x2e7):_0xa53448=_0x10d84f[_0x20b9a4]!==''?eval(_0x10d84f[_0x20b9a4]):null;break;case _0x5073c9(0x221):_0x434307=_0x10d84f[_0x20b9a4]!==''?JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4]):[],_0xa53448=_0x434307['map'](_0x5cb9bd=>eval(_0x5cb9bd));break;case _0x5073c9(0x30c):_0xa53448=_0x10d84f[_0x20b9a4]!==''?JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4]):'';break;case _0x5073c9(0x1c7):_0x434307=_0x10d84f[_0x20b9a4]!==''?JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4]):[],_0xa53448=_0x434307[_0x5073c9(0x31a)](_0x40f4cd=>JSON[_0x5073c9(0x326)](_0x40f4cd));break;case _0x5073c9(0x302):_0xa53448=_0x10d84f[_0x20b9a4]!==''?new Function(JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4])):new Function(_0x5073c9(0x34a));break;case _0x5073c9(0x23b):_0x434307=_0x10d84f[_0x20b9a4]!==''?JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4]):[],_0xa53448=_0x434307[_0x5073c9(0x31a)](_0x50febc=>new Function(JSON[_0x5073c9(0x326)](_0x50febc)));break;case _0x5073c9(0x317):_0xa53448=_0x10d84f[_0x20b9a4]!==''?String(_0x10d84f[_0x20b9a4]):'';break;case _0x5073c9(0x2b9):_0x434307=_0x10d84f[_0x20b9a4]!==''?JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4]):[],_0xa53448=_0x434307[_0x5073c9(0x31a)](_0x428ded=>String(_0x428ded));break;case _0x5073c9(0x337):_0x1b897c=_0x10d84f[_0x20b9a4]!==''?JSON['parse'](_0x10d84f[_0x20b9a4]):{},_0xa53448=VisuMZ['ConvertParams']({},_0x1b897c);break;case _0x5073c9(0x2ad):_0x434307=_0x10d84f[_0x20b9a4]!==''?JSON[_0x5073c9(0x326)](_0x10d84f[_0x20b9a4]):[],_0xa53448=_0x434307['map'](_0x2de7ce=>VisuMZ[_0x5073c9(0x1ef)]({},JSON[_0x5073c9(0x326)](_0x2de7ce)));break;default:continue;}_0x57d80f[_0x285714]=_0xa53448;}}return _0x57d80f;},(_0x4777ef=>{const _0x23cbb6=_0x3cdf07,_0xf7b317=_0x4777ef[_0x23cbb6(0x2e5)];for(const _0x526210 of dependencies){if(!Imported[_0x526210]){alert(_0x23cbb6(0x362)[_0x23cbb6(0x227)](_0xf7b317,_0x526210)),SceneManager['exit']();break;}}const _0x17053e=_0x4777ef[_0x23cbb6(0x19f)];if(_0x17053e[_0x23cbb6(0x2b1)](/\[Version[ ](.*?)\]/i)){const _0x2641e5=Number(RegExp['$1']);_0x2641e5!==VisuMZ[label][_0x23cbb6(0x2e8)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0xf7b317,_0x2641e5)),SceneManager[_0x23cbb6(0x2de)]());}if(_0x17053e['match'](/\[Tier[ ](\d+)\]/i)){const _0x4ae78f=Number(RegExp['$1']);_0x4ae78f<tier?(alert(_0x23cbb6(0x2c3)[_0x23cbb6(0x227)](_0xf7b317,_0x4ae78f,tier)),SceneManager['exit']()):tier=Math[_0x23cbb6(0x225)](_0x4ae78f,tier);}VisuMZ[_0x23cbb6(0x1ef)](VisuMZ[label][_0x23cbb6(0x299)],_0x4777ef[_0x23cbb6(0x2ee)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x3cdf07(0x2e5)],'PlayerSetAntiBounce',_0x5c5e6e=>{const _0x5291de=_0x3cdf07;VisuMZ[_0x5291de(0x1ef)](_0x5c5e6e,_0x5c5e6e);const _0x113fda=_0x5c5e6e[_0x5291de(0x1ff)];$gamePlayer[_0x5291de(0x360)]('bounce',_0x113fda);}),PluginManager[_0x3cdf07(0x1a3)](pluginData['name'],_0x3cdf07(0x365),_0x498d67=>{const _0x3b9fe5=_0x3cdf07;VisuMZ[_0x3b9fe5(0x1ef)](_0x498d67,_0x498d67);const _0x430b42=_0x498d67['Setting'];$gamePlayer[_0x3b9fe5(0x360)]('forceMove',_0x430b42);}),PluginManager[_0x3cdf07(0x1a3)](pluginData[_0x3cdf07(0x2e5)],_0x3cdf07(0x1a9),_0x4b6bb9=>{const _0x227736=_0x3cdf07;VisuMZ[_0x227736(0x1ef)](_0x4b6bb9,_0x4b6bb9);const _0x3b0e39=_0x4b6bb9[_0x227736(0x1ff)];$gamePlayer[_0x227736(0x360)](_0x227736(0x2b6),_0x3b0e39);}),PluginManager['registerCommand'](pluginData[_0x3cdf07(0x2e5)],_0x3cdf07(0x27a),_0x3fc067=>{const _0x516b21=_0x3cdf07;VisuMZ[_0x516b21(0x1ef)](_0x3fc067,_0x3fc067);const _0x339b51=_0x3fc067['Setting'];$gamePlayer['setImmuneToUniqueTileType'](_0x516b21(0x237),_0x339b51);}),PluginManager[_0x3cdf07(0x1a3)](pluginData[_0x3cdf07(0x2e5)],'PlayerSetAntiShock',_0x452750=>{const _0x1aaa21=_0x3cdf07;VisuMZ[_0x1aaa21(0x1ef)](_0x452750,_0x452750);const _0x193392=_0x452750[_0x1aaa21(0x1ff)];$gamePlayer[_0x1aaa21(0x360)]('shock',_0x193392);}),PluginManager[_0x3cdf07(0x1a3)](pluginData[_0x3cdf07(0x2e5)],_0x3cdf07(0x1e7),_0x239828=>{const _0x157f97=_0x3cdf07;VisuMZ[_0x157f97(0x1ef)](_0x239828,_0x239828);const _0x595884=_0x239828[_0x157f97(0x1ff)];$gamePlayer[_0x157f97(0x360)](_0x157f97(0x22d),_0x595884);}),PluginManager[_0x3cdf07(0x1a3)](pluginData[_0x3cdf07(0x2e5)],'PlayerSetAllowSwimming',_0x405ebb=>{const _0x1bf7e6=_0x3cdf07;VisuMZ[_0x1bf7e6(0x1ef)](_0x405ebb,_0x405ebb);const _0x5b5c8e=_0x405ebb[_0x1bf7e6(0x1ff)];$gamePlayer[_0x1bf7e6(0x360)](_0x1bf7e6(0x33d),_0x5b5c8e);}),VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x1b6)]=function(_0x2df389){const _0x14f723=_0x3cdf07,_0x57d5a1=[_0x14f723(0x22d),'pitfall',_0x14f723(0x33d),_0x14f723(0x237),'lava',_0x14f723(0x1c9)];return _0x2df389?(_0x57d5a1[_0x14f723(0x361)]('down',_0x14f723(0x220),_0x14f723(0x1c4),'up'),_0x57d5a1[_0x14f723(0x361)](_0x14f723(0x2e9),_0x14f723(0x32c),_0x14f723(0x1fd),_0x14f723(0x2d1),_0x14f723(0x2fa)),_0x57d5a1['push']('bounce6',_0x14f723(0x250),_0x14f723(0x327),'bounce9')):(_0x57d5a1['push'](_0x14f723(0x2b5)),_0x57d5a1['push'](_0x14f723(0x1c1))),_0x57d5a1;},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x20b)]={'slippery':{'regions':/<SLIP(?:|PERY) REGION(?:|S):[ ](.*)>/i,'terrainTags':/<SLIP(?:|PERY) (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )SLIP>/i,'immune':/<(?:ANTI|ANTI-|ANTI )SLIP(?:|PERY)>/i,'avoid':/<(?:AVOID|BEWARE) (?:SLIP|SLIPPERY|ICE)>/i,'ignore':/<(?:IGNORE|CARELESS) (?:SLIP|SLIPPERY|ICE)>/i},'down':{'regions':/<FORCE DOWN REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE DOWN (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'left':{'regions':/<FORCE LEFT REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE LEFT (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'right':{'regions':/<FORCE RIGHT REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE RIGHT (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'up':{'regions':/<FORCE UP REGION(?:|S):[ ](.*)>/i,'terrainTags':/<FORCE UP (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'forceMove':{'affected':/<(?:|CAN )FORCE MOVE>/i,'immune':/<(?:ANTI|ANTI-|ANTI )FORCE MOVE>/i,'avoid':/<(?:AVOID|BEWARE) FORCE MOVE>/i,'ignore':/<(?:IGNORE|CARELESS) FORCE MOVE>/i},'pitfall':{'regions':/<PIT(?:|FALL) REGION(?:|S):[ ](.*)>/i,'terrainTags':/<PIT(?:|FALL) (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )PIT(?:|FALL)>/i,'immune':/<(?:ANTI|ANTI-|ANTI )PIT(?:|FALL)>/i,'avoid':/<(?:AVOID|BEWARE) PIT(?:|FALL)>/i,'ignore':/<(?:IGNORE|CARELESS) PIT(?:|FALL)>/i,'mapTransfer':/<PIT(?:|FALL) (?:TRANSFER|TELEPORT):[ ](.*)>/i},'swimming':{'affected':/<(?:|CAN )DROWN(?:|ING)>/i,'immune':/<(?:CAN SWIM|ANTI-DROWN)(?:|ING|MING)>/i,'avoid':/<(?:AVOID|BEWARE) DROWN(?:|ING)>/i,'ignore':/<(?:IGNORE|CARELESS) DROWN(?:|ING)>/i},'quicksand':{'regions':/<QUICKSAND REGION(?:|S):[ ](.*)>/i,'terrainTags':/<QUICKSAND (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )(?:|SAND)SINK>/i,'immune':/<(?:ANTI|ANTI-|ANTI )(?:QUICKSAND|SAND|SANDSINK|SINK)>/i,'avoid':/<(?:AVOID|BEWARE) QUICKSAND>/i,'ignore':/<(?:IGNORE|CARELESS) QUICKSAND>/i},'lava':{'regions':/<LAVA REGION(?:|S):[ ](.*)>/i,'terrainTags':/<LAVA (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )(?:|LAVA|LAVA )BURN>/i,'immune':/<(?:ANTI|ANTI-|ANTI )(?:LAVA|BURN|LAVABURN|LAVA BURN)>/i,'avoid':/<(?:AVOID|BEWARE) LAVA>/i,'ignore':/<(?:IGNORE|CARELESS) LAVA>/i,'burnMax':/<(?:|LAVA|LAVA )BURN MAX:[ ](\d+)>/i},'shock':{'regions':/<SHOCK REGION(?:|S):[ ](.*)>/i,'terrainTags':/<SHOCK (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i,'affected':/<(?:|CAN )SHOCK>/i,'immune':/<(?:ANTI|ANTI-|ANTI )SHOCK>/i,'avoid':/<(?:AVOID|BEWARE) SHOCK>/i,'ignore':/<(?:IGNORE|CARELESS) SHOCK>/i},'bounce1':{'regions':/<BOUNCE 1 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 1 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce2':{'regions':/<BOUNCE 2 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 2 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce3':{'regions':/<BOUNCE 3 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 3 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce4':{'regions':/<BOUNCE 4 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 4 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce5':{'regions':/<BOUNCE 5 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 5 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce6':{'regions':/<BOUNCE 6 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 6 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce7':{'regions':/<BOUNCE 7 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 7 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce8':{'regions':/<BOUNCE 8 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 8 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce9':{'regions':/<BOUNCE 9 REGION(?:|S):[ ](.*)>/i,'terrainTags':/<BOUNCE 9 (?:|TERRAIN|TERRAIN )TAG(?:|S):[ ](.*)>/i},'bounce':{'affected':/<(?:|CAN )BOUNCE>/i,'immune':/<(?:ANTI|ANTI-|ANTI )BOUNCE>/i,'avoid':/<(?:AVOID|BEWARE) BOUNCE>/i,'ignore':/<(?:IGNORE|CARELESS) BOUNCE>/i}},SoundManager[_0x3cdf07(0x26d)]={'slippery':{'footstep':{'enabled':VisuMZ['UniqueTileEffects']['Settings']['Slippery'][_0x3cdf07(0x345)]??!![],'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Slippery'][_0x3cdf07(0x1d0)]??_0x3cdf07(0x2e3),'volume':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x310)][_0x3cdf07(0x32e)]??0xa,'pitch':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)]['Slippery'][_0x3cdf07(0x32b)]??0x96,'pan':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x310)][_0x3cdf07(0x23f)]??0x0}},'forceMove':{'footstep':{'enabled':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x345)]??!![],'name':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x1d0)]??_0x3cdf07(0x2ff),'volume':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x1e8)][_0x3cdf07(0x32e)]??0xa,'pitch':VisuMZ['UniqueTileEffects']['Settings'][_0x3cdf07(0x1e8)][_0x3cdf07(0x32b)]??0x82,'pan':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x23f)]??0x0}},'pitfall':{'effect':{'name':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x316)][_0x3cdf07(0x1d4)]??_0x3cdf07(0x24d),'volume':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x316)][_0x3cdf07(0x245)]??0x32,'pitch':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x316)][_0x3cdf07(0x1ab)]??0x50,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x316)]['effectPan']??0x0},'damage':{'name':VisuMZ[_0x3cdf07(0x281)]['Settings']['Pitfall'][_0x3cdf07(0x1d8)]??_0x3cdf07(0x305),'volume':VisuMZ['UniqueTileEffects']['Settings'][_0x3cdf07(0x316)][_0x3cdf07(0x296)]??0x1e,'pitch':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Pitfall'][_0x3cdf07(0x1f5)]??0x50,'pan':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x316)][_0x3cdf07(0x2d6)]??0x0}},'swimming':{'footstep':{'enabled':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x318)]['footstepsEnabled']??!![],'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)]['footstepsName']??_0x3cdf07(0x246),'volume':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x32e)]??0xa,'pitch':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Swimming'][_0x3cdf07(0x32b)]??0x50,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x23f)]??0x0},'effect':{'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x1d4)]??'Dive','volume':VisuMZ['UniqueTileEffects']['Settings']['Swimming'][_0x3cdf07(0x245)]??0x32,'pitch':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x1ab)]??0x78,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)]['effectPan']??0x0},'damage':{'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x1d8)]??_0x3cdf07(0x355),'volume':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)]['Swimming'][_0x3cdf07(0x296)]??0x1e,'pitch':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x1f5)]??0x50,'pan':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x2d6)]??0x0}},'quicksand':{'footstep':{'enabled':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)]['Quicksand'][_0x3cdf07(0x345)]??!![],'name':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x1c8)][_0x3cdf07(0x1d0)]??'Blow2','volume':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x32e)]??0xa,'pitch':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x32b)]??0x3c,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Quicksand'][_0x3cdf07(0x23f)]??0x0},'damage':{'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Quicksand']['damageName']??'Earth3','volume':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x1c8)]['damageVolume']??0x1e,'pitch':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x1f5)]??0x78,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)]['damagePan']??0x0}},'lava':{'footstep':{'enabled':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)]['Lava']['footstepsEnabled']??!![],'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x31f)]['footstepsName']??'Fire2','volume':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x31f)][_0x3cdf07(0x32e)]??0xa,'pitch':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)]['Lava'][_0x3cdf07(0x32b)]??0x78,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Lava'][_0x3cdf07(0x23f)]??0x0},'damage':{'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Lava'][_0x3cdf07(0x1d8)]??'Fire8','volume':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x31f)]['damageVolume']??0x1e,'pitch':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x31f)]['damagePitch']??0x64,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x31f)][_0x3cdf07(0x2d6)]??0x0}},'shock':{'damage':{'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x322)]['damageName']??_0x3cdf07(0x32f),'volume':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x322)][_0x3cdf07(0x296)]??0x1e,'pitch':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x322)][_0x3cdf07(0x1f5)]??0x78,'pan':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x322)][_0x3cdf07(0x2d6)]??0x0}},'bounce':{'effect':{'name':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x292)][_0x3cdf07(0x1d4)]??_0x3cdf07(0x363),'volume':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x292)][_0x3cdf07(0x245)]??0x32,'pitch':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x292)]['effectPitch']??0x78,'pan':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x292)][_0x3cdf07(0x312)]??0x0}}},SoundManager[_0x3cdf07(0x27f)]=function(_0x253c78,_0x591c36,_0x16645d){const _0x5cd407=_0x3cdf07;if(_0x253c78===_0x5cd407(0x29b))return;const _0x4781e5=SoundManager[_0x5cd407(0x26d)][_0x253c78][_0x591c36];if(!_0x4781e5)return;if(_0x591c36===_0x5cd407(0x210)&&_0x16645d[_0x5cd407(0x1cd)]===Game_Follower)return;if(_0x253c78==='bounce'&&_0x16645d[_0x5cd407(0x1cd)]===Game_Follower)return;const _0x2fd809={'name':_0x4781e5['name']||'','volume':_0x4781e5[_0x5cd407(0x283)]||0x0,'pitch':_0x4781e5[_0x5cd407(0x2a5)]||0x0,'pan':_0x4781e5[_0x5cd407(0x364)]||0x0};if(_0x2fd809[_0x5cd407(0x2e5)]==='')return;_0x16645d&&Imported[_0x5cd407(0x230)]&&VisuMZ[_0x5cd407(0x33b)][_0x5cd407(0x21e)](_0x2fd809,_0x16645d),AudioManager[_0x5cd407(0x356)](_0x2fd809);},SceneManager['isSceneMap']=function(){const _0x43d2a3=_0x3cdf07;return this['_scene']&&this[_0x43d2a3(0x201)][_0x43d2a3(0x1cd)]===Scene_Map;},Game_Map['UNIQUE_TILE_REGIONS']={'slippery':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x310)]['DefaultRegions'],'down':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['ForceMove'][_0x3cdf07(0x31e)],'left':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x35e)],'right':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x294)],'up':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x343)],'pitfall':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x316)]['DefaultRegions'],'quicksand':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x204)],'lava':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Lava'][_0x3cdf07(0x204)],'shock':VisuMZ[_0x3cdf07(0x281)]['Settings']['Shock'][_0x3cdf07(0x204)],'bounce1':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x292)]['Bounce1Regions'],'bounce2':VisuMZ['UniqueTileEffects']['Settings'][_0x3cdf07(0x292)][_0x3cdf07(0x1f4)],'bounce3':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x292)][_0x3cdf07(0x1e5)],'bounce4':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x292)][_0x3cdf07(0x30b)],'bounce5':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x292)]['Bounce5Regions'],'bounce6':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x292)][_0x3cdf07(0x300)],'bounce7':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x292)][_0x3cdf07(0x25c)],'bounce8':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x292)]['Bounce8Regions'],'bounce9':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Bounce']['Bounce9Regions']},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x277)]=Game_Map['prototype'][_0x3cdf07(0x341)],Game_Map[_0x3cdf07(0x1bc)]['setupEvents']=function(){const _0x3b60ae=_0x3cdf07;this[_0x3b60ae(0x271)](),VisuMZ[_0x3b60ae(0x281)][_0x3b60ae(0x277)][_0x3b60ae(0x1fc)](this);},Game_Map[_0x3cdf07(0x1bc)]['setupUniqueTileData']=function(){const _0xf08c74=_0x3cdf07;this[_0xf08c74(0x236)](),this[_0xf08c74(0x1af)]();},Game_Map[_0x3cdf07(0x1bc)]['initUniqueTileData']=function(){const _0x3a140a=_0x3cdf07,_0x52bf1f=VisuMZ[_0x3a140a(0x281)]['TileTypes'](!![]);this[_0x3a140a(0x2d2)]={};for(const _0x23ce40 of _0x52bf1f){this[_0x3a140a(0x2d2)][_0x23ce40]={'regions':[],'terrainTags':[]},Game_Map['UNIQUE_TILE_REGIONS'][_0x23ce40]&&(this[_0x3a140a(0x2d2)][_0x23ce40][_0x3a140a(0x286)]=Game_Map[_0x3a140a(0x242)][_0x23ce40][_0x3a140a(0x2a0)]());}this[_0x3a140a(0x1bd)]={},this[_0x3a140a(0x33c)]={};},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x1af)]=function(){const _0x2553fa=_0x3cdf07,_0x311dd8=VisuMZ['UniqueTileEffects']['RegExp'],_0x432841=$dataMap?$dataMap[_0x2553fa(0x1a8)]||'':'',_0x59f94a=this[_0x2553fa(0x2d9)]()?this[_0x2553fa(0x2d9)]()[_0x2553fa(0x1a8)]||'':'',_0xce12d6=VisuMZ[_0x2553fa(0x281)][_0x2553fa(0x1b6)](!![]);for(const _0x4c9394 of _0xce12d6){if(!_0x311dd8[_0x4c9394])continue;_0x311dd8[_0x4c9394][_0x2553fa(0x286)]&&_0x432841[_0x2553fa(0x2b1)](_0x311dd8[_0x4c9394]['regions'])&&(this[_0x2553fa(0x2d2)][_0x4c9394][_0x2553fa(0x286)]=RegExp['$1'][_0x2553fa(0x2c8)](',')[_0x2553fa(0x31a)](_0x28150b=>Number(_0x28150b)['clamp'](0x1,0xff)));_0x311dd8[_0x4c9394][_0x2553fa(0x1f1)]&&_0x59f94a[_0x2553fa(0x2b1)](_0x311dd8[_0x4c9394]['terrainTags'])&&(this[_0x2553fa(0x2d2)][_0x4c9394][_0x2553fa(0x1f1)]=RegExp['$1'][_0x2553fa(0x2c8)](',')[_0x2553fa(0x31a)](_0x184a6f=>Number(_0x184a6f)[_0x2553fa(0x1b0)](0x1,0x7)));if(_0x311dd8[_0x4c9394][_0x2553fa(0x34e)]&&_0x432841[_0x2553fa(0x2b1)](_0x311dd8[_0x4c9394][_0x2553fa(0x34e)])){const _0x12b078=RegExp['$1']['split'](',')[_0x2553fa(0x31a)](_0x44e6d4=>Number(_0x44e6d4)||0x0);this[_0x2553fa(0x33c)][_0x4c9394]=_0x12b078;}}},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x2ba)]=function(_0x19c198){const _0x909ad2=_0x3cdf07;if(this['_uniqueTileData']===undefined)this[_0x909ad2(0x271)]();return this['_uniqueTileData'][_0x19c198]||{};},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x2b7)]=function(_0x4ab75f){const _0x1824ed=_0x3cdf07;return this[_0x1824ed(0x2ba)](_0x4ab75f)[_0x1824ed(0x286)]||[];},Game_Map[_0x3cdf07(0x1bc)]['getUniqueTileTerrainTags']=function(_0x47ce2c){const _0x42c2ef=_0x3cdf07;return this[_0x42c2ef(0x2ba)](_0x47ce2c)[_0x42c2ef(0x1f1)]||[];},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x273)]=function(_0x5d9fe0,_0x18714a,_0xdb79bb){const _0x3a26ed=_0x3cdf07;if(this[_0x3a26ed(0x333)](_0x5d9fe0,_0x18714a))return'swimming';const _0x3e0ccf=[_0x5d9fe0,_0x18714a];if(this['_uniqueTileXyType'][_0x3e0ccf]!==undefined){const _0x16c809=this[_0x3a26ed(0x1bd)][_0x3e0ccf];if(!_0xdb79bb&&['down',_0x3a26ed(0x220),_0x3a26ed(0x1c4),'up'][_0x3a26ed(0x251)](_0x16c809))return _0x3a26ed(0x2b5);if(!_0xdb79bb&&[_0x3a26ed(0x2e9),_0x3a26ed(0x32c),_0x3a26ed(0x1fd),_0x3a26ed(0x2d1),_0x3a26ed(0x2fa)][_0x3a26ed(0x251)](_0x16c809))return _0x3a26ed(0x1c1);if(!_0xdb79bb&&[_0x3a26ed(0x2ca),'bounce7','bounce8',_0x3a26ed(0x2f6)][_0x3a26ed(0x251)](_0x16c809))return _0x3a26ed(0x1c1);return _0x16c809;}this['_uniqueTileXyType'][_0x3e0ccf]='none';const _0x3c4a6e=this[_0x3a26ed(0x290)](_0x5d9fe0,_0x18714a),_0x5948c9=this[_0x3a26ed(0x26a)](_0x5d9fe0,_0x18714a),_0x479871=VisuMZ[_0x3a26ed(0x281)][_0x3a26ed(0x1b6)](!![]);for(const _0x372d8a of _0x479871){const _0x2f7fe8=this[_0x3a26ed(0x2b7)](_0x372d8a);if(_0x2f7fe8[_0x3a26ed(0x251)](_0x3c4a6e)){this['_uniqueTileXyType'][_0x3e0ccf]=_0x372d8a;break;}if(this[_0x3a26ed(0x1bd)][_0x3e0ccf]!==_0x3a26ed(0x29b))break;const _0x4d3699=this[_0x3a26ed(0x303)](_0x372d8a);if(_0x4d3699['includes'](_0x5948c9)){this[_0x3a26ed(0x1bd)][_0x3e0ccf]=_0x372d8a;break;}if(this[_0x3a26ed(0x1bd)][_0x3e0ccf]!=='none')break;}if(!_0xdb79bb&&['down',_0x3a26ed(0x220),_0x3a26ed(0x1c4),'up'][_0x3a26ed(0x251)](this[_0x3a26ed(0x1bd)][_0x3e0ccf]))return _0x3a26ed(0x2b5);if(!_0xdb79bb&&['bounce1',_0x3a26ed(0x32c),_0x3a26ed(0x1fd),_0x3a26ed(0x2d1),_0x3a26ed(0x2fa),_0x3a26ed(0x2ca),_0x3a26ed(0x250),_0x3a26ed(0x327),_0x3a26ed(0x2f6)][_0x3a26ed(0x251)](this[_0x3a26ed(0x1bd)][_0x3e0ccf]))return'bounce';return this[_0x3a26ed(0x1bd)][_0x3e0ccf];},Game_Map['prototype']['isUniqueTile']=function(_0x4beed9,_0x5e8382){const _0x26b84d=_0x3cdf07;return this[_0x26b84d(0x273)](_0x4beed9,_0x5e8382,![])!==_0x26b84d(0x29b);},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x232)]=function(_0x56addd,_0x14b930,_0x111143){const _0x2d7e80=_0x3cdf07;return this[_0x2d7e80(0x273)](_0x56addd,_0x14b930,![])===_0x111143;},Game_Map['prototype'][_0x3cdf07(0x2bb)]=function(_0xf6e444,_0x528a8f){const _0x2ee9ad=_0x3cdf07;return this[_0x2ee9ad(0x348)](_0xf6e444,_0x528a8f)&&!this[_0x2ee9ad(0x2df)](_0xf6e444,_0x528a8f);},Game_Map['prototype'][_0x3cdf07(0x215)]=function(_0x646028,_0x1b837c){const _0x2cc274=_0x3cdf07;this[_0x2cc274(0x29d)]=!![];let _0x2b3c9b=![];if(this[_0x2cc274(0x229)](_0x646028,_0x1b837c,0x2))_0x2b3c9b=!![];if(this['isPassable'](_0x646028,_0x1b837c,0x4))_0x2b3c9b=!![];if(this[_0x2cc274(0x229)](_0x646028,_0x1b837c,0x6))_0x2b3c9b=!![];if(this[_0x2cc274(0x229)](_0x646028,_0x1b837c,0x8))_0x2b3c9b=!![];return this[_0x2cc274(0x29d)]=![],_0x2b3c9b;},Game_Map[_0x3cdf07(0x1bc)]['hasBelowPriorityEventsXy']=function(_0x240132,_0x4e6255){const _0x41f0e4=_0x3cdf07,_0x29b0ca=this['eventsXy'](_0x240132,_0x4e6255)[_0x41f0e4(0x2ab)](_0x586caa=>_0x586caa&&!_0x586caa[_0x41f0e4(0x306)]&&_0x586caa[_0x41f0e4(0x2b4)]===0x0&&(_0x586caa[_0x41f0e4(0x2c6)]()!==''||_0x586caa[_0x41f0e4(0x350)]()>0x0));return _0x29b0ca[_0x41f0e4(0x311)]>0x0;},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x333)]=function(_0x15ad2f,_0x1b6080){const _0x379c0e=_0x3cdf07;return this[_0x379c0e(0x1a4)](_0x15ad2f,_0x1b6080,0x200)||this['checkPassageNoEvents'](_0x15ad2f,_0x1b6080,0x400);},Game_Map[_0x3cdf07(0x1bc)]['isSwimmingTileWithBridge']=function(_0x3a56dc,_0x1c6ef7){const _0x323ac4=_0x3cdf07;return this[_0x323ac4(0x333)](_0x3a56dc,_0x1c6ef7)&&this[_0x323ac4(0x2df)](_0x3a56dc,_0x1c6ef7);},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x1a6)]=function(_0x28fa33,_0x110114){const _0x4927e6=_0x3cdf07;return this[_0x4927e6(0x333)](_0x28fa33,_0x110114)&&!this[_0x4927e6(0x2df)](_0x28fa33,_0x110114);},Game_Map[_0x3cdf07(0x1bc)]['checkPassageNoEvents']=function(_0x27b7b8,_0x18fee2,_0x2b35db){const _0x3c1b2d=_0x3cdf07,_0x13bf9c=this[_0x3c1b2d(0x319)](),_0x5a0916=this[_0x3c1b2d(0x249)](_0x27b7b8,_0x18fee2);for(const _0x14c304 of _0x5a0916){const _0xcea760=_0x13bf9c[_0x14c304];if(_0xcea760===undefined||_0xcea760===null){if(this[_0x3c1b2d(0x1e4)]()){let _0x2a7ddd=_0x3c1b2d(0x228)+'\x0a';_0x2a7ddd+=_0x3c1b2d(0x23a)+'\x0a',_0x2a7ddd+=_0x3c1b2d(0x32d),alert(_0x2a7ddd),this[_0x3c1b2d(0x27d)]=!![],SceneManager[_0x3c1b2d(0x2de)]();}}if((_0xcea760&0x10)!==0x0)continue;if((_0xcea760&_0x2b35db)===0x0)return!![];if((_0xcea760&_0x2b35db)===_0x2b35db)return![];}return![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x2a2)]=Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b8)],Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b8)]=function(){const _0x2bea88=_0x3cdf07;if(!VisuMZ[_0x2bea88(0x281)][_0x2bea88(0x299)][_0x2bea88(0x212)])return![];return VisuMZ['UniqueTileEffects'][_0x2bea88(0x2a2)][_0x2bea88(0x1fc)](this);},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x1e4)]=function(){const _0x5d9546=_0x3cdf07;if(this[_0x5d9546(0x27d)])return![];if(!VisuMZ[_0x5d9546(0x281)][_0x5d9546(0x299)][_0x5d9546(0x212)])return![];if(!$gameTemp[_0x5d9546(0x233)]())return![];if(DataManager['isEventTest']())return![];if(Imported['VisuMZ_4_EventTitleScene']){if(SceneManager[_0x5d9546(0x256)][_0x5d9546(0x1cd)]===Scene_EventedTitleMap)return![];}return!![];},Game_CharacterBase[_0x3cdf07(0x2aa)]={'slippery':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x310)][_0x3cdf07(0x304)]??0x4,'forceMove':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)]['MoveSpeed']??0x6,'swimming':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x304)]??0x4,'quicksand':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)]['Quicksand'][_0x3cdf07(0x304)]??0x3},Game_CharacterBase['UNIQUE_TILE_PATTERN']={'slippery':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Slippery'][_0x3cdf07(0x349)]??0x2,'forceMove':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x349)]??0x2},Game_CharacterBase[_0x3cdf07(0x35d)]=VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x1c6)]??!![],Game_CharacterBase[_0x3cdf07(0x301)]=VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)]['SwimmingDepth']??0x10,Game_CharacterBase[_0x3cdf07(0x1ba)]=VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x240)]??0xa,Game_CharacterBase[_0x3cdf07(0x280)]={'id':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)]['Lava'][_0x3cdf07(0x24e)]??0x7d,'mirror':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x31f)][_0x3cdf07(0x2eb)]??![],'mute':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x31f)][_0x3cdf07(0x28f)]??!![]},Game_CharacterBase[_0x3cdf07(0x1a0)]=VisuMZ[_0x3cdf07(0x281)]['Settings']['Lava']['LavaBurnTimer']??0x14,Game_CharacterBase[_0x3cdf07(0x28d)]=VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x31f)][_0x3cdf07(0x22b)]??0x6,Game_CharacterBase['SHOCK_ANIMATION']={'id':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x322)][_0x3cdf07(0x24e)]??0x4d,'mirror':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x322)][_0x3cdf07(0x2eb)]??![],'mute':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x322)]['AnimationMute']??!![]},Game_CharacterBase[_0x3cdf07(0x32a)]=VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x322)][_0x3cdf07(0x1f3)]??0x3c,VisuMZ['UniqueTileEffects']['Game_CharacterBase_initMembers']=Game_CharacterBase[_0x3cdf07(0x1bc)]['initMembers'],Game_CharacterBase['prototype'][_0x3cdf07(0x30a)]=function(){const _0x2cca34=_0x3cdf07;VisuMZ[_0x2cca34(0x281)][_0x2cca34(0x222)][_0x2cca34(0x1fc)](this),this[_0x2cca34(0x271)]();},Game_CharacterBase['prototype'][_0x3cdf07(0x271)]=function(){const _0x377ce6=_0x3cdf07;this['_uniqueTileAffected']={},this[_0x377ce6(0x325)]=-0x1,this[_0x377ce6(0x1a7)]=-0x1,this[_0x377ce6(0x2d8)]=0x0;},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2a4)]=function(){const _0x25bbbd=_0x3cdf07;if(DataManager[_0x25bbbd(0x289)]())return![];if(this[_0x25bbbd(0x306)])return![];return $gameMap[_0x25bbbd(0x348)](this['x'],this['y']);},Game_Vehicle[_0x3cdf07(0x1bc)]['isOnUniqueTile']=function(){return![];},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2c1)]=function(){const _0x14ad23=_0x3cdf07;if(DataManager[_0x14ad23(0x289)]())return![];if(this[_0x14ad23(0x306)])return _0x14ad23(0x29b);return $gameMap[_0x14ad23(0x273)](this['x'],this['y'],![]);},Game_Vehicle['prototype'][_0x3cdf07(0x2c1)]=function(){const _0xabbb9b=_0x3cdf07;return _0xabbb9b(0x29b);},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x1fb)]=function(_0x4fde49,_0x4d01df){const _0x533634=_0x3cdf07;if(this[_0x533634(0x2f3)]===undefined)this[_0x533634(0x271)]();this[_0x533634(0x2f3)][_0x4fde49]=_0x4d01df,this[_0x533634(0x1b3)]();},Game_CharacterBase['prototype']['isUniqueTileAffected']=function(_0x4fd6ec){const _0x4462a3=_0x3cdf07;if(_0x4fd6ec===_0x4462a3(0x29b))return![];if(this[_0x4462a3(0x306)])return![];if(this[_0x4462a3(0x2f3)]===undefined)this[_0x4462a3(0x271)]();return this[_0x4462a3(0x2f3)][_0x4fd6ec];},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x235)]=function(_0x7e4fb1){const _0x17215a=_0x3cdf07;if(_0x7e4fb1===_0x17215a(0x29b))return![];if(this[_0x17215a(0x20e)](_0x7e4fb1)){if(_0x7e4fb1===_0x17215a(0x33d))return!![];return![];}if(_0x7e4fb1===_0x17215a(0x33d))return Game_CharacterBase[_0x17215a(0x35d)];return!![];},Game_Follower[_0x3cdf07(0x1bc)][_0x3cdf07(0x235)]=function(_0x4af854){const _0x479469=_0x3cdf07;return $gamePlayer[_0x479469(0x235)](_0x4af854);},Game_CharacterBase[_0x3cdf07(0x1bc)]['isAffectedByCurrentUniqueTile']=function(){const _0x3c5d90=_0x3cdf07;if(this[_0x3c5d90(0x306)])return![];const _0x2aa5d7=this[_0x3c5d90(0x2c1)]();if(_0x2aa5d7==='none')return![];return this[_0x3c5d90(0x235)](_0x2aa5d7);},Game_CharacterBase[_0x3cdf07(0x1bc)]['clearUniqueTileTempData']=function(){const _0x35fcad=_0x3cdf07;this['_uniqueTileMoveSpeed']=-0x1,this[_0x35fcad(0x1a7)]=-0x1;},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x24f)]=function(){const _0x29e70c=_0x3cdf07;this['clearUniqueTileTempData']();if(!this[_0x29e70c(0x2a4)]())return;if($gameMap[_0x29e70c(0x2df)](this['x'],this['y']))return;if(this[_0x29e70c(0x306)])return;if(this[_0x29e70c(0x1cc)]()){const _0x4a9376=this[_0x29e70c(0x2c1)]();this[_0x29e70c(0x325)]=Game_CharacterBase[_0x29e70c(0x2aa)][_0x4a9376]??-0x1,this['_uniqueTilePattern']=Game_CharacterBase[_0x29e70c(0x29f)][_0x4a9376]??-0x1;}},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x279)]=Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x1f0)],Game_CharacterBase['prototype'][_0x3cdf07(0x1f0)]=function(){const _0x4c24b7=_0x3cdf07;if(!this['isDebugThrough']()){if(this['_uniqueTileMoveSpeed']===undefined)this[_0x4c24b7(0x24f)]();if(this[_0x4c24b7(0x325)]>0x0)return this[_0x4c24b7(0x325)];}return VisuMZ[_0x4c24b7(0x281)][_0x4c24b7(0x279)]['call'](this);},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x1eb)]=Game_CharacterBase['prototype']['pattern'],Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x1ac)]=function(){const _0x454458=_0x3cdf07;if(!this[_0x454458(0x258)]()){if(this['_walkAnime']&&!this['_stepAnime']){if(this[_0x454458(0x1a7)]===undefined)this[_0x454458(0x24f)]();if(this[_0x454458(0x1a7)]>-0x1)return this['_uniqueTilePattern'];}}return VisuMZ['UniqueTileEffects'][_0x454458(0x1eb)][_0x454458(0x1fc)](this);},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x1d9)]=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x2d0)],Game_Player['prototype'][_0x3cdf07(0x2d0)]=function(){const _0x25824a=_0x3cdf07;if(this['isDashingAffectedByUniqueTile']())return![];return VisuMZ[_0x25824a(0x281)][_0x25824a(0x1d9)][_0x25824a(0x1fc)](this);},Game_Player[_0x3cdf07(0x1bc)]['isDashingAffectedByUniqueTile']=function(){const _0x45e242=_0x3cdf07;if(this['isDebugThrough']())return![];if($gameMap[_0x45e242(0x232)](this['x'],this['y'],_0x45e242(0x257)))return![];if($gameMap[_0x45e242(0x232)](this['x'],this['y'],_0x45e242(0x1c1)))return![];if($gameMap[_0x45e242(0x2df)](this['x'],this['y']))return![];return this[_0x45e242(0x1cc)]();},VisuMZ[_0x3cdf07(0x281)]['Game_CharacterBase_locate']=Game_CharacterBase['prototype'][_0x3cdf07(0x261)],Game_CharacterBase['prototype'][_0x3cdf07(0x261)]=function(_0x475636,_0x564e43){const _0x5ca131=_0x3cdf07;VisuMZ[_0x5ca131(0x281)]['Game_CharacterBase_locate'][_0x5ca131(0x1fc)](this,_0x475636,_0x564e43),this['updateUniqueTileData'](),this[_0x5ca131(0x276)](0x1),this['_tempSlipperyTileStop']=!![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x321)]=Game_CharacterBase[_0x3cdf07(0x1bc)]['moveStraight'],Game_CharacterBase[_0x3cdf07(0x1bc)]['moveStraight']=function(_0x7dd87d){const _0x3c65e4=_0x3cdf07;if(this===$gamePlayer)this[_0x3c65e4(0x263)]();VisuMZ['UniqueTileEffects'][_0x3c65e4(0x321)]['call'](this,_0x7dd87d),this[_0x3c65e4(0x24f)]();if(this[_0x3c65e4(0x23d)]())this[_0x3c65e4(0x276)](0x1);this[_0x3c65e4(0x1d5)]=_0x7dd87d,this[_0x3c65e4(0x2be)]=![];},VisuMZ[_0x3cdf07(0x281)]['Game_CharacterBase_moveDiagonally']=Game_CharacterBase['prototype'][_0x3cdf07(0x205)],Game_CharacterBase['prototype'][_0x3cdf07(0x205)]=function(_0x241f14,_0x3e5602){const _0x101e47=_0x3cdf07;if(this===$gamePlayer)this[_0x101e47(0x263)]();VisuMZ[_0x101e47(0x281)][_0x101e47(0x34b)]['call'](this,_0x241f14,_0x3e5602),this['updateUniqueTileData'](),this['updateQuicksand'](0x2),this[_0x101e47(0x2be)]=![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x1f2)]=Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b1)],Game_CharacterBase[_0x3cdf07(0x1bc)]['jump']=function(_0x1468e4,_0x6e2eb9){const _0x307deb=_0x3cdf07;VisuMZ['UniqueTileEffects']['Game_CharacterBase_jump'][_0x307deb(0x1fc)](this,_0x1468e4,_0x6e2eb9),this[_0x307deb(0x24f)](),this[_0x307deb(0x1d5)]=this[_0x307deb(0x26f)](),this['_tempSlipperyTileStop']=![];},VisuMZ[_0x3cdf07(0x281)]['Game_CharacterBase_isStopping']=Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2f2)],Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2f2)]=function(){const _0x215537=_0x3cdf07;if(this[_0x215537(0x24b)])return!![];if(this['_isDrowning'])return!![];return VisuMZ[_0x215537(0x281)][_0x215537(0x2e6)][_0x215537(0x1fc)](this);},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x1c0)]=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x2fe)],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x2fe)]=function(){const _0x55e6bd=_0x3cdf07;if(this[_0x55e6bd(0x24b)])return;if(this[_0x55e6bd(0x269)])return;if(this[_0x55e6bd(0x2e0)]!==undefined&&this[_0x55e6bd(0x2e0)]-->0x0)return;VisuMZ['UniqueTileEffects'][_0x55e6bd(0x1c0)][_0x55e6bd(0x1fc)](this);},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x28e)]=function(){const _0x3da84a=_0x3cdf07;if($gameMap[_0x3da84a(0x2df)](this['x'],this['y']))return![];if(this[_0x3da84a(0x1cc)]()){const _0x264dc0=this[_0x3da84a(0x2c1)]();if(SoundManager[_0x3da84a(0x26d)][_0x264dc0]['footstep']&&SoundManager[_0x3da84a(0x26d)][_0x264dc0]['footstep'][_0x3da84a(0x253)])return!![];}return![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x25a)]=Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x20c)],Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x20c)]=function(){const _0x302ca6=_0x3cdf07;if(this['doesCurrentTileHaveUniqueFootstepSfx']())return![];if(this[_0x302ca6(0x306)])return![];return VisuMZ[_0x302ca6(0x281)][_0x302ca6(0x25a)][_0x302ca6(0x1fc)](this);},VisuMZ['UniqueTileEffects']['Game_CharacterBase_increaseSteps']=Game_CharacterBase['prototype'][_0x3cdf07(0x24a)],Game_CharacterBase[_0x3cdf07(0x1bc)]['increaseSteps']=function(){const _0x47df5c=_0x3cdf07;VisuMZ[_0x47df5c(0x281)][_0x47df5c(0x1e9)][_0x47df5c(0x1fc)](this),this[_0x47df5c(0x238)]();},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x267)]=Game_CharacterBase['prototype'][_0x3cdf07(0x239)],Game_CharacterBase[_0x3cdf07(0x1bc)]['updateJump']=function(){const _0x38df18=_0x3cdf07;VisuMZ[_0x38df18(0x281)][_0x38df18(0x267)]['call'](this),this[_0x38df18(0x1d3)]===0x0&&this[_0x38df18(0x27e)]()&&this[_0x38df18(0x30e)]();},Game_CharacterBase['prototype'][_0x3cdf07(0x238)]=function(){const _0x1a7415=_0x3cdf07;this['canMakeUniqueTileFootstepSounds']()&&this['makeUniqueTileFootstepSounds'](),this===$gamePlayer&&this[_0x1a7415(0x1b2)]()&&this[_0x1a7415(0x23c)]();},Game_CharacterBase['prototype'][_0x3cdf07(0x27e)]=function(){const _0x7ab03c=_0x3cdf07;if(!Imported[_0x7ab03c(0x230)])return![];if(!$gameSystem[_0x7ab03c(0x20c)]())return![];if(this[_0x7ab03c(0x1cd)]===Game_Follower&&!this[_0x7ab03c(0x30d)]())return![];if(!this[_0x7ab03c(0x2a4)]())return![];if(!this[_0x7ab03c(0x1cc)]())return![];if(!this[_0x7ab03c(0x28e)]())return![];return!![];},Game_CharacterBase['prototype']['makeUniqueTileFootstepSounds']=function(){const _0x341437=_0x3cdf07,_0x11a472=this[_0x341437(0x2c1)]();SoundManager[_0x341437(0x27f)](_0x11a472,_0x341437(0x1b9),this);},Game_Player['prototype']['meetsUniqueTileGatherConditions']=function(){const _0x345185=_0x3cdf07;if(this[_0x345185(0x258)]())return![];if(this['canSwimInWater']()){if(this['isSwimming']())return this[_0x345185(0x234)]();if(!this[_0x345185(0x2cc)]()&&this[_0x345185(0x209)]())return!![];}const _0x34986f=this[_0x345185(0x206)](),_0x33ca49=$gameMap[_0x345185(0x273)](_0x34986f['x'],_0x34986f['y']),_0x1439bd=this[_0x345185(0x235)](_0x33ca49),_0x72fbdb=$gameMap['hasBelowPriorityEventsXy'](_0x34986f['x'],_0x34986f['y']);if(!this[_0x345185(0x1cc)]()||$gameMap[_0x345185(0x2df)](this['x'],this['y']))return _0x1439bd&&!_0x72fbdb;return![];},Game_Player['prototype']['anyFollowersSwimming']=function(){const _0x46254=_0x3cdf07;return this[_0x46254(0x1ce)][_0x46254(0x2b3)]()[_0x46254(0x1d2)](_0x3e327b=>_0x3e327b[_0x46254(0x2cc)]());},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x234)]=function(){const _0x98117d=_0x3cdf07;return this[_0x98117d(0x1ce)][_0x98117d(0x2b3)]()['some'](_0x3784fb=>!_0x3784fb[_0x98117d(0x2cc)]());},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x1a1)]=Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2bc)],Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2bc)]=function(_0x4c40a3,_0x39cdf4,_0x1e312e){const _0x1358d4=_0x3cdf07;if(this[_0x1358d4(0x1fe)]){const _0xee15d8=$gameMap[_0x1358d4(0x274)](_0x4c40a3,_0x1e312e),_0x2cd361=$gameMap[_0x1358d4(0x2da)](_0x39cdf4,_0x1e312e),_0x39689a=$gameMap[_0x1358d4(0x273)](_0xee15d8,_0x2cd361,![]);if(this[_0x1358d4(0x344)](_0x39689a))return![];}if(this['isUniqueTileAffected'](_0x1358d4(0x257))){if($gameMap['checkUniqueTileType'](this['x'],this['y'],_0x1358d4(0x257))){if(!$gameMap[_0x1358d4(0x2df)](this['x'],this['y']))return![];}const _0x4e9675=$gameMap[_0x1358d4(0x274)](_0x4c40a3,_0x1e312e),_0x4973a5=$gameMap[_0x1358d4(0x2da)](_0x39cdf4,_0x1e312e);if($gameMap[_0x1358d4(0x232)](_0x4e9675,_0x4973a5,_0x1358d4(0x257)))return!![];}if(this[_0x1358d4(0x235)](_0x1358d4(0x33d))){const _0x20355d=$gameMap[_0x1358d4(0x274)](_0x4c40a3,_0x1e312e),_0x3ac40c=$gameMap[_0x1358d4(0x2da)](_0x39cdf4,_0x1e312e);if($gameMap[_0x1358d4(0x232)](this['x'],this['y'],_0x1358d4(0x33d))){if(!$gameMap['checkUniqueTileType'](_0x20355d,_0x3ac40c,_0x1358d4(0x33d))){if($gameMap[_0x1358d4(0x2c4)](_0x20355d,_0x3ac40c,this[_0x1358d4(0x35c)](_0x1e312e)))return![];if($gameMap[_0x1358d4(0x215)](_0x20355d,_0x3ac40c))return!![];if(!VisuMZ['UniqueTileEffects']['Game_CharacterBase_isMapPassable'][_0x1358d4(0x1fc)](this,_0x4c40a3,_0x39cdf4,_0x1e312e))return![];}if(!$gameMap[_0x1358d4(0x2df)](this['x'],this['y']))return this['canSwimInWater']();}if($gameMap['checkUniqueTileType'](_0x20355d,_0x3ac40c,'swimming')){if($gameMap[_0x1358d4(0x2c4)](this['x'],this['y'],_0x1e312e))return![];return!![];}}return VisuMZ[_0x1358d4(0x281)]['Game_CharacterBase_isMapPassable'][_0x1358d4(0x1fc)](this,_0x4c40a3,_0x39cdf4,_0x1e312e);},Game_Map[_0x3cdf07(0x1bc)][_0x3cdf07(0x2c4)]=function(_0x2c7786,_0x5c247f,_0x4e0fc9){const _0x1f9e41=_0x3cdf07,_0x4c5fc8=this[_0x1f9e41(0x319)](),_0x249c39=this['allTiles'](_0x2c7786,_0x5c247f);for(const _0x1b3349 of _0x249c39){const _0x4aff74=_0x4c5fc8[_0x1b3349];if([0x1,0x2,0x3][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x601)return!![];if([0x4,0x1,0x2][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x603)return!![];if([0x2,0x3,0x6][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x605)return!![];if([0x7,0x4,0x3][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x602)return!![];if([0x9,0x6,0x3][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x604)return!![];if([0x7,0x8,0x9][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x608)return!![];if([0x4,0x7,0x8][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x60a)return!![];if([0x8,0x9,0x6][_0x1f9e41(0x251)](_0x4e0fc9)&&_0x4aff74===0x60c)return!![];}return![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x218)]=Game_CharacterBase['prototype']['update'],Game_CharacterBase['prototype']['update']=function(){const _0x160852=_0x3cdf07;VisuMZ[_0x160852(0x281)][_0x160852(0x218)][_0x160852(0x1fc)](this);if(this['canUpdateUniqueTileEffects']())this[_0x160852(0x328)]();if(this['canUpdateUniqueTileLava']())this[_0x160852(0x1d7)]();},Game_CharacterBase['prototype'][_0x3cdf07(0x1a5)]=function(){const _0x546b42=_0x3cdf07;if(this[_0x546b42(0x2ea)]())return![];if(this[_0x546b42(0x2e1)]())return![];if(this[_0x546b42(0x258)]())return![];if(this[_0x546b42(0x306)])return![];if(this===$gamePlayer){if($gamePlayer[_0x546b42(0x334)]())return![];if($gamePlayer[_0x546b42(0x264)]())return![];}if(this[_0x546b42(0x1cd)]===Game_Follower&&$gamePlayer[_0x546b42(0x258)]())return![];if(!this[_0x546b42(0x1cc)]())return![];if($gameMap[_0x546b42(0x2df)](this['x'],this['y']))return![];return!![];},Game_CharacterBase['prototype']['updateUniqueTileEffects']=function(){const _0x35f2c9=this['getUniqueTileType']();this['processUniqueTileEffect'](_0x35f2c9);},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x342)]=function(_0xdf0b6f){const _0x43afed=_0x3cdf07;switch(_0xdf0b6f){case'slippery':this['processSlipperyEffect']();break;case'forceMove':this[_0x43afed(0x1cf)]();break;case _0x43afed(0x257):this[_0x43afed(0x2dc)]();break;case _0x43afed(0x33d):this[_0x43afed(0x275)]();break;case'shock':this[_0x43afed(0x2d7)]();break;case _0x43afed(0x1c1):this[_0x43afed(0x243)]();break;}},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x30f)]=function(){const _0x5edfd3=_0x3cdf07;if(this['_tempSlipperyTileStop'])return;if(this['constructor']===Game_Follower)return;const _0x59510f=this[_0x5edfd3(0x26f)]();if([0x7,0x1][_0x5edfd3(0x251)](_0x59510f))this[_0x5edfd3(0x2af)](0x4);if([0x9,0x3][_0x5edfd3(0x251)](_0x59510f))this[_0x5edfd3(0x2af)](0x6);this[_0x5edfd3(0x24c)](this['slipperyMoveDirection']()),this===$gamePlayer&&$gamePlayer['checkEventTriggerHere']([0x1,0x2]),!this[_0x5edfd3(0x23d)]()&&(this[_0x5edfd3(0x2be)]=!![]);},Game_CharacterBase[_0x3cdf07(0x1bc)]['slipperyMoveDirection']=function(){const _0x223a09=_0x3cdf07;return this[_0x223a09(0x1d5)]||this[_0x223a09(0x26f)]();},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x1cf)]=function(){const _0x2606f3=_0x3cdf07;if(this[_0x2606f3(0x1cd)]===Game_Follower)return;this[_0x2606f3(0x24c)](this['forceMoveDirection']()),this===$gamePlayer&&$gamePlayer[_0x2606f3(0x33f)]([0x1,0x2]);},Game_CharacterBase['prototype'][_0x3cdf07(0x262)]=function(){const _0x1e3b0d=_0x3cdf07,_0x18c466=$gameMap[_0x1e3b0d(0x273)](this['x'],this['y'],!![]);switch(_0x18c466){case _0x1e3b0d(0x219):return 0x2;case'left':return 0x4;case'right':return 0x6;case'up':return 0x8;default:return 0x0;}},Game_CharacterBase['prototype']['processPitfallEffect']=function(){const _0x1b3fb9=_0x3cdf07;if(this['_isPitfalling'])return;if($gameMap['hasBelowPriorityEventsXy'](this['x'],this['y']))return;this[_0x1b3fb9(0x24b)]=!![],SoundManager[_0x1b3fb9(0x27f)](_0x1b3fb9(0x257),_0x1b3fb9(0x210),this);const _0x1c0832=SceneManager[_0x1b3fb9(0x201)][_0x1b3fb9(0x285)];if(_0x1c0832){const _0x1d66f9=_0x1c0832[_0x1b3fb9(0x266)](this);if(_0x1d66f9){_0x1d66f9['startPitfallEffect']();return;}}this['onPitfallFinish']();},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x33e)]=function(){const _0x57f33d=_0x3cdf07;setTimeout(this[_0x57f33d(0x2db)]['bind'](this),0x64);},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2db)]=function(){const _0x2e2ede=_0x3cdf07;this[_0x2e2ede(0x24b)]=![];},Game_Player['prototype'][_0x3cdf07(0x33e)]=function(){const _0x4b21c5=_0x3cdf07;$gameParty[_0x4b21c5(0x22a)]();if($gameParty[_0x4b21c5(0x25e)]()){this[_0x4b21c5(0x1ce)][_0x4b21c5(0x2c5)]();return;}Game_Character[_0x4b21c5(0x1bc)]['onPitfallFinish'][_0x4b21c5(0x1fc)](this);if(this[_0x4b21c5(0x340)](_0x4b21c5(0x257)))return;this['gotoLastSafestCoordinate'](),this[_0x4b21c5(0x1ce)]['onPitfallFinish']();if(SceneManager[_0x4b21c5(0x200)]()){const _0x6cd153=SceneManager[_0x4b21c5(0x201)]['_spriteset'][_0x4b21c5(0x266)](this);if(_0x6cd153)_0x6cd153[_0x4b21c5(0x268)]();}},Game_Followers[_0x3cdf07(0x1bc)][_0x3cdf07(0x33e)]=function(){const _0x595a64=_0x3cdf07;for(const _0x23a685 of this['_data']){if(!_0x23a685)continue;_0x23a685['onPitfallFinish']();if(SceneManager[_0x595a64(0x200)]()){const _0x4416e6=SceneManager[_0x595a64(0x201)]['_spriteset'][_0x595a64(0x266)](_0x23a685);if(_0x4416e6)_0x4416e6[_0x595a64(0x268)]();}}},Game_Followers['prototype']['onPitfallDead']=function(){const _0xf9afc8=_0x3cdf07;for(const _0x28c0d8 of this[_0xf9afc8(0x1cb)]){if(!_0x28c0d8)continue;_0x28c0d8[_0xf9afc8(0x24b)]=!![];}},Game_Follower[_0x3cdf07(0x1bc)][_0x3cdf07(0x33e)]=function(){const _0x58884c=_0x3cdf07;if($gameParty[_0x58884c(0x25e)]())return;Game_Character['prototype'][_0x58884c(0x33e)][_0x58884c(0x1fc)](this),this[_0x58884c(0x261)]($gamePlayer['x'],$gamePlayer['y']),this[_0x58884c(0x2af)]($gamePlayer[_0x58884c(0x26f)]()),this[_0x58884c(0x1fa)](),this[_0x58884c(0x24f)]();if($gamePlayer[_0x58884c(0x24b)])return;if(SceneManager[_0x58884c(0x200)]()){const _0x16ee4f=SceneManager[_0x58884c(0x201)][_0x58884c(0x285)]['findTargetSprite'](this);_0x16ee4f&&(_0x16ee4f[_0x58884c(0x268)](),_0x16ee4f['update']());}},Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x33e)]=function(){const _0x4739c5=_0x3cdf07;Game_Character['prototype'][_0x4739c5(0x33e)][_0x4739c5(0x1fc)](this),this[_0x4739c5(0x284)]();},Game_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x2a8)]=function(){return![];},Game_Player[_0x3cdf07(0x1bc)]['canSwimInWater']=function(){const _0x2ca675=_0x3cdf07;return this[_0x2ca675(0x20e)](_0x2ca675(0x33d));},Game_Follower[_0x3cdf07(0x1bc)][_0x3cdf07(0x2a8)]=function(){const _0x2e605b=_0x3cdf07;return $gamePlayer[_0x2e605b(0x2a8)]();},Game_Character[_0x3cdf07(0x1bc)]['isSwimming']=function(){const _0x22a769=_0x3cdf07;if(!this['canSwimInWater']())return![];if(!$gameMap['isSwimmingTile'](this['x'],this['y']))return![];if($gameMap['hasBelowPriorityEventsXy'](this['x'],this['y']))return![];return $gameMap['checkUniqueTileType'](this['x'],this['y'],_0x22a769(0x33d));},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x1c2)]=Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2c7)],Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2c7)]=function(){const _0x35925b=_0x3cdf07;if(this[_0x35925b(0x2cc)]())return![];return VisuMZ[_0x35925b(0x281)][_0x35925b(0x1c2)][_0x35925b(0x1fc)](this);},Game_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x1e1)]=function(){return Game_CharacterBase['SWIMMING_DEPTH'];},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x275)]=function(){const _0x4f3fb9=_0x3cdf07;if(this[_0x4f3fb9(0x269)])return;if($gameMap[_0x4f3fb9(0x2df)](this['x'],this['y']))return;if(this['canSwimInWater']())return;this[_0x4f3fb9(0x269)]=!![],SoundManager[_0x4f3fb9(0x27f)](_0x4f3fb9(0x33d),_0x4f3fb9(0x210),this);const _0x49db64=SceneManager[_0x4f3fb9(0x201)][_0x4f3fb9(0x285)];if(_0x49db64){const _0x30cfb0=_0x49db64[_0x4f3fb9(0x266)](this);if(_0x30cfb0){_0x30cfb0[_0x4f3fb9(0x211)]();return;}}this[_0x4f3fb9(0x29a)]();},Game_Follower[_0x3cdf07(0x1bc)]['processDrowningEffect']=function(){const _0x12a8e5=_0x3cdf07;if($gamePlayer[_0x12a8e5(0x358)])return;if($gamePlayer['isInVehicle']())return;Game_Character['prototype'][_0x12a8e5(0x275)][_0x12a8e5(0x1fc)](this);},Game_CharacterBase['prototype'][_0x3cdf07(0x29a)]=function(){const _0x2257bb=_0x3cdf07;setTimeout(this[_0x2257bb(0x2fc)]['bind'](this),0x64);},Game_CharacterBase[_0x3cdf07(0x1bc)]['turnOffDrowning']=function(){this['_isDrowning']=![];},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x29a)]=function(){const _0x14055d=_0x3cdf07;$gameParty[_0x14055d(0x22a)]();if($gameParty[_0x14055d(0x25e)]()){this[_0x14055d(0x1ce)][_0x14055d(0x287)]();return;}Game_Character[_0x14055d(0x1bc)][_0x14055d(0x29a)][_0x14055d(0x1fc)](this),this[_0x14055d(0x2ef)](),this[_0x14055d(0x1ce)]['onDrowningFinish']();if(SceneManager[_0x14055d(0x200)]()){const _0x1242b6=SceneManager[_0x14055d(0x201)][_0x14055d(0x285)]['findTargetSprite'](this);if(_0x1242b6)_0x1242b6[_0x14055d(0x2bd)]();}},Game_Followers[_0x3cdf07(0x1bc)]['onDrowningFinish']=function(){const _0x32ca1d=_0x3cdf07;for(const _0x17b7e2 of this[_0x32ca1d(0x1cb)]){if(!_0x17b7e2)continue;_0x17b7e2[_0x32ca1d(0x29a)]();if(SceneManager['isSceneMap']()){const _0x31a5f5=SceneManager[_0x32ca1d(0x201)][_0x32ca1d(0x285)][_0x32ca1d(0x266)](_0x17b7e2);if(_0x31a5f5)_0x31a5f5['restorePreDrowning']();}}},Game_Followers[_0x3cdf07(0x1bc)][_0x3cdf07(0x287)]=function(){const _0x24786f=_0x3cdf07;for(const _0x34db24 of this[_0x24786f(0x1cb)]){if(!_0x34db24)continue;_0x34db24[_0x24786f(0x269)]=!![];}},Game_Follower[_0x3cdf07(0x1bc)][_0x3cdf07(0x29a)]=function(){const _0x48a965=_0x3cdf07;if($gameParty[_0x48a965(0x25e)]())return;Game_Character[_0x48a965(0x1bc)][_0x48a965(0x29a)]['call'](this),this[_0x48a965(0x261)]($gamePlayer['x'],$gamePlayer['y']),this[_0x48a965(0x2af)]($gamePlayer[_0x48a965(0x26f)]()),this[_0x48a965(0x1fa)](),this[_0x48a965(0x24f)]();if($gamePlayer[_0x48a965(0x269)])return;if(SceneManager['isSceneMap']()){const _0x1cab99=SceneManager[_0x48a965(0x201)][_0x48a965(0x285)][_0x48a965(0x266)](this);_0x1cab99&&(_0x1cab99['restorePreDrowning'](),_0x1cab99[_0x48a965(0x1dc)]());}},Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x29a)]=function(){const _0x19c47f=_0x3cdf07;Game_Character['prototype'][_0x19c47f(0x29a)]['call'](this),this[_0x19c47f(0x284)]();},Game_Character['prototype'][_0x3cdf07(0x2f1)]=function(){const _0x85166a=_0x3cdf07;return this[_0x85166a(0x235)]('quicksand')&&this[_0x85166a(0x2c1)]()===_0x85166a(0x237)&&!$gameMap['hasBelowPriorityEventsXy'](this['x'],this['y']);},Game_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x1de)]=function(){const _0x574568=_0x3cdf07;return this[_0x574568(0x2d8)]=this[_0x574568(0x2d8)]||0x0,(this[_0x574568(0x2d8)]/Game_CharacterBase[_0x574568(0x1ba)])[_0x574568(0x1b0)](0x0,0x1);},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x276)]=function(_0x5268d3){const _0x557cf7=_0x3cdf07;_0x5268d3=_0x5268d3||0x1,this['isQuicksandSinking']()?(this['_quicksandSteps']+=_0x5268d3,this['_quicksandSteps']>=Game_CharacterBase[_0x557cf7(0x1ba)]&&this[_0x557cf7(0x1ae)]()):this[_0x557cf7(0x2d8)]=0x0;},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x1ae)]=function(){},Game_Player['prototype']['onQuicksandSink']=function(){const _0x5b9e81=_0x3cdf07;Input['clear'](),TouchInput[_0x5b9e81(0x1da)](),$gameParty[_0x5b9e81(0x22a)]();if($gameParty[_0x5b9e81(0x25e)]())return;Game_Character['prototype'][_0x5b9e81(0x1ae)]['call'](this),this[_0x5b9e81(0x2ef)]();},Game_Event[_0x3cdf07(0x1bc)]['onQuicksandSink']=function(){const _0x1bbbe9=_0x3cdf07;Game_Character[_0x1bbbe9(0x1bc)][_0x1bbbe9(0x1ae)][_0x1bbbe9(0x1fc)](this),this[_0x1bbbe9(0x284)]();},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2d3)]=function(){const _0x1d21d3=_0x3cdf07;if(!this[_0x1d21d3(0x235)]('lava'))return![];if(this[_0x1d21d3(0x2e1)]())return![];if(this[_0x1d21d3(0x258)]())return![];if(this[_0x1d21d3(0x306)])return![];if(this===$gamePlayer){if($gamePlayer[_0x1d21d3(0x334)]())return![];if($gamePlayer[_0x1d21d3(0x264)]())return![];}if(this['constructor']===Game_Follower&&$gamePlayer[_0x1d21d3(0x258)]())return![];if(!this[_0x1d21d3(0x1cc)]())return![];if(this['getUniqueTileType']()!=='lava')return![];if($gameMap[_0x1d21d3(0x2df)](this['x'],this['y']))return![];return Graphics[_0x1d21d3(0x2ce)]%Game_CharacterBase[_0x1d21d3(0x1a0)]===0x0;},Game_CharacterBase['prototype'][_0x3cdf07(0x1d7)]=function(){const _0x54b30b=_0x3cdf07;if(this[_0x54b30b(0x1cd)]===Game_Follower&&!this[_0x54b30b(0x30d)]())return;if(Imported['VisuMZ_0_CoreEngine']){const _0x65804d=Game_CharacterBase[_0x54b30b(0x280)];if(_0x65804d['id']<=0x0)return;$gameTemp[_0x54b30b(0x2ac)]([this],_0x65804d['id'],_0x65804d[_0x54b30b(0x1f7)],_0x65804d[_0x54b30b(0x1b4)]);}},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1d7)]=function(){const _0x39b489=_0x3cdf07;$gameParty[_0x39b489(0x22a)]();if($gameParty[_0x39b489(0x25e)]())return;Game_Character['prototype'][_0x39b489(0x1d7)]['call'](this);},Game_Event['prototype'][_0x3cdf07(0x1d7)]=function(){const _0xb05e78=_0x3cdf07;Game_Character[_0xb05e78(0x1bc)][_0xb05e78(0x1d7)][_0xb05e78(0x1fc)](this),this[_0xb05e78(0x26e)]=this[_0xb05e78(0x26e)]||0x0,this[_0xb05e78(0x26e)]++,SoundManager['playUniqueTileSfx'](_0xb05e78(0x2b6),_0xb05e78(0x2d4),this),this[_0xb05e78(0x26e)]>=(this[_0xb05e78(0x1e3)]??Game_CharacterBase[_0xb05e78(0x28d)])&&this['erase']();},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x2d7)]=function(){const _0x4b7c95=_0x3cdf07;if(Imported[_0x4b7c95(0x244)]){const _0x4352cd=Game_CharacterBase[_0x4b7c95(0x23e)];if(_0x4352cd['id']<=0x0)return;$gameTemp[_0x4b7c95(0x2ac)]([this],_0x4352cd['id'],_0x4352cd[_0x4b7c95(0x1f7)],_0x4352cd[_0x4b7c95(0x1b4)]);}},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x2d7)]=function(){const _0x160fe6=_0x3cdf07;if(this[_0x160fe6(0x1ea)])return;Input['clear'](),TouchInput[_0x160fe6(0x1da)](),$gameParty[_0x160fe6(0x22a)](),Game_Character[_0x160fe6(0x1bc)][_0x160fe6(0x2d7)][_0x160fe6(0x1fc)](this);if($gameParty[_0x160fe6(0x25e)]()){this[_0x160fe6(0x1ea)]=!![];return;}this[_0x160fe6(0x2ef)](),this[_0x160fe6(0x2e0)]=Game_CharacterBase[_0x160fe6(0x32a)];},Game_Follower['prototype']['processShockEffect']=function(){},Game_Event[_0x3cdf07(0x1bc)]['processShockEffect']=function(){const _0x4d6664=_0x3cdf07;if(this[_0x4d6664(0x1ea)])return;Game_Character[_0x4d6664(0x1bc)][_0x4d6664(0x2d7)][_0x4d6664(0x1fc)](this),SoundManager[_0x4d6664(0x27f)](_0x4d6664(0x1c9),_0x4d6664(0x2d4),this),this[_0x4d6664(0x1ea)]=!![],setTimeout(this[_0x4d6664(0x284)]['bind'](this),0x64);},Game_CharacterBase['prototype']['processBounceEffect']=function(){const _0x186f6c=_0x3cdf07,_0x117060=this[_0x186f6c(0x291)]();let _0x2a4ac4=0x0,_0x2215f8=0x0;const _0x30f652=this['bounceMoveDirection']();if([0x7,0x1]['includes'](_0x30f652))this['setDirection'](0x4);if([0x9,0x3]['includes'](_0x30f652))this['setDirection'](0x6);switch(_0x30f652){case 0x2:_0x2215f8=_0x117060;break;case 0x4:_0x2a4ac4=-_0x117060;break;case 0x6:_0x2a4ac4=_0x117060;break;case 0x8:_0x2215f8=-_0x117060;break;}this[_0x186f6c(0x1b1)](_0x2a4ac4,_0x2215f8),(_0x2a4ac4!==0x0||_0x2215f8!==0x0)&&SoundManager[_0x186f6c(0x27f)](_0x186f6c(0x1c1),_0x186f6c(0x210),this);},Game_Follower[_0x3cdf07(0x1bc)]['processBounceEffect']=function(){},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x241)]=function(){const _0x113464=_0x3cdf07;return this['_uniqueTileMoveDirection']||this[_0x113464(0x26f)]();},Game_CharacterBase[_0x3cdf07(0x1bc)][_0x3cdf07(0x291)]=function(){const _0x576eaf=_0x3cdf07,_0x51316f=$gameMap[_0x576eaf(0x273)](this['x'],this['y'],!![]);return[_0x576eaf(0x2cf),_0x576eaf(0x2e9),'bounce2','bounce3',_0x576eaf(0x2d1),_0x576eaf(0x2fa),_0x576eaf(0x2ca),'bounce7',_0x576eaf(0x327),_0x576eaf(0x2f6)][_0x576eaf(0x331)](_0x51316f);},Game_Player[_0x3cdf07(0x1bc)]['setupUniqueTileData']=function(){const _0x2faa65=_0x3cdf07;Game_Character[_0x2faa65(0x1bc)][_0x2faa65(0x271)][_0x2faa65(0x1fc)](this),this[_0x2faa65(0x33a)]={},this['_uniqueTilePartyImmune']={};},Game_Player[_0x3cdf07(0x1bc)]['isImmuneToUniqueTileType']=function(_0x4aa2d7){const _0x4f5009=_0x3cdf07;if(this[_0x4f5009(0x33a)]===undefined)this[_0x4f5009(0x271)]();if(this[_0x4f5009(0x21f)]===undefined)this[_0x4f5009(0x1db)]();return this[_0x4f5009(0x33a)][_0x4aa2d7]||this[_0x4f5009(0x21f)][_0x4aa2d7];},Game_Player['prototype']['setImmuneToUniqueTileType']=function(_0x59db40,_0x5d3fe3){const _0x143bfc=_0x3cdf07;if(this['_uniqueTileCmdImmune']===undefined)this['setupUniqueTileData']();this[_0x143bfc(0x33a)][_0x59db40]=_0x5d3fe3,this[_0x143bfc(0x1b3)]();},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x27c)]=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b3)],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b3)]=function(){const _0xb590e2=_0x3cdf07;VisuMZ[_0xb590e2(0x281)]['Game_Player_refresh'][_0xb590e2(0x1fc)](this),this[_0xb590e2(0x278)]();},Game_Player['prototype'][_0x3cdf07(0x278)]=function(){const _0x158261=_0x3cdf07;this[_0x158261(0x21f)]=undefined;},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1db)]=function(){const _0x4efcbc=_0x3cdf07;this[_0x4efcbc(0x21f)]={};const _0x2480ab=VisuMZ[_0x4efcbc(0x281)][_0x4efcbc(0x20b)],_0x147cf6=VisuMZ[_0x4efcbc(0x281)]['TileTypes']();for(const _0x1b5ffb of _0x147cf6){if(!_0x2480ab[_0x1b5ffb])continue;const _0x3abe80=_0x2480ab[_0x1b5ffb][_0x4efcbc(0x26b)];_0x3abe80&&(this[_0x4efcbc(0x21f)][_0x1b5ffb]=$gameParty[_0x4efcbc(0x1b7)](_0x3abe80));}},Game_Party[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b7)]=function(_0x22489a){const _0x397a62=_0x3cdf07;if(this[_0x397a62(0x2a3)]()[_0x397a62(0x1d2)](_0x1d3f5f=>_0x1d3f5f&&_0x1d3f5f[_0x397a62(0x1a8)][_0x397a62(0x2b1)](_0x22489a)))return!![];const _0x567f45=Game_Party[_0x397a62(0x223)]['general'][_0x397a62(0x2f7)],_0x352868=_0x567f45?this[_0x397a62(0x35b)]():this[_0x397a62(0x314)]();for(const _0x3fff5d of _0x352868){if(!_0x3fff5d)continue;if(_0x3fff5d[_0x397a62(0x2dd)]()[_0x397a62(0x1d2)](_0x18de78=>_0x18de78&&_0x18de78['note']['match'](_0x22489a)))return!![];}return![];},VisuMZ[_0x3cdf07(0x281)]['Game_Party_gainItem']=Game_Party[_0x3cdf07(0x1bc)][_0x3cdf07(0x22e)],Game_Party[_0x3cdf07(0x1bc)][_0x3cdf07(0x22e)]=function(_0x40b67b,_0xc3b99e,_0xa6fe4a){const _0x8a61fd=_0x3cdf07;VisuMZ['UniqueTileEffects'][_0x8a61fd(0x353)][_0x8a61fd(0x1fc)](this,_0x40b67b,_0xc3b99e,_0xa6fe4a),$gamePlayer[_0x8a61fd(0x278)]();},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x27b)]=Game_Actor[_0x3cdf07(0x1bc)][_0x3cdf07(0x20d)],Game_Actor['prototype'][_0x3cdf07(0x20d)]=function(_0x1de193,_0x40f027){const _0x144ec5=_0x3cdf07;VisuMZ['UniqueTileEffects']['Game_Actor_changeEquip']['call'](this,_0x1de193,_0x40f027),$gamePlayer[_0x144ec5(0x278)]();},VisuMZ[_0x3cdf07(0x281)]['Game_Actor_forceChangeEquip']=Game_Actor[_0x3cdf07(0x1bc)][_0x3cdf07(0x346)],Game_Actor['prototype']['forceChangeEquip']=function(_0x1a431b,_0x376379){const _0x2481ae=_0x3cdf07;VisuMZ[_0x2481ae(0x281)][_0x2481ae(0x1c5)][_0x2481ae(0x1fc)](this,_0x1a431b,_0x376379),$gamePlayer[_0x2481ae(0x278)]();},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x28a)]=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x261)],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x261)]=function(_0x2568b0,_0x594240){const _0x4ecd00=_0x3cdf07;VisuMZ[_0x4ecd00(0x281)][_0x4ecd00(0x28a)][_0x4ecd00(0x1fc)](this,_0x2568b0,_0x594240),this[_0x4ecd00(0x263)](),this[_0x4ecd00(0x295)](!![]);},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x308)]=Game_Player['prototype'][_0x3cdf07(0x24a)],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x24a)]=function(){const _0x162ed2=_0x3cdf07;VisuMZ['UniqueTileEffects'][_0x162ed2(0x308)][_0x162ed2(0x1fc)](this),this[_0x162ed2(0x295)]();},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x263)]=function(){const _0x400063=_0x3cdf07;this[_0x400063(0x272)]={'x':this['x'],'y':this['y']};},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x206)]=function(){const _0x1014d4=_0x3cdf07;return this[_0x1014d4(0x272)]||{'x':this['x'],'y':this['y']};},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x295)]=function(_0x1d3e4e){const _0x345a67=_0x3cdf07;if(!_0x1d3e4e){if(this['canPreventSafestCoordinateRegistration']())return;}this[_0x345a67(0x21b)]={'x':this['x'],'y':this['y'],'d':this[_0x345a67(0x26f)]()};},Game_Player[_0x3cdf07(0x1bc)]['canPreventSafestCoordinateRegistration']=function(){const _0x2793c4=_0x3cdf07;if(this['isOnUniqueTile']())return!![];if(!$gameMap['isRawPassableByAnyDirection'](this['x'],this['y']))return!![];if($gameMap[_0x2793c4(0x1aa)](this['x'],this['y']))return!![];if($gameMap['isBoatPassable'](this['x'],this['y']))return!![];if($gameMap[_0x2793c4(0x248)](this['x'],this['y']))return!![];return![];},Game_Player[_0x3cdf07(0x1bc)]['gotoLastSafestCoordinate']=function(){const _0x1dfe30=_0x3cdf07;if(this[_0x1dfe30(0x21b)]===undefined)return;this['setDirection'](this[_0x1dfe30(0x21b)]['d']||this[_0x1dfe30(0x26f)]()),this[_0x1dfe30(0x261)](this[_0x1dfe30(0x21b)]['x']??this['x'],this['_lastSafestCoordinate']['y']??this['y']),this[_0x1dfe30(0x26c)]();},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x26c)]=function(){const _0x3c5722=_0x3cdf07;if(!SceneManager[_0x3c5722(0x200)]())return;const _0x5984ff=SceneManager[_0x3c5722(0x201)]['_spriteset'];if(!_0x5984ff)return;{const _0x33f0d7=_0x5984ff[_0x3c5722(0x266)](this);if(_0x33f0d7)_0x33f0d7[_0x3c5722(0x26c)]();}for(const _0xa4aab6 of this[_0x3c5722(0x1ce)]['visibleFollowers']()){const _0x19c429=_0x5984ff['findTargetSprite'](_0xa4aab6);if(_0x19c429)_0x19c429[_0x3c5722(0x26c)]();}},Game_Player['prototype'][_0x3cdf07(0x340)]=function(_0xfcd712){const _0x5458eb=_0x3cdf07,_0x1e5855=$gameMap[_0x5458eb(0x33c)][_0xfcd712];if(!_0x1e5855)return![];const _0x38e312=_0x1e5855[0x0]||$gameMap[_0x5458eb(0x1dd)](),_0x14a0dd=_0x1e5855[0x1]??this['x'],_0x5bd47c=_0x1e5855[0x2]??this['y'];if(_0x38e312===$gameMap[_0x5458eb(0x1dd)]()&&_0x14a0dd===this['x']&&_0x5bd47c===this['y'])return![];return this[_0x5458eb(0x1f9)](_0x38e312,_0x14a0dd,_0x5bd47c,this[_0x5458eb(0x26f)](),0x0),!![];},Game_Event['UNIQUE_TILE_AFFECTED_DEFAULT']={'slippery':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x310)][_0x3cdf07(0x1ca)],'forceMove':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x1ca)],'pitfall':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x316)][_0x3cdf07(0x1ca)],'swimming':VisuMZ[_0x3cdf07(0x281)]['Settings']['Swimming']['DefaultAffected'],'quicksand':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Quicksand'][_0x3cdf07(0x1ca)],'lava':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x31f)]['DefaultAffected'],'shock':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x322)][_0x3cdf07(0x1ca)],'bounce':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Bounce']['DefaultAffected']},Game_Event[_0x3cdf07(0x1ad)]={'slippery':VisuMZ['UniqueTileEffects']['Settings'][_0x3cdf07(0x310)][_0x3cdf07(0x329)],'forceMove':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1e8)][_0x3cdf07(0x329)],'pitfall':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x316)][_0x3cdf07(0x329)],'swimming':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x329)],'quicksand':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x329)],'lava':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x31f)]['DefaultAvoid'],'shock':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x322)][_0x3cdf07(0x329)],'bounce':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x292)][_0x3cdf07(0x329)]},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x34d)]=Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b5)],Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x1b5)]=function(){const _0x381d39=_0x3cdf07;VisuMZ[_0x381d39(0x281)]['Game_Event_clearPageSettings']['call'](this),this[_0x381d39(0x2d5)]();},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x2ec)]=Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x297)],Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x297)]=function(){const _0x4f4b5e=_0x3cdf07;VisuMZ[_0x4f4b5e(0x281)]['Game_Event_setupPageSettings'][_0x4f4b5e(0x1fc)](this),this[_0x4f4b5e(0x282)]();},Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x282)]=function(){const _0x2c27d1=_0x3cdf07;if(!this[_0x2c27d1(0x336)]())return;this['initUniqueTileEffectsEffects'](),this[_0x2c27d1(0x1f8)](),this[_0x2c27d1(0x1e2)]();},Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x1f8)]=function(){const _0x237e32=_0x3cdf07,_0x3530db=this[_0x237e32(0x336)]()[_0x237e32(0x1a8)];if(_0x3530db==='')return;this['checkUniqueTileEffectsStringTags'](_0x3530db);},Game_Event['prototype']['setupUniqueTileEffectsCommentTags']=function(){const _0x50db4a=_0x3cdf07;if(!this[_0x50db4a(0x2f4)]())return;const _0x10a2cf=this[_0x50db4a(0x2e2)]();let _0xf96440='';for(const _0x246e8a of _0x10a2cf){if([0x6c,0x198][_0x50db4a(0x251)](_0x246e8a['code'])){if(_0xf96440!=='')_0xf96440+='\x0a';_0xf96440+=_0x246e8a[_0x50db4a(0x2ee)][0x0];}}this['checkUniqueTileEffectsStringTags'](_0xf96440);},Game_Event[_0x3cdf07(0x1bc)]['initUniqueTileEffectsEffects']=function(){const _0x2f91d0=_0x3cdf07;this[_0x2f91d0(0x2f3)]={},this[_0x2f91d0(0x359)]={};const _0x3c4fe0=VisuMZ[_0x2f91d0(0x281)][_0x2f91d0(0x1b6)]();for(const _0x431bd1 of _0x3c4fe0){this[_0x2f91d0(0x2f3)][_0x431bd1]=Game_Event[_0x2f91d0(0x339)][_0x431bd1]||![],this[_0x2f91d0(0x359)][_0x431bd1]=Game_Event[_0x2f91d0(0x1ad)][_0x431bd1]||![];}this['_lavaBurnMax']=Game_CharacterBase[_0x2f91d0(0x28d)]||0x1;},Game_Event[_0x3cdf07(0x1bc)]['checkUniqueTileEffectsStringTags']=function(_0x3afd11){const _0x2512c7=_0x3cdf07,_0x8b66d3=VisuMZ[_0x2512c7(0x281)][_0x2512c7(0x20b)],_0x45b4d0=VisuMZ[_0x2512c7(0x281)][_0x2512c7(0x1b6)]();for(const _0x4a6365 of _0x45b4d0){if(!_0x8b66d3[_0x4a6365])continue;_0x8b66d3[_0x4a6365][_0x2512c7(0x21c)]&&_0x3afd11[_0x2512c7(0x2b1)](_0x8b66d3[_0x4a6365][_0x2512c7(0x21c)])&&(this[_0x2512c7(0x2f3)][_0x4a6365]=!![]),_0x8b66d3[_0x4a6365][_0x2512c7(0x26b)]&&_0x3afd11[_0x2512c7(0x2b1)](_0x8b66d3[_0x4a6365][_0x2512c7(0x26b)])&&(this[_0x2512c7(0x2f3)][_0x4a6365]=![]),_0x8b66d3[_0x4a6365][_0x2512c7(0x1bb)]&&_0x3afd11[_0x2512c7(0x2b1)](_0x8b66d3[_0x4a6365][_0x2512c7(0x1bb)])&&(this['_uniqueTileAvoid'][_0x4a6365]=!![]),_0x8b66d3[_0x4a6365][_0x2512c7(0x203)]&&_0x3afd11['match'](_0x8b66d3[_0x4a6365][_0x2512c7(0x203)])&&(this[_0x2512c7(0x359)][_0x4a6365]=![]);}_0x3afd11[_0x2512c7(0x2b1)](_0x8b66d3[_0x2512c7(0x2b6)][_0x2512c7(0x2a6)])&&(this[_0x2512c7(0x1e3)]=Math['max'](Number(RegExp['$1']),0x1));},VisuMZ[_0x3cdf07(0x281)]['Game_Event_updateSelfMovement']=Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x357)],Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x357)]=function(){const _0x532ef9=_0x3cdf07;if(this['_isPitfalling'])return;if(this['_isDrowning'])return;this['_uniqueTileSelfMove']=!![],VisuMZ[_0x532ef9(0x281)]['Game_Event_updateSelfMovement']['call'](this),this['_uniqueTileSelfMove']=undefined;},Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x235)]=function(_0x4793a9){const _0x5149e5=_0x3cdf07;if(this[_0x5149e5(0x1fe)]){this['_uniqueTileAvoid']===undefined&&this[_0x5149e5(0x282)]();if(this[_0x5149e5(0x344)](_0x4793a9))return![];}return Game_Character['prototype'][_0x5149e5(0x235)][_0x5149e5(0x1fc)](this,_0x4793a9);},Game_Event['prototype']['isUniqueTileAvoided']=function(_0x2cc923){const _0x5b6e2d=_0x3cdf07;return this['_uniqueTileAvoid']===undefined&&this['setupUniqueTileEffectsEffects'](),this[_0x5b6e2d(0x359)][_0x2cc923];},Game_Party[_0x3cdf07(0x223)]={'general':{'immuneReserveParty':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x293)]},'pitfall':{'deathAllow':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x316)][_0x3cdf07(0x226)]??!![],'dmgRate':VisuMZ[_0x3cdf07(0x281)]['Settings']['Pitfall']['DmgRate']??0.2,'dmgFlat':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x316)][_0x3cdf07(0x309)]??0x14},'swimming':{'deathAllow':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x318)][_0x3cdf07(0x226)]??!![],'dmgRate':VisuMZ['UniqueTileEffects']['Settings'][_0x3cdf07(0x318)][_0x3cdf07(0x1d6)]??0.1,'dmgFlat':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x318)][_0x3cdf07(0x309)]??0xf},'quicksand':{'deathAllow':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)]['DmgDeathAllow']??!![],'dmgRate':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x1d6)]??0.3,'dmgFlat':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x1c8)][_0x3cdf07(0x309)]??0x28},'lava':{'deathAllow':VisuMZ['UniqueTileEffects']['Settings'][_0x3cdf07(0x31f)]['DmgDeathAllow']??!![],'dmgRate':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x31f)]['DmgRate']??0.05,'dmgFlat':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)][_0x3cdf07(0x31f)][_0x3cdf07(0x309)]??0x32},'shock':{'deathAllow':VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x322)][_0x3cdf07(0x226)]??!![],'dmgRate':VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x299)]['Shock']['DmgRate']??0.25,'dmgFlat':VisuMZ['UniqueTileEffects'][_0x3cdf07(0x299)][_0x3cdf07(0x322)]['DmgFlat']??0x3c}},Game_Party['prototype']['processUniqueTileDamage']=function(){const _0x16a98b=_0x3cdf07,_0xd8d73d=$gamePlayer[_0x16a98b(0x2c1)]();SoundManager[_0x16a98b(0x27f)](_0xd8d73d,_0x16a98b(0x2d4),$gamePlayer);for(const _0x4b87eb of this[_0x16a98b(0x35a)]()){if(!_0x4b87eb)continue;_0x4b87eb[_0x16a98b(0x22a)](_0xd8d73d);}},Game_Actor['prototype']['processUniqueTileDamage']=function(_0x3acaf0){const _0x2fbda3=_0x3cdf07,_0x166510=Game_Party['UNIQUE_TILE_DAMAGE'][_0x3acaf0];if(!_0x166510)return;let _0xe9cee=0x0;_0xe9cee+=_0x166510[_0x2fbda3(0x22c)]*this['mhp'],_0xe9cee+=_0x166510[_0x2fbda3(0x35f)],_0xe9cee=Math[_0x2fbda3(0x2f9)](_0xe9cee);!_0x166510[_0x2fbda3(0x352)]&&(_0xe9cee=Math[_0x2fbda3(0x21d)](_0xe9cee,this['hp']-0x1));_0xe9cee>0x0&&($gameTemp[_0x2fbda3(0x25b)]=!![],this['performMapDamage'](),$gameTemp[_0x2fbda3(0x25b)]=![]);this['gainHp'](-_0xe9cee);if(this[_0x2fbda3(0x34c)]())this['performCollapse']();},Sprite_Character['PITFALL_DURATION']=VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x316)][_0x3cdf07(0x2cb)]??0x14,Sprite_Character[_0x3cdf07(0x259)]=VisuMZ[_0x3cdf07(0x281)]['Settings'][_0x3cdf07(0x318)][_0x3cdf07(0x2cb)]??0x1e,VisuMZ['UniqueTileEffects']['Sprite_Character_initMembers']=Sprite_Character['prototype']['initMembers'],Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x30a)]=function(){const _0x555a16=_0x3cdf07;VisuMZ[_0x555a16(0x281)][_0x555a16(0x2b8)]['call'](this),this[_0x555a16(0x1be)]();},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x1be)]=function(){const _0x7e1363=_0x3cdf07;this[_0x7e1363(0x2f5)]=0x0,this['_drowningDuration']=0x0,this['_uniqueTileFrameMinusY']=0x0;},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x26c)]=function(){const _0x34ee2d=_0x3cdf07;this[_0x34ee2d(0x2e4)]=0x0,this[_0x34ee2d(0x1dc)]();},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x213)]=Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x1dc)],Sprite_Character['prototype'][_0x3cdf07(0x1dc)]=function(){const _0xeef07b=_0x3cdf07;this[_0xeef07b(0x2ae)](),VisuMZ[_0xeef07b(0x281)][_0xeef07b(0x213)][_0xeef07b(0x1fc)](this),this[_0xeef07b(0x1f6)]();},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x315)]=Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x366)],Sprite_Character['prototype'][_0x3cdf07(0x366)]=function(){const _0x21868d=_0x3cdf07;this['calcUniqueTileCharaFrame'](),this[_0x21868d(0x2e4)]>0x0?this['updateCharacterSwimmingFrame']():(VisuMZ[_0x21868d(0x281)]['Sprite_Character_updateCharacterFrame'][_0x21868d(0x1fc)](this),this[_0x21868d(0x2fb)]());},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x288)]=function(){const _0x28451c=_0x3cdf07,_0x370632=this['getUniqueTileCharaFrameTarget'](),_0x571cd4=0x1;if(this[_0x28451c(0x2e4)]>_0x370632)this[_0x28451c(0x2e4)]=Math['max'](this[_0x28451c(0x2e4)]-_0x571cd4*0x4,_0x370632);else this[_0x28451c(0x2e4)]<_0x370632?this[_0x28451c(0x2e4)]=Math[_0x28451c(0x21d)](this[_0x28451c(0x2e4)]+_0x571cd4,_0x370632):this[_0x28451c(0x2e4)]=_0x370632;},Sprite_Character['prototype'][_0x3cdf07(0x207)]=function(){const _0x168215=_0x3cdf07;if(!this[_0x168215(0x330)])return 0x0;if(this[_0x168215(0x330)]['isSwimming']())return this[_0x168215(0x313)]();else{if(this[_0x168215(0x330)][_0x168215(0x2f1)]())return this[_0x168215(0x1ee)]();}return 0x0;},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x217)]=Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x22f)],Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x22f)]=function(){const _0x116e8a=_0x3cdf07;if(this[_0x116e8a(0x2f5)]>0x0)return;VisuMZ[_0x116e8a(0x281)]['Sprite_Character_updateScaleBase'][_0x116e8a(0x1fc)](this);},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x2ae)]=function(){const _0x43990f=_0x3cdf07;if(this[_0x43990f(0x2f5)]<=0x0)return;const _0x5eed77=this[_0x43990f(0x2f5)];this[_0x43990f(0x335)]['x']=this[_0x43990f(0x335)]['x']*(_0x5eed77-0x1)/_0x5eed77,this['scale']['y']=this[_0x43990f(0x335)]['y']*(_0x5eed77-0x1)/_0x5eed77,this[_0x43990f(0x2f5)]--;if(this[_0x43990f(0x2f5)]<=0x0){if(this[_0x43990f(0x330)])this['_character'][_0x43990f(0x33e)]();this[_0x43990f(0x214)]();}},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x20f)]=function(){const _0x1a812e=_0x3cdf07;if($gameParty[_0x1a812e(0x25e)]())return;this[_0x1a812e(0x2f5)]=Sprite_Character[_0x1a812e(0x298)],this[_0x1a812e(0x231)]={'scaleX':this[_0x1a812e(0x335)]['x'],'scaleY':this[_0x1a812e(0x335)]['y'],'shadowScaleX':this[_0x1a812e(0x1c3)]?this[_0x1a812e(0x1c3)][_0x1a812e(0x335)]['x']:0x0,'shadowScaleY':this['_shadowSprite']?this[_0x1a812e(0x1c3)]['scale']['y']:0x0};},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x214)]=function(){const _0x3463ba=_0x3cdf07;this[_0x3463ba(0x2f5)]=0x0;},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x268)]=function(){const _0x523de6=_0x3cdf07;this[_0x523de6(0x2f5)]=0x0;if(!this[_0x523de6(0x231)])return;this[_0x523de6(0x335)]['x']=this['_pitfallData'][_0x523de6(0x208)],this[_0x523de6(0x335)]['y']=this[_0x523de6(0x231)]['scaleY'],this[_0x523de6(0x1c3)]&&(this[_0x523de6(0x1c3)][_0x523de6(0x335)]['x']=this[_0x523de6(0x231)]['shadowScaleX'],this[_0x523de6(0x1c3)][_0x523de6(0x335)]['y']=this['_pitfallData'][_0x523de6(0x21a)]),this['_pitfallData']=undefined;},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x2fb)]=function(){const _0x5d0f97=_0x3cdf07;if(this[_0x5d0f97(0x265)]!==undefined){const _0x4845bc=Math[_0x5d0f97(0x2a7)](this[_0x5d0f97(0x2fd)][_0x5d0f97(0x2bf)]*this[_0x5d0f97(0x265)]);this[_0x5d0f97(0x2fd)][_0x5d0f97(0x2bf)]=_0x4845bc,this[_0x5d0f97(0x29e)]();}},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x1f6)]=function(){const _0xd407e0=_0x3cdf07;if(this[_0xd407e0(0x367)]<=0x0)return;const _0x55da61=this[_0xd407e0(0x367)];this['_drowningHeightRate']=this[_0xd407e0(0x265)]*(_0x55da61-0x1)/_0x55da61,this['updateCharacterFrame'](),this[_0xd407e0(0x367)]--;if(this[_0xd407e0(0x367)]<=0x0){if(this[_0xd407e0(0x330)])this['_character'][_0xd407e0(0x29a)]();this[_0xd407e0(0x224)]();}},Sprite_Character['prototype']['startDrowningEffect']=function(){const _0x59fb88=_0x3cdf07;if($gameParty[_0x59fb88(0x25e)]())return;this[_0x59fb88(0x367)]=Sprite_Character['DROWNING_DURATION'],this['_drowningHeightRate']=0x1;},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x224)]=function(){const _0x2ffae8=_0x3cdf07;this[_0x2ffae8(0x367)]=0x0;},Sprite_Character[_0x3cdf07(0x1bc)][_0x3cdf07(0x2bd)]=function(){const _0x235472=_0x3cdf07;this['_drowningDuration']=0x0,this[_0x235472(0x265)]=undefined,this[_0x235472(0x366)]();},Sprite_Character['prototype']['getUniqueTileCharaSwimFrameTarget']=function(){const _0x585f2f=_0x3cdf07;return this[_0x585f2f(0x330)][_0x585f2f(0x1e1)]();},Sprite_Character[_0x3cdf07(0x1bc)]['updateCharacterSwimmingFrame']=function(){const _0x532a91=_0x3cdf07,_0x1943cb=this[_0x532a91(0x2a9)](),_0x1936ac=this[_0x532a91(0x270)](),_0x8b52c0=(this['characterBlockX']()+this['characterPatternX']())*_0x1943cb,_0x96a9f1=(this['characterBlockY']()+this[_0x532a91(0x25d)]())*_0x1936ac;this[_0x532a91(0x34f)](_0x8b52c0,_0x96a9f1,_0x1943cb,_0x1936ac-this[_0x532a91(0x2e4)]);if(this[_0x532a91(0x29c)])this[_0x532a91(0x29c)]['setFrame'](0x0,0x0,0x0,0x0);if(this[_0x532a91(0x28c)])this[_0x532a91(0x28c)][_0x532a91(0x34f)](0x0,0x0,0x0,0x0);},Sprite_Character['prototype'][_0x3cdf07(0x1ee)]=function(){const _0x28a217=_0x3cdf07;return Math['floor'](this['_character'][_0x28a217(0x1de)]()*this[_0x28a217(0x270)]());};Imported[_0x3cdf07(0x230)]&&(Game_Player[_0x3cdf07(0x1bc)]['canUniqueTileEndSmartAction']=function(){const _0x347f37=_0x3cdf07;if(this[_0x347f37(0x1cc)]()){if(this[_0x347f37(0x2c1)]()===_0x347f37(0x257))return $gameMap[_0x347f37(0x2df)](this['x'],this['y']);if(this[_0x347f37(0x2c1)]()===_0x347f37(0x33d))return $gameMap[_0x347f37(0x2df)](this['x'],this['y']);return![];}return!![];},VisuMZ[_0x3cdf07(0x281)]['Game_Player_canSmartRush']=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x2c2)],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x2c2)]=function(){if(!this['canUniqueTileEndSmartAction']())return![];return VisuMZ['UniqueTileEffects']['Game_Player_canSmartRush']['call'](this);},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x2c0)]=Game_Player['prototype']['canSmartBlink'],Game_Player[_0x3cdf07(0x1bc)]['canSmartBlink']=function(_0x46ab8a){const _0x4cf799=_0x3cdf07;if(!this['canUniqueTileEndSmartAction']())return![];return VisuMZ[_0x4cf799(0x281)][_0x4cf799(0x2c0)]['call'](this,_0x46ab8a);},VisuMZ[_0x3cdf07(0x281)]['Game_Player_canSmartJump']=Game_Player[_0x3cdf07(0x1bc)]['canSmartJump'],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x2b0)]=function(){const _0x24366f=_0x3cdf07;if(!this[_0x24366f(0x332)]())return![];return VisuMZ['UniqueTileEffects'][_0x24366f(0x2f8)][_0x24366f(0x1fc)](this);},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x338)]=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1d1)],Game_Player['prototype'][_0x3cdf07(0x1d1)]=function(){const _0xadb327=_0x3cdf07;if(!this[_0xadb327(0x332)]()){this[_0xadb327(0x2f0)]();return;}return VisuMZ['UniqueTileEffects'][_0xadb327(0x338)][_0xadb327(0x1fc)](this);},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1a2)]=function(_0x38674c,_0x5a78c8){return![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x252)]=Game_Player['prototype'][_0x3cdf07(0x347)],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x347)]=function(_0x36170f,_0x657af2){const _0x2d3dd7=_0x3cdf07;if(this[_0x2d3dd7(0x1a2)](_0x36170f,_0x657af2))return!![];return VisuMZ[_0x2d3dd7(0x281)][_0x2d3dd7(0x252)]['call'](this,_0x36170f,_0x657af2);},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1e6)]=function(_0x202b70,_0x3b7be2){const _0x215939=_0x3cdf07;if($gameMap[_0x215939(0x232)](_0x202b70,_0x3b7be2,_0x215939(0x257)))return $gamePlayer[_0x215939(0x235)](_0x215939(0x257));if($gameMap[_0x215939(0x232)](_0x202b70,_0x3b7be2,_0x215939(0x33d)))return $gamePlayer[_0x215939(0x235)]('swimming');return![];},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x320)]=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x323)],Game_Player[_0x3cdf07(0x1bc)]['isTileSmartJumpCompatible']=function(_0x125482,_0x5815c0){const _0x2cfb38=_0x3cdf07;if(this['isMovementEffectsUniqueTilesSmartJumpCompatible'](_0x125482,_0x5815c0))return!![];return VisuMZ[_0x2cfb38(0x281)][_0x2cfb38(0x320)]['call'](this,_0x125482,_0x5815c0);},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x307)]=function(_0x399f4c,_0x5a5ac8){return![];},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x1ed)]=Game_Player[_0x3cdf07(0x1bc)]['isTileSmartBlinkBreakable'],Game_Player[_0x3cdf07(0x1bc)]['isTileSmartBlinkBreakable']=function(_0x4c5e55,_0x237532){const _0x323781=_0x3cdf07;if(this[_0x323781(0x307)](_0x4c5e55,_0x237532))return!![];return VisuMZ['UniqueTileEffects'][_0x323781(0x1ed)][_0x323781(0x1fc)](this,_0x4c5e55,_0x237532);},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1bf)]=function(_0x269dd2,_0x96a7af){return![];},VisuMZ['UniqueTileEffects'][_0x3cdf07(0x351)]=Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x324)],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x324)]=function(_0x36ac3e,_0x569282){const _0x3fca74=_0x3cdf07;if(this['isMovementEffectsUniqueTilesSmartBlinkCompatible'](_0x36ac3e,_0x569282))return!![];return VisuMZ[_0x3fca74(0x281)][_0x3fca74(0x351)][_0x3fca74(0x1fc)](this,_0x36ac3e,_0x569282);});;function _0x10c5(){const _0x56bfad=['updatePitfallEffect','setDirection','canSmartJump','match','Game_Player_pullTargetEvent','visibleFollowers','_priorityType','forceMove','lava','getUniqueTileRegions','Sprite_Character_initMembers','ARRAYSTR','getUniqueTileData','isUniqueTileWithoutBelow','isMapPassable','restorePreDrowning','_tempSlipperyTileStop','height','Game_Player_canSmartBlink','getUniqueTileType','canSmartRush','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','checkBlockedCliffTiles','onPitfallDead','characterName','isOnBush','split','303840ixAdCW','bounce6','EffectDuration','isSwimming','NUM','frameCount','bounce0','isDashing','bounce4','_uniqueTileData','canUpdateUniqueTileLava','damage','initUniqueTileEffectsEffects','damagePan','processShockEffect','_quicksandSteps','tileset','roundYWithDirection','turnOffPitfalling','processPitfallEffect','equips','exit','hasBelowPriorityEventsXy','_shockEffectDelay','isJumping','list','Sand','_uniqueTileFrameMinusY','name','Game_CharacterBase_isStopping','EVAL','version','bounce1','isMoving','AnimationMirror','Game_Event_setupPageSettings','canBePulled','parameters','gotoLastSafestCoordinate','endSmartRush','isQuicksandSinking','isStopping','_uniqueTileAffected','page','_pitfallDuration','bounce9','immuneReserveParty','Game_Player_canSmartJump','ceil','bounce5','updateCharacterFrameDrowning','turnOffDrowning','_frame','moveByInput','Skill1','Bounce6Regions','SWIMMING_DEPTH','FUNC','getUniqueTileTerrainTags','MoveSpeed','Earth4','_erased','isMovementEffectsUniqueTilesSmartBlinkBreakable','Game_Player_increaseSteps','DmgFlat','initMembers','Bounce4Regions','JSON','isVisible','makeUniqueTileFootstepSounds','processSlipperyEffect','Slippery','length','effectPan','getUniqueTileCharaSwimFrameTarget','battleMembers','Sprite_Character_updateCharacterFrame','Pitfall','STR','Swimming','tilesetFlags','map','pullTargetEvent','behindUniqueTileMeetsPullTargetEventConditions','canBePushed','DownRegions','Lava','Game_Player_isTileSmartJumpCompatible','Game_CharacterBase_moveStraight','Shock','isTileSmartJumpCompatible','isTileSmartBlinkCompatible','_uniqueTileMoveSpeed','parse','bounce8','updateUniqueTileEffects','DefaultAvoid','SHOCK_DELAY','footstepsPitch','bounce2','and\x20add\x20it\x20onto\x20this\x20one.','footstepsVolume','Thunder3','_character','indexOf','canUniqueTileEndSmartAction','isSwimmingTile','isInVehicle','scale','event','STRUCT','Game_Player_moveBySmartRush','UNIQUE_TILE_AFFECTED_DEFAULT','_uniqueTileCmdImmune','MovementEffects','_uniqueTileTransfer','swimming','onPitfallFinish','checkEventTriggerHere','processUniqueTileTransfer','setupEvents','processUniqueTileEffect','UpRegions','isUniqueTileAvoided','footstepsEnabled','forceChangeEquip','isTileSmartJumpBreakable','isUniqueTile','Pattern','return\x200','Game_CharacterBase_moveDiagonally','isDead','Game_Event_clearPageSettings','mapTransfer','setFrame','tileId','Game_Player_isTileSmartBlinkCompatible','deathAllow','Game_Party_gainItem','5572736qXChBH','Water3','playSe','updateSelfMovement','_vehicleGettingOn','_uniqueTileAvoid','aliveMembers','allMembers','reverseDir','PLAYER_CAN_DROWN','LeftRegions','dmgFlat','setImmuneToUniqueTileType','push','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Jump2','pan','PlayerSetAntiForceMove','updateCharacterFrame','_drowningDuration','description','LAVA_DELAY','Game_CharacterBase_isMapPassable','isMovementEffectsUniqueTilesSmartJumpBreakable','registerCommand','checkPassageNoEvents','canUpdateUniqueTileEffects','isSwimmingTileWithNoBridge','_uniqueTilePattern','note','PlayerSetAntiLava','isDamageFloor','effectPitch','pattern','UNIQUE_TILE_AVOID_DEFAULT','onQuicksandSink','parseUniqueTileNotetags','clamp','jump','meetsUniqueTileGatherConditions','refresh','mute','clearPageSettings','TileTypes','hasUniqueTileEffects','showIncompleteTilesetError','footstep','QUICKSAND_MAX_STEPS','avoid','prototype','_uniqueTileXyType','initMembersUniqueTileEffects','isMovementEffectsUniqueTilesSmartBlinkCompatible','Game_Player_moveByInput','bounce','Game_CharacterBase_isOnBush','_shadowSprite','right','Game_Actor_forceChangeEquip','playerCanDrown','ARRAYJSON','Quicksand','shock','DefaultAffected','_data','isAffectedByCurrentUniqueTile','constructor','_followers','processForceMoveEffect','footstepsName','moveBySmartRush','some','_jumpCount','effectName','_uniqueTileMoveDirection','DmgRate','processLavaEffect','damageName','Game_Player_isDashing','clear','refreshUniqueTileImmunityPartyCheck','update','mapId','getQuicksandSinkRate','626493mDqprG','Game_Event_canBePulled','swimmingDepth','setupUniqueTileEffectsCommentTags','_lavaBurnMax','checkPassageNoEventsErrorValid','Bounce3Regions','isMovementEffectsUniqueTilesSmartJumpCompatible','PlayerSetAntiSlippery','ForceMove','Game_CharacterBase_increaseSteps','_isShocked','Game_CharacterBase_pattern','hasPushConditionsUniqueTiles','Game_Player_isTileSmartBlinkBreakable','getUniqueTileCharaQuicksandFrameTarget','ConvertParams','realMoveSpeed','terrainTags','Game_CharacterBase_jump','ShockTimer','Bounce2Regions','damagePitch','updateDrowningEffect','mirror','setupUniqueTileEffectsNotetags','reserveTransfer','resetPattern','setUniqueTileAffected','call','bounce3','_uniqueTileSelfMove','Setting','isSceneMap','_scene','hasPullConditionsUniqueTiles','ignore','DefaultRegions','moveDiagonally','getLastUniqueTileCoordinate','getUniqueTileCharaFrameTarget','scaleX','anyFollowersSwimming','Game_Event_canBePushed','RegExp','canMakeFootstepSounds','changeEquip','isImmuneToUniqueTileType','startPitfallEffect','effect','startDrowningEffect','EnableErrorMsg','Sprite_Character_update','finishPitfallEffect','isRawPassableByAnyDirection','148acSHrL','Sprite_Character_updateScaleBase','Game_CharacterBase_update','down','shadowScaleY','_lastSafestCoordinate','affected','min','ApplyFootstepSfxModifiers','_uniqueTilePartyImmune','left','ARRAYEVAL','Game_CharacterBase_initMembers','UNIQUE_TILE_DAMAGE','finishDrowningEffect','max','DmgDeathAllow','format','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','isPassable','processUniqueTileDamage','LavaBurnTimer','dmgRate','slippery','gainItem','updateScaleBase','VisuMZ_2_MovementEffects','_pitfallData','checkUniqueTileType','isPlaytest','anyFollowersNotSwimming','isUniqueTileAffected','initUniqueTileData','quicksand','increaseStepsUniqueTileEffects','updateJump','Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages','ARRAYFUNC','gatherFollowers','isMovementSucceeded','SHOCK_ANIMATION','footstepsPan','StepsSandSink','bounceMoveDirection','UNIQUE_TILE_REGIONS','processBounceEffect','VisuMZ_0_CoreEngine','effectVolume','Water1','1516605wkwQcL','isShipPassable','layeredTiles','increaseSteps','_isPitfalling','moveStraight','Fall','AnimationID','updateUniqueTileData','bounce7','includes','Game_Player_isTileSmartJumpBreakable','enabled','trim','4jVbuQg','_nextScene','pitfall','isDebugThrough','DROWNING_DURATION','Game_CharacterBase_canMakeFootstepSounds','_executeFloorDamage','Bounce7Regions','characterPatternY','isAllDead','1580286XTdoHK','toUpperCase','locate','forceMoveDirection','registerLastUniqueTileCoordinate','isTransferring','_drowningHeightRate','findTargetSprite','Game_CharacterBase_updateJump','restorePrePitfallScale','_isDrowning','terrainTag','immune','clearUniqueTileSpriteEffects','UNIQUE_TILE_SFX','_lavaBurnTimes','direction','patternHeight','setupUniqueTileData','_lastUniqueTileCoordinate','getUniqueTileXyType','roundXWithDirection','processDrowningEffect','updateQuicksand','Game_Map_setupEvents','clearUniqueTilePartyImmunity','Game_CharacterBase_realMoveSpeed','PlayerSetAntiQuicksand','Game_Actor_changeEquip','Game_Player_refresh','_flagErrorShown','canMakeUniqueTileFootstepSounds','playUniqueTileSfx','LAVA_ANIMATION','UniqueTileEffects','setupUniqueTileEffectsEffects','volume','erase','_spriteset','regions','onDrowningDead','calcUniqueTileCharaFrame','isEventTest','Game_Player_locate','17019spFyHZ','_lowerBody','LAVA_EVENT_MAX','doesCurrentTileHaveUniqueFootstepSfx','AnimationMute','regionId','getBounceTileDistance','Bounce','NotetagPartyWide','RightRegions','registerLastSafestCoordinate','damageVolume','setupPageSettings','PITFALL_DURATION','Settings','onDrowningFinish','none','_upperBody','_bypassPassableAnyDirection','_refresh','UNIQUE_TILE_PATTERN','clone','58997oXZRUw','Game_Map_showIncompleteTilesetError','items','isOnUniqueTile','pitch','burnMax','floor','canSwimInWater','patternWidth','UNIQUE_TILE_MOVE_SPEED','filter','requestFauxAnimation','ARRAYSTRUCT'];_0x10c5=function(){return _0x56bfad;};return _0x10c5();}Imported['VisuMZ_3_EventChainReact']&&(Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x1ec)]=function(_0x5dc7a6){return!![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x20a)]=Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x31d)],Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x31d)]=function(){const _0x1d9471=_0x3cdf07;if(!$gamePlayer['hasPushConditionsUniqueTiles'](this))return![];return VisuMZ[_0x1d9471(0x281)][_0x1d9471(0x20a)][_0x1d9471(0x1fc)](this);},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x202)]=function(_0x1c6af5){return!![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x1e0)]=Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x2ed)],Game_Event[_0x3cdf07(0x1bc)][_0x3cdf07(0x2ed)]=function(){const _0x3745b7=_0x3cdf07;if(!$gamePlayer[_0x3745b7(0x202)](this))return![];return VisuMZ[_0x3745b7(0x281)]['Game_Event_canBePulled']['call'](this);},Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x31c)]=function(_0x3d01df,_0x3771d6){const _0x2769fd=_0x3cdf07;if($gameMap[_0x2769fd(0x348)](_0x3d01df,_0x3771d6)){const _0x37ed82=$gameMap[_0x2769fd(0x273)](_0x3d01df,_0x3771d6);if(_0x37ed82===_0x2769fd(0x257)&&$gameMap[_0x2769fd(0x2df)](_0x3d01df,_0x3771d6))return!![];if($gameMap['isSwimmingTileWithBridge'](this['x'],this['y']))return!![];return![];}return!![];},VisuMZ[_0x3cdf07(0x281)][_0x3cdf07(0x2b2)]=Game_Player[_0x3cdf07(0x1bc)]['pullTargetEvent'],Game_Player[_0x3cdf07(0x1bc)][_0x3cdf07(0x31b)]=function(_0x4c6446,_0x14c3b6,_0x55398b){const _0x1dd005=_0x3cdf07,_0x426d07=0xa-this['direction']();if(_0x426d07%0x2!==0x0)return;const _0x48e953=$gameMap[_0x1dd005(0x274)](this['x'],_0x426d07),_0xed738b=$gameMap['roundYWithDirection'](this['y'],_0x426d07);if(!this['behindUniqueTileMeetsPullTargetEventConditions'](_0x48e953,_0xed738b))return;VisuMZ[_0x1dd005(0x281)][_0x1dd005(0x2b2)][_0x1dd005(0x1fc)](this,_0x4c6446,_0x14c3b6,_0x55398b);});;