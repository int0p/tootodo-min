import{a0 as x,a1 as l}from"./index.62fc0439.js";function $(o){const t=o-1;return t*t*t+1}function S(o,{delay:t=0,duration:n=400,easing:a=x}={}){const c=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:a,css:r=>`opacity: ${r*c}`}}function U(o,{delay:t=0,duration:n=400,easing:a=$,x:c=0,y:r=0,opacity:e=0}={}){const s=getComputedStyle(o),i=+s.opacity,y=s.transform==="none"?"":s.transform,u=i*(1-e),[p,f]=l(c),[d,g]=l(r);return{delay:t,duration:n,easing:a,css:(m,_)=>`
			transform: ${y} translate(${(1-m)*p}${f}, ${(1-m)*d}${g});
			opacity: ${i-u*_}`}}function V(o,{delay:t=0,duration:n=400,easing:a=$,start:c=0,opacity:r=0}={}){const e=getComputedStyle(o),s=+e.opacity,i=e.transform==="none"?"":e.transform,y=1-c,u=s*(1-r);return{delay:t,duration:n,easing:a,css:(p,f)=>`
			transform: ${i} scale(${1-y*f});
			opacity: ${s-u*f}
		`}}export{S as a,$ as c,U as f,V as s};
