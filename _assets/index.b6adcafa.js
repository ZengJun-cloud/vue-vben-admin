import{dh as e,a as r,r as i,u as o,O as t,F as s,cX as a,dk as n,i as d,o as c,j as m,ad as l,aH as p,aI as j,aJ as f,k as u,w as b,p as x,n as g}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./index.d5a12bb2.js";import"./index.9331ed11.js";import"./Trigger.45e4d69c.js";import"./omit.f2034b03.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.e78f71b9.js";import"./CheckOutlined.66387142.js";import"./index.237a3252.js";import"./colors.519db886.js";import"./index.e75123ca.js";import"./RightOutlined.4dd7a895.js";import"./index.a900f8be.js";import"./types.a29b9594.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.97009910.js";import"./_baseFor.f4e5f03f.js";import"./index.d2a2c6c4.js";import"./index.a172b251.js";import"./index.c95c2261.js";import"./index.c77189db.js";import"./UpOutlined.c02d4bbe.js";import"./LeftOutlined.d639177e.js";import"./index.261d28fe.js";import"./index.c083d443.js";import"./index.4d9aa87b.js";import"./index.6f702cdb.js";import"./index.fd1fedbf.js";import"./zh_CN.0242bd16.js";import{T as E}from"./TableAction.a1f48a91.js";import"./index.b1e85ccd.js";import"./CaretDownFilled.98ae748f.js";import"./CheckOutlined.c52c5205.js";import"./CloseOutlined.dd293c60.js";import{s as y}from"./EditTableHeaderIcon.a7ed0a5d.js";import"./DownOutlined.ec5528f1.js";import"./FullscreenOutlined.f9d23297.js";import"./LeftOutlined.6d78c070.js";import"./functional.e82516cd.js";import"./RedoOutlined.e1c83ae4.js";import"./RightOutlined.c6f561c4.js";import"./SettingOutlined.582aab15.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./domUtils.d1ae637e.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import"./useDescription.a4961d3b.js";import"./index.bcc6e44c.js";import"./index.ea0a8b2c.js";import"./index.abb63025.js";import"./useForm.47a60267.js";import{a as R}from"./index.b446f86b.js";import"./useWindowSizeFn.85c877e0.js";import"./useFullScreen.250cf1f4.js";import"./uuid.40269c00.js";import"./useExpose.7ccc2771.js";import"./index.cf77ba7a.js";import{u as T}from"./useTable.4c65aec3.js";import{getColumns as O}from"./data.5d59a24f.js";import h from"./DetailModal.ce74d190.js";var C;(C||(C={})).Error="/error";var k=r({name:"ErrorHandler",components:{DetailModal:h,BasicTable:y,TableAction:E},setup(){const r=i(),d=i([]),{t:c}=o(),[m,{setTableData:l}]=T({title:c("sys.errorLog.tableTitle"),columns:O(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[p,{openModal:j}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{l(a(e))}))}),{immediate:!0}),{register:m,registerModal:p,handleDetail:function(e){r.value=e,j(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:C.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:c}}});const w={class:"p-4"};k.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return c(),m("div",w,[(c(!0),m(l,null,p(e.imgListRef,(e=>j((c(),m("img",{key:e,src:e},null,8,["src"])),[[f,!1]]))),128)),u(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[u(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default k;