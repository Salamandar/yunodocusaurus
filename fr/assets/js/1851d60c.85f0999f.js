"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"PluXml",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_pluxml"}},l=void 0,p={unversionedId:"applications/docs/app_pluxml",id:"applications/docs/app_pluxml",title:"PluXml",description:"PluXmllogo",source:"@site/docs/04.applications/10.docs/app_pluxml.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_pluxml",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_pluxml",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_pluxml.md",tags:[],version:"current",frontMatter:{title:"PluXml",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_pluxml"}},sidebar:"tutorialSidebar",previous:{title:"Plume",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_plume"},next:{title:"PrettyNoemie CMS",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_prettynoemiecms"}},i={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Connecting to the administration interface",id:"connecting-to-the-administration-interface",level:3},{value:"Overview",id:"overview",level:2},{value:"Plugins and themes",id:"plugins-and-themes",level:2},{value:"Backup",id:"backup",level:2},{value:"Useful links",id:"useful-links",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://PluXml_logo.png",alt:"PluXml_logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=pluxml"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install PluXml with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/pluxml"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/pluxml.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"PluXml is a blog/CMS storing data in XML and not in a SQL database."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"connecting-to-the-administration-interface"},"Connecting to the administration interface"),(0,r.kt)("p",null,"To configure the app, go to the address: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://domain.tld/path/core/admin")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://PluXml_screenshot.jpg",alt:"PluXml_screenshot"})),(0,r.kt)("h2",{id:"plugins-and-themes"},"Plugins and themes"),(0,r.kt)("p",null,"Plugins and themes should respectively be installed in the following folders: ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/pluxml/plugins"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/pluxml/themes"),"."),(0,r.kt)("h2",{id:"backup"},"Backup"),(0,r.kt)("p",null,"To restore your blog, you should keep a copy of the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/pluxml/data"),". It is recommended to do this backup before any upgrade."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website : ",(0,r.kt)("a",{parentName:"li",href:"https://www.pluxml.org/"},"www.pluxml.org")),(0,r.kt)("li",{parentName:"ul"},"Official documentation : ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.pluxml.org/"},"wiki.pluxml.org Wiki")),(0,r.kt)("li",{parentName:"ul"},"Official demo : ",(0,r.kt)("a",{parentName:"li",href:"https://demo.pluxml.org/"},"https://demo.pluxml.org/")),(0,r.kt)("li",{parentName:"ul"},"Forum : ",(0,r.kt)("a",{parentName:"li",href:"https://forum.pluxml.org/"},"https://forum.pluxml.org/")),(0,r.kt)("li",{parentName:"ul"},"Apps software repository : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/pluxml_ynh"},"github.com - YunoHost-Apps/pluxml")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or suggest an improvement by creating a ticket (issue) : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/pluxml_ynh/issues"},"github.com - YunoHost-Apps/pluxml/issues"))))}m.isMDXComponent=!0}}]);