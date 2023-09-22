"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),b=o,d=m["".concat(l,".").concat(b)]||m[b]||c[b]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},62475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Mumble Web",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_mumble-web"}},i=void 0,s={unversionedId:"applications/docs/app_mumble-web",id:"applications/docs/app_mumble-web",title:"Mumble Web",description:"Installer Mumble Web with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_mumble-web.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_mumble-web",permalink:"/yunodocusaurus/de/docs/applications/docs/app_mumble-web",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_mumble-web.md",tags:[],version:"current",frontMatter:{title:"Mumble Web",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_mumble-web"}},sidebar:"tutorialSidebar",previous:{title:"Movim",permalink:"/yunodocusaurus/de/docs/applications/docs/app_movim"},next:{title:"Mumble server",permalink:"/yunodocusaurus/de/docs/applications/docs/app_mumbleserver"}},l={},u=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Setup",id:"setup",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Useful links",id:"useful-links",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=mumble-web"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Mumble Web with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/mumble-web"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/mumble-web.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mumble Web")," is an HTML5 Mumble client for use in modern browsers. The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC)."),(0,o.kt)("h3",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/mumble-web_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshot of Mumble Web"})),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In order to use ",(0,o.kt)("em",{parentName:"li"},"Mumble web"),", you need to install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/mumbleserver_ynh"},"Mumble server")," first."),(0,o.kt)("li",{parentName:"ul"},"This installation assumes that ",(0,o.kt)("em",{parentName:"li"},"Mumble server")," is served by port ",(0,o.kt)("inlineCode",{parentName:"li"},"64738")),(0,o.kt)("li",{parentName:"ul"},"Various configuration options are available for Mumble web on this configuration file ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/www/mumble-web/dist/config.local.js"))),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Murmur documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.mumble.info/wiki/Murmurguide"},"https://wiki.mumble.info/wiki/Murmurguide")),(0,o.kt)("li",{parentName:"ul"},"Framasoft documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.framasoft.org/fr/jitsimeet/mumble.html"},"https://docs.framasoft.org/fr/jitsimeet/mumble.html"))),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.mumble.info/"},"mumble.info")),(0,o.kt)("li",{parentName:"ul"},"Demonstration: ",(0,o.kt)("a",{parentName:"li",href:"https://alt.framasoft.org/fr/mumble"},"Demo")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/mumble-web_ynh"},"github.com - YunoHost-Apps/mumble-web")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/mumble-web_ynh/issues"},"github.com - YunoHost-Apps/mumble-web/issues"))))}c.isMDXComponent=!0}}]);