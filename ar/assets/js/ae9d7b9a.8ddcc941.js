"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"What is YunoHost?",template:"docs",taxonomy:{category:"docs"},routes:{default:"/whatsyunohost"}},i=void 0,s={unversionedId:"overview/what_is_yunohost",id:"overview/what_is_yunohost",title:"What is YunoHost?",description:"YunoHost logo",source:"@site/docs/01.overview/10.what_is_yunohost.md",sourceDirName:"01.overview",slug:"/overview/what_is_yunohost",permalink:"/yunodocusaurus/ar/docs/overview/what_is_yunohost",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01.overview/10.what_is_yunohost.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"What is YunoHost?",template:"docs",taxonomy:{category:"docs"},routes:{default:"/whatsyunohost"}},sidebar:"tutorialSidebar",previous:{title:"Self-hosting",permalink:"/yunodocusaurus/ar/docs/overview/self_hosting"},next:{title:"Try YunoHost",permalink:"/yunodocusaurus/ar/docs/overview/try_yunohost"}},l={},u=[{value:"Features",id:"features",level:2},{value:"Origin",id:"origin",level:2},{value:"What YunoHost is not?",id:"what-yunohost-is-not",level:2},{value:"Artworks",id:"artworks",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://YunoHost_logo_vertical.png?resize=400&id=ynhlogo",alt:"YunoHost logo"})),(0,r.kt)("p",null,"YunoHost is an ",(0,r.kt)("strong",{parentName:"p"},"operating system")," aiming for the simplest administration of a ",(0,r.kt)("strong",{parentName:"p"},"server"),", and therefore democratize ",(0,r.kt)("a",{parentName:"p",href:"/selfhosting"},"self-hosting"),", while making sure it stays reliable, secure, ethical and lightweight. It is a copylefted libre software project maintained exclusively by volunteers. Technically, it can be seen as a distribution based on ",(0,r.kt)("a",{parentName:"p",href:"https://debian.org"},"Debian GNU/Linux")," and can be installed on ",(0,r.kt)("a",{parentName:"p",href:"/install"},"many kinds of hardware"),"."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-debian.png?resize=32&classes=inline",alt:null})," Based on Debian;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-tools.png?resize=32&classes=inline",alt:null})," Administer your server through a ",(0,r.kt)("strong",{parentName:"li"},"friendly web interface")," ;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-package.png?resize=32&classes=inline",alt:null})," Deploy ",(0,r.kt)("strong",{parentName:"li"},"apps in just a few clicks"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-users.png?resize=32&classes=inline",alt:null})," Manage ",(0,r.kt)("strong",{parentName:"li"},"users")," ",(0,r.kt)("small",null,"(based on LDAP)"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-globe.png?resize=32&classes=inline",alt:null})," Manage ",(0,r.kt)("strong",{parentName:"li"},"domain names"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-medic.png?resize=32&classes=inline",alt:null})," Create and restore ",(0,r.kt)("strong",{parentName:"li"},"backups"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-door.png?resize=32&classes=inline",alt:null})," Connect to all apps simultaneously through the ",(0,r.kt)("strong",{parentName:"li"},"user portal")," ",(0,r.kt)("small",null,"(NGINX, SSOwat)"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-mail.png?resize=32&classes=inline",alt:null})," Includes a ",(0,r.kt)("strong",{parentName:"li"},"full e-mail stack")," ",(0,r.kt)("small",null,"(Postfix, Dovecot, Rspamd, DKIM)"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-messaging.png?resize=32&classes=inline",alt:null}),"... as well as ",(0,r.kt)("strong",{parentName:"li"},"an instant messaging server")," ",(0,r.kt)("small",null,"(XMPP)"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-lock.png?resize=32&classes=inline",alt:null})," Manages ",(0,r.kt)("strong",{parentName:"li"},"SSL certificates")," ",(0,r.kt)("small",null,"(based on Let's Encrypt)")," ;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"image://icon-shield.png?resize=32&classes=inline",alt:null}),"... and ",(0,r.kt)("strong",{parentName:"li"},"security systems")," ",(0,r.kt)("small",null,"(Fail2ban, yunohost-firewall)"),";")),(0,r.kt)("h2",{id:"origin"},"Origin"),(0,r.kt)("p",null,"YunoHost was created in February 2012 after something like this:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",null,'"Shit, I\'m too lazy to reconfigure my mail server... Beudbeud, how were you able to get your little server running with LDAP?"'),(0,r.kt)("small",null,"Kload, February 2012")),(0,r.kt)("p",null,"All that was needed was an admin interface for Beudbeud's server to make something usable, so Kload decided to develop one. Finally, after automating several configs and packaging in some web apps, YunoHost v1 was finished."),(0,r.kt)("p",null,"Noting the growing enthusiasm around YunoHost and around self-hosting in general, the original developers along with new contributors decided to start work on version 2, a more extensible, more powerful, more easy-to-use, and at that, one that makes a nice cup of fair-trade coffee for the elves of Lapland."),(0,r.kt)("p",null,"The name ",(0,r.kt)("strong",{parentName:"p"},"YunoHost"),' comes from the jargon "Y U NO Host". The ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internet_meme"},"Internet meme")," should illustrate it:\n",(0,r.kt)("img",{parentName:"p",src:"image://dude_yunohost.jpg",alt:null})),(0,r.kt)("h2",{id:"what-yunohost-is-not"},"What YunoHost is not?"),(0,r.kt)("p",null,"Even if YunoHost can handle multiple domains and multiple users, it is ",(0,r.kt)("strong",{parentName:"p"},"not meant to be a mutualized system"),"."),(0,r.kt)("p",null,'First, the software is too young, not tested at scale and thus probably not optimized well enough for hundreds of users at the same time. With that said, we do not want to lead the software in that direction. Virtualization democratizes, and its usage is recommended since it is a more watertight way to achieve mutualization than a "full-stack" system like YunoHost.'),(0,r.kt)("p",null,"You can host your friends, your family and your company safely and with ease, but you must ",(0,r.kt)("strong",{parentName:"p"},"trust your users"),", and they must trust you above all. If you want to provide YunoHost services for unknown persons anyway, a full VPS per user will be just fine, and we believe a better way to go."),(0,r.kt)("h2",{id:"artworks"},"Artworks"),(0,r.kt)("p",null,"Black and white YunoHost PNG logo by ToZz (400 \xd7 400 px):"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://ynh_logo_black_300dpi.png?resize=220",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"image://ynh_logo_white_300dpi.png?resize=220&id=whitelogo",alt:null})),(0,r.kt)("p",null,"Licence: CC-BY-SA 4.0"))}c.isMDXComponent=!0}}]);