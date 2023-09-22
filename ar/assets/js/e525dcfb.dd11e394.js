"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},l),{},{components:n})):a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Time Machine",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_timemachine"}},o=void 0,s={unversionedId:"applications/docs/app_timemachine",id:"applications/docs/app_timemachine",title:"Time Machine",description:"Install Time Machine with YunoHost",source:"@site/docs/04.applications/10.docs/app_timemachine.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_timemachine",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_timemachine",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_timemachine.md",tags:[],version:"current",frontMatter:{title:"Time Machine",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_timemachine"}},sidebar:"tutorialSidebar",previous:{title:"TiddlyWiki",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_tiddlywiki"},next:{title:"Transmission",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_transmission"}},p={},c=[{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=timemachine"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Time Machine with YunoHost"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/timemachine"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/timemachine.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time Machine")," creates a Samba Network Drive on your server which can be used by your Mac to create Time Machine backups. The local instance is automatically discovered in Time Machine and shows up as ",(0,r.kt)("inlineCode",{parentName:"p"},"*.local")),(0,r.kt)("p",null,"To setup the drive so that it can be used over the internet, simply use the connection string sent to the admin user's email to connect via Finder (",(0,r.kt)("inlineCode",{parentName:"p"},"Command + K")," in Finder). Then the drive will show up as your domain/IP in Time Machine's Backup Disk list."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/timemachine_ynh"},"https://github.com/YunoHost-Apps/timemachine_ynh")),(0,r.kt)("li",{parentName:"ul"},"Report a bug: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/timemachine_ynh/issues"},"https://github.com/YunoHost-Apps/timemachine_ynh/issues"))))}m.isMDXComponent=!0}}]);