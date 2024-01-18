var Te=Object.defineProperty;var je=(i,e,t)=>e in i?Te(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ne=(i,e,t)=>(je(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function m(){}function Ie(i,e){for(const t in e)i[t]=e[t];return i}function Ve(i){return i()}function fe(){return Object.create(null)}function W(i){i.forEach(Ve)}function Ee(i){return typeof i=="function"}function L(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function Re(i){return Object.keys(i).length===0}function Ge(i,...e){if(i==null){for(const n of e)n(void 0);return m}const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function A(i,e,t){i.$$.on_destroy.push(Ge(e,t))}function Fe(i,e,t,n){if(i){const r=Ze(i,e,t,n);return i[0](r)}}function Ze(i,e,t,n){return i[1]&&n?Ie(t.ctx.slice(),i[1](n(e))):t.ctx}function qe(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let c=0;c<o;c+=1)l[c]=e.dirty[c]|r[c];return l}return e.dirty|r}return e.dirty}function ze(i,e,t,n,r,l){if(r){const o=Ze(e,t,n,l);i.p(o,r)}}function Ue(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function u(i,e){i.appendChild(e)}function v(i,e,t){i.insertBefore(e,t||null)}function $(i){i.parentNode&&i.parentNode.removeChild(i)}function Ne(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function p(i){return document.createElement(i)}function C(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function V(i){return document.createTextNode(i)}function y(){return V(" ")}function ce(){return V("")}function s(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function De(i){return Array.from(i.childNodes)}function T(i,e){e=""+e,i.data!==e&&(i.data=e)}let Q;function J(i){Q=i}function Ae(){if(!Q)throw new Error("Function called outside component initialization");return Q}function Ke(i){Ae().$$.on_mount.push(i)}function Je(i){Ae().$$.on_destroy.push(i)}const z=[],ae=[];let U=[];const ue=[],Qe=Promise.resolve();let se=!1;function We(){se||(se=!0,Qe.then(Pe))}function le(i){U.push(i)}const ie=new Set;let F=0;function Pe(){if(F!==0)return;const i=Q;do{try{for(;F<z.length;){const e=z[F];F++,J(e),Xe(e.$$)}}catch(e){throw z.length=0,F=0,e}for(J(null),z.length=0,F=0;ae.length;)ae.pop()();for(let e=0;e<U.length;e+=1){const t=U[e];ie.has(t)||(ie.add(t),t())}U.length=0}while(z.length);for(;ue.length;)ue.pop()();se=!1,ie.clear(),J(i)}function Xe(i){if(i.fragment!==null){i.update(),W(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(le)}}function Ye(i){const e=[],t=[];U.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),U=e}const ee=new Set;let R;function Be(){R={r:0,c:[],p:R}}function Oe(){R.r||W(R.c),R=R.p}function k(i,e){i&&i.i&&(ee.delete(i),i.i(e))}function x(i,e,t,n){if(i&&i.o){if(ee.has(i))return;ee.add(i),R.c.push(()=>{ee.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function te(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function N(i){i&&i.c()}function M(i,e,t){const{fragment:n,after_update:r}=i.$$;n&&n.m(e,t),le(()=>{const l=i.$$.on_mount.map(Ve).filter(Ee);i.$$.on_destroy?i.$$.on_destroy.push(...l):W(l),i.$$.on_mount=[]}),r.forEach(le)}function S(i,e){const t=i.$$;t.fragment!==null&&(Ye(t.after_update),W(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function et(i,e){i.$$.dirty[0]===-1&&(z.push(i),We(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function E(i,e,t,n,r,l,o=null,c=[-1]){const f=Q;J(i);const a=i.$$={fragment:null,ctx:[],props:l,update:m,not_equal:r,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:fe(),dirty:c,skip_bound:!1,root:e.target||f.$$.root};o&&o(a.root);let d=!1;if(a.ctx=t?t(i,e.props||{},(g,_,...H)=>{const b=H.length?H[0]:_;return a.ctx&&r(a.ctx[g],a.ctx[g]=b)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](b),d&&et(i,g)),_}):[],a.update(),d=!0,W(a.before_update),a.fragment=n?n(a.ctx):!1,e.target){if(e.hydrate){const g=De(e.target);a.fragment&&a.fragment.l(g),g.forEach($)}else a.fragment&&a.fragment.c();e.intro&&k(i.$$.fragment),M(i,e.target,e.anchor),Pe()}J(f)}class Z{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){S(this,1),this.$destroy=m}$on(e,t){if(!Ee(t))return m;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(tt);const q=[];function P(i,e=m){let t;const n=new Set;function r(c){if(L(i,c)&&(i=c,t)){const f=!q.length;for(const a of n)a[1](),q.push(a,i);if(f){for(let a=0;a<q.length;a+=2)q[a][0](q[a+1]);q.length=0}}}function l(c){r(c(i))}function o(c,f=m){const a=[c,f];return n.add(a),n.size===1&&(t=e(r,l)||m),c(i),()=>{n.delete(a),n.size===0&&t&&(t(),t=null)}}return{set:r,update:l,subscribe:o}}const de=P(!1),oe=P(0),he=P(0),pe=P(0),ge=P(0),me=P(0),$e=P({engine:!1,seatbelt:!1,lights:!1,locked:!1}),K=new Map,nt=i=>{const{action:e,payload:t}=i.data,n=K.get(e);n&&n.forEach(r=>r(t))};window.addEventListener("message",nt);function B(i,e){const t=K.get(i)||[];t.push(e),K.set(i,t),Je(()=>{const n=K.get(i)||[];K.set(i,n.filter(r=>r!==e))})}function it(i){let e,t,n,r,l;return{c(){e=C("svg"),t=C("path"),n=C("path"),s(t,"d","M35.0001 161C16.8747 146.424 5.25115 125.248 2.6335 102.034C0.0158512 78.8208 6.61362 55.4274 21.0054 36.8938C35.3972 18.3602 56.4312 6.16982 79.576 2.94888C102.721 -0.272048 126.124 5.73424 144.744 19.6738"),s(t,"stroke","white"),s(t,"stroke-opacity","0.35"),s(t,"stroke-width","4"),s(t,"stroke-linecap","round"),s(n,"d","M35.0001 161C16.8747 146.424 5.25115 125.248 2.6335 102.034C0.0158512 78.8208 6.61362 55.4274 21.0054 36.8938C35.3972 18.3602 56.4312 6.16982 79.576 2.94888C102.721 -0.272048 126.124 5.73424 144.744 19.6738"),s(n,"stroke","white"),s(n,"stroke-width","4"),s(n,"stroke-linecap","round"),s(n,"pathLength",101),s(n,"stroke-dasharray",101),s(n,"style",r=`opacity: ${i[0]<1?0:1}`),s(n,"stroke-dashoffset",l=i[0]>=99?0:100-i[0]/100*100),s(e,"class","mr-[5.093vh]"),s(e,"width","13.611vh"),s(e,"height","15.093vh"),s(e,"viewBox","0 0 147 163"),s(e,"fill","none"),s(e,"xmlns","http://www.w3.org/2000/svg")},m(o,c){v(o,e,c),u(e,t),u(e,n)},p(o,[c]){c&1&&r!==(r=`opacity: ${o[0]<1?0:1}`)&&s(n,"style",r),c&1&&l!==(l=o[0]>=99?0:100-o[0]/100*100)&&s(n,"stroke-dashoffset",l)},i:m,o:m,d(o){o&&$(e)}}}function rt(i,e,t){let n,r,l;return A(i,he,o=>t(1,r=o)),A(i,oe,o=>t(2,l=o)),B("ui:speedometerSpeed",o=>{oe.set(o.speed),he.set(o.maxSpeed)}),i.$$.update=()=>{i.$$.dirty&6&&t(0,n=l/r*100)},[n,r,l]}class st extends Z{constructor(e){super(),E(this,e,rt,it,L,{})}}function lt(i){let e;return{c(){e=V(i[0])},m(t,n){v(t,e,n)},p(t,n){n&1&&T(e,t[0])},d(t){t&&$(e)}}}function ot(i){let e,t;return{c(){e=p("span"),e.textContent="0",t=V(i[0]),s(e,"class","opacity-35")},m(n,r){v(n,e,r),v(n,t,r)},p(n,r){r&1&&T(t,n[0])},d(n){n&&($(e),$(t))}}}function ct(i){let e,t;return{c(){e=p("span"),e.textContent="00",t=V(i[0]),s(e,"class","opacity-35")},m(n,r){v(n,e,r),v(n,t,r)},p(n,r){r&1&&T(t,n[0])},d(n){n&&($(e),$(t))}}}function ft(i){let e;return{c(){e=p("span"),e.textContent="000",s(e,"class","opacity-35")},m(t,n){v(t,e,n)},p:m,d(t){t&&$(e)}}}function at(i){let e,t,n,r;function l(f,a){return f[0]<1?ft:f[0]<10?ct:f[0]<100?ot:lt}let o=l(i),c=o(i);return{c(){e=p("div"),t=p("h1"),c.c(),n=y(),r=p("h2"),r.textContent="KM/h",s(t,"class","text-white text-[4.815vh] font-semibold leading-none"),s(r,"class","leading-none text-white opacity-50 text-[1.296vh]"),s(e,"class","absolute flex flex-col items-center mr-[1.481vh]")},m(f,a){v(f,e,a),u(e,t),c.m(t,null),u(e,n),u(e,r)},p(f,[a]){o===(o=l(f))&&c?c.p(f,a):(c.d(1),c=o(f),c&&(c.c(),c.m(t,null)))},i:m,o:m,d(f){f&&$(e),c.d()}}}function ut(i,e,t){let n;return A(i,oe,r=>t(0,n=r)),[n]}class dt extends Z{constructor(e){super(),E(this,e,ut,at,L,{})}}function ht(i){let e,t,n,r,l,o,c,f,a,d,g,_,H;return{c(){e=p("div"),t=C("svg"),n=C("path"),r=C("path"),c=y(),f=p("i"),d=y(),g=p("p"),_=V(i[0]),H=V("%"),s(n,"d","M2.02918 2.43584C11.24 10.8749 18.5451 21.1813 23.4572 32.6673C28.3693 44.1532 30.7753 56.5547 30.5149 69.0443"),s(n,"stroke","white"),s(n,"stroke-opacity","0.35"),s(n,"stroke-width","4"),s(n,"stroke-linecap","round"),s(r,"style",l=`opacity: ${i[0]<1?"0":"1"}`),s(r,"d","M2.02918 2.43584C11.24 10.8749 18.5451 21.1813 23.4572 32.6673C28.3693 44.1532 30.7753 56.5547 30.5149 69.0443"),s(r,"stroke","white"),s(r,"stroke-width","4"),s(r,"stroke-linecap","round"),s(r,"pathLength",101),s(r,"stroke-dasharray",101),s(r,"stroke-dashoffset",o=100-i[0]/100*100),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"width","3.056vh"),s(t,"height","6.667vh"),s(t,"viewBox","0 0 33 72"),s(t,"fill","none"),s(f,"class",a=`text-white fa-solid fa-gas-pump text-[1.389vh] ${i[0]<1?"animate-pulse":""}`),s(g,"class","text-[1.296vh] text-white font-light"),s(e,"class","absolute top-[2.269vh] right-[1.481vh] flex flex-col items-end gap-[0.556vh]")},m(b,h){v(b,e,h),u(e,t),u(t,n),u(t,r),u(e,c),u(e,f),u(e,d),u(e,g),u(g,_),u(g,H)},p(b,[h]){h&1&&l!==(l=`opacity: ${b[0]<1?"0":"1"}`)&&s(r,"style",l),h&1&&o!==(o=100-b[0]/100*100)&&s(r,"stroke-dashoffset",o),h&1&&a!==(a=`text-white fa-solid fa-gas-pump text-[1.389vh] ${b[0]<1?"animate-pulse":""}`)&&s(f,"class",a),h&1&&T(_,b[0])},i:m,o:m,d(b){b&&$(e)}}}function pt(i,e,t){let n;return A(i,pe,r=>t(0,n=r)),B("ui:speedometerGas",r=>{pe.set(r)}),[n]}class gt extends Z{constructor(e){super(),E(this,e,pt,ht,L,{})}}function mt(i){let e,t,n,r,l,o,c,f,a,d,g,_,H,b,h,w,O,j,X,Y;return{c(){e=p("div"),t=C("svg"),n=C("path"),l=y(),o=C("svg"),c=C("path"),a=y(),d=C("svg"),g=C("g"),_=C("path"),H=C("defs"),b=C("clipPath"),h=C("rect"),O=y(),j=C("svg"),X=C("path"),s(n,"d","M5.83333 3.33337V5.00004H8.33333V6.66671H5.83333L4.16667 8.33337V10.8334H2.5V8.33337H0.833332V15H2.5V12.5H4.16667V15H6.66667L8.33333 16.6667H15V13.3334H16.6667V15.8334H19.1667V7.50004H16.6667V10H15V6.66671H10V5.00004H12.5V3.33337H5.83333Z"),s(n,"fill","white"),s(t,"style",r=`opacity: ${i[0].engine?"1":"0.35"}`),s(t,"width","1.481vh"),s(t,"height","1.481vh"),s(t,"viewBox","0 0 20 20"),s(t,"fill","none"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(c,"d","M10.1417 2C10.5837 2 11.0076 2.17559 11.3202 2.48816C11.6327 2.80072 11.8083 3.22464 11.8083 3.66667C11.8083 4.59167 11.0667 5.33333 10.1417 5.33333C9.69964 5.33333 9.27572 5.15774 8.96316 4.84518C8.65059 4.53262 8.475 4.10869 8.475 3.66667C8.475 3.22464 8.65059 2.80072 8.96316 2.48816C9.27572 2.17559 9.69964 2 10.1417 2ZM10.4667 12.6583C11.6504 12.6537 12.8333 12.7233 14.0083 12.8667C14.0583 10.6 13.8583 8.6 13.475 7.83333C13.3667 7.60833 13.2167 7.41667 13.0583 7.25L6.33333 13.0167C7.46667 12.8333 8.89167 12.6583 10.4667 12.6583ZM6.35833 14.5C6.46667 15.95 6.68333 17.4167 7.03333 18.6667H8.75833C8.51667 17.9333 8.34167 17.075 8.20833 16.1667C8.20833 16.1667 10.1417 15.8 12.075 16.1667C11.9417 17.075 11.7667 17.9333 11.525 18.6667H13.25C13.6167 17.375 13.8333 15.8417 13.9417 14.325C12.7886 14.1856 11.6281 14.116 10.4667 14.1167C8.85833 14.1167 7.45833 14.2917 6.35833 14.5ZM10.1417 6.16667C10.1417 6.16667 7.64167 6.16667 6.80833 7.83333C6.525 8.4 6.34167 9.625 6.28333 11.1333L11.7417 6.45C10.9167 6.16667 10.1417 6.16667 10.1417 6.16667ZM15.6167 5.05833L14.6667 3.95L11.7417 6.45833C12.2 6.61667 12.6833 6.86667 13.0583 7.25L15.6167 5.05833ZM17.3667 13.525C17.2917 13.5 16.0917 13.1083 14.0083 12.8667C14 13.3417 13.975 13.8333 13.9417 14.325C15.8167 14.5583 16.8917 14.9167 16.9083 14.9167L17.3667 13.525ZM6.28333 11.1333L3 13.95L3.74167 15.1833C3.75833 15.175 4.725 14.8 6.35833 14.5C6.26667 13.325 6.24167 12.1667 6.28333 11.1333Z"),s(c,"fill","white"),s(o,"style",f=`opacity: ${i[0].seatbelt?"1":"0.35"}`),s(o,"width","1.481vh"),s(o,"height","1.481vh"),s(o,"viewBox","0 0 20 20"),s(o,"fill","none"),s(o,"xmlns","http://www.w3.org/2000/svg"),s(_,"fill-rule","evenodd"),s(_,"clip-rule","evenodd"),s(_,"d","M6.16667 4.83333C6.71002 4.10886 7.4146 3.52084 8.22459 3.11584C9.03458 2.71085 9.92774 2.5 10.8333 2.5H15C15.663 2.5 16.2989 2.76339 16.7678 3.23223C17.2366 3.70107 17.5 4.33696 17.5 5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V11.1108C2.5 10.2093 2.79241 9.33207 3.33333 8.61083L6.16667 4.83333ZM10.8333 4.16667C10.1865 4.16667 9.54851 4.31727 8.96994 4.60655C8.39138 4.89584 7.88811 5.31585 7.5 5.83333L5 9.16667H15.8333V5C15.8333 4.77899 15.7455 4.56702 15.5893 4.41074C15.433 4.25446 15.221 4.16667 15 4.16667H10.8333ZM12.5 11.6667C12.279 11.6667 12.067 11.7545 11.9107 11.9107C11.7545 12.067 11.6667 12.279 11.6667 12.5C11.6667 12.721 11.7545 12.933 11.9107 13.0893C12.067 13.2455 12.279 13.3333 12.5 13.3333H13.3333C13.5543 13.3333 13.7663 13.2455 13.9226 13.0893C14.0789 12.933 14.1667 12.721 14.1667 12.5C14.1667 12.279 14.0789 12.067 13.9226 11.9107C13.7663 11.7545 13.5543 11.6667 13.3333 11.6667H12.5Z"),s(_,"fill","white"),s(g,"clip-path","url(#clip0_165_14)"),s(h,"width","20"),s(h,"height","20"),s(h,"fill","white"),s(b,"id","clip0_165_14"),s(d,"style",w=`opacity: ${i[0].locked==2?"1":"0.35"}`),s(d,"width","1.481vh"),s(d,"height","1.481vh"),s(d,"viewBox","0 0 20 20"),s(d,"fill","none"),s(d,"xmlns","http://www.w3.org/2000/svg"),s(X,"d","M10.2917 3.80005C7.125 3.80005 7.125 15.2 10.2917 15.2C13.4583 15.2 17.4167 13.0625 17.4167 9.50005C17.4167 5.93755 13.4583 3.80005 10.2917 3.80005ZM10.3708 13.6167C10.0542 13.3 9.5 11.875 9.5 9.50005C9.5 7.12505 10.0542 5.70005 10.3708 5.38338C12.6667 5.46255 15.8333 6.88755 15.8333 9.50005C15.8333 12.1125 12.6667 13.5375 10.3708 13.6167ZM1.58333 3.95838H7.52083C7.3625 4.27505 7.125 4.59172 7.04583 5.06672C6.96667 5.22505 6.96667 5.38338 6.8875 5.54171H1.58333V3.95838ZM6.33333 8.70838H1.58333V7.12505H6.49167C6.4125 7.60005 6.4125 8.15421 6.33333 8.70838ZM6.8875 13.4584C7.04583 14.0917 7.28333 14.5667 7.6 15.0417H1.6625V13.4584H6.8875ZM6.49167 11.875H1.58333V10.2917H6.33333C6.4125 10.8459 6.4125 11.4 6.49167 11.875Z"),s(X,"fill","white"),s(j,"style",Y=`opacity: ${i[0].lights?"1":"0.35"}`),s(j,"width","1.481vh"),s(j,"height","1.481vh"),s(j,"viewBox","0 0 19 19"),s(j,"fill","none"),s(j,"xmlns","http://www.w3.org/2000/svg"),s(e,"class","flex items-center justify-end w-full pr-[2.593vh] leading-none gap-[1.389vh]")},m(I,G){v(I,e,G),u(e,t),u(t,n),u(e,l),u(e,o),u(o,c),u(e,a),u(e,d),u(d,g),u(g,_),u(d,H),u(H,b),u(b,h),u(e,O),u(e,j),u(j,X)},p(I,[G]){G&1&&r!==(r=`opacity: ${I[0].engine?"1":"0.35"}`)&&s(t,"style",r),G&1&&f!==(f=`opacity: ${I[0].seatbelt?"1":"0.35"}`)&&s(o,"style",f),G&1&&w!==(w=`opacity: ${I[0].locked==2?"1":"0.35"}`)&&s(d,"style",w),G&1&&Y!==(Y=`opacity: ${I[0].lights?"1":"0.35"}`)&&s(j,"style",Y)},i:m,o:m,d(I){I&&$(e)}}}function $t(i,e,t){let n;return A(i,$e,r=>t(0,n=r)),B("ui:speedometerStates",r=>{$e.set(r)}),[n]}class vt extends Z{constructor(e){super(),E(this,e,$t,mt,L,{})}}function _t(i){let e;return{c(){e=V(i[0])},m(t,n){v(t,e,n)},p(t,n){n&1&&T(e,t[0])},d(t){t&&$(e)}}}function wt(i){let e;return{c(){e=V("R")},m(t,n){v(t,e,n)},p:m,d(t){t&&$(e)}}}function bt(i){let e=i[0]-1+"",t;return{c(){t=V(e)},m(n,r){v(n,t,r)},p(n,r){r&1&&e!==(e=n[0]-1+"")&&T(t,e)},d(n){n&&$(t)}}}function yt(i){let e;return{c(){e=V(i[0])},m(t,n){v(t,e,n)},p(t,n){n&1&&T(e,t[0])},d(t){t&&$(e)}}}function Ct(i){let e;return{c(){e=V("R")},m(t,n){v(t,e,n)},p:m,d(t){t&&$(e)}}}function kt(i){let e=i[0]+1+"",t;return{c(){t=V(e)},m(n,r){v(n,t,r)},p(n,r){r&1&&e!==(e=n[0]+1+"")&&T(t,e)},d(n){n&&$(t)}}}function xt(i){let e;return{c(){e=V("1")},m(t,n){v(t,e,n)},p:m,d(t){t&&$(e)}}}function Ht(i){let e,t,n,r,l,o;function c(w,O){return w[0]>1?bt:w[0]==1?wt:_t}let f=c(i),a=f(i);function d(w,O){return w[0]==0?Ct:yt}let g=d(i),_=g(i);function H(w,O){return w[0]<1?xt:kt}let b=H(i),h=b(i);return{c(){e=p("div"),t=p("p"),a.c(),n=y(),r=p("p"),_.c(),l=y(),o=p("p"),h.c(),s(t,"class","text-[#b13b3b] font-extrabold text-[1.111vh]"),s(r,"class","text-[#f33] font-bold text-[1.296vh]"),s(o,"class","text-[#b13b3b] font-extrabold text-[1.111vh]"),s(e,"class","absolute left-[36.5%] [transform:translate(-50%,0) top-[2.315vh] flex items-center gap-[0.556vh]")},m(w,O){v(w,e,O),u(e,t),a.m(t,null),u(e,n),u(e,r),_.m(r,null),u(e,l),u(e,o),h.m(o,null)},p(w,[O]){f===(f=c(w))&&a?a.p(w,O):(a.d(1),a=f(w),a&&(a.c(),a.m(t,null))),g===(g=d(w))&&_?_.p(w,O):(_.d(1),_=g(w),_&&(_.c(),_.m(r,null))),b===(b=H(w))&&h?h.p(w,O):(h.d(1),h=b(w),h&&(h.c(),h.m(o,null)))},i:m,o:m,d(w){w&&$(e),a.d(),_.d(),h.d()}}}function Lt(i,e,t){let n;return A(i,me,r=>t(0,n=r)),B("ui:speedometerGear",r=>{me.set(r)}),[n]}class Mt extends Z{constructor(e){super(),E(this,e,Lt,Ht,L,{})}}function St(i){let e,t,n,r,l,o,c,f;return{c(){e=p("div"),t=C("svg"),n=C("circle"),r=C("circle"),c=y(),f=p("i"),s(n,"cx","18"),s(n,"cy","18"),s(n,"r","17"),s(n,"stroke","white"),s(n,"stroke-opacity","0.2"),s(n,"stroke-width","2"),s(r,"style",l=`opacity: ${i[0]<1?0:1}`),s(r,"cx","18"),s(r,"cy","18"),s(r,"r","17"),s(r,"stroke","white"),s(r,"stroke-width","2"),s(r,"pathLength",101),s(r,"stroke-dasharray",101),s(r,"stroke-dashoffset",o=100-i[0]/100*100),s(t,"width","3.333vh"),s(t,"height","3.333vh"),s(t,"viewBox","0 0 36 36"),s(t,"fill","none"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(f,"class","absolute fa-solid fa-wrench text-[1.111vh] text-white"),s(e,"class","absolute top-[0] right-[0] bg-red h-[3.333vh] w-[3.333vh] grid place-items-center")},m(a,d){v(a,e,d),u(e,t),u(t,n),u(t,r),u(e,c),u(e,f)},p(a,[d]){d&1&&l!==(l=`opacity: ${a[0]<1?0:1}`)&&s(r,"style",l),d&1&&o!==(o=100-a[0]/100*100)&&s(r,"stroke-dashoffset",o)},i:m,o:m,d(a){a&&$(e)}}}function Vt(i,e,t){let n;return A(i,ge,r=>t(0,n=r)),B("ui:speedometerEngine",r=>{ge.set(r)}),[n]}class Et extends Z{constructor(e){super(),E(this,e,Vt,St,L,{})}}function ve(i){let e,t,n,r,l,o,c,f,a,d,g,_,H,b;return n=new st({}),l=new gt({}),c=new dt({}),a=new vt({}),g=new Mt({}),H=new Et({}),{c(){e=p("section"),t=p("div"),N(n.$$.fragment),r=y(),N(l.$$.fragment),o=y(),N(c.$$.fragment),f=y(),N(a.$$.fragment),d=y(),N(g.$$.fragment),_=y(),N(H.$$.fragment),s(t,"class","relative grid place-items-center"),s(e,"class","absolute right-[3.333vh] bottom-[7.407vh] overflow-visible")},m(h,w){v(h,e,w),u(e,t),M(n,t,null),u(t,r),M(l,t,null),u(t,o),M(c,t,null),u(t,f),M(a,t,null),u(t,d),M(g,t,null),u(t,_),M(H,t,null),b=!0},i(h){b||(k(n.$$.fragment,h),k(l.$$.fragment,h),k(c.$$.fragment,h),k(a.$$.fragment,h),k(g.$$.fragment,h),k(H.$$.fragment,h),b=!0)},o(h){x(n.$$.fragment,h),x(l.$$.fragment,h),x(c.$$.fragment,h),x(a.$$.fragment,h),x(g.$$.fragment,h),x(H.$$.fragment,h),b=!1},d(h){h&&$(e),S(n),S(l),S(c),S(a),S(g),S(H)}}}function Zt(i){let e,t,n=i[0]&&ve();return{c(){n&&n.c(),e=ce()},m(r,l){n&&n.m(r,l),v(r,e,l),t=!0},p(r,[l]){r[0]?n?l&1&&k(n,1):(n=ve(),n.c(),k(n,1),n.m(e.parentNode,e)):n&&(Be(),x(n,1,1,()=>{n=null}),Oe())},i(r){t||(k(n),t=!0)},o(r){x(n),t=!1},d(r){r&&$(e),n&&n.d(r)}}}function Nt(i,e,t){let n;return A(i,de,r=>t(0,n=r)),B("ui:speedometerVisibility",r=>{de.set(r)}),[n]}class At extends Z{constructor(e){super(),E(this,e,Nt,Zt,L,{})}}const _e=P(""),we=P({current:"Falando",active:!1}),be=P([0,0]);function Pt(i){let e,t,n,r,l;return{c(){e=p("div"),t=p("div"),t.innerHTML='<i class="text-white fa-solid fa-location-arrow text-[0.926vh]"></i>',n=y(),r=p("p"),l=V(i[0]),s(t,"class","grid h-[2.963vh] w-[2.963vh] rounded-full bg-main place-items-center"),s(r,"class","font-bold leading-none text-white opacity-80 text-[1.204vh]"),s(e,"class","h-[2.963vh] bg-neutral-800 bg-opacity-50 pr-[1.111vh] flex items-center rounded-full gap-[1.111vh]")},m(o,c){v(o,e,c),u(e,t),u(e,n),u(e,r),u(r,l)},p(o,[c]){c&1&&T(l,o[0])},i:m,o:m,d(o){o&&$(e)}}}function Bt(i,e,t){let n;return A(i,_e,r=>t(0,n=r)),B("ui:updateStreet",r=>{_e.set(r)}),[n]}class Ot extends Z{constructor(e){super(),E(this,e,Bt,Pt,L,{})}}function Tt(i){let e,t,n,r,l=`${String(i[0][0]).padStart(2,"0")}:${String(i[0][1]).padStart(2,"0")}`,o;return{c(){e=p("div"),t=p("div"),t.innerHTML='<i class="text-white fa-solid fa-clock-three text-[1.204vh] overflow-visible"></i>',n=y(),r=p("p"),o=V(l),s(t,"class","grid h-[2.963vh] w-[2.963vh] rounded-full bg-main place-items-center"),s(r,"class","font-bold leading-none text-white opacity-80 text-[1.204vh]"),s(e,"class","h-[2.963vh] bg-neutral-800 bg-opacity-50 pr-[1.111vh] flex items-center rounded-full gap-[1.111vh]")},m(c,f){v(c,e,f),u(e,t),u(e,n),u(e,r),u(r,o)},p(c,[f]){f&1&&l!==(l=`${String(c[0][0]).padStart(2,"0")}:${String(c[0][1]).padStart(2,"0")}`)&&T(o,l)},i:m,o:m,d(c){c&&$(e)}}}function jt(i,e,t){let n;return A(i,be,r=>t(0,n=r)),B("ui:updateTime",r=>{be.set(r)}),[n]}class It extends Z{constructor(e){super(),E(this,e,jt,Tt,L,{})}}function Rt(i){let e,t,n,r,l,o,c=i[0].current+"",f;return{c(){e=p("div"),t=p("div"),n=p("i"),l=y(),o=p("p"),f=V(c),s(n,"class",r=`text-white ${i[0].active?"fa-solid":"fa-light"} fa-microphone text-[1.204vh] overflow-visible`),s(t,"class","grid h-[2.963vh] w-[2.963vh] rounded-full bg-main place-items-center"),s(o,"class","font-bold leading-none text-white opacity-80 text-[1.204vh]"),s(e,"class","h-[2.963vh] bg-neutral-800 bg-opacity-50 pr-[1.111vh] flex items-center rounded-full gap-[1.111vh]")},m(a,d){v(a,e,d),u(e,t),u(t,n),u(e,l),u(e,o),u(o,f)},p(a,[d]){d&1&&r!==(r=`text-white ${a[0].active?"fa-solid":"fa-light"} fa-microphone text-[1.204vh] overflow-visible`)&&s(n,"class",r),d&1&&c!==(c=a[0].current+"")&&T(f,c)},i:m,o:m,d(a){a&&$(e)}}}function Gt(i,e,t){let n;return A(i,we,r=>t(0,n=r)),B("ui:updateVoip",r=>{we.set(r)}),[n]}class Ft extends Z{constructor(e){super(),E(this,e,Gt,Rt,L,{})}}function qt(i){let e,t,n,r,l,o,c;return t=new Ot({}),r=new Ft({}),o=new It({}),{c(){e=p("section"),N(t.$$.fragment),n=y(),N(r.$$.fragment),l=y(),N(o.$$.fragment),s(e,"class","absolute top-[3.333vh] right-[3.333vh] flex gap-[0.741vh]")},m(f,a){v(f,e,a),M(t,e,null),u(e,n),M(r,e,null),u(e,l),M(o,e,null),c=!0},p:m,i(f){c||(k(t.$$.fragment,f),k(r.$$.fragment,f),k(o.$$.fragment,f),c=!0)},o(f){x(t.$$.fragment,f),x(r.$$.fragment,f),x(o.$$.fragment,f),c=!1},d(f){f&&$(e),S(t),S(r),S(o)}}}class zt extends Z{constructor(e){super(),E(this,e,null,qt,L,{})}}const ye=P(0),Ce=P(0);function ke(i,e,t){const n=i.slice();return n[1]=e[t],n[3]=t,n}function xe(i){let e,t,n,r;return{c(){e=p("div"),t=p("div"),r=y(),s(t,"class","h-full rounded-[0.093vh] transition-duration-50 bg-health"),s(t,"style",n=`
          width: ${i[0]>i[3]*(100/5)?i[0]<(i[3]+1)*(100/5)?(i[0]-i[3]*(100/5))*5:100:0}%`),s(e,"class","w-full h-full rounded-[0.093vh] bg-health bg-opacity-30")},m(l,o){v(l,e,o),u(e,t),u(e,r)},p(l,o){o&1&&n!==(n=`
          width: ${l[0]>l[3]*(100/5)?l[0]<(l[3]+1)*(100/5)?(l[0]-l[3]*(100/5))*5:100:0}%`)&&s(t,"style",n)},d(l){l&&$(e)}}}function Ut(i){let e,t,n,r,l,o=te(Array(5).fill(0)),c=[];for(let f=0;f<o.length;f+=1)c[f]=xe(ke(i,o,f));return{c(){e=p("div"),t=C("svg"),n=C("path"),r=y(),l=p("div");for(let f=0;f<c.length;f+=1)c[f].c();s(n,"d","M1.02266 5.30832L4.90488 8.77595C5.06602 8.91984 5.27871 9 5.5 9C5.72129 9 5.93398 8.91984 6.09512 8.77595L9.97734 5.30832C10.6305 4.72661 11 3.91057 11 3.05754V2.93832C11 1.50153 9.91504 0.276447 8.43477 0.0400639C7.45508 -0.116154 6.4582 0.190116 5.75781 0.860209L5.5 1.10687L5.24219 0.860209C4.5418 0.190116 3.54492 -0.116154 2.56523 0.0400639C1.08496 0.276447 0 1.50153 0 2.93832V3.05754C0 3.91057 0.369531 4.72661 1.02266 5.30832Z"),s(n,"class","fill-health"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"width","1.019vh"),s(t,"height","0.833vh"),s(t,"viewBox","0 0 11 9"),s(t,"fill","none"),s(l,"class","h-[0.741vh] w-[18.519vh] flex gap-[0.278vh]"),s(e,"class","flex items-center gap-[0.833vh]")},m(f,a){v(f,e,a),u(e,t),u(t,n),u(e,r),u(e,l);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(l,null)},p(f,[a]){if(a&1){o=te(Array(5).fill(0));let d;for(d=0;d<o.length;d+=1){const g=ke(f,o,d);c[d]?c[d].p(g,a):(c[d]=xe(g),c[d].c(),c[d].m(l,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=o.length}},i:m,o:m,d(f){f&&$(e),Ne(c,f)}}}function Dt(i,e,t){let n;return A(i,ye,r=>t(0,n=r)),B("ui:updateHealth",r=>{ye.set(r)}),[n]}class Kt extends Z{constructor(e){super(),E(this,e,Dt,Ut,L,{})}}function He(i,e,t){const n=i.slice();return n[1]=e[t],n[3]=t,n}function Le(i){let e,t,n,r,l,o=te(Array(5).fill(0)),c=[];for(let f=0;f<o.length;f+=1)c[f]=Me(He(i,o,f));return{c(){e=p("div"),t=C("svg"),n=C("path"),r=y(),l=p("div");for(let f=0;f<c.length;f+=1)c[f].c();s(n,"d","M4.5 0C4.58625 0 4.6725 0.0196387 4.75125 0.0569521L8.28187 1.62608C8.69437 1.80872 9.00187 2.23488 8.99999 2.74941C8.99062 4.69756 8.22562 8.26198 4.995 9.88217C4.68187 10.0393 4.31813 10.0393 4.005 9.88217C0.774382 8.26198 0.00938351 4.69756 8.52841e-06 2.74941C-0.00186647 2.23488 0.305633 1.80872 0.718132 1.62608L4.25063 0.0569521C4.3275 0.0196387 4.41375 0 4.5 0Z"),s(n,"class","fill-shield"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"width","0.833vh"),s(t,"height","0.926vh"),s(t,"viewBox","0 0 9 10"),s(t,"fill","none"),s(l,"class","h-[0.741vh] w-[18.519vh] flex gap-[0.278vh]"),s(e,"class","flex items-center gap-[0.95vh]")},m(f,a){v(f,e,a),u(e,t),u(t,n),u(e,r),u(e,l);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(l,null)},p(f,a){if(a&1){o=te(Array(5).fill(0));let d;for(d=0;d<o.length;d+=1){const g=He(f,o,d);c[d]?c[d].p(g,a):(c[d]=Me(g),c[d].c(),c[d].m(l,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=o.length}},d(f){f&&$(e),Ne(c,f)}}}function Me(i){let e,t,n,r;return{c(){e=p("div"),t=p("div"),r=y(),s(t,"class","h-full rounded-[0.093vh] transition-duration-50 bg-shield"),s(t,"style",n=`
              width: ${i[0]>i[3]*(100/5)?i[0]<(i[3]+1)*(100/5)?(i[0]-i[3]*(100/5))*5:100:0}%`),s(e,"class","w-full h-full rounded-[0.093vh] bg-shield bg-opacity-30")},m(l,o){v(l,e,o),u(e,t),u(e,r)},p(l,o){o&1&&n!==(n=`
              width: ${l[0]>l[3]*(100/5)?l[0]<(l[3]+1)*(100/5)?(l[0]-l[3]*(100/5))*5:100:0}%`)&&s(t,"style",n)},d(l){l&&$(e)}}}function Jt(i){let e,t=i[0]>0&&Le(i);return{c(){t&&t.c(),e=ce()},m(n,r){t&&t.m(n,r),v(n,e,r)},p(n,[r]){n[0]>0?t?t.p(n,r):(t=Le(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:m,o:m,d(n){n&&$(e),t&&t.d(n)}}}function Qt(i,e,t){let n;return A(i,Ce,r=>t(0,n=r)),B("ui:updateShield",r=>{Ce.set(r)}),[n]}class Wt extends Z{constructor(e){super(),E(this,e,Qt,Jt,L,{})}}function Xt(i){let e,t,n,r,l;return t=new Wt({}),r=new Kt({}),{c(){e=p("section"),N(t.$$.fragment),n=y(),N(r.$$.fragment),s(e,"class","absolute bottom-[3.519vh] right-[3.333vh] flex flex-col gap-[0.741vh] items-end")},m(o,c){v(o,e,c),M(t,e,null),u(e,n),M(r,e,null),l=!0},p:m,i(o){l||(k(t.$$.fragment,o),k(r.$$.fragment,o),l=!0)},o(o){x(t.$$.fragment,o),x(r.$$.fragment,o),l=!1},d(o){o&&$(e),S(t),S(r)}}}class Yt extends Z{constructor(e){super(),E(this,e,null,Xt,L,{})}}function en(i){let e,t,n,r,l,o,c;return t=new At({}),r=new zt({}),o=new Yt({}),{c(){e=p("main"),N(t.$$.fragment),n=y(),N(r.$$.fragment),l=y(),N(o.$$.fragment)},m(f,a){v(f,e,a),M(t,e,null),u(e,n),M(r,e,null),u(e,l),M(o,e,null),c=!0},p:m,i(f){c||(k(t.$$.fragment,f),k(r.$$.fragment,f),k(o.$$.fragment,f),c=!0)},o(f){x(t.$$.fragment,f),x(r.$$.fragment,f),x(o.$$.fragment,f),c=!1},d(f){f&&$(e),S(t),S(r),S(o)}}}class tn extends Z{constructor(e){super(),E(this,e,null,en,L,{})}}const re=P(!1);async function nn(i,e={}){const t={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},n=window.GetParentResourceName?window.GetParentResourceName():"env-browser";return await(await fetch(`https://${n}/${i}`,t)).json()}function Se(i){let e;const t=i[2].default,n=Fe(t,i,i[1],null);return{c(){n&&n.c()},m(r,l){n&&n.m(r,l),e=!0},p(r,l){n&&n.p&&(!e||l&2)&&ze(n,t,r,r[1],e?qe(t,r[1],l,null):Ue(r[1]),null)},i(r){e||(k(n,r),e=!0)},o(r){x(n,r),e=!1},d(r){n&&n.d(r)}}}function rn(i){let e,t,n=i[0]&&Se(i);return{c(){n&&n.c(),e=ce()},m(r,l){n&&n.m(r,l),v(r,e,l),t=!0},p(r,[l]){r[0]?n?(n.p(r,l),l&1&&k(n,1)):(n=Se(r),n.c(),k(n,1),n.m(e.parentNode,e)):n&&(Be(),x(n,1,1,()=>{n=null}),Oe())},i(r){t||(k(n),t=!0)},o(r){x(n),t=!1},d(r){r&&$(e),n&&n.d(r)}}}function sn(i,e,t){let{$$slots:n={},$$scope:r}=e,l;return re.subscribe(o=>{t(0,l=o)}),B("ui:visibility",o=>{re.set(o)}),Ke(()=>{const o=c=>{l&&["Escape"].includes(c.code)&&(nn("hideUI"),re.set(!1))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}),i.$$set=o=>{"$$scope"in o&&t(1,r=o.$$scope)},[l,r,n]}class ln extends Z{constructor(e){super(),E(this,e,sn,rn,L,{})}}const on=()=>!window.invokeNative,D=(i,e=1e3)=>{if(on())for(const t of i)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:t.action,payload:t.payload}}))},e)};function cn(i){let e,t;return e=new tn({}),{c(){N(e.$$.fragment)},m(n,r){M(e,n,r),t=!0},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){S(e,n)}}}function fn(i){let e,t;return e=new ln({props:{$$slots:{default:[cn]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment)},m(n,r){M(e,n,r),t=!0},p(n,[r]){const l={};r&1&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){S(e,n)}}}function an(i){return D([{action:"ui:visibility",payload:!0}]),D([{action:"ui:updateVoip",payload:{current:"Falando",active:!0}}]),D([{action:"ui:updateStreet",payload:"Rua Teste AAAA"}]),D([{action:"ui:updateTime",payload:[1,20]}]),D([{action:"ui:speedometerVisibility",payload:!0}]),[]}class un extends Z{constructor(e){super(),E(this,e,an,fn,L,{})}}new un({target:document.getElementById("app")});
