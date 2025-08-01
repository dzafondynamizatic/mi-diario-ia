# Script de PowerShell para generar artículos localmente
# Uso: .\generate-local.ps1

Write-Host "🚀 Iniciando generación local de artículos..." -ForegroundColor Cyan

# Verificar si Node.js está instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js detectado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js no está instalado. Instálalo desde https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Verificar si existe package.json
if (-not (Test-Path "package.json")) {
    Write-Host "📦 Creando package.json..." -ForegroundColor Yellow
    npm init -y
}

# Instalar dependencias si no existen
if (-not (Test-Path "node_modules")) {
    Write-Host "📥 Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

# Ejecutar validación
Write-Host "🔍 Validando artículos..." -ForegroundColor Yellow
node scripts/validate-articles.js

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Validación exitosa" -ForegroundColor Green
    
    # Generar artículos
    Write-Host "🤖 Generando artículos..." -ForegroundColor Yellow
    node scripts/generate-articles-local.js
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Artículos generados exitosamente" -ForegroundColor Green
        
        # Generar estadísticas
        Write-Host "📊 Generando estadísticas..." -ForegroundColor Yellow
        node scripts/generate-stats.js
        
        # Mostrar opciones para servir
        Write-Host ""
        Write-Host "🎉 ¡Generación completada!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📋 Opciones para servir localmente:" -ForegroundColor Cyan
        Write-Host "  1. Python: python -m http.server 8000" -ForegroundColor White
        Write-Host "  2. Node.js: npx serve ." -ForegroundColor White
        Write-Host "  3. VS Code: Live Server extension" -ForegroundColor White
        Write-Host ""
        
        # Preguntar si quiere servir automáticamente
        $serve = Read-Host "¿Quieres servir el blog automáticamente? (y/N)"
        if ($serve -eq "y" -or $serve -eq "Y") {
            Write-Host "🌐 Iniciando servidor local..." -ForegroundColor Cyan
            Start-Process "http://localhost:8000"
            python -m http.server 8000
        }
    } else {
        Write-Host "❌ Error generando artículos" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Validación fallida. Revisa los errores arriba." -ForegroundColor Red
}
