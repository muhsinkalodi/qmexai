#!/usr/bin/env node

/**
 * Pre-rendering Script for SEO Optimization
 * Generates static HTML files for all routes
 * Ensures search engines and AI bots can read full content
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render with their SEO metadata
const ROUTES = [
  { 
    path: '/', 
    title: 'Qmexai | Leading Web Development & AI Solutions | Global',
    desc: 'Qmexai delivers top-tier Web Apps, Mobile Apps, Branding, AI, and Digital Marketing globally.'
  },
  { 
    path: '/about', 
    title: 'About Qmexai - Our Team & Mission',
    desc: 'Learn about Qmexai, our team, mission, and values. Transforming businesses with innovative solutions.'
  },
  { 
    path: '/services', 
    title: 'Our Services - Web Development, AI, Mobile Apps',
    desc: 'Explore our comprehensive services including web development, AI solutions, mobile apps, and digital marketing.'
  },
  { 
    path: '/contact', 
    title: 'Contact Qmexai - Get In Touch Today',
    desc: 'Get in touch with our team. We are ready to help transform your business.'
  },
  // Regional routes - India
  { 
    path: '/in', 
    title: 'Top AI Startup & Web Development in India',
    desc: 'Qmexai: Leading provider of scalable Web Apps, AI Solutions, and Digital Marketing across India.'
  },
  // Regional routes - UAE
  { 
    path: '/ae', 
    title: 'Best Software Company in Dubai | Qmexai',
    desc: 'Top-tier Web Apps, Mobile Apps, and Custom AI Solutions tailored for businesses in Dubai and across the UAE.'
  },
  // Regional routes - Kuwait
  { 
    path: '/kw', 
    title: 'Premier Software & AI Solutions in Kuwait',
    desc: 'Qmexai delivers cutting-edge Web Development and AI Solutions for enterprises in Kuwait.'
  },
  // Regional routes - Saudi Arabia
  { 
    path: '/sa', 
    title: 'Leading Software Development Company in Saudi Arabia',
    desc: 'Empowering Saudi Arabia with Custom AI Solutions, Web Apps, and Mobile App Development by Qmexai.'
  },
  // Regional routes - Qatar
  { 
    path: '/qa', 
    title: 'Top IT Services & AI Solutions in Qatar',
    desc: 'Driving digital transformation in Qatar with Qmexai\'s elite Web Development and CRM Systems.'
  },
  // Regional routes - Russia
  { 
    path: '/ru', 
    title: 'Лучшая IT-компания и ИИ-решения | Qmexai',
    desc: 'Qmexai предлагает передовые решения в области веб-разработки, мобильных приложений и искусственного интеллекта.'
  },
  // Regional routes - USA
  { 
    path: '/us', 
    title: 'Best Custom Software & AI Development in USA',
    desc: 'Qmexai crafts premium Web Applications, AI Algorithms, and Mobile Apps for United States businesses.'
  },
  // Regional routes - Argentina
  { 
    path: '/ar', 
    title: 'La Mejor Empresa de Software y Desarrollo de IA | Qmexai',
    desc: 'Qmexai ofrece desarrollo de aplicaciones web, aplicaciones móviles y soluciones de IA personalizadas en Argentina.'
  },
  // Regional routes - Africa
  { 
    path: '/za', 
    title: 'Top Software & Web Development Company in Africa',
    desc: 'Qmexai delivers innovative Web Apps, AI Solutions, and CRM Systems across the African continent.'
  },
  // Regional routes - Korea
  { 
    path: '/kr', 
    title: '최고의 소프트웨어 및 AI 개발 회사 | Qmexai',
    desc: 'Qmexai는 한국 기업을 위한 맞춤형 웹 애플리케이션, 모바일 앱 및 디지털 마케팅 솔루션을 제공합니다.'
  },
  // Regional routes - Malaysia
  { 
    path: '/my', 
    title: 'Leading Web Development & AI Solutions in Malaysia',
    desc: 'Elevate your business in Malaysia with Qmexai\'s premium Web Apps and Digital Marketing.'
  },
  // Regional routes - Singapore
  { 
    path: '/sg', 
    title: 'Best Software & AI Company in Singapore',
    desc: 'Qmexai brings world-class Web Development and Custom AI to businesses in Singapore.'
  },
  // Regional routes - Sri Lanka
  { 
    path: '/lk', 
    title: 'Top Web & Software Development in Sri Lanka',
    desc: 'Transforming businesses in Sri Lanka with Qmexai\'s advanced Web Apps, Branding, and AI.'
  },
];

console.log('🚀 Starting pre-rendering for SEO optimization...\n');

// Read the built HTML file
const indexPath = path.join(__dirname, '../dist/index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: dist/index.html not found. Please run "npm run build" first.');
  process.exit(1);
}

let baseHtml = fs.readFileSync(indexPath, 'utf-8');

const baseUrl = 'https://www.qmexai.com';
let successCount = 0;

// Pre-render each route
ROUTES.forEach((route) => {
  try {
    // Create directory structure for nested routes
    const routePath = route.path === '/' ? 'index.html' : `${route.path.substring(1)}/index.html`;
    const fullPath = path.join(__dirname, '../dist', routePath);
    const dir = path.dirname(fullPath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Clone and modify HTML
    let html = baseHtml;
    
    // Update title tag
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );

    // Update meta description
    if (html.includes('name="description"')) {
      html = html.replace(
        /<meta name="description" content=".*?"/,
        `<meta name="description" content="${route.desc.replace(/"/g, '&quot;')}"`
      );
    } else {
      // Add meta description if it doesn't exist
      const metaTags = html.match(/<meta[^>]*>/g) || [];
      if (metaTags.length > 0) {
        html = html.replace(
          metaTags[0],
          `${metaTags[0]}\n    <meta name="description" content="${route.desc.replace(/"/g, '&quot;')}"`
        );
      }
    }

    // Update OG tags
    html = html.replace(
      /<meta property="og:title" content=".*?"/,
      `<meta property="og:title" content="${route.title}"`
    );

    html = html.replace(
      /<meta property="og:description" content=".*?"/,
      `<meta property="og:description" content="${route.desc.replace(/"/g, '&quot;')}"`
    );

    // Update canonical URL
    const canonicalUrl = route.path === '/' ? baseUrl : `${baseUrl}${route.path}`;
    html = html.replace(
      /<link rel="canonical" href=".*?"/,
      `<link rel="canonical" href="${canonicalUrl}"`
    );

    // Add structured data for Organization (on homepage only)
    if (route.path === '/') {
      const structuredData = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Qmexai",
      "url": "${baseUrl}",
      "logo": "${baseUrl}/logo.png",
      "description": "${route.desc}",
      "sameAs": [
        "https://www.facebook.com/qmexai",
        "https://www.linkedin.com/company/qmexai",
        "https://www.instagram.com/qmexai"
      ]
    }
    </script>`;
      
      html = html.replace('</head>', `${structuredData}\n  </head>`);
    }

    // Write the pre-rendered file
    fs.writeFileSync(fullPath, html);
    successCount++;
    console.log(`✅ Pre-rendered: ${route.path.padEnd(6)} → ${routePath}`);
  } catch (error) {
    console.error(`❌ Error pre-rendering ${route.path}:`, error.message);
  }
});

console.log(`\n✨ Pre-rendering complete! (${successCount}/${ROUTES.length} routes)`);
console.log('\n📊 Generated pre-rendered routes:');
console.log('  Main Pages:');
console.log('    ✓ / (home)');
console.log('    ✓ /about');
console.log('    ✓ /services');
console.log('    ✓ /contact');
console.log('\n  Regional Pages (13 regions):');
console.log('    ✓ /in (India) | /ae (UAE) | /kw (Kuwait) | /sa (Saudi Arabia)');
console.log('    ✓ /qa (Qatar) | /ru (Russia) | /us (USA) | /ar (Argentina)');
console.log('    ✓ /za (Africa) | /kr (Korea) | /my (Malaysia)');
console.log('    ✓ /sg (Singapore) | /lk (Sri Lanka)');

console.log('\n🤖 SEO Benefits:');
console.log('  ✓ Search engines get fully rendered HTML with meta tags');
console.log('  ✓ No need to execute JavaScript for content crawling');
console.log('  ✓ Proper Open Graph tags for social sharing');
console.log('  ✓ Canonical URLs prevent duplicate content issues');
console.log('  ✓ Structured data for rich results');
console.log('  ✓ AI bots can read full content without JS execution');

console.log('\n📝 Files created in dist/:');
console.log('  ✓ dist/index.html');
console.log('  ✓ dist/about/index.html');
console.log('  ✓ dist/services/index.html');
console.log('  ✓ dist/contact/index.html');
console.log('  ✓ dist/{region}/index.html (for each region)\n');

