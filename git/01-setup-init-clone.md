/* 
================================================================================
 TOPIC 1 — SETUP & INITIALIZE PROJECT
 Learn: Install Git, Config, git init, git clone, git status
================================================================================

💬 PAHAMI KONSEP DULU - Tanya AI:
--------------------------------------------------------------------------------
"Saya belajar Git setup dan initialization. Sebelum mulai praktik, tolong 
jelaskan:

1. Apa itu Git dan kenapa developer perlu Git?
2. Apa bedanya 'git init' dan 'git clone'?
3. Kapan saya harus pakai 'git init' vs 'git clone'?
4. Apa fungsi 'git config' dan kenapa perlu setup username/email?
5. Apa yang terjadi saat saya run 'git init' di folder?

Jelaskan dengan analogi sederhana dan contoh real-world yang mudah dipahami 
pemula. Jangan langsung kasih jawaban command-nya, fokus ke pemahaman konsep."
--------------------------------------------------------------------------------

⚠️  PENTING: Pahami konsep di atas SEBELUM mulai exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 1.1: Install & Verify Git
--------------------------------------------------------------------------------
*/

## Exercise 1.1: Install & Verify Git

**Scenario:** Kamu baru mau mulai belajar Git, langkah pertama adalah install Git di komputer.

**Tasks:**
1. Install Git sesuai OS kamu (Windows/Mac/Linux)
2. Verify instalasi berhasil

**Commands:**
```bash
# Cek versi Git
git --version
```

**Expected Output:**
```
git version 2.40.0 (atau versi lainnya)
```

**Verification:** 
- Jika muncul versi Git, berarti instalasi berhasil ✅
- Jika muncul error "command not found", berarti Git belum terinstall ❌

---

/*
--------------------------------------------------------------------------------
 EXERCISE 1.2: Setup Git Config
--------------------------------------------------------------------------------
*/

## Exercise 1.2: Setup Git Config

**Scenario:** Sebelum mulai pakai Git, kamu harus setup identitas (username & email). Ini akan muncul di setiap commit yang kamu buat.

**Tasks:**
1. Setup username Git kamu
2. Setup email Git kamu
3. Verify konfigurasi

**Commands:**
```bash
# Setup username (ganti "Your Name" dengan nama kamu)
git config --global user.name "Your Name"

# Setup email (ganti dengan email kamu)
git config --global user.email "your.email@example.com"

# Cek konfigurasi
git config --global user.name
git config --global user.email

# Lihat semua config
git config --list
```

**Expected Output:**
```
Your Name
your.email@example.com
```

**Verification:** 
- Run `git config --list` dan pastikan `user.name` dan `user.email` sudah muncul ✅

**💡 Tips:**
- Gunakan email yang sama dengan akun GitHub/GitLab kamu
- Flag `--global` artinya config ini berlaku untuk semua project di komputer kamu

---

/*
--------------------------------------------------------------------------------
 EXERCISE 1.3: Initialize New Repository
--------------------------------------------------------------------------------
*/

## Exercise 1.3: Initialize New Repository

**Scenario:** Kamu mau mulai project baru dari scratch. Kamu perlu initialize Git repository di folder project.

**Tasks:**
1. Buat folder project baru
2. Masuk ke folder tersebut
3. Initialize Git repository
4. Cek status repository

**Commands:**
```bash
# Buat folder baru
mkdir my-first-project

# Masuk ke folder
cd my-first-project

# Initialize Git
git init

# Cek status
git status
```

**Expected Output:**
```
Initialized empty Git repository in /path/to/my-first-project/.git/

On branch main
No commits yet
nothing to commit (create/copy files and use "git add" to track)
```

**Verification:** 
- Folder `.git` terbuat di dalam folder project (hidden folder) ✅
- Command `git status` jalan tanpa error ✅

**💡 Tips:**
- Folder `.git` adalah tempat Git menyimpan semua tracking data
- Jangan hapus folder `.git` kecuali kamu mau stop tracking project dengan Git

---

/*
--------------------------------------------------------------------------------
 EXERCISE 1.4: Clone Existing Repository
--------------------------------------------------------------------------------
*/

## Exercise 1.4: Clone Existing Repository

**Scenario:** Kamu join team baru dan harus download project yang sudah ada di GitHub. Kamu akan clone repository ke komputer kamu.

**Tasks:**
1. Clone public repository dari GitHub
2. Masuk ke folder hasil clone
3. Cek status

**Commands:**
```bash
# Clone repository (contoh: repo JavaScript exercises)
git clone https://github.com/javascript-tutorial/en.javascript.info.git

# Masuk ke folder
cd en.javascript.info

# Cek status
git status
```

**Expected Output:**
```
Cloning into 'en.javascript.info'...
remote: Enumerating objects: 1234, done.
remote: Counting objects: 100% (1234/1234), done.
...
Resolving deltas: 100% (1234/1234), done.

On branch master
Your branch is up to date with 'origin/master'.
nothing to commit, working tree clean
```

**Verification:** 
- Folder baru terbuat dengan nama repository ✅
- Semua files dari repository ter-download ✅
- Command `git status` menunjukkan "working tree clean" ✅

**💡 Tips:**
- Clone otomatis download semua files dan history Git
- Kamu bisa clone repository sendiri atau repository orang lain (public)
- Setelah clone, kamu sudah bisa langsung kerja di project tersebut

---

/*
--------------------------------------------------------------------------------
 EXERCISE 1.5: Understanding git status
--------------------------------------------------------------------------------
*/

## Exercise 1.5: Understanding git status

**Scenario:** Command paling sering dipakai adalah `git status`. Mari kita pahami output-nya.

**Tasks:**
1. Buat file baru di repository
2. Run `git status` dan perhatikan outputnya
3. Pahami setiap informasi yang muncul

**Commands:**
```bash
# Pastikan kamu di folder my-first-project
cd my-first-project

# Buat file baru
echo "Hello Git" > README.md

# Cek status
git status
```

**Expected Output:**
```
On branch main
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

**Verification:** 
- File README.md muncul sebagai "Untracked files" ✅
- Git memberikan hint untuk run `git add` ✅

**💡 Penjelasan Output:**
- **On branch main**: Kamu sedang di branch main
- **Untracked files**: File yang belum pernah di-track oleh Git
- **Hint**: Git selalu kasih hint command apa yang bisa kamu jalankan selanjutnya

---

/*
================================================================================
 BONUS CHALLENGE 1: Setup Multiple Projects
================================================================================
*/

## Bonus Challenge 1: Setup Multiple Projects

**Scenario:** Kamu punya 2 project berbeda dengan identitas Git berbeda untuk masing-masing.

**Tasks:**
1. Buat 2 folder project berbeda
2. Initialize Git di masing-masing
3. Setup config berbeda untuk setiap project (tanpa --global)

**Commands:**
```bash
# Project 1: Work Project
mkdir work-project
cd work-project
git init
git config user.name "Your Work Name"
git config user.email "work@company.com"

# Verify
git config user.name
git config user.email

# Project 2: Personal Project
cd ..
mkdir personal-project
cd personal-project
git init
git config user.name "Your Personal Name"
git config user.email "personal@gmail.com"

# Verify
git config user.name
git config user.email
```

**Expected Behavior:**
- Setiap project punya config berbeda
- Config tanpa `--global` hanya berlaku untuk project tersebut
- Global config (jika ada) akan di-override oleh local config

**Verification:**
```bash
# Di work-project
cd ../work-project
git config user.email  # Output: work@company.com

# Di personal-project
cd ../personal-project
git config user.email  # Output: personal@gmail.com
```

**💡 Tips:**
- Config tanpa `--global` disimpan di `.git/config` di masing-masing project
- Berguna jika kamu kerja untuk company dan personal projects terpisah

---

/*
================================================================================
 SUMMARY - TOPIC 1
================================================================================

Commands yang sudah dipelajari:
✅ git --version         → Cek versi Git
✅ git config           → Setup username & email
✅ git init             → Initialize repository baru
✅ git clone            → Download repository existing
✅ git status           → Cek kondisi repository

Key Concepts:
- Git adalah version control system
- 'git init' untuk project baru, 'git clone' untuk download project existing
- Setup config (username & email) wajib sebelum mulai commit
- 'git status' adalah command paling penting dan paling sering dipakai
- Folder .git menyimpan semua tracking data Git

Next Topic: Daily Workflow (add, commit, log, diff)
*/