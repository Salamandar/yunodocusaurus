"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2462],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=l(o),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(h,s(s({ref:e},c),{},{components:o})):n.createElement(h,s({ref:e},c))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:a,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},50238:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(87462),a=(o(67294),o(3905));const r={title:"NocoDB",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nocodb"}},s=void 0,i={unversionedId:"applications/docs/app_nocodb",id:"applications/docs/app_nocodb",title:"NocoDB",description:"Installer NocoDB with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_nocodb.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_nocodb",permalink:"/yunodocusaurus/it/docs/applications/docs/app_nocodb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_nocodb.md",tags:[],version:"current",frontMatter:{title:"NocoDB",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nocodb"}},sidebar:"tutorialSidebar",previous:{title:"Noalyss",permalink:"/yunodocusaurus/it/docs/applications/docs/app_noalyss"},next:{title:"NodeBB",permalink:"/yunodocusaurus/it/docs/applications/docs/app_nodebb"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function d(t){let{components:e,...o}=t;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=nocodb"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer NocoDB with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/nocodb"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/nocodb.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NocoDB")," is an open source NoCode platform that turns any database into a smart spreadsheet, alternative to Airtable."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to new/existing SQL database and turn them into spreadsheet."),(0,a.kt)("li",{parentName:"ul"},"Create grid view, gallery view, kanban view and calendar view on top your data"),(0,a.kt)("li",{parentName:"ul"},"Search, sort, filter columns and rows with ultra ease"),(0,a.kt)("li",{parentName:"ul"},"Invite your team with fine grained Access Control"),(0,a.kt)("li",{parentName:"ul"},"Share views publicly and also with password protection"),(0,a.kt)("li",{parentName:"ul"},"Provides REST & GraphQL APIs with Swagger & GraphiQL GUI")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(from NocoDB's website)")),(0,a.kt)("h3",{id:"screenshots"},"Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/nocodb_ynh/blob/master/doc/screenshots/example.png",alt:"Screenshot of NocoDB"})),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("p",null,"NocoDB has its own authentication system which does not rely on YunoHost's SSO or LDAP server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can make it public, especially if you need its API."),(0,a.kt)("li",{parentName:"ul"},"You will need to create the first admin right after installation.")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://www.nocodb.com/"},"nocodb.com")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://www.nocodb.com/demos"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nocodb_ynh"},"github.com - YunoHost-Apps/nocodb")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nocodb_ynh/issues"},"github.com - YunoHost-Apps/nocodb/issues"))))}d.isMDXComponent=!0}}]);