# How to Fix Node.js PATH Issue

## Quick Fix (Run in your PowerShell/CMD terminal):

### Method 1: Run the batch file (Easiest)
```cmd
.\fix-node.bat
```

### Method 2: Manual command (Copy and paste this)
```powershell
$env:Path += ";C:\Program Files\nodejs"
node --version
```

### Method 3: Permanent fix (Run in PowerShell as Administrator)
```powershell
[Environment]::SetEnvironmentVariable("Path", [Environment]::GetEnvironmentVariable("Path", "User") + ";C:\Program Files\nodejs", "User")
```

Then **close and reopen** your terminal.

## If Still Not Working:

1. **Check if Node.js is installed:**
   ```powershell
   Test-Path "C:\Program Files\nodejs\node.exe"
   ```
   Should return `True`

2. **Manually add to PATH:**
   - Press `Win + R`, type `sysdm.cpl`, press Enter
   - Go to "Advanced" tab → "Environment Variables"
   - Under "User variables", find "Path" and click "Edit"
   - Click "New" and add: `C:\Program Files\nodejs`
   - Click OK on all windows
   - **Restart your computer**

3. **Alternative Node.js locations to check:**
   ```powershell
   Get-ChildItem "C:\Program Files" -Filter "nodejs" -Directory -ErrorAction SilentlyContinue
   Get-ChildItem "$env:LOCALAPPDATA" -Filter "nodejs" -Directory -ErrorAction SilentlyContinue
   ```

## Test After Fix:
```powershell
node --version
npm --version
```

Both should return version numbers without errors.

