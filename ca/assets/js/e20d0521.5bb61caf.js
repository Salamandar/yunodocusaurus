"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2957],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>f});var o=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)i=a[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)i=a[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var u=o.createContext({}),p=function(t){var e=o.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},l=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var i=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),c=p(i),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return i?o.createElement(f,r(r({ref:e},l),{},{components:i})):o.createElement(f,r({ref:e},l))}));function f(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=i.length,r=new Array(a);r[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[c]="string"==typeof t?t:n,r[1]=s;for(var p=2;p<a;p++)r[p]=i[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},33570:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=i(87462),n=(i(67294),i(3905));const a={title:"Invidious",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_invidious"}},r=void 0,s={unversionedId:"applications/docs/app_invidious",id:"applications/docs/app_invidious",title:"Invidious",description:"Invidious's logo",source:"@site/docs/04.applications/10.docs/app_invidious.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_invidious",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_invidious",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_invidious.md",tags:[],version:"current",frontMatter:{title:"Invidious",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_invidious"}},sidebar:"tutorialSidebar",previous:{title:"I Hate Money",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_ihatemoney"},next:{title:"Invoice Ninja",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_invoiceninja"}},u={},p=[{value:"Features:",id:"features",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:p},c="wrapper";function d(t){let{components:e,...i}=t;return(0,n.kt)(c,(0,o.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://invidious-logo.png?height=100",alt:"Invidious's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=invidious"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Invidious with YunoHost"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/invidious"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/invidious.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Invidious")," is an interface allowing access to Youtube videos without going through youtube.com\nIn addition to constituting an advantage in terms of confidentiality (the data does not pass directly through the services of the giant), this interface offers several features."),(0,n.kt)("h2",{id:"features"},"Features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Audio only mode,"),(0,n.kt)("li",{parentName:"ul"},"Dark mode,"),(0,n.kt)("li",{parentName:"ul"},"Ability to display Reddit comments instead of YouTube comments,"),(0,n.kt)("li",{parentName:"ul"},"Ability to subscribe to channels without creating a Google account ")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You can configure Invidious by modifying the configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/www/invidious/config/config.yml")," with the help of this ",(0,n.kt)("a",{parentName:"p",href:"https://docs.invidious.io/configuration/"},"documentation"),"."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Official user documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.invidious.io/"},"https://docs.invidious.io/")),(0,n.kt)("li",{parentName:"ul"},"Upstream app code repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iv-org/invidious"},"https://github.com/iv-org/invidious")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/invidious_ynh"},"https://github.com/YunoHost-Apps/invidious_ynh")),(0,n.kt)("li",{parentName:"ul"},"Report a bug: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/invidious_ynh/issues"},"https://github.com/YunoHost-Apps/invidious_ynh/issues"))))}d.isMDXComponent=!0}}]);