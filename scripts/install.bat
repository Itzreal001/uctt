@echo off
REM Installation helper script for UCT Frontend (Windows)
REM This script helps install dependencies with optimizations for faster downloads

echo.
echo 🚀 UCT Frontend - Dependency Installation Helper
echo ==================================================
echo.

REM Check if pnpm is installed
where pnpm >nul 2>nul
if %errorlevel% equ 0 (
    echo ✅ pnpm detected
    echo.
    echo Installing dependencies with pnpm...
    echo This is the recommended approach for faster installation.
    echo.
    call pnpm install
    if %errorlevel% equ 0 (
        echo.
        echo ✅ Dependencies installed successfully with pnpm!
    ) else (
        echo.
        echo ❌ Installation failed!
        exit /b 1
    )
) else (
    REM Check if npm is installed
    where npm >nul 2>nul
    if %errorlevel% equ 0 (
        echo ⚠️  pnpm not found, falling back to npm
        echo For faster installation, consider installing pnpm:
        echo   npm install -g pnpm@10.4.1
        echo.
        echo Installing dependencies with npm...
        call npm install --legacy-peer-deps
        if %errorlevel% equ 0 (
            echo.
            echo ✅ Dependencies installed successfully with npm!
        ) else (
            echo.
            echo ❌ Installation failed!
            exit /b 1
        )
    ) else (
        echo ❌ Neither pnpm nor npm found!
        echo Please install Node.js and npm first.
        exit /b 1
    )
)

echo.
echo 📦 Installation complete!
echo.
echo Next steps:
echo   1. Development:  pnpm dev
echo   2. Build:        pnpm build
echo   3. Production:   pnpm start
echo.
pause
