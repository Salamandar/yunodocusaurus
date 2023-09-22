"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||n;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},26903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={title:"Retroarch Web Player",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_retroarch"}},s=void 0,i={unversionedId:"applications/docs/app_retroarch",id:"applications/docs/app_retroarch",title:"Retroarch Web Player",description:"Installer RetroArch with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_retroarch.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_retroarch",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_retroarch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_retroarch.md",tags:[],version:"current",frontMatter:{title:"Retroarch Web Player",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_retroarch"}},sidebar:"tutorialSidebar",previous:{title:"Rainloop",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_rainloop"},next:{title:"Roundcube",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_roundcube"}},l={},c=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Use Shared ROMs library",id:"use-shared-roms-library",level:4},{value:"Limitations",id:"limitations",level:4},{value:"Useful links",id:"useful-links",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=retroarch"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer RetroArch with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/retroarch"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/retroarch.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Retroarch Web Player")," is a frontend for emulators, game engines and media players. It enables you to run classic games on a wide range of computers and consoles through its slick graphical interface. Settings are also unified so configuration is done once and for all. In addition to this, you are able to run original game discs (CDs) from RetroArch. RetroArch has advanced features like shaders, netplay, rewinding, next-frame response times, runahead, machine translation, blind accessibility features, and more!"),(0,o.kt)("h3",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/retroarch_ynh/blob/master/doc/screenshots/ozone-main-menu.jpg",alt:"Screenshots of Retroarch Web Player"})),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h4",{id:"use-shared-roms-library"},"Use Shared ROMs library"),(0,o.kt)("p",null,"Although you can upload a ROM at runtime, retroarch may have access to the ROMs you already have on your server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Games are located in ",(0,o.kt)("inlineCode",{parentName:"li"},"/opt/yunohost/retroarch/assets/cores"),". A symbolic link is created to this folder in ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/yunohost.multimedia/share/Games"),", so that you can place your games from here"),(0,o.kt)("li",{parentName:"ul"},"cores have to be indexed to work : script ",(0,o.kt)("inlineCode",{parentName:"li"},"/opt/yunohost/retroarch/indexer.sh")," run every 5 minutes to index all games in ",(0,o.kt)("inlineCode",{parentName:"li"},"opt/yunohost/retroarch/assets/cores"))),(0,o.kt)("h4",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cannot save game, in fact, cannot write at all... so configuration is lost each time you start again"),(0,o.kt)("li",{parentName:"ul"},"No user management"),(0,o.kt)("li",{parentName:"ul"},"Some core are listed but not implemented : they do not work, the issue is from the upstream app.")),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.retroarch.com/"},"retroarch.com")),(0,o.kt)("li",{parentName:"ul"},"Demonstration: ",(0,o.kt)("a",{parentName:"li",href:"https://web.libretro.com/"},"Demo")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/retroarch_ynh"},"github.com - YunoHost-Apps/retroarch")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/retroarch_ynh/issues"},"github.com - YunoHost-Apps/retroarch/issues"))))}m.isMDXComponent=!0}}]);