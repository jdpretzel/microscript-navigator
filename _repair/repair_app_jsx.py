#!/usr/bin/env python3
"""
AAR WebApp Microscript Data Repair Script

Replaces truncated WEEK_N_MARKDOWN content in App.jsx with validated
source markdown from the Final directory.

Usage:
    cd /Users/john/AAR_Project/WebApp/microscript-app
    python3 _repair/repair_app_jsx.py

Creates backup at _repair/App.jsx.bak before modifying.
"""

import re
import shutil
from pathlib import Path

# Paths
APP_JSX = Path("/Users/john/AAR_Project/WebApp/microscript-app/src/App.jsx")
BACKUP = Path("/Users/john/AAR_Project/WebApp/microscript-app/_repair/App.jsx.bak")
SOURCE_DIR = Path("/Users/john/AAR_Project/MicroScripts/Final")

# Week mapping (only repair weeks 1, 2, 3, 5 — week 4 is complete)
WEEKS_TO_REPAIR = {
    1: "AAR_MicroScripts_Week1_final.md",
    2: "AAR_MicroScripts_Week2_final.md",
    3: "AAR_MicroScripts_Week3_final.md",
    5: "AAR_MicroScripts_Week5_final.md",
}


def escape_backticks(content: str) -> str:
    """Escape backticks for JSX template literal."""
    return content.replace("`", "\\`")


def count_topics(content: str) -> int:
    """Count H1 headers (topics) in markdown content."""
    return len(re.findall(r"^# ", content, re.MULTILINE))


def extract_week_content(jsx_content: str, week_num: int) -> str:
    """Extract current content of WEEK_N_MARKDOWN from App.jsx."""
    pattern = rf"const WEEK_{week_num}_MARKDOWN = `(.*?)`;"
    match = re.search(pattern, jsx_content, re.DOTALL)
    return match.group(1) if match else ""


def replace_week_content(jsx_content: str, week_num: int, new_content: str) -> str:
    """Replace WEEK_N_MARKDOWN content in App.jsx."""
    escaped = escape_backticks(new_content)
    pattern = rf"(const WEEK_{week_num}_MARKDOWN = `).*?(`;)"
    replacement = rf"\g<1>{escaped}\g<2>"
    return re.sub(pattern, replacement, jsx_content, flags=re.DOTALL)


def main():
    print("=" * 60)
    print("AAR WebApp Microscript Repair")
    print("=" * 60)
    
    # Verify source files exist
    print("\n[1/5] Verifying source files...")
    for week, filename in WEEKS_TO_REPAIR.items():
        source = SOURCE_DIR / filename
        if not source.exists():
            print(f"  ERROR: Missing {source}")
            return 1
        topics = count_topics(source.read_text())
        print(f"  Week {week}: {source.name} ({topics} topics)")
    
    # Create backup
    print("\n[2/5] Creating backup...")
    if not APP_JSX.exists():
        print(f"  ERROR: App.jsx not found at {APP_JSX}")
        return 1
    shutil.copy(APP_JSX, BACKUP)
    print(f"  Backup saved to {BACKUP}")
    
    # Read App.jsx
    print("\n[3/5] Reading App.jsx...")
    jsx_content = APP_JSX.read_text()
    print(f"  Size: {len(jsx_content):,} bytes")
    
    # Show current state
    print("\n[4/5] Current topic counts in App.jsx:")
    for week in [1, 2, 3, 4, 5]:
        current = extract_week_content(jsx_content, week)
        topics = count_topics(current)
        status = "✓" if topics == 15 else f"✗ (missing {15 - topics})"
        print(f"  Week {week}: {topics} topics {status}")
    
    # Perform replacements
    print("\n[5/5] Replacing content...")
    for week, filename in WEEKS_TO_REPAIR.items():
        source = SOURCE_DIR / filename
        new_content = source.read_text()
        jsx_content = replace_week_content(jsx_content, week, new_content)
        print(f"  Week {week}: replaced with {len(new_content):,} bytes")
    
    # Write repaired file
    APP_JSX.write_text(jsx_content)
    print(f"\n  App.jsx updated ({len(jsx_content):,} bytes)")
    
    # Verify
    print("\n" + "=" * 60)
    print("VERIFICATION")
    print("=" * 60)
    jsx_content = APP_JSX.read_text()
    all_good = True
    for week in [1, 2, 3, 4, 5]:
        current = extract_week_content(jsx_content, week)
        topics = count_topics(current)
        status = "✓" if topics == 15 else "✗"
        print(f"  Week {week}: {topics} topics {status}")
        if topics != 15:
            all_good = False
    
    if all_good:
        print("\n✓ All weeks have 15 topics. Repair successful!")
        print("\nNext steps:")
        print("  1. cd /Users/john/AAR_Project/WebApp/microscript-app")
        print("  2. npm run build")
        print("  3. git add -A && git commit -m 'Fix truncated microscript data'")
        print("  4. git push")
        return 0
    else:
        print("\n✗ Some weeks still have incorrect topic counts.")
        print("  Check the source files and try again.")
        return 1


if __name__ == "__main__":
    exit(main())
