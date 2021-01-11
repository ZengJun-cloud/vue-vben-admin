import{d as o,cp as e,h as a,o as s,i as r,w as i,j as t,m as n}from"./index.14e14d13.js";import"./index.b54adcb7.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.adc097a2.js";import"./index.7b7cba2f.js";import"./index.1e17d60a.js";import{a as d}from"./index.15c20973.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./uuid.a6cec785.js";import"./download.57f2bfa6.js";import"./useForm.377d3855.js";import{_ as l}from"./index.f716722a.js";import"./usePageContext.83f225b2.js";import p from"./Modal1.1b8327da.js";import m from"./Modal2.fe8a770d.js";import c from"./Modal3.6417c981.js";import g from"./Modal4.eea8340e.js";var u=o({components:{Alert:e,Modal1:p,Modal2:m,Modal3:c,Modal4:g,PageWrapper:l},setup(){const[o,{openModal:e,setModalProps:a}]=d(),[s,{openModal:r}]=d(),[i,{openModal:t}]=d(),[n,{openModal:l}]=d();return{register1:o,openModal1:e,register2:s,openModal2:r,register3:i,openModal3:t,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){e(),a({loading:!0}),setTimeout((()=>{a({loading:!1})}),2e3)}}}});const f=n("打开弹窗 默认可以拖动/全屏"),j=n("打开弹窗"),M=n("打开弹窗"),y=n("打开弹窗并传递数据");u.render=function(o,e,n,d,l,p){const m=a("Alert"),c=a("a-button"),g=a("Modal1"),u=a("Modal2"),b=a("Modal3"),x=a("Modal4"),R=a("PageWrapper");return s(),r(R,{title:"modal组件使用示例"},{default:i((()=>[t(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:i((()=>[f])),_:1},8,["onClick"]),t(m,{message:"内外同时同时显示隐藏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:o.openModal2},{default:i((()=>[j])),_:1},8,["onClick"]),t(m,{message:"自适应高度","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:o.openModal3},{default:i((()=>[M])),_:1},8,["onClick"]),t(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:o.send},{default:i((()=>[y])),_:1},8,["onClick"]),t(g,{onRegister:o.register1},null,8,["onRegister"]),t(u,{onRegister:o.register2},null,8,["onRegister"]),t(b,{onRegister:o.register3},null,8,["onRegister"]),t(x,{onRegister:o.register4},null,8,["onRegister"])])),_:1})};export default u;