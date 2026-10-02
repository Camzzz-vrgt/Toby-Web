gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.localVariables = [];
gdjs.TitleScreenCode.idToCallbackMap = new Map();
gdjs.TitleScreenCode.GDtitleObjects1= [];
gdjs.TitleScreenCode.GDtitleObjects2= [];
gdjs.TitleScreenCode.GDbetaSignObjects1= [];
gdjs.TitleScreenCode.GDbetaSignObjects2= [];
gdjs.TitleScreenCode.GDclassicModeObjects1= [];
gdjs.TitleScreenCode.GDclassicModeObjects2= [];
gdjs.TitleScreenCode.GDstory_9595ModeObjects1= [];
gdjs.TitleScreenCode.GDstory_9595ModeObjects2= [];
gdjs.TitleScreenCode.GDcursorObjects1= [];
gdjs.TitleScreenCode.GDcursorObjects2= [];
gdjs.TitleScreenCode.GDJAronaObjects1= [];
gdjs.TitleScreenCode.GDJAronaObjects2= [];
gdjs.TitleScreenCode.GDcreditsObjects1= [];
gdjs.TitleScreenCode.GDcreditsObjects2= [];
gdjs.TitleScreenCode.GDsettextObjects1= [];
gdjs.TitleScreenCode.GDsettextObjects2= [];
gdjs.TitleScreenCode.GDbackgroundObjects1= [];
gdjs.TitleScreenCode.GDbackgroundObjects2= [];
gdjs.TitleScreenCode.GDstory_9595Mode2Objects1= [];
gdjs.TitleScreenCode.GDstory_9595Mode2Objects2= [];


gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.TitleScreenCode.GDcursorObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDclassicModeObjects1Objects = Hashtable.newFrom({"classicMode": gdjs.TitleScreenCode.GDclassicModeObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.TitleScreenCode.GDcursorObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDsettextObjects1Objects = Hashtable.newFrom({"settext": gdjs.TitleScreenCode.GDsettextObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.TitleScreenCode.GDcursorObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDclassicModeObjects1Objects = Hashtable.newFrom({"classicMode": gdjs.TitleScreenCode.GDclassicModeObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.TitleScreenCode.GDcursorObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDstory_95959595ModeObjects1Objects = Hashtable.newFrom({"story_Mode": gdjs.TitleScreenCode.GDstory_9595ModeObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.TitleScreenCode.GDcursorObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDsettextObjects1Objects = Hashtable.newFrom({"settext": gdjs.TitleScreenCode.GDsettextObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.TitleScreenCode.GDcursorObjects1});
gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDstory_95959595ModeObjects1Objects = Hashtable.newFrom({"story_Mode": gdjs.TitleScreenCode.GDstory_9595ModeObjects1});
gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("classicMode"), gdjs.TitleScreenCode.GDclassicModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("settext"), gdjs.TitleScreenCode.GDsettextObjects1);
gdjs.copyArray(runtimeScene.getObjects("story_Mode"), gdjs.TitleScreenCode.GDstory_9595ModeObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDclassicModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDclassicModeObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDstory_9595ModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDstory_9595ModeObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDsettextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDsettextObjects1[i].setColor("255;255;255");
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "castletown.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "castletown.ogg", 1, true, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("classicMode"), gdjs.TitleScreenCode.GDclassicModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDclassicModeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelStartScreen", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("keyboard");
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setString("classicMode");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("settext"), gdjs.TitleScreenCode.GDsettextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDsettextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "settings");
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("keyboard");
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("classicMode"), gdjs.TitleScreenCode.GDclassicModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDclassicModeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "keyboard");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleScreenCode.GDclassicModeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("settext"), gdjs.TitleScreenCode.GDsettextObjects1);
gdjs.copyArray(runtimeScene.getObjects("story_Mode"), gdjs.TitleScreenCode.GDstory_9595ModeObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDclassicModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDclassicModeObjects1[i].setColor("255;235;0");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDstory_9595ModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDstory_9595ModeObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDsettextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDsettextObjects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("story_Mode"), gdjs.TitleScreenCode.GDstory_9595ModeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDstory_95959595ModeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "keyboard");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("classicMode"), gdjs.TitleScreenCode.GDclassicModeObjects1);
gdjs.copyArray(runtimeScene.getObjects("settext"), gdjs.TitleScreenCode.GDsettextObjects1);
/* Reuse gdjs.TitleScreenCode.GDstory_9595ModeObjects1 */
{for(var i = 0, len = gdjs.TitleScreenCode.GDstory_9595ModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDstory_9595ModeObjects1[i].setColor("255;235;0");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDclassicModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDclassicModeObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDsettextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDsettextObjects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("settext"), gdjs.TitleScreenCode.GDsettextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDsettextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "keyboard");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("classicMode"), gdjs.TitleScreenCode.GDclassicModeObjects1);
/* Reuse gdjs.TitleScreenCode.GDsettextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("story_Mode"), gdjs.TitleScreenCode.GDstory_9595ModeObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDsettextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDsettextObjects1[i].setColor("255;235;0");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDclassicModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDclassicModeObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDstory_9595ModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDstory_9595ModeObjects1[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("story_Mode"), gdjs.TitleScreenCode.GDstory_9595ModeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDcursorObjects1Objects, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDstory_95959595ModeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSe", false);
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
gdjs.copyArray(runtimeScene.getObjects("classicMode"), gdjs.TitleScreenCode.GDclassicModeObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDclassicModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDclassicModeObjects1[i].setColor("255;235;0");
}
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("story_Mode"), gdjs.TitleScreenCode.GDstory_9595ModeObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDstory_9595ModeObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDstory_9595ModeObjects1[i].setColor("255;235;0");
}
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
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("keyboard");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsString() == "controller");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDcursorObjects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.TitleScreenCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDcursorObjects1[i].hide(false);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSe", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("controller");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(13).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).sub(1 / 30);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDtitleObjects1.length = 0;
gdjs.TitleScreenCode.GDtitleObjects2.length = 0;
gdjs.TitleScreenCode.GDbetaSignObjects1.length = 0;
gdjs.TitleScreenCode.GDbetaSignObjects2.length = 0;
gdjs.TitleScreenCode.GDclassicModeObjects1.length = 0;
gdjs.TitleScreenCode.GDclassicModeObjects2.length = 0;
gdjs.TitleScreenCode.GDstory_9595ModeObjects1.length = 0;
gdjs.TitleScreenCode.GDstory_9595ModeObjects2.length = 0;
gdjs.TitleScreenCode.GDcursorObjects1.length = 0;
gdjs.TitleScreenCode.GDcursorObjects2.length = 0;
gdjs.TitleScreenCode.GDJAronaObjects1.length = 0;
gdjs.TitleScreenCode.GDJAronaObjects2.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDsettextObjects1.length = 0;
gdjs.TitleScreenCode.GDsettextObjects2.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects1.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects2.length = 0;
gdjs.TitleScreenCode.GDstory_9595Mode2Objects1.length = 0;
gdjs.TitleScreenCode.GDstory_9595Mode2Objects2.length = 0;

gdjs.TitleScreenCode.eventsList0(runtimeScene);
gdjs.TitleScreenCode.GDtitleObjects1.length = 0;
gdjs.TitleScreenCode.GDtitleObjects2.length = 0;
gdjs.TitleScreenCode.GDbetaSignObjects1.length = 0;
gdjs.TitleScreenCode.GDbetaSignObjects2.length = 0;
gdjs.TitleScreenCode.GDclassicModeObjects1.length = 0;
gdjs.TitleScreenCode.GDclassicModeObjects2.length = 0;
gdjs.TitleScreenCode.GDstory_9595ModeObjects1.length = 0;
gdjs.TitleScreenCode.GDstory_9595ModeObjects2.length = 0;
gdjs.TitleScreenCode.GDcursorObjects1.length = 0;
gdjs.TitleScreenCode.GDcursorObjects2.length = 0;
gdjs.TitleScreenCode.GDJAronaObjects1.length = 0;
gdjs.TitleScreenCode.GDJAronaObjects2.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDcreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDsettextObjects1.length = 0;
gdjs.TitleScreenCode.GDsettextObjects2.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects1.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects2.length = 0;
gdjs.TitleScreenCode.GDstory_9595Mode2Objects1.length = 0;
gdjs.TitleScreenCode.GDstory_9595Mode2Objects2.length = 0;


return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
