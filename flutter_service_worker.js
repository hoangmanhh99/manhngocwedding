'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2cddbc9e13ce083bb8598829384efe6c",
"version.json": "3d0a8b3e454aa8006e8b32fefcd8e5e3",
"favicon.ico": "f3c5ed45bbbe52b43208efb4cd93d24c",
"index.html": "3eb352d9a410a12a7bb71846b5194d54",
"/": "3eb352d9a410a12a7bb71846b5194d54",
"main.dart.js": "62edaa883991f72593e7cdb3e6ad584c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"README.md": "66cdd63695ab671d521abb3115c90fde",
"favicon.png": "9f66eda40bba90b9f6bf7b5982cdbf5a",
"main.dart.mjs": "5838cdf0727ded028f8a0884c94225d1",
"icons/Icon-192.png": "51d4d7f7717f846bc2b1568e0db100fc",
"icons/Icon-maskable-192.png": "574d64857c7266505cdffc7a5794499d",
"icons/Icon-maskable-512.png": "dd38a76ddfe211a26bf14b80ff73387e",
"icons/Icon-512.png": "61450eb3148ebca3184f5fbbb9ebe6bb",
"manifest.json": "f31b55af491fc79cf253f63e3a15a860",
"main.dart.wasm": "8c15614a81f0f1ed4a9ef3ff42df81d4",
"assets/AssetManifest.json": "cc0f20231f62253b1b5a6a0397e62e63",
"assets/NOTICES": "694759e7539bd13f70128b432711ba9e",
"assets/FontManifest.json": "4784448340d448ef1f575ebdf6e8b110",
"assets/AssetManifest.bin.json": "1c724a78c5fe94dd9819cb62d80067bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb6a45e28f331e0979fb7272e3f88a9c",
"assets/fonts/MaterialIcons-Regular.otf": "217f2810d6e8e75d3ee79fe28fdbd492",
"assets/assets/audios/I_do.m4a": "1dc7d6400556273e28ce7849de1ebe43",
"assets/assets/audios/A_thousand_years.m4a": "b43ac7f14ca0d65fe71c517d09aa5382",
"assets/assets/audios/I_get_to_love_you.m4a": "8a8b5597dd81aeb862a4809dff57d0e5",
"assets/assets/images/ngoc.png": "4dc3fb5111a7cc579147c6abaa41c404",
"assets/assets/images/thumb_14.jpeg": "9c6e6326884d13013a1a68a7739ba1e6",
"assets/assets/images/thumb_18.jpeg": "a93136affb600dda407b411f38460975",
"assets/assets/images/thumb_19.jpeg": "315058e21c4197aa92f91e25a3bda0a8",
"assets/assets/images/thumb_8.png": "e6e7c7a898315da2da8abdf1fc27db9d",
"assets/assets/images/thumb_9.png": "2b3abd9d9f2508702d76f66263c23e56",
"assets/assets/images/thumb_15.jpeg": "2edf050ba1bc9a7cba72c8c10645f9e0",
"assets/assets/images/manh.png": "b86c2b7adb814eab6deb5aa0ec857942",
"assets/assets/images/thumb_16.jpeg": "6bf1c3fa8cba4ed33fcdde5824212e28",
"assets/assets/images/thumb_12.png": "07ede19efd33d1a7adb7b852d020f918",
"assets/assets/images/thumb_7.png": "22bed2296ec9cc105bcd5cb9a9b4aa3b",
"assets/assets/images/img_calendar.jpg": "f53b21f495f7e694f7c2f85e06fa6389",
"assets/assets/images/thumb_6.png": "cfbcfd967297c5c6a04e1b15543909a2",
"assets/assets/images/thumb_13.png": "e4ad9e8287f86684d4d93bc47014bfac",
"assets/assets/images/thumb_11.png": "23dc2449046c7c4e9bb3c7b559335fef",
"assets/assets/images/thumb_4.png": "f32ee10513bd367a4a2dcd07024fd2fe",
"assets/assets/images/thumb_5.png": "2f3445630390f9158f52f8034afad144",
"assets/assets/images/thumb_10.png": "406606ddf38472e85f265224640e4157",
"assets/assets/images/thumb_1.png": "903eeb9a75dd5d06aad080775a91f758",
"assets/assets/images/thumb_2.png": "3a3813fdb83815c9bffb987b39fe3904",
"assets/assets/images/thumb_3.png": "494d2f36c93c9f257f8b3a2b5bea4648",
"assets/assets/images/thumb_17.jpeg": "7c19e6642ce7d70adeb1842b2de30a14",
"assets/assets/images/couple.png": "92abba7fa8bd59325788e10663cf785f",
"assets/assets/images/couple.jpg": "7830d0f4bf0b70fa276e6b07d52d5b08",
"assets/assets/images/bg.jpg": "22cc9d367bafedaeb9e7db0f0584de0f",
"assets/assets/lotties/loading.json": "41c3e550d54560b6db973a392d3b7fc1",
"assets/assets/lotties/done.json": "0d79d984b3a7f5951beaf9e5c9019b0e",
"assets/assets/lotties/loading.webm": "280a544b2079b65ad63d716b434c8e19",
"assets/assets/lotties/music_player.json": "0fe3cf8bd6e37aa3dca2999a1f5b4028",
"assets/assets/icons/ic_heart.svg": "62e3894eb28c6f2414be01908c48c395",
"assets/assets/icons/van_manh.svg": "1c002907786551daa9fc09d744400dff",
"assets/assets/icons/ic_heart_day.svg": "4cd8a3d577c8808258c1953562324344",
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
