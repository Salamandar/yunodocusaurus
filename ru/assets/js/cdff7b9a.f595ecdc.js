"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Web server with NGINX",template:"docs",taxonomy:{category:"docs"},routes:{default:"/web_server"}},i=void 0,s={unversionedId:"administer/admin_guide/nginx",id:"administer/admin_guide/nginx",title:"Web server with NGINX",description:"YunoHost ships NGINX, a web server and reverse proxy software. That's the keystone that enables your apps and YunoHost services to be accessible online.",source:"@site/docs/02.administer/15.admin_guide/35.nginx.md",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/nginx",permalink:"/yunodocusaurus/ru/docs/administer/admin_guide/nginx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/35.nginx.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Web server with NGINX",template:"docs",taxonomy:{category:"docs"},routes:{default:"/web_server"}},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/yunodocusaurus/ru/docs/administer/admin_guide/apps"},next:{title:"Chat with XMPP",permalink:"/yunodocusaurus/ru/docs/administer/admin_guide/xmpp"}},p={},l=[{value:"Manually installing apps, or exposing existing apps",id:"manually-installing-apps-or-exposing-existing-apps",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"YunoHost ships ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"NGINX"),", a web server and reverse proxy software. That's the keystone that enables your apps and YunoHost services to be accessible online."),(0,a.kt)("p",null,"Most of the web applications installed with YunoHost will automatically have their own configuration file created for NGINX."),(0,a.kt)("h2",{id:"manually-installing-apps-or-exposing-existing-apps"},"Manually installing apps, or exposing existing apps"),(0,a.kt)("p",null,"Generally, you should refrain from manually tinkering and installing apps, except if you are sure they will not interfere with your server. YunoHost proposes two generic apps to help you out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you already have a website ready to be deployed, consider using a ",(0,a.kt)("strong",{parentName:"p"},"Custom Webapp"),". It allows you to easily setup a directory into which you can upload your HTML, PHP, CSS, JS files with SFTP, and a database if needed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you want to use YunoHost as a reverse proxy, i.e. serve an app from another server or an internal web server (think NodeJS, Ruby, Python, ...), you can use the ",(0,a.kt)("strong",{parentName:"p"},"Redirect app")," in proxy mode.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"Redirect app")," can also simply run in redirect mode, for example to create shortcuts for your users in their SSO page, or redirect ",(0,a.kt)("inlineCode",{parentName:"p"},"www.yourdomain.tld")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"yourdomain.tld"),"."))),(0,a.kt)("p",null,"For more information on these apps, and for more application use cases, have a look to the ",(0,a.kt)("a",{parentName:"p",href:"/tutorials"},"Tutorials")," section."),(0,a.kt)("p",null,"!! Do not try to install Apache or other public web servers. This will break your system."))}d.isMDXComponent=!0}}]);