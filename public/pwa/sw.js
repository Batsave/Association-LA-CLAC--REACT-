const CACHE_NAME = 'V1';
const assetsToCache = [
  '../',
  '../index.html',
  '../.htaccess',
  './manifest.json',
  '../app.css',
  '../app.js',
  '../svg/association-la-clac-logo.svg',
  '../svg/icons/agenda.svg',
  '../svg/icons/billets.svg',
  '../svg/icons/creditcard.svg',
  '../svg/icons/pmr.svg',
  '../svg/icons/quality.svg',
  '../svg/icons/time.svg',
  '../mp4/main-background-video.mp4',
  '../png/logo192x192.png',
  '../png/logo512x512.png'
];

// Installation du service worker et mise en cache des ressources initiales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.add(assetsToCache);
    })
  );
});

// Gestion des requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Si une ressource mise en cache est trouvée, utilisez-la; sinon, récupérez-la depuis le réseau
      return cachedResponse || fetch(event.request).then(networkResponse => {
        // Si le client est connecté à Internet, mettez à jour le cache avec la nouvelle réponse
        if (navigator.onLine) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      });
    })
  );
});

// Mise à jour du service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Supprime les caches qui ne sont pas dans la whitelist
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
