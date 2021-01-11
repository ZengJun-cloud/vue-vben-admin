import{d as e,r as t,g as a,e as n,h as s,o as l,i as c,w as o,j as d,m as r}from"./index.14e14d13.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import{a as i}from"./index.1e17d60a.js";import"./RightOutlined.40401775.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import{_ as u}from"./index.f716722a.js";import"./usePageContext.83f225b2.js";import{B as p,t as f}from"./data.48f2b96c.js";var m=e({components:{BasicTree:p,CollapseContainer:i,PageWrapper:u},setup(){const e=t(null),{createMessage:s}=a();function l(){const t=n(e);if(!t)throw new Error("tree is null!");return t}return{treeData:f,treeRef:e,handleLevel:function(e){l().filterByLevel(e)},handleSetCheckData:function(){l().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=l().getCheckedKeys();s.success(JSON.stringify(e))},handleSetSelectData:function(){l().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=l().getSelectedKeys();s.success(JSON.stringify(e))},handleSetExpandData:function(){l().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=l().getExpandedKeys();s.success(JSON.stringify(e))},appendNodeByKey:function(e=null){l().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){l().deleteNodeByKey(e)},updateNodeByKey:function(e){l().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=r("显示到第2级"),h=r("显示到第1级"),k=r("设置勾选数据"),K=r("获取勾选数据"),D=r("设置选中数据"),S=r("获取选中数据"),_=r("设置展开数据"),B=r("获取展开数据"),g={class:"mb-4"},j=r("添加根节点"),x=r("添加在parent3内添加节点"),N=r("删除parent3节点"),E=r("更新parent2节点");m.render=function(e,t,a,n,r,i){const u=s("a-button"),p=s("BasicTree"),f=s("CollapseContainer"),m=s("PageWrapper");return l(),c(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:o((()=>[d("div",y,[d(u,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:o((()=>[C])),_:1}),d(u,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:o((()=>[h])),_:1}),d(u,{onClick:e.handleSetCheckData,class:"mr-2"},{default:o((()=>[k])),_:1},8,["onClick"]),d(u,{onClick:e.handleGetCheckData,class:"mr-2"},{default:o((()=>[K])),_:1},8,["onClick"]),d(u,{onClick:e.handleSetSelectData,class:"mr-2"},{default:o((()=>[D])),_:1},8,["onClick"]),d(u,{onClick:e.handleGetSelectData,class:"mr-2"},{default:o((()=>[S])),_:1},8,["onClick"]),d(u,{onClick:e.handleSetExpandData,class:"mr-2"},{default:o((()=>[_])),_:1},8,["onClick"]),d(u,{onClick:e.handleGetExpandData,class:"mr-2"},{default:o((()=>[B])),_:1},8,["onClick"])]),d("div",g,[d(u,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:o((()=>[j])),_:1}),d(u,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:o((()=>[x])),_:1}),d(u,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:o((()=>[N])),_:1}),d(u,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:o((()=>[E])),_:1})]),d(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:o((()=>[d(p,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;