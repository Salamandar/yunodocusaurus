"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5762],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>v});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),h=r,v=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(v,i(i({ref:t},c),{},{components:o})):n.createElement(v,i({ref:t},c))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6224:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={title:"Advantage of a VPN for self-hosting",template:"docs",taxonomy:{category:"docs"},routes:{default:"/vpn_advantage"}},i=void 0,s={unversionedId:"administer/providers/vpn/vpn_advantage",id:"administer/providers/vpn/vpn_advantage",title:"Advantage of a VPN for self-hosting",description:"Since setting up a server at home is an uncommon practice, most Internet connections provided to individuals are unsuitable for this purpose. A net neutral VPN providing a fixed IPv4 address and IPv6 addresses can help to circumvent some limitations or difficulties.",source:"@site/docs/02.administer/55.providers/15.vpn/vpn_advantage.md",sourceDirName:"02.administer/55.providers/15.vpn",slug:"/administer/providers/vpn/vpn_advantage",permalink:"/yunodocusaurus/docs/administer/providers/vpn/vpn_advantage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/55.providers/15.vpn/vpn_advantage.md",tags:[],version:"current",frontMatter:{title:"Advantage of a VPN for self-hosting",template:"docs",taxonomy:{category:"docs"},routes:{default:"/vpn_advantage"}},sidebar:"tutorialSidebar",previous:{title:"VPN providers",permalink:"/yunodocusaurus/docs/administer/providers/vpn/"},next:{title:"Server providers",permalink:"/yunodocusaurus/docs/administer/providers/server"}},l={},u=[{value:"Advantages",id:"advantages",level:2},{value:"Plug &amp; Play",id:"plug--play",level:3},{value:"No micro DNS outages",id:"no-micro-dns-outages",level:3},{value:"The case of email",id:"the-case-of-email",level:3},{value:"Trust",id:"trust",level:3},{value:"Disadvantage",id:"disadvantage",level:2},{value:"Cost",id:"cost",level:3},{value:"Packet path",id:"packet-path",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Since setting up a server at home is an uncommon practice, most Internet connections provided to individuals are unsuitable for this purpose. A net neutral VPN providing a fixed IPv4 address and IPv6 addresses can help to circumvent some limitations or difficulties."),(0,r.kt)("p",null,"! ",(0,r.kt)("b",null,"Beware"),": not all existing VPN providers meet these conditions, make sure the one you choose meets them."),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("h3",{id:"plug--play"},"Plug & Play"),(0,r.kt)("p",null,"By setting up a VPN on your server, you'll be able to make it accessible to the rest of the Internet without having to change the configuration of the router you connect it to. This can be really handy if you are going on vacation, moving or have an Internet disconnection, as you will be able to easily connect it to someone you trust without having to configure the router of the person who is helping you."),(0,r.kt)("p",null,"In the same way, you save yourself the trouble of opening your router's ports and bypassing hairpinning."),(0,r.kt)("h3",{id:"no-micro-dns-outages"},"No micro DNS outages"),(0,r.kt)("p",null,"If your Internet connection does not have a fixed public IP, you will be forced to set up a dynamic domain name (Dynamic DNS). This solution may be acceptable, but the DNS will only be updated at regular intervals (every two minutes if it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"noho.st")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"nohost.me")," domain name). So there is a chance that this will cause some display errors in the browser from time to time, or even that another site will be displayed (the risks are however reduced because the practice of self-hosting is not widespread)."),(0,r.kt)("p",null,"With a neutral VPN, this problem is circumvented because the VPN can be compared to a Virtual Internet connection, which has its own fixed IPv4 address, so no need to update the domain name. "),(0,r.kt)("h3",{id:"the-case-of-email"},"The case of email"),(0,r.kt)("p",null,"Email is one of the most complex protocols to self-host, usually it is what a user self-hosts last. Indeed, it is very easy to find yourself in a situation where emails sent by the server are refused by the recipient SMTP servers."),(0,r.kt)("p",null,"To avoid this you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"configure the reverse DNS of the server's Internet connection (or VPN)"),(0,r.kt)("li",{parentName:"ul"},"a fixed IPv4"),(0,r.kt)("li",{parentName:"ul"},"that this IPv4 is removable from all blacklists (notably the IP must not be on the DUL)"),(0,r.kt)("li",{parentName:"ul"},"to be able to open port 25 (as well as the other SMTP ports)")),(0,r.kt)("p",null,"Unfortunately, none of the most common French ISPs respect all these points."),(0,r.kt)("p",null,"To overcome this, the use of a VPN respecting these points can be an alternative."),(0,r.kt)("h3",{id:"trust"},"Trust"),(0,r.kt)("p",null,"Finally, if you do not want the content of your server's communications to be spied on by equipment present on your ISP's network, you can use a VPN to encrypt your communications and deport your trust to a VPN provider. Remember, since 2015, the government officially deploys black boxes at the large network operators whose objective is to tap all French digital communications to preserve the scientific, economic and industrial interests of France."),(0,r.kt)("h2",{id:"disadvantage"},"Disadvantage"),(0,r.kt)("h3",{id:"cost"},"Cost"),(0,r.kt)("p",null,"A neutral VPN has a cost since the operator who provides it must run a server and use bandwidth. The prices of the FFDN's associative VPNs are around 6 \u20ac per month."),(0,r.kt)("h3",{id:"packet-path"},"Packet path"),(0,r.kt)("p",null,"When you set up a VPN on your server, if you don't set up any particular configuration, the transfer of a file from a computer on the local network to the server using the VPN, will go through the end of the VPN i.e. through the server of the VPN provider."),(0,r.kt)("p",null,"To solve this problem, there are two solutions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transform the server into a router and connect the home equipments to it, these equipments will then benefit from the VPN confidentiality too."),(0,r.kt)("li",{parentName:"ul"},"use the YunoHost server as a DNS resolver when you are at home, in order to redirect the server's domain names to the local IP rather than the public IP. This operation can be done either on each equipment or on the router (if the latter allows it).")))}d.isMDXComponent=!0}}]);