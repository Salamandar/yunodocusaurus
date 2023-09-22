"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,y=u["".concat(p,".").concat(d)]||u[d]||f[d]||r;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Fallback",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_fallback"}},l=void 0,i={unversionedId:"applications/docs/app_fallback",id:"applications/docs/app_fallback",title:"Fallback",description:"Fallback",source:"@site/docs/04.applications/10.docs/app_fallback.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_fallback",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_fallback",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_fallback.md",tags:[],version:"current",frontMatter:{title:"Fallback",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_fallback"}},sidebar:"tutorialSidebar",previous:{title:"Facilmap",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_facilmap"},next:{title:"Firefox Sync",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_ffsync"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],s={toc:c},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://yunohost_package.png?height=80",alt:"Fallback"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=fallback"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Fallback with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/fallback"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/fallback.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"Fallback is a special app, available only by command line interface, which provides a way to have a secondary server which can be used if your main server goes down.\nThis other server will allow you to deploy a copy of your server to bring you back to the internet during your break down."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After the installation, you should not have anything else to configure. If you want, you can find the list of apps to backup in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/fallback/app_list")," and a global configuration in this other file ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/fallback/config.conf")),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/fallback_ynh"},"github.com - YunoHost-Apps/fallback")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or suggest an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/fallback_ynh/issues"},"github.com - YunoHost-Apps/fallback/issues"))))}f.isMDXComponent=!0}}]);