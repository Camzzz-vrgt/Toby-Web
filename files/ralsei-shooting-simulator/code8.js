gdjs.LevelSeCode = {};
gdjs.LevelSeCode.localVariables = [];
gdjs.LevelSeCode.idToCallbackMap = new Map();
gdjs.LevelSeCode.GDch1Objects1= [];
gdjs.LevelSeCode.GDch1Objects2= [];
gdjs.LevelSeCode.GDch2Objects1= [];
gdjs.LevelSeCode.GDch2Objects2= [];
gdjs.LevelSeCode.GDch3Objects1= [];
gdjs.LevelSeCode.GDch3Objects2= [];
gdjs.LevelSeCode.GDch4Objects1= [];
gdjs.LevelSeCode.GDch4Objects2= [];
gdjs.LevelSeCode.GDidkObjects1= [];
gdjs.LevelSeCode.GDidkObjects2= [];
gdjs.LevelSeCode.GDXObjects1= [];
gdjs.LevelSeCode.GDXObjects2= [];
gdjs.LevelSeCode.GDcursorObjects1= [];
gdjs.LevelSeCode.GDcursorObjects2= [];
gdjs.LevelSeCode.GDiconObjects1= [];
gdjs.LevelSeCode.GDiconObjects2= [];
gdjs.LevelSeCode.GDnext_9595pageObjects1= [];
gdjs.LevelSeCode.GDnext_9595pageObjects2= [];
gdjs.LevelSeCode.GDbackgroundObjects1= [];
gdjs.LevelSeCode.GDbackgroundObjects2= [];


gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.LevelSeCode.GDcursorObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch1Objects1Objects = Hashtable.newFrom({"ch1": gdjs.LevelSeCode.GDch1Objects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.LevelSeCode.GDcursorObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch2Objects1Objects = Hashtable.newFrom({"ch2": gdjs.LevelSeCode.GDch2Objects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.LevelSeCode.GDcursorObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.LevelSeCode.GDXObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.LevelSeCode.GDcursorObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch1Objects1Objects = Hashtable.newFrom({"ch1": gdjs.LevelSeCode.GDch1Objects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.LevelSeCode.GDcursorObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch2Objects1Objects = Hashtable.newFrom({"ch2": gdjs.LevelSeCode.GDch2Objects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.LevelSeCode.GDcursorObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.LevelSeCode.GDXObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.LevelSeCode.GDcursorObjects1});
gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDnext_95959595pageObjects1Objects = Hashtable.newFrom({"next_page": gdjs.LevelSeCode.GDnext_9595pageObjects1});
gdjs.LevelSeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "choose_your_map.ogg", true, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.LevelSeCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("ch1"), gdjs.LevelSeCode.GDch1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ch2"), gdjs.LevelSeCode.GDch2Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.LevelSeCode.GDiconObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDch1Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch1Objects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDch2Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch2Objects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDXObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDXObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ch1"), gdjs.LevelSeCode.GDch1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects, gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSeCode.GDch1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.LevelSeCode.GDiconObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDch1Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch1Objects1[i].setColor("248;231;28");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ch2"), gdjs.LevelSeCode.GDch2Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects, gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSeCode.GDch2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.LevelSeCode.GDiconObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDch2Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch2Objects1[i].setColor("248;231;28");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.LevelSeCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects, gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDXObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSeCode.GDXObjects1 */
{for(var i = 0, len = gdjs.LevelSeCode.GDXObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDXObjects1[i].setColor("248;231;28");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ch1"), gdjs.LevelSeCode.GDch1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects, gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
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

gdjs.copyArray(runtimeScene.getObjects("ch2"), gdjs.LevelSeCode.GDch2Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects, gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDch2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
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

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.LevelSeCode.GDXObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects, gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDXObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
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
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.LevelSeCode.GDXObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDXObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDXObjects1[i].setColor("255;235;0");
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
gdjs.copyArray(runtimeScene.getObjects("ch1"), gdjs.LevelSeCode.GDch1Objects1);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.LevelSeCode.GDiconObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDch1Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch1Objects1[i].setColor("255;235;0");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ch2"), gdjs.LevelSeCode.GDch2Objects1);
gdjs.copyArray(runtimeScene.getObjects("icon"), gdjs.LevelSeCode.GDiconObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDch2Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch2Objects1[i].setColor("255;235;0");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDiconObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDiconObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
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
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("controller");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() > 2);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.LevelSeCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDcursorObjects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDcursorObjects1[i].hide(false);
}
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
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("keyboard");
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
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "B", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sm_p1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("controller");
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
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ch1"), gdjs.LevelSeCode.GDch1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ch2"), gdjs.LevelSeCode.GDch2Objects1);
gdjs.copyArray(runtimeScene.getObjects("idk"), gdjs.LevelSeCode.GDidkObjects1);
{for(var i = 0, len = gdjs.LevelSeCode.GDch1Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch1Objects1[i].getBehavior("Text").setText("chapter 1- tutorial");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDch2Objects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDch2Objects1[i].getBehavior("Text").setText("chapter 2 - garden of illusions (W.I.Pes)");
}
}
{for(var i = 0, len = gdjs.LevelSeCode.GDidkObjects1.length ;i < len;++i) {
    gdjs.LevelSeCode.GDidkObjects1[i].getBehavior("Text").setText("choose the level");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LevelSeCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_page"), gdjs.LevelSeCode.GDnext_9595pageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDcursorObjects1Objects, gdjs.LevelSeCode.mapOfGDgdjs_9546LevelSeCode_9546GDnext_95959595pageObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


};

gdjs.LevelSeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSeCode.GDch1Objects1.length = 0;
gdjs.LevelSeCode.GDch1Objects2.length = 0;
gdjs.LevelSeCode.GDch2Objects1.length = 0;
gdjs.LevelSeCode.GDch2Objects2.length = 0;
gdjs.LevelSeCode.GDch3Objects1.length = 0;
gdjs.LevelSeCode.GDch3Objects2.length = 0;
gdjs.LevelSeCode.GDch4Objects1.length = 0;
gdjs.LevelSeCode.GDch4Objects2.length = 0;
gdjs.LevelSeCode.GDidkObjects1.length = 0;
gdjs.LevelSeCode.GDidkObjects2.length = 0;
gdjs.LevelSeCode.GDXObjects1.length = 0;
gdjs.LevelSeCode.GDXObjects2.length = 0;
gdjs.LevelSeCode.GDcursorObjects1.length = 0;
gdjs.LevelSeCode.GDcursorObjects2.length = 0;
gdjs.LevelSeCode.GDiconObjects1.length = 0;
gdjs.LevelSeCode.GDiconObjects2.length = 0;
gdjs.LevelSeCode.GDnext_9595pageObjects1.length = 0;
gdjs.LevelSeCode.GDnext_9595pageObjects2.length = 0;
gdjs.LevelSeCode.GDbackgroundObjects1.length = 0;
gdjs.LevelSeCode.GDbackgroundObjects2.length = 0;

gdjs.LevelSeCode.eventsList0(runtimeScene);
gdjs.LevelSeCode.GDch1Objects1.length = 0;
gdjs.LevelSeCode.GDch1Objects2.length = 0;
gdjs.LevelSeCode.GDch2Objects1.length = 0;
gdjs.LevelSeCode.GDch2Objects2.length = 0;
gdjs.LevelSeCode.GDch3Objects1.length = 0;
gdjs.LevelSeCode.GDch3Objects2.length = 0;
gdjs.LevelSeCode.GDch4Objects1.length = 0;
gdjs.LevelSeCode.GDch4Objects2.length = 0;
gdjs.LevelSeCode.GDidkObjects1.length = 0;
gdjs.LevelSeCode.GDidkObjects2.length = 0;
gdjs.LevelSeCode.GDXObjects1.length = 0;
gdjs.LevelSeCode.GDXObjects2.length = 0;
gdjs.LevelSeCode.GDcursorObjects1.length = 0;
gdjs.LevelSeCode.GDcursorObjects2.length = 0;
gdjs.LevelSeCode.GDiconObjects1.length = 0;
gdjs.LevelSeCode.GDiconObjects2.length = 0;
gdjs.LevelSeCode.GDnext_9595pageObjects1.length = 0;
gdjs.LevelSeCode.GDnext_9595pageObjects2.length = 0;
gdjs.LevelSeCode.GDbackgroundObjects1.length = 0;
gdjs.LevelSeCode.GDbackgroundObjects2.length = 0;


return;

}

gdjs['LevelSeCode'] = gdjs.LevelSeCode;
