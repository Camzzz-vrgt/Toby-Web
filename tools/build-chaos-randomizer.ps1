param(
    [string]$PackageRoot = "C:\Users\cmrns_4sj17yr\AppData\Roaming\deltamod\pkg.db\gamebanana.chaosrando.skywatcher"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$steamRoot = "C:\Program Files (x86)\Steam\steamapps\common\DELTARUNE"
$xdelta = "C:\Users\cmrns_4sj17yr\AppData\Local\deltamod\win-unpacked\resources\app\tools\xdelta3.exe"
$utmt = "C:\Users\cmrns_4sj17yr\AppData\Local\deltamod\win-unpacked\resources\app\tools\utmt\win\UndertaleModCli.exe"
$buildRoot = "$env:TEMP\DUL-chaos-randomizer-build"
$destination = Join-Path $repoRoot "files\chaos-randomizer"

New-Item -ItemType Directory -Force -Path $buildRoot, $destination | Out-Null

$renameScript = Join-Path $buildRoot "rename.csx"
@'
Data.GeneralInfo.Name = Data.Strings.MakeString("DELTARUNE_chaos_randomizer");
'@ | Set-Content -LiteralPath $renameScript -Encoding utf8NoBOM

for ($chapter = 1; $chapter -le 4; $chapter++) {
    $source = Join-Path $steamRoot "chapter$($chapter)_windows\data.win"
    $patch = (Get-ChildItem (Join-Path $PackageRoot "chapter_$chapter") -Filter "*.xdelta").FullName
    $patched = Join-Path $buildRoot "chapter$chapter-patched.win"
    $output = Join-Path $buildRoot "chapter$chapter.win"

    & $xdelta -f -d -s $source $patch $patched
    if ($LASTEXITCODE -ne 0) { throw "Chaos Randomizer Chapter $chapter xdelta failed." }
    & $utmt load $patched -s $renameScript -o $output
    if ($LASTEXITCODE -ne 0) { throw "Chaos Randomizer Chapter $chapter namespace patch failed." }

    $chapterDestination = Join-Path $destination "chapter$chapter"
    if (Test-Path -LiteralPath $chapterDestination) {
        Remove-Item -LiteralPath $chapterDestination -Recurse -Force
    }
    Copy-Item -LiteralPath (Join-Path $repoRoot "files\chapter$chapter") -Destination $chapterDestination -Recurse
    Get-ChildItem -LiteralPath $chapterDestination -Filter "game.unx*" | Remove-Item -Force
    Copy-Item -Path (Join-Path $PackageRoot "mus\*") -Destination (Join-Path $chapterDestination "mus") -Force

    if ($chapter -eq 1) {
        Copy-Item -LiteralPath $output -Destination (Join-Path $chapterDestination "game.unx")
        continue
    }

    $partCount = switch ($chapter) { 2 { 4 } 3 { 8 } 4 { 8 } }
    $bytes = [IO.File]::ReadAllBytes($output)
    $partSize = [Math]::Ceiling($bytes.Length / $partCount)
    for ($part = 0; $part -lt $partCount; $part++) {
        $offset = $part * $partSize
        $count = [Math]::Min($partSize, $bytes.Length - $offset)
        $chunk = [byte[]]::new($count)
        [Array]::Copy($bytes, $offset, $chunk, 0, $count)
        [IO.File]::WriteAllBytes((Join-Path $chapterDestination "game.unx.part$($part + 1)"), $chunk)
    }
}

Copy-Item -LiteralPath (Join-Path $PackageRoot "icon.png") -Destination (Join-Path $destination "icon.png") -Force
Write-Host "Packaged Chaos Randomizer Chapters 1-4 in $destination."
