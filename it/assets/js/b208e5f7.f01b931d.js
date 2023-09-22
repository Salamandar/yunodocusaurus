"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7076],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>f});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var p=n.createContext({}),l=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},m=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=l(o),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return o?n.createElement(f,i(i({ref:e},m),{},{components:o})):n.createElement(f,i({ref:e},m))}));function f(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},39961:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Movim",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_movim"}},i=void 0,s={unversionedId:"applications/docs/app_movim",id:"applications/docs/app_movim",title:"Movim",description:"Installer Movim with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_movim.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_movim",permalink:"/yunodocusaurus/it/docs/applications/docs/app_movim",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_movim.md",tags:[],version:"current",frontMatter:{title:"Movim",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_movim"}},sidebar:"tutorialSidebar",previous:{title:"Mopidy",permalink:"/yunodocusaurus/it/docs/applications/docs/app_mopidy"},next:{title:"Mumble Web",permalink:"/yunodocusaurus/it/docs/applications/docs/app_mumble-web"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],m={toc:l},c="wrapper";function u(t){let{components:e,...o}=t;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=movim"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Movim with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/movim"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/movim.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Movim")," is a web-based cross-platform XMPP client."),(0,r.kt)("h3",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/movim_ynh/blob/master/doc/screenshots/movim.png",alt:"Screenshot of Movim"})),(0,r.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After installing the app, it can be configured at ",(0,r.kt)("a",{parentName:"li",href:"https://example.com/movim/?admin"},"https://example.com/movim/?admin")," using the username and password defined during the installation.")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://movim.eu/"},"movim.eu")),(0,r.kt)("li",{parentName:"ul"},"Demonstration: ",(0,r.kt)("a",{parentName:"li",href:"https://mov.im/?login"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/movim_ynh"},"github.com - YunoHost-Apps/movim")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/movim_ynh/issues"},"github.com - YunoHost-Apps/movim/issues"))))}u.isMDXComponent=!0}}]);