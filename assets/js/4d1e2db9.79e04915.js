"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||r;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"IFM",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ifm"}},i=void 0,p={unversionedId:"applications/docs/app_ifm",id:"applications/docs/app_ifm",title:"IFM",description:"Installer IFM with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_ifm.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_ifm",permalink:"/yunodocusaurus/docs/applications/docs/app_ifm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_ifm.md",tags:[],version:"current",frontMatter:{title:"IFM",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ifm"}},sidebar:"docsSidebar",previous:{title:"Hubzilla",permalink:"/yunodocusaurus/docs/applications/docs/app_hubzilla"},next:{title:"I Hate Money",permalink:"/yunodocusaurus/docs/applications/docs/app_ihatemoney"}},s={},l=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=ifm"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer IFM with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/ifm"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/ifm.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"IFM")," is a web-based filemanager, which comes as a single file solution using HTML5, CSS3, JavaScript and PHP."),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("p",null,"The IFM is usually locked to it's own directory (",(0,a.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/ifm"),"), so you are not able to go above. You can change that by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"env[IFM_ROOT_DIR] = /home/yunohost.app/ifm")," in the PHP config ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/php/7.3/fpm/pool.d/ifm.conf")," L.434 with the help of this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/misterunknown/ifm/wiki/Configuration"},"documentation"),"."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/misterunknown/ifm"},"github.com/misterunknown/ifm")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://ifmdemo.gitea.de/"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ifm_ynh"},"github.com - YunoHost-Apps/ifm")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ifm_ynh/issues"},"github.com - YunoHost-Apps/ifm/issues"))))}m.isMDXComponent=!0}}]);