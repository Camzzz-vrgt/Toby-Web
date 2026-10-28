(() => {
    const _playBgm = AudioManager.playBgm;
    AudioManager.playBgm = function (bgm, pos) {
        if (!bgm) return;
        _playBgm.call(this, bgm, pos);
    };

    const _playBgs = AudioManager.playBgs;
    AudioManager.playBgs = function (bgs, pos) {
        if (!bgs) return;
        _playBgs.call(this, bgs, pos);
    };
})();
