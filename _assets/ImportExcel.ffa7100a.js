import{a as e,r as t,i as s,o as i,j as o,k as r,w as a,aM as d,b9 as m,p as n}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./useSortable.a4ced273.js";import"./index.e7bb1c19.js";import"./Trigger.919a25bc.js";import"./omit.dfa8bda2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import"./CheckOutlined.f7557516.js";import"./index.aeff4252.js";import"./colors.1664fe18.js";import"./index.3613bcf8.js";import"./RightOutlined.76c81f82.js";import"./index.05e306d6.js";import"./types.9988e678.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./_baseFor.f4e5f03f.js";import"./index.98d0a77d.js";import"./index.a172b251.js";import"./index.4185348b.js";import"./index.5ba92d97.js";import"./UpOutlined.4db44387.js";import"./LeftOutlined.bc728dc1.js";import"./index.e21bca80.js";import"./index.6c0d5231.js";import"./index.e8e9eb72.js";import"./index.83bd1b65.js";import"./index.00ee5d21.js";import"./zh_CN.0242bd16.js";import"./index.62730274.js";import"./index.4a8e715a.js";import"./CaretDownFilled.72e52daf.js";import"./index.1f4cd203.js";import"./CheckOutlined.cd949935.js";import"./CloseOutlined.d97483db.js";import{s as p}from"./index.f02b363f.js";import"./FullscreenOutlined.d60c703c.js";import"./LeftOutlined.fb5a19ac.js";import"./LoadingOutlined.c197daea.js";import"./TableAction.2263a2d2.js";import"./RightOutlined.68bb84f7.js";import"./SettingOutlined.cf17f58e.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import"./useAttrs.42151342.js";import"./index.5d2c4097.js";import"./index.a6a5b0ce.js";import"./useWindowSizeFn.3173c9f0.js";import"./useForm.2f01440e.js";import"./uuid.40269c00.js";import"./useExpose.9a70527a.js";import{I as c}from"./index.ef57cbcb.js";var j=e({components:{BasicTable:p,ImpExcel:c},setup(){const e=t([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:i,meta:{sheetName:o}}=s,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:i,columns:r})}},tableListRef:e}}});const l={class:"m-4"},u=n("导入Excel");j.render=function(e,t,n,p,c,j){const f=s("a-button"),b=s("ImpExcel"),x=s("BasicTable");return i(),o("div",l,[r(b,{onSuccess:e.loadDataSuccess},{default:a((()=>[r(f,{class:"m-3"},{default:a((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(i(!0),o(d,null,m(e.tableListRef,((e,t)=>(i(),o(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])};export default j;