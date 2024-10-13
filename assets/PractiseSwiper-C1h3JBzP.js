import{d as K,r as G,J as Q,j as ee,M as te,o as F,s as V,l as D,c as ae,h as se,m as _,b as B,t as R,n as H,w as ie,g as le,k as U,p as re,F as ne,q as oe,_ as ce}from"./index-WyistJZg.js";import{e as pe,c as Z,m as E,b as de,d as X,f as fe,g as j,h as ue,S as Y,a as me}from"./swiper-vue-BA9jl0Be.js";import{g as W}from"./common-BL2qdO5q.js";function ge(v,e,i,n){return v.params.createElements&&Object.keys(n).forEach(d=>{if(!i[d]&&i.auto===!0){let l=pe(v.el,`.${n[d]}`)[0];l||(l=Z("div",n[d]),l.className=n[d],v.el.append(l)),i[d]=l,e[d]=l}}),i}function N(v){return v===void 0&&(v=""),`.${v.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function he(v){let{swiper:e,extendParams:i,on:n,emit:d}=v;const l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let C,$=0;function y(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function S(t,a){const{bulletActiveClass:s}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${s}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${s}-${a}-${a}`)))}function c(t,a,s){if(t=t%s,a=a%s,a===t+1)return"next";if(a===t-1)return"previous"}function r(t){const a=t.target.closest(N(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const s=X(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===s)return;const o=c(e.realIndex,s,e.slides.length);o==="next"?e.slideNext():o==="previous"?e.slidePrev():e.slideToLoop(s)}else e.slideTo(s)}function g(){const t=e.rtl,a=e.params.pagination;if(y())return;let s=e.pagination.el;s=E(s);let o,b;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,T=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(b=e.previousRealIndex||0,o=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(o=e.snapIndex,b=e.previousSnapIndex):(b=e.previousIndex||0,o=e.activeIndex||0),a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const p=e.pagination.bullets;let x,u,k;if(a.dynamicBullets&&(C=de(p[0],e.isHorizontal()?"width":"height"),s.forEach(f=>{f.style[e.isHorizontal()?"width":"height"]=`${C*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&b!==void 0&&($+=o-(b||0),$>a.dynamicMainBullets-1?$=a.dynamicMainBullets-1:$<0&&($=0)),x=Math.max(o-$,0),u=x+(Math.min(p.length,a.dynamicMainBullets)-1),k=(u+x)/2),p.forEach(f=>{const m=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(w=>`${a.bulletActiveClass}${w}`)].map(w=>typeof w=="string"&&w.includes(" ")?w.split(" "):w).flat();f.classList.remove(...m)}),s.length>1)p.forEach(f=>{const m=X(f);m===o?f.classList.add(...a.bulletActiveClass.split(" ")):e.isElement&&f.setAttribute("part","bullet"),a.dynamicBullets&&(m>=x&&m<=u&&f.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),m===x&&S(f,"prev"),m===u&&S(f,"next"))});else{const f=p[o];if(f&&f.classList.add(...a.bulletActiveClass.split(" ")),e.isElement&&p.forEach((m,w)=>{m.setAttribute("part",w===o?"bullet-active":"bullet")}),a.dynamicBullets){const m=p[x],w=p[u];for(let P=x;P<=u;P+=1)p[P]&&p[P].classList.add(...`${a.bulletActiveClass}-main`.split(" "));S(m,"prev"),S(w,"next")}}if(a.dynamicBullets){const f=Math.min(p.length,a.dynamicMainBullets+4),m=(C*f-C)/2-k*C,w=t?"right":"left";p.forEach(P=>{P.style[e.isHorizontal()?w:"top"]=`${m}px`})}}s.forEach((p,x)=>{if(a.type==="fraction"&&(p.querySelectorAll(N(a.currentClass)).forEach(u=>{u.textContent=a.formatFractionCurrent(o+1)}),p.querySelectorAll(N(a.totalClass)).forEach(u=>{u.textContent=a.formatFractionTotal(T)})),a.type==="progressbar"){let u;a.progressbarOpposite?u=e.isHorizontal()?"vertical":"horizontal":u=e.isHorizontal()?"horizontal":"vertical";const k=(o+1)/T;let f=1,m=1;u==="horizontal"?f=k:m=k,p.querySelectorAll(N(a.progressbarFillClass)).forEach(w=>{w.style.transform=`translate3d(0,0,0) scaleX(${f}) scaleY(${m})`,w.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(p.innerHTML=a.renderCustom(e,o+1,T),x===0&&d("paginationRender",p)):(x===0&&d("paginationRender",p),d("paginationUpdate",p)),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](a.lockClass)})}function M(){const t=e.params.pagination;if(y())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let s=e.pagination.el;s=E(s);let o="";if(t.type==="bullets"){let b=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&b>a&&(b=a);for(let h=0;h<b;h+=1)t.renderBullet?o+=t.renderBullet.call(e,h,t.bulletClass):o+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?o=t.renderFraction.call(e,t.currentClass,t.totalClass):o=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?o=t.renderProgressbar.call(e,t.progressbarFillClass):o=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],s.forEach(b=>{t.type!=="custom"&&(b.innerHTML=o||""),t.type==="bullets"&&e.pagination.bullets.push(...b.querySelectorAll(N(t.bulletClass)))}),t.type!=="custom"&&d("paginationRender",s[0])}function L(){e.params.pagination=ge(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(s=>fe(s,".swiper")[0]===e.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=E(a),a.forEach(s=>{t.type==="bullets"&&t.clickable&&s.classList.add(...(t.clickableClass||"").split(" ")),s.classList.add(t.modifierClass+t.type),s.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(s.classList.add(`${t.modifierClass}${t.type}-dynamic`),$=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&s.classList.add(t.progressbarOppositeClass),t.clickable&&s.addEventListener("click",r),e.enabled||s.classList.add(t.lockClass)}))}function z(){const t=e.params.pagination;if(y())return;let a=e.pagination.el;a&&(a=E(a),a.forEach(s=>{s.classList.remove(t.hiddenClass),s.classList.remove(t.modifierClass+t.type),s.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(s.classList.remove(...(t.clickableClass||"").split(" ")),s.removeEventListener("click",r))})),e.pagination.bullets&&e.pagination.bullets.forEach(s=>s.classList.remove(...t.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:a}=e.pagination;a=E(a),a.forEach(s=>{s.classList.remove(t.horizontalClass,t.verticalClass),s.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?A():(L(),M(),g())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&g()}),n("snapIndexChange",()=>{g()}),n("snapGridLengthChange",()=>{M(),g()}),n("destroy",()=>{z()}),n("enable disable",()=>{let{el:t}=e.pagination;t&&(t=E(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{g()}),n("click",(t,a)=>{const s=a.target,o=E(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&o&&o.length>0&&!s.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const b=o[0].classList.contains(e.params.pagination.hiddenClass);d(b===!0?"paginationShow":"paginationHide"),o.forEach(h=>h.classList.toggle(e.params.pagination.hiddenClass))}});const O=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=E(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),L(),M(),g()},A=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=E(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),z()};Object.assign(e.pagination,{enable:O,disable:A,render:M,update:g,init:L,destroy:z})}function ve(v){const{effect:e,swiper:i,on:n,setTranslate:d,setTransition:l,overwriteParams:C,perspective:$,recreateShadows:y,getEffectParams:S}=v;n("beforeInit",()=>{if(i.params.effect!==e)return;i.classNames.push(`${i.params.containerModifierClass}${e}`),$&&$()&&i.classNames.push(`${i.params.containerModifierClass}3d`);const r=C?C():{};Object.assign(i.params,r),Object.assign(i.originalParams,r)}),n("setTranslate",()=>{i.params.effect===e&&d()}),n("setTransition",(r,g)=>{i.params.effect===e&&l(g)}),n("transitionEnd",()=>{if(i.params.effect===e&&y){if(!S||!S().slideShadows)return;i.slides.forEach(r=>{r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(g=>g.remove())}),y()}});let c;n("virtualUpdate",()=>{i.params.effect===e&&(i.slides.length||(c=!0),requestAnimationFrame(()=>{c&&i.slides&&i.slides.length&&(d(),c=!1)}))})}function be(v,e){const i=j(e);return i!==e&&(i.style.backfaceVisibility="hidden",i.style["-webkit-backface-visibility"]="hidden"),i}function J(v,e,i){const n=`swiper-slide-shadow${i?`-${i}`:""}${` swiper-slide-shadow-${v}`}`,d=j(e);let l=d.querySelector(`.${n.split(" ").join(".")}`);return l||(l=Z("div",n.split(" ")),d.append(l)),l}function we(v){let{swiper:e,extendParams:i,on:n}=v;i({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ve({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{const{width:C,height:$,slides:y,slidesSizesGrid:S}=e,c=e.params.coverflowEffect,r=e.isHorizontal(),g=e.translate,M=r?-g+C/2:-g+$/2,L=r?c.rotate:-c.rotate,z=c.depth,O=ue(e);for(let A=0,t=y.length;A<t;A+=1){const a=y[A],s=S[A],o=a.swiperSlideOffset,b=(M-o-s/2)/s,h=typeof c.modifier=="function"?c.modifier(b):b*c.modifier;let T=r?L*h:0,p=r?0:L*h,x=-z*Math.abs(h),u=c.stretch;typeof u=="string"&&u.indexOf("%")!==-1&&(u=parseFloat(c.stretch)/100*s);let k=r?0:u*h,f=r?u*h:0,m=1-(1-c.scale)*Math.abs(h);Math.abs(f)<.001&&(f=0),Math.abs(k)<.001&&(k=0),Math.abs(x)<.001&&(x=0),Math.abs(T)<.001&&(T=0),Math.abs(p)<.001&&(p=0),Math.abs(m)<.001&&(m=0);const w=`translate3d(${f}px,${k}px,${x}px)  rotateX(${O(p)}deg) rotateY(${O(T)}deg) scale(${m})`,P=be(c,a);if(P.style.transform=w,a.style.zIndex=-Math.abs(Math.round(h))+1,c.slideShadows){let I=r?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),q=r?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");I||(I=J("coverflow",a,r?"left":"top")),q||(q=J("coverflow",a,r?"right":"bottom")),I&&(I.style.opacity=h>0?h:0),q&&(q.style.opacity=-h>0?-h:0)}}},setTransition:C=>{e.slides.map(y=>j(y)).forEach(y=>{y.style.transitionDuration=`${C}ms`,y.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(S=>{S.style.transitionDuration=`${C}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const ye=["src"],Ce={class:"t-font-bold t-text-xl t-mb-2"},$e=["src"],xe=K({__name:"PractiseSwiper",props:{darkMode:{type:Boolean}},setup(v){const e=[we,he],i=v,n=G(null),d=G(1e3),l=Q([{title:"以前端VUE3框架開發網站(簡易倉庫系統)",description:"此系統於小公司實際持續運作中(非展示功能)。以VUE3框架搭配各式套件(vite、VueRouter、bootstrap、sweet alert、pinia、tailwind...等)進行開發。簡單的倉庫紀錄系統(紀錄出入庫、產品外包狀態、廠商管理、模具管理)因之前開發的專案經使用者提出各種想法後，我以前端框架開發更能給使用者良好操作體驗，故又另自學VUE框架並使用axios串接先前以全端開發之API再次開發簡易出入庫倉庫系統。",imgName:"inventory.jpg",routerName:"sign-in",showMoreBtn:!1},{title:"個人資訊簡歷的頁面",description:"一些簡單特效，及我的個人資訊。隨時增加或優化。",imgName:"resumeView.jpg",routerName:"personalPractise-resume",showMoreBtn:!1},{title:"RGB色碼表",description:"調出喜歡的顏色並提供色碼，Background color會隨著不同的值跟著變換。",imgName:"colorCode.jpg",routerName:"personalPractise-color-code",showMoreBtn:!1},{title:"載入中的狀態頁面",description:"七彩旋轉的等待載入畫面",imgName:"loaderPage.jpg",routerName:"personalPractise-loaderPage",showMoreBtn:!1},{title:"登出圖案",description:"練習只用 tailwind 畫出開關門小動畫，點擊後 3 秒會離開該頁。",imgName:"logOutAnimation.jpg",routerName:"personalPractise-logOutAnimation",showMoreBtn:!1},{title:"不同的展示所有作品方式",description:"使用 swiper 套件。",imgName:"PersonalPractiseGeneral.jpg",routerName:"PersonalPractiseGeneral",showMoreBtn:!1}]),C=c=>{n.value=c},$=c=>{const r=c.target,g=r.previousElementSibling;g&&(r.innerText=r.innerText==="顯示較少..."?"顯示全文...":"顯示較少...",g.classList.toggle("t-truncate"))},y=()=>{setTimeout(()=>{n.value&&n.value.slideTo(0)},500)},S=()=>{for(let c=0;c<l.length;c++){const r=document.querySelector(`.practice-${c}`);r.scrollWidth>r.clientWidth?l[c].showMoreBtn=!0:l[c].showMoreBtn=!1}};return ee(()=>{te(()=>{y(),S()})}),(c,r)=>{const g=oe("router-link");return F(),V(_(me),{onSwiper:C,initialSlide:999,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},speed:d.value,pagination:!0,modules:e,class:"mySwiper"},{default:D(()=>[(F(!0),ae(ne,null,se(l,(M,L)=>(F(),V(_(Y),{key:L},{default:D(()=>[B("img",{src:_(W)(M.imgName)},null,8,ye),B("div",{class:H(["t-overflow-auto",{"t-text-white":i.darkMode}])},[B("h2",Ce,R(M.title),1),B("p",{class:H(["t-truncate",`practice-${L}`])},R(M.description),3),ie(B("button",{class:"t-text-xs t-text-right t-block t-w-full t-text-cyan-600 hover:t-text-sky-200",onClick:$},"顯示全文...",512),[[le,M.showMoreBtn]]),U(g,{to:{name:M.routerName},class:"btn btn-primary"},{default:D(()=>r[0]||(r[0]=[re("Go...")])),_:2},1032,["to"])],2)]),_:2},1024))),128)),U(_(Y),null,{default:D(()=>[B("img",{src:_(W)("default.jpg")},null,8,$e),B("div",{class:H(["",{"t-text-white":i.darkMode}])},r[1]||(r[1]=[B("h2",{class:"t-font-bold t-text-xl t-mb-2"},"努力練習產出中..",-1),B("p",null,"努力找目標練習產出中...",-1)]),2),r[2]||(r[2]=B("div",{class:"t-bg-[#8c9bab] t-text-black t-w-fit t-p-2 t-rounded",role:"button"},"努力練習產出中...",-1))]),_:1})]),_:1},8,["speed"])}}}),Le=ce(xe,[["__scopeId","data-v-53fea4d0"]]);export{Le as P};
