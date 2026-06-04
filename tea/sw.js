// Service Worker for 英德红茶购买攻略 PWA
const CACHE = 'tea-guide-v1';
const ASSETS = [
  '/tea/',
  '/tea/index.html',
  '/tea/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
