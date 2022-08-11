import{e as h,T as N,A,w as b,o as c,a as u,b as o,U as x,V as C,X as _,P as $,N as y,Y as k,t as f,O as w,W as L,f as g,R as B,a1 as H,a2 as T}from"./entry-2b318d32.mjs";import{a as V}from"./index-ec697f0e.mjs";import{_ as O}from"./plugin-vue_export-helper-84c1d017.mjs";const P={class:"idioma up right"},R=["onClick"],ne=h({__name:"LanguageSwitcher",setup(n){const{locale:s,fallbackLocale:t}=N(),a=A(),d=["es","en"],i=function(e){return{selected:e===s.value}};function p(e){s.value=e;let r=document.querySelector(".cancel.show");r!=null&&r.click()}function l(e){if(e=e!="en"?e:null,e)return a.params.lang?"/"+e+a.path.replace("/"+a.params.lang,""):"/"+e+a.path;{let r=a.params.lang?a.path.replace("/"+a.params.lang,""):a.path;return r||"/"}}return b(()=>a.params.lang,e=>{e||(e=t.value),s.value=e}),(e,r)=>{const m=w;return c(),u("nav",P,[o("ul",null,[(c(),u(x,null,C(d,(v,S)=>o("li",{key:`locale-${S}`,class:_(i(v))},[o("span",{onClick:Z=>p(v)},[$(m,{to:l(v)},{default:y(()=>[k(f(v.toUpperCase()),1)]),_:2},1032,["to"])],8,R)],2)),64))])])}}}),Y={class:"secciones-navegacion"},j=["onClick"],M={key:0,class:"load-animation"},U=o("div",null,null,-1),q=o("div",null,null,-1),F=[U,q],ae=h({__name:"Navegacion",props:{loadAnimation:Boolean,navigationId:{type:String,default:"profile.navigation"},blacklist:{type:Array,default:()=>[]}},setup(n){function s(t){t&&t.startsWith("#")&&document.querySelector(t.replace("#",".")).scrollIntoView({behavior:"smooth"})}return(t,a)=>{const d=w;return c(),u("nav",Y,[o("ul",null,[(c(!0),u(x,null,C(Object.keys(t.$tm(n.navigationId)).filter(i=>!n.blacklist.includes(i)),(i,p)=>(c(),u("li",{key:p,onClick:l=>s(t.$t(`${n.navigationId}.${i}.path`))},[o("span",null,[$(d,{to:(t.$route.params.lang?"/"+t.$route.params.lang:"")+t.$t(`${n.navigationId}.${i}.path`)},{default:y(()=>[k(f(t.$t(`${n.navigationId}.${i}.title`)),1)]),_:2},1032,["to"])])],8,j))),128))]),n.loadAnimation?(c(),u("div",M,F)):L("",!0)])}}});function W(n,s,t){t&&(t.style.transform="translate3d("+n+", "+s+", 0)")}const I=n=>(H("data-v-dd93f494"),n=n(),T(),n),D={class:"footer-wrapper"},E={class:"footer-title"},X={class:"footer-nav"},z={class:"arrow-wrapper"},G=I(()=>o("path",{d:`M2873 2729 c-61 -30 -1572 -1550 -1602 -1611 -27 -58 -29 -165 -2
-223 23 -52 74 -103 126 -126 57 -26 162 -25 220 2 34 16 210 187 715 697
l670 675 670 -675 c505 -510 681 -681 715 -697 58 -27 163 -28 220 -2 52 23
103 74 126 126 25 54 25 166 0 221 -26 57 -1545 1584 -1605 1613 -60 30 -194
30 -253 0z`},null,-1)),J=[G],K=I(()=>o("img",null,null,-1)),Q=h({__name:"Footer",props:{svgProps:Object,textClass:String},setup(n){const s=g(),t=g(),a=g(!1),d=V(window);function i(l){{if(s.value){let e=l+window.innerHeight,r=document.body.scrollHeight;if(e>r-window.innerHeight){let m=e-r;W("0",m/2+"px",s.value),s.value.style.opacity=(1- -m/500).toString()}}t.value&&(window.scrollY+100+window.innerHeight>=document.body.offsetHeight?a.value=!0:a.value=!1)}}function p(){window.scrollTo({top:0,behavior:"smooth"})}return b(d.y,()=>i(d.y.value)),(l,e)=>{const r=w;return c(),u("div",D,[o("div",{ref_key:"footerText",ref:s,class:_(["footer-text",n.textClass])},[o("div",E,[o("h3",null,f(l.$t("profile.footer.title")),1),o("div",null,f(l.$t("profile.footer.subtitle")),1)]),o("div",X,[$(r,{to:l.$route.params.lang?"/"+l.$route.params.lang+"/privacy":"/privacy/"},{default:y(()=>[k(f(l.$t("profile.footer.privacy")),1)]),_:1},8,["to"])])],2),o("div",z,[o("div",{ref_key:"arriba",ref:t,class:"arriba"},[(c(),u("svg",{onClick:p,src:"@/assets/img/Arrow.svg",class:_({enabled:a.value}),version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"600.000000pt",height:"350.000000pt",viewBox:"0 0 600.000000 350.000000",preserveAspectRatio:"xMidYMid meet"},[o("g",B({transform:"translate(0.000000,350.000000) scale(0.100000,-0.100000)",fill:"#f2d492",stroke:"none"},n.svgProps),J,16)],2)),K],512)])])}}});var se=O(Q,[["__scopeId","data-v-dd93f494"]]);export{ne as _,ae as a,se as b};
