"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"NodeBB",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nodebb"}},s=void 0,p={unversionedId:"applications/docs/app_nodebb",id:"applications/docs/app_nodebb",title:"NodeBB",description:"Installer NodeBB with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_nodebb.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_nodebb",permalink:"/yunodocusaurus/es/docs/applications/docs/app_nodebb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_nodebb.md",tags:[],version:"current",frontMatter:{title:"NodeBB",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nodebb"}},sidebar:"tutorialSidebar",previous:{title:"NocoDB",permalink:"/yunodocusaurus/es/docs/applications/docs/app_nocodb"},next:{title:"Nullboard",permalink:"/yunodocusaurus/es/docs/applications/docs/app_nullboard"}},i={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=nodebb"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer NodeBB with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/nodebb"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/nodebb.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NodeBB")," is built using the Node.js server-side JavaScript platform, delivering unmatched performance.\nBuilding on this high performance platform means fast and dependable performance that will support even the biggest and most active community."),(0,r.kt)("h3",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,"FIXME: Missing screenshot"),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://nodebb.org/"},"nodebb.org")),(0,r.kt)("li",{parentName:"ul"},"Demonstration: ",(0,r.kt)("a",{parentName:"li",href:"https://try.nodebb.org/"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nodebb_ynh"},"github.com - YunoHost-Apps/nodebb")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nodebb_ynh/issues"},"github.com - YunoHost-Apps/nodebb/issues"))))}d.isMDXComponent=!0}}]);