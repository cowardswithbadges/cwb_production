import{S as l,i as d,s as f,e as u,t as _,k as h,w as $,c as g,a as w,h as x,d as p,m as y,x as j,g as m,J as q,y as v,q as G,o as P,B as S}from"../../chunks/vendor-1a321495.js";import{G as b}from"../../chunks/Grid-a32b06c5.js";import"../../chunks/paths-4b3c6e7e.js";import"../../chunks/navigation-bd39ff07.js";import"../../chunks/singletons-a6a7384f.js";function k(n){let s,r,e,o,i;return o=new b({props:{posts:n[0]}}),{c(){s=u("h1"),r=_("the dishonored"),e=h(),$(o.$$.fragment)},l(t){s=g(t,"H1",{});var a=w(s);r=x(a,"the dishonored"),a.forEach(p),e=y(t),j(o.$$.fragment,t)},m(t,a){m(t,s,a),q(s,r),m(t,e,a),v(o,t,a),i=!0},p(t,[a]){const c={};a&1&&(c.posts=t[0]),o.$set(c)},i(t){i||(G(o.$$.fragment,t),i=!0)},o(t){P(o.$$.fragment,t),i=!1},d(t){t&&p(s),t&&p(e),S(o,t)}}}const z=async({fetch:n,url:s})=>({props:{posts:await(await n("/cwb_production/api/dishonor.json")).json()}});function B(n,s,r){let{posts:e}=s;return n.$$set=o=>{"posts"in o&&r(0,e=o.posts)},[e]}class A extends l{constructor(s){super();d(this,s,B,k,f,{posts:0})}}export{A as default,z as load};