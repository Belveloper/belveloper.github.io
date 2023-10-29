'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "afd0f6e27f2a426d0d747cbdb6f7b0e2",
".git/config": "2f6fbb4a72ecc7d23598ce88bebd5260",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "35998c055909dd1081c1c7c0b5123d7c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78bb6588d0a4b38f142703907fe16b8b",
".git/logs/refs/heads/main": "78bb6588d0a4b38f142703907fe16b8b",
".git/logs/refs/remotes/origin/main": "f91b23593bd75f468bc34e92fbe8172e",
".git/objects/04/9a2020701b0d2c41bb1f1fccf73e756b94f85c": "4f71876353de107ea2615bc1a49ed742",
".git/objects/07/662223a737204a2c6fe0e90093a5d5def6c597": "8e62372594b1f5be3291a5edba9bb2c2",
".git/objects/0c/6c44ecda4b91981c0549ac13bee069c01a2e65": "999c67212bcfa590de09ae0a27c100d8",
".git/objects/10/ba97b48f0b5adafa3c028432bc920c2120cd8b": "66a9ee0b325d4cc69f46b6025037050f",
".git/objects/10/de8366ab384140b8c9cefb3563d124739c0760": "97c58cbce42db27281900e9cf34dd706",
".git/objects/1a/c0a339252a141614d9b92cf174db9c66899d48": "805b77e1ae1a5a8a458b4dbeab54f3fa",
".git/objects/1c/12aea443429b58fc1b83fc84ecaa62b81f1e4b": "10ed993fcc43963f7e3ed1bd0b0f59db",
".git/objects/29/c3f80e9a06ae3c334ff96bd8c664e1d19c1ba2": "807da961b7014d9aa8e5a4ac09d27158",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/9e8818b9386d7aa8111ac1fae082b8a14018d9": "3eb9967a37b499f9d706f7f554edc532",
".git/objects/45/1625e6abeba17dac61246fe98bbe01ae6268e7": "e993b403f634b60d9474addeb984eda8",
".git/objects/49/5eb510912710ff1e0886cff2960d44b9a567ae": "82218c9a13cf768424b4afa0ad1ca696",
".git/objects/51/17d583a67cf9a620272ee518239b9207e0352a": "107f46eb83c4c6d6ae1c1f4dec80ad3c",
".git/objects/58/82dec696a4a95af29a2ce845677ce9ca450192": "5794bb1efd95f259d7fdc8b6e0abd82a",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5e/3834c3376a2db6c660b656063ed150edd41fd8": "4a96b36e79e625bf49a49dbb2997e048",
".git/objects/5f/c56d4c521abc2951750886fc3e575d9d71b005": "3d1803d10bbf49907b628495ef4bd976",
".git/objects/6e/d3a116b5599efcd353f5abad23152f668ef053": "bef3dc80d6893679ecf67e236c54827e",
".git/objects/76/f76a94c6eb47ea4e487a54b8f6895c22e8af67": "d72bb0ff33650ae8491fd481bee24efa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/4d3191699af2753f78be1e59de1dbfe3f913f3": "a586b627769a5afc7fcc1d1de6d1df83",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4019c03bb47365648550d981b7e45c15aaf337": "bc87935a753a5ebe0603fbe69da0ee83",
".git/objects/8a/12f159bbd6d8a613254e6b926a08797f47b3e8": "a5c9b49340bac3f3ead56acbf260b33a",
".git/objects/8a/6c8c9cf6d3e131658a6654c5f03d26701063ac": "77f79e2d1eeecae838a671836778eca1",
".git/objects/8a/abb297bc0374628377266d1330f2a5980ef2c0": "fa363562bcd5845239b69f257ac7a588",
".git/objects/8b/4562fcb5475672de2b14f1d408a0df802006d4": "13b3d9bf29106e823bf93295a4c2699c",
".git/objects/8b/f4e8b1437964a4bd95f32dec74457057348d64": "ad0c76aafa97c20d44ce226b7d7e5f99",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/95/52bb995333f46f9ff148babf3ce31f051b6602": "9c112963171dea0676c8ece3ef924d44",
".git/objects/9c/045b45df22ac34917a14c4053729600406bdf3": "725afdff8b6ef31d63ae73e2644024b2",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/5888e410605e786441e6ae2560a10dfbcc0c7b": "ffd08e7e98cd8bf94d4ea4ed334470d2",
".git/objects/a7/0e232aee414d34c5b21e799975139f719489fe": "6c831274e55502454cf8d6559a42e7ef",
".git/objects/a8/6d7bb498e80ec0eee446c2afd011fa387b539e": "33dbb65c95131615ddd6c5e6d9d5e821",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/545665dad46608bc5972a7658f875d1e3aaa30": "78a9968485336bbdd2d6d948f4f50094",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7d29b3d1797c1bceaf5a8665dabaa3aa8bd161": "eb0e1a2dc36b7b1c237c04a55f6a69bc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/75453e6ce722796c8078b967e588b6eafb8ccb": "f0f28d3b677bd62974cfae7bb0bae7f6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/97d335f4f0165de9564c435783f2d0c6851842": "cb64713c52d663ed1bdeebb5b98462bf",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c2/88435eabd30a99f87eb93c05cfefbdc77bf17b": "970a537c1eab4c49e9a7adcd04282f51",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c5/e7c6b38af70374112029c9281bf3fc759cc14a": "29de977967cae04218840a4167c9f79d",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/47195c7600a96700df62b68a5009be200f234d": "fece793b795109889423a21d6c321ed0",
".git/objects/da/e2b91f31fa3e3390dd95dee00875e0b92c667e": "c2b0b17ad32d293c40a270314a089a11",
".git/objects/db/8718f3b6a009caef2564613d42b7e2b7e51fb8": "83638428debcf202c0ed193cc7212f8f",
".git/objects/de/2a8c675e64ebd6c17e62e6b8aa742f3fe2a558": "0890f17093a7f6afc656bf8fd45f41dc",
".git/objects/df/f292bcc1f0f63849a7597025a3e5c3e242a3c4": "678b907d9d95ca02af27b63134a48203",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/e6e16e831396859582b5778276714b886beed4": "c4aac14cf27a2f7e23611b566481c1c0",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/36c5818b2c1cfc6550daf124a70a0649de071b": "fc684c10a3ce99f295401ed2a1a1f6eb",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e8/f43296c698e762803f96da489cbda1994ccbb7": "96b68523daff0c3d7876962cde2db99e",
".git/objects/ea/739a1520a87f3af48aeff6b207bead3bbbde0c": "71e79ab80a406e28fcb6233cbf1c5ecd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/66a567ed757e1f70b3595af6a1d1bd26860e0b": "834582fbfa048974af9fefd7e70f6b9d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/ff/05b88f9ad875ba4c9f42708f18f6f840aa147a": "763548497744ec6577917306f57709db",
".git/objects/pack/pack-fc57bb0ec931e870c11487ab8b906847e81fc4ed.idx": "1c6bfbe782dd05fcabcc994aacc4cbcd",
".git/objects/pack/pack-fc57bb0ec931e870c11487ab8b906847e81fc4ed.pack": "2a853dbef8d2a663a925d5f70cfe9022",
".git/refs/heads/main": "43bda2d0c93e161704bee78eb0318ed8",
".git/refs/remotes/origin/main": "43bda2d0c93e161704bee78eb0318ed8",
"assets/AssetManifest.bin": "8c985dc92bd1e62b53efb07998c3816d",
"assets/AssetManifest.json": "985d029f250d7a26703be56f19a0dc39",
"assets/assets/anims/personal_portfolio.riv": "3f2aa19c7c298246926e8d5c12a3c87a",
"assets/assets/fonts/PersonalPortfolioIcons.ttf": "b1e1d73042a2c1d19500a681b62a77ac",
"assets/assets/fonts/Product%2520Sans%2520Bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/Product%2520Sans%2520Italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/icons/X.png": "806d9833e5a6a358ddf4f71d1aae8ba8",
"assets/assets/icons/X.svg": "69b7e34b5ea981ab6ad9f4b7100406a6",
"assets/FontManifest.json": "232f31adbbb9b1b319eedc48f0491702",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "638ae646a1ed0c6eb3089b45c5a9d342",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "61ccc0ecf45bb0f993ab180c8a0aa277",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c013c35b36294cf34f68421bc78195e3",
"/": "c013c35b36294cf34f68421bc78195e3",
"main.dart.js": "7d79e2d25387e561e8c6768c5052590e",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
