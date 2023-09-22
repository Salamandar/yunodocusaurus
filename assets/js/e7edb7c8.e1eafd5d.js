"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>N,frontMatter:()=>O,metadata:()=>E,toc:()=>k});var r=n(87462),a=n(67294),o=n(3905),i=n(86010),c=n(78259),l=n(83699),s=n(2735),u=n(79524);n(97325);const m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",cardImage:"cardImage_G0zJ",cardColumn:"cardColumn_qHzJ"};function d(e){let{href:t,children:n}=e;return a.createElement(l.Z,{href:t,className:(0,i.Z)("card padding--lg",m.cardContainer)},n)}function p(e){let{href:t,icon:n,title:r,description:o,image:c,imageDark:l}=e;return a.createElement(d,{href:t},c&&a.createElement("div",{className:m.cardImage},a.createElement("img",{src:c+(l?"#gh-light-mode-only":"")}),l&&a.createElement("img",{src:l+"#gh-dark-mode-only"})),a.createElement("div",{className:m.cardColumn},a.createElement("h2",{className:(0,i.Z)("text--truncate",m.cardTitle),title:r},c?"":n," ",r),o&&a.createElement("p",{className:(0,i.Z)("text--truncate",m.cardDescription),title:o},o)))}function f(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.customProps?.description}):null}function y(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:r?.description,image:(0,u.Z)(t.customProps?.doc_card_image),imageDark:(0,u.Z)(t.customProps?.doc_card_image_dark)})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(y,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,c.jA)();return a.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return a.createElement(h,e);const r=(0,c.MN)(t);return a.createElement("section",{className:(0,i.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}const O={sidebar_label:"Installation",slug:"/installation"},v="Install Yunohost",E={unversionedId:"administer/installation/index",id:"administer/installation/index",title:"Install Yunohost",description:"Select the hardware on which you want install YunoHost :",source:"@site/docs/02.administer/11.installation/index.mdx",sourceDirName:"02.administer/11.installation",slug:"/installation",permalink:"/yunodocusaurus/docs/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/11.installation/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installation",slug:"/installation"},sidebar:"tutorialSidebar",previous:{title:"DNS zone configuration",permalink:"/yunodocusaurus/docs/administer/install/dns_config"},next:{title:"On a Raspberry Pi",permalink:"/yunodocusaurus/docs/administer/installation/install-on-raspberry-pi"}},w={},k=[],x={toc:k},j="wrapper";function N(e){let{components:t,...n}=e;return(0,o.kt)(j,(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-yunohost"},"Install Yunohost"),(0,o.kt)("p",null,"Select the hardware on which you want install YunoHost :"),(0,o.kt)(b,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}N.isMDXComponent=!0}}]);