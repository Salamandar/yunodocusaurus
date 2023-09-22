"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1696],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?i.createElement(h,r(r({ref:t},u),{},{components:a})):i.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const o={title:"MiniDLNA (Ready Media)",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_minidlna"}},r=void 0,l={unversionedId:"applications/docs/app_minidlna",id:"applications/docs/app_minidlna",title:"MiniDLNA (Ready Media)",description:"MiniDLNA's (Ready Meadia) logo",source:"@site/docs/04.applications/10.docs/app_minidlna.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_minidlna",permalink:"/yunodocusaurus/de/docs/applications/docs/app_minidlna",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_minidlna.md",tags:[],version:"current",frontMatter:{title:"MiniDLNA (Ready Media)",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_minidlna"}},sidebar:"tutorialSidebar",previous:{title:"MineWeb",permalink:"/yunodocusaurus/de/docs/applications/docs/app_mineweb"},next:{title:"Miniflux",permalink:"/yunodocusaurus/de/docs/applications/docs/app_miniflux"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"What multimedia files are shared?",id:"what-multimedia-files-are-shared",level:3},{value:"How to view and play media files shared by MiniDLNA?",id:"how-to-view-and-play-media-files-shared-by-minidlna",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://yunohost_package.png?height=80",alt:"MiniDLNA's (Ready Meadia) logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=minidlna"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install MiniDLNA with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/minidlna"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/minidlna.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"MiniDLNA (Ready Media) is a lightweight ",(0,n.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Digital_Living_Network_Alliance"},"DLNA")," server.\nIt allows to easily share multimedia files with any compatible devices present on the LAN."),(0,n.kt)("p",null,"MiniDLNA does not have a graphical interface, but it does not require any special configuration."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"what-multimedia-files-are-shared"},"What multimedia files are shared?"),(0,n.kt)("p",null,"MiniDLNA (renamed Ready Media) sharing the folder ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/yunohost.multimedia/share"),", which is common to each user in ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/$USER/Multimedia/Share"),".\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/yunohost.multimedia"},"More information about multimedia files here.")),(0,n.kt)("p",null,(0,n.kt)("del",{parentName:"p"},"If ",(0,n.kt)("a",{parentName:"del",href:"https://github.com/Kloadut/transmission_ynh"},"Transmission")," is installed, the downloaded media will be available in DLNA."),"  "),(0,n.kt)("h3",{id:"how-to-view-and-play-media-files-shared-by-minidlna"},"How to view and play media files shared by MiniDLNA?"),(0,n.kt)("p",null,"To view and play media files, all you need is a compatible client DLNA/UPNP."),(0,n.kt)("p",null,"The majority of set-top boxes provided by ISPs are DLNA compatible, simply look for sources of external media.\nThis is also true for the latest generation game consoles connected to internet."),(0,n.kt)("p",null,"Some TV and Blu-ray player is also DLNA compatible."),(0,n.kt)("p",null,"In any case, it is generally sufficient to seek external sources, USB etc., to find the DLNA server, displayed under the name ",(0,n.kt)("strong",{parentName:"p"},"YunoHost DLNA"),"."),(0,n.kt)("p",null,"There are a multitude of DLNA client for all platforms, including the following ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_UPnP_AV_media_servers_and_clients#UPnP_AV_clients"},"not exhaustive list"),".\nIn general, a DLNA client does not require any special configuration to access the media sharing."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"http://minidlna.sourceforge.net"},"minidlna.sourceforge.net")),(0,n.kt)("li",{parentName:"ul"},"Official : ",(0,n.kt)("a",{parentName:"li",href:"https://help.ubuntu.com/community/MiniDLNA"},"help.ubuntu.com/community/MiniDLNA")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/minidlna_ynh"},"github.com - YunoHost-Apps/minidlna")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/minidlna_ynh/issues"},"github.com - YunoHost-Apps/minidlna/issues"))))}c.isMDXComponent=!0}}]);