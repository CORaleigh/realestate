System.register(["./p-7a7fd524.system.js","./p-c737c79a.system.js","./p-a7662e60.system.js","@esri/calcite-ui-icons","./p-3fca8f89.system.js"],(function(e){"use strict";var t,i,r,n,a,c,s,l,o,h,d,u,p,f,m,g,v,b;return{setters:[function(e){t=e.r;i=e.c;r=e.h;n=e.H;a=e.g},function(e){c=e.S;s=e.E;l=e.L;o=e.R;h=e.U;d=e.D;u=e.H;p=e.a},function(e){f=e.b;m=e.g;g=e.n},function(e){v=e.chevronRight16},function(e){b=e.T}],execute:function(){var x=e("calcite_tree_item",function(){function e(e){var r=this;t(this,e);this.selected=false;this.depth=-1;this.hasChildren=null;this.expanded=false;this.parentExpanded=false;this.iconClickHandler=function(e){e.stopPropagation();r.expanded=!r.expanded;r.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:true})};this.childrenClickHandler=function(e){return e.stopPropagation()};this.calciteTreeItemSelect=i(this,"calciteTreeItemSelect",7)}e.prototype.expandedHandler=function(e){if(this.childrenSlotWrapper){var t=f(this.childrenSlotWrapper,"calcite-tree")[0];if(t){var i=f(t,"calcite-tree-item");i.forEach((function(t){return t.parentExpanded=e}))}}};e.prototype.componentWillRender=function(){this.hasChildren=!!this.el.querySelector("calcite-tree");var e=this.el.closest("calcite-tree");this.selectionMode=e.selectionMode;this.depth=0;var t;while(e){t=e.parentElement.closest("calcite-tree");if(t===e){break}else{e=t;this.depth=this.depth+1}}};e.prototype.render=function(){var e=this;var t=m(this.el);var i=this.hasChildren?r("svg",{class:"calcite-tree-chevron",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 16 16",onClick:this.iconClickHandler,"data-test-id":"icon"},r("path",{d:v})):null;return r(n,{tabindex:this.parentExpanded||this.depth===1?"0":"-1",dir:t,"aria-role":"treeitem","aria-hidden":this.parentExpanded||this.depth===1?undefined:"true","aria-selected":this.selected?"true":this.selectionMode===b.Multi||this.selectionMode===b.MultiChildren?"false":undefined,"aria-expanded":this.hasChildren?this.expanded?"true":"false":undefined},r("div",{class:"calcite-tree-node",ref:function(t){return e.defaultSlotWrapper=t}},i,r("slot",null)),r("div",{class:"calcite-tree-children","data-test-id":"calcite-tree-children",role:this.hasChildren?"group":undefined,ref:function(t){return e.childrenSlotWrapper=t},onClick:this.childrenClickHandler},r("slot",{name:"children"})))};e.prototype.onClick=function(e){var t=f(this.defaultSlotWrapper,"a")[0];if(t&&e.composedPath()[0].tagName.toLowerCase()!=="a"){var i=t.target===""?"_self":t.target;window.open(t.href,i)}this.expanded=!this.expanded;this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:false})};e.prototype.keyDownHandler=function(e){var t;switch(e.keyCode){case c:this.selected=!this.selected;e.preventDefault();e.stopPropagation();break;case s:var i=g(this.el.children).find((function(e){return e.matches("a")}));if(i){i.click();this.selected=true}else{this.selected=!this.selected}e.preventDefault();e.stopPropagation();break;case l:if(this.hasChildren&&this.expanded){this.expanded=false;e.preventDefault();e.stopPropagation();break}var r=this.el.parentElement.closest("calcite-tree-item");if(r&&(!this.hasChildren||this.expanded===false)){r.focus();e.preventDefault();e.stopPropagation();break}break;case o:if(this.hasChildren&&this.expanded===false){this.expanded=true;e.preventDefault();e.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case h:var n=this.el.previousElementSibling;if(n&&n.matches("calcite-tree-item")){n.focus()}break;case d:var a=this.el.nextElementSibling;if(a&&a.matches("calcite-tree-item")){a.focus()}break;case u:t=this.el.closest("calcite-tree[root]");var f=t.querySelector("calcite-tree-item");f.focus();break;case p:t=this.el.closest("calcite-tree[root]");var m=t.children[t.children.length-1];var v=g(m.children).find((function(e){return e.matches("calcite-tree")}));while(v){m=v.children[t.children.length-1];v=g(m.children).find((function(e){return e.matches("calcite-tree")}))}m.focus();break}};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{expanded:["expandedHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"\@charset \"UTF-8\";:root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;max-width:100%}::slotted(*),:host{font-size:.875rem;line-height:1.5}::slotted(*){color:var(--calcite-tree-text)!important}::slotted(*),::slotted(*):hover{text-decoration:none!important}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:focus:after,:host([has-children]) .calcite-tree-children:hover:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:\"•\";left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator)}.calcite-tree-node:after,.calcite-tree-node:before{position:absolute;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.calcite-tree-node:after{content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0}:host([depth=\"1\"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth=\"1\"])>.calcite-tree-children:before,:host([depth=\"1\"])>.calcite-tree-node:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before,:host([selected]) .calcite-tree-node:hover:before{opacity:1}.calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after,:host([selected]) .calcite-tree-node:hover:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-tree-line-active)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:focus) .calcite-tree-chevron,:host(:hover) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-tree-chevron-active);stroke-width:.75;stroke:var(--calcite-tree-chevron-active)}"},enumerable:true,configurable:true});return e}())}}}));