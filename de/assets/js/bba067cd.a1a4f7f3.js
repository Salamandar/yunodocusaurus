"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9221],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=c(n),m=o,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[l]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39208:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Coturn",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_coturn"}},i=void 0,s={unversionedId:"applications/docs/app_coturn",id:"applications/docs/app_coturn",title:"Coturn",description:"Install Coturn with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_coturn.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_coturn",permalink:"/yunodocusaurus/de/docs/applications/docs/app_coturn",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_coturn.md",tags:[],version:"current",frontMatter:{title:"Coturn",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_coturn"}},sidebar:"tutorialSidebar",previous:{title:"Converse",permalink:"/yunodocusaurus/de/docs/applications/docs/app_converse"},next:{title:"Cowyo",permalink:"/yunodocusaurus/de/docs/applications/docs/app_cowyo"}},p={},c=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Testing",id:"testing",level:4},{value:"Useful links",id:"useful-links",level:2}],u={toc:c},l="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=coturn"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Install Coturn with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/coturn"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/coturn.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Coturn")," is a Free open source implementation of TURN and STUN Server.\nThe TURN Server is a VoIP media traffic NAT traversal server and gateway. It can be used as a general-purpose network traffic TURN server and gateway, too."),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You need to install TURN server in a root or subdomain like turn.domain.tld\nHow to configure this app: a plain file with SSH."),(0,o.kt)("h4",{id:"testing"},"Testing"),(0,o.kt)("p",null,"For testing we can use Trickle-Ice testing tool. Go to ",(0,o.kt)("a",{parentName:"p",href:"https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/"},"trickle-ice page")," and enter following details."),(0,o.kt)("p",null,"TURN URI     : turn:<YOUR_PUBLIC_IP_ADDRESS>:5349\nTURN username: <YOUR_USERNAME>\nTURN password: <YOUR_PASSWORD>"),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/coturn/coturn"},"github.com/coturn/coturn")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/coturn_ynh"},"github.com - YunoHost-Apps/coturn")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/coturn_ynh/issues"},"github.com - YunoHost-Apps/coturn/issues"))))}d.isMDXComponent=!0}}]);