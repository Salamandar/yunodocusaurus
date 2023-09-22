"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8489],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=i,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={title:"Baikal",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_baikal"}},r=void 0,l={unversionedId:"applications/docs/app_baikal",id:"applications/docs/app_baikal",title:"Baikal",description:"Ba\xefkal's logo",source:"@site/docs/04.applications/10.docs/app_baikal.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_baikal",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_baikal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_baikal.md",tags:[],version:"current",frontMatter:{title:"Baikal",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_baikal"}},sidebar:"tutorialSidebar",previous:{title:"Backdrop",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_backdrop"},next:{title:"Bibliogram",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_bibliogram"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Connecting to the administration interface",id:"connecting-to-the-administration-interface",level:3},{value:"LDAP authentication",id:"ldap-authentication",level:3},{value:"CalDAV connection",id:"caldav-connection",level:2},{value:"Connecting Thunderbird with Lightning",id:"connecting-thunderbird-with-lightning",level:3},{value:"Connecting to AgenDAV",id:"connecting-to-agendav",level:3},{value:"CardDAV Connection",id:"carddav-connection",level:2},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"image://baikal_logo.png?height=80",alt:"Ba\xefkal's logo"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=baikal"},(0,i.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Ba\xefkal with YunoHost"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/baikal"},(0,i.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/baikal.svg",alt:"Integration level"}))),(0,i.kt)("p",null,"Ba\xefkal is a server for calendars and address books, which uses the CalDav and CardDav protocol. Ba\xefkal can be synced with a lot of clients, like Thunderbird + Lightning."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WARNING"),": Ba\xefkal will not work if you have installed a ",(0,i.kt)("strong",{parentName:"p"},"Nextcloud")," (the Nextcloud CardDav/CalDav functions conflict)."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"connecting-to-the-administration-interface"},"Connecting to the administration interface"),(0,i.kt)("p",null,"To configure the app, go to the address: ",(0,i.kt)("inlineCode",{parentName:"p"},"sub.domain.tld/admin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"domain.tld/baikal/admin"),".\nThe username to specify is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", followed by the specific password you chose when installing Ba\xefkal. The password can contain any special characters."),(0,i.kt)("h3",{id:"ldap-authentication"},"LDAP authentication"),(0,i.kt)("p",null,"By default, Ba\xefkal is configured to look for users in YunoHost's LDAP\ndirectory. YunoHost's users will appear under ",(0,i.kt)("inlineCode",{parentName:"p"},"User and ressources")," menu after their\nfirst authentication."),(0,i.kt)("h2",{id:"caldav-connection"},"CalDAV connection"),(0,i.kt)("h3",{id:"connecting-thunderbird-with-lightning"},"Connecting Thunderbird with Lightning"),(0,i.kt)("p",null,'Add a new agenda with type "Network" and "CalDAV"'),(0,i.kt)("p",null,"The new URL to add is:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://domain.org/baikal/cal.php/calendars/username/default"},"https://domain.org/baikal/cal.php/calendars/username/default")),(0,i.kt)("p",null,'Be careful to replace "domain.org" with your own domain and the "username" with your username.'),(0,i.kt)("h3",{id:"connecting-to-agendav"},"Connecting to AgenDAV"),(0,i.kt)("p",null,"AgenDAV is a web client for using your calendars. It's packaged for YunoHost and you can used it after installing Ba\xefkal."),(0,i.kt)("p",null,"AgenDAV is already connected to Ba\xefkal, any other configuration is necessary. If you create a new entry in Thunderbird + Lightning calendar, refresh your AgenDAV page is enough to see your modifications."),(0,i.kt)("p",null,"AgenDAV also allows you to create a new calendars very easily."),(0,i.kt)("h2",{id:"carddav-connection"},"CardDAV Connection"),(0,i.kt)("p",null,"Using the example with RoundCube Add a new address book by going to Settings > Preferences > CardDAV."),(0,i.kt)("p",null,"Make sure it is filled with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Addressbook name: ",(0,i.kt)("inlineCode",{parentName:"p"},"default"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Username: ",(0,i.kt)("inlineCode",{parentName:"p"},"username"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Password: ",(0,i.kt)("inlineCode",{parentName:"p"},"thePasswordAssociatedToUsername"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"URL : ",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.com/baikal/card.php/addressbooks/username/default"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Make sure to replace "example.com" with your domain and "username" with your username*'))),(0,i.kt)("p",null,"Save."),(0,i.kt)("p",null,"Now, the address book is accessible."),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Website: ",(0,i.kt)("a",{parentName:"li",href:"https://sabre.io/baikal/"},"sabre.io - baikal (en)")),(0,i.kt)("li",{parentName:"ul"},"Official documentation: ",(0,i.kt)("a",{parentName:"li",href:"https://sabre.io/dav/"},"sabre.io - baikal/dav (en)")),(0,i.kt)("li",{parentName:"ul"},"Apps software repository: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-apps/baikal_ynh"},"github.com - YunoHost-Apps/baikal")),(0,i.kt)("li",{parentName:"ul"},"Fix a bug or suggest an improvement by creating a ticket (issue): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-apps/baikal_ynh/issues"},"github.com - YunoHost-Apps/baikal/issues"))))}d.isMDXComponent=!0}}]);