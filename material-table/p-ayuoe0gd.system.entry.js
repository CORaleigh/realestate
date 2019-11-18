System.register(["./p-7a7fd524.system.js","./p-c737c79a.system.js","./p-a7662e60.system.js","@esri/calcite-ui-icons","./p-a4afac99.system.js","./p-a50abe6c.system.js"],(function(e){"use strict";var t,i,c,o,n,s,r,a,d,m,l,u,h,f,p,I;return{setters:[function(e){t=e.r;i=e.c;c=e.h;o=e.H;n=e.g},function(e){s=e.S;r=e.E;a=e.U;d=e.D;m=e.H;l=e.a},function(e){u=e.c;h=e.g},function(e){f=e.chevronLeft16},function(e){p=e.g},function(e){I=e.C}],execute:function(){var v=e("calcite_accordion_item",function(){function e(e){var c=this;t(this,e);this.active=false;this.accordionItemId="calcite-accordion-item-"+p();this.selectionMode=u(this.el,"selection-mode","multi");this.itemHeaderClickHander=function(){return c.emitRequestedItem()};this.calciteAccordionItemKeyEvent=i(this,"calciteAccordionItemKeyEvent",7);this.calciteAccordionItemSelected=i(this,"calciteAccordionItemSelected",7);this.closeCalciteAccordionItem=i(this,"closeCalciteAccordionItem",7);this.registerCalciteAccordionItem=i(this,"registerCalciteAccordionItem",7)}e.prototype.componentDidLoad=function(){this.itemPosition=this.getItemPosition();this.registerCalciteAccordionItem.emit({position:this.itemPosition})};e.prototype.render=function(){var e=h(this.el);return c(o,{dir:e,tabindex:"0","aria-expanded":this.active?"true":"false"},c("div",{class:"accordion-item-header",onClick:this.itemHeaderClickHander},c("span",{class:"accordion-item-title"},this.itemTitle),c("div",{class:"accordion-item-icon"},c(I,{size:"16",path:f}))),c("div",{class:"accordion-item-content"},c("slot",null)))};e.prototype.keyDownHandler=function(e){switch(e.keyCode){case s:case r:this.emitRequestedItem();e.preventDefault();break;case a:case d:case m:case l:this.calciteAccordionItemKeyEvent.emit({item:e});e.preventDefault();break}};e.prototype.updateActiveItemOnChange=function(e){this.requestedAccordionItem=e.detail.requestedAccordionItem;this.determineActiveItem()};e.prototype.determineActiveItem=function(){switch(this.selectionMode){case"multi":if(this.accordionItemId===this.requestedAccordionItem)this.active=!this.active;break;case"single":if(this.accordionItemId===this.requestedAccordionItem)this.active=!this.active;else this.active=false;break;case"single-persist":this.active=this.accordionItemId===this.requestedAccordionItem;break}};e.prototype.emitRequestedItem=function(){this.calciteAccordionItemSelected.emit({requestedAccordionItem:this.accordionItemId})};e.prototype.getItemPosition=function(){var e=this.el.parentElement;return Array.prototype.indexOf.call(e.querySelectorAll("calcite-accordion-item"),this.el)};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-accordion-item-background-color);color:var(--calcite-accordion-item-color);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;text-decoration:none;outline:none;position:relative}:host([active]){color:var(--calcite-accordion-item-color-active)}:host([active]) .accordion-item-content{display:block}.accordion-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction);-ms-flex-align:center;align-items:center;cursor:pointer}.accordion-item-content,.accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border-color);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}.accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}.accordion-item-content{display:none}.accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end)}.accordion-item-icon svg{fill:var(--calcite-accordion-item-color);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}:host(:focus) .accordion-item-icon svg,:host(:hover) .accordion-item-icon svg{fill:var(--calcite-accordion-item-hover-icon-fill)}:host([dir=rtl]) .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-end);margin-right:var(--calcite-accordion-item-icon-spacing-start)}:host([dir=rtl]) .accordion-item-icon svg{-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-icon svg{fill:var(--calcite-accordion-item-color-active);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active][dir=rtl]) .accordion-item-icon svg{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}.accordion-item-title{margin-right:auto}:host([dir=rtl]) .accordion-item-title{margin-right:0;margin-left:auto}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-accordion-item-color-hover)}:host(:active) .accordion-item-title,:host(:focus) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-accordion-item-color-active);font-weight:500}"},enumerable:true,configurable:true});return e}())}}}));