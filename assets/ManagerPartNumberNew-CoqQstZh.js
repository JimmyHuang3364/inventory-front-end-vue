import{M as i}from"./ManagerPartNumberForm-JYVqcIE6.js";import{m}from"./managers-C8avhEAh.js";import{_ as u,T as a,c as f,k as d,q as p,o as g}from"./index-bh3KkmT4.js";const l={name:"ManagerPartNumberNew",components:{ManagerPartNumberForm:i},data(){return{isProcessing:!1}},methods:{async handleAfterSubmit(r){try{this.isProcessing=!0;const{data:e,status:s,statusText:t}=await m.partNumbers.create(r);if(t!=="OK"&&s!==200)throw new Error(e.message);this.$router.push({name:"manager-part-numbers"}),a.fire({icon:"success",title:e.message}),this.isProcessing=!1}catch(e){a.fire({icon:"error",title:e}),this.isProcessing=!1}}}},_={class:"container container-border bg-dark mt-5"};function b(r,e,s,t,o,n){const c=p("ManagerPartNumberForm");return g(),f("div",_,[d(c,{onAfterSubmit:n.handleAfterSubmit,"is-processing":o.isProcessing},null,8,["onAfterSubmit","is-processing"])])}const M=u(l,[["render",b],["__scopeId","data-v-f0dc1d1d"]]);export{M as default};