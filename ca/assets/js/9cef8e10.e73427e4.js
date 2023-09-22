"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||n;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<n;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var o=a(87462),r=(a(67294),a(3905));const n={title:"Rainloop",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_rainloop"}},i=void 0,p={unversionedId:"applications/docs/app_rainloop",id:"applications/docs/app_rainloop",title:"Rainloop",description:"Rainloop's logo",source:"@site/docs/04.applications/10.docs/app_rainloop.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_rainloop",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_rainloop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_rainloop.md",tags:[],version:"current",frontMatter:{title:"Rainloop",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_rainloop"}},sidebar:"tutorialSidebar",previous:{title:"Radicale",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_radicale"},next:{title:"Retroarch Web Player",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_retroarch"}},l={},s=[{value:"Index",id:"index",level:3},{value:"Configuration",id:"configuration",level:2},{value:"CardDAV",id:"carddav",level:3},{value:"Domains",id:"domains",level:3},{value:"PGP Keys",id:"pgp-keys",level:3},{value:"Upgrade",id:"upgrade",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://rainloop-logo.png?height=100",alt:"Rainloop's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=rainloop"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Rainloop with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/rainloop"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/rainloop.svg",alt:"Integration level"}))),(0,r.kt)("h3",{id:"index"},"Index"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#useful-links"},"Useful links"))),(0,r.kt)("p",null,"Rainloop is a lightweight webmail."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To configure it, go to ",(0,r.kt)("a",{parentName:"p",href:"http://DOMAIN.TLD/rainloop/app/?admin"},"http://DOMAIN.TLD/rainloop/app/?admin")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default login is: admin"),(0,r.kt)("li",{parentName:"ul"},"The default password is: Password chosen during install"),(0,r.kt)("li",{parentName:"ul"},"If you lost the admin password, you can retrieve it using ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo yunohost app setting rainloop password"))),(0,r.kt)("h3",{id:"carddav"},"CardDAV"),(0,r.kt)("p",null,"Each user can add a remote cardDAV server from their own parameters interface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you use Ba\xefkal, the CardDAV address is: ",(0,r.kt)("a",{parentName:"li",href:"https://DOMAIN.TLD/baikal/card.php/addressbooks/USER/default/"},"https://DOMAIN.TLD/baikal/card.php/addressbooks/USER/default/")),(0,r.kt)("li",{parentName:"ul"},"If you use Nextcloud, the CardDAV address is: ",(0,r.kt)("a",{parentName:"li",href:"https://DOMAIN.TLD/nextcloud/remote.php/carddav/addressbooks/USER/contacts"},"https://DOMAIN.TLD/nextcloud/remote.php/carddav/addressbooks/USER/contacts"))),(0,r.kt)("h3",{id:"domains"},"Domains"),(0,r.kt)("p",null,'Users can use Rainloop to access mailboxes other than the one provided by YunoHost (e.g. gmail.com or live.com). The option is available through the "account -> add an account" button.\nThe administrator must authorize the connection to third party domains, via a white list in the administration interface.'),(0,r.kt)("h3",{id:"pgp-keys"},"PGP Keys"),(0,r.kt)("p",null,"Rainloop saves your PGP private keys in the browser storage. This means that you will loose your private keys if you clear your browser storage (e.g., private browsing, different computer...). This packages integrates ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chtixof/pgpback_ynh"},"PGPback by chtixof")," so you can store your PGP private keys on the server securely. Go to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://DOMAIN.TLD/rainloop/pgpback"},"http://DOMAIN.TLD/rainloop/pgpback"))," to backup your PGP keys on the server or restore them."),(0,r.kt)("h3",{id:"upgrade"},"Upgrade"),(0,r.kt)("p",null,"To upgrade the app once a new rainloop version is available, simply run in a local shell via ssh or otherwise:\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo yunohost app upgrade -u https://github.com/YunoHost-Apps/rainloop_ynh rainloop")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website : ",(0,r.kt)("a",{parentName:"li",href:"https://www.rainloop.net/"},"www.rainloop.net")),(0,r.kt)("li",{parentName:"ul"},"Official documentation : ",(0,r.kt)("a",{parentName:"li",href:"https://www.rainloop.net/docs/configuration/"},"www.rainloop.net/docs/configuration")),(0,r.kt)("li",{parentName:"ul"},"Demonstration : ",(0,r.kt)("a",{parentName:"li",href:"https://mail.rainloop.net/"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/rainloop_ynh"},"github.com - YunoHost-Apps/rainloop")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue) : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/rainloop_ynh/issues"},"github.com - YunoHost-Apps/rainloop/issues"))))}d.isMDXComponent=!0}}]);