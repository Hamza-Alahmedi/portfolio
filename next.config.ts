import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and configure when deploying to GitHub Pages
  // basePath: '/portfolio-website',
  // assetPrefix: '/portfolio-website',
};

export default nextConfig;
