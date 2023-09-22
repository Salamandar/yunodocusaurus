"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"IP address unban",template:"docs",taxonomy:{category:"docs"},routes:{default:"/fail2ban"}},i=void 0,s={unversionedId:"administer/troubleshooting/fail2ban",id:"administer/troubleshooting/fail2ban",title:"IP address unban",description:"Fail2Ban is an intrusion prevention software that protects computer servers against brute-force attacks. It monitors certain logs and will ban IP addresses that show brute-force-like behavior.",source:"@site/docs/02.administer/50.troubleshooting/05.fail2ban.md",sourceDirName:"02.administer/50.troubleshooting",slug:"/administer/troubleshooting/fail2ban",permalink:"/yunodocusaurus/es/docs/administer/troubleshooting/fail2ban",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/50.troubleshooting/05.fail2ban.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"IP address unban",template:"docs",taxonomy:{category:"docs"},routes:{default:"/fail2ban"}},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/yunodocusaurus/es/docs/administer/troubleshooting/"},next:{title:"Changing the administration password",permalink:"/yunodocusaurus/es/docs/administer/troubleshooting/change_admin_password"}},l={},d=[{value:"Unban an IP address",id:"unban-an-ip-address",level:2},{value:"Whitelist an IP address",id:"whitelist-an-ip-address",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fail2Ban")," is an intrusion prevention software that protects computer servers against brute-force attacks. It monitors certain logs and will ban IP addresses that show brute-force-like behavior."),(0,r.kt)("p",null,"In particular, ",(0,r.kt)("strong",{parentName:"p"},"Fail2Ban")," monitors ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH")," connection attempts. After 5 failed SSH connection attempts, Fail2Ban will ban the IP address from connecting via SSH for 10 minutes. If this address fails several times, it might get banned for a week."),(0,r.kt)("h2",{id:"unban-an-ip-address"},"Unban an IP address"),(0,r.kt)("p",null,"To unblock an IP address, you must first access your server by some means (for example from another IP address or from another internet connection than the banned one)."),(0,r.kt)("p",null,"Then, look at the ",(0,r.kt)("strong",{parentName:"p"},"Fail2Ban\u2019s log")," to identify in which ",(0,r.kt)("inlineCode",{parentName:"p"},"jail")," the IP address has been banned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tail /var/log/fail2ban.log\n2019-01-07 16:24:47 fail2ban.filter  [1837]: INFO    [sshd] Found 11.22.33.44\n2019-01-07 16:24:49 fail2ban.filter  [1837]: INFO    [sshd] Found 11.22.33.44\n2019-01-07 16:24:51 fail2ban.filter  [1837]: INFO    [sshd] Found 11.22.33.44\n2019-01-07 16:24:54 fail2ban.filter  [1837]: INFO    [sshd] Found 11.22.33.44\n2019-01-07 16:24:57 fail2ban.filter  [1837]: INFO    [sshd] Found 11.22.33.44\n2019-01-07 16:24:57 fail2ban.actions [1837]: NOTICE  [sshd] Ban 11.22.33.44\n2019-01-07 16:24:57 fail2ban.filter  [1837]: NOTICE  [recidive] Ban 11.22.33.44\n")),(0,r.kt)("p",null,"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"11.22.33.44")," IP address has been banned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sshd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"recidive")," jails."),(0,r.kt)("p",null,"Then deban the IP address with the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fail2ban-client set sshd unbanip 11.22.33.44\nsudo fail2ban-client set recidive unbanip 11.22.33.44\n")),(0,r.kt)("h2",{id:"whitelist-an-ip-address"},"Whitelist an IP address"),(0,r.kt)("p",null,'If you don\u2019t want a "legitimate" IP address to be blocked by ',(0,r.kt)("strong",{parentName:"p"},"YunoHost")," anymore, then you have to fill it in the whitelist of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jail")," configuration file."),(0,r.kt)("p",null,"When updating the ",(0,r.kt)("strong",{parentName:"p"},"Fail2Ban")," software, the original ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/jail.conf")," file is overwritten. So it is on a new dedicated file that we will store the changes. They will thus be preserved over time."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start by creating the new jail configuration file which will be called ",(0,r.kt)("inlineCode",{parentName:"p"},"yunohost-whitelist.conf"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo touch /etc/fail2ban/jail.d/yunohost-whitelist.conf\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit this new file with your favorite editor:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/fail2ban/jail.d/yunohost-whitelist.conf\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the following content into the file and adapt the IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"XXX.XXX.XXX.XXX"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[DEFAULT]\n\nignoreip = 127.0.0.1/8 XXX.XXX.XXX.XXX #<= the IP address (you can put more than one, separated by a space) that you want to whitelist\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the file and reload the Fail2Ban configuration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fail2ban-client reload\n")))),(0,r.kt)("p",null,"Congratulations, no more risks of banning yourself from your own YunoHost server!"))}c.isMDXComponent=!0}}]);