"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,r(r({ref:t},l),{},{components:n})):i.createElement(f,r({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={title:"Invoice Ninja",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_invoiceninja"}},r=void 0,s={unversionedId:"applications/docs/app_invoiceninja",id:"applications/docs/app_invoiceninja",title:"Invoice Ninja",description:"Invoice Ninja logo",source:"@site/docs/04.applications/10.docs/app_invoiceninja.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_invoiceninja",permalink:"/yunodocusaurus/es/docs/applications/docs/app_invoiceninja",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_invoiceninja.md",tags:[],version:"current",frontMatter:{title:"Invoice Ninja",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_invoiceninja"}},sidebar:"tutorialSidebar",previous:{title:"Invidious",permalink:"/yunodocusaurus/es/docs/applications/docs/app_invidious"},next:{title:"Jappix",permalink:"/yunodocusaurus/es/docs/applications/docs/app_jappix"}},p={},c=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://invoiceninja_logo.png?height=80",alt:"Invoice Ninja logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=invoiceninja"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Invoice Ninja with YunoHost"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/invoiceninja"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/invoiceninja.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"Invoice Ninja is an open-source platform to create and email invoices, track payments, expenses, time billable tasks and projects for clients."),(0,o.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,o.kt)("p",null,"There is no official LDAP support. The first user gets created after installing Invoice Ninja. Other users can be created from inside the application"),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.invoiceninja.org/"},"https://www.invoiceninja.org/")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/invoiceninja_ynh"},"https://github.com/YunoHost-Apps/invoiceninja_ynh")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/invoiceninja_ynh/issues"},"github.com - YunoHost-Apps/invoiceninja/issues")),(0,o.kt)("li",{parentName:"ul"},"Official documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.invoiceninja.com/"},"Invoice Ninja User Guide"))))}m.isMDXComponent=!0}}]);