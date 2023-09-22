"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(d,p(p({ref:t},l),{},{components:a})):n.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<r;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},83900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Ampache",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ampache"}},p=void 0,i={unversionedId:"applications/docs/app_ampache",id:"applications/docs/app_ampache",title:"Ampache",description:"Ampache's logo",source:"@site/docs/04.applications/10.docs/app_ampache.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_ampache",permalink:"/yunodocusaurus/de/docs/applications/docs/app_ampache",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_ampache.md",tags:[],version:"current",frontMatter:{title:"Ampache",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ampache"}},sidebar:"tutorialSidebar",previous:{title:"AllTube",permalink:"/yunodocusaurus/de/docs/applications/docs/app_alltube"},next:{title:"Anarchism",permalink:"/yunodocusaurus/de/docs/applications/docs/app_anarchism"}},s={},c=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://ampache_logo.png?height=80",alt:"Ampache's logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=ampache"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Ampache with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/ampache"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/ampache.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"Ampache is libre audio streaming software."),(0,o.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,o.kt)("p",null,"Since SSO authentication does not work entirely from the user panel, we need to work on it. In fact, this can be disruptive to external Ampache clients such as Subsonic."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"http://ampache.org/"},"ampache.org")),(0,o.kt)("li",{parentName:"ul"},"Official documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ampache/ampache/wiki"},"github.com - Ampache/wiki")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ampache_ynh"},"github.com - YunoHost-Apps/ampache")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ampache_ynh/issues"},"github.com - YunoHost-Apps/ampache/issues"))))}m.isMDXComponent=!0}}]);