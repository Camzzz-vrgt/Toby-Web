/** /*:
 * @author William Ramsey
 * @plugindesc Pack #1 - Beaustiful filters for your RPG Maker projects!
 *
 * @target MZ
 *
 * @command fakeHDR
 * @text Fake HDR Settings
 * @desc Set data for fakeHDR filter
 *
 * @arg toggle
 * @text Toggle on/off?
 * @type boolean
 * @default false
 * @desc Switches between on/off.
 *
 * @arg forceOn
 * @text Force on?
 * @type boolean
 * @default false
 * @desc Forces on.
 *
 * @arg forceOff
 * @text Force off?
 * @type boolean
 * @default false
 * @desc Forces off.
 *
 * @arg intensity
 * @text Intensity
 * @desc higher = brighter/more colorful.
 * @type number
 * @decimals 2
 * @min -999999
 * @max 999999
 * @default 2.00
 *
 * @arg subdivider
 * @text Subdivider
 * @desc higher = a weaker light 'boom' effect.
 * @type number
 * @decimals 2
 * @min -999999
 * @max 999999
 * @default 25.00
 *
 * @arg slide
 * @text Animation Settings
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg doSlide
 * @text Slide?
 * @type boolean
 * @default false
 * @parent slide
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg slideTime
 * @text Speed
 * @type number
 * @min -999999
 * @max 999999
 * @decimals 2
 * @default 40.00
 * @desc Frames it takes to slide between the changes.
 * @parent slide
 *
 * @command drunk
 * @text Drunk Settings
 *
 * @arg toggle
 * @text Toggle on/off?
 * @type boolean
 * @default false
 * @desc Switches between on/off.
 *
 * @arg forceOn
 * @text Force on?
 * @type boolean
 * @default false
 * @desc Forces on.
 *
 * @arg forceOff
 * @text Force off?
 * @type boolean
 * @default false
 * @desc Forces off.
 *
 * @arg intensity
 * @text Intensity
 * @desc higher = more wavy
 * @type number
 * @decimals 2
 * @min -999999
 * @max 999999
 * @default 2.00
 *
 * @arg slide
 * @text Animation Settings
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg doSlide
 * @text Slide?
 * @type boolean
 * @default false
 * @parent slide
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg slideTime
 * @text Speed
 * @type number
 * @min -999999
 * @max 999999
 * @decimals 2
 * @default 40.00
 * @desc Frames it takes to slide between the changes.
 * @parent slide
 *
 * @command glitch
 * @text Glitch Settings
 *
 * @arg toggle
 * @text Toggle on/off?
 * @type boolean
 * @default false
 * @desc Switches between on/off.
 *
 * @arg forceOn
 * @text Force on?
 * @type boolean
 * @default false
 * @desc Forces on.
 *
 * @arg forceOff
 * @text Force off?
 * @type boolean
 * @default false
 * @desc Forces off.
 *
 * @arg intensity
 * @text Intensity
 * @desc higher = more wavy
 * @type number
 * @decimals 2
 * @min -999999
 * @max 999999
 * @default 2.00
 *
 * @arg slide
 * @text Animation Settings
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg doSlide
 * @text Slide?
 * @type boolean
 * @default false
 * @parent slide
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg slideTime
 * @text Speed
 * @type number
 * @min -999999
 * @max 999999
 * @decimals 2
 * @default 40.00
 * @desc Frames it takes to slide between the changes.
 * @parent slide
 *
 * @command bloom
 * @text Bloom Settings
 *
 * @arg toggle
 * @text Toggle on/off?
 * @type boolean
 * @default false
 * @desc Switches between on/off.
 *
 * @arg forceOn
 * @text Force on?
 * @type boolean
 * @default false
 * @desc Forces on.
 *
 * @arg forceOff
 * @text Force off?
 * @type boolean
 * @default false
 * @desc Forces off.
 *
 * @arg intensity
 * @text Intensity
 * @desc higher = more wavy
 * @type number
 * @decimals 2
 * @min -999999
 * @max 999999
 * @default 2.00
 *
 * @arg slide
 * @text Animation Settings
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg doSlide
 * @text Slide?
 * @type boolean
 * @default false
 * @parent slide
 * @desc Effectively slides the differences between the current and new settings.
 *
 * @arg slideTime
 * @text Speed
 * @type number
 * @min -999999
 * @max 999999
 * @decimals 2
 * @default 40.00
 * @desc Frames it takes to slide between the changes.
 * @parent slide
 *
 * @help
 *././././././././././././././././././././././././././././././././././././././

 * ./   ______ _____ _   _______ ______ _____
 * ./  |  ____|_   _| | |__   __|  ____|  __ \  Fun Filters
 * ./  | |__    | | | |    | |  | |__  | |__) | Beautiful FX
 * ./  |  __|   | | | |    | |  |  __| |  _  /  High Quality
 * ./  | |     _| |_| |____| |  | |____| | \ \
 * ./  |_|___ |_____|______|_|__|______|_|__\_\
 * ./  |  __ \ /\   / ____| |/ /  _| || |/_ |
 * ./  | |__) /  \ | |    | ' /  |_  __  _| |
 * ./  |  ___/ /\ \| |    |  <    _| || |_| |
 * ./  | |  / ____ \ |____| . \  |_  __  _| |
 * ./  |_| /_/    \_\_____|_|\_\   |_||_| |_|
 * ././././././././././././././././././././././././././././././././././././././
 *
 *
 * Thank you for downloading this filter pack! enjoy lots of すごい filters to
 * spice up your game! Make it shine with filters like fakeHDR for those
 * beautiful sunny days, create a solar flare effect with the bloom
 * and visualize the effects of being drunk, or sensing energy!
 *
 * --EASY TO USE--
 * Literally just drag and drop the "filters" folder to your plugins,
 * along with this js file of course, and check out the Plugin Command
 * settings! All filters are highly configurable, allowing you
 * to create a sliding transition between the two differences!
 *
 * Enjoy this plugin pack and make the best use of it!
 * Don't be afraid to play around with negative values too ;)
*/
/**
 * Function to floor values if the resulting decimal is less than .25,
 * and compares 2 values with this effect. Basically creating a 'near same'
 * effect.
 * @param v1
 * @param v2
 * @returns
 */
function __subCalc(v1, v2) {
    let chv1 = String(parseFloat(v1).toFixed(2)).split('.');
    let chv2 = String(parseFloat(v2).toFixed(2)).split('.');
    let ev1 = parseInt(chv1[1]);
    let ev2 = parseInt(chv2[1]);
    if (ev1 <= 25)
        ev1 = 0;
    if (ev2 <= 25)
        ev2 = 0;
    ev1 = Number(String(`${chv1[0]}.${ev1}`));
    ev2 = Number(String(`${chv2[0]}.${ev2}`));
    return { ev1, ev2, on: ev1 == ev2 };
}
/**
 * Plugin command: fakeHDR
 */
PluginManager.registerCommand('hw_filters', "fakeHDR", args => {
    try {
        args.intensity = parseInt(args.intensity);
        args.subdivider = parseInt(args.subdivider);
        args.slideTime = parseInt(args.slideTime);
        if (args.toggle === "true")
            $gameVariables.HWactiveFilters['fakeHDR'].__ON = !$gameVariables.HWactiveFilters['fakeHDR'].__ON;
        if (args.forceOn === "true") {
            $gameVariables.HWactiveFilters['fakeHDR'].__ON = true;
        }
        if (args.forceOff === "true") {
            $gameVariables.HWactiveFilters['fakeHDR'].__ON = false;
        }
        if (args.doSlide == "false") {
            $gameVariables.HWactiveFilters['fakeHDR'].__NEW.do = false;
            $gameVariables.HWactiveFilters['fakeHDR'].__NEW.active = 1;
            $gameVariables.HWactiveFilters['fakeHDR'].amnt = args.intensity;
            $gameVariables.HWactiveFilters['fakeHDR'].subdiv = args.subdivider;
            $gameVariables.HWactiveFilters['fakeHDR'].active = ($gameVariables.HWactiveFilters['fakeHDR'].__ON) ? 1 : 0;
        }
        else {
            if (!$gameVariables.HWactiveFilters['fakeHDR'].__NEW) {
                $gameVariables.HWactiveFilters['fakeHDR'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    subdiv: args.subdivider,
                    active: (1 - $gameVariables.HWactiveFilters['fakeHDR'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['fakeHDR'].amnt - args.intensity)) / (args.slideTime / Math.PI),
                    subdiv_add: (($gameVariables.HWactiveFilters['fakeHDR'].subdiv - args.subdivider)) / (args.slideTime / Math.PI),
                };
            }
            if ($gameVariables.HWactiveFilters['fakeHDR'].__NEW.amnt != args.intensity || $gameVariables.HWactiveFilters['fakeHDR'].__NEW.subdivider != args.subdivider) {
                $gameVariables.HWactiveFilters['fakeHDR'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    subdiv: args.subdivider,
                    active: (1 - $gameVariables.HWactiveFilters['fakeHDR'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['fakeHDR'].amnt - args.intensity)) / args.slideTime,
                    subdiv_add: (($gameVariables.HWactiveFilters['fakeHDR'].subdiv - args.subdivider)) / args.slideTime,
                };
            }
        }
    }
    catch {
    }
});
PluginManager.registerCommand('hw_filters', "drunk", args => {
    try {
        args.intensity = parseInt(args.intensity);
        if (args.toggle === "true")
            $gameVariables.HWactiveFilters['drunk'].__ON = !$gameVariables.HWactiveFilters['drunk'].__ON;
        if (args.forceOn === "true") {
            $gameVariables.HWactiveFilters['drunk'].__ON = true;
        }
        if (args.forceOff === "true") {
            $gameVariables.HWactiveFilters['drunk'].__ON = false;
        }
        if (args.doSlide == "false") {
            $gameVariables.HWactiveFilters['drunk'].__NEW.do = false;
            $gameVariables.HWactiveFilters['drunk'].__NEW.active = 1;
            $gameVariables.HWactiveFilters['drunk'].intensity = args.intensity;
        }
        else {
            if (!$gameVariables.HWactiveFilters['drunk'].__NEW) {
                $gameVariables.HWactiveFilters['drunk'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    active: (1 - $gameVariables.HWactiveFilters['drunk'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['drunk'].intensity - args.intensity)) / (args.slideTime / Math.PI),
                };
            }
            if ($gameVariables.HWactiveFilters['drunk'].__NEW.amnt != args.intensity || $gameVariables.HWactiveFilters['drunk'].__NEW.subdivider != args.subdivider) {
                $gameVariables.HWactiveFilters['drunk'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    active: (1 - $gameVariables.HWactiveFilters['drunk'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['drunk'].intensity - args.intensity)) / args.slideTime,
                };
            }
        }
    }
    catch {
    }
});
PluginManager.registerCommand('hw_filters', "glitch", args => {
    try {
        args.intensity = parseInt(args.intensity);
        if (args.toggle === "true")
            $gameVariables.HWactiveFilters['glitch'].__ON = !$gameVariables.HWactiveFilters['glitch'].__ON;
        if (args.forceOn === "true") {
            $gameVariables.HWactiveFilters['glitch'].__ON = true;
        }
        if (args.forceOff === "true") {
            $gameVariables.HWactiveFilters['glitch'].__ON = false;
        }
        if (args.doSlide == "false") {
            $gameVariables.HWactiveFilters['glitch'].__NEW.active = (1 - $gameVariables.HWactiveFilters['glitch'].active);
            $gameVariables.HWactiveFilters['glitch'].intensity = args.intensity;
        }
        else {
            if (!$gameVariables.HWactiveFilters['glitch'].__NEW) {
                $gameVariables.HWactiveFilters['glitch'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    active: (1 - $gameVariables.HWactiveFilters['glitch'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['glitch'].intensity - args.intensity)) / (args.slideTime / Math.PI),
                };
            }
            if ($gameVariables.HWactiveFilters['glitch'].__NEW.amnt != args.intensity || $gameVariables.HWactiveFilters['glitch'].__NEW.subdivider != args.subdivider) {
                $gameVariables.HWactiveFilters['glitch'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    active: (1 - $gameVariables.HWactiveFilters['glitch'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['glitch'].intensity - args.intensity)) / args.slideTime,
                };
            }
        }
    }
    catch {
    }
});
PluginManager.registerCommand('hw_filters', "bloom", args => {
    try {
        args.intensity = parseFloat(args.intensity);
        if (args.toggle === "true")
            $gameVariables.HWactiveFilters['bloom'].__ON = !$gameVariables.HWactiveFilters['bloom'].__ON;
        if (args.forceOn === "true") {
            $gameVariables.HWactiveFilters['bloom'].__ON = true;
        }
        if (args.forceOff === "true") {
            $gameVariables.HWactiveFilters['bloom'].__ON = false;
        }
        if (args.doSlide == "false") {
            $gameVariables.HWactiveFilters['bloom'].__NEW.do = false;
            $gameVariables.HWactiveFilters['bloom'].__NEW.active = 1;
            $gameVariables.HWactiveFilters['bloom'].intensity = args.intensity;
        }
        else {
            if (!$gameVariables.HWactiveFilters['bloom'].__NEW) {
                $gameVariables.HWactiveFilters['bloom'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    active: (1 - $gameVariables.HWactiveFilters['bloom'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['bloom'].intensity - args.intensity)) / (args.slideTime / Math.PI),
                };
            }
            if ($gameVariables.HWactiveFilters['bloom'].__NEW.amnt != args.intensity || $gameVariables.HWactiveFilters['bloom'].__NEW.subdivider != args.subdivider) {
                $gameVariables.HWactiveFilters['bloom'].__NEW = {
                    do: true,
                    amnt: args.intensity,
                    active: (1 - $gameVariables.HWactiveFilters['bloom'].active) / (args.slideTime / Math.PI),
                    amnt_add: (($gameVariables.HWactiveFilters['bloom'].intensity - args.intensity)) / args.slideTime,
                };
            }
        }
    }
    catch {
    }
});
/** CLASSES */
class HW {
    static activeFilters = {};
    HWactiveFilters;
    static async loadFilter(name, callback) {
        const load = ['default.vert', 'default.frag'];
        let loaded = {};

        const requests = load.map(async (file) => {
            const response = await fetch(`/js/plugins/filters/${name}/${file}`);
            if (response.ok) {
                loaded[`${file.split('.').pop()}`] = await response.text();
            }
        });
    
        await Promise.all(requests);
    
        if (Object.keys(loaded).length === load.length) {
            callback(loaded);
        }
    }
    static Filter = class {
        vert;
        frag;
        constructor(filterName, uniforms, ready = (filter) => {
        }) {
            HW.loadFilter(filterName, filter => {
                this.vert = filter.vert;
                this.frag = filter.frag;
                uniforms.delta = 0;
                uniforms.active = 0;
                uniforms.gameWidth = Graphics.width;
                uniforms.gameHeight = Graphics.height;
                uniforms.__ON = false;
                uniforms.__NEW = { do: false };
                if (!$gameVariables.HWactiveFilters[filterName]) {
                    $gameVariables.HWactiveFilters[filterName] = {};
                    for (let i in uniforms) {
                        /**
                         * For some mad jank reason, we have to do it this way.
                         * Else it copies uSampler and other stuff that can't
                         * be json parsed.
                         */
                        $gameVariables.HWactiveFilters[filterName][i] = uniforms[i];
                    }
                }
                const psh = new PIXI.Filter(this.vert, this.frag, uniforms);
                HW.activeFilters[filterName] = psh;
                HW.activeFilters[filterName].padding = Graphics.width;
                ready(psh);
            });
        }
    };
    static async updateFilters() {
        const pi60 = Math.PI / 60;
        try {
            for (let i in $gameVariables.HWactiveFilters) {
                const item = $gameVariables.HWactiveFilters[i];
                item.delta += pi60;
                HW.activeFilters[i].enabled = item.__ON;
                if (item.__NEW.do) {
                    switch (i) {
                        case 'fakeHDR':
                            (() => {
                                const itemAmount = __subCalc(item.amnt, item.__NEW.amnt);
                                const subAmount = __subCalc(item.subdiv, item.__NEW.subdiv);
                                if (itemAmount.on !== true) {
                                    item.amnt -= item.__NEW.amnt_add;
                                }
                                if (subAmount.on !== true) {
                                    item.subdiv -= item.__NEW.subdiv_add;
                                }
                                if (item.__ON && item.active < 1) {
                                    HW.activeFilters[i].enabled = item.__ON;
                                    item.active += item.__NEW.active;
                                }
                                else if (item.__OFF && item.active > 0) {
                                    HW.activeFilters[i].enabled = item.__ON;
                                    item.active -= item.__NEW.active;
                                }
                            })();
                            break;
                        case 'drunk':
                        case 'glitch':
                        case 'bloom':
                            (() => {
                                const itemAmount = __subCalc(item.intensity, item.__NEW.amnt);
                                if (itemAmount.on !== true) {
                                    item.intensity -= item.__NEW.amnt_add;
                                }
                                if (item.__ON && item.active < 1) {
                                    HW.activeFilters[i].enabled = item.__ON;
                                    item.active += item.__NEW.active;
                                }
                                else if (item.__OFF && item.active > 0) {
                                    HW.activeFilters[i].enabled = item.__ON;
                                    item.active -= item.__NEW.active;
                                }
                            })();
                            break;
                    }
                }
                else {
                    item.active = 1;
                    try {
                        item.intensity -= item.__NEW.amnt_add ?? 0;
                    }
                    catch {
                    }
                    try {
                        item.amnt -= item.__NEW.amnt_add ?? 0;
                    }
                    catch {
                    }
                    try {
                        item.subdiv -= item.__NEW.subdiv_add ?? 0;
                    }
                    catch {
                    }
                }
                if (HW.activeFilters[i].enabled) {
                    for (let j in item) {
                        /**
                         * nani tf we can't set just the whole thing.
                         * Probably something to do with the uniforms variable
                         * itself being a const? idk.
                         */
                        HW.activeFilters[i].uniforms[j] = item[j];
                    }
                    HW.activeFilters[i].uniforms.gameWidth = Graphics.width;
                    HW.activeFilters[i].uniforms.gameHeight = Graphics.height;
                }
            }
        }
        catch (e) {
            console.log(`A filter is in the process of being created or janked out.`);
        }
    }
}
Scene_Map = class extends Scene_Map {
    constructor(...args) {
        super(...args);
        if (!$gameVariables.HWactiveFilters)
            $gameVariables.HWactiveFilters = {};
    }
    createSpriteset() {
        super.createSpriteset();
        //Apply all filters
        (async () => {
            try {
                await (async () => {
                    this._spriteset._tilemap.filters = [];
                    new HW.Filter('drunk', {
                        intensity: 1.0,
                    }, filter => {
                        this._spriteset._tilemap.filters.push(filter);
                        new HW.Filter('glitch', {
                            intensity: 1,
                        }, filter => {
                            this._spriteset._tilemap.filters.push(filter);
                            new HW.Filter('bloom', {
                                intensity: 1,
                            }, filter => {
                                this._spriteset._tilemap.filters.push(filter);
                                new HW.Filter('fakeHDR', {
                                    amnt: 0,
                                    subdiv: 1000
                                }, filter => {
                                    this._spriteset._tilemap.filters.push(filter);
                                });
                            });
                        });
                    });
                })();
            } catch (e) {

            }
        })();
    }
    update() {
        super.update();
        HW.updateFilters();
    }
};
