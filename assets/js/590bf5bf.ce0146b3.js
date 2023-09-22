"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Setting up IPv6",template:"docs",taxonomy:{category:"docs"},routes:{default:"/ipv6"}},i=void 0,s={unversionedId:"administer/troubleshooting/ipv6",id:"administer/troubleshooting/ipv6",title:"Setting up IPv6",description:"IPv6 may work out of the box in many cases. But in some cases or some specific provider, you may need to tweak things manually to enable IPv6.",source:"@site/docs/02.administer/50.troubleshooting/20.ipv6.md",sourceDirName:"02.administer/50.troubleshooting",slug:"/administer/troubleshooting/ipv6",permalink:"/yunodocusaurus/docs/administer/troubleshooting/ipv6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/50.troubleshooting/20.ipv6.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Setting up IPv6",template:"docs",taxonomy:{category:"docs"},routes:{default:"/ipv6"}},sidebar:"tutorialSidebar",previous:{title:"Get access back into YunoHost",permalink:"/yunodocusaurus/docs/administer/troubleshooting/noaccess"},next:{title:"Unblacklisting forms",permalink:"/yunodocusaurus/docs/administer/troubleshooting/blacklist_forms"}},l={},u=[{value:"With a VPS from OVH",id:"with-a-vps-from-ovh",level:2},{value:"Configure the DNS server",id:"configure-the-dns-server",level:3},{value:"Configure the server",id:"configure-the-server",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"IPv6 may work out of the box in many cases. But in some cases or some specific provider, you may need to tweak things manually to enable IPv6."),(0,o.kt)("h2",{id:"with-a-vps-from-ovh"},"With a VPS from OVH"),(0,o.kt)("p",null,"OVH gives one IPv4 address and one IPv6 address for VPS but by default, only IPv4 is OK.\nThe OVH's documentation is here : ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ovh.com/gb/en/vps/configuring-ipv6/"},"https://docs.ovh.com/gb/en/vps/configuring-ipv6/")),(0,o.kt)("h3",{id:"configure-the-dns-server"},"Configure the DNS server"),(0,o.kt)("p",null,"Here : ",(0,o.kt)("a",{parentName:"p",href:"https://yunohost.org/#/dns_subdomains"},"https://yunohost.org/#/dns_subdomains")),(0,o.kt)("h3",{id:"configure-the-server"},"Configure the server"),(0,o.kt)("p",null,"On the OVH panel, you will copy 3 elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the IPv6 address"),(0,o.kt)("li",{parentName:"ul"},"the IPv6 gateway address"),(0,o.kt)("li",{parentName:"ul"},"the IPv6 prefix. On OVH's VPS SSD, prefixes are ",(0,o.kt)("inlineCode",{parentName:"li"},"/128")," because you have only ",(0,o.kt)("em",{parentName:"li"},"one")," IPv6 address.")),(0,o.kt)("p",null,"On your VPS, create a backup of the network configuration with : ",(0,o.kt)("inlineCode",{parentName:"p"},"cp /etc/network/interfaces ~/interfaces")," in home directory.\nThen, you can edit the configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/network/interfaces"),") with the following. "),(0,o.kt)("p",null,"! In this example, it is assumed that your network interface is ",(0,o.kt)("inlineCode",{parentName:"p"},"eth0"),". If it's different (check with ",(0,o.kt)("inlineCode",{parentName:"p"},"ip a"),") you need to adapt the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"iface eth0 inet6 static\naddress <your IPv6 address>\nnetmask <your IPv6 prefix>\npost-up /sbin/ip -6 route add <the IPv6 gateway> dev eth0\npost-up /sbin/ip -6 route add default via <the IPv6 gateway> dev eth0\npre-down /sbin/ip -6 route del default via <the IPv6 gateway> dev eth0\npre-down /sbin/ip -6 route del <the IPv6 gateway> dev eth0\n")),(0,o.kt)("p",null,"Now, save the file and restart the network service with : ",(0,o.kt)("inlineCode",{parentName:"p"},"service networking restart"),". (TODO : ideally we should find a way to validate the content of the configuration, otherwise it could fuck up the network stack and get disconnected from the VPS ?)"),(0,o.kt)("p",null,"Check your configuration with these commands :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ip a")," to display network interfaces and addresses"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hostname -I")," to display the system IP addresses"),(0,o.kt)("li",{parentName:"ul"},"try to ping an IPv6 server (for example you can use ",(0,o.kt)("inlineCode",{parentName:"li"},"ping6 ip6.yunohost.org"),")"),(0,o.kt)("li",{parentName:"ul"},"try to ping your server from your PC (assuming your PC has IPv6 enabled)")),(0,o.kt)("p",null,"If it's ok, it's ok !"))}d.isMDXComponent=!0}}]);