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

    $partCount = switch ($chapter) { 1 { 4 } 2 { 4 } 3 { 8 } 4 { 8 } }
    $bytes = [IO.File]::ReadAllBytes($output)
    $partSize = [Math]::Ceiling($bytes.Length / $partCount)
    for ($part = 0; $part -lt $partCount; $part++) {
        $offset = $part * $partSize
        $count = [Math]::Min($partSize, $bytes.Length - $offset)
        $chunk = [byte[]]::new($count)
        [Array]::Copy($bytes, $offset, $chunk, 0, $count)
        [IO.File]::WriteAllBytes((Join-Path $chapterDestination "game.unx.part$($part + 1)"), $chunk)
    }

    if ($chapter -eq 1) {
        $indexPath = Join-Path $chapterDestination "index.html"
        $indexHtml = Get-Content -LiteralPath $indexPath -Raw
        $chunkSetup = @'
    <script>
      window.gameArchiveReady = Promise.all([1, 2, 3, 4].map(part =>
        fetch(`game.unx.part${part}`).then(response => {
          if (!response.ok) throw new Error(`Could not load game.unx.part${part}`);
          return response.arrayBuffer();
        })
      )).then(parts => {
        const gameUrl = URL.createObjectURL(new Blob(parts));
        const originalFetch = window.fetch;
        window.fetch = function(resource, options) {
          if (typeof resource === "string" && resource.includes("game.unx")) resource = gameUrl;
          else if (resource instanceof Request && resource.url.includes("game.unx")) resource = new Request(gameUrl, resource);
          return originalFetch.call(this, resource, options);
        };
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, ...rest) {
          if (typeof url === "string" && url.includes("game.unx")) url = gameUrl;
          return originalOpen.call(this, method, url, ...rest);
        };
      });
    </script>
'@
        $runnerLoader = @'
    <script>
      window.gameArchiveReady.then(() => {
        const runner = document.createElement("script");
        runner.src = "runner.js";
        document.body.appendChild(runner);
      }).catch(error => {
        console.error("Failed to assemble game archive:", error);
        alert(error.message);
      });
    </script>
'@
        $mainScriptMarker = '    <script type="text/javascript">'
        $indexHtml = $indexHtml.Replace($mainScriptMarker, $chunkSetup.TrimEnd() + "`r`n`r`n" + $mainScriptMarker)
        $indexHtml = $indexHtml.Replace('    <script async type="text/javascript" src="runner.js"></script>', $runnerLoader.TrimEnd())
        Set-Content -LiteralPath $indexPath -Value $indexHtml -Encoding utf8NoBOM
    }
}

Copy-Item -LiteralPath (Join-Path $PackageRoot "icon.png") -Destination (Join-Path $destination "icon.png") -Force
Write-Host "Packaged Chaos Randomizer Chapters 1-4 in $destination."
