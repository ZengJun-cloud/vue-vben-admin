import{a as e,ao as o,u as t,i,o as s,j as r,k as n,w as a}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./Trigger.45e4d69c.js";import{T as c}from"./index.c95c2261.js";import"./CloseOutlined.dd293c60.js";import"./FullscreenOutlined.f9d23297.js";import{L as l}from"./LockOutlined.7d6e9819.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import"./index.ea0a8b2c.js";import"./index.abb63025.js";import{a as d}from"./index.b446f86b.js";import"./useWindowSizeFn.85c877e0.js";var m=e({name:"FullScreen",components:{LockOutlined:l,Tooltip:c,LockAction:o((()=>import("./LockModal.361cef69.js")))},setup(){const{t:e}=t(),[o,{openModal:i}]=d();return{t:e,register:o,handleLock:function(){i(!0)}}}});m.render=function(e,o,t,c,l,d){const m=i("LockOutlined"),p=i("Tooltip"),u=i("LockAction");return s(),r("span",{onClick:o[1]||(o[1]=(...o)=>e.handleLock&&e.handleLock(...o))},[n(p,{title:e.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[n(m)])),_:1},8,["title","mouseEnterDelay"]),n(u,{onRegister:e.register},null,8,["onRegister"])])};export default m;