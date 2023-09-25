"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2864],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(g,o(o({ref:e},u),{},{components:a})):n.createElement(g,o({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29170:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Gitea",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gitea"}},o=void 0,l={unversionedId:"applications/docs/app_gitea",id:"applications/docs/app_gitea",title:"Gitea",description:"Gitea's logo",source:"@site/docs/04.applications/10.docs/app_gitea.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_gitea",permalink:"/yunodocusaurus/docs/applications/docs/app_gitea",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_gitea.md",tags:[],version:"current",frontMatter:{title:"Gitea",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gitea"}},sidebar:"docsSidebar",previous:{title:"Ghost",permalink:"/yunodocusaurus/docs/applications/docs/app_ghost"},next:{title:"Gitlab Runner",permalink:"/yunodocusaurus/docs/applications/docs/app_gitlab-runner"}},p={},s=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Customer applications",id:"customer-applications",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Sources",id:"sources",level:3}],u={toc:s},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://gitea_logo.png?width=80",alt:"Gitea's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=gitea"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Gitea with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/gitea"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/gitea.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Gitea is a painless self-hosted Git service. It is similar to GitHub, Bitbucket, and GitLab. Gitea is a fork of Gogs.",(0,r.kt)("a",{parentName:"p",href:"#sources"},"\xb9")),(0,r.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,r.kt)("p",null,"If you want to use Git commands (like ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),"), you need to set this app as public."),(0,r.kt)("h2",{id:"customer-applications"},"Customer applications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Application name ","[\xb2]"),(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Multi-account"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Play Store"),(0,r.kt)("th",{parentName:"tr",align:null},"F-Droid"),(0,r.kt)("th",{parentName:"tr",align:null},"Apple Store"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitNex (un)"),(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gitnex.com/"},"gitnex.com (en)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=org.mian.gitnex"},"GitNex - PlayStore")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://f-droid.org/fr/packages/org.mian.gitnex/"},"GitNex - F-Droid")),(0,r.kt)("td",{parentName:"tr",align:null},"X")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[\xb2]",": (of) : Official / (un) : Unofficial")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://gitea.io/en-us/"},"gitea.io")),(0,r.kt)("li",{parentName:"ul"},"Official documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitea.io/en-us/"},"docs.gitea.io")),(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gitea_ynh"},"github.com - YunoHost-Apps/gitea")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gitea_ynh/issues"},"github.com - YunoHost-Apps/gitea/issues"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sources"},"Sources"),(0,r.kt)("p",null,"\xb9 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitea.io/en-us/"},"docs.gitea.io")))}m.isMDXComponent=!0}}]);