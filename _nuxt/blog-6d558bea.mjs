import{_ as R,a as T,b as V}from"./Footer-cc59eb44.mjs";import{o as t,a as n,b as e,t as d,e as f,i as v,u as r,D as z,a5 as F,f as p,I,z as P,w as j,S as s,X as m,Q as i,$ as g,R as A,T as E,a0 as H,a9 as O,c as h,aa as Q,Z as X,ab as Z,ac as q}from"./entry-b0ca8407.mjs";import{_ as b}from"./plugin-vue_export-helper-84c1d017.mjs";import{u as G}from"./useRouteNoLanguage-ec9e4655.mjs";import"./index-e00407b5.mjs";const J={},K={class:"blog-home-title-filter-wrapper col-start-2 col-end-3 row-start-2 row-end-3"},U={class:"blog-home-title-filter"},W={class:"blog-home-title"};function Y(u,o){return t(),n("div",K,[e("div",U,[e("div",W,[e("h2",null,d(u.$t("blog.home.title")),1)])])])}var ee=b(J,[["render",Y]]);const te={class:"up left"},oe=f({__name:"DarkModeSwitcher",setup(u){const o=v();function l(){o.value?o.value=!1:o.value=!0}return(_,c)=>(t(),n("div",te,[r(o)?(t(),n("i",{key:0,onClick:l,class:"pi pi-moon text-[2.23rem]"})):(t(),n("i",{key:1,onClick:l,class:"pi pi-sun text-[2.23rem]"}))]))}});var ae=b(oe,[["__scopeId","data-v-0dca08c5"]]);const se={class:"header-wrapper"},ne={class:"title"},le={class:"<msd:hidden"},re={class:"header-title"},ce={class:"header-subtitle <msd:hidden"},ie={class:"grid grid-cols-[auto,minmax(0,58rem),1fr] <2xl:grid-cols-[1fr,minmax(0,56rem),1fr]"},de={class:"row-start-2 row-end-3 col-start-1 col-end-4 grid grid-cols-[auto,minmax(0,58rem),1fr] <2xl:grid-cols-[1fr,minmax(0,56rem),1fr]"},_e={class:"!relative col-start-2 col-end-3 row-start-1 row-end-2"},ue={class:"h-[60vh] flex-1 col-start-1 col-end-3 mt-10 z-30"},be=f({__name:"blog",props:{siteData:Object},setup(u){const o=z();console.log(o),F();const l=v(),_=p(!1),c=p(!1),{$bus:k}=I(),w=G(),$=P(function(){return o.name!="lang-blog"?[]:["home"]});function x(){c.value=!1,_.value=!0,k.emit("triggerScroll",""),setTimeout(()=>{_.value=!1,c.value=!1},600)}function y(){setTimeout(()=>{c.value=!0},0)}return j(l,a=>{q("dark-mode",`${a}`)}),(a,me)=>{const C=R,D=A,N=T,S=ee,B=E("router-view"),L=V;return t(),n("div",{class:g(["blog-wrapper",{dark:r(l)}])},[e("header",null,[e("div",se,[s(ae),s(C),e("div",ne,[r(w)=="/blog/"?(t(),n(m,{key:0},[e("h1",null,d(a.$t("blog.header.title")),1),e("h2",le,d(a.$t("blog.header.subtitle")),1)],64)):(t(),n(m,{key:1},[e("div",re,[s(D,{to:"/blog/"},{default:i(()=>[H(d(a.$t("blog.header.title")),1)]),_:1})]),e("div",ce,d(a.$t("blog.header.subtitle")),1)],64))]),s(N,{"navigation-id":"blog.navigation",blacklist:r($)},null,8,["blacklist"])])]),e("main",ie,[s(B,null,{default:i(({Component:M})=>[s(O,null,{default:i(()=>[e("div",de,[e("div",_e,[e("div",{class:g(["load-bar-animation",{loaded:_.value,pending:c.value,"white-bar":r(o).path.match(/\/blog\/.+/g)}])},null,2)]),(t(),h(Z,{onPending:y,onResolve:x},{default:i(()=>[(t(),h(Q(M),{key:a.$route.path}))]),fallback:i(()=>[a.$route.name=="lang-blog"?(t(),n(m,{key:0},[],64)):X("",!0),s(S)]),_:2},1024))])]),_:2},1024)]),_:1})]),e("footer",ue,[s(L,{"text-class":r(l)?"":"!text-black","svg-props":r(l)?{}:{fill:"black"}},null,8,["text-class","svg-props"])])],2)}}});export{be as default};
