(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2335],{2070:function(e,t,r){Promise.resolve().then(r.bind(r,5800))},5800:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),o=r(2265),u=r(6463),a=r(5216);function s(){let e=(0,u.useRouter)(),{user:t,checkAuth:r}=(0,a.a)();return((0,o.useEffect)(()=>{r()?(null==t?void 0:t.activeRole)!=="homeowner"&&e.push("/dashboard/contractor"):e.push("/login")},[t,e,r]),t&&"homeowner"===t.activeRole)?(0,n.jsx)("div",{className:"container mx-auto px-4 py-8",children:(0,n.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Homeowner Dashboard"})}):null}},5216:function(e,t,r){"use strict";r.d(t,{a:function(){return i}});var n=r(9099),o=r(9291),u=r(6853),a=r(2649);let s=()=>!1,l=(0,n.Ue)()((0,o.tJ)(e=>({user:null,isAuthenticated:!1,login:t=>{let r=s()?["homeowner","contractor"]:t.roles,n=t.activeRole||r[0];t.token&&a.Z.set("auth-token",t.token,{expires:7,sameSite:"strict",secure:!0,path:"/"}),e({user:{...t,roles:r,activeRole:n},isAuthenticated:!0})},logout:()=>{a.Z.remove("auth-token",{path:"/"}),localStorage.removeItem("auth-storage"),sessionStorage.clear(),e({user:null,isAuthenticated:!1})},switchRole:t=>{e(e=>e.user&&e.user.roles.includes(t)?{...e,user:{...e.user,activeRole:t}}:e)},clearState:()=>{e({user:null,isAuthenticated:!1})}}),{name:"auth-storage",partialize:e=>({user:e.user,isAuthenticated:e.isAuthenticated})})),i=()=>{let{user:e,error:t,isLoading:r}=(0,u.aF)(),{user:n,isAuthenticated:o,login:i,logout:c,switchRole:h}=l();return{user:s()?n:e?{id:e.sub,name:e.name,email:e.email,roles:e["https://myapp.org/roles"]||["homeowner"],activeRole:e["https://myapp.org/activeRole"]||"homeowner"}:null,isAuthenticated:s()?o:!!e,isLoading:!s()&&r,error:s()?null:t,login:i,logout:c,switchRole:h,checkAuth:()=>{if(s()){let e=a.Z.get("auth-token"),t=o&&null!==n&&null!==e;return t||l.getState().clearState(),t}return t?(console.error("Auth0 error:",t),!1):!r&&null!==e}}}}},function(e){e.O(0,[4314,6853,2971,7023,1744],function(){return e(e.s=2070)}),_N_E=e.O()}]);