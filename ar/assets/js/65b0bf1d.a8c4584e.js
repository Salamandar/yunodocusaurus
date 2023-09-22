"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8685],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(a),g=r,m=c["".concat(u,".").concat(g)]||c[g]||l[g]||o;return a?n.createElement(m,p(p({ref:t},d),{},{components:a})):n.createElement(m,p({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},48536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={title:"Unattended upgrades",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_unattended_upgrades"}},p=void 0,s={unversionedId:"applications/docs/app_unattended_upgrades",id:"applications/docs/app_unattended_upgrades",title:"Unattended upgrades",description:"Unattendedupgrades's logo",source:"@site/docs/04.applications/10.docs/app_unattended_upgrades.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_unattended_upgrades",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_unattended_upgrades",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_unattended_upgrades.md",tags:[],version:"current",frontMatter:{title:"Unattended upgrades",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_unattended_upgrades"}},sidebar:"tutorialSidebar",previous:{title:"\u03bclogger",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_ulogger"},next:{title:"Vaultwarden",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_vaultwarden"}},u={},i=[{value:"Useful links",id:"useful-links",level:2}],d={toc:i},c="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://yunohost_package.png?height=80",alt:"Unattended_upgrades's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=unattended_upgrades"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install unattended_upgrades with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/unattended_upgrades"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/unattended_upgrades.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Unattended-upgrades can download and install security upgrades automatically and unattended, taking care to only install packages from the configured APT source, and checking for dpkg prompts about configuration file changes.\nApticron is a simple script which sends emails about pending package updates such as security updates, properly handling packages on hold both by dselect and aptitude."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.debian.org/UnattendedUpgrades"},"wiki.debian.org/UnattendedUpgrades")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/unattended_upgrades_ynh"},"github.com - YunoHost-Apps/unattended_upgrades")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/unattended_upgrades_ynh/issues"},"github.com - YunoHost-Apps/unattended_upgrades/issues"))))}l.isMDXComponent=!0}}]);