"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[258],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(a),h=i,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(d,r(r({ref:e},m),{},{components:a})):n.createElement(d,r({ref:e},m))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},48571:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={title:"Mailman3",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_mailman3"}},r=void 0,l={unversionedId:"applications/docs/app_mailman3",id:"applications/docs/app_mailman3",title:"Mailman3",description:"Installer Mailman3 with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_mailman3.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_mailman3",permalink:"/yunodocusaurus/docs/applications/docs/app_mailman3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_mailman3.md",tags:[],version:"current",frontMatter:{title:"Mailman3",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_mailman3"}},sidebar:"docsSidebar",previous:{title:"Mailman",permalink:"/yunodocusaurus/docs/applications/docs/app_mailman"},next:{title:"Mantis",permalink:"/yunodocusaurus/docs/applications/docs/app_mantis"}},s={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"General Configuration",id:"general-configuration",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Useful links",id:"useful-links",level:2}],m={toc:p},u="wrapper";function c(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=mailman3"},(0,i.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Mailman3 with YunoHost"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/mailman3"},(0,i.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/mailman3.svg",alt:"Integration level"}))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Mailman3")," is an electronic mailing lists manager."),(0,i.kt)("h3",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,"FIXME: Missing screenshot"),(0,i.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Any known limitations, constrains or stuff not working, such as (but not limited to):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"requiring a full dedicated domain"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Other infos that people should be aware of, such as:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No LDAP support yet (apparently under development)"),(0,i.kt)("li",{parentName:"ul"},"Users can also just sign up themselves to manage details"),(0,i.kt)("li",{parentName:"ul"},"Users can use mailing lists without signing up?")))),(0,i.kt)("p",null,"Classical admin is available on the page: ",(0,i.kt)("a",{parentName:"p",href:"https://myyunohost.org/"},"https://myyunohost.org/")),(0,i.kt)("p",null,"Django admin on: ",(0,i.kt)("a",{parentName:"p",href:"https://myyunohost.org/admin/"},"https://myyunohost.org/admin/")),(0,i.kt)("h3",{id:"general-configuration"},"General Configuration"),(0,i.kt)("p",null,'Mailman 3 or "The Mailman Suite" is made up of 5 moving parts. See the following documentation for more:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"http://docs.mailman3.org/en/latest/index.html#the-mailman-suite"},"http://docs.mailman3.org/en/latest/index.html#the-mailman-suite"))),(0,i.kt)("p",null,"On your YunoHost, all the configuration files you need to worry about are in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/etc/mailman3/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/usr/share/mailman3-web/"))),(0,i.kt)("p",null,"The services you need to manage can be checked with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"systemctl status mailman3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"systemctl status mailman3-web"))),(0,i.kt)("p",null,"It is important to note that this package makes use of the ",(0,i.kt)("a",{parentName:"p",href:"http://docs.mailman3.org/en/latest/prodsetup.html#distribution-packages"},"mailman3-full")," Debian package contained in the Debian Stretch backports repository. The default installation assumes the use of a SQLite3 database but the installation script overrides this and uses a PostgreSQL database instead."),(0,i.kt)("p",null,"Finally, you also configure things through the Django web admin available at ",(0,i.kt)("inlineCode",{parentName:"p"},"/admin/"),"."),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Migrating from Mailman 2.X is not officially supported, sorry. However, there is a manual and\nwhich details an experimental process. Please see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mailman3.org/en/latest/migration.html"},"the documentation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mailman3 must be configured to use a root domain (",(0,i.kt)("a",{parentName:"p",href:"https://myyunohost.org"},"https://myyunohost.org")," and not ",(0,i.kt)("a",{parentName:"p",href:"https://myyunohost.org/mailman3"},"https://myyunohost.org/mailman3"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must have a HTTPS certificate installed on the root domain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There may be only one installation per YunoHost."))),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Website: ",(0,i.kt)("a",{parentName:"li",href:"https://www.list.org/"},"list.org")),(0,i.kt)("li",{parentName:"ul"},"Demonstration: ",(0,i.kt)("a",{parentName:"li",href:"https://lists.mailman3.org/mailman3/lists/"},"Demo")),(0,i.kt)("li",{parentName:"ul"},"Application software repository: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/mailman3_ynh"},"github.com - YunoHost-Apps/mailman3")),(0,i.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/mailman3_ynh/issues"},"github.com - YunoHost-Apps/mailman3/issues"))))}c.isMDXComponent=!0}}]);