/*:
 * @target MZ
 * @plugindesc Displays battle animations above Animated Pictures and battle portraits.
 * @author
 * @help
 * Moves battle animation sprites above the Spriteset_Battle
 * and places them immediately before the WindowLayer.
 */

(() => {

    const _createAnimation =
        Spriteset_Battle.prototype.createAnimation;

    Spriteset_Battle.prototype.createAnimation = function (
        targets,
        animation,
        mirror,
        delay
    ) {

        // 원래 애니메이션 생성
        _createAnimation.call(
            this,
            targets,
            animation,
            mirror,
            delay
        );

        const animations = this._animationSprites;

        if (!animations || animations.length === 0) {
            return;
        }

        const scene = SceneManager._scene;

        if (!scene) {
            return;
        }

        const windowLayer = scene._windowLayer;

        if (!windowLayer) {
            return;
        }

        // WindowLayer 바로 앞의 위치
        const windowLayerIndex =
            scene.children.indexOf(windowLayer);

        if (windowLayerIndex < 0) {
            return;
        }

        for (const sprite of animations) {

            if (!sprite) {
                continue;
            }

            // 이미 Scene_Battle에 있는 경우 중복 이동 방지
            if (sprite.parent === scene) {
                continue;
            }

            // 현재 화면상의 위치 저장
            const globalPosition =
                sprite.getGlobalPosition();

            // 현재 부모에서 제거
            if (sprite.parent) {
                sprite.parent.removeChild(sprite);
            }

            // WindowLayer 바로 앞에 추가
            scene.addChildAt(
                sprite,
                windowLayerIndex + 1
            );

            // 화면상의 기존 위치 복원
            const localPosition =
                scene.toLocal(globalPosition);

            sprite.position.copyFrom(localPosition);

            console.log(
                "[BattleAnimationAbovePicture] Animation moved above Picture and Portrait."
            );
        }
    };

})();