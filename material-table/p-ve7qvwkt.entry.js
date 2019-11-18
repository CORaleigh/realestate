import{r as t,c as s,h as a,H as e,g as i}from"./p-443359a0.js";import{b as h}from"./p-790f957d.js";const l=class{constructor(a){t(this,a),this.calciteTabChange=s(this,"calciteTabChange",7)}selectedTabChanged(){localStorage&&this.storageId&&null!=this.selectedTab&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTab)),this.calciteTabChange.emit({tab:this.selectedTab})}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;localStorage&&this.storageId&&localStorage.getItem(t)&&(this.selectedTab=JSON.parse(localStorage.getItem(t)),this.calciteTabChange.emit({tab:this.selectedTab}))}render(){return a(e,{role:"tablist"},a("nav",{class:"tab-nav",ref:t=>this.tabNavEl=t},a("slot",null)))}componentDidRender(){this.tabTitles.length&&this.tabTitles.every(t=>!t.isActive)&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then(t=>{this.calciteTabChange.emit({tab:t})})}focusPreviousTabHandler(t){const s=this.getIndexOfTabTitle(t.target);(this.tabTitles[s-1]||this.tabTitles[this.tabTitles.length-1]).focus(),t.stopPropagation(),t.preventDefault()}focusNextTabHandler(t){const s=this.getIndexOfTabTitle(t.target);(this.tabTitles[s+1]||this.tabTitles[0]).focus(),t.stopPropagation(),t.preventDefault()}activateTabHandler(t){this.selectedTab=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()}globalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab)}getIndexOfTabTitle(t){return this.tabTitles.indexOf(t)}get tabTitles(){return this.tabNavEl?h(this.tabNavEl,"calcite-tab-title"):[]}get el(){return i(this)}static get watchers(){return{selectedTab:["selectedTabChanged"]}}static get style(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}:host([dir=rtl]) ::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}"}};export{l as calcite_tab_nav};