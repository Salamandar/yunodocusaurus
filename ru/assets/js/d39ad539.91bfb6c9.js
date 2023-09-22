"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6840],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),u=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(c.Provider,{value:r},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,g=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return t?o.createElement(g,s(s({ref:r},p),{},{components:t})):o.createElement(g,s({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81039:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=t(87462),n=(t(67294),t(3905));const a={title:"Migrate or merge servers",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/migrate_or_merge_servers"},"page-toc":{active:!0,depth:3}},s=void 0,i={unversionedId:"administer/backups/migrate_or_merge_servers",id:"administer/backups/migrate_or_merge_servers",title:"Migrate or merge servers",description:"Migrate a server",source:"@site/docs/02.administer/20.backups/35.migrate_or_merge_servers.md",sourceDirName:"02.administer/20.backups",slug:"/administer/backups/migrate_or_merge_servers",permalink:"/yunodocusaurus/ru/docs/administer/backups/migrate_or_merge_servers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/35.migrate_or_merge_servers.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Migrate or merge servers",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/migrate_or_merge_servers"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"Custom backup methods",permalink:"/yunodocusaurus/ru/docs/administer/backups/custom_backup_methods"},next:{title:"Tutorials",permalink:"/yunodocusaurus/ru/docs/administer/tutorials/"}},c={},u=[{value:"Migrate a server",id:"migrate-a-server",level:2},{value:"Merge 2 YunoHost servers",id:"merge-2-yunohost-servers",level:2}],p={toc:u},m="wrapper";function l(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"migrate-a-server"},"Migrate a server"),(0,n.kt)("p",null,"If YunoHost's archive system is not convenient enough to migrate a server, you can also ",(0,n.kt)("a",{parentName:"p",href:"https://www.man42.net/blog/2017/07/how-to-migrate-a-debian-server/"},"migrate from server to server with rsync"),"."),(0,n.kt)("h2",{id:"merge-2-yunohost-servers"},"Merge 2 YunoHost servers"),(0,n.kt)("p",null,"If you merge 2 servers together, you will need to recreate the users, domains and permissions of the first server on the destination server. Then you can restore app by app. "),(0,n.kt)("p",null,"!! There is a limitation concerning apps that have the same ID. It will not be possible to restore them easily. Also be careful not to delete the eponymous app from the destination server :/"))}l.isMDXComponent=!0}}]);