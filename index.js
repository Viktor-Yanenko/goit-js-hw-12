import{a as y,S as g,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=15;async function b(a,s=1){return await y.get("https://pixabay.com/api/?",{params:{key:"49618658-bd62d28bb73c3efea12ea07c4",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:l,page:s}})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=document.querySelector("#load-btn");function L(a){const s=a.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:i,comments:m,downloads:h})=>`
        <li class='gallery-item'>
            <a class='gallery-link' href='${o}'>
                <img
                    src='${r}'
                    alt='${e}'
                    width='360'
                    height='200'/>
            </a>
            <div>
                <ul class='photo-stats-list'>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Likes</p>
                        <p class='photo-stats-number'>${t}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Views</p>
                        <p class='photo-stats-number'>${i}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Comments</p>
                        <p class='photo-stats-number'>${m}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Downloads</p>
                        <p class='photo-stats-number'>${h}</p>
                    </li>
                </ul>
            </div>
        </li>
    `).join("");c.insertAdjacentHTML("beforeend",s),q.refresh()}const q=new g(".gallery a",{captionsData:"alt",captionDelay:250});function w(){c.innerHTML=""}function C(){u.style.display="block"}function d(){u.style.display="none"}function S(){p.classList.remove("hide-btn")}function M(){p.classList.add("hide-btn")}const f=document.querySelector(".form");f.addEventListener("submit",P);const v=document.querySelector("#load-btn");v.addEventListener("click",O);let $=1;d();async function P(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ffa000",message:"Please enter a search query!",position:"topRight"});return}C(),w();try{const o=await b(r);o.data.total===0&&n.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),L(o.data.hits);const e=Math.ceil(o.data.totalHits/l);$<e?S():M()}catch(o){n.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:o.message,position:"topRight"})}finally{d()}f.reset()}async function O(){}
//# sourceMappingURL=index.js.map
