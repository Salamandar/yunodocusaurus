"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7076],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(o),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return o?n.createElement(f,i(i({ref:t},m),{},{components:o})):n.createElement(f,i({ref:t},m))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},39961:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Movim",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_movim"}},i=void 0,s={unversionedId:"applications/docs/app_movim",id:"applications/docs/app_movim",title:"Movim",description:"Installer Movim with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_movim.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_movim",permalink:"/yunodocusaurus/docs/applications/docs/app_movim",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_movim.md",tags:[],version:"current",frontMatter:{title:"Movim",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_movim"}},sidebar:"docsSidebar",previous:{title:"Mopidy",permalink:"/yunodocusaurus/docs/applications/docs/app_mopidy"},next:{title:"Mumble Web",permalink:"/yunodocusaurus/docs/applications/docs/app_mumble-web"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=movim"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Movim with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/movim"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/movim.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Movim")," is a web-based cross-platform XMPP client."),(0,r.kt)("h3",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/movim_ynh/blob/master/doc/screenshots/movim.png",alt:"Screenshot of Movim"})),(0,r.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After installing the app, it can be configured at ",(0,r.kt)("a",{parentName:"li",href:"https://example.com/movim/?admin"},"https://example.com/movim/?admin")," using the username and password defined during the installation.")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://movim.eu/"},"movim.eu")),(0,r.kt)("li",{parentName:"ul"},"Demonstration: ",(0,r.kt)("a",{parentName:"li",href:"https://mov.im/?login"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/movim_ynh"},"github.com - YunoHost-Apps/movim")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/movim_ynh/issues"},"github.com - YunoHost-Apps/movim/issues"))))}u.isMDXComponent=!0}}]);