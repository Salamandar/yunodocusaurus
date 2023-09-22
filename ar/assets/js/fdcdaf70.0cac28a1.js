"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1832],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>y});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(o),m=r,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(y,u(u({ref:t},l),{},{components:o})):n.createElement(y,u({ref:t},l))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,u=new Array(a);u[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,u[1]=c;for(var s=2;s<a;s++)u[s]=o[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},36802:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"Roundcube",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_roundcube"}},u=void 0,c={unversionedId:"applications/docs/app_roundcube",id:"applications/docs/app_roundcube",title:"Roundcube",description:"Roundcube's logo",source:"@site/docs/04.applications/10.docs/app_roundcube.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_roundcube",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_roundcube",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_roundcube.md",tags:[],version:"current",frontMatter:{title:"Roundcube",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_roundcube"}},sidebar:"tutorialSidebar",previous:{title:"Retroarch Web Player",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_retroarch"},next:{title:"RSS-Bridge",permalink:"/yunodocusaurus/ar/docs/applications/docs/app_rss-bridge"}},i={},s=[{value:"Synchronize your contacts",id:"synchronize-your-contacts",level:3},{value:"Useful links",id:"useful-links",level:2}],l={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://roundcube_logo.svg?resize=,80",alt:"Roundcube's logo"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=roundcube"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Roundcube with YunoHost"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/roundcube"},(0,r.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/roundcube.svg",alt:"Integration level"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Roundcube")," is a web client for email messaging also called webmail."),(0,r.kt)("h3",{id:"synchronize-your-contacts"},"Synchronize your contacts"),(0,r.kt)("p",null,'Roundcube offers you at the installation to synchronize your contacts with a CardDAV server, through a third party plugin. Using a CardDAV server like Ba\xefkal or Nextcloud\'s "Contacts" application, both available in YunoHost, allows you to centralize and manage your contacts.'),(0,r.kt)("p",null,"Similarly to IMAP that allows you to synchronize your emails with your mail server, CardDAV allows you to access your contacts through multiple clients, such as Roundcube. Thanks to CardDAV, you will not have to import your contacts in each of your devices."),(0,r.kt)("p",null,"Note that addressbooks defined in Ba\xefkal or Nextcloud will be automatically added in Roundcube for each user if they are already installed."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In case you've installed Nextcloud after, here is how to add your addressbooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Go to "Contacts" section of your Nextcloud application and click on the gear wheel icon located at the bottom left. Then, click on "CardDAV link" and copy the URL that appeared.'),(0,r.kt)("li",{parentName:"ul"},'Go to Roundcube\'s CardDAV section and type in "nextcloud" in "Label" field, paste the previously copied URL and type your username and password. Your contacts are now synchronized!')),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website : ",(0,r.kt)("a",{parentName:"li",href:"https://roundcube.net/"},"roundcube.net")),(0,r.kt)("li",{parentName:"ul"},"Official documentation : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/roundcube/roundcubemail/wiki"},"github.com/roundcube/roundcubemail/wiki")),(0,r.kt)("li",{parentName:"ul"},"Demonstration : ",(0,r.kt)("a",{parentName:"li",href:"https://demo.yunohost.org/webmail/"},"Demo")),(0,r.kt)("li",{parentName:"ul"},"Application software repository : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/roundcube_ynh"},"github.com - YunoHost-Apps/roundcube")),(0,r.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue) : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/roundcube_ynh/issues"},"github.com - YunoHost-Apps/roundcube/issues"))))}d.isMDXComponent=!0}}]);