// LIFE CITY service worker (generated at build)
const CACHE = 'lifecity-b9fbaf3750';
const FILES = ["./","index.html","manifest.webmanifest","favicon.svg","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","assets/index-DTJI2xWm.js","assets/index-C1jpOuZi.css"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('lifecity-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {
    // the page: network first so a new version arrives; the saved copy when offline
    e.respondWith(fetch(r).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('index.html', copy)); return res; }).catch(() => caches.match('index.html', { ignoreVary: true })));
    return;
  }
  e.respondWith(caches.match(r, { ignoreVary: true }).then((hit) => hit || fetch(r)));
});
