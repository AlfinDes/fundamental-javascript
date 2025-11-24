/* 
================================================================================
 TOPIC 4 — BRANCHING, STASH & CONFLICTS
 Learn: git branch, git checkout, git merge, git stash, resolve conflicts
================================================================================

💬 PAHAMI KONSEP DULU - Tanya AI:
--------------------------------------------------------------------------------
"Saya belajar Git branching dan merge conflicts. Sebelum mulai praktik, 
tolong jelaskan:

1. Apa itu branch dan kenapa developer perlu branch?
2. Kapan saya harus buat branch baru vs kerja di branch main?
3. Bagaimana cara merge branch dan apa yang terjadi saat merge?
4. Apa itu merge conflict dan kapan conflict terjadi?
5. Apa itu git stash dan kapan digunakan?

Jelaskan dengan analogi seperti 'parallel universe' atau 'draft document' 
supaya mudah dipahami. Fokus ke konsep dulu, bukan command-nya."
--------------------------------------------------------------------------------

⚠️  PENTING: Pahami konsep di atas SEBELUM mulai exercises!
*/

/*
================================================================================
 PART A: BRANCHING
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 4.1: Create and Switch Branch
--------------------------------------------------------------------------------
*/

## Exercise 4.1: Create and Switch Branch

**Scenario:** Kamu mau develop feature baru tapi tidak mau ganggu code di main branch. Solusinya: buat branch baru.

**Tasks:**
1. Lihat branch yang ada
2. Buat branch baru
3. Switch ke branch baru
4. Verify

**Commands:**
```bash
# Lihat branch saat ini
git branch

# Buat branch baru (tapi belum switch)
git branch feature/add-login

# Lihat semua branch
git branch

# Switch ke branch baru
git checkout feature/add-login
# Atau pakai command baru:
# git switch feature/add-login

# Verify
git branch
```

**Expected Output:**
```
# git branch (sebelum buat branch):
* main

# git branch (setelah buat):
  feature/add-login
* main

# git branch (setelah switch):
* feature/add-login
  main
```

**Verification:** 
- Tanda `*` menunjukkan branch aktif saat ini ✅
- Branch feature/add-login berhasil dibuat ✅

**💡 Tips:**
- Shortcut: `git checkout -b nama-branch` (buat dan switch sekaligus)
- Atau: `git switch -c nama-branch` (command baru, lebih jelas)
- Branch naming: `feature/`, `bugfix/`, `hotfix/`

---

/*
--------------------------------------------------------------------------------
 EXERCISE 4.2: Work on Feature Branch
--------------------------------------------------------------------------------
*/

## Exercise 4.2: Work on Feature Branch

**Scenario:** Setelah bikin branch, sekarang develop feature di branch tersebut.

**Tasks:**
1. Buat file baru di feature branch
2. Commit changes
3. Switch kembali ke main
4. Perhatikan perbedaannya

**Commands:**
```bash
# Pastikan di feature branch
git branch

# Buat file baru (feature code)
echo "function login() { console.log('Login'); }" > login.js

# Commit di feature branch
git add login.js
git commit -m "feat: Add login function"

# Lihat file
ls

# Switch kembali ke main
git checkout main

# Lihat file (login.js HILANG!)
ls

# Switch lagi ke feature branch
git checkout feature/add-login

# File muncul lagi!
ls
```

**Expected Output:**
```
# Di feature branch:
index.js  login.js  README.md  style.css

# Di main branch:
index.js  README.md  style.css
(login.js tidak ada)

# Balik ke feature branch:
index.js  login.js  README.md  style.css
```

**Verification:** 
- File login.js hanya ada di feature branch ✅
- Main branch tidak terpengaruh ✅
- Setiap branch punya working directory terpisah ✅

**💡 Key Concept:**
- Branch = parallel universe
- Changes di branch A tidak affect branch B
- Main branch tetap stable saat kamu develop

---

/*
--------------------------------------------------------------------------------
 EXERCISE 4.3: Merge Branch
--------------------------------------------------------------------------------
*/

## Exercise 4.3: Merge Branch

**Scenario:** Feature sudah selesai dan tested. Sekarang merge feature branch ke main.

**Tasks:**
1. Switch ke main branch
2. Merge feature branch
3. Verify changes
4. Delete feature branch (optional)

**Commands:**
```bash
# Switch ke main (target branch)
git checkout main

# Lihat file (belum ada login.js)
ls

# Merge feature branch
git merge feature/add-login

# Lihat file (sekarang ada login.js)
ls

# Lihat log
git log --oneline --graph

# Delete feature branch (sudah tidak diperlukan)
git branch -d feature/add-login

# Verify
git branch
```

**Expected Output:**
```
# git merge:
Updating a1b2c3d..e4f5g6h
Fast-forward
 login.js | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 login.js

# ls (after merge):
index.js  login.js  README.md  style.css

# git log --oneline --graph:
* e4f5g6h (HEAD -> main) feat: Add login function
* a1b2c3d docs: Add features section
...

# git branch (after delete):
* main
```

**Verification:** 
- File login.js sekarang ada di main ✅
- History merged dengan "Fast-forward" ✅
- Feature branch berhasil dihapus ✅

**💡 Tips:**
- Merge selalu dilakukan KE branch yang aktif
- Format: `git checkout target-branch` → `git merge source-branch`
- Delete branch setelah merge untuk clean up

---

/*
--------------------------------------------------------------------------------
 EXERCISE 4.4: Fetch All Remote Branches
--------------------------------------------------------------------------------
*/

## Exercise 4.4: Fetch All Remote Branches

**Scenario:** Teammate buat branch baru di remote. Kamu mau lihat dan fetch semua branches.

**Tasks:**
1. Buat branch baru di GitHub
2. Fetch all branches
3. Checkout remote branch

**Steps:**

**Di GitHub:**
1. Go to repository
2. Click branch dropdown → "View all branches"
3. Click "New branch"
4. Name: `feature/team-work`
5. Click "Create branch"

**Di Terminal:**
```bash
# Lihat branch local
git branch

# Lihat semua branch (termasuk remote)
git branch -a

# Fetch all dari remote
git fetch --all

# Lihat remote branches
git branch -r

# Checkout remote branch (create local copy)
git checkout -b feature/team-work origin/feature/team-work
# Atau shortcut:
# git checkout feature/team-work

# Verify
git branch
```

**Expected Output:**
```
# git branch -a (before fetch):
* main
  remotes/origin/main

# git branch -r (after fetch):
  origin/feature/team-work
  origin/main

# git branch (after checkout):
* feature/team-work
  main
```

**Verification:** 
- Remote branches visible setelah fetch ✅
- Local branch ter-create dari remote ✅
- Bisa work di branch yang dibuat teammate ✅

**💡 Tips:**
- `git fetch --all` download info semua branches
- `git branch -r` = remote branches
- `git branch -a` = all (local + remote)

---

/*
================================================================================
 PART B: GIT STASH
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 4.5: Save Work with Stash
--------------------------------------------------------------------------------
*/

## Exercise 4.5: Save Work with Stash

**Scenario:** Kamu sedang coding di feature branch, tiba-tiba ada urgent bugfix di main. Tapi code kamu belum selesai dan belum mau di-commit.

**Tasks:**
1. Buat perubahan (belum commit)
2. Stash perubahan
3. Switch branch untuk bugfix
4. Kembali dan restore stashed work

**Commands:**
```bash
# Di feature branch
git checkout -b feature/new-feature

# Buat perubahan (belum selesai)
echo "function incomplete() {" >> app.js
echo "  // TODO: finish this" >> app.js

# Cek status (ada uncommitted changes)
git status

# Oh no! Urgent bugfix needed!
# Tapi code belum selesai, jangan commit dulu

# Stash perubahan
git stash

# Cek status (clean now!)
git status

# Lihat stash list
git stash list

# Switch ke main untuk bugfix
git checkout main

# Do bugfix...
echo "// Fixed bug" >> index.js
git add index.js
git commit -m "fix: Urgent bugfix"

# Kembali ke feature branch
git checkout feature/new-feature

# Restore stashed work
git stash pop

# Verify - code kamu kembali!
cat app.js
```

**Expected Output:**
```
# git stash:
Saved working directory and index state WIP on feature/new-feature

# git stash list:
stash@{0}: WIP on feature/new-feature: a1b2c3d feat: ...

# git stash pop:
On branch feature/new-feature
Changes not staged for commit:
  modified:   app.js

Dropped refs/stash@{0}
```

**Verification:** 
- Stash menyimpan changes tanpa commit ✅
- Working directory clean setelah stash ✅
- Changes kembali setelah stash pop ✅

**💡 Tips:**
- `git stash` = save work temporarily
- `git stash pop` = restore dan delete from stash
- `git stash apply` = restore tapi keep in stash
- Use case: switch branch dengan uncommitted changes

---

/*
--------------------------------------------------------------------------------
 EXERCISE 4.6: Multiple Stashes
--------------------------------------------------------------------------------
*/

## Exercise 4.6: Multiple Stashes

**Scenario:** Kamu punya beberapa work in progress yang perlu di-stash.

**Tasks:**
1. Buat beberapa stash
2. Lihat stash list
3. Apply specific stash
4. Clear stash

**Commands:**
```bash
# First stash
echo "// Work 1" >> file1.js
git stash save "WIP: Feature 1"

# Second stash
echo "// Work 2" >> file2.js
git stash save "WIP: Feature 2"

# Lihat semua stash
git stash list

# Apply specific stash (by index)
git stash apply stash@{1}

# Lihat stash list lagi
git stash list

# Clear specific stash
git stash drop stash@{0}

# Atau clear semua
git stash clear

# Verify
git stash list
```

**Expected Output:**
```
# git stash list:
stash@{0}: On main: WIP: Feature 2
stash@{1}: On main: WIP: Feature 1

# After apply:
On branch main
Changes not staged for commit:
  modified:   file2.js

# After clear:
(empty)
```

**Verification:** 
- Multiple stashes dengan pesan berbeda ✅
- Bisa apply specific stash by index ✅
- Stash list bisa di-manage (drop/clear) ✅

**💡 Tips:**
- `git stash save "message"` lebih descriptive
- Stash index: terbaru = stash@{0}
- `git stash clear` hapus semua - hati-hati!

---

/*
================================================================================
 PART C: MERGE CONFLICTS
================================================================================
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 4.7: Create and Resolve Conflict
--------------------------------------------------------------------------------
*/

## Exercise 4.7: Create and Resolve Conflict

**Scenario:** Kamu dan teammate edit file yang sama. Saat merge, terjadi conflict.

**Tasks:**
1. Buat 2 branch dengan changes di file sama
2. Merge - conflict terjadi!
3. Resolve conflict
4. Complete merge

**Commands:**
```bash
# Setup: buat file di main
git checkout main
echo "Original content" > conflict.txt
git add conflict.txt
git commit -m "Add conflict.txt"

# Branch 1: edit file
git checkout -b branch-a
echo "Change from Branch A" > conflict.txt
git add conflict.txt
git commit -m "Update from branch A"

# Branch 2: edit file yang sama
git checkout main
git checkout -b branch-b
echo "Change from Branch B" > conflict.txt
git add conflict.txt
git commit -m "Update from branch B"

# Merge branch-a ke main
git checkout main
git merge branch-a
# Success (fast-forward)

# Merge branch-b ke main - CONFLICT!
git merge branch-b
```

**Expected Output:**
```
# git merge branch-b:
Auto-merging conflict.txt
CONFLICT (content): Merge conflict in conflict.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**Conflict Markers in conflict.txt:**
```
<<<<<<< HEAD
Change from Branch A
=======
Change from Branch B
>>>>>>> branch-b
```

**Resolve:**
```bash
# Edit conflict.txt, pilih mana yang mau dipakai
# Atau gabungkan keduanya

# Option 1: Keep both
echo "Change from Branch A" > conflict.txt
echo "Change from Branch B" >> conflict.txt

# Option 2: Keep one
# echo "Change from Branch A" > conflict.txt

# Remove conflict markers!
# File harus clean dari <<<<<<<, =======, >>>>>>>

# Stage resolved file
git add conflict.txt

# Complete merge dengan commit
git commit -m "Merge branch-b, resolve conflicts"

# Verify
git log --oneline --graph
```

**Expected Output:**
```
# git log --oneline --graph:
*   g7h8i9j (HEAD -> main) Merge branch-b, resolve conflicts
|\
| * f6g7h8i (branch-b) Update from branch B
* | e5f6g7h (branch-a) Update from branch A
|/
* d4e5f6g Add conflict.txt
```

**Verification:** 
- Conflict berhasil di-resolve ✅
- Merge commit dibuat ✅
- History menunjukkan merge dari 2 branches ✅

**💡 Understanding Conflict Markers:**
```
<<<<<<< HEAD
Code dari branch saat ini (target branch)
=======
Code dari branch yang di-merge (source branch)
>>>>>>> branch-name
```

---

/*
--------------------------------------------------------------------------------
 EXERCISE 4.8: Resolve Conflict in VS Code
--------------------------------------------------------------------------------
*/

## Exercise 4.8: Resolve Conflict in VS Code

**Scenario:** VS Code punya built-in tools untuk resolve conflicts lebih mudah.

**Tasks:**
1. Create conflict situation
2. Open in VS Code
3. Use VS Code conflict resolver
4. Complete merge

**Commands:**
```bash
# Create conflict (similar to 4.7)
git checkout main
echo "Line 1" > demo.txt
git add demo.txt
git commit -m "Initial commit"

# Branch 1
git checkout -b feature-x
echo "Line 1 - Modified by Feature X" > demo.txt
git add demo.txt
git commit -m "Feature X change"

# Branch 2
git checkout main
git checkout -b feature-y
echo "Line 1 - Modified by Feature Y" > demo.txt
git add demo.txt
git commit -m "Feature Y change"

# Merge - conflict!
git checkout main
git merge feature-x
git merge feature-y
# Conflict terjadi!

# Open VS Code
code demo.txt
```

**In VS Code:**
- VS Code akan highlight conflict dengan colors
- Ada button actions:
  - **Accept Current Change** (keep HEAD)
  - **Accept Incoming Change** (keep branch yang di-merge)
  - **Accept Both Changes** (keep both)
  - **Compare Changes** (side-by-side view)

**After resolving in VS Code:**
```bash
# Stage resolved file
git add demo.txt

# Complete merge
git commit -m "Merge feature-y, resolve conflicts"

# Clean up
git branch -d feature-x feature-y

# Verify
git log --oneline --graph
```

**Verification:** 
- VS Code color highlights memudahkan identifikasi conflict ✅
- Quick actions mempercepat resolution ✅
- Merge completed successfully ✅

**💡 VS Code Conflict Features:**
- Color coding: Current (green), Incoming (blue)
- Quick action buttons
- Side-by-side comparison
- Integrated Git tools

---

/*
--------------------------------------------------------------------------------
 EXERCISE 4.9: Conflict During Pull
--------------------------------------------------------------------------------
*/

## Exercise 4.9: Conflict During Pull

**Scenario:** Real-world scenario - kamu edit file, teammate juga edit file yang sama dan push duluan. Saat kamu pull, conflict!

**Tasks:**
1. Simulate: Edit file locally
2. Simulate: Edit same file di remote (GitHub)
3. Pull - conflict!
4. Resolve and push

**Steps:**

**Local:** Edit file tapi JANGAN commit dulu
```bash
# Edit file
echo "Local change by me" >> README.md
git add README.md
git commit -m "Update README locally"
```

**GitHub:** Edit README.md di GitHub
1. Click README.md → Edit
2. Add line: `Remote change by teammate`
3. Commit: "Update README remotely"

**Local:** Try to push
```bash
# Try push - akan rejected!
git push

# Pull first
git pull
# CONFLICT!
```

**Resolve:**
```bash
# Open README.md
# Resolve conflict (keep both or choose one)

# Stage resolved file
git add README.md

# Complete merge
git commit -m "Merge remote changes, resolve conflicts"

# Now push
git push
```

**Expected Output:**
```
# git push (first attempt):
To https://github.com/...
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs

# git pull:
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed

# After resolve and push:
Enumerating objects: 5, done.
...
To https://github.com/...
   a1b2c3d..e4f5g6h  main -> main
```

**Verification:** 
- Understand push rejection ✅
- Resolve conflict during pull ✅
- Successfully push after resolution ✅

**💡 Prevention Tips:**
```
1. git pull frequently (especially before commit)
2. Communicate dengan tim tentang files yang diedit
3. Use separate files untuk reduce conflicts
4. Commit & push regularly
5. Use feature branches, bukan direct edit di main
```

---

/*
================================================================================
 BONUS CHALLENGE 4: Complex Branch Workflow
================================================================================
*/

## Bonus Challenge 4: Complex Branch Workflow

**Scenario:** Real team workflow - multiple features dengan proper branching strategy.

**Tasks:**
1. Create develop branch dari main
2. Create 2 feature branches dari develop
3. Work di each feature
4. Merge features ke develop
5. Merge develop ke main

**Commands:**
```bash
# Start: Create develop branch
git checkout main
git checkout -b develop
git push -u origin develop

# Feature 1: User authentication
git checkout -b feature/auth
echo "function login() {}" > auth.js
git add auth.js
git commit -m "feat: Add authentication"

# Feature 2: Dashboard
git checkout develop
git checkout -b feature/dashboard
echo "function dashboard() {}" > dashboard.js
git add dashboard.js
git commit -m "feat: Add dashboard"

# Merge Feature 1 to develop
git checkout develop
git merge feature/auth
git push

# Merge Feature 2 to develop
git merge feature/dashboard
git push

# Test di develop...
# All good? Merge to main

# Merge develop to main (production release)
git checkout main
git merge develop
git push

# Tag release
git tag v1.0.0
git push --tags

# Clean up feature branches
git branch -d feature/auth feature/dashboard

# Verify
git log --oneline --graph --all
```

**Expected Output:**
```
# git log --oneline --graph --all:
*   m4n5o6p (HEAD -> main, tag: v1.0.0, origin/main, develop) Merge develop
|\
| *   k2l3m4n Merge feature/dashboard
| |\
| | * j1k2l3m feat: Add dashboard
| |/
| *   h0i1j2k Merge feature/auth
| |\
| | * g9h0i1j feat: Add authentication
| |/
|/
* f8g9h0i Initial commit
```

**Verification:** 
- Proper branching strategy implemented ✅
- Multiple features developed in parallel ✅
- Clean merge to production (main) ✅
- Release tagged ✅

**💡 Branching Strategy:**
```
main (production)
  ↑
develop (staging)
  ↑
feature branches (development)

Workflow:
1. feature → develop (testing)
2. develop → main (release)
```

---

/*
================================================================================
 SUMMARY - TOPIC 4
================================================================================

Commands yang sudah dipelajari:

BRANCHING:
✅ git branch                    → Lihat branches
✅ git branch <name>             → Buat branch baru
✅ git checkout <branch>         → Switch branch
✅ git checkout -b <branch>      → Buat dan switch sekaligus
✅ git switch <branch>           → Switch branch (command baru)
✅ git switch -c <branch>        → Buat dan switch (command baru)
✅ git merge <branch>            → Merge branch
✅ git branch -d <branch>        → Delete branch
✅ git branch -a                 → Lihat all branches (local + remote)
✅ git branch -r                 → Lihat remote branches only
✅ git fetch --all               → Fetch all remote branches

STASH:
✅ git stash                     → Save uncommitted changes
✅ git stash save "message"      → Save dengan message
✅ git stash list                → Lihat semua stash
✅ git stash pop                 → Apply dan delete stash
✅ git stash apply               → Apply tapi keep stash
✅ git stash drop                → Delete specific stash
✅ git stash clear               → Delete all stashes

MERGE CONFLICTS:
✅ git merge <branch>            → Merge (might conflict)
✅ (resolve conflicts manually)  → Edit files, remove markers
✅ git add <file>                → Stage resolved files
✅ git commit                    → Complete merge

Key Concepts:
- Branch = parallel development line
- Main/master = production code (stable)
- Feature branches = isolated development
- Merge = combine branches
- Conflict = same line edited in both branches
- Stash = temporary save without commit
- Conflict markers: <<<<<<< ======= >>>>>>>

Branching Best Practices:
- Never work directly on main
- Create feature branch for new work
- Keep branches short-lived
- Merge frequently to avoid big conflicts
- Delete branches after merge
- Use descriptive branch names

Conflict Prevention:
- Pull frequently
- Communicate dengan team
- Work on different files if possible
- Commit & push regularly
- Use feature branches

Next Topic: .gitignore
*/