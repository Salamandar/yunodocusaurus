"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Nitter",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nitter"}},o=void 0,s={unversionedId:"applications/docs/app_nitter",id:"applications/docs/app_nitter",title:"Nitter",description:"Installer Nitter with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_nitter.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_nitter",permalink:"/yunodocusaurus/de/docs/applications/docs/app_nitter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_nitter.md",tags:[],version:"current",frontMatter:{title:"Nitter",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nitter"}},sidebar:"tutorialSidebar",previous:{title:"KeeWeb for Nextcloud",permalink:"/yunodocusaurus/de/docs/applications/docs/app_nextcloud_keeweb"},next:{title:"Noalyss",permalink:"/yunodocusaurus/de/docs/applications/docs/app_noalyss"}},l={},p=[{value:"Features",id:"features",level:4},{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:4},{value:"\ud83d\udd34 Antifeatures",id:"-antifeatures",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=nitter"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Nitter with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/nitter"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/nitter.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Nitter")," is a free and open source alternative Twitter front-end focused on privacy and performance. Inspired by the Invidious project."),(0,a.kt)("h4",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No JavaScript or ads"),(0,a.kt)("li",{parentName:"ul"},"All requests go through the backend, client never talks to Twitter"),(0,a.kt)("li",{parentName:"ul"},"Prevents Twitter from tracking your IP or JavaScript fingerprint"),(0,a.kt)("li",{parentName:"ul"},"Uses Twitter's unofficial API (no rate limits or developer account required)"),(0,a.kt)("li",{parentName:"ul"},"Lightweight (for @nim_lang, 60KB vs 784KB from twitter.com)"),(0,a.kt)("li",{parentName:"ul"},"RSS feeds"),(0,a.kt)("li",{parentName:"ul"},"Themes"),(0,a.kt)("li",{parentName:"ul"},"Mobile support (responsive design)")),(0,a.kt)("h3",{id:"screenshots"},"Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/nitter_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshot of Nitter"})),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This app requires a dedicated root domain."),(0,a.kt)("p",null,"Nitter config file is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/www/nitter/nitter.conf")," (for the first instance, subsequent installs will go in ",(0,a.kt)("inlineCode",{parentName:"p"},"nitter__2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nitter__3"),", etc). Users can override the defaults and set custom settings at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://instance-domain.tld/settings"),"."),(0,a.kt)("h3",{id:"-antifeatures"},"\ud83d\udd34 Antifeatures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Non-free Network Services"),": Promotes or depends entirely on a non-free network service.")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://nitter.net/"},"nitter.net")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://nitter.net/"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nitter_ynh"},"github.com - YunoHost-Apps/nitter")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nitter_ynh/issues"},"github.com - YunoHost-Apps/nitter/issues"))))}d.isMDXComponent=!0}}]);