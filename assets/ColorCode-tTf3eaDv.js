import{_ as b,c as u,b as o,w as t,v as i,t as n,C as a,o as c}from"./index-BMeqUuqK.js";const g={data(){return{colorCode:"#000000",rgbCode:{red:0,green:0,blue:0}}},methods:{decimalToHexadecimal(s){let e="#";for(let l in s)Number(s[l])<16?e+=`0${Number(s[l]).toString(16)}`:e+=`${Number(s[l]).toString(16)}`;this.colorCode=e}},watch:{rgbCode:{handler:function(s){this.decimalToHexadecimal(s)},deep:!0}}},p={class:"container"},C={class:"RGB-box"},m={class:"red-box flexbox"},x={class:"red-background slider-value-p",id:"redCode"},v={class:"green-box flexbox"},_={class:"green-background slider-value-p",id:"greenCode"},f={class:"blue-box flexbox"},k={class:"blue-background slider-value-p",id:"blueCode"};function y(s,e,l,B,r,G){return c(),u("div",{class:"body",style:a({background:r.colorCode})},[o("section",p,[o("div",C,[o("div",m,[e[3]||(e[3]=o("p",{class:"red-background text-R-G-B"},"R",-1)),t(o("input",{type:"range",min:"0",max:"255",value:"0",class:"slider",id:"red-slider","onUpdate:modelValue":e[0]||(e[0]=d=>r.rgbCode.red=d)},null,512),[[i,r.rgbCode.red]]),o("p",x,n(r.rgbCode.red),1)]),o("div",v,[e[4]||(e[4]=o("p",{class:"green-background text-R-G-B"},"G",-1)),t(o("input",{type:"range",min:"0",max:"255",value:"0",class:"slider",id:"green-slider","onUpdate:modelValue":e[1]||(e[1]=d=>r.rgbCode.green=d)},null,512),[[i,r.rgbCode.green]]),o("p",_,n(r.rgbCode.green),1)]),o("div",f,[e[5]||(e[5]=o("p",{class:"blue-background text-R-G-B"},"B",-1)),t(o("input",{type:"range",min:"0",max:"255",value:"0",class:"slider",id:"blue-slider","onUpdate:modelValue":e[2]||(e[2]=d=>r.rgbCode.blue=d)},null,512),[[i,r.rgbCode.blue]]),o("p",k,n(r.rgbCode.blue),1)])]),o("h1",null,n(r.colorCode),1)])],4)}const h=b(g,[["render",y],["__scopeId","data-v-d695012b"]]);export{h as default};