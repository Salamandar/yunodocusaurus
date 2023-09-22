"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5392],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=l(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[c]="string"==typeof t?t:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7984:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Gitlab Runner",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gitlab-runner"}},i=void 0,p={unversionedId:"applications/docs/app_gitlab-runner",id:"applications/docs/app_gitlab-runner",title:"Gitlab Runner",description:"GitLab Runner's logo",source:"@site/docs/04.applications/10.docs/app_gitlab-runner.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_gitlab-runner",permalink:"/yunodocusaurus/docs/applications/docs/app_gitlab-runner",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_gitlab-runner.md",tags:[],version:"current",frontMatter:{title:"Gitlab Runner",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_gitlab-runner"}},sidebar:"tutorialSidebar",previous:{title:"Gitea",permalink:"/yunodocusaurus/docs/applications/docs/app_gitea"},next:{title:"Gitlab",permalink:"/yunodocusaurus/docs/applications/docs/app_gitlab"}},s={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],u={toc:l},c="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://gitlab-runner_logo.png?height=80",alt:"GitLab Runner's logo"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=gitlab-runner"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install GitLab Runner with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/gitlab-runner"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/gitlab-runner.svg",alt:"Integration level"}))),(0,a.kt)("p",null,"GitLab Runner is a continuous integration tool to use with a GitLab instance (YNH or not)."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,'By the admin panel of GitLab or the settings "CI/CD" of your project.'),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Official documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/runner/"},"docs.gitlab.com - runner")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gitlab-runner_ynh"},"github.com - YunoHost-Apps/APPLICATION")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/gitlab-runner_ynh/issues"},"github.com - YunoHost-Apps/APPLICATION/issues"))))}g.isMDXComponent=!0}}]);