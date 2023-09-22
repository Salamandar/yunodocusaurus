"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Restic",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/restic"},"page-toc":{active:!0,depth:3}},c=void 0,i={unversionedId:"administer/backups/backup_methods/restic",id:"administer/backups/backup_methods/restic",title:"Restic",description:"Functionality",source:"@site/docs/02.administer/20.backups/10.backup_methods/02.restic.md",sourceDirName:"02.administer/20.backups/10.backup_methods",slug:"/administer/backups/backup_methods/restic",permalink:"/yunodocusaurus/docs/administer/backups/backup_methods/restic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/10.backup_methods/02.restic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Restic",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/restic"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"BorgBackup",permalink:"/yunodocusaurus/docs/administer/backups/backup_methods/borgbackup"},next:{title:"Archivist",permalink:"/yunodocusaurus/docs/administer/backups/backup_methods/archivist"}},s={},u=[{value:"Functionality",id:"functionality",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functionality"},"Functionality"),(0,n.kt)("p",null,"This application offers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"backup of data to remote storage (support for different types of storage)"),(0,n.kt)("li",{parentName:"ul"},"deduplication and compression of files, which makes it possible to keep many previous copies"),(0,n.kt)("li",{parentName:"ul"},"data encryption, which allows to store data at a third party")),(0,n.kt)("p",null,"The package also allows you to finely define the frequency and type of data to be backed up and integrates an email alert system in case of backup failure."))}d.isMDXComponent=!0}}]);