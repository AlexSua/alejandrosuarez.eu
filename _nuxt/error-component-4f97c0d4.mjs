import{d as a,_ as c,o as E,c as f,n as k,g as v,u as t}from"./entry-3d1fd045.mjs";const P={__name:"nuxt-error-page",props:{error:Object},setup(p){var o;const e=p.error;(e.stack||"").split(`
`).splice(1).map(s=>({text:s.replace("webpack:/","").replace(".vue",".js").trim(),internal:s.includes("node_modules")&&!s.includes(".cache")||s.includes("internal")||s.includes("new Promise")})).map(s=>`<span class="stack${s.internal?" internal":""}">${s.text}</span>`).join(`
`);const r=String(e.statusCode||500),n=r==="404",i=(o=e.statusMessage)!=null?o:n?"Page Not Found":"Internal Server Error",u=e.message||e.toString(),_=void 0,d=a(()=>c(()=>import("./error-404-301c944d.mjs"),["error-404-301c944d.mjs","error-404.43ee40fd.css","entry-3d1fd045.mjs","entry.c625c461.css","plugin-vue_export-helper-84c1d017.mjs"])),l=a(()=>c(()=>import("./error-500-b7c7b708.mjs"),["error-500-b7c7b708.mjs","error-500.45c67e9b.css","entry-3d1fd045.mjs","entry.c625c461.css","plugin-vue_export-helper-84c1d017.mjs"])),m=n?d:l;return(s,g)=>(E(),f(t(m),k(v({statusCode:t(r),statusMessage:t(i),description:t(u),stack:t(_)})),null,16))}};var j=P;export{j as default};
