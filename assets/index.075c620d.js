import{d as e,cp as r,h as o,o as a,i as s,w as i,j as t,m as n}from"./index.14e14d13.js";import"./index.b54adcb7.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.adc097a2.js";import"./index.7b7cba2f.js";import"./index.1e17d60a.js";import{u as p}from"./index.e7d2d61e.js";import"./index.15c20973.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./uuid.a6cec785.js";import"./download.57f2bfa6.js";import"./useForm.377d3855.js";import{_ as m}from"./index.f716722a.js";import"./usePageContext.83f225b2.js";import d from"./Drawer1.08ffeea8.js";import w from"./Drawer2.657665bb.js";import l from"./Drawer3.d9e2fc74.js";import c from"./Drawer4.d52873c6.js";import D from"./Drawer5.a3d0316d.js";var f=e({components:{Alert:r,PageWrapper:m,Drawer1:d,Drawer2:w,Drawer3:l,Drawer4:c,Drawer5:D},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[a,{openDrawer:s}]=p(),[i,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:w}]=p();return{register1:e,openDrawer1:r,register2:a,openDrawer2:s,register3:i,openDrawer3:t,register4:n,register5:d,openDrawer5:w,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const g=n("打开Drawer"),u=n("打开Drawer"),j=n("打开Drawer"),y=n("打开Drawer并传递数据"),b=n("打开详情Drawer");f.render=function(e,r,n,p,m,d){const w=o("Alert"),l=o("a-button"),c=o("Drawer1"),D=o("Drawer2"),f=o("Drawer3"),x=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return a(),s(C,{title:"抽屉组件使用示例"},{default:i((()=>[t(w,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:i((()=>[g])),_:1},8,["onClick"]),t(w,{message:"内外同时控制显示隐藏","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:i((()=>[u])),_:1}),t(w,{message:"自适应高度/显示footer","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:i((()=>[j])),_:1}),t(w,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:e.send},{default:i((()=>[y])),_:1},8,["onClick"]),t(w,{message:"详情页模式","show-icon":""}),t(l,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:i((()=>[b])),_:1}),t(c,{onRegister:e.register1},null,8,["onRegister"]),t(D,{onRegister:e.register2},null,8,["onRegister"]),t(f,{onRegister:e.register3},null,8,["onRegister"]),t(x,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default f;