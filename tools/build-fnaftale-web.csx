using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using UndertaleModLib.Compiler;
using UndertaleModLib.Models;

EnsureDataLoaded();

var menu = Data.Rooms.ByName("rm_menu");
if (menu is null)
    throw new Exception("FNAFTale menu room was not found.");

Data.GeneralInfo.RoomOrder[0].Resource = menu;
Data.GeneralInfo.DefaultWindowWidth = 480;
Data.GeneralInfo.DefaultWindowHeight = 270;

// The older HTML5 runner resolves streamed sounds from the filename stored in
// game data and bypasses the page's fetch hooks. Point every sound at the
// exported web-audio directory so battle music works as reliably as menu SFX.
foreach (var sound in Data.Sounds)
{
    if (sound is null)
        continue;

    bool uncompressedEmbedded =
        sound.Flags.HasFlag(UndertaleSound.AudioEntryFlags.IsEmbedded) &&
        !sound.Flags.HasFlag(UndertaleSound.AudioEntryFlags.IsCompressed);
    string extension = uncompressedEmbedded ? ".wav" : ".ogg";
    sound.File = Data.Strings.MakeString("audio/" + sound.Name.Content + extension);
}

uint nextLayerId = 1;
foreach (var room in Data.Rooms)
{
    foreach (var layer in room.Layers)
        nextLayerId = Math.Max(nextLayerId, layer.LayerId + 1);
}

string[] runtimeLayerNames =
{
    "Text",
    "Building",
    "Attacks",
    "HighAttacks",
    "Cover",
    "Big_Fuckin_Saw_Maze",
    "Instances"
};

foreach (var room in Data.Rooms)
{
    foreach (string layerName in runtimeLayerNames)
    {
        if (room.Layers.Any(layer => layer.LayerName?.Content == layerName))
            continue;

        var template = Data.Rooms
            .SelectMany(candidate => candidate.Layers)
            .FirstOrDefault(layer => layer.LayerName?.Content == layerName);

        room.Layers.Add(new UndertaleRoom.Layer
        {
            LayerName = Data.Strings.MakeString(layerName),
            Data = new UndertaleRoom.Layer.LayerInstancesData(),
            LayerType = UndertaleRoom.LayerType.Instances,
            LayerDepth = template?.LayerDepth ?? -1000,
            LayerId = nextLayerId++,
            IsVisible = true
        });
    }
}

var imports = new CodeImportGroup(Data);

// The HTML5 runner does not reliably expose room layer names to
// instance_create_layer(). FNAFTale creates nearly every dialogue/cutscene
// object on a layer named "Text", which made dialogue crash in rooms where
// that lookup failed. Preserve the intended front-most ordering with depth.
foreach (var code in Data.Code)
{
    if (code?.Name?.Content is null)
        continue;

    string source = GetDecompiledText(code.Name.Content);
    if (!source.Contains("\"Text\""))
        continue;

    string patched = Regex.Replace(
        source,
        @"instance_create_layer\(([^,]+),\s*([^,]+),\s*\""Text\"",\s*([^\)]+)\)",
        "instance_create_depth($1, $2, -1000, $3)"
    );

    if (code.Name.Content == "gml_Object_obj_squeak_Draw_0")
    {
        patched = patched.Replace(
            "draw_text_transformed(130 - ((image_alpha == 0) * 70), y + -29, \"\" + string(string_copy(scarab, 0, ceil(text_scroll))), image_xscale + 0, image_yscale + 0, 0);",
            "draw_text(130 - ((image_alpha == 0) * 70), y - 29, string_copy(scarab, 0, ceil(text_scroll)));"
        );
    }

    if (patched != source)
        imports.QueueReplace(code.Name.Content, patched);
}

string boxCreateSource = GetDecompiledText("gml_Object_obj_box_Create_0");
boxCreateSource = boxCreateSource.Replace(
    "national_spamton = part_system_create_layer(\"Building\", 0);",
    "national_spamton = part_system_create();\npart_system_depth(national_spamton, 0);"
);
imports.QueueReplace("gml_Object_obj_box_Create_0", boxCreateSource);
imports.QueuePrepend(
    "gml_Object_obj_menu_bobbler_Create_0",
    "if (!instance_exists(obj_settings)) instance_create_depth(0, 0, 1000000, obj_settings);\n"
);
imports.QueueReplace(
    "gml_Object_obj_menu_bobbler_Draw_0",
    File.ReadAllText(Path.Combine(Environment.CurrentDirectory, "tools", "fnaftale-menu-draw-web.gml"))
);
imports.Import();

ScriptMessage("FNAFTale web compatibility patch applied.");
