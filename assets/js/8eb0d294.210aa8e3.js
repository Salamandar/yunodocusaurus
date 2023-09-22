"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={title:"Adding an external storage to your server",template:"docs",taxonomy:{category:"docs"},routes:{default:"/external_storage",aliases:["/moving_app_folder"]}},i=void 0,l={unversionedId:"administer/tutorials/external_storage",id:"administer/tutorials/external_storage",title:"Adding an external storage to your server",description:"Introduction",source:"@site/docs/02.administer/45.tutorials/25.external_storage.md",sourceDirName:"02.administer/45.tutorials",slug:"/administer/tutorials/external_storage",permalink:"/yunodocusaurus/docs/administer/tutorials/external_storage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/25.external_storage.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Adding an external storage to your server",template:"docs",taxonomy:{category:"docs"},routes:{default:"/external_storage",aliases:["/moving_app_folder"]}},sidebar:"tutorialSidebar",previous:{title:"Exchange files with your server using a graphical interface",permalink:"/yunodocusaurus/docs/administer/tutorials/filezilla"},next:{title:"Configure SMTP relay",permalink:"/yunodocusaurus/docs/administer/tutorials/email_configure_relay"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"fa=list-alt / Prerequisites",id:"falist-alt--prerequisites",level:2},{value:"1. Identify directories to be moved",id:"1-identify-directories-to-be-moved",level:2},{value:"2. Connect and identify the disk",id:"2-connect-and-identify-the-disk",level:2},{value:"3. (Optional) Format the disk",id:"3-optional-format-the-disk",level:2},{value:"4. Mount the disk",id:"4-mount-the-disk",level:2},{value:"5. Mount a /mnt/hdd folder on one of the folders you want to move data from",id:"5-mount-a-mnthdd-folder-on-one-of-the-folders-you-want-to-move-data-from",level:2},{value:"5.1 Creating subfolders on the disk",id:"51-creating-subfolders-on-the-disk",level:3},{value:"5.2 Switching to maintenance mode",id:"52-switching-to-maintenance-mode",level:3},{value:"5.3 Creating the mount points",id:"53-creating-the-mount-points",level:3},{value:"5.4 Copying the data",id:"54-copying-the-data",level:3},{value:"5.5 Exiting maintenance mode",id:"55-exiting-maintenance-mode",level:3},{value:"6. Automatically mount on boot",id:"6-automatically-mount-on-boot",level:2},{value:"7. Clean up old data",id:"7-clean-up-old-data",level:2},{value:" Congratulations!",id:"-congratulations",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Apart from the monitoring system that ensures that your system's partitions are not too small, YunoHost does not currently deal with the organisation of your partitions and disks."),(0,o.kt)("p",null,"If you are hosting on an ARM card with an SD card or on a server with a small SSD drive, you may, for reasons of reliability or lack of space, want to add a drive or drives to your server."),(0,o.kt)("p",null,"! If you have no space left on your server at all, you can now type ",(0,o.kt)("inlineCode",{parentName:"p"},"apt clean")," to try and save some space while you clean up or follow the steps below."),(0,o.kt)("p",null,"Below you will find explanations on how to move your data to a hard disk in a correct way with a minimum of impact on the functioning of YunoHost. This operation can be done during installation or, afterwards, when your storage needs have increased or when you no longer trust your SD card."),(0,o.kt)("p",null,"!!! The method presented here will first mount the single partition of the hard disk, then use one or more sub-folders of this disk to create different mount points on your system tree. This method is preferable to the use of symbolic links, as the latter may interfere with some applications including the YunoHost backup system. You could also choose to mount partitions rather than subfolders, but it is sometimes difficult to estimate the weight of a folder in advance."),(0,o.kt)("h2",{id:"falist-alt--prerequisites"},"[fa=list-alt /]"," Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Have some time at a moment when your server users can accept a shutdown. The steps to be performed, even if they are relatively simple, can sometimes seem technical and require in any case ",(0,o.kt)("strong",{parentName:"p"},"to take your time"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Know how to connect as root on your system, for example via ",(0,o.kt)("a",{parentName:"p",href:"/ssh"},"SSH"),". (Note: while logged in as ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),", you can root with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Know the basic commands ",(0,o.kt)("inlineCode",{parentName:"p"},"cd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rm"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Have a backup in case things don't work out as planned")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Have extra storage (SSD, hard drive, USB stick) connected to your server via USB or SATA"))),(0,o.kt)("h2",{id:"1-identify-directories-to-be-moved"},"1. Identify directories to be moved"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ncdu /")," command allows you to browse the folders on your server to see how big they are. "),(0,o.kt)("p",null,"Below is an explanation of some of the paths that can take up weight with some comments to help you reduce their weight or choose to move them."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Paths"),(0,o.kt)("th",{parentName:"tr",align:null},"Contents"),(0,o.kt)("th",{parentName:"tr",align:null},"Tips"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/home")),(0,o.kt)("td",{parentName:"tr",align:null},"User folders accessible via SFTP"),(0,o.kt)("td",{parentName:"tr",align:null},"Moveable to a hard disk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/home/yunohost.backup")),(0,o.kt)("td",{parentName:"tr",align:null},"YunoHost's backups"),(0,o.kt)("td",{parentName:"tr",align:null},"Depending on your backup strategy, you may want to place this folder on a separate drive from your data or databases.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/home/yunohost.app")),(0,o.kt)("td",{parentName:"tr",align:null},"Heavy data from yunohost applications (nextcloud, matrix...)"),(0,o.kt)("td",{parentName:"tr",align:null},"Moveable to a hard disk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/home/yunohost.multimedia")),(0,o.kt)("td",{parentName:"tr",align:null},"Heavy data shared between several applications"),(0,o.kt)("td",{parentName:"tr",align:null},"Moveable to a hard disk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/var/lib/mysql")),(0,o.kt)("td",{parentName:"tr",align:null},"Database used by applications"),(0,o.kt)("td",{parentName:"tr",align:null},"Ideally leave on SSD for performance reasons")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/var/lib/postgresql")),(0,o.kt)("td",{parentName:"tr",align:null},"Database used by applications"),(0,o.kt)("td",{parentName:"tr",align:null},"Ideally leave on SSD for performance reasons")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/var/mail")),(0,o.kt)("td",{parentName:"tr",align:null},"User e-mails"),(0,o.kt)("td",{parentName:"tr",align:null},"Movable to a hard disk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/var/www")),(0,o.kt)("td",{parentName:"tr",align:null},"Program of installed web applications"),(0,o.kt)("td",{parentName:"tr",align:null},"Ideally leave on SSD for performance reasons")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/var/log")),(0,o.kt)("td",{parentName:"tr",align:null},"Event logs (pages consulted, connection attempts, hardware errors...)."),(0,o.kt)("td",{parentName:"tr",align:null},"This directory should not take up too much space, if it grows quickly, it may be a looping error that should be resolved.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/opt")),(0,o.kt)("td",{parentName:"tr",align:null},"Program and dependency of some YunoHost applications."),(0,o.kt)("td",{parentName:"tr",align:null},"Ideally leave it on the SSD for performance reasons. For nodejs applications it is possible to do some cleanup of unused versions.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/boot")),(0,o.kt)("td",{parentName:"tr",align:null},"Kernels and boot files"),(0,o.kt)("td",{parentName:"tr",align:null},"Do not move unless you know what you are doing. It can happen that too many kernels are kept, it is possible to do some cleanup.")))),(0,o.kt)("h2",{id:"2-connect-and-identify-the-disk"},"2. Connect and identify the disk"),(0,o.kt)("p",null,"Start by connecting your disk to your system. You must then identify the name under which the disk is designated by the system."),(0,o.kt)("p",null,"To do this, use the command :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lsblk\n")),(0,o.kt)("p",null,"It may return something like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda           8:0    0 931.5G  0 disk\n\u2514\u2500sda1        8:1    0 931.5G  0 part\nmmcblk0     179:0    0  14.9G  0 disk\n\u251c\u2500mmcblk0p1 179:1    0  47.7M  0 part /boot\n\u2514\u2500mmcblk0p2 179:2    0  14.8G  0 part /\n")),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"mmcblk0")," corresponds to a 16GB SD card (you can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"mmcblk0p1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mmcblk0p2")," partitions correspond to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot")," partition and the ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," system partition). The hard drive connected corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"sda")," which is about 1TB, and contains a single ",(0,o.kt)("inlineCode",{parentName:"p"},"sda1"),' partition which is not mounted (no "MOUNTPOINT").'),(0,o.kt)("p",null,"! ","[fa=exclamation-triangle /]"," On another system, it may be that your system is installed on ",(0,o.kt)("inlineCode",{parentName:"p"},"sda")," and your disk is then ",(0,o.kt)("inlineCode",{parentName:"p"},"sdb")," for example."),(0,o.kt)("p",null,"!!! Tip: if the size of the disk is not enough for you to recognise it, you can unplug the disk, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"lsblk")," command, then plug the disk back in, run ",(0,o.kt)("inlineCode",{parentName:"p"},"lsblk")," and deduce the differences."),(0,o.kt)("h2",{id:"3-optional-format-the-disk"},"3. (Optional) Format the disk"),(0,o.kt)("p",null,"This operation is optional if your disk is already formatted with a file system supported by linux (so not NTFS or FAT32)."),(0,o.kt)("p",null,"Let's create a partition on the disk:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fdisk /dev/YOUR_DISK\n")),(0,o.kt)("p",null,"then enter ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," successively to create a new partition."),(0,o.kt)("p",null,"Check with ",(0,o.kt)("inlineCode",{parentName:"p"},"lsblk")," that you have your disk containing a single partition."),(0,o.kt)("p",null,"Before you can use your disk, it must be formatted."),(0,o.kt)("p",null,"! ","[fa=exclamation-triangle /]"," **Formatting a disk means deleting all the data on it! Be careful not to get the name wrong, as this may result in formatting a different disk than the one you want! In the example given earlier, it was ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/sda"),'. If your disk is already "clean", you can skip this step.'),(0,o.kt)("p",null,"To format the :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkfs.ext4 /dev/YOUR_DISK1\n# then 'y' to validate\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_DISK1")," with the name of the first partition on the disk e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"sda1"),"."),(0,o.kt)("p",null,"!!! It is possible to adapt this step, for example to create a raid 1 volume (mirrored disks) or encrypt the folder. "),(0,o.kt)("h2",{id:"4-mount-the-disk"},"4. Mount the disk"),(0,o.kt)("p",null,'Unlike Windows where disks are accessed with letters (C:/), under Linux, disks are made accessible via the file tree. "Mounting" a disk means making it effectively accessible in the file tree. We will arbitrarily choose to mount the disk in ',(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/hdd")," but you can name it differently (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/disk")," ...)."),(0,o.kt)("p",null,"Let's start by creating the directory :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /mnt/hdd\n")),(0,o.kt)("p",null,"Then we can mount the disk manually with :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mount /dev/YOUR_DISK1 /mnt/hdd\n")),(0,o.kt)("p",null,"(Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/YOUR_DISK1")," corresponds to the first partition on the disk)"),(0,o.kt)("h2",{id:"5-mount-a-mnthdd-folder-on-one-of-the-folders-you-want-to-move-data-from"},"5. Mount a /mnt/hdd folder on one of the folders you want to move data from"),(0,o.kt)("p",null,"Here we will consider that you want to move the big data of the applications which are in /home/yunohost.app and the mails on your hard disk."),(0,o.kt)("h3",{id:"51-creating-subfolders-on-the-disk"},"5.1 Creating subfolders on the disk"),(0,o.kt)("p",null,"To begin with, we create a folder on the hard drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /mnt/hdd/home/yunohost.app\nmkdir -p /mnt/hdd/var/mail\n")),(0,o.kt)("h3",{id:"52-switching-to-maintenance-mode"},"5.2 Switching to maintenance mode"),(0,o.kt)("p",null,"Then, ideally, we switch to maintenance mode the applications that might be writing data."),(0,o.kt)("p",null,"Example, for nextcloud:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u nextcloud /var/www/nextcloud/occ maintenance:mode --on\n")),(0,o.kt)("p",null,"Example, for mail:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop postfix\nsystemctl stop dovecot\n")),(0,o.kt)("p",null,"! If you wish to move databases such as mariadb (mysql), it is imperative that you stop the services for these databases otherwise it is almost certain that your data will be corrupted."),(0,o.kt)("h3",{id:"53-creating-the-mount-points"},"5.3 Creating the mount points"),(0,o.kt)("p",null,"Next, we will rename the original folder and create an empty eponymous folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv /home/yunohost.app /home/yunohost.app.bkp\nmkdir /home/yunohost.app\nmv /var/mail /var/mail.bkp\nmkdir /var/mail\n")),(0,o.kt)("p",null,"We can then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mount --bind")," command to mount the folder on our hard drive to the new empty location in the tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mount --bind /mnt/hdd/home/yunohost.app /home/yunohost.app\nmount --bind /mnt/hdd/var/mail /var/mail\n")),(0,o.kt)("h3",{id:"54-copying-the-data"},"5.4 Copying the data"),(0,o.kt)("p",null,"Next, we copy the data, keeping all the folder and file properties. This operation can take a little time, with another terminal, you can control the evolution by observing the weight associated with the mount point with ",(0,o.kt)("inlineCode",{parentName:"p"},"df -h")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp -a /home/yunohost.app.bkp/. /home/yunohost.app/\ncp -a /var/mail.bkp/. /var/mail/\n")),(0,o.kt)("p",null,"Once this is done, check with ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," that the contents are there:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -la /home/yunohost.app/\nls -la /var/mail/\n")),(0,o.kt)("h3",{id:"55-exiting-maintenance-mode"},"5.5 Exiting maintenance mode"),(0,o.kt)("p",null,"From here you can stop maintenance mode, the command below is to be adapted depending on the services you have stopped."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u nextcloud /var/www/nextcloud/occ maintenance:mode --off\nsystemctl start postfix\nsystemctl start dovecot\n")),(0,o.kt)("p",null,"From this point on, your services are running with their data on disk, so it's time to test to see how much of an impact this has on performance (especially if you are using USB 2.0)."),(0,o.kt)("h2",{id:"6-automatically-mount-on-boot"},"6. Automatically mount on boot"),(0,o.kt)("p",null,"So far we have manually mounted the disk and subfolders. However, it is necessary to configure the system to automatically mount the disk after a boot."),(0,o.kt)("p",null,"If your tests are successful, you should keep the mount points, otherwise you should hurry up and go back to maintenance first."),(0,o.kt)("p",null,"To begin with, let's find the UUID (universal identifier) of our disk with :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'blkid | grep "/dev/YOUR_DISK1:"\n# Returns something like :\n# /dev/sda1:UUID="cea0b7ae-2fbc-4f01-8884-3cb5884c8bb7" TYPE="ext4" PARTUUID="34e4b02c-02"\n')),(0,o.kt)("p",null,"Let's add a line to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," file that handles the mounting of disks at boot time. So we open the file with ",(0,o.kt)("inlineCode",{parentName:"p"},"nano")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/fstab\n")),(0,o.kt)("p",null,"Then add these lines to the end of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'UUID="cea0b7ae-2fbc-4f01-8884-3cb5884c8bb7" /mnt/hdd ext4 defaults,nofail 0 0\n/mnt/hdd/home/yunohost.app /home/yunohost.app none defaults,bind 0 0\n/mnt/hdd/var/mail /var/mail none defaults,bind 0 0\n')),(0,o.kt)("p",null,"(this line must be adapted according to the previous information and choices)"),(0,o.kt)("p",null,"Use Ctrl+X then ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," to save."),(0,o.kt)("p",null,"You can then try rebooting the system to check if the disk and subfolders are mounted automatically."),(0,o.kt)("h2",{id:"7-clean-up-old-data"},"7. Clean up old data"),(0,o.kt)("p",null,"Once your new setup is validated, you can proceed to delete the old data from step 6.3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -Rf /home/yunohost.app.bkp\nrm -Rf /var/mail.bkp\n")),(0,o.kt)("h2",{id:"-congratulations"},(0,o.kt)("img",{parentName:"h2",src:"image://tada.png?resize=32&classes=inline",alt:null})," Congratulations!"),(0,o.kt)("p",null,"If you have made it this far without damage, you now have a server that takes advantage of one or more storage disks."))}u.isMDXComponent=!0}}]);