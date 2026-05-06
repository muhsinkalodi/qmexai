/**
 * Vite Server Configuration for Pre-rendered Routes
 * Serves the correct pre-rendered HTML file based on the route
 */

export default {
  server: {
    middlewares: [
      {
        // Middleware to serve pre-rendered pages
        route: '',
        handler: (req, res, next) => {
          const url = req.url;
          
          // Normalize URL (remove query strings and trailing slashes)
          let normalizedUrl = url.split('?')[0];
          if (normalizedUrl !== '/' && normalizedUrl.endsWith('/')) {
            normalizedUrl = normalizedUrl.slice(0, -1);
          }

          // Map routes to pre-rendered files
          const routeMap = {
            '/': 'index.html',
            '/about': 'about/index.html',
            '/services': 'services/index.html',
            '/contact': 'contact/index.html',
            '/in': 'in/index.html',
            '/ae': 'ae/index.html',
            '/kw': 'kw/index.html',
            '/sa': 'sa/index.html',
            '/qa': 'qa/index.html',
            '/ru': 'ru/index.html',
            '/us': 'us/index.html',
            '/ar': 'ar/index.html',
            '/za': 'za/index.html',
            '/kr': 'kr/index.html',
            '/my': 'my/index.html',
            '/sg': 'sg/index.html',
            '/lk': 'lk/index.html',
          };

          // If route has a pre-rendered file, serve it
          if (routeMap[normalizedUrl]) {
            // Pre-render files are served in production
            // In dev, this just passes through
          }

          next();
        }
      }
    ]
  },
  build: {
    // Ensure React app is properly bundled
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
};
