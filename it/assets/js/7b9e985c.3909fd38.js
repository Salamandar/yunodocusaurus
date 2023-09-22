"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7226],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,o(o({ref:e},u),{},{components:a})):n.createElement(h,o({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},53804:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Jitsi",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_jitsi"}},o=void 0,l={unversionedId:"applications/docs/app_jitsi",id:"applications/docs/app_jitsi",title:"Jitsi",description:"Jitsi's logo",source:"@site/docs/04.applications/10.docs/app_jitsi.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_jitsi",permalink:"/yunodocusaurus/it/docs/applications/docs/app_jitsi",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_jitsi.md",tags:[],version:"current",frontMatter:{title:"Jitsi",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_jitsi"}},sidebar:"tutorialSidebar",previous:{title:"Jirafeau",permalink:"/yunodocusaurus/it/docs/applications/docs/app_jirafeau"},next:{title:"JupyterLab",permalink:"/yunodocusaurus/it/docs/applications/docs/app_jupyterlab"}},s={},p=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Customer applications",id:"customer-applications",level:2},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://jitsi_logo.svg?resize=80",alt:"Jitsi's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=jitsi"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install jitsi with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/jitsi"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/jitsi.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Jitsi Meet is an open source software (Apache) that offers high quality, secure and scalable video conferencing. Options for screen sharing, live chat, speech requests, as well as settings for video quality are offered to facilitate group meetings."),(0,r.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,r.kt)("p",null,"Jitsi for YunoHost for now as some limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can only be used using Chrome/Chromium (like ",(0,r.kt)("a",{parentName:"li",href:"https://www.srware.net/iron/"},"Iron"),") or ",(0,r.kt)("a",{parentName:"li",href:"https://www.mozilla.org/fr/firefox/browsers/"},"Firefox")," (since version 76)"),(0,r.kt)("li",{parentName:"ul"},"Is limited to two participants")),(0,r.kt)("h2",{id:"customer-applications"},"Customer applications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Application name"),(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Multi-account"),(0,r.kt)("th",{parentName:"tr",align:null},"Other supported networks"),(0,r.kt)("th",{parentName:"tr",align:null},"Play Store"),(0,r.kt)("th",{parentName:"tr",align:null},"F-Droid"),(0,r.kt)("th",{parentName:"tr",align:null},"Apple Store"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Other")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jitsi Meet"),(0,r.kt)("td",{parentName:"tr",align:null},"Android - iOS"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=org.jitsi.meet"},"Jitsi Meet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://f-droid.org/en/packages/org.jitsi.meet/"},"Jitsi Meet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://apps.apple.com/us/app/jitsi-meet/id1165103905"},"Jitsi Meet")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jitsi Meet Electron"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows - macOS - GNU/Linux"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron"},"Download"))))),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website : ",(0,r.kt)("a",{parentName:"li",href:"https://jitsi.org"},"jitsi.org")),(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://jitsi.org/user-faq/"},"jitsi.org/user-faq")),(0,r.kt)("li",{parentName:"ul"},"Application software repository:: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/jitsi_ynh"},"github.com - YunoHost-Apps/jitsi")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/jitsi_ynh/issues"},"github.com - YunoHost-Apps/jitsi/issues"))))}m.isMDXComponent=!0}}]);