"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[711],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>b});var r=i(67294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,r,o=function(t,e){if(null==t)return{};var i,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)i=n[r],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)i=n[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var i=t.components,o=t.mdxType,n=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=p(i),d=o,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return i?r.createElement(b,a(a({ref:e},l),{},{components:i})):r.createElement(b,a({ref:e},l))}));function b(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=i.length,a=new Array(n);a[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:o,a[1]=s;for(var p=2;p<n;p++)a[p]=i[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},85822:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=i(87462),o=(i(67294),i(3905));const n={title:"BicBucStriim",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_bicbucstriim"}},a=void 0,s={unversionedId:"applications/docs/app_bicbucstriim",id:"applications/docs/app_bicbucstriim",title:"BicBucStriim",description:"Install BicBucStriim with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_bicbucstriim.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_bicbucstriim",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_bicbucstriim",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_bicbucstriim.md",tags:[],version:"current",frontMatter:{title:"BicBucStriim",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_bicbucstriim"}},sidebar:"tutorialSidebar",previous:{title:"Bibliogram",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_bibliogram"},next:{title:"BlogoText",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_blogotext"}},c={},p=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:p},u="wrapper";function m(t){let{components:e,...i}=t;return(0,o.kt)(u,(0,r.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=bicbucstriim"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Install BicBucStriim with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/bicbucstriim"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/bicbucstriim.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"BicBucStriim")," streams books, digital books. It was primarily designed to fill a gap in the functionality of NAS devices that provide access to music, videos and photos -- but not books. BicBucStriim fills this gap and provides web-based access to your e-book collection."),(0,o.kt)("h2",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("p",null,"BicBucStriim is a simple PHP application that runs in the Apache/PHP environment provided by the NAS (or any other server). It assumes that you manage your e-book collection with Calibre. The application reads the Calibre data and publishes it in HTML form. To access the e-book catalog you simply point your ebook reader to your NAS, select one of your e-books and download it."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"A freshly installed BicBucStriim installation will show the login page. The initial login information for the administrator is\nuser name: admin\npassword : admin"),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"http://projekte.textmulch.de/bicbucstriim/"},"projekte.textmulch.de/bicbucstriim/")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/bicbucstriim_ynh"},"github.com - YunoHost-Apps/bicbucstriim")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/bicbucstriim_ynh/issues"},"github.com - YunoHost-Apps/bicbucstriim/issues"))))}m.isMDXComponent=!0}}]);