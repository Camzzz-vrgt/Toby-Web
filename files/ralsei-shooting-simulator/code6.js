gdjs.GameOverSMCode = {};
gdjs.GameOverSMCode.localVariables = [];
gdjs.GameOverSMCode.idToCallbackMap = new Map();
gdjs.GameOverSMCode.GDNewSpriteObjects1= [];
gdjs.GameOverSMCode.GDNewSpriteObjects2= [];
gdjs.GameOverSMCode.GDNewTextObjects1= [];
gdjs.GameOverSMCode.GDNewTextObjects2= [];
gdjs.GameOverSMCode.GDmenuObjects1= [];
gdjs.GameOverSMCode.GDmenuObjects2= [];
gdjs.GameOverSMCode.GDcursorObjects1= [];
gdjs.GameOverSMCode.GDcursorObjects2= [];


gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.GameOverSMCode.GDcursorObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.GameOverSMCode.GDmenuObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.GameOverSMCode.GDcursorObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.GameOverSMCode.GDNewTextObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.GameOverSMCode.GDcursorObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.GameOverSMCode.GDNewTextObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.GameOverSMCode.GDcursorObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.GameOverSMCode.GDNewTextObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.GameOverSMCode.GDcursorObjects1});
gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.GameOverSMCode.GDmenuObjects1});
gdjs.GameOverSMCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GameOverSMCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.GameOverSMCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.GameOverSMCode.GDmenuObjects1);
{for(var i = 0, len = gdjs.GameOverSMCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.GameOverSMCode.GDNewTextObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.GameOverSMCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.GameOverSMCode.GDmenuObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.GameOverSMCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.GameOverSMCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "AUDIO_DEFEAT.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.GameOverSMCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.GameOverSMCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects, gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDmenuObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverSMCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.GameOverSMCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.GameOverSMCode.GDmenuObjects1[i].setColor("248;231;28");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GameOverSMCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.GameOverSMCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects, gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDNewTextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverSMCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.GameOverSMCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.GameOverSMCode.GDNewTextObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GameOverSMCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.GameOverSMCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects, gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDNewTextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsString() == "sm_p1");
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelStartScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GameOverSMCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.GameOverSMCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects, gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDNewTextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsString() == "sm_p2");
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelStartScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.GameOverSMCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.GameOverSMCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDcursorObjects1Objects, gdjs.GameOverSMCode.mapOfGDgdjs_9546GameOverSMCode_9546GDmenuObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
}

}


};

gdjs.GameOverSMCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverSMCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverSMCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverSMCode.GDNewTextObjects1.length = 0;
gdjs.GameOverSMCode.GDNewTextObjects2.length = 0;
gdjs.GameOverSMCode.GDmenuObjects1.length = 0;
gdjs.GameOverSMCode.GDmenuObjects2.length = 0;
gdjs.GameOverSMCode.GDcursorObjects1.length = 0;
gdjs.GameOverSMCode.GDcursorObjects2.length = 0;

gdjs.GameOverSMCode.eventsList0(runtimeScene);
gdjs.GameOverSMCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverSMCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverSMCode.GDNewTextObjects1.length = 0;
gdjs.GameOverSMCode.GDNewTextObjects2.length = 0;
gdjs.GameOverSMCode.GDmenuObjects1.length = 0;
gdjs.GameOverSMCode.GDmenuObjects2.length = 0;
gdjs.GameOverSMCode.GDcursorObjects1.length = 0;
gdjs.GameOverSMCode.GDcursorObjects2.length = 0;


return;

}

gdjs['GameOverSMCode'] = gdjs.GameOverSMCode;
