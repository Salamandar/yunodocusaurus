"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={title:"Seafile",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_seafile"}},s=void 0,r={unversionedId:"applications/docs/app_seafile",id:"applications/docs/app_seafile",title:"Seafile",description:"Installer Seafile with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_seafile.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_seafile",permalink:"/yunodocusaurus/de/docs/applications/docs/app_seafile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_seafile.md",tags:[],version:"current",frontMatter:{title:"Seafile",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_seafile"}},sidebar:"tutorialSidebar",previous:{title:"RSS-Bridge",permalink:"/yunodocusaurus/de/docs/applications/docs/app_rss-bridge"},next:{title:"Searx",permalink:"/yunodocusaurus/de/docs/applications/docs/app_searx"}},l={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Multi-users support",id:"multi-users-support",level:4},{value:"Supported architectures",id:"supported-architectures",level:4},{value:"Additional informations",id:"additional-informations",level:4},{value:"Links",id:"links",level:4},{value:"Install",id:"install",level:4},{value:"Upgrade",id:"upgrade",level:4},{value:"Backup",id:"backup",level:4},{value:"Remove",id:"remove",level:4},{value:"Change URL",id:"change-url",level:4},{value:"Developers infos",id:"developers-infos",level:4},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=seafile"},(0,o.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Seafile with YunoHost"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/seafile"},(0,o.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/seafile.svg",alt:"Integration level"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Seafile")," is an open Source Cloud Storage application."),(0,o.kt)("p",null,"It's a Enterprise file sync and share platform with high reliability and performance. It's a file hosting platform with high reliability and performance. Put files on your own server. Sync and share files across different devices, or access all the files as a virtual disk."),(0,o.kt)("h3",{id:"screenshots"},"Screenshots"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/seafile_ynh/blob/master/doc/screenshots/access-logs.jpg",alt:"Screenshot of Seafile"})),(0,o.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,o.kt)("h4",{id:"multi-users-support"},"Multi-users support"),(0,o.kt)("p",null,"This app support LDAP and the SSO authentification."),(0,o.kt)("p",null,"If you have Seafile installed before 7.x and you have more than one domain for users in Yunohost or Seafile app is installed on a different domain, you need to migrate your accounts.\nYou can use the provided action at ",(0,o.kt)("a",{parentName:"p",href:"https://domain.tld/yunohost/admin/#/apps/seafile/actions"},"https://domain.tld/yunohost/admin/#/apps/seafile/actions"),". You can also use this following command to migrate all of your accounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yunohost app action run seafile migrate_user_email_to_mail_email\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/seafile_ynh/issues/44"},"issue#44"),"\nfor more information."),(0,o.kt)("h4",{id:"supported-architectures"},"Supported architectures"),(0,o.kt)("p",null,"Since seafile 6.3 the i386 architecture is no more supported."),(0,o.kt)("p",null,"Seafile don't distribute binary for generic armhf architectures but rpi binary generally work on all arm board."),(0,o.kt)("h4",{id:"additional-informations"},"Additional informations"),(0,o.kt)("h4",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Report a bug: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/seafile_ynh/issues"},"https://github.com/YunoHost-Apps/seafile_ynh/issues")),(0,o.kt)("li",{parentName:"ul"},"App website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.seafile.com"},"https://www.seafile.com")),(0,o.kt)("li",{parentName:"ul"},"YunoHost website: ",(0,o.kt)("a",{parentName:"li",href:"https://yunohost.org/"},"https://yunohost.org/"))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"install"},"Install"),(0,o.kt)("p",null,"From command line:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app install seafile")),(0,o.kt)("h4",{id:"upgrade"},"Upgrade"),(0,o.kt)("p",null,"By default a backup is made before the upgrade. To avoid this you have theses following possibilites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pass the ",(0,o.kt)("inlineCode",{parentName:"li"},"NO_BACKUP_UPGRADE")," env variable with ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," at each upgrade. By example ",(0,o.kt)("inlineCode",{parentName:"li"},"NO_BACKUP_UPGRADE=1 yunohost app upgrade synapse"),"."),(0,o.kt)("li",{parentName:"ul"},"Set the settings ",(0,o.kt)("inlineCode",{parentName:"li"},"disable_backup_before_upgrade")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),". You can set this with this command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yunohost app setting synapse disable_backup_before_upgrade -v 1\n")),(0,o.kt)("p",null,"After this settings will be applied for ",(0,o.kt)("strong",{parentName:"p"},"all")," next upgrade."),(0,o.kt)("p",null,"From command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yunohost app upgrade seafile\n")),(0,o.kt)("h4",{id:"backup"},"Backup"),(0,o.kt)("p",null,"This app use now the core-only feature of the backup. To keep the integrity of the data and to have a better guarantee of the restoration is recommended to proceed like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stop seafile service with theses following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"systemctl stop seafile.service seahub.service\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Launch the backup of seafile with this following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yunohost backup create --app seafile\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do a backup of your data with your specific strategy (could be with rsync, borg backup or just cp). The data is stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/yunohost.app/seafile-data"),"."),(0,o.kt)("li",{parentName:"ul"},"Restart the seafile service with theses command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"systemctl start seafile.service seahub.service\n")),(0,o.kt)("h4",{id:"remove"},"Remove"),(0,o.kt)("p",null,"Due of the backup core only feature the data directory in ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/yunohost.app/seafile-data")," ",(0,o.kt)("strong",{parentName:"p"},"is not removed"),". It need to be removed manually to purge app user data."),(0,o.kt)("h4",{id:"change-url"},"Change URL"),(0,o.kt)("p",null,"Since now it's possible to change domain or the url of seafile."),(0,o.kt)("p",null,"To do this run : ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app change-url seafile -d new_domain.tld -p PATH new_path")),(0,o.kt)("h4",{id:"developers-infos"},"Developers infos"),(0,o.kt)("p",null,"Please do your pull request to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/seafile_ynh/tree/testing"},"testing branch"),"."),(0,o.kt)("p",null,"To try the testing branch, please proceed like that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo yunohost app install https://github.com/YunoHost-Apps/seafile_ynh/tree/testing --debug\nor\nsudo yunohost app upgrade seafile -u https://github.com/YunoHost-Apps/seafile_ynh/tree/testing --debug\n")),(0,o.kt)("p",null,"TODO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find a way to fix the issue ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/seafile_ynh/issues/5"},"https://github.com/YunoHost-Apps/seafile_ynh/issues/5"))),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website: ",(0,o.kt)("a",{parentName:"li",href:"https://www.seafile.com/en/home/"},"seafile.com")),(0,o.kt)("li",{parentName:"ul"},"Demonstration: ",(0,o.kt)("a",{parentName:"li",href:"https://demo.seafile.com/accounts/login/?next=/"},"Demo")),(0,o.kt)("li",{parentName:"ul"},"Application software repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/seafile_ynh"},"github.com - YunoHost-Apps/seafile")),(0,o.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/seafile_ynh/issues"},"github.com - YunoHost-Apps/seafile/issues"))))}d.isMDXComponent=!0}}]);