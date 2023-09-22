"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9336],{3905:(e,t,o)=>{o.d(t,{Zo:()=>y,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},y=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),d=u(o),c=a,h=d["".concat(l,".").concat(c)]||d[c]||p[c]||n;return o?r.createElement(h,i(i({ref:t},y),{},{components:o})):r.createElement(h,i({ref:t},y))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},45180:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=o(87462),a=(o(67294),o(3905));const n={title:"Configure SMTP relay",template:"docs",taxonomy:{category:"docs"},routes:{default:"/email_configure_relay",aliases:["/smtp_relay"]}},i=void 0,s={unversionedId:"administer/tutorials/email_configure_relay",id:"administer/tutorials/email_configure_relay",title:"Configure SMTP relay",description:"If your ISP blocks port 25, if you can't set a reverseDNS on your server, or if you have any other troubles using the built-in SMTP server on YunoHost, you may want to setup your YunoHost server to use an SMTP relay.",source:"@site/docs/02.administer/45.tutorials/35.email_configure_relay.md",sourceDirName:"02.administer/45.tutorials",slug:"/administer/tutorials/email_configure_relay",permalink:"/yunodocusaurus/ru/docs/administer/tutorials/email_configure_relay",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/35.email_configure_relay.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Configure SMTP relay",template:"docs",taxonomy:{category:"docs"},routes:{default:"/email_configure_relay",aliases:["/smtp_relay"]}},sidebar:"tutorialSidebar",previous:{title:"Adding an external storage to your server",permalink:"/yunodocusaurus/ru/docs/administer/tutorials/external_storage"},next:{title:"Using YunoHost as a Tor Hidden Service",permalink:"/yunodocusaurus/ru/docs/administer/tutorials/torhiddenservice"}},l={},u=[{value:"What is an SMTP relay?",id:"what-is-an-smtp-relay",level:2},{value:"fa=exclamation-triangle / Disadvantages of SMTP relays",id:"faexclamation-triangle--disadvantages-of-smtp-relays",level:2},{value:"How to use an SMTP relay with YunoHost?",id:"how-to-use-an-smtp-relay-with-yunohost",level:2},{value:"Step 1: Register with an SMTP relay provider",id:"step-1-register-with-an-smtp-relay-provider",level:3},{value:"Step 2: Setup your DNS records correctly",id:"step-2-setup-your-dns-records-correctly",level:3},{value:"Step 3: Setup YunoHost correctly",id:"step-3-setup-yunohost-correctly",level:3},{value:"Step 4: Check your setup",id:"step-4-check-your-setup",level:3}],y={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your ISP blocks port 25, if you can't set a reverseDNS on your server, or if you have any other troubles using the built-in SMTP server on YunoHost, you may want to setup your YunoHost server to use an SMTP relay."),(0,a.kt)("h2",{id:"what-is-an-smtp-relay"},"What is an SMTP relay?"),(0,a.kt)("p",null,"An SMTP relay is basically a third party hosted SMTP server that will send emails on behalf of your own SMTP server (Postfix service on YunoHost).\nOnce setup correctly on YunoHost, its operation is transparent, both for you and for your correspondents: they will see emails as coming from your YunoHost main URL, but all the sending will be delegated to the SMTP relay you have chosen and configured."),(0,a.kt)("h2",{id:"faexclamation-triangle--disadvantages-of-smtp-relays"},"[fa=exclamation-triangle /]"," Disadvantages of SMTP relays"),(0,a.kt)("p",null,"It's important to note that using an SMTP relay has to be seen as a (big) compromise in the world of self-hosting. Indeed, when using an SMTP relay, not only a third party sends emails on your behalf, but it has full access to the content of all the emails you'll send and can also possibly modify them (For example, by default, MailJet rewrites the html hyperlinks contained in your emails, in order to track the activity of your correspondents). Be also aware that an SMTP relay is setup for your whole YunoHost server: you can't choose which emails or which users go through it because all future emails will."),(0,a.kt)("p",null,"Beyond the privacy considerations above, an SMTP relay can impose technical limitations that one would not have if port 25 was open. For example, with most relays, if a user of your YunoHost server declares ",(0,a.kt)("strong",{parentName:"p"},'an external "forwarding address"')," in order to automatically forward messages received on your YunoHost server to another mailbox, ",(0,a.kt)("strong",{parentName:"p"},"such forwarding will not work"),' for emails originating from outside your server, without any warning. Indeed, relays generally require that the messages they forward have a sender address from your domain (to fight spam and preserve the reputation of their services), which is not the case for an "automatic forward" where the original sender of the mail is kept; the message is then blocked by the relay (which, normally, warns your YunoHost admin, but only afterwards)'),(0,a.kt)("h2",{id:"how-to-use-an-smtp-relay-with-yunohost"},"How to use an SMTP relay with YunoHost?"),(0,a.kt)("p",null,"YunoHost has a built-in SMTP relay configuration, available from version 4.1. That configuration is not yet available from the admin web interface, though. You will have to use the command line interface."),(0,a.kt)("h3",{id:"step-1-register-with-an-smtp-relay-provider"},"Step 1: Register with an SMTP relay provider"),(0,a.kt)("p",null,"Many providers exist. Some have free plans with or without limitations, it's up to you. As written above, you have to be careful with your choice as you will basically handover all your emails to that third party. Whether you can trust it or not, that's your call!"),(0,a.kt)("h3",{id:"step-2-setup-your-dns-records-correctly"},"Step 2: Setup your DNS records correctly"),(0,a.kt)("p",null,"Once registered, the SMTP relay provider will usually ask you to modify your DNS.\nStandard procedure is to add a DKIM key and a SPF key to your DNS records.\nThe way to modify these records and the value of the keys you'll have to add depend both on your domain name provider and SMTP relay provider."),(0,a.kt)("p",null,'Usually, the SMTP relay provider will provide you with a guide on how to modify these records, together with an automatic check tool that will tell you when your DNS have been setup correctly. That step is mandatory to prove "the world" that you, owner of your domain name, did explicitly authorize your SMTP relay provider to send emails on your behalf. '),(0,a.kt)("p",null,"Please note that modifying your DNS records could sometimes take over 24h to take effect, so be patient!"),(0,a.kt)("p",null,"! ","[fa=exclamation-triangle /]"," From now on, a non trusty SMTP relay provider could send emails from your main domain without telling you."),(0,a.kt)("h3",{id:"step-3-setup-yunohost-correctly"},"Step 3: Setup YunoHost correctly"),(0,a.kt)("p",null,"It can be configured either from the webadmin or the command line."),(0,a.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="From the webadmin"]',"\nGo to your web admin, in ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Yunohost Settings")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Email"),".\nNow set all options requests :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SMTP relay host")," : SMTP server url."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SMTP relay port")," : Port use with the distant server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SMTP relay user")," : Login or identification mail server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SMTP relay password")," : Your SMTP relay password."),(0,a.kt)("li",{parentName:"ul"},"! ","[fa=exclamation-triangle /]"," Password with ",(0,a.kt)("inlineCode",{parentName:"li"},"#")," char won't works properly due to postfix limitation (it's possible other chars are forbidden, don't hesitate to report it to update this doc).")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://relay_smtp_option_webadmin_en.png?resize=800",alt:"Option-Relais-Smtp"})),(0,a.kt)("p",null,'[/ui-tab][ui-tab title="From the command line"]',"\nIn order to setup your YunoHost to use your SMTP relay, you will have to configure four things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Your SMTP relay URL (for this tutorial we will use ",(0,a.kt)("inlineCode",{parentName:"li"},"smtprelay.tld"),")"),(0,a.kt)("li",{parentName:"ol"},"The port on which you access the relay (for this tutorial we will use port 2525 below)"),(0,a.kt)("li",{parentName:"ol"},"Your SMTP relay username (for this tutorial we will use ",(0,a.kt)("inlineCode",{parentName:"li"},"username"),")"),(0,a.kt)("li",{parentName:"ol"},"Your SMTP relay password (for this tutorial we will use ",(0,a.kt)("inlineCode",{parentName:"li"},"password"),")")),(0,a.kt)("p",null,"! ","[fa=exclamation-triangle /]"," Password with ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," char won't works properly due to postfix limitation (it's possible other chars are forbidden, don't hesitate to report it to update this doc)."),(0,a.kt)("p",null,"Your SMTP relay will obviously provide you with these four things, that should be available in your control panel or whatsoever."),(0,a.kt)("p",null,"You can log into your YunoHost server using SSH:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh admin@yourdomain.tld\n")),(0,a.kt)("p",null,"Then you can update the three values as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yunohost settings set email.smtp.smtp_relay_enabled -v yes\nsudo yunohost settings set smtp.relay.host -v smtprelay.tld\nsudo yunohost settings set smtp.relay.port -v 2525\nsudo yunohost settings set smtp.relay.user -v username\nsudo yunohost settings set smtp.relay.password -v password\n")),(0,a.kt)("p",null,"It may be a good idea to double confirm your settings by doing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yunohost settings list\n")),(0,a.kt)("p",null,"[/ui-tab][/ui-tabs]"),(0,a.kt)("p",null,"Your SMTP relay is now configured!"),(0,a.kt)("p",null,"! ","[fa=exclamation-triangle /]"," From now on, a non trusty SMTP relay provider could read or use the data of all the emails you send without telling you (but still won't be able to read nor to use the data from emails you receive)."),(0,a.kt)("h3",{id:"step-4-check-your-setup"},"Step 4: Check your setup"),(0,a.kt)("p",null,"You can check your setup by sending emails and try if everything works.\nSome of the SMTP relay will give you insights about the emails you send so that can also be a good way to check that everythings works as needed.\nOf course, you can always have a try with ",(0,a.kt)("a",{parentName:"p",href:"https://www.mail-tester.com/"},"mail-tester.com")," to check for any problem or discrepancy."))}p.isMDXComponent=!0}}]);