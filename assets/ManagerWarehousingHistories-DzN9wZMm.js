import{_ as T,T as m,K as k,L as q,c as n,z as f,y,b as t,w as g,v as p,A as w,F as x,s as _,D,o as a,C as b,E as C,t as l,e as L}from"./index-6sV3kBzj.js";import{m as v}from"./managers-yfZInAbt.js";import{P as B}from"./PageLoader-SZJ2ELkE.js";const H={name:"ManagerWarehousingHistories",components:{PageLoader:B},beforeRouteUpdate(r,e,i){if(r.query.searchText||r.query.startDate||r.query.endDate){const o={searchText:r.query.searchText,startDate:r.query.startDate,endDate:r.query.endDate};this.fetchSearchWarehousingHistories(o),i();return}const{customerId:u=""}=r.query;this.fetchWarehousingHistories({queryCategoryId:u}),i()},created(){const{customerId:r=""}=this.$route.query;this.fetchWarehousingHistories({queryCategoryId:r})},data(){return{warehousingHistories:[],customers:[],searchText:"",startDate:"",endDate:"",isLoading:!0}},methods:{async fetchWarehousingHistories({queryCategoryId:r}){try{this.isLoading=!0;const e=await v.warehousingHistories.get({customerId:r}),{data:i,status:u,statusText:o}=e,{warehousingHistories:c,customers:d}=i;if(o!=="OK"&&u!==200)throw new Error;this.warehousingHistories=c,this.customers=d,this.searchText="",this.startDate="",this.endDate="",this.isLoading=!1}catch{m.fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},async fetchSearchWarehousingHistories(r){try{this.isLoading=!0;const{data:e,status:i,statusText:u}=await v.warehousingHistories.getSearch(r);if(u!=="OK"&&i!==200)throw new Error;const{warehousingHistories:o,customers:c}=e;this.warehousingHistories=o,this.customers=c,this.isLoading=!1}catch{m.fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},async remvoeItem(r){try{if((await k.fire({showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",icon:"warning",title:"確定刪除?",text:"確定後，你將會刪除此部品。",confirmButtonText:"確定"})).value){const{data:i,status:u,statusText:o}=await v.warehousingHistories.delete(r);if(o!=="OK"&&u!==200)throw new Error;q.fire("刪除！",`${i.message}`,"success"),this.warehousingHistories=this.warehousingHistories.filter(c=>c.id!==r);return}}catch{m.fire({icon:"error",title:"出錯!!無法刪除，請稍後在試"})}}}},O={class:"m-5"},V={key:0},I={key:1},P={class:"d-flex justify-content-center"},S={class:"form-row"},N={class:"col-auto"},M={class:"col-auto"},z={class:"col-auto"},E={class:"col-auto align-self-end"},A={class:"mt-3"},K={class:"mt-2"},U={class:"table table-hover table-bordered table-dark"},F={scope:"row"},j={key:0,class:"text-dark",style:{"background-color":"#ea9d06"}},Q={key:1},R={key:2,class:"bg-success"},G={key:3},J=["onClick"];function X(r,e,i,u,o,c){const d=D("PageLoader"),h=D("router-link");return a(),n("div",O,[o.isLoading?(a(),n("div",V,[f(d)])):y("",!0),o.isLoading?y("",!0):(a(),n("div",I,[t("form",P,[t("div",S,[t("div",N,[e[3]||(e[3]=t("p",{class:"text-light m-0"},"品番",-1)),g(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.searchText=s),list:"partnumberList",type:"text",class:"form-control",name:"searchText",id:"searchText",placeholder:"搜尋番號",value:""},null,512),[[p,o.searchText]]),e[4]||(e[4]=t("datalist",{id:"partnumberList"},null,-1))]),t("div",M,[e[5]||(e[5]=t("p",{class:"text-light m-0"},"開始",-1)),g(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.startDate=s),type:"date",class:"form-control",name:"startDate",id:"startDate",value:""},null,512),[[p,o.startDate]])]),t("div",z,[e[6]||(e[6]=t("p",{class:"text-light m-0"},"結束",-1)),g(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.endDate=s),type:"date",class:"form-control",name:"endDate",id:"endDate",value:""},null,512),[[p,o.endDate]])]),t("div",E,[f(h,{to:{name:"manager-warehousing-histories",query:{searchText:o.searchText,startDate:o.startDate,endDate:o.endDate}},class:"btn btn-primary",role:"button"},{default:w(()=>e[7]||(e[7]=[b("搜尋")])),_:1},8,["to"])])])]),t("div",A,[f(h,{class:"btn btn-outline-secondary mr-1 mb-1",to:{name:"manager-warehousing-histories"},role:"button"},{default:w(()=>e[8]||(e[8]=[b("全部")])),_:1}),(a(!0),n(x,null,_(o.customers,s=>(a(),C(h,{key:s.id,class:"btn btn-outline-secondary mx-1 mb-1",to:{name:"manager-warehousing-histories",query:{customerId:s.id}},role:"button"},{default:w(()=>[b(l(s.name),1)]),_:2},1032,["to"]))),128))]),t("div",K,[t("table",U,[e[10]||(e[10]=t("thead",null,[t("tr",{class:"table-active",style:{"text-align":"center"}},[t("th",{scope:"col"},[t("h4",null,"日期")]),t("th",{scope:"col"},[t("h4",null,"品番")]),t("th",{scope:"col"},[t("h4",null,"入庫")]),t("th",{scope:"col"},[t("h4",null,"出庫")]),t("th",{scope:"col"},[t("h4",null,"餘存")]),t("th",{scope:"col"},[t("h4",null,"備註")]),t("th",{scope:"col"},[t("h4",null,"操作")])])],-1)),t("tbody",null,[(a(!0),n(x,null,_(o.warehousingHistories,s=>(a(),n("tr",{key:s.id,style:{"text-align":"center"}},[t("th",F,l(s.textCreatedAt),1),t("td",null,l(s.PartNumber.name?s.PartNumber.name:s.SubPartNumber.name),1),s.quntityOfWarehousing?(a(),n("td",j,l(s.quntityOfWarehousing),1)):(a(),n("td",Q,l(s.quntityOfWarehousing),1)),s.quntityOfShipping?(a(),n("td",R,l(s.quntityOfShipping),1)):(a(),n("td",G,l(s.quntityOfShipping),1)),t("td",null,l(s.totalQuntity),1),t("td",null,l(s.note),1),t("td",null,[t("button",{onClick:L(Y=>c.remvoeItem(s.id),["stop","prevent"]),class:"btn btn-outline-danger btn-sm"},e[9]||(e[9]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[t("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1)]),8,J)])]))),128))])])])]))])}const tt=T(H,[["render",X]]);export{tt as default};
