/*:
 * @target MZ
 * @plugindesc Makes HP Regeneration (HP Regen Rate) work only in battle.
 * @help
 * HP regeneration and degeneration from traits will only apply during battle.
 * On the map, HP regen rate will be ignored.
 */

(() => {
    const _Game_Battler_regenerateHp = Game_Battler.prototype.regenerateHp;
    Game_Battler.prototype.regenerateHp = function () {
        // 전투 중이 아니면 HP 재생/감소 무시
        if (!$gameParty.inBattle()) {
            return;
        }
        _Game_Battler_regenerateHp.call(this);
    };
})();
