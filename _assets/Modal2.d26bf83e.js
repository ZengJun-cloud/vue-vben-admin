import{a as s,i as e,o as t,j as o,w as i,k as r,J as a,p as l}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./omit.dfa8bda2.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./index.1f4cd203.js";import"./CloseOutlined.d97483db.js";import"./FullscreenOutlined.d60c703c.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import"./useAttrs.42151342.js";import{s as d,b as p}from"./index.a6a5b0ce.js";import"./useWindowSizeFn.3173c9f0.js";var n=s({components:{BasicModal:d},setup(){const[s,{closeModal:e,setModalProps:t}]=p();return{register:s,closeModal:e,setModalProps:()=>{t({title:"Modal New Title"})}}}});const c=l("从内部关闭弹窗"),m=l("从内部修改title");n.render=function(s,l,d,p,n,j){const u=e("a-button"),f=e("BasicModal");return t(),o(f,a(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[r(u,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:i((()=>[c])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:s.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default n;