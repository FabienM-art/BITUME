const CACHE='bitume-v32-terrains-instantanes-33';
const ASSETS=['./','./index.html','./bitume-accueil-playground-night.png','./icon-180.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./apple-touch-icon-precomposed.png','./bitume-iphone-v19.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));});

self.addEventListener("install",e=>e.waitUntil(caches.open("bitume-v32-terrains-instantanes-33").then(c=>c.add("./bitume-accueil-reference.png")).catch(()=>{})));
