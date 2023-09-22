"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,g=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Changing the administration password",template:"docs",taxonomy:{category:"docs"},routes:{default:"/change_admin_password"}},i=void 0,s={unversionedId:"administer/troubleshooting/change_admin_password",id:"administer/troubleshooting/change_admin_password",title:"Changing the administration password",description:"You may want to change your administrator password for security reason or because you forgot it.",source:"@site/docs/02.administer/50.troubleshooting/10.change_admin_password.md",sourceDirName:"02.administer/50.troubleshooting",slug:"/administer/troubleshooting/change_admin_password",permalink:"/yunodocusaurus/it/docs/administer/troubleshooting/change_admin_password",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/50.troubleshooting/10.change_admin_password.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Changing the administration password",template:"docs",taxonomy:{category:"docs"},routes:{default:"/change_admin_password"}},sidebar:"tutorialSidebar",previous:{title:"IP address unban",permalink:"/yunodocusaurus/it/docs/administer/troubleshooting/fail2ban"},next:{title:"Get access back into YunoHost",permalink:"/yunodocusaurus/it/docs/administer/troubleshooting/noaccess"}},c={},u=[{value:"Using the web administration interface",id:"using-the-web-administration-interface",level:2},{value:"Using the command line interface",id:"using-the-command-line-interface",level:2}],d={toc:u},l="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may want to change your administrator password for security reason or because you forgot it."),(0,o.kt)("p",null,"If you forgot your password or are unable to connect using the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user, you\nmay still be able to change the password if you're able to login as ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," on\nSSH (from your local network! or using a rescue mode if you're on a VPS...)"),(0,o.kt)("h2",{id:"using-the-web-administration-interface"},"Using the web administration interface"),(0,o.kt)("p",null,"First, connect to your web administration."),(0,o.kt)("p",null,"Then go to Tools > Change administration password."),(0,o.kt)("h2",{id:"using-the-command-line-interface"},"Using the command line interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost tools adminpw\n")))}p.isMDXComponent=!0}}]);