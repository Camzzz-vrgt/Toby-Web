gdjs.pauseCode = {};
gdjs.pauseCode.localVariables = [];
gdjs.pauseCode.idToCallbackMap = new Map();
gdjs.pauseCode.GDtitleObjects1= [];
gdjs.pauseCode.GDtitleObjects2= [];
gdjs.pauseCode.GDbuton1Objects1= [];
gdjs.pauseCode.GDbuton1Objects2= [];
gdjs.pauseCode.GDbuton2Objects1= [];
gdjs.pauseCode.GDbuton2Objects2= [];
gdjs.pauseCode.GDbuton3Objects1= [];
gdjs.pauseCode.GDbuton3Objects2= [];
gdjs.pauseCode.GDbuton4Objects1= [];
gdjs.pauseCode.GDbuton4Objects2= [];
gdjs.pauseCode.GDcursorObjects1= [];
gdjs.pauseCode.GDcursorObjects2= [];
gdjs.pauseCode.GDbg2Objects1= [];
gdjs.pauseCode.GDbg2Objects2= [];
gdjs.pauseCode.GDNewSpriteObjects1= [];
gdjs.pauseCode.GDNewSpriteObjects2= [];


gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.pauseCode.GDcursorObjects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton1Objects1Objects = Hashtable.newFrom({"buton1": gdjs.pauseCode.GDbuton1Objects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.pauseCode.GDcursorObjects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton3Objects1Objects = Hashtable.newFrom({"buton3": gdjs.pauseCode.GDbuton3Objects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.pauseCode.GDcursorObjects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton4Objects1Objects = Hashtable.newFrom({"buton4": gdjs.pauseCode.GDbuton4Objects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.pauseCode.GDcursorObjects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton3Objects1Objects = Hashtable.newFrom({"buton3": gdjs.pauseCode.GDbuton3Objects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.pauseCode.GDcursorObjects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton4Objects1Objects = Hashtable.newFrom({"buton4": gdjs.pauseCode.GDbuton4Objects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.pauseCode.GDcursorObjects1});
gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton1Objects1Objects = Hashtable.newFrom({"buton1": gdjs.pauseCode.GDbuton1Objects1});
gdjs.pauseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("buton1"), gdjs.pauseCode.GDbuton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("buton3"), gdjs.pauseCode.GDbuton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("buton4"), gdjs.pauseCode.GDbuton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.pauseCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.pauseCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.pauseCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.pauseCode.GDbuton1Objects1.length ;i < len;++i) {
    gdjs.pauseCode.GDbuton1Objects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.pauseCode.GDbuton3Objects1.length ;i < len;++i) {
    gdjs.pauseCode.GDbuton3Objects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.pauseCode.GDbuton4Objects1.length ;i < len;++i) {
    gdjs.pauseCode.GDbuton4Objects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buton1"), gdjs.pauseCode.GDbuton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.pauseCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects, gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buton3"), gdjs.pauseCode.GDbuton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.pauseCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects, gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buton4"), gdjs.pauseCode.GDbuton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.pauseCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects, gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "settings");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buton3"), gdjs.pauseCode.GDbuton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.pauseCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects, gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.pauseCode.GDbuton3Objects1 */
{for(var i = 0, len = gdjs.pauseCode.GDbuton3Objects1.length ;i < len;++i) {
    gdjs.pauseCode.GDbuton3Objects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buton4"), gdjs.pauseCode.GDbuton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.pauseCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects, gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.pauseCode.GDbuton4Objects1 */
{for(var i = 0, len = gdjs.pauseCode.GDbuton4Objects1.length ;i < len;++i) {
    gdjs.pauseCode.GDbuton4Objects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buton1"), gdjs.pauseCode.GDbuton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.pauseCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDcursorObjects1Objects, gdjs.pauseCode.mapOfGDgdjs_9546pauseCode_9546GDbuton1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.pauseCode.GDbuton1Objects1 */
{for(var i = 0, len = gdjs.pauseCode.GDbuton1Objects1.length ;i < len;++i) {
    gdjs.pauseCode.GDbuton1Objects1[i].setColor("248;231;28");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "funny_ai.ogg", 1, false, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "funny_ai.ogg", 1, false, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


};

gdjs.pauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseCode.GDtitleObjects1.length = 0;
gdjs.pauseCode.GDtitleObjects2.length = 0;
gdjs.pauseCode.GDbuton1Objects1.length = 0;
gdjs.pauseCode.GDbuton1Objects2.length = 0;
gdjs.pauseCode.GDbuton2Objects1.length = 0;
gdjs.pauseCode.GDbuton2Objects2.length = 0;
gdjs.pauseCode.GDbuton3Objects1.length = 0;
gdjs.pauseCode.GDbuton3Objects2.length = 0;
gdjs.pauseCode.GDbuton4Objects1.length = 0;
gdjs.pauseCode.GDbuton4Objects2.length = 0;
gdjs.pauseCode.GDcursorObjects1.length = 0;
gdjs.pauseCode.GDcursorObjects2.length = 0;
gdjs.pauseCode.GDbg2Objects1.length = 0;
gdjs.pauseCode.GDbg2Objects2.length = 0;
gdjs.pauseCode.GDNewSpriteObjects1.length = 0;
gdjs.pauseCode.GDNewSpriteObjects2.length = 0;

gdjs.pauseCode.eventsList0(runtimeScene);
gdjs.pauseCode.GDtitleObjects1.length = 0;
gdjs.pauseCode.GDtitleObjects2.length = 0;
gdjs.pauseCode.GDbuton1Objects1.length = 0;
gdjs.pauseCode.GDbuton1Objects2.length = 0;
gdjs.pauseCode.GDbuton2Objects1.length = 0;
gdjs.pauseCode.GDbuton2Objects2.length = 0;
gdjs.pauseCode.GDbuton3Objects1.length = 0;
gdjs.pauseCode.GDbuton3Objects2.length = 0;
gdjs.pauseCode.GDbuton4Objects1.length = 0;
gdjs.pauseCode.GDbuton4Objects2.length = 0;
gdjs.pauseCode.GDcursorObjects1.length = 0;
gdjs.pauseCode.GDcursorObjects2.length = 0;
gdjs.pauseCode.GDbg2Objects1.length = 0;
gdjs.pauseCode.GDbg2Objects2.length = 0;
gdjs.pauseCode.GDNewSpriteObjects1.length = 0;
gdjs.pauseCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['pauseCode'] = gdjs.pauseCode;
