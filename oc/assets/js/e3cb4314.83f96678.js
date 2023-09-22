"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7154],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>f});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var i=a.createContext({}),c=function(t){var e=a.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):p(p({},e),t)),o},l=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=c(o),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return o?a.createElement(f,p(p({ref:e},l),{},{components:o})):a.createElement(f,p({ref:e},l))}));function f(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,p=new Array(r);p[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[u]="string"==typeof t?t:n,p[1]=s;for(var c=2;c<r;c++)p[c]=o[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},82801:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const r={title:"Ecko",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ecko"}},p=void 0,s={unversionedId:"applications/docs/app_ecko",id:"applications/docs/app_ecko",title:"Ecko",description:"Ecko's logo",source:"@site/docs/04.applications/10.docs/app_ecko.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_ecko",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_ecko",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_ecko.md",tags:[],version:"current",frontMatter:{title:"Ecko",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ecko"}},sidebar:"tutorialSidebar",previous:{title:"Easy!Appointments",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_easyappointments"},next:{title:"Element",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_element"}},i={},c=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Compatible Apps",id:"compatible-apps",level:2}],l={toc:c},u="wrapper";function m(t){let{components:e,...o}=t;return(0,n.kt)(u,(0,a.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://ecko_logo.jpg",alt:"Ecko's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=ecko"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install APPLICATION with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/ecko"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/ecko.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"Ecko is community-driven fork of Mastodon's federated social networking software that is managed by Magic Stone using the Collaborative Code Construction Contract (C4). See the website for more information about Magic Stone and C4."),(0,n.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,n.kt)("p",null,"Some configuration parameters such as post-length and poll options can only be updated via command line and therefore require root command line access to the YunoHost instance to modify."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Having a problem? Create an issue at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ecko_ynh/issues"},"github.com -YunoHost-Apps/ecko_ynh/issues")),(0,n.kt)("li",{parentName:"ul"},"YunoHost application package repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ecko_ynh"},"github.com - YunoHost-Apps/Ecko","_","ynh")),(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://magicstone.dev/"},"magicstone.dev"))),(0,n.kt)("h2",{id:"compatible-apps"},"Compatible Apps"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tusky.app/"},"Tusky")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://twidere.com/"},"Twidere")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://fedilab.app/"},"Fedilab")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974"},"Mastodon for iOS")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/mast-for-mastodon/id1437429129"},"Mast for Mastodon")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200"},"Mercury for Mastodon")))}m.isMDXComponent=!0}}]);