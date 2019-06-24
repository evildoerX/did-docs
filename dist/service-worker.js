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
    "revision": "9732a087b62d0b302b0b4ac4cd3efef7"
  },
  {
    "url": "assets/css/0.styles.4429ee62.css",
    "revision": "f3accc7baa712421fe62a80f37240754"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.225b287a.js",
    "revision": "59b95ce46c8dc141d5ee2ba0a15f999d"
  },
  {
    "url": "assets/js/11.fe12ced9.js",
    "revision": "950be8a34398d88a58d9d622221320e7"
  },
  {
    "url": "assets/js/12.9c0cbf3d.js",
    "revision": "d9714324009749e22809e6c53743a0b5"
  },
  {
    "url": "assets/js/13.664a0aa6.js",
    "revision": "3ecc13c094b451bb53bbd97f673e7553"
  },
  {
    "url": "assets/js/14.ce7b8cf3.js",
    "revision": "977ff0eb0eca769990d95f30f26f27e2"
  },
  {
    "url": "assets/js/15.1eb8a80f.js",
    "revision": "ce996ed22412f95acd7beaed745319f6"
  },
  {
    "url": "assets/js/16.f7cbc5b8.js",
    "revision": "663aab4f3d4feafd948bb7ea4fff80d7"
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
    "url": "assets/js/19.7096b68b.js",
    "revision": "64d290b0f3b275aa9c4b2af02f50dea2"
  },
  {
    "url": "assets/js/20.26f708a7.js",
    "revision": "1995cb2d668da16b5392b0cec8c754de"
  },
  {
    "url": "assets/js/21.5c43fa51.js",
    "revision": "d6132e26ecfcb74819ebf591c0534c35"
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
    "url": "assets/js/25.cd0d64b5.js",
    "revision": "c717902699c8f38c9c6e4a970109017a"
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
    "url": "assets/js/app.755f13ee.js",
    "revision": "31f21354121cc68dd611d956a99b016a"
  },
  {
    "url": "assets/js/vendors~notification.3948145b.js",
    "revision": "6aaee707bad6eeb11277520a8387a984"
  },
  {
    "url": "dids/DataModel.html",
    "revision": "30b6570d2c40edfc0598dfceb782c7df"
  },
  {
    "url": "dids/DecentralizedIdentifiers.html",
    "revision": "188a1578bc0bddc8dc2a1be8d61e6a9a"
  },
  {
    "url": "dids/DIDDocuments.html",
    "revision": "564bdc8ce6e290f355879c554513f6e9"
  },
  {
    "url": "dids/DIDDocumentSyntax.html",
    "revision": "9255a7c5256393872852f1d5a34dbdf3"
  },
  {
    "url": "dids/DIDMethods.html",
    "revision": "6b9af0d492b7e84709d284b0ae7560a7"
  },
  {
    "url": "dids/FutureWork.html",
    "revision": "c8c57a05d607d88ca7b33ef636b812bd"
  },
  {
    "url": "dids/Guide.html",
    "revision": "b59cbea25afe34ddaa12b56c645891b8"
  },
  {
    "url": "dids/index.html",
    "revision": "d584e0e66c83394ecab8b2b52e5b360a"
  },
  {
    "url": "dids/PrivacyConsiderations.html",
    "revision": "f7018170b32f10d6afd50f232f821ed4"
  },
  {
    "url": "dids/RealWorldExample.html",
    "revision": "381d77d438c41aaffd9a2acb0c6501f1"
  },
  {
    "url": "dids/References.html",
    "revision": "53276571e2db8b911987ed58fe6d2615"
  },
  {
    "url": "dids/Registries.html",
    "revision": "8aa17cecf1281ddb48954a2194fb4b08"
  },
  {
    "url": "dids/Resolvers.html",
    "revision": "d28331c6af857efdbb4aac9ab8e9621a"
  },
  {
    "url": "dids/SecurityConsiderations.html",
    "revision": "6427698bcf7e7f16805deb29821d0c65"
  },
  {
    "url": "dids/Terminology.html",
    "revision": "5dc89897098f7f402bbdf96a39fb890d"
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
    "revision": "e32591cfc48de3c1629b1bbf48daa120"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "w3c/abnf.html",
    "revision": "7799cd2c5a708ceb9090dc98b2c40f7e"
  },
  {
    "url": "w3c/index.html",
    "revision": "d2a943dfbd722a641c2640da3dfdfd64"
  },
  {
    "url": "w3c/ld-cryptosuite-registry.html",
    "revision": "6a206b6a7734b081c723139587fa5bd0"
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