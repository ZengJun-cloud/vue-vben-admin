import{d as e,r as s,g as l,bD as c,bE as t,h as n,o as a,i as r,j as i,aL as u,m as o}from"./index.3f3e66ec.js";import{B as d}from"./BugOutlined.c2aebe08.js";import{R as f}from"./RightOutlined.d1844cec.js";import{_ as m}from"./index.21babb04.js";import"./usePageContext.81126167.js";import{B as p}from"./index.5382b629.js";var y=e({components:{BasicDragVerify:p,BugOutlined:d,RightOutlined:f,PageWrapper:m},setup(){const{createMessage:e}=l();return{handleSuccess:function(s){const{time:l}=s;e.success(`校验成功,耗时${l}秒`)},el1:s(null),el2:s(null),el3:s(null),el4:s(null),el5:s(null),handleBtnClick:function(e){e&&e.resume()}}}});const b=u("data-v-5ebbb404");c("data-v-5ebbb404");const g={class:"flex justify-center p-4 items-center bg-gray-700"},S=o("还原"),h={class:"flex justify-center p-4 items-center bg-gray-700"},k=o("还原"),x={class:"flex justify-center p-4 items-center bg-gray-700"},B=o("还原"),j={class:"flex justify-center p-4 items-center bg-gray-700"},C=o("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=o(" 成功 "),R={key:1},D=o(" 拖动 "),P=o("还原");t();const I=b(((e,s,l,c,t,u)=>{const o=n("BasicDragVerify"),d=n("a-button"),f=n("BugOutlined"),m=n("RightOutlined"),p=n("PageWrapper");return a(),r(p,{title:"拖动校验示例"},{default:b((()=>[i("div",g,[i(o,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),i(d,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:b((()=>[S])),_:1})]),i("div",h,[i(o,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),i(d,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:b((()=>[k])),_:1})]),i("div",x,[i(o,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),i(d,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:b((()=>[B])),_:1})]),i("div",j,[i(o,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:b((e=>[e?(a(),r(f,{key:0})):(a(),r(m,{key:1}))])),_:1},8,["onSuccess"]),i(d,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:b((()=>[C])),_:1})]),i("div",v,[i(o,{ref:"el5",onSuccess:e.handleSuccess},{text:b((e=>[e?(a(),r("div",_,[i(f),O])):(a(),r("div",R,[D,i(m)]))])),_:1},8,["onSuccess"]),i(d,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:b((()=>[P])),_:1})])])),_:1})}));y.render=I,y.__scopeId="data-v-5ebbb404";export default y;