"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(l,".").concat(p)]||m[p]||c[p]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"SSH and command line",template:"docs",taxonomy:{category:"docs"},routes:{default:"/ssh",aliases:["/commandline"]},"page-toc":{active:!0}},r=void 0,s={unversionedId:"administer/admin_guide/command_line",id:"administer/admin_guide/command_line",title:"SSH and command line",description:"What's SSH?",source:"@site/docs/02.administer/15.admin_guide/15.command_line.md",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/command_line",permalink:"/yunodocusaurus/de/docs/administer/admin_guide/command_line",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/15.command_line.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"SSH and command line",template:"docs",taxonomy:{category:"docs"},routes:{default:"/ssh",aliases:["/commandline"]},"page-toc":{active:!0}},sidebar:"tutorialSidebar",previous:{title:"Administrator web interface",permalink:"/yunodocusaurus/de/docs/administer/admin_guide/admin"},next:{title:"Users and the SSO",permalink:"/yunodocusaurus/de/docs/administer/admin_guide/users/"}},l={},u=[{value:"What&#39;s SSH?",id:"whats-ssh",level:2},{value:"How to connect",id:"how-to-connect",level:2},{value:"Login credentials",id:"login-credentials",level:3},{value:"Address to use",id:"address-to-use",level:3},{value:"Connecting",id:"connecting",level:3},{value:"Which other users may connect to the server?",id:"which-other-users-may-connect-to-the-server",level:2},{value:"Security and SSH",id:"security-and-ssh",level:2},{value:"The command line",id:"the-command-line",level:2},{value:"The <code>yunohost</code> command",id:"the-yunohost-command",level:3},{value:"The <code>yunopaste</code> command",id:"the-yunopaste-command",level:3},{value:"The <code>ynh-vpnclient-loadcubefile.sh</code> command",id:"the-ynh-vpnclient-loadcubefilesh-command",level:3},{value:"Some useful commands",id:"some-useful-commands",level:3}],d={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"whats-ssh"},"What's SSH?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSH")," stands for Secure Shell, and refers to a protocol that allows to remotely control and administer a machine using the command line interface (CLI). It is available by default in any terminal on GNU/Linux and macOS. On Windows, you may want to use ",(0,o.kt)("a",{parentName:"p",href:"https://mobaxterm.mobatek.net/download-home-edition.html"},"MobaXterm")," (after launching it, click on Session then SSH)."),(0,o.kt)("p",null,"The command line interface (CLI) is, in the computer world, the original (and more technical) way of interacting with a computer compared to graphical interface. Command line interfaces are generally said to be more complete, powerful or efficient than a graphical interface, though also more difficult to learn."),(0,o.kt)("h2",{id:"how-to-connect"},"How to connect"),(0,o.kt)("h3",{id:"login-credentials"},"Login credentials"),(0,o.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="Before running the initial configuration (post-installation)"]'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are ",(0,o.kt)("strong",{parentName:"li"},"installing at home"),", the default credentials are login: ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," and password: ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"1234")," if you flashed an armbian image)"),(0,o.kt)("li",{parentName:"ul"},"If you are ",(0,o.kt)("strong",{parentName:"li"},"installing a remote server (VPS)"),", your provider should have communicated you the login and password (or allowed you to configure an SSH key)")),(0,o.kt)("p",null,'[/ui-tab][ui-tab title="After"]'),(0,o.kt)("p",null,"During the postinstall, you've been asked to choose an administration password. This password becomes the new password for the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," users. Additionally, ",(0,o.kt)("strong",{parentName:"p"},"the ",(0,o.kt)("inlineCode",{parentName:"strong"},"root")," SSH login becomes disabled after the postinstall and you should log in using the ",(0,o.kt)("inlineCode",{parentName:"strong"},"admin")," user !"),". The only exception is that you may still be able to login using ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," ",(0,o.kt)("em",{parentName:"p"},"from the local network - or from a direct console on the server")," (this is to cover the event where the LDAP server is broken and the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user is unusable)."),(0,o.kt)("p",null,"!!! If you connected as ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and would like to become ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," for convenience (e.g. to avoid typing ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," in front of every command), you can become ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo -i"),".\n","[/ui-tab][/ui-tabs]"),(0,o.kt)("h3",{id:"address-to-use"},"Address to use"),(0,o.kt)("p",null,"If you are ",(0,o.kt)("strong",{parentName:"p"},"installing at home")," (e.g. on a Raspberry Pi or OLinuXino or old computer):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you should be able to connect to your server using ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost.local")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost-2.local"),", depending on how many servers are on your network). "),(0,o.kt)("li",{parentName:"ul"},"if ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost.local")," and the like do not work, your need to ",(0,o.kt)("a",{parentName:"li",href:"/finding_the_local_ip"},"find out the local IP of the server"),"."),(0,o.kt)("li",{parentName:"ul"},"if you installed a server at home but are attempting to connect from outside your local network, make sure port 22 is correctly forwarded to your server.")),(0,o.kt)("p",null,"If your server is a remote server (VPS), your provider should have communicated you the IP address of the machine"),(0,o.kt)("p",null,"In any cases, if you already configured a domain name pointing to the appropriate IP, it's much better to use ",(0,o.kt)("inlineCode",{parentName:"p"},"yourdomain.tld")," instead of the IP address."),(0,o.kt)("h3",{id:"connecting"},"Connecting"),(0,o.kt)("p",null,"The SSH command typically looks like: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# before the postinstall:\nssh root@11.22.33.44\n\n# or after the postinstall:\nssh admin@11.22.33.44\n\n# using the domain name instead of the IP (more convenient)\nssh admin@votre.domaine.tld\n\n# using the local domain name instead of the IP (for local access)\nssh admin@yunohost.local\n\n# if you changed the SSH port\nssh -p 2244 admin@votre.domaine.tld\n")),(0,o.kt)("p",null,"N.B. : ",(0,o.kt)("inlineCode",{parentName:"p"},"fail2ban")," will ban your IP for 10 minutes if you perform 10 failed login attempts. If you need to unban the IP, have a look at the page about ",(0,o.kt)("a",{parentName:"p",href:"/fail2ban"},"Fail2Ban")),(0,o.kt)("h2",{id:"which-other-users-may-connect-to-the-server"},"Which other users may connect to the server?"),(0,o.kt)("p",null,"By default, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user can log in to YunoHost SSH server."),(0,o.kt)("p",null,"YunoHost's users created via the administration interface are managed by the LDAP directory. By default, they can't connect via SSH for security reasons. Via the permissions system it is possible to allow the connection in SFTP or if it is really necessary in SSH. "),(0,o.kt)("p",null,"! Be careful who you give SSH access to. This increases even more the attack surface available to a malicious user."),(0,o.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="From the web interface"]',"\nGo to ",(0,o.kt)("inlineCode",{parentName:"p"},"Users > Manage groups and permissions"),"."),(0,o.kt)("p",null,"From here, you can add SFTP or SSH permissions to any user or group."),(0,o.kt)("p",null,"If you want to add an SSH public key to the user, you have to do it from the command line, as the web interface does not yet offer this feature.\n",'[/ui-tab][ui-tab title="From the command line"]',"\nTo allow a user or group to access via SFTP or SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# SFTP\nyunohost user permission add sftp <username>\n# SSH\nyunohost user permission add ssh <username>\n")),(0,o.kt)("p",null,"To remove permission:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# SFTP\nyunohost user permission remove sftp <username>\n# SSH\nyunohost user permission remove ssh <username>\n")),(0,o.kt)("p",null,"Finally, it is possible to add, delete and list SSH keys, to improve SSH access security, using the commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost user ssh add-key <username> <key>\nyunohost user ssh remove-key <username> <key>\nyunohost user ssh list-keys <username>\n")),(0,o.kt)("p",null,"[/ui-tab][/ui-tabs]"),(0,o.kt)("h2",{id:"security-and-ssh"},"Security and SSH"),(0,o.kt)("p",null,"A more extensive discussion about security & SSH can be found on the ",(0,o.kt)("a",{parentName:"p",href:"/security"},"dedicated page"),"."),(0,o.kt)("h2",{id:"the-command-line"},"The command line"),(0,o.kt)("p",null,"!!! Providing a full tutorial about the command line is quite beyond the scope of the YunoHost documentation : for this, consider reading a dedicated tutorial such as ",(0,o.kt)("a",{parentName:"p",href:"https://ryanstutorials.net/linuxtutorial/"},"this one")," or ",(0,o.kt)("a",{parentName:"p",href:"http://linuxcommand.org/"},"this one"),". But be reassured that you don't need to be a CLI expert to start using it !"),(0,o.kt)("h3",{id:"the-yunohost-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"yunohost")," command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost")," command can be used to administer your server and perform the various actions similarly to what you do on the webadmin. The command must be launched either from the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," user or from the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user by preceeding them with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),". (ProTip\u2122 : you can become ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),")."),(0,o.kt)("p",null,"YunoHost commands usually have this kind of structure : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost app install wordpress --label Webmail\n          ^    ^        ^             ^\n          |    |        |             |\n    category  action  argument      options\n")),(0,o.kt)("p",null,"Don't hesitate to browse and ask for more information about a given category or action using the the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," option. For instance, those commands : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost --help\nyunohost user --help\nyunohost user create --help\n")),(0,o.kt)("p",null,"will successively list all the categories available, then the actions available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," category, then the usage of the action ",(0,o.kt)("inlineCode",{parentName:"p"},"user create"),". You might notice that the YunoHost command tree is built with a structure similar to the YunoHost admin pages."),(0,o.kt)("h3",{id:"the-yunopaste-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"yunopaste")," command"),(0,o.kt)("p",null,"This command allow you to share with an other person the output of a command."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost tools diagnosis | yunopaste\n")),(0,o.kt)("h3",{id:"the-ynh-vpnclient-loadcubefilesh-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"ynh-vpnclient-loadcubefile.sh")," command"),(0,o.kt)("p",null,"This command is only available if you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"VPN Client")," application installed. You can use it to load a new .cube in case you can't get to the VPN Client interface to do so. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ynh-vpnclient-loadcubefile.sh -u <username> -p <password> -c <path>.cube\n")),(0,o.kt)("h3",{id:"some-useful-commands"},"Some useful commands"),(0,o.kt)("p",null,"If your administration web interface indicates that the API is unreachable, try starting ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost-api"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start yunohost-api\n")),(0,o.kt)("p",null,"If you can no longer connect with the user ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," via SSH and via the web interface, the ",(0,o.kt)("inlineCode",{parentName:"p"},"slapd")," service may be down, try restarting it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart slapd\n")),(0,o.kt)("p",null,"If you have manually modified configurations and want to know the changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost tools regen-conf --with-diff --dry-run\n")))}c.isMDXComponent=!0}}]);