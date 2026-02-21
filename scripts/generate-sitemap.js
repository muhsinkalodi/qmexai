import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.qmexai.com';

const regions = ['in', 'ae', 'kw', 'sa', 'qa', 'ru', 'us', 'ar', 'za', 'kr', 'my', 'sg', 'lk'];
const pages = ['', '/about', '/services', '/contact'];

const excludedDirs = ['/client-testing']; // Not added to sitemap, explicit exclusion.

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

// Generate Global / Default URLs
pages.forEach(page => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}${page}</loc>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
    sitemap += `  </url>\n`;
});

// Generate Regional URLs
regions.forEach(region => {
    pages.forEach(page => {
        sitemap += `  <url>\n`;
        sitemap += `    <loc>${baseUrl}/${region}${page}</loc>\n`;
        sitemap += `    <changefreq>weekly</changefreq>\n`;
        sitemap += `    <priority>${page === '' ? '0.9' : '0.7'}</priority>\n`;
        sitemap += `  </url>\n`;
    });
});

sitemap += `</urlset>\n`;

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('Sitemap generated successfully at public/sitemap.xml!');
