(() => {
    const _Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function () {

        // localStorage 값 읽기
        const t0 = localStorage.getItem("title_0") === "true";
        const t1 = localStorage.getItem("title_1") === "true";
        const t2 = localStorage.getItem("title_2") === "true";
        const t3 = localStorage.getItem("title_3") === "true";

        // 우선순위: 2 > 1 > 0 (원하면 바꿔도 됨)
        if (t1) {
            $dataSystem.title1Name = "Title_1";
            $dataSystem.title2Name = "";
        }
        else if (t2) {
            $dataSystem.title1Name = "Title_2";
            $dataSystem.title2Name = "";
        }
        else if (t0) {
            $dataSystem.title1Name = "Title_0";
            $dataSystem.title2Name = "";
        }
        else if (t3) {
            $dataSystem.title1Name = "Title_3";
            $dataSystem.title2Name = "";
        }
        // 아무것도 true가 아니면 기본 System.json 타이틀 사용

        _Scene_Title_create.call(this);
    };
})();
