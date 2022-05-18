workbox.routing.registerRoute(
    new RegExp('http://localhost'),
    new workbox.strategies.StaleWhileRevalidate()
  );