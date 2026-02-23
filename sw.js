const CACHE_NAME = 'turkana-v1';
const ASSETS = [
  '/',
  'index.html',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Inter:wght@300;400;900&display=swap'
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve from Cache when Offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});