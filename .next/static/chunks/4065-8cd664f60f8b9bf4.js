"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4065],{8030:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2265);let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:u=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:c="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:u,height:u,stroke:n,strokeWidth:l?24*Number(a)/Number(u):a,className:o("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),l=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:l,...c}=n;return(0,r.createElement)(a,{ref:i,iconNode:t,className:o("lucide-".concat(u(e)),l),...c})});return n.displayName="".concat(e),n}},2468:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(8030).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},7138:function(e,t,n){n.d(t,{default:function(){return u.a}});var r=n(231),u=n.n(r)},9189:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8149:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},9324:function(e,t,n){n.d(t,{fC:function(){return M},z$:function(){return C}});var r=n(2265),u=n(1584),o=n(8324),i=n(8149),a=n(1715),l=n(7250),c=n(5238),s=n(1383),d=n(5171),f=n(7437),m="Checkbox",[p,v]=(0,o.b)(m),[b,h]=p(m),y=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:o,checked:l,defaultChecked:c,required:s,disabled:m,value:p="on",onCheckedChange:v,form:h,...y}=e,[N,w]=r.useState(null),M=(0,u.e)(t,e=>w(e)),C=r.useRef(!1),x=!N||h||!!N.closest("form"),[O=!1,T]=(0,a.T)({prop:l,defaultProp:c,onChange:v}),R=r.useRef(O);return r.useEffect(()=>{let e=null==N?void 0:N.form;if(e){let t=()=>T(R.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[N,T]),(0,f.jsxs)(b,{scope:n,state:O,disabled:m,children:[(0,f.jsx)(d.WV.button,{type:"button",role:"checkbox","aria-checked":g(O)?"mixed":O,"aria-required":s,"data-state":E(O),"data-disabled":m?"":void 0,disabled:m,value:p,...y,ref:M,onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.M)(e.onClick,e=>{T(e=>!!g(e)||!e),x&&(C.current=e.isPropagationStopped(),C.current||e.stopPropagation())})}),x&&(0,f.jsx)(k,{control:N,bubbles:!C.current,name:o,value:p,checked:O,required:s,disabled:m,form:h,style:{transform:"translateX(-100%)"},defaultChecked:!g(c)&&c})]})});y.displayName=m;var N="CheckboxIndicator",w=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:r,...u}=e,o=h(N,n);return(0,f.jsx)(s.z,{present:r||g(o.state)||!0===o.state,children:(0,f.jsx)(d.WV.span,{"data-state":E(o.state),"data-disabled":o.disabled?"":void 0,...u,ref:t,style:{pointerEvents:"none",...e.style}})})});w.displayName=N;var k=e=>{let{control:t,checked:n,bubbles:u=!0,defaultChecked:o,...i}=e,a=r.useRef(null),s=(0,l.D)(n),d=(0,c.t)(t);r.useEffect(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(s!==n&&t){let r=new Event("click",{bubbles:u});e.indeterminate=g(n),t.call(e,!g(n)&&n),e.dispatchEvent(r)}},[s,n,u]);let m=r.useRef(!g(n)&&n);return(0,f.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=o?o:m.current,...i,tabIndex:-1,ref:a,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function g(e){return"indeterminate"===e}function E(e){return g(e)?"indeterminate":e?"checked":"unchecked"}var M=y,C=w},8324:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return o}});var r=n(2265),u=n(7437);function o(e,t){let n=r.createContext(t),o=e=>{let{children:t,...o}=e,i=r.useMemo(()=>o,Object.values(o));return(0,u.jsx)(n.Provider,{value:i,children:t})};return o.displayName=e+"Provider",[o,function(u){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),a=n.length;n=[...n,o];let l=t=>{let{scope:n,children:o,...l}=t,c=n?.[e]?.[a]||i,s=r.useMemo(()=>l,Object.values(l));return(0,u.jsx)(c.Provider,{value:s,children:o})};return l.displayName=t+"Provider",[l,function(n,u){let l=u?.[e]?.[a]||i,c=r.useContext(l);if(c)return c;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(o,...t)]}},1383:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),u=n(1584),o=n(1336),i=e=>{var t,n;let i,l;let{present:c,children:s}=e,d=function(e){var t,n;let[u,i]=r.useState(),l=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(l.current);s.current="mounted"===d?e:"none"},[d]),(0,o.b)(()=>{let t=l.current,n=c.current;if(n!==e){let r=s.current,u=a(t);e?f("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==u?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,o.b)(()=>{if(u){var e;let t;let n=null!==(e=u.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(l.current).includes(e.animationName);if(e.target===u&&r&&(f("ANIMATION_END"),!c.current)){let e=u.style.animationFillMode;u.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===u.style.animationFillMode&&(u.style.animationFillMode=e)})}},o=e=>{e.target===u&&(s.current=a(l.current))};return u.addEventListener("animationstart",o),u.addEventListener("animationcancel",r),u.addEventListener("animationend",r),()=>{n.clearTimeout(t),u.removeEventListener("animationstart",o),u.removeEventListener("animationcancel",r),u.removeEventListener("animationend",r)}}f("ANIMATION_END")},[u,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(c),f="function"==typeof s?s({present:d.isPresent}):r.Children.only(s),m=(0,u.e)(d.ref,(i=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?f.ref:(i=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in i&&i.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof s||d.isPresent?r.cloneElement(f,{ref:m}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},5137:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1715:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),u=n(5137);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,i=r.useRef(o),a=(0,u.W)(t);return r.useEffect(()=>{i.current!==o&&(a(o),i.current=o)},[o,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,l=a?e:o,c=(0,u.W)(n);return[l,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else i(t)},[a,e,i,c])]}},1336:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265),u=globalThis?.document?r.useLayoutEffect:()=>{}},7250:function(e,t,n){n.d(t,{D:function(){return u}});var r=n(2265);function u(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},5238:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(2265),u=n(1336);function o(e){let[t,n]=r.useState(void 0);return(0,u.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,u;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,u=t.blockSize}else r=e.offsetWidth,u=e.offsetHeight;n({width:r,height:u})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);