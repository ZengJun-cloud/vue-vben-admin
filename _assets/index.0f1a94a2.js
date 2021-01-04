import{a as o,i as e,o as i,j as s,k as r,w as t,p as a}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./index.e7bb1c19.js";import"./Trigger.919a25bc.js";import"./omit.dfa8bda2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import"./CheckOutlined.f7557516.js";import"./index.aeff4252.js";import{A as n}from"./index.a8571cb1.js";import"./colors.1664fe18.js";import"./RightOutlined.76c81f82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./index.98d0a77d.js";import"./index.a172b251.js";import"./index.4185348b.js";import"./index.5ba92d97.js";import"./UpOutlined.4db44387.js";import"./index.e21bca80.js";import"./index.6c0d5231.js";import"./index.83bd1b65.js";import"./index.62730274.js";import"./index.4a8e715a.js";import"./index.1f4cd203.js";import"./CloseOutlined.d97483db.js";import"./FullscreenOutlined.d60c703c.js";import"./LoadingOutlined.c197daea.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import"./useAttrs.42151342.js";import"./index.5d2c4097.js";import{a as d}from"./index.a6a5b0ce.js";import"./useWindowSizeFn.3173c9f0.js";import"./useForm.2f01440e.js";import l from"./Modal1.281f7911.js";import p from"./Modal2.d26bf83e.js";import m from"./Modal3.49b38e44.js";import c from"./Modal4.17603776.js";var j=o({components:{Alert:n,Modal1:l,Modal2:p,Modal3:m,Modal4:c},setup(){const[o,{openModal:e,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:a}]=d(),[n,{openModal:l}]=d();return{register1:o,openModal1:e,register2:s,openModal2:r,register3:t,openModal3:a,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){e(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const f={class:"px-10 py-4"},u=a("打开弹窗 默认可以拖动/全屏"),g=a("打开弹窗"),M=a("打开弹窗"),b=a("打开弹窗并传递数据");j.render=function(o,a,n,d,l,p){const m=e("Alert"),c=e("a-button"),j=e("Modal1"),x=e("Modal2"),y=e("Modal3"),R=e("Modal4");return i(),s("div",f,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.openModal3},{default:t((()=>[M])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:o.send},{default:t((()=>[b])),_:1},8,["onClick"]),r(j,{onRegister:o.register1},null,8,["onRegister"]),r(x,{onRegister:o.register2},null,8,["onRegister"]),r(y,{onRegister:o.register3},null,8,["onRegister"]),r(R,{onRegister:o.register4},null,8,["onRegister"])])};export default j;