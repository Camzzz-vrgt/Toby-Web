using System;
using UndertaleModLib.Compiler;
using UndertaleModLib.Models;

EnsureDataLoaded();

// Preserve the native room order so GameMaker initializes every room instance
// normally. Only shorten the warning screen's timer before its existing
// room_goto(rm_menu); directly swapping the first-room pointer skips menu
// Create events in this runner.
var warningCreate = Data.Code.ByName("gml_Object_obj_warning_wenis_Create_0");
if (warningCreate is null)
    throw new Exception("FNAFTale warning-screen Create event was not found.");

var warningCode = GetDecompiledText(warningCreate);
warningCode = warningCode.Replace("alarm_set(0, 325);", "alarm_set(0, 1);");
var imports = new CodeImportGroup(Data);
imports.QueueReplace(warningCreate.Name.Content, warningCode);
imports.Import();
ScriptMessage("Applied the minimal FNAFTale web startup patch.");
