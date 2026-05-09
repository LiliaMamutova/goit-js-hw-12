import{a as P,S as B,i as M}from"./assets/vendor-DnCMJMY2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const O="55632316-73dae94149f02da0b6b69c83b",E="https://pixabay.com/api/?";let h=15;async function m(a,t=1){const o=new URLSearchParams({key:O,page:t,per_page:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),{data:i}=await P.get(`${E}${o}`);return i}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-btn"),D=new B(".gallery a",{captionsData:"alt",captionsSelector:"img",captionDelay:450,overlayOpacity:.5});function L(a){const t=a.map(({id:o,webformatURL:i,largeImageURL:e,tags:r,likes:l,views:S,comments:q,downloads:$})=>`<li class="gallery-link" data-id="${o}">
     <a class="gallery-image" href="${e}">
        <img class="gallery-img-item" src="${i}" alt="${r}" />
     </a>

     <div class="gallery-info"">
      <div class="gallery-info-item">
        <h2 class="title-item">Likes</h2>
        <p class="qty-item">${l}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Views</h2>
        <p class="qty-item">${S}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Comments</h2>
        <p class="qty-item">${q}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Downloads</h2>
        <p class="qty-item">${$}</p>
      </div>
     </div>
  </li>`).join("");f.insertAdjacentHTML("beforeend",t),D.refresh()}function H(){f.innerHTML=""}function v(){g.classList.remove("hidden")}function b(){g.classList.add("hidden")}function w(){p.classList.remove("hidden-btn")}function c(){p.classList.add("hidden-btn")}const x=document.querySelector(".form"),y=document.querySelector(".load-btn");x.addEventListener("submit",A);y.addEventListener("click",R);let n=1,u="",d=!1;async function A(a){a.preventDefault();const t=a.currentTarget.elements[0];if(u=t.value.trim(),n=1,!u){s("Please enter a search term!","yellow");return}c(),v(),H();try{const o=await m(u,n);if(o.hits.length===0){s("Sorry, there are no images matching your search query. Please try again!","red"),c();return}d=n*h>=o.totalHits,d?(c(),s("We're sorry, but you've reached the end of search results","yellow")):w(),L(o.hits)}catch{s("Sorry, there are no images matching your search query. Please try again!","red")}finally{b(),t.value=""}}async function R(a){if(a.preventDefault(),!d){n+=1,y.disabled=!0,c(),v();try{const t=await m(u,n);d=n*h>=t.totalHits,d?(c(),s("We're sorry, but you've reached the end of search results","yellow")):w(),L(t.hits);const i=document.querySelector(".gallery-link").getBoundingClientRect().height*2;window.scrollBy({left:0,top:i,behavior:"smooth"})}catch{s("Something bad happened, try again","red")}finally{b(),y.disabled=!1}}}function s(a,t){return M.show({message:a,color:t,position:"topRight"})}
//# sourceMappingURL=index.js.map
