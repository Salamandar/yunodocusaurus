"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5317],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>y});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(i),d=r,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return i?n.createElement(y,o(o({ref:t},u),{},{components:i})):n.createElement(y,o({ref:t},u))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},44967:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const a={title:"YesWiki",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_yeswiki"}},o=void 0,s={unversionedId:"applications/docs/app_yeswiki",id:"applications/docs/app_yeswiki",title:"YesWiki",description:"Installer YesWiki with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_yeswiki.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_yeswiki",permalink:"/yunodocusaurus/docs/applications/docs/app_yeswiki",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_yeswiki.md",tags:[],version:"current",frontMatter:{title:"YesWiki",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_yeswiki"}},sidebar:"tutorialSidebar",previous:{title:"Yellow",permalink:"/yunodocusaurus/docs/applications/docs/app_yellow"},next:{title:"Yourls",permalink:"/yunodocusaurus/docs/applications/docs/app_yourls"}},p={},l=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Multi-users support",id:"multi-users-support",level:5},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=yeswiki"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer YesWiki with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/yeswiki"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/yeswiki.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"YesWiki")," is a wiki designed to remain simple, very easy to install, in French translated into English, Spanish, Catalan, Flemish..."),(0,r.kt)("p",null,"However, with a YesWiki we can build a website with multiple uses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Gather all the information of a project or a group (function of "central station")'),(0,r.kt)("li",{parentName:"ul"},"Mapping members or places in a participatory way"),(0,r.kt)("li",{parentName:"ul"},"Share resources, lists, calendars thanks to powerful cooperative databases"),(0,r.kt)("li",{parentName:"ul"},"Communicate information flows"),(0,r.kt)("li",{parentName:"ul"},"Cultivate a bit of freedom...")),(0,r.kt)("h3",{id:"screenshots"},"Screenshots"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/yeswiki_ynh/blob/master/doc/screenshots/yeswiki_screenshots.png",alt:"Screenshot of YesWiki"})),(0,r.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,r.kt)("h5",{id:"multi-users-support"},"Multi-users support"),(0,r.kt)("p",null,"LDAP integration is supported and required on new installs. It is possible to disable it on older installs by removing the loginldap plugin. ",(0,r.kt)("strong",{parentName:"p"},"Warning: only do it if you know credentials for a wiki admin account")),(0,r.kt)("p",null,"At the moment SSO authentication is not supported. It is necessary to login on the wiki."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://yeswiki.net"},"yeswiki.net")),(0,r.kt)("li",{parentName:"ul"},"Demonstration: ",(0,r.kt)("a",{parentName:"li",href:"https://ferme.yeswiki.net/?CreerSonWiki"},"Demo (fr)")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/yeswiki_ynh"},"github.com - YunoHost-Apps/yeswiki")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/yeswiki_ynh/issues"},"github.com - YunoHost-Apps/yeswiki/issues"))))}m.isMDXComponent=!0}}]);