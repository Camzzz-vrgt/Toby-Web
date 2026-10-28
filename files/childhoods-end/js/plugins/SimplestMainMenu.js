//=============================================================================
// SimplestMainMenu.js
//=============================================================================
/*:
* @target MZ
* @plugindesc v0.0.1 Simplest Main Menu
* @author MechPen
* @help SimplestMainMenu.js
*
* Removes everything except for the command window.
* You can remove Items, Skill, etc from the System 2 tab in the database.
*
*
*/

(() => {
    //
    const pluginName = "SimplestMainMenu";

    Scene_Menu.prototype.start = function () {
        Scene_MenuBase.prototype.start.call(this);
        this._statusWindow.hide();
    };
    (alias => {
        Scene_Menu.prototype.commandWindowRect = function () {
            const rect = alias.apply(this, arguments);       // calculate as normal
            rect.x = (Graphics.boxWidth - rect.width) / 2;    // centre x
            rect.y = (Graphics.boxHeight - rect.height) / 2;   // centre y
            return rect;
        };
    })(Scene_Menu.prototype.commandWindowRect);

})();


// end of file