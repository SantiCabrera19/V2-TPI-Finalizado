const CACHE_NAME = 'spa-cache-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([
          '/?standalone=true',
          '/manifest.json',
          '/icon.png',
          '/image.png',
          '/LogoTPI.png',
          '/LogoTPI-192x192.png',
          '/LogoTPI-512x512.png'
        ]);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    const url = new URL(event.request.url);
    url.searchParams.set('standalone', 'true');
    url.searchParams.set('mode', 'standalone');
    event.respondWith(
      fetch(new Request(url.toString(), event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});