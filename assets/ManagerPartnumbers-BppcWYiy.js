import{_ as z,T as w,B as q,C as k,c as d,k as g,i as C,b as t,w as B,v as M,l as f,F as y,h as p,q as T,o as c,p as b,s as L,t as n,n as x,e as _}from"./index-bh3KkmT4.js";import{m as v}from"./managers-C8avhEAh.js";import{P as H}from"./PageLoader-j6vuT6nN.js";const S={name:"ManagerPartnumbers",components:{PageLoader:H},beforeRouteUpdate(o,e,u){if(o.query.searchText){const a={searchText:o.query.searchText};this.fetchSearchPartNumbers(a),u();return}const{customerId:m=""}=o.query;this.fetchPartNumbers({queryCategoryId:m}),u()},created(){const{customerId:o=""}=this.$route.query;this.fetchPartNumbers({queryCategoryId:o})},data(){return{partNumbers:[],customers:[],searchText:"",isLoading:!0}},methods:{async fetchPartNumbers({queryCategoryId:o}){try{this.isLoading=!0;const e=await v.partNumbers.get({customerId:o}),{data:u,status:m,statusText:a}=e,{partNumbers:i,customers:h}=u;if(a!=="OK"&&m!==200)throw new Error;this.partNumbers=i,this.customers=h,this.searchText="",this.isLoading=!1}catch{w.fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},async fetchSearchPartNumbers(o){try{this.isLoading=!0;const{data:e,status:u,statusText:m}=await v.partNumbers.getSearch(o);if(m!=="OK"&&u!==200)throw new Error;const{partNumbers:a,customers:i}=e;this.partNumbers=a,this.customers=i,this.isLoading=!1}catch{w.fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},async removeItem(o,e,u){try{if((await q.fire({showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",icon:"warning",title:"確定刪除?",text:"確定後，你將會刪除此部品。",confirmButtonText:"確定"})).value){if(e==="part-number"){const{data:a,status:i,statusText:h}=await v.partNumbers.delete(o);if(h!=="OK"&&i!==200)throw new Error;k.fire("刪除！",`${a.message}`,"success"),this.partNumbers=this.partNumbers.filter(l=>l.id!==o);return}if(e==="sub-part-number"){const{data:a,status:i,statusText:h}=await v.subPartNumbers.delete(o);if(h!=="OK"&&i!==200)throw new Error;k.fire("刪除！",`${a.message}`,"success"),this.partNumbers.map(l=>{l.id===u&&(l.subPartNumbers=l.subPartNumbers.filter(s=>s.id!==o))});return}}}catch{w.fire({icon:"error",title:"出錯!!請稍後在試"})}}}},I={class:"m-5"},V={key:0},P={key:1},Q={class:"d-flex justify-content-center",action:"#",method:"post"},E={class:"form-row"},A={class:"col-auto"},K={class:"col-auto align-self-end"},O={class:"d-flex flex-row justify-content-between align-items-center mt-3"},j={class:""},D={class:"mt-2"},F={class:"table table-bordered table-dark"},U={key:0,style:{"background-color":"#b0b0b0","text-align":"center"}},R={class:"text-dark",scope:"row"},G={class:"text-dark"},J={class:"text-dark"},W={class:"text-dark"},X={class:"py-1 align-middle"},Y=["onClick"],Z={key:1,style:{"background-color":"#182f8b","text-align":"center"}},$={scope:"row"},N={class:"py-1 align-middle"},tt=["onClick"],et={class:"text-dark",scope:"row"},st={class:"text-dark",scope:"row"},at={class:"text-dark"},ot={class:"text-dark"},nt={class:"py-1 align-middle"},rt=["onClick"];function lt(o,e,u,m,a,i){const h=T("PageLoader"),l=T("router-link");return c(),d("div",I,[a.isLoading?(c(),d("div",V,[g(h)])):C("",!0),a.isLoading?C("",!0):(c(),d("div",P,[t("form",Q,[t("div",E,[t("div",A,[e[1]||(e[1]=t("p",{class:"text-light m-0"},"品番",-1)),B(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.searchText=s),list:"partnumberList",type:"text",class:"form-control",name:"searchText",id:"searchText",placeholder:"搜尋番號",value:""},null,512),[[M,a.searchText]]),e[2]||(e[2]=t("datalist",{id:"partnumberList"},null,-1))]),t("div",K,[g(l,{to:{name:"manager-part-numbers",query:{searchText:a.searchText}},class:"btn btn-primary",role:"button"},{default:f(()=>e[3]||(e[3]=[b("搜尋")])),_:1},8,["to"])])])]),t("div",O,[t("div",j,[g(l,{class:"btn btn-outline-secondary mr-1",to:{name:"manager-part-numbers"},role:"button"},{default:f(()=>e[4]||(e[4]=[b("全部")])),_:1}),(c(!0),d(y,null,p(a.customers,s=>(c(),L(l,{key:s.id,class:"btn btn-outline-secondary mx-1 mt-1",to:{name:"manager-part-numbers",query:{customerId:s.id}},role:"button"},{default:f(()=>[b(n(s.name),1)]),_:2},1032,["to"]))),128))]),t("div",null,[g(l,{to:{name:"manager-part-numbers-new"},class:"btn btn-warning mb-2",role:"button",style:{"margin-left":"60.994px"}},{default:f(()=>e[5]||(e[5]=[b("+ 新增部品")])),_:1})])]),t("div",D,[t("table",F,[e[12]||(e[12]=t("thead",null,[t("tr",{class:"table-active",style:{"text-align":"center"}},[t("th",{scope:"col"},[t("h4",null,"品番")]),t("th",{scope:"col"},[t("h4",null,"單價")]),t("th",{scope:"col"},[t("h4",null,"在庫數量")]),t("th",{scope:"col"},[t("h4",null,"安全庫存設定")]),t("th",{scope:"col"},[t("h4",null,"備註")]),t("th",{scope:"col"},[t("h4",null,"操作")])])],-1)),(c(!0),d(y,null,p(a.partNumbers,s=>(c(),d("tbody",{key:s.id,style:{"border-top-width":"20px","border-color":"rgb(19, 19, 19)"}},[s.PartNumberId?(c(),d("tr",U,[t("td",R,n(s.name),1),t("td",G,n(s.unitPrice),1),t("td",{class:x([{"bg-danger":s.quantity<s.safetyStockQuantity},{"text-dark":s.quantity>=s.safetyStockQuantity}])},n(s.quantity),3),t("td",J,n(s.safetyStockQuantity),1),t("td",W,n(s.commonName),1),t("td",X,[g(l,{to:{name:"manager-sub-part-numbers-edit",params:{id:s.id}},class:"btn btn-warning btn-sm mr-4"},{default:f(()=>e[6]||(e[6]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-fill",viewBox:"0 0 16 16"},[t("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})],-1)])),_:2},1032,["to"]),t("button",{onClick:_(r=>i.removeItem(s.id,"sub-part-number",o.subPartNumber.partNumberId),["stop","prevent"]),class:"btn btn-outline-danger btn-sm"},e[7]||(e[7]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[t("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1)]),8,Y)])])):(c(),d("tr",Z,[t("td",$,n(s.name),1),t("td",null,n(s.unitPrice),1),t("td",{class:x([{"bg-danger":s.quantity<s.safetyStockQuantity}])},n(s.quantity),3),t("td",null,n(s.safetyStockQuantity),1),t("td",null,n(s.commonName),1),t("td",N,[g(l,{to:{name:"manager-part-numbers-edit",params:{id:s.id}},class:"btn btn-warning btn-sm mr-4"},{default:f(()=>e[8]||(e[8]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-fill",viewBox:"0 0 16 16"},[t("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})],-1)])),_:2},1032,["to"]),t("button",{onClick:_(r=>i.removeItem(s.id,"part-number"),["stop","prevent"]),class:"btn btn-outline-danger btn-sm"},e[9]||(e[9]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[t("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1)]),8,tt)])])),(c(!0),d(y,null,p(s.subPartNumbers,r=>(c(),d("tr",{key:r.id,style:{"text-align":"center","background-color":"#b0b0b0"}},[t("td",et,n(r.name),1),t("td",st,n(r.unitPrice),1),t("td",{class:x([{"bg-danger text-white":r.quantity<r.safetyStockQuantity},{"text-dark":r.quantity>=r.safetyStockQuantity}])},n(r.quantity),3),t("td",at,n(r.safetyStockQuantity),1),t("td",ot,n(r.commonName),1),t("td",nt,[g(l,{to:{name:"manager-sub-part-numbers-edit",params:{id:r.id}},class:"btn btn-warning btn-sm mr-4"},{default:f(()=>e[10]||(e[10]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-fill",viewBox:"0 0 16 16"},[t("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})],-1)])),_:2},1032,["to"]),t("button",{onClick:_(it=>i.removeItem(r.id,"sub-part-number",r.partNumberId),["stop","prevent"]),class:"btn btn-outline-danger btn-sm"},e[11]||(e[11]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[t("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1)]),8,rt)])]))),128))]))),128))])])]))])}const mt=z(S,[["render",lt]]);export{mt as default};
