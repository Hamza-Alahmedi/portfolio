# Portfolio Website - Hamza Alahmedi

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth scrolling, and beautiful animations.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Mobile-first design that works on all devices
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Friendly**: Meta tags and semantic HTML
- **Performance**: Fast loading and optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (static export)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information

Edit `lib/constants.ts` to update:
- Personal info (name, email, social links)
- Skills and technologies
- Projects
- Work experience
- Education details

### Adding Projects

Add new projects to the `PROJECTS` array in `lib/constants.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Project Name',
  type: 'Website' | 'Web App' | 'Landing Page',
  description: 'Brief description...',
  techStack: ['Tech1', 'Tech2'],
  liveUrl: 'https://...',
  githubUrl: 'https://github.com/...',
  role: 'Your role',
}
```

### Adding Your CV

Place your CV PDF in `public/cv/Hamza_Alahmedi_CV.pdf`

### Project Images

Add project images to `public/images/projects/` and reference them in the projects array.

## 🚀 Deployment to GitHub Pages

1. **Build the static export**:
```bash
npm run build
```

2. **Update `next.config.ts`**:
   - Uncomment the `basePath` and `assetPrefix` lines
   - Replace `portfolio-website` with your repository name:
   ```typescript
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name',
   ```

3. **Create GitHub repository** and push your code

4. **Configure GitHub Pages**:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: Select your branch and `/out` folder (or use GitHub Actions)

5. **Deploy**:
   - Push the `out` folder contents to `gh-pages` branch, or
   - Use GitHub Actions for automatic deployment

### Deployment with GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates `out` folder)
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## 🎨 Color Customization

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "#your-color",
    dark: "#darker-shade",
    light: "#lighter-shade",
  },
}
```

## 📱 Sections

1. **Hero** - Name, title, and call-to-action
2. **About** - Bio and background
3. **Skills** - Categorized tech skills
4. **Projects** - Portfolio with filtering
5. **Experience** - Work history timeline
6. **Education** - Academic background
7. **Contact** - Contact form and social links
8. **Footer** - Copyright and quick links

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 Author

**Hamza Alahmedi**
- GitHub: [@hamzaalahmedi](https://github.com/hamzaalahmedi)
- LinkedIn: [Hamza Alahmedi](https://linkedin.com/in/hamzaalahmedi)

---

Made with ❤️ using Next.js and Tailwind CSS
