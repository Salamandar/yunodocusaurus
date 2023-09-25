"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),m=n,d=c["".concat(p,".").concat(m)]||c[m]||h[m]||s;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const s={title:"FreshRSS",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_freshrss"}},o=void 0,l={unversionedId:"applications/docs/app_freshrss",id:"applications/docs/app_freshrss",title:"FreshRSS",description:"FreshRSS's logo",source:"@site/docs/04.applications/10.docs/app_freshrss.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_freshrss",permalink:"/yunodocusaurus/docs/applications/docs/app_freshrss",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_freshrss.md",tags:[],version:"current",frontMatter:{title:"FreshRSS",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_freshrss"}},sidebar:"docsSidebar",previous:{title:"Framaforms",permalink:"/yunodocusaurus/docs/applications/docs/app_framaforms"},next:{title:"Friendica",permalink:"/yunodocusaurus/docs/applications/docs/app_friendica"}},p={},i=[{value:"Configuration",id:"configuration",level:2},{value:"Customer applications",id:"customer-applications",level:2},{value:"Useful links",id:"useful-links",level:2}],u={toc:i},c="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://freshrss_logo.png?height=100",alt:"FreshRSS's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=freshrss"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install FreshRSS with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/freshrss"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/freshrss.svg",alt:"Integration level"}))),(0,n.kt)("p",null,"FreshRSS is an RSS aggregator and reader. It allows you to read and follow several news websites at a glance without the need to browse from one website to another."),(0,n.kt)("p",null,"FreshRSS has a lot of features including."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"API (mini) How To"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Into your user profile: ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings > profil")),(0,n.kt)("li",{parentName:"ol"},"Setup an API password"),(0,n.kt)("li",{parentName:"ol"},"Check the API is working: ",(0,n.kt)("a",{parentName:"li",href:"https://exemple.tld/rss/api/greader.php"},"https://exemple.tld/rss/api/greader.php")),(0,n.kt)("li",{parentName:"ol"},"Setup your client with:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"username: ynh user"),(0,n.kt)("li",{parentName:"ul"},"password: the password you just setup"),(0,n.kt)("li",{parentName:"ul"},"URL: ",(0,n.kt)("a",{parentName:"li",href:"https://exemple.tld/rss/api/greader.php"},"https://exemple.tld/rss/api/greader.php"))))),(0,n.kt)("h2",{id:"customer-applications"},"Customer applications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Application name"),(0,n.kt)("th",{parentName:"tr",align:null},"Platform"),(0,n.kt)("th",{parentName:"tr",align:null},"Multi-account"),(0,n.kt)("th",{parentName:"tr",align:null},"Play Store"),(0,n.kt)("th",{parentName:"tr",align:null},"F-Droid"),(0,n.kt)("th",{parentName:"tr",align:null},"Play Store"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fresh RSS"),(0,n.kt)("td",{parentName:"tr",align:null},"Android"),(0,n.kt)("td",{parentName:"tr",align:null},"?"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://f-droid.org/fr/packages/fr.chenry.android.freshrss/"},"f-droid.org - Fresh RSS")),(0,n.kt)("td",{parentName:"tr",align:null},"X")))),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://www.freshrss.org/"},"www.freshrss.org")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://freshrss.github.io/FreshRSS/"},"freshrss.github.io - FreshRSS")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/freshrss_ynh"},"github.com - YunoHost-Apps/freshrss")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/freshrss_ynh/issues"},"github.com - YunoHost-Apps/freshrss/issues"))))}h.isMDXComponent=!0}}]);