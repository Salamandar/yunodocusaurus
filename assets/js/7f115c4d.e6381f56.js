"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,k=p["".concat(d,".").concat(c)]||p[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"DNS zone configuration",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_config",aliases:["/dns"]}},i=void 0,l={unversionedId:"administer/install/dns_config",id:"administer/install/dns_config",title:"DNS zone configuration",description:"DNS (domain name system) is a system that converts human-readable addresses",source:"@site/docs/02.administer/10.install/20.dns_config.md",sourceDirName:"02.administer/10.install",slug:"/administer/install/dns_config",permalink:"/yunodocusaurus/docs/administer/install/dns_config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/10.install/20.dns_config.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"DNS zone configuration",template:"docs",taxonomy:{category:"docs"},routes:{default:"/dns_config",aliases:["/dns"]}},sidebar:"docsSidebar",previous:{title:"Configure port-forwarding",permalink:"/yunodocusaurus/docs/administer/install/isp_box_config"},next:{title:"Installation",permalink:"/yunodocusaurus/docs/installation"}},d={},s=[{value:"Recommended DNS configuration",id:"recommended-dns-configuration",level:2},{value:"A few notes about this table",id:"a-few-notes-about-this-table",level:3},{value:"Reverse DNS",id:"reverse-dns",level:2},{value:"Dynamic IP",id:"dynamic-ip",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"DNS (domain name system) is a system that converts human-readable addresses\n(domain names) into machine-understandable addresses (IP). For your server to be\neasily accessible by human beings, and for some services like mail to work\nproperly, DNS must be configured."),(0,r.kt)("p",null,"If you're using an ",(0,r.kt)("a",{parentName:"p",href:"/dns_nohost_me"},"automatic domain")," provided by the YunoHost Project, the configuration should be\nperformed automatically. If you're using your own domain name (e.g. bought via\na registrar), you should manually configure your domain on your registrar's\ninterface."),(0,r.kt)("h2",{id:"recommended-dns-configuration"},"Recommended DNS configuration"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Examples here use the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"your.domain.tld"),", you have to replace it with your real domain, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"www.yunohost.org"),".")),(0,r.kt)("p",null,"YunoHost provides a recommended DNS configuration, available via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the webadmin, in Domain > your.domain.tld > DNS configuration"),(0,r.kt)("li",{parentName:"ul"},"or the command line, ",(0,r.kt)("inlineCode",{parentName:"li"},"yunohost domain dns-conf your.domain.tld"))),(0,r.kt)("p",null,"For specific needs or specific setups, and if you know what you're doing, you\nmight want or have to tweak these, or add additional ones (e.g. to handle\nsubdomains)."),(0,r.kt)("p",null,"The recommended configuration typically looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#\n# Basic ipv4/ipv6 records\n#\n@ 3600 IN A 111.222.33.44\n* 3600 IN A 111.222.33.44\n\n# (If your server is IPv6 capable, there are some AAAA records)\n@ 3600 IN AAAA 2222:444:8888:3333:bbbb:5555:3333:1111\n* 3600 IN AAAA 2222:444:8888:3333:bbbb:5555:3333:1111\n\n#\n# XMPP\n#\n_xmpp-client._tcp 3600 IN SRV 0 5 5222 your.domain.tld.\n_xmpp-server._tcp 3600 IN SRV 0 5 5269 your.domain.tld.\nmuc 3600 IN CNAME @\npubsub 3600 IN CNAME @\nvjud 3600 IN CNAME @\nxmpp-upload 3600 IN CNAME @\n\n#\n# Mail (MX, SPF, DKIM and DMARC)\n#\n@ 3600 IN MX 10 your.domain.tld.\n@ 3600 IN TXT "v=spf1 a mx -all"\nmail._domainkey 3600 IN TXT "v=DKIM1; k=rsa; p=someHuuuuuuugeKey"\n_dmarc 3600 IN TXT "v=DMARC1; p=none"\n')),(0,r.kt)("p",null,"Though it might be easier to understand it if displayed like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"@")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"111.222.333.444")," (your IPv4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"111.222.333.444")," (your IPv4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AAAA"),(0,r.kt)("td",{parentName:"tr",align:"center"},"@"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2222:444:8888:3333:bbbb:5555:3333:1111")," (your IPv6)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"AAAA"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2222:444:8888:3333:bbbb:5555:3333:1111")," (your IPv6)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"SRV")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"_xmpp-client._tcp")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"0 5 5222 your.domain.tld."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"SRV")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"_xmpp-server._tcp")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"0 5 5269 your.domain.tld."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:"center"},"muc"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"@"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:"center"},"pubsub"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"@"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:"center"},"vjud"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"@"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:"center"},"xmpp-upload"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"@"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"MX")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"@")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"your.domain.tld."),"     (and priority: 10)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TXT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"@"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"v=spf1 a mx -all"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TXT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"mail._domainkey"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"v=DKIM1; k=rsa; p=someHuuuuuuugeKey"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TXT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"_dmarc"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"v=DMARC1; p=none"'))))),(0,r.kt)("h3",{id:"a-few-notes-about-this-table"},"A few notes about this table"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not all these lines are absolutely necessary. For a minimal setup, you only need the records in bold."),(0,r.kt)("li",{parentName:"ul"},"The dot at the end of ",(0,r.kt)("inlineCode",{parentName:"li"},"your.domain.tld.")," is important ;);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@")," corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"your.domain.tld"),", and e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"muc")," corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"muc.your.domain.tld"),";"),(0,r.kt)("li",{parentName:"ul"},"These are example values ! See your generated conf for the actual values you should use;"),(0,r.kt)("li",{parentName:"ul"},"We recommend a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Time_to_live#DNS_records"},"TTL")," of 3600 (1 hour). But you can use something else if you know what you're doing;"),(0,r.kt)("li",{parentName:"ul"},"Don't put an IPv6 record if you're not sure IPv6 really works on your server! You might have issues with Let's Encrypt if it doesn't."),(0,r.kt)("li",{parentName:"ul"},"If you're using the domain provider Namecheap the SRV DNS entries are formatted as ",(0,r.kt)("strong",{parentName:"li"},"Service"),": _xmpp-client ",(0,r.kt)("strong",{parentName:"li"},"Protocol"),": _tcp ",(0,r.kt)("strong",{parentName:"li"},"Priority"),": 0 ",(0,r.kt)("strong",{parentName:"li"},"Weight"),": 5 ",(0,r.kt)("strong",{parentName:"li"},"Port"),": 5222 ",(0,r.kt)("strong",{parentName:"li"},"Target"),": your.domain.tld")),(0,r.kt)("h2",{id:"reverse-dns"},"Reverse DNS"),(0,r.kt)("p",null,"If your ISP or VPS provider let you define a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reverse_DNS_lookup"},"Reverse DNS\nlookup")," for your public IPv4\nand/or IPv6 addresses, you must configure it. It will prevent you to be marked as\nspam by anti-spam filters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"N.B. : the reverse DNS configuration happens on your Internet Service Provider or VPS provider. It is ",(0,r.kt)("em",{parentName:"strong"},"not")," handled by your domain's registrar.")),(0,r.kt)("p",null,"If your public IPv4 address is ",(0,r.kt)("inlineCode",{parentName:"p"},"111.222.333.444")," and your DNS\ndomain is ",(0,r.kt)("inlineCode",{parentName:"p"},"domain.tld"),", you should get following answer when using ",(0,r.kt)("inlineCode",{parentName:"p"},"nslookup"),"\ncommand tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ nslookup 111.222.333.444\n444.333.222.111.in-addr.arpa    name = domain.tld.\n")),(0,r.kt)("p",null,"The diagnosis system available in the webadmin performs this checks automatically (in section Email)."),(0,r.kt)("h2",{id:"dynamic-ip"},"Dynamic IP"),(0,r.kt)("p",null,"If your global IP address is constantly changing, follow this ",(0,r.kt)("a",{parentName:"p",href:"/dns_dynamicip"},"tutorial"),"."))}u.isMDXComponent=!0}}]);