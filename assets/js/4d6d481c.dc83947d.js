"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=o,m=c["".concat(l,".").concat(g)]||c[g]||h[g]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Create a development environment with VirtualBox",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_apps_virtualbox"}},i=void 0,s={unversionedId:"contribute/packaging_apps/resources/packaging_apps_virtualbox",id:"contribute/packaging_apps/resources/packaging_apps_virtualbox",title:"Create a development environment with VirtualBox",description:"This documentation page aims at explaining how to setup a YunoHost virtual server, using VirtualBox, to work on application packaging.",source:"@site/docs/06.contribute/10.packaging_apps/80.resources/04.packaging_apps_virtualbox.md",sourceDirName:"06.contribute/10.packaging_apps/80.resources",slug:"/contribute/packaging_apps/resources/packaging_apps_virtualbox",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/resources/packaging_apps_virtualbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/80.resources/04.packaging_apps_virtualbox.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Create a development environment with VirtualBox",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_apps_virtualbox"}},sidebar:"tutorialSidebar",previous:{title:"Use Git to package apps",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/resources/packaging_apps_git"},next:{title:"App helpers",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/resources/packaging_apps_helpers"}},l={},p=[{value:"Why use VirtualBox rather than an actual YunoHost production server to package an application?",id:"why-use-virtualbox-rather-than-an-actual-yunohost-production-server-to-package-an-application",level:2},{value:"Installing VirtualBox",id:"installing-virtualbox",level:2},{value:"Installing YunoHost on VirtualBox",id:"installing-yunohost-on-virtualbox",level:2},{value:"Using snapshots",id:"using-snapshots",level:2},{value:"Now, let&#39;s create a first snapshot",id:"now-lets-create-a-first-snapshot",level:4},{value:"Using multiple snapshot branches",id:"using-multiple-snapshot-branches",level:4},{value:"How do we connect to the virtual machine?",id:"how-do-we-connect-to-the-virtual-machine",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation page aims at explaining how to setup a YunoHost virtual server, using VirtualBox, to work on application packaging."),(0,o.kt)("h2",{id:"why-use-virtualbox-rather-than-an-actual-yunohost-production-server-to-package-an-application"},"Why use VirtualBox rather than an actual YunoHost production server to package an application?"),(0,o.kt)("p",null,"There are mostly two reasons why one should prefer a virtual server rather than their own server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can freely torture a virtual server without any risk of breaking it, since you can always restore it to a former working state. It would really be a pity to break your own real server!"),(0,o.kt)("li",{parentName:"ul"},"In a typical workflow, a virtual server state would be restored from a known snapshot before starting any work on it, so as to always keep a clean system, without any residues of a former installation. This allows to always be as close a possible to a user first installation.")),(0,o.kt)("p",null,"We will discuss VirtualBox in this guide, as it comes with an easy to use GUI. If you prefer a pure commandline approach to handling your virtual machine, you should use ",(0,o.kt)("a",{parentName:"p",href:"/dev"},"ynh-dev")," instead."),(0,o.kt)("h2",{id:"installing-virtualbox"},"Installing VirtualBox"),(0,o.kt)("p",null,"From a GNU/Linux system, simply install the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualbox-qt")," package.\nFrom a Windows or macOS machine, you'd have to refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox download page")," to fetch the appropriate installation package. The virtualbox package is deprecated since Debian 9, a ",(0,o.kt)("inlineCode",{parentName:"p"},".deb")," installation package is available on the abovementioned referenced page."),(0,o.kt)("p",null,"Whatever your system, there should be no need to install the extension pack or the guest addons."),(0,o.kt)("h2",{id:"installing-yunohost-on-virtualbox"},"Installing YunoHost on VirtualBox"),(0,o.kt)("p",null,"Simply follow the appropriate documentation for ",(0,o.kt)("a",{parentName:"p",href:"/install_on_virtualbox"},"installing on VirtualBox")," then the ",(0,o.kt)("a",{parentName:"p",href:"/postinstall"},"post-installation")," guide."),(0,o.kt)("p",null,"During post-install, there is no need to use an actual domain name in ",(0,o.kt)("inlineCode",{parentName:"p"},".nohost.me")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".noho.st"),", as your virtual server won't be reachable from outside your local network.\nWe prefer using a fake domain name which will remain associated with your local network, for instance ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost.packaging"),"."),(0,o.kt)("p",null,"This domain name, not being registered with any DNS server, will be stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," file of the computer which will need to access it. Please refer to the documentation about ",(0,o.kt)("a",{parentName:"p",href:"/dns_local_network"},"using a local DNS")," for more information."),(0,o.kt)("p",null,"Your virtual server is now installed. Before starting to use it, we'll see how to create a first snapshot and how to use that feature."),(0,o.kt)("h2",{id:"using-snapshots"},"Using snapshots"),(0,o.kt)("p",null,"VirtualBox becomes even more interesting with its snapshotting feature, which allow to store the virtualized machine state and restore it quickly.\nWe'll also see how to use multiple snapshot branches to work on different apps on the same machine."),(0,o.kt)("h4",{id:"now-lets-create-a-first-snapshot"},"Now, let's create a first snapshot"),(0,o.kt)("p",null,"Before starting to play with the virtual machine, now is a good time to take a first snapshot, so that we don't have to redo the full install process every time.\nFirst, stop the virtual machine."),(0,o.kt)("p",null,"Managing snapshots is done in the 'Snapshots' tab\n",(0,o.kt)("img",{parentName:"p",src:"image://virtualbox_packaging1-en.png",alt:null})),(0,o.kt)("p",null,"Here, we're creating a first snapshot\n",(0,o.kt)("img",{parentName:"p",src:"image://virtualbox_packaging2-en.png",alt:null})),(0,o.kt)("p",null,"We can now start to work on the virtual machine and create as many snapshots as desired for each milestone of our modifications."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://virtualbox_packaging3-en.png",alt:null})),(0,o.kt)("p",null,"In this example, after having validated our particular package removal works fine, we can easily get back in time by restoring the virtual machine to its previous state with the package still installed.\nOnce the package will be fully functional, it will just be a matter of deleting the snaphots associated with this package work to get the virtual machine back to its initial state.\nFor our next test, we will then be back to a freshly installed YunoHost serveur, without any trace of package installation."),(0,o.kt)("h4",{id:"using-multiple-snapshot-branches"},"Using multiple snapshot branches"),(0,o.kt)("p",null,"In addition to successive snapshots, it is also possible to create a new machine state and additional snapshots from an older machine snapshot/state."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://virtualbox_packaging4-en.png",alt:null})),(0,o.kt)("p",null,'In this example, I have created two branches since my successful package installation, so as to independently test just the application removal, upgrade and backup/restore steps.\nI eventually got back to the virtual machine base state to start a new test on another package, without dropping my former test whatsoever.\nAt any time, it is possible to get back to a previous snapshot simply by restoring it.\nThe machine always start on the "Current state" state.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://virtualbox_packaging5-en.png",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is always possible to create a new snapshot, whether the machine is stopped or not. To restore a snapshot however, the machine cannot be running.")),(0,o.kt)("h2",{id:"how-do-we-connect-to-the-virtual-machine"},"How do we connect to the virtual machine?"),(0,o.kt)("p",null,"Virtual machine connection is similar to any YunoHost server connection, that is by using SSH."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh admin@my.domain\n")),(0,o.kt)("p",null,"Or, if the domain has not been added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosts")," file, via its IP address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh admin@11.22.33.44\n")),(0,o.kt)("p",null,"We can now work on the virtual machine using the commandline."),(0,o.kt)("p",null,"To easily copy the package files or use a graphical text editor, one can also connect via SFTP using a file explorer."),(0,o.kt)("p",null,"It's a simple matter of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sftp://admin@my.domain/")," address.\n",(0,o.kt)("img",{parentName:"p",src:"image://virtualbox_packaging6.jpg",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: on Windows or macOS, the file explorer does not natively support the SFTP protocol...")))}h.isMDXComponent=!0}}]);