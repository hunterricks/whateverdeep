(()=>{var e={};e.id=2335,e.ids=[2335],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},54410:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.Z,__next_app__:()=>d,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>l}),r(24829),r(11506),r(26083),r(19644),r(96560);var s=r(23191),a=r(88716),n=r(48001),o=r(95231),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let l=["",{children:["dashboard",{children:["client",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,24829)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/dashboard/client/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/layout.tsx"],template:[()=>Promise.resolve().then(r.bind(r,15778)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/template.tsx"],error:[()=>Promise.resolve().then(r.bind(r,26083)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,19644)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,96560)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/not-found.tsx"]}],u=["/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/dashboard/client/page.tsx"],c="/dashboard/client/page",d={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/client/page",pathname:"/dashboard/client",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},35166:(e,t,r)=>{Promise.resolve().then(r.bind(r,82121))},82121:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(10326);r(17577);var a=r(35047),n=r(2991);function o(){(0,a.useRouter)();let{user:e,checkAuth:t}=(0,n.a)();return e&&"homeowner"===e.activeRole?s.jsx("div",{className:"container mx-auto px-4 py-8",children:s.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Homeowner Dashboard"})}):null}},2991:(e,t,r)=>{"use strict";r.d(t,{a:()=>u});var s=r(60114),a=r(85251),n=r(18206),o=r(66562);let i=()=>!1,l=(0,s.Ue)()((0,a.tJ)(e=>({user:null,isAuthenticated:!1,login:t=>{let r=i()?["homeowner","contractor"]:t.roles,s=t.activeRole||r[0];t.token&&o.Z.set("auth-token",t.token,{expires:7,sameSite:"strict",secure:!0,path:"/"}),e({user:{...t,roles:r,activeRole:s},isAuthenticated:!0})},logout:()=>{o.Z.remove("auth-token",{path:"/"}),localStorage.removeItem("auth-storage"),sessionStorage.clear(),e({user:null,isAuthenticated:!1})},switchRole:t=>{e(e=>e.user&&e.user.roles.includes(t)?{...e,user:{...e.user,activeRole:t}}:e)},clearState:()=>{e({user:null,isAuthenticated:!1})}}),{name:"auth-storage",partialize:e=>({user:e.user,isAuthenticated:e.isAuthenticated})})),u=()=>{let{user:e,error:t,isLoading:r}=(0,n.aF)(),{user:s,isAuthenticated:a,login:u,logout:c,switchRole:d}=l();return{user:i()?s:e?{id:e.sub,name:e.name,email:e.email,roles:e["https://myapp.org/roles"]||["homeowner"],activeRole:e["https://myapp.org/activeRole"]||"homeowner"}:null,isAuthenticated:i()?a:!!e,isLoading:!i()&&r,error:i()?null:t,login:u,logout:c,switchRole:d,checkAuth:()=>{if(i()){let e=o.Z.get("auth-token"),t=a&&null!==s&&null!==e;return t||l.getState().clearState(),t}return t?(console.error("Auth0 error:",t),!1):!r&&null!==e}}}},24829:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(68570).createProxy)(String.raw`/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/dashboard/client/page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[9276,8775,1438,2574],()=>r(54410));module.exports=s})();