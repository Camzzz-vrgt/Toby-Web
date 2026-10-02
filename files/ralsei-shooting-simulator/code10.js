gdjs.settingsCode = {};
gdjs.settingsCode.localVariables = [];
gdjs.settingsCode.idToCallbackMap = new Map();
gdjs.settingsCode.GDidkObjects1= [];
gdjs.settingsCode.GDidkObjects2= [];
gdjs.settingsCode.GDno1Objects1= [];
gdjs.settingsCode.GDno1Objects2= [];
gdjs.settingsCode.GDselectionObjects1= [];
gdjs.settingsCode.GDselectionObjects2= [];
gdjs.settingsCode.GDcursorObjects1= [];
gdjs.settingsCode.GDcursorObjects2= [];
gdjs.settingsCode.GDidk2Objects1= [];
gdjs.settingsCode.GDidk2Objects2= [];
gdjs.settingsCode.GDiconObjects1= [];
gdjs.settingsCode.GDiconObjects2= [];
gdjs.settingsCode.GDestupidutObjects1= [];
gdjs.settingsCode.GDestupidutObjects2= [];
gdjs.settingsCode.GDno2Objects1= [];
gdjs.settingsCode.GDno2Objects2= [];
gdjs.settingsCode.GDselection2Objects1= [];
gdjs.settingsCode.GDselection2Objects2= [];
gdjs.settingsCode.GDidk3Objects1= [];
gdjs.settingsCode.GDidk3Objects2= [];
gdjs.settingsCode.GDXObjects1= [];
gdjs.settingsCode.GDXObjects2= [];
gdjs.settingsCode.GDvolumeTextObjects1= [];
gdjs.settingsCode.GDvolumeTextObjects2= [];
gdjs.settingsCode.GDyo_9595que_9595seObjects1= [];
gdjs.settingsCode.GDyo_9595que_9595seObjects2= [];
gdjs.settingsCode.GDvolumeObjects1= [];
gdjs.settingsCode.GDvolumeObjects2= [];
gdjs.settingsCode.GDbutLeftObjects1= [];
gdjs.settingsCode.GDbutLeftObjects2= [];
gdjs.settingsCode.GDbutRightObjects1= [];
gdjs.settingsCode.GDbutRightObjects2= [];
gdjs.settingsCode.GDbg3Objects1= [];
gdjs.settingsCode.GDbg3Objects2= [];


gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk2Objects1Objects = Hashtable.newFrom({"idk2": gdjs.settingsCode.GDidk2Objects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk2Objects1Objects = Hashtable.newFrom({"idk2": gdjs.settingsCode.GDidk2Objects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk3Objects1Objects = Hashtable.newFrom({"idk3": gdjs.settingsCode.GDidk3Objects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk3Objects1Objects = Hashtable.newFrom({"idk3": gdjs.settingsCode.GDidk3Objects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.settingsCode.GDXObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.settingsCode.GDXObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDbutLeftObjects1Objects = Hashtable.newFrom({"butLeft": gdjs.settingsCode.GDbutLeftObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.settingsCode.GDcursorObjects1});
gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDbutRightObjects1Objects = Hashtable.newFrom({"butRight": gdjs.settingsCode.GDbutRightObjects1});
gdjs.settingsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.settingsCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("butLeft"), gdjs.settingsCode.GDbutLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("butRight"), gdjs.settingsCode.GDbutRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.settingsCode.GDiconObjects1);
gdjs.copyArray(runtimeScene.getObjects("volume"), gdjs.settingsCode.GDvolumeObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.settingsCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.settingsCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDiconObjects1[i].rotate(25, runtimeScene);
}
}
{for(var i = 0, len = gdjs.settingsCode.GDXObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDXObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.settingsCode.GDvolumeObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDvolumeObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
}
}
{for(var i = 0, len = gdjs.settingsCode.GDbutRightObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDbutRightObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.settingsCode.GDbutLeftObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDbutLeftObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "yep");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.settingsCode.GDiconObjects1);
gdjs.copyArray(runtimeScene.getObjects("selection"), gdjs.settingsCode.GDselectionObjects1);
{for(var i = 0, len = gdjs.settingsCode.GDselectionObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselectionObjects1[i].getBehavior("Text").setText("YES");
}
}
{for(var i = 0, len = gdjs.settingsCode.GDselectionObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselectionObjects1[i].setColor("126;211;33");
}
}
{for(var i = 0, len = gdjs.settingsCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDiconObjects1[i].getBehavior("Animation").setAnimationName("hat");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "nuh uh");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.settingsCode.GDiconObjects1);
gdjs.copyArray(runtimeScene.getObjects("selection"), gdjs.settingsCode.GDselectionObjects1);
{for(var i = 0, len = gdjs.settingsCode.GDselectionObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselectionObjects1[i].getBehavior("Text").setText("YESN'T");
}
}
{for(var i = 0, len = gdjs.settingsCode.GDselectionObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselectionObjects1[i].setColor("255;0;29");
}
}
{for(var i = 0, len = gdjs.settingsCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDiconObjects1[i].getBehavior("Animation").setAnimationName("hatless");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "false");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("selection2"), gdjs.settingsCode.GDselection2Objects1);
{for(var i = 0, len = gdjs.settingsCode.GDselection2Objects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselection2Objects1[i].getBehavior("Text").setText("YES I DON'T");
}
}
{for(var i = 0, len = gdjs.settingsCode.GDselection2Objects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselection2Objects1[i].setColor("255;0;29");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "true");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("selection2"), gdjs.settingsCode.GDselection2Objects1);
{for(var i = 0, len = gdjs.settingsCode.GDselection2Objects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselection2Objects1[i].getBehavior("Text").setText("YES I DO");
}
}
{for(var i = 0, len = gdjs.settingsCode.GDselection2Objects1.length ;i < len;++i) {
    gdjs.settingsCode.GDselection2Objects1[i].setColor("126;211;33");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("idk2"), gdjs.settingsCode.GDidk2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "yep");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("nuh uh");
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("idk2"), gdjs.settingsCode.GDidk2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "nuh uh");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString("yep");
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1 / 30);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("idk3"), gdjs.settingsCode.GDidk3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "false");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("true");
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("idk3"), gdjs.settingsCode.GDidk3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDidk3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "true");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("false");
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.settingsCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDXObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.settingsCode.GDXObjects1 */
{for(var i = 0, len = gdjs.settingsCode.GDXObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDXObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.settingsCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDXObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("butLeft"), gdjs.settingsCode.GDbutLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDbutLeftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("butRight"), gdjs.settingsCode.GDbutRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.settingsCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDcursorObjects1Objects, gdjs.settingsCode.mapOfGDgdjs_9546settingsCode_9546GDbutRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("butRight"), gdjs.settingsCode.GDbutRightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(100);
}
{for(var i = 0, len = gdjs.settingsCode.GDbutRightObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDbutRightObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("butLeft"), gdjs.settingsCode.GDbutLeftObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}
{for(var i = 0, len = gdjs.settingsCode.GDbutLeftObjects1.length ;i < len;++i) {
    gdjs.settingsCode.GDbutLeftObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "bruh.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1 / 30);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.settingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.settingsCode.GDidkObjects1.length = 0;
gdjs.settingsCode.GDidkObjects2.length = 0;
gdjs.settingsCode.GDno1Objects1.length = 0;
gdjs.settingsCode.GDno1Objects2.length = 0;
gdjs.settingsCode.GDselectionObjects1.length = 0;
gdjs.settingsCode.GDselectionObjects2.length = 0;
gdjs.settingsCode.GDcursorObjects1.length = 0;
gdjs.settingsCode.GDcursorObjects2.length = 0;
gdjs.settingsCode.GDidk2Objects1.length = 0;
gdjs.settingsCode.GDidk2Objects2.length = 0;
gdjs.settingsCode.GDiconObjects1.length = 0;
gdjs.settingsCode.GDiconObjects2.length = 0;
gdjs.settingsCode.GDestupidutObjects1.length = 0;
gdjs.settingsCode.GDestupidutObjects2.length = 0;
gdjs.settingsCode.GDno2Objects1.length = 0;
gdjs.settingsCode.GDno2Objects2.length = 0;
gdjs.settingsCode.GDselection2Objects1.length = 0;
gdjs.settingsCode.GDselection2Objects2.length = 0;
gdjs.settingsCode.GDidk3Objects1.length = 0;
gdjs.settingsCode.GDidk3Objects2.length = 0;
gdjs.settingsCode.GDXObjects1.length = 0;
gdjs.settingsCode.GDXObjects2.length = 0;
gdjs.settingsCode.GDvolumeTextObjects1.length = 0;
gdjs.settingsCode.GDvolumeTextObjects2.length = 0;
gdjs.settingsCode.GDyo_9595que_9595seObjects1.length = 0;
gdjs.settingsCode.GDyo_9595que_9595seObjects2.length = 0;
gdjs.settingsCode.GDvolumeObjects1.length = 0;
gdjs.settingsCode.GDvolumeObjects2.length = 0;
gdjs.settingsCode.GDbutLeftObjects1.length = 0;
gdjs.settingsCode.GDbutLeftObjects2.length = 0;
gdjs.settingsCode.GDbutRightObjects1.length = 0;
gdjs.settingsCode.GDbutRightObjects2.length = 0;
gdjs.settingsCode.GDbg3Objects1.length = 0;
gdjs.settingsCode.GDbg3Objects2.length = 0;

gdjs.settingsCode.eventsList0(runtimeScene);
gdjs.settingsCode.GDidkObjects1.length = 0;
gdjs.settingsCode.GDidkObjects2.length = 0;
gdjs.settingsCode.GDno1Objects1.length = 0;
gdjs.settingsCode.GDno1Objects2.length = 0;
gdjs.settingsCode.GDselectionObjects1.length = 0;
gdjs.settingsCode.GDselectionObjects2.length = 0;
gdjs.settingsCode.GDcursorObjects1.length = 0;
gdjs.settingsCode.GDcursorObjects2.length = 0;
gdjs.settingsCode.GDidk2Objects1.length = 0;
gdjs.settingsCode.GDidk2Objects2.length = 0;
gdjs.settingsCode.GDiconObjects1.length = 0;
gdjs.settingsCode.GDiconObjects2.length = 0;
gdjs.settingsCode.GDestupidutObjects1.length = 0;
gdjs.settingsCode.GDestupidutObjects2.length = 0;
gdjs.settingsCode.GDno2Objects1.length = 0;
gdjs.settingsCode.GDno2Objects2.length = 0;
gdjs.settingsCode.GDselection2Objects1.length = 0;
gdjs.settingsCode.GDselection2Objects2.length = 0;
gdjs.settingsCode.GDidk3Objects1.length = 0;
gdjs.settingsCode.GDidk3Objects2.length = 0;
gdjs.settingsCode.GDXObjects1.length = 0;
gdjs.settingsCode.GDXObjects2.length = 0;
gdjs.settingsCode.GDvolumeTextObjects1.length = 0;
gdjs.settingsCode.GDvolumeTextObjects2.length = 0;
gdjs.settingsCode.GDyo_9595que_9595seObjects1.length = 0;
gdjs.settingsCode.GDyo_9595que_9595seObjects2.length = 0;
gdjs.settingsCode.GDvolumeObjects1.length = 0;
gdjs.settingsCode.GDvolumeObjects2.length = 0;
gdjs.settingsCode.GDbutLeftObjects1.length = 0;
gdjs.settingsCode.GDbutLeftObjects2.length = 0;
gdjs.settingsCode.GDbutRightObjects1.length = 0;
gdjs.settingsCode.GDbutRightObjects2.length = 0;
gdjs.settingsCode.GDbg3Objects1.length = 0;
gdjs.settingsCode.GDbg3Objects2.length = 0;


return;

}

gdjs['settingsCode'] = gdjs.settingsCode;
