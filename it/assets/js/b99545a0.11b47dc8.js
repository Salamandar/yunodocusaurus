"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4566],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,f=d["".concat(l,".").concat(p)]||d[p]||c[p]||n;return a?i.createElement(f,o(o({ref:t},m),{},{components:a})):i.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=a(87462),r=(a(67294),a(3905));const n={title:"Emails",template:"docs",taxonomy:{category:"docs"},routes:{default:"/email"}},o=void 0,s={unversionedId:"administer/admin_guide/email",id:"administer/admin_guide/email",title:"Emails",description:"YunoHost comes with a complete mail stack allowing you to host your own email server, and therefore to have your own email addresses in something@your.domain.tld.",source:"@site/docs/02.administer/15.admin_guide/45.email.md",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/email",permalink:"/yunodocusaurus/it/docs/administer/admin_guide/email",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/45.email.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{title:"Emails",template:"docs",taxonomy:{category:"docs"},routes:{default:"/email"}},sidebar:"tutorialSidebar",previous:{title:"Chat with XMPP",permalink:"/yunodocusaurus/it/docs/administer/admin_guide/xmpp"},next:{title:"Backing up your server",permalink:"/yunodocusaurus/it/docs/administer/admin_guide/backup"}},l={},u=[{value:"Making sure your setup is right",id:"making-sure-your-setup-is-right",level:2},{value:"Email clients",id:"email-clients",level:2},{value:"Configuring email aliases and auto-forwards",id:"configuring-email-aliases-and-auto-forwards",level:2},{value:"What happens if my server becomes unavailable?",id:"what-happens-if-my-server-becomes-unavailable",level:2},{value:"Forms to remove its IP address from the blacklist",id:"forms-to-remove-its-ip-address-from-the-blacklist",level:2},{value:"Migrating email from an email provider to a YunoHost instance",id:"migrating-email-from-an-email-provider-to-a-yunohost-instance",level:2},{value:"Configuring SMTP relay",id:"configuring-smtp-relay",level:2}],m={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"YunoHost comes with a complete mail stack allowing you to host your own email server, and therefore to have your own email addresses in ",(0,r.kt)("inlineCode",{parentName:"p"},"something@your.domain.tld"),"."),(0,r.kt)("p",null,"The mail stack includes a SMTP server (postfix), an IMAP server (Dovecot), an antispam (rspamd) and DKIM configuration."),(0,r.kt)("h2",{id:"making-sure-your-setup-is-right"},"Making sure your setup is right"),(0,r.kt)("p",null,"Email is a complicated ecosystem and quite a few details can prevent it from working properly."),(0,r.kt)("p",null,"To validate your setup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if you are self-hosting at home and not using a VPN, ensure ",(0,r.kt)("a",{parentName:"li",href:"/isp"},"your ISP won't block port 25")," ;"),(0,r.kt)("li",{parentName:"ul"},"route ports according to ",(0,r.kt)("a",{parentName:"li",href:"/isp_box_config"},"this documentation")," ;"),(0,r.kt)("li",{parentName:"ul"},"carefully configure mail DNS records according to ",(0,r.kt)("a",{parentName:"li",href:"/dns_config"},"this documentation")," ;"),(0,r.kt)("li",{parentName:"ul"},"test your configuration using the diagnostic features (",(0,r.kt)("inlineCode",{parentName:"li"},"Webadmin > Diagnosis > Email"),"). You can also use ",(0,r.kt)("a",{parentName:"li",href:"https://mail-tester.com"},"mail-tester.com"),", a score of at least 8~9/10 is a reasonnable goal ",(0,r.kt)("small",null,"(be careful : only 3 tests per domain per day are allowed)")," ")),(0,r.kt)("h2",{id:"email-clients"},"Email clients"),(0,r.kt)("p",null,"To interact with the email sever (read and send emails), you can either install a webclient such as Roundcube or Rainloop on your server - or configure a desktop/mobile client as described in ",(0,r.kt)("a",{parentName:"p",href:"/email_configure_client"},"this page"),"."),(0,r.kt)("p",null,"Desktop and mobile clients have the advantage of copying your emails to the device, allowing offline viewing and relative protection against possible hardware failures of your server."),(0,r.kt)("h2",{id:"configuring-email-aliases-and-auto-forwards"},"Configuring email aliases and auto-forwards"),(0,r.kt)("p",null,"Mail aliases and forwards can be configured for each users. For instance, the first user created on the server automatically has an alias ",(0,r.kt)("inlineCode",{parentName:"p"},"root@the.domain.tld")," configured - meaning that an email sent to this address will end in the inbox of the first user. Automatic forwards may be configured, for instance if an user doesn't want to configure an additional email account and just wants to receive emails from the server on, say, his/her gmail address."),(0,r.kt)("p",null,'Another feature which few people know about is the use of suffixes beginning with "+". For example, emails sent to ',(0,r.kt)("inlineCode",{parentName:"p"},"johndoe+booking@the.domain.tld")," will automatically land in the ",(0,r.kt)("inlineCode",{parentName:"p"},"booking")," dir (lowercase) of John Doe's mailbox or in John Doe's inbox if ",(0,r.kt)("inlineCode",{parentName:"p"},"booking")," directory doesn't exist . It is a practical technique for example to provide an e-mail address to a website, then easily sort (via automatic filters) the mail coming from this website."),(0,r.kt)("p",null,"Groups also can use alias features, by default the group ",(0,r.kt)("inlineCode",{parentName:"p"},"admins")," have ",(0,r.kt)("inlineCode",{parentName:"p"},"root@<domain.tld>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"webmaster@<domain.tld>"),". ",(0,r.kt)("a",{parentName:"p",href:"/groups_and_permissions#config-alias-group"},"More information to use-it with the dedicated page"),"."),(0,r.kt)("h2",{id:"what-happens-if-my-server-becomes-unavailable"},"What happens if my server becomes unavailable?"),(0,r.kt)("p",null,"If your server becomes unavailable, emails sent to your server will stay in a pending queue on the sender's side for as long as ~5 days. The sender's host will regularly try to resend the email, until it drops it if it was unable to send it."),(0,r.kt)("h2",{id:"forms-to-remove-its-ip-address-from-the-blacklist"},"Forms to remove its IP address from the blacklist"),(0,r.kt)("p",null,"It is possible that the emails sent from your YunoHost instance are considered as spam by the big email services.\nIs it possible that the IP address from your server have been previously been used to sent spam or that these email services consider your server as a spam sender.\nTo ensure that your servers\u2019 IP address isn't on these blacklists and to remove it from them, follow this ",(0,r.kt)("a",{parentName:"p",href:"/blacklist_forms"},"link"),"."),(0,r.kt)("h2",{id:"migrating-email-from-an-email-provider-to-a-yunohost-instance"},"Migrating email from an email provider to a YunoHost instance"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/email_migration"},"this page"),"."),(0,r.kt)("h2",{id:"configuring-smtp-relay"},"Configuring SMTP relay"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/email_configure_relay"},"this page"),"."))}c.isMDXComponent=!0}}]);