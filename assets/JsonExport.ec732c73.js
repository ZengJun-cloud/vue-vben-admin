import{d as e,h as t,o as a,i,w as o,j as s,m as d}from"./index.3f3e66ec.js";import"./index.6f2b31a6.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import"./index.2f984403.js";import"./index.355d90f3.js";import"./index.46e40f07.js";import"./CheckOutlined.533c07d2.js";import"./index.09adbb3f.js";import{_ as r}from"./index.fda86a89.js";import"./FullscreenOutlined.687112ae.js";import"./RightOutlined.d1844cec.js";import"./SettingOutlined.0d60f9f3.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import"./useAttrs.ad5834a5.js";import"./useWindowSizeFn.0885153d.js";import"./index.b3d6e480.js";import"./uuid.a6cec785.js";import"./download.a7f4c239.js";import"./useForm.d4f2eea7.js";import"./useSortable.cf79efb4.js";import"./useExpose.d7ba0a6b.js";import"./index.b776d7a7.js";import{c as n,d as m,j as p}from"./data.53555bee.js";import{_ as u}from"./index.21babb04.js";import"./usePageContext.81126167.js";var c=e({components:{BasicTable:r,PageWrapper:u},setup:()=>({defaultHeader:function(){p({data:m,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){p({data:m,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:n,data:m})});const l=d("导出：默认头部"),j=d("导出：自定义头部");c.render=function(e,d,r,n,m,p){const u=t("a-button"),c=t("BasicTable"),f=t("PageWrapper");return a(),i(f,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:o((()=>[s(c,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:o((()=>[s(u,{onClick:e.defaultHeader},{default:o((()=>[l])),_:1},8,["onClick"]),s(u,{onClick:e.customHeader},{default:o((()=>[j])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default c;