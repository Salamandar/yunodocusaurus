"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(k,s(s({ref:t},p),{},{components:a})):r.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Custom certificates",template:"docs",taxonomy:{category:"docs"},routes:{default:"/certificate_custom"}},s=void 0,c={unversionedId:"administer/tutorials/certificate_custom",id:"administer/tutorials/certificate_custom",title:"Custom certificates",description:"! Note: since version 2.5, YunoHost integrates Let's Encrypt certificates automated management. You can easily and freely install a Let's Encrypt certificate. The following document describes the steps for installing a paid certificate from a certification authority (Gandi, RapidSSL, StartSSL, Cacert).",source:"@site/docs/02.administer/45.tutorials/45.certificate_custom.md",sourceDirName:"02.administer/45.tutorials",slug:"/administer/tutorials/certificate_custom",permalink:"/yunodocusaurus/docs/administer/tutorials/certificate_custom",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/45.certificate_custom.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{title:"Custom certificates",template:"docs",taxonomy:{category:"docs"},routes:{default:"/certificate_custom"}},sidebar:"tutorialSidebar",previous:{title:"Using YunoHost as a Tor Hidden Service",permalink:"/yunodocusaurus/docs/administer/tutorials/torhiddenservice"},next:{title:"Moving an app folder to a different storage",permalink:"/yunodocusaurus/docs/administer/tutorials/moving_app_folder"}},i={},l=[{value:"Adding a signed certificate by an authority (other than Let&#39;s Encrypt)",id:"adding-a-signed-certificate-by-an-authority-other-than-lets-encrypt",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"! ",(0,n.kt)("strong",{parentName:"p"},"Note:")," since version 2.5, YunoHost integrates Let's Encrypt certificates automated management. You can easily and freely ",(0,n.kt)("a",{parentName:"p",href:"/certificate"},"install a Let's Encrypt certificate"),". The following document describes the steps for installing a paid certificate from a certification authority (",(0,n.kt)("strong",{parentName:"p"},"Gandi"),", ",(0,n.kt)("strong",{parentName:"p"},"RapidSSL"),", ",(0,n.kt)("strong",{parentName:"p"},"StartSSL"),", ",(0,n.kt)("strong",{parentName:"p"},"Cacert"),")."),(0,n.kt)("p",null,"Some changes have taken place which impact the procedures indicated below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Metronome group is no longer used directly but ssl-cert."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/yunohost/certs/DOMAIN.LTD-history/stamp")," directory is used to keep each configuration created and a symlink is created.")),(0,n.kt)("h3",{id:"adding-a-signed-certificate-by-an-authority-other-than-lets-encrypt"},"Adding a signed certificate by an authority (other than Let's Encrypt)"),(0,n.kt)("p",null,"After the certificate creation with your registration authority, you must have a private key, the key file, and a public certificate, the crt file."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that the key file is very sensitive, it is strictly personal and must be very well secured.")),(0,n.kt)("p",null,"These two files should be copied to the server, if they are not already there."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"scp CERTIFICATE.crt admin@DOMAIN.TLD:ssl.crt\nscp KEY.key admin@DOMAIN.TLD:ssl.key\n")),(0,n.kt)("p",null,"From Windows, scp can be used with Putty, by downloading the tool ",(0,n.kt)("a",{parentName:"p",href:"http://the.earth.li/~sgtatham/putty/latest/x86/pscp.exe"},"pscp")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pscp -P 22 CERTIFICATE.crt admin@DOMAIN.TLD:ssl.crt\npscp -P 22 KEY.key admin@DOMAIN.TLD:ssl.key\n")),(0,n.kt)("p",null,"As soon as the files are on the server, the rest of the work will be done on it. In ",(0,n.kt)("a",{parentName:"p",href:"/ssh"},"ssh")," or locally.\nFirst, create a folder to store the obtained certificates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/yunohost/certs/DOMAIN.TLD/ae_certs\nsudo mv ssl.key ssl.crt /etc/yunohost/certs/DOMAIN.TLD/ae_certs/\n")),(0,n.kt)("p",null,"Then, go to the parent folder to continue."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/yunohost/certs/DOMAIN.TLD/\n")),(0,n.kt)("p",null,"As a caution, back up the certificates of origin from YunoHost."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir yunohost_self_signed\nsudo mv *.pem *.cnf yunohost_self_signed/\n")),(0,n.kt)("p",null,"Depending on the registration authority, intermediate and root certificates must be obtained."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"StartSSL")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget http://www.startssl.com/certs/ca.pem -O ae_certs/ca.pem\nsudo wget http://www.startssl.com/certs/sub.class1.server.ca.pem -O ae_certs/intermediate_ca.pem\n"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Gandi")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://www.gandi.net/static/CAs/GandiStandardSSLCA2.pem -O ae_certs/intermediate_ca.pem\n"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"RapidSSL")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://knowledge.rapidssl.com/library/VERISIGN/INTERNATIONAL_AFFILIATES/RapidSSL/AR1548/RapidSSLCABundle.txt -O ae_certs/intermediate_ca.pem\n"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Cacert")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget http://www.cacert.org/certs/root.crt -O ae_certs/ca.pem\nsudo wget http://www.cacert.org/certs/class3.crt -O ae_certs/intermediate_ca.pem\n"))),(0,n.kt)("p",null,"Intermediate and root certificates must be combined with the obtained certificate to create a unified certificate chain."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cat ae_certs/ssl.crt ae_certs/intermediate_ca.pem ae_certs/ca.pem | sudo tee crt.pem\n")),(0,n.kt)("p",null,"The private key must be converted to ",(0,n.kt)("inlineCode",{parentName:"p"},".pem")," format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo openssl rsa -in ae_certs/ssl.key -out key.pem -outform PEM\n")),(0,n.kt)("p",null,"To ensure the certificates syntax, check the files contents."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cat crt.pem key.pem\n")),(0,n.kt)("p",null,"The certificates and private key should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"-----BEGIN CERTIFICATE-----\nMIICVDCCAb0CAQEwDQYJKoZIhvcNAQEEBQAwdDELMAkGA1UEBhMCRlIxFTATBgNV\nBAgTDENvcnNlIGR1IFN1ZDEQMA4GA1UEBxMHQWphY2NpbzEMMAoGA1UEChMDTExC\nMREwDwYDVQQLEwhCVFMgSU5GTzEbMBkGA1UEAxMSc2VydmV1ci5idHNpbmZvLmZy\nMB4XDTA0MDIwODE2MjQyNloXDTA0MDMwOTE2MjQyNlowcTELMAkGA1UEBhMCRlIx\nFTATBgNVBAgTDENvcnNlIGR1IFN1ZDEQMA4GA1UEBxMHQWphY2NpbzEMMAoGA1UE\nChMDTExCMREwDwYDVQQLEwhCVFMgSU5GTzEYMBYGA1UEAxMPcHJvZi5idHNpbmZv\nLmZyMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDSUagxPSv3LtgDV5sygt12\nkSbN/NWP0QUiPlksOkF2NkPfwW/mf55dD1hSndlOM/5kLbSBo5ieE3TgikF0Iktj\nBWm5xSqewM5QDYzXFt031DrPX63Fvo+tCKTQoVItdEuJPMahVsXnDyYHeUURRWLW\nwc0BzEgFZGGw7wiMF6wt5QIDAQABMA0GCSqGSIb3DQEBBAUAA4GBALD640iwKPMf\npqdYtfvmLnA7CiEuao60i/pzVJE2LIXXXbwYjNAM+7Lov+dFT+b5FcOUGqLymSG3\nkSK6OOauBHItgiGI7C87u4EJaHDvGIUxHxQQGsUM0SCIIVGK7Lwm+8e9I2X0G2GP\n9t/rrbdGzXXOCl3up99naL5XAzCIp6r5\n-----END CERTIFICATE-----\n")),(0,n.kt)("p",null,"Finally, secure your certificate files."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown root:metronome crt.pem key.pem\nsudo chmod 640 crt.pem key.pem\nsudo chown root:root -R ae_certs\nsudo chmod 600 -R ae_certs\n")),(0,n.kt)("p",null,"Now the certificates (two files with the extension ",(0,n.kt)("inlineCode",{parentName:"p"},".pem"),") must be copied in ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/yunohost/certs/DOMAIN.TLD"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp ae_certs/*.pem ./\n")),(0,n.kt)("p",null,"Reload NGINX configuration to take into account the new certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service nginx reload\n")),(0,n.kt)("p",null,"Your certificate is ready. However, you can ensure that it is in place by testing the certificate using the ",(0,n.kt)("a",{href:"https://www.geocerts.com/ssl_checker",target:"_blank"},"geocerts"),"."))}d.isMDXComponent=!0}}]);