const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}};f();var n={duration:6e3,sides:["left","right"],limbs:["hand","foot"],colors:["red","blue","green","purple"]},m=s=>{let r=null;const t=document.querySelector(".control");t==null||t.addEventListener("click",()=>{t.classList.contains("control--play")?(s(),r=setInterval(s,n.duration)):(clearInterval(r),document.querySelectorAll(".limb").forEach(l=>{l.classList.remove(...n.colors)})),t.classList.toggle("control--play"),t.classList.toggle("control--pause")})},h="/assets/left-foot.7d4de559.m4a",p="/assets/left-hand.c5ca44bf.m4a",g="/assets/right-foot.0ab5531c.m4a",b="/assets/right-hand.fede3757.m4a",v="/assets/on.40fc7a1f.m4a",y="/assets/blue.d7acb94f.m4a",L="/assets/green.876bd79b.m4a",w="/assets/red.2f2b9354.m4a",A="/assets/purple.eb630030.m4a";const i={leftfoot:new Audio(h),lefthand:new Audio(p),rightfoot:new Audio(g),righthand:new Audio(b),on:new Audio(v),blue:new Audio(y),green:new Audio(L),red:new Audio(w),purple:new Audio(A)};i.on.volume=.5;const c=s=>s[Math.floor(Math.random()*s.length)];let d="",u="";m(()=>{var o;let s="",r="",t="",l="";do r=c(n.sides),t=c(n.limbs),l=c(n.colors),s=`${r}${t}`;while(((o=document.querySelector(`.limb--${r}.limb--${t}`))==null?void 0:o.classList.contains(l))||document.querySelectorAll(`.${l}`).length>1||s===d||l===u);d=s,u=l;const e=document.querySelector(`.limb--${r}.limb--${t}`);e&&(e.classList.remove(...n.colors),e.classList.add(l),i[`${r}${t}`].play(),setTimeout(()=>{i.on.play(),setTimeout(()=>{i[l].play()},350)},1e3))});
