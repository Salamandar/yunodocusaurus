"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),o=n(67294),r=n(86010),i=n(72957),l=n(16550),s=n(75238),u=n(33609),c=n(92560);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var y=n(51048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},63154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(73992),i=n(18679);const l={title:"SSH and command line",template:"docs",taxonomy:{category:"docs"},routes:{default:"/ssh",aliases:["/commandline"]},"page-toc":{active:!0}},s=void 0,u={unversionedId:"administer/admin_guide/command_line",id:"administer/admin_guide/command_line",title:"SSH and command line",description:"What's SSH?",source:"@site/docs/02.administer/15.admin_guide/15.command_line.mdx",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/command_line",permalink:"/yunodocusaurus/docs/administer/admin_guide/command_line",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/15.command_line.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"SSH and command line",template:"docs",taxonomy:{category:"docs"},routes:{default:"/ssh",aliases:["/commandline"]},"page-toc":{active:!0}},sidebar:"docsSidebar",previous:{title:"Administrator web interface",permalink:"/yunodocusaurus/docs/administer/admin_guide/admin"},next:{title:"Users and the SSO",permalink:"/yunodocusaurus/docs/administer/admin_guide/users/"}},c={},d=[{value:"What&#39;s SSH?",id:"whats-ssh",level:2},{value:"How to connect",id:"how-to-connect",level:2},{value:"Login credentials",id:"login-credentials",level:3},{value:"Address to use",id:"address-to-use",level:3},{value:"Connecting",id:"connecting",level:3},{value:"Which other users may connect to the server?",id:"which-other-users-may-connect-to-the-server",level:2},{value:"Security and SSH",id:"security-and-ssh",level:2},{value:"The command line",id:"the-command-line",level:2},{value:"The <code>yunohost</code> command",id:"the-yunohost-command",level:3},{value:"The <code>yunopaste</code> command",id:"the-yunopaste-command",level:3},{value:"The <code>ynh-vpnclient-loadcubefile.sh</code> command",id:"the-ynh-vpnclient-loadcubefilesh-command",level:3},{value:"Some useful commands",id:"some-useful-commands",level:3}],m={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"whats-ssh"},"What's SSH?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSH")," stands for Secure Shell, and refers to a protocol that allows to remotely control and administer a machine using the command line interface (CLI). It is available by default in any terminal on GNU/Linux and macOS. On Windows, you may want to use ",(0,o.kt)("a",{parentName:"p",href:"https://mobaxterm.mobatek.net/download-home-edition.html"},"MobaXterm")," (after launching it, click on Session then SSH)."),(0,o.kt)("p",null,"The command line interface (CLI) is, in the computer world, the original (and more technical) way of interacting with a computer compared to graphical interface. Command line interfaces are generally said to be more complete, powerful or efficient than a graphical interface, though also more difficult to learn."),(0,o.kt)("h2",{id:"how-to-connect"},"How to connect"),(0,o.kt)("h3",{id:"login-credentials"},"Login credentials"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"before-postinstall",label:"Before running the initial configuration (post-installation)",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are ",(0,o.kt)("strong",{parentName:"li"},"installing at home"),", the default credentials are login: ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," and password: ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"1234")," if you flashed an armbian image)"),(0,o.kt)("li",{parentName:"ul"},"If you are ",(0,o.kt)("strong",{parentName:"li"},"installing a remote server (VPS)"),", your provider should have communicated you the login and password (or allowed you to configure an SSH key)"))),(0,o.kt)(i.Z,{value:"after-postinstall",label:"After running the post-installation",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"During the postinstall, you've been asked to choose an administration password. This password becomes the new password for the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," users. Additionally, ",(0,o.kt)("strong",{parentName:"p"},"the ",(0,o.kt)("inlineCode",{parentName:"strong"},"root")," SSH login becomes disabled after the postinstall and you should log in using the ",(0,o.kt)("inlineCode",{parentName:"strong"},"admin")," user !"),". The only exception is that you may still be able to login using ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," ",(0,o.kt)("em",{parentName:"p"},"from the local network - or from a direct console on the server")," (this is to cover the event where the LDAP server is broken and the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user is unusable)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you connected as ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and would like to become ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," for convenience (e.g. to avoid typing ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," in front of every command), you can become ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo -i"),".")))),(0,o.kt)("h3",{id:"address-to-use"},"Address to use"),(0,o.kt)("p",null,"If you are ",(0,o.kt)("strong",{parentName:"p"},"installing at home")," (e.g. on a Raspberry Pi or OLinuXino or old computer):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you should be able to connect to your server using ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost.local")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost-2.local"),", depending on how many servers are on your network). "),(0,o.kt)("li",{parentName:"ul"},"if ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost.local")," and the like do not work, your need to ",(0,o.kt)("a",{parentName:"li",href:"/finding_the_local_ip"},"find out the local IP of the server"),"."),(0,o.kt)("li",{parentName:"ul"},"if you installed a server at home but are attempting to connect from outside your local network, make sure port 22 is correctly forwarded to your server.")),(0,o.kt)("p",null,"If your server is a remote server (VPS), your provider should have communicated you the IP address of the machine"),(0,o.kt)("p",null,"In any cases, if you already configured a domain name pointing to the appropriate IP, it's much better to use ",(0,o.kt)("inlineCode",{parentName:"p"},"yourdomain.tld")," instead of the IP address."),(0,o.kt)("h3",{id:"connecting"},"Connecting"),(0,o.kt)("p",null,"The SSH command typically looks like: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# before the postinstall:\nssh root@11.22.33.44\n\n# or after the postinstall:\nssh admin@11.22.33.44\n\n# using the domain name instead of the IP (more convenient)\nssh admin@votre.domaine.tld\n\n# using the local domain name instead of the IP (for local access)\nssh admin@yunohost.local\n\n# if you changed the SSH port\nssh -p 2244 admin@votre.domaine.tld\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"fail2ban")," will ban your IP for 10 minutes if you perform 10 failed login attempts. If you need to unban the IP, have a look at the page about ",(0,o.kt)("a",{parentName:"p",href:"/fail2ban"},"Fail2Ban"))),(0,o.kt)("h2",{id:"which-other-users-may-connect-to-the-server"},"Which other users may connect to the server?"),(0,o.kt)("p",null,"By default, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user can log in to YunoHost SSH server."),(0,o.kt)("p",null,"YunoHost's users created via the administration interface are managed by the LDAP directory. By default, they can't connect via SSH for security reasons. Via the permissions system it is possible to allow the connection in SFTP or if it is really necessary in SSH. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be careful who you give SSH access to. This increases even more the attack surface available to a malicious user.")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"web",label:"From the web interface",mdxType:"TabItem"},(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Users > Manage groups and permissions"),"."),(0,o.kt)("p",null,"From here, you can add SFTP or SSH permissions to any user or group."),(0,o.kt)("p",null,"If you want to add an SSH public key to the user, you have to do it from the command line, as the web interface does not yet offer this feature.")),(0,o.kt)(i.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,o.kt)("p",null,"To allow a user or group to access via SFTP or SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# SFTP\nyunohost user permission add sftp <username>\n# SSH\nyunohost user permission add ssh <username>\n")),(0,o.kt)("p",null,"To remove permission:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# SFTP\nyunohost user permission remove sftp <username>\n# SSH\nyunohost user permission remove ssh <username>\n")),(0,o.kt)("p",null,"Finally, it is possible to add, delete and list SSH keys, to improve SSH access security, using the commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost user ssh add-key <username> <key>\nyunohost user ssh remove-key <username> <key>\nyunohost user ssh list-keys <username>\n")))),(0,o.kt)("h2",{id:"security-and-ssh"},"Security and SSH"),(0,o.kt)("p",null,"A more extensive discussion about security & SSH can be found on the ",(0,o.kt)("a",{parentName:"p",href:"/security"},"dedicated page"),"."),(0,o.kt)("h2",{id:"the-command-line"},"The command line"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Providing a full tutorial about the command line is quite beyond the scope of the YunoHost documentation : for this, consider reading a dedicated tutorial such as ",(0,o.kt)("a",{parentName:"p",href:"https://ryanstutorials.net/linuxtutorial/"},"this one")," or ",(0,o.kt)("a",{parentName:"p",href:"http://linuxcommand.org/"},"this one"),". But be reassured that you don't need to be a CLI expert to start using it !")),(0,o.kt)("h3",{id:"the-yunohost-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"yunohost")," command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost")," command can be used to administer your server and perform the various actions similarly to what you do on the webadmin. The command must be launched either from the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," user or from the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user by preceeding them with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),". (ProTip\u2122 : you can become ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),")."),(0,o.kt)("p",null,"YunoHost commands usually have this kind of structure : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost app install wordpress --label Webmail\n          ^    ^        ^             ^\n          |    |        |             |\n    category  action  argument      options\n")),(0,o.kt)("p",null,"Don't hesitate to browse and ask for more information about a given category or action using the the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," option. For instance, those commands : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost --help\nyunohost user --help\nyunohost user create --help\n")),(0,o.kt)("p",null,"will successively list all the categories available, then the actions available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," category, then the usage of the action ",(0,o.kt)("inlineCode",{parentName:"p"},"user create"),". You might notice that the YunoHost command tree is built with a structure similar to the YunoHost admin pages."),(0,o.kt)("h3",{id:"the-yunopaste-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"yunopaste")," command"),(0,o.kt)("p",null,"This command allow you to share with an other person the output of a command."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost tools diagnosis | yunopaste\n")),(0,o.kt)("h3",{id:"the-ynh-vpnclient-loadcubefilesh-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"ynh-vpnclient-loadcubefile.sh")," command"),(0,o.kt)("p",null,"This command is only available if you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"VPN Client")," application installed. You can use it to load a new .cube in case you can't get to the VPN Client interface to do so. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ynh-vpnclient-loadcubefile.sh -u <username> -p <password> -c <path>.cube\n")),(0,o.kt)("h3",{id:"some-useful-commands"},"Some useful commands"),(0,o.kt)("p",null,"If your administration web interface indicates that the API is unreachable, try starting ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost-api"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start yunohost-api\n")),(0,o.kt)("p",null,"If you can no longer connect with the user ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," via SSH and via the web interface, the ",(0,o.kt)("inlineCode",{parentName:"p"},"slapd")," service may be down, try restarting it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart slapd\n")),(0,o.kt)("p",null,"If you have manually modified configurations and want to know the changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yunohost tools regen-conf --with-diff --dry-run\n")))}h.isMDXComponent=!0}}]);