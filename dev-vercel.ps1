# Helper to run vercel dev with HF_API_KEY set.
# Usage: Open PowerShell in this folder and run: .\dev-vercel.ps1

if (-not $env:HF_API_KEY -or $env:HF_API_KEY -eq "") {
    Write-Host "HF_API_KEY not found in environment."
    $token = Read-Host "Paste your Hugging Face API key (it will not be saved in this file)"
    if (-not $token -or $token -eq "") {
        Write-Error "No API key provided. Aborting."
        exit 1
    }
    $env:HF_API_KEY = $token
} else {
    Write-Host "Using HF_API_KEY from environment."
}

Write-Host "Starting vercel dev..."
npx vercel dev --yes

