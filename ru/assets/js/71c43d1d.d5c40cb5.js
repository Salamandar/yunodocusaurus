"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8880],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>d});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(o),m=a,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||s;return o?n.createElement(d,r(r({ref:e},u),{},{components:o})):n.createElement(d,r({ref:e},u))}));function d(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=o.length,r=new Array(s);r[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:a,r[1]=i;for(var p=2;p<s;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9483:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const s={title:"Ghost",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ghost"}},r=void 0,i={unversionedId:"applications/docs/app_ghost",id:"applications/docs/app_ghost",title:"Ghost",description:"Installer Ghost with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_ghost.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_ghost",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_ghost",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_ghost.md",tags:[],version:"current",frontMatter:{title:"Ghost",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ghost"}},sidebar:"tutorialSidebar",previous:{title:"Gemserv",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_gemserv"},next:{title:"Gitea",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_gitea"}},l={},p=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Installation",id:"installation",level:4},{value:"Installing the Ghost app",id:"installing-the-ghost-app",level:5},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function h(t){let{components:e,...o}=t;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=ghost"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Ghost with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/ghost"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/ghost.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Ghost")," is a publishing, memberships, subscriptions and newsletters platform."),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("h4",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"No LDAP support.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You need more than 1GB of ram. If you don't have it, please create a swap memory."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'dd if=/dev/zero of=/swapfile bs=1024 count=1048576\nmkswap /swapfile\nswapon /swapfile\necho "/swapfile swap swap defaults 0 0" >> /etc/fstab\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"This app is multi-instance (you can have more than one Ghost blogging websites on a single YunoHost server)")),(0,a.kt)("h5",{id:"installing-the-ghost-app"},"Installing the Ghost app"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Note - When making the install public, your Ghost domain link must be accessed WHILE NOT signed into your YunoHost session. It is recommended to use a incognito mode to sign into your Ghost admin account. If you make your install public, and try to login your Ghost admin account while signed into your YunoHost session, you will get a an authorized header error. The reason for this is because Ghost has a feature that allows for a subscription based access for content. This means Ghost allows for the admin user to setup other users (either other staff or paid/unpaid subscribers) to have the abilility to login outside of YunoHost.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"App can be installed by YunoHost admin interface or by the following command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After installation create an admin account by visiting ",(0,a.kt)("inlineCode",{parentName:"li"},"https://domain.tld/ghost/ghost"),'. If you choose to name your Ghost instance "blog" during YunoHost setup process, then it would be ',(0,a.kt)("a",{parentName:"li",href:"https://domain.tld/blog/ghost"},"https://domain.tld/blog/ghost"),". This will allow you to continue to setup your admin account and configure your settings.")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://ghost.org/"},"ghost.org")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ghost_ynh"},"github.com - YunoHost-Apps/ghost")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ghost_ynh/issues"},"github.com - YunoHost-Apps/ghost/issues"))))}h.isMDXComponent=!0}}]);