import{f as k,k as w,q as y,s as C,o as n,a as r,u,c as d,w as t,F as b,v as B,x as N,e as c,j as e,i as o,t as V,h as S}from"./entry.babb6ee8.js";const D=c("h3",{class:"text-h3"},"Posts page",-1),F=c("p",null,null,-1),G=k({__name:"posts",async setup(j){let _,l;const a=w();return[_,l]=y(()=>a.getData()),await _,l(),C(async()=>{console.log("I am mounted")}),(q,A)=>{const m=e("v-img"),i=e("v-card-title"),p=e("v-card-text"),v=e("v-btn"),f=e("v-card-actions"),g=e("v-card"),h=e("v-col"),x=e("v-row");return n(),r("div",null,[D,u(a).products.length?(n(),d(x,{key:0},{default:t(()=>[(n(!0),r(b,null,B(u(a).products,s=>(n(),d(h,{cols:"4",key:s.id},{default:t(()=>[o(g,null,{default:t(()=>[o(i,null,{default:t(()=>[o(m,{src:s.image,height:350},{default:t(()=>[F]),_:2},1032,["src"])]),_:2},1024),o(p,null,{default:t(()=>[c("p",null,V(s.title),1)]),_:2},1024),o(f,null,{default:t(()=>[o(v,null,{default:t(()=>[S(" Купить ")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1})):N("",!0)])}}});export{G as default};
