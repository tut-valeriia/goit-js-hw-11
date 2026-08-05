import{a as u,S as m,i}from"./assets/vendor-S2qh7U4E.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="57022805-d846619b0274c856f5d4e7759",p="https://pixabay.com/api/",h=s=>{const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u.get(`${p}?${o}`).then(e=>e.data)},c=document.querySelector(".gallery"),d=document.querySelector(".loader");let y=new m(".gallery a",{captionsData:"alt",captionDelay:250});const g=s=>{const o=s.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${e.likes}</p>
        <p class="info-item"><b>Views</b> ${e.views}</p>
        <p class="info-item"><b>Comments</b> ${e.comments}</p>
        <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()},b=()=>{c.innerHTML=""},L=()=>{d.classList.remove("hidden")},w=()=>{d.classList.add("hidden")},l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){i.warning({message:"Please enter a search query.",position:"topRight"});return}b(),L(),h(o).then(e=>{if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits)}).catch(e=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{w(),l.reset()})});
//# sourceMappingURL=index.js.map
