"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7862],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Garradin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_garradin"}},i=void 0,s={unversionedId:"applications/docs/app_garradin",id:"applications/docs/app_garradin",title:"Garradin",description:"Garradin's logo",source:"@site/docs/04.applications/10.docs/app_garradin.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_garradin",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_garradin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_garradin.md",tags:[],version:"current",frontMatter:{title:"Garradin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_garradin"}},sidebar:"tutorialSidebar",previous:{title:"Galette",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_galette"},next:{title:"Gemserv",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_gemserv"}},p={},l=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Sources",id:"sources",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://garradin_logo.svg?resize=,80",alt:"Garradin's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=garradin"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Garradin with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/garradin"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/garradin.svg",alt:"Integration level"}))),(0,n.kt)("p",null,'Garradin (a word meaning silver in an Aboriginal dialect of northern Australia, pronounced "gar-a-dine "em) is a software program for associative management. It is the tool of choice to manage an association, a sports club, an NGO, etc. It is designed to meet the needs of a small to medium-sized structure: membership management, accounting, website, note-taking at meetings, archiving and sharing of the association\'s operating documents, discussion between members, etc.\xb9](#sources)'),(0,n.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,n.kt)("p",null,"the SSO system is not implemented, nor direct installation. The admin user will have to create his account with the account creation form that he will find at the end of the installation. Several reasons led me not to implement SSO. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/garradin_ynh#probl%C3%A8mes--avertissements-"},"More information (fr)")),(0,n.kt)("p",null,"Applications available exclusively in French."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://garradin.eu"},"garradin.eu (fr)")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://fossil.kd2.org/garradin/wiki?name=Garradin"},"fossil.kd2.org - garradin (fr)")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/garradin_ynh"},"github.com - YunoHost-Apps/garradin")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/garradin_ynh/issues"},"github.com - YunoHost-Apps/garradin/issues"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sources"},"Sources"),(0,n.kt)("p",null,"\xb9 ",(0,n.kt)("a",{parentName:"p",href:"https://garradin.eu/a-propos/"},"garradin.eu - a-propos (fr)")))}d.isMDXComponent=!0}}]);