"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=p,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:p,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),p=(n(67294),n(3905));const r={title:"phpMyAdmin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_phpmyadmin"}},o=void 0,i={unversionedId:"applications/docs/app_phpmyadmin",id:"applications/docs/app_phpmyadmin",title:"phpMyAdmin",description:"phpmyadmin's logo",source:"@site/docs/04.applications/10.docs/app_phpmyadmin.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_phpmyadmin",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_phpmyadmin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_phpmyadmin.md",tags:[],version:"current",frontMatter:{title:"phpMyAdmin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_phpmyadmin"}},sidebar:"tutorialSidebar",previous:{title:"phpLDAPadmin",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_phpldapadmin"},next:{title:"phpSysInfo",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_phpsysinfo"}},s={},l=[{value:"Useful links",id:"useful-links",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,p.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"image://phpmyadmin_logo.svg?resize=,80",alt:"phpmyadmin's logo"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=phpmyadmin"},(0,p.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install phpMyAdmin with YunoHost"}))," ",(0,p.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/phpmyadmin"},(0,p.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/phpmyadmin.svg",alt:"Integration level"}))),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"phpMyAdmin")," is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB. Frequently used operations (managing databases, tables, columns, relations, indexes, users, permissions, etc.) can be performed via the user interface, while you still have the ability to directly execute any SQL statement."),(0,p.kt)("h2",{id:"useful-links"},"Useful links"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Website: ",(0,p.kt)("a",{parentName:"li",href:"https://www.phpmyadmin.net/"},"www.phpmyadmin.net")),(0,p.kt)("li",{parentName:"ul"},"Official documentation: ",(0,p.kt)("a",{parentName:"li",href:"https://www.phpmyadmin.net/docs/"},"www.phpmyadmin.net/docs")),(0,p.kt)("li",{parentName:"ul"},"Application software repository: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/phpmyadmin_ynh"},"github.com - YunoHost-Apps/phpmyadmin")),(0,p.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/phpmyadmin_ynh/issues"},"github.com - YunoHost-Apps/phpmyadmin/issues"))))}u.isMDXComponent=!0}}]);