"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(87462),o=(r(67294),r(3905));const n={title:"Moving an app folder to a different storage",template:"docs",taxonomy:{category:"docs"},routes:{default:"/moving_app_folder"}},i=void 0,l={unversionedId:"administer/tutorials/moving_app_folder",id:"administer/tutorials/moving_app_folder",title:"Moving an app folder to a different storage",description:"Applications folder are (usually) located in /var/www/$appname",source:"@site/docs/02.administer/45.tutorials/55.moving_app_folder.md",sourceDirName:"02.administer/45.tutorials",slug:"/administer/tutorials/moving_app_folder",permalink:"/yunodocusaurus/it/docs/administer/tutorials/moving_app_folder",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/55.moving_app_folder.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{title:"Moving an app folder to a different storage",template:"docs",taxonomy:{category:"docs"},routes:{default:"/moving_app_folder"}},sidebar:"tutorialSidebar",previous:{title:"Custom certificates",permalink:"/yunodocusaurus/it/docs/administer/tutorials/certificate_custom"},next:{title:"Security",permalink:"/yunodocusaurus/it/docs/administer/tutorials/security"}},s={},d=[{value:"1. Move the entire wordpress folder to an external hard drive",id:"1-move-the-entire-wordpress-folder-to-an-external-hard-drive",level:4},{value:"2. Create a symbolic link",id:"2-create-a-symbolic-link",level:4},{value:"3. Tweak permissions (maybe?)",id:"3-tweak-permissions-maybe",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Applications folder are (",(0,o.kt)("em",{parentName:"p"},"usually"),") located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/$appname")),(0,o.kt)("p",null,"If an application folder is expected to get bigger because of the amount of data it contains, it might be relevant to move it to another storage (like an external hard drive)."),(0,o.kt)("p",null,"Here's a summary of how to do this the application wordpress. Here, is is assumed that\n",(0,o.kt)("a",{parentName:"p",href:"/external_storage"},"you already mounted the external hard-drive"),"."),(0,o.kt)("h4",{id:"1-move-the-entire-wordpress-folder-to-an-external-hard-drive"},"1. Move the entire wordpress folder to an external hard drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mv /var/www/wordpress /media/externalharddrive/\n")),(0,o.kt)("h4",{id:"2-create-a-symbolic-link"},"2. Create a symbolic link"),(0,o.kt)("p",null,"So that programs looking for files in /var/www/wordpress will actually take them from the harddrive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ln -s /media/externalharddrive/wordpress /var/www/wordpress\n")),(0,o.kt)("h4",{id:"3-tweak-permissions-maybe"},"3. Tweak permissions (maybe?)"),(0,o.kt)("p",null,"After this, note that you may need to tweak the permissions of ",(0,o.kt)("inlineCode",{parentName:"p"},"/media/externalharddrive")," so that ",(0,o.kt)("inlineCode",{parentName:"p"},"www-data")," (or the user corresponding to the app) is able to read through the folder... Something like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"chgrp www-data /media/externalharddrive\nchmod g+rx /media/externalharddrive\n\n")),(0,o.kt)("p",null,"(but it depends on your exact setup... Please update this doc page if you figure\nout what to do exactly)"),(0,o.kt)("p",null,"!!! If you want to do it with ",(0,o.kt)("em",{parentName:"p"},"NextCloud"),", see ",(0,o.kt)("a",{parentName:"p",href:"/app_nextcloud"},"this Tutorial"),"."))}c.isMDXComponent=!0}}]);