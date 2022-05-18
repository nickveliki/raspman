importScripts("precache-manifest.9a9dcf742b6a2eaa3e7e69ab0fd16d6c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
    new RegExp('http://localhost'),
    new workbox.strategies.StaleWhileRevalidate()
  );
