const CACHE_NAME = 'spa-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([
          '/',
          '/manifest.json',
          '/icon.png',
          '/image.png',
          '/LogoTPI.png',
          '/LogoTPI-192x192.png',
          '/LogoTPI-512x512.png'
        ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});