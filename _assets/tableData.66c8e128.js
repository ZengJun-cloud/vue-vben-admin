import"./index.0d38f9a5.js";import"./xlsx.a48e520c.js";function e(){return[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"姓名",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"开始时间",width:120,sorter:!0,dataIndex:"beginTime"},{title:"结束时间",width:120,sorter:!0,dataIndex:"endTime"}]}function t(){return[{title:"ID",width:150,dataIndex:"id",sorter:!0,sortOrder:"ascend"},{title:"姓名",dataIndex:"name",width:120},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:80}]}function a(){return[{title:"ID",dataIndex:"id",width:200},{title:"姓名",dataIndex:"name",width:120},{title:"地址",dataIndex:"address",sorter:!0,children:[{title:"编号",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"开始时间",dataIndex:"beginTime",width:120},{title:"结束时间",dataIndex:"endTime",width:120}]}]}function n(){return[{title:"ID",dataIndex:"id",width:200},{dataIndex:"name",width:120,slots:{title:"customTitle"}},{dataIndex:"address",width:120,slots:{title:"customAddress"},sorter:!0},{title:"编号",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"开始时间",dataIndex:"beginTime",width:120},{title:"结束时间",dataIndex:"endTime",width:120}]}const d=({text:e,index:t})=>{const a={children:e,attrs:{}};return 9===t&&(a.attrs.colSpan=0),a};function i(){return[{title:"ID",dataIndex:"id",width:300,customRender:d},{title:"姓名",dataIndex:"name",width:300,customRender:d},{title:"地址",dataIndex:"address",colSpan:2,width:120,sorter:!0,customRender:({text:e,index:t})=>{const a={children:e,attrs:{}};return 2===t&&(a.attrs.rowSpan=2),3===t&&(a.attrs.colSpan=0),a}},{title:"编号",dataIndex:"no",colSpan:0,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}],customRender:d},{title:"开始时间",dataIndex:"beginTime",width:200,customRender:d},{title:"结束时间",dataIndex:"endTime",width:200,customRender:d}]}const r=(e=6)=>{const t=[];for(let a=0;a<e;a++)t.push({field:`field${a}`,label:`字段${a}`,component:"Input",colProps:{xl:12,xxl:8}});return t};function l(){return{labelWidth:100,schemas:[...r(5),{field:"field11",label:"字段33",component:"Select",defaultValue:"1",slot:"custom",componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},colProps:{xl:12,xxl:8}}]}}function o(){return(()=>{const e=[];for(let t=0;t<40;t++)e.push({id:`${t}`,name:"John Brown",age:`1${t}`,no:`${t+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:(new Date).toLocaleString(),endTime:(new Date).toLocaleString()});return e})()}function s(){return(()=>{const e=[];for(let t=0;t<40;t++)e.push({id:`${t}`,name:"John Brown",age:`1${t}`,no:`${t+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:(new Date).toLocaleString(),endTime:(new Date).toLocaleString(),children:[{id:`l2-${t}`,name:"John Brown",age:`1${t}`,no:`${t+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:(new Date).toLocaleString(),endTime:(new Date).toLocaleString(),children:[{id:`l3-${t}`,name:"John Brown",age:`1${t}`,no:`${t+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:(new Date).toLocaleString(),endTime:(new Date).toLocaleString()}]}]});return e})()}export{r as getAdvanceSchema,e as getBasicColumns,o as getBasicData,t as getBasicShortColumns,n as getCustomHeaderColumns,l as getFormConfig,i as getMergeHeaderColumns,a as getMultipleHeaderColumns,s as getTreeTableData};