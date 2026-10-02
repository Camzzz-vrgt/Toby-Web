param([switch]$NoBrowser)

$ErrorActionPreference = 'Stop'
$siteRoot = [System.IO.Path]::GetFullPath((Split-Path -Parent $MyInvocation.MyCommand.Path))
$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.js' = 'text/javascript; charset=utf-8'
    '.png' = 'image/png'
    '.jpg' = 'image/jpeg'
    '.ogg' = 'audio/ogg'
    '.mp3' = 'audio/mpeg'
    '.wav' = 'audio/wav'
    '.otf' = 'font/otf'
}

$listener = [System.Net.HttpListener]::new()
$port = $null
foreach ($candidate in 8765..8775) {
    $listener.Prefixes.Clear()
    $listener.Prefixes.Add("http://localhost:$candidate/")
    try {
        $listener.Start()
        $port = $candidate
        break
    } catch {
        if ($listener.IsListening) { $listener.Stop() }
    }
}
if ($null -eq $port) {
    throw 'Could not start a local web server on ports 8765–8775.'
}

$address = "http://localhost:$port/"
Write-Host "Playing Ralsei Shooting Simulator at $address"
Write-Host 'Keep this window open while playing. Press Ctrl+C to stop.'
if (-not $NoBrowser) { Start-Process $address }

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $response = $context.Response
        try {
            $urlPath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath).TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($urlPath)) { $urlPath = 'index.html' }
            $filePath = [System.IO.Path]::GetFullPath((Join-Path $siteRoot $urlPath))
            if (-not $filePath.StartsWith($siteRoot + [System.IO.Path]::DirectorySeparatorChar, [System.StringComparison]::OrdinalIgnoreCase)) {
                $response.StatusCode = 403
                continue
            }
            if (-not [System.IO.File]::Exists($filePath)) {
                $response.StatusCode = 404
                continue
            }
            $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
            $response.ContentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { 'application/octet-stream' }
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } catch {
            $response.StatusCode = 500
            Write-Warning $_
        } finally {
            $response.Close()
        }
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
