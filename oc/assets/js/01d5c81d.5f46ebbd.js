"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Plainpad",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_plainpad"}},i=void 0,p={unversionedId:"applications/docs/app_plainpad",id:"applications/docs/app_plainpad",title:"Plainpad",description:"Installer Plainpad with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_plainpad.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_plainpad",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_plainpad",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_plainpad.md",tags:[],version:"current",frontMatter:{title:"Plainpad",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_plainpad"}},sidebar:"tutorialSidebar",previous:{title:"Piwigo",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_piwigo"},next:{title:"Pleroma",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_pleroma"}},s={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=plainpad"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Plainpad with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/plainpad"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/plainpad.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Plainpad")," is a self hosted, open source note taking application that is very easy to setup on your server. Your data will never leave your server and you will be able to access them from any device connected to the internet.\nWith Plainpad you can allow multiple users to access the application without being able to see each other's notes. The notes are being encrypted and stored safely in the database."),(0,o.kt)("h3",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/plainpad_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshots of Plainpad"})),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The default credentials are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"username: admin@example.org\npassword: 12345\n")),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://alextselegidis.com/get/plainpad/"},"alextselegidis.com/get/plainpad/")),(0,o.kt)("li",{parentName:"ul"},"Demonstration: ",(0,o.kt)("a",{parentName:"li",href:"https://alextselegidis.com/try/plainpad/#/login"},"Demo")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/plainpad_ynh"},"github.com - YunoHost-Apps/plainpad")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/plainpad_ynh/issues"},"github.com - YunoHost-Apps/plainpad/issues"))))}d.isMDXComponent=!0}}]);