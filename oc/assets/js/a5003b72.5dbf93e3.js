"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"listmonk",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_listmonk"}},i=void 0,s={unversionedId:"applications/docs/app_listmonk",id:"applications/docs/app_listmonk",title:"listmonk",description:"listmonk is a self-hosted, high performance mailing list and newsletter manager",source:"@site/docs/04.applications/10.docs/app_listmonk.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_listmonk",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_listmonk",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_listmonk.md",tags:[],version:"current",frontMatter:{title:"listmonk",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_listmonk"}},sidebar:"tutorialSidebar",previous:{title:"LimeSurvey",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_limesurvey"},next:{title:"Lstu",permalink:"/yunodocusaurus/oc/docs/applications/docs/app_lstu"}},l={},c=[{value:"Authentication",id:"authentication",level:2},{value:"SMTP Configuration",id:"smtp-configuration",level:2},{value:"Local SMTP Configuration",id:"local-smtp-configuration",level:3},{value:"Gmail, Amazon SES, Mailgun, Mailjet, Sendgrid, Postmark, e.t.c",id:"gmail-amazon-ses-mailgun-mailjet-sendgrid-postmark-etc",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"listmonk is a self-hosted, high performance mailing list and newsletter manager"),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"By default, there is no username-password for the admin user. In place the authentication is enforced by the reverse-proxy itself. Only the admin user chosen while installing the app can access the admin panel."),(0,r.kt)("p",null,"More users can be given access to the panel by editing the Users and Groups permissions from the webmin or the cli."),(0,r.kt)("h2",{id:"smtp-configuration"},"SMTP Configuration"),(0,r.kt)("p",null,"listmonk requires an active SMTP configuration to be able to send e-mails. This can be configured in listmonk's admin interface, by going to Settings -> Settings -> SMTP"),(0,r.kt)("h3",{id:"local-smtp-configuration"},"Local SMTP Configuration"),(0,r.kt)("p",null,"If you want to use your YunoHost server to send e-mails, use the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Host: localhost\nPort: 25\nAuth protocol: None\nSkip TLS Verification: True\n")),(0,r.kt)("h3",{id:"gmail-amazon-ses-mailgun-mailjet-sendgrid-postmark-etc"},"Gmail, Amazon SES, Mailgun, Mailjet, Sendgrid, Postmark, e.t.c"),(0,r.kt)("p",null,"Just click on the respective buttons to get the desired configurations, and replace the relevant fields."),(0,r.kt)("p",null,"These settings are also provided by the providers themselves."))}d.isMDXComponent=!0}}]);