"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||o;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"OwnTracks",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_owntracks"}},s=void 0,i={unversionedId:"applications/docs/app_owntracks",id:"applications/docs/app_owntracks",title:"OwnTracks",description:"Installer OwnTracks with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_owntracks.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_owntracks",permalink:"/yunodocusaurus/docs/applications/docs/app_owntracks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_owntracks.md",tags:[],version:"current",frontMatter:{title:"OwnTracks",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_owntracks"}},sidebar:"tutorialSidebar",previous:{title:"Owncast",permalink:"/yunodocusaurus/docs/applications/docs/app_owncast"},next:{title:"PeerTube search-index",permalink:"/yunodocusaurus/docs/applications/docs/app_peertube-search-index"}},l={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=owntracks"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer OwnTracks with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/owntracks"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/owntracks.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"OwnTracks")," allow to keep track of your location history."),(0,n.kt)("h3",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/owntracks_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshots"})),(0,n.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://owntracks.org/booklet/tech/http/"},"OwnTracks features for a HTTP API"),", limited to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tomyvi/php-owntracks-recorder#features"},"features implemented by the PHP recorder"),". Notably, no Friends feature. The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tituspijean/php-owntracks-recorder"},"upstream PHP recorder has been tweaked")," to remove a cumbersome PHP dependency."),(0,n.kt)("li",{parentName:"ul"},"Multi-user: each YunoHost user can connect though basic HTTP authentication, and has only access to their data.")),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install the app on your YunoHost server"),(0,n.kt)("li",{parentName:"ul"},"Install the mobile app on your device, see ",(0,n.kt)("a",{parentName:"li",href:"http://owntracks.org"},"OwnTracks website")),(0,n.kt)("li",{parentName:"ul"},"Configure your mobile app:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allow it to access your location"),(0,n.kt)("li",{parentName:"ul"},"Preference > Connection",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Mode: ",(0,n.kt)("inlineCode",{parentName:"li"},"Private http")),(0,n.kt)("li",{parentName:"ul"},"Host: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://DOMAIN/PATH/record.php")),(0,n.kt)("li",{parentName:"ul"},"Identification",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Authentication: ",(0,n.kt)("inlineCode",{parentName:"li"},"enabled")),(0,n.kt)("li",{parentName:"ul"},"Username/password: your YNH credentials"),(0,n.kt)("li",{parentName:"ul"},"Device ID: as you wish"))))),(0,n.kt)("li",{parentName:"ul"},"Refer to the ",(0,n.kt)("a",{parentName:"li",href:"http://owntracks.org/booklet"},"OwnTracks documentation")," for the other settings")))),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://owntracks.eu/site/"},"owntracks.eu (en)")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/owntracks_ynh"},"github.com - YunoHost-Apps/owntracks")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/owntracks_ynh/issues"},"github.com - YunoHost-Apps/owntracks/issues"))))}m.isMDXComponent=!0}}]);