"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6585],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78919:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Nitter",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nitter"}},o=void 0,s={unversionedId:"applications/docs/app_nitter",id:"applications/docs/app_nitter",title:"Nitter",description:"Installer Nitter with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_nitter.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_nitter",permalink:"/yunodocusaurus/docs/applications/docs/app_nitter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_nitter.md",tags:[],version:"current",frontMatter:{title:"Nitter",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nitter"}},sidebar:"tutorialSidebar",previous:{title:"KeeWeb for Nextcloud",permalink:"/yunodocusaurus/docs/applications/docs/app_nextcloud_keeweb"},next:{title:"Noalyss",permalink:"/yunodocusaurus/docs/applications/docs/app_noalyss"}},l={},p=[{value:"Features",id:"features",level:4},{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:4},{value:"\ud83d\udd34 Antifeatures",id:"-antifeatures",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=nitter"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Nitter with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/nitter"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/nitter.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Nitter")," is a free and open source alternative Twitter front-end focused on privacy and performance. Inspired by the Invidious project."),(0,a.kt)("h4",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No JavaScript or ads"),(0,a.kt)("li",{parentName:"ul"},"All requests go through the backend, client never talks to Twitter"),(0,a.kt)("li",{parentName:"ul"},"Prevents Twitter from tracking your IP or JavaScript fingerprint"),(0,a.kt)("li",{parentName:"ul"},"Uses Twitter's unofficial API (no rate limits or developer account required)"),(0,a.kt)("li",{parentName:"ul"},"Lightweight (for @nim_lang, 60KB vs 784KB from twitter.com)"),(0,a.kt)("li",{parentName:"ul"},"RSS feeds"),(0,a.kt)("li",{parentName:"ul"},"Themes"),(0,a.kt)("li",{parentName:"ul"},"Mobile support (responsive design)")),(0,a.kt)("h3",{id:"screenshots"},"Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/nitter_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshot of Nitter"})),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This app requires a dedicated root domain."),(0,a.kt)("p",null,"Nitter config file is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/www/nitter/nitter.conf")," (for the first instance, subsequent installs will go in ",(0,a.kt)("inlineCode",{parentName:"p"},"nitter__2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nitter__3"),", etc). Users can override the defaults and set custom settings at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://instance-domain.tld/settings"),"."),(0,a.kt)("h3",{id:"-antifeatures"},"\ud83d\udd34 Antifeatures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Non-free Network Services"),": Promotes or depends entirely on a non-free network service.")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://nitter.net/"},"nitter.net")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://nitter.net/"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nitter_ynh"},"github.com - YunoHost-Apps/nitter")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nitter_ynh/issues"},"github.com - YunoHost-Apps/nitter/issues"))))}m.isMDXComponent=!0}}]);