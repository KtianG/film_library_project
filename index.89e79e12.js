var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequirebd48;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},e.parcelRequirebd48=t),t("iqU5k"),t("31u3U");var o=t("feD1y"),a=t("a0gzN"),i=t("4TIlm");t("jHkM2");document.querySelector(".pagination-numbers"),document.querySelector(".pagination-container"),document.querySelector(".pagination-container__next-button"),document.querySelector(".pagination-container__prev-button");a=t("a0gzN");document.querySelector(".wrapper"),document.querySelector(".pagination-container"),new(0,i.FetchMoveApi);t("7mvg5"),t("jHkM2");i=t("4TIlm");t("iqU5k"),t("gmZvE");var c=t("27qvy");c=t("27qvy");const u=document.querySelector(".wrapper"),l=document.querySelector(".pagination-numbers");new(0,i.FetchMoveApi);document.querySelector(".search-bar").addEventListener("submit",(async e=>{e.preventDefault();const n=e.target.querySelector(".search-bar__input").value;l.dataset.query=n,l.removeEventListener("click",c.setPageHome),n&&(l.removeEventListener("click",c.setPageSearch),u.innerHTML="",(0,c.renderSearchMovies)(1,n),l.addEventListener("click",c.setPageSearch))}));var d=t("aO2mr");t("27qvy"),(0,d.renderHomeGallery)(1),(0,a.openMovieInfoModal)(),(0,o.modalFunctions)();
//# sourceMappingURL=index.89e79e12.js.map