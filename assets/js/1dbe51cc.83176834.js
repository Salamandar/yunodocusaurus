"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,y=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:a,p[1]=s;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Install unpackaged apps",template:"docs",taxonomy:{category:"docs"},routes:{default:"/install_unpackaged_apps"}},p=void 0,s={unversionedId:"administer/extend/install_unpackaged_app",id:"administer/extend/install_unpackaged_app",title:"Install unpackaged apps",description:"PHP or HTML/JS apps",source:"@site/docs/02.administer/60.extend/05.install_unpackaged_app.md",sourceDirName:"02.administer/60.extend",slug:"/administer/extend/install_unpackaged_app",permalink:"/yunodocusaurus/docs/administer/extend/install_unpackaged_app",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/60.extend/05.install_unpackaged_app.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Install unpackaged apps",template:"docs",taxonomy:{category:"docs"},routes:{default:"/install_unpackaged_apps"}},sidebar:"docsSidebar",previous:{title:"Understand and extend YunoHost",permalink:"/yunodocusaurus/docs/administer/extend/"},next:{title:"Configuration management",permalink:"/yunodocusaurus/docs/administer/extend/configuration_management"}},i={},u=[{value:"PHP or HTML/JS apps",id:"php-or-htmljs-apps",level:2},{value:"Other technologies",id:"other-technologies",level:2}],c={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"php-or-htmljs-apps"},"PHP or HTML/JS apps"),(0,a.kt)("p",null,"If your app is a PHP or HTML/JS app, you probably should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Webapp"),", also know as ",(0,a.kt)("inlineCode",{parentName:"p"},"my_webapp"),", in order to configure nginx, php, mysql, yunohost permission and backup for you."),(0,a.kt)("h2",{id:"other-technologies"},"Other technologies"),(0,a.kt)("p",null,"If you use an other techno, you should install it like on a classical debian."),(0,a.kt)("p",null,"To expose the app on the web through nginx and be able to manage access permissions to the webapp, you could use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/redirect_ynh/"},(0,a.kt)("inlineCode",{parentName:"a"},"redirect")," app")," to create a nginx reverse proxy on your local ip/port running the service."),(0,a.kt)("p",null,"!!! You should use the proxy mode of the redirect app and not HTTP redirections mode."),(0,a.kt)("p",null,"You probably should create custom backup and restore hooks to integrate your app to your YunoHost backup/restore process. See ",(0,a.kt)("a",{parentName:"p",href:"/invalid"},"Backup and restore hooks")))}d.isMDXComponent=!0}}]);