import{d as e,h as t,o as a,i,w as o,j as s,m as d}from"./index.14e14d13.js";import"./index.b54adcb7.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.adc097a2.js";import"./index.7b7cba2f.js";import"./index.1e17d60a.js";import"./CheckOutlined.9c09b07a.js";import"./index.15c20973.js";import{_ as r}from"./index.923fe82d.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./SettingOutlined.0232ef1d.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./uuid.a6cec785.js";import"./download.57f2bfa6.js";import"./useForm.377d3855.js";import"./useSortable.30265075.js";import"./useExpose.8b553350.js";import"./index.43de0826.js";import{c as n,d as m,j as c}from"./data.ac8407f6.js";import{_ as p}from"./index.f716722a.js";import"./usePageContext.83f225b2.js";var u=e({components:{BasicTable:r,PageWrapper:p},setup:()=>({defaultHeader:function(){c({data:m,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){c({data:m,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:n,data:m})});const l=d("导出：默认头部"),j=d("导出：自定义头部");u.render=function(e,d,r,n,m,c){const p=t("a-button"),u=t("BasicTable"),f=t("PageWrapper");return a(),i(f,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:o((()=>[s(u,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:o((()=>[s(p,{onClick:e.defaultHeader},{default:o((()=>[l])),_:1},8,["onClick"]),s(p,{onClick:e.customHeader},{default:o((()=>[j])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default u;