/*:
 * @target MZ
 * @plugindesc 옵션창에서 '항상 달리기'와 '설정 기억하기'를 제거합니다.
 */
(() => {
    const _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function () {
        _Window_Options_addGeneralOptions.call(this);
        // 불필요한 항목 제거
        this._list = this._list.filter(item =>
            !["touchUI"].includes(item.symbol)
        );
    };
})();
