parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e={searchBtn:document.querySelector(".search-form"),galleryMovies:document.querySelector(".gallery-movies")};var r=e;exports.default=r;
},{}],"hC31":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="3b4cb0b5c3c509ec710c203c7a14be66",t="https://api.themoviedb.org/3";class s{consructor(){this.searchQuery="",this.page=1}fetchMovies(s){const r=`${t}/${s}?api_key=${e}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return fetch(r).then(e=>e.json())}fetchMovieBySearch(){return this.fetchMovies("search/movie")}fetchPopularMovie(){this.fetchMovies("trending/all/day")}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}exports.default=s;
},{}],"RRB9":[function(require,module,exports) {
module.exports="/team-project-goit/img_not_found.7ad9f745.jpg";
},{}],"QfT3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../js/images/img_not_found.jpg"));function t(e){return e&&e.__esModule?e:{default:e}}function n(t){return t.map(({title:t,release_date:n,genre_ids:i,poster_path:s})=>{const a=new Date(n).getFullYear();let r=e.default;return s&&(r=`https://image.tmdb.org/t/p/w500${s}`),`<div class="photo-card">\n        <div class="thumb">\n            <img class="image" src="https://image.tmdb.org/t/p/w500${r}"\n              alt="${t}"\n              loading="lazy"\n              width="309"\n              height="449" />\n        </div>\n        <div class="info">\n          <h5 class="info-item">${t}\n          </h5>\n          <p class="info-item">${i}\n          </p>\n          <p class="info-item">${a}\n          </p>\n        </div>\n    </div>`}).join("")}var i=n;exports.default=i;
},{"../js/images/img_not_found.jpg":"RRB9"}],"HUSp":[function(require,module,exports) {
"use strict";var e=u(require("./refs")),r=u(require("./api-service")),t=u(require("./moviesMarkup"));function u(e){return e&&e.__esModule?e:{default:e}}const n=new r.default;function s(e){e.preventDefault(),n.query=e.currentTarget.elements.searchQuery.value,n.fetchMovieBySearch().then(e=>{console.log(e),a(e)})}function a(r){const u=(0,t.default)(r.results);console.log(u),e.default.galleryMovies.innerHTML=u}e.default.searchBtn.addEventListener("submit",s);
},{"./refs":"VyiV","./api-service":"hC31","./moviesMarkup":"QfT3"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/searchMovie");
},{"./sass/main.scss":"clu1","./js/searchMovie":"HUSp"}]},{},["Focm"], null)
//# sourceMappingURL=/team-project-goit/src.2ab22684.js.map