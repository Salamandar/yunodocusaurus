"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Osada",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_osada"}},s=void 0,i={unversionedId:"applications/docs/app_osada",id:"applications/docs/app_osada",title:"Osada",description:"Installer Osada with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_osada.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_osada",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_osada",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_osada.md",tags:[],version:"current",frontMatter:{title:"Osada",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_osada"}},sidebar:"tutorialSidebar",previous:{title:"OpenTracker",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_opentracker"},next:{title:"osTicket",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_osticket"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"This app claims following features:",id:"this-app-claims-following-features",level:3},{value:"Ldap Admin user rights, logs and failed database updates",id:"ldap-admin-user-rights-logs-and-failed-database-updates",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=osada"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Osada with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/osada"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/osada.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Osada")," uses ",(0,o.kt)("strong",{parentName:"p"},"Zot6 protocol")," which is next version of ",(0,o.kt)("strong",{parentName:"p"},"zot5 protocol"),". Osada has native support for the ",(0,o.kt)("strong",{parentName:"p"},"ActivityPub protocol")," (W3C standard) as well as the more advanced features. It can inter-operate with other social networking applications and projects in either of these spaces, including ",(0,o.kt)("strong",{parentName:"p"},"Mastodon, Pleroma, Pixelfed, PeerTube, Funkwhale, Zap, Friendica, Hubzilla,")," and many more."),(0,o.kt)("h3",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/osada_ynh/blob/master/doc/screenshots/comment_on_posts.gif",alt:"Screenshot of Osada"})),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h3",{id:"this-app-claims-following-features"},"This app claims following features:"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","LDAP integration"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Multi-instance"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Adeed php.log in the root folder for debugging PHP, with logrotate applied on it (can be accesssed by ",(0,o.kt)("strong",{parentName:"li"},"admin->logs")," and entering the ",(0,o.kt)("strong",{parentName:"li"},"php.log"),")."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Fail2Ban"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Option to choose between ",(0,o.kt)("strong",{parentName:"li"},"Mysql")," and ",(0,o.kt)("strong",{parentName:"li"},"PostgreSQL")," for the Osada")),(0,o.kt)("h3",{id:"ldap-admin-user-rights-logs-and-failed-database-updates"},"Ldap Admin user rights, logs and failed database updates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For admin rights"),": When installation is complete, you will need to visit your new hub's page and login with the ",(0,o.kt)("strong",{parentName:"p"},"admin account username")," which was entered at the time of installation process. You should then be able to create your first channel and have the ",(0,o.kt)("strong",{parentName:"p"},"admin rights")," for the hub.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For normal YunoHost users"),": Normal LDAP users can login through LDAP authentication and create there channels.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Failing to get admin rights"),": If the admin cannot access the admin settings at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://osada.example.com/admin")," then you have to ",(0,o.kt)("strong",{parentName:"p"},"manually add 4096")," to the ",(0,o.kt)("strong",{parentName:"p"},"account_roles")," under ",(0,o.kt)("strong",{parentName:"p"},"accounts")," for that user in the ",(0,o.kt)("strong",{parentName:"p"},"database through phpMyAdmin"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For logs"),": Go to ",(0,o.kt)("strong",{parentName:"p"},"admin->logs")," and enter the file name ",(0,o.kt)("strong",{parentName:"p"},"php.log"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Failed Database after Upgrade:")," Some times databse upgrade fails after version upgrade. You can go to hub eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://osada.example.com/admin/dbsync/")," and check the numbers of failled update. These updates will have to be ran manually by ",(0,o.kt)("strong",{parentName:"p"},"phpMyAdmin"),"."))),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://codeberg.org/zot/osada"},"codeberg.org/zot/osada")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/osada_ynh"},"github.com - YunoHost-Apps/osada")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/osada_ynh/issues"},"github.com - YunoHost-Apps/osada/issues"))))}u.isMDXComponent=!0}}]);