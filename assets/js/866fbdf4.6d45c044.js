"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2825],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>f});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(o),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return o?n.createElement(f,i(i({ref:e},u),{},{components:o})):n.createElement(f,i({ref:e},u))}));function f(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3363:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={title:"Bludit",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_bludit"}},i=void 0,s={unversionedId:"applications/docs/app_bludit",id:"applications/docs/app_bludit",title:"Bludit",description:"Bludit's logo",source:"@site/docs/04.applications/10.docs/app_bludit.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_bludit",permalink:"/yunodocusaurus/docs/applications/docs/app_bludit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_bludit.md",tags:[],version:"current",frontMatter:{title:"Bludit",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_bludit"}},sidebar:"tutorialSidebar",previous:{title:"BlogoText",permalink:"/yunodocusaurus/docs/applications/docs/app_blogotext"},next:{title:"Bookstack",permalink:"/yunodocusaurus/docs/applications/docs/app_bookstack"}},l={},p=[{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://bludit_logo.png?width=80",alt:"Bludit's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=bludit"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Bludit with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/bludit"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/bludit.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Bludit is a web application to build your own website or blog in seconds; it's completely free and open source. Bludit is a Flat-File CMS, which (in this case) means that Bludit uses files in the JSON format to store the content. You don't need to install or configure a database; you only need a web server with PHP support."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://www.bludit.com/"},"www.bludit.com (en)")),(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.bludit.com/en/"},"docs.bludit.com - (en)")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/bludit_ynh"},"github.com - YunoHost-Apps/bludit")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/bludit_ynh/issues"},"github.com - YunoHost-Apps/bludit/issues"))))}d.isMDXComponent=!0}}]);