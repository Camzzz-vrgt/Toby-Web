/*:
 * @target MZ
 * @plugindesc Show specific picture IDs below characters, others above (screen fixed). 
 *
 * @param BelowPictureMaxId
 * @type number
 * @text Pictures Below Characters (Max ID)
 * @desc Pictures with IDs up to this number will be drawn below characters. Others remain above.
 * @default 50
 *
 * @help PicturesBelowCharactersSelective.js
 *
 * - Pictures with ID <= Max ID → drawn below characters
 * - Pictures with ID >  Max ID → drawn above characters (default)
 *
 * Example:
 *   Max ID = 50 → Pictures 1~50 below characters, 51+ above.
 *
 * Terms of Use:
 * Free for commercial and non-commercial projects. Credit appreciated.
 */

(() => {
    const parameters = PluginManager.parameters("PicturesBelowCharactersSelective");
    const belowMaxId = Number(parameters["BelowPictureMaxId"] || 50);

    const _Spriteset_Map_createPictures = Spriteset_Map.prototype.createPictures;
    Spriteset_Map.prototype.createPictures = function () {
        _Spriteset_Map_createPictures.call(this);

        // 밑/위 컨테이너 생성
        this._belowPictures = new Sprite();
        this._abovePictures = new Sprite();

        // 기본 pictureContainer 비우기
        this._pictureContainer.removeChildren();

        // 그림 스프라이트 재배치
        for (let i = 1; i <= $gameScreen.maxPictures(); i++) {
            const sprite = new Sprite_Picture(i);
            if (i <= belowMaxId) {
                this._belowPictures.addChild(sprite); // 캐릭터 밑
            } else {
                this._abovePictures.addChild(sprite); // 캐릭터 위
            }
        }

        // 캐릭터 밑: tilemap의 맨 앞에 추가
        this._tilemap.addChildAt(this._belowPictures, 0);

        // 캐릭터 위: 기존처럼 addChild
        this.addChild(this._abovePictures);
    };
})();
