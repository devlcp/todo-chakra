const CACHE_ELEMENTS = [
    "./",
    "./src/logo.svg",
    "./favicon.png",
    "./src/main.tsx",
    "./src/serviceWorkerRegister.ts",
    "./sw.ts",
    "./manifest.json",
    "./ios/",
    "./android/",
    "./src/App.tsx",
    "./src/theme.ts",
]

const CACHE_NAME = "v2_todo"

self.addEventListener( "install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then(() => {
               self.skipWaiting() 
            }).catch(err => {
                console.log(err);
            })
        })
    )
})

self.addEventListener( "activate", (e) => {
    const cacheWhileList = [CACHE_NAME]

    // Elimina los caches antiguos
    e.waitUntil(
        caches.keys().then( cacheNames => {
           return Promise.all(cacheNames.map(cacheName => {
               return cacheWhileList.indexOf(cacheName) === -1 && caches.delete(cacheName);
            })) 
        }).then(() => self.clients.claim())
    )
})

self.addEventListener( "fetch", (e) => {
    // Agrega archivos o rutas al cache en caso de que no esten
    e.respondWith(
        caches.match(e.request)
            .then(res => res ? res : fetch(e.request))
            .catch(console.log)
    )
    
})
