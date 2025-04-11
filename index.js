import{a as v,S as M,i}from"./assets/vendor-BjRz3xa9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h=15;async function m(s,a=1){return await v.get("https://pixabay.com/api/?",{params:{key:"49618658-bd62d28bb73c3efea12ea07c4",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:a}})}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),b=document.querySelector("#load-btn");function L(s){const a=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:r,comments:w,downloads:S})=>`
        <li class='gallery-item'>
            <a class='gallery-link' href='${n}'>
                <img
                    src='${o}'
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
    `).join("");g.insertAdjacentHTML("beforeend",a),$.refresh()}const $=new M(".gallery a",{captionsData:"alt",captionDelay:250});function B(){g.innerHTML=""}function C(){y.style.display="block"}function p(){y.style.display="none"}function f(){b.classList.remove("hide-btn")}function u(){b.classList.add("hide-btn")}const q=document.querySelector(".form");q.addEventListener("submit",O);const P=document.querySelector("#load-btn");P.addEventListener("click",R);let l=1,c,d;p();async function O(s){if(s.preventDefault(),c=s.currentTarget.elements["search-text"].value.trim(),!c){i.warning({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ffa000",message:"Please enter a search query!",position:"topRight"});return}C(),B();try{const o=await m(c);o.data.total===0&&i.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),L(o.data.hits),d=Math.ceil(o.data.totalHits/h),l<d?f():u()}catch(o){i.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:o.message,position:"topRight"})}finally{p()}q.reset()}async function R(){l++,u(),C();try{const s=await m(c,l);L(s.data.hits),f();const a=document.querySelector(".gallery-item");if(a){const o=a.getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}l>=d?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):f()}catch(s){i.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:s.message,position:"topRight"})}finally{p()}}
//# sourceMappingURL=index.js.map
