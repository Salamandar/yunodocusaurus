"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5222],{18679:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},a)}},73992:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(87462),r=t(67294),o=t(86010),i=t(72957),l=t(16550),s=t(75238),u=t(33609),c=t(92560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,u]=h({queryString:t,groupId:n}),[p,k]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),b=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var b=t(51048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:a,block:t,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==l&&(p(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(g,(0,n.Z)({},e,a)),r.createElement(y,(0,n.Z)({},e,a)))}function w(e){const a=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(a)},e))}},13645:(e,a,t)=>{t.d(a,{CA:()=>l,D8:()=>c,Ki:()=>m,ZP:()=>o,d2:()=>p,kf:()=>u,pL:()=>s,px:()=>i});var n=t(67294),r=t(67814);function o(e){let{children:a,color:t,no_break:r}=e;return n.createElement("span",{style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0.2rem",whiteSpace:r?"pre":null}},a)}function i(){return n.createElement(o,{no_break:!0,color:"green"},n.createElement(r.G,{icon:["fa","cogs"]})," Webadmin")}function l(){return n.createElement(o,{no_break:!0,color:"#1877F2"},n.createElement(r.G,{icon:["fa","cubes"]})," Applications")}function s(){return n.createElement(o,{no_break:!0,color:"green"},"+ Install")}function u(){return n.createElement(o,{no_break:!0,color:"darkgreen"},n.createElement(r.G,{icon:["fa","stethoscope"]})," Diagnosis")}function c(){return n.createElement(o,{no_break:!0,color:"#3a87ad"},"FFDN")}function p(){return n.createElement(o,{no_break:!0,color:"#32b643"},"Non Profit")}function m(){return n.createElement(o,{no_break:!0,color:"#f0980c"},"CHATONS")}},27898:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),o=t(73992),i=t(18679);t(13645);const l={title:"Backing up your server",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup"}},s=void 0,u={unversionedId:"administer/admin_guide/backup",id:"administer/admin_guide/backup",title:"Backing up your server",description:"In the context of self-hosting, backups are an important element to compensate for unexpected events (fire, database corruption, loss of access to the server, compromised server...). The backup policy to implement depends on the importance of the services and data you manage. For example, backing up a test server will be of little interest, while you will want to be very careful if you are managing critical data for an association or a company - and in such cases, you will want to store the backups in a different location or locations.",source:"@site/docs/02.administer/15.admin_guide/50.backup.mdx",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/backup",permalink:"/yunodocusaurus/docs/administer/admin_guide/backup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/50.backup.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Backing up your server",template:"docs",taxonomy:{category:"docs"},routes:{default:"/backup"}},sidebar:"docsSidebar",previous:{title:"Emails",permalink:"/yunodocusaurus/docs/administer/admin_guide/email"},next:{title:"Upgrades",permalink:"/yunodocusaurus/docs/administer/admin_guide/upgrade/"}},c={},p=[{value:"Manual backup",id:"manual-backup",level:2},{value:"Backup",id:"backup",level:3},{value:"Creating backups",id:"creating-backups",level:4},{value:"Downloading backups",id:"downloading-backups",level:4},{value:"Testing",id:"testing",level:3},{value:"Restoring backups",id:"restoring-backups",level:3},{value:"Simple case: little data, archive already present",id:"simple-case-little-data-archive-already-present",level:4},{value:"Upload an archive",id:"upload-an-archive",level:4},{value:"Automatic or remote backup",id:"automatic-or-remote-backup",level:2},{value:"Go further",id:"go-further",level:2}],m={toc:p},d="wrapper";function h(e){let{components:a,...l}=e;return(0,r.kt)(d,(0,n.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the context of self-hosting, backups are an important element to compensate for unexpected events (fire, database corruption, loss of access to the server, compromised server...). The backup policy to implement depends on the importance of the services and data you manage. For example, backing up a test server will be of little interest, while you will want to be very careful if you are managing critical data for an association or a company - and in such cases, you will want to store the backups ",(0,r.kt)("em",{parentName:"p"},"in a different location or locations"),"."),(0,r.kt)("h2",{id:"manual-backup"},"Manual backup"),(0,r.kt)("h3",{id:"backup"},"Backup"),(0,r.kt)("p",null,"YunoHost comes with a backup system, that allows you to backup (and restore) system configurations and data (e.g. emails) and apps if they support it."),(0,r.kt)("p",null,"You can manage backups either from the command line (",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup --help"),") or from the web administration (in the Backups section), though some features are not yet available in the webadmin."),(0,r.kt)("p",null,"The current default method consists in creating a ",(0,r.kt)("inlineCode",{parentName:"p"},".tar")," archive containing all relevant files."),(0,r.kt)("h4",{id:"creating-backups"},"Creating backups"),(0,r.kt)(o.Z,{groupId:"admin-commands",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"From the web interface",mdxType:"TabItem"},"You can easily create backup archives from the webadmin by going to `Backups > Local storage` and clicking on `New backup`. You will then be asked to select which configuration, data and apps you want to backup.",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture of YunoHost&#39;s backup pannel",src:t(87553).Z,width:"456",height:"505"}))),(0,r.kt)(i.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,r.kt)("p",null,"You can create a new backup archive from the command line. Here are a few simple examples of commands and their corresponding behavior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backing up everything (all system parts and apps):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost backup create\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backing up only apps"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost backup create --apps\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backing up only two apps (wordpress and shaarli)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost backup create --apps wordpress shaarli\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backing up only emails"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost backup create --system data_mail\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backing up emails and wordpress"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost backup create --system data_mail --apps wordpress\n")))),(0,r.kt)("p",null,"For more information and options about backup creation, consult ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup create --help"),". You can also list the system parts that can be backed up with ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost hook list backup"),"."))),(0,r.kt)("h4",{id:"downloading-backups"},"Downloading backups"),(0,r.kt)(o.Z,{groupId:"admin-commands",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"From the web interface",mdxType:"TabItem"},(0,r.kt)("p",null,"After creating backups, it is possible to list and inspect them using the corresponding views in the web administration interface. A button allows you to download the archive. If the archive is larger than 3GB, it may be better to proceed via SFTP."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Backup > Local Archives > <Archive name> > Download"))),(0,r.kt)(i.Z,{value:"sftp",label:"With a SFTP client",mdxType:"TabItem"},(0,r.kt)("p",null,"Currently, the most accessible way to download big archives is to use the program FileZilla as explained in ",(0,r.kt)("a",{parentName:"p",href:"/filezilla"},"this page"),"."),(0,r.kt)("p",null,"By default, backups are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/yunohost.backup/archives/"),".")),(0,r.kt)(i.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup info <archive_name>")," commands provide information about the names and sizes of backups."),(0,r.kt)("p",null,"It is possible to use ",(0,r.kt)("inlineCode",{parentName:"p"},"scp")," (a program based on ",(0,r.kt)("a",{parentName:"p",href:"/ssh"},(0,r.kt)("inlineCode",{parentName:"a"},"ssh")),") to copy files between two machines via the command line. So, from a GNU/Linux machine, you can use the following command to download an archive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp admin@your.domain.tld:/home/yunohost.backup/archives/<archive_name>.tar ./\n")),(0,r.kt)("p",null,"If your SSH port is different from 22"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp -P ssh_port admin@your.domain.tld:/home/yunohost.backup/archives/<archive_name>.tar ./\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to store your backup in a different place to your server.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want, you can connect an external disk to your server so that the archives arrive directly on it. See this guide to ",(0,r.kt)("a",{parentName:"p",href:"/external_storage"},"Adding external storage to your server"))),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"You should regularly test your backups by at least listing the contents of the archives and checking the size of the associated data. It is best to practice restoring regularly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# List the files\ntar -tvf /home/yunohost.backup/archives/ARCHIVE.tar | less\n\n# List database exports\ntar -tvf /home/yunohost.backup/archives/ARCHIVE.tar | grep "(db|dump).sql"\n\n# Check the weight\nls -lh /home/yunohost.backup/archives/ARCHIVE.tar\n')),(0,r.kt)("h3",{id:"restoring-backups"},"Restoring backups"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SPOILER: The larger your data volume and the more applications you have, the more complex your recovery will be.")),(0,r.kt)("h4",{id:"simple-case-little-data-archive-already-present"},"Simple case: little data, archive already present"),(0,r.kt)(o.Z,{groupId:"admin-commands",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"From the web interface",mdxType:"TabItem"},(0,r.kt)("p",null,"Go in ",(0,r.kt)("inlineCode",{parentName:"p"},"Backup > Local storage")," and select your archive. You can then select which items you want to restore, then click on 'Restore'."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture of YunoHost&#39;s restore pannel",src:t(88094).Z,width:"456",height:"342"}))),(0,r.kt)(i.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,r.kt)("p",null,"From the command line, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup list")," to get the available archive names. They are basically their file name without extension."),(0,r.kt)("p",null,"You can then run ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup restore <archivename>")," (hence without its ",(0,r.kt)("inlineCode",{parentName:"p"},".tar")," extension) to restore an archive. As for ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup create"),", this will restore everything in the archive by default. If you want to restore only specific items, you can use something like ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost backup restore <archivename> --apps wordpress"),", which will restore only the wordpress app."),(0,r.kt)("p",null,"!!! In the case of a complete restoration, it is possible to restore instead of launching the initial configuration."))),(0,r.kt)("p",null,"To restore an app, the domain on which it was installed should already be configured (or you need to restore the corresponding system configuration). You also cannot restore an app which is already installed... which means that to restore an old version of an app, you must first uninstall it."),(0,r.kt)("h4",{id:"upload-an-archive"},"Upload an archive"),(0,r.kt)("p",null,"In many cases, the archive is not on the server on which you want to restore it. So it has to be uploaded, which depending on its size can take more or less time."),(0,r.kt)(o.Z,{groupId:"admin-commands",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sftp",label:"With a SFTP client",mdxType:"TabItem"},(0,r.kt)("p",null,"Currently, the most accessible solution for uploading backups is to use the FileZilla program as explained in ",(0,r.kt)("a",{parentName:"p",href:"/filezilla"},"this page"),".\nBy default, backups are to be placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/yunohost.backup/archives/"),".")),(0,r.kt)(i.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,r.kt)("p",null,"You can upload a backup from a machine to your server with :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp /path/to/your/<archive_name>.tar admin@your.domain.tld:/home/yunohost.backup/archives/\n")),(0,r.kt)("p",null,"If your SSH port is different from 22"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp -P ssh_port /path/to/your/<archive_name>.tar admin@your.domain.tld:/home/yunohost.backup/archives/\n")))),(0,r.kt)("h2",{id:"automatic-or-remote-backup"},"Automatic or remote backup"),(0,r.kt)("p",null,"There are 3 YunoHost applications that offer to extend YunoHost with an automated backup method."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/borgbackup"},"BorgBackup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/restic"},"Restic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/archivist"},"Archivist"))),(0,r.kt)("h2",{id:"go-further"},"Go further"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/strategies"},"Evaluate the quality of your backup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/clone_filesystem"},"Clone your file system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/avoid_hardware_failure"},"Avoid a hardware failure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/include_exclude_files"},"Include/exclude files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/custom_backup_methods"},"Custom methods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/backup/migrate_or_merge_servers"},"Migrate or merge servers"))))}h.isMDXComponent=!0},87553:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/backup-e0d7d8d8731b1e1a65ddb477d866dc72.png"},88094:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/restore-6249e66027da3368ac270ff7c9ea3c05.png"}}]);