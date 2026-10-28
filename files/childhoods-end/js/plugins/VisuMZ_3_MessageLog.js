//=============================================================================
// VisuStella MZ - Message Log
// VisuMZ_3_MessageLog.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_MessageLog = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageLog = VisuMZ.MessageLog || {};
VisuMZ.MessageLog.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.07] [MessageLog]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Log_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Log plugin will take and record any Show Message entries played
 * on the map screen so that players can go back to them and review them at a
 * later point in time when needed. This is helpful for players who may have
 * missed important information that would have been displayed or those who
 * would like to review what was said previously. The Message Log will not
 * record any of the text displayed in the battle scene in order to preserve
 * the data to one specific scene.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Record messages written out in the "Show Text" command while the player is
 *   on the map screen.
 * * Players can access the Message Log through either the Main Menu or by a
 *   shortcut key whenever the Message Window is open.
 * * Faces and speaker names will also be recorded.
 * * Choice List selections, Number Inputs, and selected Event Items will also
 *   be recorded.
 * * Those using the Extended Message Functionality plugin can also bind this
 *   effect to the Button Console.
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
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
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
 * Replaced Message Text Codes
 * 
 * Some text codes are not compatible with the Message Log when viewed such as
 * wait commands, showing the gold window, etc. When that happens, those text
 * codes will be removed from visibility in the Message Log in order to prevent
 * any problems. The following is a list of the Message Text Codes that will
 * not appear in the Message Log:
 * 
 *   --------------------
 *   Default RPG Maker MZ
 *   --------------------
 *   \$
 *   \.
 *   \|
 *   \!
 *   \>
 *   \<
 *   \^
 * 
 *   --------------------
 *   VisuMZ_1_MessageCore
 *   --------------------
 *   \Picture<x>
 *   \CenterPicture<x>
 *   \CommonEvent[x]
 *   \Wait[x]
 *   \NormalBG
 *   \DimBG
 *   \TransparentBG
 *   \WindowMoveTo: ?>
 *   \WindowMoveBy: ?>
 *   \WindowReset
 *   \TroopMember[x]
 *   \TroopNameMember[x]
 *   \ChangeFace<?>
 *   \FaceIndex[x]
 *   <Auto>
 *   <Auto Width>
 *   <Auto Height>
 *   <Auto Actor: x>
 *   <Auto Party: x>
 *   <Auto Enemy: x>
 *   <Auto Event: x>
 *   <Auto Player>
 *   <Show>
 *   <Show Switch: x>
 *   <Show All Switches: x,x,x>
 *   <Show Any Switches: x,x,x>
 *   <Hide>
 *   <Hide Switch: x>
 *   <Hide All Switches: x,x,x>
 *   <Hide Any Switches: x,x,x>
 *   <Enable>
 *   <Enable Switch: x>
 *   <Enable All Switches: x,x,x>
 *   <Enable Any Switches: x,x,x>
 *   <Disable>
 *   <Disable Switch: x>
 *   <Disable All Switches: x,x,x>
 *   <Disable Any Switches: x,x,x>
 *   <Position: ?>
 *   <Coordinates: ?>
 *   <Dimensions: ?>
 * 
 *   -----------------------
 *   VisuMZ_2_ExtMessageFunc
 *   -----------------------
 *   <Hide Buttons>
 * 
 *   -----------------------
 *   VisuMZ_2_PictureChoices
 *   -----------------------
 *   <Bind Picture: id>
 *   <Hide Choice Window>
 * 
 *   ----------------------
 *   VisuMZ_3_ChoiceCmnEvts
 *   ----------------------
 *   <Choice Common Event: id>
 * 
 *   -------------------
 *   VisuMZ_3_MessageLog
 *   -------------------
 *   <Bypass Message Log>
 * 
 *   ----------------------
 *   VisuMZ_3_MessageSounds
 *   ----------------------
 *   <Letter Sound On>
 *   <Letter Sound Off>
 *   \LetterSoundName<filename>
 *   \LetterSoundVolume[x]
 *   \LetterSoundPitch[x]
 *   \LetterSoundPan[x]
 *   \LetterSoundVolumeVar[x]
 *   \LetterSoundPitchVar[x]
 *   \LetterSoundPanVar[x]
 *   \LSON
 *   \LSOFF
 *   \LSN<filename>
 *   \LSV[x]
 *   \LSPI[x]
 *   \LSPA[x]
 *   \LSVV[x]
 *   \LSPIV[x]
 *   \LSPAV[x]
 * 
 *   ------------------------
 *   VisuMZ_4_EventTitleScene
 *   ------------------------
 *   <Continue>
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
 * VisuMZ_2_ExtMessageFunc
 * 
 * The Extended Message Functionality plugin enables the "Log" button found in
 * the Button Console to let the player go and review the text that has been
 * displayed in the map scene. This does not include the text found in battle
 * to avoid conflicting logged messages across different situations.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Log-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect
 * --------------------   -----------------------------------------------------
 * 
 * <Bypass Message Log>   Prevents the specific "Show Text" window from being
 *                        recorded into the Message Log.
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
 * === Bypass Plugin Commands ===
 * 
 * ---
 *
 * Bypass: Message Logging?
 * - Bypass message logging until turned off.
 *
 *   Bypass?:
 *   - Bypasses Message Logging until turned off.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Message Log in Menu?
 * - Enables/disables Message Log menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Message Log menu inside the main menu.
 *
 * ---
 *
 * System: Show Message Log in Menu?
 * - Shows/hides Message Log menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Message Log menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Message Log.
 *
 * ---
 *
 * Settings
 * 
 *   Entry Limit:
 *   - How many message entries will be stored before the game will start
 *     trimming them?
 * 
 *   Shortcut Key:
 *   - This is the key used for opening the Message Log scene.
 *   - Does not work in battle!
 * 
 *   Show Faces?
 *   - Show face graphics in the Message Log?
 * 
 *   Pad Sides?
 *   - Pad the sides of the screen even without faces?
 *   - Ignore if the screen is too small.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Main Menu settings for Message Log.
 *
 * ---
 *
 * Settings
 * 
 *   Command Name:
 *   - Name of the 'Message Log' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Message Log' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Message Log' option to the Main Menu by default?
 *   - This will be automatically disabled if there are no entries available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_MessageLog.
 *
 * ---
 *
 * Settings
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
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * ExtMessageFunc
 * 
 *   Button Name:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_2_ExtMessageFunc!
 *
 * ---
 *
 * Button Assist Window
 * 
 *   Slow Scroll:
 *   - Text used for slow scrolling.
 * 
 *   Fast Scroll:
 *   - Text used for fast scrolling.
 *
 * ---
 *
 * Choice Window Logging
 * 
 *   Text Format:
 *   - Text format for logging the selected choice text.
 *   - %1 - Selected Choice Text
 * 
 *   Cancel:
 *   - Text used when cancel branch is selected.
 *
 * ---
 *
 * Number Input Logging
 * 
 *   Text Format:
 *   - Text format for logging the inputted number value.
 *   - %1 - Number Value
 *
 * ---
 *
 * Event Item Logging
 * 
 *   Text Format:
 *   - Text format for logging the selected event Item.
 *   - %1 - Selected Event Item Text
 * 
 *   Name Format:
 *   - Text format for how item names are displayed.
 *   - %1 - Item Icon, %2 - Item Name
 * 
 *   No Item:
 *   - Text used when no item is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings for Scene_MessageLog.
 *
 * ---
 *
 * Message Log Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Appearance
 * 
 *   Speaker Name X:
 *   - What X coordinate do you want the speaker name to appear at?
 *
 * ---
 *
 * Color Lock
 * 
 *   Choices:
 *   - Color lock the logged choices?
 * 
 *   Number Inputs:
 *   - Color lock the logged Number Inputs?
 * 
 *   Event Item:
 *   - Color lock the logged selected Event Item?
 *
 * ---
 *
 * Scrolling > Slow
 * 
 *   Scroll Speed:
 *   - What speed will Up/Down scroll the window at?
 *   - Lower is slower. Higher is faster.
 * 
 *   Sound Frequency:
 *   - How frequent will Up/Down scrolling make sounds?
 *   - Lower is quicker. Higher is later.
 *
 * ---
 *
 * Scrolling > Fast
 * 
 *   Scroll Speed:
 *   - What speed will PageUp/PageDn scroll the window at?
 *   - Lower is slower. Higher is faster.
 * 
 *   Sound Frequency:
 *   - How frequent will PageUp/PageDn scrolling make sounds?
 *   - Lower is quicker. Higher is later.
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
 * * Trihan
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.07: April 18, 2024
 * * Compatibility Update!
 * ** Added extra compatibility for Voice Acting Control's version update. 
 * 
 * Version 1.06: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where text from battle transitions would merge into the
 *    Message Log. Fix made by Olivia.
 * 
 * Version 1.05: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where text macros from VisuMZ Message Core did not convert
 *    properly into the Message Log. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina.
 * ** Plugin Parameters > General > Pad Sides?
 * *** Pad the sides of the screen even without faces?
 * *** Ignore if the screen is too small.
 * 
 * Version 1.04: March 16, 2023
 * * Compatibility Update!
 * ** Added compatibility for the recent Message Core additions.
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: October 7, 2021
 * * Bug Fixes!
 * ** Message Log should now work with automatic word wrap. Fix by Irina.
 * 
 * Version 1.02: September 3, 2021
 * * Bug Fixes!
 * ** Fixed a crash pertaining to specific message windows that haven't
 *    declared a speaker name from an older RPG Maker version. Fix by Irina.
 * 
 * Version 1.01: August 6, 2021
 * * Documentation Update!
 * ** Plugin URL now updated to most recent one.
 *
 * Version 1.00 Official Release Date: August 4, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BypassMessageLogging
 * @text Bypass: Message Logging?
 * @desc Bypass message logging until turned off.
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Enable
 * @desc Bypasses Message Logging until turned off.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableMessageLogMenu
 * @text System: Enable Message Log in Menu?
 * @desc Enables/disables Message Log menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Message Log menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowMessageLogMenu
 * @text System: Show Message Log in Menu?
 * @desc Shows/hides Message Log menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Message Log menu inside the main menu.
 * @default true
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
 * @param MessageLog
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General Settings for the Message Log.
 * @default {"EntryLimit:num":"50","ShortcutKey:str":"pageup","ShowFaces:eval":"true"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Message Log.
 * @default {"Name:str":"Message Log","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_MessageLog.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"ExtMessageFunc":"","ButtonName:str":"LOG","ButtonAssist":"","SlowScroll:str":"Scroll","FastScroll:str":"Fast Scroll","ChoiceLogging":"","ChoiceFmt:str":"\\C[4]Choice >\\C[0] %1","ChoiceCancel:str":"Cancel","NumberLogging":"","NumberFmt:str":"\\C[4]Amount >\\C[0] %1","EventItemLogging":"","ItemFmt:str":"\\C[4]Choice >\\C[0] %1","ItemNameFmt:str":"%1%2","NoItem:str":"Nothing"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Window settings for Scene_MessageLog.
 * @default {"MessageLogWindow":"","MessageLogMenu_BgType:num":"0","MessageLogMenu_RectJS:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Appearance":"","SpeakerNameX:num":"128","ColorLock":"","ColorLockChoice:eval":"false","ColorLockNumber:eval":"true","ColorLockItem:eval":"true","Scrolling":"","Slow":"","SlowScrollSpeed:num":"8","SlowSoundFreq:num":"8","Fast":"","FastScrollSpeed:num":"32","FastSoundFreq:num":"4"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param EntryLimit:num
 * @text Entry Limit
 * @parent General
 * @type number
 * @min 1
 * @max 999
 * @desc How many message entries will be stored before the game
 * will start trimming them?
 * @default 50
 *
 * @param ShortcutKey:str
 * @text Shortcut Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for opening the Message Log scene.
 * Does not work in battle!
 * @default pageup
 *
 * @param ShowFaces:eval
 * @text Show Faces?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show face graphics in the Message Log?
 * @default true
 *
 * @param PadSides:eval
 * @text Pad Sides?
 * @type boolean
 * @on Pad
 * @off Don't Pad
 * @desc Pad the sides of the screen even without faces?
 * Ignore if the screen is too small.
 * @default true
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
 * @desc Name of the 'Message Log' option in the Main Menu.
 * @default Message Log
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Message Log' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Message Log' option to the Main Menu by default?
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
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 * 
 * @param ExtMessageFunc
 *
 * @param ButtonName:str
 * @text Button Name
 * @parent ExtMessageFunc
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_2_ExtMessageFunc!
 * @default LOG
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param SlowScroll:str
 * @text Slow Scroll
 * @parent ButtonAssist
 * @desc Text used for slow scrolling.
 * @default Scroll
 *
 * @param FastScroll:str
 * @text Fast Scroll
 * @parent ButtonAssist
 * @desc Text used for fast scrolling.
 * @default Fast Scroll
 *
 * @param ChoiceLogging
 * @text Choice Window Logging
 *
 * @param ChoiceFmt:str
 * @text Text Format
 * @parent ChoiceLogging
 * @desc Text format for logging the selected choice text.
 * %1 - Selected Choice Text
 * @default \C[4]Choice >\C[0] %1
 *
 * @param ChoiceCancel:str
 * @text Cancel
 * @parent ChoiceLogging
 * @desc Text used when cancel branch is selected.
 * @default Cancel
 *
 * @param NumberLogging
 * @text Number Input Logging
 *
 * @param NumberFmt:str
 * @text Text Format
 * @parent NumberLogging
 * @desc Text format for logging the inputted number value.
 * %1 - Number Value
 * @default \C[4]Amount >\C[0] %1
 *
 * @param EventItemLogging
 * @text Event Item Logging
 *
 * @param ItemFmt:str
 * @text Text Format
 * @parent EventItemLogging
 * @desc Text format for logging the selected event Item.
 * %1 - Selected Event Item Text
 * @default \C[4]Choice >\C[0] %1
 *
 * @param ItemNameFmt:str
 * @text Name Format
 * @parent EventItemLogging
 * @desc Text format for how item names are displayed.
 * %1 - Item Icon, %2 - Item Name
 * @default %1%2
 *
 * @param NoItem:str
 * @text No Item
 * @parent EventItemLogging
 * @desc Text used when no item is selected.
 * @default Nothing
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 * 
 * @param MessageLogWindow
 * @text Message Log Window
 *
 * @param MessageLogMenu_BgType:num
 * @text Background Type
 * @parent MessageLogWindow
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
 * @param MessageLogMenu_RectJS:func
 * @text JS: X, Y, W, H
 * @parent MessageLogWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Appearance
 *
 * @param SpeakerNameX:num
 * @text Speaker Name X
 * @parent Appearance
 * @type number
 * @min 0
 * @desc What X coordinate do you want the speaker name to appear at?
 * @default 128
 *
 * @param ColorLock
 * @text Color Lock
 *
 * @param ColorLockChoice:eval
 * @text Choices
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged choices?
 * @default false
 *
 * @param ColorLockNumber:eval
 * @text Number Inputs
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged Number Inputs?
 * @default true
 *
 * @param ColorLockItem:eval
 * @text Event Item
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged selected Event Item?
 * @default true
 *
 * @param Scrolling
 *
 * @param Slow
 * @parent Scrolling
 *
 * @param SlowScrollSpeed:num
 * @text Scroll Speed
 * @parent Slow
 * @type number
 * @min 1
 * @desc What speed will Up/Down scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 8
 *
 * @param SlowSoundFreq:num
 * @text Sound Frequency
 * @parent Slow
 * @type number
 * @min 1
 * @desc How frequent will Up/Down scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 8
 *
 * @param Fast
 * @parent Scrolling
 *
 * @param FastScrollSpeed:num
 * @text Scroll Speed
 * @parent Fast
 * @type number
 * @min 1
 * @desc What speed will PageUp/PageDn scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 32
 *
 * @param FastSoundFreq:num
 * @text Sound Frequency
 * @parent Fast
 * @type number
 * @min 1
 * @desc How frequent will PageUp/PageDn scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 4
 *
 */
//=============================================================================

const _0x5a8399=_0x14c3;function _0x14c3(_0x20cb47,_0x1545d5){const _0x1e2e27=_0x1e2e();return _0x14c3=function(_0x14c3ec,_0x34a5cb){_0x14c3ec=_0x14c3ec-0x172;let _0x1ce79d=_0x1e2e27[_0x14c3ec];return _0x1ce79d;},_0x14c3(_0x20cb47,_0x1545d5);}function _0x1e2e(){const _0x4220bd=['registerCommand','removeChild','exit','addChild','members','numItems','MessageLogEventItemFmt','isTriggered','FAST_SOUND_FREQUENCY','Name','Window','530pUbWgD','split','BgSettings','addReplayVoiceSprite','MIGHE','Game_Message_setSpeakerName','getRemovedMessageLogTextCodes','_addTextToMessageLog','setBackgroundOpacity','UIgkz','shift','LjphH','drawMessageText','convertMessageLogVariableTextCodes','status','tdCqx','634968jMiQoB','MessageLogButtonName','bind','9220277EiBZae','buttonAssistText1','includes','addWindow','calculateTextHeight','isMessageLogCommandEnabled','18728CKICPV','xSunI','onOk','zweKP','COLOR_LOCK_CHOICE','messageLogWindowRect','_number','MessageLogMenu_BgType','_MessageLog_MainMenu','playCursorSound','YzbVR','callOkHandler','setXyPosition','stringify','innerWidth','Game_Message_add','getInputMultiButtonStrings','ShortcutKey','_replayVoiceSprites','addLoadListener','faceIndex','buttonAssistKey4','activate','cancel','Window_Base_preConvertEscapeCharacters','ZHtjm','SLOW_SCROLL_SPEED','BgFilename1','textCodeCheck','_commandWindow','ARRAYFUNC','Window_Message_isTriggered','match','wmEYS','textCodeResult','addMessageLogCommand','VisuMZ_2_VoiceActControl','loadTitle2','COLOR_LOCK_NUMBER','playOkSound','SystemEnableMessageLogMenu','forceNameColor','item','bitmap','createTextState','ItemFmt','currentExt','callMessageLog','choiceCancelType','fqmBl','leZZM','21vjHkoU','needsCancelButton','YMVng','down','ConvertParams','Scene_Menu_createCommandWindow','drawFace','Window_ChoiceList_callCancelHandler','MessageLogNumberInputFmt','clearNameColor','NumberFmt','addCommand','actor','addTextToMessageLog','convertMessageLogTextRemoval','call','drawHorzLine','buttonAssistKey1','trim','<ColorLock>%1</ColorLock>','shown','bQazt','TextMacros','MsgNoReplay','ColorLockChoice','prototype','version','cDURV','Game_Message_setFaceImage','setSpeakerName','lastGainedObjectQuantity','ooEyi','isPressed','createNewLoggedMessageEntry','COLOR_LOCK_ITEM','drawTextEx','frameCount','convertMessageLogTextMacros','addNewLoggedMessageEntry','BgFilename2','ButtonName','ChoiceFmt','scrollToTop','SpeakerNameX','RegExp','PAD_SIDES','ARRAYNUM','isMainMenuMessageLogEnabled','MessageLogScroll','FGlEx','centerSprite','SlowScroll','initMessageLogSettings','messageLog','Window_EventItem_onCancel','General','resetFontSettings','adjustSprite','home','Bypass','textSizeEx','setMainMenuMessageLogVisible','remove','GbnDK','setMainMenuMessageLogEnabled','create','_newMessageLogEntry','SystemShowMessageLogMenu','JSON','replace','addOriginalCommands','format','ColorLockItem','EntryLimit','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','convertMessageLogTextCodes','onCancel','NoItem','max','faceHeight','width','Window_EventItem_onOk','MessageLogItemNothing','MessageLogItemNameFmt','initMessageLogMainMenu','addMessageLogEntry','drawRect','jxRvX','length','NameBoxWindowDefaultColor','createMessageLogWindow','<WORDWRAP>','replayVoiceSound','setSpeakerToMessageLog','_backSprite2','setBypassMessageLogging','lineHeight','FastScrollSpeed','_scene','enabled','ShowMainMenu','resetWordWrap','Settings','name','ENTRY_LIMIT','removeAllReplayVoiceSprites','messageBody','414OBXoYe','height','SLOW_SOUND_FREQUENCY','scrollToBottom','BypassMessageLogging','toUpperCase','MessageLogChoiceListFmt','gMtYW','_messageLogWindow','textColor','TextManager_msgButtonConsole','ZJKQw','origin','SnapshotOpacity','add','Window_ChoiceList_callOkHandler','processOk','isSceneMap','createContents','isMessageLogCommandVisible','egRhp','scaleSprite','mWJQM','processAllText','buttonAssistKey3','initialize','callCancelHandler','speaker','Ctska','parameters','processSlowScroll','push','processCursorMove','inBattle','SPEAKER_NAME_X','setBackgroundType','drawAllText','loadFace','SlowScrollSpeed','2334NxuYFq','_MessageLog_Bypass','preConvertEscapeCharacters','isBypassMessageLogging','_allTextHeight','_clientArea','mainAreaHeight','iFxtq','popScene','backlog','_isHotKeyPressed','innerHeight','VlBkb','MessageLogFastScroll','PadSides','createBackground','FUNC','3SPxspn','91058jvOsFR','iconIndex','Game_Interpreter_command101','Window_MenuCommand_addOriginalCommands','Window_NumberInput_processOk','Vocab','oMoww','FAST_SCROLL_SPEED','3832250dRHaoU','outputHeight','_lineY','12GNvnVa','gRRub','MessageLogChoiceCancel','BattleManager_setup','faceWidth','setScrollAccel','ItemNameFmt','parse','5921559OZdqsV','nZqNx','SqPGd','choices','pagedown','faceName','log','getLoggedMessages','iconWidth','pageup','addMessageLogCommandAutomatically','msgButtonConsole','setup','SHORTCUT_KEY','jpNGl','return\x200','description','MessageCore','FastSoundFreq','resetTextColor','SlowSoundFreq','_backSprite1','getLatestMessageLogEntry','helpAreaHeight','clamp','addInnerChild','smoothScrollBy','setFaceToMessageLog','MainMenu','SHOW_FACES','IhZBd','nMvlZ','constructor','setFaceImage','isMainMenuMessageLogVisible','loadTitle1','end','boxWidth','rTJTA','setHandler','OROSA','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','EnableMainMenu','prepareMessageLogFaces','createCustomBackgroundImages','OiEFG','_forcedNameColor','map','HORZ_LINE_THICKNESS','Game_System_initialize','createCommandWindow','setSound','_loggedMessages','SceneManager_push','ARRAYJSON','commandMessageLog','convertVoiceActControlLines','JnuUj','command101','lastGainedObjectName','processFastScroll','changeTextColor','SCENE_MAP_ONLY','MessageLog','MessageLogMenuCommand'];_0x1e2e=function(){return _0x4220bd;};return _0x1e2e();}(function(_0x3d940b,_0x5157f3){const _0x49a3df=_0x14c3,_0x2243f6=_0x3d940b();while(!![]){try{const _0x5eaf11=-parseInt(_0x49a3df(0x202))/0x1*(-parseInt(_0x49a3df(0x203))/0x2)+parseInt(_0x49a3df(0x1ca))/0x3*(-parseInt(_0x49a3df(0x27b))/0x4)+-parseInt(_0x49a3df(0x262))/0x5*(-parseInt(_0x49a3df(0x1f1))/0x6)+-parseInt(_0x49a3df(0x2ae))/0x7*(parseInt(_0x49a3df(0x272))/0x8)+parseInt(_0x49a3df(0x216))/0x9+-parseInt(_0x49a3df(0x20b))/0xa+parseInt(_0x49a3df(0x275))/0xb*(parseInt(_0x49a3df(0x20e))/0xc);if(_0x5eaf11===_0x5157f3)break;else _0x2243f6['push'](_0x2243f6['shift']());}catch(_0x148103){_0x2243f6['push'](_0x2243f6['shift']());}}}(_0x1e2e,0x633fd));var label=_0x5a8399(0x255),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x2051a0){const _0x27ae1a=_0x5a8399;return _0x2051a0[_0x27ae1a(0x270)]&&_0x2051a0[_0x27ae1a(0x226)][_0x27ae1a(0x277)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x5a8399(0x1c5)]||{},VisuMZ[_0x5a8399(0x2b2)]=function(_0x37962e,_0x4ea5be){const _0x8910af=_0x5a8399;for(const _0x178c42 in _0x4ea5be){if(_0x178c42['match'](/(.*):(.*)/i)){const _0x3daf9d=String(RegExp['$1']),_0x14af6c=String(RegExp['$2'])[_0x8910af(0x1cf)]()[_0x8910af(0x2c0)]();let _0x1875d0,_0x1cf6bf,_0x326ab0;switch(_0x14af6c){case'NUM':_0x1875d0=_0x4ea5be[_0x178c42]!==''?Number(_0x4ea5be[_0x178c42]):0x0;break;case _0x8910af(0x18d):_0x1cf6bf=_0x4ea5be[_0x178c42]!==''?JSON[_0x8910af(0x215)](_0x4ea5be[_0x178c42]):[],_0x1875d0=_0x1cf6bf[_0x8910af(0x245)](_0x1be092=>Number(_0x1be092));break;case'EVAL':_0x1875d0=_0x4ea5be[_0x178c42]!==''?eval(_0x4ea5be[_0x178c42]):null;break;case'ARRAYEVAL':_0x1cf6bf=_0x4ea5be[_0x178c42]!==''?JSON['parse'](_0x4ea5be[_0x178c42]):[],_0x1875d0=_0x1cf6bf['map'](_0x3f387b=>eval(_0x3f387b));break;case _0x8910af(0x1a3):_0x1875d0=_0x4ea5be[_0x178c42]!==''?JSON[_0x8910af(0x215)](_0x4ea5be[_0x178c42]):'';break;case _0x8910af(0x24c):_0x1cf6bf=_0x4ea5be[_0x178c42]!==''?JSON[_0x8910af(0x215)](_0x4ea5be[_0x178c42]):[],_0x1875d0=_0x1cf6bf[_0x8910af(0x245)](_0x3c44b9=>JSON[_0x8910af(0x215)](_0x3c44b9));break;case _0x8910af(0x201):_0x1875d0=_0x4ea5be[_0x178c42]!==''?new Function(JSON['parse'](_0x4ea5be[_0x178c42])):new Function(_0x8910af(0x225));break;case _0x8910af(0x299):_0x1cf6bf=_0x4ea5be[_0x178c42]!==''?JSON[_0x8910af(0x215)](_0x4ea5be[_0x178c42]):[],_0x1875d0=_0x1cf6bf[_0x8910af(0x245)](_0x14dc49=>new Function(JSON[_0x8910af(0x215)](_0x14dc49)));break;case'STR':_0x1875d0=_0x4ea5be[_0x178c42]!==''?String(_0x4ea5be[_0x178c42]):'';break;case'ARRAYSTR':_0x1cf6bf=_0x4ea5be[_0x178c42]!==''?JSON['parse'](_0x4ea5be[_0x178c42]):[],_0x1875d0=_0x1cf6bf[_0x8910af(0x245)](_0x144a6e=>String(_0x144a6e));break;case'STRUCT':_0x326ab0=_0x4ea5be[_0x178c42]!==''?JSON['parse'](_0x4ea5be[_0x178c42]):{},_0x1875d0=VisuMZ[_0x8910af(0x2b2)]({},_0x326ab0);break;case'ARRAYSTRUCT':_0x1cf6bf=_0x4ea5be[_0x178c42]!==''?JSON[_0x8910af(0x215)](_0x4ea5be[_0x178c42]):[],_0x1875d0=_0x1cf6bf['map'](_0x3a8d96=>VisuMZ[_0x8910af(0x2b2)]({},JSON[_0x8910af(0x215)](_0x3a8d96)));break;default:continue;}_0x37962e[_0x3daf9d]=_0x1875d0;}}return _0x37962e;},(_0x532b58=>{const _0xbc7e99=_0x5a8399,_0x58b5b9=_0x532b58['name'];for(const _0xf76111 of dependencies){if(!Imported[_0xf76111]){alert(_0xbc7e99(0x1a9)[_0xbc7e99(0x1a6)](_0x58b5b9,_0xf76111)),SceneManager[_0xbc7e99(0x259)]();break;}}const _0x1c25ed=_0x532b58[_0xbc7e99(0x226)];if(_0x1c25ed[_0xbc7e99(0x29b)](/\[Version[ ](.*?)\]/i)){const _0x1dc24c=Number(RegExp['$1']);_0x1dc24c!==VisuMZ[label][_0xbc7e99(0x179)]&&(alert(_0xbc7e99(0x23f)['format'](_0x58b5b9,_0x1dc24c)),SceneManager['exit']());}if(_0x1c25ed['match'](/\[Tier[ ](\d+)\]/i)){if(_0xbc7e99(0x17e)!==_0xbc7e99(0x218)){const _0x4bd963=Number(RegExp['$1']);_0x4bd963<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0xbc7e99(0x1a6)](_0x58b5b9,_0x4bd963,tier)),SceneManager[_0xbc7e99(0x259)]()):_0xbc7e99(0x29c)!=='uZamA'?tier=Math[_0xbc7e99(0x1ad)](_0x4bd963,tier):(_0x191863[_0xbc7e99(0x255)][_0xbc7e99(0x1d4)]=_0x11d20f[_0xbc7e99(0x221)],_0x252dc0[_0xbc7e99(0x221)]=function(_0x3107c6){const _0x125fb0=_0xbc7e99;if(['backlog',_0x125fb0(0x21c)][_0x125fb0(0x277)](_0x3107c6))return _0x4c176b['MessageLogButtonName'];return _0x44c46f[_0x125fb0(0x255)][_0x125fb0(0x1d4)]['call'](this,_0x3107c6);});}else this[_0xbc7e99(0x1e8)](![]);}VisuMZ[_0xbc7e99(0x2b2)](VisuMZ[label][_0xbc7e99(0x1c5)],_0x532b58[_0xbc7e99(0x1e7)]);})(pluginData),PluginManager[_0x5a8399(0x257)](pluginData[_0x5a8399(0x1c6)],_0x5a8399(0x1ce),_0x12a122=>{const _0xc7067a=_0x5a8399;VisuMZ[_0xc7067a(0x2b2)](_0x12a122,_0x12a122),$gameSystem[_0xc7067a(0x1be)](_0x12a122[_0xc7067a(0x19a)]);}),PluginManager[_0x5a8399(0x257)](pluginData[_0x5a8399(0x1c6)],_0x5a8399(0x2a3),_0xa08e0f=>{const _0x34622c=_0x5a8399;VisuMZ['ConvertParams'](_0xa08e0f,_0xa08e0f),$gameSystem[_0x34622c(0x19f)](_0xa08e0f['Enable']);}),PluginManager[_0x5a8399(0x257)](pluginData[_0x5a8399(0x1c6)],_0x5a8399(0x1a2),_0x48f8c0=>{const _0x1404da=_0x5a8399;VisuMZ['ConvertParams'](_0x48f8c0,_0x48f8c0),$gameSystem[_0x1404da(0x19c)](_0x48f8c0['Show']);}),TextManager[_0x5a8399(0x256)]=VisuMZ['MessageLog'][_0x5a8399(0x1c5)][_0x5a8399(0x232)][_0x5a8399(0x260)],TextManager[_0x5a8399(0x273)]=VisuMZ['MessageLog'][_0x5a8399(0x1c5)][_0x5a8399(0x208)][_0x5a8399(0x187)],TextManager[_0x5a8399(0x18f)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x208)][_0x5a8399(0x192)],TextManager[_0x5a8399(0x1fe)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x208)]['FastScroll'],TextManager[_0x5a8399(0x1d0)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x208)][_0x5a8399(0x188)],TextManager[_0x5a8399(0x210)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)]['Vocab']['ChoiceCancel'],TextManager[_0x5a8399(0x2b6)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)]['Vocab'][_0x5a8399(0x2b8)],TextManager[_0x5a8399(0x25d)]=VisuMZ['MessageLog'][_0x5a8399(0x1c5)]['Vocab'][_0x5a8399(0x2a8)],TextManager[_0x5a8399(0x1b2)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)]['Vocab'][_0x5a8399(0x214)],TextManager[_0x5a8399(0x1b1)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x208)][_0x5a8399(0x1ac)];TextManager[_0x5a8399(0x221)]&&(VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1d4)]=TextManager[_0x5a8399(0x221)],TextManager['msgButtonConsole']=function(_0x598f21){const _0x4443ab=_0x5a8399;if([_0x4443ab(0x1fa),_0x4443ab(0x21c)][_0x4443ab(0x277)](_0x598f21))return TextManager[_0x4443ab(0x273)];return VisuMZ['MessageLog'][_0x4443ab(0x1d4)][_0x4443ab(0x2bd)](this,_0x598f21);});;SceneManager[_0x5a8399(0x1db)]=function(){const _0x29e593=_0x5a8399;return this['_scene']&&this[_0x29e593(0x1c1)][_0x29e593(0x236)]===Scene_Map;},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x24b)]=SceneManager['push'],SceneManager[_0x5a8399(0x1e9)]=function(_0x389f31){const _0x535889=_0x5a8399;_0x389f31===Scene_MessageLog&&this[_0x535889(0x241)](),VisuMZ[_0x535889(0x255)][_0x535889(0x24b)][_0x535889(0x2bd)](this,_0x389f31);},SceneManager['prepareMessageLogFaces']=function(){const _0x19c874=_0x5a8399,_0x246305=$gameSystem[_0x19c874(0x21d)]();for(const _0x363896 of _0x246305){if(_0x19c874(0x19e)===_0x19c874(0x285)){let _0x58ae8b=this[_0x19c874(0x1d6)]['y'];this[_0x19c874(0x1d6)]['y']+=(_0x4f535d?0x1:-0x1)*_0x57766f[_0x19c874(0x295)];let _0x48c09d=_0x324965[_0x19c874(0x1ad)](0x0,this[_0x19c874(0x1f5)]-this['innerHeight']);this[_0x19c874(0x1d6)]['y']=this[_0x19c874(0x1d6)]['y'][_0x19c874(0x22e)](0x0,_0x48c09d);if(_0x58ae8b!==this[_0x19c874(0x1d6)]['y']&&_0xe8b4d0[_0x19c874(0x183)]%_0x39dbcc[_0x19c874(0x1cc)]===0x0)this['playCursorSound']();}else{if(!_0x363896)continue;const _0x2b84a9=_0x363896[_0x19c874(0x21b)];_0x2b84a9!==''&&('nJdlK'!==_0x19c874(0x27c)?ImageManager[_0x19c874(0x1ef)](_0x2b84a9):(_0x389ad9[_0x19c874(0x255)]['Game_Message_setFaceImage'][_0x19c874(0x2bd)](this,_0x5651ac,_0x5aedbb),_0x332bf6[_0x19c874(0x231)](_0x91a56b,_0x972975)));}}},VisuMZ['MessageLog']['Game_System_initialize']=Game_System[_0x5a8399(0x178)][_0x5a8399(0x1e3)],Game_System[_0x5a8399(0x178)][_0x5a8399(0x1e3)]=function(){const _0x22df91=_0x5a8399;VisuMZ[_0x22df91(0x255)][_0x22df91(0x247)]['call'](this),this['initMessageLogMainMenu'](),this['initMessageLogSettings']();},Game_System[_0x5a8399(0x178)]['initMessageLogMainMenu']=function(){const _0x4c4707=_0x5a8399;this[_0x4c4707(0x283)]={'shown':VisuMZ[_0x4c4707(0x255)]['Settings'][_0x4c4707(0x232)][_0x4c4707(0x1c3)],'enabled':VisuMZ[_0x4c4707(0x255)][_0x4c4707(0x1c5)][_0x4c4707(0x232)][_0x4c4707(0x240)]},this[_0x4c4707(0x1f2)]=![];},Game_System[_0x5a8399(0x178)][_0x5a8399(0x238)]=function(){const _0x7790a5=_0x5a8399;if(this[_0x7790a5(0x283)]===undefined)this[_0x7790a5(0x1b3)]();return this[_0x7790a5(0x283)]['shown'];},Game_System[_0x5a8399(0x178)][_0x5a8399(0x19c)]=function(_0x295afd){const _0x2f57e0=_0x5a8399;if(this[_0x2f57e0(0x283)]===undefined)this[_0x2f57e0(0x1b3)]();this[_0x2f57e0(0x283)][_0x2f57e0(0x173)]=_0x295afd;},Game_System[_0x5a8399(0x178)]['isMainMenuMessageLogEnabled']=function(){const _0x3b5b4c=_0x5a8399;if(this[_0x3b5b4c(0x283)]===undefined)this[_0x3b5b4c(0x1b3)]();if(this[_0x3b5b4c(0x21d)]()[_0x3b5b4c(0x1b7)]<=0x0)return![];return this[_0x3b5b4c(0x283)]['enabled'];},Game_System['prototype'][_0x5a8399(0x19f)]=function(_0x124a85){const _0x48d7d3=_0x5a8399;if(this[_0x48d7d3(0x283)]===undefined)this[_0x48d7d3(0x1b3)]();this['_MessageLog_MainMenu'][_0x48d7d3(0x1c2)]=_0x124a85;},Game_System['prototype']['isBypassMessageLogging']=function(){const _0x26d3fb=_0x5a8399;if(this[_0x26d3fb(0x1f2)]===undefined)this['initMessageLogMainMenu']();return this[_0x26d3fb(0x1f2)];},Game_System['prototype'][_0x5a8399(0x1be)]=function(_0x267082){const _0x2fbcaf=_0x5a8399;if(this['_MessageLog_Bypass']===undefined)this[_0x2fbcaf(0x1b3)]();this[_0x2fbcaf(0x1f2)]=_0x267082;},Game_System['prototype'][_0x5a8399(0x193)]=function(){this['_loggedMessages']=[],this['createNewLoggedMessageEntry']();},Game_System[_0x5a8399(0x178)]['getLoggedMessages']=function(){const _0x3090bf=_0x5a8399;return this[_0x3090bf(0x24a)]===undefined&&this[_0x3090bf(0x193)](),this[_0x3090bf(0x24a)];},Game_System['prototype'][_0x5a8399(0x180)]=function(){const _0x58a0f8=_0x5a8399;this[_0x58a0f8(0x1a1)]={'speaker':'','faceName':'','faceIndex':0x0,'messageBody':''};},Game_System[_0x5a8399(0x178)][_0x5a8399(0x185)]=function(){const _0x52230d=_0x5a8399,_0x130f8d=this['getLoggedMessages'](),_0x303207=this[_0x52230d(0x22c)]();if(this[_0x52230d(0x1f4)]())return;_0x303207[_0x52230d(0x1c9)]=_0x303207['messageBody']||'';if(_0x303207[_0x52230d(0x1c9)][_0x52230d(0x29b)](/<BYPASS MESSAGE LOG>/i))return;if(_0x303207['messageBody'][_0x52230d(0x2c0)]()['length']<=0x0)return;const _0x4e3f22=_0x130f8d[_0x130f8d['length']-0x1];if(JSON[_0x52230d(0x288)](_0x303207)===JSON[_0x52230d(0x288)](_0x4e3f22))return;_0x130f8d[_0x52230d(0x1e9)](_0x303207);while(_0x130f8d[_0x52230d(0x1b7)]>Window_MessageLog[_0x52230d(0x1c7)]){_0x130f8d[_0x52230d(0x26c)]();}},Game_System['prototype']['getLatestMessageLogEntry']=function(){const _0x373b82=_0x5a8399;return this[_0x373b82(0x1a1)]===undefined&&this[_0x373b82(0x180)](),this[_0x373b82(0x1a1)];},Game_System[_0x5a8399(0x178)][_0x5a8399(0x2bb)]=function(_0x42c38b){const _0x53ce19=_0x5a8399;if($gameParty[_0x53ce19(0x1eb)]()&&!$gameSystem[_0x53ce19(0x269)])return;const _0x330ced=this[_0x53ce19(0x22c)]();this['isMessageWindowWordWrap']()&&(_0x42c38b=_0x53ce19(0x1ba)+_0x42c38b);_0x42c38b=this[_0x53ce19(0x1aa)](_0x42c38b);Imported[_0x53ce19(0x29f)]&&(_0x53ce19(0x17a)===_0x53ce19(0x17a)?_0x42c38b=this[_0x53ce19(0x24e)](_0x42c38b,_0x330ced):_0x74a70f[_0x53ce19(0x1e9)](_0x10cd68));if(_0x330ced[_0x53ce19(0x1c9)][_0x53ce19(0x1b7)]>0x0)_0x330ced[_0x53ce19(0x1c9)]+='\x0a';_0x330ced[_0x53ce19(0x1c9)]+=_0x42c38b;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x1aa)]=function(_0x163eb7){const _0x4599e7=_0x5a8399;return _0x163eb7=this[_0x4599e7(0x184)](_0x163eb7),_0x163eb7=this[_0x4599e7(0x26f)](_0x163eb7),_0x163eb7=this['convertMessageLogTextReplacement'](_0x163eb7),_0x163eb7=this[_0x4599e7(0x2bc)](_0x163eb7),_0x163eb7=this['convertMessageLogVariableTextCodes'](_0x163eb7),_0x163eb7;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x184)]=function(_0x15047e){const _0x51dd8c=_0x5a8399;for(const _0x345bc0 of VisuMZ['MessageCore'][_0x51dd8c(0x1c5)][_0x51dd8c(0x175)]){if(_0x51dd8c(0x1b6)===_0x51dd8c(0x27e)){let _0x16f8cf=_0x2396bb[_0x51dd8c(0x2ab)](),_0x383598=_0x50e045[_0x51dd8c(0x219)]()[_0x16f8cf];_0x562233['COLOR_LOCK_CHOICE']&&(_0x383598=_0x51dd8c(0x172)[_0x51dd8c(0x1a6)](_0x383598)),_0x3deb41=_0x3bd25d[_0x51dd8c(0x1a6)](_0x383598);}else _0x15047e['match'](_0x345bc0['textCodeCheck'])&&(this['_textMacroFound']=!![],_0x15047e=_0x15047e[_0x51dd8c(0x1a4)](_0x345bc0[_0x51dd8c(0x297)],_0x345bc0[_0x51dd8c(0x29d)][_0x51dd8c(0x274)](this)));}return _0x15047e;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x26f)]=function(_0xf714ed){const _0xd80931=_0x5a8399;while(_0xf714ed[_0xd80931(0x29b)](/\\V\[(\d+)\]/gi)){_0xd80931(0x174)===_0xd80931(0x174)?_0xf714ed=_0xf714ed['replace'](/\\V\[(\d+)\]/gi,(_0x1de6a3,_0x307976)=>$gameVariables['value'](parseInt(_0x307976))):_0x34a899=_0x26cb9a[_0xd80931(0x1a4)](_0xb768c1,'');}return _0xf714ed;},Game_System[_0x5a8399(0x178)]['convertMessageLogTextReplacement']=function(_0x34d9be){const _0x5c27ac=_0x5a8399,_0x229a83=this['getLatestMessageLogEntry']();return _0x34d9be=_0x34d9be['replace'](/\\ItemQuantity\[(\d+)\]/gi,(_0x2043fa,_0x19feae)=>$gameParty[_0x5c27ac(0x25c)]($dataItems[Number(_0x19feae)])||0x0),_0x34d9be=_0x34d9be['replace'](/\\WeaponQuantity\[(\d+)\]/gi,(_0xbfa1eb,_0x39797f)=>$gameParty[_0x5c27ac(0x25c)]($dataWeapons[Number(_0x39797f)])||0x0),_0x34d9be=_0x34d9be[_0x5c27ac(0x1a4)](/\\ArmorQuantity\[(\d+)\]/gi,(_0x165384,_0x48dbc)=>$gameParty[_0x5c27ac(0x25c)]($dataArmors[Number(_0x48dbc)])||0x0),_0x34d9be=_0x34d9be['replace'](/\\ArmorQuantity\[(\d+)\]/gi,(_0x3d25ad,_0x512bbd)=>$gameParty['numItems']($dataArmors[Number(_0x512bbd)])||0x0),_0x34d9be=_0x34d9be[_0x5c27ac(0x1a4)](/\\LastGainObjQuantity/gi,Window_Base[_0x5c27ac(0x178)][_0x5c27ac(0x17d)]()),_0x34d9be=_0x34d9be[_0x5c27ac(0x1a4)](/\\LastGainObjName/gi,Window_Base[_0x5c27ac(0x178)][_0x5c27ac(0x251)](![])),_0x34d9be=_0x34d9be[_0x5c27ac(0x1a4)](/\\LastGainObj/gi,Window_Base[_0x5c27ac(0x178)][_0x5c27ac(0x251)](!![])),_0x34d9be=_0x34d9be[_0x5c27ac(0x1a4)](/\\ActorFace\[(\d+)\]/gi,(_0x5a4714,_0x3a7d62)=>{const _0x452220=_0x5c27ac;if(_0x452220(0x294)===_0x452220(0x217))return!![];else{const _0x40eb1c=$gameActors[_0x452220(0x2ba)](Number(_0x3a7d62));return _0x40eb1c&&(_0x229a83[_0x452220(0x21b)]=_0x40eb1c[_0x452220(0x21b)](),_0x229a83[_0x452220(0x28f)]=_0x40eb1c[_0x452220(0x28f)]()),'';}}),_0x34d9be=_0x34d9be['replace'](/\\PartyFace\[(\d+)\]/gi,(_0x2abaaf,_0x23a65b)=>{const _0x2b6f92=_0x5c27ac;if(_0x2b6f92(0x1fd)===_0x2b6f92(0x209))return _0x20fcf9=this[_0x2b6f92(0x184)](_0x1ecfef),_0x1f606e=this['convertMessageLogVariableTextCodes'](_0x4950ed),_0x5424ba=this['convertMessageLogTextReplacement'](_0x1ab34e),_0x1c81fb=this[_0x2b6f92(0x2bc)](_0x3426df),_0x2b116d=this[_0x2b6f92(0x26f)](_0x46bbd8),_0x63a042;else{const _0x37916e=$gameParty[_0x2b6f92(0x25b)]()[Number(_0x23a65b)-0x1];return _0x37916e&&(_0x229a83[_0x2b6f92(0x21b)]=_0x37916e[_0x2b6f92(0x21b)](),_0x229a83['faceIndex']=_0x37916e[_0x2b6f92(0x28f)]()),'';}}),_0x34d9be;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x2bc)]=function(_0x30629b){const _0x2f00a0=_0x5a8399;_0x30629b=_0x30629b[_0x2f00a0(0x1a4)](/\x1b/gi,'\x5c');const _0x35da40=this[_0x2f00a0(0x268)]();for(const _0x4ab144 of _0x35da40){if(_0x2f00a0(0x2ad)===_0x2f00a0(0x190)){if(this['_MessageLog_MainMenu']===_0x18ef8a)this[_0x2f00a0(0x1b3)]();if(this[_0x2f00a0(0x21d)]()[_0x2f00a0(0x1b7)]<=0x0)return![];return this[_0x2f00a0(0x283)]['enabled'];}else _0x30629b=_0x30629b[_0x2f00a0(0x1a4)](_0x4ab144,'');}return _0x30629b;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x268)]=function(){const _0x3a995f=_0x5a8399;let _0x15ae79=[];return _0x15ae79[_0x3a995f(0x1e9)](/\\$/gi,/\\\./gi,/\\\|/gi,/\\\!/gi),_0x15ae79['push'](/\\>/gi,/\\</gi,/\\\^/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:Picture|CenterPicture)<(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\COMMONEVENT\[(\d+)\]>/gi,/\\WAIT\[(\d+)\]/gi),_0x15ae79['push'](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<SHOW>/gi,/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<HIDE>/gi,/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<ENABLE>/gi,/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<DISABLE>/gi,/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\NormalBG/gi,/\\DimBG/gi,/\\TransparentBG/gi),_0x15ae79['push'](/<POSITION:[ ]*(.*?)>/gi,/<COORDINATES:[ ]*(.*?)>/gi,/<DIMENSIONS:[ ]*(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:WindowMoveTo|WindowMoveBy):[ ]*(.*?)/gi,/\\WindowReset/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:TroopMember|TroopNameMember)\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\ChangeFace<(.*?)>/gi,/\\FaceIndex\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<OFFSET:[ ]*(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i),_0x15ae79[_0x3a995f(0x1e9)](/<ENABLE IF CAN CREATE CHARACTER>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<ENABLE IF CAN DISMISS CHARACTERS>/gi),_0x15ae79['push'](/<ENABLE IF CAN RETRAIN CHARACTERS>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<ENABLE IF HAVE CREATED CHARACTERS>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<HIDE (?:BUTTON CONSOLE|CONSOLE|BUTTONS)>/gi),_0x15ae79['push'](/<HIDE CHOICE WINDOW>/gi,/<BIND (?:PICTURE|PICTURES):[ ](\d+)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/<(?:CHOICE|SELECT) (?:COMMON EVENT|EVENT|COMMONEVENT):[ ](\d+)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LSON|LSOFF|LETTER SOUND ON|LETTERSOUNDON|LETTER SOUND OFF|LETTERSOUNDOFF)/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LETTERSOUNDNAME|LSN)<(.*?)>/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LETTERSOUNDINTERVAL|LSI)\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LETTERSOUNDVOLUME|LSV)\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LETTERSOUNDPITCH|LSPI)\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LETTERSOUNDPAN|LSPA)\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LETTERSOUNDVOLUMEVARIANCE|LETTERSOUNDVOLUMEVAR|LSVV)\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/\\(?:LETTERSOUNDPITCHVARIANCE|LETTERSOUNDPITCHVAR|LSPIV)\[(\d+)\]/gi),_0x15ae79['push'](/\\(?:LETTERSOUNDPANVARIANCE|LETTERSOUNDPANVAR|LSPAV)\[(\d+)\]/gi),_0x15ae79[_0x3a995f(0x1e9)](/<CONTINUE>/gi),_0x15ae79;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x24e)]=function(_0x5b6370,_0x4c31d1){const _0x481efd=_0x5a8399,_0x554f0b=VisuMZ['VoiceActControl'][_0x481efd(0x18b)];return _0x5b6370=_0x5b6370[_0x481efd(0x1a4)](_0x554f0b['MsgVoiceSfx'],(_0xe14e00,_0xe6deea)=>{const _0x45914c=_0x481efd;_0xe6deea=_0xe6deea[_0x45914c(0x1a4)](/\x1bWrapBreak\[0\]/gi,'\x20');const _0x46cc39=_0xe6deea[_0x45914c(0x263)](',')[_0x45914c(0x245)](_0x219bf1=>_0x219bf1[_0x45914c(0x2c0)]()),_0xf84986={'name':String(_0x46cc39[0x0]??''),'volume':Number(_0x46cc39[0x1]??0x64)[_0x45914c(0x22e)](0x0,0x64),'pitch':Number(_0x46cc39[0x2]??0x64)[_0x45914c(0x22e)](0x0,0x64),'pan':Number(_0x46cc39[0x3]??0x0)[_0x45914c(0x22e)](-0x64,0x64)};return _0x4c31d1[_0x45914c(0x1bb)]=_0xf84986,'';}),_0x5b6370=_0x5b6370[_0x481efd(0x1a4)](_0x554f0b[_0x481efd(0x176)],''),_0x5b6370;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x1bc)]=function(_0x5e8d3b){const _0x32892e=_0x5a8399,_0x1f5900=this[_0x32892e(0x22c)]();_0x5e8d3b=this['convertMessageLogNameRemoval'](_0x5e8d3b),_0x5e8d3b=this[_0x32892e(0x1aa)](_0x5e8d3b),_0x1f5900[_0x32892e(0x1e5)]=_0x5e8d3b||'';},Game_System[_0x5a8399(0x178)]['convertMessageLogNameRemoval']=function(_0x1d3020){const _0x27942d=_0x5a8399;if(!_0x1d3020)return'';const _0x2a60a1=[/<LEFT>/gi,/<CENTER>/gi,/<RIGHT>/gi,/<\/LEFT>/gi,/<\/CENTER>/gi,/<\/RIGHT>/gi,/<POSITION:[ ](\d+)>/gi];for(const _0x237ea9 of _0x2a60a1){_0x1d3020=_0x1d3020[_0x27942d(0x1a4)](_0x237ea9,'');}return _0x1d3020;},Game_System[_0x5a8399(0x178)][_0x5a8399(0x231)]=function(_0x54f224,_0xc169b){const _0x3632ec=_0x5a8399,_0x1e8269=this[_0x3632ec(0x22c)]();_0x1e8269['faceName']=_0x54f224||'',_0x1e8269['faceIndex']=_0xc169b||0x0;},VisuMZ['MessageLog'][_0x5a8399(0x28a)]=Game_Message[_0x5a8399(0x178)][_0x5a8399(0x1d8)],Game_Message[_0x5a8399(0x178)][_0x5a8399(0x1d8)]=function(_0xbf4a94){const _0x754b99=_0x5a8399;VisuMZ[_0x754b99(0x255)][_0x754b99(0x28a)][_0x754b99(0x2bd)](this,_0xbf4a94),$gameSystem[_0x754b99(0x2bb)](_0xbf4a94);},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x267)]=Game_Message[_0x5a8399(0x178)][_0x5a8399(0x17c)],Game_Message[_0x5a8399(0x178)][_0x5a8399(0x17c)]=function(_0xebca6c){const _0x1507a4=_0x5a8399;VisuMZ[_0x1507a4(0x255)][_0x1507a4(0x267)][_0x1507a4(0x2bd)](this,_0xebca6c),$gameSystem[_0x1507a4(0x1bc)](_0xebca6c);},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x17b)]=Game_Message[_0x5a8399(0x178)][_0x5a8399(0x237)],Game_Message['prototype'][_0x5a8399(0x237)]=function(_0x574ba1,_0x1aad15){const _0x3e34de=_0x5a8399;VisuMZ[_0x3e34de(0x255)][_0x3e34de(0x17b)][_0x3e34de(0x2bd)](this,_0x574ba1,_0x1aad15),$gameSystem[_0x3e34de(0x231)](_0x574ba1,_0x1aad15);},VisuMZ['MessageLog']['Game_Interpreter_command101']=Game_Interpreter[_0x5a8399(0x178)][_0x5a8399(0x250)],Game_Interpreter[_0x5a8399(0x178)][_0x5a8399(0x250)]=function(_0x594671){const _0x42b5dc=_0x5a8399;$gameSystem[_0x42b5dc(0x180)](),$gameSystem[_0x42b5dc(0x269)]=!![];let _0x58a953=VisuMZ[_0x42b5dc(0x255)][_0x42b5dc(0x205)][_0x42b5dc(0x2bd)](this,_0x594671);return $gameSystem[_0x42b5dc(0x185)](),$gameSystem['_addTextToMessageLog']=![],_0x58a953;},VisuMZ['MessageLog']['BattleManager_setup']=BattleManager[_0x5a8399(0x222)],BattleManager['setup']=function(_0x3926e8,_0xb775ed,_0x5aa781){const _0x11e316=_0x5a8399;$gameSystem['createNewLoggedMessageEntry'](),VisuMZ[_0x11e316(0x255)][_0x11e316(0x211)][_0x11e316(0x2bd)](this,_0x3926e8,_0xb775ed,_0x5aa781);},VisuMZ['MessageLog'][_0x5a8399(0x2b3)]=Scene_Menu[_0x5a8399(0x178)][_0x5a8399(0x248)],Scene_Menu[_0x5a8399(0x178)]['createCommandWindow']=function(){const _0xdb931c=_0x5a8399;VisuMZ['MessageLog'][_0xdb931c(0x2b3)][_0xdb931c(0x2bd)](this);const _0x1481ad=this[_0xdb931c(0x298)];_0x1481ad[_0xdb931c(0x23d)](_0xdb931c(0x194),this[_0xdb931c(0x24d)][_0xdb931c(0x274)](this));},Scene_Menu[_0x5a8399(0x178)]['commandMessageLog']=function(){const _0x1131c4=_0x5a8399;SceneManager[_0x1131c4(0x1e9)](Scene_MessageLog);};function Scene_MessageLog(){const _0x11afe3=_0x5a8399;this[_0x11afe3(0x1e3)](...arguments);}Scene_MessageLog[_0x5a8399(0x178)]=Object[_0x5a8399(0x1a0)](Scene_MenuBase['prototype']),Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x236)]=Scene_MessageLog,Scene_MessageLog['prototype'][_0x5a8399(0x1e3)]=function(){const _0x2e3573=_0x5a8399;Scene_MenuBase[_0x2e3573(0x178)][_0x2e3573(0x1e3)][_0x2e3573(0x2bd)](this);},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x22d)]=function(){return 0x0;},Scene_MessageLog['prototype'][_0x5a8399(0x1a0)]=function(){const _0x57dc03=_0x5a8399;Scene_MenuBase[_0x57dc03(0x178)]['create']['call'](this),this[_0x57dc03(0x1b9)]();},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x1b9)]=function(){const _0xfb8a47=_0x5a8399,_0x2b0db5=this['messageLogWindowRect']();this[_0xfb8a47(0x1d2)]=new Window_MessageLog(_0x2b0db5),this[_0xfb8a47(0x278)](this[_0xfb8a47(0x1d2)]),this[_0xfb8a47(0x1d2)]['setHandler'](_0xfb8a47(0x292),this[_0xfb8a47(0x1f9)][_0xfb8a47(0x274)](this)),this[_0xfb8a47(0x1d2)][_0xfb8a47(0x1ed)](VisuMZ['MessageLog'][_0xfb8a47(0x1c5)][_0xfb8a47(0x261)][_0xfb8a47(0x282)]);},Scene_MessageLog['prototype'][_0x5a8399(0x280)]=function(){const _0x3cc957=_0x5a8399,_0x1b9301=VisuMZ[_0x3cc957(0x255)][_0x3cc957(0x1c5)][_0x3cc957(0x261)]['MessageLogMenu_RectJS'];if(_0x1b9301)return _0x1b9301['call'](this);const _0x57c82f=0x0,_0x26f010=this['mainAreaTop'](),_0x39839a=Graphics['boxWidth'],_0x470f95=this[_0x3cc957(0x1f7)]();return new Rectangle(_0x57c82f,_0x26f010,_0x39839a,_0x470f95);},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x200)]=function(){const _0x59e6fa=_0x5a8399;Scene_MenuBase[_0x59e6fa(0x178)][_0x59e6fa(0x200)][_0x59e6fa(0x2bd)](this),this[_0x59e6fa(0x26a)](this['getBackgroundOpacity']()),this['createCustomBackgroundImages']();},Scene_MessageLog[_0x5a8399(0x178)]['getBackgroundOpacity']=function(){const _0x12bbf7=_0x5a8399;return VisuMZ[_0x12bbf7(0x255)][_0x12bbf7(0x1c5)][_0x12bbf7(0x264)][_0x12bbf7(0x1d7)];},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x242)]=function(){const _0x4aa664=_0x5a8399,_0x44997b=VisuMZ['MessageLog'][_0x4aa664(0x1c5)]['BgSettings'];if(_0x44997b&&(_0x44997b[_0x4aa664(0x296)]!==''||_0x44997b[_0x4aa664(0x186)]!=='')){if(_0x4aa664(0x1d1)===_0x4aa664(0x2ac)){_0x2bedd1[_0x4aa664(0x180)]();const _0x5eae84=_0x1dd1fe['MessageLogNumberInputFmt'];let _0x20c047=this[_0x4aa664(0x281)];_0x136de2[_0x4aa664(0x2a1)]&&(_0x20c047=_0x4aa664(0x172)[_0x4aa664(0x1a6)](_0x20c047));let _0x116919=_0x5eae84[_0x4aa664(0x1a6)](_0x20c047);_0x507755[_0x4aa664(0x2bb)](_0x116919),_0x39cfb1[_0x4aa664(0x185)]();}else this[_0x4aa664(0x22b)]=new Sprite(ImageManager[_0x4aa664(0x239)](_0x44997b[_0x4aa664(0x296)])),this['_backSprite2']=new Sprite(ImageManager[_0x4aa664(0x2a0)](_0x44997b['BgFilename2'])),this[_0x4aa664(0x25a)](this[_0x4aa664(0x22b)]),this['addChild'](this[_0x4aa664(0x1bd)]),this[_0x4aa664(0x22b)][_0x4aa664(0x2a6)][_0x4aa664(0x28e)](this[_0x4aa664(0x198)][_0x4aa664(0x274)](this,this[_0x4aa664(0x22b)])),this[_0x4aa664(0x1bd)][_0x4aa664(0x2a6)][_0x4aa664(0x28e)](this[_0x4aa664(0x198)][_0x4aa664(0x274)](this,this['_backSprite2']));}},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x198)]=function(_0x10f5eb){const _0x4ab63b=_0x5a8399;this[_0x4ab63b(0x1df)](_0x10f5eb),this[_0x4ab63b(0x191)](_0x10f5eb);},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x2bf)]=function(){const _0x194518=_0x5a8399;return TextManager[_0x194518(0x28b)](_0x194518(0x21f),_0x194518(0x21a));},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x1e2)]=function(){const _0x27e988=_0x5a8399;return TextManager[_0x27e988(0x28b)]('up',_0x27e988(0x2b1));},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x290)]=function(){return'';},Scene_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x276)]=function(){const _0x3b4232=_0x5a8399;return TextManager[_0x3b4232(0x1fe)];},Scene_MessageLog[_0x5a8399(0x178)]['buttonAssistText3']=function(){const _0x206362=_0x5a8399;return TextManager[_0x206362(0x18f)];},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x206)]=Window_MenuCommand[_0x5a8399(0x178)][_0x5a8399(0x1a5)],Window_MenuCommand[_0x5a8399(0x178)][_0x5a8399(0x1a5)]=function(){const _0x49360f=_0x5a8399;VisuMZ[_0x49360f(0x255)]['Window_MenuCommand_addOriginalCommands'][_0x49360f(0x2bd)](this),this[_0x49360f(0x29e)]();},Window_MenuCommand['prototype'][_0x5a8399(0x29e)]=function(){const _0x2443cf=_0x5a8399;if(!this[_0x2443cf(0x220)]())return;if(!this[_0x2443cf(0x1dd)]())return;const _0x364e89=TextManager[_0x2443cf(0x256)],_0x1b71f2=this[_0x2443cf(0x27a)]();this[_0x2443cf(0x2b9)](_0x364e89,_0x2443cf(0x194),_0x1b71f2);},Window_MenuCommand[_0x5a8399(0x178)][_0x5a8399(0x220)]=function(){return Imported['VisuMZ_1_MainMenuCore']?![]:!![];},Window_MenuCommand[_0x5a8399(0x178)][_0x5a8399(0x1dd)]=function(){const _0x5074a9=_0x5a8399;return $gameSystem[_0x5074a9(0x238)]();},Window_MenuCommand[_0x5a8399(0x178)]['isMessageLogCommandEnabled']=function(){const _0x1836a9=_0x5a8399;return $gameSystem[_0x1836a9(0x18e)]();},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1d9)]=Window_ChoiceList[_0x5a8399(0x178)][_0x5a8399(0x286)],Window_ChoiceList[_0x5a8399(0x178)][_0x5a8399(0x286)]=function(){const _0x2fce6c=_0x5a8399;(SceneManager['isSceneMap']()||!Window_MessageLog[_0x2fce6c(0x254)])&&(_0x2fce6c(0x271)!==_0x2fce6c(0x271)?this[_0x2fce6c(0x265)](_0x23c279,_0x53479f,this[_0x2fce6c(0x20d)]):this['addMessageLogEntry'](!![])),VisuMZ[_0x2fce6c(0x255)][_0x2fce6c(0x1d9)][_0x2fce6c(0x2bd)](this);},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x2b5)]=Window_ChoiceList[_0x5a8399(0x178)][_0x5a8399(0x1e4)],Window_ChoiceList['prototype'][_0x5a8399(0x1e4)]=function(){const _0xf013ee=_0x5a8399;(SceneManager[_0xf013ee(0x1db)]()||!Window_MessageLog[_0xf013ee(0x254)])&&this[_0xf013ee(0x1b4)](![]),VisuMZ[_0xf013ee(0x255)][_0xf013ee(0x2b5)][_0xf013ee(0x2bd)](this);},Window_ChoiceList[_0x5a8399(0x178)][_0x5a8399(0x1b4)]=function(_0x82293c){const _0x569ecc=_0x5a8399;$gameSystem[_0x569ecc(0x180)]();const _0x21122a=TextManager[_0x569ecc(0x1d0)];let _0x3a6ae4='';if(_0x82293c){if(_0x569ecc(0x2b0)!==_0x569ecc(0x2b0))this['processFastScroll'](![]);else{let _0x8f4ec2=this[_0x569ecc(0x2a9)](),_0x1e6440=$gameMessage[_0x569ecc(0x219)]()[_0x8f4ec2];Window_MessageLog['COLOR_LOCK_CHOICE']&&(_0x1e6440=_0x569ecc(0x172)[_0x569ecc(0x1a6)](_0x1e6440)),_0x3a6ae4=_0x21122a[_0x569ecc(0x1a6)](_0x1e6440);}}else{if(!_0x82293c&&!this[_0x569ecc(0x2af)]()){let _0x5df1c0=$gameMessage['choiceCancelType'](),_0x4be39c=$gameMessage[_0x569ecc(0x219)]()[_0x5df1c0];Window_MessageLog[_0x569ecc(0x27f)]&&(_0x4be39c='<ColorLock>%1</ColorLock>'[_0x569ecc(0x1a6)](_0x4be39c)),_0x3a6ae4=_0x21122a[_0x569ecc(0x1a6)](_0x4be39c);}else _0x3a6ae4=_0x21122a[_0x569ecc(0x1a6)](TextManager[_0x569ecc(0x210)]);}$gameSystem[_0x569ecc(0x2bb)](_0x3a6ae4),$gameSystem[_0x569ecc(0x185)]();},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x207)]=Window_NumberInput[_0x5a8399(0x178)][_0x5a8399(0x1da)],Window_NumberInput['prototype'][_0x5a8399(0x1da)]=function(){const _0x379cb0=_0x5a8399;(SceneManager[_0x379cb0(0x1db)]()||!Window_MessageLog[_0x379cb0(0x254)])&&('JAPfN'==='JAPfN'?this['addMessageLogEntry']():(this['forceNameColor'](),this[_0x379cb0(0x182)](_0x1bae14[_0x379cb0(0x1e5)],_0xb3bab8[_0x379cb0(0x1ec)],this[_0x379cb0(0x20d)],_0x5b5be8),this[_0x379cb0(0x20d)]+=this[_0x379cb0(0x19b)](_0x2cf45e[_0x379cb0(0x1e5)])[_0x379cb0(0x1cb)],this[_0x379cb0(0x2b7)]())),VisuMZ[_0x379cb0(0x255)][_0x379cb0(0x207)][_0x379cb0(0x2bd)](this);},Window_NumberInput[_0x5a8399(0x178)][_0x5a8399(0x1b4)]=function(){const _0x59cbc7=_0x5a8399;$gameSystem[_0x59cbc7(0x180)]();const _0x1779fe=TextManager[_0x59cbc7(0x2b6)];let _0x83e33d=this[_0x59cbc7(0x281)];if(Window_MessageLog['COLOR_LOCK_NUMBER']){if(_0x59cbc7(0x266)!==_0x59cbc7(0x266)){const _0x2d37e9=_0x1a6985[_0x59cbc7(0x255)][_0x59cbc7(0x1c5)][_0x59cbc7(0x264)];_0x2d37e9&&(_0x2d37e9[_0x59cbc7(0x296)]!==''||_0x2d37e9[_0x59cbc7(0x186)]!=='')&&(this[_0x59cbc7(0x22b)]=new _0x61228f(_0x29e099[_0x59cbc7(0x239)](_0x2d37e9['BgFilename1'])),this['_backSprite2']=new _0x4d10f3(_0x13b526['loadTitle2'](_0x2d37e9['BgFilename2'])),this[_0x59cbc7(0x25a)](this['_backSprite1']),this[_0x59cbc7(0x25a)](this[_0x59cbc7(0x1bd)]),this[_0x59cbc7(0x22b)][_0x59cbc7(0x2a6)]['addLoadListener'](this[_0x59cbc7(0x198)][_0x59cbc7(0x274)](this,this['_backSprite1'])),this[_0x59cbc7(0x1bd)][_0x59cbc7(0x2a6)]['addLoadListener'](this[_0x59cbc7(0x198)][_0x59cbc7(0x274)](this,this[_0x59cbc7(0x1bd)])));}else _0x83e33d=_0x59cbc7(0x172)[_0x59cbc7(0x1a6)](_0x83e33d);}let _0x2fe8ec=_0x1779fe[_0x59cbc7(0x1a6)](_0x83e33d);$gameSystem['addTextToMessageLog'](_0x2fe8ec),$gameSystem['addNewLoggedMessageEntry']();},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1b0)]=Window_EventItem['prototype'][_0x5a8399(0x27d)],Window_EventItem[_0x5a8399(0x178)][_0x5a8399(0x27d)]=function(){const _0x54ebe3=_0x5a8399;(SceneManager['isSceneMap']()||!Window_MessageLog[_0x54ebe3(0x254)])&&this[_0x54ebe3(0x1b4)](this[_0x54ebe3(0x2a5)]()),VisuMZ['MessageLog'][_0x54ebe3(0x1b0)][_0x54ebe3(0x2bd)](this);},VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x195)]=Window_EventItem[_0x5a8399(0x178)][_0x5a8399(0x1ab)],Window_EventItem[_0x5a8399(0x178)]['onCancel']=function(){const _0x347072=_0x5a8399;(SceneManager[_0x347072(0x1db)]()||!Window_MessageLog[_0x347072(0x254)])&&(_0x347072(0x23c)===_0x347072(0x224)?(_0x443212[_0x347072(0x255)][_0x347072(0x247)][_0x347072(0x2bd)](this),this[_0x347072(0x1b3)](),this['initMessageLogSettings']()):this['addMessageLogEntry'](![])),VisuMZ[_0x347072(0x255)][_0x347072(0x195)]['call'](this);},Window_EventItem[_0x5a8399(0x178)][_0x5a8399(0x1b4)]=function(_0x1aa37b){const _0xafe51c=_0x5a8399;$gameSystem[_0xafe51c(0x180)]();const _0x4187bb=TextManager['MessageLogEventItemFmt'];let _0xebeba1='';if(_0x1aa37b){if('BCGbT'===_0xafe51c(0x243)){_0x429634=_0x349421[_0xafe51c(0x1a4)](/\x1bWrapBreak\[0\]/gi,'\x20');const _0x5ac63e=_0x4422bb[_0xafe51c(0x263)](',')[_0xafe51c(0x245)](_0x3b9105=>_0x3b9105['trim']()),_0x517b5b={'name':_0x1b0007(_0x5ac63e[0x0]??''),'volume':_0x40d05a(_0x5ac63e[0x1]??0x64)[_0xafe51c(0x22e)](0x0,0x64),'pitch':_0x2881c8(_0x5ac63e[0x2]??0x64)[_0xafe51c(0x22e)](0x0,0x64),'pan':_0x35b649(_0x5ac63e[0x3]??0x0)[_0xafe51c(0x22e)](-0x64,0x64)};return _0x5c7de0['replayVoiceSound']=_0x517b5b,'';}else{let _0x3861b=TextManager[_0xafe51c(0x1b2)],_0x25fae1=_0x3861b['format']('\x5cI[%1]'['format'](_0x1aa37b[_0xafe51c(0x204)]),_0x1aa37b[_0xafe51c(0x1c6)]);if(Window_MessageLog['COLOR_LOCK_ITEM']){if(_0xafe51c(0x1d5)!=='FiWLA')_0x25fae1=_0xafe51c(0x172)[_0xafe51c(0x1a6)](_0x25fae1);else{if(this['_MessageLog_MainMenu']===_0x35125a)this[_0xafe51c(0x1b3)]();this[_0xafe51c(0x283)][_0xafe51c(0x173)]=_0x33bba8;}}_0xebeba1=_0x4187bb[_0xafe51c(0x1a6)](_0x25fae1);}}else _0xebeba1=_0x4187bb['format'](TextManager[_0xafe51c(0x1b1)]);$gameSystem['addTextToMessageLog'](_0xebeba1),$gameSystem[_0xafe51c(0x185)]();},VisuMZ['MessageLog']['Window_Base_preConvertEscapeCharacters']=Window_Base[_0x5a8399(0x178)]['preConvertEscapeCharacters'],Window_Base['prototype'][_0x5a8399(0x1f3)]=function(_0x3e8898){const _0x599a9b=_0x5a8399;return _0x3e8898=VisuMZ[_0x599a9b(0x255)][_0x599a9b(0x293)][_0x599a9b(0x2bd)](this,_0x3e8898),_0x3e8898=_0x3e8898[_0x599a9b(0x1a4)](/<BYPASS MESSAGE LOG>/i,''),_0x3e8898;},VisuMZ['MessageLog']['Window_Message_isTriggered']=Window_Message[_0x5a8399(0x178)]['isTriggered'],Window_Message[_0x5a8399(0x178)][_0x5a8399(0x25e)]=function(){const _0x3bdaae=_0x5a8399;let _0x483b5d=VisuMZ[_0x3bdaae(0x255)][_0x3bdaae(0x29a)]['call'](this);return this['canCallMessageLog']()&&Input[_0x3bdaae(0x25e)](Window_MessageLog[_0x3bdaae(0x223)])?_0x3bdaae(0x26d)!==_0x3bdaae(0x1e6)?(this[_0x3bdaae(0x2aa)](),![]):0x0:_0x483b5d;},Window_Message[_0x5a8399(0x178)]['canCallMessageLog']=function(){const _0x50b416=_0x5a8399;return SceneManager['isSceneMap']()&&$gameSystem[_0x50b416(0x18e)]();},Window_Message[_0x5a8399(0x178)][_0x5a8399(0x2aa)]=function(){const _0x2fce37=_0x5a8399;this[_0x2fce37(0x2a2)](),SceneManager[_0x2fce37(0x1e9)](Scene_MessageLog);};function Window_MessageLog(){const _0x319663=_0x5a8399;this[_0x319663(0x1e3)](...arguments);}Window_MessageLog[_0x5a8399(0x178)]=Object[_0x5a8399(0x1a0)](Window_Selectable[_0x5a8399(0x178)]),Window_MessageLog['prototype']['constructor']=Window_MessageLog,Window_MessageLog['SCENE_MAP_ONLY']=!![],Window_MessageLog[_0x5a8399(0x1c7)]=VisuMZ['MessageLog'][_0x5a8399(0x1c5)][_0x5a8399(0x196)][_0x5a8399(0x1a8)],Window_MessageLog['SHORTCUT_KEY']=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x196)][_0x5a8399(0x28c)],Window_MessageLog[_0x5a8399(0x233)]=VisuMZ['MessageLog']['Settings']['General']['ShowFaces']??!![],Window_MessageLog['PAD_SIDES']=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)]['General'][_0x5a8399(0x1ff)]??!![],Window_MessageLog['HORZ_LINE_THICKNESS']=0x4,Window_MessageLog[_0x5a8399(0x1ec)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x261)][_0x5a8399(0x18a)],Window_MessageLog[_0x5a8399(0x27f)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)]['Window'][_0x5a8399(0x177)],Window_MessageLog[_0x5a8399(0x2a1)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x261)]['ColorLockNumber'],Window_MessageLog[_0x5a8399(0x181)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x261)][_0x5a8399(0x1a7)],Window_MessageLog[_0x5a8399(0x295)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x261)][_0x5a8399(0x1f0)],Window_MessageLog[_0x5a8399(0x20a)]=VisuMZ[_0x5a8399(0x255)]['Settings']['Window'][_0x5a8399(0x1c0)],Window_MessageLog[_0x5a8399(0x1cc)]=VisuMZ[_0x5a8399(0x255)]['Settings']['Window'][_0x5a8399(0x22a)],Window_MessageLog[_0x5a8399(0x25f)]=VisuMZ[_0x5a8399(0x255)][_0x5a8399(0x1c5)][_0x5a8399(0x261)][_0x5a8399(0x228)],Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x1e3)]=function(_0x1612d8){const _0x4b6ad7=_0x5a8399;this[_0x4b6ad7(0x1fb)]=Input[_0x4b6ad7(0x17f)](Window_MessageLog[_0x4b6ad7(0x223)]),Window_Selectable[_0x4b6ad7(0x178)][_0x4b6ad7(0x1e3)][_0x4b6ad7(0x2bd)](this,_0x1612d8),this['_allTextHeight']=0x0,this['refresh'](),this[_0x4b6ad7(0x291)]();},Window_MessageLog[_0x5a8399(0x178)]['isAutoColorAffected']=function(){return!![];},Window_MessageLog[_0x5a8399(0x178)]['refresh']=function(){const _0x1f2294=_0x5a8399;this[_0x1f2294(0x1c8)](),this['calculateTextHeight'](),this[_0x1f2294(0x1dc)](),this[_0x1f2294(0x1ee)]();},Window_MessageLog[_0x5a8399(0x178)]['removeAllReplayVoiceSprites']=function(){const _0x5b92b5=_0x5a8399;if(!Imported['VisuMZ_2_VoiceActControl'])return;this[_0x5b92b5(0x28d)]=this[_0x5b92b5(0x28d)]||[];const _0x267362=[];for(const _0x4ae812 of this[_0x5b92b5(0x28d)]){this['_innerChildren'][_0x5b92b5(0x19d)](_0x4ae812),this[_0x5b92b5(0x1f6)][_0x5b92b5(0x258)](_0x4ae812),_0x267362[_0x5b92b5(0x1e9)](_0x4ae812);}for(const _0x496ba1 of _0x267362){this[_0x5b92b5(0x28d)][_0x5b92b5(0x19d)](_0x496ba1);}},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x279)]=function(){const _0x54ed35=_0x5a8399,_0x5c3c67=this['lineHeight'](),_0x4dd8e7=$gameSystem['getLoggedMessages']();this[_0x54ed35(0x1f5)]=_0x5c3c67;for(const _0x119aac of _0x4dd8e7){if('iFxtq'!==_0x54ed35(0x1f8))_0x3b95bd[_0x54ed35(0x180)](),_0x516c32[_0x54ed35(0x255)]['BattleManager_setup']['call'](this,_0x5b1291,_0x13cc4f,_0x1c90d5);else{if(!_0x119aac)continue;if(_0x119aac['speaker']!=='')this['_allTextHeight']+=this[_0x54ed35(0x19b)](_0x119aac[_0x54ed35(0x1e5)])[_0x54ed35(0x1cb)];let _0x2dcdf7=_0x119aac[_0x54ed35(0x21b)]!==''&&Window_MessageLog['SHOW_FACES']?ImageManager['faceHeight']:0x0,_0x48d906=this['textSizeEx'](_0x119aac[_0x54ed35(0x1c9)])[_0x54ed35(0x1cb)];this[_0x54ed35(0x1f5)]+=Math[_0x54ed35(0x1ad)](_0x2dcdf7,_0x48d906),this[_0x54ed35(0x1f5)]+=_0x5c3c67;}}},Window_MessageLog[_0x5a8399(0x178)]['contentsHeight']=function(){const _0x3007f1=_0x5a8399;return Math[_0x3007f1(0x1ad)](this[_0x3007f1(0x1f5)],0x1);},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x1ee)]=function(){const _0x27138e=_0x5a8399;this[_0x27138e(0x20d)]=0x0,this[_0x27138e(0x2be)]();const _0x2d629e=$gameSystem[_0x27138e(0x21d)]();for(const _0x527e16 of _0x2d629e){if(_0x27138e(0x235)===_0x27138e(0x235)){if(!_0x527e16)continue;this['resetFontSettings'](),this[_0x27138e(0x26e)](_0x527e16),this[_0x27138e(0x1c4)]();}else this['playOkSound'](),_0x5a5387[_0x27138e(0x1e9)](_0x541761);}this[_0x27138e(0x1cd)]();},Window_MessageLog[_0x5a8399(0x178)]['drawHorzLine']=function(){const _0x19d25c=_0x5a8399,_0x30c3ed=new Rectangle(0x4,this[_0x19d25c(0x20d)],this[_0x19d25c(0x289)]-0x8,this[_0x19d25c(0x1bf)]());this[_0x19d25c(0x197)]();const _0x4de518=Window_MessageLog[_0x19d25c(0x246)],_0x2ada03=_0x30c3ed['y']+(_0x30c3ed[_0x19d25c(0x1cb)]-_0x4de518)/0x2;this[_0x19d25c(0x1b5)](_0x30c3ed['x'],_0x2ada03,_0x30c3ed[_0x19d25c(0x1af)],_0x4de518),this['_lineY']+=this[_0x19d25c(0x1bf)]();},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x19b)]=function(_0x15542d){const _0x58f140=_0x5a8399;let _0x436850=this[_0x58f140(0x289)]-(ImageManager[_0x58f140(0x212)]+0x18)*0x2;if(Graphics[_0x58f140(0x23b)]<=0x330){if(_0x58f140(0x1e0)!==_0x58f140(0x23e))_0x436850=this[_0x58f140(0x289)]-0x8;else return'';}this[_0x58f140(0x197)](),this[_0x58f140(0x1c4)]();const _0x588038=this[_0x58f140(0x2a7)](_0x15542d,0x0,0x0,_0x436850);return _0x588038['drawing']=![],this[_0x58f140(0x1e1)](_0x588038),this[_0x58f140(0x1c4)](),{'width':_0x588038['outputWidth'],'height':_0x588038[_0x58f140(0x20c)]};},Window_MessageLog['prototype'][_0x5a8399(0x26e)]=function(_0x25ed45){const _0x112f54=_0x5a8399;let _0x3d3fcf=0x4,_0x2496f5=ImageManager[_0x112f54(0x212)]+0x14,_0x4ebc88=this[_0x112f54(0x289)]-(_0x2496f5+0x4)*0x2;if(_0x25ed45['speaker']!==''){if('mWQEJ'===_0x112f54(0x20f)){if([_0x112f54(0x1fa),_0x112f54(0x21c)][_0x112f54(0x277)](_0x37cf1f))return _0x4d2a59[_0x112f54(0x273)];return _0x758781[_0x112f54(0x255)][_0x112f54(0x1d4)][_0x112f54(0x2bd)](this,_0x5bb867);}else this[_0x112f54(0x2a4)](),this[_0x112f54(0x182)](_0x25ed45[_0x112f54(0x1e5)],Window_MessageLog[_0x112f54(0x1ec)],this[_0x112f54(0x20d)],_0x4ebc88),this[_0x112f54(0x20d)]+=this[_0x112f54(0x19b)](_0x25ed45[_0x112f54(0x1e5)])[_0x112f54(0x1cb)],this['clearNameColor']();}this['resetFontSettings'](),this['resetWordWrap']();if(Window_MessageLog[_0x112f54(0x233)]&&_0x25ed45[_0x112f54(0x21b)]){if(_0x112f54(0x26b)!==_0x112f54(0x26b)){if(!_0x420400['replayVoiceSound'])return;this[_0x112f54(0x28d)]=this[_0x112f54(0x28d)]||[];(_0x1f6034[_0x112f54(0x233)]&&_0x362694[_0x112f54(0x21b)]||_0x1991ea['boxWidth']>0x330)&&(_0x5f58b2+=_0x45632f[_0x112f54(0x212)]-_0x2cf8a8[_0x112f54(0x21e)]);const _0x113d2a=new _0x1402e1();_0x113d2a[_0x112f54(0x249)](_0x2f43a5[_0x112f54(0x1bb)]),_0x113d2a[_0x112f54(0x287)](_0x24a50b,_0x33c48d),this[_0x112f54(0x28d)][_0x112f54(0x1e9)](_0x113d2a),this['addInnerChild'](_0x113d2a);}else{let _0x218be5=_0x3d3fcf,_0xe403c5=this[_0x112f54(0x20d)],_0x12a818=ImageManager[_0x112f54(0x212)],_0x561ff6=ImageManager[_0x112f54(0x1ae)];this[_0x112f54(0x2b4)](_0x25ed45[_0x112f54(0x21b)],_0x25ed45[_0x112f54(0x28f)],_0x218be5,_0xe403c5,_0x12a818,_0x561ff6),Graphics['boxWidth']<=0x330&&(_0x4ebc88=this[_0x112f54(0x289)]-(_0x2496f5+0x4));}}else(!Window_MessageLog[_0x112f54(0x18c)]||Graphics[_0x112f54(0x23b)]<=0x330)&&(_0x2496f5=0x4,_0x4ebc88=this['innerWidth']-0x8,Imported[_0x112f54(0x29f)]&&(_0x25ed45[_0x112f54(0x1bb)]&&(_0x2496f5+=ImageManager[_0x112f54(0x21e)]+0x4,_0x4ebc88-=ImageManager['iconWidth']+0x4)));this[_0x112f54(0x182)](_0x25ed45[_0x112f54(0x1c9)],_0x2496f5,this[_0x112f54(0x20d)],_0x4ebc88);let _0x16945d=this['textSizeEx'](_0x25ed45[_0x112f54(0x1c9)])[_0x112f54(0x1cb)],_0x4dac23=_0x25ed45[_0x112f54(0x21b)]!==''&&Window_MessageLog[_0x112f54(0x233)]?ImageManager[_0x112f54(0x1ae)]:0x0;Imported[_0x112f54(0x29f)]&&('PeDOA'!==_0x112f54(0x24f)?this[_0x112f54(0x265)](_0x25ed45,_0x3d3fcf,this['_lineY']):_0xf68a6e=this[_0x112f54(0x24e)](_0x1b85b0,_0x55ec73)),this[_0x112f54(0x20d)]+=Math[_0x112f54(0x1ad)](_0x4dac23,_0x16945d),this[_0x112f54(0x197)](),this[_0x112f54(0x1c4)](),this['drawHorzLine']();},Window_MessageLog[_0x5a8399(0x178)]['forceNameColor']=function(){const _0x393447=_0x5a8399,_0x103908=VisuMZ[_0x393447(0x227)][_0x393447(0x1c5)]['General'][_0x393447(0x1b8)];this[_0x393447(0x244)]=ColorManager[_0x393447(0x1d3)](_0x103908);},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x2b7)]=function(){const _0x615efd=_0x5a8399;this[_0x615efd(0x244)]=undefined;},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x229)]=function(){const _0x2489b8=_0x5a8399;Window_Selectable[_0x2489b8(0x178)][_0x2489b8(0x229)][_0x2489b8(0x2bd)](this),this['_forcedNameColor']&&this[_0x2489b8(0x253)](this[_0x2489b8(0x244)]);},Window_MessageLog['prototype'][_0x5a8399(0x265)]=function(_0x89fdc6,_0x374d83,_0x2f1174){const _0x2c5837=_0x5a8399;if(!_0x89fdc6['replayVoiceSound'])return;this[_0x2c5837(0x28d)]=this[_0x2c5837(0x28d)]||[];(Window_MessageLog[_0x2c5837(0x233)]&&_0x89fdc6['faceName']||Graphics['boxWidth']>0x330)&&(_0x2c5837(0x1de)!=='egRhp'?(this['_innerChildren'][_0x2c5837(0x19d)](_0x1c8fc7),this[_0x2c5837(0x1f6)]['removeChild'](_0x282980),_0x31e0d5['push'](_0x14c47f)):_0x374d83+=ImageManager[_0x2c5837(0x212)]-ImageManager[_0x2c5837(0x21e)]);const _0x22d394=new Sprite_ReplayVoiceLine();_0x22d394['setSound'](_0x89fdc6[_0x2c5837(0x1bb)]),_0x22d394[_0x2c5837(0x287)](_0x374d83,_0x2f1174),this['_replayVoiceSprites']['push'](_0x22d394),this[_0x2c5837(0x22f)](_0x22d394);},Window_MessageLog[_0x5a8399(0x178)]['updateOrigin']=function(){},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x1ea)]=function(){const _0x25e32b=_0x5a8399;if(Input[_0x25e32b(0x17f)](Window_MessageLog['SHORTCUT_KEY'])&&this[_0x25e32b(0x1fb)])return;this['_isHotKeyPressed']=![];if(Input[_0x25e32b(0x17f)](_0x25e32b(0x2b1))){if(_0x25e32b(0x234)!==_0x25e32b(0x234))return _0x41a8d1['MessageLogButtonName'];else this[_0x25e32b(0x1e8)](!![]);}else{if(Input[_0x25e32b(0x17f)]('up'))this[_0x25e32b(0x1e8)](![]);else{if(Input[_0x25e32b(0x17f)]('pagedown'))this['processFastScroll'](!![]);else{if(Input[_0x25e32b(0x17f)](_0x25e32b(0x21f))){if('ETUYA'==='BqWoZ')return _0xbd209e=_0x3ead2a['MessageLog'][_0x25e32b(0x293)][_0x25e32b(0x2bd)](this,_0x253727),_0x331a46=_0x3eefbb['replace'](/<BYPASS MESSAGE LOG>/i,''),_0x24f303;else this[_0x25e32b(0x252)](![]);}else{if(Input[_0x25e32b(0x25e)](_0x25e32b(0x199)))this[_0x25e32b(0x189)](!![]);else Input[_0x25e32b(0x25e)](_0x25e32b(0x23a))&&('JsuQu'!=='rNZto'?this[_0x25e32b(0x1cd)](!![]):(_0x29f3bf[_0x25e32b(0x178)][_0x25e32b(0x1a0)]['call'](this),this['createMessageLogWindow']()));}}}}},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x1e8)]=function(_0x7dc1e2){const _0x4fc1b1=_0x5a8399;let _0x382284=this['origin']['y'];this[_0x4fc1b1(0x1d6)]['y']+=(_0x7dc1e2?0x1:-0x1)*Window_MessageLog[_0x4fc1b1(0x295)];let _0x5a05ce=Math[_0x4fc1b1(0x1ad)](0x0,this['_allTextHeight']-this[_0x4fc1b1(0x1fc)]);this[_0x4fc1b1(0x1d6)]['y']=this[_0x4fc1b1(0x1d6)]['y']['clamp'](0x0,_0x5a05ce);if(_0x382284!==this[_0x4fc1b1(0x1d6)]['y']&&Graphics['frameCount']%Window_MessageLog[_0x4fc1b1(0x1cc)]===0x0)this[_0x4fc1b1(0x284)]();},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x252)]=function(_0x4ebf9b){const _0x2d6c62=_0x5a8399;let _0x46455d=this[_0x2d6c62(0x1d6)]['y'];this[_0x2d6c62(0x1d6)]['y']+=(_0x4ebf9b?0x1:-0x1)*Window_MessageLog[_0x2d6c62(0x20a)];let _0x898c65=Math['max'](0x0,this['_allTextHeight']-this[_0x2d6c62(0x1fc)]);this[_0x2d6c62(0x1d6)]['y']=this[_0x2d6c62(0x1d6)]['y'][_0x2d6c62(0x22e)](0x0,_0x898c65);if(_0x46455d!==this[_0x2d6c62(0x1d6)]['y']&&Graphics[_0x2d6c62(0x183)]%Window_MessageLog[_0x2d6c62(0x25f)]===0x0)this[_0x2d6c62(0x284)]();},Window_MessageLog['prototype'][_0x5a8399(0x189)]=function(_0x566804){const _0x59a71c=_0x5a8399;let _0x268587=this[_0x59a71c(0x1d6)]['y'];this[_0x59a71c(0x1d6)]['y']=0x0;if(_0x566804&&_0x268587!==this[_0x59a71c(0x1d6)]['y'])this[_0x59a71c(0x284)]();},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x1cd)]=function(_0x5488b2){const _0x51737b=_0x5a8399;let _0x2278c1=this['origin']['y'],_0x3dc9cf=Math[_0x51737b(0x1ad)](0x0,this[_0x51737b(0x1f5)]-this['innerHeight']);this[_0x51737b(0x1d6)]['y']=_0x3dc9cf;if(_0x5488b2&&_0x2278c1!==this[_0x51737b(0x1d6)]['y'])this[_0x51737b(0x284)]();},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x230)]=function(_0x284bbe,_0x5d3096){const _0x44ae78=_0x5a8399;this['origin']['y']+=_0x5d3096;let _0x502c82=Math[_0x44ae78(0x1ad)](0x0,this['_allTextHeight']-this['innerHeight']);this[_0x44ae78(0x1d6)]['y']=this[_0x44ae78(0x1d6)]['y']['clamp'](0x0,_0x502c82);},Window_MessageLog[_0x5a8399(0x178)][_0x5a8399(0x213)]=function(_0x16abb1,_0x37757b){const _0x4200b4=_0x5a8399;this[_0x4200b4(0x1d6)]['y']+=_0x37757b;let _0x5af554=Math[_0x4200b4(0x1ad)](0x0,this[_0x4200b4(0x1f5)]-this[_0x4200b4(0x1fc)]);this[_0x4200b4(0x1d6)]['y']=this[_0x4200b4(0x1d6)]['y'][_0x4200b4(0x22e)](0x0,_0x5af554);};