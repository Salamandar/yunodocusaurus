"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Registrar",template:"docs",taxonomy:{category:"docs"},never_cache_twig:!0,twig_first:!0,process:{markdown:!0,twig:!0},routes:{default:"/providers/registrar",aliases:["/autodns"]}},o=void 0,s={unversionedId:"administer/providers/registrar/registrar",id:"administer/providers/registrar/registrar",title:"Registrar",description:"Since version 4.3, YunoHost includes a mechanism to interface your server with your DNS registrar API, with the purpose of simplifying and automatizing DNS records registration and maintenance.",source:"@site/docs/02.administer/55.providers/05.registrar/05.registrar.md",sourceDirName:"02.administer/55.providers/05.registrar",slug:"/administer/providers/registrar/",permalink:"/yunodocusaurus/oc/docs/administer/providers/registrar/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/55.providers/05.registrar/05.registrar.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Registrar",template:"docs",taxonomy:{category:"docs"},never_cache_twig:!0,twig_first:!0,process:{markdown:!0,twig:!0},routes:{default:"/providers/registrar",aliases:["/autodns"]}},sidebar:"tutorialSidebar",previous:{title:"Unblacklisting forms",permalink:"/yunodocusaurus/oc/docs/administer/troubleshooting/blacklist_forms"},next:{title:"Obtaining an API key from Gandi",permalink:"/yunodocusaurus/oc/docs/administer/providers/registrar/gandi/autodns"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since version 4.3, YunoHost includes a mechanism to interface your server with your DNS registrar API, with the purpose of simplifying and automatizing DNS records registration and maintenance."),(0,a.kt)("p",null,"The procedure requires an initial configuration where you need to generate an API key on your registrar's interface."),(0,a.kt)("p",null,"Not all registrars are supported. So far, the community tested and validated the interface with ",(0,a.kt)("a",{parentName:"p",href:"https://gandi.net"},"Gandi")," and ",(0,a.kt)("a",{parentName:"p",href:"https://ovh.com"},"OVH"),", which are recommended. The interface with other registrars may work, but is still considered experimental until we gather feedback from the community."),(0,a.kt)("p",null,"The list below can help you to choose a registrar if you plan to buy a domain name to use it with YunoHost."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Registrar"),(0,a.kt)("th",{parentName:"tr",align:null},"Compatibility"),(0,a.kt)("th",{parentName:"tr",align:null},"Easy to obtain an API key"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.gandi.net"},"Gandi")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714 (tested)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.ovh.com/domaines/"},"OVH")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714 (tested)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.namecheap.com/"},"Namecheap")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2718 (in lexicon but untested)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2718\u2718\u2718 API not available without 50$ on the account")))))}p.isMDXComponent=!0}}]);