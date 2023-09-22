"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?o.createElement(f,l(l({ref:t},u),{},{components:a})):o.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={title:"EmailPoubelle",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_emailpoubelle"}},l=void 0,i={unversionedId:"applications/docs/app_emailpoubelle",id:"applications/docs/app_emailpoubelle",title:"EmailPoubelle",description:"Installer EmailPoubelle with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_emailpoubelle.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_emailpoubelle",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_emailpoubelle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_emailpoubelle.md",tags:[],version:"current",frontMatter:{title:"EmailPoubelle",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_emailpoubelle"}},sidebar:"tutorialSidebar",previous:{title:"Element",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_element"},next:{title:"Encryptic",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_encryptic"}},s={},p=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=emailpoubelle"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer EmailPoubelle with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/emailpoubelle"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/emailpoubelle.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"EmailPoubelle")," (Trash email) is a script to create temporary email addresses that aims to your real email address.\nA YunoHost version of EmailPoubelle by David Mercereau. All thanks to David."),(0,n.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("p",null,"WARNING"),(0,n.kt)("p",null,"Using this will cause to disable the YunoHost LDAP aliases ! Once installed, you won't be able to use the aliasses settings that you can see when you modify your personnal settings in the SSOWAT pannel. Of course, once uninstalled, everything get back to normal."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://framagit.org/kepon/emailPoubellePhp"},"framagit.org/kepon/emailPoubellePhp")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://poubelle.zici.fr/"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/emailpoubelle_ynh"},"github.com - YunoHost-Apps/emailpoubelle")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/emailpoubelle_ynh/issues"},"github.com - YunoHost-Apps/emailpoubelle/issues"))))}m.isMDXComponent=!0}}]);