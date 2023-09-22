"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7344],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Exchange files with your server using a graphical interface",template:"docs",taxonomy:{category:"docs"},routes:{default:"/filezilla"}},l=void 0,o={unversionedId:"administer/tutorials/filezilla",id:"administer/tutorials/filezilla",title:"Exchange files with your server using a graphical interface",description:"This page explains how to exchange files (backup archives, music, pictures, movies...) with your server using a graphical interface for the (S)FTP protocol. This is an alternative to using scp which can be deemed technical and cryptic, or using an app like Nextcloud.",source:"@site/docs/02.administer/45.tutorials/15.filezilla.md",sourceDirName:"02.administer/45.tutorials",slug:"/administer/tutorials/filezilla",permalink:"/yunodocusaurus/es/docs/administer/tutorials/filezilla",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/15.filezilla.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Exchange files with your server using a graphical interface",template:"docs",taxonomy:{category:"docs"},routes:{default:"/filezilla"}},sidebar:"tutorialSidebar",previous:{title:"Local network access to your server",permalink:"/yunodocusaurus/es/docs/administer/tutorials/domains/dns_local_network"},next:{title:"Adding an external storage to your server",permalink:"/yunodocusaurus/es/docs/administer/tutorials/external_storage"}},s={},p=[{value:"Download and install FileZilla",id:"download-and-install-filezilla",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Alternatives to Filezilla",id:"alternatives-to-filezilla",level:2},{value:"GNU/Linux",id:"gnulinux",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page explains how to exchange files (backup archives, music, pictures, movies...) with your server using a graphical interface for the (S)FTP protocol. This is an alternative to using ",(0,r.kt)("inlineCode",{parentName:"p"},"scp")," which can be deemed technical and cryptic, or using an app like Nextcloud."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://filezilla-project.org/"},"FileZilla")," can be used for this. It is free software and is available for Windows, GNU/Linux and macOS."),(0,r.kt)("h2",{id:"download-and-install-filezilla"},"Download and install FileZilla"),(0,r.kt)("p",null,"Get the client from the ",(0,r.kt)("a",{parentName:"p",href:"https://filezilla-project.org/download.php?type=client"},"download page"),". It should automatically detect the version needed for your computer. Otherwise, follow the instructions to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.filezilla-project.org/Client_Installation"},"install the client")),(0,r.kt)("p",null,"Install the program and run ",(0,r.kt)("em",{parentName:"p"},"Filezilla"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("em",{parentName:"p"},"Site Manager")," icon in the upper left to begin."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"image://filezilla_1.png",alt:"Main screen of Filezilla"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New Site")," and give a name the server you will be using : ",(0,r.kt)("em",{parentName:"p"},"Family")," here. Fill the settings as on the screenshot (replace the server address with your own), and click on ",(0,r.kt)("strong",{parentName:"p"},"Connect"),". (N.B. : if you want to interact with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/my_webapp_ynh"},"custom webapp")," files, you should use a different user than ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),". Refer to the custom webapp documentation.)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"image://filezilla_2.png",alt:"Site manager screen"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will get a warning as you connect for the first time to the server. ",(0,r.kt)("em",{parentName:"p"},"You can ignore it safely the first time you get it.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"image://filezilla_3.png",alt:"warning about the unknown fingerprint of the server"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Filezilla is now asking the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," password to connect to your server."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"image://filezilla_4.png",alt:"credential screen asking for the password"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once bookmarked, your server will be backup up and you will get this screen."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"image://filezilla_5.png",alt:'View of the "site manager" with the newly server added'})))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to the Site created previously. ",(0,r.kt)("em",{parentName:"p"},"Your passwork might be asked again")),(0,r.kt)("p",{parentName:"li"},"The left panel corresponds to your computer. The right panel corresponds to your remote YunoHost server. You can browse folders and drag-and-drop files between the two panels."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"image://filezilla_6.png",alt:"view while connected to a remote server"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the right panel, you can browse to ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/yunohost.backup/archives/")," to find ",(0,r.kt)("a",{parentName:"p",href:"/backup"},"backup archives"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"image://filezilla_7.png",alt:"path where backups are located on YunoHost"})))),(0,r.kt)("p",null,"! ","[fa=cloud-download /]"," Be sure to download both the ",(0,r.kt)("inlineCode",{parentName:"p"},".tar.gz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," files."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://filezilla_8.png",alt:"Copy backups from YunoHost to local computer"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_(en)"},"Official documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rc.fas.harvard.edu/resources/documentation/sftp-file-transfer/"},"General tutorial about using FileZilla"))),(0,r.kt)("h2",{id:"alternatives-to-filezilla"},"Alternatives to Filezilla"),(0,r.kt)("h3",{id:"gnulinux"},"GNU/Linux"),(0,r.kt)("p",null,"From any recent GNU/Linux, you should be able to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"file manager")," to reach your server."),(0,r.kt)("p",null,"Nautilus from Gnome3 has features similar to FileZilla, out of the box."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.gnome.org/users/gnome-help/stable/nautilus-connect.html.en"},"https://help.gnome.org/users/gnome-help/stable/nautilus-connect.html.en")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.techrepublic.com/article/how-to-use-linux-file-manager-to-connect-to-an-sftp-server/"},"https://www.techrepublic.com/article/how-to-use-linux-file-manager-to-connect-to-an-sftp-server/"))),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://winscp.net/"},"WinSCP")," is also a nice candidate for Windows")),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cyberduck.io/"},"Cyberduck")," is a free software available on macOS")))}m.isMDXComponent=!0}}]);