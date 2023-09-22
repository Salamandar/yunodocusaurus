"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Standard Notes",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_snweb"}},s=void 0,i={unversionedId:"applications/docs/app_snweb",id:"applications/docs/app_snweb",title:"Standard Notes",description:"Installer Standard Notes with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_snweb.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_snweb",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_snweb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_snweb.md",tags:[],version:"current",frontMatter:{title:"Standard Notes",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_snweb"}},sidebar:"tutorialSidebar",previous:{title:"Standard Notes Server",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_snserver"},next:{title:"SOGo",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_sogo"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=snweb"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Standard Notes with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/snweb"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/snweb.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Standard Notes")," is a end-to-end encrypted note-taking app."),(0,a.kt)("h3",{id:"screenshots"},"Screenshots"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/snweb_ynh/blob/master/doc/screenshots/standard_notes.png",alt:"Screenshot of Standard Notes"})),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No single-sign on or LDAP integration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The app requires up 1500 MB of RAM to install")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The app requires at least 100 MB of RAM to work properly.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The app requires around 3500 MB of disk.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A dedicated domain is requierd if you want to use extensions."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"notes.your-domain.tld/ -> Extensions are working"),(0,a.kt)("li",{parentName:"ul"},"your-domain.tld/notes/ -> Extensions are not working"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The config-file is stored under "/opt/yunohost/$app/live/.env"'))),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://standardnotes.com/"},"standardnotes.com")),(0,a.kt)("li",{parentName:"ul"},"Demonstration: ",(0,a.kt)("a",{parentName:"li",href:"https://demo.snweb.eu/login"},"Demo")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/snweb_ynh"},"github.com - YunoHost-Apps/snweb")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/snweb_ynh/issues"},"github.com - YunoHost-Apps/snweb/issues"))))}d.isMDXComponent=!0}}]);