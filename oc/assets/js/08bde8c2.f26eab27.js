"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"squid3",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_squid3"}},i=void 0,s={unversionedId:"applications/docs/app_squid3",id:"applications/docs/app_squid3",title:"squid3",description:"Installer squid3 with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_squid3.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_squid3",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_squid3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_squid3.md",tags:[],version:"current",frontMatter:{title:"squid3",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_squid3"}},sidebar:"tutorialSidebar",previous:{title:"SPIP",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_spip"},next:{title:"Streama",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_streama"}},p={},l=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Instruction",id:"instruction",level:3},{value:"Configure Squid3 for Firefox",id:"configure-squid3-for-firefox",level:3},{value:"Special Thanks",id:"special-thanks",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=squid3"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer squid3 with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/squid3"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/squid3.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"squid3")," is a caching proxy for the Web supporting HTTP, HTTPS, FTP, and more. It reduces bandwidth and improves response times by caching and reusing frequently-requested web pages. Squid has extensive access controls and makes a great server accelerator."),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("h3",{id:"instruction"},"Instruction"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The app can not be ",(0,a.kt)("strong",{parentName:"li"},"multi-instance"),"(can't be installed many times on same server)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LDAP")," is there(Registered users can use there login username and password to browser internet through the proxy)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Port number")," used by the proxy will be sent to the ",(0,a.kt)("strong",{parentName:"li"},"admin mail")," of the Yunohost server."),(0,a.kt)("li",{parentName:"ol"},"The username and password is ",(0,a.kt)("strong",{parentName:"li"},"asked twice")," first time you start the browser(I have no idea why this happens).")),(0,a.kt)("h3",{id:"configure-squid3-for-firefox"},"Configure Squid3 for Firefox"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Preferences -> General -> network proxy")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Manual proxy configuration")),(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("strong",{parentName:"li"},"HTTP Proxy")," enter your ",(0,a.kt)("strong",{parentName:"li"},"domain name or server IP")," and in ",(0,a.kt)("strong",{parentName:"li"},"Port")," enter the port sent to your ",(0,a.kt)("strong",{parentName:"li"},"admin email"),"."),(0,a.kt)("li",{parentName:"ol"},"Check ",(0,a.kt)("strong",{parentName:"li"},"Use this proxy server for all protocols"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"No Proxy for")," enter this ",(0,a.kt)("strong",{parentName:"li"},"localhost, 127.0.0.1"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Save and restart")," the Firefox.")),(0,a.kt)("p",null,"If you try Squid 3 in any other way please write the instruction in the issue so that I can add it to the readme"),(0,a.kt)("h3",{id:"special-thanks"},"Special Thanks"),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("strong",{parentName:"p"},"Fred")," to write the instruction to configure Squid for YunoHost. French: ",(0,a.kt)("a",{parentName:"p",href:"https://memo-linux.com/installer-squid3-sur-un-serveur-yunohost/"},"https://memo-linux.com/installer-squid3-sur-un-serveur-yunohost/")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"http://www.squid-cache.org/"},"squid-cache.org")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/squid3_ynh"},"github.com - YunoHost-Apps/squid3")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/squid3_ynh/issues"},"github.com - YunoHost-Apps/squid3/issues"))))}d.isMDXComponent=!0}}]);