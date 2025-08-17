const CACHE = 'mechlab-v02';
const ASSETS = [
  './','./index.html','./styles.css','./manifest.webmanifest',
  './src/main.js','./src/physics/engine.js','./src/ui/palette.js','./src/ui/props.js','./src/ui/graphs.js','./src/ui/tools.js',
  './src/i18n/en.json','./src/i18n/ja.json',
  'https://unpkg.com/matter-js@0.19.0/build/matter.min.js'
];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
