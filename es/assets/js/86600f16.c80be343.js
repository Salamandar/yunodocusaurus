"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"h5ai",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_h5ai"}},i=void 0,s={unversionedId:"applications/docs/app_h5ai",id:"applications/docs/app_h5ai",title:"h5ai",description:"Installer h5ai with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_h5ai.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_h5ai",permalink:"/yunodocusaurus/es/docs/applications/docs/app_h5ai",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_h5ai.md",tags:[],version:"current",frontMatter:{title:"h5ai",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_h5ai"}},sidebar:"tutorialSidebar",previous:{title:"Guacamole",permalink:"/yunodocusaurus/es/docs/applications/docs/app_guacamole"},next:{title:"Halcyon",permalink:"/yunodocusaurus/es/docs/applications/docs/app_halcyon"}},p={},l=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=h5ai"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer h5ai with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/h5ai"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/h5ai.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"h5ai")," is a modern HTTP web server index for NGINX."),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After installing the application, you can add documents in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/documents")," (or the corresponding path you choosed).\nh5ai doesn't allow to edit or upload new documents directly from the web browser. But you can imagine coupling the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/documents")," to Nextcloud or some sort of FTP to allow some users to upload content, and use h5ai as a public read-only interface.\nThe main configuration file is ",(0,o.kt)("inlineCode",{parentName:"p"},"_h5ai/private/conf/options.json"),". You might want to change some of the documented settings. But there are some more files in ",(0,o.kt)("inlineCode",{parentName:"p"},"_h5ai/private/conf")," you might have a look at."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://larsjung.de/h5ai/"},"larsjung.de/h5ai")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/h5ai_ynh"},"github.com - YunoHost-Apps/h5ai")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/h5ai_ynh/issues"},"github.com - YunoHost-Apps/h5ai/issues"))))}m.isMDXComponent=!0}}]);