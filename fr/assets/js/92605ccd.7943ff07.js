"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Synapse",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_synapse"}},i=void 0,s={unversionedId:"applications/docs/app_synapse",id:"applications/docs/app_synapse",title:"Synapse",description:"Installer Synapse with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_synapse.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_synapse",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_synapse",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_synapse.md",tags:[],version:"current",frontMatter:{title:"Synapse",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_synapse"}},sidebar:"tutorialSidebar",previous:{title:"Strut",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_strut"},next:{title:"Syncthing",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_syncthing"}},l={},p=[{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Install for ARM architecture (or slow arch)",id:"install-for-arm-architecture-or-slow-arch",level:4},{value:"Web client",id:"web-client",level:4},{value:"Access by federation",id:"access-by-federation",level:4},{value:"Turnserver",id:"turnserver",level:4},{value:"OpenVPN",id:"openvpn",level:5},{value:"Important Security Note",id:"important-security-note",level:4},{value:"YunoHost specific features",id:"yunohost-specific-features",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Additional information",id:"additional-information",level:3},{value:"Multi instance support",id:"multi-instance-support",level:4},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=synapse"},(0,a.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Synapse with YunoHost"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/synapse"},(0,a.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/synapse.svg",alt:"Integration level"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Synapse")," is an instant messaging server Matrix network."),(0,a.kt)("p",null,"YunoHost chatroom with Matrix: ",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#yunohost:matrix.org"},"https://matrix.to/#/#yunohost:matrix.org"),"."),(0,a.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("h4",{id:"install-for-arm-architecture-or-slow-arch"},"Install for ARM architecture (or slow arch)"),(0,a.kt)("p",null,"For all slow or ARM architecture it's recommended to build the dh file before the install to have a quicker install.\nYou could build it by this cmd: ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl dhparam -out /etc/ssl/private/dh2048.pem 2048 > /dev/null"),"\nAfter that you can install it without problem."),(0,a.kt)("p",null,"The package uses a prebuilt python virtual environnement. The binary are taken from this repository: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Josue-T/synapse_python_build"},"https://github.com/Josue-T/synapse_python_build"),"\nThe script to build the binary is also available."),(0,a.kt)("h4",{id:"web-client"},"Web client"),(0,a.kt)("p",null,"If you want a web client you can also install Element with this package: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/element_ynh"},"https://github.com/YunoHost-Apps/element_ynh")," ."),(0,a.kt)("h4",{id:"access-by-federation"},"Access by federation"),(0,a.kt)("p",null,"If your server name is identical to the domain on which synapse is installed, and the default port 8448 is used, your server is normally already accessible by the federation."),(0,a.kt)("p",null,"If not, you can add the following line in the DNS configuration but you normally don't need it as a .well-known file is edited during the install to declare your server name and port to the federation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"_matrix._tcp.<server_name.tld> <ttl> IN SRV 10 0 <port> <domain-or-subdomain-of-synapse.tld>\n")),(0,a.kt)("p",null,"for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"_matrix._tcp.example.com. 3600    IN      SRV     10 0 SYNAPSE_PORT synapse.example.com.\n")),(0,a.kt)("p",null,"You need to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"SYNAPSE_PORT")," by the real port. This port can be obtained by the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"yunohost app setting SYNAPSE_INSTANCE_NAME synapse_tls_port")),(0,a.kt)("p",null,"For more details, see: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/matrix-org/synapse/blob/master/docs/federate.md"},"https://github.com/matrix-org/synapse/blob/master/docs/federate.md")),(0,a.kt)("p",null,"If it is not automatically done, you need to open this in your ISP box."),(0,a.kt)("p",null,"You also need a valid TLS certificate for the domain used by Synapse. To do that you can refer to the documentation here: ",(0,a.kt)("a",{parentName:"p",href:"https://yunohost.org/#/certificate_en"},"https://yunohost.org/#/certificate_en")),(0,a.kt)("h4",{id:"turnserver"},"Turnserver"),(0,a.kt)("p",null,"For VoIP and video conferencing a turnserver is also installed (and configured). The turnserver listens on two UDP and TCP ports. You can get them with these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yunohost app setting synapse turnserver_tls_port\nyunohost app setting synapse turnserver_alt_tls_port\n\n")),(0,a.kt)("p",null,"The turnserver will also choose a port dynamically when a new call starts. The range is between 49153-49193."),(0,a.kt)("p",null,"For some security reason the ports range (49153-49193) isn't automatically open by default. If you want to use the synapse server for voip or conferencing you will need to open this port range manually. To do this just run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yunohost firewall allow Both 49153:49193\n")),(0,a.kt)("p",null,"You might also need to open these ports (if it is not automatically done) on your ISP box."),(0,a.kt)("p",null,"To prevent the situation when the server is behind a NAT, the public IP is written in the turnserver config. By this the turnserver can send its real public IP to the client. For more information see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coturn/coturn/blob/master/examples/etc/turnserver.conf#L102-L120"},"the coturn example config file"),".So if your IP changes, you could run the script ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/yunohost/__SYNAPSE_INSTANCE_NAME__/Coturn_config_rotate.sh")," to update your config."),(0,a.kt)("p",null,"If you have a dynamic IP address, you also might need to update this config automatically. To do that just edit a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/cron.d/coturn_config_rotate")," and add the following content (just adapt the ",(0,a.kt)("inlineCode",{parentName:"p"},"__SYNAPSE_INSTANCE_NAME__")," which could be ",(0,a.kt)("inlineCode",{parentName:"p"},"synapse")," or maybe ",(0,a.kt)("inlineCode",{parentName:"p"},"synapse__2"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*/15 * * * * root bash /opt/yunohost/__SYNAPSE_INSTANCE_NAME__/Coturn_config_rotate.sh;\n")),(0,a.kt)("h5",{id:"openvpn"},"OpenVPN"),(0,a.kt)("p",null,"In case of you have an OpenVPN server you might want than ",(0,a.kt)("inlineCode",{parentName:"p"},"coturn-synapse")," restart when the VPN restart. To do this create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/openvpn_up_script.sh")," with this content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/bash\n\n(\n    sleep 5\n    sudo systemctl restart coturn-synapse.service\n) &\nexit 0\n")),(0,a.kt)("p",null,"Add this line in you sudo config file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sudoers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openvpn    ALL=(ALL) NOPASSWD: /bin/systemctl restart coturn-synapse.service\n")),(0,a.kt)("p",null,"And add this line in your OpenVPN config file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ipchange /usr/local/bin/openvpn_up_script.sh\n")),(0,a.kt)("h4",{id:"important-security-note"},"Important Security Note"),(0,a.kt)("p",null,"We do not recommend running Element from the same domain name as your Matrix homeserver (synapse). The reason is the risk of XSS (cross-site-scripting) vulnerabilities that could occur if someone caused Element to load and render malicious user generated content from a Matrix API which then had trusted access to Element (or other apps) due to sharing the same domain."),(0,a.kt)("p",null,"We have put some coarse mitigations into place to try to protect against this situation, but it's still not a good practice to do it in the first place. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vector-im/element-web/issues/1977"},"https://github.com/vector-im/element-web/issues/1977")," for more details."),(0,a.kt)("h3",{id:"yunohost-specific-features"},"YunoHost specific features"),(0,a.kt)("h3",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Synapse uses a lot of ressource. So on slow architecture (like small ARM board), this app could take a lot of CPU and RAM."),(0,a.kt)("p",null,"This app doesn't provide any real good web interface. So it's recommended to use Element client to connect to this app. This app is available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/element_ynh"},"here")),(0,a.kt)("h3",{id:"additional-information"},"Additional information"),(0,a.kt)("h4",{id:"multi-instance-support"},"Multi instance support"),(0,a.kt)("p",null,"To give a possibility to have multiple domains you can use multiple instances of synapse. In this case all instances will run on different ports so it's really important to put a SRV record in your domain. You can get the port that you need to put in your SRV record with this following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yunohost app setting synapse__<instancenumber> synapse_tls_port\n")),(0,a.kt)("p",null,"Before installing a second instance of the app it's really recommended to update all existing instances."),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("a",{parentName:"li",href:"https://matrix.org/"},"matrix.org")),(0,a.kt)("li",{parentName:"ul"},"Application software repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/synapse_ynh"},"github.com - YunoHost-Apps/synapse")),(0,a.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/synapse_ynh/issues"},"github.com - YunoHost-Apps/synapse/issues"))))}d.isMDXComponent=!0}}]);