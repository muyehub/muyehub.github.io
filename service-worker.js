"use strict";var precacheConfig=[["/404.html","ea14ecd1267f1b082a7397d13beef858"],["/about/index.html","87ecdc5a2d0e413f5ad3080b3ad13223"],["/apple-touch-icon.png","1bc28dbd2fad14ecb248eaccd223692c"],["/articles/2019/02/cgi,-fastcgi,-php-cgi,-php-fpm.html","d1e52d6484cb5441e91af3bde613137a"],["/articles/2019/02/mojave下使用pyenv安装python3出错的问题.html","c2d0a1bc1bf87cfc1f7b58c9e2820c1b"],["/articles/2019/02/rebase和merge的区别.html","0ec49af880351b04253f5bebd45c9b70"],["/articles/2019/02/redis中的sds数据结构.html","855170c717c1dcb35c83d77a19f89e17"],["/articles/2019/02/推荐两个实用好玩的网站.html","3f5719b3e6f082d0d596568b831c72f5"],["/articles/2020/01/compare-two-string-equal.html","ca158476c00c11bb414a334cf2b2fe3e"],["/articles/2020/01/draw-someting-on-picture.html","3e966832fb80e7f8d199fb6b76b1b49a"],["/articles/2020/01/homestead-version-switch.html","7352c784ba52c70146ef523735bac7f8"],["/articles/2020/09/gerrit-desc.html","02ab98886d69dd70197eae234b6a342d"],["/articles/2020/09/why-index-unuse.html","011eac2786c52ec63c06e8a908aef549"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/themes/curtana/js/lightense.min.328ac817.js","328ac8176d02ecd57d914cca99b0c2dd"],["/favicon.png","120ebeb6f4b85b9aaa3de35425ebb32b"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/index.html","8b800a122e0320252b322b0d5b75afc4"],["/logo.png","7f5906a2457425a5e3455dda8a3e6fa8"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/news/index.html","2a9e74cbdf49abbd19a2adf8dab94f24"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,!1);return[n.toString(),r]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));