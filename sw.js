/**
 * @ai-generated true
 * @agent claude-code
 * @created 2026-02-28T00:10:15+01:00
 */
const CACHE_NAME = 'ki-kompass-v2';
const ASSETS = [
  'ai-evolution-guide-de.html',
  'Lunolabs-logo.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
