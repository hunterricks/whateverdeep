(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7702],{4295:function(e,t,r){Promise.resolve().then(r.bind(r,6947))},6947:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}}),r(7437);var n=r(2265),a=r(6463),o=r(5216);function l(){let e=(0,a.useRouter)(),{user:t,checkAuth:r}=(0,o.a)();return(0,n.useEffect)(()=>{if(!r()){e.push("/login");return}(null==t?void 0:t.activeRole)==="homeowner"?e.push("/dashboard/homeowner"):(null==t?void 0:t.activeRole)==="contractor"&&e.push("/dashboard/contractor")},[null==t?void 0:t.activeRole,e,r]),null}r(6013),r(495),r(7138),r(3852),r(5912),(0,r(8030).Z)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),r(7412)},7412:function(e,t,r){"use strict";r.d(t,{X:function(){return s},bZ:function(){return i}});var n=r(7437),a=r(2265),o=r(2218),l=r(7440);let u=(0,o.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",warning:"border-yellow-500/50 bg-yellow-500/10 text-yellow-500 [&>svg]:text-yellow-500"}},defaultVariants:{variant:"default"}}),i=a.forwardRef((e,t)=>{let{className:r,variant:a,...o}=e;return(0,n.jsx)("div",{ref:t,role:"alert",className:(0,l.cn)(u({variant:a}),r),...o})});i.displayName="Alert",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h5",{ref:t,className:(0,l.cn)("mb-1 font-medium leading-none tracking-tight",r),...a})}).displayName="AlertTitle";let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("text-sm [&_p]:leading-relaxed",r),...a})});s.displayName="AlertDescription"},495:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var n=r(7437),a=r(2265),o=r(1538),l=r(2218),u=r(7440);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),s=a.forwardRef((e,t)=>{let{className:r,variant:a,size:l,asChild:s=!1,...c}=e,d=s?o.g7:"button";return(0,n.jsx)(d,{className:(0,u.cn)(i({variant:a,size:l,className:r})),ref:t,...c})});s.displayName="Button"},6013:function(e,t,r){"use strict";r.d(t,{Ol:function(){return u},SZ:function(){return s},Zb:function(){return l},aY:function(){return c},eW:function(){return d},ll:function(){return i}});var n=r(7437),a=r(2265),o=r(7440);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});l.displayName="Card";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",r),...a})});u.displayName="CardHeader";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});i.displayName="CardTitle";let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});s.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",r),...a})});d.displayName="CardFooter"},5216:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(9099),a=r(9291),o=r(6853),l=r(2649);let u=()=>!1,i=(0,n.Ue)()((0,a.tJ)(e=>({user:null,isAuthenticated:!1,login:t=>{let r=u()?["homeowner","contractor"]:t.roles,n=t.activeRole||r[0];t.token&&l.Z.set("auth-token",t.token,{expires:7,sameSite:"strict",secure:!0,path:"/"}),e({user:{...t,roles:r,activeRole:n},isAuthenticated:!0})},logout:()=>{l.Z.remove("auth-token",{path:"/"}),localStorage.removeItem("auth-storage"),sessionStorage.clear(),e({user:null,isAuthenticated:!1})},switchRole:t=>{e(e=>e.user&&e.user.roles.includes(t)?{...e,user:{...e.user,activeRole:t}}:e)},clearState:()=>{e({user:null,isAuthenticated:!1})}}),{name:"auth-storage",partialize:e=>({user:e.user,isAuthenticated:e.isAuthenticated})})),s=()=>{let{user:e,error:t,isLoading:r}=(0,o.aF)(),{user:n,isAuthenticated:a,login:s,logout:c,switchRole:d}=i();return{user:u()?n:e?{id:e.sub,name:e.name,email:e.email,roles:e["https://myapp.org/roles"]||["homeowner"],activeRole:e["https://myapp.org/activeRole"]||"homeowner"}:null,isAuthenticated:u()?a:!!e,isLoading:!u()&&r,error:u()?null:t,login:s,logout:c,switchRole:d,checkAuth:()=>{if(u()){let e=l.Z.get("auth-token"),t=a&&null!==n&&null!==e;return t||i.getState().clearState(),t}return t?(console.error("Auth0 error:",t),!1):!r&&null!==e}}}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(4839),a=r(6164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:s="",children:c,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...l,width:a,height:a,stroke:r,strokeWidth:i?24*Number(u)/Number(a):u,className:o("lucide",s),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),i=(e,t)=>{let r=(0,n.forwardRef)((r,l)=>{let{className:i,...s}=r;return(0,n.createElement)(u,{ref:l,iconNode:t,className:o("lucide-".concat(a(e)),i),...s})});return r.displayName="".concat(e),r}},5912:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(8030).Z)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},3852:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(8030).Z)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(231),a=r.n(n)},9189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[2183,231,4314,6853,2971,7023,1744],function(){return e(e.s=4295)}),_N_E=e.O()}]);