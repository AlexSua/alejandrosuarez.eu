import f from"./ContentQuery-b5b8845a.mjs";import{e as m,h as y,E as o}from"./entry-b455194b.mjs";import"./json-977c8afb.mjs";import"./asyncData-32268e9b.mjs";import"./query-17d4e71f.mjs";import"./utils-fb7af910.mjs";var C=m({props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(a){const e=y(),{path:p,query:d}=a,i=Object.assign(d||{},{path:p}),r=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return o(f,i,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:u})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:u,...this.$attrs}):({data:t})=>r("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>r("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:u})=>r("not-found",u)}})}});export{C as default};