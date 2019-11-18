import{r as t,c as e,h as r}from"./p-444b1dc4.js";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var i,a,n=(function(t){var e="4.13",r="next";function i(t){if(t.toLowerCase()===r)return r;var e=t&&t.match(/^(\d)\.(\d+)/);return e&&{major:parseInt(e[1],10),minor:parseInt(e[2],10)}}function a(t){return void 0===t&&(t=e),"https://js.arcgis.com/"+t+"/"}function n(t,n){var s=function(t){return!t||i(t)?function(t){void 0===t&&(t=e);var n=a(t),s=i(t);return s!==r&&3===s.major?n+(s.minor<=10?"js/":"")+"esri/css/esri.css":n+"esri/themes/light/main.css"}(t):t}(t),o=function(t){return document.querySelector('link[href*="'+t+'"]')}(s);return o||function(t,e){if(e){var r=document.querySelector(e);r.parentNode.insertBefore(t,r)}else document.head.appendChild(t)}(o=function(t){var e=document.createElement("link");return e.rel="stylesheet",e.href=t,e}(s),n),o}var s={Promise:"undefined"!=typeof window?window.Promise:void 0},o={};function l(t,e,r){var i;r&&(i=function(t,e){var r=function(i){e(i.error||new Error("There was an error attempting to load "+t.src)),t.removeEventListener("error",r,!1)};return t.addEventListener("error",r,!1),r}(t,r));var a=function(){e(t),t.removeEventListener("load",a,!1),i&&t.removeEventListener("error",i,!1)};t.addEventListener("load",a,!1)}function d(t){void 0===t&&(t={}),o=t}function c(){return document.querySelector("script[data-esri-loader]")}function u(){var t=window.require;return t&&t.on}function h(t){void 0===t&&(t={});var e={};[o,t].forEach((function(t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}));var r=e.version,i=e.url||a(r);return new s.Promise((function(t,a){var s=c();if(s){var o=s.getAttribute("src");o!==i?a(new Error("The ArcGIS API for JavaScript is already loaded ("+o+").")):u()?t(s):l(s,t,a)}else if(u())a(new Error("The ArcGIS API for JavaScript is already loaded."));else{var d=e.css;d&&n(!0===d?r:d,e.insertCssBefore),e.dojoConfig&&(window.dojoConfig=e.dojoConfig),l(s=function(t){var e=document.createElement("script");return e.type="text/javascript",e.src=t,e.setAttribute("data-esri-loader","loading"),e}(i),(function(){s.setAttribute("data-esri-loader","loaded"),t(s)}),a),document.body.appendChild(s)}}))}function f(t){return new s.Promise((function(e,r){var i=window.require.on("error",r);window.require(t,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];i.remove(),e(t)}))}))}function v(t,e){if(void 0===e&&(e={}),u())return f(t);var r=c(),i=r&&r.getAttribute("src");return!e.url&&i&&(e.url=i),h(e).then((function(){return f(t)}))}var w={getScript:c,isLoaded:u,loadModules:v,loadScript:h,loadCss:n,setDefaultOptions:d,utils:s};t.getScript=c,t.isLoaded=u,t.loadModules=v,t.loadScript=h,t.loadCss=n,t.setDefaultOptions=d,t.utils=s,t.default=w,Object.defineProperty(t,"__esModule",{value:!0})}((i={exports:{}}).exports),i.exports);(a=n)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default");var s=n.loadModules;const o=class{constructor(r){t(this,r),this.headers=[],this.features=[],this.layer=null,this.ascending=!0,this.cnt=0,this.rowSelected=e(this,"rowSelected",7)}watchHandler(){this.cnt=0,this.features=[];let t=this.headers.filter(t=>t.sorting),e=null;t.length&&(e=t[0]),this.queryFeatures(e)}queryFeatures(t){let e={where:this.where,outFields:"OBJECTID,"+this.fields,num:25};t&&(this.headers.forEach(e=>{e.sorting=e.name===t.name}),e.orderByFields=t.name,t.ascending||(e.orderByFields+=" DESC")),e.start=25*this.cnt,this.layer.queryFeatures(e).then(t=>{this.features=[...this.features.concat(t.features)]})}async initializeArcGIS(){try{const[t]=await s(["esri/layers/FeatureLayer"]);let e=new t({portalItem:{id:this.itemId},layerId:this.layerId});e.load().then(()=>{this.layer=e,this.fields.split(",").forEach(t=>{this.layer.fields.forEach(e=>{t===e.name&&(e.ascending=!1,e.sorting=!1,this.headers.push(e))})}),this.queryFeatures(null)})}catch(t){console.log("EsriLoader: ",t)}}componentDidLoad(){this.initializeArcGIS()}tableScrolled(){let t=document.getElementById("tableDiv");if(t.scrollTop+t.clientHeight>=t.scrollHeight-10){this.cnt+=1;let t=this.headers.filter(t=>t.sorting),e=null;t.length&&(e=t[0]),this.queryFeatures(e)}}sortFeatures(t){this.ascending=!this.ascending,this.features=[...this.features.sort((e,r)=>{var i=e.attributes[t],a=r.attributes[t];return i||(i=""),a||(a=""),i<a?this.ascending?-1:1:i>a?this.ascending?1:-1:0})]}render(){return r("div",{id:"tableDiv",class:"mdc-data-table",onScroll:()=>{this.tableScrolled()}},r("table",{class:"mdc-data-table__table"},r("thead",null,r("tr",{class:"mdc-data-table__header-row"},this.headers.map(t=>r("th",{onClick:()=>{t.ascending=!t.ascending,this.cnt=0,this.features=[],this.queryFeatures(t)},class:"mdc-data-table__header-cell",role:"columnheader",scope:"col"},t.alias,t.sorting?r("i",{class:"material-icons"},t.ascending?"arrow_upward":"arrow_downward"):r("div",null))))),r("tbody",{class:"mdc-data-table__content"},this.features.map(t=>r("tr",{class:"mdc-data-table__row",onClick:()=>this.rowSelected.emit(t)},this.headers.map(e=>r("td",{class:"mdc-data-table__cell"},"date"!=e.type?t.attributes[e.name]:new Date(t.attributes[e.name]))))))))}static get watchers(){return{where:["watchHandler"]}}static get style(){return".mdc-data-table,body,html{height:100%}body,html{width:100%}.mdc-data-table__cell{max-width:200px;overflow-wrap:break-word;white-space:normal}th{background:#fff;position:-webkit-sticky;position:sticky;top:0;-webkit-box-shadow:0 2px 2px -1px rgba(0,0,0,.4);box-shadow:0 2px 2px -1px rgba(0,0,0,.4)}"}};export{o as material_table};