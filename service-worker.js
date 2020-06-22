const CACHE_NAME = 'Minggat-Vacation'
const urlsToCache = [
  './',
  './manifest.json',
  './index.html',
  './nav.html',
  './favicon.ico',
  './css/materialize.min.css',
  './css/style.css',
  './fonts/JelyttaRegular.woff2',
  './js/materialize.min.js',
  './js/nav.js',
  './js/script.js',
  './icons/icon_512x512.png',
  './icons/apple-touch-icon.png',
  './icons/icon_192x192.png',
  './icons/icon_32x32.png',
  './images/author.jpeg',
  './images/banyuwangithumb.webp',
  './images/covid19_banner_web.webp',
  './images/cuaca.png',
  './images/errorpage.webp',
  './images/getting-header.webp',
  './images/informasi-umum.png',
  './images/nature1.webp',
  './images/rajaampatthumb.webp',
  './images/transportasi.png',
  './images/ugc1.webp',
  './images/ugc2.webp',
  './images/ugc4.webp',
  './images/ugc6.webp',
  './images/ugc8.webp',
  './images/ugc9.webp',
  './images/yogyakartathumb.webp',
  './pages/about.html',
  './pages/home.html',
  './pages/story.html',
  './pages/tips.html',
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function (response) {
        if (response) {
          console.log('ServiceWorker: Gunakan aset dari cache: ', response.url)
          return response
        }

        console.log(
          'ServiceWorker: Memuat aset dari server: ',
          event.request.url
        )
        return fetch(event.request)
      })
  )
})

// Hapus cache samvah
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log('ServiceWorker: cache ' + cacheName + ' dihapus')
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
