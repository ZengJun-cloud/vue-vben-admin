import{d as e,r as o,bD as t,bE as r,h as s,o as i,i as n,aL as a,j as l,m as p}from"./index.3f3e66ec.js";import{_ as d}from"./index.6f2b31a6.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import"./index.2f984403.js";import"./index.355d90f3.js";import"./index.46e40f07.js";import"./CheckOutlined.533c07d2.js";import"./index.09adbb3f.js";import"./index.fda86a89.js";import"./FullscreenOutlined.687112ae.js";import"./RightOutlined.d1844cec.js";import"./SettingOutlined.0d60f9f3.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import"./useAttrs.ad5834a5.js";import"./useWindowSizeFn.0885153d.js";import"./index.b3d6e480.js";import"./uuid.a6cec785.js";import"./download.a7f4c239.js";import{u as c}from"./useForm.d4f2eea7.js";import"./useSortable.cf79efb4.js";import"./useExpose.d7ba0a6b.js";import"./useTable.5d9d533a.js";import{_ as m}from"./index.21babb04.js";import"./usePageContext.81126167.js";import f from"./PersonTable.f28d8a95.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],b=[{label:"私密",value:"1"},{label:"公开",value:"2"}],j=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:b},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:b},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:d,PersonTable:f,PageWrapper:m},setup(){const e=o(null),[t,{validate:r}]=c({baseColProps:{span:6},schemas:j,showActionButtonGroup:!1}),[s,{validate:i}]=c({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:s,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([r(),i()])}catch(o){}},tableRef:e}}});const h=a("data-v-50d13e9a");t("data-v-50d13e9a");const x=p("提交");r();const q=h(((e,o,t,r,a,p)=>{const d=s("BasicForm"),c=s("a-card"),m=s("PersonTable"),f=s("a-button"),u=s("PageWrapper");return i(),n(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:h((()=>[l(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[x])),_:1},8,["onClick"])])),default:h((()=>[l(c,{title:"仓库管理",bordered:!1},{default:h((()=>[l(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:h((()=>[l(d,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),l(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:h((()=>[l(m,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=q,g.__scopeId="data-v-50d13e9a";export default g;