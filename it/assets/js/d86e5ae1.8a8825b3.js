"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Question2Answer",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_question2answer"}},s=void 0,i={unversionedId:"applications/docs/app_question2answer",id:"applications/docs/app_question2answer",title:"Question2Answer",description:"Installer Question2Answer with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_question2answer.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_question2answer",permalink:"/yunodocusaurus/it/docs/applications/docs/app_question2answer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_question2answer.md",tags:[],version:"current",frontMatter:{title:"Question2Answer",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_question2answer"}},sidebar:"tutorialSidebar",previous:{title:"LibreQR",permalink:"/yunodocusaurus/it/docs/applications/docs/app_qr"},next:{title:"Quizzes",permalink:"/yunodocusaurus/it/docs/applications/docs/app_quizzes"}},p={},u=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],l={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=question2answer"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Question2Answer with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/question2answer"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/question2answer.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Question2Answer")," (Q2A) is a popular open source Q&A platform for PHP/MySQL."),(0,o.kt)("h3",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/question2answer_ynh/blob/master/doc/screenshots/install_screenshot.png",alt:"Screenshot of Question2Answer"})),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This app can be configured via its admin panel, available at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://mydomain/myquestion2answer/index.php/admin/")),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.question2answer.org/"},"question2answer.org")),(0,o.kt)("li",{parentName:"ul"},"Demonstration: ",(0,o.kt)("a",{parentName:"li",href:"http://demo.question2answer.org/"},"Demo")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/question2answer_ynh"},"github.com - YunoHost-Apps/question2answer")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/question2answer_ynh/issues"},"github.com - YunoHost-Apps/question2answer/issues"))))}m.isMDXComponent=!0}}]);