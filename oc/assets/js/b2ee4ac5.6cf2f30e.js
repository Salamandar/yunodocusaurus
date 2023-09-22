"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Guide to writing application documentation",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_writing_guide"}},r=void 0,l={unversionedId:"contribute/write_documentation/doc_writing_guide",id:"contribute/write_documentation/doc_writing_guide",title:"Guide to writing application documentation",description:"Users / Administrators documentation pages",source:"@site/docs/06.contribute/05.write_documentation/01.doc_writing_guide.md",sourceDirName:"06.contribute/05.write_documentation",slug:"/contribute/write_documentation/doc_writing_guide",permalink:"/yunodocusaurus/oc/docs/contribute/write_documentation/doc_writing_guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/05.write_documentation/01.doc_writing_guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Guide to writing application documentation",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_writing_guide"}},sidebar:"tutorialSidebar",previous:{title:"Write documentation",permalink:"/yunodocusaurus/oc/docs/contribute/write_documentation/"},next:{title:"Guide Markdown",permalink:"/yunodocusaurus/oc/docs/contribute/write_documentation/doc_markdown_guide"}},c={},p=[{value:"Users / Administrators documentation pages",id:"users--administrators-documentation-pages",level:2},{value:"Some typical and general uses (writing framework)",id:"some-typical-and-general-uses-writing-framework",level:2},{value:"General frame application documentation",id:"general-frame-application-documentation",level:3},{value:"Roadmap",id:"roadmap",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"users--administrators-documentation-pages"},"Users / Administrators documentation pages"),(0,a.kt)("p",null,"Add a one-click install button (such as ",(0,a.kt)("a",{parentName:"p",href:"https://yunohost.org/app_piwigo"},"https://yunohost.org/app_piwigo"),") and a button on the application integration level."),(0,a.kt)("p",null,"Classification of available applications by tags (genre, Git, association management, e-mails, etc.)."),(0,a.kt)("h2",{id:"some-typical-and-general-uses-writing-framework"},"Some typical and general uses (writing framework)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rename the images in the following order:",(0,a.kt)("inlineCode",{parentName:"li"},"description_application.ext"),".")),(0,a.kt)("h3",{id:"general-frame-application-documentation"},"General frame application documentation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Logo (dimension 80 pixels high) + level 1 title."),(0,a.kt)("li",{parentName:"ol"},"One-click install button, Integration level for each type of processor."),(0,a.kt)("li",{parentName:"ol"},"An index at the top of the documentation with cross-references to all the chapters of the documentation."),(0,a.kt)("li",{parentName:"ol"},"A general presentation of the application and its function."),(0,a.kt)("li",{parentName:"ol"},"A configuration part of the application."),(0,a.kt)("li",{parentName:"ol"},"An administration part of the application."),(0,a.kt)("li",{parentName:"ol"},"A part on limitations related to YunoHost."),(0,a.kt)("li",{parentName:"ol"},"A part on desktop clients (if any). A link to different third-party applications if there are several (possible link to the applications catalgue ",(0,a.kt)("a",{parentName:"li",href:"https://framalibre.org"},"framalibre.org"),") or a link to the page about desktop applications if official applications are provided."),(0,a.kt)("li",{parentName:"ol"},"A part with:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the link to the official site"),(0,a.kt)("li",{parentName:"ul"},"the link to the documentation"),(0,a.kt)("li",{parentName:"ul"},"Links to the YunoHost package and issues")))),(0,a.kt)("p",null,"Screen for writing documentation pages: ",(0,a.kt)("a",{parentName:"p",href:"/app_writing_guide"},"here")),(0,a.kt)("h2",{id:"roadmap"},"Roadmap"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Document applications.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Document applications at work (marked: work) level 8/7/6."),(0,a.kt)("li",{parentName:"ol"},"Translate the documentation page at least into French and English."),(0,a.kt)("li",{parentName:"ol"},"Do a PR on the application repository")))))}d.isMDXComponent=!0}}]);