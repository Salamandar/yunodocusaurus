"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||r;return a?o.createElement(d,l(l({ref:t},u),{},{components:a})):o.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={title:"Wallabag2",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wallabag2"}},l=void 0,i={unversionedId:"applications/docs/app_wallabag2",id:"applications/docs/app_wallabag2",title:"Wallabag2",description:"wallabag2's logo",source:"@site/docs/04.applications/10.docs/app_wallabag2.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_wallabag2",permalink:"/yunodocusaurus/docs/applications/docs/app_wallabag2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_wallabag2.md",tags:[],version:"current",frontMatter:{title:"Wallabag2",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_wallabag2"}},sidebar:"tutorialSidebar",previous:{title:"Vikunja",permalink:"/yunodocusaurus/docs/applications/docs/app_vikunja"},next:{title:"Weblate",permalink:"/yunodocusaurus/docs/applications/docs/app_weblate"}},s={},p=[{value:"Features",id:"features",level:3},{value:"Useful links",id:"useful-links",level:2},{value:"Upgrade from v1.x",id:"upgrade-from-v1x",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://wallabag2_logo.svg?resize=,80",alt:"wallabag2's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=wallabag2"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Wallabag2 with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/wallabag2"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/wallabag2.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"Wallabag is a self hostable Read-It-Later application allowing you to not miss any content anymore. Click, save, read it when you can.\nIt extracts content so that you can read it when you have time."),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("p",null,"In addition to Wallabag core features, the following are made available with this package:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Integrate with YunoHost users and SSO - i.e. logout button"),(0,n.kt)("li",{parentName:"ul"},"Allow one user to be the administrator (set at the installation)"),(0,n.kt)("li",{parentName:"ul"},"Asynchronous import using Redis (need to be enabled in the ",(0,n.kt)("em",{parentName:"li"},"Internal Settings"),"). RabbitMQ import not supported (yet ?)")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website : ",(0,n.kt)("a",{parentName:"li",href:"https://www.wallabag.org/"},"www.wallabag.org")),(0,n.kt)("li",{parentName:"ul"},"Official documentation : ",(0,n.kt)("a",{parentName:"li",href:"https://doc.wallabag.org/"},"doc.wallabag.org")),(0,n.kt)("li",{parentName:"ul"},"Demonstration : ",(0,n.kt)("a",{parentName:"li",href:"https://vimeo.com/video/167435064"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository : ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wallabag2_ynh"},"github.com - YunoHost-Apps/wallabag2")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue) : ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/wallabag2_ynh/issues"},"github.com - YunoHost-Apps/wallabag2/issues"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"upgrade-from-v1x"},"Upgrade from v1.x"),(0,n.kt)("p",null,"No automatic upgrade process is available. You need a manual (but simple) migration from Wallabag v1.\nPlease take a look at the ",(0,n.kt)("a",{parentName:"p",href:"https://doc.wallabag.org/en/user/import/wallabagv1.html"},"official documentation"),"."))}m.isMDXComponent=!0}}]);