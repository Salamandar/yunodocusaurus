"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3638],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||r;return n?o.createElement(d,i(i({ref:e},c),{},{components:n})):o.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=f;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[u]="string"==typeof t?t:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3325:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={title:"IFM",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ifm"}},i=void 0,p={unversionedId:"applications/docs/app_ifm",id:"applications/docs/app_ifm",title:"IFM",description:"Installer IFM with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_ifm.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_ifm",permalink:"/yunodocusaurus/docs/applications/docs/app_ifm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_ifm.md",tags:[],version:"current",frontMatter:{title:"IFM",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ifm"}},sidebar:"tutorialSidebar",previous:{title:"Hubzilla",permalink:"/yunodocusaurus/docs/applications/docs/app_hubzilla"},next:{title:"I Hate Money",permalink:"/yunodocusaurus/docs/applications/docs/app_ihatemoney"}},s={},l=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=ifm"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer IFM with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/ifm"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/ifm.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"IFM")," is a web-based filemanager, which comes as a single file solution using HTML5, CSS3, JavaScript and PHP."),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("p",null,"The IFM is usually locked to it's own directory (",(0,a.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/ifm"),"), so you are not able to go above. You can change that by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"env[IFM_ROOT_DIR] = /home/yunohost.app/ifm")," in the PHP config ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/php/7.3/fpm/pool.d/ifm.conf")," L.434 with the help of this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/misterunknown/ifm/wiki/Configuration"},"documentation"),"."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/misterunknown/ifm"},"github.com/misterunknown/ifm")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://ifmdemo.gitea.de/"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ifm_ynh"},"github.com - YunoHost-Apps/ifm")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ifm_ynh/issues"},"github.com - YunoHost-Apps/ifm/issues"))))}m.isMDXComponent=!0}}]);