let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i,o,j as s,k as n,w as a}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import{A as r}from"./index.a8571cb1.js";import"./RightOutlined.76c81f82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./index.d0076f6e.js";import"./UpOutlined.4db44387.js";import"./LeftOutlined.bc728dc1.js";import"./index.4c78e464.js";import{d,S as m}from"./index.1f4cd203.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import l from"./TargetContent.d5f03277.js";var p=t({components:{LazyContainer:d,TargetContent:l,Skeleton:m,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},j=n("h1",null,"向下滚动",-1),u={class:"lazy-base-demo-box"};p.render=function(e,t,r,d,m,l){const p=i("Alert"),x=i("TargetContent"),b=i("Skeleton"),g=i("LazyContainer");return o(),s("div",c,[n(p,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),n("div",f,[j,n("div",u,[n(g,null,{skeleton:a((()=>[n(b,{rows:10})])),default:a((()=>[n(x)])),_:1})])])])};export default p;