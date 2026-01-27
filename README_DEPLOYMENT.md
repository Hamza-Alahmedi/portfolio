# Portfolio Website - GitHub Pages Deployment Guide

## Project Status: ✅ Ready for Deployment

Your portfolio website is fully configured and ready to be published on GitHub Pages!

## What's Been Prepared

### 1. **Project Configuration** ✅

- Next.js configured for static export (`output: 'export'`)
- Images optimized for GitHub Pages (`unoptimized: true`)
- No API routes or server-side rendering
- Fully static, deployable website

### 2. **GitHub Actions Workflow** ✅

- Automated deployment pipeline created
- File: `.github/workflows/deploy.yml`
- Automatically builds and deploys on every push to `main` branch
- Handles all build steps automatically

### 3. **Documentation** ✅

- `DEPLOYMENT.md` - Full deployment guide with troubleshooting
- `DEPLOY_CHECKLIST.md` - Quick reference checklist
- This file - Overview and quick start

## Quick Deployment Steps (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `portfolio-website`
3. Make it **PUBLIC** (required for free GitHub Pages)
4. Don't initialize with any files
5. Click "Create repository"

### Step 2: Push Your Code

```bash
cd "c:\Users\hamza\OneDrive\Desktop\portfolio-website"
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save and you're done!

### Step 4: Wait for Deployment

1. Click **Actions** tab in your repository
2. Wait for "Deploy to GitHub Pages" workflow to complete (1-2 minutes)
3. When you see a ✅ (green checkmark), you're live!

### Step 5: Access Your Portfolio

```
https://YOUR-USERNAME.github.io/portfolio-website/
```

Example: If your GitHub username is "hamza-alahmedi", your portfolio will be at:

```
https://hamza-alahmedi.github.io/portfolio-website/
```

## Your Portfolio Features

✅ **Modern Design** - Clean, minimal aesthetic inspired by Vercel and Linear
✅ **Responsive** - Works perfectly on desktop, tablet, and mobile
✅ **Dark/Light Mode** - Automatic theme switching with manual toggle
✅ **Bilingual** - English and Arabic with proper RTL support
✅ **Interactive** - Smooth scrolling, animations, hover effects
✅ **Performance** - Optimized static files, fast load times
✅ **SEO-Friendly** - Proper meta tags and semantic HTML
✅ **Accessible** - WCAG AA compliant contrast ratios

## What Gets Deployed

- ✅ All HTML pages
- ✅ All CSS and JavaScript (minified)
- ✅ All images and assets
- ✅ CV files (English & Arabic)
- ✅ Fonts (Inter, Cairo)

## Technology Stack

- **Framework**: Next.js 16.1.3 (React 19)
- **Styling**: Tailwind CSS 3.4.19
- **Animations**: Framer Motion 12.29.2
- **Language**: TypeScript 5
- **Hosting**: GitHub Pages (free)

## Important Notes

### GitHub Pages URL Structure

Since you're deploying to a project repository (not `username.github.io`):

- Your URL will be: `https://username.github.io/portfolio-website/`
- All internal links are automatically handled
- Don't need to configure `basePath` unless you rename the repository

### First Deployment Takes Longer

- First deployment: 2-3 minutes
- Subsequent deployments: 1-2 minutes
- You can monitor progress in the Actions tab

### Making Updates

After initial deployment, updating is simple:

```bash
# Make changes to your portfolio files
# Then:
git add .
git commit -m "Update: describe your changes"
git push
```

GitHub Actions will automatically rebuild and redeploy!

## Troubleshooting

### Build fails

**Solution**: Run `npm run build` locally to identify the issue

- Check for TypeScript errors: `npm run build`
- All files should already be configured correctly

### Deployment never completes

**Solution**: Check the Actions tab for error messages

- Read the workflow log to see what failed
- Most common: Repository not public (check Settings → General)

### Site shows 404 after deployment

**Solution**:

1. Wait 2-3 minutes for full deployment
2. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Check URL is correct: `https://username.github.io/portfolio-website/`

### Navigation doesn't work

**Solution**: All links use hash-based navigation (#home, #projects, etc.)

- This is normal for GitHub Pages static sites
- Smooth scrolling to different sections works automatically
- Direct links to sections work: `yoursite.com/#projects`

## Optional: Custom Domain

If you want to use your own domain (e.g., `yourname.com`):

1. Register a domain (Namecheap, GoDaddy, etc.)
2. Point DNS to GitHub Pages
3. Add domain in repository Settings → Pages → Custom domain
4. GitHub will handle HTTPS automatically

Cost: Only the domain registration (~$10-15/year)

## Performance & Security

✅ **HTTPS**: Automatically enabled by GitHub
✅ **Compression**: Automatic gzip compression
✅ **Caching**: Browser caching configured
✅ **CDN**: GitHub Pages uses global CDN (fast worldwide)
✅ **Privacy**: HTTPS encrypts all data

## Need Help?

### Deployment Documents

1. `DEPLOYMENT.md` - Comprehensive guide with all details
2. `DEPLOY_CHECKLIST.md` - Quick reference checklist
3. This file - Overview and steps

### External Resources

- GitHub Pages: https://pages.github.com/
- Next.js Deployment: https://nextjs.org/docs/app/building-your-application/deploying
- GitHub Actions: https://docs.github.com/en/actions

## Success Checklist

Before launching, make sure:

- [ ] You have a GitHub account
- [ ] Git is installed locally
- [ ] `npm run build` works without errors
- [ ] Repository is created and PUBLIC
- [ ] Code is pushed to main branch
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] First deployment workflow completed successfully
- [ ] Portfolio accessible at `https://username.github.io/portfolio-website/`

## File Manifest

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml              ← Automatic deployment
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── ThemeToggle.tsx
│   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── LanguageSwitcher.tsx
│   └── sections/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       └── Skills.tsx
├── contexts/
│   └── ThemeContext.tsx
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   └── i18n/
│       ├── config.ts
│       ├── LanguageContext.tsx
│       └── translations/
│           ├── ar.json
│           └── en.json
├── public/
│   ├── cv/
│   │   ├── cv-ar.pdf
│   │   └── cv-en.pdf
│   └── images/
├── .eslintrc.json
├── DEPLOYMENT.md              ← Full deployment guide
├── DEPLOY_CHECKLIST.md        ← Quick checklist
├── eslint.config.mjs
├── next.config.ts             ← Already configured ✅
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Ready to Launch! 🚀

Your portfolio is production-ready. Follow the 5-step Quick Deployment process above, and your portfolio will be live in minutes!

**Questions?** Check `DEPLOYMENT.md` for detailed information on every step.

**Good luck! 🎉**
