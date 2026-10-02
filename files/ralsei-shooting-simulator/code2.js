gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDretryButtonObjects1= [];
gdjs.Game_32OverCode.GDretryButtonObjects2= [];
gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1= [];
gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects2= [];
gdjs.Game_32OverCode.GDcursorObjects1= [];
gdjs.Game_32OverCode.GDcursorObjects2= [];
gdjs.Game_32OverCode.GDFinalScoreObjects1= [];
gdjs.Game_32OverCode.GDFinalScoreObjects2= [];


gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDretryButtonObjects1Objects = Hashtable.newFrom({"retryButton": gdjs.Game_32OverCode.GDretryButtonObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Game_32OverCode.GDcursorObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcoming_95959595soon_95959595Objects1Objects = Hashtable.newFrom({"coming_soon_": gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Game_32OverCode.GDcursorObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Game_32OverCode.GDcursorObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDretryButtonObjects1Objects = Hashtable.newFrom({"retryButton": gdjs.Game_32OverCode.GDretryButtonObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Game_32OverCode.GDcursorObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcoming_95959595soon_95959595Objects1Objects = Hashtable.newFrom({"coming_soon_": gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.Game_32OverCode.GDFinalScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("coming_soon_"), gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Game_32OverCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("retryButton"), gdjs.Game_32OverCode.GDretryButtonObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDFinalScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDFinalScoreObjects1[i].getBehavior("Text").setText("final score:  " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDretryButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDretryButtonObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Game_32OverCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("retryButton"), gdjs.Game_32OverCode.GDretryButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDretryButtonObjects1Objects, gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClassicMode", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("coming_soon_"), gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Game_32OverCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcoming_95959595soon_95959595Objects1Objects, gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Game_32OverCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("retryButton"), gdjs.Game_32OverCode.GDretryButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects, gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDretryButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDretryButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDretryButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDretryButtonObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("coming_soon_"), gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Game_32OverCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcursorObjects1Objects, gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDcoming_95959595soon_95959595Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1[i].setColor("248;231;28");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "keyboard");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Game_32OverCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDcursorObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Game_32OverCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDcursorObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("keyboard");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, null);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("controller");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Any", null);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("controller");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("keyboard");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("retryButton"), gdjs.Game_32OverCode.GDretryButtonObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDretryButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDretryButtonObjects1[i].setColor("255;235;0");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("coming_soon_"), gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1[i].setColor("255;235;0");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "AUDIO_DEFEAT.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "left", "Up", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0.5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "left", "Down", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0.5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() < 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(1 / 30);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "B", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClassicMode", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("controller");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "B", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("controller");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDretryButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDretryButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1.length = 0;
gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects2.length = 0;
gdjs.Game_32OverCode.GDcursorObjects1.length = 0;
gdjs.Game_32OverCode.GDcursorObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalScoreObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDretryButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDretryButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects1.length = 0;
gdjs.Game_32OverCode.GDcoming_9595soon_9595Objects2.length = 0;
gdjs.Game_32OverCode.GDcursorObjects1.length = 0;
gdjs.Game_32OverCode.GDcursorObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalScoreObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
