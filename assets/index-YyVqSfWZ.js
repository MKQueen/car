import{u as K}from"./index.esm-FbLyGc7u.js";import{l as z,m as Z,n as h}from"./api-D3SolMte.js";import{D as Q,r as m,q as W,d as i,o as N,c as H,b as a,w as s,u as G,i as ee,e as U,s as M,E,F as X,G as oe,a as J,H as ae,t as le,I as ne}from"./index-DCta1jbJ.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Y={__name:"enterpriseForm",props:{initialValues:{type:Object,default:()=>({})}},emits:["submit"],setup(O,{expose:c,emit:C}){const y=O,{initialValues:b}=Q(y),d=m({enterpriseName:"",creditCode:"",province:"",city:"",county:"",address:"",registTime:"",registCapi:"",scope:"",businessLicenseDate:"2049-12-31T16:00:00.000+0000",businessLicenseUrl:"",nameAgent:"",idCardNoAgent:"",mobileAgent:"",idCardDateAgent:""});let t=m(""),w=m("");const k=m(""),V=m([]),g=m("1");m("");const D=m(!1),p=m(!1),v={有限日期:"businessLicenseDate",发照日期:"registTime"};W(()=>({initialValues:b.value,checked:g.value}),({initialValues:n,checked:o},{initialValues:f,checked:_})=>{n!==f&&Object.assign(d.value,n),o!==_&&(console.log("checked 变化了：",o,_),d.value.businessLicenseDate=o==="1"?"2049-12-31T16:00:00.000+0000":"")},{deep:!0});const x=n=>{D.value=!0,w.value=n},F=({selectedValues:n})=>{const o=v[w.value];o&&(d.value[o]=n.join("-")),D.value=!1},R=n=>(console.log(n),n),P=K(),q=({selectedOptions:n})=>{t.value=n.map(o=>o.text).join("/"),d.value.province=n[0].text,d.value.city=n[1].text,d.value.county=n[2].text,p.value=!1},S=()=>d.value,I=n=>{console.log(n),d.value=n},u=n=>new Promise((o,f)=>{const _=new FileReader;_.onload=function(A){o(A.target.result)},_.onerror=function(A){f(A.target.error)},_.readAsArrayBuffer(n)}),e=async n=>{console.log(n),console.log(n.file);const o="https://api.textin.com/robot/v1.0/api/business_license",A={"x-ti-app-id":"45d65d686a968eaf000e71d7b477f5f2","x-ti-secret-code":"39096d8b5984479843c002c17b53893f","Content-Type":"application/octet-stream"},B=await u(n.file);console.log(B);try{const L=await(await fetch(o,{method:"POST",headers:A,body:B})).json();console.log(L),console.log(L.result.item_list);let l=L.result.item_list;const j={};l.forEach(r=>{j[r.description]=r.value}),console.log(j),d.value={enterpriseName:j.名称,creditCode:j.统一社会信用代码,province:"",city:"",county:"",address:j.经营场所,registTime:j.登记日期,registCapi:j.注册资本,scope:j.经营范围,businessLicenseDate:"2049-12-31T16:00:00.000+0000",businessLicenseUrl:""}}catch(T){console.error("Error:",T)}const $=await z({file:n.file,isPrivate:!1});$.success&&(d.value.businessLicenseUrl=$.obj),console.log($,"0000")};return c({onSubmit:R,enterpriseForm:d,getFormData:S,updateFormData:I}),(n,o)=>{const f=i("van-field"),_=i("van-radio"),A=i("van-radio-group"),B=i("van-uploader"),$=i("van-cell-group"),T=i("van-form"),L=i("van-cascader"),l=i("van-popup"),j=i("van-date-picker");return N(),H(X,null,[a(T,{onSubmit:R},{default:s(()=>[a($,{inset:""},{default:s(()=>[a(f,{modelValue:d.value.enterpriseName,"onUpdate:modelValue":o[0]||(o[0]=r=>d.value.enterpriseName=r),name:"loginAccount",label:"企业名称",placeholder:"请填写企业名称",rules:[{required:!0,message:"请输入登录账号"}]},null,8,["modelValue"]),a(f,{modelValue:d.value.creditCode,"onUpdate:modelValue":o[1]||(o[1]=r=>d.value.creditCode=r),name:"creditCode",label:"统一信用代码",placeholder:"请输入统一信用代码",rules:[{required:!0,message:"请输入统一信用代码"}]},null,8,["modelValue"]),a(f,{modelValue:G(t),"onUpdate:modelValue":o[2]||(o[2]=r=>ee(t)?t.value=r:t=r),"is-link":"",readonly:"",label:"所属地区",placeholder:"请选择所在地区",onClick:o[3]||(o[3]=r=>p.value=!0)},null,8,["modelValue"]),a(f,{modelValue:d.value.address,"onUpdate:modelValue":o[4]||(o[4]=r=>d.value.address=r),name:"address",label:"注册地址",placeholder:"请填写详细地址",rules:[{required:!0,message:"请填写详细地址"}]},null,8,["modelValue"]),a(f,{modelValue:d.value.registTime,"onUpdate:modelValue":o[5]||(o[5]=r=>d.value.registTime=r),"is-link":"",readonly:"",name:"datePicker",label:"发照日期",placeholder:"点击选择时间",onClick:o[6]||(o[6]=r=>x("发照日期"))},null,8,["modelValue"]),a(f,{name:"radio",label:"证件到期日"},{input:s(()=>[a(A,{modelValue:g.value,"onUpdate:modelValue":o[7]||(o[7]=r=>g.value=r),direction:"horizontal"},{default:s(()=>[a(_,{name:"1"},{default:s(()=>[U("终身")]),_:1}),a(_,{name:"2"},{default:s(()=>[U("有限日期")]),_:1})]),_:1},8,["modelValue"])]),_:1}),g.value==="2"?(N(),M(f,{key:0,modelValue:d.value.businessLicenseDate,"onUpdate:modelValue":o[8]||(o[8]=r=>d.value.businessLicenseDate=r),"is-link":"",readonly:"",name:"datePicker",label:"有限日期",placeholder:"点击选择时间",onClick:o[9]||(o[9]=r=>x("有限日期"))},null,8,["modelValue"])):E("",!0),a(f,{modelValue:d.value.registCapi,"onUpdate:modelValue":o[10]||(o[10]=r=>d.value.registCapi=r),name:"agentName",label:"注册资本金",placeholder:"请填写注册资本金",rules:[{required:!0,message:"请输入注册资本金"}]},null,8,["modelValue"]),a(f,{name:"uploader",label:"营业执照"},{input:s(()=>[a(B,{modelValue:V.value,"onUpdate:modelValue":o[11]||(o[11]=r=>V.value=r),"after-read":e,"max-count":"1"},null,8,["modelValue"])]),_:1}),a(f,{modelValue:d.value.scope,"onUpdate:modelValue":o[12]||(o[12]=r=>d.value.scope=r),rows:"1",autosize:"",label:"经营范围",type:"textarea",placeholder:"请输入留言"},null,8,["modelValue"])]),_:1})]),_:1}),a(l,{show:p.value,"onUpdate:show":o[15]||(o[15]=r=>p.value=r),round:"",position:"bottom"},{default:s(()=>[a(L,{modelValue:k.value,"onUpdate:modelValue":o[13]||(o[13]=r=>k.value=r),title:"请选择所在地区",options:G(P),onClose:o[14]||(o[14]=r=>p.value=!1),onFinish:q},null,8,["modelValue","options"])]),_:1},8,["show"]),a(l,{show:D.value,"onUpdate:show":o[17]||(o[17]=r=>D.value=r),position:"bottom"},{default:s(()=>[a(j,{onConfirm:F,onCancel:o[16]||(o[16]=r=>D.value=!1)})]),_:1},8,["show"])],64)}}},se={__name:"corporationForm",props:{initialValues:{type:Object,default:()=>({})}},emits:["submit"],setup(O,{expose:c,emit:C}){const y=C,b=O,{initialValues:d}=Q(b),t=m({operName:"",operIdCardNo:"",operMobile:"",idCardDate:"2049-12-31T16:00:00.000+0000",idCardFrontUrl:"",idCardBackUrl:""}),w=m([]),k=m([]),V=m("1");m("");const g=m(!1),D=K(),p=m(""),v=m(!1);W([()=>d.value,()=>V.value],([u,e],[n,o])=>{u!==n&&Object.assign(enterpriseForm.value,u),e!==o&&(console.log("checked 变化了：",e,o),e==="1"?t.value.idCardDate="2049-12-31T16:00:00.000+0000":t.value.idCardDate="")});const x=({selectedValues:u})=>{t.value.idCardDate=u.join("-"),g.value=!1},F=u=>{y("submit",t.value)},R=({selectedOptions:u})=>{p.value=u.map(e=>e.text).join("/")},P=()=>t.value,q=u=>{t.value=u},S=async u=>{console.log(u);const e=await z({file:u.file,isPrivate:!1});e.success&&(t.value.idCardFrontUrl=e.obj),console.log(e,"0000")},I=async u=>{console.log(u);const e=await z({file:u.file,isPrivate:!1});e.success&&(t.value.idCardBackUrl=e.obj),console.log(e,"0000")};return c({corporationForm:t,getFormData:P,updateFormData:q}),(u,e)=>{const n=i("van-field"),o=i("van-radio"),f=i("van-radio-group"),_=i("van-uploader"),A=i("van-cell-group"),B=i("van-form"),$=i("van-cascader"),T=i("van-popup"),L=i("van-date-picker");return N(),H(X,null,[a(B,{onSubmit:F},{default:s(()=>[a(A,{inset:""},{default:s(()=>[a(n,{modelValue:t.value.operName,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value.operName=l),name:"operName",label:"法人名称",placeholder:"请填写法人名称",rules:[{required:!0,message:"请输入法人名称"}]},null,8,["modelValue"]),a(n,{modelValue:t.value.operIdCardNo,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value.operIdCardNo=l),name:"operIdCardNo",label:"法人身份证",placeholder:"请输入法人身份证",rules:[{required:!0,message:"请输入法人身份证"}]},null,8,["modelValue"]),a(n,{modelValue:t.value.operMobile,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value.operMobile=l),name:"operMobile",label:"法人手机号",placeholder:"请填写法人手机号",rules:[{required:!0,message:"请填写法人手机号"}]},null,8,["modelValue"]),a(n,{name:"radio",label:"证件到期日"},{input:s(()=>[a(f,{modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=l=>V.value=l),direction:"horizontal"},{default:s(()=>[a(o,{name:"1"},{default:s(()=>[U("终身")]),_:1}),a(o,{name:"2"},{default:s(()=>[U("有限日期")]),_:1})]),_:1},8,["modelValue"])]),_:1}),V.value==="2"?(N(),M(n,{key:0,modelValue:t.value.idCardDate,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value.idCardDate=l),"is-link":"",readonly:"",name:"datePicker",label:"有限日期",placeholder:"点击选择时间",onClick:e[5]||(e[5]=l=>g.value=!0)},null,8,["modelValue"])):E("",!0),a(n,{name:"uploader",label:"身份证正面"},{input:s(()=>[a(_,{modelValue:w.value,"onUpdate:modelValue":e[6]||(e[6]=l=>w.value=l),"after-read":S,"max-count":"1"},null,8,["modelValue"])]),_:1}),a(n,{name:"uploader",label:"身份证背面"},{input:s(()=>[a(_,{modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=l=>k.value=l),"after-read":I,"max-count":"1"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(T,{show:v.value,"onUpdate:show":e[10]||(e[10]=l=>v.value=l),round:"",position:"bottom"},{default:s(()=>[a($,{modelValue:p.value,"onUpdate:modelValue":e[8]||(e[8]=l=>p.value=l),title:"请选择所在地区",options:G(D),onClose:e[9]||(e[9]=l=>v.value=!1),onFinish:R},null,8,["modelValue","options"])]),_:1},8,["show"]),a(T,{show:g.value,"onUpdate:show":e[12]||(e[12]=l=>g.value=l),position:"bottom"},{default:s(()=>[a(L,{onConfirm:x,onCancel:e[11]||(e[11]=l=>g.value=!1)})]),_:1},8,["show"])],64)}}},ue={__name:"agentForm",props:{initialValues:{type:Object,default:()=>({})}},emits:["submit"],setup(O,{expose:c,emit:C}){const y=C,b=O,{initialValues:d}=Q(b),t=m({nameAgent:"",idCardNoAgent:"",mobileAgent:"",idCardDateAgent:"2049-12-31T16:00:00.000+0000",idCardFrontUrlAgent:"",idCardBackUrlAgent:""}),w=m([]),k=m([]),V=m("1");m("");const g=m(!1),D=K(),p=m(""),v=m(!1);W([()=>d.value,()=>V.value],([u,e],[n,o])=>{u!==n&&Object.assign(enterpriseForm.value,u),e!==o&&(console.log("checked 变化了：",e,o),e==="1"?t.value.idCardDateAgent="2049-12-31T16:00:00.000+0000":t.value.idCardDateAgent="")});const x=({selectedValues:u})=>{t.value.idCardDateAgent=u.join("-"),g.value=!1},F=u=>{y("submit",t.value)},R=u=>{t.value=u},P=({selectedOptions:u})=>{p.value=u.map(e=>e.text).join("/")},q=()=>t.value,S=async u=>{console.log(u);const e=await z({file:u.file,isPrivate:!1});e.success&&(t.value.idCardFrontUrlAgent=e.obj),console.log(e,"0000")},I=async u=>{console.log(u);const e=await z({file:u.file,isPrivate:!1});e.success&&(t.value.idCardBackUrlAgent=e.obj),console.log(e,"0000")};return c({formFields:t,getFormData:q,updateFormData:R}),(u,e)=>{const n=i("van-field"),o=i("van-radio"),f=i("van-radio-group"),_=i("van-uploader"),A=i("van-cell-group"),B=i("van-form"),$=i("van-cascader"),T=i("van-popup"),L=i("van-date-picker");return N(),H(X,null,[a(B,{onSubmit:F},{default:s(()=>[a(A,{inset:""},{default:s(()=>[a(n,{modelValue:t.value.nameAgent,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value.nameAgent=l),name:"nameAgent",label:"经办人名称",placeholder:"请填写经办人名称",rules:[{required:!0,message:"请输入经办人名称"}]},null,8,["modelValue"]),a(n,{modelValue:t.value.idCardNoAgent,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value.idCardNoAgent=l),name:"idCardNoAgent",label:"身份证号",placeholder:"请输入经办人身份证号",rules:[{required:!0,message:"请输入经办人身份证号"}]},null,8,["modelValue"]),a(n,{modelValue:t.value.mobileAgent,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value.mobileAgent=l),name:"mobileAgent",label:"经办人手机号",placeholder:"请填写经办人手机号",rules:[{required:!0,message:"请填写经办人手机号"}]},null,8,["modelValue"]),a(n,{name:"radio",label:"证件到期日"},{input:s(()=>[a(f,{modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=l=>V.value=l),direction:"horizontal"},{default:s(()=>[a(o,{name:"1"},{default:s(()=>[U("终身")]),_:1}),a(o,{name:"2"},{default:s(()=>[U("有限日期")]),_:1})]),_:1},8,["modelValue"])]),_:1}),V.value==="2"?(N(),M(n,{key:0,modelValue:t.value.idCardDateAgent,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value.idCardDateAgent=l),"is-link":"",readonly:"",name:"expiryDate",label:"有限日期",placeholder:"点击选择时间",onClick:e[5]||(e[5]=l=>g.value=!0)},null,8,["modelValue"])):E("",!0),a(n,{name:"uploader",label:"身份证正面"},{input:s(()=>[a(_,{modelValue:w.value,"onUpdate:modelValue":e[6]||(e[6]=l=>w.value=l),"after-read":S,"max-count":"1"},null,8,["modelValue"])]),_:1}),a(n,{name:"uploader",label:"身份证背面"},{input:s(()=>[a(_,{modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=l=>k.value=l),"after-read":I,"max-count":"1"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(T,{show:v.value,"onUpdate:show":e[10]||(e[10]=l=>v.value=l),round:"",position:"bottom"},{default:s(()=>[a($,{modelValue:p.value,"onUpdate:modelValue":e[8]||(e[8]=l=>p.value=l),title:"请选择所在地区",options:G(D),onClose:e[9]||(e[9]=l=>v.value=!1),onFinish:P},null,8,["modelValue","options"])]),_:1},8,["show"]),a(T,{show:g.value,"onUpdate:show":e[12]||(e[12]=l=>g.value=l),position:"bottom"},{default:s(()=>[a(L,{onConfirm:x,onCancel:e[11]||(e[11]=l=>g.value=!1)})]),_:1},8,["show"])],64)}}},re={class:"div-body"},ie={class:"div-container"},de={class:"div-container-steps"},me={class:"div-footer"},pe={__name:"index",setup(O){const c=m(0),C=m(null),y=oe(Y),b=m({}),d=p=>{w(),c.value=p,V(p)},t=()=>{console.log(c.value),c.value===2&&(b.value.agent=C.value.getFormData()),c.value--,console.log(c.value),V(c.value)},w=()=>{switch(c.value){case 0:b.value.enterprise=C.value.getFormData();break;case 1:b.value.corporation=C.value.getFormData();break;case 2:b.value.agent=C.value.getFormData();break}},k=p=>{const v=p!==void 0?p:{};ne(()=>C.value.updateFormData(v))},V=p=>{switch(p){case 0:y.value=Y,k(b.value.enterprise);break;case 1:y.value=se,k(b.value.corporation);break;case 2:y.value=ue,k(b.value.agent);break}},g=async()=>{w();const p=C.value.formFields,v={...b.value.enterprise,...b.value.corporation,...p};await Z(v);const x={userIdentNo:v.operIdCardNo,accountName:"15752941229",corpIdentNo:v.creditCode,corpName:v.enterpriseName,corpType:1,legalRepName:v.operName,mobile:v.operMobile,userName:v.nameAgent},F=await h(x);window.location.href=F.obj.authUrl},D=()=>history.back();return(p,v)=>{const x=i("van-nav-bar"),F=i("van-step"),R=i("van-steps"),P=i("van-button"),q=i("van-col"),S=i("van-row");return N(),H("div",re,[a(x,{title:"企业开户","left-arrow":"",onClickLeft:D}),J("div",ie,[J("div",de,[a(R,{active:c.value,"active-icon":"success","active-color":"#07c160"},{default:s(()=>[a(F,null,{default:s(()=>[U("企业信息")]),_:1}),a(F,null,{default:s(()=>[U("法人信息")]),_:1}),a(F,null,{default:s(()=>[U("经办人信息")]),_:1})]),_:1},8,["active"])]),(N(),M(ae(y.value),{key:y.value,ref_key:"RefForm",ref:C}))]),J("div",me,[c.value===0?(N(),M(P,{key:0,type:"primary",block:"",onClick:v[0]||(v[0]=I=>d(1))},{default:s(()=>[U("下一步")]),_:1})):E("",!0),c.value===1||c.value===2?(N(),M(S,{key:1,gutter:20},{default:s(()=>[a(q,{span:12},{default:s(()=>[c.value!==0?(N(),M(P,{key:0,plain:"",type:"primary",block:"",onClick:t},{default:s(()=>[U("上一步")]),_:1})):E("",!0)]),_:1}),a(q,{span:12},{default:s(()=>[a(P,{type:"primary",block:"",onClick:v[1]||(v[1]=I=>c.value===2?g():d(2))},{default:s(()=>[U(le(c.value===2?"提交":"下一步"),1)]),_:1})]),_:1})]),_:1})):E("",!0)])])}}},_e=te(pe,[["__scopeId","data-v-712def2e"]]);export{_e as default};
