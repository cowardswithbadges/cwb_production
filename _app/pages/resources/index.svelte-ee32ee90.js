import{S as l,i as f,s as u,e as _,t as d,k as h,w as $,c as g,a as x,h as y,d as c,m as w,x as j,g as m,J as q,y as v,q as G,o as P,B as R}from"../../chunks/vendor-1e97ec91.js";import{p as S,a as k}from"../../chunks/navigation-0e097d47.js";import{G as B}from"../../chunks/Grid-78267cdf.js";import"../../chunks/singletons-d19c42e4.js";function C(r){let t,n,a,e,i;return e=new B({props:{posts:r[0]}}),{c(){t=_("h1"),n=d("resources"),a=h(),$(e.$$.fragment)},l(s){t=g(s,"H1",{});var o=x(t);n=y(o,"resources"),o.forEach(c),a=w(s),j(e.$$.fragment,s)},m(s,o){m(s,t,o),q(t,n),m(s,a,o),v(e,s,o),i=!0},p(s,[o]){const p={};o&1&&(p.posts=s[0]),e.$set(p)},i(s){i||(G(e.$$.fragment,s),i=!0)},o(s){P(e.$$.fragment,s),i=!1},d(s){s&&c(t),s&&c(a),R(e,s)}}}S("/resources");k();const A=async({fetch:r,url:t})=>({props:{posts:await(await r("/api/posts.json")).json()}});function E(r,t,n){let{posts:a}=t;return r.$$set=e=>{"posts"in e&&n(0,a=e.posts)},[a]}class D extends l{constructor(t){super();f(this,t,E,C,u,{posts:0})}}export{D as default,A as load};
