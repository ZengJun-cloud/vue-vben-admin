import{r as o,bl as a,e as t,ak as r}from"./index.14e14d13.js";import{r as s}from"./animation.ad53e138.js";function n({el:n,to:e,duration:l=500,callback:c}){const i=o(!1),u=(o=>o.scrollTop)(n),p=e-u;let f=0;l=a(l)?500:l;const m=function(){if(!t(i))return;f+=20;const o=(a=f,e=u,d=p,(a/=l/2)<1?d/2*a*a+e:-d/2*(--a*(a-2)-1)+e);var a,e,d;((o,a)=>{o.scrollTop=a})(n,o),f<l&&t(i)?s(m):c&&r(c)&&c()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};