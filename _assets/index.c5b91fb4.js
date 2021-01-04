import{df as e,a as r,r as i,u as o,aU as t,R as s,cZ as a,dr as n,i as d,o as m,j as l,aM as p,b9 as c,ap as f,aq as j,k as u,w as b,p as x,n as g}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./useSortable.a4ced273.js";import"./index.e7bb1c19.js";import"./Trigger.919a25bc.js";import"./omit.dfa8bda2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import"./CheckOutlined.f7557516.js";import"./index.aeff4252.js";import"./colors.1664fe18.js";import"./index.3613bcf8.js";import"./RightOutlined.76c81f82.js";import"./index.05e306d6.js";import"./types.9988e678.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./_baseFor.f4e5f03f.js";import"./index.98d0a77d.js";import"./index.a172b251.js";import"./index.4185348b.js";import"./index.5ba92d97.js";import"./UpOutlined.4db44387.js";import"./LeftOutlined.bc728dc1.js";import"./index.e21bca80.js";import"./index.6c0d5231.js";import"./index.e8e9eb72.js";import"./index.83bd1b65.js";import"./index.00ee5d21.js";import"./zh_CN.0242bd16.js";import"./index.62730274.js";import"./index.4a8e715a.js";import"./CaretDownFilled.72e52daf.js";import"./index.1f4cd203.js";import"./CheckOutlined.cd949935.js";import"./CloseOutlined.d97483db.js";import{s as E}from"./index.f02b363f.js";import"./FullscreenOutlined.d60c703c.js";import"./LeftOutlined.fb5a19ac.js";import"./LoadingOutlined.c197daea.js";import{s as y}from"./TableAction.2263a2d2.js";import"./RightOutlined.68bb84f7.js";import"./SettingOutlined.cf17f58e.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import"./useDescription.55a7eb79.js";import"./index.2b5cfec1.js";import"./useAttrs.42151342.js";import"./index.5d2c4097.js";import{a as R}from"./index.a6a5b0ce.js";import"./useWindowSizeFn.3173c9f0.js";import"./useForm.2f01440e.js";import"./uuid.40269c00.js";import"./useExpose.9a70527a.js";import{u as T}from"./useTable.c3b0d1c2.js";import{getColumns as C}from"./data.3d4a0e55.js";import h from"./DetailModal.781f2ad9.js";var O;(O||(O={})).Error="/error";var k=r({name:"ErrorHandler",components:{DetailModal:h,BasicTable:E,TableAction:y},setup(){const r=i(),d=i([]),{t:m}=o(),[l,{setTableData:p}]=T({title:m("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:f}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{p(a(e))}))}),{immediate:!0}),{register:l,registerModal:c,handleDetail:function(e){r.value=e,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:O.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:m}}});const w={class:"p-4"};k.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",w,[(m(!0),l(p,null,c(e.imgListRef,(e=>f((m(),l("img",{key:e,src:e},null,8,["src"])),[[j,!1]]))),128)),u(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[u(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default k;