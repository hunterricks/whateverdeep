"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6612],{2421:function(e,t,r){r.d(t,{Z:function(){return n}});let n=(0,r(8030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},4392:function(e,t,r){r.d(t,{Z:function(){return n}});let n=(0,r(8030).Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},9189:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2361:function(e,t,r){r.d(t,{u:function(){return n}});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},6402:function(e,t,r){r.d(t,{B:function(){return a}});var n=r(2265),l=r(7437),o=r(1584),i=r(1538);function a(e){let t=e+"CollectionProvider",[r,a]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let l=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:l}}),[r,l])}};return o.scopeName=e,[function(t,o){let i=n.createContext(o),a=r.length;function u(t){let{scope:r,children:o,...u}=t,s=r?.[e][a]||i,c=n.useMemo(()=>u,Object.values(u));return(0,l.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],u.displayName=t+"Provider",[u,function(r,l){let u=l?.[e][a]||i,s=n.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let l=r.reduce((t,{useScope:r,scopeName:n})=>{let l=r(e)[`__scope${n}`];return{...t,...l}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}(o,...t)]}(t),[u,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,o=n.useRef(null),i=n.useRef(new Map).current;return(0,l.jsx)(u,{scope:t,itemMap:i,collectionRef:o,children:r})};c.displayName=t;let d=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=s(d,r),u=(0,o.e)(t,a.collectionRef);return(0,l.jsx)(i.g7,{ref:u,children:n})});f.displayName=d;let p=e+"CollectionItemSlot",v="data-radix-collection-item",h=n.forwardRef((e,t)=>{let{scope:r,children:a,...u}=e,c=n.useRef(null),d=(0,o.e)(t,c),f=s(p,r);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...u}),()=>void f.itemMap.delete(c))),(0,l.jsx)(i.g7,{[v]:"",ref:d,children:a})});return h.displayName=p,[{Provider:c,Slot:f,ItemSlot:h},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},7549:function(e,t,r){r.d(t,{$G:function(){return eK},B4:function(){return eP},JO:function(){return eE},VY:function(){return e_},Z0:function(){return eF},ZA:function(){return eL},__:function(){return eW},ck:function(){return eA},eT:function(){return eH},fC:function(){return eI},h_:function(){return eD},l_:function(){return eV},u_:function(){return eO},wU:function(){return eB},xz:function(){return eN}});var n=r(2265),l=r(4887),o=r(2361),i=r(8149),a=r(6402),u=r(1584),s=r(8324),c=r(7513),d=r(2358),f=r(589),p=r(467),v=r(3201),h=r(9664),m=r(6935),w=r(5171),g=r(1538),x=r(5137),y=r(1715),b=r(1336),C=r(7250),S=r(1725),M=r(8369),j=r(7590),k=r(7437),R=[" ","Enter","ArrowUp","ArrowDown"],T=[" ","Enter"],I="Select",[N,P,E]=(0,a.B)(I),[D,_]=(0,s.b)(I,[E,h.D7]),V=(0,h.D7)(),[L,W]=D(I),[A,H]=D(I),B=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:i,value:a,defaultValue:u,onValueChange:s,dir:d,name:f,autoComplete:p,disabled:m,required:w,form:g}=e,x=V(t),[b,C]=n.useState(null),[S,M]=n.useState(null),[j,R]=n.useState(!1),T=(0,c.gm)(d),[I=!1,P]=(0,y.T)({prop:l,defaultProp:o,onChange:i}),[E,D]=(0,y.T)({prop:a,defaultProp:u,onChange:s}),_=n.useRef(null),W=!b||g||!!b.closest("form"),[H,B]=n.useState(new Set),O=Array.from(H).map(e=>e.props.value).join(";");return(0,k.jsx)(h.fC,{...x,children:(0,k.jsxs)(L,{required:w,scope:t,trigger:b,onTriggerChange:C,valueNode:S,onValueNodeChange:M,valueNodeHasChildren:j,onValueNodeHasChildrenChange:R,contentId:(0,v.M)(),value:E,onValueChange:D,open:I,onOpenChange:P,dir:T,triggerPointerDownPosRef:_,disabled:m,children:[(0,k.jsx)(N.Provider,{scope:t,children:(0,k.jsx)(A,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{B(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{B(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),W?(0,k.jsxs)(ek,{"aria-hidden":!0,required:w,tabIndex:-1,name:f,autoComplete:p,value:E,onChange:e=>D(e.target.value),disabled:m,form:g,children:[void 0===E?(0,k.jsx)("option",{value:""}):null,Array.from(H)]},O):null]})})};B.displayName=I;var O="SelectTrigger",K=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,a=V(r),s=W(O,r),c=s.disabled||l,d=(0,u.e)(t,s.onTriggerChange),f=P(r),p=n.useRef("touch"),[v,m,g]=eR(e=>{let t=f().filter(e=>!e.disabled),r=t.find(e=>e.value===s.value),n=eT(t,e,r);void 0!==n&&s.onValueChange(n.value)}),x=e=>{c||(s.onOpenChange(!0),g()),e&&(s.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,k.jsx)(h.ee,{asChild:!0,...a,children:(0,k.jsx)(w.WV.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":ej(s.value)?"":void 0,...o,ref:d,onClick:(0,i.M)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==p.current&&x(e)}),onPointerDown:(0,i.M)(o.onPointerDown,e=>{p.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())}),onKeyDown:(0,i.M)(o.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&R.includes(e.key)&&(x(),e.preventDefault())})})})});K.displayName=O;var F="SelectValue",U=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:i="",...a}=e,s=W(F,r),{onValueNodeHasChildrenChange:c}=s,d=void 0!==o,f=(0,u.e)(t,s.onValueNodeChange);return(0,b.b)(()=>{c(d)},[c,d]),(0,k.jsx)(w.WV.span,{...a,ref:f,style:{pointerEvents:"none"},children:ej(s.value)?(0,k.jsx)(k.Fragment,{children:i}):o})});U.displayName=F;var q=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,k.jsx)(w.WV.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});q.displayName="SelectIcon";var z=e=>(0,k.jsx)(m.h,{asChild:!0,...e});z.displayName="SelectPortal";var Z="SelectContent",$=n.forwardRef((e,t)=>{let r=W(Z,e.__scopeSelect),[o,i]=n.useState();return((0,b.b)(()=>{i(new DocumentFragment)},[]),r.open)?(0,k.jsx)(G,{...e,ref:t}):o?l.createPortal((0,k.jsx)(Y,{scope:e.__scopeSelect,children:(0,k.jsx)(N.Slot,{scope:e.__scopeSelect,children:(0,k.jsx)("div",{children:e.children})})}),o):null});$.displayName=Z;var[Y,X]=D(Z),G=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:s,side:c,sideOffset:v,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:C,avoidCollisions:S,...R}=e,T=W(Z,r),[I,N]=n.useState(null),[E,D]=n.useState(null),_=(0,u.e)(t,e=>N(e)),[V,L]=n.useState(null),[A,H]=n.useState(null),B=P(r),[O,K]=n.useState(!1),F=n.useRef(!1);n.useEffect(()=>{if(I)return(0,M.Ry)(I)},[I]),(0,f.EW)();let U=n.useCallback(e=>{let[t,...r]=B().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&E&&(E.scrollTop=0),r===n&&E&&(E.scrollTop=E.scrollHeight),null==r||r.focus(),document.activeElement!==l))return},[B,E]),q=n.useCallback(()=>U([V,I]),[U,V,I]);n.useEffect(()=>{O&&q()},[O,q]);let{onOpenChange:z,triggerPointerDownPosRef:$}=T;n.useEffect(()=>{if(I){let e={x:0,y:0},t=t=>{var r,n,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(r=$.current)||void 0===r?void 0:r.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(n=$.current)||void 0===n?void 0:n.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():I.contains(r.target)||z(!1),document.removeEventListener("pointermove",t),$.current=null};return null!==$.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[I,z,$]),n.useEffect(()=>{let e=()=>z(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[z]);let[X,G]=eR(e=>{let t=B().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eT(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!F.current&&!r;(void 0!==T.value&&T.value===t||n)&&(L(e),n&&(F.current=!0))},[T.value]),et=n.useCallback(()=>null==I?void 0:I.focus(),[I]),er=n.useCallback((e,t,r)=>{let n=!F.current&&!r;(void 0!==T.value&&T.value===t||n)&&H(e)},[T.value]),en="popper"===l?Q:J,el=en===Q?{side:c,sideOffset:v,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:C,avoidCollisions:S}:{};return(0,k.jsx)(Y,{scope:r,content:I,viewport:E,onViewportChange:D,itemRefCallback:ee,selectedItem:V,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:q,selectedItemText:A,position:l,isPositioned:O,searchRef:X,children:(0,k.jsx)(j.Z,{as:g.g7,allowPinchZoom:!0,children:(0,k.jsx)(p.M,{asChild:!0,trapped:T.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(o,e=>{var t;null===(t=T.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,k.jsx)(d.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>T.onOpenChange(!1),children:(0,k.jsx)(en,{role:"listbox",id:T.contentId,"data-state":T.open?"open":"closed",dir:T.dir,onContextMenu:e=>e.preventDefault(),...R,...el,onPlaced:()=>K(!0),ref:_,style:{display:"flex",flexDirection:"column",outline:"none",...R.style},onKeyDown:(0,i.M)(R.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||G(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});G.displayName="SelectContentImpl";var J=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...i}=e,a=W(Z,r),s=X(Z,r),[c,d]=n.useState(null),[f,p]=n.useState(null),v=(0,u.e)(t,e=>p(e)),h=P(r),m=n.useRef(!1),g=n.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:C,focusSelectedItem:S}=s,M=n.useCallback(()=>{if(a.trigger&&a.valueNode&&c&&f&&x&&y&&C){let e=a.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),r=a.valueNode.getBoundingClientRect(),n=C.getBoundingClientRect();if("rtl"!==a.dir){let l=n.left-t.left,i=r.left-l,a=e.left-i,u=e.width+a,s=Math.max(u,t.width),d=window.innerWidth-10,f=(0,o.u)(i,[10,Math.max(10,d-s)]);c.style.minWidth=u+"px",c.style.left=f+"px"}else{let l=t.right-n.right,i=window.innerWidth-r.right-l,a=window.innerWidth-e.right-i,u=e.width+a,s=Math.max(u,t.width),d=window.innerWidth-10,f=(0,o.u)(i,[10,Math.max(10,d-s)]);c.style.minWidth=u+"px",c.style.right=f+"px"}let i=h(),u=window.innerHeight-20,s=x.scrollHeight,d=window.getComputedStyle(f),p=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),w=parseInt(d.borderBottomWidth,10),g=p+v+s+parseInt(d.paddingBottom,10)+w,b=Math.min(5*y.offsetHeight,g),S=window.getComputedStyle(x),M=parseInt(S.paddingTop,10),j=parseInt(S.paddingBottom,10),k=e.top+e.height/2-10,R=y.offsetHeight/2,T=p+v+(y.offsetTop+R);if(T<=k){let e=i.length>0&&y===i[i.length-1].ref.current;c.style.bottom="0px";let t=f.clientHeight-x.offsetTop-x.offsetHeight;c.style.height=T+Math.max(u-k,R+(e?j:0)+t+w)+"px"}else{let e=i.length>0&&y===i[0].ref.current;c.style.top="0px";let t=Math.max(k,p+x.offsetTop+(e?M:0)+R);c.style.height=t+(g-T)+"px",x.scrollTop=T-k+x.offsetTop}c.style.margin="".concat(10,"px 0"),c.style.minHeight=b+"px",c.style.maxHeight=u+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,a.trigger,a.valueNode,c,f,x,y,C,a.dir,l]);(0,b.b)(()=>M(),[M]);let[j,R]=n.useState();(0,b.b)(()=>{f&&R(window.getComputedStyle(f).zIndex)},[f]);let T=n.useCallback(e=>{e&&!0===g.current&&(M(),null==S||S(),g.current=!1)},[M,S]);return(0,k.jsx)(ee,{scope:r,contentWrapper:c,shouldExpandOnScrollRef:m,onScrollButtonChange:T,children:(0,k.jsx)("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:(0,k.jsx)(w.WV.div,{...i,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});J.displayName="SelectItemAlignedPosition";var Q=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,i=V(r);return(0,k.jsx)(h.VY,{...i,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Q.displayName="SelectPopperPosition";var[ee,et]=D(Z,{}),er="SelectViewport",en=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,a=X(er,r),s=et(er,r),c=(0,u.e)(t,a.onViewportChange),d=n.useRef(0);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,k.jsx)(N.Slot,{scope:r,children:(0,k.jsx)(w.WV.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,i.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=s;if((null==n?void 0:n.current)&&r){let e=Math.abs(d.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,i=Math.min(n,o),a=o-i;r.style.height=i+"px","0px"===r.style.bottom&&(t.scrollTop=a>0?a:0,r.style.justifyContent="flex-end")}}}d.current=t.scrollTop})})})]})});en.displayName=er;var el="SelectGroup",[eo,ei]=D(el),ea=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,v.M)();return(0,k.jsx)(eo,{scope:r,id:l,children:(0,k.jsx)(w.WV.div,{role:"group","aria-labelledby":l,...n,ref:t})})});ea.displayName=el;var eu="SelectLabel",es=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=ei(eu,r);return(0,k.jsx)(w.WV.div,{id:l.id,...n,ref:t})});es.displayName=eu;var ec="SelectItem",[ed,ef]=D(ec),ep=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:a,...s}=e,c=W(ec,r),d=X(ec,r),f=c.value===l,[p,h]=n.useState(null!=a?a:""),[m,g]=n.useState(!1),x=(0,u.e)(t,e=>{var t;return null===(t=d.itemRefCallback)||void 0===t?void 0:t.call(d,e,l,o)}),y=(0,v.M)(),b=n.useRef("touch"),C=()=>{o||(c.onValueChange(l),c.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,k.jsx)(ed,{scope:r,value:l,disabled:o,textId:y,isSelected:f,onItemTextChange:n.useCallback(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[]),children:(0,k.jsx)(N.ItemSlot,{scope:r,value:l,disabled:o,textValue:p,children:(0,k.jsx)(w.WV.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":f&&m,"data-state":f?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...s,ref:x,onFocus:(0,i.M)(s.onFocus,()=>g(!0)),onBlur:(0,i.M)(s.onBlur,()=>g(!1)),onClick:(0,i.M)(s.onClick,()=>{"mouse"!==b.current&&C()}),onPointerUp:(0,i.M)(s.onPointerUp,()=>{"mouse"===b.current&&C()}),onPointerDown:(0,i.M)(s.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,i.M)(s.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=d.onItemLeave)||void 0===t||t.call(d)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(s.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=d.onItemLeave)||void 0===t||t.call(d)}}),onKeyDown:(0,i.M)(s.onKeyDown,e=>{var t;(null===(t=d.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(T.includes(e.key)&&C()," "===e.key&&e.preventDefault())})})})})});ep.displayName=ec;var ev="SelectItemText",eh=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:i,...a}=e,s=W(ev,r),c=X(ev,r),d=ef(ev,r),f=H(ev,r),[p,v]=n.useState(null),h=(0,u.e)(t,e=>v(e),d.onItemTextChange,e=>{var t;return null===(t=c.itemTextRefCallback)||void 0===t?void 0:t.call(c,e,d.value,d.disabled)}),m=null==p?void 0:p.textContent,g=n.useMemo(()=>(0,k.jsx)("option",{value:d.value,disabled:d.disabled,children:m},d.value),[d.disabled,d.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=f;return(0,b.b)(()=>(x(g),()=>y(g)),[x,y,g]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w.WV.span,{id:d.textId,...a,ref:h}),d.isSelected&&s.valueNode&&!s.valueNodeHasChildren?l.createPortal(a.children,s.valueNode):null]})});eh.displayName=ev;var em="SelectItemIndicator",ew=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ef(em,r).isSelected?(0,k.jsx)(w.WV.span,{"aria-hidden":!0,...n,ref:t}):null});ew.displayName=em;var eg="SelectScrollUpButton",ex=n.forwardRef((e,t)=>{let r=X(eg,e.__scopeSelect),l=et(eg,e.__scopeSelect),[o,i]=n.useState(!1),a=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){i(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,k.jsx)(eC,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ex.displayName=eg;var ey="SelectScrollDownButton",eb=n.forwardRef((e,t)=>{let r=X(ey,e.__scopeSelect),l=et(ey,e.__scopeSelect),[o,i]=n.useState(!1),a=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;i(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,k.jsx)(eC,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});eb.displayName=ey;var eC=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,a=X("SelectScrollButton",r),u=n.useRef(null),s=P(r),c=n.useCallback(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return n.useEffect(()=>()=>c(),[c]),(0,b.b)(()=>{var e;let t=s().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[s]),(0,k.jsx)(w.WV.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,i.M)(o.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(l,50))}),onPointerMove:(0,i.M)(o.onPointerMove,()=>{var e;null===(e=a.onItemLeave)||void 0===e||e.call(a),null===u.current&&(u.current=window.setInterval(l,50))}),onPointerLeave:(0,i.M)(o.onPointerLeave,()=>{c()})})}),eS=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,k.jsx)(w.WV.div,{"aria-hidden":!0,...n,ref:t})});eS.displayName="SelectSeparator";var eM="SelectArrow";function ej(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=V(r),o=W(eM,r),i=X(eM,r);return o.open&&"popper"===i.position?(0,k.jsx)(h.Eh,{...l,...n,ref:t}):null}).displayName=eM;var ek=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),i=(0,u.e)(t,o),a=(0,C.D)(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(a!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[a,r]),(0,k.jsx)(S.T,{asChild:!0,children:(0,k.jsx)("select",{...l,ref:i,defaultValue:r})})});function eR(e){let t=(0,x.W)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),i=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,i]}function eT(e,t,r){var n;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===l.length&&(o=o.filter(e=>e!==r));let i=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return i!==r?i:void 0}ek.displayName="BubbleSelect";var eI=B,eN=K,eP=U,eE=q,eD=z,e_=$,eV=en,eL=ea,eW=es,eA=ep,eH=eh,eB=ew,eO=ex,eK=eb,eF=eS},7250:function(e,t,r){r.d(t,{D:function(){return l}});var n=r(2265);function l(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},1725:function(e,t,r){r.d(t,{T:function(){return i}});var n=r(2265),l=r(5171),o=r(7437),i=n.forwardRef((e,t)=>(0,o.jsx)(l.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));i.displayName="VisuallyHidden"}}]);