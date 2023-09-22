"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2332],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,s=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=l(r),m=o,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(y,a(a({ref:e},u),{},{components:r})):n.createElement(y,a({ref:e},u))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50427:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"Tiny Tiny RSS",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ttrss"}},a=void 0,i={unversionedId:"applications/docs/app_ttrss",id:"applications/docs/app_ttrss",title:"Tiny Tiny RSS",description:"Tiny Tiny RSS's logo",source:"@site/docs/04.applications/10.docs/app_ttrss.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_ttrss",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_ttrss",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_ttrss.md",tags:[],version:"current",frontMatter:{title:"Tiny Tiny RSS",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ttrss"}},sidebar:"tutorialSidebar",previous:{title:"Trilium Notes",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_trilium"},next:{title:"Tyto",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_tyto"}},p={},l=[{value:"Exporting/importing feeds",id:"exportingimporting-feeds",level:3},{value:"Android Client",id:"android-client",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://ttrss.png?width=80",alt:"Tiny Tiny RSS's logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=ttrss"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Tiny Tiny RSS with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/ttrss"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/ttrss.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"Tiny Tiny RSS is a news feed reader using RSS and Atom protocols."),(0,o.kt)("h3",{id:"exportingimporting-feeds"},"Exporting/importing feeds"),(0,o.kt)("p",null,"Tiny Tiny RSS allows you to save your feeds in opml format.\nIn order to do so, go to Actions -> Configuration -> feed tab -> OPML section -> Export/Import OPML."),(0,o.kt)("h3",{id:"android-client"},"Android Client"),(0,o.kt)("p",null,"You can read your feeds on Android using ttrss-reader application: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://f-droid.org/packages/org.ttrssreader/"},"ttrss-reader"))),(0,o.kt)("p",null,'To use it, you need to go to Actions -> Configuration, in Tiny Tiny RSS web interface and select "Activate API".\nThen, in your android ttrss-reader, fill the Tiny Tiny RSS server address: ',(0,o.kt)("a",{parentName:"p",href:"https://yourdomain.org/ttrss"},"https://yourdomain.org/ttrss"),", username, password (no need to use HTTP authentication)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": you may need to uninstall and reinstall the Tiny Tiny RSS application through the YunoHost admin panel in order to be able to connect."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://git.tt-rss.org/git/tt-rss/wiki"},"git.tt-rss.org/git/tt-rss/wiki")),(0,o.kt)("li",{parentName:"ul"},"Official documentation: (login as ",(0,o.kt)("inlineCode",{parentName:"li"},"demo"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"demo"),"): ",(0,o.kt)("a",{parentName:"li",href:"https://srv.tt-rss.org/tt-rss/"},"srv.tt-rss.org/tt-rss/")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ttrss_ynh"},"github.com - YunoHost-Apps/ttrss")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ttrss_ynh/issues"},"github.com - YunoHost-Apps/ttrss/issues"))))}d.isMDXComponent=!0}}]);