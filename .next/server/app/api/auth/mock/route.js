"use strict";(()=>{var e={};e.id=3840,e.ids=[3840],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},77419:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>p,patchFetch:()=>y,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>f,staticGenerationAsyncStorage:()=>u});var o={};r.r(o),r.d(o,{POST:()=>l});var s=r(49303),a=r(88716),n=r(60670),i=r(87070);async function l(e){return i.NextResponse.json({error:"Mock auth only available in web container"},{status:403})}r(71615);let c=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/auth/mock/route",pathname:"/api/auth/mock",filename:"route",bundlePath:"app/api/auth/mock/route"},resolvedPagePath:"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/api/auth/mock/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:d,staticGenerationAsyncStorage:u,serverHooks:f}=c,p="/api/auth/mock/route";function y(){return(0,n.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:u})}},71615:(e,t,r)=>{r.r(t);var o=r(88757),s={};for(let e in o)"default"!==e&&(s[e]=()=>o[e]);r.d(t,s)},33085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraftMode",{enumerable:!0,get:function(){return a}});let o=r(45869),s=r(6278);class a{get isEnabled(){return this._provider.isEnabled}enable(){let e=o.staticGenerationAsyncStorage.getStore();return e&&(0,s.trackDynamicDataAccessed)(e,"draftMode().enable()"),this._provider.enable()}disable(){let e=o.staticGenerationAsyncStorage.getStore();return e&&(0,s.trackDynamicDataAccessed)(e,"draftMode().disable()"),this._provider.disable()}constructor(e){this._provider=e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cookies:function(){return f},draftMode:function(){return p},headers:function(){return u}});let o=r(68996),s=r(53047),a=r(92044),n=r(72934),i=r(33085),l=r(6278),c=r(45869),d=r(54580);function u(){let e="headers",t=c.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return s.HeadersAdapter.seal(new Headers({}));(0,l.trackDynamicDataAccessed)(t,e)}return(0,d.getExpectedRequestStore)(e).headers}function f(){let e="cookies",t=c.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return o.RequestCookiesAdapter.seal(new a.RequestCookies(new Headers({})));(0,l.trackDynamicDataAccessed)(t,e)}let r=(0,d.getExpectedRequestStore)(e),s=n.actionAsyncStorage.getStore();return(null==s?void 0:s.isAction)||(null==s?void 0:s.isAppRoute)?r.mutableCookies:r.cookies}function p(){let e=(0,d.getExpectedRequestStore)("draftMode");return new i.DraftMode(e.draftMode)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53047:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{HeadersAdapter:function(){return a},ReadonlyHeadersError:function(){return s}});let o=r(38238);class s extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new s}}class a extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,s){if("symbol"==typeof r)return o.ReflectAdapter.get(t,r,s);let a=r.toLowerCase(),n=Object.keys(e).find(e=>e.toLowerCase()===a);if(void 0!==n)return o.ReflectAdapter.get(t,n,s)},set(t,r,s,a){if("symbol"==typeof r)return o.ReflectAdapter.set(t,r,s,a);let n=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===n);return o.ReflectAdapter.set(t,i??r,s,a)},has(t,r){if("symbol"==typeof r)return o.ReflectAdapter.has(t,r);let s=r.toLowerCase(),a=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0!==a&&o.ReflectAdapter.has(t,a)},deleteProperty(t,r){if("symbol"==typeof r)return o.ReflectAdapter.deleteProperty(t,r);let s=r.toLowerCase(),a=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0===a||o.ReflectAdapter.deleteProperty(t,a)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return s.callable;default:return o.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new a(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,o]of this.entries())e.call(t,o,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},68996:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{MutableRequestCookiesAdapter:function(){return u},ReadonlyRequestCookiesError:function(){return n},RequestCookiesAdapter:function(){return i},appendMutableCookies:function(){return d},getModifiedCookieValues:function(){return c}});let o=r(92044),s=r(38238),a=r(45869);class n extends Error{constructor(){super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")}static callable(){throw new n}}class i{static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"clear":case"delete":case"set":return n.callable;default:return s.ReflectAdapter.get(e,t,r)}}})}}let l=Symbol.for("next.mutated.cookies");function c(e){let t=e[l];return t&&Array.isArray(t)&&0!==t.length?t:[]}function d(e,t){let r=c(t);if(0===r.length)return!1;let s=new o.ResponseCookies(e),a=s.getAll();for(let e of r)s.set(e);for(let e of a)s.set(e);return!0}class u{static wrap(e,t){let r=new o.ResponseCookies(new Headers);for(let t of e.getAll())r.set(t);let n=[],i=new Set,c=()=>{let e=a.staticGenerationAsyncStorage.getStore();if(e&&(e.pathWasRevalidated=!0),n=r.getAll().filter(e=>i.has(e.name)),t){let e=[];for(let t of n){let r=new o.ResponseCookies(new Headers);r.set(t),e.push(r.toString())}t(e)}};return new Proxy(r,{get(e,t,r){switch(t){case l:return n;case"delete":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{e.delete(...t)}finally{c()}};case"set":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{return e.set(...t)}finally{c()}};default:return s.ReflectAdapter.get(e,t,r)}}})}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[9276,5972],()=>r(77419));module.exports=o})();