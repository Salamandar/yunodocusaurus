"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6652],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},99803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"DNS with a dynamic IP",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_dynamicip"}},i=void 0,s={unversionedId:"administer/tutorials/domains/dns_dynamicip",id:"administer/tutorials/domains/dns_dynamicip",title:"DNS with a dynamic IP",description:"! Before going further, make sure your global IP address is dynamic with: ip.yunohost.org. The global IP address of your box changes almost every day.",source:"@site/docs/02.administer/45.tutorials/05.domains/02.dns_dynamicip.md",sourceDirName:"02.administer/45.tutorials/05.domains",slug:"/administer/tutorials/domains/dns_dynamicip",permalink:"/yunodocusaurus/it/docs/administer/tutorials/domains/dns_dynamicip",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/05.domains/02.dns_dynamicip.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"DNS with a dynamic IP",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_dynamicip"}},sidebar:"tutorialSidebar",previous:{title:"Nohost.me domains",permalink:"/yunodocusaurus/it/docs/administer/tutorials/domains/dns_nohost_me"},next:{title:"DNS and subdomains for the applications",permalink:"/yunodocusaurus/it/docs/administer/tutorials/domains/dns_subdomains"}},l={},d=[{value:"Registrars",id:"registrars",level:3},{value:"1. Create an account to a Dynamic DNS service",id:"1-create-an-account-to-a-dynamic-dns-service",level:4},{value:"2. Move the DNS zones",id:"2-move-the-dns-zones",level:4},{value:"3. Switch the management of your domain name to the dynamic DNS\xa0server",id:"3-switch-the-management-of-your-domain-name-to-the-dynamic-dnsserver",level:4},{value:"4. Configure the client",id:"4-configure-the-client",level:4}],c={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"! Before going further, make sure your global IP address is dynamic with: ",(0,n.kt)("a",{parentName:"p",href:"http://ip.yunohost.org/"},"ip.yunohost.org"),". The global IP address of your box changes almost every day."),(0,n.kt)("p",null,"This tutorial aim to get around dynamic IP issue which is: when the IP public address of your (Internet Service Provider-) box changes, the DNS zone is not updated to point towards the new IP address, and consequently your server is no more reachable via its domain name"),(0,n.kt)("p",null,"After setting up the solution proposed in this tutorial, the redirection from your domain name to the actual IP address of your server will not be lost anymore."),(0,n.kt)("p",null,"The method proposed here consists of automatizing the fact the box announces its global IP address change to the dynamic DNS, so that the DNS zone will automatically be updated."),(0,n.kt)("h3",{id:"registrars"},"Registrars"),(0,n.kt)("p",null,"Here are some examples of registrars, companies where you can buy domain names:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://ovh.com/"},"OVH")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://godaddy.com/"},"GoDaddy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://gandi.net/"},"Gandi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.namecheap.com/"},"Namecheap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bookmyname.com/"},"BookMyName"))),(0,n.kt)("p",null,"If you own a domain name at ",(0,n.kt)("strong",{parentName:"p"},"OVH"),", you may go to step 4 and follow this ",(0,n.kt)("a",{parentName:"p",href:"/OVH"},"tutorial"),", given that OVH proposes a DynDNS service."),(0,n.kt)("h4",{id:"1-create-an-account-to-a-dynamic-dns-service"},"1. Create an account to a Dynamic DNS service"),(0,n.kt)("p",null,"Here are sites which offer a DynDNS service free of charge:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.dnsexit.com/Direct.sv?cmd=dynDns"},"DNSexit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.noip.com/remote-access"},"No-IP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://changeip.com"},"ChangeIP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dyndns.it"},"DynDNS (in italian)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jodumont/DynDNS-with-HE.NET"},"DynDNS with your own domain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.duckdns.org/"},"Duck DNS"))),(0,n.kt)("p",null,"Register to one of them. It should provide you with one (or more) IP address to reach the service, and a login (that you may be able to self-define)."),(0,n.kt)("h4",{id:"2-move-the-dns-zones"},"2. Move the DNS zones"),(0,n.kt)("p",null,"Copy the ",(0,n.kt)("a",{parentName:"p",href:"/dns_config"},"DNS zones"),", except for the NS fields, from the ",(0,n.kt)("a",{parentName:"p",href:"#registrar"},"registrar")," where you bought your domain name from to the dynamic DNS service you registrer at in step 1."),(0,n.kt)("h4",{id:"3-switch-the-management-of-your-domain-name-to-the-dynamic-dnsserver"},"3. Switch the management of your domain name to the dynamic DNS\xa0server"),(0,n.kt)("p",null,"This step consists in declaring to your ",(0,n.kt)("a",{parentName:"p",href:"#registrar"},"registrar")," that the DNS service will now be managed by the DynDNS service provider."),(0,n.kt)("p",null,"For this, first declare in the NS field(s) the IP address provided by the DynDNS service."),(0,n.kt)("p",null,"Then, remove any other item in the ",(0,n.kt)("a",{parentName:"p",href:"/dns_config"},"DNS zones")," (except the previous NS fields), from the ",(0,n.kt)("a",{parentName:"p",href:"#registrar"},"registrar"),"."),(0,n.kt)("h4",{id:"4-configure-the-client"},"4. Configure the client"),(0,n.kt)("p",null,"This client could be your ISP-box, or a package installed on your server, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ddclient"),".\nHere, we will use the client provided by the box, which is the more easy way."),(0,n.kt)("p",null,"Enter the login of the dynamic DNS and its public IP address in your box (interface details may vary by ISP)."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"image://dns_dynamic-ip_box_conf.png?resize=600",alt:null})),(0,n.kt)("p",null,"You're good to go !"))}u.isMDXComponent=!0}}]);