var __awaiter=this&&this.__awaiter||function(t,e,i,r){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function l(t){try{o(r.next(t))}catch(e){s(e)}}function a(t){try{o(r["throw"](t))}catch(e){s(e)}}function o(t){t.done?i(t.value):n(t.value).then(l,a)}o((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,n,s,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(t){return function(e){return o([t,e])}}function o(l){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,n&&(s=l[0]&2?n["return"]:l[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,l[1])).done)return s;if(n=0,s)l=[l[0]&2,s.value];switch(l[0]){case 0:case 1:s=l;break;case 4:i.label++;return{value:l[1],done:false};case 5:i.label++;n=l[1];l=[0];continue;case 7:l=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){i.label=l[1];break}if(l[0]===6&&i.label<s[1]){i.label=s[1];s=l;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(l);break}if(s[2])i.ops.pop();i.trys.pop();continue}l=e.call(t,i)}catch(a){l=[6,a];n=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-7a7fd524.system.js","./p-a7662e60.system.js","@esri/calcite-ui-icons","@stencil/state-tunnel","./p-1f7eea80.system.js"],(function(t){"use strict";var e,i,r,n,s,l,a,o,u,c,h;return{setters:[function(t){e=t.r;i=t.c;r=t.h;n=t.H;s=t.g},function(t){l=t.g},function(t){a=t.checkCircle24F;o=t.exclamationMarkTriangle24F;u=t.lightbulb24F;c=t.x32},function(){},function(t){h=t.A}],execute:function(){var f=t("calcite_alert",function(){function t(t){e(this,t);this.active=false;this.dismiss=false;this.duration=this.dismiss?"medium":null;this.color="blue";this.theme="light";this.icon=false;this.alertId=this.el.id;this.currentAlert="";this.queueLength=0;this.durationDefaults={slow:14e3,medium:1e4,fast:6e3};this.iconDefaults={green:a,yellow:o,red:o,blue:u};this.calciteAlertClose=i(this,"calciteAlertClose",7);this.calciteAlertOpen=i(this,"calciteAlertOpen",7)}t.prototype.watchCurrentAlert=function(){var t=this;if(!this.active&&this.currentAlert===this.alertId){if(this.dismiss)setTimeout((function(){return t.closeCalciteAlert()}),this.durationDefaults[this.duration]);setTimeout((function(){return t.active=true}),300)}else{this.active=false}};t.prototype.closeCalciteAlert=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.calciteAlertClose.emit({requestedAlert:this.alertId});return[2]}))}))};t.prototype.openCalciteAlert=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.calciteAlertOpen.emit({requestedAlert:this.alertId});return[2]}))}))};t.prototype.connectedCallback=function(){var t=["blue","red","green","yellow"];if(!t.includes(this.color))this.color="blue";var e=["slow","medium","fast"];if(this.duration!==null&&!e.includes(this.duration))this.duration="medium";var i=["dark","light"];if(!i.includes(this.theme))this.theme="light"};t.prototype.setIcon=function(){var t=this.iconDefaults[this.color];return r("div",{class:"alert-icon"},r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24"},r("path",{d:t})))};t.prototype.render=function(){var t=this;var e=l(this.el);var i=r("button",{class:"alert-close","aria-label":"close",onClick:function(){return t.closeCalciteAlert()}},r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"32",width:"32",viewBox:"0 0 32 32"},r("path",{d:c})));var s=!this.dismiss?i:"";var a=this.icon?this.setIcon():"";var o=r("div",{class:(this.queueLength>0?"active ":"")+"alert-count"},"+",this.queueLength>0?this.queueLength:1);var u=this.active&&this.dismiss?r("div",{class:"alert-dismiss"}):"";return r(n,{active:this.active,dir:e},a,r("div",{class:"alert-content"},r("slot",{name:"alert-title"}),r("slot",{name:"alert-message"}),r("slot",{name:"alert-link"})),o,s,u)};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{currentAlert:["watchCurrentAlert"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-alert-background:#fff;--calcite-alert-title-text:#404040;--calcite-alert-message-text:#555;--calcite-alert-icon-fill:#151515;--calcite-alert-close-background-hover:#f3f3f3;--calcite-alert-close-background-pressed:#eaeaea;--calcite-alert-count-text:#404040;--calcite-alert-count-border:#f3f3f3;--calcite-alert-dismiss-background:hsla(0,0%,100%,0.8);--calcite-alert-border-blue:#007ac2;--calcite-alert-border-green:#35ac46;--calcite-alert-border-red:#d83020;--calcite-alert-border-yellow:#edd317}:host([theme=dark]){--calcite-alert-background:#2b2b2b;--calcite-alert-title-text:#f8f8f8;--calcite-alert-message-text:#f3f3f3;--calcite-alert-icon-fill:#d4d4d4;--calcite-alert-close-background-hover:#202020;--calcite-alert-close-background-pressed:#151515;--calcite-alert-count-text:#d4d4d4;--calcite-alert-count-border:#202020;--calcite-alert-dismiss-background:rgba(43,43,43,0.8);--calcite-alert-border-blue:#00a0ff;--calcite-alert-border-green:#36da43;--calcite-alert-border-red:#fe583e;--calcite-alert-border-yellow:#ffc900}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;pointer-events:none;z-index:102;margin:0 auto;width:50em;max-width:90%;max-height:0;background-color:var(--calcite-alert-background);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.15);box-shadow:0 0 16px 0 rgba(0,0,0,.15);border-radius:2px;opacity:0;-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;border-top:0 solid transparent}\@media only screen and (max-width:860px){:host{width:100%;max-width:100%;border-radius:2px 2px 0 0;-webkit-box-shadow:0 -8px 16px 0 rgba(0,0,0,.15);box-shadow:0 -8px 16px 0 rgba(0,0,0,.15)}}:host:host(.hydrated){visibility:hidden!important}:host([active]){opacity:1;max-height:100%;-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);pointer-events:auto;border-top-width:3px}:host([active]):host(.hydrated){visibility:visible!important}\@media only screen and (max-width:860px){:host([active]){-webkit-transform:translateZ(0);transform:translateZ(0)}}div::slotted([slot=alert-title]),slot[name=alert-title]::slotted(div){font-size:1rem;line-height:1.5;color:var(--calcite-alert-title-text);font-weight:500}::slotted(calcite-button){font-size:.9375rem;line-height:1.5}div::slotted([slot=alert-message]),slot[name=alert-message]::slotted(div){display:inline;margin-right:.75rem;font-size:.9375rem;line-height:1.5;color:var(--calcite-alert-message-text)}:host([dir=rtl]) div::slotted([slot=alert-message]),:host([dir=rtl]) slot[name=alert-message]::slotted(div){margin-right:unset;margin-left:.75rem}.alert-content{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:.75rem .75rem .75rem 0}.alert-content svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type{padding-left:1.5rem}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem .75rem 1.5rem 0}}:host([dir=rtl]) .alert-content:first-of-type{padding-right:1.5rem;padding-left:none}\@media only screen and (max-width:860px){:host([dir=rtl]) .alert-content{padding:1.5rem 0 1.5rem .75rem}}.alert-icon{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-icon svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-icon{padding:1.5rem}}.alert-close{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;border-radius:0 0 2px 0}.alert-close svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-close{padding:1.5rem}}.alert-close svg{fill:var(--calcite-alert-icon-fill)}.alert-close:focus,.alert-close:hover{background-color:var(--calcite-alert-close-background-hover)}.alert-close:active{background-color:var(--calcite-alert-close-background-pressed)}:host([dir=rtl]) .alert-close{border-radius:0 0 0 2px}\@media only screen and (max-width:860px){:host([dir=rtl]) .alert-close{border-radius:0}}.alert-count{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-alert-count-text);opacity:0;border-left:0 solid transparent;border-right:0 solid transparent;cursor:default;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.alert-count.active{visibility:visible;opacity:1;padding:0 .375rem;width:3rem;border-left:1px solid var(--calcite-alert-count-border);border-right:1px solid var(--calcite-alert-count-border)}.alert-count.active:last-child{border-right:0 solid transparent}\@media only screen and (max-width:860px){.alert-count{border-radius:0}}:host([dir=rtl]).active:last-child{border-left:1px solid var(--calcite-alert-count-border);border-right:0 solid transparent}.alert-dismiss{left:0;top:0;width:100%;z-index:103}.alert-dismiss,.alert-dismiss:after{display:block;position:absolute;right:0;height:3px}.alert-dismiss:after{top:-3px;border-radius:2px 2px 0 0;content:\"\";background-color:var(--calcite-alert-dismiss-background);z-index:104}:host([color=blue]){border-top-color:var(--calcite-alert-border-blue)}:host([color=blue]) .alert-icon svg{fill:var(--calcite-alert-border-blue)}:host([color=red]){border-top-color:var(--calcite-alert-border-red)}:host([color=red]) .alert-icon svg{fill:var(--calcite-alert-border-red)}:host([color=yellow]){border-top-color:var(--calcite-alert-border-yellow)}:host([color=yellow]) .alert-icon svg{fill:var(--calcite-alert-border-yellow)}:host([color=green]){border-top-color:var(--calcite-alert-border-green)}:host([color=green]) .alert-icon svg{fill:var(--calcite-alert-border-green)}:host([duration=fast]) .alert-dismiss:after{-webkit-animation:dismissProgress 6s ease-out;animation:dismissProgress 6s ease-out}:host([duration=medium]) .alert-dismiss:after{-webkit-animation:dismissProgress 10s ease-out;animation:dismissProgress 10s ease-out}:host([duration=slow]) .alert-dismiss:after{-webkit-animation:dismissProgress 14s ease-out;animation:dismissProgress 14s ease-out}\@-webkit-keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}\@keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}"},enumerable:true,configurable:true});return t}());h.injectProps(f,["currentAlert","queueLength"])}}}));