import{S as R,i as T,s as U,e as v,d as P,t as w,f as k,g as b,j as V,k as E,l as m,m as f,p as y,r as p,v as W,w as D,y as X,z as S,A as z,b as Y,h as Z,q as x,M as G,x as ee,V as J}from"./index.9f73b2d7.js";import{M as te}from"./music.a8b10a2a.js";import"./Modal.svelte_svelte_type_style_lang.7c9bde1f.js";function le(i){let e,l,a;return l=new te({props:{"aria-hidden":"true",focusable:"false",color:"var(--light-gray)"}}),{c(){e=v("div"),Y(l.$$.fragment),this.h()},l(t){e=k(t,"DIV",{class:!0});var s=b(e);Z(l.$$.fragment,s),s.forEach(m),this.h()},h(){f(e,"class","cover-placeholder svelte-1sl8kn8")},m(t,s){y(t,e,s),x(l,e,null),a=!0},p:G,i(t){a||(S(l.$$.fragment,t),a=!0)},o(t){D(l.$$.fragment,t),a=!1},d(t){t&&m(e),ee(l)}}}function se(i){let e,l,a;return{c(){e=v("img"),this.h()},l(t){e=k(t,"IMG",{loading:!0,src:!0,alt:!0,class:!0}),this.h()},h(){f(e,"loading","lazy"),J(e.src,l=i[0].images[0].url)||f(e,"src",l),f(e,"alt",a=i[0].type+" cover for "+i[0].name),f(e,"class","svelte-1sl8kn8")},m(t,s){y(t,e,s)},p(t,s){s&1&&!J(e.src,l=t[0].images[0].url)&&f(e,"src",l),s&1&&a!==(a=t[0].type+" cover for "+t[0].name)&&f(e,"alt",a)},i:G,o:G,d(t){t&&m(e)}}}function K(i){let e,l=i[0].artists.map(Q).join(", ")+"",a;return{c(){e=v("p"),a=w(l),this.h()},l(t){e=k(t,"P",{class:!0});var s=b(e);a=E(s,l),s.forEach(m),this.h()},h(){f(e,"class","truncate-1 svelte-1sl8kn8")},m(t,s){y(t,e,s),p(e,a)},p(t,s){s&1&&l!==(l=t[0].artists.map(Q).join(", ")+"")&&z(a,l)},d(t){t&&m(e)}}}function L(i){let e,l=i[0].description+"",a;return{c(){e=v("p"),a=w(l),this.h()},l(t){e=k(t,"P",{class:!0});var s=b(e);a=E(s,l),s.forEach(m),this.h()},h(){f(e,"class","truncate-2 svelte-1sl8kn8")},m(t,s){y(t,e,s),p(e,a)},p(t,s){s&1&&l!==(l=t[0].description+"")&&z(a,l)},d(t){t&&m(e)}}}function O(i){let e,l=i[1].format(i[0].followers.total)+"",a,t;return{c(){e=v("p"),a=w(l),t=w(" Followers"),this.h()},l(s){e=k(s,"P",{class:!0});var o=b(e);a=E(o,l),t=E(o," Followers"),o.forEach(m),this.h()},h(){f(e,"class","truncate-1 svelte-1sl8kn8")},m(s,o){y(s,e,o),p(e,a),p(e,t)},p(s,o){o&1&&l!==(l=s[1].format(s[0].followers.total)+"")&&z(a,l)},d(s){s&&m(e)}}}function ae(i){let e,l,a,t,s,o,$=i[0].name+"",F,I,M,A,j,q,C,h;const H=[se,le],d=[];function N(r,n){return r[0].images.length>0?0:1}l=N(i),a=d[l]=H[l](i);let c=i[0].type==="album"&&K(i),u=i[0].type==="playlist"&&L(i),_=i[0].type==="artist"&&O(i);return{c(){e=v("div"),a.c(),t=P(),s=v("h4"),o=v("a"),F=w($),A=P(),c&&c.c(),j=P(),u&&u.c(),q=P(),_&&_.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var n=b(e);a.l(n),t=V(n),s=k(n,"H4",{class:!0});var g=b(s);o=k(g,"A",{href:!0,title:!0,class:!0});var B=b(o);F=E(B,$),B.forEach(m),g.forEach(m),A=V(n),c&&c.l(n),j=V(n),u&&u.l(n),q=V(n),_&&_.l(n),n.forEach(m),this.h()},h(){f(o,"href",I="/spotify/"+i[0].type+"/"+i[0].id),f(o,"title",M=i[0].name),f(o,"class","svelte-1sl8kn8"),f(s,"class","truncate-1 svelte-1sl8kn8"),f(e,"class",C="card "+i[0].type+" svelte-1sl8kn8")},m(r,n){y(r,e,n),d[l].m(e,null),p(e,t),p(e,s),p(s,o),p(o,F),p(e,A),c&&c.m(e,null),p(e,j),u&&u.m(e,null),p(e,q),_&&_.m(e,null),h=!0},p(r,[n]){let g=l;l=N(r),l===g?d[l].p(r,n):(W(),D(d[g],1,1,()=>{d[g]=null}),X(),a=d[l],a?a.p(r,n):(a=d[l]=H[l](r),a.c()),S(a,1),a.m(e,t)),(!h||n&1)&&$!==($=r[0].name+"")&&z(F,$),(!h||n&1&&I!==(I="/spotify/"+r[0].type+"/"+r[0].id))&&f(o,"href",I),(!h||n&1&&M!==(M=r[0].name))&&f(o,"title",M),r[0].type==="album"?c?c.p(r,n):(c=K(r),c.c(),c.m(e,j)):c&&(c.d(1),c=null),r[0].type==="playlist"?u?u.p(r,n):(u=L(r),u.c(),u.m(e,q)):u&&(u.d(1),u=null),r[0].type==="artist"?_?_.p(r,n):(_=O(r),_.c(),_.m(e,null)):_&&(_.d(1),_=null),(!h||n&1&&C!==(C="card "+r[0].type+" svelte-1sl8kn8"))&&f(e,"class",C)},i(r){h||(S(a),h=!0)},o(r){D(a),h=!1},d(r){r&&m(e),d[l].d(),c&&c.d(),u&&u.d(),_&&_.d()}}}const Q=i=>i.name;function ie(i,e,l){let{item:a}=e;const t=Intl.NumberFormat("en",{notation:"compact"});return i.$$set=s=>{"item"in s&&l(0,a=s.item)},[a,t]}class fe extends R{constructor(e){super(),T(this,e,ie,ae,U,{item:0})}}export{fe as C};
