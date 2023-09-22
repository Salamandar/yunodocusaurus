"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9767],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(b,s(s({ref:t},c),{},{components:a})):r.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Kanboard",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_kanboard"}},s=void 0,p={unversionedId:"applications/docs/app_kanboard",id:"applications/docs/app_kanboard",title:"Kanboard",description:"kanboard's logo",source:"@site/docs/04.applications/10.docs/app_kanboard.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_kanboard",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_kanboard",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_kanboard.md",tags:[],version:"current",frontMatter:{title:"Kanboard",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_kanboard"}},sidebar:"tutorialSidebar",previous:{title:"JupyterLab",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_jupyterlab"},next:{title:"KeeWeb",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_keeweb"}},i={},l=[{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://kanboard_logo.png?height=80",alt:"kanboard's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=kanboard"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install kanboard with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/kanboard"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/kanboard.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"Kanboard is a visual task manager that makes it easy to manage small projects in a collaborative way. The tool is particularly suitable for people who use the Kanban method. Kanboard can be seen as a (Simplified) alternative to the proprietary Trello software. Kanboard is a minimalist software, it focuses only on the features that are really necessary. The user interface is simple and clear.\nThe tool is designed to run on a small machine such as a Raspberry Pi or a Virtual Private Server (VPS). There are no external dependencies, drag and drop of tasks uses the new HTML5 APIs."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://kanboard.org"},"kanboard.org")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.kanboard.org/en/latest"},"docs.kanboard.org/en/latest")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://framaboard.org"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/kanboard_ynh"},"github.com - YunoHost-Apps/kanboard")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/kanboard_ynh/issues"},"github.com - YunoHost-Apps/kanboard/issues"))))}d.isMDXComponent=!0}}]);