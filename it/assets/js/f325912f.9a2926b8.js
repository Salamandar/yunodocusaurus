"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8931],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:e},l),{},{components:n})):r.createElement(f,o({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[c]="string"==typeof t?t:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41029:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Neutrinet",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_neutrinet"}},o=void 0,p={unversionedId:"applications/docs/app_neutrinet",id:"applications/docs/app_neutrinet",title:"Neutrinet",description:"Installer Neutrinet with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_neutrinet.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_neutrinet",permalink:"/yunodocusaurus/it/docs/applications/docs/app_neutrinet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_neutrinet.md",tags:[],version:"current",frontMatter:{title:"Neutrinet",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_neutrinet"}},sidebar:"tutorialSidebar",previous:{title:"NetData",permalink:"/yunodocusaurus/it/docs/applications/docs/app_netdata"},next:{title:"Nextcloud",permalink:"/yunodocusaurus/it/docs/applications/docs/app_nextcloud"}},s={},u=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],l={toc:u},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=neutrinet"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Neutrinet with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/neutrinet"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/neutrinet.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Neutrinet")," is for Neutrinet members that have a Neutrinet VPN. It automatically checks and renews the VPN certificates. This package also contains a web page with contact information and other useful links."),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For contributers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debugging")),(0,a.kt)("p",null,"You can manually run the cron job that attempts to renew the certificates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo /etc/cron.daily/neutrinet-renew-cert\n")),(0,a.kt)("p",null,"This actually runs the script in ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/neutrinet/renew_cert/"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /opt/neutrinet/renew_cert\nsudo ./renew_cert_cron.sh\n")),(0,a.kt)("p",null,"You can increase the verbosity with the option ",(0,a.kt)("inlineCode",{parentName:"p"},"-v"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ./renew_cert_cron.sh -v\n")),(0,a.kt)("p",null,"To install the app without checking for certificates, run ",(0,a.kt)("inlineCode",{parentName:"p"},"export PACKAGE_CHECK_EXEC=1"),"."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.domainepublic.net/Neutrinet/neutrinet_ynh"},"gitlab.domainepublic.net/Neutrinet/neutrinet_ynh")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.domainepublic.net/Neutrinet/neutrinet_ynh"},"gitlab.domainepublic.net - Neutrinet/neutrinet - YunoHost-Apps/neutrinet")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://git.domainepublic.net/Neutrinet/neutrinet_ynh/-/issues"},"gitlab.domainepublic.net - Neutrinet/neutrinet - YunoHost-Apps/neutrinet/issues"))))}m.isMDXComponent=!0}}]);