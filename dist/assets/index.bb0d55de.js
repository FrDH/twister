const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}};g();const f=e=>e[Math.floor(Math.random()*e.length)];var w="./assets/left-foot.7d4de559.m4a",A="./assets/left-hand.c5ca44bf.m4a",S="./assets/right-foot.0ab5531c.m4a",$="./assets/right-hand.fede3757.m4a",q="./assets/on.40fc7a1f.m4a",I="./assets/blue.d7acb94f.m4a",M="./assets/green.876bd79b.m4a",T="./assets/red.2f2b9354.m4a",x="./assets/purple.eb630030.m4a";const r={leftfoot:new Audio(w),lefthand:new Audio(A),rightfoot:new Audio(S),righthand:new Audio($),on:new Audio(q),blue:new Audio(I),green:new Audio(M),red:new Audio(T),purple:new Audio(x)};r.on.volume=.5;const H=()=>{for(const e in r)r[e].muted="muted",r[e].play(),r[e].onended=()=>{r[e].muted=null,r[e].onended=null}},O=6e3,N=["left","right"],k=["hand","foot"],p=["red","blue","green","purple"],i=document.querySelector(".control"),c=i==null?void 0:i.querySelector(".control__text"),d=document.querySelector(".game"),P=()=>{i==null||i.addEventListener("click",()=>{(d==null?void 0:d.classList.contains("is-playing"))?K():(d==null?void 0:d.classList.contains("is-paused"))&&v()})},_=()=>{c&&(c.innerHTML="Start"),i==null||i.addEventListener("click",()=>{if(H(),c){let e=5;c.innerHTML=`${e}`;let s=setInterval(()=>{e--,e==0?(c.innerHTML="",clearInterval(s),v()):c.innerHTML=`${e}`},1e3)}else v()},{once:!0})},l=document.querySelector(".game"),C=document.querySelectorAll(".limb");let m,h,y;const b=()=>{l==null||l.classList.remove("is-playing","is-paused"),C.forEach(e=>{e.classList.remove(...p)}),h="",y="",m&&clearInterval(m)},F=()=>{b(),P(),_()},v=()=>{b(),l==null||l.classList.add("is-playing"),m=setInterval(L,O),L()},K=()=>{b(),l==null||l.classList.add("is-paused")},L=()=>{var n;let e="",s="",a="",o="";do s=f(N),a=f(k),o=f(p),e=`${s}${a}`;while(((n=document.querySelector(`.limb--${s}.limb--${a}`))==null?void 0:n.classList.contains(o))||document.querySelectorAll(`.${o}`).length>1||e===h||o===y);h=e,y=o;const t=document.querySelector(`.limb--${s}.limb--${a}`);t&&(t.classList.remove(...p),t.classList.add(o),r[`${s}${a}`].play(),setTimeout(()=>{r.on.play(),setTimeout(()=>{r[o].play()},350)},1e3))};F();
