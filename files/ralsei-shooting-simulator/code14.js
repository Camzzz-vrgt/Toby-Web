gdjs.egg_63Code = {};
gdjs.egg_63Code.localVariables = [];
gdjs.egg_63Code.idToCallbackMap = new Map();
gdjs.egg_63Code.GDeverythingObjects1= [];
gdjs.egg_63Code.GDeverythingObjects2= [];
gdjs.egg_63Code.GDgasterObjects1= [];
gdjs.egg_63Code.GDgasterObjects2= [];
gdjs.egg_63Code.GDfriendObjects1= [];
gdjs.egg_63Code.GDfriendObjects2= [];
gdjs.egg_63Code.GDgrassObjects1= [];
gdjs.egg_63Code.GDgrassObjects2= [];
gdjs.egg_63Code.GDnothingObjects1= [];
gdjs.egg_63Code.GDnothingObjects2= [];
gdjs.egg_63Code.GD_959566Objects1= [];
gdjs.egg_63Code.GD_959566Objects2= [];
gdjs.egg_63Code.GDcheshireObjects1= [];
gdjs.egg_63Code.GDcheshireObjects2= [];


gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects = Hashtable.newFrom({"everything": gdjs.egg_63Code.GDeverythingObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDgasterObjects1Objects = Hashtable.newFrom({"gaster": gdjs.egg_63Code.GDgasterObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDgasterObjects1Objects = Hashtable.newFrom({"gaster": gdjs.egg_63Code.GDgasterObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects = Hashtable.newFrom({"everything": gdjs.egg_63Code.GDeverythingObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDfriendObjects1Objects = Hashtable.newFrom({"friend": gdjs.egg_63Code.GDfriendObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDfriendObjects1Objects = Hashtable.newFrom({"friend": gdjs.egg_63Code.GDfriendObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects = Hashtable.newFrom({"everything": gdjs.egg_63Code.GDeverythingObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDgasterObjects1Objects = Hashtable.newFrom({"gaster": gdjs.egg_63Code.GDgasterObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects = Hashtable.newFrom({"everything": gdjs.egg_63Code.GDeverythingObjects1});
gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDnothingObjects1Objects = Hashtable.newFrom({"nothing": gdjs.egg_63Code.GDnothingObjects1});
gdjs.egg_63Code.asyncCallback21560860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.egg_63Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
gdjs.egg_63Code.localVariables.length = 0;
}
gdjs.egg_63Code.idToCallbackMap.set(21560860, gdjs.egg_63Code.asyncCallback21560860);
gdjs.egg_63Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.egg_63Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomFloatInRange(3, 5)), (runtimeScene) => (gdjs.egg_63Code.asyncCallback21560860(runtimeScene, asyncObjectsList)), 21560860, asyncObjectsList);
}
}

}


};gdjs.egg_63Code.asyncCallback21561836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.egg_63Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
gdjs.egg_63Code.localVariables.length = 0;
}
gdjs.egg_63Code.idToCallbackMap.set(21561836, gdjs.egg_63Code.asyncCallback21561836);
gdjs.egg_63Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.egg_63Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.egg_63Code.asyncCallback21561836(runtimeScene, asyncObjectsList)), 21561836, asyncObjectsList);
}
}

}


};gdjs.egg_63Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("everything"), gdjs.egg_63Code.GDeverythingObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.egg_63Code.GDeverythingObjects1.length === 0 ) ? 0 :gdjs.egg_63Code.GDeverythingObjects1[0].getPointX("")), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.egg_63Code.GDeverythingObjects1.length === 0 ) ? 0 :gdjs.egg_63Code.GDeverythingObjects1[0].getPointY("")), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("everything"), gdjs.egg_63Code.GDeverythingObjects1);
gdjs.copyArray(runtimeScene.getObjects("gaster"), gdjs.egg_63Code.GDgasterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects, gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDgasterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.egg_63Code.GDeverythingObjects1 */
/* Reuse gdjs.egg_63Code.GDgasterObjects1 */
{for(var i = 0, len = gdjs.egg_63Code.GDeverythingObjects1.length ;i < len;++i) {
    gdjs.egg_63Code.GDeverythingObjects1[i].separateFromObjectsList(gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDgasterObjects1Objects, false);
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.egg_63Code.GDeverythingObjects1.length === 0 ) ? 0 :gdjs.egg_63Code.GDeverythingObjects1[0].getPointX("")), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.egg_63Code.GDeverythingObjects1.length === 0 ) ? 0 :gdjs.egg_63Code.GDeverythingObjects1[0].getPointY("")), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("everything"), gdjs.egg_63Code.GDeverythingObjects1);
gdjs.copyArray(runtimeScene.getObjects("friend"), gdjs.egg_63Code.GDfriendObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects, gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDfriendObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.egg_63Code.GDeverythingObjects1 */
/* Reuse gdjs.egg_63Code.GDfriendObjects1 */
{for(var i = 0, len = gdjs.egg_63Code.GDeverythingObjects1.length ;i < len;++i) {
    gdjs.egg_63Code.GDeverythingObjects1[i].separateFromObjectsList(gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDfriendObjects1Objects, false);
}
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.egg_63Code.GDeverythingObjects1.length === 0 ) ? 0 :gdjs.egg_63Code.GDeverythingObjects1[0].getPointY("")), "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.egg_63Code.GDeverythingObjects1.length === 0 ) ? 0 :gdjs.egg_63Code.GDeverythingObjects1[0].getPointX("")), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("everything"), gdjs.egg_63Code.GDeverythingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.egg_63Code.GDeverythingObjects1.length;i<l;++i) {
    if ( gdjs.egg_63Code.GDeverythingObjects1[i].getBehavior("TopDownMovement").getXVelocity() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.egg_63Code.GDeverythingObjects1[k] = gdjs.egg_63Code.GDeverythingObjects1[i];
        ++k;
    }
}
gdjs.egg_63Code.GDeverythingObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.egg_63Code.GDeverythingObjects1 */
{for(var i = 0, len = gdjs.egg_63Code.GDeverythingObjects1.length ;i < len;++i) {
    gdjs.egg_63Code.GDeverythingObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("everything"), gdjs.egg_63Code.GDeverythingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.egg_63Code.GDeverythingObjects1.length;i<l;++i) {
    if ( gdjs.egg_63Code.GDeverythingObjects1[i].getBehavior("TopDownMovement").getXVelocity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.egg_63Code.GDeverythingObjects1[k] = gdjs.egg_63Code.GDeverythingObjects1[i];
        ++k;
    }
}
gdjs.egg_63Code.GDeverythingObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.egg_63Code.GDeverythingObjects1 */
{for(var i = 0, len = gdjs.egg_63Code.GDeverythingObjects1.length ;i < len;++i) {
    gdjs.egg_63Code.GDeverythingObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("everything"), gdjs.egg_63Code.GDeverythingObjects1);
gdjs.copyArray(runtimeScene.getObjects("gaster"), gdjs.egg_63Code.GDgasterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects, gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDgasterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "man_2.ogg", 1, false, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber(), 0.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("everything"), gdjs.egg_63Code.GDeverythingObjects1);
gdjs.copyArray(runtimeScene.getObjects("nothing"), gdjs.egg_63Code.GDnothingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDeverythingObjects1Objects, gdjs.egg_63Code.mapOfGDgdjs_9546egg_959563Code_9546GDnothingObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_66"), gdjs.egg_63Code.GD_959566Objects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.egg_63Code.GD_959566Objects1.length === 0 ) ? 0 :gdjs.egg_63Code.GD_959566Objects1[0].getPointX("")), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.egg_63Code.GD_959566Objects1.length === 0 ) ? 0 :gdjs.egg_63Code.GD_959566Objects1[0].getPointY("")), "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.25, "", 0);
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.egg_63Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_66"), gdjs.egg_63Code.GD_959566Objects1);
{for(var i = 0, len = gdjs.egg_63Code.GD_959566Objects1.length ;i < len;++i) {
    gdjs.egg_63Code.GD_959566Objects1[i].setPosition(gdjs.egg_63Code.GD_959566Objects1[i].getX() -(55),gdjs.egg_63Code.GD_959566Objects1[i].getY() -(75));
}
}
{for(var i = 0, len = gdjs.egg_63Code.GD_959566Objects1.length ;i < len;++i) {
    gdjs.egg_63Code.GD_959566Objects1[i].getBehavior("Animation").setAnimationName("no...please dont");
}
}
{for(var i = 0, len = gdjs.egg_63Code.GD_959566Objects1.length ;i < len;++i) {
    gdjs.egg_63Code.GD_959566Objects1[i].getBehavior("Scale").setScale(gdjs.egg_63Code.GD_959566Objects1[i].getBehavior("Scale").getScale() + (1));
}
}

{ //Subevents
gdjs.egg_63Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.egg_63Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.egg_63Code.GDeverythingObjects1.length = 0;
gdjs.egg_63Code.GDeverythingObjects2.length = 0;
gdjs.egg_63Code.GDgasterObjects1.length = 0;
gdjs.egg_63Code.GDgasterObjects2.length = 0;
gdjs.egg_63Code.GDfriendObjects1.length = 0;
gdjs.egg_63Code.GDfriendObjects2.length = 0;
gdjs.egg_63Code.GDgrassObjects1.length = 0;
gdjs.egg_63Code.GDgrassObjects2.length = 0;
gdjs.egg_63Code.GDnothingObjects1.length = 0;
gdjs.egg_63Code.GDnothingObjects2.length = 0;
gdjs.egg_63Code.GD_959566Objects1.length = 0;
gdjs.egg_63Code.GD_959566Objects2.length = 0;
gdjs.egg_63Code.GDcheshireObjects1.length = 0;
gdjs.egg_63Code.GDcheshireObjects2.length = 0;

gdjs.egg_63Code.eventsList2(runtimeScene);
gdjs.egg_63Code.GDeverythingObjects1.length = 0;
gdjs.egg_63Code.GDeverythingObjects2.length = 0;
gdjs.egg_63Code.GDgasterObjects1.length = 0;
gdjs.egg_63Code.GDgasterObjects2.length = 0;
gdjs.egg_63Code.GDfriendObjects1.length = 0;
gdjs.egg_63Code.GDfriendObjects2.length = 0;
gdjs.egg_63Code.GDgrassObjects1.length = 0;
gdjs.egg_63Code.GDgrassObjects2.length = 0;
gdjs.egg_63Code.GDnothingObjects1.length = 0;
gdjs.egg_63Code.GDnothingObjects2.length = 0;
gdjs.egg_63Code.GD_959566Objects1.length = 0;
gdjs.egg_63Code.GD_959566Objects2.length = 0;
gdjs.egg_63Code.GDcheshireObjects1.length = 0;
gdjs.egg_63Code.GDcheshireObjects2.length = 0;


return;

}

gdjs['egg_63Code'] = gdjs.egg_63Code;
