(()=>{var e={};e.id=4178,e.ids=[4178],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},46184:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>l.Z,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>o}),s(44591),s(11506),s(26083),s(19644),s(96560);var a=s(23191),t=s(88716),l=s(48001),i=s(95231),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);s.d(r,n);let o=["",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,44591)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/profile/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,11506)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/layout.tsx"],template:[()=>Promise.resolve().then(s.bind(s,15778)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/template.tsx"],error:[()=>Promise.resolve().then(s.bind(s,26083)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/error.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,19644)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,96560)),"/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/not-found.tsx"]}],d=["/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/profile/page.tsx"],c="/profile/page",u={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},67061:(e,r,s)=>{Promise.resolve().then(s.bind(s,53564))},53564:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>x});var a=s(10326),t=s(17577),l=s(35047),i=s(33071),n=s(90772),o=s(54432),d=s(85999);let c=(0,s(62881).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);var u=s(18206),m=s(85562),p=s(43273),f=s(2991);function x(){(0,l.useRouter)();let{user:e,error:r,isLoading:s}=(0,u.aF)(),{user:x,checkAuth:h}=(0,f.a)(),[g,v]=(0,t.useState)(!1),[b,j]=(0,t.useState)(e),[w,y]=(0,t.useState)([{id:1,rating:5,reviewer:{name:"John Doe"},comment:"Great work!"},{id:2,rating:4,reviewer:{name:"Jane Smith"},comment:"Very professional"}]),N=async e=>{e.preventDefault();try{if(!(await fetch("/api/auth/update-profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)})).ok)throw Error("Failed to update profile");v(!1),d.Am.success("Profile updated successfully")}catch(e){console.error("Profile update error:",e),d.Am.error("Failed to update profile")}};return s?a.jsx("div",{className:"container mx-auto px-4 py-8",children:a.jsx("div",{className:"flex items-center justify-center min-h-[400px]",children:a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"})})}):r?a.jsx("div",{className:"container mx-auto px-4 py-8",children:a.jsx(p.bZ,{variant:"destructive",children:(0,a.jsxs)(p.X,{children:["Error loading profile: ",r.message]})})}):b?(0,a.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[!1,a.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Profile"}),(0,a.jsxs)(i.Zb,{className:"mb-8",children:[(0,a.jsxs)(i.Ol,{className:"flex flex-row items-center gap-4",children:[(0,a.jsxs)(m.qE,{className:"h-20 w-20",children:[a.jsx(m.F$,{src:b.picture||`https://api.dicebear.com/7.x/avataaars/svg?seed=${b.name}`,alt:b.name}),a.jsx(m.Q5,{children:b.name?.[0]})]}),(0,a.jsxs)("div",{children:[a.jsx(i.ll,{children:b.name}),a.jsx("p",{className:"text-sm text-muted-foreground",children:b.email})]})]}),a.jsx(i.aY,{children:g?(0,a.jsxs)("form",{onSubmit:N,className:"space-y-4",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-1",children:"Name"}),a.jsx(o.I,{type:"text",id:"name",value:b.name,onChange:e=>j(r=>({...r,name:e.target.value})),required:!0})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-1",children:"Email"}),a.jsx(o.I,{type:"email",id:"email",value:b.email,onChange:e=>j(r=>({...r,email:e.target.value})),required:!0,disabled:!0})]}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[a.jsx(n.z,{type:"submit",children:"Save Changes"}),a.jsx(n.z,{type:"button",variant:"outline",onClick:()=>v(!1),children:"Cancel"})]})]}):(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("p",{children:[a.jsx("strong",{children:"Name:"})," ",b.name]}),(0,a.jsxs)("p",{children:[a.jsx("strong",{children:"Email:"})," ",b.email]}),(0,a.jsxs)("p",{children:[a.jsx("strong",{children:"Role:"})," ",b["https://myapp.org/roles"]?.join(", ")]}),a.jsx(n.z,{onClick:()=>v(!0),children:"Edit Profile"})]})})]}),(0,a.jsxs)(i.Zb,{children:[a.jsx(i.Ol,{children:a.jsx(i.ll,{children:"Reviews"})}),a.jsx(i.aY,{children:w.map(e=>(0,a.jsxs)("div",{className:"mb-4 p-4 border rounded",children:[a.jsx("div",{className:"flex items-center mb-2",children:[void 0,void 0,void 0,void 0,void 0].map((r,s)=>a.jsx(c,{className:`h-5 w-5 ${s<e.rating?"text-yellow-400":"text-gray-300"}`},s))}),a.jsx("p",{className:"font-semibold",children:e.reviewer.name}),a.jsx("p",{children:e.comment})]},e.id))})]})]}):null}},85562:(e,r,s)=>{"use strict";s.d(r,{qE:()=>j,Q5:()=>y,F$:()=>w});var a=s(10326),t=s(17577),l=s(93095),i=s(55049),n=s(65819),o=s(45226),d="Avatar",[c,u]=(0,l.b)(d),[m,p]=c(d),f=t.forwardRef((e,r)=>{let{__scopeAvatar:s,...l}=e,[i,n]=t.useState("idle");return(0,a.jsx)(m,{scope:s,imageLoadingStatus:i,onImageLoadingStatusChange:n,children:(0,a.jsx)(o.WV.span,{...l,ref:r})})});f.displayName=d;var x="AvatarImage",h=t.forwardRef((e,r)=>{let{__scopeAvatar:s,src:l,onLoadingStatusChange:d=()=>{},...c}=e,u=p(x,s),m=function(e,r){let[s,a]=t.useState("idle");return(0,n.b)(()=>{if(!e){a("error");return}let s=!0,t=new window.Image,l=e=>()=>{s&&a(e)};return a("loading"),t.onload=l("loaded"),t.onerror=l("error"),t.src=e,r&&(t.referrerPolicy=r),()=>{s=!1}},[e,r]),s}(l,c.referrerPolicy),f=(0,i.W)(e=>{d(e),u.onImageLoadingStatusChange(e)});return(0,n.b)(()=>{"idle"!==m&&f(m)},[m,f]),"loaded"===m?(0,a.jsx)(o.WV.img,{...c,ref:r,src:l}):null});h.displayName=x;var g="AvatarFallback",v=t.forwardRef((e,r)=>{let{__scopeAvatar:s,delayMs:l,...i}=e,n=p(g,s),[d,c]=t.useState(void 0===l);return t.useEffect(()=>{if(void 0!==l){let e=window.setTimeout(()=>c(!0),l);return()=>window.clearTimeout(e)}},[l]),d&&"loaded"!==n.imageLoadingStatus?(0,a.jsx)(o.WV.span,{...i,ref:r}):null});v.displayName=g;var b=s(77863);let j=t.forwardRef(({className:e,...r},s)=>a.jsx(f,{ref:s,className:(0,b.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...r}));j.displayName=f.displayName;let w=t.forwardRef(({className:e,...r},s)=>a.jsx(h,{ref:s,className:(0,b.cn)("aspect-square h-full w-full",e),...r}));w.displayName=h.displayName;let y=t.forwardRef(({className:e,...r},s)=>a.jsx(v,{ref:s,className:(0,b.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...r}));y.displayName=v.displayName},33071:(e,r,s)=>{"use strict";s.d(r,{Ol:()=>n,SZ:()=>d,Zb:()=>i,aY:()=>c,eW:()=>u,ll:()=>o});var a=s(10326),t=s(17577),l=s(77863);let i=t.forwardRef(({className:e,...r},s)=>a.jsx("div",{ref:s,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));i.displayName="Card";let n=t.forwardRef(({className:e,...r},s)=>a.jsx("div",{ref:s,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...r}));n.displayName="CardHeader";let o=t.forwardRef(({className:e,...r},s)=>a.jsx("h3",{ref:s,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));o.displayName="CardTitle";let d=t.forwardRef(({className:e,...r},s)=>a.jsx("p",{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...r}));d.displayName="CardDescription";let c=t.forwardRef(({className:e,...r},s)=>a.jsx("div",{ref:s,className:(0,l.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent";let u=t.forwardRef(({className:e,...r},s)=>a.jsx("div",{ref:s,className:(0,l.cn)("flex items-center p-6 pt-0",e),...r}));u.displayName="CardFooter"},54432:(e,r,s)=>{"use strict";s.d(r,{I:()=>i});var a=s(10326),t=s(17577),l=s(77863);let i=t.forwardRef(({className:e,type:r,...s},t)=>a.jsx("input",{type:r,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:t,...s}));i.displayName="Input"},2991:(e,r,s)=>{"use strict";s.d(r,{a:()=>d});var a=s(60114),t=s(85251),l=s(18206),i=s(66562);let n=()=>!1,o=(0,a.Ue)()((0,t.tJ)(e=>({user:null,isAuthenticated:!1,login:r=>{let s=n()?["homeowner","contractor"]:r.roles,a=r.activeRole||s[0];r.token&&i.Z.set("auth-token",r.token,{expires:7,sameSite:"strict",secure:!0,path:"/"}),e({user:{...r,roles:s,activeRole:a},isAuthenticated:!0})},logout:()=>{i.Z.remove("auth-token",{path:"/"}),localStorage.removeItem("auth-storage"),sessionStorage.clear(),e({user:null,isAuthenticated:!1})},switchRole:r=>{e(e=>e.user&&e.user.roles.includes(r)?{...e,user:{...e.user,activeRole:r}}:e)},clearState:()=>{e({user:null,isAuthenticated:!1})}}),{name:"auth-storage",partialize:e=>({user:e.user,isAuthenticated:e.isAuthenticated})})),d=()=>{let{user:e,error:r,isLoading:s}=(0,l.aF)(),{user:a,isAuthenticated:t,login:d,logout:c,switchRole:u}=o();return{user:n()?a:e?{id:e.sub,name:e.name,email:e.email,roles:e["https://myapp.org/roles"]||["homeowner"],activeRole:e["https://myapp.org/activeRole"]||"homeowner"}:null,isAuthenticated:n()?t:!!e,isLoading:!n()&&s,error:n()?null:r,login:d,logout:c,switchRole:u,checkAuth:()=>{if(n()){let e=i.Z.get("auth-token"),r=t&&null!==a&&null!==e;return r||o.getState().clearState(),r}return r?(console.error("Auth0 error:",r),!1):!s&&null!==e}}}},44591:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});let a=(0,s(68570).createProxy)(String.raw`/Users/hunterricks/Downloads/stackblitz-starters-3acn8s (7)/app/profile/page.tsx#default`)}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),a=r.X(0,[9276,8775,1438,5999,2574],()=>s(46184));module.exports=a})();