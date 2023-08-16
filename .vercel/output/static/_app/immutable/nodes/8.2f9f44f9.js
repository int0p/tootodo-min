import{f as Y}from"../chunks/fetch-refresh.dd216df5.js";import{e as J}from"../chunks/index.5e2a9a64.js";import{S as M,i as U,s as V,b as C,h as F,q as I,z as O,w as q,x as z,d as j,e as k,t as w,j as D,f as y,g as b,k as P,l as h,m as $,p as A,r as g,A as S,X}from"../chunks/index.62fc0439.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.fe36e70c.js";import"../chunks/Modal.svelte_svelte_type_style_lang.10e906d4.js";import"../chunks/moment.a354566a.js";import"../chunks/paths.079c38ab.js";import{I as B}from"../chunks/ItemPage.49193770.js";import{T as G}from"../chunks/Player.d3fd5d62.js";function R(a){switch(a){case"R":return"®";case"P":return"℗";case"C":return"©";default:return a}}const H=async({fetch:a,params:e,depends:o,route:t})=>{o(`app:${t.id}`);const r=await Y(a,`/spotify/api/spotify/albums/${e.id}`);if(!r.ok)throw J(r.status,"Failed to load album!");const l=await r.json();let u=null;if(l.images.length>0){const m=await a(`../api/average-color?${new URLSearchParams({image:l.images[0].url}).toString()}`);m.ok&&(u=(await m.json()).color)}return{album:l,title:l.name,color:u}},ie=Object.freeze(Object.defineProperty({__proto__:null,load:H},Symbol.toStringTag,{value:"Module"}));function T(a,e,o){const t=a.slice();return t[4]=e[o],t}function L(a){let e,o=R(a[4].type)+"",t,r,l=a[4].text+"",u,m;return{c(){e=k("p"),t=w(o),r=j(),u=w(l),m=j(),this.h()},l(f){e=y(f,"P",{class:!0});var p=b(e);t=P(p,o),r=D(p),u=P(p,l),m=D(p),p.forEach(h),this.h()},h(){$(e,"class","copyright svelte-1tkolgf")},m(f,p){A(f,e,p),g(e,t),g(e,r),g(e,u),g(e,m)},p(f,p){p&4&&o!==(o=R(f[4].type)+"")&&S(t,o),p&4&&l!==(l=f[4].text+"")&&S(u,l)},d(f){f&&h(e)}}}function K(a){var v;let e,o,t,r,l=new Date(a[2].release_date).toLocaleDateString("en",{dateStyle:"medium"})+"",u,m,f;e=new G({props:{tracks:a[2].tracks.items,userPlaylists:(v=a[0].userAllPlaylists)==null?void 0:v.filter(a[3])}});let p=a[2].copyrights,i=[];for(let s=0;s<p.length;s+=1)i[s]=L(T(a,p,s));return{c(){C(e.$$.fragment),o=j(),t=k("div"),r=k("p"),u=w(l),m=j();for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){F(e.$$.fragment,s),o=D(s),t=y(s,"DIV",{class:!0});var n=b(t);r=y(n,"P",{class:!0});var c=b(r);u=P(c,l),c.forEach(h),m=D(n);for(let d=0;d<i.length;d+=1)i[d].l(n);n.forEach(h),this.h()},h(){$(r,"class","date svelte-1tkolgf"),$(t,"class","credits svelte-1tkolgf")},m(s,n){I(e,s,n),A(s,o,n),A(s,t,n),g(t,r),g(r,u),g(t,m);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(t,null);f=!0},p(s,n){var d;const c={};if(n&4&&(c.tracks=s[2].tracks.items),n&1&&(c.userPlaylists=(d=s[0].userAllPlaylists)==null?void 0:d.filter(s[3])),e.$set(c),(!f||n&4)&&l!==(l=new Date(s[2].release_date).toLocaleDateString("en",{dateStyle:"medium"})+"")&&S(u,l),n&4){p=s[2].copyrights;let _;for(_=0;_<p.length;_+=1){const E=T(s,p,_);i[_]?i[_].p(E,n):(i[_]=L(E),i[_].c(),i[_].m(t,null))}for(;_<i.length;_+=1)i[_].d(1);i.length=p.length}},i(s){f||(O(e.$$.fragment,s),f=!0)},o(s){q(e.$$.fragment,s),f=!1},d(s){z(e,s),s&&h(o),s&&h(t),X(i,s)}}}function Q(a){let e,o,t=a[2].artists.map(N).join(", ")+"",r,l,u,m=new Date(a[2].release_date).getFullYear()+"",f,p,i,v=`${a[2].total_tracks} Track${a[2].total_tracks>1?"s":""}`,s;return{c(){e=k("p"),o=k("span"),r=w(t),l=j(),u=k("span"),f=w(m),p=j(),i=k("span"),s=w(v),this.h()},l(n){e=y(n,"P",{class:!0,slot:!0});var c=b(e);o=y(c,"SPAN",{class:!0});var d=b(o);r=P(d,t),d.forEach(h),l=D(c),u=y(c,"SPAN",{class:!0});var _=b(u);f=P(_,m),_.forEach(h),p=D(c),i=y(c,"SPAN",{class:!0});var E=b(i);s=P(E,v),E.forEach(h),c.forEach(h),this.h()},h(){$(o,"class","artists svelte-1tkolgf"),$(u,"class","date svelte-1tkolgf"),$(i,"class","tracks-count svelte-1tkolgf"),$(e,"class","meta svelte-1tkolgf"),$(e,"slot","meta")},m(n,c){A(n,e,c),g(e,o),g(o,r),g(e,l),g(e,u),g(u,f),g(e,p),g(e,i),g(i,s)},p(n,c){c&4&&t!==(t=n[2].artists.map(N).join(", ")+"")&&S(r,t),c&4&&m!==(m=new Date(n[2].release_date).getFullYear()+"")&&S(f,m),c&4&&v!==(v=`${n[2].total_tracks} Track${n[2].total_tracks>1?"s":""}`)&&S(s,v)},d(n){n&&h(e)}}}function W(a){let e,o;return e=new B({props:{title:a[2].name,type:a[2].album_type,color:a[1],image:a[2].images.length>0?a[2].images[0].url:void 0,$$slots:{meta:[Q],default:[K]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){I(e,t,r),o=!0},p(t,[r]){const l={};r&4&&(l.title=t[2].name),r&4&&(l.type=t[2].album_type),r&2&&(l.color=t[1]),r&4&&(l.image=t[2].images.length>0?t[2].images[0].url:void 0),r&133&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){o||(O(e.$$.fragment,t),o=!0)},o(t){q(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}const N=a=>a.name;function Z(a,e,o){let t,r,{data:l}=e;const u=m=>{var f;return m.owner.id===((f=l.user)==null?void 0:f.id)};return a.$$set=m=>{"data"in m&&o(0,l=m.data)},a.$$.update=()=>{a.$$.dirty&1&&o(2,t=l.album),a.$$.dirty&1&&o(1,r=l.color)},[l,r,t,u]}class ce extends M{constructor(e){super(),U(this,e,Z,W,V,{data:0})}}export{ce as component,ie as universal};