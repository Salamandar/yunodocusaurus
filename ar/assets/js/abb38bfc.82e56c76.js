"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"Zap",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_zap"}},i=void 0,s={unversionedId:"applications/docs/app_zap",id:"applications/docs/app_zap",title:"Zap",description:"Installer Zap with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_zap.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_zap",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_zap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_zap.md",tags:[],version:"current",frontMatter:{title:"Zap",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_zap"}},sidebar:"tutorialSidebar",previous:{title:"Yunofav",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_yunofav"},next:{title:"Zerobin",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_zerobin"}},p={},l=[{value:"Unique Features of ZAP",id:"unique-features-of-zap",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Installation",id:"installation",level:3},{value:"Register a new domain and add it to YunoHost",id:"register-a-new-domain-and-add-it-to-yunohost",level:4},{value:"LDAP Admin user rights, logs and failed database updates",id:"ldap-admin-user-rights-logs-and-failed-database-updates",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=zap"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Zap with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/zap"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/zap.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Zap")," is an an ethical alternative to Fediverse that provides powerful features for creating interconnected websites featuring a decentralized identity, communications, and permissions framework built using common webserver technology."),(0,r.kt)("p",null,"Compatible with ",(0,r.kt)("strong",{parentName:"p"},"Mastodon"),", ",(0,r.kt)("strong",{parentName:"p"},"Pleroma"),", ",(0,r.kt)("strong",{parentName:"p"},"Pixelfed"),", ",(0,r.kt)("strong",{parentName:"p"},"Friendica"),", ",(0,r.kt)("strong",{parentName:"p"},"Hubzilla"),", ",(0,r.kt)("strong",{parentName:"p"},"Funkwhale"),", ",(0,r.kt)("strong",{parentName:"p"},"Peertube"),", ",(0,r.kt)("strong",{parentName:"p"},"Plume"),", ",(0,r.kt)("strong",{parentName:"p"},"WriteFreely")," and many, many more."),(0,r.kt)("h3",{id:"unique-features-of-zap"},"Unique Features of ZAP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Groups")," : public, private, and moderated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Events")," : Calendar and attendance; automatic birthday notifications for friends using this feature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud"),"storage : Built-in network file storage integrated with social networking access."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Editor")," : Supports both markdown and bbcode. Use either or both - if you want."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Share"),": Drag-and-drop a number of different things such as files, photos, webpages, maps, phone numbers to share- them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lists"),": Sometimes referred to as circles or aspects, this lets you define your own groups of related friends and- communicate with them as a private group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Extend")," : Change or upgrade your software functionality as desired by installing additional features from addons and- the free app collection.")),(0,r.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Before installing, read the ",(0,r.kt)("a",{parentName:"p",href:"https://codeberg.org/zot/zap/src/branch/release/install/INSTALL.txt"},"Zap installation instructions")," for important information about:"),(0,r.kt)("h4",{id:"register-a-new-domain-and-add-it-to-yunohost"},"Register a new domain and add it to YunoHost"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zap requires a dedicated domain, so obtain one and add it using the YunoHost admin panel. ",(0,r.kt)("strong",{parentName:"li"},"Domains -> Add domain"),". As Zap uses the full domain and is installed on the root, you can create a subdomain such as ",(0,r.kt)("inlineCode",{parentName:"li"},"zap.domain.tld"),". Don't forget to update your DNS if you manage them manually.")),(0,r.kt)("h3",{id:"ldap-admin-user-rights-logs-and-failed-database-updates"},"LDAP Admin user rights, logs and failed database updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"For admin rights"),": When installation is complete, you will need to visit your new hub's page and login with the ",(0,r.kt)("strong",{parentName:"p"},"admin account username")," which was entered at the time of installation process. You should then be able to create your first channel and have the ",(0,r.kt)("strong",{parentName:"p"},"admin rights")," for the hub.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"For normal YunoHost users :")," Normal LDAP users can login through Ldap authentication and create there channels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Failing to get admin rights :")," If the admin cannot access the admin settings at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://zap.example.com/admin")," or you want to grant admin rights to any other user(s) on the hub, then you have to ",(0,r.kt)("strong",{parentName:"p"},"manually add 4096")," to the ",(0,r.kt)("strong",{parentName:"p"},"account_roles")," under ",(0,r.kt)("strong",{parentName:"p"},"accounts")," for that user in the ",(0,r.kt)("strong",{parentName:"p"},"database through phpMYAdmin"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"For logs:")," Go to ",(0,r.kt)("strong",{parentName:"p"},"admin->logs")," and enter the file name ",(0,r.kt)("strong",{parentName:"p"},"php.log"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Failed Database after Upgrade:")," Some times databse upgrade fails after version upgrade. You can go to hub eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"https://zap.example.com/admin/dbsync/")," and check the numbers of failled update. These updates will have to be ran manually by ",(0,r.kt)("strong",{parentName:"p"},"phpMYAdmin"),"."))),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://codeberg.org/zot/zap"},"codeberg.org/zot/zap")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/zap_ynh"},"github.com - YunoHost-Apps/zap")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/zap_ynh/issues"},"github.com - YunoHost-Apps/zap/issues"))))}m.isMDXComponent=!0}}]);