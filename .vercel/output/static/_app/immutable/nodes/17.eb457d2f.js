import{f as V}from"../chunks/fetch-refresh.dd216df5.js";import{r as B}from"../chunks/index.5e2a9a64.js";import{S as D,i as N,s as O,J as k,p as m,M as S,l as _,e as d,t as I,d as y,f as v,g,k as M,j as b,m as h,r as p,X as R,A as z,V as E}from"../chunks/index.9f73b2d7.js";const G=async({fetch:o,url:t})=>{const e=t.searchParams.get("q");if(e)throw B(307,`/spotify/search/${e}`);const s=await V(o,"/spotify/api/spotify/browse/categories?limit=50");return{title:"Search",categories:s.ok?s.json():void 0}},K=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function q(o,t,e){const s=o.slice();return s[2]=t[e],s}function P(o){let t,e,s,i,c=o[0],r=[];for(let a=0;a<c.length;a+=1)r[a]=C(q(o,c,a));return{c(){t=d("h2"),e=I("Browse Categories"),s=y(),i=d("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){t=v(a,"H2",{});var f=g(t);e=M(f,"Browse Categories"),f.forEach(_),s=b(a),i=v(a,"DIV",{class:!0});var l=g(i);for(let n=0;n<r.length;n+=1)r[n].l(l);l.forEach(_),this.h()},h(){h(i,"class","items svelte-u8wwpj")},m(a,f){m(a,t,f),p(t,e),m(a,s,f),m(a,i,f);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(i,null)},p(a,f){if(f&1){c=a[0];let l;for(l=0;l<c.length;l+=1){const n=q(a,c,l);r[l]?r[l].p(n,f):(r[l]=C(n),r[l].c(),r[l].m(i,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=c.length}},d(a){a&&_(t),a&&_(s),a&&_(i),R(r,a)}}}function A(o){let t,e;return{c(){t=d("img"),this.h()},l(s){t=v(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){E(t.src,e=o[2].icons[0].url)||h(t,"src",e),h(t,"alt",""),h(t,"class","svelte-u8wwpj")},m(s,i){m(s,t,i)},p(s,i){i&1&&!E(t.src,e=s[2].icons[0].url)&&h(t,"src",e)},d(s){s&&_(t)}}}function C(o){let t,e,s,i,c=o[2].name+"",r,a,f,l=o[2].icons.length>0&&A(o);return{c(){t=d("div"),e=d("a"),l&&l.c(),s=y(),i=d("span"),r=I(c),f=y(),this.h()},l(n){t=v(n,"DIV",{class:!0});var u=g(t);e=v(u,"A",{href:!0,class:!0});var w=g(e);l&&l.l(w),s=b(w),i=v(w,"SPAN",{class:!0});var j=g(i);r=M(j,c),j.forEach(_),w.forEach(_),f=b(u),u.forEach(_),this.h()},h(){h(i,"class","truncate-1 svelte-u8wwpj"),h(e,"href",a="/spotify/category/"+o[2].id),h(e,"class","svelte-u8wwpj"),h(t,"class","item svelte-u8wwpj")},m(n,u){m(n,t,u),p(t,e),l&&l.m(e,null),p(e,s),p(e,i),p(i,r),p(t,f)},p(n,u){n[2].icons.length>0?l?l.p(n,u):(l=A(n),l.c(),l.m(e,s)):l&&(l.d(1),l=null),u&1&&c!==(c=n[2].name+"")&&z(r,c),u&1&&a!==(a="/spotify/category/"+n[2].id)&&h(e,"href",a)},d(n){n&&_(t),l&&l.d()}}}function H(o){let t,e=o[0]&&P(o);return{c(){e&&e.c(),t=k()},l(s){e&&e.l(s),t=k()},m(s,i){e&&e.m(s,i),m(s,t,i)},p(s,[i]){s[0]?e?e.p(s,i):(e=P(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:S,o:S,d(s){e&&e.d(s),s&&_(t)}}}function J(o,t,e){let s,{data:i}=t;return o.$$set=c=>{"data"in c&&e(1,i=c.data)},o.$$.update=()=>{var c;o.$$.dirty&2&&e(0,s=(c=i.categories)==null?void 0:c.categories.items)},[s,i]}class L extends D{constructor(t){super(),N(this,t,J,H,O,{data:1})}}export{L as component,K as universal};
