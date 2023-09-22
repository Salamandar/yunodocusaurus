"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Archivist",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/archivist"},"page-toc":{active:!0,depth:3}},i=void 0,c={unversionedId:"administer/backups/backup_methods/archivist",id:"administer/backups/backup_methods/archivist",title:"Archivist",description:"Functionality",source:"@site/docs/02.administer/20.backups/10.backup_methods/03.archivist.md",sourceDirName:"02.administer/20.backups/10.backup_methods",slug:"/administer/backups/backup_methods/archivist",permalink:"/yunodocusaurus/docs/administer/backups/backup_methods/archivist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/10.backup_methods/03.archivist.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Archivist",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/archivist"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"Restic",permalink:"/yunodocusaurus/docs/administer/backups/backup_methods/restic"},next:{title:"Create a filesystem image",permalink:"/yunodocusaurus/docs/administer/backups/clone_filesystem"}},s={},u=[{value:"Functionality",id:"functionality",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functionality"},"Functionality"),(0,n.kt)("p",null,"This application is based on rsync and GPG, it offers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"backup of data on a remote storage (support for different types of storage)"),(0,n.kt)("li",{parentName:"ul"},"data encryption, which allows to store data at a third party")),(0,n.kt)("p",null,"The package also allows you to finely define the frequency and type of data to be backed up and integrates an email alert system in case of backup failure."),(0,n.kt)("p",null,"For more information: ",(0,n.kt)("a",{parentName:"p",href:"https://forum.yunohost.org/t/new-app-archivist/3747"},"https://forum.yunohost.org/t/new-app-archivist/3747")))}d.isMDXComponent=!0}}]);