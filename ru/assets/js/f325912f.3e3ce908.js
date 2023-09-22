"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Neutrinet",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_neutrinet"}},o=void 0,p={unversionedId:"applications/docs/app_neutrinet",id:"applications/docs/app_neutrinet",title:"Neutrinet",description:"Installer Neutrinet with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_neutrinet.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_neutrinet",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_neutrinet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_neutrinet.md",tags:[],version:"current",frontMatter:{title:"Neutrinet",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_neutrinet"}},sidebar:"tutorialSidebar",previous:{title:"NetData",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_netdata"},next:{title:"Nextcloud",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_nextcloud"}},u={},s=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],l={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=neutrinet"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Neutrinet with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/neutrinet"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/neutrinet.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Neutrinet")," is for Neutrinet members that have a Neutrinet VPN. It automatically checks and renews the VPN certificates. This package also contains a web page with contact information and other useful links."),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For contributers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debugging")),(0,a.kt)("p",null,"You can manually run the cron job that attempts to renew the certificates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo /etc/cron.daily/neutrinet-renew-cert\n")),(0,a.kt)("p",null,"This actually runs the script in ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/neutrinet/renew_cert/"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /opt/neutrinet/renew_cert\nsudo ./renew_cert_cron.sh\n")),(0,a.kt)("p",null,"You can increase the verbosity with the option ",(0,a.kt)("inlineCode",{parentName:"p"},"-v"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ./renew_cert_cron.sh -v\n")),(0,a.kt)("p",null,"To install the app without checking for certificates, run ",(0,a.kt)("inlineCode",{parentName:"p"},"export PACKAGE_CHECK_EXEC=1"),"."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.domainepublic.net/Neutrinet/neutrinet_ynh"},"gitlab.domainepublic.net/Neutrinet/neutrinet_ynh")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.domainepublic.net/Neutrinet/neutrinet_ynh"},"gitlab.domainepublic.net - Neutrinet/neutrinet - YunoHost-Apps/neutrinet")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://git.domainepublic.net/Neutrinet/neutrinet_ynh/-/issues"},"gitlab.domainepublic.net - Neutrinet/neutrinet - YunoHost-Apps/neutrinet/issues"))))}m.isMDXComponent=!0}}]);