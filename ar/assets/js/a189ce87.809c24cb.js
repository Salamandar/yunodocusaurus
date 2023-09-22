"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2545],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return r?o.createElement(f,p(p({ref:t},c),{},{components:r})):o.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Droppy",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_droppy"}},p=void 0,i={unversionedId:"applications/docs/app_droppy",id:"applications/docs/app_droppy",title:"Droppy",description:"Installer Droppy with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_droppy.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_droppy",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_droppy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_droppy.md",tags:[],version:"current",frontMatter:{title:"Droppy",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_droppy"}},sidebar:"tutorialSidebar",previous:{title:"Dotclear 2",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_dotclear2"},next:{title:"Drupal",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_drupal"}},s={},l=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=droppy"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Droppy with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/droppy"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/droppy.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Droppy")," is a self-hosted file storage server with a web interface and capabilities to edit files and view media directly in the browser."),(0,n.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("p",null,"Development of Droppy has been abandoned by its author, and its repository has been archived. Expect no future updates nor security fixes."),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"How to configure this app: a JSON configuration file with SSH. ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/www/droppy/config/config.json."),"\nShared files are stored in the following directory: ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/droppy/files")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/silverwind/droppy"},"github.com/silverwind/droppy")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/droppy_ynh"},"github.com - YunoHost-Apps/droppy")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/droppy_ynh/issues"},"github.com - YunoHost-Apps/droppy/issues"))))}d.isMDXComponent=!0}}]);