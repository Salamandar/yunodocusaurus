"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,g=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Configuring email client",template:"docs",taxonomy:{category:"docs"},routes:{default:"/email_configure_client"}},o=void 0,l={unversionedId:"user_guide/email_configure_client",id:"user_guide/email_configure_client",title:"Configuring email client",description:"You can fetch and send emails using your YunoHost instance from desktop email clients such as Mozilla Thunderbird or on your smartphone with applications like K-9 Mail.",source:"@site/docs/03.user_guide/05.email_configure_client.md",sourceDirName:"03.user_guide",slug:"/user_guide/email_configure_client",permalink:"/yunodocusaurus/ru/docs/user_guide/email_configure_client",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03.user_guide/05.email_configure_client.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Configuring email client",template:"docs",taxonomy:{category:"docs"},routes:{default:"/email_configure_client"}},sidebar:"tutorialSidebar",previous:{title:"User guide",permalink:"/yunodocusaurus/ru/docs/user_guide/"},next:{title:"Migrating email from an email provider to a YunoHost instance",permalink:"/yunodocusaurus/ru/docs/user_guide/email_migration"}},u={},s=[{value:"Generic settings",id:"generic-settings",level:3},{value:"Client by client",id:"client-by-client",level:3},{value:" Configure Mozilla Thunderbird (on a desktop computer)",id:"-configure-mozilla-thunderbird-on-a-desktop-computer",level:5},{value:" Configure K-9 Mail (on Android)",id:"-configure-k-9-mail-on-android",level:5},{value:" Configure Dekko (on Ubuntu Touch)",id:"-configure-dekko-on-ubuntu-touch",level:5}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can fetch and send emails using your YunoHost instance from desktop email clients such as Mozilla Thunderbird or on your smartphone with applications like K-9 Mail."),(0,a.kt)("p",null,"Modern mail clients should be able to configure themselves automatically. If autoconfiguration fails, you can do it manually following the instructions below. (If the autoconfiguration fails though, it should be understood as a bug in YunoHost, and we would be glad to read your feedback to try to reproduce the issue on our side!)"),(0,a.kt)("h3",{id:"generic-settings"},"Generic settings"),(0,a.kt)("p",null,"Here are the element you should enter to manually configure your mail client (",(0,a.kt)("inlineCode",{parentName:"p"},"domain.tld")," refers to what's after the @ in your email address, and ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," what's before @)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Protocol"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Port"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Encryption"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Authentication"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Username"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"IMAP"),(0,a.kt)("td",{parentName:"tr",align:"center"},"993"),(0,a.kt)("td",{parentName:"tr",align:"center"},"SSL/TLS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Normal password"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"username")," (without the ",(0,a.kt)("inlineCode",{parentName:"td"},"@domain.tld"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SMTP"),(0,a.kt)("td",{parentName:"tr",align:"center"},"587"),(0,a.kt)("td",{parentName:"tr",align:"center"},"STARTTLS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Normal password"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"username")," (without the ",(0,a.kt)("inlineCode",{parentName:"td"},"@domain.tld"),")")))),(0,a.kt)("h3",{id:"client-by-client"},"Client by client"),(0,a.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="Mozilla Thunderbird"]'),(0,a.kt)("h5",{id:"-configure-mozilla-thunderbird-on-a-desktop-computer"},(0,a.kt)("img",{parentName:"h5",src:"image://thunderbird.png?resize=50&classes=inline",alt:null})," Configure Mozilla Thunderbird (on a desktop computer)"),(0,a.kt)("p",null,"To manually configure a new account in Thunderbird, add the account information, then select port 993 with SSL/TLS for IMAP, and port 587 with STARTTLS for SMTP. Afterwards select 'Normal Password' for Authentication and click on 'Advanced Config'. You may need to accept the certificate exceptions for fetching mails and after you send your first mail. Don't forget to remove the dot before the domain name."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://thunderbird_config_1.png?resize=900",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"image://thunderbird_config_2.png?resize=900",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.mozilla.org/en-US/kb/configuring-email-aliases"},"Manage alias mails"))),(0,a.kt)("p",null,'[/ui-tab][ui-tab title="K-9 Mail"]'),(0,a.kt)("h5",{id:"-configure-k-9-mail-on-android"},(0,a.kt)("img",{parentName:"h5",src:"image://k9mail.png?resize=50&classes=inline",alt:null})," Configure K-9 Mail (on Android)"),(0,a.kt)("p",null,"Follow the following steps. (As for Thunderbird, you might need to accept certificates at some points)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://k9mail_config_1.png?resize=280&classes=inline",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"image://k9mail_config_2.png?resize=280&classes=inline",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"image://k9mail_config_3.png?resize=280&classes=inline",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"image://k9mail_config_4.png?resize=280&classes=inline",alt:null})),(0,a.kt)("p",null,'[/ui-tab][ui-tab title="Dekko"]'),(0,a.kt)("h5",{id:"-configure-dekko-on-ubuntu-touch"},(0,a.kt)("img",{parentName:"h5",src:"image://dekko-app.png?resize=50&classes=inline",alt:null})," Configure Dekko (on Ubuntu Touch)"),(0,a.kt)("p",null,"The first time you can simply choose \"Add account\". If you already have an account configured, tap the hamburger menu then tap the gear, choose Mail, Accounts and press the '+'-symbol."),(0,a.kt)("p",null,'Then you choose IMAP. Fill in the fields and press Next. Now Dekko will look for the configuration. Check that all fields are correct. Make sure you have your yunohost username, NOT your email address and choose "Allow untrusted certificates". Do this for IMAP and SMTP and press Next. Dekko will now synchronise the account after which you are done. Congratz!'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://dekko_config_1.png?resize=280&classes=inline",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"image://dekko_config_2.png?resize=280&classes=inline",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"image://dekko_config_3.png?resize=280&classes=inline",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"image://dekko_config_4.png?resize=280&classes=inline",alt:null}),"\n","[/ui-tab][/ui-tabs]"))}m.isMDXComponent=!0}}]);