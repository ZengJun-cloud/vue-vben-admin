import{cD as a,r as e,bc as s,e as t,cE as i,b9 as l,cy as n,S as c,cN as r}from"./index.14e14d13.js";function d(d){a();const o=e(null),u=e(!1);async function y(){const a=t(o);return a||n("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),await c(),a}return[function(a){s((()=>{o.value=null,u.value=null})),t(u)&&i()&&a===t(o)||(o.value=a,u.value=!0,l((()=>{d&&a.setProps(r(d))})))},{scrollToField:async(a,e)=>{(await y()).scrollToField(a,e)},setProps:async a=>{(await y()).setProps(a)},updateSchema:async a=>{(await y()).updateSchema(a)},clearValidate:async a=>{(await y()).clearValidate(a)},resetFields:async()=>{y().then((async a=>{await a.resetFields()}))},removeSchemaByFiled:async a=>{(await y()).removeSchemaByFiled(a)},getFieldsValue:()=>{var a;return null==(a=t(o))?void 0:a.getFieldsValue()},setFieldsValue:async a=>{(await y()).setFieldsValue(a)},appendSchemaByField:async(a,e,s)=>{(await y()).appendSchemaByField(a,e,s)},submit:async()=>(await y()).submit(),validate:async a=>(await y()).validate(a),validateFields:async a=>(await y()).validateFields(a)}]}export{d as u};