(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=[{svgroot:"./img/",topic:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svgroot:"./img/",topic:"Communication",text:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svgroot:"./img/",topic:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svgroot:"./img/",topic:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],c=document.querySelector(".benefits-list");function d(r){return r.map(({svgroot:i,topic:o,text:n})=>`<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${i}"></use>
          </svg>
          <div>
            <h5 class="benefits-topic">${o}</h5>
            <p class="benefits-text">${n}</p>
          </div>
        </li>`).join("")}c.insertAdjacentHTML("beforeend",d(a));function l(r){const i=r.target.closest(".benefits-list-item");if(i){const o=i.querySelector(".benefits-topic").textContent;alert(`You clicked on: ${o}`)}}c.addEventListener("click",l);
//# sourceMappingURL=commonHelpers.js.map
