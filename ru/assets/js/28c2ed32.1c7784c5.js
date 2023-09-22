"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=h;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[d]="string"==typeof e?e:o,i[1]=n;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},23061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const s={title:"Avoid hardware failure",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/avoid_hardware_failure"},"page-toc":{active:!0,depth:3}},i=void 0,n={unversionedId:"administer/backups/avoid_hardware_failure",id:"administer/backups/avoid_hardware_failure",title:"Avoid hardware failure",description:"Physically secure your server",source:"@site/docs/02.administer/20.backups/20.avoid_hardware_failure.md",sourceDirName:"02.administer/20.backups",slug:"/administer/backups/avoid_hardware_failure",permalink:"/yunodocusaurus/ru/docs/administer/backups/avoid_hardware_failure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/20.avoid_hardware_failure.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Avoid hardware failure",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/avoid_hardware_failure"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"Create a filesystem image",permalink:"/yunodocusaurus/ru/docs/administer/backups/clone_filesystem"},next:{title:"Include or exclude files",permalink:"/yunodocusaurus/ru/docs/administer/backups/include_exclude_files"}},l={},u=[{value:"Physically secure your server",id:"physically-secure-your-server",level:2},{value:"Secure your hard drives",id:"secure-your-hard-drives",level:2},{value:"Reduce swapiness for SD cards and SSDs",id:"reduce-swapiness-for-sd-cards-and-ssds",level:2},{value:"Storage redundancy",id:"storage-redundancy",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"physically-secure-your-server"},"Physically secure your server"),(0,o.kt)("p",null,"Very often people who self-host don't have proper storage for their system. Leaving the server in several parts, in a high traffic area, accessible to children or pets, or in a poorly ventilated area can quickly turn into a disaster."),(0,o.kt)("h2",{id:"secure-your-hard-drives"},"Secure your hard drives"),(0,o.kt)("p",null,"Ideally, your hard disks should be fixed to avoid vibrations which can accelerate the wear of the equipment or even reduce its performance, especially if there is another disk next to it."),(0,o.kt)("h2",{id:"reduce-swapiness-for-sd-cards-and-ssds"},"Reduce swapiness for SD cards and SSDs"),(0,o.kt)("p",null,"If you use a swap file with an SSD or SD card with too much swapiness, your storage media could give up the ghost prematurely due to too many writes."),(0,o.kt)("p",null,"To avoid this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat /proc/sys/vm/swappiness\n")),(0,o.kt)("p",null,"If it is above 10:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sysctl vm.swappiness=10\nnano /etc/sysctl.conf\n")),(0,o.kt)("p",null,"If present, change the vm.swappiness value to 10. Otherwise add the line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vm.swappiness = 10\n")),(0,o.kt)("h2",{id:"storage-redundancy"},"Storage redundancy"),(0,o.kt)("p",null,"In order to limit hardware failures of storage media, it can be relevant to set up a cluster of mirrored disks (RAID, ZFS). The idea here is that everything that is written to one disk will be written to the other. This way, if one fails, the other continues to work and the server is still fully functional."),(0,o.kt)("p",null,"There are also more advanced clusters that maximize fault tolerance (failure of 2 disks like RAID6) or storage (see RAID 5)."),(0,o.kt)("p",null,"However, these disk clustering techniques should not be considered as backups. A RAID array should be considered as a single storage medium. Indeed, if this technique avoids having to reinstall in case of a probable disk crash, it is far from zero risk."),(0,o.kt)("p",null,"Some examples of situations known to professional system administrators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the disks of a cluster mounted with disks of the same brand can fail almost at the same time within a few hours"),(0,o.kt)("li",{parentName:"ul"},"without monitoring the health of the disks, there is a good chance that the failure of one disk in the cluster will only be noticed when a second one fails (><)"),(0,o.kt)("li",{parentName:"ul"},"if you don't have a spare disk, the delay in purchasing one may result in the other disk crashing"),(0,o.kt)("li",{parentName:"ul"},"a half-functional disk that produces errors can propagate its error through the cluster"),(0,o.kt)("li",{parentName:"ul"},"the disk connectors or the RAID controller can also produce errors or fail"),(0,o.kt)("li",{parentName:"ul"},"the more complex you make the architecture with many components, the more likely it is that one of them will fail")),(0,o.kt)("p",null,"!!! If you want to set up a RAID array or use btrfs, the easiest way is to do it at installation with the YunoHost iso in expert mode (when partitioning the system)."))}p.isMDXComponent=!0}}]);