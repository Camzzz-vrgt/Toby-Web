(() => {

    const _drawItemStatus = Window_BattleStatus.prototype.drawItemStatus;

    Window_BattleStatus.prototype.drawItemStatus = function (index) {
        const actor = this.actor(index);
        const rect = this.itemRect(index);

        this.drawActorFace(actor, rect.x, rect.y, ImageManager.faceWidth, ImageManager.faceHeight);

        const x = rect.x + 180;
        const y = rect.y;
        const width = rect.width - 180;

        // ❌ 이름은 안 그림

        // ✅ 상태 아이콘은 그림
        this.drawActorIcons(actor, x, y + this.lineHeight() * 0, width);

        // ✅ HP / MP / TP는 그대로
        this.placeBasicGauges(actor, x, y + this.lineHeight() * 1);
    };

})();
