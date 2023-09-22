"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"DNS Configuration with OVH",template:"docs",taxonomy:{category:"docs"},routes:{default:"/providers/registrar/ovh/manualdns",aliases:["/OVH"]}},i=void 0,s={unversionedId:"administer/providers/registrar/ovh/manualdns",id:"administer/providers/registrar/ovh/manualdns",title:"DNS Configuration with OVH",description:"Let's see how to properly set the DNS redirections with OVH.",source:"@site/docs/02.administer/55.providers/05.registrar/ovh/manualdns.md",sourceDirName:"02.administer/55.providers/05.registrar/ovh",slug:"/administer/providers/registrar/ovh/manualdns",permalink:"/yunodocusaurus/fr/docs/administer/providers/registrar/ovh/manualdns",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/55.providers/05.registrar/ovh/manualdns.md",tags:[],version:"current",frontMatter:{title:"DNS Configuration with OVH",template:"docs",taxonomy:{category:"docs"},routes:{default:"/providers/registrar/ovh/manualdns",aliases:["/OVH"]}},sidebar:"tutorialSidebar",previous:{title:"Obtaining an API key from OVH",permalink:"/yunodocusaurus/fr/docs/administer/providers/registrar/ovh/autodns"},next:{title:"Internet service providers",permalink:"/yunodocusaurus/fr/docs/administer/providers/isp"}},l={},u=[{value:"Dynamic IP",id:"dynamic-ip",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's see how to properly set the DNS redirections with ",(0,o.kt)("a",{parentName:"p",href:"http://www.ovh.com"},"OVH"),"."),(0,o.kt)("p",null,"Once you bought your domain name, got to the Web Control Panel, and click on you domain name on the left side:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://ovh_control_panel.png?resize=800",alt:null})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"DNS Zone")," tab, then on ",(0,o.kt)("strong",{parentName:"p"},"Add an entry"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"image://ovh_dns_zone.png?resize=800",alt:null})),(0,o.kt)("p",null,"Now you need to add the DNS redirections as specified by the ",(0,o.kt)("a",{parentName:"p",href:"/dns_config"},"standard DNS zone configuration")),(0,o.kt)("p",null,'Click on "Change in text format", keep the first four lines:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$TTL 3600\n@   IN SOA dns104.ovh.net. tech.ovh.net. (2020083101 86400 3600 3600000 60)\n                         IN NS     dns104.ovh.net.\n                         IN NS     ns104.ovh.net.\n")),(0,o.kt)("p",null,"then erase everything below, and replace it with the configuration generated by YunoHost as explained in ",(0,o.kt)("a",{parentName:"p",href:"/dns_config"},"this page"),"."),(0,o.kt)("h3",{id:"dynamic-ip"},"Dynamic IP"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/dns_dynamicip"},"General tutorial on dynamic IP"),"."),(0,o.kt)("p",null,"You should follow this part if you have a dynamic IP."),(0,o.kt)("p",null,"Find out if your ISP provides you with a dynamic IP address ",(0,o.kt)("a",{parentName:"p",href:"/isp"},"here"),"."),(0,o.kt)("p",null,"Let's create a DynHost id."),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"http://blog.developpez.com/brutus/p6316/ubuntu/configurer_dynhost_ovh_avec_ddclient"},"this tutorial")," to install ddclient.\nddclient will take care of telling OVH that the IP has changed. Then OVH will update the IP."),(0,o.kt)("p",null,"You need to add in the configuration file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"your login and password DynHost"),(0,o.kt)("li",{parentName:"ul"},"your domain name")),(0,o.kt)("p",null,"You should also check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.ovh.co.uk/g2024.hosting_dynhost"},"OVH's guide on DynHost"),"."))}c.isMDXComponent=!0}}]);