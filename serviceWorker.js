const offlineAnylineJS = "offlineAnylineJS"
const assets = [
  "/",
  "/anyline.js",
  "/demo/index.css",
  "/demo/index.html",
  "/demo/index.js",
  "/demo/license.js",
  "/demo/fullscreen/index.html",
  "/demo/fullscreen/favicon.ico",
  "/demo/fullscreen/logo192.png",
  "/demo/fullscreen/logo512.png",
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
  