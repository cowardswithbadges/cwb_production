import{S as ie,i as ue,s as re,e as p,k as y,c as v,a as O,m as U,d as T,b as a,X as te,g as W,J as u,a3 as j,N as ae,a4 as de,a5 as ce,a6 as _e,O as fe,a7 as le,U as he,t as me,Y as pe,h as ve,a8 as be,p as ge,q as Te,o as Ee,a9 as ke,aa as ne,n as qe,ab as ye,K as Ue}from"../../chunks/vendor-1e97ec91.js";import{i as Ne}from"../../chunks/navigation-0e097d47.js";import"../../chunks/singletons-d19c42e4.js";function J(r,{pending:t,error:e,result:o}={}){let m;async function E(c){const d=m={};c.preventDefault();const h=new FormData(r);t&&t({data:h,form:r});try{const l=await fetch(r.action,{method:r.method,headers:{accept:"application/json"},body:h});if(d!==m)return;if(l.ok){o&&o({data:h,form:r,response:l});const b=new URL(r.action);b.search=b.hash="",Ne(b.href)}else e?e({data:h,form:r,error:null,response:l}):console.error(await l.text())}catch(l){if(e)e({data:h,form:r,error:l,response:null});else throw l}}return r.addEventListener("submit",E),{destroy(){r.removeEventListener("submit",E)}}}function oe(r,t,e){const o=r.slice();return o[3]=t[e],o[4]=t,o[5]=e,o}function se(r,t){let e,o,m,E,c,d,h,l,b,P,w,x,f,k,s,i,n,M,B,N,K,I,D,A,X,R,H,S,Y,F,z,G=Ue,q,Q,Z;function $(...g){return t[1](t[3],t[4],t[5],...g)}function ee(){return t[2](t[3],t[4],t[5])}return{key:r,first:null,c(){e=p("div"),o=p("form"),m=p("input"),c=y(),d=p("input"),l=y(),b=p("button"),x=y(),f=p("form"),k=p("input"),i=y(),n=p("input"),B=y(),N=p("button"),K=y(),I=p("form"),D=p("input"),X=y(),R=p("button"),Y=y(),this.h()},l(g){e=v(g,"DIV",{class:!0});var _=O(e);o=v(_,"FORM",{action:!0,method:!0});var C=O(o);m=v(C,"INPUT",{type:!0,name:!0,class:!0}),c=U(C),d=v(C,"INPUT",{type:!0,name:!0,class:!0}),l=U(C),b=v(C,"BUTTON",{class:!0,"aria-label":!0}),O(b).forEach(T),C.forEach(T),x=U(_),f=v(_,"FORM",{class:!0,action:!0,method:!0});var L=O(f);k=v(L,"INPUT",{type:!0,name:!0,class:!0}),i=U(L),n=v(L,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),B=U(L),N=v(L,"BUTTON",{class:!0,"aria-label":!0}),O(N).forEach(T),L.forEach(T),K=U(_),I=v(_,"FORM",{action:!0,method:!0});var V=O(I);D=v(V,"INPUT",{type:!0,name:!0,class:!0}),X=U(V),R=v(V,"BUTTON",{class:!0,"aria-label":!0}),O(R).forEach(T),V.forEach(T),Y=U(_),_.forEach(T),this.h()},h(){a(m,"type","hidden"),a(m,"name","uid"),m.value=E=t[3].uid,a(m,"class","svelte-dmxqmd"),a(d,"type","hidden"),a(d,"name","done"),d.value=h=t[3].done?"":"true",a(d,"class","svelte-dmxqmd"),a(b,"class","toggle svelte-dmxqmd"),a(b,"aria-label",P="Mark todo as "+(t[3].done?"not done":"done")),a(o,"action","/todos?_method=PATCH"),a(o,"method","post"),a(k,"type","hidden"),a(k,"name","uid"),k.value=s=t[3].uid,a(k,"class","svelte-dmxqmd"),a(n,"aria-label","Edit todo"),a(n,"type","text"),a(n,"name","text"),n.value=M=t[3].text,a(n,"class","svelte-dmxqmd"),a(N,"class","save svelte-dmxqmd"),a(N,"aria-label","Save todo"),a(f,"class","text svelte-dmxqmd"),a(f,"action","/todos?_method=PATCH"),a(f,"method","post"),a(D,"type","hidden"),a(D,"name","uid"),D.value=A=t[3].uid,a(D,"class","svelte-dmxqmd"),a(R,"class","delete svelte-dmxqmd"),a(R,"aria-label","Delete todo"),R.disabled=H=t[3].pending_delete,a(I,"action","/todos?_method=DELETE"),a(I,"method","post"),a(e,"class","todo svelte-dmxqmd"),te(e,"done",t[3].done),this.first=e},m(g,_){W(g,e,_),u(e,o),u(o,m),u(o,c),u(o,d),u(o,l),u(o,b),u(e,x),u(e,f),u(f,k),u(f,i),u(f,n),u(f,B),u(f,N),u(e,K),u(e,I),u(I,D),u(I,X),u(I,R),u(e,Y),q=!0,Q||(Z=[j(w=J.call(null,o,{pending:$})),j(J.call(null,f)),j(S=J.call(null,I,{pending:ee}))],Q=!0)},p(g,_){t=g,(!q||_&1&&E!==(E=t[3].uid))&&(m.value=E),(!q||_&1&&h!==(h=t[3].done?"":"true"))&&(d.value=h),(!q||_&1&&P!==(P="Mark todo as "+(t[3].done?"not done":"done")))&&a(b,"aria-label",P),w&&ae(w.update)&&_&1&&w.update.call(null,{pending:$}),(!q||_&1&&s!==(s=t[3].uid))&&(k.value=s),(!q||_&1&&M!==(M=t[3].text)&&n.value!==M)&&(n.value=M),(!q||_&1&&A!==(A=t[3].uid))&&(D.value=A),(!q||_&1&&H!==(H=t[3].pending_delete))&&(R.disabled=H),S&&ae(S.update)&&_&1&&S.update.call(null,{pending:ee}),_&1&&te(e,"done",t[3].done)},r(){z=e.getBoundingClientRect()},f(){de(e),G(),ce(e,z)},a(){G(),G=_e(e,z,ke,{duration:200})},i(g){q||(g&&fe(()=>{F||(F=le(e,ne,{start:.7},!0)),F.run(1)}),q=!0)},o(g){g&&(F||(F=le(e,ne,{start:.7},!1)),F.run(0)),q=!1},d(g){g&&T(e),g&&F&&F.end(),Q=!1,he(Z)}}}function Ie(r){let t,e,o,m,E,c,d,h,l=[],b=new Map,P,w,x,f=r[0];const k=s=>s[3].uid;for(let s=0;s<f.length;s+=1){let i=oe(r,f,s),n=k(i);b.set(n,l[s]=se(n,i))}return{c(){t=y(),e=p("div"),o=p("h1"),m=me("Todos"),E=y(),c=p("form"),d=p("input"),h=y();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){pe('[data-svelte="svelte-181o7gf"]',document.head).forEach(T),t=U(s),e=v(s,"DIV",{class:!0});var n=O(e);o=v(n,"H1",{});var M=O(o);m=ve(M,"Todos"),M.forEach(T),E=U(n),c=v(n,"FORM",{class:!0,action:!0,method:!0});var B=O(c);d=v(B,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),B.forEach(T),h=U(n);for(let N=0;N<l.length;N+=1)l[N].l(n);n.forEach(T),this.h()},h(){document.title="Todos",a(d,"name","text"),a(d,"aria-label","Add todo"),a(d,"placeholder","+ tap to add a todo"),a(d,"class","svelte-dmxqmd"),a(c,"class","new svelte-dmxqmd"),a(c,"action","/todos"),a(c,"method","post"),a(e,"class","todos svelte-dmxqmd")},m(s,i){W(s,t,i),W(s,e,i),u(e,o),u(o,m),u(e,E),u(e,c),u(c,d),u(e,h);for(let n=0;n<l.length;n+=1)l[n].m(e,null);P=!0,w||(x=j(J.call(null,c,{result:Oe})),w=!0)},p(s,[i]){if(i&1){f=s[0],qe();for(let n=0;n<l.length;n+=1)l[n].r();l=be(l,i,k,1,s,f,b,e,ye,se,null,oe);for(let n=0;n<l.length;n+=1)l[n].a();ge()}},i(s){if(!P){for(let i=0;i<f.length;i+=1)Te(l[i]);P=!0}},o(s){for(let i=0;i<l.length;i+=1)Ee(l[i]);P=!1},d(s){s&&T(t),s&&T(e);for(let i=0;i<l.length;i+=1)l[i].d();w=!1,x()}}}const Oe=async({form:r})=>{r.reset()};function Pe(r,t,e){let{todos:o}=t;const m=(c,d,h,{data:l})=>{e(0,d[h].done=!!l.get("done"),o)},E=(c,d,h)=>e(0,d[h].pending_delete=!0,o);return r.$$set=c=>{"todos"in c&&e(0,o=c.todos)},[o,m,E]}class Re extends ie{constructor(t){super();ue(this,t,Pe,Ie,re,{todos:0})}}export{Re as default};
