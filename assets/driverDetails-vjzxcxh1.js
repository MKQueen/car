import{r as i,c as D,a as s,b as e,w as a,T as A,u as f,i as h,F as B,d as l,o as H,n as T,t as g,e as C}from"./index-DOi0EQkM.js";import{_ as q}from"./DriverForm-DwEiTCvq.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./api-D3SolMte.js";const I={class:"div-body"},L={class:"custom-title"},M={class:"custom-title"},z={class:"custom-title"},E={class:"div-footer"},R={style:{margin:"16px"}},j={__name:"driverDetails",setup(G){const _=i({loginAccount:"",phone:"",password:"",confirmPassword:"",agentName:"",agentPhone:"",supplierName:"",creditCode:"",industryCategory:"",landline:"",region:"",address:"",legalPersonName:"",legalPersonPhone:"",fieldValue:""}),b=[30,Math.round(.4*window.innerHeight),Math.round(.6*window.innerHeight)];let d=i(b[0]),r=i(0),n=i(!1);const m=i(""),p=i(""),k=u=>{u.height===30?r.value=0:(r.value-=u.height,r.value<-200&&(r.value=-200))},x=()=>history.back(),w=u=>{console.log("submit",u)};return(u,t)=>{const N=l("van-nav-bar"),v=l("van-cell"),V=l("van-cell-group"),y=l("van-button"),S=l("van-floating-panel"),c=l("van-field"),U=l("van-form"),P=l("van-action-sheet");return H(),D(B,null,[s("div",I,[e(N,{title:"司机详情","left-arrow":"",onClickLeft:x,fixed:!0,placeholder:!0,"safe-area-inset-top":!0}),e(A,{name:"slide"},{default:a(()=>[s("div",{style:T({top:f(r)+"px"}),class:"slidable-div slide-enter-active"},[e(V,null,{default:a(()=>[e(v,{title:"登录账号"},{value:a(()=>[s("span",L,g(_.value.loginAccount),1)]),_:1}),e(v,{title:"司机姓名"},{value:a(()=>[s("span",M,g(_.value.phone),1)]),_:1}),e(v,{title:"手机号码"},{value:a(()=>[s("span",z,g(_.value.password),1)]),_:1})]),_:1}),s("div",E,[e(y,{type:"primary",block:"",onClick:t[0]||(t[0]=o=>h(n)?n.value=!0:n=!0)},{default:a(()=>[C("修改密码")]),_:1})])],4)]),_:1})]),e(S,{height:f(d),"onUpdate:height":t[1]||(t[1]=o=>h(d)?d.value=o:d=o),anchors:b,onHeightChange:k},{default:a(()=>[e(q,{onSubmit:w})]),_:1},8,["height"]),e(P,{show:f(n),"onUpdate:show":t[6]||(t[6]=o=>h(n)?n.value=o:n=o),title:"重置密码"},{default:a(()=>[e(U,{onSubmit:w},{default:a(()=>[e(V,{inset:""},{default:a(()=>[e(c,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=o=>m.value=o),name:"司机姓名",label:"司机姓名",placeholder:"司机姓名"},null,8,["modelValue"]),e(c,{modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=o=>p.value=o),name:"手机号码",label:"手机号码",placeholder:"手机号码"},null,8,["modelValue"]),e(c,{modelValue:m.value,"onUpdate:modelValue":t[4]||(t[4]=o=>m.value=o),name:"用户名",label:"登录密码",placeholder:"登录密码",rules:[{required:!0,message:"请填写登录密码"}]},null,8,["modelValue"]),e(c,{modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=o=>p.value=o),type:"password",name:"密码",label:"密码确认",placeholder:"密码确认",rules:[{required:!0,message:"请再次输入密码"}]},null,8,["modelValue"])]),_:1}),s("div",R,[e(y,{round:"",block:"",type:"primary","native-type":"submit"},{default:a(()=>[C(" 提交 ")]),_:1})])]),_:1})]),_:1},8,["show"])],64)}}},W=F(j,[["__scopeId","data-v-5d7db4f4"]]);export{W as default};
