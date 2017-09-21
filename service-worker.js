let cacheName = "notes-son-v.1.0.0";
let filesToCache = [
  "./",
  "index.html",
  "css/colors.css",
  "css/styles.css",
  "js/array.observer.polyfill.js",
  "js/object.observe.polyfill.js",
  "js/scripts.js"
];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
