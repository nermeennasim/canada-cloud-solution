const CACHE_NAME = "canada-cloud-solution-v1";
const STATIC_ASSETS = [
	"/",
	"/images/logo.png",
	"/images/hero-img.jpeg",
	"/images/favicon.ico",
];

// Install service worker
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
	);
});

// Fetch from cache first, then network
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Return cached version or fetch from network
			return response || fetch(event.request);
		})
	);
});
