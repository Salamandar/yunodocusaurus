"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9990],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?a.createElement(h,l(l({ref:t},p),{},{components:o})):a.createElement(h,l({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},43760:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const r={title:"Collabora via Docker",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_collaboradocker"}},l="Install Collabora with Nextcloud, using Docker",i={unversionedId:"applications/docs/app_collaboradocker",id:"applications/docs/app_collaboradocker",title:"Collabora via Docker",description:"Note DNS, Sub-domain install of an app, DNS settings and noho.st / nohost.me / ynh.fr domains.",source:"@site/docs/04.applications/10.docs/app_collaboradocker.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_collaboradocker",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_collaboradocker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_collaboradocker.md",tags:[],version:"current",frontMatter:{title:"Collabora via Docker",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_collaboradocker"}},sidebar:"tutorialSidebar",previous:{title:"Collabora",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_collabora"},next:{title:"Concret5",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_concrete5"}},s={},c=[{value:"0. Install Nextcloud",id:"0-install-nextcloud",level:3},{value:"1. Install Collabora app within YunoHost",id:"1-install-collabora-app-within-yunohost",level:3},{value:"2. Configuration within Nextcloud",id:"2-configuration-within-nextcloud",level:3},{value:"3. Reboot",id:"3-reboot",level:3},{value:"Debugging",id:"debugging",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install-collabora-with-nextcloud-using-docker"},"Install Collabora with Nextcloud, using Docker"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," This walkthrough is based on a Debian 8 instance, and has not been tested since version 3 upgrade of YunoHost. As a prerequisite, you must have configured your domains and sub-domains in the DNS, in compliance with: ",(0,n.kt)("a",{parentName:"p",href:"/dns_config"},"DNS"),", ",(0,n.kt)("a",{parentName:"p",href:"/dns_subdomains"},"Sub-domain install of an app"),", ",(0,n.kt)("a",{parentName:"p",href:"/dns_config"},"DNS settings")," and ",(0,n.kt)("a",{parentName:"p",href:"/dns_nohost_me"},"noho.st / nohost.me / ynh.fr domains"),"."),(0,n.kt)("h3",{id:"0-install-nextcloud"},"0. Install Nextcloud"),(0,n.kt)("p",null,"If Nextcloud is not already installed on your YunoHost instance, you may do so with this link: ",(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=nextcloud"},"Install Nextcloud")),(0,n.kt)("h3",{id:"1-install-collabora-app-within-yunohost"},"1. Install Collabora app within YunoHost"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"In the admin interface:")),(0,n.kt)("p",null,"Applications > Install > at the bottom ",(0,n.kt)("em",{parentName:"p"},"Install a custom application")," > enter this URL \xab ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aymhce/collaboradocker_ynh"},"https://github.com/aymhce/collaboradocker_ynh"),"  \xbb > Enter the domain/subdomain name you wish for the Collabora application."),(0,n.kt)("h3",{id:"2-configuration-within-nextcloud"},"2. Configuration within Nextcloud"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Add the Collabora Online application in Nextcloud:")),(0,n.kt)("p",null,"Click on the user icon (top right) >  Applications  >  Desktop & Text > Under the \xab Collabora Online \xbb tile, click on  ",(0,n.kt)("inlineCode",{parentName:"p"},"Activate")," ."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Setup Collabora in Nextcloud:")),(0,n.kt)("p",null,"Click on the user icon (top right) > Parametres > Under ",(0,n.kt)("em",{parentName:"p"},"Administration"),", ",(0,n.kt)("em",{parentName:"p"},"Collabora Online")," .\nSpecify the  \xab Online Collabora server \xbb with the domain name chosen during the Collabora install in YunoHost (full with \xab https:// \xbb)."),(0,n.kt)("h3",{id:"3-reboot"},"3. Reboot"),(0,n.kt)("p",null,"To allow all the pieces to work, system must be reboot. You can do so through the admin interface (Tools > Stop/reboot > ",(0,n.kt)("inlineCode",{parentName:"p"},"Reboot"),") or via the command line interface: ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo reboot now"),"."),(0,n.kt)("h2",{id:"debugging"},"Debugging"),(0,n.kt)("p",null,'Following some system, YunoHost or app updates, Collabora may display an error message such as "It\'s embarrassing...". To put things back in order, you just have to restart the docker machine, with the command ',(0,n.kt)("inlineCode",{parentName:"p"},"systemctl restart docker"),"."))}d.isMDXComponent=!0}}]);