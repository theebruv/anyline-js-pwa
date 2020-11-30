/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "anyline.4cfec02d.js",
    "revision": "5a3d303410a4b46d67b511a83f9e1b72"
  },
  {
    "url": "demo.9ad09f98.css",
    "revision": "b07dbab90ee4ffcf0fb987a6b29a9b0f"
  },
  {
    "url": "demo.9ad09f98.js",
    "revision": "b4a8135ace4fa1822b770906524f1ca1"
  },
  {
    "url": "demo.e31bb0bc.js",
    "revision": "2c771c4e5d785c99dd097f423028b870"
  },
  {
    "url": "index.html",
    "revision": "bde98eda3b40fc385f9ba45531ba2f0d"
  },
  {
    "url": "index.js",
    "revision": "c9d0298c8dbfeab2c8a182765be36d83"
  },
  {
    "url": "license.c1bb2272.js",
    "revision": "b92ff7953517715032062489e0c756f3"
  },
  {
    "url": "logo192.7c39fcc9.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.146c1d78.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "/",
    "revision": "83a17d4288ec25c7d504a51a73bc02b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
