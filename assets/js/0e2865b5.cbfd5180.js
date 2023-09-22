"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7392],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>y});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=c(a),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(y,p(p({ref:e},l),{},{components:a})):r.createElement(y,p({ref:e},l))}));function y(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:n,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6521:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"CryptPad",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_cryptpad"}},p=void 0,i={unversionedId:"applications/docs/app_cryptpad",id:"applications/docs/app_cryptpad",title:"CryptPad",description:"Installer CryptPad with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_cryptpad.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_cryptpad",permalink:"/yunodocusaurus/docs/applications/docs/app_cryptpad",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_cryptpad.md",tags:[],version:"current",frontMatter:{title:"CryptPad",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_cryptpad"}},sidebar:"tutorialSidebar",previous:{title:"Cowyo",permalink:"/yunodocusaurus/docs/applications/docs/app_cowyo"},next:{title:"Cubiks 2048",permalink:"/yunodocusaurus/docs/applications/docs/app_cubiks-2048"}},s={},c=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:2},{value:"Configuration",id:"configuration",level:4},{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=cryptpad"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer CryptPad with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/cryptpad"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/cryptpad.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"CryptPad")," is a collaboration suite that is end-to-end-encrypted and open-source. It is built to enable collaboration, synchronizing changes to documents in real time. Because all data is encrypted, the service and its administrators have no way of seeing the content being edited and stored."),(0,n.kt)("h2",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("h4",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Once CryptPad is installed, create an account via the Register button on the home page. To make this account an instance administrator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Copy the public key found in User Menu (avatar at the top right) > Settings > Account > Public Signing Key\nPaste this key in `/var/www/cryptpad/config/config.js` in the following array (uncomment and replace the placeholder):\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'adminKeys: [\n        "[cryptpad-user1@my.awesome.website/YZgXQxKR0Rcb6r6CmxHPdAGLVludrAF2lEnkbx1vVOo=]",\n],\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Restart CryptPad service (In YunoHost webadmin -> Services -> cryptpad -> Restart)\n")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://cryptpad.fr/"},"cryptpad.fr")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://cryptpad.fr/"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/cryptpad_ynh"},"github.com - YunoHost-Apps/cryptpad")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/cryptpad_ynh/issues"},"github.com - YunoHost-Apps/cryptpad/issues"))))}d.isMDXComponent=!0}}]);