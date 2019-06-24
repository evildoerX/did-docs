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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e1e39c4c539cd3056343fb16d6f9f318"
  },
  {
    "url": "assets/css/0.styles.ffd4ce66.css",
    "revision": "74a65436c2c082b2d6e429c9763784c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.820a40b0.js",
    "revision": "a6094692da31c87a65b87d7fd482dda8"
  },
  {
    "url": "assets/js/11.253fc343.js",
    "revision": "45a89cdaa9d7cb310975b6b2d5c5fd5c"
  },
  {
    "url": "assets/js/12.ae284e3d.js",
    "revision": "0d91b20418bccaebc1cf18953da8d50e"
  },
  {
    "url": "assets/js/13.664a0aa6.js",
    "revision": "3ecc13c094b451bb53bbd97f673e7553"
  },
  {
    "url": "assets/js/14.511aea72.js",
    "revision": "b4fffc9898509cdd5505c0e26683b4c4"
  },
  {
    "url": "assets/js/15.7c032f5c.js",
    "revision": "fcf2a5654ba0e29815eaa239c4ebf384"
  },
  {
    "url": "assets/js/16.5895f5cd.js",
    "revision": "2013b953fcda879a7238ad22c8b041d0"
  },
  {
    "url": "assets/js/17.dcd19337.js",
    "revision": "d08136e3ac4cb2cb882e3eea77437ef9"
  },
  {
    "url": "assets/js/18.eb0734fd.js",
    "revision": "1e5c958c87e602dbd62f8cc1ba2c6827"
  },
  {
    "url": "assets/js/19.08251618.js",
    "revision": "c6b6a7709dd630d1a0f0b34f41e1adef"
  },
  {
    "url": "assets/js/20.a3b95abd.js",
    "revision": "0da9f9ea85e35803bb9de67fe042cbd3"
  },
  {
    "url": "assets/js/21.7858f0d6.js",
    "revision": "a157e2edb392f86c2562455cb71333d3"
  },
  {
    "url": "assets/js/22.14640cb2.js",
    "revision": "ef72dcf9b541dfc5b41a537b28228df7"
  },
  {
    "url": "assets/js/23.80b41341.js",
    "revision": "ecbfbe7c6812d6eb0d1bd448089dcc80"
  },
  {
    "url": "assets/js/24.2f9b18dc.js",
    "revision": "e923d6a9c5151170cce887394cbeca81"
  },
  {
    "url": "assets/js/25.7cc085fc.js",
    "revision": "6543deef83da8b2ab507516ad2b970f4"
  },
  {
    "url": "assets/js/26.53b548b3.js",
    "revision": "6efe7da6428fdad82dda685f0c65fe5d"
  },
  {
    "url": "assets/js/27.a9f21707.js",
    "revision": "1ba07d548e3b8b70227c11c2da9402b4"
  },
  {
    "url": "assets/js/3.ccefdc58.js",
    "revision": "fecd9d7d4e5b9938b9c247db6450cdfb"
  },
  {
    "url": "assets/js/4.95722bcb.js",
    "revision": "b28df6245419c316b351b8ad7409df12"
  },
  {
    "url": "assets/js/5.9a745799.js",
    "revision": "add362c012efa236fa9aae5cafda0ece"
  },
  {
    "url": "assets/js/6.ddb8dd7e.js",
    "revision": "7aadf06dcb12807b465139c978097856"
  },
  {
    "url": "assets/js/7.a332d0bb.js",
    "revision": "26f239a398b28d034b079285a2613c61"
  },
  {
    "url": "assets/js/8.6b6f710f.js",
    "revision": "7a27855624b43288df332cfa22149a56"
  },
  {
    "url": "assets/js/9.b2b9abfd.js",
    "revision": "7c61e800734bed6184fb3f7c62d3585c"
  },
  {
    "url": "assets/js/app.2d92cd83.js",
    "revision": "c2fcdb2c43d4970d7e13d840a2629538"
  },
  {
    "url": "assets/js/vendors~notification.3948145b.js",
    "revision": "6aaee707bad6eeb11277520a8387a984"
  },
  {
    "url": "dids/DataModel.html",
    "revision": "2b7a8253ed01d566e693fb2156e4769c"
  },
  {
    "url": "dids/DecentralizedIdentifiers.html",
    "revision": "8104af26a4d5860053e7a19c6d988f97"
  },
  {
    "url": "dids/DIDDocuments.html",
    "revision": "ebc7ef693648343e4da0cc724b047295"
  },
  {
    "url": "dids/DIDDocumentSyntax.html",
    "revision": "f6ffe1fbbc77c38ce3fb15b8e783a20d"
  },
  {
    "url": "dids/DIDMethods.html",
    "revision": "42469907a4cfdac72bf9cfdc4dca9466"
  },
  {
    "url": "dids/FutureWork.html",
    "revision": "0afe091e1aa43f3f247a20439dd670e5"
  },
  {
    "url": "dids/Guide.html",
    "revision": "9251b8308f33bf2c2c7ab6ad9b6b82ef"
  },
  {
    "url": "dids/index.html",
    "revision": "c6b578494f5304123085b7d9e7db6231"
  },
  {
    "url": "dids/PrivacyConsiderations.html",
    "revision": "2286d56a2cf03c45ede4a20f126bf71e"
  },
  {
    "url": "dids/RealWorldExample.html",
    "revision": "70167af6d31a3aeebd7bb25da36563d1"
  },
  {
    "url": "dids/References.html",
    "revision": "41d8d0e56c5b4cb73f560922ddad5363"
  },
  {
    "url": "dids/Registries.html",
    "revision": "20affb3b8681affae89445058a7aca52"
  },
  {
    "url": "dids/Resolvers.html",
    "revision": "3ad4bd4a4e0630e8517c44c7015f8434"
  },
  {
    "url": "dids/SecurityConsiderations.html",
    "revision": "800ff15581c087068dbd72c1d04117df"
  },
  {
    "url": "dids/Terminology.html",
    "revision": "237ea821643559fa13747c9e47a4acd2"
  },
  {
    "url": "hero.png",
    "revision": "27198affaf473339ac91173344fd0887"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d9faa0084cf241b9606cff5542ea35af"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "w3c/abnf.html",
    "revision": "a382e0bad4f38cecf0ec261939d25883"
  },
  {
    "url": "w3c/index.html",
    "revision": "6401b85394ef4c8f7407b94107c0a728"
  },
  {
    "url": "w3c/ld-cryptosuite-registry.html",
    "revision": "4cf6b94cd688746f46deb8d555e07844"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
