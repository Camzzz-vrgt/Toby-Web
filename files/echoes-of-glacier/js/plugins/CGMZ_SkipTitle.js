/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/skiptitle/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Skip the title scene into your evented title screen
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Alpha R2
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.9.0
 * ----------------------------------------------------------------------------
 * Description: Allows you to skip the title scene entirely. This will either
 * put the player into a new game where you can event your title screen with
 * images and make it truly custom, or you can optionally put the player into
 * their latest save file (if any exists) where they can then load other save
 * files if desired.
 * ----------------------------------------------------------------------------
 * Documentation:
 * -----------------------Skip Title Editor Option-----------------------------
 * You may be wondering why you need a plugin to skip the title screen when the
 * editor already has that feature built in. The editor option is meant for
 * speeding up your playtests, and therefore only works in a playtest and once
 * you deploy your game the title will be shown. This plugin works in
 * deployed games.
 * --------------------------Other Title Plugins-------------------------------
 * This plugin skips the title screen. It will therefore most likely not be
 * compatible with other plugins that modify the title screen, as those plugin
 * effects will be skipped since the title screen will be skipped. Note that it
 * does still load the title scene, which allows any plugin that occurs before
 * the title screen to function as normal. Some examples of these may be [CGMZ]
 * Splash Screen or [CGMZ] Press Start. Preloader plugins also may occur before
 * the title screen and should function as normal.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not currently include any plugin commands
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * --------------------------------Filename------------------------------------
 * The filename for this plugin MUST remain CGMZ_SkipTitle.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this latest version adds the option to include the autosave file
 * if it exists when trying to auto-load the latest save. Previously, only
 * manually saved games were eligible. Now you can also load into the autosave
 * if it is the latest save, if the option in the plugin parameters is enabled.
 *
 * Version Alpha R2
 * - Added option to include autosave file when trying to auto load
 *
 * @param Mechanics
 *
 * @param Auto Load Save
 * @parent Mechanics
 * @type boolean
 * @default true
 * @desc If true, the plugin will try to load the latest save file. If false, will always put the player into a new game.
 *
 * @param Auto Save Counts
 * @parent Mechanics
 * @type boolean
 * @default false
 * @desc If false, this plugin will never load the autosave when trying to auto load a save file.
*/
Imported.CGMZ_SkipTitle = true;
CGMZ.Versions["Skip Title"] = "Alpha R2";
CGMZ.SkipTitle = {};
CGMZ.SkipTitle.parameters = PluginManager.parameters('CGMZ_SkipTitle');
CGMZ.SkipTitle.AutoLoadSave = (CGMZ.SkipTitle.parameters["Auto Load Save"] === 'true');
CGMZ.SkipTitle.AutoSaveCounts = (CGMZ.SkipTitle.parameters["Auto Save Counts"] === 'true');
//=============================================================================
// Scene_Title
//-----------------------------------------------------------------------------
// Skip the title scene when it tries to load
//=============================================================================
//-----------------------------------------------------------------------------
// Stop all audio on scene start
//-----------------------------------------------------------------------------
Scene_Title.prototype.start = function() {
	Scene_Base.prototype.start.call(this);
	AudioManager.stopBgm();
	AudioManager.stopBgs();
    AudioManager.stopMe();
	SceneManager.clearStack();
};
//-----------------------------------------------------------------------------
// Do not create title things, instead try loading save or starting new game
//-----------------------------------------------------------------------------
Scene_Title.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
	if(CGMZ.SkipTitle.AutoLoadSave && DataManager.isAnySavefileExists()) {
		DataManager.loadGame((CGMZ.SkipTitle.AutoSaveCounts) ? DataManager.CGMZ_SkipTitle_latestSavefileIdWithAutosave() : DataManager.latestSavefileId())
			.then(() => this.onLoadSuccess())
			.catch(() => this.onLoadFailure());
	} else {
		this.CGMZ_startNewGame();
	}
};
//-----------------------------------------------------------------------------
// Scene has nothing to load so is never busy
//-----------------------------------------------------------------------------
Scene_Title.prototype.isBusy = function() {
    return false;
};
//-----------------------------------------------------------------------------
// Basic update only
//-----------------------------------------------------------------------------
Scene_Title.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
};
//-----------------------------------------------------------------------------
// Commands to start a new game
//-----------------------------------------------------------------------------
Scene_Title.prototype.CGMZ_startNewGame = function() {
    DataManager.setupNewGame();
	this.fadeOutAll();
	SceneManager.goto(Scene_Map);
};
//-----------------------------------------------------------------------------
// Handling for load success
//-----------------------------------------------------------------------------
Scene_Title.prototype.onLoadSuccess = function() {
    this.fadeOutAll();
    this.reloadMapIfUpdated();
	$gameSystem.onAfterLoad();
    SceneManager.goto(Scene_Map);
};
//-----------------------------------------------------------------------------
// Handling for load failure
//-----------------------------------------------------------------------------
Scene_Title.prototype.onLoadFailure = function() {
    this.CGMZ_startNewGame();
};
//-----------------------------------------------------------------------------
// Reload the game map if needed
//-----------------------------------------------------------------------------
Scene_Title.prototype.reloadMapIfUpdated = function() {
    if($gameSystem.versionId() !== $dataSystem.versionId) {
        const mapId = $gameMap.mapId();
        const x = $gamePlayer.x;
        const y = $gamePlayer.y;
        $gamePlayer.reserveTransfer(mapId, x, y);
        $gamePlayer.requestMapReload();
    }
};
//=============================================================================
// DataManager
//-----------------------------------------------------------------------------
// Get the latest save file id including autosave
//=============================================================================
//-----------------------------------------------------------------------------
// Get the latest save file id including autosave
//-----------------------------------------------------------------------------
DataManager.CGMZ_SkipTitle_latestSavefileIdWithAutosave = function() {
    const globalInfo = this._globalInfo;
    const validInfo = globalInfo.filter(x => x);
    const latest = Math.max(...validInfo.map(x => x.timestamp));
    const index = globalInfo.findIndex(x => x && x.timestamp === latest);
    return index > 0 ? index : 0;
};