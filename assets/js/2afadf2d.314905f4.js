"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},l),{},{components:n})):o.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,r[1]=p;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={title:"Adding documentation to your app",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_app_doc"}},r=void 0,p={unversionedId:"contribute/packaging_apps/doc",id:"contribute/packaging_apps/doc",title:"Adding documentation to your app",description:"Properly documenting your app is important for user experience ;). YunoHost provides several mechanism to display information to users.",source:"@site/docs/06.contribute/10.packaging_apps/30.doc.md",sourceDirName:"06.contribute/10.packaging_apps",slug:"/contribute/packaging_apps/doc",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/doc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/30.doc.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Adding documentation to your app",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_app_doc"}},sidebar:"docsSidebar",previous:{title:"Writing app scripts",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/scripts"},next:{title:"Testing your app",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/testing"}},s={},d=[{value:"Extensive description : <code>doc/DESCRIPTION.md</code> and <code>doc/screenshots/</code>",id:"extensive-description--docdescriptionmd-and-docscreenshots",level:2},{value:"Specific notes for admins : <code>doc/ADMIN.md</code>, <code>doc/&lt;whatever&gt;.md</code>",id:"specific-notes-for-admins--docadminmd-docwhatevermd",level:2},{value:"Pre/post-install notes, pre/post-upgrade notes",id:"prepost-install-notes-prepost-upgrade-notes",level:2}],l={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Properly documenting your app is important for user experience ;). YunoHost provides several mechanism to display information to users."),(0,a.kt)("h2",{id:"extensive-description--docdescriptionmd-and-docscreenshots"},"Extensive description : ",(0,a.kt)("inlineCode",{parentName:"h2"},"doc/DESCRIPTION.md")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"doc/screenshots/")),(0,a.kt)("p",null,"You are encouraged to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/DESCRIPTION.md")," which should contain a more extensive description than the short description contained in ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.toml"),". This usually corresponds to listing the key features of the app."),(0,a.kt)("p",null,"You are also encouraged to add a ",(0,a.kt)("inlineCode",{parentName:"p"},".png")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".jpg")," screenshot of what the app looks like in ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/screenshots/"),". There is no constrain on the exact filename, but the file weight should be kept below 512kb."),(0,a.kt)("p",null,"This description and screenshot will be shown when the admin open the catalog page for this app and the app info page in the webadmin after the admin installs this app."),(0,a.kt)("p",null,"You can also add translated versions of the ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," file in, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/DESCRIPTION_fr.md"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_es.md"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_it.md"),", etc."),(0,a.kt)("p",null,"If your app repository is part of the YunoHost-Apps org, the provided description will be used to auto-regenerate the README.md of your github repo via ",(0,a.kt)("inlineCode",{parentName:"p"},"yunohost-bot"),"."),(0,a.kt)("h2",{id:"specific-notes-for-admins--docadminmd-docwhatevermd"},"Specific notes for admins : ",(0,a.kt)("inlineCode",{parentName:"h2"},"doc/ADMIN.md"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"doc/<whatever>.md")),(0,a.kt)("p",null,"Sometimes, you may want to ship YunoHost-specific notes regarding the administration of this app. For example, integrating OnlyOffice inside Nextcloud."),(0,a.kt)("p",null,"You can do so by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/ADMIN.md")," file or even a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc/<whatever>.md")," page for each specific topic - and similarly add ",(0,a.kt)("inlineCode",{parentName:"p"},"_<lang>")," suffix for translations."),(0,a.kt)("p",null,"Note that you can even use the ",(0,a.kt)("inlineCode",{parentName:"p"},"__FOOBAR__")," syntax which will automatically be replaced with the ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar")," setting."),(0,a.kt)("p",null,"These notes will be available in the app info page in the webadmin after the app installation."),(0,a.kt)("h2",{id:"prepost-install-notes-prepost-upgrade-notes"},"Pre/post-install notes, pre/post-upgrade notes"),(0,a.kt)("p",null,"Sometimes, you may want to display important information to the admin at key points in the app's life cycle. You can do so by providing special markdown files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doc/PRE_INSTALL.md"),": displayed right before the installation (for example to warn that \xab This app install is expected to take around 30 minutes, be patient! \xbb or \xab This app will automatically add 1GB swap to your system \xbb)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NB: try to not overlap with the anti-feature tags from the catalog (cf Publishing your app in the catalog) which can be used to warn that the app's upstream is alpha-stage or deprecated among other things."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doc/POST_INSTALL.md"),": displayed in a popup after the installation AND a dismissable note in the webadmin app info view."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doc/PRE_UPGRADE.md"),": displayed right before any upgrade of this app (NB: the pre-upgrade note from the NEW version will be used, not the one from the installed version)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can also create ",(0,a.kt)("inlineCode",{parentName:"li"},"doc/PRE_UPGRADE.d/{version}.md")," to have a note displayed before upgrading to a version equal or higher than ",(0,a.kt)("inlineCode",{parentName:"li"},"{version}")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doc/POST_UPGRADE.md"),": displayed in a popup after the upgrade AND a dismissable note in the webadmin app info view.")),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN.md")," and others: in these files, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"__FOOBAR__")," syntax which will automatically be replaced with the ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar")," setting."))}u.isMDXComponent=!0}}]);