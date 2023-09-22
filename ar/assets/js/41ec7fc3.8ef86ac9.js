"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9738],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(a),d=n,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Streama",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_streama"}},s=void 0,i={unversionedId:"applications/docs/app_streama",id:"applications/docs/app_streama",title:"Streama",description:"Installer Streama with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_streama.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_streama",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_streama",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_streama.md",tags:[],version:"current",frontMatter:{title:"Streama",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_streama"}},sidebar:"tutorialSidebar",previous:{title:"squid3",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_squid3"},next:{title:"Strut",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_strut"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Installation guide",id:"installation-guide",level:3},{value:"Additional information",id:"additional-information",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=streama"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Streama with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/streama"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/streama.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Streama")," is a self hosted streaming media server."),(0,n.kt)("h3",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/streama_ynh/blob/master/doc/screenshots/screenshot.jpg",alt:"Screenshot of Streama"})),(0,n.kt)("h3",{id:"installation-guide"},"Installation guide"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Streama must be installed in the root domain or subdomain.")),(0,n.kt)("p",null,"Default upload directory is: ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/streama")," (must be mentioned in ",(0,n.kt)("em",{parentName:"p"},"Settings")," page or can be changed)"),(0,n.kt)("p",null,"Default local video directory is: ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/streama/upload")," (must be mentioned in ",(0,n.kt)("em",{parentName:"p"},"Settings")," page or can be changed)"),(0,n.kt)("h3",{id:"additional-information"},"Additional information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After install:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Username"),": admin"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Password"),": admin")),(0,n.kt)("p",null,"This can be changed in settings."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://streamaserver.org"},"streamaserver.org")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://streama.demo-version.net/login/auth"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/streama_ynh"},"github.com - YunoHost-Apps/streama")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/streama_ynh/issues"},"github.com - YunoHost-Apps/streama/issues"))))}m.isMDXComponent=!0}}]);