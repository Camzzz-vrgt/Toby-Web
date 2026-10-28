/*:
 * @target MZ
 * @plugindesc Battle animation layer diagnostic
 * @author Custom
 */

(() => {

    const _createAnimation =
        Spriteset_Battle.prototype.createAnimation;

    Spriteset_Battle.prototype.createAnimation = function (
        targets,
        animationId,
        mirror,
        delay
    ) {
        _createAnimation.call(
            this,
            targets,
            animationId,
            mirror,
            delay
        );

        console.log("===== ANIMATION CREATED =====");
        console.log("Animation ID:", animationId);

        const picture = this._pictureContainer;
        const effects = this._effectsContainer;

        console.log("Picture:", picture);
        console.log("Picture Parent:", picture?.parent);

        console.log("Effects:", effects);
        console.log("Effects Parent:", effects?.parent);

        if (picture?.parent) {
            console.log(
                "Picture Index:",
                picture.parent.getChildIndex(picture)
            );
        }

        if (effects?.parent) {
            console.log(
                "Effects Index:",
                effects.parent.getChildIndex(effects)
            );
        }

        if (this._animationSprites) {

            console.log(
                "Animation Sprites:",
                this._animationSprites
            );

            for (const sprite of this._animationSprites) {

                if (!sprite) continue;

                console.log(
                    "Animation Sprite:",
                    sprite
                );

                console.log(
                    "Animation Parent:",
                    sprite.parent
                );

                if (sprite.parent) {

                    console.log(
                        "Animation Index:",
                        sprite.parent.getChildIndex(sprite)
                    );

                    console.log(
                        "Animation Parent Children:",
                        sprite.parent.children
                    );
                }
            }
        }

        console.log("============================");
    };

})();