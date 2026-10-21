/* 舊網址的 Service Worker：App 已併入 /321planner/，這支只負責讓自己退役。
   不攔截任何請求、不動其他 App 的快取；轉址由 index.html 自己處理。 */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.registration.unregister()); });
