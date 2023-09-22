"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return a?o.createElement(d,s(s({ref:t},c),{},{components:a})):o.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={title:"Weblate",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_weblate"}},s=void 0,l={unversionedId:"applications/docs/app_weblate",id:"applications/docs/app_weblate",title:"Weblate",description:"weblate's logo",source:"@site/docs/04.applications/10.docs/app_weblate.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_weblate",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_weblate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_weblate.md",tags:[],version:"current",frontMatter:{title:"Weblate",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_weblate"}},sidebar:"tutorialSidebar",previous:{title:"Wallabag2",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_wallabag2"},next:{title:"Webmin",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_webmin"}},i={},p=[{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://weblate_logo.svg?resize=,80",alt:"weblate's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=weblate"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Weblate with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/weblate"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/weblate.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"Weblate is a web-based translation tool strongly linked to version control systems. Through a clear and simple user interface, Weblate allows the propagation of translations between sub-projects, can check the\nquality of the translations and is automatically linked to the source files.\nWeblate works very well with a GitLab, GitHub, Bitbucket server. It is possible to import already existing translations of a project, allowing everyone to contribute to the translation of a project via its web interface,\nand then push the translations to the repository.\nThere is a system for reviewing, suggesting, commenting on a translation.\nYou can install a third party authentication, for example you can log in with your GitHub account. Our account then allows us to keep a history."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://weblate.org/"},"weblate.org")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.weblate.org/"},"docs.weblate.org")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.weblate.org/"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/weblate_ynh"},"github.com - YunoHost-Apps/weblate")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/weblate_ynh/issues"},"github.com - YunoHost-Apps/weblate/issues"))))}b.isMDXComponent=!0}}]);