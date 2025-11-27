# Git Fundamentals - Panduan Belajar

## 📖 Tentang Git

Git adalah **version control system** yang paling populer di dunia. Git membantu developer untuk:
- Melacak perubahan code
- Berkolaborasi dengan tim
- Mengelola versi project
- Backup code secara otomatis
- Undo kesalahan dengan mudah

## 🎯 Prerequisites

Sebelum mulai, pastikan sudah:
1. **Install Git**
   - Windows: Download dari [git-scm.com](https://git-scm.com)
   - Mac: `brew install git` atau download dari git-scm.com
   - Linux: `sudo apt-get install git` (Ubuntu/Debian)

2. **Verify Installation**
   ```bash
   git --version
   ```
   Jika muncul versi Git, berarti sudah berhasil install.

3. **Text Editor/IDE**
   - VS Code (recommended)
   - Sublime Text
   - Atom
   - Atau editor favorit kamu

## 📚 Learning Path

### **Level 1: Basic (Wajib)**
1. **Topic 1: Setup & Initialize** - Mulai project dengan Git
2. **Topic 2: Daily Workflow** - Command yang dipakai setiap hari
3. **Topic 3: Remote & Sync** - Kolaborasi dengan GitHub/GitLab

### **Level 2: Intermediate (Penting)**
4. **Topic 4: Branching & Conflicts** - Bekerja dengan branches
5. **Topic 5: Gitignore** - File yang tidak perlu di-track

### **Level 3: Advanced (Optional)**
6. **Topic 6: Advanced Undo** - Recovery dan advanced commands

## ✅ Best Practices

### **Commit Messages**

**Good Examples:**
```
✅ "Add user login feature"
✅ "Fix navigation bug on mobile"
✅ "Update README with installation steps"
✅ "Remove unused dependencies"
```

**Bad Examples:**
```
❌ "update"
❌ "fix"
❌ "asdf"
❌ "final final final"
```

**Format Template:**
```
[Type]: [Short description]

Examples:
feat: Add search functionality
fix: Resolve login timeout issue
docs: Update API documentation
style: Format code with prettier
refactor: Simplify user validation logic
```

### **Branching Strategy**

```
main/master          → Production code (stable)
develop              → Development branch
feature/feature-name → New features
bugfix/bug-name      → Bug fixes
hotfix/urgent-fix    → Emergency fixes
```

**Example:**
```bash
# Create feature branch
git checkout -b feature/user-authentication

# Work on feature...
git add .
git commit -m "feat: Add user login"

# Merge back to develop
git checkout develop
git merge feature/user-authentication
```

### **Daily Workflow**

**Scenario 1: Start Your Day**
```bash
# 1. Get latest changes
git pull origin main

# 2. Start working...
# (edit files)

# 3. Check what changed
git status

# 4. Stage and commit
git add .
git commit -m "feat: Add homepage banner"

# 5. Push to remote
git push origin main
```

**Scenario 2: New Feature**
```bash
# 1. Create feature branch
git checkout -b feature/shopping-cart

# 2. Work on feature
# (edit files)

# 3. Commit changes
git add .
git commit -m "feat: Add shopping cart"

# 4. Push feature branch
git push origin feature/shopping-cart

# 5. Create Pull Request on GitHub/GitLab
# 6. After review, merge to main
```

**Scenario 3: Quick Bug Fix**
```bash
# 1. Save current work
git stash

# 2. Switch to main
git checkout main

# 3. Fix the bug
# (edit files)

# 4. Commit fix
git add .
git commit -m "fix: Resolve payment error"

# 5. Push fix
git push origin main

# 6. Back to your work
git checkout feature-branch
git stash pop
```

## 🚫 Do's and Don'ts

### **DO:**
✅ Commit frequently with meaningful messages
✅ Pull before push
✅ Use branches for new features
✅ Write clear commit messages
✅ Review changes before commit (`git diff`)
✅ Use `.gitignore` for sensitive files
✅ Test before commit

### **DON'T:**
❌ Commit sensitive data (passwords, API keys, .env)
❌ Push directly to main (use Pull Requests)
❌ Commit large binary files
❌ Force push to shared branches (`git push -f`)
❌ Commit `node_modules/` or build files
❌ Use generic commit messages
❌ Work directly on main branch

## 🔥 Common Files to Ignore

Always add to `.gitignore`:

```gitignore
# Dependencies
node_modules/
vendor/

# Environment variables
.env
.env.local

# Build files
dist/
build/
*.log

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Sensitive
config/secrets.yml
*.pem
*.key
```

## 🆘 Troubleshooting

### **Problem: "Permission denied (publickey)"**
**Solution:**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key and add to GitHub
cat ~/.ssh/id_ed25519.pub
```

### **Problem: "Fatal: Not a git repository"**
**Solution:**
```bash
# Make sure you're in the right folder
pwd

# Initialize Git if needed
git init
```

### **Problem: Merge conflict**
**Solution:**
```bash
# 1. Open conflicted file
# 2. Look for conflict markers (<<<<<<<, =======, >>>>>>>)
# 3. Choose which code to keep
# 4. Remove conflict markers
# 5. Stage and commit
git add .
git commit -m "fix: Resolve merge conflict"
```

### **Problem: Accidentally committed sensitive file**
**Solution:**
```bash
# Remove from Git but keep file locally
git rm --cached .env
git commit -m "Remove .env from tracking"

# Add to .gitignore
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Add .env to gitignore"
```

### **Problem: Wrong commit message**
**Solution:**
```bash
# Edit last commit message (not pushed yet)
git commit --amend -m "New commit message"

# If already pushed, better to leave it or ask team first
```

## 📖 Useful Resources

### **Official Documentation**
- [Git Official Docs](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [GitLab Documentation](https://docs.gitlab.com)

### **Interactive Learning**
- [Learn Git Branching](https://learngitbranching.js.org/) - Visual & interactive
- [Git Exercises](https://gitexercises.fracz.com/) - Practice challenges

### **Cheat Sheets**
- [GitHub Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Atlassian Git Cheat Sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)

### **Visual Tools**
- [GitKraken](https://www.gitkraken.com/) - Git GUI client
- [SourceTree](https://www.sourcetreeapp.com/) - Free Git GUI
- VS Code Git Integration (built-in)

## 🎓 Tips untuk Pemula

1. **Jangan takut salah** - Git punya undo untuk hampir semua hal
2. **Commit often** - Small commits lebih baik daripada giant commits
3. **Read error messages** - Git error messages sangat helpful
4. **Use `git status` frequently** - Selalu cek kondisi repository
5. **Practice branching** - Bikin branch untuk experiment tanpa takut
6. **Learn to read `git log`** - Understanding history is powerful
7. **Ask for help** - Gunakan AI/ChatGPT untuk explain Git commands

## 💬 Cara Belajar Efektif

Setiap topic punya **prompt AI** di awal. Gunakan prompt ini untuk:
1. Pahami konsep dulu sebelum praktik
2. Tanya AI jika ada yang bingung
3. Minta penjelasan dengan bahasa sederhana
4. Lihat contoh real-world

**Contoh prompt:**
```
"Saya belajar Git branching. Bisa jelaskan:
1. Apa itu branch dan kenapa penting?
2. Kapan saya harus buat branch baru?
3. Bagaimana cara merge branch?
Jelaskan dengan analogi sederhana dan contoh real-world."
```

## 🚀 Let's Start!

Mulai dari **Topic 1: Setup & Initialize** dan ikuti urutan learning path.

**Happy Learning!** 🎉

---

*Catatan: File ini akan terus di-update seiring kamu belajar Git.*