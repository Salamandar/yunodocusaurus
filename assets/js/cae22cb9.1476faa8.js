"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=a,p=u["".concat(d,".").concat(c)]||u[c]||h[c]||r;return n?o.createElement(p,i(i({ref:t},m),{},{components:n})):o.createElement(p,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Nohost.me domains",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_nohost_me"}},i=void 0,s={unversionedId:"administer/tutorials/domains/dns_nohost_me",id:"administer/tutorials/domains/dns_nohost_me",title:"Nohost.me domains",description:"In order to make self-hosting as accessible as possible, the YunoHost Project provides a free and automatically configured domain name service. By using this service, you won't have to configure DNS records yourself, which can be tedious and technical.",source:"@site/docs/02.administer/45.tutorials/05.domains/01.dns_nohost_me.md",sourceDirName:"02.administer/45.tutorials/05.domains",slug:"/administer/tutorials/domains/dns_nohost_me",permalink:"/yunodocusaurus/docs/administer/tutorials/domains/dns_nohost_me",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/05.domains/01.dns_nohost_me.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Nohost.me domains",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_nohost_me"}},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/yunodocusaurus/docs/administer/tutorials/"},next:{title:"DNS with a dynamic IP",permalink:"/yunodocusaurus/docs/administer/tutorials/domains/dns_dynamicip"}},d={},l=[{value:"Subdomains",id:"subdomains",level:3},{value:"Adding a nohost.me, noho.st or ynh.fr domain after the post-installation",id:"adding-a-nohostme-nohost-or-ynhfr-domain-after-the-post-installation",level:3},{value:"Retrieve a nohost.me, noho.st or ynh.fr domain",id:"retrieve-a-nohostme-nohost-or-ynhfr-domain",level:3},{value:"Change a nohost.me, noho.st or ynh.fr domain",id:"change-a-nohostme-nohost-or-ynhfr-domain",level:3}],m={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to make self-hosting as accessible as possible, the YunoHost Project provides a ",(0,a.kt)("em",{parentName:"p"},"free")," and ",(0,a.kt)("em",{parentName:"p"},"automatically configured")," domain name service. By using this service, you won't have to ",(0,a.kt)("a",{parentName:"p",href:"/dns_config"},"configure DNS records")," yourself, which can be tedious and technical."),(0,a.kt)("p",null,"The following (sub)domains are offered:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whateveryouwant.nohost.me"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whateveryouwant.noho.st"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whateveryouwant.ynh.fr"),".")),(0,a.kt)("p",null,"To use this service, you simply have to choose such a domain during the post-installation set up. It will then be automatically configured by YunoHost!"),(0,a.kt)("p",null,"!!! As a fairness measure, each instance may only have ",(0,a.kt)("strong",{parentName:"p"},"one such domain")," setup at any given time."),(0,a.kt)("h3",{id:"subdomains"},"Subdomains"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nohost.me"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"noho.st")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ynh.fr")," domain service allows the creation of subdomains."),(0,a.kt)("p",null,"YunoHost allows the installation of applications on subdomains (for example, having the Nextcloud application accessible from the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud.mydomain.org")," address), this feature is also allowed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"nohost.me"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"noho.st")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ynh.fr")," domains and so it is possible to have a subdomain such as ",(0,a.kt)("inlineCode",{parentName:"p"},"my.application.mydomain.nohost.me"),". To create a subdomain on ",(0,a.kt)("inlineCode",{parentName:"p"},"nohost.me"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"noho.st")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ynh.fr"),", you just have to add the subdomain to yunohost like any other domains."),(0,a.kt)("h3",{id:"adding-a-nohostme-nohost-or-ynhfr-domain-after-the-post-installation"},"Adding a nohost.me, noho.st or ynh.fr domain after the post-installation"),(0,a.kt)("p",null,'If you already did the postinstall and want to add an automatic domain, you may do so from the "Domains" web interface, selecting the option "I don\'t have a domain name..."'),(0,a.kt)("p",null,"Alternatively, the following commands can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Add the domain\nyunohost domain add whateveryouwant.nohost.me\n\n# Subscribe/register to the dyndns service\nyunohost dyndns subscribe -d whateveryouwant.nohost.me\n\n# [ wait ~ 30 seconds ]\n\n# Update the DNS conf\nyunohost dyndns update\n\n# Set it as the main domain\nyunohost domain main-domain -n whateveryouwant.nohost.me\n")),(0,a.kt)("h3",{id:"retrieve-a-nohostme-nohost-or-ynhfr-domain"},"Retrieve a nohost.me, noho.st or ynh.fr domain"),(0,a.kt)("p",null,"If you reinstall your server and want to use a domain already used previously, you must request a domain reset on the forum ",(0,a.kt)("a",{parentName:"p",href:"https://forum.yunohost.org/t/nohost-domain-recovery/442"},"in the dedicated thread"),"."),(0,a.kt)("h3",{id:"change-a-nohostme-nohost-or-ynhfr-domain"},"Change a nohost.me, noho.st or ynh.fr domain"),(0,a.kt)("p",null,"If you wish to use a different automatic domain, you first have to remove your present domain registration. This is done in 3 steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Remove the domain from your instance (via webadmin or the ",(0,a.kt)("inlineCode",{parentName:"li"},"yunohost domain remove")," in the CLI). "),(0,a.kt)("li",{parentName:"ol"},"Ask for registration removal ",(0,a.kt)("a",{parentName:"li",href:"https://forum.yunohost.org/t/nohost-domain-recovery/442"},"in the dedicated forum thread"),"."),(0,a.kt)("li",{parentName:"ol"},"Remove automatic domain configuration files on your server, via CLI only: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo rm /etc/cron.d/yunohost-dyndns && sudo rm -r /etc/yunohost/dyndns"))),(0,a.kt)("p",null,"You may then add a new domain."))}h.isMDXComponent=!0}}]);