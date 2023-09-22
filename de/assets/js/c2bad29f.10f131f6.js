"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,d=c["".concat(i,".").concat(h)]||c[h]||m[h]||a;return r?o.createElement(d,s(s({ref:t},l),{},{components:r})):o.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"Prometheus",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_prometheus"}},s=void 0,p={unversionedId:"applications/docs/app_prometheus",id:"applications/docs/app_prometheus",title:"Prometheus",description:"Installer Prometheus with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_prometheus.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_prometheus",permalink:"/yunodocusaurus/de/docs/applications/docs/app_prometheus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_prometheus.md",tags:[],version:"current",frontMatter:{title:"Prometheus",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_prometheus"}},sidebar:"tutorialSidebar",previous:{title:"PrivateBin",permalink:"/yunodocusaurus/de/docs/applications/docs/app_privatebin"},next:{title:"Prowlarr",permalink:"/yunodocusaurus/de/docs/applications/docs/app_prowlarr"}},i={},u=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],l={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=prometheus"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Prometheus with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/prometheus"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/prometheus.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Prometheus")," is a monitoring system and time series database."),(0,n.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Port assigned to the app can be read in ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/yunohost/apps/prometheus/settings.yml")," or within CLI with ",(0,n.kt)("inlineCode",{parentName:"li"},"yunohost app info prometheus --full")),(0,n.kt)("li",{parentName:"ul"},"The app is configurable within the file ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/yunohost/prometheus/prometheus.yml"),", then reboot the app service.")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"prometheus.io")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://demo.do.prometheus.io/"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/prometheus_ynh"},"github.com - YunoHost-Apps/prometheus")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/prometheus_ynh/issues"},"github.com - YunoHost-Apps/prometheus/issues"))))}m.isMDXComponent=!0}}]);