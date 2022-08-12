importScripts("precache-manifest.b6fab492be6a8f07325427fc3b31903b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
    new RegExp('http://localhost'),
    new workbox.strategies.StaleWhileRevalidate()
  );
