"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9374],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={title:"Introduction to packaging",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_apps_intro",aliases:["/packaging_apps"]}},r=void 0,s={unversionedId:"contribute/packaging_apps/packaging_apps",id:"contribute/packaging_apps/packaging_apps",title:"Introduction to packaging",description:"This documentation is here to provide all the basic concepts and vocabulary needed to understand app packaging.",source:"@site/docs/06.contribute/10.packaging_apps/10.packaging_apps.md",sourceDirName:"06.contribute/10.packaging_apps",slug:"/contribute/packaging_apps/",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/10.packaging_apps.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Introduction to packaging",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_apps_intro",aliases:["/packaging_apps"]}},sidebar:"tutorialSidebar",previous:{title:"Propel a contribution with GitHub",permalink:"/yunodocusaurus/docs/contribute/write_documentation/doc_use_git"},next:{title:"Writing the app manifest",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/manifest"}},l={},p=[{value:"1. Packaging philosophy",id:"1-packaging-philosophy",level:2},{value:"2. Prerequisites",id:"2-prerequisites",level:2},{value:"3. Notes about the history of YunoHost&#39;s app packaging",id:"3-notes-about-the-history-of-yunohosts-app-packaging",level:2},{value:"4. General overview of a YunoHost app structure",id:"4-general-overview-of-a-yunohost-app-structure",level:2},{value:"5. Creating your very first YunoHost package",id:"5-creating-your-very-first-yunohost-package",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation is here to provide all the basic concepts and vocabulary needed to understand app packaging."),(0,o.kt)("p",null,"We will detail what a YunoHost application package is, how it works, how to make your own package and how to find help if you need it."),(0,o.kt)("h2",{id:"1-packaging-philosophy"},"1. Packaging philosophy"),(0,o.kt)("p",null,"The ability to easily install applications from a catalog is a key feature of YunoHost. While you dive in the process of YunoHost application packaging, you should remember these key principles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The admin should not have a PhD in computer science to be able to install, configure and use your application"),": try to assume that the admin doesn't know about advanced computer concepts;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Less is more"),", ",(0,o.kt)("strong",{parentName:"p"},"Keep it simple!"),": don't overcrowd the admin with a dozens technical questions;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Things should work out of the box"),": for example, the admin should not have to manually finish the installation process by manually filling in database credentials;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"YunoHost app packaging is ",(0,o.kt)("strong",{parentName:"p"},"not just about installing")," sources and dependencies: it's also about maintenance (upgrade, backup...) and integrating the app in the YunoHost ecosystem (NGINX, SSO/LDAP, Fail2Ban, application catalog, UI/UX...)"))),(0,o.kt)("h2",{id:"2-prerequisites"},"2. Prerequisites"),(0,o.kt)("p",null,"Before diving in, this documentation assumes that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You already are a YunoHost admin yourself and already know what the install workflow looks like;)"),(0,o.kt)("li",{parentName:"ol"},"You are somewhat familiar with (or are willing to learn) system administration and bash programming;"),(0,o.kt)("li",{parentName:"ol"},"You are somewhat familiar with (or are willing to learn) Git;"),(0,o.kt)("li",{parentName:"ol"},"You are comfortable with tinkering and debugging computer stuff in general.")),(0,o.kt)("p",null,"You are also encouraged to join the ",(0,o.kt)("a",{parentName:"p",href:"/chat_rooms"},"app packaging chatroom")," to ask any question you may have!"),(0,o.kt)("p",null,"At some point, you will also want to have a dev/test environment, either using ",(0,o.kt)("a",{parentName:"p",href:"/packaging_apps_virtualbox"},"VirtualBox")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yunohost/ynh-dev"},"LXC/ynh-dev")," which is meant for the core but can totally be used for developping apps. You can also setup a dev/test VPS on your favourite hosting provider, or even develop on your prod if you like to live dangerously;)."),(0,o.kt)("h2",{id:"3-notes-about-the-history-of-yunohosts-app-packaging"},"3. Notes about the history of YunoHost's app packaging"),(0,o.kt)("p",null,"Many things in YunoHost, and YunoHost app packaging format, are historical or were designed in an organic fashion. Thus some aspects may legitimately feel old."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},'"v0" of app packaging')," consisted in writing raw bash scripts with no real standardization/constrain."),(0,o.kt)("p",null,'Over time, recurrent steps (such as installing dependencies with apt, or setting up the NGINX config) where formalized into standardized bash functions, aka "helpers". This pretty much marked ',(0,o.kt)("strong",{parentName:"p"},'the beginning of the "v1" packaging era'),"."),(0,o.kt)("p",null,"Various tools were implemented to test the app and standardize their behavior."),(0,o.kt)("p",null,"After a while, a set of common practices and conventions emerged and is somewhat reflected and maintain in the ",(0,o.kt)("inlineCode",{parentName:"p"},"example_ynh")," template application. While it is tempting for dev-oriented folks to change variable naming schemes or refactorize the structure of scripts, it turns out that it is even more important to stick to the common set of practices (even though arbitrary and not elegant) to ease the maintenance of all apps by any member of the packaging community accross all repos!"),(0,o.kt)("p",null,"Nevertheless, even though helpers existed, the inherent structure of apps was hard and boring to maintain with too many redundant pieces of code or filled with funky historical conventions. ",(0,o.kt)("strong",{parentName:"p"},"A new v2 format")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/yunohost/pull/1289"},"has been designed and added to YunoHost 11.1 in early 2023")," in the hope to modernize and simplify app packaging and improve the UI/UX of YunoHost."),(0,o.kt)("p",null,"However, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/issues/issues/2136"},(0,o.kt)("strong",{parentName:"a"},"a future v3 format")," has yet to come")," to further simplify app packaging (such as taking care of NGINX/systemd/... configurations, removing the need to manually write remove/backup/restore scripts, etc.)"),(0,o.kt)("h2",{id:"4-general-overview-of-a-yunohost-app-structure"},"4. General overview of a YunoHost app structure"),(0,o.kt)("p",null,"A YunoHost app consists in a Git repository. We encourage you to have a look at those code repository to get familiar witch app repository structures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/helloworld_ynh"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"helloworld_ynh")," app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost/example_ynh"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"example_ynh")," app")," which illustrates all common features and recommended formatting"),(0,o.kt)("li",{parentName:"ul"},'your favourite "real-life" app in the ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/YunoHost-Apps/repositories"},"YunoHost-Apps organization"))),(0,o.kt)("p",null,"Among the file contained in a package, the most important ones are: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"app manifest")," ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.toml")," ",(0,o.kt)("small",null,"(or ",(0,o.kt)("inlineCode",{parentName:"li"},".json")," in the past)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this can be seen as the ID card of the application, containing various metadatas. "),(0,o.kt)("li",{parentName:"ul"},"it also contains the questions asked during the installation of the app."),(0,o.kt)("li",{parentName:"ul"},'and a bunch of "resources" to initialize, such as sources to download or apt dependencies to install'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"scripts/")," contains a bunch of bash scripts corresponding to actions exposed in YunoHost",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_common.sh"),": common variables or custom functions included in other scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"install"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"remove"),": the install and remove procedure"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upgrade"),": the upgrade procedure"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backup"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"restore"),": the backup/restore procedures "),(0,o.kt)("li",{parentName:"ul"},"(",(0,o.kt)("inlineCode",{parentName:"li"},"change_url"),"): changing where the app is installed in terms of web access url"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"conf/")," contains a bunch of configuration templates used when installing the app. Here are some example of commonly found files:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nginx.conf"),": the NGINX (=web server) configuration template for this app"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemd.service"),": the systemd service configuration template for this app"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config.json/yaml/???"),": the app's configuration template")))),(0,o.kt)("p",null,"Roughly speaking, the install itself generally consists of the following operations (though these may vary depending on the complexity and technologies used by the app) - not necessarily in that exact order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"YunoHost fetches the package's Git repository"),(0,o.kt)("li",{parentName:"ol"},"YunoHost asks to the admin the install questions defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.toml")),(0,o.kt)("li",{parentName:"ol"},"The admin fills the form and starts the install"),(0,o.kt)("li",{parentName:"ol"},"YunoHost provisions a bunch of technical prerequisites (called 'resources') such as:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"initializes the app'skey/value store ",(0,o.kt)("inlineCode",{parentName:"li"},"settings.yml")," with the admin's answers to the install form"),(0,o.kt)("li",{parentName:"ul"},"creates a UNIX system user for this app"),(0,o.kt)("li",{parentName:"ul"},"install apt dependencies needed for this app"),(0,o.kt)("li",{parentName:"ul"},"picks up a port for internal reverse-proxying"),(0,o.kt)("li",{parentName:"ul"},"initializes an empty SQL database"),(0,o.kt)("li",{parentName:"ul"},"configures SSOwat permissions"),(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ol"},"The actual app's ",(0,o.kt)("inlineCode",{parentName:"li"},"install")," script is ran and typically does:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"fetch and deploy the app sources"),(0,o.kt)("li",{parentName:"ul"},"configure the app (typically DB credentials, internal reverse-proxy port...)"),(0,o.kt)("li",{parentName:"ul"},"add the NGINX configuration"),(0,o.kt)("li",{parentName:"ul"},"add the systemd configuration the app's daemon"),(0,o.kt)("li",{parentName:"ul"},"starts the app daemon"),(0,o.kt)("li",{parentName:"ul"},"various finialization tweaks"))),(0,o.kt)("li",{parentName:"ol"},"???"),(0,o.kt)("li",{parentName:"ol"},"Application is ready to use!")),(0,o.kt)("h2",{id:"5-creating-your-very-first-yunohost-package"},"5. Creating your very first YunoHost package"),(0,o.kt)("p",null,"Unless you really want to start from scratch or from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/example_ynh"},(0,o.kt)("inlineCode",{parentName:"a"},"example_ynh")),", one common practice is to identify an app similar to the one you're trying to package - typically because it relies on the same technologies - clone the corresponding code repository, and adapt the various files. "),(0,o.kt)("p",null,"TODO/FIXME : here we should list a bunch of well-knowh apps for classic technologies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP apps:"),(0,o.kt)("li",{parentName:"ul"},"NodeJS apps:"),(0,o.kt)("li",{parentName:"ul"},"Python apps:"),(0,o.kt)("li",{parentName:"ul"},"???")))}m.isMDXComponent=!0}}]);