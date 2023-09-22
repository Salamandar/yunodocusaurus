"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5618],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(a),h=o,m=l["".concat(c,".").concat(h)]||l[h]||d[h]||n;return a?r.createElement(m,i(i({ref:e},u),{},{components:a})):r.createElement(m,i({ref:e},u))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14604:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"Archivist",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_archivist"}},i=void 0,s={unversionedId:"applications/docs/app_archivist",id:"applications/docs/app_archivist",title:"Archivist",description:"Package",source:"@site/docs/04.applications/10.docs/app_archivist.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_archivist",permalink:"/yunodocusaurus/docs/applications/docs/app_archivist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_archivist.md",tags:[],version:"current",frontMatter:{title:"Archivist",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_archivist"}},sidebar:"tutorialSidebar",previous:{title:"Anfora",permalink:"/yunodocusaurus/docs/applications/docs/app_anfora"},next:{title:"Backdrop",permalink:"/yunodocusaurus/docs/applications/docs/app_backdrop"}},c={},p=[{value:"Useful links",id:"useful-links",level:2}],u={toc:p},l="wrapper";function d(t){let{components:e,...a}=t;return(0,o.kt)(l,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://yunohost_package.png?height=80",alt:"Package"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=archivist"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install archivist with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/archivist"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/archivist.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"Archivist is an automatic backup system for your server. It is able to makes backups of your YunoHost core and your apps by using the YunoHost backup command. It can also makes backups of specified directories.\nYour backups can be send to many other places, local or distant. Archivist is automatically launched periodicaly to update your backups and send the modifications to the other places."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/maniackcrudelis/archivist"},"github.com - maniackcrudelis/archivist")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/archivist_ynh"},"github.com - YunoHost-Apps/archivist")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/archivist_ynh/issues"},"github.com - YunoHost-Apps/archivist/issues"))))}d.isMDXComponent=!0}}]);