"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const s={title:"Users and the SSO",template:"docs",taxonomy:{category:"docs"},"page-toc":{active:!0},routes:{default:"/users"}},o=void 0,i={unversionedId:"administer/admin_guide/users/users",id:"administer/admin_guide/users/users",title:"Users and the SSO",description:"Users",source:"@site/docs/02.administer/15.admin_guide/20.users/20.users.md",sourceDirName:"02.administer/15.admin_guide/20.users",slug:"/administer/admin_guide/users/",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/users/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/20.users/20.users.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Users and the SSO",template:"docs",taxonomy:{category:"docs"},"page-toc":{active:!0},routes:{default:"/users"}},sidebar:"tutorialSidebar",previous:{title:"SSH and command line",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/command_line"},next:{title:"Users groups and permissions",permalink:"/yunodocusaurus/ca/docs/administer/admin_guide/users/groups_and_permissions"}},l={},u=[{value:"Users",id:"users",level:2},{value:"The user portal, or SSO",id:"the-user-portal-or-sso",level:2},{value:"Creating new users",id:"creating-new-users",level:2},{value:"User groups and permissions",id:"user-groups-and-permissions",level:2},{value:"SSH access",id:"ssh-access",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"users"},"Users"),(0,n.kt)("p",null,"Users are human being who have access to applications and other services on your server. The administrator can add and manage users through the web administration (in the User category) or through the command line (see ",(0,n.kt)("inlineCode",{parentName:"p"},"yunohost user --help"),"). After that, users obtain a personal email address (chosen by the admin), an XMPP account, and can log in the user portal to access applications they have permissions over and configure other parameters."),(0,n.kt)("p",null,"The first user created also automatically gets email aliases ",(0,n.kt)("inlineCode",{parentName:"p"},"root@main.domain.tld")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"admin@main.domain.tld"),", such that mail sent to these addresses will end up in the first user's mailbox."),(0,n.kt)("p",null,"! You should be careful about who you give your server access to. In terms of security, this largely increase the attack surface for someone who wants to mess with the server one way or another."),(0,n.kt)("h2",{id:"the-user-portal-or-sso"},"The user portal, or SSO"),(0,n.kt)("p",null,"[center]","\n",(0,n.kt)("img",{parentName:"p",src:"image://user_panel.png",alt:null}),"\n","[/center]"),(0,n.kt)("p",null,"The user portal, also called the SSO for 'Single Sign On' allows user to browse easily between the different apps they have access to. In particular, the term 'Single Sign On' comes from the fact that user only need to log in the portal to automatically be logged to all apps that require authentication (or at least those who are integrated with the SSO/LDAP, since this is sometimes technically complicated or not possible at all)."),(0,n.kt)("p",null,"In the portal, users can also click on the avatar in the top-left to configure some other settings such as their identify, mail aliases, automatic mail forwards, or change their password."),(0,n.kt)("p",null,"!!! You should be aware that the SSO can only be reached through the actual domain name (i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://the.domain.tld/yunohost/sso"),"), and NOT by just using the IP of the server (i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://11.22.33.44/yunohost/sso"),"), contrarily to the webadmin ! This is a bit confusing but is necessary for technical reason. If you are in a situation where you need to access the SSO without having your DNS properly configured for some reason, you might consider tweaking your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," as described in ",(0,n.kt)("a",{parentName:"p",href:"/dns_local_network"},"this page"),"."),(0,n.kt)("h2",{id:"creating-new-users"},"Creating new users"),(0,n.kt)("p",null,"Only the administrator can create new users. From the webadmin, open the ",(0,n.kt)("inlineCode",{parentName:"p"},"Users")," menu and click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"+ New user")," main button. Fill in all the whole form."),(0,n.kt)("p",null,"Users are created with an associated email address (and XMPP account) with the format ",(0,n.kt)("inlineCode",{parentName:"p"},"username@domain.tld"),". Additional email aliases and email forwards can later be added by the admin and the user."),(0,n.kt)("p",null,"The password should be at least 8 characters - though it is good practice to use longer password (i.e. a passphrase) and/or to use various kind of characters (uppercase, lowercase, digits and special characters)."),(0,n.kt)("p",null,"Finalize the user creation by clicking on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Save")," button."),(0,n.kt)("p",null,"[center]","\n",(0,n.kt)("img",{parentName:"p",src:"image://create_user_1.png?classes=caption",alt:"Main menu",title:"From the main menu of the webadmin, open `Users`."})),(0,n.kt)("p",null,"[/center]"),(0,n.kt)("p",null,"[center]","\n",(0,n.kt)("img",{parentName:"p",src:"image://create_user_2.png?classes=caption",alt:"Users list",title:"From the top of the users list, click on `+ New user`."}),"\n","[/center]"),(0,n.kt)("p",null,"[center]","\n",(0,n.kt)("img",{parentName:"p",src:"image://create_user_3.png?classes=caption",alt:"User creation form",title:"Fill in the form."}),"\n","[/center]"),(0,n.kt)("h2",{id:"user-groups-and-permissions"},"User groups and permissions"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/groups_and_permissions"},"this dedicated page"),"."),(0,n.kt)("h2",{id:"ssh-access"},"SSH access"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ssh"},"this dedicated page"),"."))}p.isMDXComponent=!0}}]);