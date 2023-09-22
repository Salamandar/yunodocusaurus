"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={title:"Chat, VoIP and social network with XMPP",template:"docs",taxonomy:{category:"docs"},routes:{default:"/XMPP"}},i=void 0,l={unversionedId:"user_guide/xmpp",id:"user_guide/xmpp",title:"Chat, VoIP and social network with XMPP",description:"By default, YunoHost comes installed with an instant messaging server called Metronome which implements the XMPP protocol (previously known as Jabber).",source:"@site/docs/03.user_guide/15.xmpp.md",sourceDirName:"03.user_guide",slug:"/user_guide/xmpp",permalink:"/yunodocusaurus/docs/user_guide/xmpp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03.user_guide/15.xmpp.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Chat, VoIP and social network with XMPP",template:"docs",taxonomy:{category:"docs"},routes:{default:"/XMPP"}},sidebar:"tutorialSidebar",previous:{title:"Migrating email from an email provider to a YunoHost instance",permalink:"/yunodocusaurus/docs/user_guide/email_migration"},next:{title:"20 euros",permalink:"/yunodocusaurus/docs/applications/docs/app_20euros"}},s={},u=[{value:"XMPP account",id:"xmpp-account",level:2},{value:"Connecting to your YunoHost XMPP account",id:"connecting-to-your-yunohost-xmpp-account",level:2},{value:"Web clients",id:"web-clients",level:3},{value:"Desktop clients",id:"desktop-clients",level:3},{value:"Mobile clients",id:"mobile-clients",level:3},{value:"Encrypt conversations with OMEMO",id:"encrypt-conversations-with-omemo",level:2},{value:"Chatrooms",id:"chatrooms",level:2},{value:"VoIP and videoconferences",id:"voip-and-videoconferences",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://XMPP_logo.png?resize=100",alt:null})),(0,o.kt)("p",null,"By default, YunoHost comes installed with an instant messaging server called Metronome which implements the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extensible_Messaging_and_Presence_Protocol"},"XMPP protocol")," (previously known as Jabber)."),(0,o.kt)("p",null,"This protocol is already used by millions of people around the world\u2014it is an open protocol.\nAll applications based on XMPP are compatible with each other: When using an XMPP client, you can interact with anybody who has an XMPP account."),(0,o.kt)("p",null,'XMPP is an extensible protocol\u2014this means users can configure "extensions" to chatrooms, share messages and files, and make voice and video calls using XMPP.'),(0,o.kt)("h2",{id:"xmpp-account"},"XMPP account"),(0,o.kt)("p",null,"To use an XMPP account you need a username, in the format: ",(0,o.kt)("inlineCode",{parentName:"p"},"user@domain.tld"),", and a password."),(0,o.kt)("p",null,"With YunoHost, an XMPP account is created for all YunoHost users automatically.\nThe XMPP account credentials corresponds to the user's main e-mail address and password."),(0,o.kt)("h2",{id:"connecting-to-your-yunohost-xmpp-account"},"Connecting to your YunoHost XMPP account"),(0,o.kt)("p",null,"You can connect to your YunoHost XMPP account in different ways."),(0,o.kt)("h3",{id:"web-clients"},"Web clients"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://movim.eu"},"Movim")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://conversejs.org/"},"ConverseJS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://salut-a-toi.org/"},"Libervia/Salut \xe0 Toi"))),(0,o.kt)("h3",{id:"desktop-clients"},"Desktop clients"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gajim.org/"},"Gajim")," (Linux, Windows)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dino.im"},"Dino")," (Linux)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.thunderbird.net/fr/"},"Thunderbird")," (multiplatform)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://beagle.im/"},"Beagle IM")," (macOS)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://profanity-im.github.io/"},"Profanity")," (Linux)")),(0,o.kt)("h3",{id:"mobile-clients"},"Mobile clients"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://conversations.im/"},"Conversations")," (Android)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://xabber.com"},"Xabber")," (Android)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://movim.eu"},"Movim")," (Android)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chatsecure.org/"},"ChatSecure")," (iOS)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://monal.im/"},"Monal")," (iOS)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://siskin.im/"},"Siskin IM")," (iOS)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.kaidan.im/"},"Kaidan")," (Ubuntu Touch / Plasma Mobile)")),(0,o.kt)("p",null,"Here is an exhaustive list of XMPP clients: ",(0,o.kt)("a",{parentName:"p",href:"https://xmpp.org/software/clients.html"},"https://xmpp.org/software/clients.html")),(0,o.kt)("h2",{id:"encrypt-conversations-with-omemo"},"Encrypt conversations with OMEMO"),(0,o.kt)("p",null,"XMPP chats can be made secure and private using ",(0,o.kt)("a",{parentName:"p",href:"https://xmpp.org/extensions/xep-0384.html"},"OMEMO encryption"),", for instance using Gajim:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"gajim")," and the plugin ",(0,o.kt)("inlineCode",{parentName:"li"},"gajim-omemo"),"."),(0,o.kt)("li",{parentName:"ul"},"Turn on the plugin in ",(0,o.kt)("inlineCode",{parentName:"li"},"Tools > Plugins"),"."),(0,o.kt)("li",{parentName:"ul"},"Turn on the encryption in the chat with somebody who also has OMEMO.")),(0,o.kt)("h2",{id:"chatrooms"},"Chatrooms"),(0,o.kt)("p",null,"To create a chatroom (multi-user chat) on your YunoHost server, use the identifier ",(0,o.kt)("inlineCode",{parentName:"p"},"chatroomname@muc.yourdomain.tld"),"."),(0,o.kt)("p",null,"For this to work you need to ",(0,o.kt)("a",{parentName:"p",href:"/dns_config"},"add the corresponding ",(0,o.kt)("inlineCode",{parentName:"a"},"muc.")," DNS record")," in the DNS configuration."),(0,o.kt)("h2",{id:"voip-and-videoconferences"},"VoIP and videoconferences"),(0,o.kt)("p",null,"A practical tool to call an XMPP client, either with voice or voice+video, is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://jitsi.org/"},"Jitsi")," client."))}m.isMDXComponent=!0}}]);