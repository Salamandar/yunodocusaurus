"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?o.createElement(g,s(s({ref:t},c),{},{components:a})):o.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={title:"Guacamole",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_guacamole"}},s=void 0,i={unversionedId:"applications/docs/app_guacamole",id:"applications/docs/app_guacamole",title:"Guacamole",description:"Installer Guacamole with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_guacamole.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_guacamole",permalink:"/yunodocusaurus/es/docs/applications/docs/app_guacamole",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_guacamole.md",tags:[],version:"current",frontMatter:{title:"Guacamole",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_guacamole"}},sidebar:"tutorialSidebar",previous:{title:"Grocy",permalink:"/yunodocusaurus/es/docs/applications/docs/app_grocy"},next:{title:"h5ai",permalink:"/yunodocusaurus/es/docs/applications/docs/app_h5ai"}},l={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=guacamole"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Guacamole with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/guacamole"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/guacamole.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Guacamole")," is a clientless remote desktop gateway. It supports standard protocols like VNC, RDP, and SSH."),(0,n.kt)("h3",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/guacamole_ynh/blob/master/doc/screenshots/screenshot1.jpg",alt:"Screenshots Guacamole"})),(0,n.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("h4",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The user that is configured as admin during install will have access to admin settings in the settings menu of the app (under the user menu). Configuration files are in ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/yunohost/guacamole/etc/guacamole")," (for the first install)."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://guacamole.apache.org/"},"guacamole.apache.org")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/guacamole_ynh"},"github.com - YunoHost-Apps/guacamole")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/guacamole_ynh/issues"},"github.com - YunoHost-Apps/guacamole/issues"))))}m.isMDXComponent=!0}}]);