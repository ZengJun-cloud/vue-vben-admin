import{a as e,i as t,o as a,j as s,k as r,w as i}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import{a as l}from"./index.1f4cd203.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import{B as o,t as c}from"./data.92aed20f.js";var n=e({components:{BasicTree:o,CollapseContainer:l},setup:()=>({treeData:c})});const d={class:"flex p-4"};n.render=function(e,l,o,c,n,m){const p=t("BasicTree"),f=t("CollapseContainer");return a(),s("div",d,[r(f,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:i((()=>[r(p,{treeData:e.treeData},null,8,["treeData"])])),_:1}),r(f,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:i((()=>[r(p,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),r(f,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:i((()=>[r(p,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default n;