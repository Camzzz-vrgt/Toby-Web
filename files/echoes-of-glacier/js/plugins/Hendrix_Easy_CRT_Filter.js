/*:
 * @target MZ
 * @plugindesc Instantly give your game the trendy retro / CRT effect look that you see from old video games
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io/
 * 
 * @help 
 * 
 * Version 1.1.4
 * ----------------------------------------------------------------------------
 * This plugin adds a highly customizable CRT screen effect to your game, allowing
 * you to create a retro aesthetic with features like screen curvature, scanlines,
 * RGB shift, vignette, and glow effects.
 * ----------------------------------------------------------------------------
 * FEATURES
 * - Instantly useable the moment you enable the plugin
 * - Fully customizable CRT screen effect, including: Screen curvature,
 *   animated scanlines, RGB color shift effect, screen brightness, 
 *   screen glow effect, Vignette effect, white overlay
 * - Toggleable command to scene option
 * ----------------------------------------------------------------------------
 * SCRIPT CALLS
 * $gameSystem.setCRTEffects(true);  // Enable CRT effect
 * $gameSystem.setCRTEffects(false); // Disable CRT effect
 * ----------------------------------------------------------------------------
 * SUPPORTS
 * X: https://x.com/sanghendrix96
 * Discord: https://discord.gg/YKPscqHV8b
 * Patreon: https://www.patreon.com/SangHendrix
 *
 * @param CRT Effect Enabled
 * @desc Enable the CRT effect by default?
 * @type boolean
 * @default true
 * 
 * @param --------------------------
 * @type text
 * @default --------------------------
 *
 * @param Curvature
 * @desc Curvature of the screen. See it like "fish eye" effect
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.10
 * 
 * @param View Zoom
 * @text Screen Zoom
 * @desc Scale up the screen. 100 = 100% (no scale)
 * @type number
 * @min 100
 * @default 105
 * 
 * @param ----z----------------------
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Brightness
 * @text Screen Brightness
 * @desc Make your screen brighter
 * @type number
 * @decimals 2
 * @min 0
 * @max 2
 * @default 1.10
 *
 * @param White Overlay Intensity
 * @text White Overlay
 * @desc Add a white solid layer to game screen. 0 = No White Overlay. 1 = Fully white
 * @type number
 * @decimals 2
 * @min 0
 * @max 1
 * @default 0.1
 * 
 * @param a
 * @text --------------------------
 * @default --------------------------
 *
 * @param Scanline Frequency
 * @desc Frequency of scanlines. The higher the number, the more line you have
 * @type number
 * @decimals 2
 * @min 0
 * @default 12.00
 *
 * @param Scanline Intensity
 * @desc Intensity of scanlines. The lines are more visible the higher the number is
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.02
 *
 * @param Scanline Move
 * @text Scanline Animation
 * @desc Should the scanlines move?
 * @type boolean
 * @default true
 *
 * @param Scanline Speed
 * @desc Speed of scanline movement if Scaneline Animation is enabled
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.1
 * 
 * @param az
 * @text --------------------------
 * @default --------------------------
 *
 * @param Glow Intensity
 * @desc Glow your screen
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.3
 *
 * @param Glow Spread
 * @desc Spread of the glow effect. Higher = spread more
 * @type number
 * @decimals 2
 * @min 1
 * @default 1.00
 * 
 * @param azz
 * @text --------------------------
 * @default --------------------------
 *
 * @param Vignette Intensity
 * @desc Intensity of the vignette effect
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.30
 *
 * @param Vignette Size
 * @desc Size of the vignette effect
 * @type number
 * @decimals 2
 * @min 0
 * @default 16.00
 * 
 * @param azzz
 * @text --------------------------
 * @default --------------------------
 *
 * @param RGB Shift Intensity
 * @desc Intensity of the RGB shift effect
 * @type number
 * @decimals 2
 * @min 0
 * @default 1.00
 *
 * @param RGB Shift Distance
 * @desc Distance of the RGB shift effect
 * @type number
 * @decimals 3
 * @min 0
 * @default 0.001
 * 
 * @command Change CRT Settings
 * @desc Change CRT settings during gameplay
 * 
 * @arg brightness
 * @text Screen Brightness
 * @type number
 * @decimals 2
 * @min 0
 * @max 2
 * @default 1.10
 * @desc Adjust the screen brightness
 * 
 * @arg curvature
 * @text Screen Curvature
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.10
 * @desc Adjust the screen curvature effect
 * 
 * @arg scanlineFrequency
 * @text Scanline Frequency
 * @type number
 * @decimals 2
 * @min 0
 * @default 12.00
 * @desc Adjust the frequency of scanlines
 * 
 * @arg scanlineIntensity
 * @text Scanline Intensity
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.02
 * @desc Adjust the intensity of scanlines
 * 
 * @arg scanlineMove
 * @text Scanline Animation
 * @type boolean
 * @default true
 * @desc Enable or disable scanline movement
 * 
 * @arg scanlineSpeed
 * @text Scanline Speed
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.1
 * @desc Adjust the speed of scanline movement
 * 
 * @arg glowIntensity
 * @text Glow Intensity
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.3
 * @desc Adjust the intensity of the glow effect
 * 
 * @arg glowSpread
 * @text Glow Spread
 * @type number
 * @decimals 2
 * @min 1
 * @default 1.00
 * @desc Adjust the spread of the glow effect
 * 
 * @arg vignetteIntensity
 * @text Vignette Intensity
 * @type number
 * @decimals 2
 * @min 0
 * @default 0.30
 * @desc Adjust the intensity of the vignette effect
 * 
 * @arg vignetteSize
 * @text Vignette Size
 * @type number
 * @decimals 2
 * @min 0
 * @default 16.00
 * @desc Adjust the size of the vignette effect
 * 
 * @arg rgbShiftIntensity
 * @text RGB Shift Intensity
 * @type number
 * @decimals 2
 * @min 0
 * @default 1.00
 * @desc Adjust the intensity of the RGB shift effect
 * 
 * @arg rgbShiftDistance
 * @text RGB Shift Distance
 * @type number
 * @decimals 3
 * @min 0
 * @default 0.001
 * @desc Adjust the distance of the RGB shift effect
 * 
 * @arg whiteOverlayIntensity
 * @text White Overlay Intensity
 * @type number
 * @decimals 2
 * @min 0
 * @max 1
 * @default 0.1
 * @desc Adjust the intensity of the white overlay effect
 * 
 * @arg viewZoom
 * @text Screen Zoom
 * @type number
 * @min 100
 * @default 105
 * @desc Adjust the screen zoom (100 = 100%, no zoom)
 *
 * @command Reset CRT Settings
 * @desc Reset all CRT settings to their default values (in plugin parameter)
 */
(function () {
    const pluginName = "Hendrix_Easy_CRT_Filter";
    const parameters = PluginManager.parameters(pluginName);

    const defaultCrtEffectEnabled = parameters['CRT Effect Enabled'] === 'true';
    const brightness = Number(parameters['Brightness'] || 1.1);
    const curvature = Number(parameters['Curvature'] || 0.1);
    const scanlineFreq = Number(parameters['Scanline Frequency'] || 12.0);
    const scanlineIntensity = Number(parameters['Scanline Intensity'] || 0.02);
    const scanlineMove = parameters['Scanline Move'] === 'true';
    const scanlineSpeed = Number(parameters['Scanline Speed'] || 0.1);
    const glowIntensity = Number(parameters['Glow Intensity'] || 0.2);
    const glowSpread = Number(parameters['Glow Spread'] || 1);
    const vignetteIntensity = Number(parameters['Vignette Intensity'] || 0.3);
    const vignetteSize = Number(parameters['Vignette Size'] || 16.0);
    const rgbShiftIntensity = Number(parameters['RGB Shift Intensity'] || 1.0);
    const rgbShiftDistance = Number(parameters['RGB Shift Distance'] || 0.001);
    const whiteOverlayIntensity = Number(parameters['White Overlay Intensity'] || 0.1);
    const viewZoom = Number(parameters['View Zoom'] || 110) / 100;

    function CRTFilter() {
        this.initialize(...arguments);
    }

    PluginManager.registerCommand(pluginName, "Change CRT Settings", function(args) {
            $gameSystem._crtSettings = {
                brightness: Number(args.brightness),
                curvature: Number(args.curvature),
                scanlineFreq: Number(args.scanlineFrequency),
                scanlineIntensity: Number(args.scanlineIntensity),
                scanlineMove: args.scanlineMove === 'true',
                vignetteIntensity: Number(args.vignetteIntensity),
                vignetteSize: Number(args.vignetteSize),
                rgbShiftIntensity: Number(args.rgbShiftIntensity),
                rgbShiftDistance: Number(args.rgbShiftDistance),
                glowIntensity: Number(args.glowIntensity),
                glowSpread: Number(args.glowSpread),
                whiteOverlayIntensity: Number(args.whiteOverlayIntensity),
                viewZoom: Number(args.viewZoom) / 100
            };
            
            if (SceneManager._scene._crtFilter) {
                const filter = SceneManager._scene._crtFilter;
                Object.assign(filter.uniforms, $gameSystem._crtSettings);
            }
    });

    PluginManager.registerCommand(pluginName, "Reset CRT Settings", function() {
            $gameSystem._crtSettings = {
                brightness: brightness,
                curvature: curvature,
                scanlineFreq: scanlineFreq,
                scanlineIntensity: scanlineIntensity,
                scanlineMove: scanlineMove,
                vignetteIntensity: vignetteIntensity,
                vignetteSize: vignetteSize,
                rgbShiftIntensity: rgbShiftIntensity,
                rgbShiftDistance: rgbShiftDistance,
                glowIntensity: glowIntensity,
                glowSpread: glowSpread,
                whiteOverlayIntensity: whiteOverlayIntensity,
                viewZoom: viewZoom
            };
            
            if (SceneManager._scene._crtFilter) {
                const filter = SceneManager._scene._crtFilter;
                Object.assign(filter.uniforms, $gameSystem._crtSettings);
            }
    });

    CRTFilter.prototype = Object.create(PIXI.Filter.prototype);
    CRTFilter.prototype.constructor = CRTFilter;

    CRTFilter.prototype.initialize = function () {
        PIXI.Filter.call(this,
            null,
            `precision mediump float;
            varying vec2 vTextureCoord;
            uniform sampler2D uSampler;
            uniform vec4 filterArea;
            uniform float time;
            uniform float curvature;
            uniform float scanlineFreq;
            uniform float scanlineIntensity;
            uniform bool scanlineMove;
            uniform float vignetteIntensity;
            uniform float vignetteSize;
            uniform float brightness;
            uniform float rgbShiftIntensity;
            uniform float rgbShiftDistance;
            uniform bool glowEnabled;
            uniform float glowIntensity;
            uniform float glowSpread;
            uniform bool whiteOverlayEnabled;
            uniform float whiteOverlayIntensity;
            uniform float viewZoom;

            vec4 sampleWithGlow(vec2 uv) {
                vec4 color = texture2D(uSampler, uv);
                if (glowIntensity <= 0.0) return color;

                vec4 glow = vec4(0.0);
                float offset = 0.002 * glowSpread;

                glow += texture2D(uSampler, vec2(uv.x - offset, uv.y - offset));
                glow += texture2D(uSampler, vec2(uv.x + offset, uv.y - offset));
                glow += texture2D(uSampler, vec2(uv.x - offset, uv.y + offset));
                glow += texture2D(uSampler, vec2(uv.x + offset, uv.y + offset));
                
                glow *= 0.25;
                return mix(color, glow, glowIntensity);
            }

            void main(void)
            {
                vec2 uv = vTextureCoord;
                uv = (uv - 0.5) / viewZoom + 0.5;

                float scanlineOffset = scanlineMove ? time : 0.0;
                float scanline = sin((uv.y + scanlineOffset) * 600.0 * scanlineFreq) * scanlineIntensity;

                // CRT curved effect
                vec2 cc = uv - 0.5;
                float dist = dot(cc, cc) * curvature;
                uv = uv + cc * (1.0 + dist) * dist;

                // Check if uv is outside texture bounds
                if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                    return;
                }

                // Glow
                vec4 color = sampleWithGlow(uv);

                // Vignette
                float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
                vignette = clamp(pow(vignetteSize * vignette, vignetteIntensity), 0.0, 1.0);

                // RGB shift
                float r = texture2D(uSampler, uv + vec2(rgbShiftDistance, 0.0) * rgbShiftIntensity).r;
                float g = color.g;
                float b = texture2D(uSampler, uv - vec2(rgbShiftDistance, 0.0) * rgbShiftIntensity).b;
                vec4 crtColor = vec4(r, g, b, color.a);

                // Brightness
                vec4 finalColor = (mix(crtColor * vignette, vec4(0.0), 0.05) - scanline) * brightness;

                // White overlay
                finalColor = mix(finalColor, vec4(1.0), whiteOverlayIntensity);

                gl_FragColor = finalColor;
            }`
        );

        this.uniforms.time = 0;
        
        if ($gameSystem && $gameSystem._crtSettings) {
            Object.assign(this.uniforms, $gameSystem._crtSettings);
        } else {
            this.uniforms.brightness = brightness;
            this.uniforms.curvature = curvature;
            this.uniforms.scanlineFreq = scanlineFreq;
            this.uniforms.scanlineIntensity = scanlineIntensity;
            this.uniforms.scanlineMove = scanlineMove;
            this.uniforms.vignetteIntensity = vignetteIntensity;
            this.uniforms.vignetteSize = vignetteSize;
            this.uniforms.rgbShiftIntensity = rgbShiftIntensity;
            this.uniforms.rgbShiftDistance = rgbShiftDistance;
            this.uniforms.glowIntensity = glowIntensity;
            this.uniforms.glowSpread = glowSpread;
            this.uniforms.whiteOverlayIntensity = whiteOverlayIntensity;
            this.uniforms.viewZoom = viewZoom;
        }
    }

    CRTFilter.prototype.update = function () {
        if (this.uniforms.scanlineMove) {
            this.uniforms.time += scanlineSpeed * 0.01;
        }
    };

    Scene_Base.prototype.applyCRTFilter = function () {
        if (!this._crtFilter) {
            this._crtFilter = new CRTFilter();
            this.filters = this.filters || [];
            this.filters.unshift(this._crtFilter);
        }
    };

    Scene_Base.prototype.removeCRTFilter = function () {
        if (this._crtFilter) {
            this.filters = this.filters.filter(f => f !== this._crtFilter);
            this._crtFilter = null;
        }
    };

    const _Scene_Base_start = Scene_Base.prototype.start;
    Scene_Base.prototype.start = function () {
        _Scene_Base_start.call(this);
        this.updateCRTFilter();
    };

    Scene_Base.prototype.updateCRTFilter = function() {
        if (this.isCRTEffectsEnabled() && this === SceneManager._scene) {
            this.applyCRTFilter();
        } else {
            this.removeCRTFilter();
        }
    };

    Scene_Base.prototype.isCRTEffectsEnabled = function () {
        if ($gameSystem) {
            return $gameSystem.isCRTEffectsEnabled();
        }
        return defaultCrtEffectEnabled;
    };

    const _Scene_Base_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function () {
        _Scene_Base_update.call(this);
        if (this._crtFilter) {
            this._crtFilter.update();
        }
    };

    const _Scene_Base_createFadeSprite = Scene_Base.prototype.createFadeSprite;
    Scene_Base.prototype.createFadeSprite = function () {
        _Scene_Base_createFadeSprite.call(this);
        if (this._fadeSprite) {
            this.removeChild(this._fadeSprite);
            this.addChild(this._fadeSprite);
        }
    };

    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Game_System_initialize.call(this);
        this._crtEffectsEnabled = defaultCrtEffectEnabled;
        this._crtSettings = {
            brightness: brightness,
            curvature: curvature,
            scanlineFreq: scanlineFreq,
            scanlineIntensity: scanlineIntensity,
            scanlineMove: scanlineMove,
            vignetteIntensity: vignetteIntensity,
            vignetteSize: vignetteSize,
            rgbShiftIntensity: rgbShiftIntensity,
            rgbShiftDistance: rgbShiftDistance,
            glowIntensity: glowIntensity,
            glowSpread: glowSpread,
            whiteOverlayIntensity: whiteOverlayIntensity,
            viewZoom: viewZoom
        };
    };

    Game_System.prototype.setCRTEffects = function (enabled) {
        if (this._crtEffectsEnabled !== enabled) {
            this._crtEffectsEnabled = enabled;
            if (SceneManager._scene) {
                SceneManager._scene.updateCRTFilter();
            }
        }
    };

    Game_System.prototype.isCRTEffectsEnabled = function () {
        if (this._crtEffectsEnabled === undefined) {
            this._crtEffectsEnabled = defaultCrtEffectEnabled;
        }
        return this._crtEffectsEnabled;
    };

    const _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function () {
        _Window_Options_makeCommandList.call(this);
        this.addCommand("CRT Effects", "crtEffects");
    };

    const _Window_Options_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function (index) {
        const symbol = this.commandSymbol(index);
        if (symbol === "crtEffects") {
            return this.booleanStatusText(this.getCRTEffectsEnabled());
        }
        return _Window_Options_statusText.call(this, index);
    };

    Window_Options.prototype.getCRTEffectsEnabled = function () {
        return $gameSystem ? $gameSystem.isCRTEffectsEnabled() : defaultCrtEffectEnabled;
    };

    const _Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function () {
        const index = this.index();
        const symbol = this.commandSymbol(index);
        if (symbol === "crtEffects") {
            this.changeCRTEffects();
        } else {
            _Window_Options_processOk.call(this);
        }
    };

    Window_Options.prototype.changeCRTEffects = function () {
        const enabled = this.getCRTEffectsEnabled();
        if ($gameSystem) {
            $gameSystem.setCRTEffects(!enabled);
        }
        this.redrawItem(this.findSymbol("crtEffects"));
        this.playCursorSound();
    };

    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start.call(this);
        if (SceneManager._scene) {
            SceneManager._scene.updateCRTFilter();
        }
    };
})();