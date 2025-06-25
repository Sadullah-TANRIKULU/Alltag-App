const CACHE_NAME = 'alltag-app-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  './dist/app.js',
  './dist/data-ch.js',
  './dist/data-de.js',
  './assets/Skull.png',
  '/manifest.webmanifest',
  'https://fonts.googleapis.com/css2?family=Acme&family=Kanit&display=swap'
];

// Install Event: Cache App Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate Event: Clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch Event: Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
