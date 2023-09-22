"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1398],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=a,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return o?r.createElement(h,n(n({ref:t},m),{},{components:o})):r.createElement(h,n({ref:t},m))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,n[1]=l;for(var u=2;u<i;u++)n[u]=o[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},50314:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(87462),a=(o(67294),o(3905));const i={title:"Unblacklisting forms",template:"docs",taxonomy:{category:"docs"},routes:{default:"/blacklist_forms"}},n=void 0,l={unversionedId:"administer/troubleshooting/blacklist_forms",id:"administer/troubleshooting/blacklist_forms",title:"Unblacklisting forms",description:"It could happen sometimes that your IP is blacklisted by some email provider, or anti-spam services. If you receive an alert from the diagnosis tool, click on details to find the unblocking forms.",source:"@site/docs/02.administer/50.troubleshooting/25.blacklist_forms.md",sourceDirName:"02.administer/50.troubleshooting",slug:"/administer/troubleshooting/blacklist_forms",permalink:"/yunodocusaurus/it/docs/administer/troubleshooting/blacklist_forms",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/50.troubleshooting/25.blacklist_forms.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Unblacklisting forms",template:"docs",taxonomy:{category:"docs"},routes:{default:"/blacklist_forms"}},sidebar:"tutorialSidebar",previous:{title:"Setting up IPv6",permalink:"/yunodocusaurus/it/docs/administer/troubleshooting/ipv6"},next:{title:"Registrar",permalink:"/yunodocusaurus/it/docs/administer/providers/registrar/"}},s={},u=[{value:"Test your server",id:"test-your-server",level:2},{value:"Check your mail logs",id:"check-your-mail-logs",level:2},{value:"Untestable email providers",id:"untestable-email-providers",level:2},{value:"Microsoft",id:"microsoft",level:3},{value:"Gmail",id:"gmail",level:3},{value:"Yahoo",id:"yahoo",level:3},{value:"Free",id:"free",level:3},{value:"Get alert about emails sent without SPF or DKIM",id:"get-alert-about-emails-sent-without-spf-or-dkim",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It could happen sometimes that your IP is blacklisted by some email provider, or anti-spam services. If you receive an alert from the diagnosis tool, click on details to find the unblocking forms."),(0,a.kt)("h2",{id:"test-your-server"},"Test your server"),(0,a.kt)("p",null,"To check your Email deliverability, YunoHost provide some tests avilables in the Diagnosis tool. This tools evalutes  a lot of configuration and ip reputation points. It gives you also an indicator if some mails are blocked inside the mail queue (waiting to be sent).\nall the points evaluated by ",(0,a.kt)("a",{parentName:"p",href:"https://www.mail-tester.com"},"the well known mail-tester.com")," except for mail content (usefull if you prepare a newsletter)."),(0,a.kt)("p",null,"However, if you have a doubt on the internal diagnosis results, you could check on external tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"by sending an emails : ",(0,a.kt)("a",{parentName:"li",href:"https://www.mail-tester.com"},"Mail tester")),(0,a.kt)("li",{parentName:"ul"},"by providing the public ip : ",(0,a.kt)("a",{parentName:"li",href:"https://multirbl.valli.org/"},"MultiRBL Valli")," or ",(0,a.kt)("a",{parentName:"li",href:"https://whatismyipaddress.com/blacklist-check"},"Whatismyip"))),(0,a.kt)("h2",{id:"check-your-mail-logs"},"Check your mail logs"),(0,a.kt)("p",null,"This command can help you to summarize which emails has been refused by other SMTP server and why."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cat /var/log/mail.log | grep "deferred" | sed -E "s/(:[0-9][0-9]).+</\\1\\t/g" | sed -E "s/>.+dsn/\\terror/g" | sed -E "s/, status=deferred \\(/ /g" | sed -E "s/\\)$//g"\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes"},"the list of SMTP return code")," from wikipedia."),(0,a.kt)("h2",{id:"untestable-email-providers"},"Untestable email providers"),(0,a.kt)("p",null,"YunoHost is only able to test generic blacklist using the DNS RBL mechanism. However, Gmail, Microsoft, Yahoo or Free maintains their own blacklisting mechanism, so in some situation you may need to contact their teams through dedicated forms or use dedicated tools."),(0,a.kt)("h3",{id:"microsoft"},"Microsoft"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No way to test easily IP reputation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sendersupport.olc.protection.outlook.com/pm/"},"Microsoft guide for postmaster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sendersupport.olc.protection.outlook.com/pm/troubleshooting.aspx#Codes"},"Information about SMTP return code from Microsoft")),(0,a.kt)("li",{parentName:"ul"},"Reputation Management tools :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://postmaster.live.com/snds/JMRP.aspx"},"Junk Email Reporting Program (JMRP)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://postmaster.live.com/snds/index.aspx"},"Smart Network Data Services (SNDS)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.microsoft.com/supportrequestform/8ad563e3-288e-2a61-8122-3ba03d6b8d75"},"Get support form for deliverability issues")," (Sadly you need a Microsoft account :/ )")),(0,a.kt)("h3",{id:"gmail"},"Gmail"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No way to test easily IP reputation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/a/topic/1354753"},"Google guide for postmaster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/a/answer/3726730"},"Information about SMTP return code from Google")),(0,a.kt)("li",{parentName:"ul"},"Reputation Management tools : ",(0,a.kt)("a",{parentName:"li",href:"https://postmaster.google.com"},"Google Postmaster Tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/mail/contact/bulk_send_new"},"Get support form for deliverability issues"))),(0,a.kt)("h3",{id:"yahoo"},"Yahoo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No way to test easily IP reputation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://senders.yahooinc.com/best-practices"},"Yahoo guide for postmaster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://senders.yahooinc.com/smtp-error-codes"},"Information about SMTP return code from Yahoo")),(0,a.kt)("li",{parentName:"ul"},"Reputation Management tools : ",(0,a.kt)("a",{parentName:"li",href:"https://io.help.yahoo.com/contact/index?page=contactform&locale=en_US&token=Zh%2FBBVqXzLHlIbokbUqVWTUbuuQeXGkGnZzhKR2JQ4O6mMQdy9JSWdtWFXvjthcYCRj9bUIFfycOfG%2B4GOHPHoOGa8HwDO2%2B0kYRtTcdR8Nja5P9HWkKh3VWfS3pyu4UdjhvwG%2BBCvnYFl5dToDK%2Fw%3D%3D&selectedChannel=email-icon"},"Complaint Feedback Loop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://senders.yahooinc.com/contact"},"Get support form for deliverability issues"))),(0,a.kt)("h3",{id:"free"},"Free"),(0,a.kt)("p",null,"You can find a tool to test your IP, advices, explanation of error code and a way to contact Free on ",(0,a.kt)("a",{parentName:"p",href:"https://postmaster.free.fr/"},"this page")),(0,a.kt)("h2",{id:"get-alert-about-emails-sent-without-spf-or-dkim"},"Get alert about emails sent without SPF or DKIM"),(0,a.kt)("p",null,"If you use your own domains and think that some mails are sent by unauthorized servers (so without SPF/DKIM), you  get report about this mail with."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'_dmarc.DOMAIN 3600 IN TXT "v=DMARC1; p=none; fo=1; rua=mailto:example@domain.tld!10m"\n')))}c.isMDXComponent=!0}}]);