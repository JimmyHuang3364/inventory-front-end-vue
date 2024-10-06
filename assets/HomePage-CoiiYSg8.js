import{_ as q,w as d,e as S,o as u,c as h,b as e,F as N,r as O,t as c,n as L,T as f,d as T,v as b,f as W,O as E,g as F,h as x,i as I,j as k,k as Q}from"./index-BMeqUuqK.js";import{p as C,w as v}from"./warehouse-DWAzRrS6.js";import{p as M,P as H}from"./production_process_items-Cw4bwAIl.js";import{P as U}from"./PageLoader-C4JJMFSR.js";const V={props:{initialPartNumbers:{type:Array}},created(){this.fetchInitialPartNumbers(this.initialPartNumbers),this.isLoading=!1},data(){return{partNumbers:[],isLoading:!0}},methods:{fetchInitialPartNumbers(s){this.partNumbers=s}},watch:{initialPartNumbers(s){this.fetchInitialPartNumbers(s)}}},$={class:"partnumbers_area"},K={class:"table table-sm table-hover table-bordered table-dark"},j={key:0,style:{"background-color":"#b0b0b0","text-align":"center"}},B={class:"text-dark",scope:"row"},Y={class:"text-dark"},J={class:"text-dark"},R={key:1,style:{"background-color":"#182f8b","text-align":"center"}},z={scope:"row"},G={class:"text-dark",scope:"row"},X={class:"text-dark"},Z={class:"text-dark"};function tt(s,t,n,a,i,o){return d((u(),h("div",$,[t[1]||(t[1]=e("h2",{class:"text-light"},"庫存總攬",-1)),e("table",K,[t[0]||(t[0]=e("thead",null,[e("tr",{class:"table-active",style:{"text-align":"center"}},[e("th",{scope:"col"},[e("h4",null,"品番")]),e("th",{scope:"col"},[e("h4",null,"在庫數量")]),e("th",{scope:"col"},[e("h4",null,"備註")]),e("th",{scope:"col"},[e("h4",null,"安全庫存")])])],-1)),(u(!0),h(N,null,O(i.partNumbers,r=>(u(),h("tbody",{key:r.id,style:{"border-top-width":"20px","border-color":"rgb(19, 19, 19)"}},[r.PartNumberId?(u(),h("tr",j,[e("td",B,c(r.name),1),e("td",{class:L([{"bg-danger":r.quantity<r.safetyStockQuantity},{"text-dark":r.quantity>=r.safetyStockQuantity}])},c(r.quantity),3),e("td",Y,c(r.commonName),1),e("td",J,c(r.safetyStockQuantity),1)])):(u(),h("tr",R,[e("td",z,c(r.name),1),e("td",{class:L([{"bg-danger":r.quantity<r.safetyStockQuantity}])},c(r.quantity),3),e("td",null,c(r.commonName),1),e("td",null,c(r.safetyStockQuantity),1)])),(u(!0),h(N,null,O(r.subPartNumbers,m=>(u(),h("tr",{key:m.id,style:{"text-align":"center","background-color":"#b0b0b0"}},[e("td",G,c(m.name),1),e("td",{class:L([{"bg-danger text-white":m.quantity<m.safetyStockQuantity},{"text-dark":m.quantity>=m.safetyStockQuantity}])},c(m.quantity),3),e("td",X,c(m.commonName),1),e("td",Z,c(m.safetyStockQuantity),1)]))),128))]))),128))])],512)),[[S,!i.isLoading]])}const et=q(V,[["render",tt]]),st={inject:["reload"],props:{initialWarehousingHistories:{type:Array},initialIsShowFastShippingWarehousingFormArea:{type:Boolean},initialPartNumbers:{type:Array}},created(){this.fetchInitialWarehousingHistories(this.initialWarehousingHistories),this.fetchIsShowFastShippingWarehousingFormArea(this.initialIsShowFastShippingWarehousingFormArea),this.fetchInitialPartNumbers(this.initialPartNumbers),this.fetchSubPartNumbers(),this.fetchTodaysDate(),this.isLoading=!1},data(){return{newWarehousingOrShipping:{date:"",name:"",quantity:null,note:"",productId:"",isSubPart:!1},partNumbersList:[],subPartNumbersList:[],partNumbersAndSubPartNumbersList:[],warehousingHistories:[],shipmentList:[],warehousingList:[],isLoading:!0,isShowFastShippingWarehousingFormArea:!1}},methods:{fetchInitialWarehousingHistories(s){this.warehousingHistories=s},fetchIsShowFastShippingWarehousingFormArea(s){this.isShowFastShippingWarehousingFormArea=s},fetchInitialPartNumbers(s){this.partNumbersList=s},async fetchSubPartNumbers(){try{const{data:s,status:t,statusText:n}=await C.getSubPartNumbers();if(n!=="OK"&&t!==200)throw new Error;const{subPartNumbers:a}=s;this.subPartNumbersList=a,this.mergePartNumbersAndSubPartNumbersToList()}catch{f.fire({icon:"error",title:"載入資料錯誤，請稍後在試。"})}},mergePartNumbersAndSubPartNumbersToList(){this.partNumbersAndSubPartNumbersList=this.partNumbersList.concat(this.subPartNumbersList)},async handleSubmitWarehousing(){try{if(!this.verifyDataAfterSubmit())throw new Error("日期、品番號、數量不可空白");this.warehousingList.push(this.fetchPartNumberIdOrSubPartNumberId());const s=new FormData;s.append("warehousingList",JSON.stringify(this.warehousingList));const{data:t,statusText:n}=await v.Warehousing.create(s),a=t.status,i=t.message;if(a!=="success"&&n!=="OK")throw new Error(i||"入庫時發生錯誤，請稍後在試。");this.warehousingList=[],f.fire({icon:"success",title:"入庫資料登載成功"}),this.reload()}catch(s){f.fire({icon:"error",title:s||"拿取製程項目清單錯誤，請稍後再試。"})}},async handleSubmitShipping(){try{if(!this.verifyDataAfterSubmit())throw new Error("日期、品番號、數量不可空白");if(!this.checkPartOrSubPartQuantityToShip())throw new Error("數量不足以出貨，請檢查在庫量。");this.shipmentList.push(this.fetchPartNumberIdOrSubPartNumberId());const s=new FormData;s.append("shipmentList",JSON.stringify(this.shipmentList));const{data:t,statusText:n}=await v.Shipping.create(s),a=t.status,i=t.message;if(a!=="success"&&n!=="OK")throw new Error(i||"出貨時發生錯誤，請稍後在試。");this.shipmentList=[],f.fire({icon:"success",title:"出庫資料登載成功"}),this.reload()}catch(s){f.fire({icon:"error",title:s||"拿取製程項目清單錯誤，請稍後再試。"})}},verifyDataAfterSubmit(){if(this.newWarehousingOrShipping.date!==""&&this.newWarehousingOrShipping.name!==""&&Number(this.newWarehousingOrShipping.quantity)>0)return!0},fetchPartNumberIdOrSubPartNumberId(){try{for(let s of this.partNumbersList)if(s.name===this.newWarehousingOrShipping.name)return this.newWarehousingOrShipping.productId=s.id,this.newWarehousingOrShipping;for(let s of this.subPartNumbersList)if(s.name===this.newWarehousingOrShipping.name)return this.newWarehousingOrShipping.productId=s.id,this.newWarehousingOrShipping.isSubPart=!0,this.newWarehousingOrShipping}catch{f.fire({icon:"error",title:"取得不品ID時出現錯誤。"})}},checkPartOrSubPartQuantityToShip(){for(let s of this.partNumbersList)if(s.name===this.newWarehousingOrShipping.name)return s.quantity-Number(this.newWarehousingOrShipping.quantity)>=0;for(let s of this.subPartNumbersList)if(s.name===this.newWarehousingOrShipping.name)return s.quantity-Number(this.newWarehousingOrShipping.quantity)>=0},toggleShowFastShippingWarehousingFormArea(){this.$emit("after-click-toggle-fast-form-area")},fetchTodaysDate(){let s=new Date().getFullYear().toString(),t="",n="";new Date().getMonth()<9?t=`0${(new Date().getMonth()+1).toString()}`:t=(new Date().getMonth()+1).toString(),new Date().getDate()<10?n=`0${new Date().getDate().toString()}`:n=new Date().getDate().toString();const a=`${s}-${t}-${n}`;this.newWarehousingOrShipping.date=a}},watch:{initialWarehousingHistories(s){this.fetchInitialWarehousingHistories(s)},initialIsShowFastShippingWarehousingFormArea(s){this.fetchIsShowFastShippingWarehousingFormArea(s)},initialPartNumbers(s){this.fetchInitialPartNumbers(s)}}},rt={class:"histories_area"},it={key:0,class:"view bg-dark mb-3 px-3"},nt={class:"d-flex justify-content-between align-items-center"},ot={class:"form-row"},at={class:"form-group col-md-3"},ut={class:"form-group col-md-3"},lt={id:"partNumbers-list"},ht=["value"],ct={class:"form-group col-md-3"},mt={class:"form-group col-md-3"},dt={class:"table table-sm table-dark table-striped table-hover"},gt={scope:"row"},pt={key:0,class:"text-dark",style:{"background-color":"#ea9d06"}},ft={key:1},bt={key:2,class:"bg-success"},wt={key:3};function yt(s,t,n,a,i,o){return d((u(),h("div",rt,[i.isShowFastShippingWarehousingFormArea?(u(),h("div",it,[e("div",nt,[t[7]||(t[7]=e("h1",{class:"text-white"},"新增",-1)),e("div",null,[e("button",{onClick:t[0]||(t[0]=T((...r)=>o.handleSubmitWarehousing&&o.handleSubmitWarehousing(...r),["stop","prevent"])),class:"btn btn-outline-warning mr-4"},"入庫"),e("button",{onClick:t[1]||(t[1]=T((...r)=>o.handleSubmitShipping&&o.handleSubmitShipping(...r),["stop","prevent"])),class:"btn btn-outline-success mr-4"},"出庫"),e("button",{onClick:t[2]||(t[2]=T((...r)=>o.toggleShowFastShippingWarehousingFormArea&&o.toggleShowFastShippingWarehousingFormArea(...r),["stop","prevent"])),class:"btn btn-outline-danger mr-2"},"Close")])]),e("div",ot,[e("div",at,[t[8]||(t[8]=e("label",{class:"add-form-label",for:"inputDate"},"日期",-1)),d(e("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>i.newWarehousingOrShipping.date=r),type:"date",class:"form-control",id:"inputDate"},null,512),[[b,i.newWarehousingOrShipping.date]])]),e("div",ut,[t[9]||(t[9]=e("label",{class:"add-form-label",for:"inputNmae"},"品番號",-1)),d(e("input",{"onUpdate:modelValue":t[4]||(t[4]=r=>i.newWarehousingOrShipping.name=r),list:"partNumbers-list",type:"text",class:"form-control",id:"inputName"},null,512),[[b,i.newWarehousingOrShipping.name]]),e("datalist",lt,[(u(!0),h(N,null,O(i.partNumbersAndSubPartNumbersList,r=>(u(),h("option",{key:r.index,value:r.name},null,8,ht))),128))])]),e("div",ct,[t[10]||(t[10]=e("label",{class:"add-form-label",for:"inputQuantity"},"數量",-1)),d(e("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>i.newWarehousingOrShipping.quantity=r),type:"number",class:"form-control",id:"inputQuantity",min:"0"},null,512),[[b,i.newWarehousingOrShipping.quantity]])]),e("div",mt,[t[11]||(t[11]=e("label",{class:"add-form-label",for:"inputNote"},"備註",-1)),d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=r=>i.newWarehousingOrShipping.note=r),type:"text",class:"form-control",id:"inputNote",placeholder:"可空白..."},null,512),[[b,i.newWarehousingOrShipping.note]])])])])):W("",!0),e("table",dt,[t[12]||(t[12]=e("thead",null,[e("tr",{class:"table-active",style:{"text-align":"center"}},[e("th",{scope:"col"},[e("h4",null,"日期")]),e("th",{scope:"col"},[e("h4",null,"品番")]),e("th",{scope:"col"},[e("h4",null,"入庫")]),e("th",{scope:"col"},[e("h4",null,"出庫")]),e("th",{scope:"col"},[e("h4",null,"餘存")]),e("th",{scope:"col"},[e("h4",null,"備註")])])],-1)),e("tbody",null,[(u(!0),h(N,null,O(i.warehousingHistories,r=>(u(),h("tr",{key:r.id,style:{"text-align":"center"}},[e("th",gt,c(r.textCreatedAt),1),e("td",null,c(r.PartNumber.name?r.PartNumber.name:r.SubPartNumber.name),1),r.quntityOfWarehousing?(u(),h("td",pt,c(r.quntityOfWarehousing),1)):(u(),h("td",ft,c(r.quntityOfWarehousing),1)),r.quntityOfShipping?(u(),h("td",bt,c(r.quntityOfShipping),1)):(u(),h("td",wt,c(r.quntityOfShipping),1)),e("td",null,c(r.totalQuntity),1),e("td",null,c(r.note),1)]))),128))])])],512)),[[S,!i.isLoading]])}const St=q(st,[["render",yt],["__scopeId","data-v-e1f56776"]]),Nt={props:{initialIsShowFastOutsourcingFormArea:{type:Boolean},initialPartNumbers:{type:Array}},created(){this.fetchPartNumbers(this.initialPartNumbers),this.fetchOutsourcingLists(),this.fetchPartnerFactories(),this.fetchProductionProcessItems(),this.fetchIsShowFastOutsourcingFormArea(this.initialIsShowFastOutsourcingFormArea),this.fetchTodaysDate(),this.isLoading=!1},data(){return{isLoading:!0,isShowFastOutsourcingFormArea:!1,isProcessing:!1,newOutsourcing:{actionDate:"",partNumberName:"",partnerFactoryName:"",productionProcessItemName:"",partNumberId:"",partnerFactoryId:"",productionProcessItemId:"",quantity:null,note:""},outsourcinglists:[],partnerFactories:[],partNumbers:[],productionProcessItems:[],subPartNumbers:[]}},methods:{async fetchOutsourcingLists(){try{const s=await v.Outsourcinglist.get(),{data:t,status:n,statusText:a}=s,{outsourcinglists:i}=t;if(a!=="OK"&&n!==200)throw new Error;if(t.status!=="success")throw new Error(t.message);i.map(o=>{o.actionDate=`${new Date(o.actionDate).getFullYear()}/${new Date(o.actionDate).getMonth()+1}/${new Date(o.actionDate).getDate()}`}),this.outsourcinglists=i}catch(s){f.fire({icon:"error",title:s||"外包清單載入錯誤，請稍後再試。"}),this.isLoading=!1}},async fetchPartnerFactories(){try{const{data:s,status:t,statusText:n}=await M.getAll(),{partnerFactories:a}=s;if(n!=="OK"&&t!==200)throw new Error;if(s.status!=="success")throw new Error(s.message);this.partnerFactories=a}catch(s){f.fire({icon:"error",title:s||"拿取協力商清單錯誤，請稍後再試。"})}},async fetchProductionProcessItems(){try{const{data:s,status:t,statusText:n}=await H.getAll(),{productionProcessItems:a}=s;if(n!=="OK"&&t!==200)throw new Error;if(s.status!=="success")throw new Error(s.message);this.productionProcessItems=a}catch(s){f.fire({icon:"error",title:s||"拿取製程項目清單錯誤，請稍後再試。"})}},async handleSubmit(){try{this.isProcessing=!0;const s=(o,r)=>{let m=-1,P=this.partNumbers.length;for(;m+1!==P;){let g=Math.floor((m+P)/2);if(this.partNumbers[g].name===o){if(this.partNumbers[g].quantity-r<0)throw new Error(`"${o}" 數量不足以發外包`);return}else this.partNumbers[g].name<o?m=g:P=g}return{result:!1,message:"找不到此部品"}};if(!this.verifyDataAfterSubmit())throw new Error("日期、品番號、廠商、製程、數量不可空白");s(this.newOutsourcing.partNumberName,this.newOutsourcing.quantity),this.fetchAllItemIdAfterSubmit();const t=new FormData;t.append("outsourcinglist",JSON.stringify([this.newOutsourcing]));const{data:n,status:a,statusText:i}=await v.Outsourcinglist.create(t);if(a!==200&&i!=="OK")throw new Error;if(n.status!=="success")throw new Error(n.message);this.outsourcinglists.unshift(this.unshiftOutsourcingDataAfterSubmit(this.newOutsourcing,n.outsourcinglists[0])),this.$emit("after-submited-new",n.partNumbers[0],n.warehousingHistories[0],n.outsourcinglists[0].actionDate),this.newOutsourcing={...this.clearDataAfterSubmit()},this.fetchTodaysDate(),this.isProcessing=!1,f.fire({icon:"success",text:n.message})}catch(s){this.isProcessing=!1,f.fire({icon:"error",title:s||"拿取製程項目清單錯誤，請稍後再試。"})}},verifyDataAfterSubmit(){return this.newOutsourcing.actionDate!==""&&this.newOutsourcing.partNumberName!==""&&this.newOutsourcing.partnerFactoryName!==""&&this.newOutsourcing.productionProcessItemName!==""&&Number(this.newOutsourcing.quantity)>0},fetchAllItemIdAfterSubmit(){this.partNumbers.map(s=>{if(s.name===this.newOutsourcing.partNumberName)return this.newOutsourcing.partNumberId=s.id}),this.partnerFactories.map(s=>{if(s.name===this.newOutsourcing.partnerFactoryName)return this.newOutsourcing.partnerFactoryId=s.id}),this.productionProcessItems.map(s=>{if(s.processName===this.newOutsourcing.productionProcessItemName)return this.newOutsourcing.productionProcessItemId=s.id})},unshiftOutsourcingDataAfterSubmit(s,t){return{PartNumber:{id:s.partNumberId,name:s.partNumberName},PartnerFactory:{id:s.partnerFactoryId,name:s.partnerFactoryName},ProductionProcessItem:{id:s.productionProcessItemId,processName:s.productionProcessItemName},actionDate:`${new Date(t.actionDate).getFullYear()}/${new Date(t.actionDate).getMonth()+1}/${new Date(t.actionDate).getDate()}`,estimatedReturnDate:null,id:t.id,quantity:Number(s.quantity)}},clearDataAfterSubmit(){return{actionDate:"",partNumberName:"",partnerFactoryName:"",productionProcessItemName:"",partNumberId:"",partnerFactoryId:"",productionProcessItemId:"",quantity:null,note:""}},async deleteOutsourcing(s,t){try{const{data:n,status:a,statusText:i}=await v.Outsourcinglist.delete(s);if(i!=="OK"&&a!==200)throw new Error;if(n.status!=="success")throw new Error(n.message);this.$emit("outsourcing-delete",t),this.outsourcinglists=this.outsourcinglists.filter(o=>o.id!==s),f.fire({icon:"success",title:n.message})}catch(n){f.fire({icon:"error",title:n||"拿取製程項目清單錯誤，請稍後再試。"})}},async theOutsourcingIsDoneToSubmit(s,t){try{const n=await E.fire({inputValidator:g=>{if(!g)return"請輸入部品番!";if(!((l,p,A)=>{let D=-1,_=l.length;for(;D+1!==_;){let w=Math.floor((D+_)/2);if(l[w].name===A)return!0;l[w].name<A?D=w:l[w].name>A&&(_=w)}for(D=-1,_=p.length;D+1!==_;){let w=Math.floor((D+_)/2);if(p[w].name===A)return!0;p[w].name<A?D=w:p[w].name>A&&(_=w)}return null})(this.partNumbers,this.subPartNumbers,g))return"找不到此部品"}});if(!n.value)return;const a=new FormData;let o=(g=>{let y=-1,l=this.partNumbers.length;for(;y+1!==l;){let p=Math.floor((y+l)/2);if(this.partNumbers[p].name===g)return{id:this.partNumbers[p].id,isSub:!1};if(this.partNumbers[p].name<g){y=p;continue}if(this.partNumbers[p].name>g){l=p;continue}}for(y=-1,l=this.subPartNumbers.length;y+1!==l;){let p=Math.floor((y+l)/2);if(this.subPartNumbers[p].name===g)return{id:this.subPartNumbers[p].id,isSub:!0};if(this.subPartNumbers[p].name<g){y=p;continue}if(this.subPartNumbers[p].name>g){l=p;continue}}return null})(n.value);t.partNumberId=o.id,t.isSub=o.isSub,t.partNumberName=n.value,a.append("partNumberId",JSON.stringify(t.partNumberId)),a.append("quantity",JSON.stringify(t.quantity)),a.append("isSub",JSON.stringify(t.isSub));const{data:r,status:m,statusText:P}=await v.Outsourcinglist.done(s,a);if(P!=="OK"&&m!==200)throw new Error;if(r.status!=="success")throw new Error(r.message);this.outsourcinglists=this.outsourcinglists.filter(g=>g.id!==s),r.warehousingHistory.partNumberName=n.value,this.$emit("outsourcing-is-done-to-submit",t,r.warehousingHistory),f.fire({icon:"success",text:r.message})}catch(n){f.fire({icon:"error",title:n||"拿取製程項目清單錯誤，請稍後再試。"})}},fetchPartNumbers(s){this.partNumbers=s;for(let t of s)t.SubPartNumbers.length&&this.subPartNumbers.push(...t.SubPartNumbers)},fetchIsShowFastOutsourcingFormArea(s){this.isShowFastOutsourcingFormArea=s},toggleShowFastShippingWarehousingFormArea(){this.$emit("after-click-toggle-fast-form-area")},fetchTodaysDate(){let s=new Date().getFullYear().toString(),t="",n="";new Date().getMonth()<9?t=`0${(new Date().getMonth()+1).toString()}`:t=(new Date().getMonth()+1).toString(),new Date().getDate()<10?n=`0${new Date().getDate().toString()}`:n=new Date().getDate().toString();const a=`${s}-${t}-${n}`;this.newOutsourcing.actionDate=a}},watch:{initialIsShowFastOutsourcingFormArea(s){this.fetchIsShowFastOutsourcingFormArea(s)},initialPartNumbers(s){this.fetchPartNumbers(s)}}},Ot={class:"histories_area"},Ft={class:"view bg-dark mb-3 px-3"},Pt={class:"d-flex justify-content-between align-items-center"},Dt=["disabled"],_t={class:"form-row"},It={class:"form-group col-md"},At={class:"form-group col-md"},vt={id:"partNumber-list"},xt=["value"],kt={class:"form-row"},Tt={class:"form-group col-md"},qt={id:"partnerFactories-list"},Lt=["value"],Wt={class:"form-group col-md"},Ct={id:"productionProcessItems-list"},Et=["value"],Qt={class:"form-row"},Mt={class:"form-group col-md"},Ht={class:"form-row"},Ut={class:"form-group col-md"},Vt={class:"table table-sm table-dark table-striped table-hover"},$t={scope:"row"},Kt={class:"d-flex justify-content-around"},jt=["onClick"],Bt=["onClick"];function Yt(s,t,n,a,i,o){return d((u(),h("div",Ot,[d(e("div",Ft,[e("div",Pt,[t[8]||(t[8]=e("h1",{class:"text-white"},"新增",-1)),e("div",null,[e("button",{onClick:t[0]||(t[0]=(...r)=>o.handleSubmit&&o.handleSubmit(...r)),class:"btn btn-outline-warning mr-4",disabled:i.isProcessing},c(i.isProcessing?"處理中...":"送出"),9,Dt),e("button",{onClick:t[1]||(t[1]=(...r)=>o.toggleShowFastShippingWarehousingFormArea&&o.toggleShowFastShippingWarehousingFormArea(...r)),class:"btn btn-outline-danger mr-2"},"Close")])]),e("div",_t,[e("div",It,[t[9]||(t[9]=e("label",{class:"add-form-label",for:"inputDate"},"日期",-1)),d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>i.newOutsourcing.actionDate=r),type:"date",class:"form-control",id:"actionDate"},null,512),[[b,i.newOutsourcing.actionDate]])]),e("div",At,[t[10]||(t[10]=e("label",{class:"add-form-label",for:"inputNmae"},"品番號",-1)),d(e("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>i.newOutsourcing.partNumberName=r),list:"partNumber-list",type:"text",class:"form-control",id:"inputPartnerFactoryName"},null,512),[[b,i.newOutsourcing.partNumberName]]),e("datalist",vt,[(u(!0),h(N,null,O(i.partNumbers,r=>(u(),h("option",{key:r.id,value:r.name},null,8,xt))),128))])])]),e("div",kt,[e("div",Tt,[t[11]||(t[11]=e("label",{class:"add-form-label",for:"inputNmae"},"廠商",-1)),d(e("input",{"onUpdate:modelValue":t[4]||(t[4]=r=>i.newOutsourcing.partnerFactoryName=r),list:"partnerFactories-list",type:"text",class:"form-control",id:"inputPartnerFactoryName"},null,512),[[b,i.newOutsourcing.partnerFactoryName]]),e("datalist",qt,[(u(!0),h(N,null,O(i.partnerFactories,r=>(u(),h("option",{key:r.id,value:r.name},null,8,Lt))),128))])]),e("div",Wt,[t[12]||(t[12]=e("label",{class:"add-form-label",for:"inputNmae"},"製程",-1)),d(e("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>i.newOutsourcing.productionProcessItemName=r),list:"productionProcessItems-list",type:"text",class:"form-control",id:"inputProductionProcessItemName"},null,512),[[b,i.newOutsourcing.productionProcessItemName]]),e("datalist",Ct,[(u(!0),h(N,null,O(i.productionProcessItems,r=>(u(),h("option",{key:r.id,value:r.processName},null,8,Et))),128))])])]),e("div",Qt,[e("div",Mt,[t[13]||(t[13]=e("label",{class:"add-form-label",for:"inputQuantity"},"數量",-1)),d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=r=>i.newOutsourcing.quantity=r),newOutsourcing:"",type:"number",class:"form-control",id:"inputQuantity",min:"0"},null,512),[[b,i.newOutsourcing.quantity]])])]),e("div",Ht,[e("div",Ut,[t[14]||(t[14]=e("label",{class:"add-form-label",for:"inputNote"},"備註",-1)),d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=r=>i.newOutsourcing.note=r),type:"text",class:"form-control",id:"inputNote",placeholder:"可空白..."},null,512),[[b,i.newOutsourcing.note]])])])],512),[[S,i.isShowFastOutsourcingFormArea]]),e("table",Vt,[t[15]||(t[15]=e("thead",null,[e("tr",{class:"table-active",style:{"text-align":"center"}},[e("th",{scope:"col"},[e("h4",null,"發包日")]),e("th",{scope:"col"},[e("h4",null,"品番")]),e("th",{scope:"col"},[e("h4",null,"廠商")]),e("th",{scope:"col"},[e("h4",null,"製程")]),e("th",{scope:"col"},[e("h4",null,"數量")]),e("th",{scope:"col"},[e("h4",null,"備註")]),e("th",{scope:"col"},[e("h4",null,"操作")])])],-1)),e("tbody",null,[(u(!0),h(N,null,O(i.outsourcinglists,r=>(u(),h("tr",{key:r.id,style:{"text-align":"center"}},[e("th",$t,c(r.actionDate),1),e("td",null,c(r.PartNumber.name?r.PartNumber.name:r.SubPartNumber.name),1),e("td",null,c(r.PartnerFactory.name),1),e("td",null,c(r.ProductionProcessItem.processName),1),e("td",null,c(r.quantity),1),e("td",null,c(r.note),1),e("td",null,[e("div",Kt,[e("button",{onClick:T(m=>o.theOutsourcingIsDoneToSubmit(r.id,{partNumberId:r.PartNumber.id,quantity:r.quantity}),["stop","prevent"]),class:"btn btn-outline-success btn-sm"}," Done ",8,jt),e("button",{onClick:T(m=>o.deleteOutsourcing(r.id,{partNumberId:r.PartNumber.id,quantity:r.quantity}),["stop","prevent"]),class:"btn btn-outline-danger btn-sm ml-3"}," Delete ",8,Bt)])])]))),128))])])],512)),[[S,!i.isLoading]])}const Jt=q(Nt,[["render",Yt],["__scopeId","data-v-ebf7aed2"]]),Rt={name:"HomePage",components:{PartnumberTable:et,WarehousingHistoriesTable:St,OutsourcingListsTable:Jt,PageLoader:U},beforeRouteUpdate(s,t,n){if(s.query.searchText||s.query.startDate||s.query.endDate){const i={searchText:s.query.searchText,startDate:s.query.startDate,endDate:s.query.endDate};this.handleSearchartNumbers(i),n();return}const{customerId:a=""}=s.query;this.fetchPartNumbers({queryCategoryId:a}),n()},created(){const{customerId:s=""}=this.$route.query;this.fetchPartNumbers({queryCategoryId:s})},data(){return{partNumbers:[],customers:[],warehousingHistories:[],searchText:"",startDate:"",endDate:"",isLoading:!0,showOutsourcingListsTable:!1,isShowFastShippingWarehousingFormArea:!1,isShowFastOutsourcingFormArea:!1}},methods:{async fetchPartNumbers({queryCategoryId:s}){try{this.isLoading=!0;const t=await C.getPartNumbers({customerId:s}),{data:n,status:a,statusText:i}=t,{partNumbers:o,customers:r,warehousingHistories:m}=n;if(i!=="OK"&&a!==200)throw new Error;this.partNumbers=o,this.customers=r,this.warehousingHistories=m,this.searchText="",this.startDate="",this.endDate="",this.isLoading=!1}catch{f.fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},async handleSearchartNumbers(s){try{this.isLoading=!0;const{data:t,status:n,statusText:a}=await C.getSearchPartNumbers(s);if(a!=="OK"&&n!==200)throw new Error;const{partNumbers:i,warehousingHistories:o}=t;this.partNumbers=i,this.warehousingHistories=o,this.isLoading=!1}catch{f.fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},afterOutsourcingDoneToUpdateQuantity(s,t){this.warehousingHistory_update(t);for(let n of this.partNumbers)if(n.name===s.partNumberName){n.quantity=n.quantity+Number(s.quantity);return}else for(let a of n.subPartNumbers)if(a.name===s.partNumberName){a.quantity=a.quantity+Number(s.quantity);return}},warehousingHistory_update(s){this.warehousingHistories.unshift({PartNumber:{name:s.partNumberName},note:s.note,quntityOfShipping:null,quntityOfWarehousing:s.quntityOfWarehousing,textCreatedAt:`${new Date(s.updatedAt).getFullYear()}/${new Date(s.updatedAt).getMonth()+1}/${new Date(s.updatedAt).getDate()}`,totalQuntity:s.totalQuntity}),this.warehousingHistories.pop()},afterHandleShowOutsourcingListsTable(){this.showOutsourcingListsTable=!0},afterHandleShowWarehousingHistoriesTable(){this.showOutsourcingListsTable=!1},after_submited_new(s,t,n){let a=-1,i=this.partNumbers.length;for(;a+1!==i;){let o=Math.floor((a+i)/2);if(this.partNumbers[o].name===s.name){this.partNumbers[o].quantity=s.quantity;break}else this.partNumbers[o].name<s.name?a=o:i=o}this.warehousingHistories.unshift({PartNumber:{name:s.name},note:t.note,quntityOfShipping:t.quntityOfShipping,quntityOfWarehousing:null,textCreatedAt:`${new Date(n).getFullYear()}/${new Date(n).getMonth()+1}/${new Date(n).getDate()}`,totalQuntity:t.totalQuntity}),this.warehousingHistories.pop()},toggleShowFastShippingWarehousingFormArea(){this.isShowFastShippingWarehousingFormArea=!this.isShowFastShippingWarehousingFormArea},toggleShowFastOutsourcingFormArea(){this.isShowFastOutsourcingFormArea=!this.isShowFastOutsourcingFormArea}}},zt={class:"mt-3"},Gt={key:0},Xt={key:1},Zt={class:"d-flex justify-content-center"},te={class:"form-row"},ee={class:"col-auto"},se={class:"col-auto"},re={class:"col-auto"},ie={class:"col-auto align-self-end"},ne={class:"d-flex flex-row justify-content-around align-items-center my-3"},oe={class:"mb-2"},ae={class:"d-flex justify-content-around"},ue={style:{"flex-basis":"45%"}},le={class:"mb-3",style:{"flex-basis":"50%"}},he={class:"d-flex justify-content-between align-items-center mb-2"},ce={class:"btn-group btn-group-toggle","data-toggle":"buttons"},me={class:"btn btn-outline-light active"},de={class:"btn btn-outline-light"};function ge(s,t,n,a,i,o){const r=k("PageLoader"),m=k("router-link"),P=k("PartnumberTable"),g=k("WarehousingHistoriesTable"),y=k("OutsourcingListsTable");return u(),h("div",zt,[i.isLoading?(u(),h("div",Gt,[F(r)])):W("",!0),i.isLoading?W("",!0):(u(),h("div",Xt,[e("form",Zt,[e("div",te,[e("div",ee,[t[7]||(t[7]=e("p",{class:"text-light m-0"},"品番",-1)),d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>i.searchText=l),list:"partnumberList",type:"text",class:"form-control",name:"searchText",id:"searchText",placeholder:"搜尋番號",value:""},null,512),[[b,i.searchText]]),t[8]||(t[8]=e("datalist",{id:"partnumberList"},null,-1))]),e("div",se,[t[9]||(t[9]=e("p",{class:"text-light m-0"},"開始",-1)),d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>i.startDate=l),type:"date",class:"form-control",name:"startDate",id:"startDate",value:""},null,512),[[b,i.startDate]])]),e("div",re,[t[10]||(t[10]=e("p",{class:"text-light m-0"},"結束",-1)),d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>i.endDate=l),type:"date",class:"form-control",name:"endDate",id:"endDate",value:""},null,512),[[b,i.endDate]])]),e("div",ie,[F(m,{to:{name:"warehouse-home",query:{searchText:i.searchText,startDate:i.startDate,endDate:i.endDate}},class:"btn btn-primary",role:"button"},{default:x(()=>t[11]||(t[11]=[I("搜尋")])),_:1},8,["to"])])])]),e("div",ne,[e("div",oe,[F(m,{class:"btn btn-outline-secondary mr-1",to:{name:"warehouse-home"},role:"button"},{default:x(()=>t[12]||(t[12]=[I("全部")])),_:1}),(u(!0),h(N,null,O(i.customers,l=>(u(),Q(m,{key:l.id,class:"btn btn-outline-secondary mx-1",to:{name:"warehouse-home",query:{customerId:l.id}},role:"button"},{default:x(()=>[I(c(l.name),1)]),_:2},1032,["to"]))),128))])]),e("section",ae,[e("div",ue,[F(P,{initialPartNumbers:i.partNumbers},null,8,["initialPartNumbers"])]),e("div",le,[e("div",he,[e("div",ce,[e("label",me,[e("input",{onClick:t[3]||(t[3]=(...l)=>o.afterHandleShowWarehousingHistoriesTable&&o.afterHandleShowWarehousingHistoriesTable(...l)),type:"radio",name:"options",id:"option1",checked:""}),t[13]||(t[13]=I(" 出入庫紀錄 "))]),e("label",de,[e("input",{onClick:t[4]||(t[4]=(...l)=>o.afterHandleShowOutsourcingListsTable&&o.afterHandleShowOutsourcingListsTable(...l)),type:"radio",name:"options",id:"option3"}),t[14]||(t[14]=I(" 外包清單 "))])]),e("div",null,[d(e("div",null,[d(e("button",{onClick:t[5]||(t[5]=(...l)=>o.toggleShowFastShippingWarehousingFormArea&&o.toggleShowFastShippingWarehousingFormArea(...l)),class:"btn btn-outline-warning mr-2"},"快速新增",512),[[S,!i.isShowFastShippingWarehousingFormArea]]),F(m,{to:{name:"warehouse-ShippingWarehousing"},class:"btn btn-info",role:"button"},{default:x(()=>t[15]||(t[15]=[I("新增出入庫")])),_:1})],512),[[S,!i.showOutsourcingListsTable]]),d(e("div",null,[d(e("button",{onClick:t[6]||(t[6]=(...l)=>o.toggleShowFastOutsourcingFormArea&&o.toggleShowFastOutsourcingFormArea(...l)),class:"btn btn-outline-warning mr-2"},"快速新增",512),[[S,!i.isShowFastOutsourcingFormArea]]),F(m,{to:{name:"warehouse-outsourcing-new"},class:"btn btn-primary",role:"button"},{default:x(()=>t[16]||(t[16]=[I("新增外包")])),_:1})],512),[[S,i.showOutsourcingListsTable]])])]),d(F(g,{onAfterClickToggleFastFormArea:o.toggleShowFastShippingWarehousingFormArea,"initial-warehousing-histories":i.warehousingHistories,"initial-part-numbers":i.partNumbers,"initial-is-show-fast-shipping-warehousing-form-area":i.isShowFastShippingWarehousingFormArea},null,8,["onAfterClickToggleFastFormArea","initial-warehousing-histories","initial-part-numbers","initial-is-show-fast-shipping-warehousing-form-area"]),[[S,!i.showOutsourcingListsTable]]),d(F(y,{onOutsourcingDelete:o.afterOutsourcingDoneToUpdateQuantity,onOutsourcingIsDoneToSubmit:o.afterOutsourcingDoneToUpdateQuantity,onAfterSubmitedNew:o.after_submited_new,onAfterClickToggleFastFormArea:o.toggleShowFastOutsourcingFormArea,"initial-is-show-fast-outsourcing-form-area":i.isShowFastOutsourcingFormArea,"initial-part-numbers":i.partNumbers},null,8,["onOutsourcingDelete","onOutsourcingIsDoneToSubmit","onAfterSubmitedNew","onAfterClickToggleFastFormArea","initial-is-show-fast-outsourcing-form-area","initial-part-numbers"]),[[S,i.showOutsourcingListsTable]])])])]))])}const ye=q(Rt,[["render",ge],["__scopeId","data-v-964665d4"]]);export{ye as default};