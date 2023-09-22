"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4988],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,p(p({ref:t},c),{},{components:a})):r.createElement(h,p({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Etherpad with MyPads plugin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_etherpad_mypads"}},p=void 0,i={unversionedId:"applications/docs/app_etherpad_mypads",id:"applications/docs/app_etherpad_mypads",title:"Etherpad with MyPads plugin",description:"Etherpad's logo",source:"@site/docs/04.applications/10.docs/app_etherpad_mypads.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_etherpad_mypads",permalink:"/yunodocusaurus/it/docs/applications/docs/app_etherpad_mypads",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_etherpad_mypads.md",tags:[],version:"current",frontMatter:{title:"Etherpad with MyPads plugin",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_etherpad_mypads"}},sidebar:"tutorialSidebar",previous:{title:"EtherCalc",permalink:"/yunodocusaurus/it/docs/applications/docs/app_ethercalc"},next:{title:"Facette",permalink:"/yunodocusaurus/it/docs/applications/docs/app_facette"}},s={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Sources",id:"sources",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://etherpad_mypads_logo.jpg?resize=,80",alt:"Etherpad's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=etherpad_mypads"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Etherpad with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/etherpad_mypads"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/etherpad_mypads.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"Etherpad is an online free text editor working in collaborative mode and in real time. It allows several people to share the simultaneous creation of a text, and to discuss it in parallel, via instant messaging. It can have pedagogical uses, especially for collaborative learning.",(0,n.kt)("a",{parentName:"p",href:"#sources"},"\xb9")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Two control panels can be accessed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for Etherpad: ",(0,n.kt)("inlineCode",{parentName:"li"},"domain.tld/admin"),"."),(0,n.kt)("li",{parentName:"ul"},"for MyPads: ",(0,n.kt)("inlineCode",{parentName:"li"},"domain.tld/mypads/?/admin"),".")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://etherpad.org/"},"etherpad.org")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://etherpad.org/doc/v1.8.13/"},"etherpad.org - doc")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/etherpad_mypads_ynh"},"github.com - YunoHost-App/etherpad_mypads")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/etherpad_mypads_ynh/issues"},"github.com - YunoHost-Apps/etherpad_mypads/issues"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sources"},"Sources"),(0,n.kt)("p",null,"\xb9 ",(0,n.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Etherpad"},"wikipedia.org - Etherpad (fr)")))}d.isMDXComponent=!0}}]);