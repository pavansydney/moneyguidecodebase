# Fix Node.js PATH issue
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow

$nodePath = "C:\Program Files\nodejs"
if (Test-Path "$nodePath\node.exe") {
    Write-Host "Node.js found at: $nodePath" -ForegroundColor Green
    
    # Add to current session PATH
    if ($env:Path -notlike "*$nodePath*") {
        $env:Path += ";$nodePath"
        Write-Host "Added Node.js to current session PATH" -ForegroundColor Green
    }
    
    # Verify it works
    Write-Host "`nTesting Node.js..." -ForegroundColor Yellow
    $nodeVersion = & "$nodePath\node.exe" --version
    $npmVersion = & "$nodePath\npm.cmd" --version
    
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
    Write-Host "npm version: $npmVersion" -ForegroundColor Green
    
    Write-Host "`nNode.js is now available in this session!" -ForegroundColor Green
    Write-Host "To make it permanent, close and reopen PowerShell, or restart your computer." -ForegroundColor Cyan
} else {
    Write-Host "Node.js not found at expected location: $nodePath" -ForegroundColor Red
    Write-Host "Please check your Node.js installation." -ForegroundColor Red
}

