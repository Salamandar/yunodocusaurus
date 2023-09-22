"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4363],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=o.createContext({}),p=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(a),h=r,b=c["".concat(s,".").concat(h)]||c[h]||d[h]||n;return a?o.createElement(b,i(i({ref:e},u),{},{components:a})):o.createElement(b,i({ref:e},u))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},32540:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));const n={title:"Hubzilla",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_hubzilla"}},i=void 0,l={unversionedId:"applications/docs/app_hubzilla",id:"applications/docs/app_hubzilla",title:"Hubzilla",description:"Hubzilla's logo",source:"@site/docs/04.applications/10.docs/app_hubzilla.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_hubzilla",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_hubzilla",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_hubzilla.md",tags:[],version:"current",frontMatter:{title:"Hubzilla",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_hubzilla"}},sidebar:"tutorialSidebar",previous:{title:"Horde",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_horde"},next:{title:"IFM",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_ifm"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,o.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://hubzilla_logo.png?width=80",alt:"Hubzilla's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=hubzilla"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Hubzilla with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/hubzilla"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/hubzilla.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Hubzilla is a social networking platform built with control of your privacy at center stage. Your online communications can be as public as you wish or as private as you require. Private conversations, private photos, private videos. Your media isn't hidden behind an obscure URL which can be guessed, it is protected by state-of-the-art cross-domain authentication. What this all means for you: less drama."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Hubzilla requires a dedicated domain like ",(0,r.kt)("inlineCode",{parentName:"p"},"hubzilla.domain.tld"),"."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://zotlabs.org/page/hubzilla/hubzilla-project"},"zotlabs.org - hubzilla/hubzilla-project")),(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://zotlabs.org/help/en/about/about"},"zotlabs.org - help/about")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/hubzilla_ynh"},"github.com - YunoHost-Apps/hubzilla")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/hubzilla_ynh/issues"},"github.com - YunoHost-Apps/hubzilla/issues"))))}d.isMDXComponent=!0}}]);