"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"My_webapp",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_my_webapp"}},i=void 0,p={unversionedId:"applications/docs/app_my_webapp",id:"applications/docs/app_my_webapp",title:"My_webapp",description:"In addition to the Readmeen.md of the application, here are some useful tips.",source:"@site/docs/04.applications/10.docs/app_my_webapp.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_my_webapp",permalink:"/yunodocusaurus/it/docs/applications/docs/app_my_webapp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_my_webapp.md",tags:[],version:"current",frontMatter:{title:"My_webapp",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_my_webapp"}},sidebar:"tutorialSidebar",previous:{title:"my_capsule",permalink:"/yunodocusaurus/it/docs/applications/docs/app_my_capsule"},next:{title:"myTinyTodo",permalink:"/yunodocusaurus/it/docs/applications/docs/app_mytinytodo"}},l={},s=[{value:"Automatic update of the site content.",id:"automatic-update-of-the-site-content",level:2},{value:"On your computer",id:"on-your-computer",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/my_webapp_ynh/blob/testing/README_fr.md"},"Readme_en.md")," of the application, here are some useful tips."),(0,o.kt)("h2",{id:"automatic-update-of-the-site-content"},"Automatic update of the site content."),(0,o.kt)("p",null,"The application creates a new user with limited rights: he can connect (with a password) in SFTP to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/my_webapp")," folder (or ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/my_webapp__<numero>")," if there are several installations of this application)."),(0,o.kt)("p",null,'This configuration forces you to update the content of the site by hand, with a password login.\nIf you want to automate things, you need a connection option without a password to type (called "non-interactive").'),(0,o.kt)("p",null,"Here are the steps to do this:"),(0,o.kt)("h3",{id:"on-your-computer"},"On your computer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a public/private key pair, on the client computer and WITHOUT putting a passphrase. (example for an RSA key ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t rsa -b 4096"),")")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default your keys are in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/your_key")," for the private key and ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/your_key.pub")," for the public key."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Open a terminal,"),(0,o.kt)("li",{parentName:"ul"},"Connect to your YunoHost server with SSH ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh -p XXX admin@ndd")," (",(0,o.kt)("inlineCode",{parentName:"li"},"-p")," is optional, if you have changed the default SSH port),"),(0,o.kt)("li",{parentName:"ul"},"Enable public key login, in ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/ssh/sshd_config")," (if not already done), with the command ",(0,o.kt)("inlineCode",{parentName:"li"},"nano /etc/ssh/sshd_config"),",")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"PubkeyAuthentication yes\n")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"CTRL+X to save"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo service sshd restart")," to take over the new settings."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Switch to ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," via the command ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo -i"),",")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"WARNING: You now have full rights to your server."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},".ssh")," folder in ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/www/my_webapp(__#)")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/www/my_webapp")," (if your site is at the root of your ndd) (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"mkdir /var/www/my_webapp/.ssh"),"),"),(0,o.kt)("li",{parentName:"ul"},"place yourself in this folder (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"cd /var/www/my_webapp/.ssh"),"),"),(0,o.kt)("li",{parentName:"ul"},"Create an ",(0,o.kt)("inlineCode",{parentName:"li"},"authorized_keys")," file via the ",(0,o.kt)("inlineCode",{parentName:"li"},"nano authorized_keys")," command,"),(0,o.kt)("li",{parentName:"ul"},"Paste the contents of ",(0,o.kt)("inlineCode",{parentName:"li"},"your_key.pub")," generated in step XX,"),(0,o.kt)("li",{parentName:"ul"},"Move to the ",(0,o.kt)("inlineCode",{parentName:"li"},"my_webapp")," folder (",(0,o.kt)("inlineCode",{parentName:"li"},"cd ./..")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"cd /var/www/my_webapp"),"),"),(0,o.kt)("li",{parentName:"ul"},"Enter the user ",(0,o.kt)("inlineCode",{parentName:"li"},"my_webapp")," who owns the file and folder ",(0,o.kt)("inlineCode",{parentName:"li"},"chown -hR my_webapp .ssh"),","),(0,o.kt)("li",{parentName:"ul"},"Check with the following command ",(0,o.kt)("inlineCode",{parentName:"li"},"ls -l -a")," you should get :")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"root@ndd:/var/www/my_webapp# ls -l -a\ntotal 16\ndrwxr-x---+ 4 root root 4096 Jan 12 10:56 .\ndrwxr-xr-x+ 14 root root 4096 Jan 12 10:47 .\ndrwxr-xr-x 2 my_webapp root 4096 Jan 12 10:57 .ssh\ndrwxr-xr-x 2 my_webapp www-data 4096 Jan 12 10:47 www\n")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Open another terminal and test the connection via the command ",(0,o.kt)("inlineCode",{parentName:"li"},"sftp -i ~/.ssh/your_cle -P XXXX my_webapp@ndd"),".")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"user@pc_client:~$ sftp -i ~/.ssh/your_cle -P XXXXX my_webapp@ndd\nDebian GNU/Linux 11\nConnected to ndd.\nsftp>\n"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-P")," options are not required if you have a single generated key and/or if your port is the default 22.\nYou can now connect without a password, with ",(0,o.kt)("inlineCode",{parentName:"p"},"sftp -b"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lftp")," or other SFTP clients.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NB: The port number to use for the SFTP connection is the one used for SSH, and configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),".\nThis trick allows you to automatically update your site. For example, the Makefile for the Pelican tool allows you to use ",(0,o.kt)("inlineCode",{parentName:"p"},"make ftp_upload"),".")))}d.isMDXComponent=!0}}]);