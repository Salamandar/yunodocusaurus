"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return a?o.createElement(h,i(i({ref:t},c),{},{components:a})):o.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=a(87462),r=(a(67294),a(3905));const n={title:"Backup strategies",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup_strategies"},"page-toc":{active:!0,depth:3}},i=void 0,s={unversionedId:"administer/backups/evaluate",id:"administer/backups/evaluate",title:"Backup strategies",description:"In the context of self-hosting, backups are an important element to compensate for unexpected events (fire, database corruption, loss of access to the server, compromised server...). The backup policy to implement depends on the importance of the services and data you manage. For example, backing up a test server will be of little interest, while you will want to be very careful if you are managing critical data for an association or a company - and in such cases, you will want to store the backups in a different location or locations.",source:"@site/docs/02.administer/20.backups/05.evaluate.md",sourceDirName:"02.administer/20.backups",slug:"/administer/backups/evaluate",permalink:"/yunodocusaurus/ru/docs/administer/backups/evaluate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/05.evaluate.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Backup strategies",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup_strategies"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"Overview of the YunoHost ecosystem",permalink:"/yunodocusaurus/ru/docs/administer/admin_guide/admin_guide"},next:{title:"BorgBackup",permalink:"/yunodocusaurus/ru/docs/administer/backups/backup_methods/borgbackup"}},l={},u=[{value:"What is a good backup ?",id:"what-is-a-good-backup-",level:2},{value:"Some possible methods",id:"some-possible-methods",level:2},{value:"Risks",id:"risks",level:2},{value:"About Nextcloud or Thunderbird (IMAP) synchronization",id:"about-nextcloud-or-thunderbird-imap-synchronization",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the context of self-hosting, backups are an important element to compensate for unexpected events (fire, database corruption, loss of access to the server, compromised server...). The backup policy to implement depends on the importance of the services and data you manage. For example, backing up a test server will be of little interest, while you will want to be very careful if you are managing critical data for an association or a company - and in such cases, you will want to store the backups ",(0,r.kt)("em",{parentName:"p"},"in a different location or locations"),"."),(0,r.kt)("h2",{id:"what-is-a-good-backup-"},"What is a good backup ?"),(0,r.kt)("p",null,"A good backup consists of at least ",(0,r.kt)("strong",{parentName:"p"},"3 copies of the data")," (including the original data), on at least ",(0,r.kt)("strong",{parentName:"p"},"2 separate storages"),", in at least ",(0,r.kt)("strong",{parentName:"p"},"2 separate locations")," (far enough apart) and ideally with 2 separate methods. If your backups are encrypted ",(0,r.kt)("strong",{parentName:"p"},"these rules also apply to the decryption phrase/key"),"."),(0,r.kt)("p",null,"A good backup is also in many cases, a recent backup, so it takes either a lot of rigor or to ",(0,r.kt)("strong",{parentName:"p"},"automate")," the process."),(0,r.kt)("p",null,"A good backup is checked regularly to ensure the effectiveness and integrity of the data."),(0,r.kt)("p",null,"Finally, a good backup is one that is ",(0,r.kt)("strong",{parentName:"p"},"restorable within an acceptable timeframe")," for you. Remember to document your restoration method and to estimate the transfer time of a copy, especially if the Internet connections involved are not symmetrical."),(0,r.kt)("p",null,"!!! Example of ",(0,r.kt)("strong",{parentName:"p"},"a robust and comfortable combination"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a remote and automatic backup with borg"),(0,r.kt)("li",{parentName:"ul"},"a backup on external disk and automatic with borg"),(0,r.kt)("li",{parentName:"ul"},"a regular snapshot/image (and before updates)"),(0,r.kt)("li",{parentName:"ul"},"a monitored RAID 1 array (or a commercial VPS that will also be on an array)"),(0,r.kt)("li",{parentName:"ul"},"a decryption passphrase stored on 3 media in 2 locations")),(0,r.kt)("h2",{id:"some-possible-methods"},"Some possible methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup#manual-backup"},"generate an archive and download it manually (default method of YunoHost)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup#automatic-or-remote-backup"},"backup automatically (recommended method)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/external_storage"},"generate an archive directly on another disk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/clone_filesystem"},"make a disk image or snapshot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/custom_backup_methods"},"save useful data via a custom method")," ")),(0,r.kt)("h2",{id:"risks"},"Risks"),(0,r.kt)("p",null,"Below, a list of risks sorted from the most to the least probable, whose probability remains to be adapted according to your situation (location of the server, quality of the installations, user profiles, etc.). It is up to you to put the cursor where it should be, especially considering the consequences of a data loss. "),(0,r.kt)("p",null,"!!! Keep in mind that real accidents are linked to the occurrence of 2 events simultaneously. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lack of rigor"),": strategies based on manual backups require a lot of rigor in the regularity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bad handling"),": it can happen that a backup is erased by mistake during a restoration or if you rely on a synchronization system, you could delete a file and the deletion would be synchronized instantly"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cryptolocker"),": this is a virus that encrypts files and demands a ransomware. If your users are using nextcloud and windows, an infected windows could synchronize encrypted files and thus you lose your copy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hardware failure"),": SD cards are the least reliable media over time (~2 years of life in a server), followed by SSD disks (about 3 years of life) and hard drives (3 years). Note that a new equipment has also probability to break down during the first 6 months. In all cases, your copies should not be on the same physical media."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Software failure/bug"),": a software bug may result in data deletion or you may not know how to fix a problem and want to restore your system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Electricity or internet failure"),": do you have a plan if this happens? What if you are on vacation?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Disaster or natural or unnatural event"),": a small child, a cat, lightning or a simple leak can destroy your equipment. Fires or floods can also destroy your backup copy at the other end of your home..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server compromise"),": a malicious person or a robot could attack your server and delete your data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Machine theft"),": a burglary or theft of a computer on which your password manager is located to decrypt your backups"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Search"),": whether you are guilty or not, a search can result in the seizure of the entire computer equipment of a place (or even several)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Death/health problem"),": you may not be able to type your passphrase anymore")),(0,r.kt)("h2",{id:"about-nextcloud-or-thunderbird-imap-synchronization"},"About Nextcloud or Thunderbird (IMAP) synchronization"),(0,r.kt)("p",null,"A method that allows a partial backup is to backup files and emails via synchronization software like Nextcloud client or ThunderBird. This way, you avoid the risk of hardware failure. "),(0,r.kt)("p",null,"If this method is easy to set up, it is not without risk because of the synchronization itself. For example, if you are on Windows or Mac, you increase the risk of data loss following the encryption of files by a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ransomware"},"cryptolocker")," type virus. On any type of system, a false manipulation can delete all your copies on the server and on the equipment that synchronizes. This concern is aggravated by the fact that the deletion synchronization is usually rather instantaneous."),(0,r.kt)("p",null,"While the risk of false manipulation can be mitigated by desktop backup software such as TimeShift, the risk of false manipulation can only be mitigated by a backup on a hard drive. Only a backup on a disconnected external hard drive really protects you from ransomware."))}d.isMDXComponent=!0}}]);