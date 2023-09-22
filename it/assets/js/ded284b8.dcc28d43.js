"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,h=c["".concat(i,".").concat(m)]||c[m]||l[m]||n;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,s[1]=p;for(var u=2;u<n;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={title:"AdGuard Home",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_adguardhome"}},s=void 0,p={unversionedId:"applications/docs/app_adguardhome",id:"applications/docs/app_adguardhome",title:"AdGuard Home",description:"AdGuard Home's logo",source:"@site/docs/04.applications/10.docs/app_adguardhome.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_adguardhome",permalink:"/yunodocusaurus/it/docs/applications/docs/app_adguardhome",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_adguardhome.md",tags:[],version:"current",frontMatter:{title:"AdGuard Home",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_adguardhome"}},sidebar:"tutorialSidebar",previous:{title:"Abantecart",permalink:"/yunodocusaurus/it/docs/applications/docs/app_abantecart"},next:{title:"Adminer",permalink:"/yunodocusaurus/it/docs/applications/docs/app_adminer"}},i={},u=[{value:"Useful links",id:"useful-links",level:2}],d={toc:u},c="wrapper";function l(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://adguardhome-logo.png?resize=100",alt:"AdGuard Home's logo"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=adguardhome"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install AdGuard Home with YunoHost"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/adguardhome"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/adguardhome.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AdGuard Home")," is a network-wide software for blocking ads & tracking. After you set it up, it'll cover ALL your home devices, and you don't need any client-side software for that.\nIt operates as a DNS server that re-routes tracking domains to a \"black hole\", thus preventing your devices from connecting to those servers. It's based on software we use for our public AdGuard DNS servers -- both share a lot of common code."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/adguardhome_ynh"},"https://github.com/YunoHost-Apps/adguardhome_ynh")),(0,o.kt)("li",{parentName:"ul"},"Official app website: ",(0,o.kt)("a",{parentName:"li",href:"https://adguard.com/adguard-home.html"},"https://adguard.com/adguard-home.html")),(0,o.kt)("li",{parentName:"ul"},"Official user documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://kb.adguard.com/en"},"https://kb.adguard.com/en")),(0,o.kt)("li",{parentName:"ul"},"Official admin documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardHome/wiki"},"https://github.com/AdguardTeam/AdGuardHome/wiki")),(0,o.kt)("li",{parentName:"ul"},"Upstream app code repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardHome"},"https://github.com/AdguardTeam/AdGuardHome")),(0,o.kt)("li",{parentName:"ul"},"Report a bug: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/adguardhome_ynh/issues"},"https://github.com/YunoHost-Apps/adguardhome_ynh/issues"))))}l.isMDXComponent=!0}}]);