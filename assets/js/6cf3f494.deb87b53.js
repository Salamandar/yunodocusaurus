"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4028],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),y=n,h=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return o?r.createElement(h,s(s({ref:t},c),{},{components:o})):r.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},2029:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={title:"Self-hosting",template:"docs",taxonomy:{category:"docs"},routes:{default:"/selfhosting"}},s=void 0,i={unversionedId:"overview/self_hosting",id:"overview/self_hosting",title:"Self-hosting",description:"Self-hosting is the activity of having and administrating your own server, typically at home, to host your personal data and services yourself instead of relying exclusively on third-parties. For instance, you can self-host your blog, such that it 'lives' on a machine that you have control of, instead of having it on somebody else's computer (a.k.a. The Cloud) in exchange for money, advertisement or private data.",source:"@site/docs/01.overview/05.self_hosting.md",sourceDirName:"01.overview",slug:"/overview/self_hosting",permalink:"/yunodocusaurus/docs/overview/self_hosting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01.overview/05.self_hosting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Self-hosting",template:"docs",taxonomy:{category:"docs"},routes:{default:"/selfhosting"}},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/yunodocusaurus/docs/overview/"},next:{title:"What is YunoHost?",permalink:"/yunodocusaurus/docs/overview/what_is_yunohost"}},l={},u=[{value:"Why should you host yourself ?",id:"why-should-you-host-yourself-",level:2},{value:"Why should you <em>not</em> host yourself ?",id:"why-should-you-not-host-yourself-",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Self-hosting is the activity of having and administrating your own server, typically at home, to host your personal data and services yourself instead of relying exclusively on third-parties. For instance, you can self-host your blog, such that it 'lives' on a machine that you have control of, instead of having it on somebody else's computer (a.k.a. The Cloud) in exchange for money, advertisement or private data."),(0,n.kt)("p",null,"Self-hosting implies owning a server. A server is a computer which is typically accessible on the network 24/7, and usually does not have any screen or keyboard (it is instead controlled remotely). Contrarily to a popular belief, a server is not necessarily a huge and extra-powerful machine: nowadays, a small, ~$30 ARM board is adequate for self-hosting."),(0,n.kt)("p",null,'Self-hosting is not about making "your Internet" more secure and does not provide anonymity by itself. Instead, it is about being autonomous, and in control of your services and data - which also means being responsible for them.'),(0,n.kt)("h2",{id:"why-should-you-host-yourself-"},"Why should you host yourself ?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"You believe in a free, open and decentralized internet.")," In a centralized internet, private companies and government can spy, analyze and influence people by dictating how they connect with each other, and by filtering content. YunoHost is developed by a community who believe in an open and decentralized internet, and we hope that you do, too!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"You want to have control of your data and services.")," Your pictures, chat messages, browsing history, and that text you are writing for school, have nothing to do on somebody else's server (a.k.a. The Cloud). They are part of your private life, but also part of your family's life, your friend's life, and so on. These data should be managed by ",(0,n.kt)("em",{parentName:"p"},"you"),", not a random company in the US who wants your data to analyze them and sell the results.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"You want to learn about how computers and the Internet work.")," Operating your own server is a pretty good context to understand the basic mechanisms at the heart of operating systems and the Internet. You might have to deal with command line interface, network architecture, DNS configuration, SSH, and so on.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"You want to explore new possibilities and customize things.")," Ever dreamed of running a Minecraft server for you friends, or a persistent IRC or XMPP client? With your very own server, you can manually install and run virtually any program you want, and customize every bit."))),(0,n.kt)("h2",{id:"why-should-you-not-host-yourself-"},"Why should you ",(0,n.kt)("em",{parentName:"h2"},"not")," host yourself ?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Self-hosting requires some work and patience.")," Hosting yourself is a bit like growing your own garden or vegetables: it requires work and patience. While YunoHost aims to do all the hard work for you, self-hosting still requires that you take time to learn and configure a few things to setup your server properly. You will also need to perform maintenance tasks (such as upgrades) from time to time, or to ask for support if some things break.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"With great servers comes great responsibilities.")," Operating a server means that you are responsible for the data you are hosting. Nobody will be able to recover them for you if they get lost. YunoHost provides backup features, which you should use regularly to backup the configurations and data you care about. You should also keep an eye on security news and recommendations so that your server or critical data don't get compromised.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Quality and performance probably won't be as good as premium services.")," YunoHost (and most of the applications packaged for it) are free and open-source software, developed by communities of people in their free time and on the basis of best effort. There is no absolute guarantee that software will work in every possible circumstance. The performance of your self-hosted server is also related to its CPU and RAM, and to the available internet connectivity."))))}p.isMDXComponent=!0}}]);