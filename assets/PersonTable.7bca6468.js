import{d as e,h as t,o,i as n,j as i,w as a,m as d}from"./index.14e14d13.js";import{f as s}from"./index.b54adcb7.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.adc097a2.js";import"./index.7b7cba2f.js";import"./index.1e17d60a.js";import"./CheckOutlined.9c09b07a.js";import"./index.15c20973.js";import{_ as r,a as l}from"./index.923fe82d.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./SettingOutlined.0232ef1d.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import"./index.b8575581.js";import"./uuid.a6cec785.js";import"./download.57f2bfa6.js";import"./useForm.377d3855.js";import"./useSortable.30265075.js";import"./useExpose.8b553350.js";import{u as c}from"./useTable.e2fd6945.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],u=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=e({components:{BasicTable:r,EditTableHeaderIcon:l,TableAction:s},setup(){const[e,{getDataSource:t}]=c({columns:m,showIndexColumn:!1,dataSource:u,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function o(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function n(e){var o;if(null==(o=e.onEdit)||o.call(e,!1),e.isNew){const o=t(),n=o.findIndex((t=>t.key===e.key));o.splice(n,1)}}function i(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:o,createActions:function(e,t){return e.editable?[{label:"保存",onClick:i.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,e,t)}}]:[{label:"编辑",onClick:o.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const b=d("新增成员");p.render=function(e,d,s,r,l,c){const m=t("TableAction"),u=t("BasicTable"),p=t("a-button");return o(),n("div",null,[i(u,{onRegister:e.registerTable},{action:a((({record:t,column:o})=>[i(m,{actions:e.createActions(t,o)},null,8,["actions"])])),_:1},8,["onRegister"]),i(p,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:a((()=>[b])),_:1},8,["onClick"])])};export default p;