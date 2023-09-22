"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8200],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(f,r(r({ref:e},u),{},{components:n})):a.createElement(f,r({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95747:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Guide to writing application documentation",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_writing_guide"}},r=void 0,l={unversionedId:"contribute/write_documentation/doc_writing_guide",id:"contribute/write_documentation/doc_writing_guide",title:"Guide to writing application documentation",description:"Users / Administrators documentation pages",source:"@site/docs/06.contribute/05.write_documentation/01.doc_writing_guide.md",sourceDirName:"06.contribute/05.write_documentation",slug:"/contribute/write_documentation/doc_writing_guide",permalink:"/yunodocusaurus/it/docs/contribute/write_documentation/doc_writing_guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/05.write_documentation/01.doc_writing_guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Guide to writing application documentation",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_writing_guide"}},sidebar:"tutorialSidebar",previous:{title:"Write documentation",permalink:"/yunodocusaurus/it/docs/contribute/write_documentation/"},next:{title:"Guide Markdown",permalink:"/yunodocusaurus/it/docs/contribute/write_documentation/doc_markdown_guide"}},c={},p=[{value:"Users / Administrators documentation pages",id:"users--administrators-documentation-pages",level:2},{value:"Some typical and general uses (writing framework)",id:"some-typical-and-general-uses-writing-framework",level:2},{value:"General frame application documentation",id:"general-frame-application-documentation",level:3},{value:"Roadmap",id:"roadmap",level:2}],u={toc:p},s="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"users--administrators-documentation-pages"},"Users / Administrators documentation pages"),(0,o.kt)("p",null,"Add a one-click install button (such as ",(0,o.kt)("a",{parentName:"p",href:"https://yunohost.org/app_piwigo"},"https://yunohost.org/app_piwigo"),") and a button on the application integration level."),(0,o.kt)("p",null,"Classification of available applications by tags (genre, Git, association management, e-mails, etc.)."),(0,o.kt)("h2",{id:"some-typical-and-general-uses-writing-framework"},"Some typical and general uses (writing framework)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rename the images in the following order:",(0,o.kt)("inlineCode",{parentName:"li"},"description_application.ext"),".")),(0,o.kt)("h3",{id:"general-frame-application-documentation"},"General frame application documentation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Logo (dimension 80 pixels high) + level 1 title."),(0,o.kt)("li",{parentName:"ol"},"One-click install button, Integration level for each type of processor."),(0,o.kt)("li",{parentName:"ol"},"An index at the top of the documentation with cross-references to all the chapters of the documentation."),(0,o.kt)("li",{parentName:"ol"},"A general presentation of the application and its function."),(0,o.kt)("li",{parentName:"ol"},"A configuration part of the application."),(0,o.kt)("li",{parentName:"ol"},"An administration part of the application."),(0,o.kt)("li",{parentName:"ol"},"A part on limitations related to YunoHost."),(0,o.kt)("li",{parentName:"ol"},"A part on desktop clients (if any). A link to different third-party applications if there are several (possible link to the applications catalgue ",(0,o.kt)("a",{parentName:"li",href:"https://framalibre.org"},"framalibre.org"),") or a link to the page about desktop applications if official applications are provided."),(0,o.kt)("li",{parentName:"ol"},"A part with:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the link to the official site"),(0,o.kt)("li",{parentName:"ul"},"the link to the documentation"),(0,o.kt)("li",{parentName:"ul"},"Links to the YunoHost package and issues")))),(0,o.kt)("p",null,"Screen for writing documentation pages: ",(0,o.kt)("a",{parentName:"p",href:"/app_writing_guide"},"here")),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Document applications.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Document applications at work (marked: work) level 8/7/6."),(0,o.kt)("li",{parentName:"ol"},"Translate the documentation page at least into French and English."),(0,o.kt)("li",{parentName:"ol"},"Do a PR on the application repository")))))}d.isMDXComponent=!0}}]);