# Qmexai - Web Development & AI Solutions Website

**Qmexai** is a modern, responsive company website built with React and Vite, featuring multi-region SEO optimization, dynamic content management, and a professional design system.

## Project Overview

- **Company**: Qmexai
- **Website**: https://www.qmexai.com
- **Deployment**: Netlify
- **Build Tool**: Vite
- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Routing**: React Router v7

## Tech Stack

- **Frontend**: React 19.2.0, Vite 7.2.4
- **UI Library**: Lucide React (Icons), Framer Motion (Animations)
- **Styling**: Tailwind CSS 4.1.18, PostCSS 8.5.6
- **SEO**: React Helmet Async with dynamic meta tags
- **Development**: ESLint 9.39.1 with React plugins

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, PageHeader
│   ├── seo/           # Global SEO management
│   └── ui/            # Reusable UI components (Hero, ServiceCard, etc.)
├── pages/             # Main page components (Home, About, Services, Contact)
├── App.jsx            # Main app with routing
├── main.jsx           # React entry point
└── index.css          # Global styles & Tailwind config

public/
├── logo.png           # Company logo
├── sitemap.xml        # Auto-generated SEO sitemap
├── robots.txt         # SEO robots directive
└── _redirects         # Netlify routing config
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Generate sitemap before build (runs automatically with npm run build)
node scripts/generate-sitemap.js

# Preview production build
npm run preview

# Run linter
npm lint
```

## Features

### Multi-Region Support
- 12 regional variants: India, UAE, Kuwait, Saudi Arabia, Qatar, Russia, USA, Argentina, South Africa, Korea, Malaysia, Singapore, Sri Lanka
- Dynamic SEO metadata per region
- Auto-generated regional sitemaps

### SEO Optimization
- ✅ Structured data (JSON-LD)
- ✅ Open Graph & Twitter cards
- ✅ Canonical URLs
- ✅ Dynamic sitemap generation
- ✅ Regional meta tags

### Performance
- ✅ Code splitting with Vite
- ✅ Lazy loading routes
- ✅ Optimized images
- ✅ Cache headers configured

### Responsive Design
- Mobile-first approach
- Fully responsive layouts
- Touch-friendly navigation

## Deployment

### Netlify Configuration
The site is optimized for Netlify deployment:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing configured via `netlify.toml` and `public/_redirects`
- Automatic cache headers for assets

## Environment Variables

No environment variables required for basic deployment. All configuration is handled through code constants.

## Contributing

1. Follow ESLint rules (run `npm run lint`)
2. Use React best practices
3. Test responsive design on mobile
4. Update SEO metadata in `GlobalSEO.jsx` for regional content
5. Generate new sitemap after route changes: `npm run build`

## License

Proprietary - Qmexai
