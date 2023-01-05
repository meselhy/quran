const cacheName = "cache1"; // Change value to force update

self.addEventListener("install", event => {
	// Kick out the old service worker
	self.skipWaiting();

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
				"/assets/img/android-chrome-192x192.png", // Favicon, Android Chrome M39+ with 4.0 screen density
				"android-chrome-512x512.png", // Favicon, Android Chrome M47+ Splash screen with 4.0 screen density
				"apple-touch-icon.png", // Favicon, Apple default
				"/assets/img/browserconfig.xml", // IE11 icon configuration file
				"/assets/img/favicon.ico", // Favicon, IE and fallback for other browsers
				"/assets/img/favicon-16x16.png", // Favicon, default
				"/assets/img/favicon-32x32.png", // Favicon, Safari on Mac OS
				"index.html", // Main HTML file
				"manifest.json", // Manifest file
				"/assets/img/maskable_icon.png", // Favicon, maskable https://web.dev/maskable-icon
				"/assets/img/mstile-150x150.png", // Favicon, Windows 8 / IE11
				"/assets/img/safari-pinned-tab.svg", // Favicon, Safari pinned tab
				"/assets/style/style.css", // Main CSS file
				"/assets/script/script.js",
				"/assets/audio/pl1/1.mp3",
				"/assets/audio/pl1/2.mp3",
				"/assets/audio/pl1/3.mp3",
				"/assets/audio/pl1/4.mp3",
				"/assets/audio/pl1/5.mp3",
			]);
		})
	);
});

self.addEventListener("activate", event => {
	// Delete any non-current cache
	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(
				keys.map(key => {
					if (![cacheName].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		})
	);
});

// Offline-first, cache-first strategy
// Kick off two asynchronous requests, one to the cache and one to the network
// If there's a cached version available, use it, but fetch an update for next time.
// Gets data on screen as quickly as possible, then updates once the network has returned the latest data. 
self.addEventListener("fetch", event => {
	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(networkResponse => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
			})
		})
	);
});