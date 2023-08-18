import{e as J}from"../chunks/index.5e2a9a64.js";import{f as x}from"../chunks/fetch-refresh.dd216df5.js";import{S as tt,i as et,s as st,b as R,h as j,q as S,z as $,w as A,x as B,e as k,d as I,f as w,g as b,j as q,l as _,m as v,p as y,r as g,v as F,y as O,t as D,k as P,A as lt,X as H,M as C}from"../chunks/index.9f73b2d7.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.b57464ad.js";import"../chunks/Modal.svelte_svelte_type_style_lang.7c9bde1f.js";import"../chunks/moment.a354566a.js";import"../chunks/chunk-5UWJICAP.5753fd06.js";import"../chunks/paths.cfd798f3.js";import{B as z}from"../chunks/Button.0d438fe4.js";import{C as L}from"../chunks/Card.423691da.js";import{I as it}from"../chunks/ItemPage.8bdff27b.js";import{T as at}from"../chunks/Player.a38f8a14.js";const rt=async({fetch:o,params:t,parent:e,depends:a,route:n})=>{var d;a(`app:${n.id}`);const l=h=>x(o,h),{user:i}=await e(),p=await l(`/spotify/api/spotify/artists/${t.id}`);if(!p.ok)throw J(p.status,"Failed to load artist!");const m=await p.json();let u;((d=m==null?void 0:m.images)==null?void 0:d.length)>0&&(u=l(`/spotify/api/average-color?${new URLSearchParams({image:m==null?void 0:m.images[0].url}).toString()}`));const[c,s,E,r,f]=await Promise.all([l(`/spotify/api/spotify/artists/${t.id}/albums?limit=6&include_groups=album,single`),l(`/spotify/api/spotify/artists/${t.id}/albums?limit=6&include_groups=appears_on`),l(`/spotify/api/spotify/artists/${t.id}/top-tracks?market=${i==null?void 0:i.country}`),l(`/spotify/api/spotify/artists/${t.id}/related-artists`),u]);return{title:m.name,artist:m,artistAlbums:c.ok?c.json():void 0,artistAppearsOn:s.ok?s.json():void 0,artistTopTracks:E.ok?E.json():void 0,artistRelatedArtists:r.ok?r.json():void 0,color:f!=null&&f.ok?f.json().then(h=>h.color):null}},yt=Object.freeze(Object.defineProperty({__proto__:null,load:rt},Symbol.toStringTag,{value:"Module"}));function M(o,t,e){const a=o.slice();return a[9]=t[e],a}function N(o,t,e){const a=o.slice();return a[12]=t[e],a}function U(o,t,e){const a=o.slice();return a[12]=t[e],a}function X(o){var m;let t,e,a,n,l,i,p;return i=new at({props:{tracks:o[4].tracks,userPlaylists:(m=o[0].userAllPlaylists)==null?void 0:m.filter(o[8])}}),{c(){t=k("div"),e=k("div"),a=k("h2"),n=D("Top Tracks"),l=I(),R(i.$$.fragment),this.h()},l(u){t=w(u,"DIV",{class:!0});var c=b(t);e=w(c,"DIV",{class:!0});var s=b(e);a=w(s,"H2",{class:!0});var E=b(a);n=P(E,"Top Tracks"),E.forEach(_),s.forEach(_),l=q(c),j(i.$$.fragment,c),c.forEach(_),this.h()},h(){v(a,"class","svelte-nc0tqw"),v(e,"class","section-title svelte-nc0tqw"),v(t,"class","section svelte-nc0tqw")},m(u,c){y(u,t,c),g(t,e),g(e,a),g(a,n),g(t,l),S(i,t,null),p=!0},p(u,c){var E;const s={};c&16&&(s.tracks=u[4].tracks),c&1&&(s.userPlaylists=(E=u[0].userAllPlaylists)==null?void 0:E.filter(u[8])),i.$set(s)},i(u){p||($(i.$$.fragment,u),p=!0)},o(u){A(i.$$.fragment,u),p=!1},d(u){u&&_(t),B(i)}}}function G(o){let t,e,a,n,l,i,p,m,u;i=new z({props:{element:"a",href:`/spotify/artist/${o[5].id}/albums`,variant:"outline",$$slots:{default:[nt]},$$scope:{ctx:o}}});let c=o[3].items,s=[];for(let r=0;r<c.length;r+=1)s[r]=K(U(o,c,r));const E=r=>A(s[r],1,1,()=>{s[r]=null});return{c(){t=k("div"),e=k("div"),a=k("h2"),n=D("Albums"),l=I(),R(i.$$.fragment),p=I(),m=k("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){t=w(r,"DIV",{class:!0});var f=b(t);e=w(f,"DIV",{class:!0});var d=b(e);a=w(d,"H2",{class:!0});var h=b(a);n=P(h,"Albums"),h.forEach(_),l=q(d),j(i.$$.fragment,d),d.forEach(_),p=q(f),m=w(f,"DIV",{class:!0});var V=b(m);for(let T=0;T<s.length;T+=1)s[T].l(V);V.forEach(_),f.forEach(_),this.h()},h(){v(a,"class","svelte-nc0tqw"),v(e,"class","section-title svelte-nc0tqw"),v(m,"class","grid-items"),v(t,"class","section svelte-nc0tqw")},m(r,f){y(r,t,f),g(t,e),g(e,a),g(a,n),g(e,l),S(i,e,null),g(t,p),g(t,m);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(m,null);u=!0},p(r,f){const d={};if(f&32&&(d.href=`/spotify/artist/${r[5].id}/albums`),f&131072&&(d.$$scope={dirty:f,ctx:r}),i.$set(d),f&8){c=r[3].items;let h;for(h=0;h<c.length;h+=1){const V=U(r,c,h);s[h]?(s[h].p(V,f),$(s[h],1)):(s[h]=K(V),s[h].c(),$(s[h],1),s[h].m(m,null))}for(F(),h=c.length;h<s.length;h+=1)E(h);O()}},i(r){if(!u){$(i.$$.fragment,r);for(let f=0;f<c.length;f+=1)$(s[f]);u=!0}},o(r){A(i.$$.fragment,r),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)A(s[f]);u=!1},d(r){r&&_(t),B(i),H(s,r)}}}function nt(o){let t,e,a;return{c(){t=D("View All "),e=k("span"),a=D("Albums"),this.h()},l(n){t=P(n,"View All "),e=w(n,"SPAN",{class:!0});var l=b(e);a=P(l,"Albums"),l.forEach(_),this.h()},h(){v(e,"class","visually-hidden")},m(n,l){y(n,t,l),y(n,e,l),g(e,a)},p:C,d(n){n&&_(t),n&&_(e)}}}function K(o){let t,e,a,n;return e=new L({props:{item:o[12]}}),{c(){t=k("div"),R(e.$$.fragment),a=I(),this.h()},l(l){t=w(l,"DIV",{class:!0});var i=b(t);j(e.$$.fragment,i),a=q(i),i.forEach(_),this.h()},h(){v(t,"class","grid-item")},m(l,i){y(l,t,i),S(e,t,null),g(t,a),n=!0},p(l,i){const p={};i&8&&(p.item=l[12]),e.$set(p)},i(l){n||($(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){l&&_(t),B(e)}}}function Q(o){let t,e,a,n,l,i,p,m,u;i=new z({props:{element:"a",href:`/spotify/artist/${o[5].id}/appears-on`,variant:"outline",$$slots:{default:[ot]},$$scope:{ctx:o}}});let c=o[1].items,s=[];for(let r=0;r<c.length;r+=1)s[r]=W(N(o,c,r));const E=r=>A(s[r],1,1,()=>{s[r]=null});return{c(){t=k("div"),e=k("div"),a=k("h2"),n=D("Appears On"),l=I(),R(i.$$.fragment),p=I(),m=k("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){t=w(r,"DIV",{class:!0});var f=b(t);e=w(f,"DIV",{class:!0});var d=b(e);a=w(d,"H2",{class:!0});var h=b(a);n=P(h,"Appears On"),h.forEach(_),l=q(d),j(i.$$.fragment,d),d.forEach(_),p=q(f),m=w(f,"DIV",{class:!0});var V=b(m);for(let T=0;T<s.length;T+=1)s[T].l(V);V.forEach(_),f.forEach(_),this.h()},h(){v(a,"class","svelte-nc0tqw"),v(e,"class","section-title svelte-nc0tqw"),v(m,"class","grid-items"),v(t,"class","section svelte-nc0tqw")},m(r,f){y(r,t,f),g(t,e),g(e,a),g(a,n),g(e,l),S(i,e,null),g(t,p),g(t,m);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(m,null);u=!0},p(r,f){const d={};if(f&32&&(d.href=`/spotify/artist/${r[5].id}/appears-on`),f&131072&&(d.$$scope={dirty:f,ctx:r}),i.$set(d),f&2){c=r[1].items;let h;for(h=0;h<c.length;h+=1){const V=N(r,c,h);s[h]?(s[h].p(V,f),$(s[h],1)):(s[h]=W(V),s[h].c(),$(s[h],1),s[h].m(m,null))}for(F(),h=c.length;h<s.length;h+=1)E(h);O()}},i(r){if(!u){$(i.$$.fragment,r);for(let f=0;f<c.length;f+=1)$(s[f]);u=!0}},o(r){A(i.$$.fragment,r),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)A(s[f]);u=!1},d(r){r&&_(t),B(i),H(s,r)}}}function ot(o){let t,e,a;return{c(){t=D("View All "),e=k("span"),a=D("artist appearances"),this.h()},l(n){t=P(n,"View All "),e=w(n,"SPAN",{class:!0});var l=b(e);a=P(l,"artist appearances"),l.forEach(_),this.h()},h(){v(e,"class","visually-hidden")},m(n,l){y(n,t,l),y(n,e,l),g(e,a)},p:C,d(n){n&&_(t),n&&_(e)}}}function W(o){let t,e,a,n;return e=new L({props:{item:o[12]}}),{c(){t=k("div"),R(e.$$.fragment),a=I(),this.h()},l(l){t=w(l,"DIV",{class:!0});var i=b(t);j(e.$$.fragment,i),a=q(i),i.forEach(_),this.h()},h(){v(t,"class","grid-item")},m(l,i){y(l,t,i),S(e,t,null),g(t,a),n=!0},p(l,i){const p={};i&2&&(p.item=l[12]),e.$set(p)},i(l){n||($(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){l&&_(t),B(e)}}}function Y(o){let t,e,a,n,l,i,p,m,u;i=new z({props:{element:"a",href:`/spotify/artist/${o[5].id}/related-artists`,variant:"outline",$$slots:{default:[ft]},$$scope:{ctx:o}}});let c=o[2].artists.splice(0,6),s=[];for(let r=0;r<c.length;r+=1)s[r]=Z(M(o,c,r));const E=r=>A(s[r],1,1,()=>{s[r]=null});return{c(){t=k("div"),e=k("div"),a=k("h2"),n=D("Related Artists"),l=I(),R(i.$$.fragment),p=I(),m=k("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){t=w(r,"DIV",{class:!0});var f=b(t);e=w(f,"DIV",{class:!0});var d=b(e);a=w(d,"H2",{class:!0});var h=b(a);n=P(h,"Related Artists"),h.forEach(_),l=q(d),j(i.$$.fragment,d),d.forEach(_),p=q(f),m=w(f,"DIV",{class:!0});var V=b(m);for(let T=0;T<s.length;T+=1)s[T].l(V);V.forEach(_),f.forEach(_),this.h()},h(){v(a,"class","svelte-nc0tqw"),v(e,"class","section-title svelte-nc0tqw"),v(m,"class","grid-items"),v(t,"class","section svelte-nc0tqw")},m(r,f){y(r,t,f),g(t,e),g(e,a),g(a,n),g(e,l),S(i,e,null),g(t,p),g(t,m);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(m,null);u=!0},p(r,f){const d={};if(f&32&&(d.href=`/spotify/artist/${r[5].id}/related-artists`),f&131072&&(d.$$scope={dirty:f,ctx:r}),i.$set(d),f&4){c=r[2].artists.splice(0,6);let h;for(h=0;h<c.length;h+=1){const V=M(r,c,h);s[h]?(s[h].p(V,f),$(s[h],1)):(s[h]=Z(V),s[h].c(),$(s[h],1),s[h].m(m,null))}for(F(),h=c.length;h<s.length;h+=1)E(h);O()}},i(r){if(!u){$(i.$$.fragment,r);for(let f=0;f<c.length;f+=1)$(s[f]);u=!0}},o(r){A(i.$$.fragment,r),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)A(s[f]);u=!1},d(r){r&&_(t),B(i),H(s,r)}}}function ft(o){let t,e,a;return{c(){t=D("View All "),e=k("span"),a=D("Related Artists"),this.h()},l(n){t=P(n,"View All "),e=w(n,"SPAN",{class:!0});var l=b(e);a=P(l,"Related Artists"),l.forEach(_),this.h()},h(){v(e,"class","visually-hidden")},m(n,l){y(n,t,l),y(n,e,l),g(e,a)},p:C,d(n){n&&_(t),n&&_(e)}}}function Z(o){let t,e,a,n;return e=new L({props:{item:o[9]}}),{c(){t=k("div"),R(e.$$.fragment),a=I(),this.h()},l(l){t=w(l,"DIV",{class:!0});var i=b(t);j(e.$$.fragment,i),a=q(i),i.forEach(_),this.h()},h(){v(t,"class","grid-item")},m(l,i){y(l,t,i),S(e,t,null),g(t,a),n=!0},p(l,i){const p={};i&4&&(p.item=l[9]),e.$set(p)},i(l){n||($(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){l&&_(t),B(e)}}}function ct(o){let t,e,a,n,l,i=o[4]&&o[4].tracks.length>0&&X(o),p=o[3]&&o[3].items.length>0&&G(o),m=o[1]&&o[1].items.length>0&&Q(o),u=o[2]&&o[2].artists.length>0&&Y(o);return{c(){t=k("div"),i&&i.c(),e=I(),p&&p.c(),a=I(),m&&m.c(),n=I(),u&&u.c(),this.h()},l(c){t=w(c,"DIV",{class:!0});var s=b(t);i&&i.l(s),e=q(s),p&&p.l(s),a=q(s),m&&m.l(s),n=q(s),u&&u.l(s),s.forEach(_),this.h()},h(){v(t,"class","content")},m(c,s){y(c,t,s),i&&i.m(t,null),g(t,e),p&&p.m(t,null),g(t,a),m&&m.m(t,null),g(t,n),u&&u.m(t,null),l=!0},p(c,s){c[4]&&c[4].tracks.length>0?i?(i.p(c,s),s&16&&$(i,1)):(i=X(c),i.c(),$(i,1),i.m(t,e)):i&&(F(),A(i,1,1,()=>{i=null}),O()),c[3]&&c[3].items.length>0?p?(p.p(c,s),s&8&&$(p,1)):(p=G(c),p.c(),$(p,1),p.m(t,a)):p&&(F(),A(p,1,1,()=>{p=null}),O()),c[1]&&c[1].items.length>0?m?(m.p(c,s),s&2&&$(m,1)):(m=Q(c),m.c(),$(m,1),m.m(t,n)):m&&(F(),A(m,1,1,()=>{m=null}),O()),c[2]&&c[2].artists.length>0?u?(u.p(c,s),s&4&&$(u,1)):(u=Y(c),u.c(),$(u,1),u.m(t,null)):u&&(F(),A(u,1,1,()=>{u=null}),O())},i(c){l||($(i),$(p),$(m),$(u),l=!0)},o(c){A(i),A(p),A(m),A(u),l=!1},d(c){c&&_(t),i&&i.d(),p&&p.d(),m&&m.d(),u&&u.d()}}}function ut(o){let t,e=o[7].format(o[5].followers.total)+"",a,n;return{c(){t=k("p"),a=D(e),n=D(" Followers"),this.h()},l(l){t=w(l,"P",{class:!0,slot:!0});var i=b(t);a=P(i,e),n=P(i," Followers"),i.forEach(_),this.h()},h(){v(t,"class","meta"),v(t,"slot","meta")},m(l,i){y(l,t,i),g(t,a),g(t,n)},p(l,i){i&32&&e!==(e=l[7].format(l[5].followers.total)+"")&&lt(a,e)},d(l){l&&_(t)}}}function ht(o){let t,e;return t=new it({props:{title:o[5].name,image:o[5].images.length?o[5].images[0].url:void 0,color:o[6],type:o[5].type,$$slots:{meta:[ut],default:[ct]},$$scope:{ctx:o}}}),{c(){R(t.$$.fragment)},l(a){j(t.$$.fragment,a)},m(a,n){S(t,a,n),e=!0},p(a,[n]){const l={};n&32&&(l.title=a[5].name),n&32&&(l.image=a[5].images.length?a[5].images[0].url:void 0),n&64&&(l.color=a[6]),n&32&&(l.type=a[5].type),n&131135&&(l.$$scope={dirty:n,ctx:a}),t.$set(l)},i(a){e||($(t.$$.fragment,a),e=!0)},o(a){A(t.$$.fragment,a),e=!1},d(a){B(t,a)}}}function mt(o,t,e){let a,n,l,i,p,m,{data:u}=t;const c=Intl.NumberFormat("en",{notation:"compact"}),s=E=>{var r;return E.owner.id===((r=u.user)==null?void 0:r.id)};return o.$$set=E=>{"data"in E&&e(0,u=E.data)},o.$$.update=()=>{o.$$.dirty&1&&e(6,a=u.color),o.$$.dirty&1&&e(5,n=u.artist),o.$$.dirty&1&&e(4,l=u.artistTopTracks),o.$$.dirty&1&&e(3,i=u.artistAlbums),o.$$.dirty&1&&e(2,p=u.artistRelatedArtists),o.$$.dirty&1&&e(1,m=u.artistAppearsOn)},[u,m,p,i,l,n,a,c,s]}class It extends tt{constructor(t){super(),et(this,t,mt,ht,st,{data:0})}}export{It as component,yt as universal};
