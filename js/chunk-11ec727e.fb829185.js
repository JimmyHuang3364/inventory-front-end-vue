(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11ec727e"],{"00ee":function(t,e,r){"use strict";var n=r("b622"),a=n("toStringTag"),c={};c[a]="z",t.exports="[object z]"===String(c)},"0d26":function(t,e,r){"use strict";var n=r("e330"),a=Error,c=n("".replace),s=function(t){return String(new a(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,i=o.test(s);t.exports=function(t,e){if(i&&"string"==typeof t&&!a.prepareStackTrace)while(e--)t=c(t,o,"");return t}},1787:function(t,e,r){"use strict";var n=r("861d");t.exports=function(t){return n(t)||null===t}},"271a":function(t,e,r){"use strict";var n=r("cb2d"),a=r("e330"),c=r("577e"),s=r("d6d6"),o=URLSearchParams,i=o.prototype,u=a(i.getAll),l=a(i.has),g=new o("a=1");!g.has("a",2)&&g.has("a",void 0)||n(i,"has",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return l(this,t);var n=u(this,t);s(e,1);var a=c(r),o=0;while(o<n.length)if(n[o++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},"2ba4":function(t,e,r){"use strict";var n=r("40d5"),a=Function.prototype,c=a.apply,s=a.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?s.bind(c):function(){return s.apply(c,arguments)})},"3a38":function(t,e,r){"use strict";r("bd6a")},"3bbe":function(t,e,r){"use strict";var n=r("1787"),a=String,c=TypeError;t.exports=function(t){if(n(t))return t;throw new c("Can't set "+a(t)+" as a prototype")}},5494:function(t,e,r){"use strict";var n=r("83ab"),a=r("e330"),c=r("edd0"),s=URLSearchParams.prototype,o=a(s.forEach);n&&!("size"in s)&&c(s,"size",{get:function(){var t=0;return o(this,(function(){t++})),t},configurable:!0,enumerable:!0})},"577e":function(t,e,r){"use strict";var n=r("f5df"),a=String;t.exports=function(t){if("Symbol"===n(t))throw new TypeError("Cannot convert a Symbol value to a string");return a(t)}},"6f19":function(t,e,r){"use strict";var n=r("9112"),a=r("0d26"),c=r("b980"),s=Error.captureStackTrace;t.exports=function(t,e,r,o){c&&(s?s(t,e):n(t,"stack",a(r,o)))}},7156:function(t,e,r){"use strict";var n=r("1626"),a=r("861d"),c=r("d2bb");t.exports=function(t,e,r){var s,o;return c&&n(s=e.constructor)&&s!==r&&a(o=s.prototype)&&o!==r.prototype&&c(t,o),t}},7282:function(t,e,r){"use strict";var n=r("e330"),a=r("59ed");t.exports=function(t,e,r){try{return n(a(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(c){}}},"88a7":function(t,e,r){"use strict";var n=r("cb2d"),a=r("e330"),c=r("577e"),s=r("d6d6"),o=URLSearchParams,i=o.prototype,u=a(i.append),l=a(i["delete"]),g=a(i.forEach),d=a([].push),b=new o("a=1&a=2&b=3");b["delete"]("a",1),b["delete"]("b",void 0),b+""!=="a=2"&&n(i,"delete",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return l(this,t);var n=[];g(this,(function(t,e){d(n,{key:e,value:t})})),s(e,1);var a,o=c(t),i=c(r),b=0,f=0,h=!1,p=n.length;while(b<p)a=n[b++],h||a.key===o?(h=!0,l(this,a.key)):f++;while(f<p)a=n[f++],a.key===o&&a.value===i||u(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},"9f3a":function(t,e,r){"use strict";var n=r("7a23");const a={class:"loader-center m-0 p-0 text-white d-flex justify-content-center align-items-center"};function c(t,e,r,c,s,o){return Object(n["v"])(),Object(n["f"])("div",a,e[0]||(e[0]=[Object(n["g"])("div",{class:"loader-ring"},null,-1),Object(n["g"])("span",null,"loading...",-1)]))}var s={},o=(r("3a38"),r("6b0d")),i=r.n(o);const u=i()(s,[["render",c],["__scopeId","data-v-1b592620"]]);e["a"]=u},a157:function(t,e,r){"use strict";r.r(e);var n=r("7a23");const a={class:"m-5"},c={key:0},s={key:1},o={class:"d-flex justify-content-end mr-3"},i={class:"table table-hover table-striped table-dark"},u={class:"align-middle",scope:"row"},l={class:"align-middle"},g=["src"],d={class:"align-middle"},b={class:"align-middle"},f={class:"align-middle"},h={class:"align-middle"},p={class:"py-1 align-middle"},m=["onClick"];function v(t,e,r,v,j,O){const y=Object(n["A"])("PageLoader"),w=Object(n["A"])("router-link");return Object(n["v"])(),Object(n["f"])("div",a,[j.isLoading?(Object(n["v"])(),Object(n["f"])("div",c,[Object(n["j"])(y)])):Object(n["e"])("",!0),j.isLoading?Object(n["e"])("",!0):(Object(n["v"])(),Object(n["f"])("div",s,[Object(n["g"])("div",o,[Object(n["j"])(w,{to:{name:"manager-customers-new"},class:"btn btn-primary btn-lg my-3"},{default:Object(n["K"])(()=>e[0]||(e[0]=[Object(n["i"])("+発注人")])),_:1})]),Object(n["g"])("table",i,[e[3]||(e[3]=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"col"},[Object(n["g"])("h3",null,"#")]),Object(n["g"])("th",{scope:"col"}),Object(n["g"])("th",{scope:"col"},[Object(n["g"])("h3",null,"名稱")]),Object(n["g"])("th",{scope:"col"},[Object(n["g"])("h3",null,"地址")]),Object(n["g"])("th",{scope:"col"},[Object(n["g"])("h3",null,"電話")]),Object(n["g"])("th",{scope:"col"},[Object(n["g"])("h3",null,"傳真")]),Object(n["g"])("th",{scope:"col"},[Object(n["g"])("h3",null,"操作")])])],-1)),Object(n["g"])("tbody",null,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(j.customers,t=>(Object(n["v"])(),Object(n["f"])("tr",{key:t.id},[Object(n["g"])("td",u,[Object(n["g"])("h4",null,Object(n["D"])(t.id),1)]),Object(n["g"])("th",l,[Object(n["g"])("img",{src:t.img?t.img:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",width:"100px",height:"100px",alt:"..."},null,8,g)]),Object(n["g"])("td",d,[Object(n["g"])("h4",null,Object(n["D"])(t.name),1)]),Object(n["g"])("td",b,[Object(n["g"])("h4",null,Object(n["D"])(t.address),1)]),Object(n["g"])("td",f,[Object(n["g"])("h4",null,Object(n["D"])(t.tel),1)]),Object(n["g"])("td",h,[Object(n["g"])("h4",null,Object(n["D"])(t.fax),1)]),Object(n["g"])("td",p,[Object(n["j"])(w,{to:{name:"manager-customers-edit",params:{id:t.id}},class:"btn btn-outline-warning btn-lg mr-4"},{default:Object(n["K"])(()=>e[1]||(e[1]=[Object(n["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-fill",viewBox:"0 0 16 16"},[Object(n["g"])("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})],-1)])),_:2},1032,["to"]),Object(n["g"])("button",{onClick:e=>O.deleteCustomer(t.id),class:"btn btn-outline-danger btn-lg"},e[2]||(e[2]=[Object(n["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[Object(n["g"])("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1)]),8,m)])]))),128))])])]))])}r("d9e2");var j=r("2fa3"),O=r("be10"),y=r("9f3a"),w={name:"ManagerCustomers",components:{PageLoader:y["a"]},created(){this.fetchCustomers()},data(){return{customers:[],isLoading:!0}},methods:{async fetchCustomers(){try{this.isLoading=!0;const{data:t,status:e,statusText:r}=await O["a"].customers.get();if("OK"!==r&&200!==e)throw new Error;const{customers:n}=t;this.customers=n,this.isLoading=!1}catch(t){j["c"].fire({icon:"error",title:"載入錯誤，請稍後再試。"}),this.isLoading=!1}},async deleteCustomer(t){try{const{data:e,status:r,statusText:n}=await O["a"].customers.delete(t);if("OK"!==n&&200!==r)throw new Error;this.customers=this.customers.filter(e=>e.id!==t),j["c"].fire({icon:"success",title:e.message})}catch(e){j["c"].fire({icon:"error",title:"錯誤!!請稍後在試!!"})}}}},x=r("6b0d"),_=r.n(x);const k=_()(w,[["render",v]]);e["default"]=k},ab36:function(t,e,r){"use strict";var n=r("861d"),a=r("9112");t.exports=function(t,e){n(e)&&"cause"in e&&a(t,"cause",e.cause)}},aeb0:function(t,e,r){"use strict";var n=r("9bf2").f;t.exports=function(t,e,r){r in t||n(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})}},b980:function(t,e,r){"use strict";var n=r("d039"),a=r("5c6c");t.exports=!n((function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",a(1,7)),7!==t.stack)}))},bd6a:function(t,e,r){},be10:function(t,e,r){"use strict";r("88a7"),r("271a"),r("5494");var n=r("2fa3");e["a"]={customers:{get(){return n["h"].get("/manager/customers")},getDetail(t){return n["h"].get("/manager/customers/"+t)},create(t){return n["h"].post("/manager/customers/create",t)},update({customerId:t,formData:e}){return n["h"].put("/manager/customers/"+t,e)},delete(t){return n["h"].delete("/manager/customers/"+t)}},partNumbers:{get(t){const e=new URLSearchParams(t);return n["h"].get("/manager/partnumbers?"+e.toString())},getOneDetail(t){return n["h"].get("/manager/partnumbers/"+t)},getSearch(t){const e=new URLSearchParams(t);return n["h"].get("/manager/partnumbers/search?"+e.toString())},create(t){return n["h"].post("/manager/partnumber/create",t)},update(t,e){return n["h"].put("/manager/partnumbers/"+t,e)},delete(t){return n["h"].delete("/manager/partnumbers/"+t)}},subPartNumbers:{getOneDetail(t){return n["h"].get("/manager/subpartnumbers/"+t)},update(t,e){return n["h"].put("/manager/subpartnumbers/"+t,e)},delete(t){return n["h"].delete("/manager/subpartnumbers/"+t)}},users:{create(t){return n["h"].post("/manager/users/signup",t)},get(){return n["h"].get("/manager/users")},delete(t){return n["h"].delete("/manager/users/"+t)}},warehousingHistories:{get(t){const e=new URLSearchParams(t);return n["h"].get("/manager/WarehousingHistories?"+e.toString())},getSearch(t){const e=new URLSearchParams(t);return n["h"].get("/manager/WarehousingHistories/search?"+e.toString())},delete(t){return n["h"].delete("/manager/WarehousingHistories/"+t)}},partnerFactories:{getAll(){return n["h"].get("/manager/partner_factories")},create(t){return n["h"].post("/manager/partner_factories/create",t)},delete(t){return n["h"].delete("/manager/partner_factories/"+t)},getOneDetail(t){return n["h"].get("/manager/partner_factories/"+t)},update(t,e){return n["h"].put("/manager/partner_factories/"+t,e)}},productionProcessItems:{getAll(){return n["h"].get("/manager/production_process_items")},create(t){return n["h"].post("/manager/production_process_items/create",t)},delete(t){return n["h"].delete("/manager/production_process_items/"+t)},update(t,e){return n["h"].put("/manager/production_process_items/"+t,e)}}}},d2bb:function(t,e,r){"use strict";var n=r("7282"),a=r("861d"),c=r("1d80"),s=r("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=n(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch(o){}return function(r,n){return c(r),s(n),a(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0)},d6d6:function(t,e,r){"use strict";var n=TypeError;t.exports=function(t,e){if(t<e)throw new n("Not enough arguments");return t}},d9e2:function(t,e,r){"use strict";var n=r("23e7"),a=r("cfe9"),c=r("2ba4"),s=r("e5cb"),o="WebAssembly",i=a[o],u=7!==new Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=s(t,e,u),n({global:!0,constructor:!0,arity:1,forced:u},r)},g=function(t,e){if(i&&i[t]){var r={};r[t]=s(o+"."+t,e,u),n({target:o,stat:!0,constructor:!0,arity:1,forced:u},r)}};l("Error",(function(t){return function(e){return c(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return c(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return c(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return c(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return c(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return c(t,this,arguments)}})),l("URIError",(function(t){return function(e){return c(t,this,arguments)}})),g("CompileError",(function(t){return function(e){return c(t,this,arguments)}})),g("LinkError",(function(t){return function(e){return c(t,this,arguments)}})),g("RuntimeError",(function(t){return function(e){return c(t,this,arguments)}}))},e391:function(t,e,r){"use strict";var n=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},e5cb:function(t,e,r){"use strict";var n=r("d066"),a=r("1a2d"),c=r("9112"),s=r("3a9b"),o=r("d2bb"),i=r("e893"),u=r("aeb0"),l=r("7156"),g=r("e391"),d=r("ab36"),b=r("6f19"),f=r("83ab"),h=r("c430");t.exports=function(t,e,r,p){var m="stackTraceLimit",v=p?2:1,j=t.split("."),O=j[j.length-1],y=n.apply(null,j);if(y){var w=y.prototype;if(!h&&a(w,"cause")&&delete w.cause,!r)return y;var x=n("Error"),_=e((function(t,e){var r=g(p?e:t,void 0),n=p?new y(t):new y;return void 0!==r&&c(n,"message",r),b(n,_,n.stack,2),this&&s(w,this)&&l(n,this,_),arguments.length>v&&d(n,arguments[v]),n}));if(_.prototype=w,"Error"!==O?o?o(_,x):i(_,x,{name:!0}):f&&m in y&&(u(_,y,m),u(_,y,"prepareStackTrace")),i(_,y),!h)try{w.name!==O&&c(w,"name",O),w.constructor=_}catch(k){}return _}}},edd0:function(t,e,r){"use strict";var n=r("13d2"),a=r("9bf2");t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),a.f(t,e,r)}},f5df:function(t,e,r){"use strict";var n=r("00ee"),a=r("1626"),c=r("c6b6"),s=r("b622"),o=s("toStringTag"),i=Object,u="Arguments"===c(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(r){}};t.exports=n?c:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=l(e=i(t),o))?r:u?c(e):"Object"===(n=c(e))&&a(e.callee)?"Arguments":n}}}]);
//# sourceMappingURL=chunk-11ec727e.fb829185.js.map