"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9627],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var o=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,p=function(t,e){if(null==t)return{};var n,o,p={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var i=o.createContext({}),l=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=l(t.components);return o.createElement(i.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,p=t.mdxType,s=t.originalType,i=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=l(n),h=p,y=u["".concat(i,".").concat(h)]||u[h]||f[h]||s;return n?o.createElement(y,r(r({ref:e},c),{},{components:n})):o.createElement(y,r({ref:e},c))}));function y(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var s=n.length,r=new Array(s);r[0]=h;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a[u]="string"==typeof t?t:p,r[1]=a;for(var l=2;l<s;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78601:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),p=(n(67294),n(3905));const s={title:"phpSysInfo",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_phpsysinfo"}},r=void 0,a={unversionedId:"applications/docs/app_phpsysinfo",id:"applications/docs/app_phpsysinfo",title:"phpSysInfo",description:"phpsysinfo's logo",source:"@site/docs/04.applications/10.docs/app_phpsysinfo.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_phpsysinfo",permalink:"/yunodocusaurus/docs/applications/docs/app_phpsysinfo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_phpsysinfo.md",tags:[],version:"current",frontMatter:{title:"phpSysInfo",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_phpsysinfo"}},sidebar:"tutorialSidebar",previous:{title:"phpMyAdmin",permalink:"/yunodocusaurus/docs/applications/docs/app_phpmyadmin"},next:{title:"Pi-hole",permalink:"/yunodocusaurus/docs/applications/docs/app_pihole"}},i={},l=[{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function f(t){let{components:e,...n}=t;return(0,p.kt)(u,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"image://phpsysinfo_logo.png?height=80",alt:"phpsysinfo's logo"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=phpsysinfo"},(0,p.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install phpSysInfo with YunoHost"}))," ",(0,p.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/phpsysinfo"},(0,p.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/phpsysinfo.svg",alt:"Integration level"}))),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"phpSysInfo")," is a customizable PHP script that displays information about your system (CPU, RAM, disks)."),(0,p.kt)("h2",{id:"useful-links"},"Useful links"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Website: ",(0,p.kt)("a",{parentName:"li",href:"https://phpsysinfo.github.io/phpsysinfo/"},"phpsysinfo.github.io/phpsysinfo")),(0,p.kt)("li",{parentName:"ul"},"Demonstration: ",(0,p.kt)("a",{parentName:"li",href:"https://phpsysinfo.github.io/phpsysinfo/demos.html"},"Demo")),(0,p.kt)("li",{parentName:"ul"},"Application software repository: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/phpsysinfo_ynh"},"github.com - YunoHost-Apps/phpsysinfo")),(0,p.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/phpsysinfo_ynh/issues"},"github.com - YunoHost-Apps/phpsysinfo/issues"))))}f.isMDXComponent=!0}}]);