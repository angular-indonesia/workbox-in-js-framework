workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst(),
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate(),
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);