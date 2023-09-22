"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),y=o,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},46166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Lemmy",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_lemmy"}},s=void 0,i={unversionedId:"applications/docs/app_lemmy",id:"applications/docs/app_lemmy",title:"Lemmy",description:"lemmy's logo",source:"@site/docs/04.applications/10.docs/app_lemmy.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_lemmy",permalink:"/yunodocusaurus/it/docs/applications/docs/app_lemmy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_lemmy.md",tags:[],version:"current",frontMatter:{title:"Lemmy",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_lemmy"}},sidebar:"tutorialSidebar",previous:{title:"Leed",permalink:"/yunodocusaurus/it/docs/applications/docs/app_leed"},next:{title:"LimeSurvey",permalink:"/yunodocusaurus/it/docs/applications/docs/app_limesurvey"}},l={},p=[{value:"Useful links",id:"useful-links",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://lemmy_logo.svg?resize=,80",alt:"lemmy's logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=lemmy"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Lemmy with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/lemmy"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/lemmy.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"Lemmy is similar to sites like Reddit, Lobste.rs, or Hacker News: you subscribe to forums you're interested in, post links and discussions, then vote, and comment on them. Behind the scenes, it is very different; anyone can easily run a server, and all these servers are federated (think email), and connected to the same universe, called the Fediverse. This YunoHost package will install Lemmy for your YunoHost instance to have its own self-hosted and federated lemmy instance."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://join-lemmy.org"},"join-lemmy.org")),(0,o.kt)("li",{parentName:"ul"},"Official documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://join-lemmy.org/docs/en/index.html"},"docs")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/lemmy_ynh"},"github.com - YunoHost-Apps/lemmy")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/lemmy_ynh/issues"},"github.com - YunoHost-Apps/lemmy/issues"))))}u.isMDXComponent=!0}}]);