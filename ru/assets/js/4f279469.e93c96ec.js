"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4911],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||r;return t?o.createElement(m,s(s({ref:n},i),{},{components:t})):o.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=h;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const r={title:"Include or exclude files",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/include_exclude_files"},"page-toc":{active:!0,depth:3}},s=void 0,c={unversionedId:"administer/backups/include_exclude_files",id:"administer/backups/include_exclude_files",title:"Include or exclude files",description:"Include files",source:"@site/docs/02.administer/20.backups/25.include_exclude_files.md",sourceDirName:"02.administer/20.backups",slug:"/administer/backups/include_exclude_files",permalink:"/yunodocusaurus/ru/docs/administer/backups/include_exclude_files",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/25.include_exclude_files.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Include or exclude files",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/include_exclude_files"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"Avoid hardware failure",permalink:"/yunodocusaurus/ru/docs/administer/backups/avoid_hardware_failure"},next:{title:"Custom backup methods",permalink:"/yunodocusaurus/ru/docs/administer/backups/custom_backup_methods"}},u={},l=[{value:"Include files",id:"include-files",level:2},{value:"Exclude files",id:"exclude-files",level:2},{value:"Avoid backing up certain <code>/home</code> folders",id:"avoid-backing-up-certain-home-folders",level:3},{value:"Do not backup large amounts of data",id:"do-not-backup-large-amounts-of-data",level:3}],i={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"include-files"},"Include files"),(0,a.kt)("p",null,"YunoHost usually already knows what needs to be backed up. However, if you have made manual changes, such as installing an app outside of the YunoHost application system, you may want to extend YunoHost's mechanism to specify other files to be backed up."),(0,a.kt)("p",null,"By default, if configurations tracked by YunoHost are changed, they will be backed up. On the other hand, a database or an app added by hand, changes on some configurations not tracked, will not be backed up."),(0,a.kt)("p",null,"You can create a backup hook and a restore hook to add data to backup. Here is an example:"),(0,a.kt)("p",null,"/etc/yunohost/hooks.d/backup/99-conf_custom"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Source YNH helpers\nsource /usr/share/yunohost/helpers\n\nynh_backup_dest (){\n    YNH_CWD="${YNH_BACKUP_DIR%/}/$1"\n    mkdir -p $YNH_CWD\n    cd "$YNH_CWD"\n}\n\n# Exit hook on subcommand error or unset variable\nynh_abort_if_errors\n\n# Openvpn\nynh_backup_dest "conf/custom/openvpn"\nynh_backup "/etc/sysctl.d/openvpn.conf"\nynh_backup "/etc/openvpn"\nynh_backup "/etc/fail2ban/jail.d/openvpn.conf"\nynh_backup "/etc/fail2ban/filter.d/openvpn.conf"\n\n# Samba\nynh_backup_dest "conf/custom/samba"\nynh_backup "/etc/samba"\nynh_backup "/var/lib/samba"\nynh_backup "/etc/yunohost/hooks.d/post_user_create/99-samba"\nynh_backup "/etc/yunohost/hooks.d/post_user_delete/99-samba"\nynh_backup --src_path="/etc/yunohost/hooks.d/post_user_update/99-samba" --not_mandatory\nynh_backup "/etc/cron.daily/clean-trash"\n\n# MISC\nynh_backup_dest "conf/custom/misc"\nynh_backup "/etc/sysctl.d/noipv6.conf"\nynh_backup "/usr/local/bin/"\nynh_backup "/etc/yunohost/hooks.d/backup/99-conf_custom"\nynh_backup "/etc/yunohost/hooks.d/restore/99-conf_custom"\n')),(0,a.kt)("p",null,"/etc/yunohost/hooks.d/restore/99-conf_custom"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Source YNH helpers\nsource /usr/share/yunohost/helpers\n\nynh_restore_dest (){\n    YNH_CWD="${YNH_BACKUP_DIR%/}/$1"\n    cd "$YNH_CWD"\n}\n\n# Exit hook on subcommand error or unset variable\nynh_abort_if_errors\n\n# Openvpn\napp="custom_openvpn" # This variable is important for the following helper\nynh_install_app_dependencies "openvpn openvpn-auth-ldap samba"\n\nynh_restore_dest "conf/custom/openvpn"\nynh_restore_file "/etc/sysctl.d/openvpn.conf"\nynh_restore_file "/etc/openvpn"\nynh_restore_file "/etc/fail2ban/jail.d/openvpn.conf"\nynh_restore_file "/etc/fail2ban/filter.d/openvpn.conf"\n\n# Samba\napp="custom_samba" # This variable is important for the following helper\nynh_install_app_dependencies "samba"\n\nynh_restore_dest "conf/custom/samba"\nynh_restore_file "/etc/samba"\nynh_restore_file "/var/lib/samba"\nynh_restore_file "/etc/yunohost/hooks.d/post_user_create/99-samba"\nynh_restore_file "/etc/yunohost/hooks.d/post_user_delete/99-samba"\nynh_restore_file --src_path="/etc/yunohost/hooks.d/post_user_update/99-samba" --not_mandatory\nynh_restore_file "/etc/cron.daily/clean-trash"\nchown -R openvpn:openvpn /etc/openvpn\n\n# MISC\nynh_restore_dest "conf/custom/misc"\nynh_restore_file "/etc/sysctl.d/noipv6.conf"\nynh_restore_file "/usr/local/bin/"\nynh_restore_file "/etc/yunohost/hooks.d/backup/99-conf_custom"\nynh_restore_file "/etc/yunohost/hooks.d/restore/99-conf_custom"\n')),(0,a.kt)("h2",{id:"exclude-files"},"Exclude files"),(0,a.kt)("p",null,"There is no mechanism to exclude specific files from a YunoHost backup, other than the 2 options presented below:"),(0,a.kt)("h3",{id:"avoid-backing-up-certain-home-folders"},"Avoid backing up certain ",(0,a.kt)("inlineCode",{parentName:"h3"},"/home")," folders"),(0,a.kt)("p",null,"If needed, you can specify that certain user ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," folders not be backed up by the ",(0,a.kt)("inlineCode",{parentName:"p"},"yunohost backup")," command, by creating an empty file named ",(0,a.kt)("inlineCode",{parentName:"p"},".nobackup")," inside."),(0,a.kt)("p",null,"Caution: this setup only works with ",(0,a.kt)("strong",{parentName:"p"},"first-level subfolders of ",(0,a.kt)("inlineCode",{parentName:"strong"},"/home")),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/user1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/yunohost.multimedia"),". It does not work for other levels of subfolders, like ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/user1/bigfolder/"),"."),(0,a.kt)("h3",{id:"do-not-backup-large-amounts-of-data"},"Do not backup large amounts of data"),(0,a.kt)("p",null,'Some apps like Nextcloud are potentially attached to large amounts of data. It is possible to not backup them by default. In this case, the app is said to "backup only the core" (of the app).',(0,a.kt)("br",{parentName:"p"}),"\n","During an update, apps containing a large amount of data usually make a backup without these data."),(0,a.kt)("p",null,"To temporarily disable backup of large data, for applications that implement this feature, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"BACKUP_CORE_ONLY")," variable. To do this, the variable must be set before the backup command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"BACKUP_CORE_ONLY=1 yunohost backup create --apps nextcloud\n")),(0,a.kt)("p",null,"Be careful: you will have to backup Nextcloud users' data yourself."),(0,a.kt)("p",null,"If you want this behavior to be permanent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost app setting nextcloud do_not_backup_data -v 1\n")))}d.isMDXComponent=!0}}]);