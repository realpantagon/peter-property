# Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push your code to Git** (GitHub, GitLab, or Bitbucket)

2. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** → **Create application** → **Pages**

3. **Connect your Git repository**
   - Select your repository: `realpantagon/peter-property`
   - Click **Begin setup**

4. **Configure build settings**:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `pnpm build` or `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)
   - **Environment variables**: None required for static export

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for build to complete (~2-5 minutes)

### Option 2: Deploy via CLI

```bash
# Build your project
pnpm build

# Deploy to Cloudflare Pages
pnpm pages:deploy

# Or deploy to a specific project
npx wrangler pages deploy out --project-name=peter-property
```

## 📋 Build Configuration

### In Cloudflare Dashboard

When setting up your project, use these exact settings:

```
Framework preset: Next.js (Static HTML Export)
Build command: pnpm install && pnpm build
Build output directory: out
Node version: 20
```

### Environment Variables

No environment variables are required for this static export.

## ✅ SEO Features Enabled

Your site now has full SEO optimization:

### 1. **Meta Tags & Open Graph**
   - Complete title, description, keywords
   - Open Graph for Facebook/LinkedIn
   - Twitter Cards
   - Canonical URLs

### 2. **Structured Data (JSON-LD)**
   - Schema.org RealEstateAgent markup
   - Enhanced search engine understanding

### 3. **Sitemap & Robots**
   - `/sitemap.xml` - Auto-generated sitemap
   - `/robots.txt` - Search engine directives
   - All pages indexed and crawlable

### 4. **Web Manifest (PWA)**
   - `/manifest.json` - Progressive Web App support
   - Mobile app-like experience

### 5. **Performance**
   - Static export for maximum speed
   - Cloudflare CDN for global delivery
   - Automatic HTTPS
   - Brotli/Gzip compression

## 🔍 Verify SEO After Deployment

1. **Test your sitemap**: `https://your-domain.pages.dev/sitemap.xml`
2. **Test robots.txt**: `https://your-domain.pages.dev/robots.txt`
3. **Test manifest**: `https://your-domain.pages.dev/manifest.json`
4. **Check meta tags**: View page source
5. **Google Search Console**: Submit your sitemap
6. **PageSpeed Insights**: Test performance

## 📝 Update Your Domain

After deploying, update these URLs in your code:

1. **src/app/layout.tsx** - Update `metadataBase` URL
2. **src/app/sitemap.ts** - Update `baseUrl`
3. **public/robots.txt** - Update sitemap URL

Replace `https://peterproperty.adappts.com` with your actual Cloudflare Pages URL.

## 🛠️ Troubleshooting

### Build fails with "output directory not found"
- Make sure `output: 'export'` is in `next.config.ts`
- Build output directory should be `out` (not `.next`)

### Images not loading
- Static export requires `images.unoptimized: true`
- Already configured in your `next.config.ts`

### Routes not working
- Ensure `trailingSlash: true` in `next.config.ts`
- Already configured

### SEO not working
- Check that all pages have proper metadata
- Verify sitemap is accessible
- Submit sitemap to Google Search Console

## 📊 Monitor SEO

1. **Google Search Console**: https://search.google.com/search-console
2. **Google Analytics**: Add GA4 tracking
3. **Bing Webmaster Tools**: https://www.bing.com/webmasters

## 🔄 Continuous Deployment

Cloudflare Pages automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create pull requests

Every commit triggers a new build automatically!
