"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[989],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},39724:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const r={title:"Advices and guidelines",template:"docs",taxonomy:{category:"docs"},routes:{default:"/guidelines"}},i=void 0,s={unversionedId:"administer/admin_guide/guidelines",id:"administer/admin_guide/guidelines",title:"Advices and guidelines",description:"This page lists some advice and guidelines which every YunoHost administrator should be aware to take care of a YunoHost server :)",source:"@site/docs/02.administer/15.admin_guide/05.guidelines.md",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/guidelines",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/guidelines",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/05.guidelines.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Advices and guidelines",template:"docs",taxonomy:{category:"docs"},routes:{default:"/guidelines"}},sidebar:"tutorialSidebar",previous:{title:"On WSL",permalink:"/yunodocusaurus/ca/docs/administer/installation/install-on-wsl"},next:{title:"Administrator web interface",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/admin"}},l={},u=[{value:"Do not break YunoHost",id:"do-not-break-yunohost",level:2},{value:"Keep it simple!",id:"keep-it-simple",level:2},{value:"Do not reinstall every day",id:"do-not-reinstall-every-day",level:2},{value:"Do backups",id:"do-backups",level:2},{value:"Check root\u2019s email",id:"check-roots-email",level:2},{value:"YunoHost is free software, maintained by volunteers",id:"yunohost-is-free-software-maintained-by-volunteers",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page lists some advice and guidelines which every YunoHost administrator should be aware to take care of a YunoHost server :)"),(0,a.kt)("h2",{id:"do-not-break-yunohost"},"Do not break YunoHost"),(0,a.kt)("p",null,"To put it another way: your server is either a production server (meant to work) or a test server on which you allow yourself to experiment."),(0,a.kt)("p",null,"If your goal is to run a production server: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"be aware that servers are fragile system. Stay cautious, methodical and patient;"),(0,a.kt)("li",{parentName:"ul"},"limit experimentations and customizations (for instance of config file);"),(0,a.kt)("li",{parentName:"ul"},"do not install dozens of apps just to see how they look;"),(0,a.kt)("li",{parentName:"ul"},"use non-official apps with caution, and do not use apps that are still 'in progress', 'not working' or level 0;"),(0,a.kt)("li",{parentName:"ul"},"if something gets broken, think twice about fixing it by yourself if you don't know what you are doing. ",(0,a.kt)("small",null,"(For instance, do not attempt to recreate yourself the admin user just because it mysteriously disappeared...)"))),(0,a.kt)("h2",{id:"keep-it-simple"},"Keep it simple!"),(0,a.kt)("p",null,"YunoHost is designed to work with general and simple use cases in mind. Deviating from those conditions will make things harder and you will need technical knowledge to make it work. For instance, "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"do not try to run YunoHost in a context where you cannot have control over ports 80 and 443 (or no internet at all); "),(0,a.kt)("li",{parentName:"ul"},"do not try to host five servers behind the same internet connection if you are not already an advanced user; "),(0,a.kt)("li",{parentName:"ul"},"do not fall into nerd whims such as willing to replace NGINX with Apache (or run both at the same time); "),(0,a.kt)("li",{parentName:"ul"},"do not try to use custom SSL certificates if you don't really need them;"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Keep things as simple as you can!"),(0,a.kt)("h2",{id:"do-not-reinstall-every-day"},"Do not reinstall every day"),(0,a.kt)("p",null,'Some people tend to fall into "the reinstallation spiral" - where each time something breaks in the server and it is not obvious how to fix it, or because the server became "dirty", one ends up reinstalling the whole server from scratch because it looks like an "easy" and quick solution to clean the table.'),(0,a.kt)("p",null,'Please don\'t do this. Reinstalling is a heavy operation and is not a good long-term strategy for fixing problems. You will get tired and won\'t learn anything. Forget the dream of having a "clean" server. A real-life server always end up being a bit "dirty". Also, you need to (progressively) learn how to solve issues when you encounter them. Reach for ',(0,a.kt)("a",{parentName:"p",href:"/help"},"help")," with detailed symptoms of what you are trying to do and what is happening, and fix the issues. Over time, you will get a much better control over your server than just blindly reinstalling every time."),(0,a.kt)("h2",{id:"do-backups"},"Do backups"),(0,a.kt)("p",null,"If you host services and data that are important for your users, it is important that you setup a backup policy. Backups can be easily created from the webadmin - you can download it from the webadmin or via your favorite FTP client, such as FileZilla or your own terminal. You should perform backup regularly and keep them in a safe and different physical location from your server. More info on ",(0,a.kt)("a",{parentName:"p",href:"/backup"},"the backup documentation"),"."),(0,a.kt)("h2",{id:"check-roots-email"},"Check root\u2019s email"),(0,a.kt)("p",null,"As an administrator, you should configure an email client to check emails sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"root@your.domain.tld")," (which should be an alias to the first user your added) or otherwise forward them to another address that you actively check. Those mails may contain information on what is happening on your server such as automated periodic tasks."),(0,a.kt)("h2",{id:"yunohost-is-free-software-maintained-by-volunteers"},"YunoHost is free software, maintained by volunteers"),(0,a.kt)("p",null,"Finally, keep in mind that YunoHost is a free software maintained by volunteers - and that the goal of YunoHost (to democratize self-hosting) is not an easy one! It is provided without any warranty. The team of volunteers does its best to maintain and provide the best possible experience - yet features, applications and YunoHost as a whole are far from being perfect and you will experience small and big shortcomings at some points. When this happens, kindly ",(0,a.kt)("a",{parentName:"p",href:"/help"},"reach for help on the chat or forum, or report the issue"),"! :)"),(0,a.kt)("p",null,"If you like YunoHost and want to see the project being kept alive and make progress, feel free to leave a thank you note and to ",(0,a.kt)("a",{parentName:"p",href:"https://liberapay.com/YunoHost"},"donate")," to the project and talk about it around you!"),(0,a.kt)("p",null,"Last but not least, since YunoHost is a free software project, you are legitimate and welcomed to come and ",(0,a.kt)("a",{parentName:"p",href:"/contribute"},"contribute")," to the project, be it on the technical aspects (i.e. code) and less-technical aspects (such as contributing to this documentation! ;))"))}p.isMDXComponent=!0}}]);