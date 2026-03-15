#!/bin/bash

PROJECT_DIR="/Users/jack/Proj/clawhub"
LOG_FILE="$PROJECT_DIR/.auto-commit.log"

cd "$PROJECT_DIR" || exit 1

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

if ! git diff --quiet HEAD 2>/dev/null || [ -n "$(git ls-files --others --exclude-standard)" ]; then
    git add -A
    git commit -m "auto: save progress at $TIMESTAMP"
    git push origin main 2>&1

    echo "[$TIMESTAMP] Committed and pushed changes" >> "$LOG_FILE"
else
    echo "[$TIMESTAMP] No changes to commit" >> "$LOG_FILE"
fi
