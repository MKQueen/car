import{r as s,j as M,c as T,a as c,b as o,w as u,T as j,u as _,i as h,F as q,d as t,o as A,n as R,t as $,e as z}from"./index-DCta1jbJ.js";import{u as E}from"./index.esm-FbLyGc7u.js";import{g as P}from"./localStorage-y8J-X29D.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J={class:"div-body"},K={class:"custom-title"},Q={style:{margin:"16px"}},W={__name:"personalInformation",setup(X){const l=s({infoName:"张三",mobile:"17600662767",gender:"男",email:"15652330021@qq.com",province:"北京市",city:"市辖区",county:"东城区",address:"北京市东城区朝阳门北大街8号D座11层B室",fieldValue:""});let v=s("");const g=[30,Math.round(.4*window.innerHeight),Math.round(.6*window.innerHeight)];let f=s(g[0]),r=s(0);const m=s(!1),V=s(""),y=E(),p=s(!1),w=[{text:"男",value:"NAN"},{text:"女",value:"NV"}];s({}),M(()=>{l.value=P("userInfo"),console.log("Retrieved Data:",l.value),v.value=l.value.province+"/"+l.value.city+"/"+l.value.county});const x=({selectedOptions:n})=>{m.value=!1,v.value=n.map(e=>e.text).join("/"),l.value.province=n[0].text,l.value.city=n[1].text,l.value.county=n[2].text},C=({selectedOptions:n})=>{var e;l.value.gender=(e=n[0])==null?void 0:e.text,p.value=!1},N=n=>{n.height===30?r.value=0:(r.value-=n.height,r.value<-200&&(r.value=-200))},U=()=>history.back(),D=n=>{console.log("submit",n)};return(n,e)=>{const I=t("van-nav-bar"),i=t("van-cell"),b=t("van-cell-group"),d=t("van-field"),S=t("van-button"),B=t("van-form"),F=t("van-floating-panel"),H=t("van-cascader"),k=t("van-popup"),L=t("van-picker");return A(),T(q,null,[c("div",J,[o(I,{title:"个人信息","left-arrow":"",onClickLeft:U,fixed:!0,placeholder:!0,"safe-area-inset-top":!0}),o(j,{name:"slide"},{default:u(()=>[c("div",{style:R({top:_(r)+"px"}),class:"slidable-div slide-enter-active"},[o(b,null,{default:u(()=>[o(i,{title:"姓名","is-link":"",value:"张三"},{value:u(()=>[c("span",K,$(l.value.infoName),1)]),_:1}),o(i,{title:"手机号","is-link":"",value:l.value.mobile},null,8,["value"]),o(i,{title:"性别","is-link":"",value:l.value.gender},null,8,["value"]),o(i,{title:"邮箱","is-link":"",value:l.value.email},null,8,["value"]),o(i,{title:"省","is-link":"",value:l.value.province},null,8,["value"]),o(i,{title:"市","is-link":"",value:l.value.city},null,8,["value"]),o(i,{title:"区","is-link":"",value:l.value.county},null,8,["value"]),o(i,{title:"街道地址","is-link":"",value:l.value.address},null,8,["value"])]),_:1})],4)]),_:1})]),o(F,{height:_(f),"onUpdate:height":e[8]||(e[8]=a=>h(f)?f.value=a:f=a),anchors:g,onHeightChange:N},{default:u(()=>[o(B,{onSubmit:D},{default:u(()=>[o(b,{inset:""},{default:u(()=>[o(d,{modelValue:l.value.infoName,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value.infoName=a),name:"name",label:"姓名",placeholder:"请填写姓名"},null,8,["modelValue"]),o(d,{modelValue:l.value.mobile,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.mobile=a),type:"tel",name:"phone",label:"手机号",placeholder:"请填写手机号"},null,8,["modelValue"]),o(d,{modelValue:l.value.gender,"onUpdate:modelValue":e[2]||(e[2]=a=>l.value.gender=a),name:"gender",label:"性别",onClick:e[3]||(e[3]=a=>p.value=!0),placeholder:"请选择性别"},null,8,["modelValue"]),o(d,{modelValue:l.value.email,"onUpdate:modelValue":e[4]||(e[4]=a=>l.value.email=a),name:"email",label:"邮箱",placeholder:"请填写邮箱"},null,8,["modelValue"]),o(d,{modelValue:_(v),"onUpdate:modelValue":e[5]||(e[5]=a=>h(v)?v.value=a:v=a),name:"fieldValue",label:"地区","is-link":"",placeholder:"请选择所在地区",onClick:e[6]||(e[6]=a=>m.value=!0)},null,8,["modelValue"]),o(d,{modelValue:l.value.address,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.address=a),name:"address",label:"街道地址",placeholder:"请填写街道地址"},null,8,["modelValue"])]),_:1}),c("div",Q,[o(S,{round:"",block:"",type:"primary","native-type":"submit"},{default:u(()=>[z(" 更新信息 ")]),_:1})])]),_:1})]),_:1},8,["height"]),o(k,{show:m.value,"onUpdate:show":e[11]||(e[11]=a=>m.value=a),round:"",position:"bottom"},{default:u(()=>[o(H,{modelValue:V.value,"onUpdate:modelValue":e[9]||(e[9]=a=>V.value=a),title:"请选择所在地区",options:_(y),onClose:e[10]||(e[10]=a=>m.value=!1),onFinish:x},null,8,["modelValue","options"])]),_:1},8,["show"]),o(k,{show:p.value,"onUpdate:show":e[13]||(e[13]=a=>p.value=a),position:"bottom"},{default:u(()=>[o(L,{columns:w,onConfirm:C,onCancel:e[12]||(e[12]=a=>p.value=!1)})]),_:1},8,["show"])],64)}}},le=G(W,[["__scopeId","data-v-9a7e2a82"]]);export{le as default};
