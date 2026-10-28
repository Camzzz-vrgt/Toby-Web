//=============================================================================
// VisuStella MZ - State Tooltips
// VisuMZ_3_StateTooltips.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_StateTooltips = true;

var VisuMZ = VisuMZ || {};
VisuMZ.StateTooltips = VisuMZ.StateTooltips || {};
VisuMZ.StateTooltips.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.08] [StateTooltips]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/State_Tooltips_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_MessageCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds a tooltip window in battle (and other scenes) whenever the
 * player's mouse cursor is hovered over specific areas of the screen. The
 * tooltip window will display a list of the states, buffs, and debuffs the
 * hovered battler has along with a description of the entities and their
 * remaining duration.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Tooltip window displays when hovering over battlers and specific windows
 *   to display their states, buffs, and debuffs.
 * * Adjust the text format in which information is displayed inside the
 *   tooltip window.
 * * Modify the descriptions for states, buffs, and debuffs to your liking.
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
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_MessageCore
 * * VisuMZ_1_SkillsStatesCore
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_2_PartySystem
 * 
 * VisuMZ_2_ClassChangeSystem
 *
 * These plugins have scenes that also support tooltips if this plugin is also
 * installed while those are active in your game's project.
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
 * VisuMZ_1_ElementStatusCore
 * 
 * The updated Status Menu currently does not contain tooltip support for the
 * "General" pages that may display the actor's states. This is due to the
 * customization aspect for the various Status Menu pages. There will be a
 * future update where we will adapt this feature.
 * 
 * ---
 *
 * VisuMZ_2_DragonbonesUnion
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
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
 * === Description-Related Notetags ===
 * 
 * ---
 *
 * <Help Description>
 *  text
 *  text
 * </Help Description>
 *
 * - Used for: State Notetags
 * - Assigns a help description for the state.
 * - Replace 'text' with text you want displayed for the tooltip window.
 * - This best works with one line.
 * - If this notetag is not used, the help description will default to the
 *   setting found in the plugin's Plugin Parameters.
 * - Insert %1 into the help description to show any data that would otherwise
 *   be shown as the state display, such as Absorption Barrier count.
 *
 * ---
 * 
 * <Exclude From Tooltips>
 * 
 * - Used for: State Notetags
 * - Excludes the state from being displayed in the state tooltips.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tooltip Settings
 * ============================================================================
 *
 * General settings for the State Tooltips Window.
 *
 * ---
 *
 * Appearance
 * 
 *   Scale:
 *   - What scale size do you want for the tooltip?
 *   - Use 1.0 for normal size.
 * 
 *   Centered?:
 *   - Center the state tooltip when shown through hovering?
 * 
 *   Skin Filename:
 *   - What window skin do you want to use for the tooltip?
 * 
 *   Skin Opacity:
 *   - What opacity setting is used for the tooltip?
 *   - Use a number between 0 and 255.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - Offset the tooltip X position from the mouse?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the tooltip Y position from the mouse?
 *   - Negative: up. Positive: down.
 *
 * ---
 * 
 * Keyboard-Select Show:
 * 
 * This allows showing enemy tooltips when selecting targets during battle
 * while using the keyboard. Tooltip will appear after a brief pause while
 * selecting the enemy.
 *   
 *   Enabled?:
 *   - Show state tooltips when selecting targets using keyboard? 
 *   
 *   Centered?:
 *   - Center the state tooltip when shown through keyboard? 
 *   
 *   Hover Delay (MS):
 *   - How many milliseconds (ms) to delay the tooltip from showing as to not
 *     clutter up target selection screen.
 *   
 *   Offset X:
 *   - Offset the tooltip X position from target's base?
 *   - Negative: left. Positive: right.
 * 
 *     Actor Frontview X:
 *     - Additional Offset X when selecting actors in frontview.
 *     - Negative: left. Positive: right.
 *   
 *     Weakness Display X:
 *     - Additional Offset X when using VisuMZ_3_WeaknessDisplay.
 *     - Negative: left. Positive: right.
 *   
 *   Offset Y:
 *   - Offset the tooltip Y position from target's base?
 *   - Negative: up. Positive: down.
 * 
 *     Actor Frontview Y:
 *     - Additional Offset Y when selecting actors in frontview.
 *     - Negative: up. Positive: down.
 *   
 *     Weakness Display Y:
 *     - Additional Offset Y when using VisuMZ_3_WeaknessDisplay.
 *     - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * Vocabulary settings for the State Tooltips Window.
 *
 * ---
 *
 * General
 * 
 *   Default Description:
 *   - This is the default description that appears for a state without a
 *     declared description. %1 - State's Name
 *   - Can use text codes.
 *
 * ---
 *
 * Entries
 * 
 *   Enemy Aspect Format:
 *   -  Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Description, %4 - Aspect Color
 * 
 *   State Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Description, %4 - Duration, %5 - State Color
 * 
 *   Buff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Buff Color
 * 
 *   Debuff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * 
 *   Replace Whites?:
 *   - If state, buff, debuff names are white, replace them?
 * 
 *     Replacement Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 *
 * ---
 *
 * Turns Remaining
 * 
 *   Action End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Turn End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Passive Text:
 *   - Can use text codes.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Choose which windows to enable tooltip support for.
 *
 * ---
 *
 * Settings
 * 
 *   Window_BattleStatus:
 *   Window_ClassStatus:
 *   Window_EquipStatus:
 *   Window_MenuActor:
 *   Window_MenuStatus:
 *   Window_PartyStatus:
 *   Window_SkillStatus:
 *   Window_Status:
 *   - Enable State Tooltips for this window?
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
 * Version 1.08: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Keyboard-Select Show added by Arisu.
 * *** This allows showing enemy tooltips when selecting targets during battle
 *     while using the keyboard. Tooltip will appear after a brief pause while
 *     selecting the enemy.
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Tooltip Settings > Appearance > Centered?
 * **** Center the state tooltip when shown through hovering?
 * *** Parameters > Tooltip Settings > Keyboard-Select Show
 * **** See help file for more information.
 * *** Parameters > Vocabulary > Entries > Enemy Aspect Format
 * **** Used to support the Battle Core's new Enemy Aspect feature.
 * 
 * Version 1.07: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where state tooltips showed through skill and item windows
 *    with the VisuMZ_3_FrontviewBattleUI layout. Fix made by Olivia.
 * 
 * Version 1.06: September 14, 2023
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_FrontviewBattleUI!
 * 
 * Version 1.05: February 24, 2022
 * * Feature Update!
 * ** When the Choice List Window is hovered over, the State Tooltip window
 *    will hide itself. Update made by Irina.
 * 
 * Version 1.04: October 21, 2021
 * * Documentation Update!
 * ** Added a section for VisuMZ_1_ElementStatusCore in the "VisuStella MZ
 *    Compatibility" section since we received a very good question on it.
 * *** The updated Status Menu currently does not contain tooltip support for
 *     the "General" pages that may display the actor's states. This is due to
 *     the customization aspect for the various Status Menu pages. There will
 *     be a future update where we will adapt this feature.
 * 
 * Version 1.03: October 7, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.02: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina.
 * *** <Exclude From Tooltips>
 * **** Excludes the state from being displayed in the state tooltips.
 * 
 * Version 1.01: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_DragonbonesUnion plugin.
 * 
 * Version 1.00 Official Release Date: February 24, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StateTooltips
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Tooltip:struct
 * @text Tooltip Settings
 * @type struct<Tooltip>
 * @desc General settings for the State Tooltips Window.
 * @default {"Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0","KeySelectShow":"","SelectShowEnabled:eval":"true","SelectShowCenter:eval":"true","SelectShowDelay:num":"1500","SelectShowOffsetX:num":"+0","SelectShowActorFrontviewOffsetX:num":"+0","SelectShowWeaknessDisplayOffsetX:num":"+0","SelectShowOffsetY:num":"+0","SelectShowActorFrontviewOffsetY:num":"-4","SelectShowWeaknessDisplayOffsetY:num":"+20"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc Vocabulary settings for the State Tooltips Window.
 * @default {"General":"","HelpDescription:json":"\"-\"","Entries":"","StateFmt:str":"\\C[%5]%1%2:\\C[0] %3 %4","BuffFmt:str":"\\C[%5]%1%2▲:\\C[0] Increases unit's %2 to \\C[%5]%3%\\C[0] %4","DebuffFmt:str":"\\C[%5]%1%2▼:\\C[0] Decreases unit's %2 to \\C[%5]%3%\\C[0] %4","ReplaceWhite:eval":"true","WhiteReplaceColor:str":"5","Turns":"","ActionsFmt:str":"\\C[6](Actions \\C[%2]%1\\C[6])\\C[0]","TurnsFmt:str":"\\C[5](Turns \\C[%2]%1\\C[5])\\C[0]","PassiveText:str":"\\C[4](Passive)\\C[0]"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Choose which windows to enable tooltip support for.
 * @default {"Window_BattleStatus:eval":"true","Window_ClassStatus:eval":"true","Window_EquipStatus:eval":"true","Window_MenuActor:eval":"true","Window_MenuStatus:eval":"true","Window_PartyStatus:eval":"true","Window_SkillStatus:eval":"true","Window_Status:eval":"true"}
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
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
 *
 * @param Appearance
 *
 * @param Scale:num
 * @text Scale
 * @parent Appearance
 * @desc What scale size do you want for the tooltip?
 * Use 1.0 for normal size.
 * @default 0.6
 *
 * @param BaseShowCenter:eval
 * @text Centered?
 * @parent Appearance
 * @type boolean
 * @on Centered
 * @off Upper Left
 * @desc Center the state tooltip when shown through hovering?
 * @default false
 *
 * @param WindowSkin:str
 * @text Skin Filename
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @desc What window skin do you want to use for the tooltip?
 * @default Window
 *
 * @param WindowOpacity:num
 * @text Skin Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What opacity setting is used for the tooltip?
 * Use a number between 0 and 255.
 * @default 240
 *
 * @param Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offset the tooltip X position from the mouse?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offset the tooltip Y position from the mouse?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param KeySelectShow
 * @text Keyboard-Select Show
 *
 * @param SelectShowEnabled:eval
 * @text Enabled?
 * @parent KeySelectShow
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Show state tooltips when selecting targets using keyboard?
 * @default true
 *
 * @param SelectShowCenter:eval
 * @text Centered?
 * @parent KeySelectShow
 * @type boolean
 * @on Centered
 * @off Upper Left
 * @desc Center the state tooltip when shown through keyboard?
 * @default true
 *
 * @param SelectShowDelay:num
 * @text Hover Delay (MS)
 * @parent KeySelectShow
 * @type number
 * @min 1
 * @desc How many milliseconds (ms) to delay the tooltip from
 * showing as to not clutter up target selection screen.
 * @default 1500
 *
 * @param SelectShowOffsetX:num
 * @text Offset X
 * @parent KeySelectShow
 * @desc Offset the tooltip X position from target's base?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SelectShowActorFrontviewOffsetX:num
 * @text Actor Frontview X
 * @parent SelectShowOffsetX:num
 * @desc Additional Offset X when selecting actors in frontview.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SelectShowWeaknessDisplayOffsetX:num
 * @text Weakness Display X
 * @parent SelectShowOffsetX:num
 * @desc Additional Offset X when using VisuMZ_3_WeaknessDisplay.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SelectShowOffsetY:num
 * @text Offset Y
 * @parent KeySelectShow
 * @desc Offset the tooltip Y position from target's base?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param SelectShowActorFrontviewOffsetY:num
 * @text Actor Frontview Y
 * @parent SelectShowOffsetY:num
 * @desc Additional Offset Y when selecting actors in frontview.
 * Negative: up. Positive: down.
 * @default -4
 *
 * @param SelectShowWeaknessDisplayOffsetY:num
 * @text Weakness Display Y
 * @parent SelectShowOffsetY:num
 * @desc Additional Offset Y when using VisuMZ_3_WeaknessDisplay.
 * Negative: up. Positive: down.
 * @default +20
 *
 */
/* ----------------------------------------------------------------------------
 * Vocab Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param HelpDescription:json
 * @text Default Description
 * @parent General
 * @type note
 * @desc This is the default description that appears for a state
 * without a declared description. %1 - State's Name
 * @default "-"
 * 
 * @param Entries
 *
 * @param EnemyAspectFmt:str
 * @text Enemy Aspect Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Description, %4 - Aspect Color
 * @default \C[%4]%1%2:\C[0] %3
 *
 * @param StateFmt:str
 * @text State Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Description, %4 - Duration, %5 - State Color
 * @default \C[%5]%1%2:\C[0] %3 %4
 *
 * @param BuffFmt:str
 * @text Buff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Buff Color
 * @default \C[%5]%1%2▲:\C[0] Increases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param DebuffFmt:str
 * @text Debuff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * @default \C[%5]%1%2▼:\C[0] Decreases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param ReplaceWhite:eval
 * @text Replace Whites?
 * @parent Entries
 * @type boolean
 * @on Replace
 * @off Don't Replace
 * @desc If state, buff, debuff names are white, replace them?
 * @default true
 *
 * @param WhiteReplaceColor:str
 * @text Replacement Color
 * @parent ReplaceWhite:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 5
 * 
 * @param Turns
 * @text Turns Remaining
 *
 * @param ActionsFmt:str
 * @text Action End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[6](Actions \C[%2]%1\C[6])\C[0]
 *
 * @param TurnsFmt:str
 * @text Turn End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[5](Turns \C[%2]%1\C[5])\C[0]
 *
 * @param PassiveText:str
 * @text Passive Text
 * @parent Turns
 * @desc Can use text codes.
 * @default \C[4](Passive)\C[0]
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_BattleStatus:eval
 * @text Window_BattleStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_ClassStatus:eval
 * @text Window_ClassStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_EquipStatus:eval
 * @text Window_EquipStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuActor:eval
 * @text Window_MenuActor
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuStatus:eval
 * @text Window_MenuStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_PartyStatus:eval
 * @text Window_PartyStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_SkillStatus:eval
 * @text Window_SkillStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_Status:eval
 * @text Window_Status
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 */
//=============================================================================

const _0x3f8093 = _0x1895; (function (_0x193a9c, _0x4d98b9) { const _0x2c0f54 = _0x1895, _0x3ef019 = _0x193a9c(); while (!![]) { try { const _0x364631 = parseInt(_0x2c0f54(0x166)) / 0x1 + parseInt(_0x2c0f54(0x1cc)) / 0x2 * (parseInt(_0x2c0f54(0x103)) / 0x3) + -parseInt(_0x2c0f54(0x1c6)) / 0x4 * (-parseInt(_0x2c0f54(0x159)) / 0x5) + parseInt(_0x2c0f54(0x157)) / 0x6 + parseInt(_0x2c0f54(0x17a)) / 0x7 * (-parseInt(_0x2c0f54(0x1bf)) / 0x8) + -parseInt(_0x2c0f54(0x12d)) / 0x9 + -parseInt(_0x2c0f54(0x14b)) / 0xa; if (_0x364631 === _0x4d98b9) break; else _0x3ef019['push'](_0x3ef019['shift']()); } catch (_0x1711b7) { _0x3ef019['push'](_0x3ef019['shift']()); } } }(_0x4474, 0x5ac63)); var label = _0x3f8093(0x16f), tier = tier || 0x0, dependencies = [_0x3f8093(0x121)], pluginData = $plugins[_0x3f8093(0x147)](function (_0x5b38d5) { const _0xfd8503 = _0x3f8093; return _0x5b38d5['status'] && _0x5b38d5['description'][_0xfd8503(0xff)]('[' + label + ']'); })[0x0]; VisuMZ[label][_0x3f8093(0x15a)] = VisuMZ[label]['Settings'] || {}, VisuMZ[_0x3f8093(0x19c)] = function (_0x1f05f2, _0x2e1d3d) { const _0xdf3494 = _0x3f8093; for (const _0x17f15f in _0x2e1d3d) { if (_0x17f15f[_0xdf3494(0x16a)](/(.*):(.*)/i)) { const _0xd3b57e = String(RegExp['$1']), _0x4606c1 = String(RegExp['$2'])['toUpperCase']()[_0xdf3494(0x1d8)](); let _0x109d74, _0x27f0ce, _0x3af0b6; switch (_0x4606c1) { case _0xdf3494(0x1c5): _0x109d74 = _0x2e1d3d[_0x17f15f] !== '' ? Number(_0x2e1d3d[_0x17f15f]) : 0x0; break; case _0xdf3494(0x178): _0x27f0ce = _0x2e1d3d[_0x17f15f] !== '' ? JSON[_0xdf3494(0x191)](_0x2e1d3d[_0x17f15f]) : [], _0x109d74 = _0x27f0ce[_0xdf3494(0x1d6)](_0x26f784 => Number(_0x26f784)); break; case _0xdf3494(0x1a5): _0x109d74 = _0x2e1d3d[_0x17f15f] !== '' ? eval(_0x2e1d3d[_0x17f15f]) : null; break; case _0xdf3494(0xfa): _0x27f0ce = _0x2e1d3d[_0x17f15f] !== '' ? JSON[_0xdf3494(0x191)](_0x2e1d3d[_0x17f15f]) : [], _0x109d74 = _0x27f0ce['map'](_0x401b72 => eval(_0x401b72)); break; case _0xdf3494(0x105): _0x109d74 = _0x2e1d3d[_0x17f15f] !== '' ? JSON[_0xdf3494(0x191)](_0x2e1d3d[_0x17f15f]) : ''; break; case _0xdf3494(0x139): _0x27f0ce = _0x2e1d3d[_0x17f15f] !== '' ? JSON[_0xdf3494(0x191)](_0x2e1d3d[_0x17f15f]) : [], _0x109d74 = _0x27f0ce[_0xdf3494(0x1d6)](_0x29e4f3 => JSON[_0xdf3494(0x191)](_0x29e4f3)); break; case _0xdf3494(0x1f9): _0x109d74 = _0x2e1d3d[_0x17f15f] !== '' ? new Function(JSON[_0xdf3494(0x191)](_0x2e1d3d[_0x17f15f])) : new Function('return\x200'); break; case _0xdf3494(0x148): _0x27f0ce = _0x2e1d3d[_0x17f15f] !== '' ? JSON['parse'](_0x2e1d3d[_0x17f15f]) : [], _0x109d74 = _0x27f0ce[_0xdf3494(0x1d6)](_0x1c6143 => new Function(JSON[_0xdf3494(0x191)](_0x1c6143))); break; case _0xdf3494(0x170): _0x109d74 = _0x2e1d3d[_0x17f15f] !== '' ? String(_0x2e1d3d[_0x17f15f]) : ''; break; case 'ARRAYSTR': _0x27f0ce = _0x2e1d3d[_0x17f15f] !== '' ? JSON[_0xdf3494(0x191)](_0x2e1d3d[_0x17f15f]) : [], _0x109d74 = _0x27f0ce[_0xdf3494(0x1d6)](_0x46dc92 => String(_0x46dc92)); break; case _0xdf3494(0x1b7): _0x3af0b6 = _0x2e1d3d[_0x17f15f] !== '' ? JSON['parse'](_0x2e1d3d[_0x17f15f]) : {}, _0x109d74 = VisuMZ[_0xdf3494(0x19c)]({}, _0x3af0b6); break; case 'ARRAYSTRUCT': _0x27f0ce = _0x2e1d3d[_0x17f15f] !== '' ? JSON['parse'](_0x2e1d3d[_0x17f15f]) : [], _0x109d74 = _0x27f0ce[_0xdf3494(0x1d6)](_0x5a3a27 => VisuMZ[_0xdf3494(0x19c)]({}, JSON['parse'](_0x5a3a27))); break; default: continue; }_0x1f05f2[_0xd3b57e] = _0x109d74; } } return _0x1f05f2; }, (_0x4d8e45 => { const _0x462b05 = _0x3f8093, _0x561ff0 = _0x4d8e45[_0x462b05(0x146)]; for (const _0x2d2136 of dependencies) { if (!Imported[_0x2d2136]) { alert(_0x462b05(0x198)['format'](_0x561ff0, _0x2d2136)), SceneManager[_0x462b05(0x1de)](); break; } } const _0x1b8596 = _0x4d8e45[_0x462b05(0x168)]; if (_0x1b8596[_0x462b05(0x16a)](/\[Version[ ](.*?)\]/i)) { const _0x195b96 = Number(RegExp['$1']); _0x195b96 !== VisuMZ[label][_0x462b05(0x177)] && (alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x462b05(0x175)](_0x561ff0, _0x195b96)), SceneManager[_0x462b05(0x1de)]()); } if (_0x1b8596['match'](/\[Tier[ ](\d+)\]/i)) { const _0x22c553 = Number(RegExp['$1']); _0x22c553 < tier ? (alert(_0x462b05(0x1ba)[_0x462b05(0x175)](_0x561ff0, _0x22c553, tier)), SceneManager[_0x462b05(0x1de)]()) : tier = Math[_0x462b05(0x138)](_0x22c553, tier); } VisuMZ[_0x462b05(0x19c)](VisuMZ[label][_0x462b05(0x15a)], _0x4d8e45[_0x462b05(0x12c)]); })(pluginData), VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x160)] = { 'HelpDescription': /<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i, 'Exclude': /<EXCLUDE FROM (?:TOOLTIP|TOOLTIPS)>/i }, VisuMZ['StateTooltips']['Scene_Boot_onDatabaseLoaded'] = Scene_Boot[_0x3f8093(0x1c8)][_0x3f8093(0x1e9)], Scene_Boot[_0x3f8093(0x1c8)]['onDatabaseLoaded'] = function () { const _0x17bf89 = _0x3f8093; VisuMZ[_0x17bf89(0x16f)][_0x17bf89(0x150)][_0x17bf89(0x1e0)](this), this[_0x17bf89(0x1d4)](); }, Scene_Boot[_0x3f8093(0x1c8)]['process_VisuMZ_StateTooltips'] = function () { const _0x3c0491 = _0x3f8093; this[_0x3c0491(0x1a2)](); }, Scene_Boot[_0x3f8093(0x1c8)][_0x3f8093(0x1a2)] = function () { const _0x21f454 = _0x3f8093; if (VisuMZ[_0x21f454(0x10f)]) return; for (const _0x1167fb of $dataStates) { if (!_0x1167fb) continue; VisuMZ[_0x21f454(0x16f)]['Parse_Notetags_Description'](_0x1167fb); } }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x1d3)] = VisuMZ[_0x3f8093(0x1d3)], VisuMZ[_0x3f8093(0x1d3)] = function (_0x2b77e4) { const _0x5818e5 = _0x3f8093; VisuMZ['StateTooltips']['ParseStateNotetags'][_0x5818e5(0x1e0)](this, _0x2b77e4), VisuMZ[_0x5818e5(0x16f)][_0x5818e5(0x17f)](_0x2b77e4); }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x17f)] = function (_0x42996c) { const _0x18e635 = _0x3f8093; _0x42996c[_0x18e635(0x168)] = VisuMZ[_0x18e635(0x16f)]['Settings'][_0x18e635(0x13d)][_0x18e635(0xfd)]; const _0x2a25d7 = VisuMZ[_0x18e635(0x16f)]['RegExp'], _0x577585 = _0x42996c[_0x18e635(0x1d7)]; _0x577585[_0x18e635(0x16a)](_0x2a25d7[_0x18e635(0xfd)]) && (_0x42996c[_0x18e635(0x168)] = String(RegExp['$1'])[_0x18e635(0x1d8)]()), _0x577585['match'](_0x2a25d7['Exclude']) && (_0x42996c['excludeListing'] = !![]); }, ColorManager[_0x3f8093(0x1fa)] = function (_0x3b5435) { const _0x5cb645 = _0x3f8093; return _0x3b5435 = String(_0x3b5435), _0x3b5435[_0x5cb645(0x16a)](/#(.*)/i) ? _0x5cb645(0x1ee)['format'](String(RegExp['$1'])) : this[_0x5cb645(0x18e)](Number(_0x3b5435)); }, SceneManager[_0x3f8093(0x158)] = function () { const _0xfa44a3 = _0x3f8093; return this['_scene'] && this[_0xfa44a3(0x1f1)][_0xfa44a3(0x122)] === Scene_Battle; }, SceneManager[_0x3f8093(0x1d2)] = function () { const _0xdf536f = _0x3f8093, _0x1fc90c = SceneManager[_0xdf536f(0x1f1)][_0xdf536f(0x1e3)]; if (!_0x1fc90c) return null; return _0x1fc90c[_0xdf536f(0x137)]; }, SceneManager['setStateTooltipBattler'] = function (_0x4bd011) { const _0x31bb72 = _0x3f8093; if (_0x4bd011 && !_0x4bd011['isAppeared']()) return; if (_0x4bd011 && _0x4bd011['isDead']()) return; const _0x487fef = SceneManager['_scene'][_0x31bb72(0x1e3)]; if (!_0x487fef) return; _0x487fef['setBattler'](_0x4bd011); }, SceneManager[_0x3f8093(0x1d0)] = function (_0x19f87a) { const _0x588d42 = _0x3f8093; if (_0x19f87a && !_0x19f87a[_0x588d42(0x1c4)]()) return; const _0x352b69 = SceneManager[_0x588d42(0x1f1)]['_stateTooltipWindow']; if (!_0x352b69) return; if (_0x352b69[_0x588d42(0x137)] !== _0x19f87a) return; _0x352b69[_0x588d42(0x1d5)](); }, VisuMZ[_0x3f8093(0x16f)]['Game_Battler_refresh'] = Game_Battler[_0x3f8093(0x1c8)][_0x3f8093(0x173)], Game_Battler[_0x3f8093(0x1c8)][_0x3f8093(0x173)] = function () { const _0x2555f7 = _0x3f8093; VisuMZ[_0x2555f7(0x16f)][_0x2555f7(0x169)]['call'](this), SceneManager[_0x2555f7(0x1d0)](this); }, VisuMZ['StateTooltips'][_0x3f8093(0x120)] = Scene_Base[_0x3f8093(0x1c8)]['createWindowLayer'], Scene_Base[_0x3f8093(0x1c8)][_0x3f8093(0x13a)] = function () { const _0x53caf5 = _0x3f8093; VisuMZ['StateTooltips']['Scene_Base_createWindowLayer']['call'](this), this[_0x53caf5(0x142)](); }, Scene_Base[_0x3f8093(0x1c8)][_0x3f8093(0x142)] = function () { const _0x1c2597 = _0x3f8093; this[_0x1c2597(0x1e3)] = new Window_StateTooltip(), this[_0x1c2597(0x12f)](this[_0x1c2597(0x1e3)]); }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x149)] = Scene_Battle[_0x3f8093(0x1c8)][_0x3f8093(0x1f7)], Scene_Battle[_0x3f8093(0x1c8)][_0x3f8093(0x1f7)] = function () { const _0x15429f = _0x3f8093, _0x564521 = VisuMZ['StateTooltips'][_0x15429f(0x11a)](); VisuMZ[_0x15429f(0x16f)][_0x15429f(0x149)]['call'](this), !_0x564521 && VisuMZ['StateTooltips'][_0x15429f(0x11a)]() && SceneManager[_0x15429f(0x14d)](null); }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x152)] = Scene_Battle[_0x3f8093(0x1c8)]['commandItem'], Scene_Battle[_0x3f8093(0x1c8)][_0x3f8093(0x108)] = function () { const _0x397f73 = _0x3f8093, _0x4713e1 = VisuMZ[_0x397f73(0x16f)][_0x397f73(0x11a)](); VisuMZ['StateTooltips']['Scene_Battle_commandItem'][_0x397f73(0x1e0)](this), !_0x4713e1 && VisuMZ[_0x397f73(0x16f)][_0x397f73(0x11a)]() && SceneManager['setStateTooltipBattler'](null); }, VisuMZ[_0x3f8093(0x16f)]['Sprite_Clickable_onMouseEnter'] = Sprite_Clickable['prototype']['onMouseEnter'], Sprite_Clickable[_0x3f8093(0x1c8)]['onMouseEnter'] = function () { const _0x11904d = _0x3f8093; VisuMZ[_0x11904d(0x16f)][_0x11904d(0x179)][_0x11904d(0x1e0)](this), this[_0x11904d(0x1c0)](); }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x1cd)] = Sprite_Clickable[_0x3f8093(0x1c8)][_0x3f8093(0x144)], Sprite_Clickable[_0x3f8093(0x1c8)]['onMouseExit'] = function () { const _0x477d45 = _0x3f8093; VisuMZ[_0x477d45(0x16f)][_0x477d45(0x1cd)][_0x477d45(0x1e0)](this), this['onMouseExitStateTooltips'](); }, Sprite_Clickable[_0x3f8093(0x1c8)][_0x3f8093(0x1c0)] = function () { this['setStateTooltipBattler'](); }, Sprite_Clickable[_0x3f8093(0x1c8)][_0x3f8093(0xfc)] = function () { const _0x3a6e93 = _0x3f8093, _0x3df39a = this[_0x3a6e93(0x17e)](); _0x3df39a && SceneManager[_0x3a6e93(0x1d2)]() === _0x3df39a && SceneManager[_0x3a6e93(0x14d)](null); }, Sprite_Clickable[_0x3f8093(0x1c8)][_0x3f8093(0x14d)] = function () { const _0x1db6c5 = _0x3f8093, _0x819e51 = this[_0x1db6c5(0x17e)](); _0x819e51 && SceneManager[_0x1db6c5(0x14d)](_0x819e51); }, Sprite_Clickable[_0x3f8093(0x1c8)][_0x3f8093(0x17e)] = function () { return null; }, VisuMZ['StateTooltips'][_0x3f8093(0x19a)] = Sprite_Battler[_0x3f8093(0x1c8)][_0x3f8093(0x110)], Sprite_Battler[_0x3f8093(0x1c8)]['onMouseEnter'] = function () { const _0x2e1272 = _0x3f8093; VisuMZ['StateTooltips'][_0x2e1272(0x19a)][_0x2e1272(0x1e0)](this); if (this['isBattlerCoveredByWindow']()) return; this[_0x2e1272(0x14d)](); }, Sprite_Battler[_0x3f8093(0x1c8)]['isBattlerCoveredByWindow'] = function () { const _0x32eaaf = _0x3f8093, _0x2adc4b = SceneManager['_scene']; if (_0x2adc4b && _0x2adc4b['_inBattleStatusMode']) return !![]; const _0x23a694 = this[_0x32eaaf(0x137)][_0x32eaaf(0x10a)](); if (_0x23a694) { if (VisuMZ[_0x32eaaf(0x16f)][_0x32eaaf(0x11a)]()) return !![]; } return ![]; }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x11a)] = function () { const _0x3c394b = _0x3f8093, _0x3a8c22 = SceneManager['_scene']; if (Imported[_0x3c394b(0x10d)] && BattleManager[_0x3c394b(0x1ae)]()) { if (_0x3a8c22[_0x3c394b(0x1f3)][_0x3c394b(0x116)]() && _0x3a8c22[_0x3c394b(0x1f3)][_0x3c394b(0x1e8)]) return !![]; if (_0x3a8c22[_0x3c394b(0x155)][_0x3c394b(0x116)]() && _0x3a8c22['_skillWindow'][_0x3c394b(0x1e8)]) return !![]; } return ![]; }, Sprite_Battler['prototype'][_0x3f8093(0x17e)] = function () { const _0x3898dc = _0x3f8093; return this[_0x3898dc(0x137)]; }, Window_Base[_0x3f8093(0x1c8)][_0x3f8093(0x1a4)] = function () { const _0x2184ef = _0x3f8093, _0x5865b9 = new Point(TouchInput['x'], TouchInput['y']), _0x5a0107 = this['worldTransform'][_0x2184ef(0x145)](_0x5865b9); return this[_0x2184ef(0x107)]()[_0x2184ef(0x16c)](_0x5a0107['x'], _0x5a0107['y']); }, Window_Base[_0x3f8093(0x1c8)][_0x3f8093(0x107)] = function () { const _0x1c00eb = _0x3f8093; return new Rectangle(0x0, 0x0, this[_0x1c00eb(0x13e)], this[_0x1c00eb(0x118)]); }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15b)] = Window_Selectable[_0x3f8093(0x1c8)][_0x3f8093(0x1e7)], Window_Selectable[_0x3f8093(0x1c8)][_0x3f8093(0x1e7)] = function () { const _0x162bee = _0x3f8093; VisuMZ[_0x162bee(0x16f)][_0x162bee(0x15b)][_0x162bee(0x1e0)](this); if (this[_0x162bee(0x122)][_0x162bee(0x146)][_0x162bee(0x16a)](/Debug/i)) return; this[_0x162bee(0x1dc)](); }, Window_Selectable['prototype'][_0x3f8093(0x1dc)] = function () { const _0x3fb3fc = _0x3f8093; if (!this[_0x3fb3fc(0x180)]()) return; if (SceneManager[_0x3fb3fc(0x1f1)][_0x3fb3fc(0x1e3)][_0x3fb3fc(0x134)]) return; this[_0x3fb3fc(0x17d)] = this[_0x3fb3fc(0x17d)] || {}; if (!this[_0x3fb3fc(0x116)]()) { this[_0x3fb3fc(0x17d)][_0x3fb3fc(0x104)] && this[_0x3fb3fc(0x123)](); return; } else this[_0x3fb3fc(0x17d)][_0x3fb3fc(0x104)] = !![]; if (!this[_0x3fb3fc(0x1e8)]) { this['_cache_StateTooltips'][_0x3fb3fc(0x1e8)] && this[_0x3fb3fc(0x123)](); return; } else this[_0x3fb3fc(0x17d)][_0x3fb3fc(0x1e8)] = !![]; (this[_0x3fb3fc(0x17d)]['x'] !== this['x'] || this[_0x3fb3fc(0x17d)]['y'] !== this['y'] || this[_0x3fb3fc(0x17d)]['touchX'] !== TouchInput['x'] || this['_cache_StateTooltips']['touchX'] !== TouchInput['y']) && (this[_0x3fb3fc(0x17d)]['x'] = this['x'], this[_0x3fb3fc(0x17d)]['y'] = this['y'], this[_0x3fb3fc(0x17d)][_0x3fb3fc(0x1cf)] = TouchInput['x'], this[_0x3fb3fc(0x17d)]['touchY'] = TouchInput['y'], this['isStateTooltipTouched']() ? (this[_0x3fb3fc(0x17d)][_0x3fb3fc(0x194)] = !![], this[_0x3fb3fc(0x1b2)]()) : this[_0x3fb3fc(0x17d)][_0x3fb3fc(0x194)] && this[_0x3fb3fc(0x123)]()); }, Window_Selectable[_0x3f8093(0x1c8)][_0x3f8093(0x180)] = function () { const _0x579518 = _0x3f8093; return VisuMZ[_0x579518(0x16f)][_0x579518(0x15a)]['Window'][this[_0x579518(0x122)][_0x579518(0x146)]]; }, Window_Selectable['prototype'][_0x3f8093(0x188)] = function () { return this['hitIndex']() >= 0x0; }, Window_Selectable[_0x3f8093(0x1c8)][_0x3f8093(0x1b9)] = function () { const _0x4aa5be = _0x3f8093, _0x57734f = new Point(TouchInput['x'], TouchInput['y']), _0x3144a4 = this[_0x4aa5be(0x128)][_0x4aa5be(0x145)](_0x57734f), _0x32be81 = new Rectangle(0x0, 0x0, this[_0x4aa5be(0x13e)], this['height']); return _0x32be81[_0x4aa5be(0x16c)](_0x3144a4['x'], _0x3144a4['y']); }, Window_Selectable[_0x3f8093(0x1c8)]['openTouchStateTooltips'] = function () { const _0x1dce6a = _0x3f8093, _0x3f37cb = this[_0x1dce6a(0x17e)](); _0x3f37cb ? (this[_0x1dce6a(0x17d)]['battler'] = _0x3f37cb, SceneManager[_0x1dce6a(0x14d)](_0x3f37cb)) : this['closeTouchStateTooltips'](); }, Window_Selectable['prototype']['getStateTooltipBattler'] = function () { return null; }, Window_Selectable[_0x3f8093(0x1c8)][_0x3f8093(0x123)] = function () { const _0x20be92 = _0x3f8093; this[_0x20be92(0x17d)]['open'] = ![], this[_0x20be92(0x17d)]['visible'] = ![], this[_0x20be92(0x17d)][_0x20be92(0x194)] = ![], this['_cache_StateTooltips'][_0x20be92(0x1b5)] && (SceneManager['setStateTooltipBattler'](null), this['_cache_StateTooltips'][_0x20be92(0x1b5)] = null); }, Window_MenuStatus[_0x3f8093(0x1c8)][_0x3f8093(0x17e)] = function () { const _0xeadc44 = _0x3f8093, _0x3c7aab = this[_0xeadc44(0xf9)](), _0x1c4b12 = this[_0xeadc44(0x190)](_0x3c7aab); return _0x1c4b12; }, Window_SkillStatus[_0x3f8093(0x1c8)]['isStateTooltipTouched'] = function () { return this['isStateTooltipHovered'](); }, Window_SkillStatus[_0x3f8093(0x1c8)][_0x3f8093(0x17e)] = function () { const _0x584ed3 = _0x3f8093; return this[_0x584ed3(0x1b0)]; }, Window_EquipStatus['prototype']['isStateTooltipTouched'] = function () { const _0x127b03 = _0x3f8093; return this[_0x127b03(0x1b9)](); }, Window_EquipStatus[_0x3f8093(0x1c8)][_0x3f8093(0x17e)] = function () { const _0x512128 = _0x3f8093; return this[_0x512128(0x1b0)]; }, Window_Status[_0x3f8093(0x1c8)][_0x3f8093(0x188)] = function () { return this['isStateTooltipHovered'](); }, Window_Status['prototype'][_0x3f8093(0x17e)] = function () { const _0x1e85a6 = _0x3f8093; return this[_0x1e85a6(0x1b0)]; }, Window_BattleStatus[_0x3f8093(0x1c8)][_0x3f8093(0x17e)] = function () { const _0x9bb9ae = _0x3f8093, _0x4918f7 = this[_0x9bb9ae(0xf9)](), _0x52fe44 = this[_0x9bb9ae(0x190)](_0x4918f7); return _0x52fe44; }, Window_BattleStatus[_0x3f8093(0x1c8)][_0x3f8093(0x180)] = function () { const _0x3e0bdb = _0x3f8093; if (Imported[_0x3e0bdb(0x10d)] && BattleManager[_0x3e0bdb(0x1ae)]()) { if (VisuMZ[_0x3e0bdb(0x16b)]['version'] < 1.09) { let _0x364b16 = ''; _0x364b16 += _0x3e0bdb(0x106), _0x364b16 += 'in\x20order\x20for\x20VisuMZ_3_StateTooltips\x20to\x20work.', alert(_0x364b16), SceneManager['exit'](); } return ![]; } return Window_StatusBase[_0x3e0bdb(0x1c8)][_0x3e0bdb(0x180)]['call'](this); }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x11c)] = Window_BattleActor[_0x3f8093(0x1c8)][_0x3f8093(0x1e2)], Window_BattleActor[_0x3f8093(0x1c8)][_0x3f8093(0x1e2)] = function (_0xe29f4b) { const _0xbd775f = _0x3f8093; VisuMZ[_0xbd775f(0x16f)][_0xbd775f(0x11c)][_0xbd775f(0x1e0)](this, _0xe29f4b); if (this[_0xbd775f(0x17c)]()) this['selectShowStateTooltips'](); }, Window_BattleActor[_0x3f8093(0x1c8)][_0x3f8093(0x17c)] = function () { const _0x18cc84 = _0x3f8093; if (!Window_StateTooltip[_0x18cc84(0x126)]) return ![]; if (!this[_0x18cc84(0x18b)]) return ![]; if (!this[_0x18cc84(0x1c9)]()) return ![]; return [_0x18cc84(0x18c), _0x18cc84(0x132), 'up', 'down', 'ok'][_0x18cc84(0x1aa)](_0x31ecca => Input[_0x18cc84(0x13b)] === _0x31ecca && Input['_pressedTime'] <= 0x2); }, Window_BattleActor['prototype']['selectShowStateTooltips'] = function () { const _0x4f4ef9 = _0x3f8093, _0xe8838d = this[_0x4f4ef9(0x1c9)](); SceneManager[_0x4f4ef9(0x14d)](null), SceneManager[_0x4f4ef9(0x174)](_0xe8838d); }, Window_BattleActor[_0x3f8093(0x1c8)][_0x3f8093(0x1c9)] = function () { const _0x2a7a75 = _0x3f8093; return this['actor'](this[_0x2a7a75(0x186)]()); }, VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x1e6)] = Window_BattleEnemy[_0x3f8093(0x1c8)]['select'], Window_BattleEnemy[_0x3f8093(0x1c8)]['select'] = function (_0x4ab494) { const _0x45b6d0 = _0x3f8093; VisuMZ[_0x45b6d0(0x16f)][_0x45b6d0(0x1e6)][_0x45b6d0(0x1e0)](this, _0x4ab494); if (this[_0x45b6d0(0x17c)]()) this[_0x45b6d0(0x100)](); }, Window_BattleEnemy['prototype'][_0x3f8093(0x17c)] = function () { const _0x361cd2 = _0x3f8093; if (!Window_StateTooltip[_0x361cd2(0x126)]) return ![]; if (!this[_0x361cd2(0x18b)]) return ![]; if (!this[_0x361cd2(0x1dd)]()) return ![]; return [_0x361cd2(0x18c), _0x361cd2(0x132), 'up', _0x361cd2(0x1d9), 'ok']['some'](_0x12e79e => Input[_0x361cd2(0x13b)] === _0x12e79e && Input[_0x361cd2(0x14a)] <= 0x2); }, Window_BattleEnemy[_0x3f8093(0x1c8)][_0x3f8093(0x100)] = function () { const _0x1e73ca = _0x3f8093, _0x4c93a6 = this[_0x1e73ca(0x1dd)](); SceneManager['setStateTooltipBattler'](null), SceneManager[_0x1e73ca(0x174)](_0x4c93a6); }, SceneManager['moveStateTooltipToBattler'] = function (_0x3598af) { const _0x2f8321 = _0x3f8093, _0x3a61ae = SceneManager[_0x2f8321(0x1f1)][_0x2f8321(0x1e3)]; if (!_0x3a61ae) return; _0x3a61ae[_0x2f8321(0x174)](_0x3598af); }; Imported[_0x3f8093(0x12b)] && (Window_ClassStatus[_0x3f8093(0x1c8)]['isStateTooltipTouched'] = function () { const _0x15efba = _0x3f8093; return this[_0x15efba(0x1b9)](); }, Window_ClassStatus[_0x3f8093(0x1c8)]['getStateTooltipBattler'] = function () { const _0x5871c1 = _0x3f8093; return this[_0x5871c1(0x1b0)]; });; function _0x1895(_0x54a74, _0x586c33) { const _0x447403 = _0x4474(); return _0x1895 = function (_0x1895a8, _0x5a62d3) { _0x1895a8 = _0x1895a8 - 0xf9; let _0x42cd7b = _0x447403[_0x1895a8]; return _0x42cd7b; }, _0x1895(_0x54a74, _0x586c33); } function _0x4474() { const _0x128b6d = ['setupEnemyAspectsText', 'StateTooltips', 'STR', 'SelectShowEnabled', 'passiveStates', 'refresh', 'moveStateTooltipToBattler', 'format', 'contents', 'version', 'ARRAYNUM', 'Sprite_Clickable_onMouseEnter', '7zUItkg', 'padding', 'canSelectShowStateTooltips', '_cache_StateTooltips', 'getStateTooltipBattler', 'Parse_Notetags_Description', 'isStateTooltipEnabled', 'EnemyAspectFmt', 'HEXCOLOR', 'paramBuffRate', 'hasAspectData', 'processShowSelectStateTooltipBattler', 'index', 'ASPECT_FMT', 'isStateTooltipTouched', 'initialize', 'convertMessageKeywords', 'active', 'left', 'WINDOW_CENTER', 'textColor', 'ffffff', 'actor', 'parse', 'updateDeath', 'scale', 'hitTest', 'isSideView', 'WINDOW_SCALE', 'resizeWindow', '%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.', '\x5cHEXCOLOR<#%1>', 'Sprite_Battler_onMouseEnter', 'SELECT_SHOW_OFFSET_Y_ACTOR_FRONTVIEW', 'ConvertParams', 'TurnsFmt', 'windowskin', 'Exclude', 'processEscapeCharacter', 'update', 'process_VisuMZ_StateTooltips_Notetags', 'Scale', 'isMouseHovered', 'EVAL', 'Tooltip', 'WINDOW_SKIN_OPACITY', 'setupTouchMoveClose', 'changeTextColor', 'some', 'isBuffAffected', 'drawing', 'round', 'isUsingFrontviewUiLayout', '_choiceListWindow', '_actor', 'SELECT_SHOW_OFFSET_X', 'openTouchStateTooltips', '_lastTouchInputY', 'OffsetY', 'battler', 'loadWindowskin', 'STRUCT', 'STATE_FMT', 'isStateTooltipHovered', '%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.', 'VisuMZ_3_WeaknessDisplay', 'setupStateText', 'boxHeight', 'SelectShowActorFrontviewOffsetX', '2604072cXAucs', 'onMouseEnterStateTooltips', 'WhiteReplaceColor', 'obtainEscapeString', 'SELECT_SHOW_CENTERED', 'isAppeared', 'NUM', '8mwoQvM', 'itemPadding', 'prototype', 'targetActor', 'length', 'PASSIVE_TEXT', '2WViosc', 'Sprite_Clickable_onMouseExit', 'ActionsFmt', 'touchX', 'refreshStateTooltipBattler', 'createContents', 'currentTooltipBattler', 'ParseStateNotetags', 'process_VisuMZ_StateTooltips', 'requestRefresh', 'map', 'note', 'trim', 'down', '_statusWindow', 'autoRemovalTiming', 'processTouchStateTooltips', 'enemy', 'exit', 'SELECT_SHOW_OFFSET_Y_WEAKNESS_DISPLAY', 'call', 'SELECT_SHOW_OFFSET_X_WEAKNESS_DISPLAY', 'select', '_stateTooltipWindow', 'replaceHexColors', 'isSupportMessageKeywords', 'Window_BattleEnemy_select', 'processTouch', 'visible', 'onDatabaseLoaded', 'NONWHITE_COLOR', 'SelectShowActorFrontviewOffsetY', 'SELECT_SHOW_OFFSET_Y', '_enemyWindow', '#%1', '_actorCommandWindow', 'SELECT_SHOW_OFFSET_X_ACTOR_FRONTVIEW', '_scene', '_requestRefresh', '_itemWindow', 'show', 'SelectShowOffsetX', 'setupBuffTurnText', 'commandSkill', 'states', 'FUNC', 'getColor', 'setupBuffText', 'BUFF_FMT', 'hitIndex', 'ARRAYEVAL', 'ACTIONS_FMT', 'onMouseExitStateTooltips', 'HelpDescription', 'getShowSelectStateTooltipBattler', 'includes', 'selectShowStateTooltips', 'BuffFmt', 'bind', '1350129atFjcv', 'open', 'JSON', 'VisuMZ_3_FrontviewBattleUI\x20needs\x20to\x20be\x20updated\x20', 'dimensionRect', 'commandItem', 'BaseShowCenter', 'isEnemy', 'setupStateTurnText', 'hide', 'VisuMZ_3_FrontviewBattleUI', 'replace', 'ParseAllNotetags', 'onMouseEnter', 'MOUSE_OFFSET_Y', 'excludeListing', 'updateTouchMoveClose', 'clamp', 'drawTextEx', 'isOpen', 'clear', 'height', 'DebuffFmt', 'IsBattlerCoveredByWindow', 'debuffColor', 'Window_BattleActor_select', 'DEBUFF_FMT', 'setupText', 'SelectShowWeaknessDisplayOffsetY', 'Scene_Base_createWindowLayer', 'VisuMZ_1_BattleCore', 'constructor', 'closeTouchStateTooltips', '_lastTouchInputX', 'SelectShowCenter', 'SELECT_SHOW_TOOLTIPS', 'buffColor', 'worldTransform', 'loadSystem', 'buffTurns', 'VisuMZ_2_ClassChangeSystem', 'parameters', '3551031JRcMUL', 'SelectShowWeaknessDisplayOffsetX', 'addChild', 'getAspectData', '_actorWindow', 'right', '\x5cI[%1]', '_touchMoveClose', 'SELECT_DELAY_BEFORE_SHOW', '_lastTouchMoveCloseY', '_battler', 'max', 'ARRAYJSON', 'createWindowLayer', '_latestButton', 'updatePosition', 'Vocab', 'width', 'textSizeEx', 'stateColor', 'SelectShowDelay', 'createStateTooltipWindow', 'push', 'onMouseExit', 'applyInverse', 'name', 'filter', 'ARRAYFUNC', 'Scene_Battle_commandSkill', '_pressedTime', '6543640KzenNE', 'ReplaceWhite', 'setStateTooltipBattler', '_lastTouchMoveCloseX', 'iconIndex', 'Scene_Boot_onDatabaseLoaded', 'floor', 'Scene_Battle_commandItem', 'resetFontSettings', 'isDead', '_skillWindow', 'setBattler', '1604502RmDHlD', 'isSceneBattle', '1497495OsvooR', 'Settings', 'Window_Selectable_processTouch', 'TURNS_FMT', '_text', 'WindowSkin', 'clampPosition', 'RegExp', 'WINDOW_SKIN_FILENAME', 'backOpacity', 'create', 'updateOpacity', '\x5cC[%4]%1%2:\x5cC[0]\x20%3', '429785bXlpeT', 'isBuffOrDebuffAffected', 'description', 'Game_Battler_refresh', 'match', 'FrontviewBattleUI', 'contains', 'targetOpacity']; _0x4474 = function () { return _0x128b6d; }; return _0x4474(); } Imported['VisuMZ_2_PartySystem'] && (Window_PartyStatus['prototype'][_0x3f8093(0x188)] = function () { return this['isStateTooltipHovered'](); }, Window_PartyStatus[_0x3f8093(0x1c8)][_0x3f8093(0x17e)] = function () { const _0x1d6458 = _0x3f8093; return this[_0x1d6458(0x1b0)]; });; function Window_StateTooltip() { const _0x7065b6 = _0x3f8093; this[_0x7065b6(0x189)](...arguments); } Window_StateTooltip['prototype'] = Object[_0x3f8093(0x163)](Window_Base[_0x3f8093(0x1c8)]), Window_StateTooltip[_0x3f8093(0x1c8)]['constructor'] = Window_StateTooltip, Window_StateTooltip[_0x3f8093(0x196)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)][_0x3f8093(0x1a6)][_0x3f8093(0x1a3)], Window_StateTooltip[_0x3f8093(0x18d)] = VisuMZ['StateTooltips']['Settings'][_0x3f8093(0x1a6)][_0x3f8093(0x109)] ?? ![], Window_StateTooltip[_0x3f8093(0x161)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)][_0x3f8093(0x1a6)][_0x3f8093(0x15e)], Window_StateTooltip[_0x3f8093(0x1a7)] = VisuMZ[_0x3f8093(0x16f)]['Settings'][_0x3f8093(0x1a6)]['WindowOpacity'], Window_StateTooltip[_0x3f8093(0x187)] = VisuMZ['StateTooltips'][_0x3f8093(0x15a)][_0x3f8093(0x13d)][_0x3f8093(0x181)] ?? _0x3f8093(0x165), Window_StateTooltip[_0x3f8093(0x1b8)] = VisuMZ['StateTooltips'][_0x3f8093(0x15a)][_0x3f8093(0x13d)]['StateFmt'], Window_StateTooltip[_0x3f8093(0x1fc)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)][_0x3f8093(0x13d)][_0x3f8093(0x101)], Window_StateTooltip[_0x3f8093(0x11d)] = VisuMZ['StateTooltips']['Settings']['Vocab'][_0x3f8093(0x119)], Window_StateTooltip[_0x3f8093(0xfb)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)]['Vocab'][_0x3f8093(0x1ce)], Window_StateTooltip[_0x3f8093(0x15c)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)]['Vocab'][_0x3f8093(0x19d)], Window_StateTooltip[_0x3f8093(0x1cb)] = VisuMZ[_0x3f8093(0x16f)]['Settings'][_0x3f8093(0x13d)]['PassiveText'], Window_StateTooltip['REPLACE_WHITE'] = VisuMZ['StateTooltips']['Settings'][_0x3f8093(0x13d)][_0x3f8093(0x14c)], Window_StateTooltip[_0x3f8093(0x1ea)] = VisuMZ[_0x3f8093(0x16f)]['Settings'][_0x3f8093(0x13d)][_0x3f8093(0x1c1)], Window_StateTooltip['MOUSE_OFFSET_X'] = VisuMZ['StateTooltips']['Settings'][_0x3f8093(0x1a6)]['OffsetX'], Window_StateTooltip[_0x3f8093(0x111)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)][_0x3f8093(0x1a6)][_0x3f8093(0x1b4)], Window_StateTooltip[_0x3f8093(0x126)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)][_0x3f8093(0x1a6)][_0x3f8093(0x171)] ?? !![], Window_StateTooltip[_0x3f8093(0x1c3)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)]['Tooltip'][_0x3f8093(0x125)] ?? !![], Window_StateTooltip['SELECT_DELAY_BEFORE_SHOW'] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)][_0x3f8093(0x1a6)][_0x3f8093(0x141)] ?? 0x5dc, Window_StateTooltip[_0x3f8093(0x1b1)] = VisuMZ[_0x3f8093(0x16f)]['Settings']['Tooltip'][_0x3f8093(0x1f5)] ?? 0x0, Window_StateTooltip[_0x3f8093(0x1f0)] = VisuMZ['StateTooltips'][_0x3f8093(0x15a)]['Tooltip'][_0x3f8093(0x1be)] ?? -0x4, Window_StateTooltip[_0x3f8093(0x1e1)] = VisuMZ[_0x3f8093(0x16f)]['Settings'][_0x3f8093(0x1a6)][_0x3f8093(0x12e)] ?? 0x14, Window_StateTooltip[_0x3f8093(0x1ec)] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)]['Tooltip']['SelectShowOffsetY'] ?? 0x0, Window_StateTooltip[_0x3f8093(0x19b)] = VisuMZ[_0x3f8093(0x16f)]['Settings']['Tooltip'][_0x3f8093(0x1eb)] ?? -0x4, Window_StateTooltip['SELECT_SHOW_OFFSET_Y_WEAKNESS_DISPLAY'] = VisuMZ[_0x3f8093(0x16f)][_0x3f8093(0x15a)]['Tooltip'][_0x3f8093(0x11f)] ?? 0x14, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x189)] = function () { const _0x1440c6 = _0x3f8093, _0x44aea9 = new Rectangle(0x0, 0x0, Graphics[_0x1440c6(0x13e)], Graphics[_0x1440c6(0x118)]); Window_Base['prototype']['initialize'][_0x1440c6(0x1e0)](this, _0x44aea9), this[_0x1440c6(0x193)]['x'] = this[_0x1440c6(0x193)]['y'] = Window_StateTooltip[_0x1440c6(0x196)], this[_0x1440c6(0x10c)](), this[_0x1440c6(0x137)] = null; }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x1b6)] = function () { const _0x1e5905 = _0x3f8093; this[_0x1e5905(0x19e)] = ImageManager[_0x1e5905(0x129)](Window_StateTooltip[_0x1e5905(0x161)]); }, Window_StateTooltip[_0x3f8093(0x1c8)]['updateBackOpacity'] = function () { const _0x3b6ba4 = _0x3f8093; this[_0x3b6ba4(0x162)] = Window_StateTooltip[_0x3b6ba4(0x1a7)]; }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x156)] = function (_0x401ecc) { const _0x106509 = _0x3f8093; if (this[_0x106509(0x137)] === _0x401ecc) return; this[_0x106509(0x137)] = _0x401ecc, this[_0x106509(0x137)] ? this['refresh']() : this[_0x106509(0x10c)](); }, Window_StateTooltip['prototype'][_0x3f8093(0x173)] = function () { const _0x4c136d = _0x3f8093; this[_0x4c136d(0x176)][_0x4c136d(0x117)](), this[_0x4c136d(0x11e)](); if (this[_0x4c136d(0x15d)][_0x4c136d(0x1ca)] > 0x0) { this[_0x4c136d(0x197)](); const _0x3c8819 = this['baseTextRect'](); this[_0x4c136d(0x115)](this['_text'], _0x3c8819['x'], _0x3c8819['y'], _0x3c8819[_0x4c136d(0x13e)]), this[_0x4c136d(0x1f4)](); } else this[_0x4c136d(0x10c)](); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x18a)] = function (_0x534efe) { return _0x534efe; }, Window_StateTooltip['prototype'][_0x3f8093(0x1e5)] = function () { return ![]; }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x11e)] = function () { const _0x38f5de = _0x3f8093; this[_0x38f5de(0x15d)] = ''; if (!this['_battler']) return; this[_0x38f5de(0x16e)](), this[_0x38f5de(0x1bc)](), this[_0x38f5de(0x1fb)](), this[_0x38f5de(0x1e4)](), this[_0x38f5de(0x15d)] = this[_0x38f5de(0x15d)][_0x38f5de(0x1d8)](); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x16e)] = function () { const _0x14c68d = _0x3f8093; if (!this[_0x14c68d(0x137)][_0x14c68d(0x10a)]) return; if (!this[_0x14c68d(0x137)][_0x14c68d(0x10a)]()) return; if (!this[_0x14c68d(0x137)][_0x14c68d(0x184)]) return; if (!this[_0x14c68d(0x137)][_0x14c68d(0x184)]()) return; const _0x188559 = Window_StateTooltip[_0x14c68d(0x187)]; if (_0x188559[_0x14c68d(0x1ca)] <= 0x0) return; const _0x48aca6 = this['_battler'][_0x14c68d(0x130)]()[_0x14c68d(0x146)], _0x188963 = _0x14c68d(0x133)['format'](this[_0x14c68d(0x137)][_0x14c68d(0x130)]()[_0x14c68d(0x14f)]), _0x34fd70 = this[_0x14c68d(0x137)][_0x14c68d(0x130)]()['nameColor'], _0x3e55ec = this[_0x14c68d(0x137)][_0x14c68d(0x130)]()[_0x14c68d(0x168)], _0x3fe874 = _0x188559['format'](_0x188963, _0x48aca6, _0x3e55ec, _0x34fd70)[_0x14c68d(0x1d8)](); _0x3fe874 && (this[_0x14c68d(0x15d)] += _0x3fe874 + '\x0a'); }, Window_StateTooltip[_0x3f8093(0x1c8)]['setupStateText'] = function () { const _0x30178e = _0x3f8093, _0x58b9ad = Window_StateTooltip[_0x30178e(0x1b8)], _0xb76164 = this[_0x30178e(0x137)][_0x30178e(0x1f8)](); for (const _0x723180 of _0xb76164) { if (!_0x723180) continue; if (!_0x723180[_0x30178e(0x146)][_0x30178e(0x1d8)]()) continue; if (_0x723180[_0x30178e(0x146)][_0x30178e(0x16a)](/-----/i)) continue; if (_0x723180[_0x30178e(0x14f)] <= 0x0) continue; if (_0x723180[_0x30178e(0x112)]) continue; const _0x270e87 = VisuMZ[_0x30178e(0x16f)][_0x30178e(0x160)]; if (_0x723180[_0x30178e(0x1d7)][_0x30178e(0x16a)](_0x270e87[_0x30178e(0x19f)])) continue; const _0x1d6516 = _0x30178e(0x133)['format'](_0x723180['iconIndex']), _0xf3c391 = _0x723180[_0x30178e(0x146)][_0x30178e(0x1d8)](), _0x1a5e04 = _0x723180[_0x30178e(0x168)]['format'](this[_0x30178e(0x137)]['getStateDisplay'](_0x723180['id'])), _0x1cedde = this[_0x30178e(0x10b)](_0x723180), _0x289c00 = ColorManager[_0x30178e(0x140)](_0x723180), _0x1d719b = _0x58b9ad[_0x30178e(0x175)](_0x1d6516, _0xf3c391, _0x1a5e04, _0x1cedde, _0x289c00)[_0x30178e(0x1d8)](); _0x1d719b && (this[_0x30178e(0x15d)] += _0x1d719b + '\x0a'); } }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x10b)] = function (_0x3dda84) { const _0x1f63df = _0x3f8093; if (_0x3dda84[_0x1f63df(0x1db)] === 0x0) return ''; if (this[_0x1f63df(0x137)][_0x1f63df(0x172)]()['includes'](_0x3dda84)) return Window_StateTooltip[_0x1f63df(0x1cb)]; let _0x5c0faf = _0x3dda84[_0x1f63df(0x1db)] === 0x1 ? Window_StateTooltip[_0x1f63df(0xfb)] : Window_StateTooltip[_0x1f63df(0x15c)]; const _0x2ff924 = this['_battler']['stateTurns'](_0x3dda84['id']) || 0x0, _0x1c12f9 = ColorManager[_0x1f63df(0x140)](_0x3dda84); return _0x5c0faf[_0x1f63df(0x175)](_0x2ff924, _0x1c12f9)['trim'](); }, Window_StateTooltip[_0x3f8093(0x1c8)]['setupBuffText'] = function () { const _0x2c1a68 = _0x3f8093, _0xb08b7d = Window_StateTooltip[_0x2c1a68(0x1fc)], _0x365ddd = Window_StateTooltip[_0x2c1a68(0x11d)]; for (let _0x4dbb7f = 0x0; _0x4dbb7f < 0x8; _0x4dbb7f++) { if (!this[_0x2c1a68(0x137)][_0x2c1a68(0x167)](_0x4dbb7f)) continue; const _0x4d07f1 = this['_battler'][_0x2c1a68(0x1ab)](_0x4dbb7f), _0x28b67f = _0x4d07f1 ? _0xb08b7d : _0x365ddd, _0xe32e67 = this[_0x2c1a68(0x137)]['buffIconIndex'](this[_0x2c1a68(0x137)]['_buffs'][_0x4dbb7f], _0x4dbb7f), _0x430504 = '\x5cI[%1]'[_0x2c1a68(0x175)](_0xe32e67), _0x2dcd05 = TextManager['param'](_0x4dbb7f), _0x56f09b = Math[_0x2c1a68(0x151)](this[_0x2c1a68(0x137)][_0x2c1a68(0x183)](_0x4dbb7f) * 0x64), _0x5eb64b = this[_0x2c1a68(0x1f6)](_0x4dbb7f), _0x11bae5 = _0x4d07f1 ? ColorManager['buffColor']() : ColorManager[_0x2c1a68(0x11b)](), _0x165cd1 = _0x28b67f[_0x2c1a68(0x175)](_0x430504, _0x2dcd05, _0x56f09b, _0x5eb64b, _0x11bae5)[_0x2c1a68(0x1d8)](); _0x165cd1 && (this[_0x2c1a68(0x15d)] += _0x165cd1 + '\x0a'); } }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x1f6)] = function (_0x36ac70) { const _0x370b77 = _0x3f8093, _0x32249a = Window_StateTooltip[_0x370b77(0x15c)], _0x1596c0 = this['_battler'][_0x370b77(0x12a)](_0x36ac70), _0x3d29e3 = this['_battler']['isBuffAffected'](_0x36ac70), _0x2fe29a = _0x3d29e3 ? ColorManager[_0x370b77(0x127)]() : ColorManager['debuffColor'](); return _0x32249a['format'](_0x1596c0, _0x2fe29a)[_0x370b77(0x1d8)](); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x1e4)] = function () { const _0x2f2b22 = _0x3f8093, _0x5e882a = /\\C\[#(.*?)\]/g; this[_0x2f2b22(0x15d)] = this[_0x2f2b22(0x15d)][_0x2f2b22(0x10e)](_0x5e882a, (_0x255f3a, _0x3b6753) => { const _0x5a6dbe = _0x2f2b22; if (_0x3b6753 === _0x5a6dbe(0x18f)) { const _0x58e8d6 = ColorManager[_0x5a6dbe(0x1fa)](Window_StateTooltip['NONWHITE_COLOR']); _0x3b6753 = _0x58e8d6[_0x5a6dbe(0x10e)](/#/g, ''); } return _0x5a6dbe(0x199)[_0x5a6dbe(0x175)](_0x3b6753); }); }, Window_StateTooltip['prototype'][_0x3f8093(0x1a0)] = function (_0x7323a1, _0x25b028) { const _0x63be2a = _0x3f8093; switch (_0x7323a1) { case _0x63be2a(0x182): const _0x4bb8cc = this[_0x63be2a(0x1c2)](_0x25b028); !this['isColorLocked']() && _0x25b028[_0x63be2a(0x1ac)] && this[_0x63be2a(0x1a9)](_0x4bb8cc); break; default: Window_Base[_0x63be2a(0x1c8)][_0x63be2a(0x1a0)][_0x63be2a(0x1e0)](this, _0x7323a1, _0x25b028); } }, Window_StateTooltip['prototype'][_0x3f8093(0x197)] = function () { const _0x1b2955 = _0x3f8093, _0x4a4c9b = this[_0x1b2955(0x13f)](this[_0x1b2955(0x15d)]); this[_0x1b2955(0x13e)] = _0x4a4c9b[_0x1b2955(0x13e)] + (this[_0x1b2955(0x1c7)]() + this[_0x1b2955(0x17b)]) * 0x2, this['height'] = _0x4a4c9b[_0x1b2955(0x118)] + this['padding'] * 0x2, this[_0x1b2955(0x1d1)](), this[_0x1b2955(0x153)](); }, Window_StateTooltip['prototype'][_0x3f8093(0x1a1)] = function () { const _0x4ba94a = _0x3f8093; Window_Base['prototype'][_0x4ba94a(0x1a1)][_0x4ba94a(0x1e0)](this), this[_0x4ba94a(0x1f2)] && (this['_requestRefresh'] = ![], this[_0x4ba94a(0x173)]()), this['updateTouchMoveClose'](), this[_0x4ba94a(0x13c)](), this['updateDeath'](), this['updateOpacity'](); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x1d5)] = function () { const _0x500b47 = _0x3f8093; this[_0x500b47(0x1f2)] = !![]; }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x13c)] = function (_0x19d0ba) { const _0x28e3ed = _0x3f8093; if (!this[_0x28e3ed(0x1e8)]) return; if (this['_lastTouchInputX'] === TouchInput['x'] && this[_0x28e3ed(0x1b3)] === TouchInput['y']) return; this[_0x28e3ed(0x124)] = TouchInput['x'], this[_0x28e3ed(0x1b3)] = TouchInput['y']; if (!_0x19d0ba) this[_0x28e3ed(0x134)] = ![]; this['x'] = TouchInput['x'] + Window_StateTooltip['MOUSE_OFFSET_X'], this['y'] = TouchInput['y'] + Window_StateTooltip[_0x28e3ed(0x111)], !this[_0x28e3ed(0x134)] && Window_StateTooltip[_0x28e3ed(0x18d)] && (this['x'] -= Math[_0x28e3ed(0x151)](this[_0x28e3ed(0x13e)] * this['scale']['x'] / 0x2)), this[_0x28e3ed(0x15f)](); }, Window_StateTooltip[_0x3f8093(0x1c8)]['clampPosition'] = function () { const _0x49f0e5 = _0x3f8093, _0x54559d = this[_0x49f0e5(0x13e)] * (Window_StateTooltip[_0x49f0e5(0x196)] || 0.01), _0x3a3e6c = this['height'] * (Window_StateTooltip[_0x49f0e5(0x196)] || 0.01); this['x'] = Math[_0x49f0e5(0x1ad)](this['x'][_0x49f0e5(0x114)](0x0, Graphics['width'] - _0x54559d)), this['y'] = Math[_0x49f0e5(0x1ad)](this['y'][_0x49f0e5(0x114)](0x0, Graphics[_0x49f0e5(0x118)] - _0x3a3e6c)); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x192)] = function () { const _0x109cc5 = _0x3f8093; this['_battler'] && this[_0x109cc5(0x137)][_0x109cc5(0x154)]() && this[_0x109cc5(0x156)](null); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x164)] = function () { const _0x440baa = _0x3f8093, _0x4f2221 = this[_0x440baa(0x16d)](); this['opacity'] = this['contentsOpacity'] = _0x4f2221; }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x16d)] = function () { const _0x469648 = _0x3f8093; if (SceneManager[_0x469648(0x158)]()) { const _0x109443 = []; _0x109443['push'](SceneManager[_0x469648(0x1f1)][_0x469648(0x1ef)]), _0x109443[_0x469648(0x143)](SceneManager[_0x469648(0x1f1)][_0x469648(0x1f3)]), _0x109443['push'](SceneManager[_0x469648(0x1f1)][_0x469648(0x155)]), _0x109443[_0x469648(0x143)](SceneManager[_0x469648(0x1f1)][_0x469648(0x1af)]); for (const _0x10e283 of _0x109443) { if (_0x10e283 && _0x10e283['isOpen']() && _0x10e283['active'] && _0x10e283['isMouseHovered']()) return 0x0; } } return 0xff; }, Window_StateTooltip[_0x3f8093(0x1c8)]['moveStateTooltipToBattler'] = function (_0x3e4bcb) { const _0x3e1af4 = _0x3f8093, _0x8c0baf = Window_StateTooltip[_0x3e1af4(0x135)]; setTimeout(this[_0x3e1af4(0x185)][_0x3e1af4(0x102)](this, _0x3e4bcb, TouchInput['x'], TouchInput['y']), _0x8c0baf); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x185)] = function (_0x471ab8, _0xc4f4d8, _0x3eb2ca) { const _0x56280a = _0x3f8093; if (TouchInput['x'] !== _0xc4f4d8) return; if (TouchInput['y'] !== _0x3eb2ca) return; const _0x3e74e3 = this[_0x56280a(0xfe)](); if (_0x471ab8 !== _0x3e74e3) return; if (!_0x3e74e3['battler']()) return; this[_0x56280a(0x156)](_0x3e74e3); let _0x4539e6 = this[_0x56280a(0x137)]['battler']()['x'], _0x3e787e = this[_0x56280a(0x137)]['battler']()['y']; if (this[_0x56280a(0x137)]['isActor']() && !$gameSystem[_0x56280a(0x195)]()) { const _0x31312c = SceneManager[_0x56280a(0x1f1)][_0x56280a(0x1da)]; _0x3e787e = _0x31312c['y'], _0x4539e6 += _0x31312c['x'], _0x3e787e -= Math['floor'](this[_0x56280a(0x118)] * this['scale']['y']), _0x4539e6 += Window_StateTooltip[_0x56280a(0x1f0)], _0x3e787e += Window_StateTooltip[_0x56280a(0x19b)]; } _0x4539e6 += Math[_0x56280a(0x151)]((Graphics['width'] - Graphics['boxWidth']) / 0x2), _0x3e787e += Math['floor']((Graphics[_0x56280a(0x118)] - Graphics[_0x56280a(0x1bd)]) / 0x2), Window_StateTooltip[_0x56280a(0x1c3)] && (_0x4539e6 -= Math[_0x56280a(0x151)](this[_0x56280a(0x13e)] * this['scale']['x'] / 0x2)), _0x4539e6 += Window_StateTooltip[_0x56280a(0x1b1)], _0x3e787e += Window_StateTooltip[_0x56280a(0x1ec)], Imported[_0x56280a(0x1bb)] && this[_0x56280a(0x137)][_0x56280a(0x10a)]() && (_0x4539e6 += Window_StateTooltip[_0x56280a(0x1e1)], _0x3e787e += Window_StateTooltip[_0x56280a(0x1df)]), TouchInput['_x'] = _0x4539e6, TouchInput['_y'] = _0x3e787e, this[_0x56280a(0x124)] = undefined, this[_0x56280a(0x1b3)] = undefined, this[_0x56280a(0x1a8)](), this[_0x56280a(0x13c)](!![]); }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0xfe)] = function () { const _0x48cd9f = _0x3f8093; if (!SceneManager[_0x48cd9f(0x1f1)][_0x48cd9f(0x1ed)] && !SceneManager['_scene'][_0x48cd9f(0x131)]) return null; if (SceneManager['_scene'][_0x48cd9f(0x1ed)][_0x48cd9f(0x18b)]) { const _0x3fb5f1 = SceneManager[_0x48cd9f(0x1f1)][_0x48cd9f(0x1ed)]; return _0x3fb5f1['enemy'](); } else { if (SceneManager[_0x48cd9f(0x1f1)]['_actorWindow'][_0x48cd9f(0x18b)]) { const _0x4c60c8 = SceneManager[_0x48cd9f(0x1f1)]['_actorWindow']; return _0x4c60c8[_0x48cd9f(0x1c9)](); } } return null; }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x1a8)] = function () { const _0x193c1c = _0x3f8093; this[_0x193c1c(0x134)] = !![], this[_0x193c1c(0x14e)] = TouchInput['x'], this['_lastTouchMoveCloseY'] = TouchInput['y']; }, Window_StateTooltip[_0x3f8093(0x1c8)][_0x3f8093(0x113)] = function () { const _0xb9fae8 = _0x3f8093; if (!this[_0xb9fae8(0x134)]) return; let _0x134931 = ![]; if (this[_0xb9fae8(0x14e)] !== TouchInput['x']) _0x134931 = !![]; if (this[_0xb9fae8(0x136)] !== TouchInput['y']) _0x134931 = !![]; if (!SceneManager['_scene'][_0xb9fae8(0x1ed)][_0xb9fae8(0x18b)] && !SceneManager[_0xb9fae8(0x1f1)][_0xb9fae8(0x131)][_0xb9fae8(0x18b)]) _0x134931 = !![]; if (!_0x134931) return; this[_0xb9fae8(0x134)] = ![], this[_0xb9fae8(0x156)](null); };

(function () {
    // 1. 상태 이름(State Name) 출력 자체를 가로채기
    const _Window_Base_drawActorIcons = Window_Base.prototype.drawActorIcons;
    Window_Base.prototype.drawActorIcons = function (actor, x, y, width) {
        // 비슈스텔라가 아이콘과 함께 이름을 그릴 때 호출되는 시점입니다.
        if (actor && typeof Hendrix_Localization === 'function') {
            // 액터 객체 내부의 상태 데이터들에 대해 이름 번역 강제 적용
            actor.states().forEach(state => {
                if (state && !state._translated) {
                    state.name = Hendrix_Localization(state.name);
                    state.description = Hendrix_Localization(state.description);
                    state._translated = true; // 중복 번역 방지
                }
            });
        }
        _Window_Base_drawActorIcons.apply(this, arguments);
    };

    // 2. 툴팁 객체 설정 시 액터/에너미 구분 없이 강제 번역
    if (typeof Window_StateTooltip !== 'undefined') {
        const _Window_StateTooltip_setObject = Window_StateTooltip.prototype.setObject;
        Window_StateTooltip.prototype.setObject = function (obj) {
            if (obj && typeof Hendrix_Localization === 'function') {
                // obj가 State인지 Buff인지 판단하여 처리
                if (obj.name) obj.name = Hendrix_Localization(obj.name);
                if (obj.description) obj.description = Hendrix_Localization(obj.description);

                // 비슈스텔라 전용 속성이 있다면 그것도 번역
                if (obj.text) obj.text = Hendrix_Localization(obj.text);
            }
            return _Window_StateTooltip_setObject.call(this, obj);
        };
    }

    // 3. 데이터베이스 로드 시점에 미리 번역 (액터 상태 이름용)
    const _Scene_Boot_terminate = Scene_Boot.prototype.terminate;
    Scene_Boot.prototype.terminate = function () {
        _Scene_Boot_terminate.call(this);
        if (typeof Hendrix_Localization === 'function') {
            $dataStates.forEach(state => {
                if (state && state.name) {
                    state.name = Hendrix_Localization(state.name);
                    state.description = Hendrix_Localization(state.description);
                }
            });
        }
    };
})();
(function () {
    // 1. 비슈스텔라 결과창 데이터 구조를 직접 타격 (승리/레벨업/스킬 습득)
    const _BattleManager_makeVictoryNodes = BattleManager.makeVictoryNodes;
    BattleManager.makeVictoryNodes = function () {
        _BattleManager_makeVictoryNodes.call(this);
        if (this._victoryNodes && typeof Hendrix_Localization === 'function') {
            this._victoryNodes.forEach(node => {
                // 노드 안의 모든 텍스트 속성을 검사하여 번역
                ['text', 'value', 'name', 'description'].forEach(prop => {
                    if (node[prop] && typeof node[prop] === 'string' && !node._vTranslated) {
                        node[prop] = Hendrix_Localization(node[prop]);
                    }
                });
                node._vTranslated = true;
            });
        }
    };

    // 2. 메시지 조각 모음 패치 (비슈스텔라의 텍스트 쪼개기 방어)
    // 윈도우가 텍스트를 한 줄씩 그릴 때, 앞뒤 공백을 제거하고 통째로 번역 시도
    const _Window_Base_drawText = Window_Base.prototype.drawText;
    Window_Base.prototype.drawText = function (text, x, y, maxWidth, align) {
        if (typeof Hendrix_Localization === 'function' && typeof text === 'string') {
            // 문장 앞뒤의 불필요한 공백을 제거하고 번역 파일과 대조
            const trimmedText = text.trim();
            if (trimmedText.length > 0) {
                const translated = Hendrix_Localization(trimmedText);
                // 번역이 성공했다면(결과가 다르다면) 번역된 텍스트에 원래 공백을 복원
                if (translated !== trimmedText) {
                    text = text.replace(trimmedText, translated);
                }
            }
        }
        _Window_Base_drawText.call(this, text, x, y, maxWidth, align);
    };

    // 3. 비슈스텔라 전용 결과 윈도우(VictoryMZ)의 아이템 렌더링 가로채기
    const victoryWin = typeof Window_VictoryMZ !== 'undefined' ? Window_VictoryMZ : null;
    if (victoryWin) {
        const _victoryWin_drawItem = victoryWin.prototype.drawItem;
        victoryWin.prototype.drawItem = function (index) {
            if (this._data && this._data[index] && typeof Hendrix_Localization === 'function') {
                const item = this._data[index];
                if (item.text) item.text = Hendrix_Localization(item.text);
            }
            _victoryWin_drawItem.apply(this, arguments);
        };
    }
})();
