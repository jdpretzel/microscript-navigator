# AAR WebApp Microscript Data Repair Task

**Created**: 2026-01-09
**Purpose**: Replace truncated markdown data in App.jsx with validated source content

---

## Problem Summary

The web app's `App.jsx` contains embedded markdown data for 5 weeks of microscripts. During initial deployment (RTF conversion), content was truncated:

| Week | Expected Topics | Current Topics | Missing |
|------|-----------------|----------------|---------|
| Week 1 | 15 | 2 | 13 |
| Week 2 | 15 | 7 | 8 |
| Week 3 | 15 | 7 | 8 |
| Week 4 | 15 | 15 | 0 ✓ |
| Week 5 | 15 | 8 | 7 |

**Total**: 36 topics missing

---

## File Locations

### Authoritative Source (validated markdown)
```
/Users/john/AAR_Project/MicroScripts/Final/
├── AAR_MicroScripts_Week1_final.md
├── AAR_MicroScripts_Week2_final.md
├── AAR_MicroScripts_Week3_final.md
├── AAR_MicroScripts_Week4_final.md
└── AAR_MicroScripts_Week5_final.md
```

### Target File
```
/Users/john/AAR_Project/WebApp/microscript-app/src/App.jsx
```

### Backup Location
```
/Users/john/AAR_Project/WebApp/microscript-app/_repair/App.jsx.bak
```

---

## App.jsx Structure

The file contains JavaScript template literals for each week:

```javascript
// Line 21
const WEEK_1_MARKDOWN = `
[markdown content here]
`;

// Line 74
const WEEK_2_MARKDOWN = `
[markdown content here]
`;

// Line 244
const WEEK_3_MARKDOWN = `
[markdown content here]
`;

// Line 408
const WEEK_4_MARKDOWN = `
[markdown content here]
`;

// Line 801
const WEEK_5_MARKDOWN = `
[markdown content here]
`;
```

**CRITICAL**: The markdown is inside JavaScript template literals (backticks). Any backticks within the markdown content must be escaped as \` or the JSX will break.

---

## Task Steps

### Phase 1: Backup
1. Copy `App.jsx` to `_repair/App.jsx.bak`

### Phase 2: Replace Week Data (Weeks 1, 2, 3, 5 only — Week 4 is correct)

For each incomplete week:

1. Read the authoritative source file from `/Users/john/AAR_Project/MicroScripts/Final/`
2. Escape any backticks in the markdown content (` → \`)
3. Locate the corresponding `const WEEK_N_MARKDOWN = \`` line
4. Replace the content between the opening backtick and the closing \`; with the escaped source content
5. Verify the replacement didn't break JSX syntax

### Phase 3: Validate
1. Count `# ` patterns in each WEEK_N_MARKDOWN section
2. Confirm all counts = 15
3. Run `npm run build` to verify no syntax errors

### Phase 4: Deploy
1. Stage and commit changes
2. Push to GitHub (auto-deploys to Vercel)

---

## Encoding Notes

- Source files are UTF-8 markdown
- Watch for smart quotes, em-dashes, non-breaking spaces
- The markdown parser in the app handles standard markdown; ensure no RTF artifacts remain

---

## Verification Commands

```bash
# Count topics per week in App.jsx after repair
awk '/^const WEEK_1_MARKDOWN/,/^const WEEK_2_MARKDOWN/' src/App.jsx | grep -c "^# "
awk '/^const WEEK_2_MARKDOWN/,/^const WEEK_3_MARKDOWN/' src/App.jsx | grep -c "^# "
awk '/^const WEEK_3_MARKDOWN/,/^const WEEK_4_MARKDOWN/' src/App.jsx | grep -c "^# "
awk '/^const WEEK_4_MARKDOWN/,/^const WEEK_5_MARKDOWN/' src/App.jsx | grep -c "^# "
awk '/^const WEEK_5_MARKDOWN/,/^function App/' src/App.jsx | grep -c "^# "

# All should return 15
```

---

## Success Criteria

- [ ] All 5 weeks show 15 topics each
- [ ] `npm run build` succeeds
- [ ] Local dev server renders all topics correctly
- [ ] GitHub push succeeds
- [ ] Vercel deployment succeeds
