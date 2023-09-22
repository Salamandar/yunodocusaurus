"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||r;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={title:"Miniflux",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_miniflux"}},a=void 0,s={unversionedId:"applications/docs/app_miniflux",id:"applications/docs/app_miniflux",title:"Miniflux",description:"Installer Miniflux with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_miniflux.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_miniflux",permalink:"/yunodocusaurus/docs/applications/docs/app_miniflux",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_miniflux.md",tags:[],version:"current",frontMatter:{title:"Miniflux",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_miniflux"}},sidebar:"tutorialSidebar",previous:{title:"MiniDLNA (Ready Media)",permalink:"/yunodocusaurus/docs/applications/docs/app_minidlna"},next:{title:"Misskey",permalink:"/yunodocusaurus/docs/applications/docs/app_misskey"}},l={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Documentation and resources",id:"documentation-and-resources",level:2},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=miniflux"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Miniflux with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/miniflux"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/miniflux.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Miniflux")," is a minimalist and opinionated RSS feed reader."),(0,o.kt)("h3",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/miniflux_ynh/blob/master/doc/screenshots/overview.png",alt:"Screenshot of Miniflux"})),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can also configure Miniflux by editing this file ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/miniflux/miniflux.conf")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://miniflux.app/docs/configuration.html"},"documentation"),"."),(0,o.kt)("h2",{id:"documentation-and-resources"},"Documentation and resources"),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://miniflux.app/"},"miniflux.app")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/miniflux_ynh"},"github.com - YunoHost-Apps/miniflux")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/miniflux_ynh/issues"},"github.com - YunoHost-Apps/miniflux/issues"))))}m.isMDXComponent=!0}}]);