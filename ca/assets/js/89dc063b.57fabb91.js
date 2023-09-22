"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=s,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:s,o[1]=p;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={title:"TeamPass",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_teampass"}},o=void 0,p={unversionedId:"applications/docs/app_teampass",id:"applications/docs/app_teampass",title:"TeamPass",description:"Installer TeamPass with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_teampass.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_teampass",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_teampass",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_teampass.md",tags:[],version:"current",frontMatter:{title:"TeamPass",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_teampass"}},sidebar:"tutorialSidebar",previous:{title:"Syncthing",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_syncthing"},next:{title:"The Lounge",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_thelounge"}},i={},c=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=teampass"},(0,s.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer TeamPass with YunoHost"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/teampass"},(0,s.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/teampass.svg",alt:"Integration level"}))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"TeamPass")," is a Passwords Manager dedicated for managing passwords in a collaborative way by sharing them among team members.\nTeampass offers a large set of features permitting to manage your passwords and related data in an organized way in respect to the access rights defined for each users."),(0,s.kt)("h3",{id:"screenshots"},"Screenshots"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/teampass_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshot of Teampass"})),(0,s.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Use the admin panel of your teampass to configure this app.",(0,s.kt)("br",{parentName:"p"}),"\n","To find the admin panel, use the login 'admin' and the password choose during the installation."),(0,s.kt)("h2",{id:"useful-links"},"Useful links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Website: ",(0,s.kt)("a",{parentName:"li",href:"https://teampass.net/"},"teampass.net")),(0,s.kt)("li",{parentName:"ul"},"Application software repository: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/teampass_ynh"},"github.com - YunoHost-Apps/teampass")),(0,s.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/teampass_ynh/issues"},"github.com - YunoHost-Apps/teampass/issues"))))}m.isMDXComponent=!0}}]);