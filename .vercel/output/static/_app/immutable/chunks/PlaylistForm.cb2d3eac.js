import{S as le,i as ae,s as ie,e as E,d as T,t as q,b as se,f as y,g as N,j as A,k as F,l as v,h as re,m as n,o as $,p as O,r as f,q as ne,T as oe,I as ue,z as fe,w as ce,x as me,L as pe,A as J}from"./index.9f73b2d7.js";import"./ProgressBar.svelte_svelte_type_style_lang.b57464ad.js";import"./Modal.svelte_svelte_type_style_lang.7c9bde1f.js";import"./moment.a354566a.js";import"./index.5e2a9a64.js";import"./chunk-5UWJICAP.5753fd06.js";import"./paths.cfd798f3.js";import{B as de}from"./Button.0d438fe4.js";import{e as _e,a as he}from"./forms.1059074d.js";function x(i){let e;return{c(){e=E("input"),this.h()},l(l){e=y(l,"INPUT",{name:!0,class:!0}),this.h()},h(){e.hidden=!0,n(e,"name","userID"),e.value=i[1],n(e,"class","svelte-10utbli")},m(l,t){O(l,e,t)},p(l,t){t&2&&e.value!==l[1]&&(e.value=l[1])},d(l){l&&v(e)}}}function ee(i){var r;let e,l=((r=i[0])==null?void 0:r.nameError)+"",t;return{c(){e=E("p"),t=q(l),this.h()},l(o){e=y(o,"P",{class:!0});var _=N(e);t=F(_,l),_.forEach(v),this.h()},h(){n(e,"class","error svelte-10utbli")},m(o,_){O(o,e,_),f(e,t)},p(o,_){var u;_&1&&l!==(l=((u=o[0])==null?void 0:u.nameError)+"")&&J(t,l)},d(o){o&&v(e)}}}function te(i){let e,l=i[0].apiError+"",t;return{c(){e=E("p"),t=q(l),this.h()},l(r){e=y(r,"P",{class:!0});var o=N(e);t=F(o,l),o.forEach(v),this.h()},h(){n(e,"class","error svelte-10utbli")},m(r,o){O(r,e,o),f(e,t)},p(r,o){o&1&&l!==(l=r[0].apiError+"")&&J(t,l)},d(r){r&&v(e)}}}function ve(i){let e=i[3]?"Save Playlist":"Create Playlist",l;return{c(){l=q(e)},l(t){l=F(t,e)},m(t,r){O(t,l,r)},p(t,r){r&8&&e!==(e=t[3]?"Save Playlist":"Create Playlist")&&J(l,e)},d(t){t&&v(l)}}}function be(i){var Q,W;let e,l,t,r,o,_,u,D,w,c,I,S,M,R,b,C,G,j,B,g,z,k,H,K,m=i[1]&&x(i),p=((Q=i[0])==null?void 0:Q.nameError)&&ee(i),d=((W=i[0])==null?void 0:W.apiError)&&te(i);return g=new de({props:{disabled:i[4],element:"button",type:"submit",$$slots:{default:[ve]},$$scope:{ctx:i}}}),{c(){e=E("form"),m&&m.c(),l=T(),t=E("div"),r=E("label"),o=q("Name *"),_=T(),u=E("input"),w=T(),p&&p.c(),c=T(),I=E("div"),S=E("label"),M=q("Description"),R=T(),b=E("input"),G=T(),d&&d.c(),j=T(),B=E("div"),se(g.$$.fragment),this.h()},l(a){e=y(a,"FORM",{method:!0,action:!0,class:!0});var s=N(e);m&&m.l(s),l=A(s),t=y(s,"DIV",{class:!0});var h=N(t);r=y(h,"LABEL",{for:!0,class:!0});var L=N(r);o=F(L,"Name *"),L.forEach(v),_=A(h),u=y(h,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),w=A(h),p&&p.l(h),h.forEach(v),c=A(s),I=y(s,"DIV",{class:!0});var P=N(I);S=y(P,"LABEL",{for:!0,class:!0});var U=N(S);M=F(U,"Description"),U.forEach(v),R=A(P),b=y(P,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),P.forEach(v),G=A(s),d&&d.l(s),j=A(s),B=y(s,"DIV",{class:!0});var V=N(B);re(g.$$.fragment,V),V.forEach(v),s.forEach(v),this.h()},h(){var a,s,h,L,P;n(r,"for","playlist-name"),n(r,"class","svelte-10utbli"),n(u,"type","text"),n(u,"id","playlist-name"),n(u,"name","name"),n(u,"placeholder","Playlist Name"),u.value=D=((a=i[0])==null?void 0:a.name)||((s=i[3])==null?void 0:s.name)||"",n(u,"class","svelte-10utbli"),n(t,"class","field svelte-10utbli"),$(t,"has-error",(h=i[0])==null?void 0:h.nameError),n(S,"for","playlist-description"),n(S,"class","svelte-10utbli"),n(b,"type","text"),n(b,"id","playlist-description"),n(b,"name","description"),n(b,"placeholder","Playlist Description"),b.value=C=((L=i[0])==null?void 0:L.description)||((P=i[3])==null?void 0:P.description)||"",n(b,"class","svelte-10utbli"),n(I,"class","field svelte-10utbli"),n(B,"class","submit-button svelte-10utbli"),n(e,"method","POST"),n(e,"action",i[2]),n(e,"class","svelte-10utbli")},m(a,s){O(a,e,s),m&&m.m(e,null),f(e,l),f(e,t),f(t,r),f(r,o),f(t,_),f(t,u),f(t,w),p&&p.m(t,null),f(e,c),f(e,I),f(I,S),f(S,M),f(I,R),f(I,b),f(e,G),d&&d.m(e,null),f(e,j),f(e,B),ne(g,B,null),k=!0,H||(K=oe(z=_e.call(null,e,i[6])),H=!0)},p(a,[s]){var L,P,U,V,X,Y,Z;a[1]?m?m.p(a,s):(m=x(a),m.c(),m.m(e,l)):m&&(m.d(1),m=null),(!k||s&9&&D!==(D=((L=a[0])==null?void 0:L.name)||((P=a[3])==null?void 0:P.name)||"")&&u.value!==D)&&(u.value=D),(U=a[0])!=null&&U.nameError?p?p.p(a,s):(p=ee(a),p.c(),p.m(t,null)):p&&(p.d(1),p=null),(!k||s&1)&&$(t,"has-error",(V=a[0])==null?void 0:V.nameError),(!k||s&9&&C!==(C=((X=a[0])==null?void 0:X.description)||((Y=a[3])==null?void 0:Y.description)||"")&&b.value!==C)&&(b.value=C),(Z=a[0])!=null&&Z.apiError?d?d.p(a,s):(d=te(a),d.c(),d.m(e,j)):d&&(d.d(1),d=null);const h={};s&16&&(h.disabled=a[4]),s&136&&(h.$$scope={dirty:s,ctx:a}),g.$set(h),(!k||s&4)&&n(e,"action",a[2]),z&&ue(z.update)&&s&16&&z.update.call(null,a[6])},i(a){k||(fe(g.$$.fragment,a),k=!0)},o(a){ce(g.$$.fragment,a),k=!1},d(a){a&&v(e),m&&m.d(),p&&p.d(),d&&d.d(),me(g),H=!1,K()}}}function Ee(i,e,l){const t=pe();let r=!1,{form:o}=e,{userID:_=void 0}=e,{action:u=void 0}=e,{playlist:D=void 0}=e;const w=()=>(l(4,r=!0),async({result:c})=>{await he(c),l(4,r=!1),c.type==="success"&&t("success"),c.type==="redirect"&&t("redirect")});return i.$$set=c=>{"form"in c&&l(0,o=c.form),"userID"in c&&l(1,_=c.userID),"action"in c&&l(2,u=c.action),"playlist"in c&&l(3,D=c.playlist)},i.$$.update=()=>{i.$$.dirty&4&&u&&console.log(u)},[o,_,u,D,r,t,w]}class Te extends le{constructor(e){super(),ae(this,e,Ee,be,ie,{form:0,userID:1,action:2,playlist:3})}}export{Te as P};
