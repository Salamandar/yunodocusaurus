"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[8519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=l(n),g=a,h=c["".concat(p,".").concat(g)]||c[g]||d[g]||i;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:a,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"SSO/LDAP integration",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_sso_ldap_integration"}},s=void 0,r={unversionedId:"contribute/packaging_apps/advanced/sso_ldap_integration",id:"contribute/packaging_apps/advanced/sso_ldap_integration",title:"SSO/LDAP integration",description:"One powerful aspect of YunoHost is that apps are meant to be integrated with the SSO/LDAP stack, such that users logged in on YunoHost's user portal can be directly logged in each app without having to create an account in each of them nor having to re-log in each app every time.",source:"@site/docs/06.contribute/10.packaging_apps/60.advanced/30.sso_ldap_integration.md",sourceDirName:"06.contribute/10.packaging_apps/60.advanced",slug:"/contribute/packaging_apps/advanced/sso_ldap_integration",permalink:"/yunodocusaurus/ru/docs/contribute/packaging_apps/advanced/sso_ldap_integration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/60.advanced/30.sso_ldap_integration.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"SSO/LDAP integration",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_sso_ldap_integration"}},sidebar:"tutorialSidebar",previous:{title:"Configuration panel for apps",permalink:"/yunodocusaurus/ru/docs/contribute/packaging_apps/advanced/config_panels"},next:{title:"Hooks",permalink:"/yunodocusaurus/ru/docs/contribute/packaging_apps/advanced/packaging_apps_hooks"}},p={},l=[{value:"LDAP integration",id:"ldap-integration",level:2},{value:"SSO integration",id:"sso-integration",level:2},{value:"Configuring SSOwat permissions for the app",id:"configuring-ssowat-permissions-for-the-app",level:2},{value:"Logging out on the app vs. Logging out of YunoHost",id:"logging-out-on-the-app-vs-logging-out-of-yunohost",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One powerful aspect of YunoHost is that apps are meant to be integrated with the SSO/LDAP stack, such that users logged in on YunoHost's user portal can be directly logged in each app without having to create an account in each of them nor having to re-log in each app every time."),(0,a.kt)("p",null,"It should be stressed that there are two different aspects here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the LDAP integration, meaning that the user accounts in the app are directly mapped to YunoHost user accounts"),(0,a.kt)("li",{parentName:"ul"},"the SSO integration, meaning that a user logged in on the YunoHost user portal is automatically logged in on the app as well.")),(0,a.kt)("p",null,"Sometimes, LDAP integration is possible, but not SSO integration (though the opposite would be really weird as LDAP integration is somewhat required for the SSO to work)"),(0,a.kt)("p",null,"The SSO system is handled by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/ssowat"},"SSOwat"),' and also handles the "permission" system which defines wether or not a user (or anonymous visitor) can access the app.'),(0,a.kt)("h2",{id:"ldap-integration"},"LDAP integration"),(0,a.kt)("p",null,"LDAP is a de-facto standard when it comes to sharing a common user account database between multiple applications, hence its use in the context of YunoHost."),(0,a.kt)("p",null,"However, each app does implement LDAP support in its own specific way (or doesn't), and needs to be provided with parameters to actually talk to YunoHost's LDAP database, usually via its config file. It is advise to look for real-life example of apps implementing these (such as Nextcloud, Wekan...) but you will usually need to provide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LDAP host: ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,a.kt)("li",{parentName:"ul"},"LDAP port: ",(0,a.kt)("inlineCode",{parentName:"li"},"389")),(0,a.kt)("li",{parentName:"ul"},"Base DN : ",(0,a.kt)("inlineCode",{parentName:"li"},"dc=yunohost,dc=org")),(0,a.kt)("li",{parentName:"ul"},"User DN : ",(0,a.kt)("inlineCode",{parentName:"li"},"ou=users,dc=yunohost,dc=org")),(0,a.kt)("li",{parentName:"ul"},"Search filter: ",(0,a.kt)("inlineCode",{parentName:"li"},"(&(|(objectclass=posixAccount))(uid=%uid)(permission=cn=__APP__.main,ou=permission,dc=yunohost,dc=org))")," (this makes sure that only people with the appropriate YunoHost/SSowat permission can access the app)"),(0,a.kt)("li",{parentName:"ul"},"Username attribute: ",(0,a.kt)("inlineCode",{parentName:"li"},"uid")),(0,a.kt)("li",{parentName:"ul"},"Display name attribute: ",(0,a.kt)("inlineCode",{parentName:"li"},"displayname")),(0,a.kt)("li",{parentName:"ul"},"Email attribute: ",(0,a.kt)("inlineCode",{parentName:"li"},"mail"))),(0,a.kt)("p",null,"TODO/FIXME: moar explanations? What is missing?"),(0,a.kt)("h2",{id:"sso-integration"},"SSO integration"),(0,a.kt)("p",null,"Internally, SSOwat will on-the-fly inject ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP Basic Auth Headers")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Basic <base64credentials>"),". Some applications may include Basic Auth support out of the box... PHP apps do often require this line in the NGINX config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"fastcgi_param REMOTE_USER     $remote_user;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$remote_user")," being a special variable in NGINX that maps to the user provided in the HTTP Basic Auth headers. The PHP application will then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_REMOTE_USER")," info in its code."),(0,a.kt)("p",null,"TODO/FIXME: moar explanations of how this is done for non-PHP apps?"),(0,a.kt)("h2",{id:"configuring-ssowat-permissions-for-the-app"},"Configuring SSOwat permissions for the app"),(0,a.kt)("p",null,"SSOwat permissions are configured using the 'permission' resource in your app's manifest.toml"),(0,a.kt)("p",null,'If relevant, you can create "sub" permissions for your app, for instance to only allow a specific group of people to access the admin UI of the app. For example:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[resources.permissions]\n\n# This configures the main permission, i.e. general access to `https://domain.tld/$app/`\n# Initial access is defined using the `init_main_permission` install question.\nmain.url = "/"\n\n# This configures an additional "admin" permission regarding access to `https://domain.tld/$app/admin`\nadmin.url = "/admin"\nadmin.show_tile = false    # This means that this permission won\'t correspond to a tile in YunoHost\'s user portal\nadmin.allowed = "admins"   # Initialize the access for the "admins" group ... You can also use an install question called `init_admin_permission` to let the server admin choose this.\n')),(0,a.kt)("p",null,"See the page about app resources for the full description of behavior and properties."),(0,a.kt)("h2",{id:"logging-out-on-the-app-vs-logging-out-of-yunohost"},"Logging out on the app vs. Logging out of YunoHost"),(0,a.kt)("p",null,"A common ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/issues/issues/501"},"known issue")," is that sometimes, logging out of YunoHost apps will not log people out of every app. This is for example the case for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/nextcloud_ynh/issues/19"},"Nextcloud"),", because it uses its own authentication cookies which are not cleared when people log out of YunoHost. This is not trivial to fix."),(0,a.kt)("p",null,"Similarly, logging out of the app doesn't necessarily log people from YunoHost entirely (which is more acceptable that clicking Log out and... not being logged out at all because you're still logged-in on the SSO, hence logged in on the app). Some YunoHost app do integrate custom patches such that the logout process of the app does automatically redirects to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://domain.tld/yunohost/sso/?action=logout")," which logs them out."))}d.isMDXComponent=!0}}]);