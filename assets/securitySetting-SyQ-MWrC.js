import{b as N,j as z,k as D,g as F}from"./api-D3SolMte.js";import{s as U,C as M}from"./md5-DTidbHMg.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as i,j as A,c as E,b as l,w as t,u as a,i as c,F as R,d as m,o as $,a as C,e as b,t as G}from"./index-DOi0EQkM.js";const H={style:{margin:"16px"}},J=["src"],K={style:{margin:"16px"}},Q={style:{margin:"16px"}},X={__name:"securitySetting",setup(Y,{emit:Z}){let p=i(!1),v=i(!1),f=i(!1),d=i({newPassword:"",password:"",confirmPassword:"",value:[],phone:17600662767}),n=i({oldPassWord:"",newPassWord:"",reNewPassWord:""}),u=i({uid:"",viewCode:"",verifyCode:""}),V=i("");i("");const w=i(0);let y=null;const P={name:[{required:!0,message:"请填写姓名"}],userTel:[{required:!0,message:"请填写手机号"}],idCard:[{required:!0,message:"请填写身份证号"}],superiorTel:[{required:!0,message:"请填写上级渠道手机号"}],verifyCode:[{required:!0,message:"请填写短信验证码"}],viewCode:[{required:!0,message:"请填写图形验证码"}]};A(()=>{V.value=N+"code/loginCode?uid="+S()});const q=()=>{U({type:"success",message:"图片验证码刷新成功"}),V.value=N+"code/loginCode?uid="+S()},I=()=>{n.value.oldPassWord=M.md5(n.value.oldPassWord),n.value.newPassWord=M.md5(n.value.newPassWord),n.value.reNewPassWord=M.md5(n.value.reNewPassWord),z(n.value)},j=async()=>{let s=await D(u.value);console.log(s,"000"),s.success||U({type:"warning",message:s.msg})},L=()=>{if(w.value<=0){if(!d.value.phone||!u.value.viewCode){console.log("请先输入手机号"),U({type:"danger",message:"请先输入手机号，填写图形验证码"});return}console.log("短信已发送"),F({mobile:d.value.phone,uid:u.value.uid,regCode:u.value.viewCode}),w.value=60,clearInterval(y),y=setInterval(()=>{w.value>0?w.value--:clearInterval(y)},1e3)}},S=()=>{let s=Math.floor(Math.random()*10)+"";return s+=Math.floor(Math.random()*10)+"",s+=Math.floor(Math.random()*10)+"",s+=Math.floor(Math.random()*10)+"",s+=Math.floor(Math.random()*10)+"",s+=Math.floor(Math.random()*10)+"",s=new Date().getTime()+s,u.value.uid=s,s},T=()=>history.back();return(s,e)=>{const B=m("van-nav-bar"),h=m("van-cell"),_=m("van-cell-group"),r=m("van-field"),g=m("van-button"),k=m("van-form"),W=m("van-action-sheet"),x=m("van-uploader");return $(),E(R,null,[l(B,{title:"安全设置","left-arrow":"",onClickLeft:T,fixed:!0,placeholder:!0,"safe-area-inset-top":!0}),l(_,null,{default:t(()=>[l(h,{title:"登录密码",value:"已设置",onClick:e[0]||(e[0]=o=>c(p)?p.value=!0:p=!0),"is-link":""}),l(h,{title:"手机号码",value:"已绑定",onClick:e[1]||(e[1]=o=>c(v)?v.value=!0:v=!0),"is-link":""}),l(h,{title:"实名认证",value:"未认证",onClick:e[2]||(e[2]=o=>c(f)?f.value=!0:f=!0),"is-link":""})]),_:1}),l(W,{show:a(p),"onUpdate:show":e[6]||(e[6]=o=>c(p)?p.value=o:p=o),title:"密码修改"},{default:t(()=>[l(k,null,{default:t(()=>[l(_,{inset:""},{default:t(()=>[l(r,{autocomplete:"off",modelValue:a(n).oldPassWord,"onUpdate:modelValue":e[3]||(e[3]=o=>a(n).oldPassWord=o),type:"text",name:"oldPassWord",label:"原密码",placeholder:"请填写原密码"},null,8,["modelValue"]),l(r,{autocomplete:"off",modelValue:a(n).newPassWord,"onUpdate:modelValue":e[4]||(e[4]=o=>a(n).newPassWord=o),type:"password",name:"newPassWord",label:"新密码",placeholder:"请填写新密码"},null,8,["modelValue"]),l(r,{autocomplete:"off",modelValue:a(n).reNewPassWord,"onUpdate:modelValue":e[5]||(e[5]=o=>a(n).reNewPassWord=o),type:"password",name:"reNewPassWord",label:"确认新密码",placeholder:"请再次填写新密码"},null,8,["modelValue"]),C("div",H,[l(g,{round:"",block:"",type:"primary",size:"small",onClick:I},{default:t(()=>[b(" 更新信息 ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["show"]),l(W,{show:a(v),"onUpdate:show":e[10]||(e[10]=o=>c(v)?v.value=o:v=o),title:"绑定手机号"},{default:t(()=>[l(k,{rules:P},{default:t(()=>[l(_,{inset:""},{default:t(()=>[l(r,{modelValue:a(d).phone,"onUpdate:modelValue":e[7]||(e[7]=o=>a(d).phone=o),disabled:!0,label:"手机号",placeholder:"17600662767"},null,8,["modelValue"]),l(r,{modelValue:a(u).viewCode,"onUpdate:modelValue":e[8]||(e[8]=o=>a(u).viewCode=o),autocomplete:"off",center:"",clearable:"",placeholder:"请输入图形验证码",rules:P.viewCode,name:"viewCode"},{button:t(()=>[C("img",{src:a(V),alt:"",class:"img-code",onClick:q},null,8,J)]),_:1},8,["modelValue","rules"]),l(r,{modelValue:a(u).verifyCode,"onUpdate:modelValue":e[9]||(e[9]=o=>a(u).verifyCode=o),autocomplete:"off",center:"",clearable:"",placeholder:"请输入短信验证码",rules:P.verifyCode,name:"verifyCode"},{button:t(()=>[l(g,{size:"small",type:"primary",onClick:L,disabled:w.value>0},{default:t(()=>[b(G(w.value>0?`${w.value}s后重新发送`:"发送验证码"),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue","rules"]),C("div",K,[l(g,{round:"",block:"",type:"primary",onClick:j},{default:t(()=>[b(" 下一步 ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["show"]),l(W,{show:a(f),"onUpdate:show":e[15]||(e[15]=o=>c(f)?f.value=o:f=o),title:"实名认证"},{default:t(()=>[l(k,null,{default:t(()=>[l(_,{inset:""},{default:t(()=>[l(r,{modelValue:a(d).password,"onUpdate:modelValue":e[11]||(e[11]=o=>a(d).password=o),name:"name",label:"姓名",placeholder:"请填写姓名"},null,8,["modelValue"]),l(r,{modelValue:a(d).password,"onUpdate:modelValue":e[12]||(e[12]=o=>a(d).password=o),name:"name",label:"身份证号码",placeholder:"请填写身份证号码"},null,8,["modelValue"]),l(r,{name:"uploader",label:"身份证正面"},{input:t(()=>[l(x,{modelValue:a(d).value,"onUpdate:modelValue":e[13]||(e[13]=o=>a(d).value=o)},null,8,["modelValue"])]),_:1}),l(r,{name:"uploader",label:"身份证背面"},{input:t(()=>[l(x,{modelValue:a(d).value,"onUpdate:modelValue":e[14]||(e[14]=o=>a(d).value=o)},null,8,["modelValue"])]),_:1}),C("div",Q,[l(g,{round:"",block:"",type:"primary","native-type":"submit"},{default:t(()=>[b(" 提交信息 ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["show"])],64)}}},te=O(X,[["__scopeId","data-v-60eb18ae"]]);export{te as default};
