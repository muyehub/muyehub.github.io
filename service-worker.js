"use strict";var precacheConfig=[["/404.html","cd89b4b275d0300ba477feab16da09f9"],["/about/index.html","c3f763f546b89eb39b9793e2c9999b27"],["/apple-touch-icon.png","1bc28dbd2fad14ecb248eaccd223692c"],["/articles/2019/02/cgi,-fastcgi,-php-cgi,-php-fpm.html","88242e7bf885d40888409233586506ca"],["/articles/2019/02/mojave下使用pyenv安装python3出错的问题.html","ac72470525b680f2bbf13ea26dd5cbca"],["/articles/2019/02/rebase和merge的区别.html","499fab4c469fd32994acddd202a32eca"],["/articles/2019/02/redis中的sds数据结构.html","6ca219538c8067983a267ed0b62f435c"],["/articles/2019/02/推荐两个实用好玩的网站.html","a700caa1551904f4597d4c88ed0e2a7b"],["/articles/2020/01/compare-two-string-equal.html","990f4bc8c1cce8f3226c335fd1449cf4"],["/articles/2020/01/draw-someting-on-picture.html","05b3c118181b1945cdc66bcbb9b06e2a"],["/articles/2020/01/homestead-version-switch.html","0368b14482ef5bf5afc9f9538338eafa"],["/articles/2020/09/gerrit-desc.html","0d9e9444014938bbaec839f17543c717"],["/articles/2020/09/why-index-unuse.html","aa5e315176aa842afa67645635c0a8ad"],["/articles/2021/01/go-question.html","50e8564518f1a6046bfc4847e692d5ff"],["/articles/2021/01/iplusplus.html","64aa3267ed65d18b395e1676827d856c"],["/articles/2021/08/go-tips.html","4e04a3656972a9486c58a2eb9d0d5eb2"],["/articles/2021/08/php-tips.html","d05dfec09c585cd4284e43bdc1924528"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/themes/curtana/js/lightense.min.328ac817.js","328ac8176d02ecd57d914cca99b0c2dd"],["/favicon.png","120ebeb6f4b85b9aaa3de35425ebb32b"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/index.html","0e9cd627bdb517543d1eaedb12cd0244"],["/logo.png","7f5906a2457425a5e3455dda8a3e6fa8"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/news/index.html","8d877dbc87c89369f14407b6ccabfd18"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));