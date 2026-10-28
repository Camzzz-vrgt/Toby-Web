/*:
 * @target MZ
 * @plugindesc 게임 종료 시 타이틀로 가지 않고 프로그램을 종료합니다.
 */
(() => {
    Scene_GameEnd.prototype.commandToTitle = function () {
        this.fadeOutAll();
        SceneManager.exit();
    };
})();
