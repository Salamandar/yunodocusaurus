"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,g=u["".concat(c,".").concat(d)]||u[d]||y[d]||a;return r?o.createElement(g,p(p({ref:t},l),{},{components:r})):o.createElement(g,p({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,p[1]=s;for(var i=2;i<a;i++)p[i]=r[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={title:"Grocy",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_grocy"}},p=void 0,s={unversionedId:"applications/docs/app_grocy",id:"applications/docs/app_grocy",title:"Grocy",description:"grocy's logo",source:"@site/docs/04.applications/10.docs/app_grocy.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_grocy",permalink:"/yunodocusaurus/de/docs/applications/docs/app_grocy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_grocy.md",tags:[],version:"current",frontMatter:{title:"Grocy",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_grocy"}},sidebar:"tutorialSidebar",previous:{title:"Grav",permalink:"/yunodocusaurus/de/docs/applications/docs/app_grav"},next:{title:"Guacamole",permalink:"/yunodocusaurus/de/docs/applications/docs/app_guacamole"}},c={},i=[{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:i},u="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://grocy-logo.png?resize=100",alt:"grocy's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=grocy"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Grocy with YunoHost"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/grocy"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/grocy.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Grocy")," is a web-based self-hosted groceries & household management solution for your home."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null," Default login"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    user: admin\n    password: admin\n")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Official app website: ",(0,n.kt)("a",{parentName:"li",href:"https://grocy.info/"},"https://grocy.info/")),(0,n.kt)("li",{parentName:"ul"},"Upstream app code repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/grocy/grocy"},"https://github.com/grocy/grocy")),(0,n.kt)("li",{parentName:"ul"},"Demo: ",(0,n.kt)("a",{parentName:"li",href:"https://en.demo.grocy.info/stockoverview"},"https://en.demo.grocy.info/stockoverview")),(0,n.kt)("li",{parentName:"ul"},"Report a bug: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/grocy_ynh/issues"},"https://github.com/YunoHost-Apps/grocy_ynh/issues"))))}y.isMDXComponent=!0}}]);