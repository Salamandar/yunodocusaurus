"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7617],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(f,s(s({ref:t},c),{},{components:o})):n.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},38686:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Transmission",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_transmission"}},s=void 0,i={unversionedId:"applications/docs/app_transmission",id:"applications/docs/app_transmission",title:"Transmission",description:"Transmission's logo",source:"@site/docs/04.applications/10.docs/app_transmission.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_transmission",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_transmission",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_transmission.md",tags:[],version:"current",frontMatter:{title:"Transmission",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_transmission"}},sidebar:"tutorialSidebar",previous:{title:"Time Machine",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_timemachine"},next:{title:"Trilium Notes",permalink:"/yunodocusaurus/ru/docs/applications/docs/app_trilium"}},l={},p=[{value:"What is Transmission?",id:"what-is-transmission",level:3},{value:"How to download completed files?",id:"how-to-download-completed-files",level:3},{value:"Sending files towards server for seeding",id:"sending-files-towards-server-for-seeding",level:3},{value:"With SFTP",id:"with-sftp",level:4},{value:"With SCP (complex)",id:"with-scp-complex",level:4},{value:"How to download a complete folder?",id:"how-to-download-a-complete-folder",level:5}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"image://transmission.png",alt:"Transmission's logo"})),(0,r.kt)("h3",{id:"what-is-transmission"},"What is Transmission?"),(0,r.kt)("p",null,"Transmission is a share software based on BitTorrent protocol."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://transmissionbt.com/"},"Transmission web site"))),(0,r.kt)("h3",{id:"how-to-download-completed-files"},"How to download completed files?"),(0,r.kt)("p",null,"If Transmission is installed on ",(0,r.kt)("inlineCode",{parentName:"p"},"/torrent/"),", you could download your completed files to the following address: ",(0,r.kt)("a",{parentName:"p",href:"https://your-domain-name.org/torrent/downloads/"},"https://your-domain-name.org/torrent/downloads/")),(0,r.kt)("h3",{id:"sending-files-towards-server-for-seeding"},"Sending files towards server for seeding"),(0,r.kt)("p",null,"In YunoHost, completed files are saved in: ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/yunohost.transmission/completed")),(0,r.kt)("h4",{id:"with-sftp"},"With SFTP"),(0,r.kt)("p",null,"With your ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/File_manager"},"file manager")," (under GNU/Linux) do ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL + L")," then enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sftp://<user>@<your-domain.org>/home/yunohost.transmission/completed\n")),(0,r.kt)("p",null,"user = admin or root"),(0,r.kt)("h4",{id:"with-scp-complex"},"With SCP (complex)"),(0,r.kt)("p",null,"To transfer file, type in the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp (-r) /your/file/ root@your-domain.org:/home/yunohost.transmission/completed\n")),(0,r.kt)("h5",{id:"how-to-download-a-complete-folder"},"How to download a complete folder?"),(0,r.kt)("p",null,"Once connected to your server, using ",(0,r.kt)("a",{parentName:"p",href:"/ssh"},"SSH"),", move to the download folder and ZIP it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/yunohost.transmission/completed\nzip -r your_archive.zip [dossier]\n")),(0,r.kt)("p",null,"More informations about file transfer using ",(0,r.kt)("em",{parentName:"p"},"scp"),": ",(0,r.kt)("a",{parentName:"p",href:"http://doc.ubuntu-fr.org/ssh#transfert_-_copie_de_fichiers"},"http://doc.ubuntu-fr.org/ssh#transfert_-_copie_de_fichiers")," (French, need English documentation)"))}u.isMDXComponent=!0}}]);