"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3128],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=o.createContext({}),s=function(t){var e=o.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||r;return a?o.createElement(m,i(i({ref:e},c),{},{components:a})):o.createElement(m,i({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[u]="string"==typeof t?t:n,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5851:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=a(87462),n=(a(67294),a(3905));const r={title:"Gotify",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gotify"}},i=void 0,p={unversionedId:"applications/docs/app_gotify",id:"applications/docs/app_gotify",title:"Gotify",description:"Gotify's logo",source:"@site/docs/04.applications/10.docs/app_gotify.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_gotify",permalink:"/yunodocusaurus/de/docs/applications/docs/app_gotify",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_gotify.md",tags:[],version:"current",frontMatter:{title:"Gotify",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gotify"}},sidebar:"tutorialSidebar",previous:{title:"Gogs",permalink:"/yunodocusaurus/de/docs/applications/docs/app_gogs"},next:{title:"Grafana",permalink:"/yunodocusaurus/de/docs/applications/docs/app_grafana"}},l={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Customer applications",id:"customer-applications",level:2},{value:"Useful links",id:"useful-links",level:2}],c={toc:s},u="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://gotify_logo.png?width=80",alt:"Gotify's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=gotify"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Gotify with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/gotify"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/gotify.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"A simple server for sending and receiving messages."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Edit config.yml file via SSH."),(0,n.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,n.kt)("p",null,"Require dedicated domain like gotify.domain.tld.\nNo LDAP support (blocked until Gotify core upstream implements it)"),(0,n.kt)("h2",{id:"customer-applications"},"Customer applications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Application name\xb9"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Platform"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Multi-account"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Play Store"),(0,n.kt)("th",{parentName:"tr",align:"center"},"F-Droid"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Apple Store"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Gotify (of)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Android"),(0,n.kt)("td",{parentName:"tr",align:"center"},"?"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=com.github.gotify"},"play.google.com - Gotify")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://f-droid.org/de/packages/com.github.gotify/"},"f-droid.org - Gotify")),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\xb9 (of) : Official / (un) : Unofficial")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://gotify.net/"},"gotify.net")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://gotify.net/docs/index"},"https://gotify.net/docs/index")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gotify_ynh"},"github.com - YunoHost-Apps/gotify")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gotify_ynh/issues"},"github.com - YunoHost-Apps/gotify/issues"))))}f.isMDXComponent=!0}}]);