"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2462],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(o),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},50238:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(87462),a=(o(67294),o(3905));const r={title:"NocoDB",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nocodb"}},s=void 0,i={unversionedId:"applications/docs/app_nocodb",id:"applications/docs/app_nocodb",title:"NocoDB",description:"Installer NocoDB with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_nocodb.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_nocodb",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_nocodb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_nocodb.md",tags:[],version:"current",frontMatter:{title:"NocoDB",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nocodb"}},sidebar:"tutorialSidebar",previous:{title:"Noalyss",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_noalyss"},next:{title:"NodeBB",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_nodebb"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=nocodb"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer NocoDB with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/nocodb"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/nocodb.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NocoDB")," is an open source NoCode platform that turns any database into a smart spreadsheet, alternative to Airtable."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to new/existing SQL database and turn them into spreadsheet."),(0,a.kt)("li",{parentName:"ul"},"Create grid view, gallery view, kanban view and calendar view on top your data"),(0,a.kt)("li",{parentName:"ul"},"Search, sort, filter columns and rows with ultra ease"),(0,a.kt)("li",{parentName:"ul"},"Invite your team with fine grained Access Control"),(0,a.kt)("li",{parentName:"ul"},"Share views publicly and also with password protection"),(0,a.kt)("li",{parentName:"ul"},"Provides REST & GraphQL APIs with Swagger & GraphiQL GUI")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(from NocoDB's website)")),(0,a.kt)("h3",{id:"screenshots"},"Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/nocodb_ynh/blob/master/doc/screenshots/example.png",alt:"Screenshot of NocoDB"})),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("p",null,"NocoDB has its own authentication system which does not rely on YunoHost's SSO or LDAP server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can make it public, especially if you need its API."),(0,a.kt)("li",{parentName:"ul"},"You will need to create the first admin right after installation.")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://www.nocodb.com/"},"nocodb.com")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://www.nocodb.com/demos"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nocodb_ynh"},"github.com - YunoHost-Apps/nocodb")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nocodb_ynh/issues"},"github.com - YunoHost-Apps/nocodb/issues"))))}d.isMDXComponent=!0}}]);