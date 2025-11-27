/* 
================================================================================
 TOPIC 2 — DAILY WORKFLOW
 Learn: git status, git add, git commit, git log, git diff
================================================================================

💬 PAHAMI KONSEP DULU - Tanya AI:
--------------------------------------------------------------------------------
"Saya belajar Git daily workflow. Sebelum mulai praktik, tolong jelaskan:

1. Apa itu 'staging area' dan kenapa Git perlu konsep ini?
2. Apa bedanya 'git add' dan 'git commit'?
3. Bagaimana flow dari: edit file → staging → commit?
4. Apa itu commit message dan kenapa harus ditulis dengan jelas?
5. Apa fungsi 'git log' dan 'git diff'?

Jelaskan dengan analogi sederhana seperti 'fotokopi dokumen' atau 'save game'. 
Jangan langsung kasih jawaban command-nya, fokus ke pemahaman konsep dulu."
--------------------------------------------------------------------------------

⚠️  PENTING: Pahami konsep di atas SEBELUM mulai exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 2.1: First Commit
--------------------------------------------------------------------------------
*/

## Exercise 2.1: First Commit

**Scenario:** Kamu sudah buat file README.md di project. Sekarang waktunya save perubahan pertama ke Git.

**Tasks:**
1. Cek status repository
2. Add file ke staging
3. Commit perubahan
4. Verify commit berhasil

**Commands:**
```bash
# Pastikan di folder project (my-first-project)
cd my-first-project

# Cek status
git status

# Add file ke staging
git add README.md

# Cek status lagi (perhatikan perubahannya)
git status

# Commit dengan message
git commit -m "Add README file"

# Cek status setelah commit
git status

# Lihat history commit
git log
```

**Expected Output:**
```
# Setelah git add:
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md

# Setelah git commit:
[main (root-commit) a1b2c3d] Add README file
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

# Setelah git status:
On branch main
nothing to commit, working tree clean

# git log:
commit a1b2c3d4e5f6g7h8i9j0 (HEAD -> main)
Author: Your Name <your.email@example.com>
Date:   Mon Nov 25 10:00:00 2024 +0700

    Add README file
```

**Verification:** 
- `git status` menunjukkan "working tree clean" ✅
- `git log` menampilkan commit pertama ✅

**💡 Tips:**
- Commit message harus jelas dan deskriptif
- Format: "Add/Fix/Update [what you did]"

---

/*
--------------------------------------------------------------------------------
 EXERCISE 2.2: Multiple Files Commit
--------------------------------------------------------------------------------
*/

## Exercise 2.2: Multiple Files Commit

**Scenario:** Kamu buat beberapa file sekaligus dan mau commit semuanya.

**Tasks:**
1. Buat 3 file berbeda
2. Add semua file sekaligus
3. Commit dengan message yang jelas

**Commands:**
```bash
# Buat beberapa file
echo "# My Project" > README.md
echo "console.log('Hello');" > index.js
echo "body { margin: 0; }" > style.css

# Cek status (lihat semua file)
git status

# Add semua file sekaligus
git add .

# Atau add satu-satu:
# git add README.md
# git add index.js
# git add style.css

# Cek status (semua file di staging)
git status

# Commit
git commit -m "Add initial project files"

# Verify
git log
```

**Expected Output:**
```
# git status (before add):
Untracked files:
        README.md
        index.js
        style.css

# git status (after add):
Changes to be committed:
        new file:   README.md
        new file:   index.js
        new file:   style.css

# git commit:
[main b2c3d4e] Add initial project files
 3 files changed, 3 insertions(+)
 create mode 100644 README.md
 create mode 100644 index.js
 create mode 100644 style.css
```

**Verification:** 
- Semua file ter-commit dalam satu commit ✅
- `git log` menampilkan commit baru ✅

**💡 Tips:**
- `git add .` = add semua file di folder saat ini
- Lebih baik commit files yang related dalam satu commit
- Jangan gabung unrelated changes dalam satu commit

---

/*
--------------------------------------------------------------------------------
 EXERCISE 2.3: View Changes with git diff
--------------------------------------------------------------------------------
*/

## Exercise 2.3: View Changes with git diff

**Scenario:** Sebelum commit, kamu mau lihat detail perubahan yang sudah kamu buat.

**Tasks:**
1. Edit file yang sudah ada
2. Lihat perubahan dengan git diff
3. Add dan commit

**Commands:**
```bash
# Edit file
echo "This is my first Git project" >> README.md

# Lihat perubahan (sebelum git add)
git diff

# Cek status
git status

# Add file
git add README.md

# Lihat perubahan yang sudah di-stage
git diff --staged

# Commit
git commit -m "Update README with project description"
```

**Expected Output:**
```
# git diff (before add):
diff --git a/README.md b/README.md
index e69de29..abc1234 100644
--- a/README.md
+++ b/README.md
@@ -0,0 +1 @@
+This is my first Git project

# git diff --staged (after add):
(shows the same changes, but for staged files)
```

**Verification:** 
- `git diff` menampilkan perubahan yang belum di-stage ✅
- `git diff --staged` menampilkan perubahan yang sudah di-stage ✅

**💡 Penjelasan Output:**
- Baris dengan `+` = baris yang ditambah (hijau)
- Baris dengan `-` = baris yang dihapus (merah)
- Baris tanpa tanda = tidak berubah

---

/*
--------------------------------------------------------------------------------
 EXERCISE 2.4: Understanding git log
--------------------------------------------------------------------------------
*/

## Exercise 2.4: Understanding git log

**Scenario:** Setelah beberapa commit, kamu mau lihat history perubahan.

**Tasks:**
1. Buat beberapa commit
2. Lihat history dengan berbagai format

**Commands:**
```bash
# Buat beberapa perubahan dan commit
echo "function hello() {}" >> index.js
git add index.js
git commit -m "Add hello function"

echo ".DS_Store" > .gitignore
git add .gitignore
git commit -m "Add gitignore"

# Lihat log standard
git log

# Lihat log dengan format compact
git log --oneline

# Lihat log dengan graph
git log --oneline --graph

# Lihat log 3 commit terakhir
git log -3

# Lihat log dengan detail perubahan
git log -p
```

**Expected Output:**
```
# git log:
commit c3d4e5f6 (HEAD -> main)
Author: Your Name <email@example.com>
Date:   Mon Nov 25 10:30:00 2024
    Add gitignore

commit b2c3d4e5
Author: Your Name <email@example.com>
Date:   Mon Nov 25 10:20:00 2024
    Add hello function

# git log --oneline:
c3d4e5f Add gitignore
b2c3d4e Add hello function
a1b2c3d Add initial project files
```

**Verification:** 
- Semua commit muncul dengan urutan terbaru di atas ✅
- Format `--oneline` lebih compact dan mudah dibaca ✅

**💡 Tips:**
- `git log --oneline` paling sering dipakai (quick & clean)
- `git log -p` untuk lihat detail perubahan di setiap commit
- Press `q` untuk keluar dari git log

---

/*
--------------------------------------------------------------------------------
 EXERCISE 2.5: Staging Specific Changes
--------------------------------------------------------------------------------
*/

## Exercise 2.5: Staging Specific Changes

**Scenario:** Kamu edit 2 file berbeda tapi mau commit terpisah.

**Tasks:**
1. Edit 2 file sekaligus
2. Add hanya 1 file
3. Commit file pertama
4. Commit file kedua

**Commands:**
```bash
# Edit 2 file
echo "// Updated" >> index.js
echo "/* New style */" >> style.css

# Cek status
git status

# Add hanya index.js
git add index.js

# Cek status (perhatikan perbedaannya)
git status

# Commit file pertama
git commit -m "Update JavaScript file"

# Cek status (style.css masih modified)
git status

# Add dan commit file kedua
git add style.css
git commit -m "Update CSS styles"

# Verify
git log --oneline
```

**Expected Output:**
```
# git status (after first add):
Changes to be committed:
        modified:   index.js

Changes not staged for commit:
        modified:   style.css

# git log --oneline:
e5f6g7h Update CSS styles
d4e5f6g Update JavaScript file
c3d4e5f Add gitignore
...
```

**Verification:** 
- 2 commit terpisah untuk 2 file berbeda ✅
- Setiap commit punya message yang spesifik ✅

**💡 Tips:**
- Commit small & focused changes
- Jangan gabung unrelated changes dalam satu commit
- Lebih mudah untuk undo specific changes nanti

---

/*
================================================================================
 BONUS CHALLENGE 2: Simulate Real Development
================================================================================
*/

## Bonus Challenge 2: Simulate Real Development

**Scenario:** Simulasi development real: buat feature baru, fix bug, update docs.

**Tasks:**
1. Buat file HTML baru (feature)
2. Fix typo di README (bugfix)
3. Update style.css (enhancement)
4. Setiap task = 1 commit terpisah
5. Lihat history dengan format yang rapi

**Commands:**
```bash
# Feature: Add HTML file
echo "<!DOCTYPE html><html><body>Hello</body></html>" > index.html
git add index.html
git commit -m "feat: Add HTML homepage"

# Bugfix: Fix README typo
echo "# My Awesome Project" > README.md
git add README.md
git commit -m "fix: Correct project title in README"

# Enhancement: Update CSS
echo "body { font-family: Arial; }" >> style.css
git add style.css
git commit -m "style: Add font family to body"

# View beautiful log
git log --oneline --graph --all --decorate
```

**Expected Output:**
```
* f6g7h8i (HEAD -> main) style: Add font family to body
* e5f6g7h fix: Correct project title in README
* d4e5f6g feat: Add HTML homepage
* c3d4e5f Add gitignore
...
```

**Verification:**
- 3 commit terpisah dengan message yang jelas ✅
- Format commit: `type: description` ✅
- History rapi dan mudah dibaca ✅

**💡 Commit Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, CSS
- `refactor:` - Code restructuring
- `test:` - Adding tests

---

/*
================================================================================
 SUMMARY - TOPIC 2
================================================================================

Commands yang sudah dipelajari:
✅ git status            → Cek kondisi repository (PALING SERING!)
✅ git add <file>        → Add file ke staging
✅ git add .             → Add semua file ke staging
✅ git commit -m "msg"   → Commit dengan message
✅ git log               → Lihat history commits
✅ git log --oneline     → Lihat history compact
✅ git diff              → Lihat perubahan belum di-stage
✅ git diff --staged     → Lihat perubahan sudah di-stage

Key Concepts:
- Working Directory → Staging Area → Repository
- Commit = snapshot dari project pada waktu tertentu
- Commit message harus clear & descriptive
- git status adalah command paling penting - run frequently!
- Commit small, focused changes
- Review changes dengan git diff sebelum commit

Daily Workflow:
1. Edit files
2. git status (cek apa yang berubah)
3. git diff (review perubahan)
4. git add (pilih file yang mau di-commit)
5. git commit -m "message" (save snapshot)
6. git log (verify commit)

Next Topic: Remote & Collaboration (push, pull, fetch)
*/