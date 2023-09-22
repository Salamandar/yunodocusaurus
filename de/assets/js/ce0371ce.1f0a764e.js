"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6595],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var o=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=o.createContext({}),p=function(t){var e=o.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return o.createElement(i.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(r),m=a,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||n;return r?o.createElement(b,l(l({ref:e},u),{},{components:r})):o.createElement(b,l({ref:e},u))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[c]="string"==typeof t?t:a,l[1]=s;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4865:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={title:"Nullboard",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nullboard"}},l=void 0,s={unversionedId:"applications/docs/app_nullboard",id:"applications/docs/app_nullboard",title:"Nullboard",description:"Installer Nullboard with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_nullboard.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_nullboard",permalink:"/yunodocusaurus/de/docs/applications/docs/app_nullboard",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_nullboard.md",tags:[],version:"current",frontMatter:{title:"Nullboard",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nullboard"}},sidebar:"tutorialSidebar",previous:{title:"NodeBB",permalink:"/yunodocusaurus/de/docs/applications/docs/app_nodebb"},next:{title:"Omeka S",permalink:"/yunodocusaurus/de/docs/applications/docs/app_omeka-s"}},i={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=nullboard"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Nullboard with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/nullboard"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/nullboard.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Nullboard")," is a minimalist kanban board, focused on compactness and readability."),(0,a.kt)("h3",{id:"screenshots"},"Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/nullboard_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshots of Nullboard"})),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("h3",{id:"limitations"},"Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f Uses localStorage for storing boards/lists/notes, so be careful around clearing your cache.")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://nullboard.io/"},"nullboard.io")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://nullboard.io/preview"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nullboard_ynh"},"github.com - YunoHost-Apps/nullboard")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/nullboard_ynh/issues"},"github.com - YunoHost-Apps/nullboard/issues"))))}d.isMDXComponent=!0}}]);