import{d as a,_ as l,C as s,A as o,r as e,u as t,a as n,L as i,b as r,c,e as u,f as d,t as g,g as m,h as f,o as p,i as w,j as h,k as y,l as _,w as v,m as k}from"./index.c9b191ae.js";var b=a({components:{AButton:l,ACheckbox:s,AppLocalePicker:o},setup(){const a=e(null),l=e(!1),s=r(),{locale:o}=c(),{notification:f}=m(),{t:p}=t(),w=n({account:"vben",password:"123456"}),h=n({loading:!1}),y=n({account:[{required:!0,message:p("sys.login.accountPlaceholder"),trigger:"blur"}],password:[{required:!0,message:p("sys.login.passwordPlaceholder"),trigger:"blur"}]});return{formRef:a,formData:w,formState:h,formRules:y,login:async function(){const l=u(a);if(l){h.loading=!0;try{const a=await l.validate(),s=await d.login(g({password:a.password,username:a.account}));s&&f.success({message:p("sys.login.loginSuccessTitle"),description:`${p("sys.login.loginSuccessDesc")}: ${s.realName}`,duration:3})}catch(s){}finally{h.loading=!1}}},autoLogin:l,title:s&&s.title,logo:i,t:p,showLocale:o.show}}});const L={class:"login"},x=h("div",{class:"login-mask"},null,-1),D={class:"login-form-wrap"},z={class:"login-form mx-6"},A={class:"login-form__content px-2 py-10"};b.render=function(a,l,s,o,e,t){const n=f("AppLocalePicker"),i=f("a-input"),r=f("a-form-item"),c=f("a-input-password"),u=f("a-checkbox"),d=f("a-col"),g=f("a-button"),m=f("a-row"),b=f("a-form");return p(),w("div",L,[x,h("div",D,[h("div",z,[a.showLocale?(p(),w(n,{key:0,class:"login-form__locale"})):y("",!0),h("div",A,[h("header",null,[h("img",{src:a.logo,class:"mr-4"},null,8,["src"]),h("h1",null,_(a.title),1)]),h(b,{class:"mx-auto mt-10",model:a.formData,rules:a.formRules,ref:"formRef"},{default:v((()=>[h(r,{name:"account"},{default:v((()=>[h(i,{size:"large",value:a.formData.account,"onUpdate:value":l[1]||(l[1]=l=>a.formData.account=l),placeholder:"username: vben"},null,8,["value"])])),_:1}),h(r,{name:"password"},{default:v((()=>[h(c,{size:"large",visibilityToggle:"",value:a.formData.password,"onUpdate:value":l[2]||(l[2]=l=>a.formData.password=l),placeholder:"password: 123456"},null,8,["value"])])),_:1}),h(m,null,{default:v((()=>[h(d,{span:12},{default:v((()=>[h(r,null,{default:v((()=>[h(u,{checked:a.autoLogin,"onUpdate:checked":l[3]||(l[3]=l=>a.autoLogin=l),size:"small"},{default:v((()=>[k(_(a.t("sys.login.autoLogin")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),h(d,{span:12},{default:v((()=>[h(r,{style:{"text-align":"right"}},{default:v((()=>[h(g,{type:"link",size:"small"},{default:v((()=>[k(_(a.t("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),h(r,null,{default:v((()=>[h(g,{type:"primary",size:"large",class:"rounded-sm",block:!0,onClick:a.login,loading:a.formState.loading},{default:v((()=>[k(_(a.t("sys.login.loginButton")),1)])),_:1},8,["onClick","loading"])])),_:1})])),_:1},8,["model","rules"])])])])])};export default b;