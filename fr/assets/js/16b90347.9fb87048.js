"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4313],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(a),y=o,d=u["".concat(s,".").concat(y)]||u[y]||h[y]||r;return a?n.createElement(d,l(l({ref:e},p),{},{components:a})):n.createElement(d,l({ref:e},p))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=y;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},12309:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Halcyon",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_halcyon"}},l=void 0,i={unversionedId:"applications/docs/app_halcyon",id:"applications/docs/app_halcyon",title:"Halcyon",description:"Halcyon's logo",source:"@site/docs/04.applications/10.docs/app_halcyon.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_halcyon",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_halcyon",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_halcyon.md",tags:[],version:"current",frontMatter:{title:"Halcyon",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_halcyon"}},sidebar:"tutorialSidebar",previous:{title:"h5ai",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_h5ai"},next:{title:"Haste",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_haste"}},s={},c=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"sources",id:"sources",level:3}],p={toc:c},u="wrapper";function h(t){let{components:e,...a}=t;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://halcyon_logo.png?width=80",alt:"Halcyon's logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=halcyon"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Halcyon with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/halcyon"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/halcyon.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"Halcyon is a webclient for Mastodon and Pleroma which aims to recreate the simple and beautiful user interface of Twitter while keeping all advantages of decentral networks in focus.",(0,o.kt)("a",{parentName:"p",href:"#sources"},"\xb9")),(0,o.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,o.kt)("p",null,"The app require a dedicated domain like ",(0,o.kt)("inlineCode",{parentName:"p"},"halcyon.domain.tld")),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.halcyon.social/"},"www.halcyon.social")),(0,o.kt)("li",{parentName:"ul"},"Official documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://www.halcyon.social/documentation.php"},"www.halcyon.social - documentation")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/halcyon_ynh"},"github.com - YunoHost-Apps/halcyon")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/halcyon_ynh/issues"},"github.com - YunoHost-Apps/halcyon/issues"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sources"},"sources"),(0,o.kt)("p",null,"\xb9 ",(0,o.kt)("a",{parentName:"p",href:"https://www.halcyon.social/"},"www.halcyon.social")))}h.isMDXComponent=!0}}]);