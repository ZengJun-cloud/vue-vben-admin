import{d as e,bI as t,h as i,o as s,i as o,j as d,w as r,m as a,l as n}from"./index.14e14d13.js";import"./index.b54adcb7.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.adc097a2.js";import"./index.7b7cba2f.js";import"./index.1e17d60a.js";import"./CheckOutlined.9c09b07a.js";import"./index.15c20973.js";import{_ as m,T as c}from"./index.923fe82d.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./SettingOutlined.0232ef1d.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./uuid.a6cec785.js";import"./download.57f2bfa6.js";import"./useForm.377d3855.js";import"./useSortable.30265075.js";import"./useExpose.8b553350.js";import{u as l}from"./useTable.e2fd6945.js";import{d as p}from"./table.66566ccc.js";const u=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var j=e({components:{BasicTable:m,TableImg:c,Tag:t},setup(){const[e]=l({title:"自定义列内容",api:p,columns:u,bordered:!0});return{registerTable:e}}});const g={class:"p-4"};j.render=function(e,t,m,c,l,p){const u=i("Tag"),j=i("TableImg"),b=i("BasicTable");return s(),o("div",g,[d(b,{onRegister:e.registerTable},{id:r((({record:e})=>[a(" ID: "+n(e.id),1)])),no:r((({record:e})=>[d(u,{color:"green"},{default:r((()=>[a(n(e.no),1)])),_:2},1024)])),img:r((()=>[d(j,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:r((({record:e})=>[d(u,{color:"green"},{default:r((()=>[a(n(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default j;