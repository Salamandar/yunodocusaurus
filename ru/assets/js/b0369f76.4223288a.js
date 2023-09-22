"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Grafana",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_grafana"}},s=void 0,i={unversionedId:"applications/docs/app_grafana",id:"applications/docs/app_grafana",title:"Grafana",description:"Installer Grafana with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_grafana.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_grafana",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_grafana",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_grafana.md",tags:[],version:"current",frontMatter:{title:"Grafana",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_grafana"}},sidebar:"tutorialSidebar",previous:{title:"Gotify",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_gotify"},next:{title:"Grav",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_grav"}},l={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Avertissements / informations importantes",id:"avertissements--informations-importantes",level:3},{value:"Configuration",id:"configuration",level:4},{value:"YunoHost specific features",id:"yunohost-specific-features",level:3},{value:"Limitations",id:"limitations",level:4},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=grafana"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Grafana with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/grafana"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/grafana.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Grafana")," is a metric & analytic dashboards for monitoring."),(0,r.kt)("h3",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/grafana_ynh/blob/master/doc/screenshots/Grafana8_Kubernetes.jpg",alt:"Screenshots Grafana"})),(0,r.kt)("h3",{id:"avertissements--informations-importantes"},"Avertissements / informations importantes"),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important at first login:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you have to go the Grafana Menu (Grafana icon), select your account menu and select Switch to Main Org."),(0,r.kt)("li",{parentName:"ul"},"you can now access the default NetData dashboard via the Home menu")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't hesitate to create new dashboards"),": the default dashboard contains metrics from NetData, but only generic ones that are generated on every machine. NetData dynamically detects services and applications (e.g. Redis, NGINX, etc.) and enriches its dashboard and generated metrics. Many NetData metrics don't appear in the provided default Grafana dashboard!"),(0,r.kt)("h3",{id:"yunohost-specific-features"},"YunoHost specific features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"installs InfluxDB as time series database"),(0,r.kt)("li",{parentName:"ul"},"if the NetData package is installed, configures NetData to feed InfluxDB every minute"),(0,r.kt)("li",{parentName:"ul"},"installs Grafana as dashboard server"),(0,r.kt)("li",{parentName:"ul"},"creates a Grafana Data Source to fetch data from InfluxDB (and hence NetData!)"),(0,r.kt)("li",{parentName:"ul"},"creates a default dashboard to plot some data from NetData (doesn't cover every metric, can be greatly enhanced!)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General architecture")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/2662304/20649711/29f182ba-b4ce-11e6-97c8-ab2c0ab59833.png",alt:"image"})),(0,r.kt)("h4",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default dashboard may be updated in a further release of this package, so please make sure you create your own dashboards!"),(0,r.kt)("li",{parentName:"ul"},"Organizations creation doesn't play well with LDAP integration; it is disabled for standard users, but can't be disabled for administrators: ",(0,r.kt)("strong",{parentName:"li"},"please do not create organizations!"))),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/"},"grafana.com")),(0,r.kt)("li",{parentName:"ul"},"Demonstration: ",(0,r.kt)("a",{parentName:"li",href:"https://play.grafana.org/"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/grafana_ynh"},"github.com - YunoHost-Apps/grafana")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/grafana_ynh/issues"},"github.com - YunoHost-Apps/grafana/issues"))))}f.isMDXComponent=!0}}]);