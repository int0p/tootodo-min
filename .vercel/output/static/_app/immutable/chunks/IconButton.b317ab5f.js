import{S as j,i as z,s as D,c as B,a as k,e as y,b as w,d as F,t as G,f as E,g as S,h as O,j as U,k as H,l as p,m as J,n as q,o as A,p as K,q as C,r as v,u as g,v as L,w as I,x as N,y as M,z as P,A as Q,B as R,C as V,D as T,E as W,F as b,G as X}from"./index.9f73b2d7.js";import"./Modal.svelte_svelte_type_style_lang.7c9bde1f.js";function Y(s){let t,n,u,o,c,i,l,h;var r=s[0];function d(a){return{props:{class:"relative top-0 left-0.5",color:"white","aria-hidden":"true",focusable:"false"}}}r&&(n=B(r,d()));let _=[s[3]],f={};for(let a=0;a<_.length;a+=1)f=k(f,_[a]);return{c(){t=y("button"),n&&w(n.$$.fragment),u=F(),o=y("span"),c=G(s[1]),this.h()},l(a){t=E(a,"BUTTON",{});var e=S(t);n&&O(n.$$.fragment,e),u=U(e),o=E(e,"SPAN",{class:!0});var m=S(o);c=H(m,s[1]),m.forEach(p),e.forEach(p),this.h()},h(){J(o,"class","hidden"),q(t,f),A(t,"svelte-ufti9g",!0)},m(a,e){K(a,t,e),n&&C(n,t,null),v(t,u),v(t,o),v(o,c),t.autofocus&&t.focus(),s[9](t),i=!0,l||(h=[g(t,"click",s[5]),g(t,"mouseover",s[6]),g(t,"focus",s[7]),g(t,"keydown",s[8])],l=!0)},p(a,[e]){if(e&1&&r!==(r=a[0])){if(n){L();const m=n;I(m.$$.fragment,1,0,()=>{N(m,1)}),M()}r?(n=B(r,d()),w(n.$$.fragment),P(n.$$.fragment,1),C(n,t,u)):n=null}(!i||e&2)&&Q(c,a[1]),q(t,f=R(_,[e&8&&a[3]])),A(t,"svelte-ufti9g",!0)},i(a){i||(n&&P(n.$$.fragment,a),i=!0)},o(a){n&&I(n.$$.fragment,a),i=!1},d(a){a&&p(t),n&&N(n),s[9](null),l=!1,V(h)}}}function Z(s,t,n){const u=["icon","label","getButton"];let o=T(t,u),{icon:c}=t,{label:i}=t,l;function h(){return l}function r(e){b.call(this,s,e)}function d(e){b.call(this,s,e)}function _(e){b.call(this,s,e)}function f(e){b.call(this,s,e)}function a(e){X[e?"unshift":"push"](()=>{l=e,n(2,l)})}return s.$$set=e=>{t=k(k({},t),W(e)),n(3,o=T(t,u)),"icon"in e&&n(0,c=e.icon),"label"in e&&n(1,i=e.label)},[c,i,l,o,h,r,d,_,f,a]}class tt extends j{constructor(t){super(),z(this,t,Z,Y,D,{icon:0,label:1,getButton:4})}get getButton(){return this.$$.ctx[4]}}export{tt as I};
