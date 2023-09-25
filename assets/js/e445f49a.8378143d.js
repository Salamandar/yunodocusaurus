"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6441],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},44130:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={title:"Local network access to your server",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_local_network"}},a=void 0,s={unversionedId:"administer/tutorials/domains/dns_local_network",id:"administer/tutorials/domains/dns_local_network",title:"Local network access to your server",description:"After completing your server installation, it is possible that your domain will not be accessible through the local network. This is an issue known as hairpinning - a feature that is not well supported by some internet routers.",source:"@site/docs/02.administer/45.tutorials/05.domains/04.dns_local_network.md",sourceDirName:"02.administer/45.tutorials/05.domains",slug:"/administer/tutorials/domains/dns_local_network",permalink:"/yunodocusaurus/docs/administer/tutorials/domains/dns_local_network",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/05.domains/04.dns_local_network.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Local network access to your server",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_local_network"}},sidebar:"docsSidebar",previous:{title:"DNS and subdomains for the applications",permalink:"/yunodocusaurus/docs/administer/tutorials/domains/dns_subdomains"},next:{title:"Exchange files with your server using a graphical interface",permalink:"/yunodocusaurus/docs/administer/tutorials/filezilla"}},l={},u=[{value:"Find the local IP address of your server",id:"find-the-local-ip-address-of-your-server",level:3},{value:"Configure DNS on your Internet router",id:"configure-dns-on-your-internet-router",level:2},{value:"SFR Box",id:"sfr-box",level:3},{value:"Configure SFR box&#39;s DNS",id:"configure-sfr-boxs-dns",level:4},{value:"Configure hosts file on client workstation",id:"configure-hosts-file-on-client-workstation",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After completing your server installation, it is possible that your domain will not be accessible through the local network. This is an issue known as ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Hairpinning"},"hairpinning")," - a feature that is not well supported by some internet routers."),(0,n.kt)("p",null,"To solve this issue you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"configure your router's DNS"),(0,n.kt)("li",{parentName:"ul"},"or alternatively -  your /etc/hosts files on your clients workstation")),(0,n.kt)("h3",{id:"find-the-local-ip-address-of-your-server"},"Find the local IP address of your server"),(0,n.kt)("p",null,"First you need to find out the local IP of your server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"either using the tricks lister ",(0,n.kt)("a",{parentName:"li",href:"/finding_the_local_ip"},"here")),(0,n.kt)("li",{parentName:"ul"},"or if in the webadmin, in the Diagnosis section, under Internet Connectivity, IPv4, click on 'Details' and you should find an entry for 'Local IP'"),(0,n.kt)("li",{parentName:"ul"},"or using the command line on the server : ",(0,n.kt)("inlineCode",{parentName:"li"},"hostname -I"))),(0,n.kt)("h2",{id:"configure-dns-on-your-internet-router"},"Configure DNS on your Internet router"),(0,n.kt)("p",null,"The goal here is to create a network wide redirection handled by your router. The idea is to create a DNS redirection to your server's IP. You should access your router's configuration and look for DNS configuration, then add a redirection to your server's IP (e.g. redirect ",(0,n.kt)("inlineCode",{parentName:"p"},"yunohost.local")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"192.168.1.21"),")."),(0,n.kt)("h3",{id:"sfr-box"},"SFR Box"),(0,n.kt)("p",null,"If you haven't found your server private IP, you may find it using the SFR box admin panel:",(0,n.kt)("br",{parentName:"p"}),"\n","Go to Network tab > General"),(0,n.kt)("p",null,"FIXME: Missing image"),(0,n.kt)("h4",{id:"configure-sfr-boxs-dns"},"Configure SFR box's DNS"),(0,n.kt)("p",null,"Go to Network tab > DNS and add your domain name to the box's DNS."),(0,n.kt)("p",null,"FIXME: Missing image"),(0,n.kt)("h2",{id:"configure-hosts-file-on-client-workstation"},"Configure ",(0,n.kt)("a",{parentName:"h2",href:"https://en.wikipedia.org/wiki/Host_%28Unix%29"},"hosts")," file on client workstation"),(0,n.kt)("p",null,"Modifying hosts file should be done only if you cannot alter your box's DNS or router, because hosts file will only impact the workstation where the file was modified."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows hosts file is located at:\n",(0,n.kt)("inlineCode",{parentName:"li"},"%SystemRoot%\\system32\\drivers\\etc\\"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"You MUST activate hidden and system file display to see the hosts file."))),(0,n.kt)("li",{parentName:"ul"},"UNIX systems (GNU/Linux, macOS) hosts file is located at:\n",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/hosts"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"You MUST have root privileges to modify the file.")))),(0,n.kt)("p",null,"Add a line at the end of the file containing your server private IP followed by a space and your domain name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"192.168.1.62    domain.tld\n")))}p.isMDXComponent=!0}}]);