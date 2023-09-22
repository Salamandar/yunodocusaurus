"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Element",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_element"}},s=void 0,i={unversionedId:"applications/docs/app_element",id:"applications/docs/app_element",title:"Element",description:"Installer Element with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_element.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_element",permalink:"/yunodocusaurus/it/docs/applications/docs/app_element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_element.md",tags:[],version:"current",frontMatter:{title:"Element",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_element"}},sidebar:"tutorialSidebar",previous:{title:"Ecko",permalink:"/yunodocusaurus/it/docs/applications/docs/app_ecko"},next:{title:"EmailPoubelle",permalink:"/yunodocusaurus/it/docs/applications/docs/app_emailpoubelle"}},l={},p=[{value:"YunoHost specific features",id:"yunohost-specific-features",level:3},{value:"Additional informations",id:"additional-informations",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=element"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Element with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/element"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/element.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Element")," is a new type of messaging app. You choose where your messages are stored, putting you in control of your data. It gives you access to the Matrix open network, so you can talk to anyone. Element provides a new level of security, adding cross-signed device verification to default end-to-end encryption."),(0,r.kt)("h3",{id:"yunohost-specific-features"},"YunoHost specific features"),(0,r.kt)("p",null,"Multi-users support"),(0,r.kt)("p",null,"This application support the SSO. If you want to use the SSO, you need to define the path to the default homeserver as your homeserver witch is installed on your YunoHost instance."),(0,r.kt)("h3",{id:"additional-informations"},"Additional informations"),(0,r.kt)("p",null,"Important Security Note"),(0,r.kt)("p",null,"We do not recommend running Element from the same domain name as your Matrix homeserver (Synapse). The reason is the risk of XSS (cross-site-scripting) vulnerabilities that could occur if someone caused Element to load and render malicious user generated content from a Matrix API which then had trusted access to Element (or other apps) due to sharing the same domain."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://element.io/"},"element.io (en)")),(0,r.kt)("li",{parentName:"ul"},"Demonstration: ",(0,r.kt)("a",{parentName:"li",href:"https://app.element.io/"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/element_ynh"},"github.com - YunoHost-Apps/element")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/element_ynh/issues"},"github.com - YunoHost-Apps/element/issues"))))}m.isMDXComponent=!0}}]);