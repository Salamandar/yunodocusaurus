"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const i={title:"Misskey",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_misskey"}},o=void 0,r={unversionedId:"applications/docs/app_misskey",id:"applications/docs/app_misskey",title:"Misskey",description:"misskey's logo",source:"@site/docs/04.applications/10.docs/app_misskey.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_misskey",permalink:"/yunodocusaurus/docs/applications/docs/app_misskey",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_misskey.md",tags:[],version:"current",frontMatter:{title:"Misskey",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_misskey"}},sidebar:"tutorialSidebar",previous:{title:"Miniflux",permalink:"/yunodocusaurus/docs/applications/docs/app_miniflux"},next:{title:"Mobilizon",permalink:"/yunodocusaurus/docs/applications/docs/app_mobilizon"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"image://misskey_logo.png?resize=100",alt:"misskey's logo"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=misskey"},(0,s.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Misskey with YunoHost"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/misskey"},(0,s.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/misskey.svg",alt:"Integration level"}))),(0,s.kt)("p",null,'Misskey is a decentralized and open source microblogging platform. It has "Reactions" that allow you to easily express your feeling, "Drive" that allows you to manage files in one place, and a highly customizable UI that makes it more fun to share something.'),(0,s.kt)("p",null,"Misskey also implements ActivityPub, so it can communicate with other platforms like Mastodon, Pleroma, Friendica and more interactively."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Beginning with version 12.111.1~ynh1 (",(0,s.kt)("em",{parentName:"li"},"Misskey")," 12.111.1) YunoHost >= 11.0.7 is required, as PostgreSQL >= 12.x is mandatory."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Misskey")," requires a dedicated root domain, e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"misskey.domain.tld")),(0,s.kt)("li",{parentName:"ul"},"Due to Cypress dependency, ",(0,s.kt)("em",{parentName:"li"},"Misskey")," only works on 64-bit CPU machines."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Misskey")," can take quite some time to install (more then 30 minutes). So take out some time and grab yourself a coffee."),(0,s.kt)("li",{parentName:"ul"},"If installing from command line, using ",(0,s.kt)("inlineCode",{parentName:"li"},"screen")," is recommended to avoid disconnection. See below."),(0,s.kt)("li",{parentName:"ul"},"After installation, first page can take time to load and may show timeout error. Give it time to make itself ready for you. Refresh the page after 2 or 3 minutes."),(0,s.kt)("li",{parentName:"ul"},"The first account created will be an admin user and will have all the admin rights.")),(0,s.kt)("p",null,"Using screen in case of disconnects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo apt-get install screen\nscreen\nsudo yunohost app install https://github.com/YunoHost-Apps/misskey_ynh.git\n")),(0,s.kt)("p",null,"Recover after disconnect:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"screen -d\nscreen -r\n")),(0,s.kt)("h2",{id:"useful-links"},"Useful links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Official app website: ",(0,s.kt)("a",{parentName:"li",href:"https://misskey-hub.net/"},"https://misskey-hub.net/")),(0,s.kt)("li",{parentName:"ul"},"Upstream app code repository: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/misskey-dev/misskey"},"https://github.com/misskey-dev/misskey")),(0,s.kt)("li",{parentName:"ul"},"Demonstration : ",(0,s.kt)("a",{parentName:"li",href:"https://demo.misskey.io"},"https://demo.misskey.io")),(0,s.kt)("li",{parentName:"ul"},"Report a bug: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/misskey_ynh/issues"},"https://github.com/YunoHost-Apps/misskey_ynh/issues"))))}m.isMDXComponent=!0}}]);