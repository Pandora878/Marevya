@echo off
title Math Quest - Servidor do Ranking
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo ERRO: o Node.js nao esta instalado neste computador.
  echo Instale o Node.js e execute este arquivo novamente.
  echo.
  pause
  exit /b 1
)
start "Math Quest - Navegador" http://localhost:3000
node server.js
pause
