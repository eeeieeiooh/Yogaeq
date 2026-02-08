#!/usr/bin/env bash
# Run Hugo so edits to .md files in yogaeq/ update instantly in the browser.
# --poll = watch files by polling (reliable on all systems)
# --disableFastRender = full page reload so content changes always show
set -e
cd "$(dirname "$0")"
hugo server --poll 500ms --disableFastRender
