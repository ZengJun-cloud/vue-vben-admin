let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i,o,j as a,k as s,w as n}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./Trigger.bf7f3a72.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6318737e.js";import{A as r}from"./index.5a632863.js";import"./RightOutlined.f0169d6f.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.b6070937.js";import"./index.c68214a6.js";import"./UpOutlined.bb04ec26.js";import"./LeftOutlined.80992f5f.js";import"./index.5af46da8.js";import{d,S as m}from"./index.35d539fd.js";import"./RightOutlined.7bff01db.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import l from"./TargetContent.8a2c1ffa.js";var p=t({components:{LazyContainer:d,TargetContent:l,Skeleton:m,Alert:r},setup:()=>({})});const f={class:"p-4 lazy-base-demo"},c={class:"lazy-base-demo-wrap"},j=s("h1",null,"向下滚动",-1),b={class:"lazy-base-demo-box"};p.render=function(e,t,r,d,m,l){const p=i("Alert"),x=i("TargetContent"),u=i("Skeleton"),g=i("LazyContainer");return o(),a("div",f,[s(p,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),s("div",c,[j,s("div",b,[s(g,null,{skeleton:n((()=>[s(u,{rows:10})])),default:n((()=>[s(x)])),_:1})])])])};export default p;