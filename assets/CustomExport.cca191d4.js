import{d as e,h as o,o as t,i as s,w as a,j as i,m as r}from"./index.3f3e66ec.js";import"./index.6f2b31a6.js";import"./_stringToArray.d7060976.js";import"./domUtils.4604b9f9.js";import"./index.2f984403.js";import"./index.355d90f3.js";import"./index.46e40f07.js";import"./CheckOutlined.533c07d2.js";import{b as d}from"./index.09adbb3f.js";import{_ as n}from"./index.fda86a89.js";import"./FullscreenOutlined.687112ae.js";import"./RightOutlined.d1844cec.js";import"./SettingOutlined.0d60f9f3.js";import"./useTimeout.563f07c7.js";import"./index.45b6380d.js";import"./animation.06324a5e.js";import"./useScrollTo.a044b2df.js";import"./useAttrs.ad5834a5.js";import"./useWindowSizeFn.0885153d.js";import"./index.b3d6e480.js";import"./uuid.a6cec785.js";import"./download.a7f4c239.js";import"./useForm.d4f2eea7.js";import"./useSortable.cf79efb4.js";import"./useExpose.d7ba0a6b.js";import{E as m}from"./index.b776d7a7.js";import{c as p,d as l,j as c}from"./data.53555bee.js";import{_ as u}from"./index.21babb04.js";import"./usePageContext.81126167.js";var f=e({components:{BasicTable:n,ExpExcelModel:m,PageWrapper:u},setup(){const[e,{openModal:o}]=d();return{defaultHeader:function({filename:e,bookType:o}){c({data:l,filename:e,write2excelOpts:{bookType:o}})},columns:p,data:l,register:e,openModal:o}}});const j=r("导出");f.render=function(e,r,d,n,m,p){const l=o("a-button"),c=o("BasicTable"),u=o("ExpExcelModel"),f=o("PageWrapper");return t(),s(f,{title:"导出示例",content:"可以选择导出格式"},{default:a((()=>[i(c,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:a((()=>[i(l,{onClick:e.openModal},{default:a((()=>[j])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),i(u,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default f;