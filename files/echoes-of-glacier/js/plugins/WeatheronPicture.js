/*:
 * @target MZ
 * @plugindesc Weather appears above most pictures, except those with high IDs.
 * @help
 * pictureThreshold 값보다 큰 ID의 그림만 날씨 위에 표시됩니다.
 */

(() => {
    const pictureThreshold = 8; // 이 ID 이상은 날씨 위에 표시

    // 날씨 순서 고정
    const _Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
    Scene_Map.prototype.createSpriteset = function () {
        _Scene_Map_createSpriteset.call(this);

        this._reorderWeatherLayer = () => {
            const spriteset = this._spriteset;
            const weather = spriteset._weather;
            const pictures = spriteset._pictureContainer;
            if (!weather || !pictures) return;

            // 날씨를 그림들보다 위로 이동
            spriteset.removeChild(weather);
            spriteset.addChild(weather);

            // ID 높은 그림만 날씨 위로 이동
            for (const pic of pictures.children) {
                if (pic && pic.pictureId && pic.pictureId() > pictureThreshold) {
                    spriteset.removeChild(pic);
                    spriteset.addChild(pic);
                }
            }
        };

        // 첫 배치
        setTimeout(() => this._reorderWeatherLayer(), 30);
    };

    // 매 프레임 감시 (그림 추가 시에도 반영되게)
    const _Spriteset_Map_update = Spriteset_Map.prototype.update;
    Spriteset_Map.prototype.update = function () {
        _Spriteset_Map_update.call(this);
        const scene = SceneManager._scene;
        if (scene && scene._reorderWeatherLayer) {
            scene._reorderWeatherLayer();
        }
    };
})();
