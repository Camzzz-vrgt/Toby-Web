//=============================================================================
// VisuStella MZ - Extended Message Functionality
// VisuMZ_2_ExtMessageFunc.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ExtMessageFunc = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ExtMessageFunc = VisuMZ.ExtMessageFunc || {};
VisuMZ.ExtMessageFunc.version = 1.16;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.16] [ExtMessageFunc]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Extended_Message_Functionality_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Extended Message Function plugin adds onto RPG Maker MZ's Message Window
 * and adds in various features you would normally see found in modern RPG's.
 * Things like automatically moving the text forward after a set amount of time
 * or fast forward are available. Saving and loading during a message is also
 * possible as well as going to the Options menu or returning back to the title
 * screen. These options are only available to the Message Window on the map
 * scene and do not work in battle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * The Button Console appears on the Message Window let the player activate
 *   various commands via touch/click.
 * * Extended Fast Forward Mode is an expanded feature upon the Message Core's
 *   Fast Forward function to fast forward all events and not just messages.
 *   This can be optionally disabled.
 * * A Message Cursor will appear where the text has ended for those who want
 *   that kind of aesthetic in their game.
 * * Auto-Forward will automatically move messages onward after a certain
 *   amount of time has passed. Time required will be determined based on the
 *   length of the message in question.
 * * Saving and Loading can be done from the Message Window akin to how many
 *   visual novels work. Requires the Save Core, but you're already using that,
 *   right? Right?
 * * Also be able to jump straight into the Options scene from the Message
 *   Window to change any settings on the fly. Requires the Options Core, but
 *   you're using that, too, correct?
 * * And for those who want to jump back to the title screen, they can do so
 *   by selecting a Game End option, too.
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
 * * VisuMZ_1_MessageCore
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_1_OptionsCore
 *
 * The Options Core is a required plugin in order to make use of the "Options"
 * (aka "Config") button found in the Button Console.
 *
 * ---
 *
 * VisuMZ_1_SaveCore
 *
 * The Options Core is a required plugin in order to make use of the "Save" and
 * "Load" buttons found in the Button Console.
 *
 * ---
 * 
 * VisuMZ_3_MessageLog
 * 
 * The Message Log plugin enables the "Log" button found in the Button Console
 * to let the player go and review the text that has been displayed in the map
 * scene. This does not include the text found in battle to avoid conflicting
 * logged messages across different situations.
 * 
 * ---
 * 
 * VisuMZ_4_MessageVisibility
 * 
 * The Message Visibility plugin enables the "Hide" button found in the
 * Button Console to make the Message Window visible or invisible.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Button Console-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Hide Buttons>         Hides the Button Console from this current Message
 *                        Window's text assuming that nothing else is hiding
 *                        the Button Console from view.
 * 
 * ---
 * 
 * === Message Tail-Related Text Codes ===
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Tail Bottom Left: x>  Creates a message tail at x coordinate pointing to
 *                        the bottom left.
 * <Tail Bottom Right: x> Creates a message tail at x coordinate pointing to
 *                        the bottom right.
 * <Tail Upper Left: x>   Creates a message tail at x coordinate pointing to
 *                        the upper left.
 * <Tail Upper Right: x>  Creates a message tail at x coordinate pointing to
 *                        the upper right.
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
 * === Fast Forward Plugin Commands ===
 * 
 * ---
 *
 * Fast Forward: Allow/Disallow
 * - Change whether or not Fast Forward is allowed/disallowed.
 * - Must be enabled by the Plugin Parameters.
 *
 *   Allow?:
 *   - Allow or disallow the Extended Fast Forward feature?
 *   - Must be enabled by the Plugin Parameters.
 *
 * ---
 * 
 * === Message Button Console Plugin Commands ===
 * 
 * ---
 *
 * Message Button Console: Show/Hide
 * - Determine if the Message Button Console is visible or hidden.
 * - Only appears on the map. 
 * - Does not appear in battle.
 *
 *   Visible?:
 *   - Show or hide the Message Button Console feature?
 *   - Only appears on the map.
 *   - Does not appear in battle.
 *
 * ---
 * 
 * === Message Cursor Plugin Commands ===
 * 
 * ---
 *
 * Message Cursor: Change Settings
 * - Change the Message Cursor settings used.
 *
 *   Change Settings:
 *   - Change the Message Cursor settings.
 *   - Settings are the same as the ones found in the Plugin Parameters.
 *
 * ---
 * 
 * === Message Tail Plugin Commands ===
 * 
 * ---
 * 
 * Message Tail: Change Settings
 * - Change the Message Tail settings.
 * 
 *   Message Tail Settings:
 *   - Message Tail settings used for Message Windows.
 *   - Requires images and text codes to appear.
 *   - See Plugin Parameters. They have the same parameters.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Forward Settings
 * ============================================================================
 *
 * Auto-Forward settings used for this game. Auto-Forward is a feature that
 * once enabled, the game will automatically move the "Show Text" event
 * commands forward after a certain amount of time. The amount of time will be
 * determined by how many characters are displayed on the screen. There is a
 * lower boundary, where if the wait time does not meet the amount, the timer
 * will be set to the minimum wait value instead.
 *
 * ---
 *
 * Settings
 * 
 *   Wait per Character:
 *   - How many frames should the game wait per character?
 *   - Average: 60 frames per second.
 * 
 *   Minimum Wait:
 *   - What is the minimum amount of frames to wait?
 *   - Average: 60 frames per second.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Fast Forward (Extended) Settings
 * ============================================================================
 *
 * Extended Fast Forward settings used for this game. If enabled, this will
 * replace the Message Core's Fast Forward functionality. The Extended Fast
 * Forward feature will not only fast forward through messages but any running
 * events that are not found in a parallel event.
 * 
 * It can also be activated the Message Core's Fast Forward shortcut key.
 *
 * ---
 *
 * Settings
 * 
 *   Enable?:
 *   - Enable or disable the Extended Fast Forward feature?
 * 
 *   Speed:
 *   - What is the speed at which Extended Fast Forward works at?
 *   - Higher numbers are faster.
 * 
 *   Reset on Scene Change?:
 *   - Reset Fast Forward setting on scene changes (ie battle, menu, or
 *     map transfers)?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Button Console Settings
 * ============================================================================
 *
 * Message Button Console settings used for this game.
 * 
 * It will only appear in the Message Window on the map scene. It will NOT
 * appear in battle. The reason it won't appear in battle is because many of
 * the functions there will clash with how the battle scene behaves.
 * 
 * The Button Console will add extra padding to the Message Window and appear
 * at either the top of bottom of the Message Window (your choice). A row of
 * buttons will appear each with a different functionality.
 * 
 * These Plugin Parameters also allow you to customize the appearance of how
 * the buttons look in-game. Adjust them accordingly.
 *
 * ---
 *
 * General
 * 
 *   Show by Default?:
 *   - Show or hide the Message Button Console by default?
 * 
 *   Position:
 *   - Where do you wish to display the Message Button Console?
 *     - Top of Message Window
 *     - Bottom of Message Window
 * 
 *   Auto-Size Hide?:
 *   - Hide the button console when using auto-size text codes?
 *
 * ---
 *
 * Appearance
 * 
 *   Window Skin:
 *   - What is the window skin used for the buttons?
 *   - Ignore if using Background Images.
 * 
 *   Font Name:
 *   - What font do you wish to use for the Message Button Console?
 * 
 *     Font Size:
 *     - What font size do you wish to use for the Message Button Console?
 * 
 *   Text Colors:
 * 
 *     Normal Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Toggled Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Disabled Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Visuals:
 * 
 *     Width:
 *     - What is the width of each button?
 * 
 *     Height:
 *     - What is the height of each button?
 * 
 *     Buffer:
 *     - What is the buffer between each button?
 * 
 *   Background Images:
 * 
 *     Disabled Image:
 *     Enabled Image:
 *     Toggled Image:
 *     - Filename of the background image when the button is disabled,
 *       enabled, or toggled.
 *     - This will hide the window skin for this button.
 * 
 *     Offset X:
 *     - Offsets the X position of this image.
 *     - Negative: left; Positive: right
 * 
 *     Offset Y:
 *     - Offsets the Y position of this image.
 *     - Negative: up; Positive: down
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Button Settings
 * ============================================================================
 *
 * Settings for which buttons appear and how they appear. These settings will
 * determine which buttons appear (provided that their required plugins are
 * available), what shortcut keys are applied to them, and what kind of text
 * will be displayed to represent them.
 * 
 * In case you are wondering where the Fast Forward shortcut key is, that
 * setting is found in the Message Core.
 *
 * ---
 *
 * General
 * 
 *   List:
 *   - Which buttons appear and in what order?
 *   - Some commands require certain plugins installed.
 *
 * ---
 *
 * Shortcut Keys
 * 
 *   Auto-Forward Key:
 *   - This is the key used for auto-forwarding messages.
 * 
 *   Save Key:
 *   - This is the key used for quick saving.
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Load Key:
 *   - This is the key used for quick load.
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Options Key:
 *   - This is the key used for opening options.
 *   - Requires VisuMZ_1_OptionsCore!
 * 
 *   Game End Key:
 *   - This is the key used for ending the game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Auto-Forward:
 *   - How is this option's text displayed in-game?
 * 
 *   Fast Forward:
 *   - How is this option's text displayed in-game?
 * 
 *   Save Game:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Load Game:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Options:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_OptionsCore!
 * 
 *   Game End:
 *   - How is this option's text displayed in-game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Cursor Settings
 * ============================================================================
 *
 * Message Cursor settings used for this game. The cursor, if enabled, will
 * appear where the text is currently displayed at and adds a new type of
 * aesthetic to the game.
 *
 * ---
 *
 * General
 * 
 *   Enable?:
 *   - Enable or disable the message cursor?
 * 
 *   Graphic Type:
 *   - What is the cursor's graphic type?
 *     - Icon - From img/system/IconSet.png
 *     - Image - An animated image from img/system/
 *     - Window Skin - Use the default Window Skin cursor
 *
 * ---
 *
 * Icon
 * 
 *   Icon Index:
 *   - This is icon used for the Message Cursor.
 * 
 *   Flip Speed Multiplier:
 *   - What is the flip speed multiplier for the Message Cursor?
 *   - Use 0 for no flipping.
 *
 * ---
 *
 * Image
 * 
 *   Filename:
 *   - Filename of the image found inside the img/system/ folder.
 * 
 *   Image Rows:
 *   - How many rows are there for the image?
 * 
 *   Image Columns:
 *   - How many columns are there for the image?
 * 
 *   Frame Delay:
 *   - How many frames delayed are there per animated cell?
 *
 * ---
 *
 * Appearance
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Determine the Message Cursor's X/Y position.
 *   - Use a number between 0 and 1 for best results.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the Message Cursor's X/Y position by how many pixels?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Tail Settings
 * ============================================================================
 *
 * Message Tails can be made to appear from the Message Window and point
 * towards the speaker, similar to how speech bubbles in comics point towards
 * their speakers. The Message Tails do not appear on their own, and only come
 * out when using auto-position text codes (if enabled) such as <Auto Player>
 * or when text codes are used to make them appear such as <Tail Upper Left: x>
 * and <Tail Lower Right: x>.
 * 
 * These settings require custom graphics that this plugin does not come with.
 * You will need to add them on your own or else they will not appear.
 *
 * ---
 *
 * Auto-Position
 * 
 *   Enable?:
 *   - Show Message Tails with Auto-Position text codes?
 *   - Message Tails will appear when using the following text codes:
 *     - <Auto Actor: x>
 *     - <Auto Party: x>
 *     - <Auto Player>
 *     - <Auto Event: x>
 *     - <Auto Enemy: x>
 * 
 *   Face Left?:
 *   - Which direction does the Message Tail point to?
 *   - Left or right?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Message Window's X offset with auto-position.
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 *
 * Tail Directions
 * Tail Directions > Bottom Left
 * Tail Directions > Bottom Right
 * Tail Directions > Upper Left
 * Tail Directions > Upper Right
 * 
 *   Filename:
 *   - Filename of the Message Tail graphic going towards the
 *     specified direction.
 * 
 *   Anchor X:
 *   - Anchor value X. Use a number between 0 and 1.
 *   - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *   Anchor Y:
 *   - Anchor value Y. Use a number between 0 and 1.
 *   - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *   Offset X:
 *   - Offset the Message Tail's X position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Message Tail's Y position.
 *   - Negative: left. Positive: right.
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
 * Version 1.16: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a text positioning issue with the message window when shown in
 *    battle and a top-aligned button console. Fix made by Irina.
 * 
 * Version 1.15: December 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that made hidden buttons via <Hide Button Console> still able
 *    to be pressed. Fix made by Irina.
 * 
 * Version 1.13: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevents <Hide Button Console> from working when word
 *    wrap is enabled. Fix made by Irina.
 * 
 * Version 1.12: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a bug where the menu background settings from VisuMZ Core Engine
 *    did not carry over to the save menu when accessing it through the Message
 *    Button Console. Fix made by Olivia.
 * 
 * Version 1.11: November 10, 2022
 * * Bug Fixes!
 * ** Plugin Command "Message Cursor: Change Settings" no longer leaves behind
 *    the old cursor sprite when a new one is selected. Fix made by Irina.
 * 
 * Version 1.10: August 11, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina
 * *** Plugin Parameters > Fast Forward > Reset on Scene Change?
 * **** Reset Fast Forward setting on scene changes (ie battle, menu, or
 *      map transfers)?
 * 
 * Version 1.09: April 7, 2022
 * * Bug Fixes!
 * ** Default message cursor no longer appears in the wrong place when no
 *    message cursor skin is used for auto-sized messages. Fix by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter option added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Message Cursor Settings > Graphics Type
 * **** New option added: Window Skin - Use the default Window Skin cursor
 * **** This is for those who wish to use the default window skin cursor
 *      instead of icons or images.
 * 
 * Version 1.08: March 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands, Text Codes, and Plugin Parameters added by Irina
 *    and sponsored by Archeia!
 * *** Message Tails can be made to appear from the Message Window and point
 *     towards the speaker, similar to how speech bubbles in comics point
 *     towards their speakers. The Message Tails do not appear on their own,
 *     and only come out when using auto-position text codes (if enabled) such
 *     as <Auto Player> or when text codes are used to make them appear such as
 *     <Tail Upper Left: x> and <Tail Lower Right: x>.
 * *** These settings require custom graphics that this plugin does not come
 *     with. You will need to add them on your own or else they will not
 *     appear.
 * *** Text Codes added: <Tail Bottom Left: x>, <Tail Bottom Right: x>,
 *     <Tail Upper Left: x>, <Tail Upper Right: x>
 * *** Plugin Command Added: Message Tail: Change Settings
 * *** Plugin Parameters Added: Message Tail Settings
 * 
 * Version 1.07: March 3, 2022
 * * Compatibility Update
 * ** Added better compatibility functionality with other plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Message Button Console > Auto-Size Hide?
 * **** Hide the button console when using auto-size text codes?
 * 
 * Version 1.06: November 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: November 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by Archeia:
 * *** Plugin Parameters > Message Button Console > Background Images
 * **** Adds a background image to this button instead of using a window skin.
 * **** This will disable the window skin.
 * **** Various images can be used for "Disabled", "Enabled", and "Toggled".
 * **** Offset X and Y positions.
 * 
 * Version 1.04: October 14, 2021
 * * Feature Update!
 * ** Added an alert requirement for those who are using very old versions of
 *    the Message Core that cannot sustain the requirements of this plugin.
 *    Added by Irina.
 * 
 * Version 1.03: September 3, 2021
 * * Bug Fixes!
 * ** Pause sprite, for the Message Window, will no longer show multiple copies
 *    if the message cursor sprite is disabled. Fix made by Irina.
 * 
 * Version 1.02: August 6, 2021
 * * Documentation Update!
 * ** Plugin URL now updated to most recent one.
 * 
 * Version 1.01: July 30, 2021
 * * Feature Update!
 * ** Added graphic pre-loading for save/load menu preparation. Added by Irina.
 * 
 * Version 1.00 Official Release Date: August 2, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExtFastFwdDisallow
 * @text Fast Forward: Allow/Disallow
 * @desc Change whether or not Fast Forward is allowed/disallowed.
 * Must be enabled by the Plugin Parameters.
 *
 * @arg Allow:eval
 * @text Allow?
 * @parent General
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow or disallow the Extended Fast Forward feature?
 * Must be enabled by the Plugin Parameters.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgButtonConsole
 * @text Message Button Console: Show/Hide
 * @desc Determine if the Message Button Console is visible or hidden.
 * Only appears on the map. Does not appear in battle.
 *
 * @arg Visible:eval
 * @text Visible?
 * @parent General
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Show or hide the Message Button Console feature?
 * Only appears on the map. Does not appear in battle.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageCursorSettings
 * @text Message Cursor: Change Settings
 * @desc Change the Message Cursor settings used.
 *
 * @arg MsgCursor:struct
 * @text Change Settings
 * @type struct<MsgCursor>
 * @desc Change the Message Cursor settings.
 * @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command MessageTailSettings
 * @text Message Tail: Change Settings
 * @desc Change the Message Tail settings.
 *
 * @arg Settings:struct
 * @text Message Tail Settings
 * @type struct<MsgTail>
 * @desc Message Tail settings used for Message Windows.
 * Requires images and text codes to appear.
 * @default {"AutoPosition":"","autoPositionTail:eval":"true","autoPositionLeft:eval":"true","autoPositionOffsetX:num":"+0","autoPositionOffsetY:num":"+0","TailDir":"","BottomLeft":"","bottomLeftFilename:str":"","bottomLeftAnchorX:num":"0.5","bottomLeftAnchorY:num":"0.0","bottomLeftOffsetX:num":"+0","bottomLeftOffsetY:num":"+0","BottomRight":"","bottomRightFilename:str":"","bottomRightAnchorX:num":"0.5","bottomRightAnchorY:num":"0.0","bottomRightOffsetX:num":"+0","bottomRightOffsetY:num":"+0","UpperLeft":"","upperLeftFilename:str":"","upperLeftAnchorX:num":"0.5","upperLeftAnchorY:num":"1.0","upperLeftOffsetX:num":"+0","upperLeftOffsetY:num":"+0","UpperRight":"","upperRightFilename:str":"","upperRightAnchorX:num":"0.5","upperRightAnchorY:num":"1.0","upperRightOffsetX:num":"+0","upperRightOffsetY:num":"+0"}
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
 * @param ExtMessageFunc
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Auto:struct
 * @text Auto-Forward Settings
 * @type struct<Auto>
 * @desc Auto-Forward settings used for this game.
 * @default {"WaitPerChar:num":"6","MinimumWait:num":"300"}
 *
 * @param FastFwd:struct
 * @text Fast Forward (Extended)
 * @type struct<FastFwd>
 * @desc Extended Fast Forward settings used for this game.
 * @default {"Enable:eval":"true","Speed:num":"8","SceneChangeReset:eval":"true"}
 *
 * @param MsgButtonConsole:struct
 * @text Message Button Console
 * @type struct<MsgButtonConsole>
 * @desc Message Button Console settings used for this game.
 * @default {"General":"","ShowDefault:eval":"true","Position:str":"bottom","Appearance":"","WindowSkin:str":"Window","FontFace:str":"Arial","FontSize:num":"18","TextColors":"","NormalColor:str":"0","ToggledColor:str":"24","DisabledColor:str":"7","Visuals":"","ButtonWidth:num":"86","ButtonHeight:num":"36","ButtonBuffer:num":"6"}
 *
 * @param Buttons:struct
 * @text Button Settings
 * @parent MsgButtonConsole:struct
 * @type struct<Buttons>
 * @desc Settings for which buttons appear and how they appear.
 * @default {"General":"","List:arraystr":"[\"auto\",\"fastFwd\",\"log\",\"hide\",\"save\",\"load\",\"options\",\"gameEnd\"]","AutoKey:str":"none","Shortcuts":"","SaveKey:str":"none","LoadKey:str":"none","OptionsKey:str":"none","GameEndKey:str":"none","Vocab":"","Auto:str":"AUTO","FastFwd:str":"FAST","Save:str":"SAVE","Load:str":"LOAD","Options:str":"CONFIG","GameEnd:str":"TITLE"}
 *
 * @param MsgCursor:struct
 * @text Message Cursor Settings
 * @type struct<MsgCursor>
 * @desc Message Cursor settings used for this game.
 * @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
 *
 * @param MsgTail:struct
 * @text Message Tail Settings
 * @type struct<MsgTail>
 * @desc Message Tail settings used for Message Windows.
 * Requires images and text codes to appear.
 * @default {"AutoPosition":"","autoPositionTail:eval":"true","autoPositionLeft:eval":"true","autoPositionOffsetX:num":"+0","autoPositionOffsetY:num":"+0","TailDir":"","BottomLeft":"","bottomLeftFilename:str":"","bottomLeftAnchorX:num":"0.5","bottomLeftAnchorY:num":"0.0","bottomLeftOffsetX:num":"+0","bottomLeftOffsetY:num":"+0","BottomRight":"","bottomRightFilename:str":"","bottomRightAnchorX:num":"0.5","bottomRightAnchorY:num":"0.0","bottomRightOffsetX:num":"+0","bottomRightOffsetY:num":"+0","UpperLeft":"","upperLeftFilename:str":"","upperLeftAnchorX:num":"0.5","upperLeftAnchorY:num":"1.0","upperLeftOffsetX:num":"+0","upperLeftOffsetY:num":"+0","UpperRight":"","upperRightFilename:str":"","upperRightAnchorX:num":"0.5","upperRightAnchorY:num":"1.0","upperRightOffsetX:num":"+0","upperRightOffsetY:num":"+0"}
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
 * Auto-Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Auto:
 *
 * @param WaitPerChar:num
 * @text Wait per Character
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames should the game wait per character?
 * Average: 60 frames per second.
 * @default 6
 *
 * @param MinimumWait:num
 * @text Minimum Wait
 * @parent General
 * @type number
 * @min 1
 * @desc What is the minimum amount of frames to wait?
 * Average: 60 frames per second.
 * @default 300
 *
 */
/* ----------------------------------------------------------------------------
 * Extended Fast Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FastFwd:
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the Extended Fast Forward feature?
 * @default true
 *
 * @param Speed:num
 * @text Speed
 * @parent General
 * @type number
 * @min 2
 * @desc What is the speed at which Extended Fast Forward works at?
 * Higher numbers are faster.
 * @default 8
 *
 * @param SceneChangeReset:eval
 * @text Reset on Scene Change?
 * @parent General
 * @type boolean
 * @on Reset
 * @off Keep
 * @desc Reset Fast Forward setting on scene changes (ie battle, menu, or map transfers)?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Message Button Console Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgButtonConsole:
 *
 * @param General
 *
 * @param ShowDefault:eval
 * @text Show by Default?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show or hide the Message Button Console by default?
 * @default true
 *
 * @param Position:str
 * @text Position
 * @parent General
 * @type select
 * @option Top of Message Window
 * @value top
 * @option Bottom of Message Window
 * @value bottom
 * @desc Where do you wish to display the Message Button Console?
 * @default bottom
 *
 * @param AutoSizeHide:eval
 * @text Auto-Size Hide?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Hide the button console when using auto-size text codes?
 * @default false
 *
 * @param Appearance
 *
 * @param WindowSkin:str
 * @text Window Skin
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @require 1
 * @desc What is the window skin used for the buttons?
 * Ignore if using Background Images.
 * @default Window
 *
 * @param FontFace:str
 * @text Font Name
 * @parent Appearance
 * @desc What font do you wish to use for the Message Button Console?
 * @default Arial
 *
 * @param FontSize:num
 * @text Font Size
 * @parent FontFace:str
 * @type number
 * @min 1
 * @desc What font size do you wish to use for the Message Button Console?
 * @default 18
 * 
 * @param TextColors
 * @text Text Colors
 * @parent Appearance
 *
 * @param NormalColor:str
 * @text Normal Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ToggledColor:str
 * @text Toggled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param DisabledColor:str
 * @text Disabled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param Visuals
 * @text Button Visuals
 * @parent Appearance
 *
 * @param ButtonWidth:num
 * @text Width
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the width of each button?
 * @default 86
 *
 * @param ButtonHeight:num
 * @text Height
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the height of each button?
 * @default 36
 *
 * @param ButtonBuffer:num
 * @text Buffer
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the buffer between each button?
 * @default 6
 *
 * @param Images
 * @text Background Images
 * @parent Appearance
 *
 * @param ImgDisabled:str
 * @text Disabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is disabled.
 * @default 
 *
 * @param ImgDisabledOffsetX:num
 * @text Offset X
 * @parent ImgDisabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgDisabledOffsetY:num
 * @text Offset Y
 * @parent ImgDisabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgEnabled:str
 * @text Enabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is enabled.
 * @default 
 *
 * @param ImgEnabledOffsetX:num
 * @text Offset X
 * @parent ImgEnabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgEnabledOffsetY:num
 * @text Offset Y
 * @parent ImgEnabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgToggled:str
 * @text Toggled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is toggled.
 * @default 
 *
 * @param ImgToggledOffsetX:num
 * @text Offset X
 * @parent ImgToggled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgToggledOffsetY:num
 * @text Offset Y
 * @parent ImgToggled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buttons:
 *
 * @param General
 *
 * @param List:arraystr
 * @text List
 * @parent General
 * @type combo[]
 * @option auto
 * @option log
 * @option fastFwd
 * @option gameEnd
 * @option hide
 * @option load
 * @option options
 * @option save
 * @desc Which buttons appear and in what order?
 * Some commands require certain plugins installed.
 * @default ["auto","fastFwd","log","hide","save","load","options","gameEnd"]
 * 
 * @param Shortcuts
 * @text Shortcut Keys
 *
 * @param AutoKey:str
 * @text Auto-Forward Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for auto-forwarding messages.
 * @default none
 * 
 * @param SaveKey:str
 * @text Save Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick saving.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param LoadKey:str
 * @text Load Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick load.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param OptionsKey:str
 * @text Options Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for opening options.
 * Requires VisuMZ_1_OptionsCore!
 * @default none
 * 
 * @param GameEndKey:str
 * @text Game End Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for ending the game.
 * @default none
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param Auto:str
 * @text Auto-Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default AUTO
 *
 * @param FastFwd:str
 * @text Fast Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default FAST
 *
 * @param Save:str
 * @text Save Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default SAVE
 *
 * @param Load:str
 * @text Load Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default LOAD
 *
 * @param Options:str
 * @text Options
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_OptionsCore!
 * @default CONFIG
 *
 * @param GameEnd:str
 * @text Game End
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default TITLE
 *
 */
/* ----------------------------------------------------------------------------
 * Message Cursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgCursor:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the message cursor?
 * @default true
 *
 * @param GraphicType:str
 * @text Graphic Type
 * @parent General
 * @type select
 * @option Icon - From img/system/IconSet.png
 * @value icon
 * @option Image - An animated image from img/system/
 * @value image
 * @option Window Skin - Use the default Window Skin cursor
 * @value windowskin
 * @desc What is the cursor's graphic type?
 * @default icon
 * 
 * @param Icon
 *
 * @param IconIndex:str
 * @text Icon Index
 * @parent Icon
 * @desc This is icon used for the Message Cursor.
 * @default 188
 *
 * @param FlipMultiplier:str
 * @text Flip Speed Multiplier
 * @parent Icon
 * @desc What is the flip speed multiplier for the Message Cursor?
 * Use 0 for no flipping.
 * @default 1
 * 
 * @param Image
 *
 * @param Filename:str
 * @text Filename
 * @parent Image
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the image found inside the img/system/ folder.
 * @default 
 *
 * @param Rows:num
 * @text Image Rows
 * @parent Image
 * @type number
 * @min 1
 * @desc How many rows are there for the image?
 * @default 1
 *
 * @param Cols:num
 * @text Image Columns
 * @parent Image
 * @type number
 * @min 1
 * @desc How many columns are there for the image?
 * @default 1
 *
 * @param FrameDelay:num
 * @text Frame Delay
 * @parent Image
 * @type number
 * @min 1
 * @desc How many frames delayed are there per animated cell?
 * @default 4
 * 
 * @param Appearance
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Appearance
 * @desc Determine the Message Cursor's X position.
 * Use a number between 0 and 1 for best results.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Appearance
 * @desc Determine the Message Cursor's Y position.
 * Use a number between 0 and 1 for best results.
 * @default 1
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Appearance
 * @desc Offset the Message Cursor's X position by how many pixels?
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Appearance
 * @desc Offset the Message Cursor's Y position by how many pixels?
 * @default -8
 *
 */
/* ----------------------------------------------------------------------------
 * Message Tail Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgTail:
 *
 * @param AutoPosition
 * @text Auto-Position
 *
 * @param autoPositionTail:eval
 * @text Enable?
 * @parent AutoPosition
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Show Message Tails with Auto-Position text codes?
 * @default true
 *
 * @param autoPositionLeft:eval
 * @text Face Left?
 * @parent AutoPosition
 * @type boolean
 * @on Face Left
 * @off Face Right
 * @desc Which direction does the Message Tail point to?
 * @default true
 *
 * @param autoPositionOffsetX:num
 * @text Offset X
 * @parent AutoPosition
 * @desc Message Window's X offset with auto-position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param autoPositionOffsetY:num
 * @text Offset Y
 * @parent AutoPosition
 * @desc Message Window's Y offset with auto-position.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param TailDir
 * @text Tail Directions
 *
 * @param BottomLeft
 * @text Bottom Left
 * @parent TailDir
 *
 * @param bottomLeftFilename:str
 * @text Filename
 * @parent BottomLeft
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the bottom left.
 * @default 
 *
 * @param bottomLeftAnchorX:num
 * @text Anchor X
 * @parent BottomLeft
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomLeftAnchorY:num
 * @text Anchor Y
 * @parent BottomLeft
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomLeftOffsetX:num
 * @text Offset X
 * @parent BottomLeft
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomLeftOffsetY:num
 * @text Offset Y
 * @parent BottomLeft
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param BottomRight
 * @text Bottom Right
 * @parent TailDir
 *
 * @param bottomRightFilename:str
 * @text Filename
 * @parent BottomRight
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the bottom right.
 * @default 
 *
 * @param bottomRightAnchorX:num
 * @text Anchor X
 * @parent BottomRight
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomRightAnchorY:num
 * @text Anchor Y
 * @parent BottomRight
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomRightOffsetX:num
 * @text Offset X
 * @parent BottomRight
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomRightOffsetY:num
 * @text Offset Y
 * @parent BottomRight
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UpperLeft
 * @text Upper Left
 * @parent TailDir
 *
 * @param upperLeftFilename:str
 * @text Filename
 * @parent UpperLeft
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the upper left.
 * @default 
 *
 * @param upperLeftAnchorX:num
 * @text Anchor X
 * @parent UpperLeft
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param upperLeftAnchorY:num
 * @text Anchor Y
 * @parent UpperLeft
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 * @param upperLeftOffsetX:num
 * @text Offset X
 * @parent UpperLeft
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param upperLeftOffsetY:num
 * @text Offset Y
 * @parent UpperLeft
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UpperRight
 * @text Upper Right
 * @parent TailDir
 *
 * @param upperRightFilename:str
 * @text Filename
 * @parent UpperRight
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the upper right.
 * @default 
 *
 * @param upperRightAnchorX:num
 * @text Anchor X
 * @parent UpperRight
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param upperRightAnchorY:num
 * @text Anchor Y
 * @parent UpperRight
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 * @param upperRightOffsetX:num
 * @text Offset X
 * @parent UpperRight
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param upperRightOffsetY:num
 * @text Offset Y
 * @parent UpperRight
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 */
//=============================================================================

const _0x28bb63=_0x5291;(function(_0x1b209c,_0x3af9aa){const _0x36af86=_0x5291,_0x92c8f6=_0x1b209c();while(!![]){try{const _0x418541=parseInt(_0x36af86(0x1a5))/0x1*(parseInt(_0x36af86(0xcf))/0x2)+-parseInt(_0x36af86(0x1af))/0x3+-parseInt(_0x36af86(0x124))/0x4+parseInt(_0x36af86(0x1e2))/0x5+-parseInt(_0x36af86(0x122))/0x6*(-parseInt(_0x36af86(0x13b))/0x7)+parseInt(_0x36af86(0x204))/0x8*(parseInt(_0x36af86(0xda))/0x9)+-parseInt(_0x36af86(0x1f8))/0xa*(parseInt(_0x36af86(0x256))/0xb);if(_0x418541===_0x3af9aa)break;else _0x92c8f6['push'](_0x92c8f6['shift']());}catch(_0x1b682a){_0x92c8f6['push'](_0x92c8f6['shift']());}}}(_0x4e81,0xe6625));var label=_0x28bb63(0x14f),tier=tier||0x0,dependencies=[_0x28bb63(0x17c)],pluginData=$plugins[_0x28bb63(0x1d6)](function(_0x27975f){const _0x1389b2=_0x28bb63;return _0x27975f[_0x1389b2(0x179)]&&_0x27975f[_0x1389b2(0x22a)][_0x1389b2(0xf8)]('['+label+']');})[0x0];function _0x5291(_0x1e4c0c,_0x44e085){const _0x4e8154=_0x4e81();return _0x5291=function(_0x5291b6,_0x2dd77d){_0x5291b6=_0x5291b6-0xa2;let _0x5aed74=_0x4e8154[_0x5291b6];return _0x5aed74;},_0x5291(_0x1e4c0c,_0x44e085);}VisuMZ[label]['Settings']=VisuMZ[label][_0x28bb63(0x111)]||{},VisuMZ[_0x28bb63(0x141)]=function(_0x4ca60a,_0x368ba7){const _0x2fff63=_0x28bb63;for(const _0x155294 in _0x368ba7){if(_0x155294[_0x2fff63(0x192)](/(.*):(.*)/i)){if(_0x2fff63(0x1bb)===_0x2fff63(0x10b))this[_0x2fff63(0x1a2)]();else{const _0x4daa80=String(RegExp['$1']),_0x27159f=String(RegExp['$2'])[_0x2fff63(0xe7)]()[_0x2fff63(0x16b)]();let _0x2df5c0,_0x16938,_0x5b53af;switch(_0x27159f){case'NUM':_0x2df5c0=_0x368ba7[_0x155294]!==''?Number(_0x368ba7[_0x155294]):0x0;break;case'ARRAYNUM':_0x16938=_0x368ba7[_0x155294]!==''?JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294]):[],_0x2df5c0=_0x16938[_0x2fff63(0x14e)](_0x5f0948=>Number(_0x5f0948));break;case _0x2fff63(0x187):_0x2df5c0=_0x368ba7[_0x155294]!==''?eval(_0x368ba7[_0x155294]):null;break;case _0x2fff63(0x1a3):_0x16938=_0x368ba7[_0x155294]!==''?JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294]):[],_0x2df5c0=_0x16938['map'](_0x12f223=>eval(_0x12f223));break;case _0x2fff63(0x1da):_0x2df5c0=_0x368ba7[_0x155294]!==''?JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294]):'';break;case _0x2fff63(0x225):_0x16938=_0x368ba7[_0x155294]!==''?JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294]):[],_0x2df5c0=_0x16938[_0x2fff63(0x14e)](_0x3b8de4=>JSON[_0x2fff63(0x1f6)](_0x3b8de4));break;case'FUNC':_0x2df5c0=_0x368ba7[_0x155294]!==''?new Function(JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294])):new Function(_0x2fff63(0xaa));break;case _0x2fff63(0x1b3):_0x16938=_0x368ba7[_0x155294]!==''?JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294]):[],_0x2df5c0=_0x16938[_0x2fff63(0x14e)](_0x402c2a=>new Function(JSON[_0x2fff63(0x1f6)](_0x402c2a)));break;case _0x2fff63(0x158):_0x2df5c0=_0x368ba7[_0x155294]!==''?String(_0x368ba7[_0x155294]):'';break;case _0x2fff63(0xb9):_0x16938=_0x368ba7[_0x155294]!==''?JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294]):[],_0x2df5c0=_0x16938[_0x2fff63(0x14e)](_0x35f012=>String(_0x35f012));break;case _0x2fff63(0x11b):_0x5b53af=_0x368ba7[_0x155294]!==''?JSON[_0x2fff63(0x1f6)](_0x368ba7[_0x155294]):{},_0x2df5c0=VisuMZ[_0x2fff63(0x141)]({},_0x5b53af);break;case _0x2fff63(0x20c):_0x16938=_0x368ba7[_0x155294]!==''?JSON['parse'](_0x368ba7[_0x155294]):[],_0x2df5c0=_0x16938[_0x2fff63(0x14e)](_0x759a0e=>VisuMZ['ConvertParams']({},JSON[_0x2fff63(0x1f6)](_0x759a0e)));break;default:continue;}_0x4ca60a[_0x4daa80]=_0x2df5c0;}}}return _0x4ca60a;},(_0x5b9bee=>{const _0x145ce3=_0x28bb63,_0x1e4310=_0x5b9bee[_0x145ce3(0x1f3)];for(const _0x5f41ce of dependencies){if(!Imported[_0x5f41ce]){if(_0x145ce3(0x251)==='TLVVc')this[_0x145ce3(0x1df)]=0xff;else{alert(_0x145ce3(0x203)['format'](_0x1e4310,_0x5f41ce)),SceneManager[_0x145ce3(0xb0)]();break;}}}const _0x567698=_0x5b9bee[_0x145ce3(0x22a)];if(_0x567698[_0x145ce3(0x192)](/\[Version[ ](.*?)\]/i)){if('PMQSD'!==_0x145ce3(0xdd))_0x145ba4[_0x145ce3(0x241)]['_createPauseSignSprites'][_0x145ce3(0x161)](this);else{const _0x36969e=Number(RegExp['$1']);_0x36969e!==VisuMZ[label][_0x145ce3(0x1e0)]&&('BXXBX'!==_0x145ce3(0x15f)?_0x1bf714+=_0x4df22f[_0x145ce3(0xf1)]:(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x1e4310,_0x36969e)),SceneManager[_0x145ce3(0xb0)]()));}}if(_0x567698[_0x145ce3(0x192)](/\[Tier[ ](\d+)\]/i)){const _0x5728ed=Number(RegExp['$1']);_0x5728ed<tier?(alert(_0x145ce3(0x227)['format'](_0x1e4310,_0x5728ed,tier)),SceneManager[_0x145ce3(0xb0)]()):_0x145ce3(0xfd)!==_0x145ce3(0xfd)?this[_0x145ce3(0x1dc)](_0x178458):tier=Math[_0x145ce3(0x16d)](_0x5728ed,tier);}VisuMZ[_0x145ce3(0x141)](VisuMZ[label][_0x145ce3(0x111)],_0x5b9bee[_0x145ce3(0x1ec)]);})(pluginData),PluginManager[_0x28bb63(0x1f0)](pluginData['name'],_0x28bb63(0x1ca),_0x45051a=>{const _0x9af524=_0x28bb63;VisuMZ[_0x9af524(0x141)](_0x45051a,_0x45051a);const _0x437d2c=!_0x45051a[_0x9af524(0x1aa)];$gameSystem[_0x9af524(0xa6)](_0x437d2c);}),PluginManager[_0x28bb63(0x1f0)](pluginData['name'],_0x28bb63(0xbb),_0x4cf930=>{const _0x1f78ae=_0x28bb63;VisuMZ[_0x1f78ae(0x141)](_0x4cf930,_0x4cf930);const _0x3d53ee=_0x4cf930[_0x1f78ae(0xfc)];$gameSystem[_0x1f78ae(0x139)](_0x3d53ee);}),PluginManager[_0x28bb63(0x1f0)](pluginData[_0x28bb63(0x1f3)],_0x28bb63(0x1dd),_0x165103=>{const _0x585aeb=_0x28bb63;VisuMZ[_0x585aeb(0x141)](_0x165103,_0x165103);const _0x4ad6e1=_0x165103[_0x585aeb(0x13c)];$gameSystem['setMessageCursorSettings'](_0x4ad6e1);const _0x1494b3=SceneManager[_0x585aeb(0xd7)][_0x585aeb(0x15a)];_0x1494b3&&(_0x1494b3[_0x585aeb(0x17d)](),_0x1494b3[_0x585aeb(0x1d0)]());}),PluginManager['registerCommand'](pluginData[_0x28bb63(0x1f3)],_0x28bb63(0xde),_0x23a8f5=>{const _0x32360a=_0x28bb63;VisuMZ['ConvertParams'](_0x23a8f5,_0x23a8f5),$gameSystem[_0x32360a(0x1c0)](_0x23a8f5[_0x32360a(0x111)]);}),TextManager[_0x28bb63(0x171)]=function(_0x4a6d5c){const _0x347f5e=_0x28bb63;if(Window_ButtonConsole[_0x347f5e(0xd8)][_0x4a6d5c])return Window_ButtonConsole[_0x347f5e(0xd8)][_0x4a6d5c];return _0x4a6d5c[_0x347f5e(0xe7)]()['trim']();},ColorManager['getColor']=function(_0x422f95){const _0x193943=_0x28bb63;return _0x422f95=String(_0x422f95),_0x422f95['match'](/#(.*)/i)?_0x193943(0x13e)[_0x193943(0x1c2)](String(RegExp['$1'])):this[_0x193943(0x1ab)](Number(_0x422f95));},SceneManager['isSceneBattle']=function(){const _0x5c7bcb=_0x28bb63;return this[_0x5c7bcb(0xd7)]&&this[_0x5c7bcb(0xd7)][_0x5c7bcb(0x1a0)]===Scene_Battle;},SceneManager[_0x28bb63(0x11e)]=function(){const _0x5088a3=_0x28bb63;return this[_0x5088a3(0xd7)]&&this[_0x5088a3(0xd7)][_0x5088a3(0x1a0)]===Scene_Map;},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x1f1)]=SceneManager[_0x28bb63(0x24a)],SceneManager[_0x28bb63(0x24a)]=function(_0x39c4b5){const _0x22b386=_0x28bb63;VisuMZ[_0x22b386(0x14f)][_0x22b386(0x1f1)][_0x22b386(0x161)](this,_0x39c4b5);if([Scene_SaveButtonConsole,Scene_Save,Scene_Load][_0x22b386(0xf8)](_0x39c4b5)){if('adAMs'!==_0x22b386(0x193))this[_0x22b386(0x167)]();else{this[_0x22b386(0x21c)]=this[_0x22b386(0x21c)]||0x0,this[_0x22b386(0x21c)]=_0x5616e1[_0x22b386(0x16d)](this[_0x22b386(0x21c)],0x0);const _0x2e7f8b=(_0x1eba73[_0x22b386(0xe9)]||'')[_0x22b386(0xaf)];this[_0x22b386(0x21c)]+=_0x2e7f8b*_0x5cb658[_0x22b386(0x1d8)];}}},SceneManager[_0x28bb63(0x167)]=function(){const _0xffb026=_0x28bb63;for(const _0x4f6525 of $gameParty['members']()){_0x4f6525[_0xffb026(0x1ac)]()&&ImageManager['loadFace'](_0x4f6525[_0xffb026(0x1ac)]());if(_0x4f6525[_0xffb026(0x201)]()){if('AJiBr'===_0xffb026(0x12e))return _0x47e20c['isTriggered'](_0xffb026(0x1e4))||_0x3db9ba[_0xffb026(0xd5)]()?(_0x20ce3e['setExtendedFastForwardMode'](![]),!![]):![];else ImageManager[_0xffb026(0x1ef)](_0x4f6525['characterName']());}_0x4f6525['battlerName']()&&ImageManager['loadSvActor'](_0x4f6525['battlerName']());}},Game_Temp['prototype']['isMessageAutoForwardMode']=function(){return this['_messageAutoForwardMode'];},Game_Temp[_0x28bb63(0x241)][_0x28bb63(0x1a7)]=function(_0xfac8dd){const _0x58d645=_0x28bb63;this['_messageAutoForwardMode']=_0xfac8dd,$gameMessage[_0x58d645(0x154)]();},Game_Temp[_0x28bb63(0x241)]['isExtendedFastForwardMode']=function(){const _0x1616b4=_0x28bb63;return this[_0x1616b4(0x236)];},Game_Temp[_0x28bb63(0x241)]['setExtendedFastForwardMode']=function(_0x1145e7){const _0x49f8fe=_0x28bb63;this[_0x49f8fe(0x236)]=_0x1145e7,$gameMessage[_0x49f8fe(0x154)]();},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0xfa)]=Game_Temp[_0x28bb63(0x241)]['requestAnimation'],Game_Temp['prototype'][_0x28bb63(0xd1)]=function(_0x266fe0,_0x484f9f,_0xab3d0c){const _0x1c33c7=_0x28bb63;if(this['isSceneUsingExFastForward']())return;VisuMZ[_0x1c33c7(0x14f)][_0x1c33c7(0xfa)]['call'](this,_0x266fe0,_0x484f9f,_0xab3d0c);},Game_Temp[_0x28bb63(0x241)][_0x28bb63(0x172)]=function(){const _0x18a766=_0x28bb63,_0x2544b6=SceneManager['_scene'];return _0x2544b6&&_0x2544b6[_0x18a766(0x114)]&&_0x2544b6[_0x18a766(0x114)]();},VisuMZ[_0x28bb63(0x14f)]['Game_System_initialize']=Game_System['prototype'][_0x28bb63(0x128)],Game_System['prototype'][_0x28bb63(0x128)]=function(){const _0x1944ca=_0x28bb63;VisuMZ[_0x1944ca(0x14f)]['Game_System_initialize'][_0x1944ca(0x161)](this),this[_0x1944ca(0x125)](),this[_0x1944ca(0x182)](),this[_0x1944ca(0x110)]();},Game_System[_0x28bb63(0x241)][_0x28bb63(0x125)]=function(){const _0x1aaa03=_0x28bb63;this[_0x1aaa03(0xe6)]=Window_ButtonConsole[_0x1aaa03(0x235)];},Game_System[_0x28bb63(0x241)]['isMessageButtonConsoleVisible']=function(){const _0x4964e5=_0x28bb63;return this[_0x4964e5(0xe6)]===undefined&&this[_0x4964e5(0x125)](),this['_messageButtonConsoleVisible'];},Game_System['prototype']['setMessageButtonConsoleVisible']=function(_0x1896b8){const _0x4a69e5=_0x28bb63;this['_messageButtonConsoleVisible']===undefined&&this[_0x4a69e5(0x125)](),this[_0x4a69e5(0xe6)]=_0x1896b8;},Game_System[_0x28bb63(0x241)][_0x28bb63(0x182)]=function(){const _0x386180=_0x28bb63;this[_0x386180(0xa8)]=![];},Game_System['prototype'][_0x28bb63(0x229)]=function(){const _0x3a79e5=_0x28bb63;return this[_0x3a79e5(0xa8)]===undefined&&this[_0x3a79e5(0x182)](),this[_0x3a79e5(0xa8)];},Game_System[_0x28bb63(0x241)][_0x28bb63(0xa6)]=function(_0x1ad064){const _0x5b1d8d=_0x28bb63;this[_0x5b1d8d(0xa8)]===undefined&&this['initExtendedFastForward'](),this[_0x5b1d8d(0xa8)]=_0x1ad064;},Game_System[_0x28bb63(0x241)][_0x28bb63(0x110)]=function(){const _0x463fac=_0x28bb63;this[_0x463fac(0x15c)]=JsonEx[_0x463fac(0x1bc)](VisuMZ[_0x463fac(0x14f)][_0x463fac(0x111)][_0x463fac(0x13c)]);},Game_System[_0x28bb63(0x241)]['getMessageCursorSettings']=function(){const _0x456728=_0x28bb63;return this[_0x456728(0x15c)]===undefined&&this['initMessageCursorSettings'](),this[_0x456728(0x15c)];},Game_System[_0x28bb63(0x241)]['setMessageCursorSettings']=function(_0x39f1ab){const _0x47eae6=_0x28bb63;this['_msgCursorSettings']===undefined&&this['initMessageCursorSettings'](),this[_0x47eae6(0x15c)]=JsonEx[_0x47eae6(0x1bc)](_0x39f1ab);},Game_System['prototype'][_0x28bb63(0x165)]=function(){const _0x2240bc=_0x28bb63;if(this[_0x2240bc(0xcd)]===undefined){const _0x261014=VisuMZ[_0x2240bc(0x14f)][_0x2240bc(0x111)][_0x2240bc(0x1e9)];this[_0x2240bc(0xcd)]=JsonEx['makeDeepCopy'](_0x261014);}return this[_0x2240bc(0xcd)];},Game_System['prototype'][_0x28bb63(0x1c0)]=function(_0x2fcb6c){const _0x46f529=_0x28bb63;this[_0x46f529(0xcd)]=JsonEx[_0x46f529(0x1bc)](_0x2fcb6c);},Game_Message['prototype'][_0x28bb63(0x154)]=function(){const _0x1a8a5b=_0x28bb63,_0x3edc4e=SceneManager[_0x1a8a5b(0xd7)];if(!_0x3edc4e)return;const _0x17a207=_0x3edc4e['_messageWindow'];if(!_0x17a207)return;_0x17a207[_0x1a8a5b(0x154)]();},VisuMZ[_0x28bb63(0x14f)]['Scene_Boot_loadSystemImages']=Scene_Boot['prototype'][_0x28bb63(0x166)],Scene_Boot[_0x28bb63(0x241)][_0x28bb63(0x166)]=function(){const _0x29c0cb=_0x28bb63;VisuMZ[_0x29c0cb(0x14f)]['Scene_Boot_loadSystemImages'][_0x29c0cb(0x161)](this),this[_0x29c0cb(0x14b)]();},Scene_Boot[_0x28bb63(0x241)][_0x28bb63(0x14b)]=function(){const _0x19323b=_0x28bb63,_0x585f79=VisuMZ['ExtMessageFunc'][_0x19323b(0x111)][_0x19323b(0xbb)],_0x5133d8=[_0x19323b(0xa7),_0x19323b(0x1bf),_0x19323b(0x221)];for(const _0x999377 of _0x5133d8){if(_0x19323b(0x170)==='GOPai'){if(_0x571794[_0x19323b(0x11e)]()&&_0x478557&&!_0x2de3ee[_0x19323b(0x216)]())return!![];else{if(_0x1f4f69[_0x19323b(0x1cb)]()&&!_0x4c8dca[_0x19323b(0x216)]())return!![];}return![];}else _0x585f79[_0x999377]=_0x585f79[_0x999377]??'',_0x585f79[_0x999377]!==''&&ImageManager[_0x19323b(0x1b0)](_0x585f79[_0x999377]);}},Scene_Message[_0x28bb63(0x185)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x248)][_0x28bb63(0x1ce)],Scene_Message[_0x28bb63(0x142)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x248)][_0x28bb63(0x226)],Scene_Message[_0x28bb63(0x222)]=VisuMZ[_0x28bb63(0x14f)]['Settings'][_0x28bb63(0x248)][_0x28bb63(0x1fb)]??!![],VisuMZ[_0x28bb63(0x14f)]['Scene_Message_createAllWindows']=Scene_Message[_0x28bb63(0x241)][_0x28bb63(0x238)],Scene_Message['prototype'][_0x28bb63(0x238)]=function(){const _0x2d1b71=_0x28bb63;VisuMZ[_0x2d1b71(0x14f)][_0x2d1b71(0x20a)][_0x2d1b71(0x161)](this),Scene_Message[_0x2d1b71(0x222)]&&$gameTemp[_0x2d1b71(0x1ed)](![]);},Scene_Message[_0x28bb63(0x241)][_0x28bb63(0x114)]=function(){const _0x1d71c9=_0x28bb63;if(!Scene_Message[_0x1d71c9(0x185)])return![];if($gameSystem['isExtendedFastForwardDisallowed']())return![];if(this[_0x1d71c9(0x183)]())return![];return this[_0x1d71c9(0x1b5)]();},Scene_Message[_0x28bb63(0x241)][_0x28bb63(0x1b5)]=function(){const _0x1b2ceb=_0x28bb63;if(Imported[_0x1b2ceb(0x1ff)]&&$gameMap[_0x1b2ceb(0x1c4)]())return![];if(Imported[_0x1b2ceb(0x1d9)]){if(SceneManager[_0x1b2ceb(0x196)]())return![];if(SceneManager[_0x1b2ceb(0x186)])return![];}if(!this[_0x1b2ceb(0x183)]()){if(Input[_0x1b2ceb(0x135)](VisuMZ[_0x1b2ceb(0x149)][_0x1b2ceb(0x111)]['General'][_0x1b2ceb(0x23b)]))return!![];}return $gameTemp[_0x1b2ceb(0x114)]();},Scene_Message[_0x28bb63(0x241)][_0x28bb63(0x183)]=function(){const _0x49c513=_0x28bb63;if(this['_choiceListWindow']&&this[_0x49c513(0x11f)][_0x49c513(0x1cc)])return!![];if(this[_0x49c513(0x12c)]&&this[_0x49c513(0x12c)][_0x49c513(0x1cc)])return!![];if(this[_0x49c513(0x12b)]&&this[_0x49c513(0x12b)][_0x49c513(0x1cc)])return!![];return![];},Scene_Message[_0x28bb63(0x241)]['updateExtendedFastForwardCancel']=function(){const _0x1459b8=_0x28bb63;if(Input[_0x1459b8(0x19a)](_0x1459b8(0x1e4))||TouchInput[_0x1459b8(0xd5)]())return $gameTemp[_0x1459b8(0x1ed)](![]),!![];else{if(_0x1459b8(0x143)==='xXlwm')return![];else{const _0x5def22=this['_buttonConsoleSprites']['ImgDisabled'];_0x5def22[_0x1459b8(0x164)]=this['textColorID']()===_0x3ff920['TEXT_COLOR_DISABLED'];}}},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x22b)]=Scene_Map[_0x28bb63(0x241)][_0x28bb63(0xf2)],Scene_Map[_0x28bb63(0x241)][_0x28bb63(0xf2)]=function(){const _0x763137=_0x28bb63;this['isExtendedFastForwardMode']()?this[_0x763137(0x127)]():_0x763137(0x113)==='IHQaA'?VisuMZ[_0x763137(0x14f)]['Scene_Map_updateMainMultiply'][_0x763137(0x161)](this):(this[_0x763137(0x11a)](_0x1cbe6c),this[_0x763137(0x1b7)](),this[_0x763137(0x155)](_0x2ced7d),_0x246974[_0x763137(0x14f)][_0x763137(0x1f7)][_0x763137(0x161)](this,_0x27000c),this[_0x763137(0x21c)]=0x0);},Scene_Map[_0x28bb63(0x241)]['isExtendedFastForwardMode']=function(){const _0x5a0475=_0x28bb63;return Scene_Message[_0x5a0475(0x241)][_0x5a0475(0x114)]['call'](this)&&$gameMap[_0x5a0475(0x216)]();},Scene_Map[_0x28bb63(0x241)][_0x28bb63(0x127)]=function(){const _0x2d6d6c=_0x28bb63;let _0x5c2f4d=Scene_Message[_0x2d6d6c(0x142)];while(_0x5c2f4d--&&$gameMap[_0x2d6d6c(0x216)]()&&!this['anyActiveMessageInputWindows']()){this['updateFade'](),this['updateColorFilter'](),this['updateMain'](),SceneManager[_0x2d6d6c(0xc9)]();if(this[_0x2d6d6c(0xca)]())break;}};function _0x4e81(){const _0x2d2cfb=['Scene_Map_updateMainMultiply','Window_Message_autoPositionOffsetY','_messageTailSprite','hvzLU','AnchorY','_lastExtMsgFuncIndex','anchor','NbWjq','scale','updateCustomMessageCursorPauseSignSprites','DEFAULT_SHOW','_extendedFastForwardMode','japvs','createAllWindows','_buttonConsoleSprites','bottom%1Filename','FastForwardKey','cbwdQ','height','POSITION','aWWaz','ToNdX','prototype','alignButtonConsoleButtons','VxDWK','_pauseSignAnimationCount','width','updateDimensions','%1Filename','FastFwd','AUTO_FORWARD_MIN_DELAY','push','Buttons','startPause','Window_Message_startPause','setFrame','CcOlz','drawText','eHwSl','XHVII','AnchorX','FvToQ','pXHtz','6532702HJHfre','DisabledColor','Window_Message_update','pegOO','create','meetExtMsgFuncResetRequirements','FONT_SIZE','setExtendedFastForwardDisallowed','ImgDisabled','_disallowFastForward','textColorID','return\x200','_interpreter','_cachedIndex','atKOl','ButtonWidth','length','exit','toggleMessageWindowVisibility','%1OffsetY','removeChild','options','General','BUTTON_BUFFER','hqDgO','icCks','ARRAYSTR','updateMessageTailPosition','MsgButtonConsole','isClosing','isMessageAutoForwardMode','Window_Message_initialize','KpjVp','updateExtMsgFuncResetTimers','_autoPositionTarget','AutoKey','SNYQa','zvzBU','XbsBF','updateMessageTailSprite','RgNXQ','pause','updateEffekseer','updateExtendedFastForwardCancel','initMembers','replace','_messageTailSettings','startWait','94loJUOI','preConvertEscapeCharacters','requestAnimation','createMessageTailSprite','updateImageMessageCursorPauseSignSprites','pRoHT','isCancelled','padding','_scene','VOCAB','playCancel','6381mYZDrq','Rows','left','PMQSD','MessageTailSettings','getMessageCursorSettings','yzjxO','_type','Position','innerWidth','resetFontSettings','cos','_messageButtonConsoleVisible','toUpperCase','Window_Message_autoPositionOffsetX','buffer','wAlRQ','List','Scene_Battle_update','_cache_customMessageCursorFrameCount','createContents','rSAqV','crUAD','BUTTON_HEIGHT','updateMainMultiply','SKIN','clamp','SaveKey','nlPRr','log','includes','isAnySubWindowActive','Game_Temp_requestAnimation','_heldDownFastFwd','Visible','fwzda','%1%2','right','gnnvt','mRLnG','nDBNz','addButtonConsoleObject','hide','VisuMZ_3_MessageLog','AutoSizeHide','flushTextState','OffsetX','lastFile','getColor','dNJoM','Cols','ShowDefault','Window_Message_updateAutoPosition','processButtonShortcut','initMessageCursorSettings','Settings','ngITo','IHQaA','isExtendedFastForwardMode','fontSize','oNYal','sqbVd','contents','ZgNJI','prepareHideButtonConsoleTextCode','STRUCT','onTouchScrollStart','WaitPerChar','isSceneMap','_choiceListWindow','mpeio','_messageTail','14454IkfbMN','updateBackOpacity','1057432EXawww','initMessageButtonConsole','toLowerCase','updateExtendedFastForwardMode','initialize','updateMessageTailVisibility','updateColor','_eventItemWindow','_numberInputWindow','IOHRQ','rcNkZ','getCustomBackgroundSettings','BUTTON_WIDTH','clear','createBackImageSprites','nSAWA','Auto','isPressed','nXNqw','convertMessageTailEscapeCodes','innerHeight','setMessageButtonConsoleVisible','FontSize','35uytQyW','MsgCursor','EWBks','#%1','yJFtx','isSaveEnabled','ConvertParams','EXT_FAST_FORWARD_LOOPS','xXlwm','isCustomMessageCursorEnabled','drawFace','round','getMessageTailMainKey','_autoSizeRegexp','MessageCore','EXT_CURSOR_FOLLOW_TEXT','loadSystemImagesForExtMessageFunc','WQQOW','bitmap','map','ExtMessageFunc','Window_Message','createButtonConsole','_extFastForwardLooping','iconWidth','refreshButtonConsole','parseMessageTailTextCodes','command101','addChild','STR','Game_Interpreter_command101','_messageWindow','Window_Message_updateDimensions','_msgCursorSettings','hideButtonConsoleAutoSize','_windowskin','BXXBX','_contentsSprite','call','isRTL','isMessageButtonConsoleVisible','visible','getMessageTailSettings','loadSystemImages','loadPartyGraphics','save','createCustomMessageCursorPauseSignSprites','bottom','trim','Window_Message_initMembers','max','SHORTCUT_KEY','MGgfo','Wrpis','msgButtonConsole','isSceneUsingExFastForward','text','drawing','ButtonBuffer','erULn','UBEeL','Load','status','TEXT_COLOR_NORMAL','update','VisuMZ_1_MessageCore','_createPauseSignSprites','BAOaC','%1AnchorY','Window_Base_flushTextState','updatePauseSignHeightextMsgFunction','initExtendedFastForward','anyActiveMessageInputWindows','CraST','EXT_FAST_FORWARD_ENABLED','_afterQteSessionDelay','EVAL','opacity','newPage','playOkSound','GDYPs','usesAutoPositionMessageTail','direction','Window_Message_addedHeight','VisuMZ_1_SaveCore','autoPositionTail','removeExistingPauseSignSprites','match','xcSAk','floor','eZkVK','isPlayingQTE','FrameDelay','cVJky','image','isTriggered','IconSet','_hideButtonConsole','top','Right','positionX','constructor','Window_Message_startWait','playBuzzerSound','ARRAYEVAL','trIOg','36911Dqsknq','setupMessageTailSettings','setMessageAutoForwardMode','skip','fastfwd','Allow','textColor','faceName','_buttonConsoleButtons','BKqmy','4543509mIvMoq','loadSystem','location','FlipMultiplier','ARRAYFUNC','upper','isActivatedExtendedFastForwardMode','VisuMZ_4_MessageVisibility','resetMessageTailSettings','autoForwardTriggered','loadWindowskin','WindowLayer_update','bRchf','makeDeepCopy','TEXT_COLOR_TOGGLED','AFHLL','ImgEnabled','setMessageTailSettings','showButtonConsole','format','gameend','isFurnitureSystemMode','OptionsKey','WindowSkin','<HIDEBUTTONCONSOLE>','onSavefileOk','OQTPy','ExtFastFwdDisallow','isSceneBattle','active','toggleAutoForward','Enable','openness','_refreshPauseSign','_parentWindow','auto','autoPositionLeft','TEXT_COLOR_DISABLED','BUTTON_ORDER','filter','updateConsoleVisibility','AUTO_FORWARD_DELAY_PER_CHAR','VisuMZ_2_QTE_TriggerSys','JSON','Left','moveCustomMessageCursorPauseSign','MessageCursorSettings','ToggledColor','backOpacity','version','_currentAutoSize','2316170zvtwxt','ButtonHeight','escape','Options','updateAutoPosition','isMainMenuMessageLogEnabled','GameEndKey','MsgTail','FollowText','eJypl','parameters','setExtendedFastForwardMode','NormalColor','loadCharacter','registerCommand','SceneManager_push','windowskin','name','OffsetY','addChildToBack','parse','Window_Message_newPage','20jwkutW','IconIndex','_pauseSignSprite','SceneChangeReset','%1OffsetX','fekyr','updateBackImageSpriteVisibility','VisuMZ_2_FurnitureSystem','refreshCustomMessageCursorPauseSign','characterName','autoPositionOffsetY','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','19184XVTUkF','refresh','backlog','KQlkX','_updatePauseSign','convertVariableEscapeCharacters','Scene_Message_createAllWindows','updateIconMessageCursorPauseSignSprites','ARRAYSTRUCT','addedHeight','nCHVE','isOpen','%1AnchorX','dQCrd','frameCount','USE_BACK_IMAGE_SPRITES','szFKp','addAutoForwardDelay','isEventRunning','alpha','_index','FONT_FACE','load','Window_Base_preConvertEscapeCharacters','_autoForwardCount','GraphicType','_autoPosRegExp','checkBackImageSprites','isAnySavefileExists','ImgToggled','EXT_FAST_FORWARD_STOP_ON_SCENE_CHANGE','Woxkv','autoPositionOffsetX','ARRAYJSON','Speed','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','VisuMZ_1_OptionsCore','isExtendedFastForwardDisallowed','description'];_0x4e81=function(){return _0x2d2cfb;};return _0x4e81();}function Scene_SaveButtonConsole(){const _0x4d3cc8=_0x28bb63;this[_0x4d3cc8(0x128)](...arguments);}Scene_SaveButtonConsole['prototype']=Object[_0x28bb63(0xa3)](Scene_Save[_0x28bb63(0x241)]),Scene_SaveButtonConsole[_0x28bb63(0x241)]['constructor']=Scene_SaveButtonConsole,Scene_SaveButtonConsole[_0x28bb63(0x241)][_0x28bb63(0x1c8)]=function(){const _0xf9251f=_0x28bb63;this[_0xf9251f(0xac)]=0x0;let _0x154b4a=$gameMap[_0xf9251f(0xab)];for(;;){if(_0x154b4a['_childInterpreter'])_0x154b4a=_0x154b4a['_childInterpreter'];else{if(_0xf9251f(0x243)!==_0xf9251f(0x1fd)){this[_0xf9251f(0xac)]=_0x154b4a[_0xf9251f(0x218)],_0x154b4a['_index']=_0x154b4a['_lastExtMsgFuncIndex'];break;}else this['initMessageButtonConsole']();}}Scene_Save[_0xf9251f(0x241)]['onSavefileOk'][_0xf9251f(0x161)](this),_0x154b4a[_0xf9251f(0x218)]=this[_0xf9251f(0xac)];},Scene_SaveButtonConsole['prototype'][_0x28bb63(0x12f)]=function(_0xb812d4){const _0x45ca8c=_0x28bb63;return Scene_Save[_0x45ca8c(0x241)][_0x45ca8c(0x12f)]['call'](this,'Scene_Save');},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x159)]=Game_Interpreter[_0x28bb63(0x241)]['command101'],Game_Interpreter[_0x28bb63(0x241)][_0x28bb63(0x156)]=function(_0x2d3540){const _0x1d0088=_0x28bb63;return this[_0x1d0088(0x230)]=this[_0x1d0088(0x218)],VisuMZ[_0x1d0088(0x14f)]['Game_Interpreter_command101'][_0x1d0088(0x161)](this,_0x2d3540);},VisuMZ[_0x28bb63(0x14f)]['Scene_Battle_update']=Scene_Battle[_0x28bb63(0x241)][_0x28bb63(0x17b)],Scene_Battle[_0x28bb63(0x241)][_0x28bb63(0x17b)]=function(){const _0x34e740=_0x28bb63;VisuMZ['ExtMessageFunc'][_0x34e740(0xec)][_0x34e740(0x161)](this);if(this[_0x34e740(0x114)]())this[_0x34e740(0x127)]();},Scene_Battle[_0x28bb63(0x241)][_0x28bb63(0x114)]=function(){const _0x217748=_0x28bb63;return![];return Scene_Message[_0x217748(0x241)][_0x217748(0x114)]['call'](this)&&$gameTroop['isEventRunning']()&&!this[_0x217748(0x152)];},Scene_Battle[_0x28bb63(0x241)]['updateExtendedFastForwardMode']=function(){const _0x5e4c47=_0x28bb63;this[_0x5e4c47(0x152)]=!![];let _0x1d6c5b=Scene_Message[_0x5e4c47(0x142)];while(_0x1d6c5b--&&$gameTroop['isEventRunning']()&&!this['anyActiveMessageInputWindows']()){this[_0x5e4c47(0x17b)](),SceneManager[_0x5e4c47(0xc9)]();if(this[_0x5e4c47(0xca)]())break;}this[_0x5e4c47(0x152)]=![];},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x1ba)]=WindowLayer[_0x28bb63(0x241)][_0x28bb63(0x17b)],WindowLayer['prototype'][_0x28bb63(0x17b)]=function(){const _0x1668d4=_0x28bb63;if(SceneManager[_0x1668d4(0xd7)]['_extFastForwardLooping'])return;VisuMZ['ExtMessageFunc']['WindowLayer_update'][_0x1668d4(0x161)](this);},VisuMZ['ExtMessageFunc'][_0x28bb63(0x180)]=Window_Base['prototype'][_0x28bb63(0x107)],Window_Base[_0x28bb63(0x241)][_0x28bb63(0x107)]=function(_0x3b3696){const _0x45e062=_0x28bb63;this[_0x45e062(0x1a0)][_0x45e062(0x1f3)]===_0x45e062(0x150)&&this['addAutoForwardDelay'](_0x3b3696),VisuMZ['ExtMessageFunc'][_0x45e062(0x180)][_0x45e062(0x161)](this,_0x3b3696),this[_0x45e062(0x1a0)]['name']==='Window_Message'&&(_0x45e062(0x117)!=='sqbVd'?this[_0x45e062(0x244)]-=_0x27c1fd*_0x1d80bc['FrameDelay']:this[_0x45e062(0x1dc)](_0x3b3696));},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0xbe)]=Window_Message['prototype'][_0x28bb63(0x128)],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x128)]=function(_0x128be7){const _0x3ea5cc=_0x28bb63;VisuMZ['ExtMessageFunc'][_0x3ea5cc(0xbe)][_0x3ea5cc(0x161)](this,_0x128be7),this[_0x3ea5cc(0xd2)]();},VisuMZ['ExtMessageFunc'][_0x28bb63(0x258)]=Window_Message[_0x28bb63(0x241)]['update'],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x17b)]=function(){const _0x67e5b6=_0x28bb63;VisuMZ[_0x67e5b6(0x14f)][_0x67e5b6(0x258)][_0x67e5b6(0x161)](this),this[_0x67e5b6(0xc0)](),this[_0x67e5b6(0xc6)]();},Window_Message[_0x28bb63(0x241)][_0x28bb63(0xc0)]=function(){const _0x44d590=_0x28bb63;if(!this[_0x44d590(0xa4)]())return;$gameTemp[_0x44d590(0xbd)]()&&(_0x44d590(0x13d)===_0x44d590(0x13d)?$gameTemp['setMessageAutoForwardMode'](![]):_0x5284d7[_0x44d590(0x104)]()),$gameTemp[_0x44d590(0x114)]()&&$gameTemp[_0x44d590(0x1ed)](![]);},Window_Message[_0x28bb63(0x241)][_0x28bb63(0xa4)]=function(){const _0x48c68a=_0x28bb63;if(SceneManager[_0x48c68a(0x11e)]()&&$gameMap&&!$gameMap[_0x48c68a(0x216)]())return!![];else{if(SceneManager[_0x48c68a(0x1cb)]()&&!$gameMap[_0x48c68a(0x216)]())return!![];}return![];},VisuMZ['ExtMessageFunc']['Window_Message_isTriggered']=Window_Message['prototype'][_0x28bb63(0x19a)],Window_Message[_0x28bb63(0x241)]['isTriggered']=function(){const _0x1c58be=_0x28bb63;if(SceneManager['_scene']['isExtendedFastForwardMode']())return!![];else{if(Input['isTriggered'](Window_ButtonConsole[_0x1c58be(0x16e)][_0x1c58be(0x1d2)]))return this['toggleAutoForward'](),![];else{if(Input[_0x1c58be(0x19a)](Window_ButtonConsole[_0x1c58be(0x16e)][_0x1c58be(0x168)]))return this['processButtonShortcut']('save'),![];else{if(Input['isTriggered'](Window_ButtonConsole[_0x1c58be(0x16e)][_0x1c58be(0x21a)])){if(_0x1c58be(0x17e)===_0x1c58be(0x17e))return this[_0x1c58be(0x10f)](_0x1c58be(0x21a)),![];else{const _0xfa0324=this['_pauseSignSprite'];if(!_0xfa0324)return;if(!_0x836f07[_0x1c58be(0x163)]())return;if(this[_0x1c58be(0x1e1)])return;_0xfa0324['y']-=_0x35db74[_0x1c58be(0xf1)];}}else{if(Input[_0x1c58be(0x19a)](Window_ButtonConsole[_0x1c58be(0x16e)][_0x1c58be(0xb4)]))return this[_0x1c58be(0x10f)](_0x1c58be(0xb4)),![];else{if(Input[_0x1c58be(0x19a)](Window_ButtonConsole[_0x1c58be(0x16e)]['gameend'])){if('eJypl'!==_0x1c58be(0x1eb)){const _0x3e290a=this['_pauseSignSprite'];if(!_0x3e290a)return;const _0x47bc05=_0x5c9b87[_0x1c58be(0xdf)](),_0x1af3a9=_0x47bc05[_0x1c58be(0x21d)][_0x1c58be(0x126)]()[_0x1c58be(0x16b)]();if(_0x1af3a9==='image')_0x3e290a[_0x1c58be(0x14d)]=_0x477a7a[_0x1c58be(0x1b0)](_0x47bc05['Filename']);else{if(_0x1af3a9==='windowskin'){const _0x46ef2d=0x90,_0x34a921=0x60,_0x5506cb=0x18;_0x3e290a['bitmap']=this[_0x1c58be(0x15e)],_0x3e290a[_0x1c58be(0x24e)](_0x46ef2d,_0x34a921,_0x5506cb,_0x5506cb);}else _0x3e290a[_0x1c58be(0x14d)]=_0x11bdcc[_0x1c58be(0x1b0)](_0x1c58be(0x19b));}}else return this[_0x1c58be(0x10f)](_0x1c58be(0x1c3)),![];}else return this[_0x1c58be(0xc8)]&&$gameTemp[_0x1c58be(0xbd)]()?this[_0x1c58be(0x1b8)]():_0x1c58be(0x18b)===_0x1c58be(0x18b)?VisuMZ['ExtMessageFunc']['Window_Message_isTriggered'][_0x1c58be(0x161)](this):(this['_lastExtMsgFuncIndex']=this[_0x1c58be(0x218)],_0x416177[_0x1c58be(0x14f)][_0x1c58be(0x159)]['call'](this,_0x69c131));}}}}}},VisuMZ[_0x28bb63(0x14f)]['Window_Message_newPage']=Window_Message[_0x28bb63(0x241)]['newPage'],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x189)]=function(_0x3a446c){const _0x491118=_0x28bb63;this[_0x491118(0x11a)](_0x3a446c),this['resetMessageTailSettings'](),this['parseMessageTailTextCodes'](_0x3a446c),VisuMZ['ExtMessageFunc'][_0x491118(0x1f7)]['call'](this,_0x3a446c),this[_0x491118(0x21c)]=0x0;},Window_Message[_0x28bb63(0x241)]['drawMessageFace']=function(){const _0xa3434a=_0x28bb63,_0x518b5a=$gameMessage['faceName'](),_0x568128=$gameMessage['faceIndex'](),_0x433ed5=$gameMessage[_0xa3434a(0x162)]();let _0x442c7f=ImageManager['faceWidth'],_0x3ada4e=this[_0xa3434a(0x138)],_0x240fd4=_0x433ed5?this[_0xa3434a(0xe3)]-_0x442c7f-0x4:0x4,_0x2ba195=0x0;_0x3ada4e-=this[_0xa3434a(0x20d)](),this[_0xa3434a(0x145)](_0x518b5a,_0x568128,_0x240fd4,_0x2ba195,_0x442c7f,_0x3ada4e);},Window_Message[_0x28bb63(0x1d8)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x134)][_0x28bb63(0x11d)],Window_Message['AUTO_FORWARD_MIN_DELAY']=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x134)]['MinimumWait'],Window_Message['prototype'][_0x28bb63(0x215)]=function(_0x445275){const _0x1e5587=_0x28bb63;this[_0x1e5587(0x21c)]=this['_autoForwardCount']||0x0,this[_0x1e5587(0x21c)]=Math['max'](this[_0x1e5587(0x21c)],0x0);const _0x3e6147=(_0x445275[_0x1e5587(0xe9)]||'')['length'];this['_autoForwardCount']+=_0x3e6147*Window_Message['AUTO_FORWARD_DELAY_PER_CHAR'];},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1cd)]=function(){const _0x4e5741=_0x28bb63;if(this['_hideButtonConsole'])return;if(!$gameSystem['isMessageButtonConsoleVisible']())return;let _0x52592c=!$gameTemp[_0x4e5741(0xbd)]();$gameTemp[_0x4e5741(0x1a7)](_0x52592c),_0x52592c?this[_0x4e5741(0x18a)]():SoundManager[_0x4e5741(0xd9)]();},Window_Message[_0x28bb63(0x241)]['autoForwardTriggered']=function(){const _0x2e9a91=_0x28bb63;return this[_0x2e9a91(0x21c)]=this['_autoForwardCount']||0x0,VisuMZ[_0x2e9a91(0x14f)]['Window_Message_isTriggered'][_0x2e9a91(0x161)](this)?(SoundManager['playCancel'](),$gameTemp[_0x2e9a91(0x1a7)](![]),!![]):_0x2e9a91(0x214)!==_0x2e9a91(0x211)?this[_0x2e9a91(0x21c)]--<=0x0:(this['setupMessageTailSettings'](!![],!![],_0x14478d),'');},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x24d)]=Window_Message[_0x28bb63(0x241)][_0x28bb63(0x24c)],Window_Message[_0x28bb63(0x241)]['startPause']=function(){const _0x2de1b1=_0x28bb63;VisuMZ[_0x2de1b1(0x14f)][_0x2de1b1(0x24d)][_0x2de1b1(0x161)](this),this[_0x2de1b1(0x21c)]=this['_autoForwardCount']||0x0,this['_autoForwardCount']=Math['max'](this[_0x2de1b1(0x21c)],Window_Message[_0x2de1b1(0x249)]);},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x16c)]=Window_Message['prototype'][_0x28bb63(0xcb)],Window_Message[_0x28bb63(0x241)][_0x28bb63(0xcb)]=function(){const _0x4c5a90=_0x28bb63;VisuMZ[_0x4c5a90(0x14f)][_0x4c5a90(0x16c)][_0x4c5a90(0x161)](this),this['createButtonConsole']();},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x21b)]=Window_Base[_0x28bb63(0x241)][_0x28bb63(0xd0)],Window_Base[_0x28bb63(0x241)]['preConvertEscapeCharacters']=function(_0x460b1e){const _0x38c4de=_0x28bb63;return _0x460b1e=_0x460b1e['replace'](/<HIDE (?:BUTTON CONSOLE|CONSOLE|BUTTONS)>/gi,_0x38c4de(0x1c7)),_0x460b1e=VisuMZ[_0x38c4de(0x14f)][_0x38c4de(0x21b)][_0x38c4de(0x161)](this,_0x460b1e),_0x460b1e;},Window_Message['prototype'][_0x28bb63(0x11a)]=function(_0x55a31a){const _0x5e5c92=_0x28bb63;let _0x541f18=_0x55a31a['text'];this[_0x5e5c92(0x19c)]=![],_0x541f18=_0x541f18[_0x5e5c92(0xcc)](_0x5e5c92(0x1c7),()=>{const _0xc19ec7=_0x5e5c92;return this[_0xc19ec7(0x19c)]=!![],'';}),this[_0x5e5c92(0x15d)](_0x541f18)&&(this[_0x5e5c92(0x19c)]=!![]),_0x55a31a['text']=_0x541f18;};if(!Window_Message['prototype']['addedHeight']){let text='';text+='VisuMZ_1_MessageCore\x20is\x20out\x20of\x20date.\x0a',text+='The\x20latest\x20version\x20is\x20required\x20to\x20use\x0a',text+='the\x20VisuMZ_2_ExtMessageFunc\x20plugin.',alert(text),SceneManager['exit']();}Window_Message['prototype'][_0x28bb63(0x15d)]=function(_0x2653f6){const _0x53e651=_0x28bb63;if(!VisuMZ[_0x53e651(0x14f)][_0x53e651(0x111)][_0x53e651(0xbb)][_0x53e651(0x106)])return![];if(_0x2653f6['match'](Window_Message[_0x53e651(0x148)]))return!![];if(_0x2653f6[_0x53e651(0x192)](Window_Message[_0x53e651(0x21e)]))return!![];return![];},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x18e)]=Window_Message[_0x28bb63(0x241)][_0x28bb63(0x20d)],Window_Message[_0x28bb63(0x241)]['addedHeight']=function(){const _0x28e5f5=_0x28bb63;let _0x56054d=VisuMZ[_0x28e5f5(0x14f)][_0x28e5f5(0x18e)][_0x28e5f5(0x161)](this);if(this[_0x28e5f5(0x19c)])return _0x56054d;return SceneManager[_0x28e5f5(0x11e)]()&&$gameSystem[_0x28e5f5(0x163)]()&&([_0x28e5f5(0x19d),_0x28e5f5(0x16a)][_0x28e5f5(0xf8)](Window_ButtonConsole[_0x28e5f5(0x23e)][_0x28e5f5(0x126)]()[_0x28e5f5(0x16b)]())&&(_0x56054d+=Window_ButtonConsole[_0x28e5f5(0xf1)])),_0x56054d;},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x15b)]=Window_Message[_0x28bb63(0x241)][_0x28bb63(0x246)],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x246)]=function(){const _0x28f24a=_0x28bb63;VisuMZ[_0x28f24a(0x14f)][_0x28f24a(0x15b)][_0x28f24a(0x161)](this),this[_0x28f24a(0x1c1)](),this['refreshButtonConsole']();},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1c1)]=function(){const _0x462d1e=_0x28bb63;if(!SceneManager['isSceneMap']())return;for(const _0x107b44 of this[_0x462d1e(0x1ad)]){_0x462d1e(0x1ae)!==_0x462d1e(0x1ae)?(_0x3aabed[_0x1d82c5]=_0xf04062[_0x43d404]??'',_0x39dc59[_0x8caab5]!==''&&_0x420b3d[_0x462d1e(0x1b0)](_0x53285c[_0x30b61a])):!this[_0x462d1e(0x19c)]&&$gameSystem['isMessageButtonConsoleVisible']()?_0x107b44['show']():_0x107b44['hide']();}this[_0x462d1e(0x242)]();},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x154)]=function(){const _0x170023=_0x28bb63;for(const _0x47927e of this[_0x170023(0x1ad)]){_0x170023(0x16f)===_0x170023(0x16f)?_0x47927e[_0x170023(0x205)]():this[_0x170023(0x182)]();}},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x151)]=function(){const _0x42c704=_0x28bb63;this[_0x42c704(0x1ad)]=[];for(const _0x195bc7 of Window_ButtonConsole[_0x42c704(0x1d5)]){this[_0x42c704(0x103)](_0x195bc7);}this[_0x42c704(0x242)]();},Window_Message['prototype'][_0x28bb63(0x103)]=function(_0x15ef32){const _0x127c44=_0x28bb63;_0x15ef32=_0x15ef32[_0x127c44(0x126)]()[_0x127c44(0x16b)]();switch(_0x15ef32){case _0x127c44(0x1a8):if(!Scene_Message[_0x127c44(0x185)])return;break;case _0x127c44(0xb4):if(!Imported[_0x127c44(0x228)])return;break;case _0x127c44(0x168):case _0x127c44(0x21a):if(!Imported[_0x127c44(0x18f)])return;break;case _0x127c44(0x104):if(!Imported['VisuMZ_4_MessageVisibility'])return;break;case _0x127c44(0x206):case'log':if(!Imported[_0x127c44(0x105)])return;break;}const _0x44c790=new Window_ButtonConsole(_0x15ef32,this);this[_0x127c44(0x1ad)][_0x127c44(0x24a)](_0x44c790),this[_0x127c44(0x157)](_0x44c790);},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x242)]=function(){const _0x4cc86b=_0x28bb63;if(!SceneManager['isSceneMap']())return;if(!$gameSystem[_0x4cc86b(0x163)]())return;const _0x1e7fe3=Window_ButtonConsole[_0x4cc86b(0x23e)]['toLowerCase']()[_0x4cc86b(0x16b)](),_0x5b6b8b=this[_0x4cc86b(0x1ad)];this['_contentsSprite']['x']=this['_contentsSprite']['y']=0x0;if(['top',_0x4cc86b(0x16a)][_0x4cc86b(0xf8)](_0x1e7fe3)){if(_0x4cc86b(0x1a4)===_0x4cc86b(0x1a4)){let _0x3e2c35=_0x5b6b8b[_0x4cc86b(0xaf)]*Window_ButtonConsole['BUTTON_WIDTH'];_0x3e2c35+=(_0x5b6b8b[_0x4cc86b(0xaf)]-0x1)*Window_ButtonConsole[_0x4cc86b(0xb6)];let _0x2141ea=Math[_0x4cc86b(0x194)]((this[_0x4cc86b(0x245)]-_0x3e2c35)/0x2),_0x479ef7=_0x2141ea;for(const _0x5ba828 of _0x5b6b8b){_0x5ba828['x']=_0x479ef7,_0x479ef7+=Window_ButtonConsole[_0x4cc86b(0x130)]+Window_ButtonConsole[_0x4cc86b(0xb6)];}}else return _0x449190['status']&&_0x4e2702[_0x4cc86b(0x22a)]['includes']('['+_0x17f50c+']');}if(_0x1e7fe3===_0x4cc86b(0x19d)){if('kFsdF'===_0x4cc86b(0x252)){const _0x3c324d=this[_0x4cc86b(0x1fa)],_0x362056=_0x3c324d[_0x4cc86b(0x14d)],_0x510142=_0x536d00[_0x4cc86b(0xdf)](),_0x32b9a6=_0x16e46c['floor'](this[_0x4cc86b(0x244)]/_0x510142['FrameDelay']),_0x2eff67=_0x466920[_0x4cc86b(0x194)](_0x362056[_0x4cc86b(0x245)]/_0x510142[_0x4cc86b(0x10c)]),_0x3faa49=_0x5422ee['floor'](_0x362056[_0x4cc86b(0x23d)]/_0x510142['Rows']),_0x1d5f6f=_0x32b9a6%_0x510142['Cols']*_0x2eff67,_0x5346cc=_0x30202e['floor'](_0x32b9a6/_0x510142['Cols'])*_0x3faa49;_0x3c324d[_0x4cc86b(0x24e)](_0x1d5f6f,_0x5346cc,_0x2eff67,_0x3faa49),_0x3c324d[_0x4cc86b(0x164)]=this[_0x4cc86b(0x20f)]();}else{let _0x274230=Window_ButtonConsole[_0x4cc86b(0xb6)];for(const _0x281e25 of _0x5b6b8b){_0x281e25['y']=_0x274230;}_0x274230=Window_ButtonConsole[_0x4cc86b(0xf1)],this[_0x4cc86b(0x160)]['y']=_0x274230;}};if(_0x1e7fe3===_0x4cc86b(0x16a)){if(_0x4cc86b(0xef)===_0x4cc86b(0xad))this[_0x4cc86b(0x21f)]();else{let _0x19f1aa=this[_0x4cc86b(0x23d)]-Window_ButtonConsole[_0x4cc86b(0xf1)];_0x19f1aa-=Window_ButtonConsole['BUTTON_BUFFER'];for(const _0x5f20ec of _0x5b6b8b){_0x5f20ec['y']=_0x19f1aa;}}}},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x10f)]=function(_0x461a82){const _0x29d23d=_0x28bb63;if(this['_hideButtonConsole'])return;if(!$gameSystem[_0x29d23d(0x163)]())return;_0x461a82=_0x461a82[_0x29d23d(0x126)]()[_0x29d23d(0x16b)]();switch(_0x461a82){case'save':if($gameSystem[_0x29d23d(0x140)]()&&SceneManager['isSceneMap']()){if(_0x29d23d(0xa2)!==_0x29d23d(0x101))this[_0x29d23d(0x18a)](),SceneManager['push'](Scene_SaveButtonConsole);else return!![];}else this[_0x29d23d(0x1a2)]();break;case _0x29d23d(0x21a):if(DataManager['isAnySavefileExists']()&&SceneManager[_0x29d23d(0x11e)]())this[_0x29d23d(0x18a)](),SceneManager[_0x29d23d(0x24a)](Scene_Load);else{if(_0x29d23d(0x177)===_0x29d23d(0x207)){const _0x5362fc=this['_messageTail'],_0xd013a0=_0x5362fc[_0x29d23d(0x1b1)]===_0x29d23d(0x1b4)?_0x29d23d(0x1b4):'bottom',_0x3fd279=_0x5362fc[_0x29d23d(0x18d)]===_0x29d23d(0xdc)?'Left':'Right';return _0x29d23d(0xfe)[_0x29d23d(0x1c2)](_0xd013a0,_0x3fd279);}else this[_0x29d23d(0x1a2)]();}break;case _0x29d23d(0xb4):SceneManager['isSceneMap']()?(this['playOkSound'](),SceneManager['push'](Scene_Options)):this['playBuzzerSound']();break;case _0x29d23d(0x1c3):SceneManager[_0x29d23d(0x11e)]()?_0x29d23d(0xc3)===_0x29d23d(0xc3)?(this['playOkSound'](),SceneManager[_0x29d23d(0x24a)](Scene_GameEnd)):(this[_0x29d23d(0x1a0)][_0x29d23d(0x1f3)]===_0x29d23d(0x150)&&this[_0x29d23d(0x215)](_0x4634ae),_0x3a6270['ExtMessageFunc'][_0x29d23d(0x180)][_0x29d23d(0x161)](this,_0x5bcf4a),this['constructor'][_0x29d23d(0x1f3)]==='Window_Message'&&this[_0x29d23d(0x1dc)](_0x1df641)):this[_0x29d23d(0x1a2)]();break;}},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x1a1)]=Window_Message[_0x28bb63(0x241)][_0x28bb63(0xce)],Window_Message[_0x28bb63(0x241)][_0x28bb63(0xce)]=function(_0x54d640){const _0x10dd63=_0x28bb63;if(SceneManager[_0x10dd63(0xd7)][_0x10dd63(0x114)]()){if(_0x10dd63(0xbf)!=='lyaIl')return;else this[_0x10dd63(0xd3)]();}VisuMZ[_0x10dd63(0x14f)][_0x10dd63(0x1a1)][_0x10dd63(0x161)](this,_0x54d640);},Window_Message['prototype'][_0x28bb63(0x144)]=function(){const _0x579320=$gameSystem['getMessageCursorSettings']();return _0x579320['Enable'];},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x17d)]=function(){const _0x1a56f8=_0x28bb63;this[_0x1a56f8(0x144)]()?_0x1a56f8(0x237)===_0x1a56f8(0x237)?(this[_0x1a56f8(0x191)](),this[_0x1a56f8(0x169)]()):(_0x38bf11[_0x1a56f8(0x17d)](),_0x466ceb[_0x1a56f8(0x1d0)]()):'KLrdT'!=='KLrdT'?this[_0x1a56f8(0x20b)]():Window_Base[_0x1a56f8(0x241)]['_createPauseSignSprites']['call'](this);},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x191)]=function(){const _0x1a81e6=_0x28bb63;if(!this[_0x1a81e6(0x1fa)])return;this[_0x1a81e6(0xb3)](this[_0x1a81e6(0x1fa)]);},Window_Message['prototype'][_0x28bb63(0x169)]=function(){const _0x21e804=_0x28bb63,_0x105a1f=$gameSystem[_0x21e804(0xdf)]();this[_0x21e804(0x1fa)]=new Sprite(),this[_0x21e804(0x157)](this['_pauseSignSprite']),this[_0x21e804(0x1fa)]['anchor']['x']=_0x105a1f[_0x21e804(0x253)],this[_0x21e804(0x1fa)][_0x21e804(0x231)]['y']=_0x105a1f[_0x21e804(0x22f)],this['_pauseSignAnimationCount']=0x0;},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1d0)]=function(){const _0x462d99=_0x28bb63;this[_0x462d99(0x144)]()?this[_0x462d99(0x200)]():(Window_Base[_0x462d99(0x241)][_0x462d99(0x1d0)][_0x462d99(0x161)](this),this[_0x462d99(0x181)]());},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x200)]=function(){const _0x5581c4=_0x28bb63,_0x40698f=this[_0x5581c4(0x1fa)];if(!_0x40698f)return;const _0x1274bf=$gameSystem[_0x5581c4(0xdf)](),_0x363824=_0x1274bf[_0x5581c4(0x21d)][_0x5581c4(0x126)]()[_0x5581c4(0x16b)]();if(_0x363824===_0x5581c4(0x199))_0x40698f[_0x5581c4(0x14d)]=ImageManager[_0x5581c4(0x1b0)](_0x1274bf['Filename']);else{if(_0x363824===_0x5581c4(0x1f2)){if('cblUc'!==_0x5581c4(0x195)){const _0x3a0f90=0x90,_0x123b4b=0x60,_0x46a363=0x18;_0x40698f[_0x5581c4(0x14d)]=this[_0x5581c4(0x15e)],_0x40698f['setFrame'](_0x3a0f90,_0x123b4b,_0x46a363,_0x46a363);}else return this[_0x5581c4(0x1b8)]();}else _0x40698f['bitmap']=ImageManager[_0x5581c4(0x1b0)](_0x5581c4(0x19b));}},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x181)]=function(){const _0x5b2c4b=_0x28bb63,_0x5bb66a=this[_0x5b2c4b(0x1fa)];if(!_0x5bb66a)return;if(!$gameSystem['isMessageButtonConsoleVisible']())return;if(this[_0x5b2c4b(0x1e1)])return;_0x5bb66a['y']-=Window_ButtonConsole[_0x5b2c4b(0xf1)];},Window_Message['prototype'][_0x28bb63(0x208)]=function(){const _0x20a32a=_0x28bb63;this[_0x20a32a(0x144)]()?_0x20a32a(0x184)===_0x20a32a(0x133)?_0x1f4839[_0x20a32a(0x241)][_0x20a32a(0x208)][_0x20a32a(0x161)](this):this[_0x20a32a(0x234)]():_0x20a32a(0x1c9)===_0x20a32a(0x1c9)?Window_Base[_0x20a32a(0x241)]['_updatePauseSign']['call'](this):this[_0x20a32a(0x200)]();},Window_Message['prototype'][_0x28bb63(0x234)]=function(){const _0x56e478=_0x28bb63;if(this[_0x56e478(0xed)]===Graphics['frameCount'])return;this[_0x56e478(0xed)]=Graphics[_0x56e478(0x212)];const _0x4276ba=this[_0x56e478(0x1fa)];if(!_0x4276ba)return;const _0x425845=_0x4276ba[_0x56e478(0x14d)];if(_0x425845[_0x56e478(0x245)]<=0x0)return;const _0x465f88=$gameSystem[_0x56e478(0xdf)](),_0x3841c2=_0x465f88[_0x56e478(0x21d)][_0x56e478(0x126)]()['trim'](),_0x3ff0c8=this[_0x56e478(0xf9)]()||this[_0x56e478(0xbc)]();_0x4276ba[_0x56e478(0x217)]=_0x3ff0c8?0x0:0x1;if(_0x4276ba[_0x56e478(0x217)]<=0x0)return;const _0x10468d=_0x465f88[_0x56e478(0xdb)]*_0x465f88[_0x56e478(0x10c)];this['_pauseSignAnimationCount']++;while(this[_0x56e478(0x244)]>=_0x10468d*_0x465f88[_0x56e478(0x197)]){if(_0x56e478(0x102)===_0x56e478(0x102))this[_0x56e478(0x244)]-=_0x10468d*_0x465f88[_0x56e478(0x197)];else return _0x53884f[_0x56e478(0x1d4)];}if(_0x3841c2==='image'){if(_0x56e478(0x120)!==_0x56e478(0x232))this[_0x56e478(0xd3)]();else return!![];}else _0x3841c2===_0x56e478(0x1f2)?Window_Base[_0x56e478(0x241)][_0x56e478(0x208)][_0x56e478(0x161)](this):_0x56e478(0xf6)===_0x56e478(0xf6)?this['updateIconMessageCursorPauseSignSprites']():this[_0x56e478(0xcd)]=_0x32b3be[_0x56e478(0x1bc)](_0x28b657);},Window_Message[_0x28bb63(0x241)][_0x28bb63(0xd3)]=function(){const _0x383343=_0x28bb63,_0x7e10d7=this[_0x383343(0x1fa)],_0x3a77c1=_0x7e10d7[_0x383343(0x14d)],_0x1dfe69=$gameSystem[_0x383343(0xdf)](),_0x546628=Math[_0x383343(0x194)](this['_pauseSignAnimationCount']/_0x1dfe69[_0x383343(0x197)]),_0x3aaa2f=Math[_0x383343(0x194)](_0x3a77c1[_0x383343(0x245)]/_0x1dfe69[_0x383343(0x10c)]),_0x5d3bce=Math[_0x383343(0x194)](_0x3a77c1[_0x383343(0x23d)]/_0x1dfe69['Rows']),_0x5ddc74=_0x546628%_0x1dfe69[_0x383343(0x10c)]*_0x3aaa2f,_0xd6c841=Math[_0x383343(0x194)](_0x546628/_0x1dfe69[_0x383343(0x10c)])*_0x5d3bce;_0x7e10d7['setFrame'](_0x5ddc74,_0xd6c841,_0x3aaa2f,_0x5d3bce),_0x7e10d7[_0x383343(0x164)]=this['isOpen']();},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x20b)]=function(){const _0x3af539=_0x28bb63,_0x343afd=this[_0x3af539(0x1fa)],_0xb6fbb2=$gameSystem[_0x3af539(0xdf)](),_0x37b71e=_0xb6fbb2[_0x3af539(0x1f9)],_0x3d21a4=ImageManager[_0x3af539(0x153)],_0x3214e4=ImageManager['iconHeight'],_0x2901f0=_0x37b71e%0x10*_0x3d21a4,_0x29fece=Math['floor'](_0x37b71e/0x10)*_0x3214e4;_0x343afd[_0x3af539(0x24e)](_0x2901f0,_0x29fece,_0x3d21a4,_0x3214e4),_0x343afd[_0x3af539(0x164)]=this[_0x3af539(0x20f)]();if(_0xb6fbb2[_0x3af539(0x1b2)]===0x0)return;_0x343afd[_0x3af539(0x233)]['x']=Math[_0x3af539(0xe5)](Graphics['frameCount']*_0xb6fbb2['FlipMultiplier']);},Window_Message[_0x28bb63(0x14a)]=VisuMZ['ExtMessageFunc'][_0x28bb63(0x111)][_0x28bb63(0x13c)][_0x28bb63(0x1ea)]??!![],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1dc)]=function(_0x28e3c2){const _0xb3e3c=_0x28bb63;if(!_0x28e3c2)return;if(!_0x28e3c2[_0xb3e3c(0x174)])return;if(!this[_0xb3e3c(0x144)]())return;const _0x5642de=this[_0xb3e3c(0x1fa)];if(!_0x5642de)return;const _0x54da04=$gameSystem[_0xb3e3c(0xdf)]();_0x5642de['x']=_0x28e3c2['x']+this['padding']+_0x54da04[_0xb3e3c(0x108)]+_0x5642de[_0xb3e3c(0x245)]/0x2,_0x5642de['x']+=this[_0xb3e3c(0x160)]['x'],_0x5642de['y']=_0x28e3c2['y']+this[_0xb3e3c(0xd6)]+_0x28e3c2['height']+_0x54da04[_0xb3e3c(0x1f4)],_0x5642de['y']+=this[_0xb3e3c(0x160)]['y'],_0x5642de['x']=Math[_0xb3e3c(0x146)](_0x5642de['x'][_0xb3e3c(0xf4)](this[_0xb3e3c(0xd6)],this[_0xb3e3c(0x245)])),_0x5642de['y']=Math[_0xb3e3c(0x146)](_0x5642de['y'][_0xb3e3c(0xf4)](this[_0xb3e3c(0xd6)],this['height']-this[_0xb3e3c(0xd6)]));},Window_Message[_0x28bb63(0x241)][_0x28bb63(0xd2)]=function(){const _0x213775=_0x28bb63;this[_0x213775(0x22d)]=new Sprite(),this[_0x213775(0x22d)]['visible']=![],this[_0x213775(0x157)](this[_0x213775(0x22d)]);},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1b7)]=function(){const _0x7527f2=_0x28bb63;this[_0x7527f2(0x121)]={'visible':![],'lastFile':'','location':_0x7527f2(0x16a),'direction':'left','positionX':'auto'};},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x155)]=function(_0x4b7d50){const _0x41234b=_0x28bb63;_0x4b7d50[_0x41234b(0x173)]=this[_0x41234b(0x209)](_0x4b7d50[_0x41234b(0x173)]),_0x4b7d50['text']=this[_0x41234b(0x137)](_0x4b7d50[_0x41234b(0x173)]);},Window_Message['prototype'][_0x28bb63(0x137)]=function(_0x38caca){const _0x841afb=_0x28bb63;return _0x38caca=_0x38caca[_0x841afb(0xcc)](/<TAIL (?:BL|BOTTOM LEFT|DL|DOWN LEFT):[ ](\d+)>/gi,(_0xa4a724,_0x2fed68)=>{const _0x23173b=_0x841afb;if(_0x23173b(0xe0)!=='yzjxO')this[_0x23173b(0x1a2)]();else return this[_0x23173b(0x1a6)](!![],!![],_0x2fed68),'';}),_0x38caca=_0x38caca[_0x841afb(0xcc)](/<TAIL (?:BR|BOTTOM RIGHT|DL|DOWN RIGHT):[ ](\d+)>/gi,(_0x236156,_0x18c951)=>{const _0x3f486b=_0x841afb;if(_0x3f486b(0xf0)!==_0x3f486b(0x255))return this[_0x3f486b(0x1a6)](!![],![],_0x18c951),'';else{if(_0x5091cb[_0x3f486b(0xd8)][_0x5276ff])return _0x435fda[_0x3f486b(0xd8)][_0x5e2ff0];return _0x9da9b9[_0x3f486b(0xe7)]()[_0x3f486b(0x16b)]();}}),_0x38caca=_0x38caca[_0x841afb(0xcc)](/<TAIL (?:UL|UPPER LEFT|UP LEFT):[ ](\d+)>/gi,(_0x3ce2af,_0x5460c3)=>{return this['setupMessageTailSettings'](![],!![],_0x5460c3),'';}),_0x38caca=_0x38caca[_0x841afb(0xcc)](/<TAIL (?:UR|UPPER RIGHT|UP RIGHT):[ ](\d+)>/gi,(_0x5aa91f,_0x20b270)=>{const _0x2a90e5=_0x841afb;if(_0x2a90e5(0xb8)!==_0x2a90e5(0xb8)){_0x24428b[_0x2a90e5(0x141)](_0x2959dc,_0x4eae2e);const _0x6cf04f=!_0x1fbf71[_0x2a90e5(0x1aa)];_0x187228[_0x2a90e5(0xa6)](_0x6cf04f);}else return this['setupMessageTailSettings'](![],![],_0x20b270),'';}),_0x38caca;},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1a6)]=function(_0x11dfa1,_0x56ba0e,_0x4ae06c){const _0x5d4c6f=_0x28bb63;if(!this[_0x5d4c6f(0x121)])this[_0x5d4c6f(0x1b7)]();this[_0x5d4c6f(0x121)]['visible']=!![],this[_0x5d4c6f(0x121)][_0x5d4c6f(0x1b1)]=_0x11dfa1?'bottom':_0x5d4c6f(0x1b4),this['_messageTail'][_0x5d4c6f(0x18d)]=_0x56ba0e?_0x5d4c6f(0xdc):_0x5d4c6f(0xff),this[_0x5d4c6f(0x121)]['positionX']=Number(_0x4ae06c);},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x10e)]=Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1e6)],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x1e6)]=function(){const _0x2553a0=_0x28bb63;VisuMZ[_0x2553a0(0x14f)][_0x2553a0(0x10e)][_0x2553a0(0x161)](this);if(!this[_0x2553a0(0xc1)])return;if(!this[_0x2553a0(0x22d)])return;if(!this['_messageTail'])return;if(this[_0x2553a0(0x18c)]()){const _0x7df084=$gameSystem[_0x2553a0(0x165)](),_0x530c6a=_0x7df084[_0x2553a0(0x1d3)]?'left':_0x2553a0(0xff);this[_0x2553a0(0x121)][_0x2553a0(0x164)]=!![],this['_messageTail'][_0x2553a0(0x109)]='',this[_0x2553a0(0x121)]['location']=_0x2553a0(0x16a),this[_0x2553a0(0x121)][_0x2553a0(0x18d)]=_0x530c6a,this[_0x2553a0(0x121)]['positionX']=_0x2553a0(0x1d2);}},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x18c)]=function(){const _0x474104=_0x28bb63,_0x26a9ab=$gameSystem[_0x474104(0x165)]();if(!_0x26a9ab)return![];if(!_0x26a9ab['autoPositionTail'])return![];const _0xe8adf0=_0x26a9ab[_0x474104(0x1d3)]?_0x474104(0x1db):_0x474104(0x19e),_0x57c4ca=_0x474104(0x23a)[_0x474104(0x1c2)](_0xe8adf0),_0x3665d6=_0x26a9ab[_0x57c4ca]||'';return _0x3665d6[_0x474104(0x16b)]()!=='';},VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0xe8)]=Window_Message['prototype'][_0x28bb63(0x224)],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x224)]=function(){const _0x2bde26=_0x28bb63;let _0x38bd60=VisuMZ[_0x2bde26(0x14f)][_0x2bde26(0xe8)][_0x2bde26(0x161)](this);const _0x59ac1c=$gameSystem['getMessageTailSettings']();return _0x59ac1c&&_0x59ac1c['autoPositionTail']&&(_0x38bd60+=_0x59ac1c[_0x2bde26(0x224)]),_0x38bd60;},VisuMZ[_0x28bb63(0x14f)]['Window_Message_autoPositionOffsetY']=Window_Message['prototype'][_0x28bb63(0x202)],Window_Message[_0x28bb63(0x241)][_0x28bb63(0x202)]=function(){const _0x3dd7dc=_0x28bb63;let _0x1798f9=VisuMZ['ExtMessageFunc'][_0x3dd7dc(0x22c)][_0x3dd7dc(0x161)](this);const _0x78abb9=$gameSystem[_0x3dd7dc(0x165)]();return _0x78abb9&&_0x78abb9[_0x3dd7dc(0x190)]&&(_0x3dd7dc(0x23c)!==_0x3dd7dc(0x23f)?_0x1798f9+=_0x78abb9[_0x3dd7dc(0x202)]:(_0x1dd40a[_0x3dd7dc(0x241)]['update'][_0x3dd7dc(0x161)](this),this[_0x3dd7dc(0x1d7)](),this['updateColor'](),this[_0x3dd7dc(0x1fe)]())),_0x1798f9;},Window_Message[_0x28bb63(0x241)][_0x28bb63(0xc6)]=function(){const _0x34774e=_0x28bb63;if(!this['_messageTailSprite'])return;if(!this[_0x34774e(0x121)])return;this['updateMessageTailBitmap'](),this[_0x34774e(0x129)](),this[_0x34774e(0xba)]();},Window_Message['prototype'][_0x28bb63(0x147)]=function(){const _0x5b417e=_0x28bb63,_0xd95879=this[_0x5b417e(0x121)],_0x243ff1=_0xd95879[_0x5b417e(0x1b1)]==='upper'?_0x5b417e(0x1b4):_0x5b417e(0x16a),_0x5f2296=_0xd95879['direction']===_0x5b417e(0xdc)?_0x5b417e(0x1db):_0x5b417e(0x19e);return _0x5b417e(0xfe)[_0x5b417e(0x1c2)](_0x243ff1,_0x5f2296);},Window_Message['prototype']['updateMessageTailBitmap']=function(){const _0x12b66f=_0x28bb63,_0x2f185b=this['_messageTailSprite'],_0xd79edb=this[_0x12b66f(0x121)],_0x504825=$gameSystem[_0x12b66f(0x165)](),_0x2abd3e=this[_0x12b66f(0x147)]();if(_0xd79edb[_0x12b66f(0x109)]===_0x504825['%1Filename'['format'](_0x2abd3e)])return;const _0x476ac7=_0x504825[_0x12b66f(0x247)[_0x12b66f(0x1c2)](_0x2abd3e)];_0xd79edb[_0x12b66f(0x109)]=_0x476ac7,_0x476ac7?_0x2f185b[_0x12b66f(0x14d)]=ImageManager[_0x12b66f(0x1b0)](_0x476ac7):_0x2f185b[_0x12b66f(0x14d)]=new Bitmap(0x1,0x1);},Window_Message[_0x28bb63(0x241)][_0x28bb63(0x129)]=function(){const _0x5be2be=_0x28bb63,_0x3f9234=this[_0x5be2be(0x22d)],_0x16f289=this[_0x5be2be(0x121)];_0x3f9234[_0x5be2be(0x164)]=_0x16f289['visible']&&this[_0x5be2be(0x1cf)]===0xff;},Window_Message[_0x28bb63(0x241)]['updateMessageTailPosition']=function(){const _0x2aa93a=_0x28bb63,_0x314a2d=this[_0x2aa93a(0x22d)],_0x52d40f=this[_0x2aa93a(0x121)],_0x569c54=$gameSystem[_0x2aa93a(0x165)](),_0x5dd079=this['getMessageTailMainKey']();_0x314a2d['anchor']['x']=_0x569c54[_0x2aa93a(0x210)[_0x2aa93a(0x1c2)](_0x5dd079)],_0x314a2d[_0x2aa93a(0x231)]['y']=_0x569c54[_0x2aa93a(0x17f)['format'](_0x5dd079)];if(_0x52d40f[_0x2aa93a(0x19f)]===_0x2aa93a(0x1d2)){if(_0x2aa93a(0xea)!=='wAlRQ'){const _0x2344cb=new _0x1e24b7(0x0,0x0,_0x4014cd[_0x2aa93a(0x130)],_0x2bf731[_0x2aa93a(0xf1)]);this[_0x2aa93a(0x1d1)]=_0x52730f,_0xf56f10['prototype'][_0x2aa93a(0x128)]['call'](this,_0x2344cb),this['createBackImageSprites'](),this[_0x2aa93a(0xe1)]=_0x299fcb['toLowerCase']()[_0x2aa93a(0x16b)](),this[_0x2aa93a(0x205)](),this[_0x2aa93a(0x104)]();}else _0x314a2d['x']=Math[_0x2aa93a(0x146)](this[_0x2aa93a(0x245)]/0x2);}else _0x52d40f['positionX']=Number(_0x52d40f[_0x2aa93a(0x19f)]),_0x314a2d['x']=Math[_0x2aa93a(0x146)](_0x52d40f[_0x2aa93a(0x19f)]);_0x52d40f[_0x2aa93a(0x1b1)]===_0x2aa93a(0x1b4)?_0x314a2d['y']=0x0:_0x314a2d['y']=this[_0x2aa93a(0x23d)],_0x314a2d['x']+=_0x569c54[_0x2aa93a(0x1fc)['format'](_0x5dd079)],_0x314a2d['y']+=_0x569c54[_0x2aa93a(0xb2)['format'](_0x5dd079)];};function Window_ButtonConsole(){const _0x18aae6=_0x28bb63;this[_0x18aae6(0x128)](...arguments);}Window_ButtonConsole[_0x28bb63(0x241)]=Object[_0x28bb63(0xa3)](Window_Scrollable[_0x28bb63(0x241)]),Window_ButtonConsole['prototype']['constructor']=Window_ButtonConsole,Window_ButtonConsole[_0x28bb63(0x235)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)]['MsgButtonConsole'][_0x28bb63(0x10d)],Window_ButtonConsole['POSITION']=VisuMZ[_0x28bb63(0x14f)]['Settings'][_0x28bb63(0xbb)][_0x28bb63(0xe2)],Window_ButtonConsole[_0x28bb63(0xf3)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0xbb)][_0x28bb63(0x1c6)],Window_ButtonConsole[_0x28bb63(0x219)]=VisuMZ[_0x28bb63(0x14f)]['Settings'][_0x28bb63(0xbb)]['FontFace'],Window_ButtonConsole[_0x28bb63(0xa5)]=VisuMZ[_0x28bb63(0x14f)]['Settings'][_0x28bb63(0xbb)][_0x28bb63(0x13a)],Window_ButtonConsole[_0x28bb63(0x17a)]=VisuMZ[_0x28bb63(0x14f)]['Settings'][_0x28bb63(0xbb)][_0x28bb63(0x1ee)],Window_ButtonConsole['TEXT_COLOR_TOGGLED']=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)]['MsgButtonConsole'][_0x28bb63(0x1de)],Window_ButtonConsole[_0x28bb63(0x1d4)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0xbb)][_0x28bb63(0x257)],Window_ButtonConsole[_0x28bb63(0x130)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0xbb)][_0x28bb63(0xae)],Window_ButtonConsole[_0x28bb63(0xf1)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0xbb)][_0x28bb63(0x1e3)],Window_ButtonConsole[_0x28bb63(0xb6)]=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0xbb)][_0x28bb63(0x175)],Window_ButtonConsole['BUTTON_ORDER']=VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)]['Buttons'][_0x28bb63(0xeb)],Window_ButtonConsole[_0x28bb63(0xd8)]={'auto':VisuMZ['ExtMessageFunc'][_0x28bb63(0x111)][_0x28bb63(0x24b)]['Auto'],'fastfwd':VisuMZ['ExtMessageFunc']['Settings'][_0x28bb63(0x24b)][_0x28bb63(0x248)],'save':VisuMZ[_0x28bb63(0x14f)]['Settings'][_0x28bb63(0x24b)]['Save'],'load':VisuMZ['ExtMessageFunc'][_0x28bb63(0x111)]['Buttons'][_0x28bb63(0x178)],'options':VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x24b)][_0x28bb63(0x1e5)],'gameend':VisuMZ['ExtMessageFunc'][_0x28bb63(0x111)]['Buttons']['GameEnd']},Window_ButtonConsole['SHORTCUT_KEY']={'auto':VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x24b)][_0x28bb63(0xc2)],'save':VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x24b)][_0x28bb63(0xf5)],'load':VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)]['Buttons']['LoadKey'],'options':VisuMZ['ExtMessageFunc'][_0x28bb63(0x111)][_0x28bb63(0x24b)][_0x28bb63(0x1c5)],'gameend':VisuMZ[_0x28bb63(0x14f)][_0x28bb63(0x111)][_0x28bb63(0x24b)][_0x28bb63(0x1e8)]},Window_ButtonConsole[_0x28bb63(0x241)][_0x28bb63(0x128)]=function(_0x4e3d81,_0x2acfd3){const _0x3799bd=_0x28bb63,_0x38a103=new Rectangle(0x0,0x0,Window_ButtonConsole[_0x3799bd(0x130)],Window_ButtonConsole['BUTTON_HEIGHT']);this[_0x3799bd(0x1d1)]=_0x2acfd3,Window_Scrollable[_0x3799bd(0x241)][_0x3799bd(0x128)][_0x3799bd(0x161)](this,_0x38a103),this[_0x3799bd(0x132)](),this[_0x3799bd(0xe1)]=_0x4e3d81[_0x3799bd(0x126)]()['trim'](),this[_0x3799bd(0x205)](),this['hide']();},Window_ButtonConsole[_0x28bb63(0x241)]['itemPadding']=function(){return 0x0;},Window_ButtonConsole['prototype'][_0x28bb63(0x1b9)]=function(){const _0x40e313=_0x28bb63;this[_0x40e313(0x1f2)]=ImageManager[_0x40e313(0x1b0)](Window_ButtonConsole['SKIN']);},Window_ButtonConsole['prototype']['updatePadding']=function(){const _0x284e21=_0x28bb63;this[_0x284e21(0xd6)]=0x0;},Window_ButtonConsole[_0x28bb63(0x241)][_0x28bb63(0x123)]=function(){const _0x534452=_0x28bb63;this[_0x534452(0x1df)]=0xff;},Window_ButtonConsole[_0x28bb63(0x241)][_0x28bb63(0x132)]=function(){const _0x89622d=_0x28bb63;Window_ButtonConsole['USE_BACK_IMAGE_SPRITES']===undefined&&this['checkBackImageSprites']();if(!Window_ButtonConsole[_0x89622d(0x213)])return;this[_0x89622d(0x188)]=0x0;const _0x499c8c=VisuMZ['ExtMessageFunc'][_0x89622d(0x111)][_0x89622d(0xbb)],_0x5b6e9e=[_0x89622d(0xa7),_0x89622d(0x1bf),_0x89622d(0x221)];this[_0x89622d(0x239)]={};for(const _0x290a1d of _0x5b6e9e){if(_0x499c8c[_0x290a1d]!==''){const _0x5113b3=ImageManager[_0x89622d(0x1b0)](_0x499c8c[_0x290a1d]);this[_0x89622d(0x239)][_0x290a1d]=new Sprite(_0x5113b3);const _0x467ca8=this[_0x89622d(0x239)][_0x290a1d];this[_0x89622d(0x1f5)](_0x467ca8),_0x467ca8['x']=_0x499c8c['%1OffsetX'[_0x89622d(0x1c2)](_0x290a1d)]||0x0,_0x467ca8['y']=_0x499c8c[_0x89622d(0xb2)[_0x89622d(0x1c2)](_0x290a1d)]||0x0;}}this[_0x89622d(0x1fe)]();},Window_ButtonConsole['prototype'][_0x28bb63(0x21f)]=function(){const _0x53d369=_0x28bb63;Window_ButtonConsole[_0x53d369(0x213)]=![];const _0x89ab22=VisuMZ['ExtMessageFunc']['Settings']['MsgButtonConsole'],_0x517141=[_0x53d369(0xa7),_0x53d369(0x1bf),_0x53d369(0x221)];for(const _0x39aa76 of _0x517141){if(_0x53d369(0x13f)!==_0x53d369(0x13f))this[_0x53d369(0x18a)](),_0x558497[_0x53d369(0x24a)](_0x503b93);else{if(_0x89ab22[_0x39aa76]!==''){Window_ButtonConsole['USE_BACK_IMAGE_SPRITES']=!![];break;}}}},Window_ButtonConsole['prototype']['resetFontSettings']=function(){const _0x115f91=_0x28bb63;Window_Scrollable[_0x115f91(0x241)]['resetFontSettings']['call'](this),this[_0x115f91(0x118)]['fontFace']=Window_ButtonConsole['FONT_FACE'],this[_0x115f91(0x118)][_0x115f91(0x115)]=Window_ButtonConsole[_0x115f91(0xa5)];},Window_ButtonConsole['prototype']['refresh']=function(){const _0x5bc802=_0x28bb63;this[_0x5bc802(0xee)](),this[_0x5bc802(0xe4)]();const _0x2334f0=TextManager['msgButtonConsole'](this[_0x5bc802(0xe1)]),_0x4d7657=this['textColorID']();this['changeTextColor'](ColorManager[_0x5bc802(0x10a)](_0x4d7657)),this[_0x5bc802(0x250)](_0x2334f0,0x0,0x0,this['innerWidth'],'center');},Window_ButtonConsole[_0x28bb63(0x241)][_0x28bb63(0xa9)]=function(){const _0x553374=_0x28bb63;switch(this[_0x553374(0xe1)]){case _0x553374(0x1d2):if($gameTemp['isMessageAutoForwardMode']()){if(_0x553374(0x22e)!==_0x553374(0x254))return Window_ButtonConsole[_0x553374(0x1bd)];else _0x2c0e62['y']=_0x3eac9a;}break;case _0x553374(0x1a9):const _0x58e5d5=SceneManager['_scene'];if($gameSystem[_0x553374(0x229)]()){if(_0x553374(0xc4)!==_0x553374(0x12d))return Window_ButtonConsole[_0x553374(0x1d4)];else{const _0x14180f=_0x15106b['_scene'];if(!_0x14180f)return;const _0x49cd6e=_0x14180f[_0x553374(0x15a)];if(!_0x49cd6e)return;_0x49cd6e[_0x553374(0x154)]();}}else{if(_0x58e5d5&&_0x58e5d5['isActivatedExtendedFastForwardMode']&&_0x58e5d5['isActivatedExtendedFastForwardMode']())return Window_ButtonConsole['TEXT_COLOR_TOGGLED'];}break;case _0x553374(0x168):if(!$gameSystem[_0x553374(0x140)]()||!SceneManager['isSceneMap']()){if(_0x553374(0xc5)==='XbsBF')return Window_ButtonConsole['TEXT_COLOR_DISABLED'];else{if(this[_0x553374(0x172)]())return;_0x5b18ed[_0x553374(0x14f)]['Game_Temp_requestAnimation'][_0x553374(0x161)](this,_0x1cbded,_0x51ae27,_0x52e5f3);}}break;case _0x553374(0x21a):if(!DataManager[_0x553374(0x220)]()||!SceneManager[_0x553374(0x11e)]())return Window_ButtonConsole['TEXT_COLOR_DISABLED'];break;case _0x553374(0xb4):case _0x553374(0x1c3):if(!SceneManager[_0x553374(0x11e)]()){if('erULn'!==_0x553374(0x176))_0x48072b[_0x553374(0xd9)]();else return Window_ButtonConsole['TEXT_COLOR_DISABLED'];}break;case _0x553374(0x206):case'log':if(!$gameSystem['isMainMenuMessageLogEnabled']()||!SceneManager[_0x553374(0x11e)]())return Window_ButtonConsole[_0x553374(0x1d4)];break;}return Window_ButtonConsole[_0x553374(0x17a)];},Window_ButtonConsole[_0x28bb63(0x241)]['isTouchScrollEnabled']=function(){return!![];},Window_ButtonConsole[_0x28bb63(0x241)][_0x28bb63(0x11c)]=function(){const _0x30977d=_0x28bb63;if(this[_0x30977d(0x1cf)]<0xff)return;if(!this[_0x30977d(0x164)])return;switch(this['_type']){case _0x30977d(0x1d2):let _0x1599aa=!$gameTemp[_0x30977d(0xbd)]();$gameTemp[_0x30977d(0x1a7)](_0x1599aa);if(_0x1599aa)this['playOkSound']();else{if(_0x30977d(0xb7)==='jGgeM')return![];else SoundManager[_0x30977d(0xd9)]();}break;case _0x30977d(0x1a9):if(!$gameSystem[_0x30977d(0x229)]()){if(_0x30977d(0xd4)!==_0x30977d(0xd4))return _0x1532c5['playCancel'](),_0x1e6725[_0x30977d(0x1a7)](![]),!![];else{let _0x414dea=!$gameTemp[_0x30977d(0x114)]();$gameTemp[_0x30977d(0x1ed)](_0x414dea),_0x414dea?this[_0x30977d(0x18a)]():SoundManager[_0x30977d(0xd9)](),this[_0x30977d(0x205)]();}}else this[_0x30977d(0x1a2)]();break;case _0x30977d(0x168):$gameSystem[_0x30977d(0x140)]()&&SceneManager[_0x30977d(0x11e)]()?(this[_0x30977d(0x18a)](),SceneManager[_0x30977d(0x24a)](Scene_SaveButtonConsole)):_0x30977d(0x1be)!=='AFHLL'?_0x3034bc+=_0x21c368['autoPositionOffsetX']:this[_0x30977d(0x1a2)]();break;case _0x30977d(0x21a):DataManager['isAnySavefileExists']()&&SceneManager['isSceneMap']()?(this['playOkSound'](),SceneManager[_0x30977d(0x24a)](Scene_Load)):this['playBuzzerSound']();break;case _0x30977d(0xb4):if(SceneManager[_0x30977d(0x11e)]())_0x30977d(0x20e)!==_0x30977d(0x20e)?(_0x4a2fb9('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x30977d(0x1c2)](_0x3c3d31,_0x1b32fd)),_0x4d094f['exit']()):(this['playOkSound'](),SceneManager[_0x30977d(0x24a)](Scene_Options));else{if(_0x30977d(0x198)===_0x30977d(0x116)){this[_0x30977d(0x1ad)]=[];for(const _0xf08ca7 of _0x4ad374[_0x30977d(0x1d5)]){this['addButtonConsoleObject'](_0xf08ca7);}this[_0x30977d(0x242)]();}else this['playBuzzerSound']();}break;case'gameend':SceneManager['isSceneMap']()?(this[_0x30977d(0x18a)](),SceneManager['push'](Scene_GameEnd)):this[_0x30977d(0x1a2)]();break;case _0x30977d(0x104):Imported[_0x30977d(0x1b6)]&&$gameTemp['toggleMessageWindowVisibility']();break;case _0x30977d(0x206):case _0x30977d(0xf7):if(Imported['VisuMZ_3_MessageLog']){if(_0x30977d(0x119)!==_0x30977d(0x119))this[_0x30977d(0x167)]();else{if($gameSystem[_0x30977d(0x1e7)]()&&SceneManager['isSceneMap']()){if(_0x30977d(0x24f)===_0x30977d(0x14c))for(const _0xc0b99f of this[_0x30977d(0x1ad)]){_0xc0b99f[_0x30977d(0x205)]();}else this[_0x30977d(0x18a)](),SceneManager[_0x30977d(0x24a)](Scene_MessageLog);}else this[_0x30977d(0x1a2)]();}}break;}TouchInput[_0x30977d(0x131)]();},Window_ButtonConsole[_0x28bb63(0x241)][_0x28bb63(0x17b)]=function(){const _0x4e1619=_0x28bb63;Window_Scrollable[_0x4e1619(0x241)][_0x4e1619(0x17b)]['call'](this),this[_0x4e1619(0x1d7)](),this['updateColor'](),this[_0x4e1619(0x1fe)]();},Window_ButtonConsole[_0x28bb63(0x241)]['updateConsoleVisibility']=function(){const _0x4ae228=_0x28bb63;if(!this[_0x4ae228(0x1d1)])return;this[_0x4ae228(0x1cf)]=this[_0x4ae228(0x1d1)][_0x4ae228(0x1cf)];},Window_ButtonConsole['prototype'][_0x28bb63(0x12a)]=function(){const _0x3e8cdf=_0x28bb63;this[_0x3e8cdf(0xe1)]===_0x3e8cdf(0x1a9)&&(_0x3e8cdf(0xc7)!==_0x3e8cdf(0xc7)?this[_0x3e8cdf(0x1a2)]():this[_0x3e8cdf(0xfb)]!==Input[_0x3e8cdf(0x135)](VisuMZ[_0x3e8cdf(0x149)][_0x3e8cdf(0x111)]['General'][_0x3e8cdf(0x23b)])&&(_0x3e8cdf(0x136)===_0x3e8cdf(0x112)?_0x22ea94['loadFace'](_0x73aac9[_0x3e8cdf(0x1ac)]()):(this[_0x3e8cdf(0xfb)]=Input[_0x3e8cdf(0x135)](VisuMZ['MessageCore'][_0x3e8cdf(0x111)][_0x3e8cdf(0xb5)][_0x3e8cdf(0x23b)]),this['refresh']())));},Window_ButtonConsole[_0x28bb63(0x241)]['updateBackImageSpriteVisibility']=function(){const _0x1c8f08=_0x28bb63;if(!Window_ButtonConsole[_0x1c8f08(0x213)])return;if(this[_0x1c8f08(0x239)][_0x1c8f08(0xa7)]){if(_0x1c8f08(0x240)===_0x1c8f08(0x240)){const _0x5b4b38=this[_0x1c8f08(0x239)][_0x1c8f08(0xa7)];_0x5b4b38[_0x1c8f08(0x164)]=this[_0x1c8f08(0xa9)]()===Window_ButtonConsole[_0x1c8f08(0x1d4)];}else _0x19f6a0[_0x1c8f08(0xb1)]();}if(this[_0x1c8f08(0x239)]['ImgEnabled']){if(_0x1c8f08(0x223)===_0x1c8f08(0x100)){let _0x3bd7fe=!_0x3842f2[_0x1c8f08(0x114)]();_0x410772[_0x1c8f08(0x1ed)](_0x3bd7fe),_0x3bd7fe?this[_0x1c8f08(0x18a)]():_0x3f07b0['playCancel'](),this[_0x1c8f08(0x205)]();}else{const _0xe61025=this['_buttonConsoleSprites'][_0x1c8f08(0x1bf)];_0xe61025[_0x1c8f08(0x164)]=this[_0x1c8f08(0xa9)]()===Window_ButtonConsole[_0x1c8f08(0x17a)];}}if(this[_0x1c8f08(0x239)][_0x1c8f08(0x221)]){const _0x3ad398=this[_0x1c8f08(0x239)][_0x1c8f08(0x221)];_0x3ad398[_0x1c8f08(0x164)]=this[_0x1c8f08(0xa9)]()===Window_ButtonConsole[_0x1c8f08(0x1bd)];}};