import{S as l,i as f,s as u,e as _,t as d,k as g,w as h,c as $,a as y,h as w,d as c,m as x,x as C,g as m,J as j,y as q,q as v,o as B,B as G}from"../../../chunks/vendor-1a321495.js";import{G as P}from"../../../chunks/Grid-036107ed.js";import"../../../chunks/navigation-bd39ff07.js";import"../../../chunks/singletons-a6a7384f.js";function S(r){let s,n,o,e,i;return e=new P({props:{posts:r[0]}}),{c(){s=_("h1"),n=d("Categories"),o=g(),h(e.$$.fragment)},l(t){s=$(t,"H1",{});var a=y(s);n=w(a,"Categories"),a.forEach(c),o=x(t),C(e.$$.fragment,t)},m(t,a){m(t,s,a),j(s,n),m(t,o,a),q(e,t,a),i=!0},p(t,[a]){const p={};a&1&&(p.posts=t[0]),e.$set(p)},i(t){i||(v(e.$$.fragment,t),i=!0)},o(t){B(e.$$.fragment,t),i=!1},d(t){t&&c(s),t&&c(o),G(e,t)}}}const J=async({params:r,fetch:s})=>{const n=r.category;return{props:{posts:(await(await s("/cwb_production/api/posts.json")).json()).filter(t=>t.meta.categories.includes(n))}}};function b(r,s,n){let{posts:o}=s;return r.$$set=e=>{"posts"in e&&n(0,o=e.posts)},[o]}class U extends l{constructor(s){super();f(this,s,b,S,u,{posts:0})}}export{U as default,J as load};