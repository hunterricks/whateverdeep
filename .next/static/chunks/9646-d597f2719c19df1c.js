"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9646],{2468:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(8030).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},7138:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(231),i=n.n(r)},7513:function(e,t,n){n.d(t,{gm:function(){return o}});var r=n(2265);n(7437);var i=r.createContext(void 0);function o(e){let t=r.useContext(i);return e||t||"ltr"}},9664:function(e,t,n){n.d(t,{ee:function(){return eq},Eh:function(){return eG},VY:function(){return eZ},fC:function(){return eX},D7:function(){return eP}});var r=n(2265);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,f=Math.floor,u=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function h(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function g(e){return"y"===e?"height":"width"}function v(e){return["top","bottom"].includes(p(e))?"y":"x"}function y(e){return e.replace(/start|end/g,e=>s[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function x(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function A(e,t,n){let r,{reference:i,floating:o}=e,l=v(t),a=m(v(t)),f=g(a),u=p(t),c="y"===l,s=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,y=i[f]/2-o[f]/2;switch(u){case"top":r={x:s,y:i.y-o.height};break;case"bottom":r={x:s,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(h(t)){case"start":r[a]-=y*(n&&c?-1:1);break;case"end":r[a]+=y*(n&&c?-1:1)}return r}let R=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:s}=A(u,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:v,data:y,reset:w}=await m({x:c,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:l,elements:{reference:e,floating:t}});c=null!=g?g:c,s=null!=v?v:s,p={...p,[o]:{...p[o],...y}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(u=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:c,y:s}=A(u,d,f)),n=-1)}return{x:c,y:s,placement:d,strategy:i,middlewareData:p}};async function C(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:s="floating",altBoundary:p=!1,padding:h=0}=d(t,e),m=x(h),g=a[p?"floating"===s?"reference":"floating":s],v=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:f})),y="floating"===s?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),A=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},R=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:w,strategy:f}):y);return{top:(v.top-R.top+m.top)/A.y,bottom:(R.bottom-v.bottom+m.bottom)/A.y,left:(v.left-R.left+m.left)/A.x,right:(R.right-v.right+m.right)/A.x}}function E(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function L(e){return i.some(t=>e[t]>=0)}async function S(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=h(n),f="y"===v(n),u=["left","top"].includes(l)?-1:1,c=o&&f?-1:1,s=d(t,e),{mainAxis:m,crossAxis:g,alignmentAxis:y}="number"==typeof s?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:s.mainAxis||0,crossAxis:s.crossAxis||0,alignmentAxis:s.alignmentAxis};return a&&"number"==typeof y&&(g="end"===a?-1*y:y),f?{x:g*c,y:m*u}:{x:m*u,y:g*c}}function T(){return"undefined"!=typeof window}function O(e){return H(e)?(e.nodeName||"").toLowerCase():"#document"}function P(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function k(e){var t;return null==(t=(H(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function H(e){return!!T()&&(e instanceof Node||e instanceof P(e).Node)}function D(e){return!!T()&&(e instanceof Element||e instanceof P(e).Element)}function N(e){return!!T()&&(e instanceof HTMLElement||e instanceof P(e).HTMLElement)}function W(e){return!!T()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof P(e).ShadowRoot)}function M(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=_(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function j(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function F(e){let t=V(),n=D(e)?_(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function z(e){return["html","body","#document"].includes(O(e))}function _(e){return P(e).getComputedStyle(e)}function B(e){return D(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $(e){if("html"===O(e))return e;let t=e.assignedSlot||e.parentNode||W(e)&&e.host||k(e);return W(t)?t.host:t}function Y(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=$(t);return z(n)?t.ownerDocument?t.ownerDocument.body:t.body:N(n)&&M(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=P(i);if(o){let e=I(l);return t.concat(l,l.visualViewport||[],M(i)?i:[],e&&n?Y(e):[])}return t.concat(i,Y(i,[],n))}function I(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function X(e){let t=_(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=N(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,f=a(n)!==o||a(r)!==l;return f&&(n=o,r=l),{width:n,height:r,$:f}}function q(e){return D(e)?e:e.contextElement}function Z(e){let t=q(e);if(!N(t))return u(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=X(t),l=(o?a(n.width):n.width)/r,f=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),f&&Number.isFinite(f)||(f=1),{x:l,y:f}}let G=u(0);function J(e){let t=P(e);return V()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:G}function K(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=q(e),a=u(1);t&&(r?D(r)&&(a=Z(r)):a=Z(e));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===P(l))&&i)?J(l):u(0),c=(o.left+f.x)/a.x,s=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=P(l),t=r&&D(r)?P(r):r,n=e,i=I(n);for(;i&&r&&t!==n;){let e=Z(i),t=i.getBoundingClientRect(),r=_(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,s*=e.y,d*=e.x,p*=e.y,c+=o,s+=l,i=I(n=P(i))}}return b({width:d,height:p,x:c,y:s})}function Q(e,t){let n=B(e).scrollLeft;return t?t.left+n:K(k(e)).left+n}function U(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=P(e),r=k(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let e=V();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(e,n);else if("document"===t)r=function(e){let t=k(e),n=B(e),r=e.ownerDocument.body,i=l(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=l(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+Q(e),f=-n.scrollTop;return"rtl"===_(r).direction&&(a+=l(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:f}}(k(e));else if(D(t))r=function(e,t){let n=K(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=N(e)?Z(e):u(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=J(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return b(r)}function ee(e){return"static"===_(e).position}function et(e,t){if(!N(e)||"fixed"===_(e).position)return null;if(t)return t(e);let n=e.offsetParent;return k(e)===n&&(n=n.ownerDocument.body),n}function en(e,t){let n=P(e);if(j(e))return n;if(!N(e)){let t=$(e);for(;t&&!z(t);){if(D(t)&&!ee(t))return t;t=$(t)}return n}let r=et(e,t);for(;r&&["table","td","th"].includes(O(r))&&ee(r);)r=et(r,t);return r&&z(r)&&ee(r)&&!F(r)?n:r||function(e){let t=$(e);for(;N(t)&&!z(t);){if(F(t))return t;if(j(t))break;t=$(t)}return null}(e)||n}let er=async function(e){let t=this.getOffsetParent||en,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=N(t),i=k(t),o="fixed"===n,l=K(e,!0,o,t),a={scrollLeft:0,scrollTop:0},f=u(0);if(r||!r&&!o){if(("body"!==O(t)||M(i))&&(a=B(t)),r){let e=K(t,!0,o,t);f.x=e.x+t.clientLeft,f.y=e.y+t.clientTop}else i&&(f.x=Q(i))}let c=0,s=0;if(i&&!r&&!o){let e=i.getBoundingClientRect();s=e.top+a.scrollTop,c=e.left+a.scrollLeft-Q(i,e)}return{x:l.left+a.scrollLeft-f.x-c,y:l.top+a.scrollTop-f.y-s,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},ei={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o="fixed"===i,l=k(r),a=!!t&&j(t.floating);if(r===l||a&&o)return n;let f={scrollLeft:0,scrollTop:0},c=u(1),s=u(0),d=N(r);if((d||!d&&!o)&&(("body"!==O(r)||M(l))&&(f=B(r)),N(r))){let e=K(r);c=Z(r),s.x=e.x+r.clientLeft,s.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-f.scrollLeft*c.x+s.x,y:n.y*c.y-f.scrollTop*c.y+s.y}},getDocumentElement:k,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[..."clippingAncestors"===n?j(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=Y(e,[],!1).filter(e=>D(e)&&"body"!==O(e)),i=null,o="fixed"===_(e).position,l=o?$(e):e;for(;D(l)&&!z(l);){let t=_(l),n=F(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||M(l)&&!n&&function e(t,n){let r=$(t);return!(r===n||!D(r)||z(r))&&("fixed"===_(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=$(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],f=a[0],u=a.reduce((e,n)=>{let r=U(t,n,i);return e.top=l(r.top,e.top),e.right=o(r.right,e.right),e.bottom=o(r.bottom,e.bottom),e.left=l(r.left,e.left),e},U(t,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:en,getElementRects:er,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=X(e);return{width:t,height:n}},getScale:Z,isElement:D,isRTL:function(e){return"rtl"===_(e).direction}},eo=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:f,elements:u,middlewareData:c}=t,{element:s,padding:p=0}=d(e,t)||{};if(null==s)return{};let y=x(p),w={x:n,y:r},b=m(v(i)),A=g(b),R=await f.getDimensions(s),C="y"===b,E=C?"clientHeight":"clientWidth",L=a.reference[A]+a.reference[b]-w[b]-a.floating[A],S=w[b]-a.reference[b],T=await (null==f.getOffsetParent?void 0:f.getOffsetParent(s)),O=T?T[E]:0;O&&await (null==f.isElement?void 0:f.isElement(T))||(O=u.floating[E]||a.floating[A]);let P=O/2-R[A]/2-1,k=o(y[C?"top":"left"],P),H=o(y[C?"bottom":"right"],P),D=O-R[A]-H,N=O/2-R[A]/2+(L/2-S/2),W=l(k,o(N,D)),M=!c.arrow&&null!=h(i)&&N!==W&&a.reference[A]/2-(N<k?k:H)-R[A]/2<0,j=M?N<k?N-k:N-D:0;return{[b]:w[b]+j,data:{[b]:W,centerOffset:N-W-j,...M&&{alignmentOffset:j}},reset:M}}}),el=(e,t,n)=>{let r=new Map,i={platform:ei,...n},o={...i.platform,_c:r};return R(e,t,{...i,platform:o})};var ea=n(4887),ef="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function eu(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!eu(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!eu(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ec(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function es(e,t){let n=ec(e);return Math.round(t*n)/n}function ed(e){let t=r.useRef(e);return ef(()=>{t.current=e}),t}let ep=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?eo({element:n.current,padding:r}).fn(t):{}:n?eo({element:n,padding:r}).fn(t):{}}}),eh=(e,t)=>{var n;return{...(void 0===(n=e)&&(n=0),{name:"offset",options:n,async fn(e){var t,r;let{x:i,y:o,placement:l,middlewareData:a}=e,f=await S(e,n);return l===(null==(t=a.offset)?void 0:t.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}),options:[e,t]}},em=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"shift",options:n,async fn(e){let{x:t,y:r,placement:i}=e,{mainAxis:a=!0,crossAxis:f=!1,limiter:u={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=d(n,e),s={x:t,y:r},h=await C(e,c),g=v(p(i)),y=m(g),w=s[y],x=s[g];if(a){let e="y"===y?"top":"left",t="y"===y?"bottom":"right",n=w+h[e],r=w-h[t];w=l(n,o(w,r))}if(f){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",n=x+h[e],r=x-h[t];x=l(n,o(x,r))}let b=u.fn({...e,[y]:w,[g]:x});return{...b,data:{x:b.x-t,y:b.y-r,enabled:{[y]:a,[g]:f}}}}}),options:[e,t]}},eg=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{options:n,fn(e){let{x:t,y:r,placement:i,rects:o,middlewareData:l}=e,{offset:a=0,mainAxis:f=!0,crossAxis:u=!0}=d(n,e),c={x:t,y:r},s=v(i),h=m(s),g=c[h],y=c[s],w=d(a,e),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(f){let e="y"===h?"height":"width",t=o.reference[h]-o.floating[e]+x.mainAxis,n=o.reference[h]+o.reference[e]-x.mainAxis;g<t?g=t:g>n&&(g=n)}if(u){var b,A;let e="y"===h?"width":"height",t=["top","left"].includes(p(i)),n=o.reference[s]-o.floating[e]+(t&&(null==(b=l.offset)?void 0:b[s])||0)+(t?0:x.crossAxis),r=o.reference[s]+o.reference[e]+(t?0:(null==(A=l.offset)?void 0:A[s])||0)-(t?x.crossAxis:0);y<n?y=n:y>r&&(y=r)}return{[h]:g,[s]:y}}}),options:[e,t]}},ev=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"flip",options:n,async fn(e){var t,r,i,o,l;let{placement:a,middlewareData:f,rects:u,initialPlacement:c,platform:s,elements:x}=e,{mainAxis:b=!0,crossAxis:A=!0,fallbackPlacements:R,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:L="none",flipAlignment:S=!0,...T}=d(n,e);if(null!=(t=f.arrow)&&t.alignmentOffset)return{};let O=p(a),P=v(c),k=p(c)===c,H=await (null==s.isRTL?void 0:s.isRTL(x.floating)),D=R||(k||!S?[w(c)]:function(e){let t=w(e);return[y(e),t,y(t)]}(c)),N="none"!==L;!R&&N&&D.push(...function(e,t,n,r){let i=h(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(p(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(y)))),o}(c,S,L,H));let W=[c,...D],M=await C(e,T),j=[],F=(null==(r=f.flip)?void 0:r.overflows)||[];if(b&&j.push(M[O]),A){let e=function(e,t,n){void 0===n&&(n=!1);let r=h(e),i=m(v(e)),o=g(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=w(l)),[l,w(l)]}(a,u,H);j.push(M[e[0]],M[e[1]])}if(F=[...F,{placement:a,overflows:j}],!j.every(e=>e<=0)){let e=((null==(i=f.flip)?void 0:i.index)||0)+1,t=W[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(o=F.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(E){case"bestFit":{let e=null==(l=F.filter(e=>{if(N){let t=v(e.placement);return t===P||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=c}if(a!==n)return{reset:{placement:n}}}return{}}}),options:[e,t]}},ey=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"size",options:n,async fn(e){var t,r;let i,a;let{placement:f,rects:u,platform:c,elements:s}=e,{apply:m=()=>{},...g}=d(n,e),y=await C(e,g),w=p(f),x=h(f),b="y"===v(f),{width:A,height:R}=u.floating;"top"===w||"bottom"===w?(i=w,a=x===(await (null==c.isRTL?void 0:c.isRTL(s.floating))?"start":"end")?"left":"right"):(a=w,i="end"===x?"top":"bottom");let E=R-y.top-y.bottom,L=A-y.left-y.right,S=o(R-y[i],E),T=o(A-y[a],L),O=!e.middlewareData.shift,P=S,k=T;if(null!=(t=e.middlewareData.shift)&&t.enabled.x&&(k=L),null!=(r=e.middlewareData.shift)&&r.enabled.y&&(P=E),O&&!x){let e=l(y.left,0),t=l(y.right,0),n=l(y.top,0),r=l(y.bottom,0);b?k=A-2*(0!==e||0!==t?e+t:l(y.left,y.right)):P=R-2*(0!==n||0!==r?n+r:l(y.top,y.bottom))}await m({...e,availableWidth:k,availableHeight:P});let H=await c.getDimensions(s.floating);return A!==H.width||R!==H.height?{reset:{rects:!0}}:{}}}),options:[e,t]}},ew=(e,t)=>{var n;return{...(void 0===(n=e)&&(n={}),{name:"hide",options:n,async fn(e){let{rects:t}=e,{strategy:r="referenceHidden",...i}=d(n,e);switch(r){case"referenceHidden":{let n=E(await C(e,{...i,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:L(n)}}}case"escaped":{let n=E(await C(e,{...i,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:L(n)}}}default:return{}}}}),options:[e,t]}},ex=(e,t)=>({...ep(e),options:[e,t]});var eb=n(5171),eA=n(7437),eR=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:i=5,...o}=e;return(0,eA.jsx)(eb.WV.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,eA.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eR.displayName="Arrow";var eC=n(1584),eE=n(5137),eL=n(1336),eS=n(5238),eT="Popper",[eO,eP]=function(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return i.scopeName=e,[function(t,i){let o=r.createContext(i),l=n.length;function a(t){let{scope:n,children:i,...a}=t,f=n?.[e][l]||o,u=r.useMemo(()=>a,Object.values(a));return(0,eA.jsx)(f.Provider,{value:u,children:i})}return n=[...n,i],a.displayName=t+"Provider",[a,function(n,a){let f=a?.[e][l]||o,u=r.useContext(f);if(u)return u;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(i,...t)]}(eT),[ek,eH]=eO(eT),eD=e=>{let{__scopePopper:t,children:n}=e,[i,o]=r.useState(null);return(0,eA.jsx)(ek,{scope:t,anchor:i,onAnchorChange:o,children:n})};eD.displayName=eT;var eN="PopperAnchor",eW=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:i,...o}=e,l=eH(eN,n),a=r.useRef(null),f=(0,eC.e)(t,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,eA.jsx)(eb.WV.div,{...o,ref:f})});eW.displayName=eN;var eM="PopperContent",[ej,eF]=eO(eM),eV=r.forwardRef((e,t)=>{var n,i,a,u,c,s,d,p;let{__scopePopper:h,side:m="bottom",sideOffset:g=0,align:v="center",alignOffset:y=0,arrowPadding:w=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:A=0,sticky:R="partial",hideWhenDetached:C=!1,updatePositionStrategy:E="optimized",onPlaced:L,...S}=e,T=eH(eM,h),[O,P]=r.useState(null),H=(0,eC.e)(t,e=>P(e)),[D,N]=r.useState(null),W=(0,eS.t)(D),M=null!==(d=null==W?void 0:W.width)&&void 0!==d?d:0,j=null!==(p=null==W?void 0:W.height)&&void 0!==p?p:0,F="number"==typeof A?A:{top:0,right:0,bottom:0,left:0,...A},V=Array.isArray(b)?b:[b],z=V.length>0,_={padding:F,boundary:V.filter(e$),altBoundary:z},{refs:B,floatingStyles:$,placement:I,isPositioned:X,middlewareData:Z}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:u,open:c}=e,[s,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(i);eu(p,i)||h(i);let[m,g]=r.useState(null),[v,y]=r.useState(null),w=r.useCallback(e=>{e!==R.current&&(R.current=e,g(e))},[]),x=r.useCallback(e=>{e!==C.current&&(C.current=e,y(e))},[]),b=l||m,A=a||v,R=r.useRef(null),C=r.useRef(null),E=r.useRef(s),L=null!=u,S=ed(u),T=ed(o),O=ed(c),P=r.useCallback(()=>{if(!R.current||!C.current)return;let e={placement:t,strategy:n,middleware:p};T.current&&(e.platform=T.current),el(R.current,C.current,e).then(e=>{let t={...e,isPositioned:!1!==O.current};k.current&&!eu(E.current,t)&&(E.current=t,ea.flushSync(()=>{d(t)}))})},[p,t,n,T,O]);ef(()=>{!1===c&&E.current.isPositioned&&(E.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let k=r.useRef(!1);ef(()=>(k.current=!0,()=>{k.current=!1}),[]),ef(()=>{if(b&&(R.current=b),A&&(C.current=A),b&&A){if(S.current)return S.current(b,A,P);P()}},[b,A,P,S,L]);let H=r.useMemo(()=>({reference:R,floating:C,setReference:w,setFloating:x}),[w,x]),D=r.useMemo(()=>({reference:b,floating:A}),[b,A]),N=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!D.floating)return e;let t=es(D.floating,s.x),r=es(D.floating,s.y);return f?{...e,transform:"translate("+t+"px, "+r+"px)",...ec(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,f,D.floating,s.x,s.y]);return r.useMemo(()=>({...s,update:P,refs:H,elements:D,floatingStyles:N}),[s,P,H,D,N])}({strategy:"fixed",placement:m+("center"!==v?"-"+v:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=q(e),h=a||u?[...p?Y(p):[],...Y(t)]:[];h.forEach(e=>{a&&e.addEventListener("scroll",n,{passive:!0}),u&&e.addEventListener("resize",n)});let m=p&&s?function(e,t){let n,r=null,i=k(e);function a(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function u(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),a();let{left:d,top:p,width:h,height:m}=e.getBoundingClientRect();if(c||t(),!h||!m)return;let g=f(p),v=f(i.clientWidth-(d+h)),y={rootMargin:-g+"px "+-v+"px "+-f(i.clientHeight-(p+m))+"px "+-f(d)+"px",threshold:l(0,o(1,s))||1},w=!0;function x(e){let t=e[0].intersectionRatio;if(t!==s){if(!w)return u();t?u(!1,t):n=setTimeout(()=>{u(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...y,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,y)}r.observe(e)}(!0),a}(p,n):null,g=-1,v=null;c&&(v=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&v&&(v.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=v)||e.observe(t)})),n()}),p&&!d&&v.observe(p),v.observe(t));let y=d?K(e):null;return d&&function t(){let r=K(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;h.forEach(e=>{a&&e.removeEventListener("scroll",n),u&&e.removeEventListener("resize",n)}),null==m||m(),null==(e=v)||e.disconnect(),v=null,d&&cancelAnimationFrame(i)}}(...t,{animationFrame:"always"===E})},elements:{reference:T.anchor},middleware:[eh({mainAxis:g+j,alignmentAxis:y}),x&&em({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?eg():void 0,..._}),x&&ev({..._}),ey({..._,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:i}=e,{width:o,height:l}=n.reference,a=t.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),D&&ex({element:D,padding:w}),eY({arrowWidth:M,arrowHeight:j}),C&&ew({strategy:"referenceHidden",..._})]}),[G,J]=eI(I),Q=(0,eE.W)(L);(0,eL.b)(()=>{X&&(null==Q||Q())},[X,Q]);let U=null===(n=Z.arrow)||void 0===n?void 0:n.x,ee=null===(i=Z.arrow)||void 0===i?void 0:i.y,et=(null===(a=Z.arrow)||void 0===a?void 0:a.centerOffset)!==0,[en,er]=r.useState();return(0,eL.b)(()=>{O&&er(window.getComputedStyle(O).zIndex)},[O]),(0,eA.jsx)("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:X?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:en,"--radix-popper-transform-origin":[null===(u=Z.transformOrigin)||void 0===u?void 0:u.x,null===(c=Z.transformOrigin)||void 0===c?void 0:c.y].join(" "),...(null===(s=Z.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,eA.jsx)(ej,{scope:h,placedSide:G,onArrowChange:N,arrowX:U,arrowY:ee,shouldHideArrow:et,children:(0,eA.jsx)(eb.WV.div,{"data-side":G,"data-align":J,...S,ref:H,style:{...S.style,animation:X?void 0:"none"}})})})});eV.displayName=eM;var ez="PopperArrow",e_={top:"bottom",right:"left",bottom:"top",left:"right"},eB=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,i=eF(ez,n),o=e_[i.placedSide];return(0,eA.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,eA.jsx)(eR,{...r,ref:t,style:{...r.style,display:"block"}})})});function e$(e){return null!==e}eB.displayName=ez;var eY=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:u}=t,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=c?0:e.arrowWidth,d=c?0:e.arrowHeight,[p,h]=eI(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(o=null===(r=u.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+s/2,v=(null!==(l=null===(i=u.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,y="",w="";return"bottom"===p?(y=c?m:"".concat(g,"px"),w="".concat(-d,"px")):"top"===p?(y=c?m:"".concat(g,"px"),w="".concat(f.floating.height+d,"px")):"right"===p?(y="".concat(-d,"px"),w=c?m:"".concat(v,"px")):"left"===p&&(y="".concat(f.floating.width+d,"px"),w=c?m:"".concat(v,"px")),{data:{x:y,y:w}}}});function eI(e){let[t,n="center"]=e.split("-");return[t,n]}var eX=eD,eq=eW,eZ=eV,eG=eB},5238:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(2265),i=n(1336);function o(e){let[t,n]=r.useState(void 0);return(0,i.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);