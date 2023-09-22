"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1124],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=s(a),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(g,i(i({ref:e},c),{},{components:a})):r.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[u]="string"==typeof t?t:o,i[1]=p;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57766:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const n={title:"Gitlab",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gitlab"}},i=void 0,p={unversionedId:"applications/docs/app_gitlab",id:"applications/docs/app_gitlab",title:"Gitlab",description:"GitLab's logo",source:"@site/docs/04.applications/10.docs/app_gitlab.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_gitlab",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_gitlab",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_gitlab.md",tags:[],version:"current",frontMatter:{title:"Gitlab",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gitlab"}},sidebar:"tutorialSidebar",previous:{title:"Gitlab Runner",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_gitlab-runner"},next:{title:"Glowing Bear",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_glowing_bear"}},l={},s=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Customer applications",id:"customer-applications",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Sources",id:"sources",level:3}],c={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://gitlab_logo.svg?resize=,80",alt:"GitLab's logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=gitlab"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install GitLab with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/gitlab"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/gitlab.svg",alt:"Integration level"}))),(0,o.kt)("p",null,"GitLab is a Git web app forge very complete whith a dynamic development (a new version is released every 22nd of the month). GitLab is an open core software with two versions: A free community version and a proprietary enterprise version with more features. ",(0,o.kt)("a",{parentName:"p",href:"#sources"},"\xb9")),(0,o.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,o.kt)("p",null,"The GitLab application is not compatible with 32-bit architectures."),(0,o.kt)("h2",{id:"customer-applications"},"Customer applications"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Application name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Platform"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Multi-account"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Play Store"),(0,o.kt)("th",{parentName:"tr",align:"center"},"F-Droid"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Apple Store"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"LabCoat avec Deep Links for LabCoat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Android"),(0,o.kt)("td",{parentName:"tr",align:"center"},"?"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=com.commit451.gitlab"},"play.google.com - LabCoat")," / ",(0,o.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=com.nomadlabs.labcoat.deeplinks"},"play.google.com - Deep Links for LabCoat")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://f-droid.org/fr/packages/com.commit451.gitlab/"},"f-droid.org - LabCoat")," / ",(0,o.kt)("a",{parentName:"td",href:"https://f-droid.org/fr/packages/com.nomadlabs.labcoat.deeplinks/"},"f-droid.org - Deep Links for LabCoat")),(0,o.kt)("td",{parentName:"tr",align:"center"},"?")))),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://about.gitlab.com/"},"about.gitlab.com")),(0,o.kt)("li",{parentName:"ul"},"Official documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/"},"docs.gitlab.com")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gitlab_ynh"},"github.com - YunoHost-Apps/gitlab")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gitlab_ynh/issues"},"github.com -YunoHost-Apps/gitlab/issues"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sources"},"Sources"),(0,o.kt)("p",null,"\xb9 ",(0,o.kt)("a",{parentName:"p",href:"https://framalibre.org/content/gitlab"},"framalibre.org - GitLab (fr)")))}m.isMDXComponent=!0}}]);