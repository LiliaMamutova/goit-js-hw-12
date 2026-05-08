import{a as q,S as $,i as B}from"./assets/vendor-DnCMJMY2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const M="55632316-73dae94149f02da0b6b69c83b",P="https://pixabay.com/api/?";let y=15;async function f(a,e=1){const o=new URLSearchParams({key:M,page:e,per_page:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),{data:i}=await q.get(`${P}${o}`);return i}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-btn"),O=new $(".gallery a",{captionsData:"alt",captionsSelector:"img",captionDelay:450,overlayOpacity:.5});function L(a){const e=a.map(({id:o,webformatURL:i,largeImageURL:t,tags:r,likes:n,views:b,comments:w,downloads:S})=>`<li class="gallery-link" data-id="${o}">
     <a class="gallery-image" href="${t}">
        <img class="gallery-img-item" src="${i}" alt="${r}" />
     </a>

     <div class="gallery-info"">
      <div class="gallery-info-item">
        <h2 class="title-item">Likes</h2>
        <p class="qty-item">${n}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Views</h2>
        <p class="qty-item">${b}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Comments</h2>
        <p class="qty-item">${w}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Downloads</h2>
        <p class="qty-item">${S}</p>
      </div>
     </div>
  </li>`).join("");h.insertAdjacentHTML("beforeend",e),O.refresh()}function E(){h.innerHTML=""}function D(){g.classList.remove("hidden")}function H(){g.classList.add("hidden")}function v(){p.classList.remove("hidden-btn")}function u(){p.classList.add("hidden-btn")}const x=document.querySelector(".form"),m=document.querySelector(".load-btn");x.addEventListener("submit",A);m.addEventListener("click",R);let s=1,d="",l=!1;async function A(a){a.preventDefault();const e=a.currentTarget.elements[0];if(d=e.value.trim(),!d){c("Please enter a search term!","yellow");return}D(),E();try{const o=await f(d,s);console.log(o),l=s*y>=o.totalHits,l?u():v(),o.hits.length>0?L(o.hits):c("Something bad happened, try again","red")}catch(o){c("Sorry, there are no images matching your search query. Please try again!","red"),console.log(o.message)}finally{H(),e.value=""}}async function R(a){a.preventDefault(),s+=1,console.log(s),m.disabled=!0;try{if(l){u(),c("We're sorry, but you've reached the end of search results","yellow");return}const e=await f(d,s);l=s*y>=e.totalHits,l?u():v(),console.log(e),L(e.hits);const i=document.querySelector(".gallery-link").getBoundingClientRect().height*2;window.scrollBy({left:0,top:i,behavior:"smooth"})}catch(e){console.log(e),c("Something bad happened, try again","red")}finally{m.disabled=!1}}function c(a,e){return B.show({message:a,color:e,position:"topRight"})}
//# sourceMappingURL=index.js.map
