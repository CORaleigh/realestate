System.register(["./p-7a7fd524.system.js","./p-a7662e60.system.js"],(function(t){"use strict";var e,a,i,n,r,s;return{setters:[function(t){e=t.r;a=t.c;i=t.h;n=t.H;r=t.g},function(t){s=t.b}],execute:function(){var l=t("calcite_tab_nav",function(){function t(t){e(this,t);this.calciteTabChange=a(this,"calciteTabChange",7)}t.prototype.selectedTabChanged=function(){if(localStorage&&this.storageId&&this.selectedTab!==undefined&&this.selectedTab!==null){localStorage.setItem("calcite-tab-nav-"+this.storageId,JSON.stringify(this.selectedTab))}this.calciteTabChange.emit({tab:this.selectedTab})};t.prototype.componentWillLoad=function(){var t="calcite-tab-nav-"+this.storageId;if(localStorage&&this.storageId&&localStorage.getItem(t)){this.selectedTab=JSON.parse(localStorage.getItem(t));this.calciteTabChange.emit({tab:this.selectedTab})}};t.prototype.render=function(){var t=this;return i(n,{role:"tablist"},i("nav",{class:"tab-nav",ref:function(e){return t.tabNavEl=e}},i("slot",null)))};t.prototype.componentDidRender=function(){var t=this;if(this.tabTitles.length&&this.tabTitles.every((function(t){return!t.isActive}))&&!this.selectedTab){this.tabTitles[0].getTabIdentifier().then((function(e){t.calciteTabChange.emit({tab:e})}))}};t.prototype.focusPreviousTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target);var a=this.tabTitles[e-1]||this.tabTitles[this.tabTitles.length-1];a.focus();t.stopPropagation();t.preventDefault()};t.prototype.focusNextTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target);var a=this.tabTitles[e+1]||this.tabTitles[0];a.focus();t.stopPropagation();t.preventDefault()};t.prototype.activateTabHandler=function(t){if(t.detail.tab){this.selectedTab=t.detail.tab}else{this.selectedTab=this.getIndexOfTabTitle(t.target)}t.stopPropagation();t.preventDefault()};t.prototype.globalTabChangeHandler=function(t){if(this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab){this.selectedTab=t.detail.tab}};t.prototype.getIndexOfTabTitle=function(t){return this.tabTitles.indexOf(t)};Object.defineProperty(t.prototype,"tabTitles",{get:function(){if(this.tabNavEl){return s(this.tabNavEl,"calcite-tab-title")}return[]},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selectedTab:["selectedTabChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}:host([dir=rtl]) ::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}"},enumerable:true,configurable:true});return t}())}}}));