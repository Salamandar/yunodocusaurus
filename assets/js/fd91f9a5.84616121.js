"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9581],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=l(a),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63593:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"Vikunja",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_vikunja"}},i=void 0,s={unversionedId:"applications/docs/app_vikunja",id:"applications/docs/app_vikunja",title:"Vikunja",description:"Installer Vikunja with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_vikunja.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_vikunja",permalink:"/yunodocusaurus/docs/applications/docs/app_vikunja",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_vikunja.md",tags:[],version:"current",frontMatter:{title:"Vikunja",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_vikunja"}},sidebar:"tutorialSidebar",previous:{title:"Vaultwarden",permalink:"/yunodocusaurus/docs/applications/docs/app_vaultwarden"},next:{title:"Wallabag2",permalink:"/yunodocusaurus/docs/applications/docs/app_wallabag2"}},p={},l=[{value:"Features",id:"features",level:3},{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=vikunja"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Vikunja with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/vikunja"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/vikunja.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Vikunja")," is a self-hosted open-source to-do list application for all platforms."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stay organized "),(0,r.kt)("li",{parentName:"ul"},"Collaborate with peers"),(0,r.kt)("li",{parentName:"ul"},"Tasks  "),(0,r.kt)("li",{parentName:"ul"},"Kanban board"),(0,r.kt)("li",{parentName:"ul"},"CalDAV"),(0,r.kt)("li",{parentName:"ul"},"Links")),(0,r.kt)("h3",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/vikunja_ynh/blob/master/doc/screenshots/kanban.png",alt:"Screenshot of Vikunja"})),(0,r.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can configure Vikunja with the config panels in the webadmin or by editing this file ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/vikunja/config.yml")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://vikunja.io/docs/config-options/"},"documentation"),"."),(0,r.kt)("p",null,"The API is accesible with this path: ",(0,r.kt)("a",{parentName:"p",href:"https://domain.ltd/api/v1/docs"},"https://domain.ltd/api/v1/docs"),"."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://vikunja.io/"},"vikunja.io")),(0,r.kt)("li",{parentName:"ul"},"Demonstration: ",(0,r.kt)("a",{parentName:"li",href:"https://try.vikunja.io/login"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/vikunja_ynh"},"github.com - YunoHost-Apps/vikunja")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/vikunja_ynh/issues"},"github.com - YunoHost-Apps/vikunja/issues"))))}m.isMDXComponent=!0}}]);