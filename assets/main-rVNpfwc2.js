import{c as l,N as d,s as a,P as m,L as p,M as f,u as s}from"./NotFoundPage-BpTyviUA.js";const h=t=>{const{subscribe:e,notify:o}=l(),n=()=>window.location.pathname.replace(BASE_URL,""),i=()=>t[window.location.pathname]??d,c=u=>{window.history.pushState({},"",u),o()};return window.addEventListener("popstate",()=>o()),{push:c,subscribe:e,getTarget:i,getPath:n}},b={"/":f,"/login":p,"/profile":m},r=h(b),g=()=>{const t=r.getPath(),{loggedIn:e}=a.getState();if(t==="/login"&&e){r.push("/");return}if(t==="/profile"&&!e){r.push("/login");return}const o=document.getElementById("root"),n=r.getTarget();o.innerHTML=n()},w=t=>{t.preventDefault();const e=t.target.id,o=new FormData(t.target);if(e==="login-form"){const n=o.get("username").trim();s.set({username:n,email:"",bio:""}),a.setState({user:s.get(),loggedIn:!0});return}if(e==="profile-form"){const n=o.get("username").trim(),i=o.get("email").trim(),c=o.get("bio").trim();s.set({username:n,email:i,bio:c}),a.setState({user:s.get()});return}},L=t=>{const e=t.target.closest("a");if(e){if(t.preventDefault(),e.id==="logout"){P();return}const o=e.href.replace(window.location.origin,"");r.push(o)}},P=()=>{s.reset(),a.setState({user:s.get(),loggedIn:!1}),r.push("/login")},S=()=>{r.subscribe(g),a.subscribe(g),document.body.addEventListener("click",L),document.body.addEventListener("submit",w),g()};S();
