import{d as o,b2 as t,a7 as e,a8 as i,u as s,h as n,o as r,i as a,j as l,w as d}from"./index.14e14d13.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.1e17d60a.js";import{a as c}from"./index.15c20973.js";import"./FullscreenOutlined.cfeedf28.js";import{L as m}from"./LockOutlined.0129a134.js";import"./RightOutlined.40401775.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";var p=o({name:"FullScreen",components:{LockOutlined:m,Tooltip:t,LockAction:e((()=>i((()=>__import__("./LockModal.55836c5f.js")),["/assets/LockModal.55836c5f.js","/assets/LockModal.c2a09df5.css","/assets/index.14e14d13.js","/assets/index.17037a8f.css","/assets/index.b54adcb7.js","/assets/index.4bc3eaa6.css","/assets/domUtils.916666a6.js","/assets/_stringToArray.765c7f2a.js","/assets/index.adc097a2.js","/assets/index.67c7ebc9.css","/assets/index.7b7cba2f.js","/assets/index.1e17d60a.js","/assets/index.76e45014.css","/assets/RightOutlined.40401775.js","/assets/useTimeout.83d3837c.js","/assets/index.d89d88d1.js","/assets/index.121e7eba.css","/assets/useScrollTo.0058c987.js","/assets/animation.ad53e138.js","/assets/index.15c20973.js","/assets/index.ca1a8c37.css","/assets/FullscreenOutlined.cfeedf28.js","/assets/useAttrs.af9a2b52.js","/assets/useWindowSizeFn.9ad1c7b2.js","/assets/index.b8575581.js","/assets/uuid.a6cec785.js","/assets/download.57f2bfa6.js","/assets/header.ab446760.js","/assets/useForm.377d3855.js"])))},setup(){const{t:o}=s(),[t,{openModal:e}]=c();return{t:o,register:t,handleLock:function(){e(!0)}}}});p.render=function(o,t,e,i,s,c){const m=n("LockOutlined"),p=n("Tooltip"),u=n("LockAction");return r(),a("span",{onClick:t[1]||(t[1]=(...t)=>o.handleLock&&o.handleLock(...t))},[l(p,{title:o.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:d((()=>[l(m)])),_:1},8,["title","mouseEnterDelay"]),l(u,{onRegister:o.register},null,8,["onRegister"])])};export default p;