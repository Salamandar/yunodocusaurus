"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[2144],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),h=n,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},77731:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={title:"Get access back into YunoHost",template:"docs",taxonomy:{category:"docs"},routes:{default:"/noaccess"}},i=void 0,s={unversionedId:"administer/troubleshooting/noaccess",id:"administer/troubleshooting/noaccess",title:"Get access back into YunoHost",description:"There are several reasons that could lead to one administrator's access being partially or completely blocked off their YunoHost server. In numerous cases, one of the access methods is blocked, but others are not.",source:"@site/docs/02.administer/50.troubleshooting/15.noaccess.md",sourceDirName:"02.administer/50.troubleshooting",slug:"/administer/troubleshooting/noaccess",permalink:"/yunodocusaurus/es/docs/administer/troubleshooting/noaccess",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/50.troubleshooting/15.noaccess.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Get access back into YunoHost",template:"docs",taxonomy:{category:"docs"},routes:{default:"/noaccess"}},sidebar:"tutorialSidebar",previous:{title:"Changing the administration password",permalink:"/yunodocusaurus/es/docs/administer/troubleshooting/change_admin_password"},next:{title:"Setting up IPv6",permalink:"/yunodocusaurus/es/docs/administer/troubleshooting/ipv6"}},l={},u=[{value:"You have access to the server with its local IP address, but not its domain name.",id:"you-have-access-to-the-server-with-its-local-ip-address-but-not-its-domain-name",level:2},{value:"If you are self-hosted at home: fix ports forwarding",id:"if-you-are-self-hosted-at-home-fix-ports-forwarding",level:4},{value:"Configure DNS records",id:"configure-dns-records",level:4},{value:"Other probable causes",id:"other-probable-causes",level:4},{value:"You are getting a certificate error that prevents you from reaching the webadmin",id:"you-are-getting-a-certificate-error-that-prevents-you-from-reaching-the-webadmin",level:2},{value:"You have access via SSH but not via the webadmin, or inversely",id:"you-have-access-via-ssh-but-not-via-the-webadmin-or-inversely",level:2},{value:"You are trying to log in with SSH as <code>root</code> instead of <code>admin</code> user.",id:"you-are-trying-to-log-in-with-ssh-as-root-instead-of-admin-user",level:4},{value:"You have been temporarily banned",id:"you-have-been-temporarily-banned",level:4},{value:"NGINX web server is broken",id:"nginx-web-server-is-broken",level:4},{value:"Your server is reachable by IPv6, but not IPv4, or inversely",id:"your-server-is-reachable-by-ipv6-but-not-ipv4-or-inversely",level:4},{value:"Webadmin is working, but some web apps are returning 502 errors.",id:"webadmin-is-working-but-some-web-apps-are-returning-502-errors",level:2},{value:"You have lost your admin password, or the password is seemingly wrong",id:"you-have-lost-your-admin-password-or-the-password-is-seemingly-wrong",level:2},{value:"Your VPN expired or does not connect any more",id:"your-vpn-expired-or-does-not-connect-any-more",level:2},{value:"Your server does not boot",id:"your-server-does-not-boot",level:2},{value:"VNC or screen access does not work",id:"vnc-or-screen-access-does-not-work",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There are several reasons that could lead to one administrator's access being partially or completely blocked off their YunoHost server. In numerous cases, one of the access methods is blocked, but others are not."),(0,n.kt)("p",null,"This page will help you diagnose the issue, get back access, and if needed repair your system. Most common causes are listed first, so follow the tutorial from top to bottom."),(0,n.kt)("h2",{id:"you-have-access-to-the-server-with-its-local-ip-address-but-not-its-domain-name"},"You have access to the server with its local IP address, but not its domain name."),(0,n.kt)("h4",{id:"if-you-are-self-hosted-at-home-fix-ports-forwarding"},"If you are self-hosted at home: fix ports forwarding"),(0,n.kt)("p",null,"Check that you are getting access to the server by using its public IP (you can find at ",(0,n.kt)("a",{parentName:"p",href:"https://ip.yunohost.org"},"https://ip.yunohost.org"),". If this does not work:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure you have ",(0,n.kt)("a",{parentName:"li",href:"/isp_box_config"},"set up forwarding")),(0,n.kt)("li",{parentName:"ul"},"Some ISP routers do not support ",(0,n.kt)("em",{parentName:"li"},"hairpinning"),", which prevents you from reaching your server by its domain name from within your local network. If so, you can use a cellular connection, or tweak your ",(0,n.kt)("inlineCode",{parentName:"li"},"hosts")," file on your computer to make it bind your domain name to the local IP address instead of the public one.")),(0,n.kt)("h4",{id:"configure-dns-records"},"Configure DNS records"),(0,n.kt)("p",null,"! This is not a problem if you are using a domain from ",(0,n.kt)("inlineCode",{parentName:"p"},"nohost.me"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"noho.st")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ynh.fr"),")"),(0,n.kt)("p",null,"You have to configure your ",(0,n.kt)("a",{parentName:"p",href:"/dns_config"},"DNS records")," (at least ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," records, and ",(0,n.kt)("inlineCode",{parentName:"p"},"AAAA")," if you have an IPv6 connection). "),(0,n.kt)("p",null,"You can check that the DNS records are correct by comparing the results given by ",(0,n.kt)("a",{parentName:"p",href:"https://www.whatsmydns.net/"},"this service")," with the ",(0,n.kt)("a",{parentName:"p",href:"https://ip.yunohost.org"},"IP given by our service"),"."),(0,n.kt)("h4",{id:"other-probable-causes"},"Other probable causes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You domain ",(0,n.kt)("inlineCode",{parentName:"li"},"noho.st"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"nohost.me"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"ynh.fr")," is unreachable following a failure on YunoHost's infrastructure. Check the ",(0,n.kt)("a",{parentName:"li",href:"https://forum.yunohost.org/"},"forum")," for announcements or people posting about the same issue."),(0,n.kt)("li",{parentName:"ul"},"Your domain name may be expired. Check that on your registrar's client panel, or by using the command ",(0,n.kt)("inlineCode",{parentName:"li"},"whois yourdomain.tld"),"."),(0,n.kt)("li",{parentName:"ul"},"You have a dynamic IP address. In that case, you need to set up a script or a client that takes care of regularly update it. Refer to the page on ",(0,n.kt)("a",{parentName:"li",href:"/dns_dynamicip"},"DNS with a dynamic IP")," to see how. You can also use a domain ",(0,n.kt)("inlineCode",{parentName:"li"},"nohost.me"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"noho.st")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"ynh.fr")," that includes this features.")),(0,n.kt)("h2",{id:"you-are-getting-a-certificate-error-that-prevents-you-from-reaching-the-webadmin"},"You are getting a certificate error that prevents you from reaching the webadmin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A certificate error may be displayed if you have made a typo in the address bar of your browser.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you have just installed your server, or just installed a new domain, it uses a self-signed certificate. In that case, it is possible and understandable to add a ",(0,n.kt)("em",{parentName:"p"},"temporary")," security exception so that you can ",(0,n.kt)("a",{parentName:"p",href:"/certificate"},"install a Let's Encrypt certificate"),", provided you have a secure Internet connection."))),(0,n.kt)("h2",{id:"you-have-access-via-ssh-but-not-via-the-webadmin-or-inversely"},"You have access via SSH but not via the webadmin, or inversely"),(0,n.kt)("h4",{id:"you-are-trying-to-log-in-with-ssh-as-root-instead-of-admin-user"},"You are trying to log in with SSH as ",(0,n.kt)("inlineCode",{parentName:"h4"},"root")," instead of ",(0,n.kt)("inlineCode",{parentName:"h4"},"admin")," user."),(0,n.kt)("p",null,"By default, SSH connection has to be made as ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),". It possible to log into the server as ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," ",(0,n.kt)("em",{parentName:"p"},"only from the local network of the server"),". If your server is a VPS, the web console or VNC provided by VPS providers may work."),(0,n.kt)("p",null,"If you are running ",(0,n.kt)("inlineCode",{parentName:"p"},"yunohost")," commands in the CLI as ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),", you have to call them with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo")," before (for example ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo yunohost user list"),"). You can also become ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," by running ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo su"),"."),(0,n.kt)("h4",{id:"you-have-been-temporarily-banned"},"You have been temporarily banned"),(0,n.kt)("p",null,"Your YunoHost server includes a service, Fail2ban, which automatically bans IPs that fail several times in a row to log in. In some cases it can be software (e.g. Nextcloud client) that are confifured with an old password, or a user who has the same IP as you have."),(0,n.kt)("p",null,"If you have been banned while trying to access a web page, and only web pages are unreachable, you may have access to your server via SSH. Similarly, if you have been banned from SSH, webadmin access may work."),(0,n.kt)("p",null,"If you have been banned from both SSH and webadmin, you can try to reach your server through another IP address. For example through the cellular network of your phone, a VPN, Tor, or another proxy."),(0,n.kt)("p",null,"See also : ",(0,n.kt)("a",{parentName:"p",href:"/fail2ban"},"unban an IP on Fail2Ban")),(0,n.kt)("p",null,"!!!! Ban are usually 10 to 12-minute-long, and on IPv4 only."),(0,n.kt)("h4",{id:"nginx-web-server-is-broken"},"NGINX web server is broken"),(0,n.kt)("p",null,"Maybe the NGINX web server is out of order. You can check that ",(0,n.kt)("a",{parentName:"p",href:"/ssh"},"trough SSH")," with the command ",(0,n.kt)("inlineCode",{parentName:"p"},"yunohost service status nginx"),". If it is failing, check that its configuration is correct by running ",(0,n.kt)("inlineCode",{parentName:"p"},"nginx -t"),". If it is indeed broken, it may be due to the installation or removal of a low-quality app... If you need support, ",(0,n.kt)("a",{parentName:"p",href:"/help"},"ask for it"),"."),(0,n.kt)("p",null,"The NGINX or SSH servers may have been killed due to a lack of storage space, RAM, or swap."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Try restarting the service with ",(0,n.kt)("inlineCode",{parentName:"li"},"systemctl restart nginx"),"."),(0,n.kt)("li",{parentName:"ul"},"You can check used storage with ",(0,n.kt)("inlineCode",{parentName:"li"},"df -h"),". If one of your partitions is full, you need to identify what fills it and make room. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"ncdu")," command (install it with ",(0,n.kt)("inlineCode",{parentName:"li"},"apt install ncdu")," to browse from the root directory: ",(0,n.kt)("inlineCode",{parentName:"li"},"ncdu /")),(0,n.kt)("li",{parentName:"ul"},"You can check RAM and swap usage with ",(0,n.kt)("inlineCode",{parentName:"li"},"free -h"),". Depending on the result, it may be necessary to optimize your server to use less RAM (removal of heavy or unused apps...), add more RAM or add a swap file.")),(0,n.kt)("h4",{id:"your-server-is-reachable-by-ipv6-but-not-ipv4-or-inversely"},"Your server is reachable by IPv6, but not IPv4, or inversely"),(0,n.kt)("p",null,"You can check that by ",(0,n.kt)("inlineCode",{parentName:"p"},"ping"),"ing it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ping -4 yourdomain.tld # or its IPv4\nping -6 yourdomain.tld # or its IPv6\n")),(0,n.kt)("p",null,"If one of the two is working, use it to connect by SSH or the webadmin."),(0,n.kt)("p",null,"If none are working, you need to resolv your connection issue. In some cases, an update of your router may have enabled IPv6 and DNS configuration may be disrupted."),(0,n.kt)("h2",{id:"webadmin-is-working-but-some-web-apps-are-returning-502-errors"},"Webadmin is working, but some web apps are returning 502 errors."),(0,n.kt)("p",null,"It is highly probable that the underlying service for these apps is failing (e.g. PHP apps requiring ",(0,n.kt)("inlineCode",{parentName:"p"},"php7.0-fpm")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"php7.3-fpm"),"). You can then try to restart the services, and/or ask for ",(0,n.kt)("a",{parentName:"p",href:"/help"},"help")),(0,n.kt)("h2",{id:"you-have-lost-your-admin-password-or-the-password-is-seemingly-wrong"},"You have lost your admin password, or the password is seemingly wrong"),(0,n.kt)("p",null,"If you can reach the webadmin login page (force reload with ",(0,n.kt)("inlineCode",{parentName:"p"},"CTRL + F5")," to be sure), and you cannot log in, your password is probably wrong."),(0,n.kt)("p",null,"If yoy are sure of your passord, it may be due to the ",(0,n.kt)("inlineCode",{parentName:"p"},"slapd")," service failing. If that's the case, log into the server by SSH as ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If your server is at home, you most likely have access to the local network. From this network, you can follow the ",(0,n.kt)("a",{parentName:"li",href:"/ssh"},"SSH instructions"),"`."),(0,n.kt)("li",{parentName:"ul"},"If your server is a VPS, your provider may offer a web console.")),(0,n.kt)("p",null,"Once logged in, you have to check the state of the service with ",(0,n.kt)("inlineCode",{parentName:"p"},"yunohost service status slapd")," and/or reset your admin password with ",(0,n.kt)("inlineCode",{parentName:"p"},"yunohost tools adminpw"),"."),(0,n.kt)("p",null,"If this is still failing, on a VPS you may be able to reboot in rescue mode. Do not hesitate to ask for ",(0,n.kt)("a",{parentName:"p",href:"/help"},"help")),(0,n.kt)("p",null,"!!! To be completed."),(0,n.kt)("h2",{id:"your-vpn-expired-or-does-not-connect-any-more"},"Your VPN expired or does not connect any more"),(0,n.kt)("p",null,"If you have a VPN with fixed IP, maybe it has expired, or the provider's infrastructure is failing."),(0,n.kt)("p",null,"In that case, contact your VPN provider to renew it and update the parameters of the VPN Client app."),(0,n.kt)("p",null,"Meanwhile, try reaching your server if it is at home, by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"its local IP, retrievable from your router configuration panel or ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo arp-scan --local")),(0,n.kt)("li",{parentName:"ul"},"reaching it at ",(0,n.kt)("inlineCode",{parentName:"li"},"yunohost.local"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"yunohost-2.local"),", etc. depending on how many YunoHost servers are on your network.")),(0,n.kt)("p",null,"!!! To be completed."),(0,n.kt)("h2",{id:"your-server-does-not-boot"},"Your server does not boot"),(0,n.kt)("p",null,"In some cases your server may be stuck at boot. It may come from a new, buggy, kernel. Try changing to another kernel on the boot screen (via VNC for VPS)."),(0,n.kt)("p",null,'If you are in "rescue" mode with ',(0,n.kt)("inlineCode",{parentName:"p"},"grub"),", it may be due a misconfiguration of ",(0,n.kt)("inlineCode",{parentName:"p"},"grub"),", or a corrupted drive."),(0,n.kt)("p",null,'In that case, access the storage drive from another system (your provider\'s "rescue" mode, live USB drive, read the SD or drive on another computer) and try to check partitions integrity with ',(0,n.kt)("inlineCode",{parentName:"p"},"smartctl"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fsck"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"mount"),"."),(0,n.kt)("p",null,"If disks are corrupted or hard to mount, you have to save your data and maybe reformat, reinstall, and/or change the drive. If you succeed in mounting the drive, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"systemd-nspawn")," to access its database."),(0,n.kt)("p",null,"Otherwise, run ",(0,n.kt)("inlineCode",{parentName:"p"},"grub-update"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"grub-install")," again with ",(0,n.kt)("inlineCode",{parentName:"p"},"chroot")," or with ",(0,n.kt)("inlineCode",{parentName:"p"},"systemd-nspawn"),"."),(0,n.kt)("h2",{id:"vnc-or-screen-access-does-not-work"},"VNC or screen access does not work"),(0,n.kt)("p",null,"It may be due hardware issue on your server, or with the hypervisor if it is on a VPS."),(0,n.kt)("p",null,"If you are renting your server, contact the support of your provider. Otherwise, try fixing your machine by replacing failing components."))}p.isMDXComponent=!0}}]);