/* 
================================================================================
 TOPIC 6 — ADVANCED & UNDO (Optional)
 Learn: git restore, git reset, git revert, git commit --amend
================================================================================

💬 PAHAMI KONSEP DULU - Tanya AI:
--------------------------------------------------------------------------------
"Saya belajar Git undo commands. Sebelum mulai praktik, tolong jelaskan:

1. Apa bedanya git restore, git reset, dan git revert?
2. Kapan pakai restore vs reset vs revert?
3. Apa itu 'reset --soft', '--mixed', dan '--hard'?
4. Kenapa 'git reset --hard' dangerous?
5. Apa fungsi 'git commit --amend'?
6. Apa yang terjadi pada history saat pakai masing-masing command?

Jelaskan dengan analogi seperti 'undo di Word' atau 'time travel' supaya 
mudah dipahami. Fokus ke kapan pakai yang mana dan risikonya."
--------------------------------------------------------------------------------

⚠️  PENTING: Pahami konsep dan risiko di atas SEBELUM mulai exercises!
⚠️  DANGER ZONE: Commands di topic ini bisa mengubah/menghapus history!
*/

/*
================================================================================
 PART A: GIT RESTORE (Safe - Undo Working Directory Changes)
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 6.1: Restore Uncommitted Changes
--------------------------------------------------------------------------------
*/

## Exercise 6.1: Restore Uncommitted Changes

**Scenario:** Kamu edit file tapi hasilnya jelek. Mau balik ke kondisi terakhir commit.

**Tasks:**
1. Edit file (tapi jangan commit)
2. Restore ke kondisi terakhir
3. Understand working directory restore

**Commands:**
```bash
# Setup: Buat file dan commit
echo "Original content" > test.txt
git add test.txt
git commit -m "Add test.txt"

# Edit file (mistake!)
echo "Bad changes" >> test.txt

# Cek status
git status
git diff test.txt

# Restore file ke kondisi terakhir commit
git restore test.txt

# Verify - changes gone!
cat test.txt
git status
```

**Expected Output:**
```
# git status (before restore):
Changes not staged for commit:
  modified:   test.txt

# git status (after restore):
nothing to commit, working tree clean

# cat test.txt:
Original content
(Bad changes HILANG!)
```

**Verification:** 
- File kembali ke kondisi terakhir commit ✅
- Uncommitted changes hilang (PERMANENT!) ✅
- Working directory clean ✅

**⚠️ Warning:**
- `git restore` PERMANENT - changes tidak bisa di-recover
- Only use kalau yakin mau buang changes
- Git tidak bisa undo `git restore`!

**💡 Use Cases:**
- Buang perubahan yang salah
- Reset file ke kondisi terakhir
- Clean working directory

---

/*
--------------------------------------------------------------------------------
 EXERCISE 6.2: Restore Staged File
--------------------------------------------------------------------------------
*/

## Exercise 6.2: Restore Staged File

**Scenario:** Kamu sudah `git add` tapi mau unstage file (tanpa hilangkan changes).

**Tasks:**
1. Edit dan stage file
2. Unstage dengan restore
3. Changes masih ada, tapi unstaged

**Commands:**
```bash
# Edit file
echo "New changes" >> test.txt

# Stage file
git add test.txt

# Cek status
git status

# Oops, belum mau commit!
# Unstage file (but keep changes)
git restore --staged test.txt

# Cek status - unstaged now!
git status

# Verify - changes masih ada
cat test.txt
```

**Expected Output:**
```
# git status (before restore --staged):
Changes to be committed:
  modified:   test.txt

# git status (after restore --staged):
Changes not staged for commit:
  modified:   test.txt

# cat test.txt:
Original content
New changes
(Changes masih ada!)
```

**Verification:** 
- File unstaged ✅
- Changes NOT lost ✅
- Ready to edit more or stage again ✅

**💡 Command Comparison:**
```
git restore <file>           → Buang changes di working directory
git restore --staged <file>  → Unstage, tapi keep changes
```

---

/*
================================================================================
 PART B: GIT RESET (DANGER ZONE - Rewrite History)
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 6.3: Reset Soft (Keep Changes)
--------------------------------------------------------------------------------
*/

## Exercise 6.3: Reset Soft (Keep Changes Staged)

**Scenario:** Kamu commit terlalu cepat, mau undo commit tapi keep changes di staging.

**Tasks:**
1. Make commit
2. Reset soft - undo commit but keep staged
3. Edit more, then recommit

**Commands:**
```bash
# Make changes and commit
echo "Feature 1" > feature.txt
git add feature.txt
git commit -m "Add feature 1"

# Oops, lupa tambahkan sesuatu!
# Undo commit, keep changes staged
git reset --soft HEAD~1

# Cek status - file masih staged!
git status

# Lihat log - commit hilang
git log --oneline

# Add more things
echo "Feature 1 completed" >> feature.txt

# Stage dan commit lagi
git add feature.txt
git commit -m "Add feature 1 (complete)"
```

**Expected Output:**
```
# git status (after reset --soft):
Changes to be committed:
  new file:   feature.txt

# git log (after reset):
(Latest commit gone, back to previous commit)
```

**Verification:** 
- Commit di-undo ✅
- Changes masih ada di staging ✅
- Working directory unchanged ✅
- History berubah (commit hilang) ✅

**💡 Reset Levels:**
```
git reset --soft HEAD~1
  ↓
Commit: UNDO
Staging: KEEP (staged)
Working Directory: KEEP (unchanged)

Use case: Undo commit, edit more, recommit
```

---

/*
--------------------------------------------------------------------------------
 EXERCISE 6.4: Reset Mixed (Keep Changes Unstaged)
--------------------------------------------------------------------------------
*/

## Exercise 6.4: Reset Mixed (Default - Keep Changes Unstaged)

**Scenario:** Undo commit AND unstage, tapi keep changes di working directory.

**Tasks:**
1. Make commit
2. Reset mixed (default)
3. Changes unstaged but exist

**Commands:**
```bash
# Make changes and commit
echo "Feature 2" > feature2.txt
git add feature2.txt
git commit -m "Add feature 2"

# Reset (--mixed is default)
git reset HEAD~1
# Same as: git reset --mixed HEAD~1

# Cek status - file unstaged!
git status

# File masih ada
cat feature2.txt

# Lihat log
git log --oneline
```

**Expected Output:**
```
# git status (after reset):
Untracked files:
  feature2.txt

(File ada tapi unstaged!)

# cat feature2.txt:
Feature 2
(Changes masih ada!)
```

**Verification:** 
- Commit di-undo ✅
- Changes unstaged ✅
- Working directory unchanged ✅

**💡 Reset Levels:**
```
git reset --mixed HEAD~1 (atau git reset HEAD~1)
  ↓
Commit: UNDO
Staging: UNDO (unstaged)
Working Directory: KEEP (unchanged)

Use case: Undo commit, restructure changes, recommit properly
```

---

/*
--------------------------------------------------------------------------------
 EXERCISE 6.5: Reset Hard (Delete Everything!)
--------------------------------------------------------------------------------
*/

## Exercise 6.5: Reset Hard (DANGEROUS!)

**Scenario:** Undo commit DAN buang semua changes. PERMANENT!

**⚠️  EXTREME DANGER:**
- Changes akan HILANG PERMANENT
- CANNOT be recovered
- Use only kalau 100% yakin!

**Tasks:**
1. Make commit
2. Reset hard - EVERYTHING GONE!
3. Understand the danger

**Commands:**
```bash
# Setup: Create multiple commits
echo "Good commit" > good.txt
git add good.txt
git commit -m "Good commit"

echo "Bad commit" > bad.txt
git add bad.txt
git commit -m "Bad commit (will delete)"

# Verify files exist
ls

# ⚠️  DANGER: Reset hard - delete everything!
git reset --hard HEAD~1

# Files GONE!
ls

# Log shows we're back
git log --oneline
```

**Expected Output:**
```
# ls (before reset):
bad.txt  good.txt

# ls (after reset):
good.txt
(bad.txt HILANG PERMANENT!)

# git log:
(Latest commit gone, back to "Good commit")
```

**Verification:** 
- Commit di-undo ✅
- Staging cleared ✅
- Working directory reset ✅
- Changes LOST PERMANENT ⚠️

**💡 Reset Levels:**
```
git reset --hard HEAD~1
  ↓
Commit: UNDO
Staging: CLEAR
Working Directory: RESET (DELETED!)

Use case: Abandon work completely, start fresh
⚠️ DANGER: Cannot be recovered!
```

**⚠️  When to Use --hard:**
- Only kalau benar-benar mau buang semua changes
- After backup important work
- When you're 100% sure
- NEVER on pushed commits (will break others!)

---

/*
--------------------------------------------------------------------------------
 EXERCISE 6.6: Reset Comparison
--------------------------------------------------------------------------------
*/

## Exercise 6.6: Reset Comparison Summary

**Quick Reference:**

```
Scenario: You committed, but want to undo

╔════════════════════════════════════════════════════════════════╗
║                    GIT RESET COMPARISON                        ║
╠════════════════════════════════════════════════════════════════╣
║ Command              │ Commit │ Staging │ Working Directory   ║
╠══════════════════════╪════════╪═════════╪═══════════════════  ║
║ git reset --soft     │  UNDO  │  KEEP   │  KEEP (unchanged)   ║
║                      │        │ (staged)│                     ║
╠══════════════════════╪════════╪═════════╪═══════════════════  ║
║ git reset --mixed    │  UNDO  │  UNDO   │  KEEP (unchanged)   ║
║ (default)            │        │(unstage)│                     ║
╠══════════════════════╪════════╪═════════╪═══════════════════  ║
║ git reset --hard     │  UNDO  │ CLEAR   │  RESET (DELETED!)   ║
║ ⚠️  DANGEROUS         │        │         │  ⚠️ PERMANENT        ║
╚══════════════════════╧════════╧═════════╧═══════════════════  ╝
```

**Test Yourself:**
```bash
# Scenario: Undo last commit
# Question: Which reset to use?

# If: Mau edit commit message
→ git reset --soft HEAD~1 (then recommit)

# If: Mau restructure/reorder changes
→ git reset --mixed HEAD~1 (or just git reset HEAD~1)

# If: Mau buang commit DAN changes completely
→ git reset --hard HEAD~1 (DANGER!)
```

---

/*
================================================================================
 PART C: GIT REVERT (Safe - Create Reverse Commit)
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 6.7: Revert Commit (Safe Way)
--------------------------------------------------------------------------------
*/

## Exercise 6.7: Revert Commit (Safe Way)

**Scenario:** Commit sudah di-push ke remote. Mau undo tapi keep history (safe for teams).

**Tasks:**
1. Make and push commit
2. Revert (create reverse commit)
3. Push revert
4. History preserved

**Commands:**
```bash
# Make commit
echo "Bug introduced" > bug.txt
git add bug.txt
git commit -m "Add feature (has bug)"

# Push (simulate)
# git push

# Lihat log
git log --oneline

# Found bug! Need to undo
# DON'T use reset (already pushed!)
# Use revert instead

# Revert commit (by hash)
git revert HEAD
# Editor opens - accept default message or edit

# Lihat log - NEW commit dibuat!
git log --oneline

# File terhapus
ls
```

**Expected Output:**
```
# git log (before revert):
a1b2c3d Add feature (has bug)
...

# git log (after revert):
b2c3d4e Revert "Add feature (has bug)"
a1b2c3d Add feature (has bug)
...

# ls:
(bug.txt HILANG)
```

**Verification:** 
- Original commit masih ada di history ✅
- NEW commit created that reverses changes ✅
- Safe untuk shared branches ✅
- Can be pushed without issues ✅

**💡 Reset vs Revert:**
```
git reset
- Rewrites history (deletes commits)
- Dangerous untuk pushed commits
- Can't push after reset (conflict!)
- Use untuk local commits only

git revert
- Creates new commit (reverse changes)
- Preserves history
- Safe untuk pushed commits
- Can push normally
- Team-friendly!
```

**When to Use:**
```
Local commit only?
→ git reset (if you want)

Already pushed?
→ git revert (ALWAYS!)

Working with team?
→ git revert (safe!)
```

---

/*
================================================================================
 PART D: GIT COMMIT --AMEND (Edit Last Commit)
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 6.8: Amend Commit Message
--------------------------------------------------------------------------------
*/

## Exercise 6.8: Amend Commit Message

**Scenario:** Typo di commit message. Fix it!

**Tasks:**
1. Commit dengan typo
2. Amend message
3. Verify

**Commands:**
```bash
# Commit dengan typo
echo "Feature" > feature.txt
git add feature.txt
git commit -m "Add feautre (typo!)"

# Lihat log - typo ada!
git log --oneline

# Fix typo dengan amend
git commit --amend -m "Add feature (fixed!)"

# Lihat log - message updated!
git log --oneline
```

**Expected Output:**
```
# git log (before amend):
a1b2c3d Add feautre (typo!)

# git log (after amend):
e4f5g6h Add feature (fixed!)
```

**Verification:** 
- Commit message updated ✅
- Hash berubah (technically new commit) ✅
- File tidak berubah ✅

**⚠️ Warning:**
- Amend changes commit hash
- Don't amend pushed commits (unless you're alone)
- Will cause conflict kalau sudah di-pull orang lain

---

/*
--------------------------------------------------------------------------------
 EXERCISE 6.9: Amend with Additional Changes
--------------------------------------------------------------------------------
*/

## Exercise 6.9: Amend with Additional Changes

**Scenario:** Commit terus ingat ada file lupa include. Add to last commit.

**Tasks:**
1. Commit (forgot file)
2. Stage forgotten file
3. Amend commit (add file to it)

**Commands:**
```bash
# Commit (forgot file)
echo "Part 1" > part1.txt
git add part1.txt
git commit -m "Add feature"

# Oops! Forgot part2
echo "Part 2" > part2.txt

# Stage forgotten file
git add part2.txt

# Amend last commit (add part2 to it)
git commit --amend --no-edit
# --no-edit = keep commit message

# Lihat log - masih 1 commit tapi include both files!
git log --oneline
git show HEAD
```

**Expected Output:**
```
# git log:
(Still 1 commit, but includes both files!)

# git show HEAD:
commit a1b2c3d
Add feature

diff --git a/part1.txt b/part1.txt
diff --git a/part2.txt b/part2.txt
```

**Verification:** 
- Both files in same commit ✅
- Only 1 commit (not 2) ✅
- Clean history ✅

**💡 Workflow:**
```
1. git commit -m "message"
2. (Oops! Forgot something)
3. (Make changes)
4. git add forgotten-file
5. git commit --amend --no-edit
6. Done! Clean single commit
```

---

/*
================================================================================
 BONUS CHALLENGE 6: Recovery & Reflog
================================================================================
*/

## Bonus Challenge 6: Recover Lost Commits with Reflog

**Scenario:** Accidentally `git reset --hard`. Can we recover? YES!

**Tasks:**
1. Make commits
2. Reset hard (lose commits)
3. Use reflog to find lost commits
4. Recover!

**Commands:**
```bash
# Setup: Make commits
echo "Commit 1" > file1.txt
git add file1.txt
git commit -m "Commit 1"

echo "Commit 2" > file2.txt
git add file2.txt
git commit -m "Commit 2"

echo "Commit 3" > file3.txt
git add file3.txt
git commit -m "Commit 3"

# Lihat log
git log --oneline

# Oops! Accident reset hard
git reset --hard HEAD~2

# Lihat log - commits GONE!
git log --oneline

# Panic! But wait... reflog to rescue!
git reflog

# Find lost commit (hash dari Commit 3)
# Copy hash

# Restore ke lost commit
git reset --hard <hash-of-commit-3>

# Lihat log - RECOVERED!
git log --oneline
ls
```

**Expected Output:**
```
# git reflog:
a1b2c3d HEAD@{0}: reset: moving to HEAD~2
e4f5g6h HEAD@{1}: commit: Commit 3
d4e5f6g HEAD@{2}: commit: Commit 2
c3d4e5f HEAD@{3}: commit: Commit 1

# After git reset --hard e4f5g6h:
Commits RECOVERED!
```

**Verification:** 
- Reflog records ALL operations ✅
- Lost commits can be recovered ✅
- Reset hard is not TRULY permanent (within 30 days) ✅

**💡 Reflog:**
- Records every HEAD movement
- Like time machine
- Kept for 30 days (default)
- Your safety net!

**Common Reflog Use Cases:**
```
# Undo accidental reset
git reflog
git reset --hard <hash>

# Find deleted branch
git reflog
git checkout -b recovered-branch <hash>

# See command history
git reflog
```

---

/*
================================================================================
 SUMMARY - TOPIC 6
================================================================================

Commands Learned:

RESTORE (Safe - Working Directory):
✅ git restore <file>           → Discard uncommitted changes
✅ git restore --staged <file>  → Unstage file (keep changes)

RESET (Danger - Rewrite History):
✅ git reset --soft HEAD~1      → Undo commit, keep staged
✅ git reset --mixed HEAD~1     → Undo commit, keep unstaged (default)
✅ git reset --hard HEAD~1      → Undo commit, DELETE changes (DANGER!)

REVERT (Safe - New Commit):
✅ git revert <commit>          → Create reverse commit (safe for shared!)

AMEND (Edit Last Commit):
✅ git commit --amend -m "new"  → Edit commit message
✅ git commit --amend --no-edit → Add changes to last commit

RECOVERY:
✅ git reflog                   → View command history
✅ git reset --hard <hash>      → Recover from reflog

Decision Tree:

┌─ Uncommitted changes?
│  └─ git restore <file>
│
├─ Unstage file?
│  └─ git restore --staged <file>
│
├─ Undo LOCAL commit?
│  ├─ Keep changes staged → git reset --soft HEAD~1
│  ├─ Keep changes unstaged → git reset HEAD~1
│  └─ Delete everything → git reset --hard HEAD~1 (DANGER!)
│
├─ Undo PUSHED commit?
│  └─ git revert <commit> (ALWAYS!)
│
├─ Edit last commit?
│  ├─ Fix message → git commit --amend -m "new"
│  └─ Add forgotten file → git add file; git commit --amend --no-edit
│
└─ Lost commits? Panic?
   └─ git reflog (your savior!)

⚠️  CRITICAL RULES:
1. NEVER reset pushed commits
2. NEVER reset on shared branches
3. Use revert untuk public commits
4. Amend only unpushed commits
5. git reset --hard = DANGEROUS (but recoverable via reflog)
6. Always backup before risky operations
7. When in doubt, ask team first!

Safe vs Dangerous:

SAFE (Team-friendly):
✅ git revert
✅ git restore
✅ git commit --amend (if not pushed)

DANGEROUS (Local only!):
⚠️ git reset --hard
⚠️ git reset (any) on pushed commits
⚠️ git push --force

Remember: Git is forgiving (reflog!), but team members are not! 😅

Congratulations! 🎉
You've completed all Git Fundamentals topics!
You now know enough Git to work professionally in teams.

Practice these commands daily and you'll master Git in no time!
*/