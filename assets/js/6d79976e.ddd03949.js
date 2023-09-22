"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2454],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),k=r,f=u["".concat(i,".").concat(k)]||u[k]||m[k]||o;return a?n.createElement(f,p(p({ref:t},c),{},{components:a})):n.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},39418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"Wekan",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wekan"}},p=void 0,s={unversionedId:"applications/docs/app_wekan",id:"applications/docs/app_wekan",title:"Wekan",description:"wekan's logo",source:"@site/docs/04.applications/10.docs/app_wekan.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_wekan",permalink:"/yunodocusaurus/docs/applications/docs/app_wekan",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_wekan.md",tags:[],version:"current",frontMatter:{title:"Wekan",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wekan"}},sidebar:"tutorialSidebar",previous:{title:"Webtrees",permalink:"/yunodocusaurus/docs/applications/docs/app_webtrees"},next:{title:"WemaWema",permalink:"/yunodocusaurus/docs/applications/docs/app_wemawema"}},i={},l=[{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://wekan_logo.svg?resize=,80",alt:"wekan's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=wekan"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Wekan with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/wekan"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/wekan.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Wekan is an online collaborative task manager. It facilitates the management of projects through the development of todo lists.\nWekan offers a wide range of features, making it a very complete service adapted to complex projects. If you are looking for a simpler kanban tool, you can use ",(0,r.kt)("a",{parentName:"p",href:"/app_kanboard"},"Kanboard")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://wekan.github.io/"},"wekan.github.io")),(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wekan/wekan/wiki"},"github.com/wekan/wekan/wiki")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wekan_ynh"},"github.com - YunoHost-Apps/wekan")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wekan_ynh/issues"},"github.com - YunoHost-Apps/wekan/issues"))))}m.isMDXComponent=!0}}]);