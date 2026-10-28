/*:
 * @target MZ
 * @plugindesc 피격 시 TP 증가량을 고정값으로 조정
 */

(() => {
    const TP_ON_HIT = 5; // 맞을 때 얻는 TP (0이면 완전 제거)

    const _Game_Battler_gainTpByDamage = Game_Battler.prototype.gainTpByDamage;
    Game_Battler.prototype.gainTpByDamage = function (damageRate) {
        this.gainTp(TP_ON_HIT);
    };
})();