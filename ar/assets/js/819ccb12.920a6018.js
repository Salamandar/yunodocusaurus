"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Using YunoHost as a Tor Hidden Service",template:"docs",taxonomy:{category:"docs"},routes:{default:"/torhiddenservice"}},a=void 0,s={unversionedId:"administer/tutorials/torhiddenservice",id:"administer/tutorials/torhiddenservice",title:"Using YunoHost as a Tor Hidden Service",description:'! This tuto is not finished ! Some data could leak with this setup like the main domain of your yunohost, so it\'s not a "Hidden Service". See https://www.torproject.org/docs/tor-hidden-service.html.en',source:"@site/docs/02.administer/45.tutorials/40.torhiddenservice.md",sourceDirName:"02.administer/45.tutorials",slug:"/administer/tutorials/torhiddenservice",permalink:"/yunodocusaurus/ar/docs/administer/tutorials/torhiddenservice",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/45.tutorials/40.torhiddenservice.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Using YunoHost as a Tor Hidden Service",template:"docs",taxonomy:{category:"docs"},routes:{default:"/torhiddenservice"}},sidebar:"tutorialSidebar",previous:{title:"Configure SMTP relay",permalink:"/yunodocusaurus/ar/docs/administer/tutorials/email_configure_relay"},next:{title:"Custom certificates",permalink:"/yunodocusaurus/ar/docs/administer/tutorials/certificate_custom"}},d={},c=[{value:"Get your Tor Hidden Service hostname",id:"get-your-tor-hidden-service-hostname",level:3},{value:"Add the .onion domain to YunoHost",id:"add-the-onion-domain-to-yunohost",level:3},{value:"Avoid SSO redirection (optional)",id:"avoid-sso-redirection-optional",level:3},{value:"Restart NGINX",id:"restart-nginx",level:3}],l={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'! This tuto is not finished ! Some data could leak with this setup like the main domain of your yunohost, so it\'s not a "Hidden Service". See ',(0,o.kt)("a",{parentName:"p",href:"https://www.torproject.org/docs/tor-hidden-service.html.en"},"https://www.torproject.org/docs/tor-hidden-service.html.en")),(0,o.kt)("p",null,"###\xa0Installing Tor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install tor \n")),(0,o.kt)("p",null,"###\xa0Configuring our hidden service\nEdit ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/tor/torrc"),", and add these lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"HiddenServiceDir  /var/lib/tor/hidden_service/\nHiddenServicePort 80 127.0.0.1:80\nHiddenServicePort 443 127.0.0.1:443\n")),(0,o.kt)("p",null,"###\xa0Restart Tor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"service tor restart\n")),(0,o.kt)("h3",{id:"get-your-tor-hidden-service-hostname"},"Get your Tor Hidden Service hostname"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/lib/tor/hidden_service/hostname\n")),(0,o.kt)("p",null,"Your domain looks like ",(0,o.kt)("em",{parentName:"p"},"random123456789.onion")),(0,o.kt)("h3",{id:"add-the-onion-domain-to-yunohost"},"Add the .onion domain to YunoHost"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost domain add random123456789.onion\n")),(0,o.kt)("h3",{id:"avoid-sso-redirection-optional"},"Avoid SSO redirection (optional)"),(0,o.kt)("p",null,"If you want to avoid being redirected to the SSO portal at login, you can deactivate SSOwat for this specific tor domain, by editing the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/random123456789.onion.conf")," and commenting the following line (two times):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#access_by_lua_file /usr/share/ssowat/access.lua;\n")),(0,o.kt)("h3",{id:"restart-nginx"},"Restart NGINX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"service nginx restart\n")))}p.isMDXComponent=!0}}]);