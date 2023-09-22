"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Certificate",template:"docs",taxonomy:{category:"docs"},routes:{default:"/certificate"}},o=void 0,c={unversionedId:"administer/admin_guide/domains/certificate",id:"administer/admin_guide/domains/certificate",title:"Certificate",description:"Certificates are used to guarantee the confidentiality and authenticity of the communication between a web browser and your server. In particular, they protect against attackers trying to impersonate your server.",source:"@site/docs/02.administer/15.admin_guide/25.domains/certificate.md",sourceDirName:"02.administer/15.admin_guide/25.domains",slug:"/administer/admin_guide/domains/certificate",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/domains/certificate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/25.domains/certificate.md",tags:[],version:"current",frontMatter:{title:"Certificate",template:"docs",taxonomy:{category:"docs"},routes:{default:"/certificate"}},sidebar:"tutorialSidebar",previous:{title:"Domains",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/domains/"},next:{title:"Applications",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/apps"}},s={},l=[{value:"Install a Let&#39;s Encrypt certificate",id:"install-a-lets-encrypt-certificate",level:3},{value:"Troubleshooting",id:"troubleshooting",level:5}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Certificates are used to guarantee the confidentiality and authenticity of the communication between a web browser and your server. In particular, they protect against attackers trying to impersonate your server."),(0,a.kt)("p",null,"YunoHost provides a ",(0,a.kt)("strong",{parentName:"p"},"self-signed")," certificate, it means that your server guaranties the certificate validity. It's enough ",(0,a.kt)("strong",{parentName:"p"},"for personal usage"),", because you trust your own server. But this could be a problem if you want to open access to anonymous like web user for a website."),(0,a.kt)("p",null,"In practice, visitors will see a screen list this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://postinstall_error.png",alt:null})),(0,a.kt)("p",null,"Which basically asks the visitor : ",(0,a.kt)("strong",{parentName:"p"},'"Do you trust the server hosting this website?"'),". This can rightfully frighten a lot of people."),(0,a.kt)("p",null,"To avoid this confusion, it's possible to get a certificate signed a known authority named ",(0,a.kt)("strong",{parentName:"p"},"Let's Encrypt")," which provide free certificates directly recognized by browsers. YunoHost allows to directly install this certificate from the web administration interface or from the command line."),(0,a.kt)("h3",{id:"install-a-lets-encrypt-certificate"},"Install a Let's Encrypt certificate"),(0,a.kt)("p",null,"Before attempting to install a Let's Encrypt certificate, you should make sure that your DNS is correctly configured (your.domain.tld should point to your server's IP) and that your domain is accessible through HTTP from outside your local network (i.e. at least port 80 should be forwarded to your server)."),(0,a.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="From the web interface"]'),(0,a.kt)("p",null,"Go to the 'Domain' part of the admin interface, then in the section dedicated to your.domain.tld. You should find a 'SSL certificate' button:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://domain-certificate-button.png",alt:null})),(0,a.kt)("p",null,"In the 'SSL certificate' section, you can see the status of the current certificate. If you just added the domain, it should be a self-signed certificate."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://certificate-before-LE.png",alt:null})),(0,a.kt)("p",null,"If your domain is correctly configured, it is then possible to install the Let's Encrypt certificate via the green button."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://certificate-after-LE.png",alt:null})),(0,a.kt)("p",null,"Once the install is made, you can check that the certificate is live via your browser by going to your domain in HTTPS. The certificate will automatically be renewed every three months."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"image://certificate-signed-by-LE.png",alt:null})),(0,a.kt)("p",null,'[/ui-tab][ui-tab title="From the command line"]'),(0,a.kt)("p",null,"Connect to your server through SSH."),(0,a.kt)("p",null,"You can check the status of your current certificate with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost domain cert-status your.domain.tld\n")),(0,a.kt)("p",null,"Install a Let's Encrypt certificate with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost domain cert-install your.domain.tld\n")),(0,a.kt)("p",null,"This should return :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Success! The SSOwat configuration has been generated\nSuccess! Successfully installed Let's Encrypt certificate for domain DOMAIN.TLD!\n")),(0,a.kt)("p",null,"Once this is done, you can check that the certificate is live via your browser by going to your domain in HTTPS. The certificate will automatically be renewed every three months."),(0,a.kt)("p",null,"[/ui-tab][/ui-tabs]"),(0,a.kt)("h5",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If due to some bad tweaking, your certificate ends up in a bad state (e.g. lost the certificate or unable to read the files), you should be able to clean the situation by regenerating a self-signed certificate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost domain cert-install your.domain.tld --self-signed --force\n")),(0,a.kt)("p",null,"If YunoHost thinks that your domain is badly configured despite the fact that you checked the DNS configuration and you have access in HTTP to your server from outside your local network, then you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add a line ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1 your.domain.tld")," to the file ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/hosts")," on your server;"),(0,a.kt)("li",{parentName:"ul"},"if the certificate installation still doesn't work, you can disable the checks with ",(0,a.kt)("inlineCode",{parentName:"li"},"--no-checks")," after the ",(0,a.kt)("inlineCode",{parentName:"li"},"cert-install")," command.")))}p.isMDXComponent=!0}}]);