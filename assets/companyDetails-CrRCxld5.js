import{r,c as D,a as l,b as e,w as t,T as A,u as f,i as g,F as B,d as u,o as H,n as T,t as i,e as C}from"./index-DOi0EQkM.js";import{_ as q}from"./SupplierForm-Chjz4Ev0.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.esm-FbLyGc7u.js";const I={class:"div-body"},L={class:"custom-title"},M={class:"custom-title"},z={class:"custom-title"},E={class:"custom-title"},R={class:"custom-title"},j={class:"custom-title"},G={class:"custom-title"},J={class:"custom-title"},K={class:"custom-title"},O={class:"custom-title"},Q={class:"custom-title"},W={class:"custom-title"},X={class:"custom-title"},Y={class:"custom-title"},Z={class:"div-footer"},$={style:{margin:"16px"}},ee={__name:"companyDetails",setup(te){const a=r({loginAccount:"",phone:"",password:"",confirmPassword:"",agentName:"",agentPhone:"",supplierName:"",creditCode:"",industryCategory:"",landline:"",region:"",address:"",legalPersonName:"",legalPersonPhone:"",fieldValue:""}),b=[30,Math.round(.4*window.innerHeight),Math.round(.8*window.innerHeight)];let m=r(b[0]),c=r(0),d=r(!1);const p=r(""),v=r(""),P=_=>{_.height===30?c.value=0:(c.value-=_.height,c.value<-600&&(c.value=-600))},N=()=>history.back(),y=_=>{console.log("submit",_)};return(_,o)=>{const k=u("van-nav-bar"),s=u("van-cell"),w=u("van-cell-group"),V=u("van-button"),x=u("van-floating-panel"),h=u("van-field"),S=u("van-form"),U=u("van-action-sheet");return H(),D(B,null,[l("div",I,[e(k,{title:"供应商公司详情","left-arrow":"",onClickLeft:N,fixed:!0,placeholder:!0,"safe-area-inset-top":!0}),e(A,{name:"slide"},{default:t(()=>[l("div",{style:T({top:f(c)+"px"}),class:"slidable-div slide-enter-active"},[e(w,null,{default:t(()=>[e(s,{title:"登录账号"},{value:t(()=>[l("span",L,i(a.value.loginAccount),1)]),_:1}),e(s,{title:"验证手机"},{value:t(()=>[l("span",M,i(a.value.phone),1)]),_:1}),e(s,{title:"登录密码"},{value:t(()=>[l("span",z,i(a.value.password),1)]),_:1}),e(s,{title:"密码确认"},{value:t(()=>[l("span",E,i(a.value.confirmPassword),1)]),_:1}),e(s,{title:"经办人姓名"},{value:t(()=>[l("span",R,i(a.value.agentName),1)]),_:1}),e(s,{title:"经办人手机"},{value:t(()=>[l("span",j,i(a.value.agentPhone),1)]),_:1}),e(s,{title:"供应商名称"},{value:t(()=>[l("span",G,i(a.value.supplierName),1)]),_:1}),e(s,{title:"统一信用代码"},{value:t(()=>[l("span",J,i(a.value.creditCode),1)]),_:1}),e(s,{title:"行业类别"},{value:t(()=>[l("span",K,i(a.value.industryCategory),1)]),_:1}),e(s,{title:"固定电话"},{value:t(()=>[l("span",O,i(a.value.landline),1)]),_:1}),e(s,{title:"地区"},{value:t(()=>[l("span",Q,i(a.value.fieldValue),1)]),_:1}),e(s,{title:"详细地址"},{value:t(()=>[l("span",W,i(a.value.address),1)]),_:1}),e(s,{title:"法人姓名"},{value:t(()=>[l("span",X,i(a.value.legalPersonName),1)]),_:1}),e(s,{title:"法人手机"},{value:t(()=>[l("span",Y,i(a.value.legalPersonPhone),1)]),_:1})]),_:1}),l("div",Z,[e(V,{type:"primary",block:"",onClick:o[0]||(o[0]=n=>g(d)?d.value=!0:d=!0)},{default:t(()=>[C("修改密码")]),_:1})])],4)]),_:1})]),e(x,{height:f(m),"onUpdate:height":o[1]||(o[1]=n=>g(m)?m.value=n:m=n),anchors:b,onHeightChange:P},{default:t(()=>[e(q,{onSubmit:y})]),_:1},8,["height"]),e(U,{show:f(d),"onUpdate:show":o[6]||(o[6]=n=>g(d)?d.value=n:d=n),title:"重置密码"},{default:t(()=>[e(S,{onSubmit:y},{default:t(()=>[e(w,{inset:""},{default:t(()=>[e(h,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=n=>p.value=n),name:"用户名",label:"供应商名称",placeholder:"供应商名称"},null,8,["modelValue"]),e(h,{modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=n=>v.value=n),name:"密码",label:"统一社会信用代码",placeholder:"统一社会信用代码"},null,8,["modelValue"]),e(h,{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=n=>p.value=n),name:"用户名",label:"登录密码",placeholder:"用户名",rules:[{required:!0,message:"请填写登录密码"}]},null,8,["modelValue"]),e(h,{modelValue:v.value,"onUpdate:modelValue":o[5]||(o[5]=n=>v.value=n),type:"password",name:"密码",label:"密码确认",placeholder:"密码确认",rules:[{required:!0,message:"请再次输入密码"}]},null,8,["modelValue"])]),_:1}),l("div",$,[e(V,{round:"",block:"",type:"primary","native-type":"submit"},{default:t(()=>[C(" 提交 ")]),_:1})])]),_:1})]),_:1},8,["show"])],64)}}},ne=F(ee,[["__scopeId","data-v-4e50886b"]]);export{ne as default};
