"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1406],{3905:(n,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var t=a(7294);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,o=function(n,e){if(null==n)return{};var a,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(o[a]=n[a]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(o[a]=n[a])}return o}var l=t.createContext({}),d=function(n){var e=t.useContext(l),a=e;return n&&(a="function"==typeof n?n(e):r(r({},e),n)),a},p=function(n){var e=d(n.components);return t.createElement(l.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var a=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),c=d(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?t.createElement(h,r(r({ref:e},p),{},{components:a})):t.createElement(h,r({ref:e},p))}));function h(n,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[c]="string"==typeof n?n:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4100:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=a(7462),o=(a(7294),a(3905));const i={title:"DNS and subdomains for the applications",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_subdomains"}},r=void 0,s={unversionedId:"administer/tutorials/domains/dns_subdomains",id:"administer/tutorials/domains/dns_subdomains",title:"DNS and subdomains for the applications",description:"Subdomains",source:"@site/docs/02.administer/45.tutorials/05.domains/03.dns_subdomains.md",sourceDirName:"02.administer/45.tutorials/05.domains",slug:"/administer/tutorials/domains/dns_subdomains",permalink:"/yunodocusaurus/docs/administer/tutorials/domains/dns_subdomains",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/05.domains/03.dns_subdomains.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"DNS and subdomains for the applications",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_subdomains"}},sidebar:"tutorialSidebar",previous:{title:"DNS with a dynamic IP",permalink:"/yunodocusaurus/docs/administer/tutorials/domains/dns_dynamicip"},next:{title:"Local network access to your server",permalink:"/yunodocusaurus/docs/administer/tutorials/domains/dns_local_network"}},l={},d=[{value:"Subdomains",id:"subdomains",level:3},{value:"Configuration example with Gandi",id:"configuration-example-with-gandi",level:3},{value:"Install an application on a subdomain",id:"install-an-application-on-a-subdomain",level:3},{value:"Moving an application to a subdomain",id:"moving-an-application-to-a-subdomain",level:3},{value:"Reinstalling an application",id:"reinstalling-an-application",level:3}],p={toc:d},c="wrapper";function m(n){let{components:e,...a}=n;return(0,o.kt)(c,(0,t.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"subdomains"},"Subdomains"),(0,o.kt)("p",null,"YunoHost allows the use of subdomains. If one owns a domain name ",(0,o.kt)("inlineCode",{parentName:"p"},"mydomain.com"),", one first needs to create the subdomains in the DNS configuration (with one's registrar like Gandi)."),(0,o.kt)("h3",{id:"configuration-example-with-gandi"},"Configuration example with Gandi"),(0,o.kt)("p",null,"The DNS configuration needs an A record with an IPv4 address, an AAAA record with an IPv6 address, and various CNAME records, one for each desired subdomain."),(0,o.kt)("p",null,"If your DNS configuration looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"@         A            XYZ.XYZ.XYZ.XYZ\n@         AAAA         1234:1234:1234:FFAA:FFAA:FFAA:FFAA:AAFF\n*         CNAME        mydomain.com.\nagenda    CNAME        mydomain.com.\nblog      CNAME        mydomain.com.\nrss       CNAME        mydomain.com.\n")),(0,o.kt)("p",null,"then you can access ",(0,o.kt)("inlineCode",{parentName:"p"},"agenda.mydomain.com"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"blog.mydomain.com")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rss.mydomain.com")," subdomains."),(0,o.kt)("h3",{id:"install-an-application-on-a-subdomain"},"Install an application on a subdomain"),(0,o.kt)("p",null,"To install an application on a subdomain in YunoHost, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"blog.mydomain.com"),", the configuration is done in the administration panel. One first add the subdomain to the available domains list. The creation of a subdomain in YunoHost will create the corresponding configuration files for NGINX (the web server used in YunoHost)."),(0,o.kt)("p",null,"Then, in the applications>install panel, one follows the classic installation process by choosing the desired subdomain as domain (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"blog.mydomain.com"),"). One needs to choose the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," (in place of ",(0,o.kt)("inlineCode",{parentName:"p"},"/wordpress")," for example). A warning message will appear telling that it won't be possible to install other application to this subdomain. After validation, the installation starts."),(0,o.kt)("p",null,"The application is then available at ",(0,o.kt)("inlineCode",{parentName:"p"},"blog.mydomain.com")," (and not ",(0,o.kt)("inlineCode",{parentName:"p"},"mydomain.com/wordpress"),")."),(0,o.kt)("h3",{id:"moving-an-application-to-a-subdomain"},"Moving an application to a subdomain"),(0,o.kt)("p",null,"What happens if the application is already installed? For example, one wants to move ",(0,o.kt)("inlineCode",{parentName:"p"},"mydomain.com/wordpress")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"blog.mydomain.com"),".\nIt depends on the application.\nSome applications allow the change of domain. In that case, one can proceed to the change through the administration panel Applications>the_app>change URL.\nIf the application doesn't allow URL change, then there is no easy way to do it. The best solution is to reinstall the application."),(0,o.kt)("h3",{id:"reinstalling-an-application"},"Reinstalling an application"),(0,o.kt)("p",null,"First, save the application data through the backup process. Then uninstall the application with the administration panel. Then reinstall the application to the desired domain. Finally, restore the backup."))}m.isMDXComponent=!0}}]);