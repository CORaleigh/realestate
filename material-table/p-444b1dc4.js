let t=0,e=!1;const n=window,l=document,s={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},o=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),r=new WeakMap,c=t=>r.get(t),a=(t,e)=>r.set(e.s=t,e),i=(t,e)=>e in t,u=t=>console.error(t),f=new Map,m=new Map,p=[],d=[],$=[],b=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&s.t?h(y):s.raf(y))},w=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(s){u(s)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},y=()=>{t++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){u(e)}t.length=0})(p);const n=2==(6&s.t)?performance.now()+10*Math.ceil(t*(1/22)):1/0;w(d,n),w($,n),d.length>0&&($.push(...d),d.length=0),(e=p.length+d.length+$.length>0)?s.raf(y):t=0},h=t=>Promise.resolve().then(t),_=b(d,!0),j={},g=t=>"object"==(t=typeof t)||"function"===t,v=()=>n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_material_table("./p-d8631f0b.js").then(()=>{s.o=n.__stencil_cssshim}),S=async()=>{s.o=n.__stencil_cssshim;const t=new RegExp("/material-table(\\.esm)?\\.js($|\\?|#)"),e=Array.from(l.querySelectorAll("script")).find(e=>t.test(e.src)||"material-table"===e.getAttribute("data-stencil-namespace")),o=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,n.location.href));return M(t.href),window.customElements||await __sc_import_material_table("./p-d0882b30.js"),Object.assign(Object.assign({},o),{resourcesUrl:t.href})}},M=t=>{const e=(()=>`__sc_import_${"material-table".replace(/\s|-/g,"_")}`)();try{n[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(s){const o=new Map;n[e]=s=>{const r=new URL(s,t).href;let c=o.get(r);if(!c){const t=l.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${e}.m = m;`],{type:"application/javascript"})),c=new Promise(l=>{t.onload=()=>{l(n[e].m),t.remove()}}),o.set(r,c),l.head.appendChild(t)}return c}}},O=new WeakMap,U=t=>"sc-"+t,L=(t,e,...n)=>{let l=null,s=!1,o=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!g(l))&&(l=String(l)),s&&o?r[r.length-1].i+=l:r.push(s?R(null,l):l),o=s)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const a=R(t,null);return a.u=e,r.length>0&&(a.p=r),a},R=(t,e)=>({t:0,$:t,i:e,h:null,p:null,u:null}),k={},P=(t,e,l,o,r,c)=>{if(l===o)return;let a=i(t,e),u=e.toLowerCase();if("class"===e){const e=t.classList,n=x(l),s=x(o);e.remove(...n.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!n.includes(t)))}else if(a||"o"!==e[0]||"n"!==e[1]){const n=g(o);if((a||n&&null!==o)&&!r)try{if(t.tagName.includes("-"))t[e]=o;else{let n=null==o?"":o;"list"===e?a=!1:null!=l&&t[e]==n||(t[e]=n)}}catch(f){}null==o||!1===o?t.removeAttribute(e):(!a||4&c||r)&&!n&&t.setAttribute(e,o=!0===o?"":o)}else e="-"===e[2]?e.slice(3):i(n,u)?u.slice(2):u[2]+e.slice(3),l&&s.rel(t,e,l,!1),o&&s.ael(t,e,o,!1)},C=/\s/,x=t=>t?t.split(C):[],E=(t,e,n,l)=>{const s=11===e.h.nodeType&&e.h.host?e.h.host:e.h,o=t&&t.u||j,r=e.u||j;for(l in o)l in r||P(s,l,o[l],void 0,n,e.t);for(l in r)P(s,l,o[l],r[l],n,e.t)},A=(t,e,n)=>{let s,o,r=e.p[n],c=0;if(null!==r.i)s=r.h=l.createTextNode(r.i);else if(s=r.h=l.createElement(r.$),E(null,r,!1),r.p)for(c=0;c<r.p.length;++c)(o=A(t,r,c))&&s.appendChild(o);return s},F=(t,e,n,l,s,o)=>{let r,c=t;for(;s<=o;++s)l[s]&&(r=A(null,n,s))&&(l[s].h=r,c.insertBefore(r,e))},T=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.h.remove()},W=(t,e)=>t.$===e.$,q=(t,e)=>{const n=e.h=t.h,l=t.p,s=e.p;null===e.i?(E(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,a=e[0],i=e[c],u=l.length-1,f=l[0],m=l[u];for(;o<=c&&r<=u;)null==a?a=e[++o]:null==i?i=e[--c]:null==f?f=l[++r]:null==m?m=l[--u]:W(a,f)?(q(a,f),a=e[++o],f=l[++r]):W(i,m)?(q(i,m),i=e[--c],m=l[--u]):W(a,m)?(q(a,m),t.insertBefore(a.h,i.h.nextSibling),a=e[++o],m=l[--u]):W(i,f)?(q(i,f),t.insertBefore(i.h,a.h),i=e[--c],f=l[++r]):(s=A(e&&e[r],n,r),f=l[++r],s&&a.h.parentNode.insertBefore(s,a.h));o>c?F(t,null==l[u+1]?null:l[u+1].h,n,l,r,u):r>u&&T(e,o,c)})(n,l,e,s):null!==s?(null!==t.i&&(n.textContent=""),F(n,null,e,s,0,s.length-1)):null!==l&&T(l,0,l.length-1)):t.i!==e.i&&(n.data=e.i)},B=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},D=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const s=e.s,o=()=>H(t,e,n,s,l);return B(e,e.j),G(void 0,()=>_(o))},H=(t,e,n,s,o)=>{const r=t["s-rc"];o&&((t,e)=>{((t,e)=>{let n=U(e.g),s=m.get(n);if(t=11===t.nodeType?t:l,s)if("string"==typeof s){let e,o=O.get(t=t.head||t);o||O.set(t,o=new Set),o.has(n)||((e=l.createElement("style")).innerHTML=s,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s])})(t.getRootNode(),e)})(t,n);try{((t,e,n,l)=>{const s=e.v||R(null,null),o=(t=>t&&t.$===k)(l)?l:L(null,null,l);o.$=null,o.t|=4,e.v=o,o.h=s.h=t,q(s,o)})(t,e,0,s.render())}catch(c){u(c)}e.t&=-17,e.t|=2,r&&(r.forEach(t=>t()),t["s-rc"]=void 0);{const l=t["s-p"],s=()=>N(t,e,n);0===l.length?s():(Promise.all(l).then(s),e.t|=4,l.length=0)}},N=(t,e,n)=>{const l=e.s,s=e.j;64&e.t||(e.t|=64,t.classList.add("hydrated"),z(l,"componentDidLoad"),e.S(t),s||V()),e._&&(e._(),e._=void 0),512&e.t&&h(()=>D(t,e,n,!1)),e.t&=-517},V=()=>{l.documentElement.classList.add("hydrated"),s.t|=2},z=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){u(l)}},G=(t,e)=>t&&t.then?t.then(e):e(),I=(t,e,n)=>{if(e.M){t.watchers&&(e.O=t.watchers);const l=Object.entries(e.M),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>c(t).U.get(e))(this,t)},set(n){((t,e,n,l)=>{const s=c(this),o=s.L,r=s.U.get(e),a=s.t,i=s.s;if(!((n=((t,e)=>null==t||g(t)?t:2&e?parseFloat(t):1&e?String(t):t)(n,l.M[e][0]))===r||8&a&&void 0!==r)&&(s.U.set(e,n),i)){if(l.O&&128&a){const t=l.O[e];t&&t.forEach(t=>{try{i[t](n,r,e)}catch(l){u(l)}})}2==(18&a)&&D(o,s,l,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){s.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},J=(t,e={})=>{const a=[],i=e.exclude||[],p=l.head,d=n.customElements,$=p.querySelector("meta[charset]"),b=l.createElement("style"),w=[];let y,_=!0;Object.assign(s,e),s.l=new URL(e.resourcesUrl||"./",l.baseURI).href,e.syncQueue&&(s.t|=4),t.forEach(t=>t[1].forEach(e=>{const n={t:e[0],g:e[1],M:e[2],R:e[3]};n.M=e[2],n.O={};const l=n.g,p=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,L:t,U:new Map};e.k=new Promise(t=>e.S=t),t["s-p"]=[],t["s-rc"]=[],r.set(t,e)})(t=this)}connectedCallback(){y&&(clearTimeout(y),y=null),_?w.push(this):s.jmp(()=>((t,e)=>{if(0==(1&s.t)){const n=()=>{},l=c(t);if(!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){B(l,l.j=e);break}}e.M&&Object.entries(e.M).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),h(()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){e.t|=32;{if((s=(t=>{const e=t.g.replace(/-/g,"_"),n=t.P,l=f.get(n);return l?l[e]:__sc_import_material_table(`./${n}.entry.js`).then(t=>(f.set(n,t),t[e]),u)})(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.O=s.watchers,I(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(a){u(a)}e.t&=-9,e.t|=128,t()}const t=U(n.g);if(!m.has(t)&&s.style){const e=()=>{};((t,e,n)=>{let l=m.get(t);o&&n?(l=l||new CSSStyleSheet).replace(e):l=e,m.set(t,l)})(t,s.style,!!(1&n.t)),e()}}const r=e.j,c=()=>D(t,e,n,!0);r&&r["s-rc"]?r["s-rc"].push(c):c()})(t,l,e))}n()}})(this,n))}disconnectedCallback(){s.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=c(t);2==(18&n.t)&&D(t,n,e,!1)}})(this,n)}componentOnReady(){return c(this).k}};n.P=t[0],i.includes(l)||d.get(l)||(a.push(l),d.define(l,I(p,n,1)))})),b.innerHTML=a+"{visibility:hidden}.hydrated{visibility:inherit}",b.setAttribute("data-styles",""),p.insertBefore(b,$?$.nextSibling:p.firstChild),_=!1,w.length>0?w.forEach(t=>t.connectedCallback()):s.jmp(()=>y=setTimeout(V,30,"timeout"))},K=(t,e,n)=>{const l=Q(t);return{emit:t=>l.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},Q=t=>c(t).L;export{v as a,J as b,K as c,L as h,S as p,a as r};