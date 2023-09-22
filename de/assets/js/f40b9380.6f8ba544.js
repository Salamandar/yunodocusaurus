"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(s,".").concat(y)]||u[y]||h[y]||r;return n?o.createElement(d,i(i({ref:t},l),{},{components:n})):o.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},10007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Checky",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_cheky"}},i=void 0,p={unversionedId:"applications/docs/app_cheky",id:"applications/docs/app_cheky",title:"Checky",description:"Cheky",source:"@site/docs/04.applications/10.docs/app_cheky.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_cheky",permalink:"/yunodocusaurus/de/docs/applications/docs/app_cheky",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_cheky.md",tags:[],version:"current",frontMatter:{title:"Checky",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_cheky"}},sidebar:"tutorialSidebar",previous:{title:"Castopod",permalink:"/yunodocusaurus/de/docs/applications/docs/app_castopod"},next:{title:"Cinny",permalink:"/yunodocusaurus/de/docs/applications/docs/app_cinny"}},s={},c=[{value:"Limitations with YunoHost",id:"limitations-with-yunohost",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://yunohost_package.png?height=80",alt:"Cheky"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=cheky"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Cheky with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/cheky"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/cheky.svg",alt:"Integration level"}))),(0,a.kt)("p",null,"Cheky is a software written in PHP allowing you to receive new ads published on the websites Leboncoin.fr and SeLoger.com. You can receive alerts via different communication channels."),(0,a.kt)("h2",{id:"limitations-with-yunohost"},"Limitations with YunoHost"),(0,a.kt)("p",null,"Updates from the old LBCAlerte package are not possible, the application is only in French. Cheky does not work with ",(0,a.kt)("a",{parentName:"p",href:"https://yunohost.org/#/users"},"SSO"),"."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://www.cheky.net/"},"www.cheky.net (fr)")),(0,a.kt)("li",{parentName:"ul"},"Official documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://www.cheky.net/documentation"},"www.cheky.net - documentation (fr)")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/cheky_ynh"},"github.com - YunoHost-Apps/cheky")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/cheky_ynh/issues"},"github.com - YunoHost-Apps/cheky"))))}h.isMDXComponent=!0}}]);