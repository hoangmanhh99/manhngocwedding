'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "de7755cfecfd8097503eac9dd68ed322",
"version.json": "3d0a8b3e454aa8006e8b32fefcd8e5e3",
"favicon.ico": "f3c5ed45bbbe52b43208efb4cd93d24c",
"index.html": "a97784fe7f8e36f5a9e11326588c9149",
"/": "a97784fe7f8e36f5a9e11326588c9149",
"main.dart.js": "b9df6a676f9f982fd75b356c9b9f89b5",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"README.md": "66cdd63695ab671d521abb3115c90fde",
"favicon.png": "9f66eda40bba90b9f6bf7b5982cdbf5a",
"main.dart.mjs": "b1aee1cfb8773b175f00a78db209ad47",
"icons/Icon-192.png": "51d4d7f7717f846bc2b1568e0db100fc",
"icons/Icon-maskable-192.png": "574d64857c7266505cdffc7a5794499d",
"icons/Icon-maskable-512.png": "dd38a76ddfe211a26bf14b80ff73387e",
"icons/Icon-512.png": "61450eb3148ebca3184f5fbbb9ebe6bb",
"manifest.json": "c771c9d3f55e6cc01b7fc50d806269d2",
"main.dart.wasm": "83fa909686a85479b8cacc05825ee902",
"assets/AssetManifest.json": "ad1afa64b1120c21eac0a23cd524873f",
"assets/NOTICES": "ec0b3e63398898fc695b37fcc9cf0bd8",
"assets/FontManifest.json": "81fa78cad2f44d7edd49913a7ae4b17e",
"assets/AssetManifest.bin.json": "1bfadb6c3f2a407b0af9f45d30ed3d75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a4f26164173ec81c9d23426b233c5584",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/album_13.jpg": "671ddcbd6414b79018f4013297355856",
"assets/assets/images/album_12.jpg": "4f3b83e51f118c0c38ed811556a2ce28",
"assets/assets/images/ngoc.jpg": "521ac166701ed008f37e3ce0a2b43e98",
"assets/assets/images/album_10.jpg": "2e52d1c4416ec5bfd8423de7a137c19f",
"assets/assets/images/album_11.jpg": "f1f273bcc8c1dff0eea5925c34e23a61",
"assets/assets/images/album_8.jpg": "136a127d1367003b611502996c751b0b",
"assets/assets/images/album_9.jpg": "1e71c05fa8c69f0dffb11b13d399a0ce",
"assets/assets/images/manh.jpg": "f0e8aec863dfbc9f2535cb3541013501",
"assets/assets/images/album_7.jpg": "ed2a14c97422207341367dd7c53ab372",
"assets/assets/images/img_calendar.jpg": "f53b21f495f7e694f7c2f85e06fa6389",
"assets/assets/images/album_6.jpg": "359df9f7aefb174f60ab87668dc27cc1",
"assets/assets/images/album_4.jpg": "64203e959f9703dc07bc627ca54975b4",
"assets/assets/images/album_5.jpg": "d436efcd1af149723827ef3c53cfee9c",
"assets/assets/images/album_1.jpg": "f2c0cfb2da8776245b18bd3919eec000",
"assets/assets/images/album_2.jpg": "b2ce26f46f0f0196f1619bf9466c8587",
"assets/assets/images/album_3.jpg": "fd1059760d75e1c8e4e06ffb2731ba5f",
"assets/assets/images/couple.jpg": "722527eba38ef56122700e43c7b78551",
"assets/assets/images/bg.jpg": "22cc9d367bafedaeb9e7db0f0584de0f",
"assets/assets/icons/Asset%25204.svg": "4cf1367c6bec5bada00dca548e32db69",
"assets/assets/icons/Asset%25201.svg": "f0d29134b4da4eefe2081e08914f972a",
"assets/assets/icons/ic_heart.svg": "62e3894eb28c6f2414be01908c48c395",
"assets/assets/icons/van_manh.svg": "1c002907786551daa9fc09d744400dff",
"assets/assets/icons/ic_not_happy.svg": "893d5452c5f768c3f67d6391aeb42f00",
"assets/assets/icons/ic_calendar.svg": "109adda28f2f70d07b3bd99ead47b71d",
"assets/assets/icons/minh_ngoc.svg": "a4ba9f40178cef9cdc8c40725866385b",
"assets/assets/icons/ic_map_pin.svg": "162450052680b16e193b1165cbb8ab59",
"assets/assets/icons/ic_happy.svg": "06bed1125174726f68c6fe0488a36925",
"assets/assets/icons/ic_tab_4.svg": "36b32b1dfba40f00044b8da41a33296d",
"assets/assets/icons/ic_timeline_4.svg": "8069f9376ec51a346fc95af800e5a2e2",
"assets/assets/icons/ic_tab_2.svg": "1535adb5ad4ff5905943d3585ea26484",
"assets/assets/icons/ic_arrow_up.svg": "171473035df9b8cb59e1ad7574198b99",
"assets/assets/icons/ic_timeline_1.svg": "ec8595e88945f2ba8f3455de94cc454f",
"assets/assets/icons/ic_tab_3.svg": "43ccd62c1fa80ad83e46e4f94a8a1c71",
"assets/assets/icons/ic_tab_1.svg": "c99f7d5b03a872563ac37e2218f0e95e",
"assets/assets/icons/ic_timeline_3.svg": "ea679d880e84cbe84c0e076e3e7f6862",
"assets/assets/icons/ic_timeline_2.svg": "3aa6a8f03f025c084635020713ec8e3d",
"assets/assets/fonts/Parastoo-SemiBold.ttf": "3bd711c90037a7f76381697359217ffc",
"assets/assets/fonts/UVN-Mua-Thu.ttf": "5f13640e7be35826bfc1035bafe966a3",
"assets/assets/fonts/Parastoo-VariableFont_wght.ttf": "cda6441944f9143557d9b5b2739b449b",
"assets/assets/fonts/MTD%2520Hello%2520Paris%2520Serif.otf": "a0db38973a4c70ca8125fa601fa0f64c",
"assets/assets/fonts/Parastoo-Regular.ttf": "3bebec91e5b27883699fd692922980c7",
"assets/assets/fonts/Parastoo-Bold.ttf": "1420408854431ab9ca40a530337ff7f4",
"assets/assets/fonts/Parastoo-Medium.ttf": "9224d2df99165352a8c4dccc135f563d",
"assets/assets/fonts/DFVN%2520Boheme%2520Floral.otf": "ba5aecbb0d23db51e76c992849cb8ed2",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
