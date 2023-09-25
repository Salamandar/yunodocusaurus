"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,p(p({ref:t},i),{},{components:n})):o.createElement(f,p({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,p[1]=c;for(var l=2;l<r;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"KeeWeb for Nextcloud",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nextcloud_keeweb"}},p=void 0,c={unversionedId:"applications/docs/app_nextcloud_keeweb",id:"applications/docs/app_nextcloud_keeweb",title:"KeeWeb for Nextcloud",description:"The KeeWeb application is a password manager integrated into Nextcloud. For example, it allows you to read a KeePass file (.kdbx) stored on your Nextcloud instance.",source:"@site/docs/04.applications/10.docs/app_nextcloud_keeweb.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_nextcloud_keeweb",permalink:"/yunodocusaurus/docs/applications/docs/app_nextcloud_keeweb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_nextcloud_keeweb.md",tags:[],version:"current",frontMatter:{title:"KeeWeb for Nextcloud",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_nextcloud_keeweb"}},sidebar:"docsSidebar",previous:{title:"Nextcloud",permalink:"/yunodocusaurus/docs/applications/docs/app_nextcloud"},next:{title:"Nitter",permalink:"/yunodocusaurus/docs/applications/docs/app_nitter"}},s={},l=[],i={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The KeeWeb application is a password manager integrated into Nextcloud. For example, it allows you to read a KeePass file (",(0,a.kt)("em",{parentName:"p"},".kdbx"),") stored on your Nextcloud instance.\nBut sometimes Nextcloud does not let the application support these files, which makes it impossible to read them from KeeWeb. To remedy this,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jhass/nextcloud-keeweb/blob/master/README.md#mimetype-detection"},"a solution")," exists."),(0,a.kt)("p",null,"Go to the Nextcloud configuration directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/nextcloud/config/\n")),(0,a.kt)("p",null,"If it does not exist, create the ",(0,a.kt)("em",{parentName:"p"},"mimetypemapping.json")," file whose owner is the user ",(0,a.kt)("em",{parentName:"p"},"nextcloud")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo su nextcloud -c "nano mimetypemapping.json"\n')),(0,a.kt)("p",null,"Then add in this file the following text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "kdbx": ["x-application/kdbx"]\n}\n')),(0,a.kt)("p",null,"Save the file (",(0,a.kt)("strong",{parentName:"p"},"CTRL")," + ",(0,a.kt)("strong",{parentName:"p"},"o"),") and exit nano (",(0,a.kt)("strong",{parentName:"p"},"CTRL")," + ",(0,a.kt)("strong",{parentName:"p"},"c"),")."),(0,a.kt)("p",null,"Then run a scan by executing next command as root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u nextcloud php /var/www/nextcloud/occ files:scan --all\n")),(0,a.kt)("p",null,"Now the problem is fixed."))}d.isMDXComponent=!0}}]);