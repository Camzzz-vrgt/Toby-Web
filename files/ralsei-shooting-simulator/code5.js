gdjs.sm_95endCode = {};
gdjs.sm_95endCode.localVariables = [];
gdjs.sm_95endCode.idToCallbackMap = new Map();
gdjs.sm_95endCode.GDNewTextObjects1= [];
gdjs.sm_95endCode.GDNewTextObjects2= [];
gdjs.sm_95endCode.GD_95951Objects1= [];
gdjs.sm_95endCode.GD_95951Objects2= [];
gdjs.sm_95endCode.GD_95952Objects1= [];
gdjs.sm_95endCode.GD_95952Objects2= [];
gdjs.sm_95endCode.GD_95953Objects1= [];
gdjs.sm_95endCode.GD_95953Objects2= [];
gdjs.sm_95endCode.GDmessgaeObjects1= [];
gdjs.sm_95endCode.GDmessgaeObjects2= [];
gdjs.sm_95endCode.GDgo_9595toObjects1= [];
gdjs.sm_95endCode.GDgo_9595toObjects2= [];
gdjs.sm_95endCode.GDcursorObjects1= [];
gdjs.sm_95endCode.GDcursorObjects2= [];


gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.sm_95endCode.GDcursorObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDgo_95959595toObjects1Objects = Hashtable.newFrom({"go_to": gdjs.sm_95endCode.GDgo_9595toObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.sm_95endCode.GDcursorObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.sm_95endCode.GDNewTextObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.sm_95endCode.GDcursorObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDgo_95959595toObjects1Objects = Hashtable.newFrom({"go_to": gdjs.sm_95endCode.GDgo_9595toObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.sm_95endCode.GDcursorObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.sm_95endCode.GDNewTextObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.sm_95endCode.GDcursorObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.sm_95endCode.GDNewTextObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.sm_95endCode.GDcursorObjects1});
gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDmessgaeObjects1Objects = Hashtable.newFrom({"messgae": gdjs.sm_95endCode.GDmessgaeObjects1});
gdjs.sm_95endCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsString() == "sm_p1");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.sm_95endCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("go_to"), gdjs.sm_95endCode.GDgo_9595toObjects1);
gdjs.copyArray(runtimeScene.getObjects("messgae"), gdjs.sm_95endCode.GDmessgaeObjects1);
{for(var i = 0, len = gdjs.sm_95endCode.GDgo_9595toObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDgo_9595toObjects1[i].setColor("233;229;229");
}
}
{for(var i = 0, len = gdjs.sm_95endCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDNewTextObjects1[i].setColor("233;229;229");
}
}
{for(var i = 0, len = gdjs.sm_95endCode.GDmessgaeObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDmessgaeObjects1[i].setColor("233;229;229");
}
}
{for(var i = 0, len = gdjs.sm_95endCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsString() == "sm_p2");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.sm_95endCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("go_to"), gdjs.sm_95endCode.GDgo_9595toObjects1);
gdjs.copyArray(runtimeScene.getObjects("messgae"), gdjs.sm_95endCode.GDmessgaeObjects1);
{for(var i = 0, len = gdjs.sm_95endCode.GDgo_9595toObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDgo_9595toObjects1[i].setColor("233;229;229");
}
}
{for(var i = 0, len = gdjs.sm_95endCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDNewTextObjects1[i].setColor("233;229;229");
}
}
{for(var i = 0, len = gdjs.sm_95endCode.GDmessgaeObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDmessgaeObjects1[i].setColor("87;87;87");
}
}
{for(var i = 0, len = gdjs.sm_95endCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("go_to"), gdjs.sm_95endCode.GDgo_9595toObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects, gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDgo_95959595toObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sm_95endCode.GDgo_9595toObjects1 */
{for(var i = 0, len = gdjs.sm_95endCode.GDgo_9595toObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDgo_9595toObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.sm_95endCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects, gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDNewTextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sm_95endCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.sm_95endCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.sm_95endCode.GDNewTextObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("go_to"), gdjs.sm_95endCode.GDgo_9595toObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects, gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDgo_95959595toObjects1Objects, false, runtimeScene, false);
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

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.sm_95endCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects, gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDNewTextObjects1Objects, false, runtimeScene, false);
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
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("sm_p1");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.sm_95endCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects, gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDNewTextObjects1Objects, false, runtimeScene, false);
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
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("sm_p2");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.sm_95endCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("messgae"), gdjs.sm_95endCode.GDmessgaeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDcursorObjects1Objects, gdjs.sm_95endCode.mapOfGDgdjs_9546sm_959595endCode_9546GDmessgaeObjects1Objects, false, runtimeScene, false);
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
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("sm_p2");
}
}

}


};

gdjs.sm_95endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sm_95endCode.GDNewTextObjects1.length = 0;
gdjs.sm_95endCode.GDNewTextObjects2.length = 0;
gdjs.sm_95endCode.GD_95951Objects1.length = 0;
gdjs.sm_95endCode.GD_95951Objects2.length = 0;
gdjs.sm_95endCode.GD_95952Objects1.length = 0;
gdjs.sm_95endCode.GD_95952Objects2.length = 0;
gdjs.sm_95endCode.GD_95953Objects1.length = 0;
gdjs.sm_95endCode.GD_95953Objects2.length = 0;
gdjs.sm_95endCode.GDmessgaeObjects1.length = 0;
gdjs.sm_95endCode.GDmessgaeObjects2.length = 0;
gdjs.sm_95endCode.GDgo_9595toObjects1.length = 0;
gdjs.sm_95endCode.GDgo_9595toObjects2.length = 0;
gdjs.sm_95endCode.GDcursorObjects1.length = 0;
gdjs.sm_95endCode.GDcursorObjects2.length = 0;

gdjs.sm_95endCode.eventsList0(runtimeScene);
gdjs.sm_95endCode.GDNewTextObjects1.length = 0;
gdjs.sm_95endCode.GDNewTextObjects2.length = 0;
gdjs.sm_95endCode.GD_95951Objects1.length = 0;
gdjs.sm_95endCode.GD_95951Objects2.length = 0;
gdjs.sm_95endCode.GD_95952Objects1.length = 0;
gdjs.sm_95endCode.GD_95952Objects2.length = 0;
gdjs.sm_95endCode.GD_95953Objects1.length = 0;
gdjs.sm_95endCode.GD_95953Objects2.length = 0;
gdjs.sm_95endCode.GDmessgaeObjects1.length = 0;
gdjs.sm_95endCode.GDmessgaeObjects2.length = 0;
gdjs.sm_95endCode.GDgo_9595toObjects1.length = 0;
gdjs.sm_95endCode.GDgo_9595toObjects2.length = 0;
gdjs.sm_95endCode.GDcursorObjects1.length = 0;
gdjs.sm_95endCode.GDcursorObjects2.length = 0;


return;

}

gdjs['sm_95endCode'] = gdjs.sm_95endCode;
