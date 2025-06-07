@echo off 
git add .
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "Auto-update: %date% %time%"
    git push
) else (
    echo No changes to commit.
)