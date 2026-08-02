using System.IO;
using UndertaleModLib.Compiler;

EnsureDataLoaded();

string sourcePath = Path.Combine(Path.GetDirectoryName(ScriptPath), "lost-deltarune-loc.gml");
string source = File.ReadAllText(sourcePath);
CodeImportGroup importGroup = new(Data)
{
    AutoCreateAssets = false,
    MainThreadAction = MainThreadAction
};
importGroup.QueueReplace("gml_GlobalScript_loc", source);
importGroup.Import();
