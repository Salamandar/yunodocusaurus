"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41765:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"PrivateBin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_privatebin"}},o=void 0,p={unversionedId:"applications/docs/app_privatebin",id:"applications/docs/app_privatebin",title:"PrivateBin",description:"PrivateBin's logo",source:"@site/docs/04.applications/10.docs/app_privatebin.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_privatebin",permalink:"/yunodocusaurus/de/docs/applications/docs/app_privatebin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_privatebin.md",tags:[],version:"current",frontMatter:{title:"PrivateBin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_privatebin"}},sidebar:"tutorialSidebar",previous:{title:"PrettyNoemie CMS",permalink:"/yunodocusaurus/de/docs/applications/docs/app_prettynoemiecms"},next:{title:"Prometheus",permalink:"/yunodocusaurus/de/docs/applications/docs/app_prometheus"}},s={},c=[{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://zerobin_logo.svg?resize=,80",alt:"PrivateBin's logo"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=privatebin"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install PrivateBin with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/privatebin"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/privatebin.svg",alt:"Integration level"}))),(0,a.kt)("p",null,"PrivateBin is a web service for temporarily storing and sharing plain text in encrypted form without readable storage on the server. The encryption/decryption key is not stored on the server but in the transmitted URL. Thus you can share sensitive information (passwords, access codes, and even a discussion) in a confidential way by communicating to your interlocutors the specific address of your content. Moreover this content has a limited value in time and is destroyed after a customizable delay."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website : ",(0,a.kt)("a",{parentName:"li",href:"https://privatebin.info/"},"privatebin.info")),(0,a.kt)("li",{parentName:"ul"},"Official documentation : ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PrivateBin/PrivateBin/wiki"},"github.com/PrivateBin/PrivateBin/wiki")),(0,a.kt)("li",{parentName:"ul"},"Demonstration : ",(0,a.kt)("a",{parentName:"li",href:"https://privatebin.net/"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository : ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/privatebin_ynh"},"github.com - YunoHost-Apps/privatebin")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue) : ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/privatebin_ynh/issues"},"github.com - YunoHost-Apps/privatebin/issues"))))}m.isMDXComponent=!0}}]);