import{a as t,r as e,X as s,i as a,o as r,j as o,w as i,k as n}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./Trigger.bf7f3a72.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.b6070937.js";import{a as d}from"./index.35d539fd.js";import"./RightOutlined.7bff01db.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import{u as p}from"./useApexCharts.5daa3b87.js";var l=t({components:{CollapseContainer:d},setup(){const t=e(null),{setOptions:a}=p(t);return s((()=>{a({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:t}}});const c={ref:"chartRef",style:{width:"100%"}};l.render=function(t,e,s,d,p,l){const m=a("CollapseContainer");return r(),o(m,{title:"销售统计",canExpan:!1},{default:i((()=>[n("div",c,null,512)])),_:1})};export default l;