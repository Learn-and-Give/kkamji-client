if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5081dea0"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/V2jz-lZgDefzOAEfMnVqb/_buildManifest.js",revision:"4ba313643f42d1dfc6eed643ba2383a3"},{url:"/_next/static/V2jz-lZgDefzOAEfMnVqb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13-b2f924ef82fb7966.js",revision:"b2f924ef82fb7966"},{url:"/_next/static/chunks/265-d4dc07fc55ec25f7.js",revision:"d4dc07fc55ec25f7"},{url:"/_next/static/chunks/297-fc5c001fb6fa7111.js",revision:"fc5c001fb6fa7111"},{url:"/_next/static/chunks/390-382b402443cf2426.js",revision:"382b402443cf2426"},{url:"/_next/static/chunks/395.111aab28ca78d043.js",revision:"111aab28ca78d043"},{url:"/_next/static/chunks/421-67de995b8b9bdcb4.js",revision:"67de995b8b9bdcb4"},{url:"/_next/static/chunks/45aa72ff-409ea7f2e1596085.js",revision:"409ea7f2e1596085"},{url:"/_next/static/chunks/51-6ec3ad87dd81cc65.js",revision:"6ec3ad87dd81cc65"},{url:"/_next/static/chunks/784-586c519f43795346.js",revision:"586c519f43795346"},{url:"/_next/static/chunks/790-37e17a85f90531ce.js",revision:"37e17a85f90531ce"},{url:"/_next/static/chunks/879-3eb581357b4282fb.js",revision:"3eb581357b4282fb"},{url:"/_next/static/chunks/892-1c31aec91a19b802.js",revision:"1c31aec91a19b802"},{url:"/_next/static/chunks/941.8901eb1887997125.js",revision:"8901eb1887997125"},{url:"/_next/static/chunks/framework-c54b3683db266e7c.js",revision:"c54b3683db266e7c"},{url:"/_next/static/chunks/main-bf476e8e50b3b6bf.js",revision:"bf476e8e50b3b6bf"},{url:"/_next/static/chunks/pages/_app-3c10336bf1803403.js",revision:"3c10336bf1803403"},{url:"/_next/static/chunks/pages/_error-a1030de562f5ef18.js",revision:"a1030de562f5ef18"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D-097d75136f1079ea.js",revision:"097d75136f1079ea"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D/quizzes-9f3423a9879b6ec4.js",revision:"9f3423a9879b6ec4"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D/quizzes/%5Bqid%5D-3fed5a412902fb55.js",revision:"3fed5a412902fb55"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D/quizzes/%5Bqid%5D/like-f3dfc1c87a4cd538.js",revision:"f3dfc1c87a4cd538"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D/quizzes/%5Bqid%5D/my-256532f95c967a33.js",revision:"256532f95c967a33"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D/quizzes/like-c595ab3f3d7a88ee.js",revision:"c595ab3f3d7a88ee"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D/quizzes/my-6aac02c6faa0b247.js",revision:"6aac02c6faa0b247"},{url:"/_next/static/chunks/pages/challenges/%5Bcid%5D/write-b79e48507a741da6.js",revision:"b79e48507a741da6"},{url:"/_next/static/chunks/pages/dashboard-1009bb3e4a481e79.js",revision:"1009bb3e4a481e79"},{url:"/_next/static/chunks/pages/index-4dedb132534d826b.js",revision:"4dedb132534d826b"},{url:"/_next/static/chunks/pages/introduce-3151ab80923af278.js",revision:"3151ab80923af278"},{url:"/_next/static/chunks/pages/login-e1907edffb2516dd.js",revision:"e1907edffb2516dd"},{url:"/_next/static/chunks/pages/manual-84ab322205872067.js",revision:"84ab322205872067"},{url:"/_next/static/chunks/pages/password-notice-29b4b620fc624d29.js",revision:"29b4b620fc624d29"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d6e5b9de12ff2fbb.js",revision:"d6e5b9de12ff2fbb"},{url:"/_next/static/css/1b1cf59279a9b628.css",revision:"1b1cf59279a9b628"},{url:"/_next/static/css/a8873e438006bdce.css",revision:"a8873e438006bdce"},{url:"/_next/static/css/cc4b0ceb626a31fb.css",revision:"cc4b0ceb626a31fb"},{url:"/_next/static/css/e4491b2854cb6d01.css",revision:"e4491b2854cb6d01"},{url:"/favicon.ico",revision:"f3419febb3c559450087c6f353d424b0"},{url:"/firebase-messaging-sw.js",revision:"37b17dfa263aa533fe4b64db12f39429"},{url:"/image/kkamji-banner-1.png",revision:"95144d50b1c60af02375e9ed3582824b"},{url:"/image/kkamji-banner-2.png",revision:"b6cfe47913453c7c0c0fcf252bb5aec1"},{url:"/image/kkamji-banner-3.png",revision:"bbcb81cc1bc9252a1f6f1e88b3d9d6e3"},{url:"/image/kkamji-home.gif",revision:"7fc0d8174c4a628940411521f02f50ff"},{url:"/image/kkamji-home.png",revision:"e5776dabf35fbb9d91990162e8bd69e8"},{url:"/image/kkamji-login.png",revision:"7afd0a075455c9b7c05767322eeae2ce"},{url:"/image/kkamji-mobile-banner-1.png",revision:"90fac06a49c7d27097a37b406784bd01"},{url:"/image/kkamji-mobile-banner-2.png",revision:"85029e0b76975b5aa3cf48f8f0d1455b"},{url:"/image/kkamji-mobile-banner-3.png",revision:"3128c38a02a9cd1432a282736cec7db1"},{url:"/image/kkamji-mobile-review.png",revision:"a05520c3ee16e99e6706c24134bdacf0"},{url:"/image/kkamji-review.png",revision:"cd9bb88a86dd7e02d27d24a8c9985421"},{url:"/image/kkamji192.png",revision:"c41c3ba281c5994dd3c7c13703732f75"},{url:"/image/kkamji512.png",revision:"c694619c923d1a9c065251b06f97c163"},{url:"/image/splashscreens/ipad_splash.png",revision:"5e59576009b234b891c69fd0cf3e6007"},{url:"/image/splashscreens/ipadpro1_splash.png",revision:"da9f7a6181dc9979384a0d29aebe470c"},{url:"/image/splashscreens/ipadpro2_splash.png",revision:"059dcff1c73848525b99c6aee0d920cd"},{url:"/image/splashscreens/ipadpro3_splash.png",revision:"c89288140038b1fdf450021fd86eefd8"},{url:"/image/splashscreens/iphone5_splash.png",revision:"9dd93dcbefdd6880092144b5557b8671"},{url:"/image/splashscreens/iphone6_splash.png",revision:"12ba179df97c306deab27491772612b5"},{url:"/image/splashscreens/iphoneplus_splash.png",revision:"422fe9f46a1b0546b40a1a0ff5dc363e"},{url:"/image/splashscreens/iphonex_splash.png",revision:"2cc1f8b4c6a85f144c25119bf1dfe2f7"},{url:"/image/splashscreens/iphonexr_splash.png",revision:"e5c0de4797595f56db1b8c0cea5ea6d6"},{url:"/image/splashscreens/iphonexsmax_splash.png",revision:"6bee8b5d1a988d931589ad1911fe5d74"},{url:"/manifest.json",revision:"baaafdf251972cb8b0ab612b71e41646"},{url:"/mockServiceWorker.js",revision:"6bb3470c42866c530bfa18dad67a7f76"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
