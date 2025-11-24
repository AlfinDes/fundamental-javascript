/* 
================================================================================
 TOPIC 3 — REMOTE & COLLABORATION
 Learn: git remote, git push, git pull, git fetch
================================================================================

💬 PAHAMI KONSEP DULU - Tanya AI:
--------------------------------------------------------------------------------
"Saya belajar Git remote dan collaboration. Sebelum mulai praktik, tolong 
jelaskan:

1. Apa itu remote repository dan bedanya dengan local repository?
2. Apa itu 'origin' dalam Git?
3. Apa bedanya 'git push' dan 'git pull'?
4. Apa bedanya 'git pull' dan 'git fetch'?
5. Kenapa harus 'git pull' dulu sebelum 'git push'?
6. Apa yang terjadi kalau 2 orang edit file yang sama?

Jelaskan dengan analogi seperti 'Google Drive' atau 'Dropbox' supaya mudah 
dipahami. Fokus ke pemahaman konsep, bukan command-nya dulu."
--------------------------------------------------------------------------------

⚠️  PENTING: Pahami konsep di atas SEBELUM mulai exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 3.1: Create GitHub Repository
--------------------------------------------------------------------------------
*/

## Exercise 3.1: Create GitHub Repository

**Scenario:** Kamu sudah punya project di local, sekarang mau upload ke GitHub supaya bisa diakses dari mana saja dan collaborate dengan tim.

**Tasks:**
1. Buat repository baru di GitHub
2. Connect local repository ke GitHub
3. Verify connection

**Steps:**

**Di GitHub:**
1. Login ke github.com
2. Click tombol "+" → "New repository"
3. Nama: `my-first-project`
4. Description: "My first Git project"
5. Public atau Private (pilih Public untuk belajar)
6. JANGAN centang "Initialize with README" (karena kita sudah punya)
7. Click "Create repository"

**Di Terminal:**
```bash
# Pastikan di folder project
cd my-first-project

# Add remote (ganti YOUR_USERNAME dengan username GitHub kamu)
git remote add origin https://github.com/YOUR_USERNAME/my-first-project.git

# Verify remote
git remote -v

# Cek branch name (biasanya 'main' atau 'master')
git branch
```

**Expected Output:**
```
# git remote -v:
origin  https://github.com/YOUR_USERNAME/my-first-project.git (fetch)
origin  https://github.com/YOUR_USERNAME/my-first-project.git (push)

# git branch:
* main
```

**Verification:** 
- Command `git remote -v` menampilkan URL GitHub ✅
- Origin terdaftar untuk fetch dan push ✅

**💡 Tips:**
- `origin` adalah nama default untuk remote repository
- Bisa punya multiple remotes (origin, upstream, dll)
- URL bisa HTTPS atau SSH (untuk pemula, pakai HTTPS dulu)

---

/*
--------------------------------------------------------------------------------
 EXERCISE 3.2: First Push to GitHub
--------------------------------------------------------------------------------
*/

## Exercise 3.2: First Push to GitHub

**Scenario:** Setelah connect remote, sekarang upload semua commits ke GitHub.

**Tasks:**
1. Push commits ke GitHub
2. Verify di GitHub website
3. Understand push output

**Commands:**
```bash
# Push ke remote (branch main)
git push -u origin main

# Note: GitHub mungkin minta login
# Masukkan username dan password/token GitHub kamu

# Cek status
git status
```

**Expected Output:**
```
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (12/12), 1.23 KiB | 1.23 MiB/s, done.
Total 12 (delta 2), reused 0 (delta 0)
To https://github.com/YOUR_USERNAME/my-first-project.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**Verification:** 
- Buka https://github.com/YOUR_USERNAME/my-first-project
- Semua files dan commits muncul di GitHub ✅
- Branch indicator menunjukkan "1 branch" ✅

**💡 Tips:**
- Flag `-u` (upstream) = set tracking branch
- Setelah first push dengan `-u`, next time cukup `git push`
- Kalau minta password, di GitHub sekarang harus pakai Personal Access Token

---

/*
--------------------------------------------------------------------------------
 EXERCISE 3.3: Make Changes and Push Again
--------------------------------------------------------------------------------
*/

## Exercise 3.3: Make Changes and Push Again

**Scenario:** Kamu lanjut development, buat perubahan baru, dan push lagi ke GitHub.

**Tasks:**
1. Edit file
2. Commit changes
3. Push to GitHub
4. Verify di GitHub

**Commands:**
```bash
# Edit file
echo "## Features" >> README.md
echo "- Feature 1" >> README.md

# Workflow standard
git status
git add README.md
git commit -m "docs: Add features section to README"

# Push (sekarang ga perlu -u origin main lagi)
git push

# Cek status
git status
```

**Expected Output:**
```
# git push:
Enumerating objects: 5, done.
...
To https://github.com/YOUR_USERNAME/my-first-project.git
   a1b2c3d..e4f5g6h  main -> main

# git status:
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

**Verification:** 
- Refresh GitHub repository page
- Commit baru muncul di history ✅
- README terupdate dengan Features section ✅

**💡 Tips:**
- Setelah set upstream tracking, cukup `git push` tanpa argument
- Always commit locally dulu, baru push
- Bisa push multiple commits sekaligus

---

/*
--------------------------------------------------------------------------------
 EXERCISE 3.4: Pull Changes from Remote
--------------------------------------------------------------------------------
*/

## Exercise 3.4: Pull Changes from Remote

**Scenario:** Teman kamu (atau kamu dari komputer lain) edit file di GitHub. Sekarang kamu mau download perubahan tersebut.

**Tasks:**
1. Edit file langsung di GitHub website
2. Pull changes ke local
3. Verify changes di local

**Steps:**

**Di GitHub Website:**
1. Buka repository di GitHub
2. Click file `README.md`
3. Click icon pensil (Edit)
4. Tambahkan line baru: `- Feature 2`
5. Scroll down, isi commit message: "Add feature 2"
6. Click "Commit changes"

**Di Terminal:**
```bash
# Cek status (belum tahu ada perubahan di remote)
git status

# Pull changes dari remote
git pull

# Cek log
git log --oneline

# Lihat file README.md
cat README.md
```

**Expected Output:**
```
# git pull:
remote: Enumerating objects: 5, done.
...
From https://github.com/YOUR_USERNAME/my-first-project
   e4f5g6h..i7j8k9l  main       -> origin/main
Updating e4f5g6h..i7j8k9l
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)

# cat README.md:
## Features
- Feature 1
- Feature 2
```

**Verification:** 
- File README.md terupdate dengan "Feature 2" ✅
- `git log` menampilkan commit baru dari GitHub ✅
- Status: "Your branch is up to date with 'origin/main'" ✅

**💡 Tips:**
- `git pull` = `git fetch` + `git merge`
- Always pull before push untuk avoid conflicts
- Best practice: `git pull` di awal hari kerja

---

/*
--------------------------------------------------------------------------------
 EXERCISE 3.5: Understanding git fetch
--------------------------------------------------------------------------------
*/

## Exercise 3.5: Understanding git fetch

**Scenario:** Kamu mau cek apakah ada update di remote tanpa langsung merge ke local.

**Tasks:**
1. Edit file di GitHub (seperti Exercise 3.4)
2. Fetch (download info tanpa merge)
3. Compare local vs remote
4. Merge manually

**Steps:**

**Di GitHub:** Edit README.md, tambahkan `- Feature 3`

**Di Terminal:**
```bash
# Fetch dari remote (download info only)
git fetch origin

# Cek log local vs remote
git log --oneline
git log --oneline origin/main

# Lihat perbedaan
git diff main origin/main

# Sekarang merge manual
git merge origin/main

# Verify
cat README.md
```

**Expected Output:**
```
# git fetch:
remote: Enumerating objects: 5, done.
...
From https://github.com/YOUR_USERNAME/my-first-project
   i7j8k9l..m0n1o2p  main       -> origin/main

# git log origin/main:
m0n1o2p Add feature 3
i7j8k9l Add feature 2
...

# git merge:
Updating i7j8k9l..m0n1o2p
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
```

**Verification:** 
- Fetch download info tanpa mengubah working directory ✅
- Merge dilakukan manual setelah review ✅

**💡 Tips:**
- `git fetch` safe - tidak mengubah working directory
- `git pull` = `git fetch` + `git merge` (otomatis)
- Use fetch kalau mau review changes dulu sebelum merge

---

/*
--------------------------------------------------------------------------------
 EXERCISE 3.6: Collaborate with Team
--------------------------------------------------------------------------------
*/

## Exercise 3.6: Collaborate with Team (Simulation)

**Scenario:** Simulasi workflow collaboration dengan tim.

**Tasks:**
1. Pull latest changes
2. Make your changes
3. Commit
4. Pull again (case: teammate pushed meanwhile)
5. Push your changes

**Commands:**
```bash
# Morning: Start your day
git pull

# Do your work
echo "function calculate() {}" >> index.js
git add index.js
git commit -m "feat: Add calculate function"

# Simulate: Teammate pushed changes
# (Edit file di GitHub, add "- Feature 4" di README)

# Try to push (might fail if remote has new commits)
git push

# If failed, pull first
git pull

# Resolve if needed, then push
git push

# Verify
git log --oneline
```

**Expected Output:**
```
# git push (if remote has new commits):
To https://github.com/YOUR_USERNAME/my-first-project.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to '...'
hint: Updates were rejected because the remote contains work...
hint: You may want to first integrate the remote changes (e.g., 'git pull')

# After git pull and git push:
Enumerating objects: 5, done.
...
To https://github.com/YOUR_USERNAME/my-first-project.git
   m0n1o2p..q3r4s5t  main -> main
```

**Verification:** 
- Understand error message ketika push rejected ✅
- Pull dulu, baru bisa push ✅
- Semua changes (yours + teammate) ada di history ✅

**💡 Workflow Best Practice:**
```
1. git pull      (Get latest)
2. (do work)     (Make changes)
3. git add       (Stage)
4. git commit    (Save locally)
5. git pull      (Check latest again)
6. git push      (Upload)
```

---

/*
================================================================================
 BONUS CHALLENGE 3: Setup SSH for GitHub
================================================================================
*/

## Bonus Challenge 3: Setup SSH for GitHub (Optional)

**Scenario:** Pakai SSH supaya tidak perlu input password setiap push/pull.

**Tasks:**
1. Generate SSH key
2. Add SSH key ke GitHub
3. Change remote URL to SSH
4. Test connection

**Commands:**
```bash
# 1. Generate SSH key (ganti dengan email kamu)
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter 3x (default location, no passphrase)

# 2. Copy public key
cat ~/.ssh/id_ed25519.pub
# Copy output

# 3. Add to GitHub
# - Go to GitHub → Settings → SSH and GPG keys
# - Click "New SSH key"
# - Paste public key
# - Click "Add SSH key"

# 4. Test connection
ssh -T git@github.com

# 5. Change remote URL to SSH
git remote set-url origin git@github.com:YOUR_USERNAME/my-first-project.git

# 6. Verify
git remote -v

# 7. Test push
git push
```

**Expected Output:**
```
# ssh -T git@github.com:
Hi YOUR_USERNAME! You've successfully authenticated, but GitHub does not provide shell access.

# git remote -v:
origin  git@github.com:YOUR_USERNAME/my-first-project.git (fetch)
origin  git@github.com:YOUR_USERNAME/my-first-project.git (push)
```

**Verification:** 
- SSH connection berhasil ✅
- Push/pull tidak minta password lagi ✅

**💡 Tips:**
- SSH lebih aman dan convenient daripada HTTPS
- Setup once, use forever
- Recommended untuk daily development

---

/*
================================================================================
 SUMMARY - TOPIC 3
================================================================================

Commands yang sudah dipelajari:
✅ git remote add origin <url>  → Connect ke remote repository
✅ git remote -v                → Lihat remote yang terdaftar
✅ git push -u origin main      → Push pertama kali dengan tracking
✅ git push                     → Push ke remote (after setup tracking)
✅ git pull                     → Download dan merge changes dari remote
✅ git fetch                    → Download info tanpa merge

Key Concepts:
- Local repository = di komputer kamu
- Remote repository = di server (GitHub/GitLab)
- origin = nama default untuk remote
- Always pull before push
- git pull = git fetch + git merge
- Push rejected? Pull first, then push

Collaboration Workflow:
1. Morning: git pull (get latest)
2. Work: edit → add → commit (local work)
3. Before end: git pull (check updates)
4. Push: git push (upload to remote)
5. Repeat daily

Common Errors & Solutions:
- "rejected - fetch first" → git pull dulu
- "Authentication failed" → Check credentials/token
- "Permission denied" → Check repository access

Next Topic: Branching, Stash & Conflicts
*/