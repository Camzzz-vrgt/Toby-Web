// Extension shims for Bad Time Trio HTML5 port.
// Exe extension list -> object type ids 32+slot:
//   slot 0: txtblt      (Text Blitter)
//   slot 1: OpenURLs
//   slot 2: Perspective
//   slot 3: ultimatefullscreen
// Runtime.js's CExtLoader is patched to instantiate CRunBttExt, which
// delegates per-extension behaviour to the impls created here.
(function () {
    var EXT_DEBUG = false;
    var logged = {};

    function log(msg) {
        if (!EXT_DEBUG || !window.console) return;
        if (logged[msg]) return;
        logged[msg] = 1;
        console.log("[ext] " + msg);
    }

    // -- helpers -------------------------------------------------------------
    function paramString(act, rhPtr, n) {
        try {
            return act.getParamExpString(rhPtr, n);
        } catch (e) {
            var p = act.evtParams && act.evtParams[n];
            return (p && p.string) || "";
        }
    }
    function paramInt(act, rhPtr, n) {
        try {
            return act.getParamExpression(rhPtr, n);
        } catch (e) {
            var p = act.evtParams && act.evtParams[n];
            return (p && p.value) || 0;
        }
    }

    // -- OpenURLs -------------------------------------------------------------
    // Actions observed in Clickteam OpenURLs extension: open URL etc.
    function OpenUrlsImpl() {}
    OpenUrlsImpl.prototype = {
        action: function (num, act) {
            var rh = this.ext.rh;
            var url = paramString(act, rh, 0);
            if (url) {
                log("OpenURLs: opening " + url);
                try { window.open(url, "_blank"); } catch (e) {}
            }
        }
    };

    // -- ultimatefullscreen ---------------------------------------------------
    // The game pokes this extension every frame to sync window state; the
    // F-key fullscreen toggle is handled at page level (index.html).
    function UFSImpl() {}
    UFSImpl.prototype = {
        action: function (num, act) {},
        expression: function (num) { return 0; }
    };

    // -- Perspective ------------------------------------------------------------
    // Perspective transform sprite. Stub: invisible, no-op.
    function PerspectiveImpl() {}
    PerspectiveImpl.prototype = {
        action: function (num, act) {},
        expression: function (num) { return 0; }
    };

    // -- txtblt (Text Blitter) -------------------------------------------------
    // Bitmap-font text object. Init layout from the CCN extension data blob
    // (mirrors Chowdren's txtblt reader). Glyphs live in a fixed grid inside
    // the image-bank sheet; charmap[i] is the char at glyph index i.
    function readFixString(file, size) {
        var out = "";
        for (var i = 0; i < size; i++) {
            var b = file.readAByte();
            if (b < 10) { file.skipBytes(size - i - 1); break; }
            out += String.fromCharCode(b);
        }
        return out;
    }

    function TxtBltImpl() {
        this.text = "";
        this.charW = 16; this.charH = 32;
        this.spacingX = 0; this.spacingY = 0;
        this.charOffset = 0;
        this.imgW = 0; this.imgH = 0;
        this.xOff = 0; this.yOff = 0;
        this.flags = 0;
        this.imageHandle = -1;
        this.charmap = "";
        this.hAlign = 0; this.vAlign = 0;
        this.rectL = 0; this.rectT = 0; this.rectR = 0; this.rectB = 0;
        this.imgEl = null;
    }
    TxtBltImpl.prototype = {
        readData: function (file) {
            var base = file.getFilePointer();
            file.skipBytes(4);
            this.width = file.readAShort();
            this.height = file.readAShort();
            file.skipBytes(128);
            file.skipBytes(4);
            this.text = readFixString(file, 1024);
            file.skipBytes(256);
            this.transColor = file.readAColor();
            this.charW = file.readAInt();
            this.charH = file.readAInt();
            this.spacingX = file.readAInt();
            this.spacingY = file.readAInt();
            this.charOffset = file.readAInt() % 255;
            this.imgW = file.readAInt();
            this.imgH = file.readAInt();
            this.xOff = file.readAInt();
            this.yOff = file.readAInt();
            this.flags = file.readAInt();
            this.tabWidth = file.readAInt();
            this.imageHandle = file.readAShort();
            this.charmap = readFixString(file, 256);
            file.skipBytes(256);
            file.skipBytes(4096);
            file.skipBytes(1024);
            file.skipBytes(2);
            this.rectL = file.readAInt();
            this.rectT = file.readAInt();
            this.rectR = file.readAInt();
            this.rectB = file.readAInt();
            this.hAlign = file.readAInt();
            this.vAlign = file.readAInt();
            file.skipBytes(4);
            this.animType = file.readAByte();
        },
        glyphIndex: function (c) {
            return this.charmap.indexOf(c) + this.charOffset;
        },
        displayRunObject: function (context, xDraw, yDraw) {
            var ext = this.ext, ho = ext.ho;
            if (this.imgEl == null && this.imageHandle >= 0) {
                try {
                    var h = ("000" + this.imageHandle).slice(-4);
                    this.imgEl = new Image();
                    this.imgEl.src = ext.rh.rhApp.resources + h + ".png";
                } catch (e) { this.imageHandle = -1; }
            }
            if (!this.text || !this.imgEl || !this.imgEl.complete || !this.imgEl.naturalWidth ||
                this.charW <= 0 || this.charH <= 0) return;
            var ctx = context._context || context;
            ctx.save();
            var imgEl = this.imgEl;
            var cols = Math.max(1, Math.floor(this.imgW / this.charW));
            var x0 = xDraw + ho.hoX - ext.rh.rhWindowX + (ext.pLayer ? ext.pLayer.x : 0) + this.xOff;
            var y0 = yDraw + ho.hoY - ext.rh.rhWindowY + (ext.pLayer ? ext.pLayer.y : 0) + this.yOff;
            var advX = this.charW + this.spacingX;
            var advY = this.charH + this.spacingY;
            var boxW = this.width, boxH = this.height;
            var lines = this.text.split("\r\n");
            var lh;
            if (this.vAlign == 1) lh = Math.floor((boxH - lines.length * advY) / 2);
            else if (this.vAlign == 2) lh = boxH - lines.length * advY;
            else lh = 0;
            for (var li = 0; li < lines.length; li++) {
                var line = lines[li];
                var lx;
                if (this.hAlign == 1) lx = x0 + Math.floor((boxW - line.length * advX) / 2);
                else if (this.hAlign == 2) lx = x0 + boxW - line.length * advX;
                else lx = x0;
                var ly = y0 + lh + li * advY;
                for (var ci = 0; ci < line.length; ci++) {
                    var gi = this.glyphIndex(line.charAt(ci));
                    if (gi >= 0 && gi < 256) {
                        var sx = (gi % cols) * this.charW;
                        var sy = Math.floor(gi / cols) * this.charH;
                        if (sx + this.charW <= imgEl.naturalWidth && sy + this.charH <= imgEl.naturalHeight) {
                            try {
                                ctx.drawImage(imgEl, sx, sy, this.charW, this.charH,
                                    lx, ly, this.charW, this.charH);
                            } catch (e) {}
                        }
                    }
                    lx += advX;
                }
            }
            ctx.restore();
        },
        action: function (num, act) {
            var rh = this.ext.rh;
            switch (num) {
                case 0: this.text = paramString(act, rh, 0); break;       // set_text
                case 4: this.charW = paramInt(act, rh, 0); break;
                case 5: this.charH = paramInt(act, rh, 0); break;
                case 6: this.charOffset = paramInt(act, rh, 0) % 255; break;
                case 7: this.charmap = paramString(act, rh, 0); break;
                case 13: break;                                           // load
                case 17: this.xOff = paramInt(act, rh, 0); break;
                case 18: this.yOff = paramInt(act, rh, 0); break;
                case 19: break;                                           // transparent
                case 36: this.hAlign = paramInt(act, rh, 0); break;
                case 37: this.vAlign = paramInt(act, rh, 0); break;
                case 42: this.xOff = paramInt(act, rh, 0); break;         // x scroll
                case 43: this.yOff = paramInt(act, rh, 0); break;
                case 44: this.spacingX = paramInt(act, rh, 0); break;
                case 45: this.spacingY = paramInt(act, rh, 0); break;
                case 49: this.text += paramString(act, rh, 0); break;     // append_text
                case 58: this.width = paramInt(act, rh, 0); break;
                case 59: this.height = paramInt(act, rh, 0); break;
            }
        },
        expression: function (num) {
            switch (num) {
                case 0: return this.text;
                case 1: return this.charW;
                case 2: return this.charH;
                case 4: return this.charmap;
                case 5: return this.imgW;
                case 6: return this.imgH;
                case 9: return this.hAlign;
                case 10: return this.vAlign;
                case 16: return this.yOff;
                case 17: return this.spacingX;
                case 18: return this.spacingY;
                case 21: return this.width;
                case 22: return this.height;
                case 32: return this.text.split("\r\n").length;
                case 34: return this.xOff;
                case 35: return this.yOff;
                case 37: return this.animType || 0;
            }
            return 0;
        }
    };

    var IMPLS = {
        txtblt: TxtBltImpl,
        OpenURLs: OpenUrlsImpl,
        Perspective: PerspectiveImpl,
        ultimatefullscreen: UFSImpl
    };

    window.BttExt = {
        log: log,
        create: function (name, ext, file, cob, version) {
            var C = IMPLS[name];
            if (!C) return null;
            var impl = new C();
            impl.ext = ext;
            impl.file = file;
            impl.cob = cob;
            if (impl.readData && file) {
                try { impl.readData(file); }
                catch (e) { console.log("[ext] " + name + " init data parse failed: " + e); }
            }
            return impl;
        }
    };
})();
