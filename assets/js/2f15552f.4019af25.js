"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4486],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>d});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},l=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=c(o),m=r,d=u["".concat(p,".").concat(m)]||u[m]||y[m]||a;return o?n.createElement(d,s(s({ref:e},l),{},{components:o})):n.createElement(d,s({ref:e},l))}));function d(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},29617:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Cowyo",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_cowyo"}},s=void 0,i={unversionedId:"applications/docs/app_cowyo",id:"applications/docs/app_cowyo",title:"Cowyo",description:"Cowyo's logo",source:"@site/docs/04.applications/10.docs/app_cowyo.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_cowyo",permalink:"/yunodocusaurus/docs/applications/docs/app_cowyo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_cowyo.md",tags:[],version:"current",frontMatter:{title:"Cowyo",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_cowyo"}},sidebar:"docsSidebar",previous:{title:"Coturn",permalink:"/yunodocusaurus/docs/applications/docs/app_coturn"},next:{title:"CryptPad",permalink:"/yunodocusaurus/docs/applications/docs/app_cryptpad"}},p={},c=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function y(t){let{components:e,...o}=t;return(0,r.kt)(u,(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://cowyo_logo.png?height=80",alt:"Cowyo's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=cowyo"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install cowyo with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://ci-apps.yunohost.org/ci/apps/cowyo/"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/cowyo.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Cowyo is a self-contained wiki server that makes jotting notes easy and fast. The most important feature here is simplicity. Other features include versioning, page locking, self-destructing messages, encryption, and listifying."),(0,r.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,r.kt)("p",null,"By design, cowyo requires its own domain. He does not support multiple users."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website (demo): ",(0,r.kt)("a",{parentName:"li",href:"https://cowyo.com"},"cowyo.com")),(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/schollz/cowyo/blob/master/README.md"},"github.com - schollz/cowyo/README")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/cowyo_ynh"},"github.com - YunoHost-Apps/cowyo")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/cowyo_ynh/issues"},"github.com - YunoHost-Apps/cowyo/issues"))))}y.isMDXComponent=!0}}]);