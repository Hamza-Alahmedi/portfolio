# GitHub Pages Deployment Checklist

## Quick Start (5 minutes)

### Before You Start

- [ ] You have a GitHub account (create at github.com if not)
- [ ] Git is installed on your computer
- [ ] Project builds successfully locally (`npm run build` works)

### Phase 1: GitHub Setup (2 minutes)

- [ ] Create new GitHub repository named `portfolio-website`
- [ ] Make it PUBLIC (required for free GitHub Pages)
- [ ] Do NOT initialize with README/gitignore/license

### Phase 2: Push Code (2 minutes)

```bash
# In your project directory
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

- [ ] Replace `YOUR-USERNAME` with your GitHub username
- [ ] Code is now on GitHub

### Phase 3: Enable GitHub Pages (1 minute)

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Done! The workflow will run automatically

### Phase 4: Monitor Deployment (1-2 minutes)

1. Click **Actions** tab in your repository
2. Watch for "Deploy to GitHub Pages" workflow
3. When it shows ✅ (green checkmark), you're live!

### Phase 5: Access Your Portfolio

Your portfolio is now live at:

```
https://YOUR-USERNAME.github.io/portfolio-website/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Detailed Commands (Copy & Paste)

### If you haven't pushed yet:

```bash
cd "c:\Users\hamza\OneDrive\Desktop\portfolio-website"
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

### If you already pushed:

Just enable GitHub Pages in Settings → Pages and select "GitHub Actions" as source.

---

## Troubleshooting

### "Repository not found" error

- Make sure repository is PUBLIC
- Check username is correct
- Verify you've created repository on GitHub first

### Workflow fails to deploy

- Click on the failed workflow in Actions tab
- Read the error message
- Common issue: Missing dependencies (unlikely, already tested)
- Solution: Try local build first: `npm run build`

### Site shows 404

- Wait 2-3 minutes for deployment to complete
- Refresh page with Ctrl+Shift+R (hard refresh)
- Check URL: `https://YOUR-USERNAME.github.io/portfolio-website/`

### Dark mode not working

- It's working! Uses system preference
- Check your OS dark mode setting
- Or click the moon icon in navigation

### Images not loading

- All images are properly configured
- Check your image filenames don't have special characters
- Images should be in `public/images/` folder

---

## What Gets Deployed

✅ All HTML pages (static)
✅ All CSS/JavaScript (minified)
✅ All images in `public/` folder
✅ CV files (PDF)
✅ Fonts (Inter, Cairo)

❌ Node modules (not needed)
❌ Source code (`.tsx` files get compiled)
❌ Development files (automatically ignored)

---

## After Deployment

### For every update:

```bash
# Make changes to your portfolio
# Then:
git add .
git commit -m "Update: describe what changed"
git push
```

GitHub Actions will automatically:

1. Build your portfolio
2. Generate optimized static files
3. Deploy to GitHub Pages
4. Your changes go live in 1-2 minutes

### To update specific file:

```bash
git add path/to/file
git commit -m "Update: specific change"
git push
```

---

## Optional: Custom Domain

Want `yourname.com` instead of `your-username.github.io`?

1. Register domain (GoDaddy, Namecheap, etc.)
2. Point DNS to GitHub Pages (or use CNAME)
3. In repository Settings → Pages → Custom domain
4. Enter your domain and save
5. GitHub will create `public/CNAME` file automatically

---

## File Structure

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← Automatic deployment config
├── app/                      ← Next.js app
├── components/               ← React components
├── public/                   ← Static files (images, CV)
├── lib/                      ← Utilities & constants
├── next.config.ts            ← Already configured ✅
├── package.json              ← Dependencies
└── DEPLOYMENT.md             ← Full guide (this document)
```

---

## Important Notes

- **Public Repository**: Anyone can see your code (it's a portfolio, that's fine!)
- **HTTPS**: Automatically enabled by GitHub
- **Free**: No cost for hosting
- **Custom Domain**: Optional, domain registration costs extra
- **Performance**: Your portfolio loads fast (static files)
- **Analytics**: GitHub Pages doesn't include analytics (optional: add Google Analytics)

---

## Success Indicators

✅ Repository created on GitHub
✅ Code pushed to main branch
✅ GitHub Pages enabled (Settings → Pages → GitHub Actions)
✅ Workflow file exists (`.github/workflows/deploy.yml`)
✅ Actions tab shows successful "Deploy to GitHub Pages" workflow
✅ Portfolio accessible at `https://YOUR-USERNAME.github.io/portfolio-website/`

---

## Need Help?

### Check these resources:

- GitHub Pages Docs: https://pages.github.com/
- Next.js Deploy Docs: https://nextjs.org/docs/app/building-your-application/deploying
- GitHub Actions Docs: https://docs.github.com/en/actions

### Common Issues & Solutions:

1. **Workflow not running**: Check if `.github/workflows/deploy.yml` file exists in main branch
2. **Build error**: Run `npm run build` locally to debug
3. **Page not found**: Wait 2-3 minutes, then hard refresh (Ctrl+Shift+R)
4. **Wrong URL**: Should be `https://USERNAME.github.io/portfolio-website/` not `portfolioWebsite`

---

**Good luck with your portfolio launch! 🚀**
