"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,m=c["".concat(u,".").concat(g)]||c[g]||l[g]||o;return n?a.createElement(m,p(p({ref:t},i),{},{components:n})):a.createElement(m,p({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var d=2;d<o;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},48536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Unattended upgrades",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_unattended_upgrades"}},p=void 0,s={unversionedId:"applications/docs/app_unattended_upgrades",id:"applications/docs/app_unattended_upgrades",title:"Unattended upgrades",description:"Unattendedupgrades's logo",source:"@site/docs/04.applications/10.docs/app_unattended_upgrades.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_unattended_upgrades",permalink:"/yunodocusaurus/docs/applications/docs/app_unattended_upgrades",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_unattended_upgrades.md",tags:[],version:"current",frontMatter:{title:"Unattended upgrades",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_unattended_upgrades"}},sidebar:"docsSidebar",previous:{title:"\u03bclogger",permalink:"/yunodocusaurus/docs/applications/docs/app_ulogger"},next:{title:"Vaultwarden",permalink:"/yunodocusaurus/docs/applications/docs/app_vaultwarden"}},u={},d=[{value:"Useful links",id:"useful-links",level:2}],i={toc:d},c="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://yunohost_package.png?height=80",alt:"Unattended_upgrades's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=unattended_upgrades"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install unattended_upgrades with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/unattended_upgrades"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/unattended_upgrades.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Unattended-upgrades can download and install security upgrades automatically and unattended, taking care to only install packages from the configured APT source, and checking for dpkg prompts about configuration file changes.\nApticron is a simple script which sends emails about pending package updates such as security updates, properly handling packages on hold both by dselect and aptitude."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.debian.org/UnattendedUpgrades"},"wiki.debian.org/UnattendedUpgrades")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/unattended_upgrades_ynh"},"github.com - YunoHost-Apps/unattended_upgrades")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/unattended_upgrades_ynh/issues"},"github.com - YunoHost-Apps/unattended_upgrades/issues"))))}l.isMDXComponent=!0}}]);