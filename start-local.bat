@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "Toby Web Local Server" /b py -3 tools\local_server.py --port 2000
) else (
  start "Toby Web Local Server" /b python tools\local_server.py --port 2000
)
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:2000/index.html"
endlocal
