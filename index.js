import{a as v,S as M,i}from"./assets/vendor-BjRz3xa9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=15;async function h(o,a=1){return await v.get("https://pixabay.com/api/?",{params:{key:"49618658-bd62d28bb73c3efea12ea07c4",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:a}})}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector("#load-btn");function b(o){const a=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:r,comments:w,downloads:S})=>`
        <li class='gallery-item'>
            <a class='gallery-link' href='${l}'>
                <img
                    src='${s}'
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
                        <p class='photo-stats-number'>${r}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Comments</p>
                        <p class='photo-stats-number'>${w}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Downloads</p>
                        <p class='photo-stats-number'>${S}</p>
                    </li>
                </ul>
            </div>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",a),$.refresh()}const $=new M(".gallery a",{captionsData:"alt",captionDelay:250});function P(){m.innerHTML=""}function L(){g.style.display="block"}function d(){g.style.display="none"}function O(){y.classList.remove("hide-btn")}function C(){y.classList.add("hide-btn")}const q=document.querySelector(".form");q.addEventListener("submit",k);const f=document.querySelector("#load-btn");f.addEventListener("click",x);let n=1,c,u;d();async function k(o){if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),!c){i.warning({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ffa000",message:"Please enter a search query!",position:"topRight"});return}L(),P();try{const s=await h(c);s.data.total===0&&i.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),b(s.data.hits),u=Math.ceil(s.data.totalHits/p),n<u?O():C()}catch(s){i.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:s.message,position:"topRight"})}finally{d()}q.reset()}async function x(){f.disabled=!0,n++,L();try{n===u&&(C(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const o=await h(c,n);b(o.data.hits),f.disabled=!1}catch(o){i.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:o.message,position:"topRight"})}finally{d()}}
//# sourceMappingURL=index.js.map
