/* 
================================================================================
 TOPIC 5 — .GITIGNORE
 Learn: Create .gitignore, patterns, common ignores untuk JS/React/Node
================================================================================

💬 PAHAMI KONSEP DULU - Tanya AI:
--------------------------------------------------------------------------------
"Saya belajar tentang .gitignore di Git. Sebelum mulai praktik, tolong 
jelaskan:

1. Apa itu .gitignore dan kenapa file ini penting?
2. Apa yang terjadi kalau saya tidak pakai .gitignore?
3. File atau folder apa saja yang TIDAK boleh di-commit ke Git?
4. Bagaimana cara kerja pattern matching di .gitignore?
5. Apa bedanya ignore file vs folder?

Jelaskan dengan contoh real-world seperti 'node_modules', '.env', atau file 
sensitive lainnya. Fokus ke pemahaman dulu sebelum ke syntax-nya."
--------------------------------------------------------------------------------

⚠️  PENTING: Pahami konsep di atas SEBELUM mulai exercises!
*/

/*
--------------------------------------------------------------------------------
 EXERCISE 5.1: Why .gitignore Matters
--------------------------------------------------------------------------------
*/

## Exercise 5.1: Why .gitignore Matters

**Scenario:** Lihat apa yang terjadi kalau commit tanpa .gitignore.

**Tasks:**
1. Buat project Node.js sederhana
2. Install dependencies (node_modules terbuat)
3. Check git status - BANYAK files!
4. Understand the problem

**Commands:**
```bash
# Buat project baru
mkdir test-gitignore
cd test-gitignore
git init

# Initialize npm
npm init -y

# Install package (node_modules terbuat)
npm install express

# Cek status - LIAT INI!
git status

# Hitung berapa banyak files
git status --short | wc -l
```

**Expected Output:**
```
# git status:
Untracked files:
  node_modules/
  package-lock.json
  package.json

# File count:
1000+ files dalam node_modules!
```

**Problem:**
- node_modules punya ribuan files
- Total size bisa 100MB+ untuk 1 package!
- Memperlambat git operations
- Tidak perlu di-track (bisa di-install ulang)
- Membuat repository bloated

**Verification:** 
- Understand bahwa commit node_modules = BAD IDEA ❌
- Repository size akan jadi sangat besar ❌
- Git operations jadi lambat ❌

**💡 Key Lesson:**
- JANGAN PERNAH commit node_modules!
- JANGAN commit generated files (build/, dist/)
- JANGAN commit sensitive data (.env, API keys)

---

/*
--------------------------------------------------------------------------------
 EXERCISE 5.2: Create Basic .gitignore
--------------------------------------------------------------------------------
*/

## Exercise 5.2: Create Basic .gitignore

**Scenario:** Buat .gitignore untuk ignore node_modules dan files lain.

**Tasks:**
1. Buat file .gitignore
2. Add patterns
3. Verify git status

**Commands:**
```bash
# Buat .gitignore
touch .gitignore

# Edit .gitignore (atau pakai editor)
cat > .gitignore << EOF
# Dependencies
node_modules/

# Logs
*.log

# Environment variables
.env
EOF

# Atau pakai echo:
# echo "node_modules/" > .gitignore
# echo "*.log" >> .gitignore
# echo ".env" >> .gitignore

# Cek status - node_modules HILANG!
git status

# Add dan commit .gitignore
git add .gitignore package.json package-lock.json
git commit -m "Initial commit with gitignore"
```

**Expected Output:**
```
# git status (after .gitignore):
Untracked files:
  .gitignore
  package.json
  package-lock.json

(node_modules TIDAK muncul lagi!)
```

**Verification:** 
- node_modules tidak muncul di git status ✅
- .gitignore di-commit ke repository ✅
- Repository tetap clean ✅

**💡 Tips:**
- .gitignore harus di-commit ke repository
- File di .gitignore = invisible untuk Git
- Buat .gitignore di awal project!

---

/*
--------------------------------------------------------------------------------
 EXERCISE 5.3: Pattern Matching
--------------------------------------------------------------------------------
*/

## Exercise 5.3: Pattern Matching

**Scenario:** Pahami berbagai pattern matching di .gitignore.

**Tasks:**
1. Buat berbagai files
2. Test different patterns
3. Understand how patterns work

**Setup:**
```bash
# Buat berbagai files dan folders
mkdir -p logs build temp
touch test.log debug.log error.log
touch file.txt notes.txt
touch .env .env.local .env.production
touch build/app.js build/styles.css
```

**Patterns in .gitignore:**
```bash
cat > .gitignore << 'EOF'
# 1. Exact filename
.env

# 2. Wildcard - semua files dengan extension .log
*.log

# 3. Folder - ignore semua isi folder
node_modules/
build/
logs/

# 4. Wildcard di specific location
temp/*.txt

# 5. Double asterisk - recursive
**/temp/

# 6. Negate pattern (kecualian)
*.log
!important.log

# 7. Comments
# This is a comment

# 8. Escape special characters
\#hashtag.txt
EOF
```

**Test:**
```bash
# Cek status
git status

# What's ignored vs not ignored?
git status --ignored
```

**Pattern Explanation:**
```
.env                  → Ignore exact file ".env"
*.log                 → Ignore semua .log files
node_modules/         → Ignore folder dan isinya
temp/*.txt            → Ignore .txt hanya di temp/ (not subdirectories)
**/temp/              → Ignore temp/ di mana saja
!important.log        → Exception - jangan ignore ini
# comment             → Comments
\#hashtag.txt         → Escape # character
```

**Expected Output:**
```
# git status:
Untracked files:
  .gitignore
  file.txt
  notes.txt

# git status --ignored:
Ignored files:
  .env
  .env.local
  .env.production
  test.log
  debug.log
  error.log
  build/
  logs/
  node_modules/
  temp/*.txt
```

**Verification:** 
- Pattern matching bekerja sesuai rules ✅
- Understand wildcard (*) dan recursive (**) ✅
- Exception dengan ! ✅

**💡 Common Patterns:**
```
file.txt           → Specific file
*.log              → All .log files
folder/            → Entire folder
temp/*.txt         → .txt in temp only
**/logs/           → logs anywhere
!keep.log          → Exception
```

---

/*
--------------------------------------------------------------------------------
 EXERCISE 5.4: JavaScript/Node.js .gitignore Template
--------------------------------------------------------------------------------
*/

## Exercise 5.4: JavaScript/Node.js .gitignore Template

**Scenario:** Setup .gitignore lengkap untuk JavaScript/Node.js project.

**Tasks:**
1. Create comprehensive .gitignore
2. Cover all common cases
3. Understand each section

**Complete .gitignore for JS/Node:**
```bash
cat > .gitignore << 'EOF'
# ============================================
# Node.js & JavaScript Project .gitignore
# ============================================

# Dependencies
node_modules/
jspm_packages/

# Production builds
dist/
build/
out/
*.production.js

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Environment variables & secrets
.env
.env.local
.env.*.local
.env.development.local
.env.test.local
.env.production.local

# Config files dengan sensitive data
config/secrets.yml
config/database.yml

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
desktop.ini

# IDE & Editor files
.vscode/
.idea/
*.swp
*.swo
*~
.project
.settings/
*.sublime-project
*.sublime-workspace

# Testing
coverage/
.nyc_output/
*.lcov

# Cache
.npm
.eslintcache
.cache/
.parcel-cache/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Yarn
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

# Next.js
.next/
out/

# Nuxt.js
.nuxt/
dist/

# Gatsby
.cache/
public/

# TypeScript
*.tsbuildinfo

# Serverless
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port
EOF
```

**Verify:**
```bash
# Add .gitignore
git add .gitignore
git commit -m "Add comprehensive .gitignore for Node.js"

# Test dengan create files
mkdir -p dist logs coverage
touch .env dist/bundle.js logs/app.log

# Check - semua di-ignore!
git status
```

**Expected Output:**
```
# git status:
On branch main
nothing to commit, working tree clean

(Semua test files di-ignore!)
```

**Verification:** 
- Comprehensive template covers all cases ✅
- Organized by categories ✅
- Comments untuk easy understanding ✅

**💡 Tips:**
- Copy template ini untuk semua Node.js projects
- Customize sesuai needs project kamu
- Always commit .gitignore file

---

/*
--------------------------------------------------------------------------------
 EXERCISE 5.5: React/Frontend .gitignore
--------------------------------------------------------------------------------
*/

## Exercise 5.5: React/Frontend .gitignore

**Scenario:** Additional patterns untuk React/Frontend projects.

**React-specific additions:**
```bash
cat >> .gitignore << 'EOF'

# ============================================
# React & Frontend Specific
# ============================================

# Build
build/
dist/

# Storybook
storybook-static/

# PWA
sw.js
sw.js.map
workbox-*.js
workbox-*.js.map

# Environment files
.env.local
.env.development.local
.env.test.local
.env.production.local

# Create React App
/build
.eslintcache

# Vite
dist-ssr
*.local

# Webpack
.webpack/

# Bundle analysis
stats.html
bundle-stats.json
EOF
```

**Test with React project:**
```bash
# Create React App structure
npx create-react-app my-app --skip-git
cd my-app

# Copy .gitignore
# (CRA already creates one, but you can enhance it)

# Build project
npm run build

# Check status - build/ ignored!
git status
```

**Expected Output:**
```
# git status:
(build folder tidak muncul - ignored!)
```

**Verification:** 
- React build outputs di-ignore ✅
- Development files di-ignore ✅
- Clean repository ✅

---

/*
--------------------------------------------------------------------------------
 EXERCISE 5.6: Fix Already Committed Files
--------------------------------------------------------------------------------
*/

## Exercise 5.6: Fix Already Committed Files

**Scenario:** Kamu accidentally commit file yang seharusnya di-ignore (e.g., .env). How to fix?

**Tasks:**
1. Simulate: commit .env file
2. Add .env to .gitignore
3. Remove from Git (but keep locally)
4. Commit the fix

**Commands:**
```bash
# Simulate mistake: commit .env
echo "API_KEY=secret123" > .env
git add .env
git commit -m "Add config (WRONG!)"

# Realize mistake!
# Add to .gitignore
echo ".env" >> .gitignore

# Remove from Git but keep file locally
git rm --cached .env

# Commit the fix
git add .gitignore
git commit -m "Remove .env from tracking, add to gitignore"

# Verify file still exists locally
ls -la | grep .env

# Verify not tracked anymore
git status
```

**Expected Output:**
```
# After git rm --cached:
rm '.env'

# ls -la:
-rw-r--r--  1 user  staff   20 Nov 25 10:00 .env
(File masih ada!)

# git status:
Changes to be committed:
  modified:   .gitignore
  deleted:    .env

(Git tidak track .env lagi!)
```

**Verification:** 
- .env removed from Git tracking ✅
- .env file masih ada di local ✅
- Future changes ignored ✅

**💡 Important:**
- `git rm --cached` = remove from Git, keep locally
- `git rm` (tanpa --cached) = remove from Git AND local
- Always add to .gitignore after removing!

**⚠️ Security Note:**
If you committed secrets:
1. Remove from Git (seperti di atas)
2. Rotate/change secrets (API keys, passwords)
3. Consider rewriting history (advanced)

---

/*
--------------------------------------------------------------------------------
 EXERCISE 5.7: Global .gitignore
--------------------------------------------------------------------------------
*/

## Exercise 5.7: Global .gitignore (Optional)

**Scenario:** Setup global .gitignore untuk OS-specific files yang applies ke semua projects.

**Tasks:**
1. Create global .gitignore
2. Configure Git to use it
3. Add OS-specific patterns

**Commands:**
```bash
# Create global gitignore file
touch ~/.gitignore_global

# Configure Git to use it
git config --global core.excludesfile ~/.gitignore_global

# Add OS-specific patterns
cat > ~/.gitignore_global << 'EOF'
# ============================================
# Global .gitignore (OS & Editor specific)
# ============================================

# macOS
.DS_Store
.AppleDouble
.LSOverride
._*
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/

# Linux
*~
.directory
.Trash-*

# Editors
.vscode/
.idea/
*.swp
*.swo
*.sublime-project
*.sublime-workspace
EOF

# Verify
cat ~/.gitignore_global
```

**Expected Output:**
```
# git config --global core.excludesfile:
(no output, silently configured)

# Test: Create .DS_Store in any project
touch .DS_Store
git status
(File tidak muncul!)
```

**Verification:** 
- Global .gitignore configured ✅
- OS files auto-ignored di semua projects ✅
- No need to add to each project's .gitignore ✅

**💡 Best Practice:**
- Global .gitignore untuk OS & editor files
- Project .gitignore untuk project-specific files
- Separation of concerns

---

/*
================================================================================
 BONUS CHALLENGE 5: .gitignore Templates
================================================================================
*/

## Bonus Challenge 5: .gitignore Templates for Different Stacks

**Scenario:** Quick templates untuk berbagai tech stacks.

**1. Express.js Backend:**
```gitignore
# Node.js
node_modules/
npm-debug.log*

# Environment
.env
.env.*.local

# Logs
logs/
*.log

# Build
dist/
build/

# Testing
coverage/

# OS
.DS_Store
Thumbs.db
```

**2. React + TypeScript:**
```gitignore
# Dependencies
node_modules/

# Build
build/
dist/

# Environment
.env.local
.env.development.local
.env.test.local
.env.production.local

# TypeScript
*.tsbuildinfo

# Testing
coverage/

# Misc
.DS_Store
.eslintcache
```

**3. Next.js:**
```gitignore
# Dependencies
node_modules/

# Next.js
.next/
out/

# Environment
.env*.local

# Build
build/

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
```

**4. Full Stack (MERN):**
```gitignore
# Frontend
/client/node_modules
/client/build
/client/.env.local

# Backend
/server/node_modules
/server/.env
/server/logs

# Database
*.db
*.sqlite

# Common
.DS_Store
*.log
coverage/
```

**Usage:**
```bash
# Copy template yang sesuai
# Save as .gitignore di project root
# Customize jika perlu
git add .gitignore
git commit -m "Add .gitignore"
```

**💡 Resources:**
- [GitHub gitignore templates](https://github.com/github/gitignore)
- [gitignore.io](https://www.toptal.com/developers/gitignore)
- Generate custom .gitignore online

---

/*
================================================================================
 SUMMARY - TOPIC 5
================================================================================

Key Files to ALWAYS Ignore:
✅ node_modules/          → Dependencies (reinstallable)
✅ .env                   → Secrets & API keys
✅ dist/, build/          → Generated files
✅ *.log                  → Log files
✅ coverage/              → Test coverage
✅ .DS_Store, Thumbs.db   → OS files

.gitignore Patterns:
✅ filename.txt           → Exact file
✅ *.log                  → All .log files
✅ folder/                → Entire folder
✅ temp/*.txt             → Files in folder (non-recursive)
✅ **/logs/               → Folder anywhere (recursive)
✅ !important.log         → Exception (don't ignore)
✅ # comment              → Comments

Best Practices:
- Create .gitignore di awal project
- Never commit sensitive data (.env, API keys)
- Never commit generated files (node_modules, build)
- Never commit OS files (.DS_Store)
- Use global .gitignore untuk OS files
- Use project .gitignore untuk project files
- Commit .gitignore to repository
- Fix mistakes dengan git rm --cached

Fix Committed Files:
1. Add to .gitignore
2. git rm --cached <file>  (remove from Git, keep local)
3. git commit
4. Rotate secrets if committed

Quick Start:
# Node.js project
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
git add .gitignore
git commit -m "Add .gitignore"

Next Topic: Advanced & Undo
*/