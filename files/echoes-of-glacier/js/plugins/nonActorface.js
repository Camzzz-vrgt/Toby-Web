(() => {

    const _drawText = Window_Base.prototype.drawText;

    Window_Base.prototype.drawText = function (text, x, y, maxWidth, align) {

        // 전투 상태창에서 액터 이름일 때만 숨기기
        if (this instanceof Window_BattleStatus) {
            const actor = $gameParty.members().find(a => a.name() === text);
            if (actor) return; // 이름이면 그리지 않음
        }

        _drawText.call(this, text, x, y, maxWidth, align);
    };

})();
