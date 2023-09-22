"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Meilisearch",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_meilisearch"}},i=void 0,s={unversionedId:"applications/docs/app_meilisearch",id:"applications/docs/app_meilisearch",title:"Meilisearch",description:"Installer Meilisearch with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_meilisearch.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_meilisearch",permalink:"/yunodocusaurus/docs/applications/docs/app_meilisearch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_meilisearch.md",tags:[],version:"current",frontMatter:{title:"Meilisearch",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_meilisearch"}},sidebar:"tutorialSidebar",previous:{title:"MediaWiki",permalink:"/yunodocusaurus/docs/applications/docs/app_mediawiki"},next:{title:"Metabase",permalink:"/yunodocusaurus/docs/applications/docs/app_metabase"}},l={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Problem and todo",id:"problem-and-todo",level:3},{value:"Multi-users support",id:"multi-users-support",level:5},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=meilisearch"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Meilisearch with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/meilisearch"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/meilisearch.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Meilisearch")," is an opensource next generation search API."),(0,n.kt)("h3",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/meilisearch_ynh/blob/master/movies-web-demo.gif",alt:"Screenchots of Meilisearch"})),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"At the installation, be sure to set up an API key to secure your API."),(0,n.kt)("h3",{id:"problem-and-todo"},"Problem and todo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Doesn't install on subpath (WIP).")),(0,n.kt)("h5",{id:"multi-users-support"},"Multi-users support"),(0,n.kt)("p",null,"It's an API and there is no authentification, without API key."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://www.meilisearch.com/"},"meilisearch.com")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/meilisearch_ynh"},"github.com - YunoHost-Apps/meilisearch")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/meilisearch_ynh/issues"},"github.com - YunoHost-Apps/meilisearch/issues"))))}m.isMDXComponent=!0}}]);