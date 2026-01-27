# GitHub Pages Deployment Guide

## Prerequisites

- GitHub account
- Git installed on your local machine
- Repository created on GitHub

## Step-by-Step Instructions

### **Step 1: Prepare Your Repository**

1. Initialize Git (if not already done):

```bash
cd c:\Users\hamza\OneDrive\Desktop\portfolio-website
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name it: `portfolio-website` (or your preferred name)
   - Choose "Public" (required for free GitHub Pages)
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

### **Step 2: Connect Local Repository to GitHub**

```bash
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### **Step 3: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will use the automated workflow

### **Step 4: Configure for Custom Domain (Optional)**

If you want to use a custom domain:

1. Update `next.config.ts`:

```typescript
// Remove or keep as is if using default GitHub Pages URL
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

2. Create a `public/CNAME` file with your domain:

```
your-domain.com
```

3. Configure DNS records with your domain provider

### **Step 5: Deploy**

1. Push changes to GitHub:

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push
```

2. GitHub Actions will automatically:
   - Build your project
   - Generate static files in the `out` folder
   - Deploy to GitHub Pages

3. View deployment status:
   - Go to your repository → **Actions**
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (usually 1-2 minutes)

### **Step 6: Access Your Portfolio**

Your portfolio will be available at:

```
https://YOUR-USERNAME.github.io/portfolio-website/
```

Or if using a custom domain:

```
https://your-domain.com
```

## For Subsequent Updates

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update: [describe changes]"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy.

## Troubleshooting

### Build fails

- Check the Actions tab for error messages
- Ensure `next build` runs locally without errors: `npm run build`
- Verify all environment variables are set if needed

### 404 errors on subpages

- This is normal for client-side routing in Next.js static export
- The site uses smooth scrolling with anchor links (#sections)
- All navigation happens within single page loads

### Images not loading

- Already configured with `unoptimized: true` in next.config.ts
- Ensure image paths are relative (already implemented)

### Dark mode not working

- Dark mode detection uses system preference and localStorage
- Should work automatically on GitHub Pages

## Project Configuration (Already Done)

✅ `next.config.ts` - Set to `output: 'export'` for static generation
✅ `next.config.ts` - Images set to `unoptimized: true` for GitHub Pages
✅ GitHub Actions workflow - Automated deployment pipeline created
✅ Project uses only static assets - No server-side rendering needed

## Files Structure

```
portfolio-website/
├── .github/workflows/
│   └── deploy.yml          # Automated deployment workflow
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── ThemeToggle.tsx
│   ├── sections/           # All section components
│   └── ui/                 # UI component library
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   └── i18n/              # Internationalization
├── public/
│   ├── cv/                # CV files (en & ar)
│   └── images/
├── next.config.ts         # ✅ Already configured
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Key Features Already Configured for GitHub Pages

- ✅ Static export enabled
- ✅ Image optimization disabled (for GitHub Pages)
- ✅ No API routes (all client-side)
- ✅ No database dependencies
- ✅ i18n support (English/Arabic)
- ✅ Dark/Light mode support
- ✅ All links use hash-based routing
- ✅ CSS variables for theming
- ✅ Responsive design

## Performance Tips

After deployment, you can optimize further:

1. **Enable gzip compression** - GitHub Pages does this automatically
2. **Cache busting** - GitHub Pages automatically handles this
3. **Lazy loading** - Already implemented in components
4. **Code splitting** - Next.js handles this automatically

## Domain Registration

If you want a custom domain:

1. Register a domain at:
   - Namecheap
   - GoDaddy
   - Google Domains
   - etc.

2. Point DNS to GitHub Pages:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME: `YOUR-USERNAME.github.io`

3. Create `public/CNAME` with your domain

4. Update GitHub Pages settings to use your custom domain

## Security

- GitHub Pages uses HTTPS automatically
- All traffic is encrypted
- Your code is public (expected for portfolio)
- No sensitive data stored in repository

## Need Help?

- GitHub Pages Documentation: https://pages.github.com/
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- GitHub Actions: https://docs.github.com/en/actions
