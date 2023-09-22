"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?i.createElement(k,a(a({ref:t},c),{},{components:r})):i.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={title:"Wiki.js",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wikijs"}},a=void 0,s={unversionedId:"applications/docs/app_wikijs",id:"applications/docs/app_wikijs",title:"Wiki.js",description:"Wiki.js's logo",source:"@site/docs/04.applications/10.docs/app_wikijs.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_wikijs",permalink:"/yunodocusaurus/de/docs/applications/docs/app_wikijs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_wikijs.md",tags:[],version:"current",frontMatter:{title:"Wiki.js",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wikijs"}},sidebar:"tutorialSidebar",previous:{title:"Wetty",permalink:"/yunodocusaurus/de/docs/applications/docs/app_wetty"},next:{title:"WordPress",permalink:"/yunodocusaurus/de/docs/applications/docs/app_wordpress"}},p={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://wikijs_logo.svg?resize=,80",alt:"Wiki.js's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=wikijs"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Wiki.js with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/wikijs"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/wikijs.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"Wiki.js is a free, modern and fast wiki based on Node.js, Git and Markdown."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Wiki.js requires a dedicated root domain, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"wikijs.domain.tld")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.js.org/"},"wiki.js.org")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.requarks.io/"},"docs.requarks.io")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wikijs_ynh"},"github.com - YunoHost-Apps/wikijs")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wikijs_ynh/issues"},"github.com - YunoHost-Apps/wikijs/issues"))))}d.isMDXComponent=!0}}]);