/*:
 * @author Synrec/Kylestclr
 * @plugindesc v1.0 Adds a heart HUD to the map scene.
 * @target MZ
 * 
 * @command Damage Full
 * @desc Does a full heart damage.
 * 
 * @command Damage Half
 * @desc Does half heart damage.
 * 
 * @command Heal Full
 * @desc Recovers a full heart.
 * 
 * @command Heal Half
 * @desc Recovers half heart.
 * 
 * @command Obtain Full
 * @desc Obtain a full heart.
 * 
 * @command Obtain Half
 * @desc Obtain a half heart.
 * 
 * @command Show HUD
 * @desc Shows the HUD.
 * 
 * @command Hide HUD
 * @desc Hides the HUD.
 * 
 * @help
 * Requirements:
 * - Directory: img/heart/
 * 
 * Plugin Commands (MV Only):
 * - Damage_1: Does full heart damage
 * - Damage_0.5: Does half heart damage
 * - Heal_Full_Heart: Heals equivalent of one heart
 * - Obtain_Half_Heart: Increase Max hearts by 0.5
 * - Hide_HUDs: Hide Heart HUD
 * - Show_HUDs: Show Heart HUD
 * 
 * @param No Heart Event
 * @desc Common event to run
 * @type common_Event
 * @default 1
 * 
 * @param Default Max Hearts
 * @desc Number of hearts to start with
 * @type number
 * @decimals 1
 * @default 3
 * 
 * @param True Max Hearts
 * @desc Number of hearts max cannot exceed
 * @type number
 * @decimals 1
 * @default 5
 * 
 * @param HUD Configuration
 * @desc Configure the HUD using parameters below
 * 
 * @param HUD Graphic
 * @parent HUD Configuration
 * @desc Position setting for HUD
 * @type file
 * @dir img/heart/
 * @default HP_Bar
 * 
 * @param Heart half Background Graphic
 * @parent HUD Configuration
 * @desc Position setting for HUD
 * @type file
 * @dir img/heart/
 * @default Heart_Shadow_Half
 * 
 * @param Heart Full Background Graphic
 * @parent HUD Configuration
 * @desc Position setting for HUD
 * @type file
 * @dir img/heart/
 * @default Heart_Shadow_Full
 * 
 * @param Heart Full Graphic
 * @parent HUD Configuration
 * @desc Position setting for HUD
 * @type file
 * @dir img/heart/
 * @default Heart_Front_Full
 * 
 * @param Heart Half Graphic
 * @parent HUD Configuration
 * @desc Position setting for HUD
 * @type file
 * @dir img/heart/
 * @default Heart_Front_Half
 * 
 * @param HUD X
 * @parent HUD Configuration
 * @desc Position setting for HUD
 * @type number
 * @default 0
 * 
 * @param HUD Y
 * @parent HUD Configuration
 * @desc Position setting for HUD
 * @type number
 * @default 0
 * 
 * @param Heart Offset X
 * @parent HUD Configuration
 * @desc Position setting for heart start position
 * @type number
 * @min -99999
 * @default 0
 * 
 * @param Heart Offset Y
 * @parent HUD Configuration
 * @desc Position setting for heart start position
 * @type number
 * @min -99999
 * @default 0
 * 
 * @param Heart Pulse Configuration
 * @desc Configure the current heart pulse
 * 
 * @param Pulse Red Value
 * @parent Heart Pulse Configuration
 * @desc Color value
 * @type number
 * @default 0
 * 
 * @param Pulse Green Value
 * @parent Heart Pulse Configuration
 * @desc Color value
 * @type number
 * @default 0
 * 
 * @param Pulse Blue Value
 * @parent Heart Pulse Configuration
 * @desc Color value
 * @type number
 * @default 0
 * 
 * @param Pulse Max Value
 * @parent Heart Pulse Configuration
 * @desc Color value
 * @type number
 * @default 0
 * 
 * @param Pulse Rate Value
 * @parent Heart Pulse Configuration
 * @desc Color value
 * @type number
 * @default 1
 * 
 * @param Damage Configuration
 * @desc Configure screen effects on damage
 * @type none
 * 
 * @param Damage Half Flash
 * @parent Damage Configuration
 * @desc Screen flash configuration
 * @type struct<color>
 * @defalt {"Red":"0","Green":"0","Blue":"0","Alpha":"0","Duration":"0"}
 * 
 * @param Damage Half Sound Effect
 * @parent Damage Half Flash
 * @desc Sound effect to play
 * @type struct<se>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}
 * 
 * @param Damage Full Flash
 * @parent Damage Configuration
 * @desc Screen flash configuration
 * @type struct<color>
 * @defalt {"Red":"0","Green":"0","Blue":"0","Alpha":"0","Duration":"0"}
 * 
 * @param Damage Full Sound Effect
 * @parent Damage Full Flash
 * @desc Sound effect to play
 * @type struct<se>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}
 * 
 * @param Heal Half Flash
 * @parent Damage Configuration
 * @desc Screen flash configuration
 * @type struct<color>
 * @defalt {"Red":"0","Green":"0","Blue":"0","Alpha":"0","Duration":"0"}
 * 
 * @param Heal Half Sound Effect
 * @parent Heal Half Flash
 * @desc Sound effect to play
 * @type struct<se>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}
 * 
 * @param Heal Full Flash
 * @parent Damage Configuration
 * @desc Screen flash configuration
 * @type struct<color>
 * @defalt {"Red":"0","Green":"0","Blue":"0","Alpha":"0","Duration":"0"}
 * 
 * @param Heal Full Sound Effect
 * @parent Heal Full Flash
 * @desc Sound effect to play
 * @type struct<se>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}
 * 
 */
/*~struct~color:
 * 
 * @param Red
 * @desc Value of color
 * @type number
 * @default 0
 * 
 * @param Green
 * @desc Value of color
 * @type number
 * @default 0
 * 
 * @param Blue
 * @desc Value of color
 * @type number
 * @default 0
 * 
 * @param Alpha
 * @desc Value of color
 * @type number
 * @default 0
 * 
 * @param Duration
 * @desc Value of color
 * @type number
 * @default 0
 * 
 */
/*~struct~se:
 * 
 * @param name
 * @desc File used for sound effect
 * @type file
 * @dir audio/se/
 * 
 * @param volume
 * @desc Loudness
 * @type number
 * @default 90
 * 
 * @param pitch
 * @desc Tone
 * @type number
 * @default 100
 * 
 * @param pan
 * @desc Balance
 * @type number
 * @default 0
 * 
 */
const HEART_MZ_MODE = Utils.RPGMAKER_NAME == "MZ";
const Syn_HeartHud = {};
Syn_HeartHud.Plugin = PluginManager.parameters(`Synrec_HeartHud`);
Syn_HeartHud.NoHeartEvent = eval(Syn_HeartHud.Plugin['No Heart Event']) || 101;
Syn_HeartHud.StartMax = eval(Syn_HeartHud.Plugin['Default Max Hearts']) || 3;
Syn_HeartHud.TrueMax = eval(Syn_HeartHud.Plugin['True Max Hearts']) || 5;

Syn_HeartHud.HUD_X = eval(Syn_HeartHud.Plugin['HUD X']) || 0;
Syn_HeartHud.HUD_Y = eval(Syn_HeartHud.Plugin['HUD Y']) || 0;
Syn_HeartHud.HEART_HUD_X = eval(Syn_HeartHud.Plugin['Heart Offset X']) || 3;
Syn_HeartHud.HEART_HUD_Y = eval(Syn_HeartHud.Plugin['Heart Offset Y']) || 4;

Syn_HeartHud.HUD_NAME = Syn_HeartHud.Plugin['HUD Graphic'] || `HP_Bar`;
Syn_HeartHud.HUD_HALF_HEART_BACKGROUND_NAME = Syn_HeartHud.Plugin['Heart Half Background Graphic'] || `Heart_Shadow_Half`;
Syn_HeartHud.HUD_FULL_HEART_BACKGROUND_NAME = Syn_HeartHud.Plugin['Heart Full Background Graphic'] || `Heart_Shadow_Full`;
Syn_HeartHud.HUD_FULL_HEART_NAME = Syn_HeartHud.Plugin['Heart Full Graphic'] || `Heart_Front_Full`;
Syn_HeartHud.HUD_HALF_HEART_NAME = Syn_HeartHud.Plugin['Heart Half Graphic'] || `Heart_Front_Half`;

if(!Syn_HeartHud.HUD_NAME)throw new Error(`Please set Heart HUD in plugin parameters`);
if(!Syn_HeartHud.HUD_HALF_HEART_BACKGROUND_NAME)throw new Error(`Please set Heart Half Background in plugin parameters`);
if(!Syn_HeartHud.HUD_FULL_HEART_BACKGROUND_NAME)throw new Error(`Please set Heart Full Background in plugin parameters`);
if(!Syn_HeartHud.HUD_FULL_HEART_NAME)throw new Error(`Please set Heart Front Full in plugin parameters`);
if(!Syn_HeartHud.HUD_HALF_HEART_NAME)throw new Error(`Please set Heart Front Half in plugin parameters`);

ImageManager.loadHeart = function(filename) {
    return this.loadBitmap("img/heart/", filename);
};
ImageManager.loadHeart(Syn_HeartHud.HUD_NAME);
ImageManager.loadHeart(Syn_HeartHud.HUD_HALF_HEART_BACKGROUND_NAME);
ImageManager.loadHeart(Syn_HeartHud.HUD_FULL_HEART_BACKGROUND_NAME);
ImageManager.loadHeart(Syn_HeartHud.HUD_FULL_HEART_NAME);
ImageManager.loadHeart(Syn_HeartHud.HUD_HALF_HEART_NAME);

Syn_HeartHud.Red_Pulse = eval(Syn_HeartHud.Plugin['Pulse Red Value']) || 0;
Syn_HeartHud.Grn_Pulse = eval(Syn_HeartHud.Plugin['Pulse Green Value']) || 0;
Syn_HeartHud.Blu_Pulse = eval(Syn_HeartHud.Plugin['Pulse Blue Value']) || 0;
Syn_HeartHud.Alp_Pulse = eval(Syn_HeartHud.Plugin['Pulse Max Value']) || 0;
Syn_HeartHud.Rate_Pulse = eval(Syn_HeartHud.Plugin['Pulse Rate Value']) || 0;

Syn_HeartHud.DMG_Half_Flash = {};
Syn_HeartHud.DMG_Full_Flash = {};
Syn_HeartHud.HEAL_Half_Flash = {};
Syn_HeartHud.HEAL_Full_Flash = {};

if(HEART_MZ_MODE){
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Damage Full', ()=>{
        $gamePlayer.damageFull();
    })
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Damage Half', ()=>{
        $gamePlayer.damageHalf();
    })
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Heal Full', ()=>{
        $gamePlayer.healFull();
    })
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Heal Half', ()=>{
        $gamePlayer.healHalf();
    })
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Obtain Full', ()=>{
        $gamePlayer.obtainFull();
    })
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Obtain Half', ()=>{
        $gamePlayer.obtainHalf();
    })
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Show HUD', ()=>{
        $gamePlayer.showHeartHUD();
    })
    PluginManager.registerCommand(`Synrec_HeartHud`, 'Hide HUD', ()=>{
        $gamePlayer.hideHeartHUD();
    })
}

try{
    const flash = JSON.parse(Syn_HeartHud.Plugin['Damage Half Flash']);
    flash['Red'] = eval(flash['Red']);
    flash['Green'] = eval(flash['Green']);
    flash['Blue'] = eval(flash['Blue']);
    flash['Alpha'] = eval(flash['Alpha']);
    flash['Duration'] = eval(flash['Duration']);
    Syn_HeartHud.DMG_Half_Flash = flash;
}catch(e){
    console.warn(`Unable to parse Damage Half Flash data. Please check plugin parameters.`);
}

try{
    const flash = JSON.parse(Syn_HeartHud.Plugin['Heal Half Flash']);
    flash['Red'] = eval(flash['Red']);
    flash['Green'] = eval(flash['Green']);
    flash['Blue'] = eval(flash['Blue']);
    flash['Alpha'] = eval(flash['Alpha']);
    flash['Duration'] = eval(flash['Duration']);
    Syn_HeartHud.HEAL_Half_Flash = flash;
}catch(e){
    console.warn(`Unable to parse Heal Half Flash data. Please check plugin parameters.`);
}

try{
    const flash = JSON.parse(Syn_HeartHud.Plugin['Damage Full Flash']);
    flash['Red'] = eval(flash['Red']);
    flash['Green'] = eval(flash['Green']);
    flash['Blue'] = eval(flash['Blue']);
    flash['Alpha'] = eval(flash['Alpha']);
    flash['Duration'] = eval(flash['Duration']);
    Syn_HeartHud.DMG_Full_Flash = flash;
}catch(e){
    console.warn(`Unable to parse Damage Full Flash data. Please check plugin parameters.`);
}

try{
    const flash = JSON.parse(Syn_HeartHud.Plugin['Heal Full Flash']);
    flash['Red'] = eval(flash['Red']);
    flash['Green'] = eval(flash['Green']);
    flash['Blue'] = eval(flash['Blue']);
    flash['Alpha'] = eval(flash['Alpha']);
    flash['Duration'] = eval(flash['Duration']);
    Syn_HeartHud.HEAL_Full_Flash = flash;
}catch(e){
    console.warn(`Unable to parse Heal Full Flash data. Please check plugin parameters.`);
}

Syn_HeartHud.DMG_Half_SE = {};
Syn_HeartHud.DMG_Full_SE = {};
Syn_HeartHud.HEAL_Half_SE = {};
Syn_HeartHud.HEAL_Full_SE = {};

try{
    const se = JSON.parse(Syn_HeartHud.Plugin['Damage Half Sound Effect']);
    se.volume = eval(se.volume);
    se.pitch = eval(se.pitch);
    se.pan = eval(se.pan);
    Syn_HeartHud.DMG_Half_SE = se;
}catch(e){
    console.warn(`Unable to parse Damage Half Sound Effect. Please check plugin parameters.`);
}

try{
    const se = JSON.parse(Syn_HeartHud.Plugin['Heal Half Sound Effect']);
    se.volume = eval(se.volume);
    se.pitch = eval(se.pitch);
    se.pan = eval(se.pan);
    Syn_HeartHud.HEAL_Half_SE = se;
}catch(e){
    console.warn(`Unable to parse Heal Half Sound Effect. Please check plugin parameters.`);
}

try{
    const se = JSON.parse(Syn_HeartHud.Plugin['Damage Full Sound Effect']);
    se.volume = eval(se.volume);
    se.pitch = eval(se.pitch);
    se.pan = eval(se.pan);
    Syn_HeartHud.DMG_Full_SE = se;
}catch(e){
    console.warn(`Unable to parse Damage Full Sound Effect. Please check plugin parameters.`);
}

try{
    const se = JSON.parse(Syn_HeartHud.Plugin['Heal FUll Sound Effect']);
    se.volume = eval(se.volume);
    se.pitch = eval(se.pitch);
    se.pan = eval(se.pan);
    Syn_HeartHud.HEAL_Full_SE = se;
}catch(e){
    console.warn(`Unable to parse Heal Full Sound Effect. Please check plugin parameters.`);
}

function Sprite_Heart(){
    this.initialize(...arguments);
}

Sprite_Heart.prototype = Object.create(Sprite.prototype);
Sprite_Heart.prototype.constructor = Sprite_Heart;

Sprite_Heart.prototype.initialize = function(value, shadow){
    Sprite.prototype.initialize.call(this);
    this._value = value;
    if(value % 1 != 0){
        this.bitmap = shadow ? ImageManager.loadHeart(Syn_HeartHud.HUD_HALF_HEART_BACKGROUND_NAME) : ImageManager.loadHeart(Syn_HeartHud.HUD_HALF_HEART_NAME);
    }else{
        this.bitmap = shadow ? ImageManager.loadHeart(Syn_HeartHud.HUD_FULL_HEART_BACKGROUND_NAME) : ImageManager.loadHeart(Syn_HeartHud.HUD_FULL_HEART_NAME);
    }
}

function Sprite_HeartHud(){
    this.initialize(...arguments);
}

Sprite_HeartHud.prototype = Object.create(Sprite.prototype);
Sprite_HeartHud.prototype.constructor = Sprite_HeartHud;

Sprite_HeartHud.prototype.initialize = function(current, max, maxis){
    Sprite.prototype.initialize.call(this);
    this._max_hearts = max || Syn_HeartHud.StartMax;
    this._hearts = current || Syn_HeartHud.StartMax;
    this._true_max = maxis || Syn_HeartHud.TrueMax;
    if(this._max_hearts > this._true_max){
        this._max_hearts = this._true_max;
    }
    this._no_heart_event = Syn_HeartHud.NoHeartEvent;
    const x = Syn_HeartHud.HUD_X;
    const y = Syn_HeartHud.HUD_Y;
    this.move(x,y);
    this.createChildLayers();
}

Sprite_HeartHud.prototype.createChildLayers = function(){
    this.createBackgroundHUD();
    this.createHeartLayer();
}

Sprite_HeartHud.prototype.createBackgroundHUD = function(){
    this._background = new Sprite();
    this._background.bitmap = ImageManager.loadHeart(Syn_HeartHud.HUD_NAME);
    this.addChild(this._background);
}

Sprite_HeartHud.prototype.createHeartLayer = function(){
    this._heartLayer = new Sprite();
    this._heartLayer.x = Syn_HeartHud.HEART_HUD_X;
    this._heartLayer.y = Syn_HeartHud.HEART_HUD_Y;
    this._background.addChild(this._heartLayer);
    this._shadow_hearts = [];
    this._color_hearts = [];
}

Sprite_HeartHud.prototype.update = function(){
    Sprite.prototype.update.call(this);
    this.updateHeartSync();
    this.updateMaxHeartDraw();
    this.updateCurrentHeartDraw();
    this.updateSortShadowColor();
    this.updateFlashCurrent();
}

Sprite_HeartHud.prototype.updateHeartSync = function(){
    this.visible = $gamePlayer.heartHUD();
    this._hearts = $gamePlayer.hearts();
    this._max_hearts = $gamePlayer.maxHearts();
    this._true_max = $gamePlayer.maxHeartsTrue();
}

Sprite_HeartHud.prototype.updateMaxHeartDraw = function(){
    const max = Math.min(this._true_max, this._max_hearts);
    if(this._shadow_max != max){
        const bitmap = ImageManager.loadHeart(Syn_HeartHud.HUD_FULL_HEART_BACKGROUND_NAME);
        const x = Syn_HeartHud.HEART_HUD_X;
        const y = Syn_HeartHud.HEART_HUD_Y;
        this._shadow_hearts.forEach((heart)=>{
            if(heart){
                heart.parent.removeChild(heart);
                heart.destroy();
                delete heart;
            }
        })
        this._shadow_hearts = [];
        const max_draw = Math.ceil(max);
        let index = 0;
        while(index < max_draw){
            const rem = Math.abs(max - index);
            if(rem >= 1){
                const dx = x + (bitmap.width * index);
                const dy = y;
                const shadow_heart = new Sprite_Heart(1, true);
                shadow_heart.move(dx,dy);
                this._heartLayer.addChild(shadow_heart);
                this._shadow_hearts.push(shadow_heart);
            }else{
                const dx = x + (bitmap.width * index);
                const dy = y;
                const shadow_heart = new Sprite_Heart(0.5, true);
                shadow_heart.move(dx,dy);
                this._heartLayer.addChild(shadow_heart);
                this._shadow_hearts.push(shadow_heart);
            }
            index++;
        }
        this._shadow_max = max;
    }
}

Sprite_HeartHud.prototype.updateCurrentHeartDraw = function(){
    const current = Math.min(this._true_max, this._hearts);
    if(this._color_cur != current){
        const bitmap = ImageManager.loadHeart(Syn_HeartHud.HUD_FULL_HEART_BACKGROUND_NAME);
        const x = Syn_HeartHud.HEART_HUD_X;
        const y = Syn_HeartHud.HEART_HUD_Y;
        this._color_hearts.forEach((heart)=>{
            if(heart){
                heart.parent.removeChild(heart);
                heart.destroy();
                delete heart;
            }
        })
        this._color_hearts = [];
        const max_draw = Math.ceil(current);
        let index = 0;
        while(index < max_draw){
            const rem = Math.abs(current - index);
            if(rem >= 1){
                const dx = x + (bitmap.width * index);
                const dy = y;
                const color_heart = new Sprite_Heart(1);
                color_heart.move(dx,dy);
                this._heartLayer.addChild(color_heart);
                this._color_hearts.push(color_heart);
            }else{
                const dx = x + (bitmap.width * index);
                const dy = y;
                const color_heart = new Sprite_Heart(0.5);
                color_heart.move(dx,dy);
                this._heartLayer.addChild(color_heart);
                this._color_hearts.push(color_heart);
            }
            index++;
        }
        this._color_cur = current;
    }
}

Sprite_HeartHud.prototype.updateSortShadowColor = function(){
    const heart_layer = this._heartLayer;
    const shadows = this._shadow_hearts;
    const colors = this._color_hearts
    heart_layer.children.sort((a,b)=>{
        if(shadows.includes(a) && colors.includes(b)){
            return -1;
        }
        if(colors.includes(a) && shadows.includes(b)){
            return 1;
        }
    })
}

Sprite_HeartHud.prototype.updateFlashCurrent = function(){
    if(isNaN(this._blend_value))this._blend_value = 125;
    const colors = this._color_hearts;
    const index = colors.length - 1;
    if(!colors[index])return;
    const r = Syn_HeartHud.Red_Pulse;
    const g = Syn_HeartHud.Grn_Pulse;
    const b = Syn_HeartHud.Blu_Pulse;
    const a = Syn_HeartHud.Alp_Pulse;
    const rate = Syn_HeartHud.Rate_Pulse;
    if(this._incBlend){
        this._blend_value += rate;
        colors[index].setBlendColor([r, g, b, this._blend_value])
        if(this._blend_value >= a){
            this._blend_value = a;
            this._incBlend = false;
        }
    }else{
        this._blend_value -= rate;
        colors[index].setBlendColor([r, g, b, this._blend_value])
        if(this._blend_value <= 0){
            this._blend_value = 0;
            this._incBlend = true;
        }
    }
}

Syn_HeartHud_GmPlyr_InitMems = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
    Syn_HeartHud_GmPlyr_InitMems.call(this);
    this._hearts = Syn_HeartHud.StartMax;
    this._max_hearts = Syn_HeartHud.StartMax;
    this._true_max = Syn_HeartHud.TrueMax;
    this._heart_hud = true;
    this._heart_flash = true;
    this._heart_se = true;
}

Syn_HeartHud_GmPlyr_Updt = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
    Syn_HeartHud_GmPlyr_Updt.call(this, sceneActive);
    this.updateZeroHearts();
}

Game_Player.prototype.updateZeroHearts = function(){
    if(!this.canMove() || $gameTemp.isCommonEventReserved())return;
    if(this._hearts <= 0){
        const event_id = Syn_HeartHud.NoHeartEvent;
        $gameTemp.reserveCommonEvent(event_id);
    }
}

Game_Player.prototype.correctHeartValue = function(){
    if(this._hearts % 1 != 0 && this._hearts % 1 != 0.5){
        const error_str = (this._hearts).toString();
        const error_value = Number(error_str.split('.')[1]);
        const base_num = Number(error_str.split('.')[0]);
        if(!isNaN(error_value)){
            if(error_value > 2.5){
                this._hearts = base_num + 0.5;
            }else{
                this._hearts = base_num;
            }
        }else{
            this._hearts = isNaN(base_num) ? 0 : base_num;
        }
    }
    if(this._max_hearts < 0.5)this._max_hearts = 0.5;
    if(this._max_hearts > this._true_max)this._max_hearts = this._true_max;
    if(this._hearts < 0)this._hearts = 0;
    if(this._hearts > this._max_hearts)this._hearts = this._max_hearts;
}

Game_Player.prototype.damageHalf = function(){
    if(this._hearts <= 0)return;
    this._hearts -= 0.5;
    const flash = Syn_HeartHud.DMG_Half_Flash;
    const se = Syn_HeartHud.DMG_Half_SE;
    if(
        this._heart_flash &&
        flash['Duration'] > 0 &&
        !isNaN(flash['Duration'])
    ){
        const red = flash['Red'];
        const green = flash['Green'];
        const blue = flash['Blue'];
        const alpha = flash['Alpha'];
        const duration = flash['Duration'];
        const flash_arr = [red,green,blue,alpha];
        $gameScreen.startFlash(flash_arr, duration);
    }
    if(
        this._heart_se &&
        se.name
    ){
        AudioManager.playSe(se);
    }
    this.correctHeartValue();
}

Game_Player.prototype.damageFull = function(){
    if(this._hearts <= 0)return;
    this._hearts -= 1;
    const flash = Syn_HeartHud.DMG_Full_Flash;
    const se = Syn_HeartHud.DMG_Full_SE;
    if(
        this._heart_flash &&
        flash['Duration'] > 0 &&
        !isNaN(flash['Duration'])
    ){
        const red = flash['Red'];
        const green = flash['Green'];
        const blue = flash['Blue'];
        const alpha = flash['Alpha'];
        const duration = flash['Duration'];
        const flash_arr = [red,green,blue,alpha];
        $gameScreen.startFlash(flash_arr, duration);
    }
    if(
        this._heart_se &&
        se.name
    ){
        AudioManager.playSe(se);
    }
    this.correctHeartValue();
}

Game_Player.prototype.healHalf = function(){
    if(this._hearts >= this._max_hearts)return;
    this._hearts += 0.5;
    const flash = Syn_HeartHud.HEAL_Half_Flash;
    const se = Syn_HeartHud.HEAL_Half_SE;
    if(
        this._heart_flash &&
        flash['Duration'] > 0 &&
        !isNaN(flash['Duration'])
    ){
        const red = flash['Red'];
        const green = flash['Green'];
        const blue = flash['Blue'];
        const alpha = flash['Alpha'];
        const duration = flash['Duration'];
        const flash_arr = [red,green,blue,alpha];
        $gameScreen.startFlash(flash_arr, duration);
    }
    if(
        this._heart_se &&
        se.name
    ){
        AudioManager.playSe(se);
    }
    this.correctHeartValue();
}

Game_Player.prototype.healFull = function(){
    if(this._hearts >= this._max_hearts)return;
    this._hearts += 1;
    const flash = Syn_HeartHud.HEAL_Full_Flash;
    const se = Syn_HeartHud.HEAL_Full_SE;
    if(
        this._heart_flash &&
        flash['Duration'] > 0 &&
        !isNaN(flash['Duration'])
    ){
        const red = flash['Red'];
        const green = flash['Green'];
        const blue = flash['Blue'];
        const alpha = flash['Alpha'];
        const duration = flash['Duration'];
        const flash_arr = [red,green,blue,alpha];
        $gameScreen.startFlash(flash_arr, duration);
    }
    if(
        this._heart_se &&
        se.name
    ){
        AudioManager.playSe(se);
    }
    this.correctHeartValue();
}

Game_Player.prototype.obtainHalf = function(){
    this._max_hearts += 0.5;
    this.correctHeartValue();
}

Game_Player.prototype.obtainFull = function(){
    this._max_hearts += 1;
    this.correctHeartValue();
}

Game_Player.prototype.showHeartHUD = function(){
    this._heart_hud = true;
}

Game_Player.prototype.hideHeartHUD = function(){
    this._heart_hud = false;
}

Game_Player.prototype.heartHUD = function(){
    return this._heart_hud;
}

Game_Player.prototype.hearts = function(){
    return this._hearts;
}

Game_Player.prototype.maxHearts = function(){
    return this._max_hearts;
}

Game_Player.prototype.maxHeartsTrue = function(){
    return this._true_max;
}

Syn_HeartHud_GmIntrp_PlugCmd = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Syn_HeartHud_GmIntrp_PlugCmd.call(this,command, args);
    if(command == 'Damage_1')$gamePlayer.damageFull();
    if(command == 'Damage_0.5')$gamePlayer.damageHalf();
    if(command == 'Heal_Half_Heart')$gamePlayer.healHalf();
    if(command == 'Heal_Full_Heart')$gamePlayer.healFull();
    if(command == 'Obtain_Half_Heart')$gamePlayer.obtainHalf();
    if(command == 'Obtain_Full_Heart')$gamePlayer.obtainFull();
    if(command == 'Show_HUDs'){
        $gamePlayer.showHeartHUD();
    }
    if(command == 'Hide_HUDs'){
        $gamePlayer.hideHeartHUD();
    }
}

Syn_HeartHud_ScnMap_CrtDispObjs = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function() {
    Syn_HeartHud_ScnMap_CrtDispObjs.call(this);
    this.createHeartHUD();
}

Scene_Map.prototype.createHeartHUD = function(){
    const hearts = $gamePlayer.hearts();
    const max_hearts = $gamePlayer.maxHearts();
    const true_max = $gamePlayer.maxHeartsTrue();
    this._heartHUD = new Sprite_HeartHud(hearts, max_hearts, true_max);
    this.addChild(this._heartHUD);
}