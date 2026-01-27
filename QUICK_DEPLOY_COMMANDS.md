# GitHub Pages Deployment - Copy & Paste Commands

## IMPORTANT: Read This First

1. **Replace `YOUR-USERNAME`** with your actual GitHub username
2. **Create the repository first** at github.com/new before running these commands
3. **Make repository PUBLIC** (required for free GitHub Pages)

## Command 1: Initialize Git & Push Code

Copy and paste this entire block into PowerShell:

```powershell
cd "c:\Users\hamza\OneDrive\Desktop\portfolio-website"
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

**Before running:**

- [ ] Replace `YOUR-USERNAME` with your GitHub username
- [ ] Replace `Your Name` with your actual name
- [ ] Replace `your.email@gmail.com` with your email

## Command 2: Configure GitHub Pages (via Web)

These steps must be done on GitHub.com:

1. Go to: https://github.com/YOUR-USERNAME/portfolio-website/settings/pages
   (Replace YOUR-USERNAME with your username)

2. Under "Build and deployment":
   - Set **Source** to "GitHub Actions"
   - Click Save

Done! GitHub Actions will automatically deploy your site.

## Command 3: Monitor Deployment

Go to your repository Actions tab to watch the deployment:

```
https://github.com/YOUR-USERNAME/portfolio-website/actions
```

Wait for the "Deploy to GitHub Pages" workflow to show a ✅ (green checkmark).

## Command 4: Access Your Live Portfolio

Once deployment is complete, your portfolio will be at:

```
https://YOUR-USERNAME.github.io/portfolio-website/
```

Example:

- If your username is `john-doe`
- Your portfolio will be at: `https://john-doe.github.io/portfolio-website/`

## Command 5: Make Updates (After Initial Deployment)

For any future changes:

```powershell
cd "c:\Users\hamza\OneDrive\Desktop\portfolio-website"
git add .
git commit -m "Update: describe what you changed"
git push
```

Your site will automatically rebuild and redeploy in 1-2 minutes.

## Troubleshooting Commands

### Check Git Status

```powershell
cd "c:\Users\hamza\OneDrive\Desktop\portfolio-website"
git status
```

### View Remote URL

```powershell
git remote -v
```

### Build Locally (to test before pushing)

```powershell
npm run build
```

If this succeeds, GitHub deployment will also succeed.

### Force Push (if needed)

```powershell
git push -u origin main --force
```

Only use if you know what you're doing!

## Common Errors & Solutions

### Error: "fatal: not a git repository"

**Solution:** You're not in the correct folder. Run:

```powershell
cd "c:\Users\hamza\OneDrive\Desktop\portfolio-website"
git init
```

### Error: "Repository not found"

**Solution:**

1. Verify username in URL (case-sensitive)
2. Make sure repository is PUBLIC on GitHub
3. Check that you created the repository at github.com/new

### Error: "Please tell me who you are"

**Solution:**

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

### Deployment Stuck/Failed

**Solution:**

1. Check the Actions tab for error logs
2. Run `npm run build` locally to verify it works
3. Check that repository is PUBLIC

## Step-by-Step Visual Guide

### Step 1: Create Repository on GitHub

- Go to github.com/new
- Name: `portfolio-website`
- Make PUBLIC ⚠️ Important!
- Don't add README/gitignore/license
- Click "Create repository"

### Step 2: Copy Your Repository URL

On the repository page, you'll see a green "<> Code" button.
Click it and copy the HTTPS URL.
Example: `https://github.com/your-username/portfolio-website.git`

### Step 3: Run Git Commands

Paste the URL into the first command block above:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
```

### Step 4: Enable GitHub Pages

Settings → Pages → GitHub Actions

### Step 5: Wait for Deployment

Actions tab → "Deploy to GitHub Pages" workflow

### Step 6: Visit Your Site

```
https://your-username.github.io/portfolio-website/
```

## First-Time Setup Checklist

Before pushing code:

- [ ] GitHub account created at github.com
- [ ] Git installed on computer (`git --version` works)
- [ ] Repository created at github.com/new
- [ ] Repository is PUBLIC
- [ ] You have USERNAME ready
- [ ] You're in correct folder: `c:\Users\hamza\OneDrive\Desktop\portfolio-website`

## After First Deployment

✅ Portfolio is live!

For updates:

```powershell
git add .
git commit -m "What changed"
git push
```

That's it! Automatic deployment happens next.

## Need to Undo Something?

### Undo last commit (before push)

```powershell
git reset --soft HEAD~1
```

### Change last commit message

```powershell
git commit --amend -m "New message"
```

### View commit history

```powershell
git log --oneline
```

## PowerShell Tips

### Change Directory Shortcut

Instead of full path, you can:

```powershell
cd Desktop/portfolio-website
```

(If Desktop is in user directory)

### Copy-Paste in PowerShell

- Right-click to paste (Ctrl+V might not work)
- Or use Shift+Insert

## File Verification

After `git push`, verify files are on GitHub:

1. Go to your repository: `https://github.com/YOUR-USERNAME/portfolio-website`
2. You should see:
   - `.github/workflows/deploy.yml` file
   - `app/`, `components/`, `lib/` folders
   - `package.json`, `next.config.ts`, etc.

If these files are there, deployment will work!

## Summary

```bash
# 1. Create repository at github.com/new (PUBLIC!)
# 2. Run these commands:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages on GitHub (Settings → Pages → GitHub Actions)
# 4. Wait for Actions workflow to complete (1-2 min)
# 5. Visit: https://YOUR-USERNAME.github.io/portfolio-website/
```

**That's all! Your portfolio is now live. 🚀**

For future updates, just push to main and it redeploys automatically.

---

**Need help?** Check `DEPLOYMENT.md` for detailed explanations.
