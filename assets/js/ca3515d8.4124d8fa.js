"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4700],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>g});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),u=c(r),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(g,i(i({ref:e},l),{},{components:r})):a.createElement(g,i({ref:e},l))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[u]="string"==typeof t?t:o,i[1]=p;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7812:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={title:"Matterbridge",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_matterbridge"}},i=void 0,p={unversionedId:"applications/docs/app_matterbridge",id:"applications/docs/app_matterbridge",title:"Matterbridge",description:"Installer Matterbridge with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_matterbridge.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_matterbridge",permalink:"/yunodocusaurus/docs/applications/docs/app_matterbridge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_matterbridge.md",tags:[],version:"current",frontMatter:{title:"Matterbridge",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_matterbridge"}},sidebar:"tutorialSidebar",previous:{title:"Matomo",permalink:"/yunodocusaurus/docs/applications/docs/app_matomo"},next:{title:"Mattermost",permalink:"/yunodocusaurus/docs/applications/docs/app_mattermost"}},s={},c=[{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,a.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=matterbridge"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Matterbridge with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/matterbridge"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/matterbridge.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Matterbridge")," is a multi-protocols bridge for online communications."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"How to configure this app: a plain file with SSH ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/yunohost/matterbridge/matterbridge.toml"),". You can follow this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/42wim/matterbridge/wiki/How-to-create-your-config"},"doc")," on how to create your config."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/42wim/matterbridge"},"github.com/42wim/matterbridge")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/matterbridge_ynh"},"github.com - YunoHost-Apps/matterbridge")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/matterbridge_ynh/issues"},"github.com - YunoHost-Apps/matterbridge/issues"))))}m.isMDXComponent=!0}}]);