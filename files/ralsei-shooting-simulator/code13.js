gdjs.LevelStartScreenCode = {};
gdjs.LevelStartScreenCode.localVariables = [];
gdjs.LevelStartScreenCode.idToCallbackMap = new Map();
gdjs.LevelStartScreenCode.GDonlyTextObjects1= [];
gdjs.LevelStartScreenCode.GDonlyTextObjects2= [];
gdjs.LevelStartScreenCode.GDnotatall_9595Objects1= [];
gdjs.LevelStartScreenCode.GDnotatall_9595Objects2= [];


gdjs.LevelStartScreenCode.asyncCallback21535252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}
gdjs.LevelStartScreenCode.localVariables.length = 0;
}
gdjs.LevelStartScreenCode.idToCallbackMap.set(21535252, gdjs.LevelStartScreenCode.asyncCallback21535252);
gdjs.LevelStartScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LevelStartScreenCode.asyncCallback21535252(runtimeScene, asyncObjectsList)), 21535252, asyncObjectsList);
}
}

}


};gdjs.LevelStartScreenCode.asyncCallback21535844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sm_p1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
gdjs.LevelStartScreenCode.localVariables.length = 0;
}
gdjs.LevelStartScreenCode.idToCallbackMap.set(21535844, gdjs.LevelStartScreenCode.asyncCallback21535844);
gdjs.LevelStartScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LevelStartScreenCode.asyncCallback21535844(runtimeScene, asyncObjectsList)), 21535844, asyncObjectsList);
}
}

}


};gdjs.LevelStartScreenCode.asyncCallback21537860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sm_p2", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
gdjs.LevelStartScreenCode.localVariables.length = 0;
}
gdjs.LevelStartScreenCode.idToCallbackMap.set(21537860, gdjs.LevelStartScreenCode.asyncCallback21537860);
gdjs.LevelStartScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LevelStartScreenCode.asyncCallback21537860(runtimeScene, asyncObjectsList)), 21537860, asyncObjectsList);
}
}

}


};gdjs.LevelStartScreenCode.asyncCallback21538716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClassicMode", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
gdjs.LevelStartScreenCode.localVariables.length = 0;
}
gdjs.LevelStartScreenCode.idToCallbackMap.set(21538716, gdjs.LevelStartScreenCode.asyncCallback21538716);
gdjs.LevelStartScreenCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LevelStartScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LevelStartScreenCode.asyncCallback21538716(runtimeScene, asyncObjectsList)), 21538716, asyncObjectsList);
}
}

}


};gdjs.LevelStartScreenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("onlyText"), gdjs.LevelStartScreenCode.GDonlyTextObjects1);
{for(var i = 0, len = gdjs.LevelStartScreenCode.GDonlyTextObjects1.length ;i < len;++i) {
    gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").getOpacity() + (25));
}
}

{ //Subevents
gdjs.LevelStartScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsString() == "sm_p1");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("onlyText"), gdjs.LevelStartScreenCode.GDonlyTextObjects1);
{for(var i = 0, len = gdjs.LevelStartScreenCode.GDonlyTextObjects1.length ;i < len;++i) {
    gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").getOpacity() - (20));
}
}

{ //Subevents
gdjs.LevelStartScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsString() == "sm_p2");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("onlyText"), gdjs.LevelStartScreenCode.GDonlyTextObjects1);
{for(var i = 0, len = gdjs.LevelStartScreenCode.GDonlyTextObjects1.length ;i < len;++i) {
    gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").getOpacity() - (20));
}
}

{ //Subevents
gdjs.LevelStartScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(14).getAsString() == "classicMode");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("onlyText"), gdjs.LevelStartScreenCode.GDonlyTextObjects1);
{for(var i = 0, len = gdjs.LevelStartScreenCode.GDonlyTextObjects1.length ;i < len;++i) {
    gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LevelStartScreenCode.GDonlyTextObjects1[i].getBehavior("Opacity").getOpacity() - (20));
}
}

{ //Subevents
gdjs.LevelStartScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.LevelStartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelStartScreenCode.GDonlyTextObjects1.length = 0;
gdjs.LevelStartScreenCode.GDonlyTextObjects2.length = 0;
gdjs.LevelStartScreenCode.GDnotatall_9595Objects1.length = 0;
gdjs.LevelStartScreenCode.GDnotatall_9595Objects2.length = 0;

gdjs.LevelStartScreenCode.eventsList4(runtimeScene);
gdjs.LevelStartScreenCode.GDonlyTextObjects1.length = 0;
gdjs.LevelStartScreenCode.GDonlyTextObjects2.length = 0;
gdjs.LevelStartScreenCode.GDnotatall_9595Objects1.length = 0;
gdjs.LevelStartScreenCode.GDnotatall_9595Objects2.length = 0;


return;

}

gdjs['LevelStartScreenCode'] = gdjs.LevelStartScreenCode;
