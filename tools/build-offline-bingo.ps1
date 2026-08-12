param(
    [string]$PackageRoot = "C:\Users\cmrns_4sj17yr\AppData\Roaming\deltamod\pkg.db\gamebanana.dr-bingosync.ners",
    [string]$WorkRoot = "$env:TEMP\DUL-offline-bingo",
    [switch]$SkipPatch
)

$ErrorActionPreference = "Stop"

if (Test-Path -LiteralPath $WorkRoot) {
    Remove-Item -LiteralPath $WorkRoot -Recurse -Force
}
Copy-Item -LiteralPath $PackageRoot -Destination $WorkRoot -Recurse

$goals = Invoke-RestMethod "https://raw.githubusercontent.com/ners-xd/deltarune-bingosync/refs/heads/ch1-5/assets/goal_list.json"
$goalJson = ($goals | ConvertTo-Json -Depth 8 -Compress).Replace('\', '\\').Replace('"', '\"')
$codeRoot = Join-Path $WorkRoot "mod_files\code\all_chapters"

$setup = @'
/// IMPORT

var info = json_parse("__GOALS__");
global.num_goals = array_length(info);
global.goal_list = array_create(global.num_goals);
global.goal_progress = array_create(global.num_goals, 0);
global.goal_custom_vars = [];
global.goal_indexes = ds_map_create();
global.goal_vars_indexes = ds_map_create();
for (var i = 0; i < global.num_goals; i++)
{
    global.goal_list[info[i].mod_slot] = { name: info[i].name, max_progress: 1 };
    if (variable_struct_exists(info[i], "mod_global_var_name"))
    {
        var current_index = array_length(global.goal_custom_vars);
        global.goal_custom_vars[current_index] = { name: info[i].mod_global_var_name, size: info[i].mod_progress_threshold };
        variable_global_set(info[i].mod_global_var_name, array_create(info[i].mod_progress_threshold, ""));
        ds_map_add(global.goal_vars_indexes, string_lower(info[i].name), current_index);
    }
    else
        global.goal_list[info[i].mod_slot].max_progress = info[i].mod_progress_threshold;
    ds_map_add(global.goal_indexes, string_lower(info[i].name), info[i].mod_slot);
}
global.srl_goals = [];
global.ws_client = 1;
global.ws_key = "{}";
global.grazed_at_all = false;
global.hits_frame_delay = -1;
global.buy_frame_delay = -1;
global.bingo_saving = false;
#if CHAPTER_1
global.clover_manual = false;
#elsif CHAPTER_2
global.failed_pot_balance = false;
global.teacupshit = false;
#elsif CHAPTER_3
global.knight_swords_hit = false;
#elsif CHAPTER_4
global.forcedswords = false;
global.balthizard_clouds = false;
#endif
global.cookie_sessionid = -1;
scr_load_bingo_data();
global.color = "green";
global.nickname = "Player";
global.room_id = "offline";
global.password = "offline";
global.last_connected_room = "offline";
instance_create_depth(0, 0, 0, obj_bingo_controller);
instance_destroy();
'@
$setup = $setup.Replace("__GOALS__", $goalJson)
[IO.File]::WriteAllText((Join-Path $codeRoot "gml_Object_obj_bingo_setup_Create_0.gml"), $setup, [Text.UTF8Encoding]::new($false))

$boardNames = @(
    'Have $5000 at one time', 'Get an egg (Original Source)', 'Pacify 15 enemies', 'Kill 5 enemies', 'Get the Bed Inspector title (CH1)',
    'Complete Jevil', 'Get the FreezeRing', 'Buy an item in 5 different rooms', "Complete the Hacker's side quest", 'Spare/Pacify 25 enemies',
    'Buy the RoyalPin from Swatch', 'Defeat King', 'Finish any chapter', 'Defeat Giga Queen', 'Defeat Queen',
    'Kill 10 enemies', 'Complete the GIASFELFEBREHBER puzzle', 'Collect both bananas', 'Get the Spin Cake (CH1)', 'Fuse an item (CH2+)',
    'Get an egg in 2 different chapters', 'Have $3000 at one time', "Use Susie's healing spell (CH2)", 'Get massaged by Ferroll', 'Talk to Starwalker in the forest (CH1)'
)
$controllerPath = Join-Path $codeRoot "gml_Object_obj_bingo_controller_Create_0.gml"
$controller = Get-Content -LiteralPath $controllerPath -Raw
$controller += "`r`n// Offline DUL board initialization`r`n"
$controller += "global.ws_client = 1;`r`nboard_revealed = true;`r`nfixed_board = true;`r`nboard_done = true;`r`nroom_settings_done = true;`r`nfeed_done = true;`r`nroom_base_done = true;`r`nglobal.room_seed = 2026;`r`nglobal.room_lockout = `"Non-Lockout`";`r`n"
for ($i = 0; $i -lt 25; $i++) {
    $name = $boardNames[$i].Replace('"', '\"')
    $controller += "global.goal_name[$i] = `"$name`";`r`nglobal.goal_slot[$i] = `"slot$($i + 1)`";`r`n"
}
$controller += @'
for (var offline_i = 0; offline_i < 25; offline_i++)
{
    var offline_goal_index = ds_map_find_value(global.goal_indexes, string_lower(global.goal_name[offline_i]));
    if (!is_undefined(offline_goal_index) && scr_goal_requirements(offline_goal_index))
        global.goal_colors[offline_i] = "green";
}
'@
[IO.File]::WriteAllText($controllerPath, $controller, [Text.UTF8Encoding]::new($false))

# The original mod blocks texture prefetch until its HTTP goal-list request completes.
# Offline goals are initialized immediately after prefetch, so remove that circular gate.
$chapterOnePrefetchStep = @'
/// IMPORT

if (prog < array_length(pages))
{
    texture_prefetch(pages[prog]);
    prog++;
}
else
{
    loaded = true;
    global.prefetchtexload = true;
}
'@
[IO.File]::WriteAllText((Join-Path $codeRoot "..\chapter1\gml_Object_obj_prefetchtex_Step_0.gml"), $chapterOnePrefetchStep, [Text.UTF8Encoding]::new($false))

# Chapter 1 normally displays a blocking network/goal-list screen while its
# texture pages are prefetched. The offline build already embeds every goal,
# and the regular runner loads textures on demand, so allow initialization to
# continue immediately instead of entering that network retry state.
$chapterOnePrefetchCreate = @'
/// IMPORT

global.autoconnect = false;
global.prefetchtexload = true;
texturepagecount = 0;
prog = 0;
pages = [];
loaded = true;
visible = false;
'@
[IO.File]::WriteAllText((Join-Path $codeRoot "..\chapter1\gml_Object_obj_prefetchtex_Create_0.gml"), $chapterOnePrefetchCreate, [Text.UTF8Encoding]::new($false))

$sharedPrefetchStep = @'
/// PATCH .ignore if CHAPTER_1

/// REPLACE
if (instance_exists(obj_border_controller))
/// CODE
if (true)
/// END

/// REPLACE
    else
/// CODE
    else
/// END
'@
[IO.File]::WriteAllText((Join-Path $codeRoot "gml_Object_obj_prefetchtex_Step_0.gml"), $sharedPrefetchStep, [Text.UTF8Encoding]::new($false))

$timeStepPath = Join-Path $codeRoot "gml_Object_obj_time_Step_1.gml"
$timeStep = Get-Content -LiteralPath $timeStepPath -Raw
$timeStep = [regex]::Replace($timeStep, 'internet = os_is_network_connected\(\);[\s\S]*?\r?\n\}\r?\n\r?\nif \(mouse_visible\)', "internet = false;`r`n`r`nif (mouse_visible)", 1)
[IO.File]::WriteAllText($timeStepPath, $timeStep, [Text.UTF8Encoding]::new($false))

$functionsPath = Join-Path $codeRoot "gml_GlobalScript_bingo_functions.gml"
$functions = Get-Content -LiteralPath $functionsPath -Raw
$functions = [regex]::Replace($functions, '\s*ossafe_http_post\("https://bingosync\.com/api/select"[^;]+;', "`r`n        scr_save_bingo_data();", 1)
[IO.File]::WriteAllText($functionsPath, $functions, [Text.UTF8Encoding]::new($false))

$mainPath = Join-Path $WorkRoot "mod_files\main.csx"
$main = (Get-Content -LiteralPath $mainPath -Raw).Replace("DELTARUNE_bingosync_mod", "DELTARUNE_offline_bingo").Replace('"bingo_data.json"', '"offline_bingo_data.json"')
[IO.File]::WriteAllText($mainPath, $main, [Text.UTF8Encoding]::new($false))

Write-Host "Prepared $WorkRoot with $($goals.Count) bundled goals."

$repoRoot = Split-Path -Parent $PSScriptRoot
$buildRoot = "$env:TEMP\DUL-offline-bingo-build"
$destination = Join-Path $repoRoot "files\offline-bingo"
New-Item -ItemType Directory -Force -Path $destination | Out-Null

if (-not $SkipPatch) {
    $cli = "C:\Users\cmrns_4sj17yr\AppData\Local\deltamod\win-unpacked\resources\app\tools\utmt\win\UndertaleModCli.exe"
    $steamRoot = "C:\Program Files (x86)\Steam\steamapps\common\DELTARUNE"
    $patchScript = Join-Path $WorkRoot "bingosync_script.csx"
    New-Item -ItemType Directory -Force -Path $buildRoot | Out-Null
    for ($chapter = 1; $chapter -le 5; $chapter++) {
        $source = Join-Path $steamRoot "chapter$($chapter)_windows\data.win"
        $output = Join-Path $buildRoot "chapter$chapter.win"
        & $cli load $source -s $patchScript -o $output
        if ($LASTEXITCODE -ne 0) { throw "UTMT failed while patching Chapter $chapter." }
    }
}

for ($chapter = 1; $chapter -le 5; $chapter++) {
    $chapterDestination = Join-Path $destination "chapter$chapter"
    if (Test-Path -LiteralPath $chapterDestination) {
        Remove-Item -LiteralPath $chapterDestination -Recurse -Force
    }
    Copy-Item -LiteralPath (Join-Path $repoRoot "files\chapter$chapter") -Destination $chapterDestination -Recurse
    Get-ChildItem -LiteralPath $chapterDestination -Filter "game.unx*" | Remove-Item -Force

    $input = Join-Path $buildRoot "chapter$chapter.win"
    if ($chapter -eq 1) {
        Copy-Item -LiteralPath $input -Destination (Join-Path $chapterDestination "game.unx")
        continue
    }

    $partCount = switch ($chapter) { 2 { 4 } 3 { 8 } 4 { 8 } 5 { 10 } }
    $bytes = [IO.File]::ReadAllBytes($input)
    $partSize = [Math]::Ceiling($bytes.Length / $partCount)
    for ($part = 0; $part -lt $partCount; $part++) {
        $offset = $part * $partSize
        $count = [Math]::Min($partSize, $bytes.Length - $offset)
        $chunk = [byte[]]::new($count)
        [Array]::Copy($bytes, $offset, $chunk, 0, $count)
        [IO.File]::WriteAllBytes((Join-Path $chapterDestination "game.unx.part$($part + 1)"), $chunk)
    }
}

Copy-Item -LiteralPath (Join-Path $WorkRoot "icon.png") -Destination (Join-Path $destination "icon.png") -Force
Write-Host "Packaged offline Bingo chapters in $destination."
