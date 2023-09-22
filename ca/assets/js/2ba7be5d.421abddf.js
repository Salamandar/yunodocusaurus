"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?o.createElement(b,s(s({ref:t},p),{},{components:n})):o.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={title:"Custom backup methods",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/custom_backup_methods"},"page-toc":{active:!0,depth:3}},s=void 0,c={unversionedId:"administer/backups/custom_backup_methods",id:"administer/backups/custom_backup_methods",title:"Custom backup methods",description:"It is possible to create your own backup method and link it to YunoHost's backup file collection system. This can be useful if you want to use your own backup software or conduct disk mount/dismount operations for example.",source:"@site/docs/02.administer/20.backups/30.custom_backup_methods.md",sourceDirName:"02.administer/20.backups",slug:"/administer/backups/custom_backup_methods",permalink:"/yunodocusaurus/ca/docs/administer/backups/custom_backup_methods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/30.custom_backup_methods.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Custom backup methods",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/custom_backup_methods"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"Include or exclude files",permalink:"/yunodocusaurus/ca/docs/administer/backups/include_exclude_files"},next:{title:"Migrate or merge servers",permalink:"/yunodocusaurus/ca/docs/administer/backups/migrate_or_merge_servers"}},u={},i=[],p={toc:i},d="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is possible to create your own backup method and link it to YunoHost's backup file collection system. This can be useful if you want to use your own backup software or conduct disk mount/dismount operations for example."),(0,r.kt)("p",null,"This operation is done with a hook and will allow you to launch a backup this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yunohost backup create --method custom\n")),(0,r.kt)("p",null,"Below is a simplistic example that can be used to set up a rotational backup with different disks that are changed every week:"),(0,r.kt)("p",null,"/etc/yunohost/hooks.d/backup_method/05-custom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nset -euo pipefail\n\nwork_dir="$2"\nname="$3"\nrepo="$4"\nsize="$5"\ndescription="$6"\n\ncase "$1" in\n  need_mount)\n    # Set false if your method can itself put files in good place in your archive\n    true\n    ;;\n  backup)\n    mount /dev/sda1 /mnt/hdd\n    if [[ "$(df /mnt/hdd | tail -n1 | cut -d" " -f1)" != "/dev/sda1" ]]\n    then\n        exit 1\n    fi\n    pushd "$work_dir"\n    current_date=$(date +"%Y-%m-%d_%H:%M")\n    cp -a "${work_dir}" "/mnt/hdd/${current_date}_$name"\n    popd\n    umount /mnt/hdd\n    ;;\n  *)\n    echo "hook called with unknown argument \\`$1\'" >&2\n    exit 1\n    ;;\nesac\n\nexit 0\n')))}l.isMDXComponent=!0}}]);