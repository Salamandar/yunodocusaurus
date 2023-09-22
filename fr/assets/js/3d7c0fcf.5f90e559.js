"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7871],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>b});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),c=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(b,a(a({ref:e},l),{},{components:n})):o.createElement(b,a({ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83217:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Distbin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_distbin"}},a=void 0,s={unversionedId:"applications/docs/app_distbin",id:"applications/docs/app_distbin",title:"Distbin",description:"Distbin",source:"@site/docs/04.applications/10.docs/app_distbin.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_distbin",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_distbin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_distbin.md",tags:[],version:"current",frontMatter:{title:"Distbin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_distbin"}},sidebar:"tutorialSidebar",previous:{title:"Dispatch",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_dispatch"},next:{title:"DokuWiki",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_dokuwiki"}},p={},c=[{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://yunohost_package.png?height=80",alt:"Distbin"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=distbin"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install distbin with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/distbin"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/distbin.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"A distributed pastebin. i.e. it is a service where anyone can post things on the web, and others can react by posting anywhere else on the web (including here)."),(0,r.kt)("p",null,"A networked place to store posted web documents. This is meant to allow for distributed social commentary and reaction around these documents using best practices recommended or noted by the W3C Social Web Working Group."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gobengo/distbin"},"github.com - gobengo/distbin")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/distbin_ynh"},"github.com - YunoHost-Apps/distbin")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/distbin_ynh/issues"},"github.com - YunoHost-Apps/distbin/issues"))))}d.isMDXComponent=!0}}]);