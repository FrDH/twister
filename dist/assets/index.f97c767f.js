const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}};f();var a={duration:6e3,sides:["left","right"],limbs:["hand","foot"],colors:["red","blue","green","purple"]},m=t=>{let r=null;const e=document.querySelector(".control");e==null||e.addEventListener("click",()=>{e.classList.contains("control--play")?(t(),r=setInterval(t,a.duration)):e.classList.contains("control--pause")&&(clearInterval(r),document.querySelectorAll(".limb").forEach(n=>{n.classList.remove(...a.colors)})),e.classList.toggle("control--play"),e.classList.toggle("control--pause")})},p="./assets/left-foot.7d4de559.m4a",g="./assets/left-hand.c5ca44bf.m4a",h="./assets/right-foot.0ab5531c.m4a",v="./assets/right-hand.fede3757.m4a",b="./assets/on.40fc7a1f.m4a",y="./assets/blue.d7acb94f.m4a",L="./assets/green.876bd79b.m4a",w="./assets/red.2f2b9354.m4a",A="./assets/purple.eb630030.m4a";const l={leftfoot:new Audio(p),lefthand:new Audio(g),rightfoot:new Audio(h),righthand:new Audio(v),on:new Audio(b),blue:new Audio(y),green:new Audio(L),red:new Audio(w),purple:new Audio(A)};l.on.volume=.5;var $=()=>{const t=document.querySelector(".control");t==null||t.addEventListener("click",()=>{t==null||t.classList.remove("control--start"),t==null||t.classList.add("control--pause")},{once:!0}),document.addEventListener("click",r=>{r.stopPropagation();for(const e in l)l[e].muted="muted",l[e].play(),l[e].onended=()=>{l[e].muted=null,l[e].onended=null}},{once:!0})};const c=t=>t[Math.floor(Math.random()*t.length)];let d="",u="";$();m(()=>{var s;let t="",r="",e="",n="";do r=c(a.sides),e=c(a.limbs),n=c(a.colors),t=`${r}${e}`;while(((s=document.querySelector(`.limb--${r}.limb--${e}`))==null?void 0:s.classList.contains(n))||document.querySelectorAll(`.${n}`).length>1||t===d||n===u);d=t,u=n;const o=document.querySelector(`.limb--${r}.limb--${e}`);o&&(o.classList.remove(...a.colors),o.classList.add(n),l[`${r}${e}`].play(),setTimeout(()=>{l.on.play(),setTimeout(()=>{l[n].play()},350)},1e3))});