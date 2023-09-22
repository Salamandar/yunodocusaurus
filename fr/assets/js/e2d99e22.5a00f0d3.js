"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7307],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>y});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return i?r.createElement(y,a(a({ref:t},c),{},{components:i})):r.createElement(y,a({ref:t},c))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=i[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},97466:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const o={title:"TiddlyWiki",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_tiddlywiki"}},a=void 0,l={unversionedId:"applications/docs/app_tiddlywiki",id:"applications/docs/app_tiddlywiki",title:"TiddlyWiki",description:"Installer TiddlyWiki with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_tiddlywiki.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_tiddlywiki",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_tiddlywiki",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_tiddlywiki.md",tags:[],version:"current",frontMatter:{title:"TiddlyWiki",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_tiddlywiki"}},sidebar:"tutorialSidebar",previous:{title:"The Lounge",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_thelounge"},next:{title:"Time Machine",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_timemachine"}},s={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Save your Tiddlers!",id:"save-your-tiddlers",level:3},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=tiddlywiki"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer TiddlyWiki with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/tiddlywiki"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/tiddlywiki.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"TiddlyWiki")," is a complete interactive wiki in JavaScript. It can be used as a single HTML file in the browser or as a powerful Node.js application. It is highly customisable: the entire user interface is itself implemented in hackable WikiText."),(0,n.kt)("h3",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/tiddlywiki_ynh/blob/master/doc/screenshots/screenshot.png",alt:"Screenshot of TiddlyWiki"})),(0,n.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("h3",{id:"save-your-tiddlers"},"Save your Tiddlers!"),(0,n.kt)("p",null,"It is very important that you regularly backup your notes (tiddlers) locally."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on the cloud icon -> ",(0,n.kt)("inlineCode",{parentName:"li"},"Save snapshot for offline use"))),(0,n.kt)("p",null,"To restore a local backup to the server, drag and drop your tiddlers backup file into your TiddlyWiki page."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://tiddlywiki.com/"},"tiddlywiki.com")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://tiddlywiki.com/"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/tiddlywiki_ynh"},"github.com - YunoHost-Apps/tiddlywiki")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/tiddlywiki_ynh/issues"},"github.com - YunoHost-Apps/tiddlywiki/issues"))))}u.isMDXComponent=!0}}]);