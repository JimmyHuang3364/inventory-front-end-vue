import{_ as i,z as c,B as m,T as l,c as u,b as s,t as p,w as f,v as w,A as b,d as v,o as h}from"./index-BMeqUuqK.js";const P={name:"ChangePassword",computed:{...c(["currentUser"])},methods:{async handleSubmit(t){try{const a=t.target,d=new FormData(a),n=this.$store.state.currentUser.id,{data:o,status:r,statusText:e}=await m.updatePassword(n,d);if(e!=="OK"&&r!==200)throw new Error(o.message);l.fire({icon:"success",title:o.message})}catch(a){l.fire({icon:"error",title:a})}}}},g={class:"container mt-5 bg-dark container-bprder pb-3"},y={class:"form-label-group text-white mt-4"},x={for:"inputPassword"};function S(t,a,d,n,o,r){return h(),u("div",g,[a[3]||(a[3]=s("h1",{class:"text-white mt-3"},"變更密碼",-1)),s("form",{onSubmit:a[1]||(a[1]=v((...e)=>r.handleSubmit&&r.handleSubmit(...e),["stop","prevent"])),class:""},[s("div",y,[s("label",x,p(t.currentUser.name),1),f(s("input",{type:"text",name:"name",class:"form-control bg-secondary","onUpdate:modelValue":a[0]||(a[0]=e=>t.currentUser.name=e),readonly:"",required:""},null,512),[[w,t.currentUser.name]])]),a[2]||(a[2]=b('<div class="form-label-group text-white mt-4" data-v-2af9677d><label for="inputPassword" data-v-2af9677d>原來密碼</label><input type="password" name="password" class="form-control" placeholder="Password" required data-v-2af9677d></div><div class="form-label-group text-white mt-4" data-v-2af9677d><label for="inputPassword" data-v-2af9677d>新的密碼</label><input type="password" name="newPassword" class="form-control" placeholder="New Password" required data-v-2af9677d></div><div class="form-label-group text-white mt-4" data-v-2af9677d><label for="inputPassword" data-v-2af9677d>確認新的密碼</label><input type="password" name="newPasswordCheck" class="form-control" placeholder="New Password Check" required data-v-2af9677d></div><br data-v-2af9677d><div class="d-flex justify-content-end" data-v-2af9677d><button type="submit" class="btn btn-primary" data-v-2af9677d>Submit</button></div>',5))],32)])}const _=i(P,[["render",S],["__scopeId","data-v-2af9677d"]]);export{_ as default};