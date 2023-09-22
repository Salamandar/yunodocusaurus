"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},80907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Troubleshooting",template:"docs",taxonomy:{category:"docs"},routes:{default:"/troubleshooting"}},i=void 0,s={unversionedId:"administer/troubleshooting/troubleshooting",id:"administer/troubleshooting/troubleshooting",title:"Troubleshooting",description:"Here are some general advices when encountering issues with your server.",source:"@site/docs/02.administer/50.troubleshooting/50.troubleshooting.md",sourceDirName:"02.administer/50.troubleshooting",slug:"/administer/troubleshooting/",permalink:"/yunodocusaurus/de/docs/administer/troubleshooting/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/50.troubleshooting/50.troubleshooting.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Troubleshooting",template:"docs",taxonomy:{category:"docs"},routes:{default:"/troubleshooting"}},sidebar:"tutorialSidebar",previous:{title:"Give SFTP permission to edit an app",permalink:"/yunodocusaurus/de/docs/administer/tutorials/sftp_on_apps"},next:{title:"IP address unban",permalink:"/yunodocusaurus/de/docs/administer/troubleshooting/fail2ban"}},u={},l=[{value:"0. Don&#39;t panic.",id:"0-dont-panic",level:2},{value:"1. Look for similar issues on the forum or bugtrackers.",id:"1-look-for-similar-issues-on-the-forum-or-bugtrackers",level:2},{value:"2. Ask for help",id:"2-ask-for-help",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here are some general advices when encountering issues with your server."),(0,n.kt)("h2",{id:"0-dont-panic"},"0. Don't panic."),(0,n.kt)("p",null,"Stay calm. Most issues are less worse than newcomers usually think. For the love of God ",(0,n.kt)("small",null,"(or your favourite deity / animal / food)"),", please don't jump into the \"reinstallation spiral\" thinking reinstalling your server from scratch will magically fix stuff. Reinstalling is a heavy operation and is not a good long-term strategy for fixing problems. You will get tired and won't learn anything."),(0,n.kt)("h2",{id:"1-look-for-similar-issues-on-the-forum-or-bugtrackers"},"1. Look for similar issues on the forum or bugtrackers."),(0,n.kt)("p",null,"Search ",(0,n.kt)("a",{parentName:"p",href:"https://forum.yunohost.org"},"the forum")," for topics similar to the issue you're encountering. If you have issues with a specific app, you may also want to check the corresponding bugtracker of the app, for example ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/wordpress_ynh/issues"},"here is the bugtracker for the Wordpress app"),"."),(0,n.kt)("h2",{id:"2-ask-for-help"},"2. Ask for help"),(0,n.kt)("p",null,"Either on ",(0,n.kt)("a",{parentName:"p",href:"https://forum.yunohost.org"},"the forum")," or the chat: c.f. ",(0,n.kt)("a",{parentName:"p",href:"/help"},"this page")),(0,n.kt)("p",null,"!!! FOR THE LOVE OF GOD, PLEASE provide basic context! Volunteers can NOT help you if you do not take ",(0,n.kt)("em",{parentName:"p"},"five")," minutes to describe your context: which kind of hardware, which YunoHost version, what you are trying to do, what you tried, what happened and ",(0,n.kt)("strong",{parentName:"p"},"the corresponding logs"),"."))}d.isMDXComponent=!0}}]);