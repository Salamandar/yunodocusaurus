"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5936],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),y=r,m=u["".concat(l,".").concat(y)]||u[y]||f[y]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},5391:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Firefox Sync",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ffsync"}},i=void 0,s={unversionedId:"applications/docs/app_ffsync",id:"applications/docs/app_ffsync",title:"Firefox Sync",description:"Firefox Sync's logo",source:"@site/docs/04.applications/10.docs/app_ffsync.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_ffsync",permalink:"/yunodocusaurus/es/docs/applications/docs/app_ffsync",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_ffsync.md",tags:[],version:"current",frontMatter:{title:"Firefox Sync",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_ffsync"}},sidebar:"tutorialSidebar",previous:{title:"Fallback",permalink:"/yunodocusaurus/es/docs/applications/docs/app_fallback"},next:{title:"Firefly III",permalink:"/yunodocusaurus/es/docs/applications/docs/app_firefly-iii"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Firefox desktop",id:"firefox-desktop",level:3},{value:"Firefox mobile",id:"firefox-mobile",level:3},{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://ffsync_logo.png?width=80",alt:"Firefox Sync's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=ffsync"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Firefox Sync with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/ffsync"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/ffsync.svg",alt:"Integration level"}))),(0,r.kt)("p",null,"Firefox Sync permits synchronize plugins, tabs, bookmarks, favorites, history over many Firefox instances."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Once installed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain.tld/path")," site should display a page explaining how to configure it.\nTo use your personal Firefox sync server, you will need to configure your ",(0,r.kt)("a",{parentName:"p",href:"https://www.mozilla.org/fr/firefox/new/"},"Firefox")," web browser."),(0,r.kt)("h3",{id:"firefox-desktop"},"Firefox desktop"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Firefox URL bar put: ",(0,r.kt)("inlineCode",{parentName:"li"},"about:config"),"."),(0,r.kt)("li",{parentName:"ol"},"Search for: ",(0,r.kt)("inlineCode",{parentName:"li"},"identity.sync.tokenserver.uri"),"."),(0,r.kt)("li",{parentName:"ol"},"Replace the URL by: ",(0,r.kt)("a",{parentName:"li",href:"https://mydomain.tld/path/token/1.0/sync/1.5"},"https://mydomain.tld/path/token/1.0/sync/1.5")),(0,r.kt)("li",{parentName:"ol"},"Create an account at Mozilla: ",(0,r.kt)("a",{parentName:"li",href:"https://accounts.firefox.com/signup"},"https://accounts.firefox.com/signup"))),(0,r.kt)("h3",{id:"firefox-mobile"},"Firefox mobile"),(0,r.kt)("p",null,"With the last version of firefox mobile it's same than for desktop."),(0,r.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,r.kt)("p",null,"By default, a configured server will report authentication to the account server hosted by Mozilla at ",(0,r.kt)("a",{parentName:"p",href:"https://accounts.firefox.com."},"https://accounts.firefox.com.")," You will still need to authenticate to Mozilla, but your information will be stored on your host."),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application software repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ffsync_ynh"},"github.com - YunoHost-Apps/ffsync")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/ffsync_ynh/issues"},"github.com - YunoHost-Apps/ffsync/issues"))))}f.isMDXComponent=!0}}]);