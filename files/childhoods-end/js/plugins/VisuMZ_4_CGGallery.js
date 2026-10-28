//=============================================================================
// VisuStella MZ - CG Gallery
// VisuMZ_4_CGGallery.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_CGGallery = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CGGallery = VisuMZ.CGGallery || {};
VisuMZ.CGGallery.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [CGGallery]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/CG_Gallery_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Does your game have a lot of pretty art? Especially pretty art that your
 * players would love to view again on their own? This plugin provides a new
 * scene called a CG Gallery for players to view art that they have encountered
 * on their game playthroughs. The CG Gallery allows you to separate art into
 * various categories where the player can view them individually, zooming in
 * and out and moving all about for that perfect angle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Automatically unlock art listings for the CG Gallery through Show Picture
 *   event commands or unlock them manually through Plugin Commands.
 * * The Plugin Parameters allow you the ability to add categories, listings,
 *   and adjust various aspects of the CG Gallery.
 * * When art listings are unlocked, they will be visible across all saves and
 *   can be accessible through the title scene even.
 * * Art listings can be paired with text descriptions to explain what the art
 *   piece is all about and/or even provide credit to the artist that drew it.
 * * Art listings can have variants so that you can bundle up similar art
 *   pieces together without cluttering the entire CG Gallery.
 * * When viewing art listings, extra features are added to allow players to
 *   zoom in, zoom out, toggle the borders, move the picture about, and change
 *   between art variations.
 * * Completion Rates and Variant Counts are displayed in-game to let the
 *   player know about the progress made in completing the CG Gallery.
 * * Some art listings can be automatically unlocked by default as a form of
 *   bonus art, similar to what you see in many commercial Visual Novels.
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
 * CG Gallery Storage
 * 
 * The CG Gallery unlock progress is stored in the configuration file. This is
 * primarily done so that the progress is readily accessible across all saves
 * and can be updated across all saves.
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
 * === CG Plugin Commands ===
 * 
 * ---
 *
 * CG: Unlock Image(s)
 * - Unlocks specific image(s) for the CG Gallery.
 *
 *   Filename(s):
 *   - List of filenames for CG's that will become unlocked.
 *
 *   Argument:
 *   - Description
 *
 *   Argument:
 *   - Description
 *
 *   Argument:
 *   - Description
 *
 *   Argument:
 *   - Description
 *
 * ---
 *
 * CG: Unlock All Images (Debug)
 * - Unlocks all image(s) for the CG Gallery.
 * - Only for playtesting. Resets upon game closing.
 *
 * ---
 *
 * CG: Unlock All Images (Permanent)
 * - Unlocks all image(s) for the CG Gallery.
 * - This is a permanent unlock.
 *
 * ---
 * 
 * CG: Reset All Unlocks (Permanent)
 * - Reset all unlocks for the CG Gallery.
 * - This is a permanent reset. Use SPARRINGLY!
 * 
 * ---
 * 
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open CG Gallery
 * - Opens CG Gallery.
 * - CANNOT be used inside of battle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable CG Gallery in Menu?
 * - Enables/disables CG Gallery menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables CG Gallery menu inside the main menu.
 *
 * ---
 *
 * System: Show CG Gallery in Menu?
 * - Shows/hides CG Gallery menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides CG Gallery menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Categories
 * ============================================================================
 *
 * List of categories that are used for this plugin. The order these categories
 * appear in the settings will be the order they're displayed in the gallery.
 *
 * ---
 *
 * Settings
 * 
 *   ID Key:
 *   - This category's identification key.
 *   - Categories require unique keys for the plugin to differentiate them.
 * 
 *   Text:
 *   - This category's command text.
 * 
 *   Icon:
 *   - Icon used for this category.
 *   - Use 0 for no icon.
 * 
 *   Help Description:
 *   - A description of the CG Gallery listing.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Listing Settings
 * ============================================================================
 *
 * A listing of all the pictures found in the CG Gallery. The order these
 * images appear in the settings will be the order they're displayed in the
 * CG Gallery.
 *
 * ---
 *
 * Settings
 * 
 *   Filename:
 *   - Filename used for the CG Gallery listing.
 *   - This will be used as the CG Gallery thumbnail, too.
 * 
 *     Variations:
 *     - Variations of the CG Gallery listing.
 * 
 *   Category:
 *   - The category this image is listed under.
 *   - If unlisted, the image will be listed under "Unlisted".
 * 
 *   Help Description:
 *   - A description of the CG Gallery listing.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Unlocks Settings
 * ============================================================================
 *
 * List of filenames for CG's that are already unlocked and viewable.
 *
 * ---
 * 
 * Settings
 * 
 *   Filename: 
 *   - Filename used for the default unlocked art listing.
 *   - Make sure the art listing is found inside Image Listings.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: System Settings
 * ============================================================================
 *
 * System settings for CG Gallery.
 *
 * ---
 *
 * Auto-Unlocks
 * 
 *   Show Picture?:
 *   - Auto-unlock listings for the CG Gallery when using "Show Picture"
 *     event commands?
 * 
 *   Variations?:
 *   - Auto-unlock variations for listings for the CG Gallery?
 * 
 * ---
 * 
 * Scene_CG_Gallery
 * 
 *   Move Distance:
 *   - How many pixels should pictures move per frame?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Main Menu settings for CG Gallery.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'CG Gallery' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'CG Gallery' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'CG Gallery' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_CG_Gallery.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Sound settings for the CG Gallery.
 *
 * ---
 *
 * Select Image
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Change Variation
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Special Categories
 * 
 *   "All" Command:
 *   "Unlisted" Command:
 *   - Text used for the special Categories.
 * 
 * ---
 * 
 * Help Descriptions
 * 
 *   "All" Category:
 *   "Unlisted" Category:
 *   - A description used for the special Categories.
 *   - Text codes allowed.
 * 
 *   Not Unlocked Image:
 *   - A description used for yet to be unlocked images.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Gallery Window > Variations
 * 
 *   Complete Text:
 *   - Text displayed for listings with complete unlocks.
 *   - Leave empty to not use.
 * 
 *   Text Format:
 *   - Text format for listings with variations left.
 *   - %1 - Percent, %2 - Unlocked, %3 - Total
 *
 * ---
 * 
 * Gallery Window > Completion
 * 
 *   Vocabulary:
 *   - Main vocabulary used for this text.
 * 
 *   Text Format:
 *   - Text format used for completion percentage.
 *   - %1 - Percent, %2 - Unlocked, %3 - Total
 *
 * ---
 * 
 * Gallery Window > Progress
 * 
 *   Vocabulary:
 *   - Main vocabulary used for this text.
 * 
 *   Text Format:
 *   - Text format used for progress unlocked.
 *   - %1 - Percent, %2 - Unlocked, %3 - Total
 *
 * ---
 * 
 * Button Assist Window
 * 
 *   Border:
 *   - Text used for toggling border and borderless.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Gallery:
 *   - Text used for returning back to the gallery.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Next Variation:
 *   - Text used for going to next variation.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Previous Variation:
 *   - Text used for going to previous variation.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Reset Zoom/Position:
 *   - Text used for resetting the zoom and position.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Zoom Change:
 *   - Text used for changing the zoom scale.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Settings for all the windows inside the CG Gallery scene.
 *
 * ---
 *
 * Window_Help
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Window_CG_Category
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Special Categories:
 * 
 *     Add All Command?:
 *     - Add the "All" command for the CG Gallery Category window.
 * 
 *       "All" Icon:
 *       - Icon used for the "All" Category.
 * 
 *     Show Unlisted?:
 *     - Show the "Unlisted" command for the CG Gallery Category window
 *       if applicable.
 * 
 *       "Unlisted" Icon:
 *       - Icon used for the "Unlisted" Category.
 * 
 *   Style:
 *   - How do you wish to draw commands for this window?
 *     - Text Only
 *     - Icon Only
 *     - Icon + Text
 *     - Automatic
 * 
 *   Text Align:
 *   - Text alignment for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Window_CG_Gallery
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Custom Locked Image:
 *   - Custom picture graphic used for entries that have yet to be unlocked.
 * 
 *   Image Buffer:
 *   - How many pixels of buffer range should there be for selected images?
 * 
 *   Listing Background?:
 *   - Show the dark background for listings?
 * 
 *   Max Columns:
 *   - Max columns used for this window.
 * 
 *     Spacing:
 *     - Column spacing for this window.
 * 
 *   Max Rows:
 *   - Max rows used for this window.
 * 
 *     Spacing:
 *     - Row spacing for this window.
 * 
 *   Stagger:
 *   - How many pixels should the gallery entries stagger by?
 *   - This is the diagonal listing effect.
 * 
 *     Towards Left?:
 *     - Which direction should the stagger be going towards?
 * 
 *   Text:
 * 
 *     Variations:
 * 
 *       Show?:
 *       - Show variations on the gallery thumbnail?
 * 
 *       Display Singles?:
 *       - Show text on listings with no variations?
 * 
 *       Horz Text Align:
 *       Vert Text Align:
 *       - Horizontal/vertical alignment for this text?
 * 
 *     Completion:
 * 
 *       Show?:
 *       - Show this text?
 * 
 *       Decimal Places:
 *       - How many decimal places should the percentage value go to?
 * 
 *       Font Name:
 *       - What is the font family name (NOT filename) of the font?
 *       - Look up the name via Windows Font Preview.
 * 
 *         Font Size: Vocab:
 *         - What is the font size of the main vocabulary?
 * 
 *         Font Size: Value:
 *         - What is the font size of the main value?
 * 
 *       Offset:
 * 
 *         Angle:
 *         - What angle should this text be shown at?
 * 
 *         Offset X:
 *         - How many pixels to offset the x position?
 *         - Negative: left. Positive: right.
 * 
 *         Offset Y:
 *         - How many pixels to offset the y position?
 *         - Negative: up. Positive: down.
 * 
 *     Progress:
 * 
 *       Show?:
 *       - Show this text?
 * 
 *       Decimal Places:
 *       - How many decimal places should the percentage value go to?
 * 
 *       Font Name:
 *       - What is the font family name (NOT filename) of the font?
 *       - Look up the name via Windows Font Preview.
 * 
 *         Font Size: Vocab:
 *         - What is the font size of the main vocabulary?
 * 
 *         Font Size: Value:
 *         - What is the font size of the main value?
 * 
 *       Offset:
 * 
 *         Angle:
 *         - What angle should this text be shown at?
 * 
 *         Offset X:
 *         - How many pixels to offset the x position?
 *         - Negative: left. Positive: right.
 * 
 *         Offset Y:
 *         - How many pixels to offset the y position?
 *         - Negative: up. Positive: down.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause some Touch UI buttons to disappear from
 *    various menus. Fix made by Olivia.
 * 
 * Version 1.01: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a crash that would occur if the "Touch UI" option is off. Fix made
 *    by Arisu.
 * 
 * Version 1.00 Official Release Date: March 3, 2023
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
 * @command CG_UnlockImages
 * @text CG: Unlock Image(s)
 * @desc Unlocks specific image(s) for the CG Gallery.
 * 
 * @arg Filename:arraystr
 * @text Filename(s)
 * @type file[]
 * @dir img/pictures/
 * @desc List of filenames for CG's that will become unlocked.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CG_UnlockAllImagesDebug
 * @text CG: Unlock All Images (Debug)
 * @desc Unlocks all image(s) for the CG Gallery.
 * Only for playtesting. Resets upon game closing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CG_UnlockAllImagesPerma
 * @text CG: Unlock All Images (Permanent)
 * @desc Unlocks all image(s) for the CG Gallery.
 * This is a permanent unlock.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CG_ResetAllImagesPerma
 * @text CG: Reset All Unlocks (Permanent)
 * @desc Reset all unlocks for the CG Gallery.
 * This is a permanent reset. Use SPARRINGLY!
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Scene
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenCgGallery
 * @text Scene: Open CG Gallery
 * @desc Opens CG Gallery.
 * CANNOT be used inside of battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableCGGalleryMenu
 * @text System: Enable CG Gallery in Menu?
 * @desc Enables/disables CG Gallery menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables CG Gallery menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCGGalleryMenu
 * @text System: Show CG Gallery in Menu?
 * @desc Shows/hides CG Gallery menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides CG Gallery menu inside the main menu.
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
 * @param CGGallery
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Gallery
 * 
 * @param Categories:arraystruct
 * @text Image Categories
 * @parent Gallery
 * @type struct<Category>[]
 * @desc List of categories that are used for this plugin.
 * @default ["{\"Key:str\":\"CG\",\"Text:str\":\"CGs\",\"Icon:num\":\"309\",\"Description:json\":\"\\\"View major scenes found in the game!\\\"\"}","{\"Key:str\":\"Character\",\"Text:str\":\"Characters\",\"Icon:num\":\"310\",\"Description:json\":\"\\\"View character art found in the game!\\\"\"}","{\"Key:str\":\"Background\",\"Text:str\":\"Backgrounds\",\"Icon:num\":\"311\",\"Description:json\":\"\\\"View backgrounds found in the game!\\\"\"}","{\"Key:str\":\"Extra\",\"Text:str\":\"Extras\",\"Icon:num\":\"312\",\"Description:json\":\"\\\"View extra content!\\\"\"}"]
 * 
 * @param Listing:arraystruct
 * @text Image Listing
 * @parent Gallery
 * @type struct<Listing>[]
 * @desc A listing of all the pictures found in the CG Gallery.
 * @default ["{\"Filename:str\":\"Actor1_1\",\"Variations:arraystr\":\"[\\\"SF_Actor1_1\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A portrait of Reid.\\\\nHe is the main protagonist of RPG Maker MZ!\\\"\"}","{\"Filename:str\":\"Actor1_2\",\"Variations:arraystr\":\"[\\\"SF_Actor1_2\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"It's an image of Priscilla.\\\\nShe is Reid's female counterpart.\\\"\"}","{\"Filename:str\":\"Actor1_3\",\"Variations:arraystr\":\"[\\\"SF_Actor1_3\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Here's a portrait of Gale.\\\\nHe's quite the brawler.\\\"\"}","{\"Filename:str\":\"Actor1_4\",\"Variations:arraystr\":\"[\\\"SF_Actor1_4\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Michelle's portrait.\\\\nComplete with her cheerful smile!\\\"\"}","{\"Filename:str\":\"Actor1_5\",\"Variations:arraystr\":\"[\\\"SF_Actor1_5\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Albert and his handsome face.\\\\nDon't you wish you could just punch him?\\\"\"}","{\"Filename:str\":\"Actor1_6\",\"Variations:arraystr\":\"[\\\"SF_Actor1_6\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"An adorable portrait of Kasey.\\\\nHer energetic smile heals people.\\\"\"}","{\"Filename:str\":\"Actor1_7\",\"Variations:arraystr\":\"[\\\"SF_Actor1_7\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A tired portrait of Eliot.\\\\nHe's just so sick of Reid's shenanigans.\\\"\"}","{\"Filename:str\":\"Actor1_8\",\"Variations:arraystr\":\"[\\\"SF_Actor1_8\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"Roza's nicely profiled portrait.\\\\nIf only we saw more of her.\\\"\"}","{\"Filename:str\":\"Actor2_1\",\"Variations:arraystr\":\"[\\\"SF_Actor2_1\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_1.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_2\",\"Variations:arraystr\":\"[\\\"SF_Actor2_2\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_2.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_3\",\"Variations:arraystr\":\"[\\\"SF_Actor2_3\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_3.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_4\",\"Variations:arraystr\":\"[\\\"SF_Actor2_4\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_4.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_5\",\"Variations:arraystr\":\"[\\\"SF_Actor2_5\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_5.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_6\",\"Variations:arraystr\":\"[\\\"SF_Actor2_6\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_6.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_7\",\"Variations:arraystr\":\"[\\\"SF_Actor2_7\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_7.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}","{\"Filename:str\":\"Actor2_8\",\"Variations:arraystr\":\"[\\\"SF_Actor2_8\\\"]\",\"Category:str\":\"Character\",\"Description:json\":\"\\\"A character known as Actor2_8.\\\\nA shame we don't know their RPG Maker MZ name.\\\"\"}"]
 * 
 * @param DefaultUnlocked:arraystr
 * @text Default Unlocks
 * @parent Listing:arraystruct
 * @type file[]
 * @dir img/pictures/
 * @desc List of filenames for CG's that are already unlocked and viewable.
 * @default ["Actor1_1","Actor1_2","Actor1_3","Actor1_4","Actor1_5","Actor1_6","Actor1_7","Actor1_8"]
 * 
 * @param Scenes
 *
 * @param System:struct
 * @text System Settings
 * @parent Scenes
 * @type struct<System>
 * @desc System settings for CG Gallery.
 * @default {"AutoUnlocks":"","AutoUnlockShowPicture:eval":"true","AutoUnlockVariations:eval":"false","Scene_CG_Gallery":"","MoveDistance:num":"4"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @parent Scenes
 * @type struct<MainMenu>
 * @desc Main Menu settings for CG Gallery.
 * @default {"Name:str":"CG Gallery","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true","ShowTitleCommand:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @parent Scenes
 * @type struct<BgSettings>
 * @desc Background settings for Scene_CG_Gallery.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Sound:struct
 * @text Sound Settings
 * @parent Scenes
 * @type struct<Sound>
 * @desc Sound settings for the CG Gallery.
 * @default {"View":"","viewName:str":"Book1","viewVolume:num":"90","viewPitch:num":"100","viewPan:num":"0","Change":"","changeName:str":"Book2","changeVolume:num":"90","changePitch:num":"100","changePan:num":"0"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @parent Scenes
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"CategoryWindowCommands":"","AllCommandText:str":"All","UnlistedCommandText:str":"Unlisted","HelpDesc":"","AllCommandDescription:json":"\"View all types of images for this gallery.\"","UnlistedCommandDescription:json":"\"These images do not have a category.\"","LockedHelpDescription:json":"\"You have not unlocked this image yet.\"","GalleryWindow":"","GalleryWindowVariations":"","GalleryWindow_Text_VariationComplete:str":"\\}★","GalleryWindow_Text_VariationFmt:str":"\\}%2/%3","GalleryWindowCompletion":"","GalleryWindow_Text_CompletionVocab:str":"Completion","GalleryWindow_Text_CompletionFmt:str":"%1%","GalleryWindowProgress":"","GalleryWindow_Text_ProgressVocab:str":"Progress","GalleryWindow_Text_ProgressFmt:str":"%2/%3","ButtonAssist":"","ButtonAssistVocab_Border:str":"Border","ButtonAssistVocab_Gallery:str":"Gallery","ButtonAssistVocab_Next:str":"Next","ButtonAssistVocab_Prev:str":"Prev","ButtonAssistVocab_Reset:str":"Reset","ButtonAssistVocab_Zoom:str":"Zoom"}
 * 
 * @param Window:struct
 * @text Window Settings
 * @parent Scenes
 * @type struct<Window>
 * @desc Settings for all the windows inside the CG Gallery scene.
 * @default {"HelpWindow":"","HelpWindow_BgType:num":"0","HelpWindow_RectJS:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","CategoryWindow":"","CategoryWindow_BgType:num":"0","CategoryWindowCommands":"","CategoryWindow_AddAllCommand:eval":"true","AllCommandIcon:num":"307","CategoryWindow_ShowUnlistedCommand:eval":"true","UnlistedCommandIcon:num":"308","CategoryWindow_Style:str":"auto","CategoryWindow_TextAlign:str":"center","CategoryWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GalleryWindow":"","GalleryWindow_BgType:num":"0","LockedImgFilename:str":"","GalleryWindow_ImageBuffer:num":"4","GalleryWindow_ListingBack:eval":"true","GalleryWindow_MaxCols:num":"4","GalleryWindow_SpacingCols:num":"4","GalleryWindow_MaxRows:num":"3","GalleryWindow_SpacingRows:num":"4","GalleryWindow_Stagger:num":"160","GalleryWindow_StaggerToLeft:eval":"true","GalleryWindow_Text":"","GalleryWindow_Text_Variations":"","GalleryWindow_Text_VariationsShow:eval":"true","GalleryWindow_Text_VariationsShowSingles:eval":"false","GalleryWindow_Text_VariationsAlignX:str":"right","GalleryWindow_Text_VariationsAlignY:str":"bottom","GalleryWindow_Text_Completion":"","GalleryWindow_Text_CompletionShow:eval":"true","GalleryWindow_Text_CompletionDecimals:num":"2","GalleryWindow_Text_CompletionFontFace:str":"Arial","GalleryWindow_Text_CompletionFontSize1:num":"26","GalleryWindow_Text_CompletionFontSize2:num":"36","GalleryWindow_Text_CompletionOffset":"","GalleryWindow_Text_CompletionAngle:num":"20","GalleryWindow_Text_CompletionOffsetX:num":"+0","GalleryWindow_Text_CompletionOffsetY:num":"+0","GalleryWindow_Text_Progress":"","GalleryWindow_Text_ProgressShow:eval":"true","GalleryWindow_Text_ProgressDecimals:num":"2","GalleryWindow_Text_ProgressFontFace:str":"Arial","GalleryWindow_Text_ProgressFontSize1:num":"26","GalleryWindow_Text_ProgressFontSize2:num":"48","GalleryWindow_Text_ProgressOffset":"","GalleryWindow_Text_ProgressAngle:num":"-20","GalleryWindow_Text_ProgressOffsetX:num":"+0","GalleryWindow_Text_ProgressOffsetY:num":"+0","GalleryWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * Category List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Key:str
 * @text ID Key
 * @desc This category's identification key. Categories require
 * unique keys for the plugin to differentiate them.
 * @default (Needs Key)
 *
 * @param Text:str
 * @text Text
 * @desc This category's command text.
 * @default Untitled
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param Description:json
 * @text Help Description
 * @type note
 * @desc A description of the CG Gallery listing.
 * Text codes allowed.
 * @default "Line1\nLine2"
 * 
 */
/* ----------------------------------------------------------------------------
 * Listing Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Listing:
 *
 * @param Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the CG Gallery listing.
 * This will be used as the CG Gallery thumbnail, too.
 * @default Untitled
 *
 * @param Variations:arraystr
 * @text Variations
 * @parent Filename:str
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Variations of the CG Gallery listing.
 * @default []
 *
 * @param Category:str
 * @text Category
 * @desc The category this image is listed under.
 * If unlisted, the image will be listed under "Unlisted".
 * @default Unlisted
 *
 * @param Description:json
 * @text Help Description
 * @type note
 * @desc A description of the CG Gallery listing.
 * Text codes allowed.
 * @default "Line1\nLine2"
 *
 */
/* ----------------------------------------------------------------------------
 * System Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~System:
 *
 * @param AutoUnlocks
 * @text Auto-Unlocks
 *
 * @param AutoUnlockShowPicture:eval
 * @text Show Picture?
 * @parent AutoUnlocks
 * @type boolean
 * @on Auto-Unlock
 * @off Ignore
 * @desc Auto-unlock listings for the CG Gallery when using
 * "Show Picture" event commands?
 * @default true
 *
 * @param AutoUnlockVariations:eval
 * @text Variations?
 * @parent AutoUnlocks
 * @type boolean
 * @on Auto-Unlock
 * @off Ignore
 * @desc Auto-unlock variations for listings for the CG Gallery?
 * @default false
 * 
 * @param Scene_CG_Gallery
 *
 * @param MoveDistance:num
 * @text Move Distance
 * @parent Scene_CG_Gallery
 * @desc How many pixels should pictures move per frame?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'CG Gallery' option in the Main Menu.
 * @default CG Gallery
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'CG Gallery' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'CG Gallery' option to the Main Menu by default?
 * @default true
 *
 * @param ShowTitleCommand:eval
 * @text Show in Title Command?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the "CG Gallery" the Title Command Window?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param View
 * @text Select Image
 * 
 * @param viewName:str
 * @text Filename
 * @parent View
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Book1
 *
 * @param viewVolume:num
 * @text Volume
 * @parent View
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param viewPitch:num
 * @text Pitch
 * @parent View
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param viewPan:num
 * @text Pan
 * @parent View
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Change
 * @text Change Variation
 * 
 * @param changeName:str
 * @text Filename
 * @parent Change
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Book2
 *
 * @param changeVolume:num
 * @text Volume
 * @parent Change
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param changePitch:num
 * @text Pitch
 * @parent Change
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param changePan:num
 * @text Pan
 * @parent Change
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param CategoryWindowCommands
 * @text Special Categories
 *
 * @param AllCommandText:str
 * @text "All" Command
 * @parent CategoryWindowCommands
 * @desc Text used for the "All" Category.
 * @default All
 *
 * @param UnlistedCommandText:str
 * @text "Unlisted" Command
 * @parent CategoryWindowCommands
 * @desc Text used for the "Unlisted" Category.
 * @default Unlisted
 *
 * @param HelpDesc
 * @text Help Descriptions
 *
 * @param AllCommandDescription:json
 * @text "All" Category
 * @parent HelpDesc
 * @type note
 * @desc A description used for the "All" Category.
 * Text codes allowed.
 * @default "View all types of images for this gallery."
 *
 * @param UnlistedCommandDescription:json
 * @text "Unlisted" Category
 * @parent HelpDesc
 * @type note
 * @desc A description used for the "Unlisted" Category.
 * Text codes allowed.
 * @default "These images do not have a category."
 *
 * @param LockedHelpDescription:json
 * @text Not Unlocked Image
 * @parent HelpDesc
 * @type note
 * @desc A description used for yet to be unlocked images.
 * Text codes allowed.
 * @default "You have not unlocked this image yet."
 * 
 * @param GalleryWindow
 * @text Gallery Window
 * 
 * @param GalleryWindowVariations
 * @text Variations
 * @parent GalleryWindow
 *
 * @param GalleryWindow_Text_VariationComplete:str
 * @text Complete Text
 * @parent GalleryWindowVariations
 * @desc Text displayed for listings with complete unlocks.
 * Leave empty to not use.
 * @default \}★
 *
 * @param GalleryWindow_Text_VariationFmt:str
 * @text Text Format
 * @parent GalleryWindowVariations
 * @desc Text format for listings with variations left.
 * %1 - Percent, %2 - Unlocked, %3 - Total
 * @default \}%2/%3
 * 
 * @param GalleryWindowCompletion
 * @text Completion
 * @parent GalleryWindow
 *
 * @param GalleryWindow_Text_CompletionVocab:str
 * @text Vocabulary
 * @parent GalleryWindowCompletion
 * @desc Main vocabulary used for this text.
 * @default Completion
 *
 * @param GalleryWindow_Text_CompletionFmt:str
 * @text Percentage Format
 * @parent GalleryWindowCompletion
 * @desc Text format used for completion percentage.
 * %1 - Percent, %2 - Unlocked, %3 - Total
 * @default %1%
 * 
 * @param GalleryWindowProgress
 * @text Progress
 * @parent GalleryWindow
 *
 * @param GalleryWindow_Text_ProgressVocab:str
 * @text Vocabulary
 * @parent GalleryWindowProgress
 * @desc Main vocabulary used for this text.
 * @default Progress
 *
 * @param GalleryWindow_Text_ProgressFmt:str
 * @text Progress Format
 * @parent GalleryWindowProgress
 * @desc Text format used for progress unlocked.
 * %1 - Percent, %2 - Unlocked, %3 - Total
 * @default %2/%3
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param ButtonAssistVocab_Border:str
 * @text Border
 * @parent ButtonAssist
 * @desc Text used for toggling border and borderless.
 * Requires VisuMZ_0_CoreEngine!
 * @default Border
 *
 * @param ButtonAssistVocab_Gallery:str
 * @text Gallery
 * @parent ButtonAssist
 * @desc Text used for returning back to the gallery.
 * Requires VisuMZ_0_CoreEngine!
 * @default Gallery
 *
 * @param ButtonAssistVocab_Next:str
 * @text Next Variation
 * @parent ButtonAssist
 * @desc Text used for going to next variation.
 * Requires VisuMZ_0_CoreEngine!
 * @default Next
 *
 * @param ButtonAssistVocab_Prev:str
 * @text Previous Variation
 * @parent ButtonAssist
 * @desc Text used for going to previous variation.
 * Requires VisuMZ_0_CoreEngine!
 * @default Prev
 *
 * @param ButtonAssistVocab_Reset:str
 * @text Reset Zoom/Position
 * @parent ButtonAssist
 * @desc Text used for resetting the zoom and position.
 * Requires VisuMZ_0_CoreEngine!
 * @default Reset
 *
 * @param ButtonAssistVocab_Zoom:str
 * @text Zoom Change
 * @parent ButtonAssist
 * @desc Text used for changing the zoom scale.
 * Requires VisuMZ_0_CoreEngine!
 * @default Zoom
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param HelpWindow
 * @text Window_Help
 *
 * @param HelpWindow_BgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CategoryWindow
 * @text Window_CG_Category
 *
 * @param CategoryWindow_BgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 * 
 * @param CategoryWindowCommands
 * @text Special Categories
 * @parent CategoryWindow
 *
 * @param CategoryWindow_AddAllCommand:eval
 * @text Add All Command?
 * @parent CategoryWindowCommands
 * @type boolean
 * @on Add
 * @off Ignore
 * @desc Add the "All" command for the CG Gallery Category window.
 * @default true
 *
 * @param AllCommandIcon:num
 * @text "All" Icon
 * @parent CategoryWindow_AddAllCommand:eval
 * @desc Icon used for the "All" Category.
 * @default 307
 *
 * @param CategoryWindow_ShowUnlistedCommand:eval
 * @text Show Unlisted?
 * @parent CategoryWindowCommands
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the "Unlisted" command for the CG Gallery Category window if applicable.
 * @default true
 *
 * @param UnlistedCommandIcon:num
 * @text "Unlisted" Icon
 * @parent CategoryWindow_ShowUnlistedCommand:eval
 * @desc Icon used for the "Unlisted" Category.
 * @default 308
 *
 * @param CategoryWindow_Style:str
 * @text Style
 * @parent CategoryWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands for this window?
 * @default auto
 *
 * @param CategoryWindow_TextAlign:str
 * @text Text Align
 * @parent CategoryWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for this window?
 * @default center
 *
 * @param CategoryWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GalleryWindow
 * @text Window_CG_Gallery
 *
 * @param GalleryWindow_BgType:num
 * @text Background Type
 * @parent GalleryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param LockedImgFilename:str
 * @text Custom Locked Image
 * @parent GalleryWindow
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Custom picture graphic used for entries that have yet to be unlocked.
 * @default 
 *
 * @param GalleryWindow_ImageBuffer:num
 * @text Image Buffer
 * @parent GalleryWindow
 * @type number
 * @desc How many pixels of buffer range should there be for selected images?
 * @default 4
 *
 * @param GalleryWindow_ListingBack:eval
 * @text Listing Background?
 * @parent GalleryWindow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the dark background for listings?
 * @default true
 *
 * @param GalleryWindow_MaxCols:num
 * @text Max Columns
 * @parent GalleryWindow
 * @type number
 * @min 1
 * @desc Max columns used for this window.
 * @default 4
 *
 * @param GalleryWindow_SpacingCols:num
 * @text Spacing
 * @parent GalleryWindow_MaxCols:num
 * @type number
 * @min 0
 * @desc Column spacing for this window.
 * @default 4
 *
 * @param GalleryWindow_MaxRows:num
 * @text Max Rows
 * @parent GalleryWindow
 * @type number
 * @min 1
 * @desc Max rows used for this window.
 * @default 3
 *
 * @param GalleryWindow_SpacingRows:num
 * @text Spacing
 * @parent GalleryWindow_MaxRows:num
 * @type number
 * @min 0
 * @desc Row spacing for this window.
 * @default 4
 *
 * @param GalleryWindow_Stagger:num
 * @text Stagger
 * @parent GalleryWindow
 * @type number
 * @desc How many pixels should the gallery entries stagger by?
 * This is the diagonal listing effect.
 * @default 160
 *
 * @param GalleryWindow_StaggerToLeft:eval
 * @text Towards Left?
 * @parent GalleryWindow_Stagger:num
 * @type boolean
 * @on Towards Left
 * @off Towards Right
 * @desc Which direction should the stagger be going towards?
 * @default true
 * 
 * @param GalleryWindow_Text
 * @text Text
 * @parent GalleryWindow
 * 
 * @param GalleryWindow_Text_Variations
 * @text Variations
 * @parent GalleryWindow_Text
 *
 * @param GalleryWindow_Text_VariationsShow:eval
 * @text Show?
 * @parent GalleryWindow_Text_Variations
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show variations on the gallery thumbnail?
 * @default true
 *
 * @param GalleryWindow_Text_VariationsShowSingles:eval
 * @text Display Singles?
 * @parent GalleryWindow_Text_Variations
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show text on listings with no variations?
 * @default false
 *
 * @param GalleryWindow_Text_VariationsAlignX:str
 * @text Horz Text Align
 * @parent GalleryWindow_Text_Variations
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Horizontal alignment for this text?
 * @default right
 *
 * @param GalleryWindow_Text_VariationsAlignY:str
 * @text Vert Text Align
 * @parent GalleryWindow_Text_Variations
 * @type combo
 * @option top
 * @option middle
 * @option bottom
 * @desc Vertical alignment for this text?
 * @default bottom
 * 
 * @param GalleryWindow_Text_Completion
 * @text Completion
 * @parent GalleryWindow_Text
 *
 * @param GalleryWindow_Text_CompletionShow:eval
 * @text Show?
 * @parent GalleryWindow_Text_Completion
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this text?
 * @default true
 *
 * @param GalleryWindow_Text_CompletionDecimals:num
 * @text Decimal Places
 * @parent GalleryWindow_Text_Completion
 * @type number
 * @desc How many decimal places should the percentage value go to?
 * @default 2
 *
 * @param GalleryWindow_Text_CompletionFontFace:str
 * @text Font Name
 * @parent GalleryWindow_Text_Completion
 * @desc What is the font family name (NOT filename) of the font?
 * Look up the name via Windows Font Preview.
 * @default Arial
 *
 * @param GalleryWindow_Text_CompletionFontSize1:num
 * @text Font Size: Vocab
 * @parent GalleryWindow_Text_CompletionFontFace:str
 * @type number
 * @desc What is the font size of the main vocabulary?
 * @default 26
 *
 * @param GalleryWindow_Text_CompletionFontSize2:num
 * @text Font Size: Value
 * @parent GalleryWindow_Text_CompletionFontFace:str
 * @type number
 * @desc What is the font size of the value?
 * @default 36
 *
 * @param GalleryWindow_Text_CompletionOffset
 * @text Offset
 * @parent GalleryWindow_Text_Completion
 *
 * @param GalleryWindow_Text_CompletionAngle:num
 * @text Angle
 * @parent GalleryWindow_Text_CompletionOffset
 * @desc What angle should this text be shown at?
 * @default 20
 *
 * @param GalleryWindow_Text_CompletionOffsetX:num
 * @text Offset X
 * @parent GalleryWindow_Text_CompletionOffset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GalleryWindow_Text_CompletionOffsetY:num
 * @text Offset Y
 * @parent GalleryWindow_Text_CompletionOffset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param GalleryWindow_Text_Progress
 * @text Progress
 * @parent GalleryWindow_Text
 *
 * @param GalleryWindow_Text_ProgressShow:eval
 * @text Show?
 * @parent GalleryWindow_Text_Progress
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this text?
 * @default true
 *
 * @param GalleryWindow_Text_ProgressDecimals:num
 * @text Decimal Places
 * @parent GalleryWindow_Text_Progress
 * @type number
 * @desc How many decimal places should the percentage value go to?
 * @default 2
 *
 * @param GalleryWindow_Text_ProgressFontFace:str
 * @text Font Name
 * @parent GalleryWindow_Text_Progress
 * @desc What is the font family name (NOT filename) of the font?
 * Look up the name via Windows Font Preview.
 * @default Arial
 *
 * @param GalleryWindow_Text_ProgressFontSize1:num
 * @text Font Size: Vocab
 * @parent GalleryWindow_Text_ProgressFontFace:str
 * @type number
 * @desc What is the font size of the main vocabulary?
 * @default 26
 *
 * @param GalleryWindow_Text_ProgressFontSize2:num
 * @text Font Size: Value
 * @parent GalleryWindow_Text_ProgressFontFace:str
 * @type number
 * @desc What is the font size of the value?
 * @default 48
 *
 * @param GalleryWindow_Text_ProgressOffset
 * @text Offset
 * @parent GalleryWindow_Text_Progress
 *
 * @param GalleryWindow_Text_ProgressAngle:num
 * @text Angle
 * @parent GalleryWindow_Text_ProgressOffset
 * @desc What angle should this text be shown at?
 * @default -20
 *
 * @param GalleryWindow_Text_ProgressOffsetX:num
 * @text Offset X
 * @parent GalleryWindow_Text_ProgressOffset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GalleryWindow_Text_ProgressOffsetY:num
 * @text Offset Y
 * @parent GalleryWindow_Text_ProgressOffset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GalleryWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent GalleryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x4cb2af=_0x3743;(function(_0x3678f5,_0x56f364){const _0x18c5a5=_0x3743,_0x3530a8=_0x3678f5();while(!![]){try{const _0x4a77d4=-parseInt(_0x18c5a5(0x210))/0x1+-parseInt(_0x18c5a5(0x22d))/0x2*(-parseInt(_0x18c5a5(0x1d0))/0x3)+-parseInt(_0x18c5a5(0x222))/0x4+parseInt(_0x18c5a5(0x195))/0x5+parseInt(_0x18c5a5(0x22a))/0x6*(parseInt(_0x18c5a5(0x12f))/0x7)+-parseInt(_0x18c5a5(0x291))/0x8*(parseInt(_0x18c5a5(0x19a))/0x9)+-parseInt(_0x18c5a5(0x1af))/0xa*(-parseInt(_0x18c5a5(0x221))/0xb);if(_0x4a77d4===_0x56f364)break;else _0x3530a8['push'](_0x3530a8['shift']());}catch(_0x1ea852){_0x3530a8['push'](_0x3530a8['shift']());}}}(_0x14f0,0xbfbd9));var label=_0x4cb2af(0x1c5),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x4cb2af(0xf6)](function(_0x44c905){const _0x335a84=_0x4cb2af;return _0x44c905[_0x335a84(0x17a)]&&_0x44c905[_0x335a84(0x249)][_0x335a84(0x105)]('['+label+']');})[0x0];VisuMZ[label][_0x4cb2af(0x157)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x907fa8,_0x3f6cdc){const _0x4ffff4=_0x4cb2af;for(const _0x4a61b6 in _0x3f6cdc){if('mBsnD'!==_0x4ffff4(0xe2)){if(_0x4a61b6[_0x4ffff4(0x243)](/(.*):(.*)/i)){const _0x214958=String(RegExp['$1']),_0x493447=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x4c9efd,_0x133ff7,_0x1e9737;switch(_0x493447){case _0x4ffff4(0x2c6):_0x4c9efd=_0x3f6cdc[_0x4a61b6]!==''?Number(_0x3f6cdc[_0x4a61b6]):0x0;break;case'ARRAYNUM':_0x133ff7=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):[],_0x4c9efd=_0x133ff7['map'](_0x8e9676=>Number(_0x8e9676));break;case'EVAL':_0x4c9efd=_0x3f6cdc[_0x4a61b6]!==''?eval(_0x3f6cdc[_0x4a61b6]):null;break;case _0x4ffff4(0x15a):_0x133ff7=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):[],_0x4c9efd=_0x133ff7[_0x4ffff4(0x229)](_0x538844=>eval(_0x538844));break;case _0x4ffff4(0x1a0):_0x4c9efd=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):'';break;case _0x4ffff4(0x1fa):_0x133ff7=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):[],_0x4c9efd=_0x133ff7[_0x4ffff4(0x229)](_0x4fa989=>JSON[_0x4ffff4(0xee)](_0x4fa989));break;case _0x4ffff4(0x1cb):_0x4c9efd=_0x3f6cdc[_0x4a61b6]!==''?new Function(JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6])):new Function(_0x4ffff4(0x225));break;case _0x4ffff4(0x298):_0x133ff7=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):[],_0x4c9efd=_0x133ff7[_0x4ffff4(0x229)](_0x2a3b92=>new Function(JSON[_0x4ffff4(0xee)](_0x2a3b92)));break;case _0x4ffff4(0x295):_0x4c9efd=_0x3f6cdc[_0x4a61b6]!==''?String(_0x3f6cdc[_0x4a61b6]):'';break;case _0x4ffff4(0x1c7):_0x133ff7=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):[],_0x4c9efd=_0x133ff7[_0x4ffff4(0x229)](_0x44a4f9=>String(_0x44a4f9));break;case _0x4ffff4(0x125):_0x1e9737=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):{},_0x4c9efd=VisuMZ[_0x4ffff4(0x286)]({},_0x1e9737);break;case _0x4ffff4(0xe4):_0x133ff7=_0x3f6cdc[_0x4a61b6]!==''?JSON[_0x4ffff4(0xee)](_0x3f6cdc[_0x4a61b6]):[],_0x4c9efd=_0x133ff7['map'](_0x144936=>VisuMZ['ConvertParams']({},JSON[_0x4ffff4(0xee)](_0x144936)));break;default:continue;}_0x907fa8[_0x214958]=_0x4c9efd;}}else this[_0x4ffff4(0x260)](),this[_0x4ffff4(0x1dc)](),this[_0x4ffff4(0xfe)]();}return _0x907fa8;},(_0x26e4c6=>{const _0x3cebf6=_0x4cb2af,_0x4a41e9=_0x26e4c6[_0x3cebf6(0x238)];for(const _0x54fbab of dependencies){if(_0x3cebf6(0x156)===_0x3cebf6(0x156)){if(!Imported[_0x54fbab]){alert(_0x3cebf6(0xd4)[_0x3cebf6(0x2a4)](_0x4a41e9,_0x54fbab)),SceneManager[_0x3cebf6(0x236)]();break;}}else{if(this['_itemHeight']!==_0x9fe428)return this[_0x3cebf6(0x10f)];const _0x257208=this['innerHeight']/_0x5c5893[_0x3cebf6(0x276)];return this[_0x3cebf6(0x10f)]=_0x5dde77[_0x3cebf6(0xde)](_0x257208),this[_0x3cebf6(0x10f)];}}const _0xf5c8b0=_0x26e4c6['description'];if(_0xf5c8b0['match'](/\[Version[ ](.*?)\]/i)){const _0x2945d6=Number(RegExp['$1']);_0x2945d6!==VisuMZ[label][_0x3cebf6(0x23b)]&&(alert(_0x3cebf6(0x262)['format'](_0x4a41e9,_0x2945d6)),SceneManager[_0x3cebf6(0x236)]());}if(_0xf5c8b0[_0x3cebf6(0x243)](/\[Tier[ ](\d+)\]/i)){const _0x5449cb=Number(RegExp['$1']);if(_0x5449cb<tier)alert(_0x3cebf6(0x1c4)[_0x3cebf6(0x2a4)](_0x4a41e9,_0x5449cb,tier)),SceneManager[_0x3cebf6(0x236)]();else{if(_0x3cebf6(0x1f2)===_0x3cebf6(0x159))return _0x4fcd4c=_0x1c196a||_0x3cebf6(0x13d),_0x3fda3d[_0x3cebf6(0x1c5)][_0x3cebf6(0x13e)](_0x53001f);else tier=Math['max'](_0x5449cb,tier);}}VisuMZ[_0x3cebf6(0x286)](VisuMZ[label][_0x3cebf6(0x157)],_0x26e4c6[_0x3cebf6(0x2c3)]);})(pluginData),PluginManager[_0x4cb2af(0x119)](pluginData['name'],_0x4cb2af(0x110),_0x4ed144=>{const _0x522af4=_0x4cb2af;VisuMZ[_0x522af4(0x286)](_0x4ed144,_0x4ed144);const _0x258647=_0x4ed144['Filename'][_0x522af4(0x229)](_0x527638=>_0x527638[_0x522af4(0xe1)]());for(const _0x582c09 of _0x258647){$gameSystem[_0x522af4(0x297)](_0x582c09);}}),PluginManager[_0x4cb2af(0x119)](pluginData[_0x4cb2af(0x238)],_0x4cb2af(0x177),_0x75e3ba=>{const _0x534251=_0x4cb2af;VisuMZ[_0x534251(0x286)](_0x75e3ba,_0x75e3ba),$gameTemp[_0x534251(0x20b)]=!![];}),PluginManager[_0x4cb2af(0x119)](pluginData[_0x4cb2af(0x238)],'CG_UnlockAllImagesPerma',_0x3ea2f3=>{const _0x34f169=_0x4cb2af;VisuMZ[_0x34f169(0x286)](_0x3ea2f3,_0x3ea2f3);const _0x2570fd=VisuMZ[_0x34f169(0x1c5)]['Settings'][_0x34f169(0x18b)];for(const _0x5e172a of _0x2570fd){if(_0x34f169(0x261)!==_0x34f169(0x218)){if(!_0x5e172a)continue;if(_0x5e172a['Filename'][_0x34f169(0x18d)]()[_0x34f169(0xe1)]()===_0x34f169(0x26f))continue;if(_0x5e172a[_0x34f169(0x223)][_0x34f169(0xe1)]()==='')continue;$gameSystem[_0x34f169(0x297)](_0x5e172a[_0x34f169(0x223)]);for(const _0x5a70ae of _0x5e172a[_0x34f169(0x1aa)]){if(_0x5a70ae['toLowerCase']()[_0x34f169(0xe1)]()===_0x34f169(0x26f))continue;if(_0x5a70ae[_0x34f169(0xe1)]()==='')continue;$gameSystem[_0x34f169(0x297)](_0x5a70ae);}}else{const _0x177b6f=_0x16b368['CGGallery']['Settings'][_0x34f169(0x133)],_0x5f3af4={'name':_0x177b6f[_0x34f169(0xeb)],'volume':_0x177b6f[_0x34f169(0x11f)],'pitch':_0x177b6f['changePitch'],'pan':_0x177b6f[_0x34f169(0x284)]};_0x2461dc[_0x34f169(0x28c)](_0x5f3af4);}}}),PluginManager[_0x4cb2af(0x119)](pluginData['name'],_0x4cb2af(0x1d5),_0x59fef0=>{const _0x1e7431=_0x4cb2af;VisuMZ[_0x1e7431(0x286)](_0x59fef0,_0x59fef0),$gameTemp[_0x1e7431(0x20b)]=![],ConfigManager[_0x1e7431(0x2bd)]=[],ConfigManager[_0x1e7431(0x198)]();}),PluginManager[_0x4cb2af(0x119)](pluginData['name'],_0x4cb2af(0x2ac),_0x328115=>{const _0x28bebf=_0x4cb2af;if(SceneManager[_0x28bebf(0x1d2)]())return;SceneManager[_0x28bebf(0x1a2)](Scene_CG_Gallery);}),PluginManager['registerCommand'](pluginData['name'],_0x4cb2af(0x1cf),_0x4c1b77=>{const _0x4706c2=_0x4cb2af;VisuMZ[_0x4706c2(0x286)](_0x4c1b77,_0x4c1b77),$gameSystem[_0x4706c2(0x275)](_0x4c1b77['Enable']);}),PluginManager[_0x4cb2af(0x119)](pluginData[_0x4cb2af(0x238)],_0x4cb2af(0x273),_0x409c01=>{const _0x423f64=_0x4cb2af;VisuMZ['ConvertParams'](_0x409c01,_0x409c01),$gameSystem[_0x423f64(0x1c9)](_0x409c01['Show']);}),ConfigManager[_0x4cb2af(0x2bd)]=[],VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x142)]=ConfigManager[_0x4cb2af(0x155)],ConfigManager[_0x4cb2af(0x155)]=function(){const _0x2d95e9=_0x4cb2af,_0x3cc181=VisuMZ[_0x2d95e9(0x1c5)][_0x2d95e9(0x142)][_0x2d95e9(0xcc)](this);return _0x3cc181[_0x2d95e9(0x2bd)]=this[_0x2d95e9(0x2bd)],_0x3cc181;},VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x140)]=ConfigManager[_0x4cb2af(0xe5)],ConfigManager[_0x4cb2af(0xe5)]=function(_0xda71c1){const _0x169b80=_0x4cb2af;VisuMZ['CGGallery'][_0x169b80(0x140)][_0x169b80(0xcc)](this,_0xda71c1),_0x169b80(0x2bd)in _0xda71c1?this[_0x169b80(0x2bd)]=_0xda71c1[_0x169b80(0x2bd)]:this[_0x169b80(0x2bd)]=[];},ConfigManager['cgGalleryHasUnlockedImage']=function(){const _0x47e156=_0x4cb2af;return this[_0x47e156(0x2bd)][_0x47e156(0x23d)]>0x0;},VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x213)]=function(){const _0x33b68a=_0x4cb2af;if(this['_defaultUnlocks']!==undefined)return this['_defaultUnlocks'];this['_defaultUnlocks']=this[_0x33b68a(0x114)]||[];const _0x508f6a=VisuMZ[_0x33b68a(0x1c5)][_0x33b68a(0x157)]['Listing'];for(const _0x3a07d3 of _0x508f6a){if(_0x33b68a(0x28e)===_0x33b68a(0x28e)){if(!_0x3a07d3)continue;if(VisuMZ[_0x33b68a(0x1c5)][_0x33b68a(0x157)][_0x33b68a(0x2ad)][_0x33b68a(0x105)](_0x3a07d3['Filename'])){if(_0x33b68a(0x149)===_0x33b68a(0x17d)){const _0x4e9c92=this['_commandNameWindow'],_0x492cca=_0x3caf44['windowPadding'](),_0x5250e2=_0xd0ada0['x']+_0x16e9de[_0x33b68a(0x25d)](_0x45dc67[_0x33b68a(0x176)]/0x2)+_0x492cca;_0x4e9c92['x']=_0x4e9c92['width']/-0x2+_0x5250e2,_0x4e9c92['y']=_0x4c34df[_0x33b68a(0x25d)](_0x5eff2b[_0x33b68a(0x13b)]/0x2);}else this[_0x33b68a(0x114)][_0x33b68a(0x1a2)](_0x3a07d3['Filename']);}}else{const _0x54ad4e=new _0x1a77ac(0x0,0x0,_0x38de3b[_0x33b68a(0x176)],_0x298a32['height']);this[_0x33b68a(0xd7)]=new _0x311f94(_0x54ad4e),this[_0x33b68a(0xd7)]['opacity']=0x0,this[_0x33b68a(0x166)](this[_0x33b68a(0xd7)]),this[_0x33b68a(0x15f)]();}}return this[_0x33b68a(0x114)];},VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x100)]=function(_0x18c7fc){const _0xf3aa2a=_0x4cb2af;if(this['_listingNames']===undefined){if(_0xf3aa2a(0x14b)!==_0xf3aa2a(0x14b))this[_0xf3aa2a(0x152)]();else{this['_listingNames']=[];const _0x3c4a42=VisuMZ['CGGallery'][_0xf3aa2a(0x157)][_0xf3aa2a(0x18b)];for(const _0x59ebce of _0x3c4a42){if(_0xf3aa2a(0x189)!==_0xf3aa2a(0x121)){if(!_0x59ebce)continue;if(_0x59ebce[_0xf3aa2a(0x223)][_0xf3aa2a(0x18d)]()[_0xf3aa2a(0xe1)]()==='untitled')continue;if(_0x59ebce['Filename']['trim']()==='')continue;this[_0xf3aa2a(0x1f4)][_0xf3aa2a(0x1a2)](_0x59ebce[_0xf3aa2a(0x223)]);for(const _0x7be715 of _0x59ebce[_0xf3aa2a(0x1aa)]){if(_0x7be715[_0xf3aa2a(0x18d)]()['trim']()===_0xf3aa2a(0x26f))continue;if(_0x7be715[_0xf3aa2a(0xe1)]()==='')continue;this['_listingNames']['push'](_0x7be715);}}else{const _0x34e06f=this[_0xf3aa2a(0x109)](_0x534646),_0x2f7b4f=this[_0xf3aa2a(0x29e)](_0x31116d)['width'];return _0x2f7b4f<=_0x34e06f[_0xf3aa2a(0x176)]?_0xf3aa2a(0x1fe):_0xf3aa2a(0x12b);}}}}return this[_0xf3aa2a(0x1f4)][_0xf3aa2a(0x105)](_0x18c7fc);},VisuMZ[_0x4cb2af(0x1c5)]['CgGalleryTotalSize']=function(_0x3571ed){const _0x451b05=_0x4cb2af;_0x3571ed=_0x3571ed||'all',this[_0x451b05(0x278)]=this[_0x451b05(0x278)]||{};if(this[_0x451b05(0x278)][_0x3571ed]!==undefined)return this[_0x451b05(0x278)][_0x3571ed];this['_totalSize'][_0x3571ed]=0x0;const _0x40c76c=VisuMZ[_0x451b05(0x1c5)][_0x451b05(0x157)]['Listing'];for(const _0x5de555 of _0x40c76c){if(!_0x5de555)continue;if(_0x5de555[_0x451b05(0x223)][_0x451b05(0x18d)]()['trim']()===_0x451b05(0x26f))continue;if(_0x5de555[_0x451b05(0x223)][_0x451b05(0xe1)]()==='')continue;VisuMZ[_0x451b05(0x1c5)][_0x451b05(0x255)](_0x5de555,_0x3571ed)&&(this[_0x451b05(0x278)][_0x3571ed]+=_0x5de555['Variations']['length']+0x1);}return this[_0x451b05(0x278)][_0x3571ed];},VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x255)]=function(_0x1a5985,_0x13327e){const _0x598d59=_0x4cb2af;_0x13327e=_0x13327e||_0x598d59(0x13d);if(_0x13327e==='all')return!![];const _0x47fbd9=_0x1a5985[_0x598d59(0x1db)][_0x598d59(0x18d)]()['trim']();if(_0x13327e===_0x598d59(0x1b4)){if('lCSKP'===_0x598d59(0x136)){if(!this['addCgGalleryCommandAutomatically']())return;if(!this['isCgGalleryCommandVisible']())return;const _0x29e4cb=_0xca9580[_0x598d59(0x206)],_0x387f87=this[_0x598d59(0x11d)]();this[_0x598d59(0xd6)](_0x29e4cb,'cgGallery',_0x387f87);}else return!this[_0x598d59(0x1a3)]()[_0x598d59(0x105)](_0x47fbd9);}return _0x47fbd9===_0x13327e;},VisuMZ[_0x4cb2af(0x1c5)]['CgGalleryCategories']=function(){const _0x5dcdc4=_0x4cb2af;if(this['_categories']!==undefined)return this[_0x5dcdc4(0x167)];this[_0x5dcdc4(0x167)]=[];for(const _0x4fd828 of VisuMZ[_0x5dcdc4(0x1c5)]['Settings'][_0x5dcdc4(0x10c)]){const _0x36b127=_0x4fd828[_0x5dcdc4(0x1b9)][_0x5dcdc4(0x18d)]()[_0x5dcdc4(0xe1)]();this['_categories'][_0x5dcdc4(0x1a2)](_0x36b127);}return this[_0x5dcdc4(0x167)];},VisuMZ[_0x4cb2af(0x1c5)]['HasUnlistedCategories']=function(){const _0x4df099=_0x4cb2af;if(this[_0x4df099(0x22b)]!==undefined)return this[_0x4df099(0x22b)];this[_0x4df099(0x22b)]=![];const _0x502391=VisuMZ[_0x4df099(0x1c5)][_0x4df099(0x1a3)](),_0x455bcf=VisuMZ[_0x4df099(0x1c5)]['Settings'][_0x4df099(0x18b)];for(const _0x2c3e99 of _0x455bcf){if(!_0x2c3e99)continue;if(_0x2c3e99[_0x4df099(0x223)][_0x4df099(0x18d)]()[_0x4df099(0xe1)]()==='untitled')continue;if(_0x2c3e99[_0x4df099(0x223)][_0x4df099(0xe1)]()==='')continue;const _0x3b224d=_0x2c3e99[_0x4df099(0x1db)][_0x4df099(0x18d)]()[_0x4df099(0xe1)]();if(_0x502391['includes'](_0x3b224d))continue;this['_hasUnlistedCategories']=!![];break;}return this['_hasUnlistedCategories'];},ImageManager[_0x4cb2af(0x138)]={'icons':{'all':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x247)],'unlisted':VisuMZ['CGGallery']['Settings']['Window']['UnlistedCommandIcon']},'lockedImgFilename':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x208)]},ImageManager[_0x4cb2af(0x160)]=function(){const _0x48da49=_0x4cb2af;if(this['_cached_CGGallery_Image'])return this[_0x48da49(0x28b)];if(ImageManager[_0x48da49(0x138)][_0x48da49(0x15e)]!=='')return this[_0x48da49(0x28b)]=this['loadPicture'](ImageManager['CG_GALLERY'][_0x48da49(0x15e)]),this[_0x48da49(0x28b)];const _0x54a305=0x12c,_0x406516=0x12c,_0x2d5cb8=new Bitmap(_0x54a305,_0x406516);return _0x2d5cb8[_0x48da49(0x14f)]=0x80,_0x2d5cb8[_0x48da49(0x1f0)](0x96,0x96,0x78,_0x48da49(0x227)),_0x2d5cb8[_0x48da49(0x192)]=_0x48da49(0x24b),_0x2d5cb8[_0x48da49(0x19f)]=!![],_0x2d5cb8[_0x48da49(0x1cc)]=0x96,_0x2d5cb8[_0x48da49(0x135)]='rgba(0,\x200,\x200,\x200)',_0x2d5cb8[_0x48da49(0x25f)]('X',0x0,0x0,0x12c,0x12c,_0x48da49(0x17e)),_0x2d5cb8[_0x48da49(0x14f)]=0xff,_0x2d5cb8[_0x48da49(0xec)]=![],this[_0x48da49(0x28b)]=_0x2d5cb8,this[_0x48da49(0x28b)];},SoundManager[_0x4cb2af(0x1eb)]=function(){const _0x40441a=_0x4cb2af,_0x1e74be=VisuMZ[_0x40441a(0x1c5)][_0x40441a(0x157)]['Sound'],_0x440f08={'name':_0x1e74be['viewName'],'volume':_0x1e74be[_0x40441a(0x199)],'pitch':_0x1e74be['viewPitch'],'pan':_0x1e74be['viewPan']};AudioManager[_0x40441a(0x28c)](_0x440f08);},SoundManager[_0x4cb2af(0x183)]=function(){const _0x53c3dc=_0x4cb2af,_0x3d5e3a=VisuMZ['CGGallery']['Settings']['Sound'],_0x1f3005={'name':_0x3d5e3a[_0x53c3dc(0xeb)],'volume':_0x3d5e3a[_0x53c3dc(0x11f)],'pitch':_0x3d5e3a[_0x53c3dc(0x130)],'pan':_0x3d5e3a[_0x53c3dc(0x284)]};AudioManager[_0x53c3dc(0x28c)](_0x1f3005);},TextManager[_0x4cb2af(0x206)]=VisuMZ[_0x4cb2af(0x1c5)]['Settings']['MainMenu']['Name'],TextManager[_0x4cb2af(0x138)]={'category':{'all':VisuMZ[_0x4cb2af(0x1c5)]['Settings'][_0x4cb2af(0x2b7)][_0x4cb2af(0x207)],'unlisted':VisuMZ[_0x4cb2af(0x1c5)]['Settings']['Vocab']['UnlistedCommandText']},'helpDesc':{'all':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Vocab']['AllCommandDescription'],'unlisted':VisuMZ[_0x4cb2af(0x1c5)]['Settings'][_0x4cb2af(0x2b7)][_0x4cb2af(0x29f)],'lockedImg':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x2b7)]['LockedHelpDescription']},'buttonAssist':{'border':VisuMZ['CGGallery']['Settings'][_0x4cb2af(0x2b7)][_0x4cb2af(0x201)],'gallery':VisuMZ[_0x4cb2af(0x1c5)]['Settings']['Vocab'][_0x4cb2af(0x16f)],'next':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Vocab'][_0x4cb2af(0x246)],'prev':VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x2b7)][_0x4cb2af(0x29a)],'reset':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Vocab'][_0x4cb2af(0x1b5)],'zoom':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x2b7)]['ButtonAssistVocab_Zoom']}},SceneManager[_0x4cb2af(0x1d2)]=function(){const _0xbd418b=_0x4cb2af;return this[_0xbd418b(0x1ba)]&&this[_0xbd418b(0x1ba)]['constructor']===Scene_Battle;},Game_System['CG_GALLERY']={'autoUnlock':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['System'][_0x4cb2af(0x241)],'unlockAllVariations':VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x108)][_0x4cb2af(0xdd)]},VisuMZ['CGGallery'][_0x4cb2af(0x1da)]=Game_System['prototype'][_0x4cb2af(0x147)],Game_System['prototype']['initialize']=function(){const _0x2d8270=_0x4cb2af;VisuMZ[_0x2d8270(0x1c5)]['Game_System_initialize'][_0x2d8270(0xcc)](this),this[_0x2d8270(0x1ac)]();},Game_System['prototype']['initCgGalleryMainMenu']=function(){const _0xcd43bd=_0x4cb2af;this[_0xcd43bd(0x285)]={'shown':VisuMZ[_0xcd43bd(0x1c5)][_0xcd43bd(0x157)][_0xcd43bd(0x184)]['ShowMainMenu'],'enabled':VisuMZ[_0xcd43bd(0x1c5)]['Settings'][_0xcd43bd(0x184)][_0xcd43bd(0x245)]};},Game_System['prototype']['isMainMenuCgGalleryVisible']=function(){const _0x4bfe92=_0x4cb2af;if(this['_cgGallery_MainMenu']===undefined)this[_0x4bfe92(0x1ac)]();return this[_0x4bfe92(0x285)]['shown'];},Game_System[_0x4cb2af(0xed)][_0x4cb2af(0x1c9)]=function(_0x140eee){const _0x389e00=_0x4cb2af;if(this[_0x389e00(0x285)]===undefined)this[_0x389e00(0x1ac)]();this['_cgGallery_MainMenu']['shown']=_0x140eee;},Game_System['prototype'][_0x4cb2af(0xd3)]=function(){const _0xec0f05=_0x4cb2af;if(this[_0xec0f05(0x285)]===undefined)this[_0xec0f05(0x1ac)]();return this[_0xec0f05(0x285)][_0xec0f05(0x258)]&&this['hasCgUnlockedImage']();},Game_System[_0x4cb2af(0xed)]['setMainMenuCgGalleryEnabled']=function(_0x18b099){const _0x1b79b6=_0x4cb2af;if(this['_cgGallery_MainMenu']===undefined)this[_0x1b79b6(0x1ac)]();this[_0x1b79b6(0x285)][_0x1b79b6(0x258)]=_0x18b099;},Game_System['prototype'][_0x4cb2af(0x240)]=function(){const _0x5e20fc=_0x4cb2af;return ConfigManager[_0x5e20fc(0x17f)]()||VisuMZ[_0x5e20fc(0x1c5)]['DefaultUnlocks']()[_0x5e20fc(0x23d)]>0x0;},Game_System['prototype'][_0x4cb2af(0x10d)]=function(_0x539a95,_0x4ee53e){const _0x5494e0=_0x4cb2af;if(VisuMZ[_0x5494e0(0x1c5)][_0x5494e0(0x213)]()[_0x5494e0(0x105)](_0x539a95))return!![];if(_0x4ee53e&&Game_System[_0x5494e0(0x138)]['unlockAllVariations'])return!![];if($gameTemp['_cgGalleryFullUnlock']&&$gameTemp['isPlaytest']())return!![];return ConfigManager[_0x5494e0(0x2bd)][_0x5494e0(0x105)](_0x539a95);},Game_System[_0x4cb2af(0xed)]['unlockImageForCgGallery']=function(_0x23f689){const _0x4bc696=_0x4cb2af;if(ConfigManager['cgGalleryUnlocks'][_0x4bc696(0x105)](_0x23f689))return;ConfigManager[_0x4bc696(0x2bd)][_0x4bc696(0x1a2)](_0x23f689),ConfigManager[_0x4bc696(0x2bd)]['sort'](),ConfigManager['save']();},Game_System[_0x4cb2af(0xed)]['cgGalleryTotalSize']=function(_0x3bd0f2){const _0x1c9eb0=_0x4cb2af;return _0x3bd0f2=_0x3bd0f2||_0x1c9eb0(0x13d),VisuMZ[_0x1c9eb0(0x1c5)][_0x1c9eb0(0x13e)](_0x3bd0f2);},Game_System[_0x4cb2af(0xed)]['cgGalleryCurrentCount']=function(_0x23882f){const _0x143b01=_0x4cb2af;_0x23882f=_0x23882f||_0x143b01(0x13d);let _0x44e313=0x0;const _0x4d6b72=VisuMZ[_0x143b01(0x1c5)][_0x143b01(0x157)][_0x143b01(0x18b)];for(const _0xa33377 of _0x4d6b72){if('fTjYr'===_0x143b01(0x212)){if(!_0xa33377)continue;if(_0xa33377[_0x143b01(0x223)][_0x143b01(0x18d)]()[_0x143b01(0xe1)]()==='untitled')continue;if(_0xa33377[_0x143b01(0x223)][_0x143b01(0xe1)]()==='')continue;if(!VisuMZ[_0x143b01(0x1c5)][_0x143b01(0x255)](_0xa33377,_0x23882f))continue;if(this[_0x143b01(0x10d)](_0xa33377[_0x143b01(0x223)]))_0x44e313++;else continue;for(const _0x4a137e of _0xa33377[_0x143b01(0x1aa)]){if(_0x4a137e[_0x143b01(0x18d)]()[_0x143b01(0xe1)]()===_0x143b01(0x26f))continue;if(_0x4a137e['trim']()==='')continue;if(this[_0x143b01(0x10d)](_0x4a137e,!![]))_0x44e313++;}}else{_0x433c6d=_0x246272||'all';const _0x54bd02=this['cgGalleryTotalSize'](_0x276268);let _0x2c110e=this['cgGalleryCurrentCount'](_0x17b889);return _0x2c110e/_0x54bd02;}}return _0x44e313;},Game_System[_0x4cb2af(0xed)][_0x4cb2af(0xd2)]=function(_0x536e3e){const _0x6fd307=_0x4cb2af;_0x536e3e=_0x536e3e||'all';const _0x1b2169=this['cgGalleryTotalSize'](_0x536e3e);let _0xb71b07=this[_0x6fd307(0x1c6)](_0x536e3e);return _0xb71b07/_0x1b2169;},VisuMZ[_0x4cb2af(0x1c5)]['Game_Picture_show']=Game_Picture[_0x4cb2af(0xed)][_0x4cb2af(0x29c)],Game_Picture[_0x4cb2af(0xed)]['show']=function(_0x4c2c27,_0xd1aac9,_0x3c08df,_0x16c7e,_0x185a0a,_0x5d7080,_0x46607f,_0x51c05d){const _0x29224d=_0x4cb2af;VisuMZ[_0x29224d(0x1c5)][_0x29224d(0x11c)][_0x29224d(0xcc)](this,_0x4c2c27,_0xd1aac9,_0x3c08df,_0x16c7e,_0x185a0a,_0x5d7080,_0x46607f,_0x51c05d),Game_System[_0x29224d(0x138)][_0x29224d(0x150)]&&$gameSystem[_0x29224d(0x297)](_0x4c2c27);},VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x113)]=Scene_Title['prototype'][_0x4cb2af(0x2be)],Scene_Title[_0x4cb2af(0xed)][_0x4cb2af(0x2be)]=function(){const _0x3e309e=_0x4cb2af;VisuMZ['CGGallery'][_0x3e309e(0x113)][_0x3e309e(0xcc)](this),this[_0x3e309e(0x106)][_0x3e309e(0x250)](_0x3e309e(0x27f),this['commandCgGallery'][_0x3e309e(0x1df)](this));},Scene_Title[_0x4cb2af(0xed)]['commandCgGallery']=function(){const _0x17b085=_0x4cb2af;this[_0x17b085(0x106)]['close'](),SceneManager[_0x17b085(0x1a2)](Scene_CG_Gallery);},VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x193)]=Scene_Menu['prototype'][_0x4cb2af(0x2be)],Scene_Menu[_0x4cb2af(0xed)]['createCommandWindow']=function(){const _0x399f44=_0x4cb2af;VisuMZ[_0x399f44(0x1c5)][_0x399f44(0x193)][_0x399f44(0xcc)](this);const _0x46a660=this[_0x399f44(0x106)];_0x46a660[_0x399f44(0x250)](_0x399f44(0x27f),this[_0x399f44(0x107)][_0x399f44(0x1df)](this));},Scene_Menu[_0x4cb2af(0xed)][_0x4cb2af(0x107)]=function(){const _0x2799b5=_0x4cb2af;SceneManager[_0x2799b5(0x1a2)](Scene_CG_Gallery);};function _0x3743(_0x43eeef,_0x4a9cdd){const _0x14f08d=_0x14f0();return _0x3743=function(_0x374327,_0xdd222f){_0x374327=_0x374327-0xcc;let _0x3f96e6=_0x14f08d[_0x374327];return _0x3f96e6;},_0x3743(_0x43eeef,_0x4a9cdd);}function Scene_CG_Gallery(){const _0x27da95=_0x4cb2af;this[_0x27da95(0x147)](...arguments);}Scene_CG_Gallery[_0x4cb2af(0xed)]=Object[_0x4cb2af(0x2a5)](Scene_MenuBase[_0x4cb2af(0xed)]),Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x2a7)]=Scene_CG_Gallery,Scene_CG_Gallery[_0x4cb2af(0x179)]=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0xcd)],Scene_CG_Gallery[_0x4cb2af(0x277)]=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x202)],Scene_CG_Gallery[_0x4cb2af(0x1d4)]=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0xdf)],Scene_CG_Gallery[_0x4cb2af(0x23c)]=VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x108)]['MoveDistance'],Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x147)]=function(){const _0x384247=_0x4cb2af;Scene_MenuBase[_0x384247(0xed)][_0x384247(0x147)][_0x384247(0xcc)](this),this['initMembers']();},Scene_CG_Gallery[_0x4cb2af(0xed)]['initMembers']=function(){const _0x347498=_0x4cb2af;this[_0x347498(0x2a2)]=![],this[_0x347498(0x19b)]=!![],this[_0x347498(0xe0)]=0x0,this['_variationList']=[];},Scene_CG_Gallery['prototype']['update']=function(){const _0x7c71b8=_0x4cb2af;Scene_MenuBase['prototype'][_0x7c71b8(0x137)][_0x7c71b8(0xcc)](this);if(this[_0x7c71b8(0x2a2)]){if('tlYzB'!==_0x7c71b8(0x2a0))return this['_viewMode']?_0x268940[_0x7c71b8(0xd0)](_0x7c71b8(0x287),'pagedown'):_0x1b29ca['prototype'][_0x7c71b8(0x1b8)][_0x7c71b8(0xcc)](this);else this[_0x7c71b8(0x1b1)]();}},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x254)]=function(){const _0x4ffb31=_0x4cb2af;Scene_MenuBase['prototype'][_0x4ffb31(0x254)]['call'](this),this[_0x4ffb31(0x1ee)][_0x4ffb31(0x22f)](this[_0x4ffb31(0x228)][_0x4ffb31(0x1df)](this,![])),this[_0x4ffb31(0x197)][_0x4ffb31(0x22f)](this[_0x4ffb31(0x228)][_0x4ffb31(0x1df)](this,!![])),this[_0x4ffb31(0x251)]();},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x144)]=function(){return![];return!![];},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x1e4)]=function(){const _0x17a29b=_0x4cb2af;return this[_0x17a29b(0x2a2)]&&this['_viewModeVisible'];},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x2a5)]=function(){const _0x27e5c1=_0x4cb2af;Scene_MenuBase[_0x27e5c1(0xed)][_0x27e5c1(0x2a5)][_0x27e5c1(0xcc)](this),this[_0x27e5c1(0x271)](),this['createCategoryWindow'](),this[_0x27e5c1(0x151)]();},Scene_CG_Gallery[_0x4cb2af(0xed)]['createHelpWindow']=function(){const _0x1267e4=_0x4cb2af;Scene_MenuBase[_0x1267e4(0xed)][_0x1267e4(0x271)][_0x1267e4(0xcc)](this);const _0x19253f=this[_0x1267e4(0xfc)];_0x19253f[_0x1267e4(0x289)](Scene_CG_Gallery[_0x1267e4(0x179)]);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x124)]=function(){const _0x270fdd=_0x4cb2af;if(VisuMZ[_0x270fdd(0x1c5)][_0x270fdd(0x157)][_0x270fdd(0x211)][_0x270fdd(0x268)]){if(_0x270fdd(0x24a)!=='Uukqg'){this[_0x270fdd(0x2a2)]=![],this[_0x270fdd(0xe0)]=0x0,this['_viewModeVisible']=![],this[_0x270fdd(0x251)](),this[_0x270fdd(0xfc)][_0x270fdd(0x29c)](),this[_0x270fdd(0x20e)]['show'](),this['_galleryWindow'][_0x270fdd(0x29c)](),this['_galleryWindow']['activate']();if(this[_0x270fdd(0x2bb)])this['_buttonAssistWindow'][_0x270fdd(0xd5)]=!![];if(this[_0x270fdd(0x168)])this[_0x270fdd(0x168)][_0x270fdd(0xd5)]=!![];this[_0x270fdd(0x252)]['opacity']=0x0,this['_blackBgSprite'][_0x270fdd(0x1ef)]=0x0,_0x537866['clear'](),_0x2e96f7[_0x270fdd(0x1a7)]();}else return VisuMZ[_0x270fdd(0x1c5)][_0x270fdd(0x157)][_0x270fdd(0x211)][_0x270fdd(0x268)][_0x270fdd(0xcc)](this);}const _0x4a1ca7=0x0,_0x94d317=this['helpAreaTop'](),_0x14318a=Graphics[_0x270fdd(0x15b)],_0x405e87=this[_0x270fdd(0x1e0)]();return new Rectangle(_0x4a1ca7,_0x94d317,_0x14318a,_0x405e87);},Scene_CG_Gallery[_0x4cb2af(0xed)]['createCategoryWindow']=function(){const _0x5abfc4=_0x4cb2af,_0x17b41d=this[_0x5abfc4(0x26c)](),_0x2e7313=new Window_CG_Category(_0x17b41d);_0x2e7313[_0x5abfc4(0x2b4)](this[_0x5abfc4(0xfc)]),_0x2e7313[_0x5abfc4(0x250)](_0x5abfc4(0x2ae),this[_0x5abfc4(0x154)][_0x5abfc4(0x1df)](this)),_0x2e7313['setHandler'](_0x5abfc4(0x11e),this[_0x5abfc4(0x143)]['bind'](this)),this[_0x5abfc4(0x141)](_0x2e7313),this[_0x5abfc4(0x20e)]=_0x2e7313,_0x2e7313['setBackgroundType'](Scene_CG_Gallery[_0x5abfc4(0x277)]);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x26c)]=function(){const _0x2bd82c=_0x4cb2af;if(VisuMZ[_0x2bd82c(0x1c5)][_0x2bd82c(0x157)][_0x2bd82c(0x211)][_0x2bd82c(0xdb)])return VisuMZ[_0x2bd82c(0x1c5)][_0x2bd82c(0x157)]['Window'][_0x2bd82c(0xdb)][_0x2bd82c(0xcc)](this);const _0x57fcc7=Graphics['boxWidth'],_0xacc525=this[_0x2bd82c(0x181)](0x1,![]),_0x459c36=0x0,_0x4ad5b6=this[_0x2bd82c(0x10a)]();return new Rectangle(_0x459c36,_0x4ad5b6,_0x57fcc7,_0xacc525);},Scene_CG_Gallery['prototype'][_0x4cb2af(0x151)]=function(){const _0x3a8bc6=_0x4cb2af,_0x8e04ce=this['galleryWindowRect'](),_0x13c94=new Window_CG_Gallery(_0x8e04ce);_0x13c94['deactivate'](),_0x13c94[_0x3a8bc6(0x21b)](),this[_0x3a8bc6(0x20e)]['setGalleryWindow'](_0x13c94),_0x13c94[_0x3a8bc6(0x2b4)](this[_0x3a8bc6(0xfc)]),_0x13c94['setHandler'](_0x3a8bc6(0x15d),this[_0x3a8bc6(0x26e)][_0x3a8bc6(0x1df)](this)),_0x13c94[_0x3a8bc6(0x250)]('cancel',this[_0x3a8bc6(0x1f3)][_0x3a8bc6(0x1df)](this)),this[_0x3a8bc6(0x141)](_0x13c94),this['_galleryWindow']=_0x13c94,_0x13c94[_0x3a8bc6(0x289)](Scene_CG_Gallery[_0x3a8bc6(0x1d4)]);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x1d3)]=function(){const _0x16f1b2=_0x4cb2af;if(VisuMZ[_0x16f1b2(0x1c5)][_0x16f1b2(0x157)][_0x16f1b2(0x211)][_0x16f1b2(0x115)])return VisuMZ[_0x16f1b2(0x1c5)]['Settings'][_0x16f1b2(0x211)][_0x16f1b2(0x115)][_0x16f1b2(0xcc)](this);const _0x5d77b7=Graphics['boxWidth'],_0xf562dd=this[_0x16f1b2(0x266)]()-this['calcWindowHeight'](0x1,![]),_0x563a8e=0x0,_0x1dca1b=this[_0x16f1b2(0x10a)]()+this[_0x16f1b2(0x181)](0x1,![]);return new Rectangle(_0x563a8e,_0x1dca1b,_0x5d77b7,_0xf562dd);},Scene_CG_Gallery['prototype'][_0x4cb2af(0x1b8)]=function(){const _0x54dde3=_0x4cb2af;if(this[_0x54dde3(0x2a2)]){if(_0x54dde3(0x1b2)===_0x54dde3(0x219))_0x4de62f['CGGallery'][_0x54dde3(0x25c)][_0x54dde3(0xcc)](this),this['addCgGalleryCommand']();else return TextManager[_0x54dde3(0xd0)]('pageup',_0x54dde3(0x265));}else{if(_0x54dde3(0x196)!==_0x54dde3(0x11b))return Scene_MenuBase[_0x54dde3(0xed)][_0x54dde3(0x1b8)][_0x54dde3(0xcc)](this);else{const _0x1ab49f=_0x1bc014[_0x54dde3(0x160)]();_0x1ab49f[_0x54dde3(0x2b3)](this[_0x54dde3(0x26b)][_0x54dde3(0x1df)](this,_0x1ba659,_0x1ab49f,_0xe070bf,_0x5a3b5c));}}},Scene_CG_Gallery[_0x4cb2af(0xed)]['buttonAssistKey2']=function(){const _0x271c1e=_0x4cb2af;return this[_0x271c1e(0x2a2)]?TextManager[_0x271c1e(0x20f)]('shift'):Scene_MenuBase[_0x271c1e(0xed)][_0x271c1e(0x164)][_0x271c1e(0xcc)](this);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x24c)]=function(){const _0x548304=_0x4cb2af;return this[_0x548304(0x2a2)]?TextManager[_0x548304(0x20f)](_0x548304(0x132)):Scene_MenuBase['prototype'][_0x548304(0x24c)][_0x548304(0xcc)](this);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x161)]=function(){const _0x50ebed=_0x4cb2af;return this['_viewMode']?TextManager[_0x50ebed(0x138)][_0x50ebed(0x2bc)][_0x50ebed(0x1fd)]:Scene_MenuBase['prototype']['buttonAssistText1']['call'](this);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x248)]=function(){const _0x5082ab=_0x4cb2af;return this[_0x5082ab(0x2a2)]?_0x5082ab(0x1a1)!==_0x5082ab(0x1a1)?_0x520ccd['CGGallery']['Settings'][_0x5082ab(0x14a)][_0x5082ab(0xff)]:TextManager[_0x5082ab(0x138)][_0x5082ab(0x2bc)][_0x5082ab(0xce)]:_0x5082ab(0x16e)===_0x5082ab(0x169)?_0x2ef79a['cgGalleryHasUnlockedImage']()||_0x5e7e57[_0x5082ab(0x1c5)][_0x5082ab(0x213)]()['length']>0x0:Scene_MenuBase[_0x5082ab(0xed)][_0x5082ab(0x248)][_0x5082ab(0xcc)](this);},Scene_CG_Gallery['prototype'][_0x4cb2af(0x27d)]=function(){const _0x3c89ce=_0x4cb2af;return this['_viewMode']?TextManager['CG_GALLERY'][_0x3c89ce(0x2bc)][_0x3c89ce(0x1a6)]:Scene_MenuBase[_0x3c89ce(0xed)][_0x3c89ce(0x27d)]['call'](this);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0xcf)]=function(){const _0x19423b=_0x4cb2af;if(this[_0x19423b(0x2a2)]){if(_0x19423b(0x259)===_0x19423b(0x1dd)){const _0x1824fb=this[_0x19423b(0xd7)];_0x1824fb[_0x19423b(0x27b)][_0x19423b(0x1a7)]();const _0x2ef7d0=this['commandStyleCheck'](this['index']());if(_0x2ef7d0===_0x19423b(0x12b)){const _0x55f005=this[_0x19423b(0x109)](this[_0x19423b(0x1e9)]());let _0x26ec97=this[_0x19423b(0x25b)](this['index']());_0x26ec97=_0x26ec97[_0x19423b(0x182)](/\\I\[(\d+)\]/gi,''),_0x1824fb[_0x19423b(0x139)](),this['commandNameWindowDrawBackground'](_0x26ec97,_0x55f005),this[_0x19423b(0x21d)](_0x26ec97,_0x55f005),this[_0x19423b(0x1a8)](_0x26ec97,_0x55f005);}}else{if(this['_variationIndex']>=this[_0x19423b(0x28d)][_0x19423b(0x23d)]-0x1){if(_0x19423b(0xf4)!==_0x19423b(0x16a))return TextManager[_0x19423b(0x138)][_0x19423b(0x2bc)][_0x19423b(0x1f7)];else{const _0x14deb8=_0x4ffe36[_0x19423b(0x176)]/_0x270e1d['bitmap'][_0x19423b(0x176)],_0xaa7b24=_0x31da6e[_0x19423b(0x13b)]/_0x1463dc['bitmap'][_0x19423b(0x13b)],_0x4e4442=_0x3bd552[_0x19423b(0x1bb)](_0x14deb8,_0xaa7b24,0x1);_0x22f56c['scale']['x']=_0x4e4442,_0xac3187[_0x19423b(0x267)]['y']=_0x4e4442;}}else{if(_0x19423b(0x1c2)!=='vyfrP')return TextManager[_0x19423b(0x138)][_0x19423b(0x2bc)][_0x19423b(0x2c7)];else this[_0x19423b(0x285)]={'shown':_0x16b274[_0x19423b(0x1c5)][_0x19423b(0x157)]['MainMenu'][_0x19423b(0x180)],'enabled':_0x412ab5['CGGallery'][_0x19423b(0x157)][_0x19423b(0x184)][_0x19423b(0x245)]};}}}else return Scene_MenuBase[_0x19423b(0xed)][_0x19423b(0xcf)]['call'](this);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0xe6)]=function(){const _0x29520a=_0x4cb2af;if(this[_0x29520a(0x2a2)]){if(this['_variationIndex']<=0x0){if('gjIjZ'===_0x29520a(0x128))return TextManager[_0x29520a(0x138)][_0x29520a(0x2bc)]['gallery'];else _0x58e844=_0x29520a(0x15c)['format'](_0x5f41c2,_0x3f35a9);}else{if(_0x29520a(0x237)==='oOqRd')return TextManager['CG_GALLERY'][_0x29520a(0x2bc)][_0x29520a(0x1ab)];else{if(_0x287ccb[_0x29520a(0x10d)](_0x44c2c8,!![]))_0x157ce9+=0x1;}}}else{if(_0x29520a(0x2b0)==='ODMRv')return Scene_MenuBase[_0x29520a(0xed)][_0x29520a(0xe6)]['call'](this);else this['initialize'](...arguments);}},Scene_CG_Gallery['prototype'][_0x4cb2af(0xd8)]=function(){const _0x2efdbe=_0x4cb2af;Scene_MenuBase[_0x2efdbe(0xed)][_0x2efdbe(0xd8)][_0x2efdbe(0xcc)](this),this[_0x2efdbe(0x158)](this[_0x2efdbe(0x234)]()),this[_0x2efdbe(0x1a4)](),this[_0x2efdbe(0x26d)](),this[_0x2efdbe(0x29d)]();},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x234)]=function(){const _0x4a1a68=_0x4cb2af;return VisuMZ['CGGallery'][_0x4a1a68(0x157)][_0x4a1a68(0x14a)][_0x4a1a68(0xff)];},Scene_CG_Gallery[_0x4cb2af(0xed)]['createCustomBackgroundImages']=function(){const _0x572ab4=_0x4cb2af,_0x16d885=VisuMZ[_0x572ab4(0x1c5)][_0x572ab4(0x157)][_0x572ab4(0x14a)];_0x16d885&&(_0x16d885['BgFilename1']!==''||_0x16d885[_0x572ab4(0x299)]!=='')&&(_0x572ab4(0x293)!==_0x572ab4(0x293)?this[_0x572ab4(0x16c)](_0x306e88,_0x34520b['x'],_0x6c6a97['y'],_0x352255):(this[_0x572ab4(0x12e)]=new Sprite(ImageManager[_0x572ab4(0xf3)](_0x16d885[_0x572ab4(0x1d1)])),this['_backSprite2']=new Sprite(ImageManager[_0x572ab4(0x13a)](_0x16d885[_0x572ab4(0x299)])),this['addChild'](this['_backSprite1']),this[_0x572ab4(0x166)](this[_0x572ab4(0x279)]),this[_0x572ab4(0x12e)][_0x572ab4(0x1a5)][_0x572ab4(0x2b3)](this[_0x572ab4(0x1bf)][_0x572ab4(0x1df)](this,this[_0x572ab4(0x12e)])),this['_backSprite2'][_0x572ab4(0x1a5)][_0x572ab4(0x2b3)](this[_0x572ab4(0x1bf)][_0x572ab4(0x1df)](this,this['_backSprite2']))));},Scene_CG_Gallery[_0x4cb2af(0xed)]['createBlackBackgroundImage']=function(){const _0x5cfb0e=_0x4cb2af;this[_0x5cfb0e(0x16b)]=new Sprite(),this[_0x5cfb0e(0x166)](this['_blackBgSprite']),this[_0x5cfb0e(0x16b)]['bitmap']=new Bitmap(0x1,0x1),this[_0x5cfb0e(0x16b)]['bitmap'][_0x5cfb0e(0x111)](0x0,0x0,0x1,0x1,'black'),this[_0x5cfb0e(0x16b)]['scale']['x']=Graphics['width'],this[_0x5cfb0e(0x16b)][_0x5cfb0e(0x267)]['y']=Graphics[_0x5cfb0e(0x13b)],this[_0x5cfb0e(0x16b)][_0x5cfb0e(0x1ef)]=0x0;},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x29d)]=function(){const _0x38645a=_0x4cb2af,_0x5c1e4f=new Sprite();_0x5c1e4f[_0x38645a(0x1a5)]=new Bitmap(0x64,0x64),_0x5c1e4f[_0x38645a(0x1ef)]=0x0,this['_viewSprite']=_0x5c1e4f,this[_0x38645a(0x166)](_0x5c1e4f),this['adjustSpriteDown'](_0x5c1e4f);},Scene_CG_Gallery['prototype']['adjustSprite']=function(_0x1f5adb){const _0x2db8bd=_0x4cb2af;this[_0x2db8bd(0x21a)](_0x1f5adb),this['centerSprite'](_0x1f5adb);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x263)]=function(_0x569dff){const _0x2e88c6=_0x4cb2af;this['scaleSpriteDown'](_0x569dff),this[_0x2e88c6(0x1e6)](_0x569dff);},Scene_CG_Gallery['prototype'][_0x4cb2af(0x253)]=function(_0x45ddb6){const _0x266f9c=_0x4cb2af,_0x47c6e1=Graphics[_0x266f9c(0x176)]/_0x45ddb6[_0x266f9c(0x1a5)]['width'],_0x17c200=Graphics[_0x266f9c(0x13b)]/_0x45ddb6[_0x266f9c(0x1a5)][_0x266f9c(0x13b)],_0x458cfc=Math[_0x266f9c(0x1bb)](_0x47c6e1,_0x17c200,0x1);_0x45ddb6[_0x266f9c(0x267)]['x']=_0x458cfc,_0x45ddb6[_0x266f9c(0x267)]['y']=_0x458cfc;},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x154)]=function(){const _0x2c1914=_0x4cb2af;this[_0x2c1914(0x20e)][_0x2c1914(0x185)](),this[_0x2c1914(0x1f1)]['activate'](),this[_0x2c1914(0x1f1)][_0x2c1914(0x1d8)](),this['_galleryWindow']['index']()<0x0&&this[_0x2c1914(0x1f1)]['select'](0x0);},Scene_CG_Gallery[_0x4cb2af(0xed)]['onCategoryCancel']=function(){const _0x5bf5cb=_0x4cb2af;this['_categoryWindow'][_0x5bf5cb(0x1ed)](),this[_0x5bf5cb(0x1f1)][_0x5bf5cb(0x185)]();},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x26e)]=function(){const _0x3d6077=_0x4cb2af,_0x32e147=this[_0x3d6077(0x1f1)]['currentExt']();if(!_0x32e147){this[_0x3d6077(0x1f1)][_0x3d6077(0x1ed)]();return;}this[_0x3d6077(0x28d)]=[_0x32e147[_0x3d6077(0x223)]];for(const _0xa5d16c of _0x32e147[_0x3d6077(0x1aa)]){if(_0xa5d16c[_0x3d6077(0x18d)]()[_0x3d6077(0xe1)]()===_0x3d6077(0x26f))continue;if(_0xa5d16c['trim']()==='')continue;$gameSystem[_0x3d6077(0x10d)](_0xa5d16c,!![])&&(_0x3d6077(0x148)!==_0x3d6077(0x2c4)?this[_0x3d6077(0x28d)][_0x3d6077(0x1a2)](_0xa5d16c):this['drawTextEx'](_0x349681,_0x36516b['x']+_0x5f5961[_0x3d6077(0x176)]-_0x140c94,_0x90c4be['y'],_0x3acb22));}this[_0x3d6077(0x252)]['bitmap']=ImageManager['loadPicture'](_0x32e147['Filename']),this[_0x3d6077(0x252)]['bitmap'][_0x3d6077(0x2b3)](this[_0x3d6077(0x1ec)][_0x3d6077(0x1df)](this)),Input[_0x3d6077(0x1a7)](),TouchInput[_0x3d6077(0x1a7)]();},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x1ec)]=function(){const _0x2fff56=_0x4cb2af;this['_viewMode']=!![],this[_0x2fff56(0xe0)]=0x0,this[_0x2fff56(0x19b)]=!![],this[_0x2fff56(0xfc)][_0x2fff56(0x239)](),this['_categoryWindow'][_0x2fff56(0x239)](),this[_0x2fff56(0x1f1)]['hide'](),this[_0x2fff56(0x263)](this[_0x2fff56(0x252)]),this[_0x2fff56(0x252)][_0x2fff56(0x1ef)]=0xff,this[_0x2fff56(0x16b)][_0x2fff56(0x1ef)]=0xff;},Scene_CG_Gallery['prototype']['exitViewMode']=function(){const _0x54467d=_0x4cb2af;this[_0x54467d(0x2a2)]=![],this[_0x54467d(0xe0)]=0x0,this[_0x54467d(0x19b)]=![],this[_0x54467d(0x251)](),this['_helpWindow'][_0x54467d(0x29c)](),this[_0x54467d(0x20e)][_0x54467d(0x29c)](),this[_0x54467d(0x1f1)][_0x54467d(0x29c)](),this['_galleryWindow'][_0x54467d(0x1ed)]();if(this[_0x54467d(0x2bb)])this[_0x54467d(0x2bb)][_0x54467d(0xd5)]=!![];if(this[_0x54467d(0x168)])this[_0x54467d(0x168)][_0x54467d(0xd5)]=!![];this[_0x54467d(0x252)][_0x54467d(0x1ef)]=0x0,this['_blackBgSprite']['opacity']=0x0,Input['clear'](),TouchInput[_0x54467d(0x1a7)]();},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x1b1)]=function(){const _0x4dbee2=_0x4cb2af,_0x34074b=0x14;if(Input['isRepeated'](_0x4dbee2(0x11e)))this[_0x4dbee2(0x152)]();else{if(Input['isRepeated']('ok'))this[_0x4dbee2(0x102)]();else{if(Input[_0x4dbee2(0x28a)](_0x4dbee2(0x132))){if('iagpT'===_0x4dbee2(0x1d6))this[_0x4dbee2(0x12d)]();else{const _0x457fae=this[_0x4dbee2(0x1d3)](),_0xe9f45c=new _0x240cf7(_0x457fae);_0xe9f45c[_0x4dbee2(0x185)](),_0xe9f45c[_0x4dbee2(0x21b)](),this[_0x4dbee2(0x20e)][_0x4dbee2(0x282)](_0xe9f45c),_0xe9f45c[_0x4dbee2(0x2b4)](this[_0x4dbee2(0xfc)]),_0xe9f45c['setHandler'](_0x4dbee2(0x15d),this[_0x4dbee2(0x26e)][_0x4dbee2(0x1df)](this)),_0xe9f45c['setHandler'](_0x4dbee2(0x11e),this['onCategoryCancel'][_0x4dbee2(0x1df)](this)),this['addWindow'](_0xe9f45c),this[_0x4dbee2(0x1f1)]=_0xe9f45c,_0xe9f45c[_0x4dbee2(0x289)](_0x44951e['CG_WINDOW_BGTYPE']);}}else{if(Input[_0x4dbee2(0x28a)](_0x4dbee2(0x26a)))_0x4dbee2(0x1ae)!=='mNntL'?(_0x4101cc[_0x4dbee2(0x209)](),this[_0x4dbee2(0x19b)]=!this['_viewModeVisible'],this['_buttonAssistWindow']&&(this[_0x4dbee2(0x2bb)][_0x4dbee2(0xd5)]=this['_viewModeVisible']),this[_0x4dbee2(0x168)]&&(this[_0x4dbee2(0x168)]['visible']=this[_0x4dbee2(0x19b)]),this['_pageupButton']&&this[_0x4dbee2(0x197)]&&(this[_0x4dbee2(0x1ee)][_0x4dbee2(0xd5)]=this[_0x4dbee2(0x19b)],this[_0x4dbee2(0x197)][_0x4dbee2(0xd5)]=this[_0x4dbee2(0x19b)])):this[_0x4dbee2(0x21e)]();else{if(Input[_0x4dbee2(0x28a)](_0x4dbee2(0x287))||TouchInput[_0x4dbee2(0x14c)]<=-_0x34074b)'fFUeo'===_0x4dbee2(0x2af)?(_0xe270fd['ConvertParams'](_0x2958df,_0x5bf4ed),_0x2bca4b[_0x4dbee2(0x20b)]=!![]):this[_0x4dbee2(0x1fb)](!![]);else{if(Input[_0x4dbee2(0x28a)]('pagedown')||TouchInput['wheelY']>=_0x34074b)this[_0x4dbee2(0x1fb)](![]);else{if(Input[_0x4dbee2(0x242)]>0x0)this[_0x4dbee2(0x24e)](Input[_0x4dbee2(0x242)]);else{if(TouchInput[_0x4dbee2(0x18e)]())_0x4dbee2(0x1b6)!==_0x4dbee2(0x1b6)?(this[_0x4dbee2(0x12e)]=new _0xcf2e17(_0x27eab4[_0x4dbee2(0xf3)](_0x39cc76[_0x4dbee2(0x1d1)])),this[_0x4dbee2(0x279)]=new _0x4d4553(_0x59e772[_0x4dbee2(0x13a)](_0x4bdf0b[_0x4dbee2(0x299)])),this[_0x4dbee2(0x166)](this[_0x4dbee2(0x12e)]),this[_0x4dbee2(0x166)](this[_0x4dbee2(0x279)]),this['_backSprite1'][_0x4dbee2(0x1a5)]['addLoadListener'](this[_0x4dbee2(0x1bf)][_0x4dbee2(0x1df)](this,this[_0x4dbee2(0x12e)])),this['_backSprite2'][_0x4dbee2(0x1a5)][_0x4dbee2(0x2b3)](this[_0x4dbee2(0x1bf)]['bind'](this,this['_backSprite2']))):this[_0x4dbee2(0xe3)]();else TouchInput['isReleased']()&&this[_0x4dbee2(0x1c8)]();}}}}}}}},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x152)]=function(){const _0x442caf=_0x4cb2af;if(this[_0x442caf(0xe0)]<=0x0){if(_0x442caf(0xf5)!=='CtdDN')return this[_0x442caf(0x28b)]=this['loadPicture'](_0x2ae45b[_0x442caf(0x138)][_0x442caf(0x15e)]),this[_0x442caf(0x28b)];else SoundManager[_0x442caf(0x17b)](),this['exitViewMode']();}else this[_0x442caf(0x228)](![]);},Scene_CG_Gallery[_0x4cb2af(0xed)]['processVariationChange']=function(_0x24b898){const _0xdb5a1c=_0x4cb2af,_0x284716=this[_0xdb5a1c(0xe0)];this[_0xdb5a1c(0xe0)]+=_0x24b898?0x1:-0x1,this['_variationIndex']=this['_variationIndex'][_0xdb5a1c(0x2b5)](0x0,this[_0xdb5a1c(0x28d)][_0xdb5a1c(0x23d)]-0x1);if(_0x284716!==this[_0xdb5a1c(0xe0)]){const _0x46d9c2=this[_0xdb5a1c(0x28d)][this[_0xdb5a1c(0xe0)]];this[_0xdb5a1c(0x252)][_0xdb5a1c(0x1a5)]=ImageManager['loadPicture'](_0x46d9c2),SoundManager[_0xdb5a1c(0x183)](),this[_0xdb5a1c(0x263)](this[_0xdb5a1c(0x252)]);}},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x102)]=function(){const _0x20c967=_0x4cb2af;this['_variationIndex']>=this[_0x20c967(0x28d)][_0x20c967(0x23d)]-0x1?(SoundManager[_0x20c967(0x17b)](),this[_0x20c967(0x101)]()):this[_0x20c967(0x228)](!![]);},Scene_CG_Gallery['prototype']['processViewModeReset']=function(){const _0x4f8d75=_0x4cb2af;SoundManager[_0x4f8d75(0x209)](),this[_0x4f8d75(0x263)](this[_0x4f8d75(0x252)]),this[_0x4f8d75(0x252)][_0x4f8d75(0x1ef)]=0xff,this[_0x4f8d75(0x16b)][_0x4f8d75(0x1ef)]=0xff;},Scene_CG_Gallery['prototype'][_0x4cb2af(0x21e)]=function(){const _0x58e594=_0x4cb2af;SoundManager[_0x58e594(0x209)](),this[_0x58e594(0x19b)]=!this[_0x58e594(0x19b)],this[_0x58e594(0x2bb)]&&(this[_0x58e594(0x2bb)][_0x58e594(0xd5)]=this[_0x58e594(0x19b)]),this[_0x58e594(0x168)]&&(this[_0x58e594(0x168)][_0x58e594(0xd5)]=this[_0x58e594(0x19b)]),this[_0x58e594(0x1ee)]&&this[_0x58e594(0x197)]&&(this[_0x58e594(0x1ee)][_0x58e594(0xd5)]=this[_0x58e594(0x19b)],this[_0x58e594(0x197)][_0x58e594(0xd5)]=this[_0x58e594(0x19b)]);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x1fb)]=function(_0xdd0dba){const _0xa4d62a=_0x4cb2af;let _0x291cb5=this[_0xa4d62a(0x252)][_0xa4d62a(0x267)]['x'];const _0x4326a7=_0x291cb5;_0x291cb5+=_0xdd0dba?0.1:-0.1,_0x291cb5=Number(_0x291cb5[_0xa4d62a(0x118)](0x1)),this[_0xa4d62a(0x252)][_0xa4d62a(0x267)]['x']=_0x291cb5['clamp'](0.1,0x4),this[_0xa4d62a(0x252)][_0xa4d62a(0x267)]['y']=_0x291cb5[_0xa4d62a(0x2b5)](0.1,0x4),_0x4326a7!==this['_viewSprite']['scale']['x']&&SoundManager[_0xa4d62a(0x146)]();},Scene_CG_Gallery['prototype'][_0x4cb2af(0x24e)]=function(_0x2a2f14){const _0x25a059=_0x4cb2af,_0x1554e8=Scene_CG_Gallery[_0x25a059(0x23c)];switch(_0x2a2f14){case 0x7:case 0x4:case 0x1:this[_0x25a059(0x252)]['x']-=_0x1554e8;break;case 0x9:case 0x6:case 0x3:this['_viewSprite']['x']+=_0x1554e8;break;}switch(_0x2a2f14){case 0x1:case 0x2:case 0x3:this['_viewSprite']['y']+=_0x1554e8;break;case 0x7:case 0x8:case 0x9:this['_viewSprite']['y']-=_0x1554e8;break;}this[_0x25a059(0x252)]['x']=this[_0x25a059(0x252)]['x']['clamp'](0x0,Graphics[_0x25a059(0x176)]),this[_0x25a059(0x252)]['y']=this[_0x25a059(0x252)]['y']['clamp'](0x0,Graphics[_0x25a059(0x13b)]);},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0xe3)]=function(){const _0x559246=_0x4cb2af,_0x439870=this[_0x559246(0x168)]?Math['round'](this[_0x559246(0x168)][_0x559246(0x176)]*1.3):0x0;TouchInput['x']>_0x439870&&TouchInput['x']<Graphics[_0x559246(0x176)]-_0x439870&&(TouchInput['y']>_0x439870&&TouchInput['y']<Graphics[_0x559246(0x13b)]-_0x439870&&(this['_viewSprite']['x']=TouchInput['x']['clamp'](0x0,Graphics[_0x559246(0x176)]),this['_viewSprite']['y']=TouchInput['y'][_0x559246(0x2b5)](0x0,Graphics[_0x559246(0x13b)])));},Scene_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x1c8)]=function(){const _0x589b44=_0x4cb2af,_0x566ed2=this[_0x589b44(0x168)]?Math[_0x589b44(0x1cd)](this[_0x589b44(0x168)][_0x589b44(0x176)]*1.05):0x0;TouchInput['x']>_0x566ed2&&TouchInput['x']<Graphics[_0x589b44(0x176)]-_0x566ed2&&((TouchInput['y']<_0x566ed2||TouchInput['y']>Graphics[_0x589b44(0x13b)]-_0x566ed2)&&this[_0x589b44(0x21e)]());},VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x200)]=Window_MenuCommand[_0x4cb2af(0xed)]['addOriginalCommands'],Window_MenuCommand[_0x4cb2af(0xed)][_0x4cb2af(0x12c)]=function(){const _0x135682=_0x4cb2af;VisuMZ[_0x135682(0x1c5)][_0x135682(0x200)]['call'](this),this[_0x135682(0x122)]();},Window_MenuCommand[_0x4cb2af(0xed)][_0x4cb2af(0x122)]=function(){const _0x5eb358=_0x4cb2af;if(!this[_0x5eb358(0x27e)]())return;if(!this[_0x5eb358(0x1c0)]())return;const _0x16bf35=TextManager['cgGalleryMenuCommand'],_0x2237ce=this[_0x5eb358(0x11d)]();this[_0x5eb358(0xd6)](_0x16bf35,_0x5eb358(0x27f),_0x2237ce);},Window_MenuCommand[_0x4cb2af(0xed)][_0x4cb2af(0x27e)]=function(){return Imported['VisuMZ_1_MainMenuCore']?![]:!![];},Window_MenuCommand[_0x4cb2af(0xed)][_0x4cb2af(0x1c0)]=function(){const _0x292ceb=_0x4cb2af;return $gameSystem[_0x292ceb(0x126)]();},Window_MenuCommand[_0x4cb2af(0xed)]['isCgGalleryCommandEnabled']=function(){const _0x1574e7=_0x4cb2af;return $gameSystem[_0x1574e7(0xd3)]();},Window_TitleCommand['CG_GALLERY_ADD_COMMAND']=VisuMZ['CGGallery'][_0x4cb2af(0x157)]['MainMenu']['ShowTitleCommand'],VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x25c)]=Window_TitleCommand[_0x4cb2af(0xed)][_0x4cb2af(0x205)],Window_TitleCommand['prototype'][_0x4cb2af(0x205)]=function(){const _0x41e6a3=_0x4cb2af;VisuMZ[_0x41e6a3(0x1c5)][_0x41e6a3(0x25c)]['call'](this),this[_0x41e6a3(0x122)]();},Window_TitleCommand['prototype']['addCgGalleryCommand']=function(){const _0x268b84=_0x4cb2af;if(!Window_TitleCommand[_0x268b84(0x2a3)])return;if(this[_0x268b84(0x117)]('cgGallery')>=0x0)return;const _0x12c753=TextManager[_0x268b84(0x206)],_0x5e9414=$gameSystem[_0x268b84(0x240)]();this[_0x268b84(0xd6)](_0x12c753,_0x268b84(0x27f),_0x5e9414);const _0x576698=this['findSymbol'](_0x268b84(0x2b8));if(_0x576698>0x0){const _0x4fb4cf=this[_0x268b84(0x116)][_0x268b84(0xf7)]();this[_0x268b84(0x116)]['splice'](_0x576698,0x0,_0x4fb4cf);}};function Window_CG_Category(){const _0x1d71b0=_0x4cb2af;this[_0x1d71b0(0x147)](...arguments);}Window_CG_Category[_0x4cb2af(0xed)]=Object[_0x4cb2af(0x2a5)](Window_HorzCommand[_0x4cb2af(0xed)]),Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x2a7)]=Window_CG_Category,Window_CG_Category[_0x4cb2af(0x173)]=VisuMZ['CGGallery'][_0x4cb2af(0x157)]['Categories'],Window_CG_Category['COMMAND_STYLE']=VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x1c1)],Window_CG_Category[_0x4cb2af(0x18a)]=VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x216)],Window_CG_Category[_0x4cb2af(0x120)]=VisuMZ[_0x4cb2af(0x1c5)]['Settings'][_0x4cb2af(0x211)][_0x4cb2af(0x10b)],Window_CG_Category[_0x4cb2af(0x1ce)]=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x257)],Window_CG_Category[_0x4cb2af(0xed)]['initialize']=function(_0xec1e93){const _0x569719=_0x4cb2af;Window_HorzCommand['prototype'][_0x569719(0x147)][_0x569719(0xcc)](this,_0xec1e93),this[_0x569719(0x153)](_0xec1e93);},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x2b2)]=function(){const _0x37520d=_0x4cb2af;return this[_0x37520d(0x270)]();},Window_CG_Category[_0x4cb2af(0xed)]['createCommandNameWindow']=function(_0x546967){const _0x22c1db=_0x4cb2af,_0xdf4c79=new Rectangle(0x0,0x0,_0x546967[_0x22c1db(0x176)],_0x546967[_0x22c1db(0x13b)]);this[_0x22c1db(0xd7)]=new Window_Base(_0xdf4c79),this[_0x22c1db(0xd7)]['opacity']=0x0,this['addChild'](this[_0x22c1db(0xd7)]),this[_0x22c1db(0x15f)]();},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x220)]=function(){const _0x15cb21=_0x4cb2af;Window_HorzCommand[_0x15cb21(0xed)][_0x15cb21(0x220)][_0x15cb21(0xcc)](this);if(this[_0x15cb21(0xd7)])this['updateCommandNameWindow']();},Window_CG_Category[_0x4cb2af(0xed)]['updateCommandNameWindow']=function(){const _0x3590a9=_0x4cb2af,_0x283a3=this['_commandNameWindow'];_0x283a3[_0x3590a9(0x27b)][_0x3590a9(0x1a7)]();const _0x571e06=this[_0x3590a9(0x16d)](this[_0x3590a9(0x1e9)]());if(_0x571e06===_0x3590a9(0x12b)){if(_0x3590a9(0x1e7)===_0x3590a9(0xfa)){const _0x129313=new _0x389df9();_0x129313[_0x3590a9(0x1a5)]=new _0xf87db1(0x64,0x64),_0x129313[_0x3590a9(0x1ef)]=0x0,this[_0x3590a9(0x252)]=_0x129313,this[_0x3590a9(0x166)](_0x129313),this[_0x3590a9(0x263)](_0x129313);}else{const _0x57ca5c=this[_0x3590a9(0x109)](this[_0x3590a9(0x1e9)]());let _0x300688=this[_0x3590a9(0x25b)](this[_0x3590a9(0x1e9)]());_0x300688=_0x300688[_0x3590a9(0x182)](/\\I\[(\d+)\]/gi,''),_0x283a3[_0x3590a9(0x139)](),this[_0x3590a9(0x187)](_0x300688,_0x57ca5c),this[_0x3590a9(0x21d)](_0x300688,_0x57ca5c),this[_0x3590a9(0x1a8)](_0x300688,_0x57ca5c);}}},Window_CG_Category[_0x4cb2af(0xed)]['commandNameWindowDrawBackground']=function(_0x5aac00,_0x20ae5e){},Window_CG_Category['prototype'][_0x4cb2af(0x21d)]=function(_0xc87d61,_0x365afc){const _0x404c82=_0x4cb2af,_0x207062=this['_commandNameWindow'];_0x207062[_0x404c82(0x25f)](_0xc87d61,0x0,_0x365afc['y'],_0x207062['innerWidth'],_0x404c82(0x17e));},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x1a8)]=function(_0x146c33,_0x521437){const _0x1763de=_0x4cb2af,_0x9b38d9=this[_0x1763de(0xd7)],_0x5a0393=$gameSystem[_0x1763de(0x1e2)](),_0x5077df=_0x521437['x']+Math[_0x1763de(0x25d)](_0x521437['width']/0x2)+_0x5a0393;_0x9b38d9['x']=_0x9b38d9['width']/-0x2+_0x5077df,_0x9b38d9['y']=Math[_0x1763de(0x25d)](_0x521437['height']/0x2);},Window_CG_Category['prototype'][_0x4cb2af(0x296)]=function(){const _0x4cb0bb=_0x4cb2af;let _0x25a81c=Window_CG_Category[_0x4cb0bb(0x173)][_0x4cb0bb(0x23d)];if(Window_CG_Category['ADD_ALL_COMMAND'])_0x25a81c+=0x1;if(VisuMZ[_0x4cb0bb(0x1c5)][_0x4cb0bb(0x1b7)]())_0x25a81c+=0x1;return _0x25a81c;},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x205)]=function(){const _0x10912f=_0x4cb2af;this[_0x10912f(0x260)](),this[_0x10912f(0x1dc)](),this[_0x10912f(0xfe)]();},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x260)]=function(){const _0x5f4abf=_0x4cb2af;if(!Window_CG_Category[_0x5f4abf(0x120)])return;const _0x5903f2='category',_0x4acdd0=ImageManager[_0x5f4abf(0x138)]['icons'][_0x5f4abf(0x13d)];let _0x3cb1cd=TextManager[_0x5f4abf(0x138)][_0x5f4abf(0x2ae)][_0x5f4abf(0x13d)];_0x4acdd0>0x0&&this[_0x5f4abf(0x280)]()!==_0x5f4abf(0x25e)&&(_0x3cb1cd=_0x5f4abf(0x15c)[_0x5f4abf(0x2a4)](_0x4acdd0,_0x3cb1cd));const _0x468e77={'Key':_0x5f4abf(0x13d),'Description':TextManager['CG_GALLERY']['helpDesc'][_0x5f4abf(0x13d)]};this['addCommand'](_0x3cb1cd,_0x5903f2,!![],_0x468e77);},Window_CG_Category[_0x4cb2af(0xed)]['addCommandListCommands']=function(){const _0xa82bc8=_0x4cb2af;for(const _0x5cefa8 of Window_CG_Category[_0xa82bc8(0x173)]){if('RppCR'!==_0xa82bc8(0x178)){const _0x2bd977='category',_0x4b995b=_0x5cefa8[_0xa82bc8(0x1e8)];let _0xfb92a8=_0x5cefa8[_0xa82bc8(0x20c)];if(['',_0xa82bc8(0xe9)][_0xa82bc8(0x105)](_0xfb92a8))continue;_0x4b995b>0x0&&this[_0xa82bc8(0x280)]()!=='text'&&(_0xfb92a8='\x5cI[%1]%2'[_0xa82bc8(0x2a4)](_0x4b995b,_0xfb92a8)),this[_0xa82bc8(0xd6)](_0xfb92a8,_0x2bd977,!![],_0x5cefa8);}else _0x26e76e[_0xa82bc8(0xed)]['drawItem']['call'](this,_0x54c6a0);}},Window_CG_Category[_0x4cb2af(0xed)]['addUnlistedCommand']=function(){const _0x963afc=_0x4cb2af;if(!Window_CG_Category[_0x963afc(0x1ce)])return;if(!VisuMZ[_0x963afc(0x1c5)][_0x963afc(0x1b7)]())return;const _0x556503=_0x963afc(0x2ae),_0x744694=ImageManager[_0x963afc(0x138)][_0x963afc(0x1a9)][_0x963afc(0x1b4)];let _0x33631e=TextManager[_0x963afc(0x138)][_0x963afc(0x2ae)][_0x963afc(0x1b4)];_0x744694>0x0&&this[_0x963afc(0x280)]()!=='text'&&(_0x963afc(0x256)!==_0x963afc(0x256)?(_0x5efeb8[_0x963afc(0x1c5)]['Scene_Title_createCommandWindow'][_0x963afc(0xcc)](this),this[_0x963afc(0x106)][_0x963afc(0x250)](_0x963afc(0x27f),this[_0x963afc(0x107)]['bind'](this))):_0x33631e=_0x963afc(0x15c)['format'](_0x744694,_0x33631e));const _0x1209b6={'Key':_0x963afc(0x13d),'Description':TextManager[_0x963afc(0x138)]['helpDesc'][_0x963afc(0x1b4)]};this[_0x963afc(0xd6)](_0x33631e,_0x556503,!![],_0x1209b6);},Window_CG_Category['prototype'][_0x4cb2af(0xef)]=function(){const _0x38aa7a=_0x4cb2af;this['_helpWindow'][_0x38aa7a(0x1bd)](this['currentExt']()?this['currentExt']()[_0x38aa7a(0x12a)]:''),this[_0x38aa7a(0x2ba)]();},Window_CG_Category[_0x4cb2af(0xed)]['itemTextAlign']=function(){const _0x315380=_0x4cb2af;return Window_CG_Category[_0x315380(0x18a)];},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x214)]=function(_0x464226){const _0x171b7d=_0x4cb2af,_0x5a434e=this[_0x171b7d(0x16d)](_0x464226);if(_0x5a434e===_0x171b7d(0x1fe))this['drawItemStyleIconText'](_0x464226);else{if(_0x5a434e===_0x171b7d(0x12b)){if(_0x171b7d(0x2a6)===_0x171b7d(0x2a6))this[_0x171b7d(0x19e)](_0x464226);else{if(_0x18e3d1[_0x171b7d(0x2bd)]['includes'](_0x305d4e))return;_0x3f1ba6['cgGalleryUnlocks'][_0x171b7d(0x1a2)](_0x376c8e),_0x14486c['cgGalleryUnlocks'][_0x171b7d(0x2ab)](),_0x1c7c6f['save']();}}else Window_HorzCommand[_0x171b7d(0xed)][_0x171b7d(0x214)][_0x171b7d(0xcc)](this,_0x464226);}},Window_CG_Category['prototype'][_0x4cb2af(0x280)]=function(){const _0x5abb41=_0x4cb2af;return Window_CG_Category[_0x5abb41(0x1b0)];},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x16d)]=function(_0x1990b6){const _0x5a628d=_0x4cb2af;if(_0x1990b6<0x0)return _0x5a628d(0x25e);const _0x2b9863=this[_0x5a628d(0x280)]();if(_0x2b9863!==_0x5a628d(0x274)){if(_0x5a628d(0x165)!==_0x5a628d(0x2aa))return _0x2b9863;else(_0x489962['y']<_0x466a6b||_0x4d269d['y']>_0x4a499[_0x5a628d(0x13b)]-_0x15a079)&&this['processViewModeBorderless']();}else{if(this['maxItems']()>0x0){const _0x3d8a1a=this[_0x5a628d(0x25b)](_0x1990b6);if(_0x3d8a1a[_0x5a628d(0x243)](/\\I\[(\d+)\]/i)){if(_0x5a628d(0x244)===_0x5a628d(0x188)){const _0x135a3d=_0x5ef75a[_0x5a628d(0x1b9)]['toLowerCase']()[_0x5a628d(0xe1)]();this[_0x5a628d(0x167)]['push'](_0x135a3d);}else{const _0x947c1c=this[_0x5a628d(0x109)](_0x1990b6),_0x397f49=this['textSizeEx'](_0x3d8a1a)[_0x5a628d(0x176)];if(_0x397f49<=_0x947c1c[_0x5a628d(0x176)]){if(_0x5a628d(0x2c1)!==_0x5a628d(0x23f))return _0x5a628d(0x1fe);else{const _0x29baf7=this['maxCols'](),_0xa17b=_0x563095['MAXROW']-0x1,_0x260eaa=this[_0x5a628d(0xe8)](),_0x4a33fa=this[_0x5a628d(0x2b2)](),_0x1944f4=this[_0x5a628d(0x13f)](),_0x43e029=this['rowSpacing'](),_0x2693a5=_0x3f6acb%_0x29baf7,_0x14da15=_0x342123['floor'](_0xbc0eec/_0x29baf7),_0x3b831a=this[_0x5a628d(0x235)](),_0x3d6fc6=_0x218dab['STAGGER_FULL'],_0x4a9424=_0x14da15-_0x3b831a;let _0x2502bf=0x0;_0x293708[_0x5a628d(0xf0)]?_0x2502bf=_0x55bbcd[_0x5a628d(0x25d)]((_0xa17b-_0x4a9424)/_0xa17b*_0x3d6fc6):_0x2502bf=_0xd3a15['floor'](_0x4a9424/_0xa17b*_0x3d6fc6);const _0x38e516=_0x2693a5*_0x260eaa+_0x1944f4/0x2-this[_0x5a628d(0xda)]()+_0x2502bf,_0x5d281a=_0x14da15*_0x4a33fa+_0x43e029/0x2-this[_0x5a628d(0xf8)](),_0x284405=_0x260eaa-_0x1944f4,_0x305c9d=_0x4a33fa-_0x43e029;return new _0x52e314(_0x38e516,_0x5d281a,_0x284405,_0x305c9d);}}else{if('VWugz'===_0x5a628d(0x1b3)){const _0x5c844a=this[_0x5a628d(0x168)]?_0x5bbc51[_0x5a628d(0x1cd)](this['_cancelButton'][_0x5a628d(0x176)]*1.05):0x0;_0x2adecc['x']>_0x5c844a&&_0x177558['x']<_0x215f51['width']-_0x5c844a&&((_0x3e9968['y']<_0x5c844a||_0x570ff8['y']>_0x2b6df9[_0x5a628d(0x13b)]-_0x5c844a)&&this['processViewModeBorderless']());}else return _0x5a628d(0x12b);}}}}}return _0x5a628d(0x25e);},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x145)]=function(_0x1b9ffe){const _0x771775=_0x4cb2af,_0x2ba9c5=this['itemLineRect'](_0x1b9ffe),_0x1999d4=this[_0x771775(0x25b)](_0x1b9ffe),_0x29c814=this[_0x771775(0x29e)](_0x1999d4)[_0x771775(0x176)];this[_0x771775(0x1f9)](this[_0x771775(0x186)](_0x1b9ffe));const _0x58e4f1=this[_0x771775(0x112)]();if(_0x58e4f1===_0x771775(0x134))this[_0x771775(0x16c)](_0x1999d4,_0x2ba9c5['x']+_0x2ba9c5[_0x771775(0x176)]-_0x29c814,_0x2ba9c5['y'],_0x29c814);else{if(_0x58e4f1===_0x771775(0x17e)){const _0x4728e9=_0x2ba9c5['x']+Math[_0x771775(0x25d)]((_0x2ba9c5[_0x771775(0x176)]-_0x29c814)/0x2);this[_0x771775(0x16c)](_0x1999d4,_0x4728e9,_0x2ba9c5['y'],_0x29c814);}else _0x771775(0x24d)!==_0x771775(0x24d)?_0x3828fa[_0x771775(0x146)]():this['drawTextEx'](_0x1999d4,_0x2ba9c5['x'],_0x2ba9c5['y'],_0x29c814);}},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x19e)]=function(_0x263943){const _0x54108d=_0x4cb2af;this[_0x54108d(0x25b)](_0x263943)[_0x54108d(0x243)](/\\I\[(\d+)\]/i);const _0x1ddb47=Number(RegExp['$1'])||0x0,_0x58089b=this[_0x54108d(0x109)](_0x263943),_0x566eec=_0x58089b['x']+Math[_0x54108d(0x25d)]((_0x58089b['width']-ImageManager[_0x54108d(0x13c)])/0x2),_0x475cfe=_0x58089b['y']+(_0x58089b[_0x54108d(0x13b)]-ImageManager['iconHeight'])/0x2;this[_0x54108d(0x14e)](_0x1ddb47,_0x566eec,_0x475cfe);},Window_CG_Category[_0x4cb2af(0xed)]['setGalleryWindow']=function(_0x6e9081){const _0x18a7f9=_0x4cb2af;this[_0x18a7f9(0x1f1)]=_0x6e9081,this[_0x18a7f9(0x2ba)]();},Window_CG_Category[_0x4cb2af(0xed)][_0x4cb2af(0x2ba)]=function(){const _0x19e3df=_0x4cb2af;if(!this[_0x19e3df(0x1f1)])return;const _0x4cdbf4=this[_0x19e3df(0x18c)]()[_0x19e3df(0x1b9)][_0x19e3df(0x18d)]()['trim']();this['_galleryWindow']['setCategory'](_0x4cdbf4);};function Window_CG_Gallery(){const _0x3d6306=_0x4cb2af;this[_0x3d6306(0x147)](...arguments);}Window_CG_Gallery['prototype']=Object[_0x4cb2af(0x2a5)](Window_Command[_0x4cb2af(0xed)]),Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x2a7)]=Window_CG_Gallery,Window_CG_Gallery[_0x4cb2af(0xf9)]=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Window']['GalleryWindow_MaxCols'],Window_CG_Gallery['MAXROW']=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x20d)],Window_CG_Gallery[_0x4cb2af(0x2bf)]=VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x2b6)],Window_CG_Gallery[_0x4cb2af(0x18f)]=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)]['GalleryWindow_SpacingRows'],Window_CG_Gallery['IMG_BUFFER']=VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)]['GalleryWindow_ImageBuffer'],Window_CG_Gallery['STAGGER_FULL']=VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x204)],Window_CG_Gallery[_0x4cb2af(0xf0)]=VisuMZ['CGGallery']['Settings'][_0x4cb2af(0x211)]['GalleryWindow_StaggerToLeft'],Window_CG_Gallery[_0x4cb2af(0x2c8)]=VisuMZ[_0x4cb2af(0x1c5)]['Settings'][_0x4cb2af(0x211)]['GalleryWindow_ListingBack'],Window_CG_Gallery[_0x4cb2af(0xd1)]={'show':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Window']['GalleryWindow_Text_VariationsShow'],'hideForSingles':!VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x1f8)],'xAlign':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x272)],'yAlign':VisuMZ['CGGallery']['Settings'][_0x4cb2af(0x211)][_0x4cb2af(0x172)],'variantComplete':VisuMZ[_0x4cb2af(0x1c5)]['Settings'][_0x4cb2af(0x2b7)][_0x4cb2af(0x1ad)],'textFmt':VisuMZ['CGGallery']['Settings']['Vocab']['GalleryWindow_Text_VariationFmt']},Window_CG_Gallery['COMPLETION_SPRITE']={'show':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Window'][_0x4cb2af(0x190)],'text':VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x2b7)][_0x4cb2af(0x104)],'percentFmt':VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x2b7)][_0x4cb2af(0x203)],'decimals':VisuMZ[_0x4cb2af(0x1c5)]['Settings'][_0x4cb2af(0x211)][_0x4cb2af(0x191)],'fontFace':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x171)],'fontSize1':VisuMZ['CGGallery']['Settings'][_0x4cb2af(0x211)]['GalleryWindow_Text_CompletionFontSize1'],'fontSize2':VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x230)],'offset':{'x':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)]['GalleryWindow_Text_CompletionOffsetX'],'y':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)]['GalleryWindow_Text_CompletionOffsetY']},'angle':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x2c2)]},Window_CG_Gallery['PROGRESS_SPRITE']={'show':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x20a)],'text':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x2b7)][_0x4cb2af(0x283)],'percentFmt':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x2b7)][_0x4cb2af(0x226)],'decimals':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x23a)],'fontFace':VisuMZ[_0x4cb2af(0x1c5)]['Settings'][_0x4cb2af(0x211)]['GalleryWindow_Text_ProgressFontFace'],'fontSize1':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Window'][_0x4cb2af(0xf2)],'fontSize2':VisuMZ['CGGallery']['Settings'][_0x4cb2af(0x211)][_0x4cb2af(0x22e)],'offset':{'x':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x1bc)],'y':VisuMZ[_0x4cb2af(0x1c5)][_0x4cb2af(0x157)]['Window'][_0x4cb2af(0x170)]},'angle':VisuMZ['CGGallery'][_0x4cb2af(0x157)][_0x4cb2af(0x211)][_0x4cb2af(0x269)]},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x147)]=function(_0x35cfa3){const _0x57e8da=_0x4cb2af;this['_category']='',Window_Command[_0x57e8da(0xed)][_0x57e8da(0x147)][_0x57e8da(0xcc)](this,_0x35cfa3),this[_0x57e8da(0x11a)](),this[_0x57e8da(0x2b1)]();},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0xe8)]=function(){const _0x4a616d=_0x4cb2af;if(this[_0x4a616d(0x21f)]!==undefined)return this[_0x4a616d(0x21f)];const _0x5cc935=(this[_0x4a616d(0x2b9)]-Window_CG_Gallery['STAGGER_FULL'])/this['maxCols']();return this[_0x4a616d(0x21f)]=Math[_0x4a616d(0x25d)](_0x5cc935),this[_0x4a616d(0x21f)];},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x2b2)]=function(){const _0x5b8ed6=_0x4cb2af;if(this['_itemHeight']!==undefined)return this[_0x5b8ed6(0x10f)];const _0x468721=this[_0x5b8ed6(0x1de)]/Window_CG_Gallery[_0x5b8ed6(0x276)];return this[_0x5b8ed6(0x10f)]=Math[_0x5b8ed6(0xde)](_0x468721),this[_0x5b8ed6(0x10f)];},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x13f)]=function(){const _0x3ac689=_0x4cb2af;return Window_CG_Gallery[_0x3ac689(0x2bf)];},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x1be)]=function(){const _0x3ace40=_0x4cb2af;return Window_CG_Gallery[_0x3ace40(0x18f)];},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x296)]=function(){const _0x42676d=_0x4cb2af;return Window_CG_Gallery[_0x42676d(0xf9)];},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x163)]=function(_0xec3905){const _0x3b7699=_0x4cb2af,_0x3f5d1d=this[_0x3b7699(0x296)](),_0x42c541=Window_CG_Gallery[_0x3b7699(0x276)]-0x1,_0x2452a2=this[_0x3b7699(0xe8)](),_0x55807e=this[_0x3b7699(0x2b2)](),_0x53821a=this[_0x3b7699(0x13f)](),_0xa50f63=this['rowSpacing'](),_0xdd1a6f=_0xec3905%_0x3f5d1d,_0x3a0eef=Math[_0x3b7699(0x25d)](_0xec3905/_0x3f5d1d),_0x43c971=this['topRow'](),_0x333a49=Window_CG_Gallery[_0x3b7699(0x27c)],_0x1891db=_0x3a0eef-_0x43c971;let _0xbeb8d2=0x0;if(Window_CG_Gallery['STAGGER_LEFT'])_0xbeb8d2=Math[_0x3b7699(0x25d)]((_0x42c541-_0x1891db)/_0x42c541*_0x333a49);else{if(_0x3b7699(0x10e)!==_0x3b7699(0x264))_0xbeb8d2=Math[_0x3b7699(0x25d)](_0x1891db/_0x42c541*_0x333a49);else{this[_0x3b7699(0x1f1)][_0x3b7699(0x1ed)]();return;}}const _0x4b46e9=_0xdd1a6f*_0x2452a2+_0x53821a/0x2-this[_0x3b7699(0xda)]()+_0xbeb8d2,_0x3d62bf=_0x3a0eef*_0x55807e+_0xa50f63/0x2-this[_0x3b7699(0xf8)](),_0xf59cbb=_0x2452a2-_0x53821a,_0x39dd6a=_0x55807e-_0xa50f63;return new Rectangle(_0x4b46e9,_0x3d62bf,_0xf59cbb,_0x39dd6a);},Window_CG_Gallery['prototype'][_0x4cb2af(0x127)]=function(_0x3f2667,_0x2a7c2f){const _0x23d97a=_0x4cb2af;if(Window_CG_Gallery['STAGGER_FULL']<=0x0)return Window_Command['prototype'][_0x23d97a(0x127)][_0x23d97a(0xcc)](this,_0x3f2667,_0x2a7c2f);this[_0x23d97a(0x233)]=_0x3f2667[_0x23d97a(0x2b5)](0x0,this[_0x23d97a(0x21c)]()),this[_0x23d97a(0xea)]=_0x2a7c2f['clamp'](0x0,this[_0x23d97a(0x1f6)]()),this[_0x23d97a(0x281)]=0x1,this['updateSmoothScroll'](),this[_0x23d97a(0x1d9)]();},Window_CG_Gallery['prototype'][_0x4cb2af(0xf1)]=function(){const _0x3c6a7c=_0x4cb2af;if(this['isWheelScrollEnabled']()&&this[_0x3c6a7c(0x28f)]){if(_0x3c6a7c(0x131)===_0x3c6a7c(0x131)){const _0x48a02c=0x14;TouchInput['wheelY']>=_0x48a02c&&(this[_0x3c6a7c(0x292)](![]),this[_0x3c6a7c(0x2a8)]=0x8);if(TouchInput['wheelY']<=-_0x48a02c){if('fBrts'==='REtIm'){const _0x5a8bd0=_0x3ce195[_0x3c6a7c(0x1c5)][_0x3c6a7c(0x157)][_0x3c6a7c(0x133)],_0x5f07fa={'name':_0x5a8bd0[_0x3c6a7c(0x1e1)],'volume':_0x5a8bd0['viewVolume'],'pitch':_0x5a8bd0[_0x3c6a7c(0x1ea)],'pan':_0x5a8bd0[_0x3c6a7c(0x19d)]};_0xb080b3['playSe'](_0x5f07fa);}else this['cursorUp'](![]),this[_0x3c6a7c(0x2a8)]=0x8;}}else _0xaf0abd=_0x3c6a7c(0x15c)['format'](_0x59ec39,_0x50bf44);}},Window_CG_Gallery['prototype']['onTouchSelect']=function(_0x202a0b){const _0x5697b0=_0x4cb2af;if(this[_0x5697b0(0x2a8)]){if(_0x5697b0(0x175)!==_0x5697b0(0x175))return _0x506dbb[_0x5697b0(0xd3)]();else{this[_0x5697b0(0x2a8)]--;return;}}Window_Command['prototype'][_0x5697b0(0x14d)][_0x5697b0(0xcc)](this,_0x202a0b);},Window_CG_Gallery[_0x4cb2af(0xed)]['playOkSound']=function(){const _0x30e00b=_0x4cb2af;SoundManager[_0x30e00b(0x1eb)]();},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0xfd)]=function(_0x1c4731){const _0x4d5b94=_0x4cb2af;_0x1c4731=_0x1c4731['toLowerCase']()[_0x4d5b94(0xe1)]();if(this['_category']===_0x1c4731)return;this['_category']=_0x1c4731,this['refresh'](),this['setTopRow'](0x0),this['deselect'](),this['updateCompletionSpriteBitmap'](),this[_0x4d5b94(0x1c3)]();},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x205)]=function(){const _0x2deb8e=_0x4cb2af,_0x2f3549=VisuMZ['CGGallery'][_0x2deb8e(0x157)][_0x2deb8e(0x18b)];for(const _0x4639fc of _0x2f3549){if(!this[_0x2deb8e(0x105)](_0x4639fc))continue;const _0x2b1ddd=$gameSystem['isCgGalleryUnlocked'](_0x4639fc[_0x2deb8e(0x223)]);this[_0x2deb8e(0xd6)]('',_0x2deb8e(0x15d),_0x2b1ddd,_0x4639fc);}},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x105)]=function(_0x38deb5){const _0x56f6a2=_0x4cb2af;if(!_0x38deb5)return![];if(_0x38deb5[_0x56f6a2(0x223)][_0x56f6a2(0x18d)]()[_0x56f6a2(0xe1)]()===_0x56f6a2(0x123))return![];if(_0x38deb5[_0x56f6a2(0x223)][_0x56f6a2(0xe1)]()==='')return![];if(this[_0x56f6a2(0x215)]==='all')return!![];const _0x3caaf2=_0x38deb5[_0x56f6a2(0x1db)][_0x56f6a2(0x18d)]()[_0x56f6a2(0xe1)]();if(this[_0x56f6a2(0x215)]===_0x56f6a2(0x1b4)){const _0x3b316f=VisuMZ[_0x56f6a2(0x1c5)][_0x56f6a2(0x1a3)]();return!_0x3b316f[_0x56f6a2(0x105)](_0x3caaf2);}else{if('agnlk'!==_0x56f6a2(0x17c))_0x91d5b6[_0x56f6a2(0x17b)](),this['exitViewMode']();else return this['_category']===_0x3caaf2;}},Window_CG_Gallery[_0x4cb2af(0xed)]['updateHelp']=function(){const _0x5ca841=_0x4cb2af;Window_Command['prototype'][_0x5ca841(0xef)]['call'](this);const _0x5764eb=this[_0x5ca841(0x18c)]();if(_0x5764eb){if(_0x5ca841(0x1ca)!==_0x5ca841(0x24f))$gameSystem['isCgGalleryUnlocked'](_0x5764eb[_0x5ca841(0x223)])?this['_helpWindow'][_0x5ca841(0x1bd)](_0x5764eb[_0x5ca841(0x12a)]||''):this[_0x5ca841(0xfc)][_0x5ca841(0x1bd)](TextManager[_0x5ca841(0x138)][_0x5ca841(0x1ff)]['lockedImg']);else return this[_0x5ca841(0xe0)]<=0x0?_0x1c9298[_0x5ca841(0x138)][_0x5ca841(0x2bc)]['gallery']:_0x2075a4[_0x5ca841(0x138)][_0x5ca841(0x2bc)]['prev'];}},Window_CG_Gallery['prototype'][_0x4cb2af(0x174)]=function(_0x329c39){const _0x5e4643=_0x4cb2af;if(!Window_CG_Gallery['DRAW_ITEM_BACKGROUND'])return;Window_Command[_0x5e4643(0xed)][_0x5e4643(0x174)][_0x5e4643(0xcc)](this,_0x329c39);},Window_CG_Gallery['prototype'][_0x4cb2af(0x214)]=function(_0x1129e3){const _0xa96896=_0x4cb2af;if(!this[_0xa96896(0x116)])return;if(!this[_0xa96896(0x116)][_0x1129e3])return;const _0x3e2ca2=this[_0xa96896(0x116)][_0x1129e3][_0xa96896(0x19c)];if(!_0x3e2ca2)return;const _0x27137a=this[_0xa96896(0x163)](_0x1129e3),_0x45b382=_0x3e2ca2[_0xa96896(0x223)];if($gameSystem[_0xa96896(0x10d)](_0x45b382)){if(_0xa96896(0x2a1)===_0xa96896(0x2a1)){const _0x188c7c=ImageManager[_0xa96896(0x25a)](_0x45b382);_0x188c7c['addLoadListener'](this[_0xa96896(0x26b)]['bind'](this,_0x3e2ca2,_0x188c7c,_0x1129e3,_0x27137a));}else{_0x5f4e1a['prototype'][_0xa96896(0x271)]['call'](this);const _0x4cf07a=this['_helpWindow'];_0x4cf07a[_0xa96896(0x289)](_0x1b86e0[_0xa96896(0x179)]);}}else{const _0xbf20ef=ImageManager[_0xa96896(0x160)]();_0xbf20ef['addLoadListener'](this[_0xa96896(0x26b)][_0xa96896(0x1df)](this,_0x3e2ca2,_0xbf20ef,_0x1129e3,_0x27137a));}},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x26b)]=function(_0x24bfde,_0x4c24b2,_0x53fd23,_0x21b2aa){const _0x1ef96e=_0x4cb2af,_0x545687=this['itemRect'](_0x53fd23);if(JSON['stringify'](_0x545687)!==JSON[_0x1ef96e(0x2a9)](_0x21b2aa))return;_0x545687[_0x1ef96e(0x176)]-=Window_CG_Gallery[_0x1ef96e(0x194)]*0x2,_0x545687[_0x1ef96e(0x13b)]-=Window_CG_Gallery[_0x1ef96e(0x194)]*0x2,_0x545687['x']+=Window_CG_Gallery['IMG_BUFFER'],_0x545687['y']+=Window_CG_Gallery['IMG_BUFFER'];let _0x1606e1=_0x545687['x'],_0x5eeee9=_0x545687['y'];const _0x5937bb=_0x545687[_0x1ef96e(0x176)]/_0x4c24b2[_0x1ef96e(0x176)],_0x1e99f0=_0x545687[_0x1ef96e(0x13b)]/_0x4c24b2[_0x1ef96e(0x13b)],_0x2a9bd8=Math[_0x1ef96e(0x1bb)](_0x5937bb,_0x1e99f0,0x1),_0xdc1896=Math[_0x1ef96e(0x1cd)](_0x4c24b2['width']*_0x2a9bd8),_0x258442=Math['round'](_0x4c24b2[_0x1ef96e(0x13b)]*_0x2a9bd8);_0x1606e1+=Math[_0x1ef96e(0x1cd)]((_0x545687[_0x1ef96e(0x176)]-_0xdc1896)/0x2),_0x5eeee9+=Math[_0x1ef96e(0x1cd)]((_0x545687[_0x1ef96e(0x13b)]-_0x258442)/0x2);const _0x11d07d=_0x4c24b2[_0x1ef96e(0x176)],_0x560eae=_0x4c24b2[_0x1ef96e(0x13b)];this[_0x1ef96e(0x27b)][_0x1ef96e(0xdc)][_0x1ef96e(0x2c0)]=!![],this[_0x1ef96e(0x27b)][_0x1ef96e(0x1fc)](_0x4c24b2,0x0,0x0,_0x11d07d,_0x560eae,_0x1606e1,_0x5eeee9,_0xdc1896,_0x258442),this['contents']['_context']['imageSmoothingEnabled']=!![],this[_0x1ef96e(0x23e)](_0x24bfde,_0x53fd23);},Window_CG_Gallery[_0x4cb2af(0xed)]['drawVariationCount']=function(_0x4ef214,_0x3404eb){const _0x304db6=_0x4cb2af;if(!Window_CG_Gallery[_0x304db6(0xd1)][_0x304db6(0x29c)])return;if(!$gameSystem['isCgGalleryUnlocked'](_0x4ef214[_0x304db6(0x223)],![]))return;const _0x1d0aec=_0x4ef214['Variations'][_0x304db6(0x23d)]+0x1;if(Window_CG_Gallery['DRAW_VARIATION'][_0x304db6(0x217)]&&_0x1d0aec===0x1)return;let _0x2d92a3=0x1;for(let _0xb155d0 of _0x4ef214['Variations']){if($gameSystem[_0x304db6(0x10d)](_0xb155d0,!![]))_0x2d92a3+=0x1;}let _0x4af06='';if(_0x1d0aec===_0x2d92a3&&Window_CG_Gallery[_0x304db6(0xd1)][_0x304db6(0x1f5)]!=='')_0x4af06=Window_CG_Gallery[_0x304db6(0xd1)][_0x304db6(0x1f5)];else{const _0x20865e=Window_CG_Gallery[_0x304db6(0xd1)][_0x304db6(0x224)],_0x2452bd=Window_CG_Gallery[_0x304db6(0xd1)][_0x304db6(0x27a)],_0x29e01a=Math[_0x304db6(0x1cd)](_0x2d92a3/_0x1d0aec*0x64);_0x4af06=_0x20865e[_0x304db6(0x2a4)](_0x29e01a,_0x2d92a3,_0x1d0aec);}const _0x31e5f7=this[_0x304db6(0x129)](_0x3404eb);let _0x2a51fd=_0x31e5f7['x'],_0x1ee2c6=_0x31e5f7['y'];const _0x4f5ab8=this[_0x304db6(0x29e)](_0x4af06)[_0x304db6(0x176)],_0x94d49b=this['textSizeEx'](_0x4af06)[_0x304db6(0x13b)],_0x4e9ec8=Window_CG_Gallery[_0x304db6(0xd1)][_0x304db6(0x1d7)][_0x304db6(0x18d)]()[_0x304db6(0xe1)]();switch(_0x4e9ec8){case'center':_0x2a51fd+=Math[_0x304db6(0x25d)](_0x31e5f7[_0x304db6(0x176)]-_0x4f5ab8)/0x2;break;case _0x304db6(0x134):_0x2a51fd+=_0x31e5f7['width']-_0x4f5ab8;break;}switch(Window_CG_Gallery[_0x304db6(0xd1)][_0x304db6(0xfb)][_0x304db6(0x18d)]()[_0x304db6(0xe1)]()){case'middle':_0x1ee2c6+=Math[_0x304db6(0x25d)](_0x31e5f7[_0x304db6(0x13b)]-_0x94d49b)/0x2;break;case _0x304db6(0x29b):_0x1ee2c6+=_0x31e5f7['height']-_0x94d49b;break;}this[_0x304db6(0x16c)](_0x4af06,_0x2a51fd,_0x1ee2c6);},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x11a)]=function(){const _0x47b05b=_0x4cb2af;if(!Window_CG_Gallery[_0x47b05b(0x22c)]['show'])return;const _0x223c8d=new Sprite();this['addChild'](_0x223c8d);const _0x6a2473=Math['max'](Window_CG_Gallery[_0x47b05b(0x27c)],0x64);_0x223c8d['bitmap']=new Bitmap(_0x6a2473,this[_0x47b05b(0x2b2)]()),_0x223c8d[_0x47b05b(0x162)]['x']=0.5,_0x223c8d[_0x47b05b(0x162)]['y']=0.5,this['_completionSprite']=_0x223c8d,this[_0x47b05b(0x2c5)]();if(Window_CG_Gallery[_0x47b05b(0xf0)]){if(_0x47b05b(0x294)!==_0x47b05b(0x232))_0x223c8d['x']=this[_0x47b05b(0x1e3)]+Math[_0x47b05b(0x25d)](Window_CG_Gallery[_0x47b05b(0x27c)]/0x2);else{const _0xa34257=this[_0x47b05b(0x109)](this[_0x47b05b(0x1e9)]());let _0x4982b1=this[_0x47b05b(0x25b)](this['index']());_0x4982b1=_0x4982b1[_0x47b05b(0x182)](/\\I\[(\d+)\]/gi,''),_0x55d3a5[_0x47b05b(0x139)](),this[_0x47b05b(0x187)](_0x4982b1,_0xa34257),this[_0x47b05b(0x21d)](_0x4982b1,_0xa34257),this[_0x47b05b(0x1a8)](_0x4982b1,_0xa34257);}}else _0x223c8d['x']=this[_0x47b05b(0x176)]-(this['padding']+Math[_0x47b05b(0x25d)](Window_CG_Gallery[_0x47b05b(0x27c)]/0x2));_0x223c8d['y']=this[_0x47b05b(0x1e3)]+Math[_0x47b05b(0x25d)](this[_0x47b05b(0x2b2)]()/0x2),_0x223c8d['x']+=Window_CG_Gallery[_0x47b05b(0x22c)][_0x47b05b(0x288)]['x'],_0x223c8d['y']+=Window_CG_Gallery['COMPLETION_SPRITE'][_0x47b05b(0x288)]['y'],_0x223c8d[_0x47b05b(0x290)]=-Window_CG_Gallery['COMPLETION_SPRITE'][_0x47b05b(0x290)];},Window_CG_Gallery[_0x4cb2af(0xed)]['updateCompletionSpriteBitmap']=function(){const _0x1e3fbd=_0x4cb2af,_0x3cc786=this[_0x1e3fbd(0x103)],_0x130a69=_0x3cc786[_0x1e3fbd(0x1a5)];_0x130a69['clear']();const _0xd0f073=Window_CG_Gallery[_0x1e3fbd(0x22c)][_0x1e3fbd(0x25e)];_0x130a69[_0x1e3fbd(0x192)]=Window_CG_Gallery[_0x1e3fbd(0x22c)][_0x1e3fbd(0x192)],_0x130a69[_0x1e3fbd(0x1cc)]=Window_CG_Gallery[_0x1e3fbd(0x22c)]['fontSize1'];const _0x56c1ad=Math['round'](_0x130a69[_0x1e3fbd(0x13b)]/0x2)-(_0x130a69['fontSize']+0x4);_0x130a69[_0x1e3fbd(0x25f)](_0xd0f073,0x0,_0x56c1ad,_0x130a69[_0x1e3fbd(0x176)],_0x130a69[_0x1e3fbd(0x1cc)]+0x4,_0x1e3fbd(0x17e));const _0x2f3b65=$gameSystem[_0x1e3fbd(0xd2)](this[_0x1e3fbd(0x215)]),_0x29c900=Window_CG_Gallery[_0x1e3fbd(0x22c)][_0x1e3fbd(0x27a)],_0x59c8a6=(_0x2f3b65*0x64)[_0x1e3fbd(0x118)](_0x29c900),_0x3f26b4=$gameSystem['cgGalleryCurrentCount'](this[_0x1e3fbd(0x215)]),_0x4873aa=$gameSystem['cgGalleryTotalSize'](this[_0x1e3fbd(0x215)]),_0x4508b4=Window_CG_Gallery[_0x1e3fbd(0x22c)][_0x1e3fbd(0x231)][_0x1e3fbd(0x2a4)](_0x59c8a6,_0x3f26b4,_0x4873aa);_0x130a69[_0x1e3fbd(0x192)]=Window_CG_Gallery[_0x1e3fbd(0x22c)]['fontFace'],_0x130a69[_0x1e3fbd(0x1cc)]=Window_CG_Gallery[_0x1e3fbd(0x22c)][_0x1e3fbd(0xd9)];const _0x59ae68=Math[_0x1e3fbd(0x1cd)](_0x130a69[_0x1e3fbd(0x13b)]/0x2);_0x130a69[_0x1e3fbd(0x25f)](_0x4508b4,0x0,_0x59ae68,_0x130a69[_0x1e3fbd(0x176)],_0x130a69[_0x1e3fbd(0x1cc)]+0x4,_0x1e3fbd(0x17e));},Window_CG_Gallery[_0x4cb2af(0xed)][_0x4cb2af(0x2b1)]=function(){const _0x32650d=_0x4cb2af;if(!Window_CG_Gallery[_0x32650d(0xe7)][_0x32650d(0x29c)])return;const _0x521c08=new Sprite();this[_0x32650d(0x166)](_0x521c08);const _0x2846b0=Math['max'](Window_CG_Gallery['STAGGER_FULL'],0x64);_0x521c08[_0x32650d(0x1a5)]=new Bitmap(_0x2846b0,this[_0x32650d(0x2b2)]()),_0x521c08['anchor']['x']=0.5,_0x521c08[_0x32650d(0x162)]['y']=0.5,this[_0x32650d(0x1e5)]=_0x521c08,this['updateProgressSpriteBitmap'](),Window_CG_Gallery[_0x32650d(0xf0)]?_0x521c08['x']=this[_0x32650d(0x176)]-(this['padding']+Math[_0x32650d(0x25d)](Window_CG_Gallery['STAGGER_FULL']/0x2)):_0x521c08['x']=this[_0x32650d(0x1e3)]+Math[_0x32650d(0x25d)](Window_CG_Gallery[_0x32650d(0x27c)]/0x2),_0x521c08['y']=this[_0x32650d(0x13b)]-this[_0x32650d(0x1e3)]-Math[_0x32650d(0x25d)](this[_0x32650d(0x2b2)]()/0x2),_0x521c08['x']+=Window_CG_Gallery[_0x32650d(0xe7)]['offset']['x'],_0x521c08['y']+=Window_CG_Gallery[_0x32650d(0xe7)]['offset']['y'],_0x521c08[_0x32650d(0x290)]=-Window_CG_Gallery[_0x32650d(0xe7)][_0x32650d(0x290)];},Window_CG_Gallery['prototype'][_0x4cb2af(0x1c3)]=function(){const _0x35e84e=_0x4cb2af,_0x25c666=this[_0x35e84e(0x1e5)],_0x2df5d1=_0x25c666[_0x35e84e(0x1a5)];_0x2df5d1[_0x35e84e(0x1a7)]();const _0x3edeab=Window_CG_Gallery['PROGRESS_SPRITE'][_0x35e84e(0x25e)];_0x2df5d1[_0x35e84e(0x192)]=Window_CG_Gallery['PROGRESS_SPRITE'][_0x35e84e(0x192)],_0x2df5d1['fontSize']=Window_CG_Gallery[_0x35e84e(0xe7)]['fontSize1'];const _0x29f6bd=Math['round'](_0x2df5d1['height']/0x2)-(_0x2df5d1[_0x35e84e(0x1cc)]+0x4);_0x2df5d1['drawText'](_0x3edeab,0x0,_0x29f6bd,_0x2df5d1[_0x35e84e(0x176)],_0x2df5d1['fontSize']+0x4,'center');const _0x5aab2a=$gameSystem[_0x35e84e(0xd2)](this['_category']),_0x3f83af=Window_CG_Gallery[_0x35e84e(0xe7)][_0x35e84e(0x27a)],_0x190d40=(_0x5aab2a*0x64)[_0x35e84e(0x118)](_0x3f83af),_0x215f70=$gameSystem[_0x35e84e(0x1c6)](this[_0x35e84e(0x215)]),_0x1cc14d=$gameSystem['cgGalleryTotalSize'](this['_category']),_0x49c90d=Window_CG_Gallery[_0x35e84e(0xe7)][_0x35e84e(0x231)][_0x35e84e(0x2a4)](_0x190d40,_0x215f70,_0x1cc14d);_0x2df5d1[_0x35e84e(0x192)]=Window_CG_Gallery[_0x35e84e(0xe7)][_0x35e84e(0x192)],_0x2df5d1[_0x35e84e(0x1cc)]=Window_CG_Gallery['PROGRESS_SPRITE'][_0x35e84e(0xd9)];const _0x4c8251=Math[_0x35e84e(0x1cd)](_0x2df5d1[_0x35e84e(0x13b)]/0x2);_0x2df5d1[_0x35e84e(0x25f)](_0x49c90d,0x0,_0x4c8251,_0x2df5d1[_0x35e84e(0x176)],_0x2df5d1[_0x35e84e(0x1cc)]+0x4,_0x35e84e(0x17e));};function _0x14f0(){const _0x94b877=['_helpWindow','setCategory','addUnlistedCommand','SnapshotOpacity','IsCgGalleryListing','exitViewMode','processViewModeOk','_completionSprite','GalleryWindow_Text_CompletionVocab','includes','_commandWindow','commandCgGallery','System','itemLineRect','mainAreaTop','CategoryWindow_AddAllCommand','Categories','isCgGalleryUnlocked','XsrRW','_itemHeight','CG_UnlockImages','fillRect','itemTextAlign','Scene_Title_createCommandWindow','_defaultUnlocks','GalleryWindow_RectJS','_list','findSymbol','toFixed','registerCommand','createCompletionSprite','xFuVa','Game_Picture_show','isCgGalleryCommandEnabled','cancel','changeVolume','ADD_ALL_COMMAND','CjdZU','addCgGalleryCommand','undefined','helpWindowRect','STRUCT','isMainMenuCgGalleryVisible','smoothScrollTo','gjIjZ','itemRectWithPadding','Description','icon','addOriginalCommands','processViewModeReset','_backSprite1','9072BTwWaf','changePitch','VbkpH','tab','Sound','right','outlineColor','FCsKP','update','CG_GALLERY','resetFontSettings','loadTitle2','height','iconWidth','all','CgGalleryTotalSize','colSpacing','ConfigManager_applyData','addWindow','ConfigManager_makeData','popScene','needsPageButtons','drawItemStyleIconText','playCursor','initialize','tAjJf','iVNEC','BgSettings','gRBUA','wheelY','onTouchSelect','drawIcon','paintOpacity','autoUnlock','createGalleryWindow','processViewModeCancel','createCommandNameWindow','commandCategory','makeData','UVuTk','Settings','setBackgroundOpacity','iyQNe','ARRAYEVAL','boxWidth','\x5cI[%1]%2','listing','lockedImgFilename','updateCommandNameWindow','cachedCgGalleryLockedImage','buttonAssistText1','anchor','itemRect','buttonAssistKey2','kLBZg','addChild','_categories','_cancelButton','EVUtC','arHQP','_blackBgSprite','drawTextEx','commandStyleCheck','GZmrG','ButtonAssistVocab_Gallery','GalleryWindow_Text_ProgressOffsetY','GalleryWindow_Text_CompletionFontFace','GalleryWindow_Text_VariationsAlignY','COMMAND_LIST','drawItemBackground','wTcjU','width','CG_UnlockAllImagesDebug','cVuqw','HELP_WINDOW_BGTYPE','status','playCancel','agnlk','wmlOT','center','cgGalleryHasUnlockedImage','ShowMainMenu','calcWindowHeight','replace','playNextCgVariation','MainMenu','deactivate','isCommandEnabled','commandNameWindowDrawBackground','JOtro','kxPio','TEXT_ALIGN','Listing','currentExt','toLowerCase','isPressed','ROW_SPACING','GalleryWindow_Text_CompletionShow','GalleryWindow_Text_CompletionDecimals','fontFace','Scene_Menu_createCommandWindow','IMG_BUFFER','3010885GinbdC','ClacN','_pagedownButton','save','viewVolume','69012qFQqHW','_viewModeVisible','ext','viewPan','drawItemStyleIcon','fontBold','JSON','OzElo','push','CgGalleryCategories','createCustomBackgroundImages','bitmap','reset','clear','commandNameWindowCenter','icons','Variations','prev','initCgGalleryMainMenu','GalleryWindow_Text_VariationComplete','mNntL','24674830tGDMHq','COMMAND_STYLE','updateViewMode','hRJUS','DxVxh','unlisted','ButtonAssistVocab_Reset','wXXbq','HasUnlistedCategories','buttonAssistKey1','Key','_scene','min','GalleryWindow_Text_ProgressOffsetX','setText','rowSpacing','adjustSprite','isCgGalleryCommandVisible','CategoryWindow_Style','GPjON','updateProgressSpriteBitmap','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','CGGallery','cgGalleryCurrentCount','ARRAYSTR','processViewModeTouchRelease','setMainMenuCgGalleryVisible','sPqjn','FUNC','fontSize','round','SHOW_UNLISTED_COMMAND','SystemEnableCGGalleryMenu','3EnVzyw','BgFilename1','isSceneBattle','galleryWindowRect','CG_WINDOW_BGTYPE','CG_ResetAllImagesPerma','iagpT','xAlign','reselect','refreshCursor','Game_System_initialize','Category','addCommandListCommands','BQGwC','innerHeight','bind','helpAreaHeight','viewName','windowPadding','padding','arePageButtonsEnabled','_progressSprite','centerSprite','yDBOw','Icon','index','viewPitch','playViewCgImage','startViewMode','activate','_pageupButton','opacity','drawCircle','_galleryWindow','WLdeJ','onCategoryCancel','_listingNames','variantComplete','maxScrollY','gallery','GalleryWindow_Text_VariationsShowSingles','changePaintOpacity','ARRAYJSON','processViewModeScale','blt','zoom','iconText','helpDesc','Window_MenuCommand_addOriginalCommands','ButtonAssistVocab_Border','CategoryWindow_BgType','GalleryWindow_Text_CompletionFmt','GalleryWindow_Stagger','makeCommandList','cgGalleryMenuCommand','AllCommandText','LockedImgFilename','playEquip','GalleryWindow_Text_ProgressShow','_cgGalleryFullUnlock','Text','GalleryWindow_MaxRows','_categoryWindow','getInputButtonString','1379943eFtXvv','Window','fTjYr','DefaultUnlocks','drawItem','_category','CategoryWindow_TextAlign','hideForSingles','mOjNZ','oZMbm','scaleSprite','deselect','maxScrollX','commandNameWindowDrawText','processViewModeBorderless','_itemWidth','callUpdateHelp','11kDpaVi','3954260ybaofi','Filename','textFmt','return\x200','GalleryWindow_Text_ProgressFmt','gray','processVariationChange','map','2154BCSTss','_hasUnlistedCategories','COMPLETION_SPRITE','817514ankyfT','GalleryWindow_Text_ProgressFontSize2','setClickHandler','GalleryWindow_Text_CompletionFontSize2','percentFmt','HAqCA','_scrollTargetX','getBackgroundOpacity','topRow','exit','oOqRd','name','hide','GalleryWindow_Text_ProgressDecimals','version','CG_WINDOW_MOVE_DIST','length','drawVariationCount','OxMbA','hasCgUnlockedImage','AutoUnlockShowPicture','dir8','match','FEbEH','EnableMainMenu','ButtonAssistVocab_Next','AllCommandIcon','buttonAssistText2','description','Uukqg','Arial','buttonAssistKey3','sIzAH','processViewModeMove','bflRs','setHandler','updatePageButtons','_viewSprite','scaleSpriteDown','createPageButtons','listingMatchesCategory','MkLHJ','CategoryWindow_ShowUnlistedCommand','enabled','oYskX','loadPicture','commandName','Window_TitleCommand_makeCommandList','floor','text','drawText','addAllCommand','ctJml','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','adjustSpriteDown','twnnf','pagedown','mainAreaHeight','scale','HelpWindow_RectJS','GalleryWindow_Text_ProgressAngle','shift','drawPicture','categoryWindowRect','createBlackBackgroundImage','prepareViewMode','untitled','lineHeight','createHelpWindow','GalleryWindow_Text_VariationsAlignX','SystemShowCGGalleryMenu','auto','setMainMenuCgGalleryEnabled','MAXROW','CATEGORY_WINDOW_BGTYPE','_totalSize','_backSprite2','decimals','contents','STAGGER_FULL','buttonAssistText3','addCgGalleryCommandAutomatically','cgGallery','commandStyle','_scrollDuration','setGalleryWindow','GalleryWindow_Text_ProgressVocab','changePan','_cgGallery_MainMenu','ConvertParams','pageup','offset','setBackgroundType','isRepeated','_cached_CGGallery_Image','playSe','_variationList','KiAxc','active','angle','824rAvPZv','cursorDown','CaayG','mgFFt','STR','maxCols','unlockImageForCgGallery','ARRAYFUNC','BgFilename2','ButtonAssistVocab_Prev','bottom','show','createViewSprite','textSizeEx','UnlistedCommandDescription','tlYzB','QhobI','_viewMode','CG_GALLERY_ADD_COMMAND','format','create','odLJR','constructor','_wheelCooldown','stringify','bEobl','sort','SceneOpenCgGallery','DefaultUnlocked','category','IojfL','ODMRv','createProgressSprite','itemHeight','addLoadListener','setHelpWindow','clamp','GalleryWindow_SpacingCols','Vocab','options','innerWidth','updateGalleryWindow','_buttonAssistWindow','buttonAssist','cgGalleryUnlocks','createCommandWindow','COL_SPACING','imageSmoothingEnabled','KxHtH','GalleryWindow_Text_CompletionAngle','parameters','KRVYj','updateCompletionSpriteBitmap','NUM','next','DRAW_ITEM_BACKGROUND','call','HelpWindow_BgType','border','buttonAssistText4','getInputMultiButtonStrings','DRAW_VARIATION','cgGalleryCompletionRate','isMainMenuCgGalleryEnabled','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','visible','addCommand','_commandNameWindow','createBackground','fontSize2','scrollBaseX','CategoryWindow_RectJS','_context','AutoUnlockVariations','ceil','GalleryWindow_BgType','_variationIndex','trim','lYDnX','processViewModeMouseMove','ARRAYSTRUCT','applyData','buttonAssistText5','PROGRESS_SPRITE','itemWidth','Untitled','_scrollTargetY','changeName','_customModified','prototype','parse','updateHelp','STAGGER_LEFT','processWheelScroll','GalleryWindow_Text_ProgressFontSize1','loadTitle1','CQPBD','CtdDN','filter','pop','scrollBaseY','MAXCOL','CiAJT','yAlign'];_0x14f0=function(){return _0x94b877;};return _0x14f0();}