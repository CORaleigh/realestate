System.register(["./p-7a7fd524.system.js","./p-a7662e60.system.js","./p-a4afac99.system.js"],(function(e){"use strict";var t,i,a,r,s,n;return{setters:[function(e){t=e.r;i=e.h;a=e.H;r=e.g},function(e){s=e.g},function(e){n=e.g}],execute:function(){var o=e("calcite_loader",function(){function e(e){t(this,e);this.isActive=false;this.inline=false;this.type="indeterminate";this.value=0;this.text="";this.loaderBarOffsets=[0,0,0];this.loaderBarRates=[1,2.25,3.5];this.isEdge=false;this.animationID=null;this.guid="calcite-loader-"+n()}e.prototype.componentWillLoad=function(){this.isEdge=/Edge/.test(navigator.userAgent);if(this.isEdge){this.updateOffset()}};e.prototype.componentDidUnload=function(){if(this.animationID){window.cancelAnimationFrame(this.animationID)}};e.prototype.render=function(){var e=s(this.el);var t=this.el.id||this.guid;var r={"aria-valuenow":this.value,"aria-valuemin":0,"aria-valuemax":100};var n=this.inline?16:56;var o=this.inline?"0 0 16 16":"0 0 56 56";var l=this.type==="determinate";var u={};if(this.isEdge){u["--calcite-loader-offset"]=this.loaderBarOffsets[0]+"%";u["--calcite-loader-offset2"]=this.loaderBarOffsets[1]+"%";u["--calcite-loader-offset3"]=this.loaderBarOffsets[2]+"%"}var d={"--calcite-loader-progress":-400-this.value*4+"%"};return i(a,Object.assign({id:t,dir:e,role:"progressbar"},this.type==="determinate"?r:{},{style:u}),i("svg",{viewBox:o,class:"loader__square"},i("rect",{width:n,height:n})),i("svg",{viewBox:o,class:"loader__square loader__square--2"},i("rect",{width:n,height:n})),i("svg",{viewBox:o,class:"loader__square loader__square--3",style:l?d:{}},i("rect",{width:n,height:n})),this.text?i("div",{class:"loader__text"},this.text):"",this.value?i("div",{class:"loader__percentage"},Math.floor(this.value)):"")};e.prototype.updateOffset=function(){var e=this;this.loaderBarOffsets=this.rotateLoaderBars(this.loaderBarOffsets);this.animationID=window.requestAnimationFrame((function(){return e.updateOffset()}))};e.prototype.rotateLoaderBars=function(e){var t=this;return e.map((function(e,i){if(e>-400){return e-t.loaderBarRates[i]}else{return 0}}))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-loader-spot:#007ac2;--calcite-loader-spot-light:#009af2;--calcite-loader-spot-dark:#00619b;--calcite-loader-neutral:#eaeaea}:host([theme=dark]){--calcite-loader-neutral:#151515}:host{position:relative;display:none;padding-bottom:4rem;padding-top:4rem;margin-left:auto;margin-right:auto;min-height:54px;stroke:var(--calcite-loader-light);stroke-width:6px;stroke-dashoffset:0;fill:none;animation:loader-color-shift 2s linear infinite alternate-reverse}:host([is-active]){display:block}.loader__text{margin-top:4rem;line-height:1.5}.loader__percentage,.loader__text{display:block;text-align:center;font-size:.875rem}.loader__percentage{left:50%;margin-top:27px;line-height:.25}.loader__percentage,.loader__square{width:54px;position:absolute;top:4rem;margin-left:-27px}.loader__square{height:54px;left:0;left:50%;stroke-dasharray:50% 350%;-webkit-animation:loader-clockwise 2s linear infinite;animation:loader-clockwise 2s linear infinite}.loader__square--2{stroke-dasharray:100% 225% 50% 25%;-webkit-animation:loader-clockwise 1s linear infinite;animation:loader-clockwise 1s linear infinite}.loader__square--3{stroke-dasharray:50% 50% 75% 225%;-webkit-animation:loader-clockwise 1.85s linear infinite;animation:loader-clockwise 1.85s linear infinite}\@supports (-ms-ime-align:auto){.loader__square{stroke-dashoffset:var(--calcite-loader-offset);-webkit-animation:none;animation:none}.loader__square--2{stroke-dashoffset:var(--calcite-loader-offset2)}.loader__square--3{stroke-dashoffset:var(--calcite-loader-offset3)}}:host([type=determinate]){stroke:var(--calcite-loader-neutral);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__square--3{stroke:var(--calcite-loader-spot);stroke-dasharray:400%;stroke-dashoffset:var(--calcite-loader-progress);-webkit-transition:all 50ms linear;transition:all 50ms linear;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation:none;animation:none}:host([inline]){stroke:currentColor;stroke-width:4px;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:16px;min-height:16px;width:16px;margin-right:8px;vertical-align:-2px}:host([inline][dir=rtl]){margin-left:8px;margin-right:0}:host([is-active][inline]){display:inline-block}:host([inline]) .loader__square{margin:0;position:absolute;top:0;left:0;width:16px;height:16px}\@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@-webkit-keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}\@keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}"},enumerable:true,configurable:true});return e}())}}}));