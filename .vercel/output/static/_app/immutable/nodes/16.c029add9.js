import{f as z}from"../chunks/fetch-refresh.dd216df5.js";import{S as U,i as X,s as G,e as w,b as R,f as y,g as b,h as D,l as h,m as v,p as q,q as j,z as g,w as k,x as A,d as P,J as M,j as S,v as B,y as C,t as E,k as I,r as $,A as K,X as Q,M as W}from"../chunks/index.62fc0439.js";import{a as Y}from"../chunks/navigation.a1d25632.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.fe36e70c.js";import"../chunks/Modal.svelte_svelte_type_style_lang.10e906d4.js";import"../chunks/moment.a354566a.js";import"../chunks/index.5e2a9a64.js";import"../chunks/paths.079c38ab.js";import{B as T}from"../chunks/Button.78294429.js";import{C as Z}from"../chunks/Card.6439f086.js";import{I as x}from"../chunks/ItemPage.49193770.js";const ee=async({fetch:i,parent:t})=>{const{user:e}=await t(),n=z(i,"/spotify/api/spotify/me/following?type=artist&limit=6");let o;e!=null&&e.images&&e.images.length>0&&(o=z(i,`/api/average-color?${new URLSearchParams({image:e.images[0].url}).toString()}`));const[l,a]=await Promise.all([n,o]);return{following:l.ok?l.json():void 0,title:e==null?void 0:e.display_name,color:a!=null&&a.ok?a.json().then(s=>s.color):null}},$e=Object.freeze(Object.defineProperty({__proto__:null,load:ee},Symbol.toStringTag,{value:"Module"}));function O(i,t,e){const n=i.slice();return n[7]=t[e],n}function H(i){let t,e,n,o,l,a;return l=new T({props:{disabled:i[0],element:"button",$$slots:{default:[te]},$$scope:{ctx:i}}}),l.$on("click",i[6]),{c(){t=w("div"),e=w("p"),n=E("Failed to load data."),o=P(),R(l.$$.fragment),this.h()},l(s){t=y(s,"DIV",{class:!0});var f=b(t);e=y(f,"P",{});var r=b(e);n=I(r,"Failed to load data."),r.forEach(h),o=S(f),D(l.$$.fragment,f),f.forEach(h),this.h()},h(){v(t,"class","fail svelte-1qd7pe4")},m(s,f){q(s,t,f),$(t,e),$(e,n),$(t,o),j(l,t,null),a=!0},p(s,f){const r={};f&1&&(r.disabled=s[0]),f&1024&&(r.$$scope={dirty:f,ctx:s}),l.$set(r)},i(s){a||(g(l.$$.fragment,s),a=!0)},o(s){k(l.$$.fragment,s),a=!1},d(s){s&&h(t),A(l)}}}function te(i){let t;return{c(){t=E("Retry")},l(e){t=I(e,"Retry")},m(e,n){q(e,t,n)},d(e){e&&h(t)}}}function J(i){let t,e,n,o,l,a,s,f,r,u=i[1].artists.items,c=[];for(let m=0;m<u.length;m+=1)c[m]=L(O(i,u,m));const V=m=>k(c[m],1,1,()=>{c[m]=null});return f=new T({props:{element:"a",variant:"outline",href:"/spotify/profile/following",$$slots:{default:[le]},$$scope:{ctx:i}}}),{c(){t=w("div"),e=w("h2"),n=E("Following"),o=P(),l=w("div");for(let m=0;m<c.length;m+=1)c[m].c();a=P(),s=w("div"),R(f.$$.fragment),this.h()},l(m){t=y(m,"DIV",{class:!0});var p=b(t);e=y(p,"H2",{class:!0});var _=b(e);n=I(_,"Following"),_.forEach(h),o=S(p),l=y(p,"DIV",{class:!0});var d=b(l);for(let N=0;N<c.length;N+=1)c[N].l(d);d.forEach(h),a=S(p),s=y(p,"DIV",{class:!0});var F=b(s);D(f.$$.fragment,F),F.forEach(h),p.forEach(h),this.h()},h(){v(e,"class","svelte-1qd7pe4"),v(l,"class","grid-items"),v(s,"class","view-all-button svelte-1qd7pe4"),v(t,"class","following svelte-1qd7pe4")},m(m,p){q(m,t,p),$(t,e),$(e,n),$(t,o),$(t,l);for(let _=0;_<c.length;_+=1)c[_]&&c[_].m(l,null);$(t,a),$(t,s),j(f,s,null),r=!0},p(m,p){if(p&2){u=m[1].artists.items;let d;for(d=0;d<u.length;d+=1){const F=O(m,u,d);c[d]?(c[d].p(F,p),g(c[d],1)):(c[d]=L(F),c[d].c(),g(c[d],1),c[d].m(l,null))}for(B(),d=u.length;d<c.length;d+=1)V(d);C()}const _={};p&1024&&(_.$$scope={dirty:p,ctx:m}),f.$set(_)},i(m){if(!r){for(let p=0;p<u.length;p+=1)g(c[p]);g(f.$$.fragment,m),r=!0}},o(m){c=c.filter(Boolean);for(let p=0;p<c.length;p+=1)k(c[p]);k(f.$$.fragment,m),r=!1},d(m){m&&h(t),Q(c,m),A(f)}}}function L(i){let t,e,n,o;return e=new Z({props:{item:i[7]}}),{c(){t=w("div"),R(e.$$.fragment),n=P(),this.h()},l(l){t=y(l,"DIV",{class:!0});var a=b(t);D(e.$$.fragment,a),n=S(a),a.forEach(h),this.h()},h(){v(t,"class","grid-item")},m(l,a){q(l,t,a),j(e,t,null),$(t,n),o=!0},p(l,a){const s={};a&2&&(s.item=l[7]),e.$set(s)},i(l){o||(g(e.$$.fragment,l),o=!0)},o(l){k(e.$$.fragment,l),o=!1},d(l){l&&h(t),A(e)}}}function le(i){let t,e,n;return{c(){t=E("View All "),e=w("span"),n=E("artists that you are following"),this.h()},l(o){t=I(o,"View All "),e=y(o,"SPAN",{class:!0});var l=b(e);n=I(l,"artists that you are following"),l.forEach(h),this.h()},h(){v(e,"class","visually-hidden")},m(o,l){q(o,t,l),q(o,e,l),$(e,n)},p:W,d(o){o&&h(t),o&&h(e)}}}function ae(i){let t,e,n,o=i[1]===void 0&&H(i),l=i[1]&&i[1].artists.items.length>0&&J(i);return{c(){o&&o.c(),t=P(),l&&l.c(),e=M()},l(a){o&&o.l(a),t=S(a),l&&l.l(a),e=M()},m(a,s){o&&o.m(a,s),q(a,t,s),l&&l.m(a,s),q(a,e,s),n=!0},p(a,s){a[1]===void 0?o?(o.p(a,s),s&2&&g(o,1)):(o=H(a),o.c(),g(o,1),o.m(t.parentNode,t)):o&&(B(),k(o,1,1,()=>{o=null}),C()),a[1]&&a[1].artists.items.length>0?l?(l.p(a,s),s&2&&g(l,1)):(l=J(a),l.c(),g(l,1),l.m(e.parentNode,e)):l&&(B(),k(l,1,1,()=>{l=null}),C())},i(a){n||(g(o),g(l),n=!0)},o(a){k(o),k(l),n=!1},d(a){o&&o.d(a),a&&h(t),l&&l.d(a),a&&h(e)}}}function oe(i){var l,a;let t,e=i[4].format(((a=(l=i[3])==null?void 0:l.followers)==null?void 0:a.total)||0)+"",n,o;return{c(){t=w("span"),n=E(e),o=E(" Followers"),this.h()},l(s){t=y(s,"SPAN",{slot:!0,class:!0});var f=b(t);n=I(f,e),o=I(f," Followers"),f.forEach(h),this.h()},h(){v(t,"slot","meta"),v(t,"class","following-count svelte-1qd7pe4")},m(s,f){q(s,t,f),$(t,n),$(t,o)},p(s,f){var r,u;f&8&&e!==(e=s[4].format(((u=(r=s[3])==null?void 0:r.followers)==null?void 0:u.total)||0)+"")&&K(n,e)},d(s){s&&h(t)}}}function se(i){var o,l,a,s,f;let t,e,n;return e=new x({props:{color:i[2],title:((o=i[3])==null?void 0:o.display_name)||"",image:(l=i[3])!=null&&l.images&&((s=(a=i[3])==null?void 0:a.images)==null?void 0:s.length)>0?i[3].images[0].url:void 0,type:(f=i[3])==null?void 0:f.type,$$slots:{meta:[oe],default:[ae]},$$scope:{ctx:i}}}),{c(){t=w("div"),R(e.$$.fragment),this.h()},l(r){t=y(r,"DIV",{id:!0,class:!0});var u=b(t);D(e.$$.fragment,u),u.forEach(h),this.h()},h(){v(t,"id","profile-page"),v(t,"class","svelte-1qd7pe4")},m(r,u){q(r,t,u),j(e,t,null),n=!0},p(r,[u]){var V,m,p,_,d;const c={};u&4&&(c.color=r[2]),u&8&&(c.title=((V=r[3])==null?void 0:V.display_name)||""),u&8&&(c.image=(m=r[3])!=null&&m.images&&((_=(p=r[3])==null?void 0:p.images)==null?void 0:_.length)>0?r[3].images[0].url:void 0),u&8&&(c.type=(d=r[3])==null?void 0:d.type),u&1035&&(c.$$scope={dirty:u,ctx:r}),e.$set(c)},i(r){n||(g(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){r&&h(t),A(e)}}}function ie(i,t,e){let n,o,l,{data:a}=t,s=!1;const f=Intl.NumberFormat("en",{notation:"compact"}),r=async()=>{e(0,s=!0),await Y(u=>u.pathname==="/spotify/api/spotify/me/following"),e(0,s=!1)};return i.$$set=u=>{"data"in u&&e(5,a=u.data)},i.$$.update=()=>{i.$$.dirty&32&&e(3,n=a.user),i.$$.dirty&32&&e(2,o=a.color),i.$$.dirty&32&&e(1,l=a.following)},[s,l,o,n,f,a,r]}class ve extends U{constructor(t){super(),X(this,t,ie,se,G,{data:5})}}export{ve as component,$e as universal};