import{r as t,c as e,h as r}from"./p-8d492ca5.js";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var i,n,a=(function(t){var e="4.13",r="next";function i(t){if(t.toLowerCase()===r)return r;var e=t&&t.match(/^(\d)\.(\d+)/);return e&&{major:parseInt(e[1],10),minor:parseInt(e[2],10)}}function n(t){return void 0===t&&(t=e),"https://js.arcgis.com/"+t+"/"}function a(t,a){var o=function(t){return!t||i(t)?function(t){void 0===t&&(t=e);var a=n(t),o=i(t);return o!==r&&3===o.major?a+(o.minor<=10?"js/":"")+"esri/css/esri.css":a+"esri/themes/light/main.css"}(t):t}(t),s=function(t){return document.querySelector('link[href*="'+t+'"]')}(o);return s||function(t,e){if(e){var r=document.querySelector(e);r.parentNode.insertBefore(t,r)}else document.head.appendChild(t)}(s=function(t){var e=document.createElement("link");return e.rel="stylesheet",e.href=t,e}(o),a),s}var o={Promise:"undefined"!=typeof window?window.Promise:void 0},s={};function l(t,e,r){var i;r&&(i=function(t,e){var r=function(i){e(i.error||new Error("There was an error attempting to load "+t.src)),t.removeEventListener("error",r,!1)};return t.addEventListener("error",r,!1),r}(t,r));var n=function(){e(t),t.removeEventListener("load",n,!1),i&&t.removeEventListener("error",i,!1)};t.addEventListener("load",n,!1)}function d(t){void 0===t&&(t={}),s=t}function c(){return document.querySelector("script[data-esri-loader]")}function u(){var t=window.require;return t&&t.on}function h(t){void 0===t&&(t={});var e={};[s,t].forEach((function(t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}));var r=e.version,i=e.url||n(r);return new o.Promise((function(t,n){var o=c();if(o){var s=o.getAttribute("src");s!==i?n(new Error("The ArcGIS API for JavaScript is already loaded ("+s+").")):u()?t(o):l(o,t,n)}else if(u())n(new Error("The ArcGIS API for JavaScript is already loaded."));else{var d=e.css;d&&a(!0===d?r:d,e.insertCssBefore),e.dojoConfig&&(window.dojoConfig=e.dojoConfig),l(o=function(t){var e=document.createElement("script");return e.type="text/javascript",e.src=t,e.setAttribute("data-esri-loader","loading"),e}(i),(function(){o.setAttribute("data-esri-loader","loaded"),t(o)}),n),document.body.appendChild(o)}}))}function f(t){return new o.Promise((function(e,r){var i=window.require.on("error",r);window.require(t,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];i.remove(),e(t)}))}))}function v(t,e){if(void 0===e&&(e={}),u())return f(t);var r=c(),i=r&&r.getAttribute("src");return!e.url&&i&&(e.url=i),h(e).then((function(){return f(t)}))}var w={getScript:c,isLoaded:u,loadModules:v,loadScript:h,loadCss:a,setDefaultOptions:d,utils:o};t.getScript=c,t.isLoaded=u,t.loadModules=v,t.loadScript=h,t.loadCss=a,t.setDefaultOptions=d,t.utils=o,t.default=w,Object.defineProperty(t,"__esModule",{value:!0})}((i={exports:{}}).exports),i.exports);(n=a)&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default");var o=a.loadModules;const s=class{constructor(r){t(this,r),this.headers=[],this.features=[],this.layer=null,this.ascending=!0,this.cnt=0,this.rowSelected=e(this,"rowSelected",7)}queryFeatures(t){let e={where:this.where,outFields:"OBJECTID,"+this.fields,num:25};t&&(this.headers.forEach(e=>{e.sorting=e.name===t.name}),e.orderByFields=t.name,t.ascending||(e.orderByFields+=" DESC")),e.start=25*this.cnt,this.layer.queryFeatures(e).then(t=>{this.features=[...this.features.concat(t.features)]})}async initializeArcGIS(){try{const[t]=await o(["esri/layers/FeatureLayer"]);let e=new t({portalItem:{id:this.itemId},layerId:this.layerId});e.load().then(()=>{this.layer=e,this.queryFeatures(null)})}catch(t){console.log("EsriLoader: ",t)}}componentDidLoad(){this.initializeArcGIS(),this.fields.split(",").forEach(t=>{this.headers.push({name:t,ascending:!1,sorting:!1})})}tableScrolled(){let t=document.getElementById("tableDiv");if(t.scrollTop+t.clientHeight>=t.scrollHeight-10){this.cnt+=1;let t=this.headers.filter(t=>t.sorting),e=null;t.length&&(e=t[0]),this.queryFeatures(e)}}sortFeatures(t){this.ascending=!this.ascending,this.features=[...this.features.sort((e,r)=>{var i=e.attributes[t],n=r.attributes[t];return i||(i=""),n||(n=""),i<n?this.ascending?-1:1:i>n?this.ascending?1:-1:0})]}render(){return r("div",{id:"tableDiv",class:"mdc-data-table",onScroll:()=>{this.tableScrolled()}},r("table",{class:"mdc-data-table__table"},r("thead",null,r("tr",{class:"mdc-data-table__header-row"},this.headers.map(t=>r("th",{onClick:()=>{t.ascending=!t.ascending,this.cnt=0,this.features=[],this.queryFeatures(t)},class:"mdc-data-table__header-cell",role:"columnheader",scope:"col"},t.name,t.sorting?r("i",{class:"material-icons"},t.ascending?"arrow_upward":"arrow_downward"):r("div",null))))),r("tbody",{class:"mdc-data-table__content"},this.features.map(t=>r("tr",{class:"mdc-data-table__row",onClick:()=>this.rowSelected.emit(t)},this.headers.map(e=>r("td",{class:"mdc-data-table__cell"},t.attributes[e.name])))))))}static get style(){return".mdc-data-table,body,html{height:100%}body,html{width:100%}.mdc-data-table__cell{max-width:200px;overflow-wrap:break-word;white-space:normal}th{background:#fff;position:-webkit-sticky;position:sticky;top:0;-webkit-box-shadow:0 2px 2px -1px rgba(0,0,0,.4);box-shadow:0 2px 2px -1px rgba(0,0,0,.4)}"}};export{s as material_table};