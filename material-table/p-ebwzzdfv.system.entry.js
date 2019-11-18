var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{l(i.next(t))}catch(e){a(e)}}function c(t){try{l(i["throw"](t))}catch(e){a(e)}}function l(t){t.done?n(t.value):r(t.value).then(o,c)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(c){o=[6,c];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-7a7fd524.system.js","./p-a7662e60.system.js","./p-a4afac99.system.js"],(function(t){"use strict";var e,n,i,r,a,o,c;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.H;a=t.g},function(t){o=t.n},function(t){c=t.g}],execute:function(){var l=t("calcite_tab",function(){function t(t){e(this,t);this.isActive=false;this.guid="calcite-tab-title-"+c();this.calciteTabRegister=n(this,"calciteTabRegister",7);this.calciteTabUnregister=n(this,"calciteTabUnregister",7)}t.prototype.render=function(){var t=this.el.id||this.guid;return i(r,{id:t,"aria-labeledby":this.labeledBy,"aria-expanded":this.isActive?"true":"false",role:"tabpanel"},i("section",null,i("slot",null)))};t.prototype.componentDidLoad=function(){this.calciteTabRegister.emit()};t.prototype.componentDidUnload=function(){this.calciteTabUnregister.emit()};t.prototype.tabChangeHandler=function(t){var e=this;if(t.target.closest("calcite-tabs")!==this.el.closest("calcite-tabs")){return}if(this.tab){this.isActive=this.tab===t.detail.tab}else{this.getTabIndex().then((function(n){e.isActive=n===t.detail.tab}))}};t.prototype.getTabIndex=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(Array.prototype.indexOf.call(o(this.el.parentElement.children).filter((function(t){return t.matches("calcite-tab")})),this.el))]}))}))};t.prototype.updateAriaInfo=function(t,e){if(t===void 0){t=[]}if(e===void 0){e=[]}this.labeledBy=e[t.indexOf(this.el.id)]||null;return Promise.resolve()};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host([is-active]) section{display:block}section{display:none}"},enumerable:true,configurable:true});return t}())}}}));