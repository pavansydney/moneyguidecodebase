@echo off
echo ========================================
echo Node.js PATH Fix Script
echo ========================================
echo.

REM Check if Node.js exists
if exist "C:\Program Files\nodejs\node.exe" (
    echo [OK] Node.js found at: C:\Program Files\nodejs
) else (
    echo [ERROR] Node.js not found at expected location!
    echo Please check your Node.js installation.
    pause
    exit /b 1
)

REM Add to PATH for current session
set "PATH=%PATH%;C:\Program Files\nodejs"

REM Test Node.js
echo.
echo Testing Node.js...
"C:\Program Files\nodejs\node.exe" --version
if %errorlevel% neq 0 (
    echo [ERROR] Node.js test failed!
    pause
    exit /b 1
)

REM Test npm
echo Testing npm...
"C:\Program Files\nodejs\npm.cmd" --version
if %errorlevel% neq 0 (
    echo [ERROR] npm test failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Node.js is now working!
echo ========================================
echo.
echo To make this permanent:
echo 1. Close this window
echo 2. Open a NEW PowerShell or Command Prompt
echo 3. Run: node --version
echo.
echo If it still doesn't work, restart your computer.
echo.
pause

