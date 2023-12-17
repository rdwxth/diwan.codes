// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('portfolio-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html', // Update with the actual path to your HTML file
        '/manifest.json',
        '/static/logo.webp', // Add other static assets
        // Add other assets you want to cache
        '/**' // Cache everything
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});