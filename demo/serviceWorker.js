const offlineAnylineJS = "offlineAnylineJS"
const assets = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/anyline.js",
  "/index.css",
  "/index.js",
  "/license.js",
  "/logo192.png",
  "/logo512.png",
  "/anylinejs/anylinejs.js",
  "/anylinejs/anylinejs.wasm.gz",
  "/anylinejs/anylinejs2.wasm.gz",
  "/anylinejs/data_barcode.data",
  "/anylinejs/data_id.data",
  "/anylinejs/data_lpt.data",
  "/anylinejs/data_meter.data",
  "/anylinejs/data_ocr.data",
 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(offlineAnylineJS).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  