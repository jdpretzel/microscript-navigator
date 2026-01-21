#!/usr/bin/env python3
"""
App.jsx Assembly Script
-----------------------
Deterministic script to replace WEEK_N_MARKDOWN content in App.jsx.
No loops, no retries, explicit failure on any error.

Usage: python3 assemble_app_jsx.py

Preconditions:
- escaped_week1.txt, escaped_week2.txt, escaped_week3.txt, escaped_week5.txt exist
- App.jsx.bak exists as backup
- src/App.jsx exists

Postconditions on success:
- src/App.jsx updated with all 4 weeks
- All weeks have exactly 15 topics
- Exit code 0

Postconditions on failure:
- Original App.jsx unchanged
- Error message printed
- Exit code 1
"""

import re
import sys
import os

REPAIR_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(REPAIR_DIR)
APP_JSX_PATH = os.path.join(PROJECT_DIR, 'src', 'App.jsx')

WEEKS_TO_REPLACE = ['1', '2', '3', '5']  # Week 4 is already correct

def main():
    print("=" * 60)
    print("App.jsx Assembly Script")
    print("=" * 60)
    
    # Step 1: Verify all escaped content files exist
    print("\n[1/5] Verifying escaped content files...")
    escaped_content = {}
    for week in WEEKS_TO_REPLACE:
        filepath = os.path.join(REPAIR_DIR, f'escaped_week{week}.txt')
        if not os.path.exists(filepath):
            print(f"ERROR: Missing {filepath}")
            sys.exit(1)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        topic_count = len(re.findall(r'^# [A-Z]', content, re.MULTILINE))
        if topic_count != 15:
            print(f"ERROR: Week {week} has {topic_count} topics, expected 15")
            sys.exit(1)
        escaped_content[week] = content
        print(f"  Week {week}: 15 topics ✓")
    
    # Step 2: Read current App.jsx
    print("\n[2/5] Reading App.jsx...")
    if not os.path.exists(APP_JSX_PATH):
        print(f"ERROR: App.jsx not found at {APP_JSX_PATH}")
        sys.exit(1)
    with open(APP_JSX_PATH, 'r', encoding='utf-8') as f:
        app_jsx = f.read()
    print(f"  Read {len(app_jsx)} characters")
    
    # Step 3: Replace each week's content
    print("\n[3/5] Replacing week content...")
    for week in WEEKS_TO_REPLACE:
        # Pattern to match: const WEEK_N_MARKDOWN = `...`;
        # We need to replace the content between backticks
        pattern = rf'(const WEEK_{week}_MARKDOWN = `)([^`]*)(`;)'
        
        match = re.search(pattern, app_jsx, re.DOTALL)
        if not match:
            print(f"ERROR: Could not find WEEK_{week}_MARKDOWN pattern")
            sys.exit(1)
        
        old_content = match.group(2)
        old_topics = len(re.findall(r'^# [A-Z]', old_content, re.MULTILINE))
        
        # Replace with escaped content
        replacement = f'{match.group(1)}{escaped_content[week]}{match.group(3)}'
        app_jsx = app_jsx[:match.start()] + replacement + app_jsx[match.end():]
        
        print(f"  Week {week}: replaced ({old_topics} -> 15 topics)")
    
    # Step 4: Verify all weeks now have 15 topics
    print("\n[4/5] Validating replacements...")
    for week in ['1', '2', '3', '4', '5']:
        pattern = rf'const WEEK_{week}_MARKDOWN = `([^`]*)`;'
        match = re.search(pattern, app_jsx, re.DOTALL)
        if not match:
            print(f"ERROR: WEEK_{week}_MARKDOWN not found after replacement")
            sys.exit(1)
        content = match.group(1)
        topic_count = len(re.findall(r'^# [A-Z]', content, re.MULTILINE))
        if topic_count != 15:
            print(f"ERROR: Week {week} has {topic_count} topics after replacement, expected 15")
            sys.exit(1)
        print(f"  Week {week}: 15 topics ✓")
    
    # Step 5: Write updated App.jsx
    print("\n[5/5] Writing updated App.jsx...")
    with open(APP_JSX_PATH, 'w', encoding='utf-8') as f:
        f.write(app_jsx)
    print(f"  Written {len(app_jsx)} characters")
    
    print("\n" + "=" * 60)
    print("SUCCESS: App.jsx updated with all microscript content")
    print("=" * 60)
    print("\nNext steps:")
    print("  1. Run: npm run build")
    print("  2. If build succeeds: git add -A && git commit -m 'Fix truncated microscript data' && git push")
    sys.exit(0)

if __name__ == '__main__':
    main()
