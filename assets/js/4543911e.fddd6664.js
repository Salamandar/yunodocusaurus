"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1664],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),l=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=l(n),y=r,d=c["".concat(p,".").concat(y)]||c[y]||m[y]||o;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72150:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Wetty",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wetty"}},i=void 0,s={unversionedId:"applications/docs/app_wetty",id:"applications/docs/app_wetty",title:"Wetty",description:"Installer Wetty with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_wetty.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_wetty",permalink:"/yunodocusaurus/docs/applications/docs/app_wetty",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_wetty.md",tags:[],version:"current",frontMatter:{title:"Wetty",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wetty"}},sidebar:"docsSidebar",previous:{title:"WemaWema",permalink:"/yunodocusaurus/docs/applications/docs/app_wemawema"},next:{title:"Wiki.js",permalink:"/yunodocusaurus/docs/applications/docs/app_wikijs"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=wetty"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Wetty with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/wetty"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/wetty.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wetty")," is a Terminal application over HTTP and HTTPS. WeTTy is an alternative to ajaxterm and anyterm but much better than them because WeTTy uses xterm.js which is a full fledged implementation of terminal emulation written entirely in JavaScript. WeTTy uses websockets rather then Ajax and hence better response time."),(0,r.kt)("h3",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/wetty_ynh/blob/master/doc/screenshots/terminal.png",alt:"Screenshot of Wetty"})),(0,r.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"There is few configuration in Wetty:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Startup config (listen port, URL path, SSH host) is contained in the systemd service file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User interface configuration is done through the web GUI itself.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Is LDAP and HTTP authentication supported? ",(0,r.kt)("strong",{parentName:"p"},"No")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You need to manually log in."),(0,r.kt)("li",{parentName:"ul"},"You can log in as a specific user using ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<host>/wetty/ssh/<username>")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can specify at install if Wetty should be visible by users not logged into YunoHost.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can't use ssh key authentication."))),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/butlerx/wetty"},"github.com/butlerx/wetty")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wetty_ynh"},"github.com - YunoHost-Apps/wetty")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wetty_ynh/issues"},"github.com - YunoHost-Apps/wetty/issues"))))}m.isMDXComponent=!0}}]);