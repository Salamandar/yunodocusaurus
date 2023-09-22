"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8864],{3905:(e,t,s)=>{s.d(t,{Zo:()=>l,kt:()=>f});var r=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,o=function(e,t){if(null==e)return{};var s,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):n(n({},t),e)),s},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(s),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return s?r.createElement(f,n(n({ref:t},l),{},{components:s})):r.createElement(f,n({ref:t},l))}));function f(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=s.length,n=new Array(a);n[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<a;c++)n[c]=s[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},34348:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=s(87462),o=(s(67294),s(3905));const a={title:"Discourse",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_discourse"}},n=void 0,i={unversionedId:"applications/docs/app_discourse",id:"applications/docs/app_discourse",title:"Discourse",description:"Discourse's logo",source:"@site/docs/04.applications/10.docs/app_discourse.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_discourse",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_discourse",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_discourse.md",tags:[],version:"current",frontMatter:{title:"Discourse",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_discourse"}},sidebar:"tutorialSidebar",previous:{title:"Diagrams.net",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_diagramsnet"},next:{title:"Dispatch",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_dispatch"}},u={},c=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Sources",id:"sources",level:3}],l={toc:c},p="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://discourse_logo.svg?resize=,80",alt:"Discourse's logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=discourse"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Discourse with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://ci-apps.yunohost.org/jenkins/job/discourse%20%28Community%29/lastBuild/consoleFull"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/discourse.svg",alt:"Integration level"}))),(0,o.kt)("p",null,'Discourse has all the usual features of a discussion forum: users, discussions, search, private messages, etc. The "mailing list" mode allows you to use most of the forum\'s functionalities via e-mail. Written in Ruby and JavaScript, it requires a PostgreSQL database and a mail server.',(0,o.kt)("a",{parentName:"p",href:"#sources"},"\xb9")),(0,o.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,o.kt)("p",null,"In the administration dashboard, The installed version is shown as unknown (due the fact that we don't use Git for installation); you can safely ignore that as the YunoHost package will be maintained. On ARM devices, default generated avatars are missing the profile initials (they are only a plain discus)."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.discourse.org/"},"www.discourse.org")),(0,o.kt)("li",{parentName:"ul"},"Official documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://www.discourse.org/customers"},"www.discourse.org - customers")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/discourse_ynh"},"github.com - YunoHost-Apps/discourse")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/discourse_ynh/issues"},"github.com - YunoHost-Apps/discourse/issues"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sources"},"Sources"),(0,o.kt)("p",null,"\xb9 ",(0,o.kt)("a",{parentName:"p",href:"https://framalibre.org/content/discourse"},"framalibre.org - Discourse (fr)")))}d.isMDXComponent=!0}}]);