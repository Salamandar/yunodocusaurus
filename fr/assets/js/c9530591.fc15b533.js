"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9381],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>y});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),d=n,y=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return o?r.createElement(y,i(i({ref:t},p),{},{components:o})):r.createElement(y,i({ref:t},p))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9846:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={title:"Pi-hole",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_pihole"}},i=void 0,s={unversionedId:"applications/docs/app_pihole",id:"applications/docs/app_pihole",title:"Pi-hole",description:"Pi-hole's logo",source:"@site/docs/04.applications/10.docs/app_pihole.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_pihole",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_pihole",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_pihole.md",tags:[],version:"current",frontMatter:{title:"Pi-hole",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_pihole"}},sidebar:"tutorialSidebar",previous:{title:"phpSysInfo",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_phpsysinfo"},next:{title:"Piwigo",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_piwigo"}},l={},u=[{value:"Using Pi-hole as a DHCP server",id:"using-pi-hole-as-a-dhcp-server",level:2},{value:"Configure Pi-hole",id:"configure-pi-hole",level:3},{value:"Configure my router",id:"configure-my-router",level:3},{value:"Why should I use Pi-hole&#39;s DHCP?",id:"why-should-i-use-pi-holes-dhcp",level:4},{value:"Restore network",id:"restore-network",level:3},{value:"Useful links",id:"useful-links",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://pihole_logo.png?width=80",alt:"Pi-hole's logo"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=pihole"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install Pi-hole with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/pihole"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/pihole.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Pi-hole")," is a network-level ad blocker that acts as a DNS layer and possibly a DHCP3 server for use on a private network. It is designed to be installed on embedded devices with network capabilities, such as the Raspberry Pi, but can be used on other machines running GNU/Linux or in virtualised environments."),(0,n.kt)("h2",{id:"using-pi-hole-as-a-dhcp-server"},"Using Pi-hole as a DHCP server"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning, you should be aware that touching your DHCP could break your network.\nIn case your server is inaccessible, you will lose your dns resolution and IP address.\nThus, you would lose any connection to the internet and even the connection to your router."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'If you encounter this kind of problem, please read the section "How to restore my network".')),(0,n.kt)("h3",{id:"configure-pi-hole"},"Configure Pi-hole"),(0,n.kt)("p",null,"There are 2 ways to configure Pi-hole to be used as your DHCP server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Either you can choose to use it when you install the application."),(0,n.kt)("li",{parentName:"ul"},'Or you can activate the DHCP server afterwards in the "Settings" tab, part "Pi-hole DHCP Server".\nIn this second case, it may be preferable to force the server IP to a static address.')),(0,n.kt)("h3",{id:"configure-my-router"},"Configure my router"),(0,n.kt)("p",null,"Your router or your ISP's router has a DHCP server enabled by default.\nIf you keep this DHCP, along with Pi-hole's, you will have transparent conflicts between them.\nThe first DHCP server to respond will distribute its own IP and settings.\nSo you need to turn off your router's DHCP server and let Pi-hole manage your network."),(0,n.kt)("h4",{id:"why-should-i-use-pi-holes-dhcp"},"Why should I use Pi-hole's DHCP?"),(0,n.kt)("p",null,"By using Pi-hole's DHCP, you allow Pi-hole to give its dns configuration to each of your clients. This way, every request will be filtered by Pi-hole."),(0,n.kt)("p",null,"Another case of using Pi-hole DHCP is if you have hairpinning problems (you can't connect to your server because its IP is your public IP, and your router doesn't allow this).\nIn this case, using Pi-hole's dns will allow you to connect to your server by its local address rather than its public address."),(0,n.kt)("h3",{id:"restore-network"},"Restore network"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Oops!\nYour Pi-hole server has crashed, and you don't have DHCP anymore.\nDon't panic. We'll get through this.")),(0,n.kt)("p",null,"Use your favorite device on your desktop computer.\nAnd first, get your network interface (usually ",(0,n.kt)("inlineCode",{parentName:"p"},"eth0"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ifconfig\n")),(0,n.kt)("p",null,"Then change your IP to a static one."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ifconfig eth0 192.168.1.100\n")),(0,n.kt)("p",null,"Now you can connect to your router and reboot its DHCP server to use it again.\nYou can now remove your static IP and get a dynamic IP again."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ifconfig eth0 0.0.0 && sudo dhclient eth0\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Remember to turn off your router's DHCP if your server is running again.")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://pi-hole.net"},"pi-hole.net")),(0,n.kt)("li",{parentName:"ul"},"Official documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.pi-hole.net/"},"docs.pi-hole.net")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/pihole_ynh"},"github.com - YunoHost-Apps/pihole")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/pihole_ynh/issues"},"github.com - YunoHost-Apps/pihole/issues"))))}h.isMDXComponent=!0}}]);