if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5081dea0"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5idBRKWswOEl6V0-6_EER/_buildManifest.js",revision:"38a8cf0bbf0038f930e16fac48c5a64a"},{url:"/_next/static/5idBRKWswOEl6V0-6_EER/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/265-ff3e471d2370c356.js",revision:"ff3e471d2370c356"},{url:"/_next/static/chunks/framework-9487e7fbb25a4ac0.js",revision:"9487e7fbb25a4ac0"},{url:"/_next/static/chunks/main-92940593f2f6efd9.js",revision:"92940593f2f6efd9"},{url:"/_next/static/chunks/pages/_app-3f9535d105e9dae8.js",revision:"3f9535d105e9dae8"},{url:"/_next/static/chunks/pages/_error-dfedf15fd24ae291.js",revision:"dfedf15fd24ae291"},{url:"/_next/static/chunks/pages/chapters/%5Bcid%5D-abfdbf60d653bf3b.js",revision:"abfdbf60d653bf3b"},{url:"/_next/static/chunks/pages/chapters/%5Bcid%5D/quizbooks/%5Bqbid%5D-88153338262b0600.js",revision:"88153338262b0600"},{url:"/_next/static/chunks/pages/chapters/%5Bcid%5D/quizbooks/%5Bqbid%5D/%5Bqid%5D-39187484179b3b38.js",revision:"39187484179b3b38"},{url:"/_next/static/chunks/pages/chapters/%5Bcid%5D/quizbooks/%5Bqbid%5D/%5Bqid%5D/edit-3c626b6ebab0fccd.js",revision:"3c626b6ebab0fccd"},{url:"/_next/static/chunks/pages/chapters/%5Bcid%5D/write-f702ddf5525bda7e.js",revision:"f702ddf5525bda7e"},{url:"/_next/static/chunks/pages/login-ff3bc6e9132c672c.js",revision:"ff3bc6e9132c672c"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-c05cae0106bff599.js",revision:"c05cae0106bff599"},{url:"/_next/static/css/21e699a3202d4351.css",revision:"21e699a3202d4351"},{url:"/favicon.ico",revision:"f3419febb3c559450087c6f353d424b0"},{url:"/image/kkamji192.png",revision:"c41c3ba281c5994dd3c7c13703732f75"},{url:"/image/kkamji512.png",revision:"c694619c923d1a9c065251b06f97c163"},{url:"/image/splashscreens/ipad_splash.png",revision:"5e59576009b234b891c69fd0cf3e6007"},{url:"/image/splashscreens/ipadpro1_splash.png",revision:"da9f7a6181dc9979384a0d29aebe470c"},{url:"/image/splashscreens/ipadpro2_splash.png",revision:"059dcff1c73848525b99c6aee0d920cd"},{url:"/image/splashscreens/ipadpro3_splash.png",revision:"c89288140038b1fdf450021fd86eefd8"},{url:"/image/splashscreens/iphone5_splash.png",revision:"9dd93dcbefdd6880092144b5557b8671"},{url:"/image/splashscreens/iphone6_splash.png",revision:"12ba179df97c306deab27491772612b5"},{url:"/image/splashscreens/iphoneplus_splash.png",revision:"422fe9f46a1b0546b40a1a0ff5dc363e"},{url:"/image/splashscreens/iphonex_splash.png",revision:"2cc1f8b4c6a85f144c25119bf1dfe2f7"},{url:"/image/splashscreens/iphonexr_splash.png",revision:"e5c0de4797595f56db1b8c0cea5ea6d6"},{url:"/image/splashscreens/iphonexsmax_splash.png",revision:"6bee8b5d1a988d931589ad1911fe5d74"},{url:"/manifest.json",revision:"1e73d1c3531e36173aa75079292a26e5"},{url:"/mockServiceWorker.js",revision:"6bb3470c42866c530bfa18dad67a7f76"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
