gdjs.bs_951Code = {};
gdjs.bs_951Code.localVariables = [];
gdjs.bs_951Code.idToCallbackMap = new Map();
gdjs.bs_951Code.GDNewSpriteObjects1= [];
gdjs.bs_951Code.GDNewSpriteObjects2= [];
gdjs.bs_951Code.GDNewSpriteObjects3= [];
gdjs.bs_951Code.GDNewSpriteObjects4= [];
gdjs.bs_951Code.GDNewSprite2Objects1= [];
gdjs.bs_951Code.GDNewSprite2Objects2= [];
gdjs.bs_951Code.GDNewSprite2Objects3= [];
gdjs.bs_951Code.GDNewSprite2Objects4= [];
gdjs.bs_951Code.GDfresh_9595waterObjects1= [];
gdjs.bs_951Code.GDfresh_9595waterObjects2= [];
gdjs.bs_951Code.GDfresh_9595waterObjects3= [];
gdjs.bs_951Code.GDfresh_9595waterObjects4= [];
gdjs.bs_951Code.GDshotsObjects1= [];
gdjs.bs_951Code.GDshotsObjects2= [];
gdjs.bs_951Code.GDshotsObjects3= [];
gdjs.bs_951Code.GDshotsObjects4= [];
gdjs.bs_951Code.GDAttacksObjects1= [];
gdjs.bs_951Code.GDAttacksObjects2= [];
gdjs.bs_951Code.GDAttacksObjects3= [];
gdjs.bs_951Code.GDAttacksObjects4= [];
gdjs.bs_951Code.GDHUDObjects1= [];
gdjs.bs_951Code.GDHUDObjects2= [];
gdjs.bs_951Code.GDHUDObjects3= [];
gdjs.bs_951Code.GDHUDObjects4= [];
gdjs.bs_951Code.GDhPrObjects1= [];
gdjs.bs_951Code.GDhPrObjects2= [];
gdjs.bs_951Code.GDhPrObjects3= [];
gdjs.bs_951Code.GDhPrObjects4= [];
gdjs.bs_951Code.GDTPObjects1= [];
gdjs.bs_951Code.GDTPObjects2= [];
gdjs.bs_951Code.GDTPObjects3= [];
gdjs.bs_951Code.GDTPObjects4= [];
gdjs.bs_951Code.GDEnemHPObjects1= [];
gdjs.bs_951Code.GDEnemHPObjects2= [];
gdjs.bs_951Code.GDEnemHPObjects3= [];
gdjs.bs_951Code.GDEnemHPObjects4= [];
gdjs.bs_951Code.GDsomethingObjects1= [];
gdjs.bs_951Code.GDsomethingObjects2= [];
gdjs.bs_951Code.GDsomethingObjects3= [];
gdjs.bs_951Code.GDsomethingObjects4= [];
gdjs.bs_951Code.GDNewSprite3Objects1= [];
gdjs.bs_951Code.GDNewSprite3Objects2= [];
gdjs.bs_951Code.GDNewSprite3Objects3= [];
gdjs.bs_951Code.GDNewSprite3Objects4= [];
gdjs.bs_951Code.GDfinishObjects1= [];
gdjs.bs_951Code.GDfinishObjects2= [];
gdjs.bs_951Code.GDfinishObjects3= [];
gdjs.bs_951Code.GDfinishObjects4= [];
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects1= [];
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects2= [];
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects3= [];
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects4= [];
gdjs.bs_951Code.GDTPdisObjects1= [];
gdjs.bs_951Code.GDTPdisObjects2= [];
gdjs.bs_951Code.GDTPdisObjects3= [];
gdjs.bs_951Code.GDTPdisObjects4= [];
gdjs.bs_951Code.GDcursorObjects1= [];
gdjs.bs_951Code.GDcursorObjects2= [];
gdjs.bs_951Code.GDcursorObjects3= [];
gdjs.bs_951Code.GDcursorObjects4= [];
gdjs.bs_951Code.GDsoulObjects1= [];
gdjs.bs_951Code.GDsoulObjects2= [];
gdjs.bs_951Code.GDsoulObjects3= [];
gdjs.bs_951Code.GDsoulObjects4= [];


gdjs.bs_951Code.asyncCallback20861852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("false");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("bring_in_the_knives!!!!!!!");
}
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20861852, gdjs.bs_951Code.asyncCallback20861852);
gdjs.bs_951Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20861852(runtimeScene, asyncObjectsList)), 20861852, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.asyncCallback20861036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("fresh_water"), gdjs.bs_951Code.GDfresh_9595waterObjects3);

{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects3.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects3[i].clearForces();
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects3.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects3.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects3[i].getBehavior("Animation").setAnimationName("hat_s");
}
}

{ //Subevents
gdjs.bs_951Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20861036, gdjs.bs_951Code.asyncCallback20861036);
gdjs.bs_951Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.bs_951Code.GDfresh_9595waterObjects2) asyncObjectsList.addObject("fresh_water", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20861036(runtimeScene, asyncObjectsList)), 20861036, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.asyncCallback20860844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("fresh_water"), gdjs.bs_951Code.GDfresh_9595waterObjects2);
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects2.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects2[i].addForce(0, 10, 1);
}
}

{ //Subevents
gdjs.bs_951Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20860844, gdjs.bs_951Code.asyncCallback20860844);
gdjs.bs_951Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
for (const obj of gdjs.bs_951Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20860844(runtimeScene, asyncObjectsList)), 20860844, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.asyncCallback20864508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("false");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("bring_in_the_knives!!!!!!!");
}
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20864508, gdjs.bs_951Code.asyncCallback20864508);
gdjs.bs_951Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20864508(runtimeScene, asyncObjectsList)), 20864508, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.asyncCallback20863692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("fresh_water"), gdjs.bs_951Code.GDfresh_9595waterObjects3);

{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects3.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects3[i].clearForces();
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects3.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects3.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects3[i].getBehavior("Animation").setAnimationName("hatless_s");
}
}

{ //Subevents
gdjs.bs_951Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20863692, gdjs.bs_951Code.asyncCallback20863692);
gdjs.bs_951Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
/* Don't save NewSprite2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.bs_951Code.GDfresh_9595waterObjects2) asyncObjectsList.addObject("fresh_water", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20863692(runtimeScene, asyncObjectsList)), 20863692, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.asyncCallback20863476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("fresh_water"), gdjs.bs_951Code.GDfresh_9595waterObjects2);
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects2.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects2[i].addForce(0, 10, 1);
}
}

{ //Subevents
gdjs.bs_951Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20863476, gdjs.bs_951Code.asyncCallback20863476);
gdjs.bs_951Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
for (const obj of gdjs.bs_951Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20863476(runtimeScene, asyncObjectsList)), 20863476, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDshotsObjects1Objects = Hashtable.newFrom({"shots": gdjs.bs_951Code.GDshotsObjects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDshotsObjects1Objects = Hashtable.newFrom({"shots": gdjs.bs_951Code.GDshotsObjects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDshotsObjects1Objects = Hashtable.newFrom({"shots": gdjs.bs_951Code.GDshotsObjects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDfresh_95959595waterObjects1Objects = Hashtable.newFrom({"fresh_water": gdjs.bs_951Code.GDfresh_9595waterObjects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDAttacksObjects1Objects = Hashtable.newFrom({"Attacks": gdjs.bs_951Code.GDAttacksObjects1});
gdjs.bs_951Code.asyncCallback20885220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sm_end", false);
}
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20885220, gdjs.bs_951Code.asyncCallback20885220);
gdjs.bs_951Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20885220(runtimeScene, asyncObjectsList)), 20885220, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.asyncCallback20885148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects2);

{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects2[i].addForce(20, 0, 1);
}
}

{ //Subevents
gdjs.bs_951Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20885148, gdjs.bs_951Code.asyncCallback20885148);
gdjs.bs_951Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
for (const obj of gdjs.bs_951Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20885148(runtimeScene, asyncObjectsList)), 20885148, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.bs_951Code.GDNewSprite2Objects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDstraight_95959595white_95959595maliensObjects1Objects = Hashtable.newFrom({"straight_white_maliens": gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDstraight_95959595white_95959595maliensObjects1Objects = Hashtable.newFrom({"straight_white_maliens": gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.bs_951Code.GDNewSprite2Objects1});
gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDAttacksObjects1Objects = Hashtable.newFrom({"Attacks": gdjs.bs_951Code.GDAttacksObjects1});
gdjs.bs_951Code.asyncCallback20900516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BSgo", false);
}
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20900516, gdjs.bs_951Code.asyncCallback20900516);
gdjs.bs_951Code.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20900516(runtimeScene, asyncObjectsList)), 20900516, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.asyncCallback20900092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bs_951Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("soul"), gdjs.bs_951Code.GDsoulObjects2);

{for(var i = 0, len = gdjs.bs_951Code.GDsoulObjects2.length ;i < len;++i) {
    gdjs.bs_951Code.GDsoulObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.bs_951Code.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bs_951Code.localVariables.length = 0;
}
gdjs.bs_951Code.idToCallbackMap.set(20900092, gdjs.bs_951Code.asyncCallback20900092);
gdjs.bs_951Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bs_951Code.localVariables);
for (const obj of gdjs.bs_951Code.GDsoulObjects1) asyncObjectsList.addObject("soul", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.bs_951Code.asyncCallback20900092(runtimeScene, asyncObjectsList)), 20900092, asyncObjectsList);
}
}

}


};gdjs.bs_951Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "true");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].addForce(450, 0, 0);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].activateBehavior("TopDownMovement", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "true");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bs_951Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.bs_951Code.GDNewSprite2Objects1[i].getX() >= 282 ) {
        isConditionTrue_0 = true;
        gdjs.bs_951Code.GDNewSprite2Objects1[k] = gdjs.bs_951Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.bs_951Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "yep");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bs_951Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].clearForces();
}
}

{ //Subevents
gdjs.bs_951Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "true");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bs_951Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.bs_951Code.GDNewSprite2Objects1[i].getX() >= 282 ) {
        isConditionTrue_0 = true;
        gdjs.bs_951Code.GDNewSprite2Objects1[k] = gdjs.bs_951Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.bs_951Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "nuh uh");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bs_951Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].clearForces();
}
}

{ //Subevents
gdjs.bs_951Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "false");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "yep");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemHP"), gdjs.bs_951Code.GDEnemHPObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("something"), gdjs.bs_951Code.GDsomethingObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].activateBehavior("TopDownMovement", true);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDEnemHPObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDEnemHPObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDsomethingObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDsomethingObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("hat");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "false");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "nuh uh");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemHP"), gdjs.bs_951Code.GDEnemHPObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("something"), gdjs.bs_951Code.GDsomethingObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].activateBehavior("TopDownMovement", true);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDEnemHPObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDEnemHPObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDsomethingObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDsomethingObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("hatless");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "false");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "true");
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.bs_951Code.GDshotsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDshotsObjects1Objects, (( gdjs.bs_951Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.bs_951Code.GDNewSprite2Objects1[0].getPointX("")) + 62, (( gdjs.bs_951Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.bs_951Code.GDNewSprite2Objects1[0].getPointY("")) + 70, "");
}
{for(var i = 0, len = gdjs.bs_951Code.GDshotsObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDshotsObjects1[i].addForce(gdjs.randomInRange(500, 750), 0, 1);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDshotsObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDshotsObjects1[i].setZOrder(56);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mus_sfx_a_bullet.wav", false, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() / 2, 1);
}
{for(var i = 0, len = gdjs.bs_951Code.GDshotsObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDshotsObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "false");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "false");
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.bs_951Code.GDshotsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDshotsObjects1Objects, (( gdjs.bs_951Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.bs_951Code.GDNewSprite2Objects1[0].getPointX("")) + 62, (( gdjs.bs_951Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.bs_951Code.GDNewSprite2Objects1[0].getPointY("")) + 70, "");
}
{for(var i = 0, len = gdjs.bs_951Code.GDshotsObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDshotsObjects1[i].addForce(gdjs.randomInRange(500, 750), 0, 1);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDshotsObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDshotsObjects1[i].setZOrder(56);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mus_sfx_a_bullet.wav", false, runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber() / 2, 1);
}
{for(var i = 0, len = gdjs.bs_951Code.GDshotsObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDshotsObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "false");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "bring_in_the_knives!!!!!!!");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fresh_water"), gdjs.bs_951Code.GDfresh_9595waterObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TPdis"), gdjs.bs_951Code.GDTPdisObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.bs_951Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("something"), gdjs.bs_951Code.GDsomethingObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDsomethingObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDsomethingObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDTPdisObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDTPdisObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fresh_water"), gdjs.bs_951Code.GDfresh_9595waterObjects1);
gdjs.copyArray(runtimeScene.getObjects("shots"), gdjs.bs_951Code.GDshotsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDshotsObjects1Objects, gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDfresh_95959595waterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.bs_951Code.GDshotsObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(5);
}
{for(var i = 0, len = gdjs.bs_951Code.GDshotsObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDshotsObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "false");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "bring_in_the_knives!!!!!!!");
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.bs_951Code.GDAttacksObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDAttacksObjects1Objects, 1447, (( gdjs.bs_951Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.bs_951Code.GDNewSprite2Objects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.bs_951Code.GDAttacksObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDAttacksObjects1[i].setZOrder(3);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{for(var i = 0, len = gdjs.bs_951Code.GDAttacksObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDAttacksObjects1[i].addForce(-550, 0, 1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(1 / 30);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "yep");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("hat");
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
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "nuh uh");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("hatless");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Attacks"), gdjs.bs_951Code.GDAttacksObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.bs_951Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.bs_951Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("fresh_water"), gdjs.bs_951Code.GDfresh_9595waterObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects1[i].getBehavior("Animation").setAnimationName("PC _ Computer - Deltarune - Enemies & Bosses (Chapter 5) - Aqua (4)");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects1[i].rotate(45, runtimeScene);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDfresh_9595waterObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDfresh_9595waterObjects1[i].getBehavior("Opacity").setOpacity(gdjs.bs_951Code.GDfresh_9595waterObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDAttacksObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDAttacksObjects1[i].getBehavior("Opacity").setOpacity(gdjs.bs_951Code.GDAttacksObjects1[i].getBehavior("Opacity").getOpacity() - (25));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("aw_man_i_am_sleep!");
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite3Objects1[i].setZOrder(7);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDfinishObjects1[i].getBehavior("Opacity").setOpacity(gdjs.bs_951Code.GDfinishObjects1[i].getBehavior("Opacity").getOpacity() + (1));
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].activateBehavior("TopDownMovement", false);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDAttacksObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDAttacksObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.bs_951Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("straight_white_maliens"), gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDNewSprite2Objects1Objects, gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDstraight_95959595white_95959595maliensObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "false");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bs_951Code.GDNewSprite2Objects1 */
/* Reuse gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects1 */
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].separateFromObjectsList(gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDstraight_95959595white_95959595maliensObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Attacks"), gdjs.bs_951Code.GDAttacksObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDNewSprite2Objects1Objects, gdjs.bs_951Code.mapOfGDgdjs_9546bs_9595951Code_9546GDAttacksObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bs_951Code.GDAttacksObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(20);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "snd_hurt1.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.bs_951Code.GDAttacksObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDAttacksObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1 / 30);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 70);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HUD"), gdjs.bs_951Code.GDHUDObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDHUDObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDHUDObjects1[i].getBehavior("Animation").setAnimationName("70");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 60);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HUD"), gdjs.bs_951Code.GDHUDObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDHUDObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDHUDObjects1[i].getBehavior("Animation").setAnimationName("60");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 50);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HUD"), gdjs.bs_951Code.GDHUDObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDHUDObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDHUDObjects1[i].getBehavior("Animation").setAnimationName("50");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 40);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HUD"), gdjs.bs_951Code.GDHUDObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDHUDObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDHUDObjects1[i].getBehavior("Animation").setAnimationName("40");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 30);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HUD"), gdjs.bs_951Code.GDHUDObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDHUDObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDHUDObjects1[i].getBehavior("Animation").setAnimationName("30");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 20);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HUD"), gdjs.bs_951Code.GDHUDObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDHUDObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDHUDObjects1[i].getBehavior("Animation").setAnimationName("20");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HUD"), gdjs.bs_951Code.GDHUDObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDHUDObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDHUDObjects1[i].getBehavior("Animation").setAnimationName("10");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() < 25);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hPr"), gdjs.bs_951Code.GDhPrObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDhPrObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDhPrObjects1[i].getBehavior("Opacity").setOpacity(180);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 25);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hPr"), gdjs.bs_951Code.GDhPrObjects1);
{for(var i = 0, len = gdjs.bs_951Code.GDhPrObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDhPrObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 25);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "snd_spellcast.wav", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).sub(25);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(10);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Attacks"), gdjs.bs_951Code.GDAttacksObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.bs_951Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.bs_951Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("soul"), gdjs.bs_951Code.GDsoulObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("haha!_you_are_ded!!!!!");
}
{for(var i = 0, len = gdjs.bs_951Code.GDAttacksObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDAttacksObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].activateBehavior("TopDownMovement", false);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDNewSprite2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDfinishObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDsoulObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDsoulObjects1[i].setPosition((( gdjs.bs_951Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.bs_951Code.GDNewSprite2Objects1[0].getPointX("")),(( gdjs.bs_951Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.bs_951Code.GDNewSprite2Objects1[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.bs_951Code.GDsoulObjects1.length ;i < len;++i) {
    gdjs.bs_951Code.GDsoulObjects1[i].getBehavior("Flippable").flipY(true);
}
}

{ //Subevents
gdjs.bs_951Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "q");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.bs_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bs_951Code.GDNewSpriteObjects1.length = 0;
gdjs.bs_951Code.GDNewSpriteObjects2.length = 0;
gdjs.bs_951Code.GDNewSpriteObjects3.length = 0;
gdjs.bs_951Code.GDNewSpriteObjects4.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects1.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects2.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects3.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects4.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects1.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects2.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects3.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects4.length = 0;
gdjs.bs_951Code.GDshotsObjects1.length = 0;
gdjs.bs_951Code.GDshotsObjects2.length = 0;
gdjs.bs_951Code.GDshotsObjects3.length = 0;
gdjs.bs_951Code.GDshotsObjects4.length = 0;
gdjs.bs_951Code.GDAttacksObjects1.length = 0;
gdjs.bs_951Code.GDAttacksObjects2.length = 0;
gdjs.bs_951Code.GDAttacksObjects3.length = 0;
gdjs.bs_951Code.GDAttacksObjects4.length = 0;
gdjs.bs_951Code.GDHUDObjects1.length = 0;
gdjs.bs_951Code.GDHUDObjects2.length = 0;
gdjs.bs_951Code.GDHUDObjects3.length = 0;
gdjs.bs_951Code.GDHUDObjects4.length = 0;
gdjs.bs_951Code.GDhPrObjects1.length = 0;
gdjs.bs_951Code.GDhPrObjects2.length = 0;
gdjs.bs_951Code.GDhPrObjects3.length = 0;
gdjs.bs_951Code.GDhPrObjects4.length = 0;
gdjs.bs_951Code.GDTPObjects1.length = 0;
gdjs.bs_951Code.GDTPObjects2.length = 0;
gdjs.bs_951Code.GDTPObjects3.length = 0;
gdjs.bs_951Code.GDTPObjects4.length = 0;
gdjs.bs_951Code.GDEnemHPObjects1.length = 0;
gdjs.bs_951Code.GDEnemHPObjects2.length = 0;
gdjs.bs_951Code.GDEnemHPObjects3.length = 0;
gdjs.bs_951Code.GDEnemHPObjects4.length = 0;
gdjs.bs_951Code.GDsomethingObjects1.length = 0;
gdjs.bs_951Code.GDsomethingObjects2.length = 0;
gdjs.bs_951Code.GDsomethingObjects3.length = 0;
gdjs.bs_951Code.GDsomethingObjects4.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects1.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects2.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects3.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects4.length = 0;
gdjs.bs_951Code.GDfinishObjects1.length = 0;
gdjs.bs_951Code.GDfinishObjects2.length = 0;
gdjs.bs_951Code.GDfinishObjects3.length = 0;
gdjs.bs_951Code.GDfinishObjects4.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects1.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects2.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects3.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects4.length = 0;
gdjs.bs_951Code.GDTPdisObjects1.length = 0;
gdjs.bs_951Code.GDTPdisObjects2.length = 0;
gdjs.bs_951Code.GDTPdisObjects3.length = 0;
gdjs.bs_951Code.GDTPdisObjects4.length = 0;
gdjs.bs_951Code.GDcursorObjects1.length = 0;
gdjs.bs_951Code.GDcursorObjects2.length = 0;
gdjs.bs_951Code.GDcursorObjects3.length = 0;
gdjs.bs_951Code.GDcursorObjects4.length = 0;
gdjs.bs_951Code.GDsoulObjects1.length = 0;
gdjs.bs_951Code.GDsoulObjects2.length = 0;
gdjs.bs_951Code.GDsoulObjects3.length = 0;
gdjs.bs_951Code.GDsoulObjects4.length = 0;

gdjs.bs_951Code.eventsList10(runtimeScene);
gdjs.bs_951Code.GDNewSpriteObjects1.length = 0;
gdjs.bs_951Code.GDNewSpriteObjects2.length = 0;
gdjs.bs_951Code.GDNewSpriteObjects3.length = 0;
gdjs.bs_951Code.GDNewSpriteObjects4.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects1.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects2.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects3.length = 0;
gdjs.bs_951Code.GDNewSprite2Objects4.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects1.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects2.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects3.length = 0;
gdjs.bs_951Code.GDfresh_9595waterObjects4.length = 0;
gdjs.bs_951Code.GDshotsObjects1.length = 0;
gdjs.bs_951Code.GDshotsObjects2.length = 0;
gdjs.bs_951Code.GDshotsObjects3.length = 0;
gdjs.bs_951Code.GDshotsObjects4.length = 0;
gdjs.bs_951Code.GDAttacksObjects1.length = 0;
gdjs.bs_951Code.GDAttacksObjects2.length = 0;
gdjs.bs_951Code.GDAttacksObjects3.length = 0;
gdjs.bs_951Code.GDAttacksObjects4.length = 0;
gdjs.bs_951Code.GDHUDObjects1.length = 0;
gdjs.bs_951Code.GDHUDObjects2.length = 0;
gdjs.bs_951Code.GDHUDObjects3.length = 0;
gdjs.bs_951Code.GDHUDObjects4.length = 0;
gdjs.bs_951Code.GDhPrObjects1.length = 0;
gdjs.bs_951Code.GDhPrObjects2.length = 0;
gdjs.bs_951Code.GDhPrObjects3.length = 0;
gdjs.bs_951Code.GDhPrObjects4.length = 0;
gdjs.bs_951Code.GDTPObjects1.length = 0;
gdjs.bs_951Code.GDTPObjects2.length = 0;
gdjs.bs_951Code.GDTPObjects3.length = 0;
gdjs.bs_951Code.GDTPObjects4.length = 0;
gdjs.bs_951Code.GDEnemHPObjects1.length = 0;
gdjs.bs_951Code.GDEnemHPObjects2.length = 0;
gdjs.bs_951Code.GDEnemHPObjects3.length = 0;
gdjs.bs_951Code.GDEnemHPObjects4.length = 0;
gdjs.bs_951Code.GDsomethingObjects1.length = 0;
gdjs.bs_951Code.GDsomethingObjects2.length = 0;
gdjs.bs_951Code.GDsomethingObjects3.length = 0;
gdjs.bs_951Code.GDsomethingObjects4.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects1.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects2.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects3.length = 0;
gdjs.bs_951Code.GDNewSprite3Objects4.length = 0;
gdjs.bs_951Code.GDfinishObjects1.length = 0;
gdjs.bs_951Code.GDfinishObjects2.length = 0;
gdjs.bs_951Code.GDfinishObjects3.length = 0;
gdjs.bs_951Code.GDfinishObjects4.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects1.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects2.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects3.length = 0;
gdjs.bs_951Code.GDstraight_9595white_9595maliensObjects4.length = 0;
gdjs.bs_951Code.GDTPdisObjects1.length = 0;
gdjs.bs_951Code.GDTPdisObjects2.length = 0;
gdjs.bs_951Code.GDTPdisObjects3.length = 0;
gdjs.bs_951Code.GDTPdisObjects4.length = 0;
gdjs.bs_951Code.GDcursorObjects1.length = 0;
gdjs.bs_951Code.GDcursorObjects2.length = 0;
gdjs.bs_951Code.GDcursorObjects3.length = 0;
gdjs.bs_951Code.GDcursorObjects4.length = 0;
gdjs.bs_951Code.GDsoulObjects1.length = 0;
gdjs.bs_951Code.GDsoulObjects2.length = 0;
gdjs.bs_951Code.GDsoulObjects3.length = 0;
gdjs.bs_951Code.GDsoulObjects4.length = 0;


return;

}

gdjs['bs_951Code'] = gdjs.bs_951Code;
