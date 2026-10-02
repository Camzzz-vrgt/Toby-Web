gdjs.BSgoCode = {};
gdjs.BSgoCode.localVariables = [];
gdjs.BSgoCode.idToCallbackMap = new Map();
gdjs.BSgoCode.GDNewSpriteObjects1= [];
gdjs.BSgoCode.GDNewSpriteObjects2= [];
gdjs.BSgoCode.GDNewPanelSpriteObjects1= [];
gdjs.BSgoCode.GDNewPanelSpriteObjects2= [];
gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1= [];
gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects2= [];
gdjs.BSgoCode.GDwhy_9595Objects1= [];
gdjs.BSgoCode.GDwhy_9595Objects2= [];
gdjs.BSgoCode.GDcursorObjects1= [];
gdjs.BSgoCode.GDcursorObjects2= [];


gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.BSgoCode.GDcursorObjects1});
gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDwhy_95959595Objects1Objects = Hashtable.newFrom({"why_": gdjs.BSgoCode.GDwhy_9595Objects1});
gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.BSgoCode.GDcursorObjects1});
gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDbru_95959595who_95959595is_95959595reading_95959595thisObjects1Objects = Hashtable.newFrom({"bru_who_is_reading_this": gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1});
gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.BSgoCode.GDcursorObjects1});
gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDwhy_95959595Objects1Objects = Hashtable.newFrom({"why_": gdjs.BSgoCode.GDwhy_9595Objects1});
gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.BSgoCode.GDcursorObjects1});
gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDbru_95959595who_95959595is_95959595reading_95959595thisObjects1Objects = Hashtable.newFrom({"bru_who_is_reading_this": gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1});
gdjs.BSgoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bru_who_is_reading_this"), gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.BSgoCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("why_"), gdjs.BSgoCode.GDwhy_9595Objects1);
{for(var i = 0, len = gdjs.BSgoCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.BSgoCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1.length ;i < len;++i) {
    gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.BSgoCode.GDwhy_9595Objects1.length ;i < len;++i) {
    gdjs.BSgoCode.GDwhy_9595Objects1[i].setColor("255;255;255");
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

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.BSgoCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("why_"), gdjs.BSgoCode.GDwhy_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects, gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDwhy_95959595Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BSgoCode.GDwhy_9595Objects1 */
{for(var i = 0, len = gdjs.BSgoCode.GDwhy_9595Objects1.length ;i < len;++i) {
    gdjs.BSgoCode.GDwhy_9595Objects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bru_who_is_reading_this"), gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.BSgoCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects, gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDbru_95959595who_95959595is_95959595reading_95959595thisObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1 */
{for(var i = 0, len = gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1.length ;i < len;++i) {
    gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.BSgoCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("why_"), gdjs.BSgoCode.GDwhy_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects, gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDwhy_95959595Objects1Objects, false, runtimeScene, false);
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

gdjs.copyArray(runtimeScene.getObjects("bru_who_is_reading_this"), gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.BSgoCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDcursorObjects1Objects, gdjs.BSgoCode.mapOfGDgdjs_9546BSgoCode_9546GDbru_95959595who_95959595is_95959595reading_95959595thisObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bs_1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(100);
}
}

}


};

gdjs.BSgoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BSgoCode.GDNewSpriteObjects1.length = 0;
gdjs.BSgoCode.GDNewSpriteObjects2.length = 0;
gdjs.BSgoCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.BSgoCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1.length = 0;
gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects2.length = 0;
gdjs.BSgoCode.GDwhy_9595Objects1.length = 0;
gdjs.BSgoCode.GDwhy_9595Objects2.length = 0;
gdjs.BSgoCode.GDcursorObjects1.length = 0;
gdjs.BSgoCode.GDcursorObjects2.length = 0;

gdjs.BSgoCode.eventsList0(runtimeScene);
gdjs.BSgoCode.GDNewSpriteObjects1.length = 0;
gdjs.BSgoCode.GDNewSpriteObjects2.length = 0;
gdjs.BSgoCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.BSgoCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects1.length = 0;
gdjs.BSgoCode.GDbru_9595who_9595is_9595reading_9595thisObjects2.length = 0;
gdjs.BSgoCode.GDwhy_9595Objects1.length = 0;
gdjs.BSgoCode.GDwhy_9595Objects2.length = 0;
gdjs.BSgoCode.GDcursorObjects1.length = 0;
gdjs.BSgoCode.GDcursorObjects2.length = 0;


return;

}

gdjs['BSgoCode'] = gdjs.BSgoCode;
