"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[789],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,d=c["".concat(i,".").concat(h)]||c[h]||m[h]||r;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},50832:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Create a filesystem image",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/clone_filesystem"},"page-toc":{active:!0,depth:3}},s=void 0,l={unversionedId:"administer/backups/clone_filesystem",id:"administer/backups/clone_filesystem",title:"Create a filesystem image",description:"!! Images are missing on this page",source:"@site/docs/02.administer/20.backups/15.clone_filesystem.md",sourceDirName:"02.administer/20.backups",slug:"/administer/backups/clone_filesystem",permalink:"/yunodocusaurus/fr/docs/administer/backups/clone_filesystem",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/20.backups/15.clone_filesystem.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Create a filesystem image",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup/clone_filesystem"},"page-toc":{active:!0,depth:3}},sidebar:"tutorialSidebar",previous:{title:"Archivist",permalink:"/yunodocusaurus/fr/docs/administer/backups/backup_methods/archivist"},next:{title:"Avoid hardware failure",permalink:"/yunodocusaurus/fr/docs/administer/backups/avoid_hardware_failure"}},i={},p=[{value:"Trigger a snapshot",id:"trigger-a-snapshot",level:2},{value:"Create a cold image of the file system",id:"create-a-cold-image-of-the-file-system",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"!! Images are missing on this page"),(0,o.kt)("p",null,"YunoHost's backup tool only backs up useful files and relies on restore scripts to reinstall the dependencies of your applications. In other words, YunoHost's mechanism amounts to reinstalling and then reincorporating the data."),(0,o.kt)("p",null,"Making full system images can be a complementary or alternative way to backup your machine. The advantage is that your system can be restored to the exact state it was in at the time of the backup."),(0,o.kt)("p",null,"Depending on your type of installation, you can either create a snapshot or clone the storage medium by removing it from your server (turned off)."),(0,o.kt)("h2",{id:"trigger-a-snapshot"},"Trigger a snapshot"),(0,o.kt)("p",null,"A snapshot allows you to freeze an image of the file system. Snapshots are very useful when doing an update or testing, because they allow you to easily go back in case of a glitch. On the other hand, apart from some very high availability clusters, snapshots do not really protect you against hardware failures or disasters (cf. OVH fire in Strasbourg in 2021)."),(0,o.kt)("p",null,"In general, snapshots are quite disk space saving, the principle is that your file system will store the differences that occurred since your snapshot. Thus, only the modifications consume space."),(0,o.kt)("p",null,"! Remember to delete the old snapshots to avoid wasting your storage space by storing all the differences since that date!"),(0,o.kt)("p",null,"You can use this method with most VPS (often paying), virtual machine managers or if you have installed YunoHost with an advanced filesystem like btrfs, ceph or ZFS, you can also create snapshots via the command line"),(0,o.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="VPS"]',"\nBelow, some documentation for the most known suppliers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/images/snapshots/"},"DigitalOcean (EN)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.gandi.net/fr/simple_hosting/operations_courantes/snapshots.html"},"Gandi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ovh.com/fr/vps/snapshot-vps/"},"OVH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.scaleway.com/en/docs/backup-your-data-with-snapshots/"},"Scaleway (EN)"),'[/ui-tab][ui-tab title="VirtualBox"]',"\nSelect the virtual machine and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Snapshots"),", then specify the snapshot name and click ",(0,o.kt)("inlineCode",{parentName:"li"},"OK"),".\n",(0,o.kt)("img",{parentName:"li",src:"image://virtualbox-snapshot2.webp",alt:"The snapshot button is located at the top right"}))),(0,o.kt)("p",null,"To restore, select the virtual machine, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Snapshots")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"Restore Snapshot option"),".\n",(0,o.kt)("img",{parentName:"p",src:"image://virtualbox-snapshot3.webp",alt:null})),(0,o.kt)("p",null,"Then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Restore Snapshot"),".\n",(0,o.kt)("img",{parentName:"p",src:"image://virtualbox-snapshot4.webp",alt:null}),"\n",'[/ui-tab][ui-tab title="Proxmox"]'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the virtual machine"),(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Backup")," tab"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Backup now"),"."),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Snapshot")," mode"),(0,o.kt)("li",{parentName:"ul"},"Validate\n",'[/ui-tab][ui-tab title="BTRFS"]',"\nBelow we consider that ",(0,o.kt)("inlineCode",{parentName:"li"},"/pool/volume")," is the volume to snapshot.")),(0,o.kt)("p",null,"Create a read-only snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'btrfs subvolume snapshot /pool/volume /pool/volume/$(date +"%Y-%m-%d_%H:%M")\n')),(0,o.kt)("p",null,"List snapshots"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"btrfs subvolume show /pool/volume\n")),(0,o.kt)("p",null,"Restore a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"btrfs sub del /pool/volume\nbtrfs sub snap /pool/volume/2021-07-22_16:12 /pool/volume\nbtrfs sub del /pool/volume/2021-07-22_16:12\n")),(0,o.kt)("p",null,"Delete a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"btrfs subvolume delete /pool/volume/2021-07-22_16:12\n")),(0,o.kt)("p",null,"!! Be careful not to delete the original volume"),(0,o.kt)("p",null,"!!! See ",(0,o.kt)("a",{parentName:"p",href:"https://www.linux.com/training-tutorials/how-create-and-manage-btrfs-snapshots-and-rollbacks-linux-part-2/"},"this tutorial")," for more info\n",'[/ui-tab][ui-tab title="CEPH"]',"\nBelow we consider that ",(0,o.kt)("inlineCode",{parentName:"p"},"pool/volume")," is the volume to snapshot."),(0,o.kt)("p",null,"Create a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rbd snap create pool/volume@$(date +"%Y-%m-%d_%H:%M")\n')),(0,o.kt)("p",null,"List snapshots"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rbd snap ls pool/volume\n")),(0,o.kt)("p",null,"Restore a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rbd snap rollback pool/volume@2021-07-22_16:22\n")),(0,o.kt)("p",null,"Delete a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rbd snap rm pool/volume@2021-07-22_16:12\n")),(0,o.kt)("p",null,'[/ui-tab][ui-tab title="ZFS"]',"\nBelow we consider that ",(0,o.kt)("inlineCode",{parentName:"p"},"pool/volume")," is the volume to snapshot."),(0,o.kt)("p",null,"Create a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'zfs snapshot pool/volume@$(date +"%Y-%m-%d_%H:%M")\n')),(0,o.kt)("p",null,"List snapshots"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zfs list -t snapshot -o name,creation\n")),(0,o.kt)("p",null,"Restore a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zfs rollback pool/volume@2021-07-22_16:22\n")),(0,o.kt)("p",null,"Delete a snapshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zfs destroy pool/volume@2021-07-22_16:12\n")),(0,o.kt)("p",null,"[/ui-tab][/ui-tabs]"),(0,o.kt)("h2",{id:"create-a-cold-image-of-the-file-system"},"Create a cold image of the file system"),(0,o.kt)("p",null,"You can clone your media (SD card, ssd disk, VPS volume...) to create a disk image. This image before compression will be the exact size of your media, that's why this method applies rather to machines of less than 64GB."),(0,o.kt)("p",null,"Unless you can read a snapshot, this method requires you to stop the server while you create the image. With a VPS, you have to restart in rescue mode from your provider's interface."),(0,o.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="With USBimager"]',"\nThis can be done with ",(0,o.kt)("a",{parentName:"p",href:"https://bztsrc.gitlab.io/usbimager/"},"USBimager")," (Note: make sure you download the 'Read-write' version! Not the 'Write-only' version!). The process then consists of the \"reverse\" of the SD card flashing process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Turn off your server"),(0,o.kt)("li",{parentName:"ul"},"Retrieve the SD card and plug it into your computer"),(0,o.kt)("li",{parentName:"ul"},'In USBimager, click on "Read" to create an image ("photograph") of the SD card. You can use the resulting file to restore the whole system later.')),(0,o.kt)("p",null,"More details in ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/bztsrc/usbimager/#creating-backup-image-file-from-device"},"USBimager documentation"),"\n",'[/ui-tab][ui-tab title="In command line with dd"]'),(0,o.kt)("p",null,"It is possible to achieve the same thing with ",(0,o.kt)("inlineCode",{parentName:"p"},"dd")," if you are comfortable with the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dd if=/dev/mmcblk0 | gzip > ./my_snapshot.gz\n")),(0,o.kt)("p",null,"(replace ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/mmcblk0")," with the real name of your SD card or hard drive)"),(0,o.kt)("p",null,"[/ui-tab][/ui-tabs]"))}m.isMDXComponent=!0}}]);