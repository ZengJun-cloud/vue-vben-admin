let e=document.createElement("style");e.innerHTML=".box[data-v-49e309b4]{width:150px;height:150px;margin-top:20px;background:pink}",document.head.appendChild(e);import{a,r as s,d0 as t,d1 as i,i as o,o as r,j as l,k as n,cL as d,ap as c,aq as p,bi as u,p as m}from"./index.0d38f9a5.js";import"./xlsx.a48e520c.js";import{S as v}from"./index.c78520ea.js";import"./Trigger.92fe36b8.js";import"./omit.d1225ee8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9686ab5b.js";import"./CheckOutlined.3634c842.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ff8c0c9d.js";import"./tsxHelper.b0075210.js";import{F as S,S as b,a as x,b as T,c as f,d as j,e as h,f as R,g as X,h as Y,i as g,E as k,j as y}from"./index.7b626059.js";import"./domUtils.bd8f2ecf.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var _=a({components:{Select:v,FadeTransition:S,ScaleTransition:b,SlideYTransition:x,ScrollYTransition:T,SlideYReverseTransition:f,ScrollYReverseTransition:j,SlideXTransition:h,ScrollXTransition:R,SlideXReverseTransition:X,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:k,ExpandTransition:y},setup(){const e=s("Fade"),a=s(!0);return{options:E,value:e,start:function(){a.value=!1,setTimeout((()=>{a.value=!0}),300)},show:a}}});const w=u("data-v-49e309b4");t("data-v-49e309b4");const F={class:"p-4"},C={class:"flex"},H=m(" start "),L={class:"box"};i();const O=w(((e,a,s,t,i,u)=>{const m=o("Select"),v=o("a-button");return r(),l("div",F,[n("div",C,[n(m,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(v,{type:"primary",class:"ml-4",onClick:e.start},{default:w((()=>[H])),_:1},8,["onClick"])]),(r(),l(d(`${e.value}Transition`),null,{default:w((()=>[c(n("div",L,null,512),[[p,e.show]])])),_:1}))])}));_.render=O,_.__scopeId="data-v-49e309b4";export default _;