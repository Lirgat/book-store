(()=>{"use strict";var e={575:(e,t,o)=>{o.r(t)},586:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),o(575);const a=i(o(857)),n=i(o(428));(0,a.default)(),(0,n.default)("AIzaSyBbTAT12E1n5MMyhWBAQMZNl1EZFgkcKWI")},572:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.descriptionValidate=t.ratingValidate=t.priceValidate=t.imgValidate=t.authorsValidate=void 0;t.authorsValidate=e=>{let t="";if(1===e.length)return t=`${e[0]}`,t;for(let o=0;o<e.length;o++)t+=`${e[o]}, `;return t.trim().slice(0,-1)};t.imgValidate=e=>e&&e.thumbnail?e.thumbnail:"./assets/img/jpg/placeholder.jpg";t.priceValidate=e=>void 0===e||void 0===e.amount?"FREE":`₽${e.amount}`;t.ratingValidate=(e,t)=>{if(void 0===t||void 0===e)return'<p class="book-rating-counting_count">No reviews</p>';{let o="";for(let t=0;t<=e;t++)o+='<img src="" alt="" class="book-rating-stars_star">';return`<div class="book-rating-stars">${o}</div> \n    <p class="book-rating-counting_count">${t} review</p>`}};t.descriptionValidate=e=>void 0===e?"Book without description":`${e}`},428:function(e,t,o){var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(a,n){function r(e){try{s(i.next(e))}catch(e){n(e)}}function l(e){try{s(i.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const a=o(572),n=(document.querySelector(".book-catalog_loadMore"),document.querySelector(".book-catalog-list")),r=document.querySelectorAll(".category-list_li");let l="Architecture";const s=(e,t)=>i(void 0,void 0,void 0,(function*(){try{let o=yield fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${e}"&key= ${t} &printType=books&startIndex=0&maxResults=6&langRestrict=en`);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);let i=yield o.json();i&&i.items.forEach((e=>{const t=document.createElement("div");t.className="book",t.innerHTML=`\n       <img src="${(0,a.imgValidate)(e.volumeInfo.imageLinks)}" alt="" class="book-img">\n       <div class="book-info">\n           <p class="book-info_author">${(0,a.authorsValidate)(e.volumeInfo.authors)}</p>\n           <h1 class="book-info_h1">${e.volumeInfo.title}</h1>\n           <div class="book-rating">\n               ${(0,a.ratingValidate)(e.volumeInfo.averageRating,e.volumeInfo.ratingsCount)}\n           </div>\n           <p class="book-info_description">${(0,a.descriptionValidate)(e.volumeInfo.description)}</p>\n           <div class="book-info_price">${(0,a.priceValidate)(e.saleInfo.retailPrice)}</div>\n           <button class="book-info_button">IN THE CART</button>\n       </div>\n   `,n.appendChild(t)}))}catch(e){console.error("Error fetching books:",e)}}));s(l,"AIzaSyBbTAT12E1n5MMyhWBAQMZNl1EZFgkcKWI");t.default=e=>{r.forEach((t=>{t.addEventListener("click",(()=>i(void 0,void 0,void 0,(function*(){r.forEach((e=>{e.classList.remove("active-category")})),l=t.textContent||l,t.classList.add("active-category"),n.innerHTML="",s(l,e)}))))}))}},857:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=document.querySelectorAll(".slide-dots_dot"),i=document.querySelectorAll(".slide-wrapper");let a=0;const n=(e,t,o)=>{e.forEach((e=>{e.classList.remove(t)})),e[o].classList.add(t)},r=e=>{n(i,"active-slide",e)},l=setInterval((()=>{a+=1,a>2&&(a=0),n(o,"active-dot",a),r(a)}),5e3);t.default=()=>{o.forEach(((e,t)=>{e.addEventListener("click",(()=>{clearInterval(l),a=t,n(o,"active-dot",t),r(t)}))}))}}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,o),n.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o(586)})();