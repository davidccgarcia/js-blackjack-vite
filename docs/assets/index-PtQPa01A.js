(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const h=t=>{const e=t.substring(0,t.length-1);return isNaN(e)?e==="A"?11:10:e*1},b=document.querySelectorAll("small"),m=(t,e,o)=>(o[e]+=h(t),b[e].innerText=o[e],o[e]),p=(t,e,o)=>{if(!t)throw new Error("La carta es un argumento obligatorio");if(!o)throw new Error("El divCartasJugadores es un argumento obligatorio");const n=document.createElement("img");n.src=`assets/cartas/${t}.png`,n.classList.add("carta"),n.alt="carta",o[e].append(n)},y=t=>t.sort(()=>Math.random()-.5),L=(t,e)=>{if(!t||t.length===0)throw new Error("tiposDeCarta es obligatorio como un arreglo de string");if(!e||e.length===0)throw new Error("tiposEspeciales es obligatorio como un arreglo de string");let o=[];for(let n=2;n<=10;n++)for(let r of t)o.push(n+r);for(let n of t)for(let r of e)o.push(r+n);return y(o)},w=t=>{let[e,o]=t;setTimeout(()=>{o===e?alert("Nadie gana :("):e>21?alert("Computadora Gana!"):o>21?alert("Jugador Gana!"):alert("Computadora gana!")},100)},g=t=>{if(!t||t.length===0)throw"No hay cartas en el deck";return t.pop()},f=(t,e,o,n)=>{let r=0;do{const a=g(e);r=m(a,o.length-1,o),p(a,o.length-1,n)}while(r<t&&t<=21);w(o)};let l=[];const v=["C","D","H","S"],E=["A","J","Q","K"];let s=[];const i=document.querySelector("#btnPedir"),d=document.querySelector("#btnDetener"),C=document.querySelector("#btnNuevo"),c=document.querySelectorAll(".divCartas"),N=document.querySelectorAll("small"),S=(t=2)=>{l=L(v,E),s=[];for(let e=0;e<t;e++)s.push(0);N.forEach(e=>e.innerText=0),c.forEach(e=>e.innerHTML=""),i.disabled=!1,d.disabled=!1};i.addEventListener("click",()=>{const t=g(l),e=m(t,0,s);p(t,0,c),e>21?(console.warn("Lo siento mucho, perdiste!"),i.disabled=!0,d.disabled=!0,f(e,l,s,c)):e===21&&(console.warn("21, Genial!"),i.disabled=!0,d.disabled=!0,f(e,l,s,c))});d.addEventListener("click",()=>{i.disabled=!0,d.disabled=!0,f(s[1],l,s,c)});C.addEventListener("click",()=>{S()});
