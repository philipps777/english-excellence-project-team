(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();$(window).scroll(function(){$(this).scrollTop()>200?$(".scroll-to-top").fadeIn():$(".scroll-to-top").fadeOut()});$(".scroll-to-top").click(function(){return $("html, body").animate({scrollTop:0},800),!1});(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".link-mobile");document.querySelector(".backdrop");const e=()=>{const t=n.classList.contains("is-open");o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open"),document.body.style.position=t?"":"fixed"};o.addEventListener("click",e),s.addEventListener("click",e),r.forEach(t=>t.addEventListener("click",e)),n.addEventListener("click",t=>{t.target===n&&e()}),window.matchMedia("(min-width: 1280px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),document.body.style.position="")})})();
//# sourceMappingURL=commonHelpers.js.map
