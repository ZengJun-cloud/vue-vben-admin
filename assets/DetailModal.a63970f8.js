import{d as t,u as s,h as e,o as i,i as o,w as r,j as a,a0 as n}from"./index.14e14d13.js";import"./_stringToArray.765c7f2a.js";import"./domUtils.916666a6.js";import"./index.1e17d60a.js";import{_ as d}from"./index.15c20973.js";import"./FullscreenOutlined.cfeedf28.js";import"./RightOutlined.40401775.js";import"./useTimeout.83d3837c.js";import"./index.d89d88d1.js";import"./animation.ad53e138.js";import"./useScrollTo.0058c987.js";import"./useAttrs.af9a2b52.js";import"./useWindowSizeFn.9ad1c7b2.js";import{D as m}from"./index.f5d014ca.js";import{u as p}from"./useDescription.af755ae8.js";import{getDescSchema as c}from"./data.551a61ca.js";var l=t({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:m},props:{info:{type:Object,default:null}},setup(){const{t:t}=s(),[e]=p({column:2,schema:c()});return{register:e,useI18n:s,t:t}}});l.render=function(t,s,d,m,p,c){const l=e("Description"),u=e("BasicModal");return i(),o(u,n({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;