"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,b=c["".concat(l,".").concat(f)]||c[f]||m[f]||n;return r?o.createElement(b,s(s({ref:t},u),{},{components:r})):o.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={title:"Mumble server",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_mumbleserver"}},s=void 0,i={unversionedId:"applications/docs/app_mumbleserver",id:"applications/docs/app_mumbleserver",title:"Mumble server",description:"mumbleserver's logo",source:"@site/docs/04.applications/10.docs/app_mumbleserver.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_mumbleserver",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_mumbleserver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_mumbleserver.md",tags:[],version:"current",frontMatter:{title:"Mumble server",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_mumbleserver"}},sidebar:"tutorialSidebar",previous:{title:"Mumble Web",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_mumble-web"},next:{title:"my_capsule",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_my_capsule"}},l={},p=[{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://mumbleserver_logo.svg?resize=,80",alt:"mumbleserver's logo"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=mumbleserver"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Mumble server with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/mumbleserver"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/mumbleserver.svg",alt:"Integration level"}))),(0,a.kt)("p",null,"Mumble is an efficient and stable Voice over IP software that allows you to create audio rooms for multiple people. It is a VoIP software that allows its users to benefit from very low latency and very high quality while providing excellent sound quality. Mumble also incorporates a visual overlay that discreetly positions itself above the other windows to provide a view of the microphone activation of the people you are talking to.\nHere is the 'Murmur' server that you will install on your instance of YunoHost."),(0,a.kt)("p",null,"It is necessary to use a ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.mumble.info/wiki/3rd_Party_Applications"},"Mumble client")," to use it for each interlocutor."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://www.mumble.info"},"www.mumble.info")),(0,a.kt)("li",{parentName:"ul"},"Official documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.mumble.info/wiki/Main_Page"},"wiki.mumble.info/wiki/Main_Page")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/mumbleserver_ynh"},"github.com - YunoHost-Apps/mumbleserver")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/mumbleserver_ynh/issues"},"github.com - YunoHost-Apps/mumbleserver/issues"))))}m.isMDXComponent=!0}}]);