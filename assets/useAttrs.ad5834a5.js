import{cG as s,a as e,b9 as t,bd as c}from"./index.3f3e66ec.js";const a=["class","style"],n=/^on[A-Z]/;function r(r={}){const o=c();if(!o)return{};const{excludeListeners:u=!1,excludeKeys:d=[]}=r,i=s({}),l=d.concat(a);return o.attrs=e(o.attrs),t((()=>{const s=(e=o.attrs,Object.keys(e).map((s=>[s,e[s]]))).reduce(((s,[e,t])=>(l.includes(e)||u&&n.test(e)||(s[e]=t),s)),{});var e;i.value=s})),i}export{r as u};