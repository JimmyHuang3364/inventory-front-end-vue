import{m as n}from"./managers-C8avhEAh.js";import{M as c}from"./ManagerPartnerFactoryForm-Bq8wdQYx.js";import{_ as i,T as t,c as m,k as f,q as p,o as g}from"./index-bh3KkmT4.js";const d={name:"ManagerPartnerFactoryNew",components:{ManagerPartnerFactoryForm:c},data(){return{isProcessing:!1}},methods:{async handleAfterSubmit(e){try{this.isProcessing=!0;const{data:r}=await n.partnerFactories.create(e);if(r.status==="error")throw new Error(r.message);this.isProcessing=!1,t.fire({icon:"success",title:"新增成功"}),this.$router.push({name:"manager-partner-factories"})}catch(r){t.fire({icon:"error",title:r}),this.isProcessing=!1}}}},l={class:"container mt-5 bg-dark container-bprder"};function u(e,r,_,h,a,s){const o=p("ManagerPartnerFactoryForm");return g(),m("div",l,[f(o,{onAfterSubmit:s.handleAfterSubmit,"is-processing":a.isProcessing},null,8,["onAfterSubmit","is-processing"])])}const b=i(d,[["render",u],["__scopeId","data-v-f2703561"]]);export{b as default};