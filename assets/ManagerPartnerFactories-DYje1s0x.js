import{_ as v,T as c,c as l,g as d,f as u,b as t,h as g,F as b,r as x,j as p,o as i,i as k,t as n}from"./index-BMeqUuqK.js";import{m as _}from"./managers-CGvdj1Ci.js";import{P as L}from"./PageLoader-C4JJMFSR.js";const P={name:"ManagerPartnerFactories",components:{PageLoader:L},created(){this.fetchPartnerFactories(),this.isLoading=!1},data(){return{partnerFactories:[],isLoading:!0}},methods:{async fetchPartnerFactories(){try{const{data:a,status:e,statusText:r}=await _.partnerFactories.getAll();if(r!=="OK"&&e!==200)throw new Error;if(a.status!=="success")throw new Error(a.message);this.partnerFactories=a.partnerFactories}catch{c.fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},async deletePartnerFactory(a){try{const{data:e,status:r,statusText:h}=await _.partnerFactories.delete(a);if(h!=="OK"&&r!==200)throw new Error;if(e.status!=="success")throw new Error(e.message);this.partnerFactories=this.partnerFactories.filter(o=>o.id!==a),c.fire({icon:"success",title:e.message})}catch(e){c.fire({icon:"error",title:e})}}}},C={class:"m-5"},z={key:0},B={key:1},F={class:"d-flex justify-content-end mr-3"},M={class:"table table-hover table-striped table-dark"},V={class:"align-middle",scope:"row"},y={class:"align-middle"},E=["src"],T={class:"align-middle"},H={class:"align-middle"},N={class:"align-middle"},j={class:"align-middle"},A={class:"py-1 align-middle"},K=["onClick"];function O(a,e,r,h,o,f){const w=p("PageLoader"),m=p("router-link");return i(),l("div",C,[o.isLoading?(i(),l("div",z,[d(w)])):u("",!0),o.isLoading?u("",!0):(i(),l("div",B,[t("div",F,[d(m,{to:{name:"manager-partner-factories-new"},class:"btn btn-primary btn-lg my-3"},{default:g(()=>e[0]||(e[0]=[k("+発注人")])),_:1})]),t("table",M,[e[3]||(e[3]=t("thead",null,[t("tr",null,[t("th",{scope:"col"},[t("h3",null,"#")]),t("th",{scope:"col"}),t("th",{scope:"col"},[t("h3",null,"名稱")]),t("th",{scope:"col"},[t("h3",null,"地址")]),t("th",{scope:"col"},[t("h3",null,"電話")]),t("th",{scope:"col"},[t("h3",null,"傳真")]),t("th",{scope:"col"},[t("h3",null,"操作")])])],-1)),t("tbody",null,[(i(!0),l(b,null,x(o.partnerFactories,s=>(i(),l("tr",{key:s.id},[t("td",V,[t("h4",null,n(s.id),1)]),t("th",y,[t("img",{src:s.photoLink?s.photoLink:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",width:"100px",height:"100px",alt:"..."},null,8,E)]),t("td",T,[t("h4",null,n(s.name),1)]),t("td",H,[t("h4",null,n(s.address),1)]),t("td",N,[t("h4",null,n(s.tel),1)]),t("td",j,[t("h4",null,n(s.fax),1)]),t("td",A,[d(m,{to:{name:"manager-partner-factories-edit",params:{id:s.id}},class:"btn btn-outline-warning btn-lg mr-4"},{default:g(()=>e[1]||(e[1]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-fill",viewBox:"0 0 16 16"},[t("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})],-1)])),_:2},1032,["to"]),t("button",{onClick:D=>f.deletePartnerFactory(s.id),class:"btn btn-outline-danger btn-lg"},e[2]||(e[2]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[t("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1)]),8,K)])]))),128))])])]))])}const G=v(P,[["render",O]]);export{G as default};