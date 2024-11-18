(()=>{"use strict";var t={575:(t,e,o)=>{o.r(e)},586:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),o(575);const n=i(o(857)),a=i(o(428));(0,n.default)(),(0,a.default)("AIzaSyBbTAT12E1n5MMyhWBAQMZNl1EZFgkcKWI")},572:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.descriptionValidate=e.ratingValidate=e.priceValidate=e.imgValidate=e.authorsValidate=void 0;e.authorsValidate=t=>{let e="";if(void 0===t)return"";if(1===t.length)return e=`${t[0]}`,e;for(let o=0;o<t.length;o++)e+=`${t[o]}, `;return e.trim().slice(0,-1)};e.imgValidate=t=>t&&t.thumbnail?t.thumbnail:"./src/assets/img/jpg/placeholder.jpg";e.priceValidate=t=>void 0===t||void 0===t.amount?"FREE":`₽${t.amount}`;e.ratingValidate=(t,e)=>{if(void 0===e||void 0===t)return'<p class="book-rating-counting_count">No reviews</p>';{let o="";for(let e=0;e<t;e++)o+='<img src="./src/assets/img/svg/Star.svg" alt="" class="book-rating-stars_star">';return`<div class="book-rating-stars">${o}</div> \n    <p class="book-rating-counting_count">${e} review</p>`}};e.descriptionValidate=t=>void 0===t?"Book without description":`${t}`},428:function(t,e,o){var i=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))((function(n,a){function r(t){try{s(i.next(t))}catch(t){a(t)}}function l(t){try{s(i.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,l)}s((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const n=o(572);let a=document.querySelectorAll(".book-info_button");const r=document.querySelector(".shopCount"),l=document.querySelector(".book-catalog_loadMore"),s=document.querySelector(".book-catalog-list"),c=document.querySelectorAll(".category-list_li");let d="Architecture",u=0,v=0;const f=(t,e,o)=>i(void 0,void 0,void 0,(function*(){try{let i=yield fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${t}"&key= ${e} &printType=books&startIndex=${o}&maxResults=6&langRestrict=en`);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);let l=yield i.json();l&&l.items.forEach((t=>{const e=document.createElement("div");e.className="book",e.innerHTML=`\n       <img src="${(0,n.imgValidate)(t.volumeInfo.imageLinks)}" alt="" class="book-img">\n       <div class="book-info">\n           <p class="book-info_author">${(0,n.authorsValidate)(t.volumeInfo.authors)}</p>\n           <h1 class="book-info_h1">${t.volumeInfo.title}</h1>\n           <div class="book-rating">\n               ${(0,n.ratingValidate)(t.volumeInfo.averageRating,t.volumeInfo.ratingsCount)}\n           </div>\n           <p class="book-info_description">${(0,n.descriptionValidate)(t.volumeInfo.description)}</p>\n           <div class="book-info_price">${(0,n.priceValidate)(t.saleInfo.retailPrice)}</div>\n           <button class="book-info_button">BUY NOW</button>\n       </div>\n   `,s.appendChild(e)})),a=document.querySelectorAll(".book-info_button"),a.forEach((t=>{t.addEventListener("click",(()=>{t.classList.contains("active-book_btn")?(v-=1,r.textContent=String(v),t.classList.remove("active-book_btn"),t.textContent="BUY NOW",0===v&&(r.style.visibility="hidden")):(t.classList.add("active-book_btn"),t.textContent="IN THE CART",v+=1,r.style.visibility="visible",r.textContent=String(v))}))}))}catch(t){console.error("Error fetching books:",t)}}));f(d,"AIzaSyBbTAT12E1n5MMyhWBAQMZNl1EZFgkcKWI",u);l.addEventListener("click",(()=>{u+=6,console.log(u),f(d,"AIzaSyBbTAT12E1n5MMyhWBAQMZNl1EZFgkcKWI",u)})),e.default=t=>{c.forEach((e=>{e.addEventListener("click",(()=>i(void 0,void 0,void 0,(function*(){c.forEach((t=>{t.classList.remove("active-category")})),d=e.textContent||d,e.classList.add("active-category"),u=0,s.innerHTML="",f(d,t,u)}))))}))}},857:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});const o=document.querySelectorAll(".slide-dots_dot"),i=document.querySelectorAll(".slide-wrapper");let n=0;const a=(t,e,o)=>{t.forEach((t=>{t.classList.remove(e)})),t[o].classList.add(e)},r=t=>{a(i,"active-slide",t)},l=setInterval((()=>{n+=1,n>2&&(n=0),a(o,"active-dot",n),r(n)}),5e3);e.default=()=>{o.forEach(((t,e)=>{t.addEventListener("click",(()=>{clearInterval(l),n=e,a(o,"active-dot",e),r(e)}))}))}}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,o),a.exports}o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};o(586)})();