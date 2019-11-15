var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{u(n.next(e))}catch(t){i(t)}}function s(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?r(e.value):a(e.value).then(o,s)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n};System.register(["./p-ab093cd7.system.js"],(function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.r;r=e.c;n=e.h}],execute:function(){var a=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}var s=o((function(e,t){(function(e,r){r(t)})(a,(function(e){var t="4.13";var r="next";function n(e){if(e.toLowerCase()===r){return r}var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function a(e){if(e===void 0){e=t}return"https://js.arcgis.com/"+e+"/"}function i(e){if(e===void 0){e=t}var i=a(e);var o=n(e);if(o!==r&&o.major===3){var s=o.minor<=10?"js/":"";return""+i+s+"esri/css/esri.css"}else{return i+"esri/themes/light/main.css"}}function o(e){var t=document.createElement("link");t.rel="stylesheet";t.href=e;return t}function s(e,t){if(t){var r=document.querySelector(t);r.parentNode.insertBefore(e,r)}else{document.head.appendChild(e)}}function u(e){return document.querySelector('link[href*="'+e+'"]')}function l(e){return!e||n(e)?i(e):e}function c(e,t){var r=l(e);var n=u(r);if(!n){n=o(r);s(n,t)}return n}var f=typeof window!=="undefined";var d={Promise:f?window["Promise"]:undefined};var h={};function v(e){var t=document.createElement("script");t.type="text/javascript";t.src=e;t.setAttribute("data-esri-loader","loading");return t}function p(e,t,r){var n;if(r){n=y(e,r)}var a=function(){t(e);e.removeEventListener("load",a,false);if(n){e.removeEventListener("error",n,false)}};e.addEventListener("load",a,false)}function y(e,t){var r=function(n){t(n.error||new Error("There was an error attempting to load "+e.src));e.removeEventListener("error",r,false)};e.addEventListener("error",r,false);return r}function m(e){if(e===void 0){e={}}h=e}function w(){return document.querySelector("script[data-esri-loader]")}function b(){var e=window["require"];return e&&e.on}function g(e){if(e===void 0){e={}}var t={};[h,e].forEach((function(e){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){t[r]=e[r]}}}));var r=t.version;var n=t.url||a(r);return new d.Promise((function(e,a){var i=w();if(i){var o=i.getAttribute("src");if(o!==n){a(new Error("The ArcGIS API for JavaScript is already loaded ("+o+")."))}else{if(b()){e(i)}else{p(i,e,a)}}}else{if(b()){a(new Error("The ArcGIS API for JavaScript is already loaded."))}else{var s=t.css;if(s){var u=s===true;c(u?r:s,t.insertCssBefore)}if(t.dojoConfig){window["dojoConfig"]=t.dojoConfig}i=v(n);p(i,(function(){i.setAttribute("data-esri-loader","loaded");e(i)}),a);document.body.appendChild(i)}}}))}function _(e){return new d.Promise((function(t,r){var n=window["require"].on("error",r);window["require"](e,(function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}n.remove();t(e)}))}))}function S(e,t){if(t===void 0){t={}}if(!b()){var r=w();var n=r&&r.getAttribute("src");if(!t.url&&n){t.url=n}return g(t).then((function(){return _(e)}))}else{return _(e)}}var E={getScript:w,isLoaded:b,loadModules:S,loadScript:g,loadCss:c,setDefaultOptions:m,utils:d};e.getScript=w;e.isLoaded=b;e.loadModules=S;e.loadScript=g;e.loadCss=c;e.setDefaultOptions=m;e.utils=d;e["default"]=E;Object.defineProperty(e,"__esModule",{value:true})}))}));i(s);var u=s.loadModules;var l=e("material_table",function(){function e(e){t(this,e);this.headers=[];this.features=[];this.layer=null;this.ascending=true;this.cnt=0;this.rowSelected=r(this,"rowSelected",7)}e.prototype.watchHandler=function(){this.cnt=0;this.features=[];var e=this.headers.filter((function(e){return e.sorting}));var t=null;if(e.length){t=e[0]}this.queryFeatures(t)};e.prototype.queryFeatures=function(e){var t=this;var r={where:this.where,outFields:"OBJECTID,"+this.fields,num:25};if(e){this.headers.forEach((function(t){t.sorting=t.name===e.name}));r["orderByFields"]=e.name;if(!e.ascending){r["orderByFields"]+=" DESC"}}r["start"]=this.cnt*25;this.layer.queryFeatures(r).then((function(e){t.features=__spreadArrays(t.features.concat(e.features))}))};e.prototype.initializeArcGIS=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;var n=this;return __generator(this,(function(a){switch(a.label){case 0:a.trys.push([0,2,,3]);return[4,u(["esri/layers/FeatureLayer"])];case 1:e=a.sent()[0];t=new e({portalItem:{id:this.itemId},layerId:this.layerId});t.load().then((function(){n.layer=t;n.queryFeatures(null)}));return[3,3];case 2:r=a.sent();console.log("EsriLoader: ",r);return[3,3];case 3:return[2]}}))}))};e.prototype.componentDidLoad=function(){var e=this;this.initializeArcGIS();var t=this.fields.split(",");t.forEach((function(t){e.headers.push({name:t,ascending:false,sorting:false})}))};e.prototype.tableScrolled=function(){var e=document.getElementById("tableDiv");if(e.scrollTop+e.clientHeight>=e.scrollHeight-10){this.cnt+=1;var t=this.headers.filter((function(e){return e.sorting}));var r=null;if(t.length){r=t[0]}this.queryFeatures(r)}};e.prototype.sortFeatures=function(e){var t=this;this.ascending=!this.ascending;this.features=__spreadArrays(this.features.sort((function(r,n){var a=r.attributes[e];var i=n.attributes[e];if(!a){a=""}if(!i){i=""}if(a<i){return t.ascending?-1:1}if(a>i){return t.ascending?1:-1}return 0})))};e.prototype.render=function(){var e=this;return n("div",{id:"tableDiv",class:"mdc-data-table",onScroll:function(){e.tableScrolled()}},n("table",{class:"mdc-data-table__table"},n("thead",null,n("tr",{class:"mdc-data-table__header-row"},this.headers.map((function(t){return n("th",{onClick:function(){t.ascending=!t.ascending;e.cnt=0;e.features=[];e.queryFeatures(t)},class:"mdc-data-table__header-cell",role:"columnheader",scope:"col"},t.name,t.sorting?n("i",{class:"material-icons"},t.ascending?"arrow_upward":"arrow_downward"):n("div",null))})))),n("tbody",{class:"mdc-data-table__content"},this.features.map((function(t){return n("tr",{class:"mdc-data-table__row",onClick:function(){return e.rowSelected.emit(t)}},e.headers.map((function(e){return n("td",{class:"mdc-data-table__cell"},t.attributes[e.name])})))})))))};Object.defineProperty(e,"watchers",{get:function(){return{where:["watchHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".mdc-data-table,body,html{height:100%}body,html{width:100%}.mdc-data-table__cell{max-width:200px;overflow-wrap:break-word;white-space:normal}th{background:#fff;position:-webkit-sticky;position:sticky;top:0;-webkit-box-shadow:0 2px 2px -1px rgba(0,0,0,.4);box-shadow:0 2px 2px -1px rgba(0,0,0,.4)}"},enumerable:true,configurable:true});return e}())}}}));