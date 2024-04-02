import{a as h,S as b,i as L}from"./assets/vendor-95dc692e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const w=h.create({baseURL:"https://pixabay.com/api/"});async function y(){const a={key:"43022038-5a6e0a87a795a8bbaa0a62c30",q:c,per_page:p,page:n,image_type:"photo",orientation:"horizontal",safesearch:"true"};return v(),(await w.get("",{params:a})).data}function f(a){if(a.hits.length===0)d("Sorry, there are no images matching your search query. Please try again!");else{const l=a.hits.map(r=>`<li class="gallery-item">
                <a class="gallery-link" href="${r.largeImageURL}">
                <img loading="lazy" class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
                </a>
                <div class="stats">
                    <p class="text">Likes<br/>${r.likes}</p>
                    <p class="text">Views<br/>${r.views}</p>
                    <p class="text">Comments<br/>${r.comments}</p>
                    <p class="text">Downloads<br/>${r.downloads}</p>
                </div>
            </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",l),q.refresh()}}const q=new b(".gallery-link",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector(".form"),searchInput:document.getElementById("searchInput"),searchBtn:document.querySelector("button"),loadBtn:document.querySelector(".load-more-button"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};let c="",n=1,p=15;m();i();s.form.addEventListener("submit",async a=>{if(a.preventDefault(),n=1,s.gallery.innerHTML="",c=s.searchInput.value.trim(),c!=="")try{const t=await y(c,n),l=Math.ceil(t.totalHits/p);f(t),m(),n>=l?i():g()}catch(t){console.log(t),d("An error occurred while fetching data."),i()}else d("Empty field!"),i();s.form.reset()});s.loadBtn.addEventListener("click",async a=>{n+=1;try{const t=await y(c,n);m(),f(t),g();const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"});const e=Math.ceil(t.totalHits/p);n>=e&&i()}catch(t){console.log(t),d("An error occurred while fetching data."),i()}});function d(a){L.error({title:"Error",message:a,position:"topRight",backgroundColor:"red"})}function m(){s.loader.style.display="none"}function v(){s.loader.style.display="block"}function i(){s.loadBtn.style.display="none"}function g(){s.loadBtn.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
