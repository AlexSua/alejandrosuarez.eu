import{e as _,f as c,h,i as p,w as v,j as x,o as y,a as k,b as w,k as M,_ as b}from"./entry-b0ca8407.mjs";import{u as z}from"./index-e00407b5.mjs";const I={class:"overflow-auto relative my-4"},g=_({__name:"Mermaid",props:{name:null},setup(d){const u=d,r=c(),m=h(),n=p(),s=c("35rem"),a=t=>t.map(e=>{if(!e.children||typeof e.children=="string")return e.children||"";if(Array.isArray(e.children))return a(e.children);if(e.children.default)return a(e.children.default())}).join("");function l(){let t=n.value?"dark":"neutral";b(()=>import("./mermaid.min-1af1991e.mjs").then(function(e){return e.m}),["mermaid.min-1af1991e.mjs","entry-b0ca8407.mjs","entry.37b17114.css"]).then(e=>{e.initialize({startOnLoad:!0,theme:t}),e.render(u.name,a(m.default())||"",i=>{let o=Number(i.match(/max-width:.*?([0-9|\.]+)px/)[1]);i=i.replace(/max-width:.*?([0-9|\.]+)px;/,"").replace(/height=".*?"/,""),o<16*52&&(s.value=o.toString()+"px"),r.value.innerHTML=i},r.value)})}function f(){z(r,(t,e)=>{t[0].isIntersecting&&(l(),e.disconnect())})}return v(n,()=>l()),x(()=>{f()}),(t,e)=>(y(),k("div",I,[w("div",{ref_key:"mermaid",ref:r,class:"mermaid flex justify-center",style:M({minWidth:s.value})},null,4)]))}});export{g as default};