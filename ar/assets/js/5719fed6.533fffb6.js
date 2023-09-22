"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),r=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=r(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=r(a),m=i,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var r=2;r<o;r++)l[r]=a[r];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var n=a(87462),i=(a(67294),a(3905));const o={title:"Applications",template:"docs",taxonomy:{category:"docs"},"page-toc":{active:!0},routes:{default:"/apps_overview"}},l=void 0,s={unversionedId:"administer/admin_guide/apps",id:"administer/admin_guide/apps",title:"Applications",description:'One of the key feature of YunoHost is the ability to easily install applications which are then immediately usable. Example of applications include a blog system, a "cloud" (to host and sync files), a website, an RSS reader...',source:"@site/docs/02.administer/15.admin_guide/30.apps.md",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/apps",permalink:"/yunodocusaurus/ar/docs/administer/admin_guide/apps",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/30.apps.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Applications",template:"docs",taxonomy:{category:"docs"},"page-toc":{active:!0},routes:{default:"/apps_overview"}},sidebar:"tutorialSidebar",previous:{title:"Certificate",permalink:"/yunodocusaurus/ar/docs/administer/admin_guide/domains/certificate"},next:{title:"Web server with NGINX",permalink:"/yunodocusaurus/ar/docs/administer/admin_guide/nginx"}},p={},r=[{value:"Installing an app",id:"installing-an-app",level:2},{value:"Subpaths vs. individual domains per apps",id:"subpaths-vs-individual-domains-per-apps",level:3},{value:"User access management and public apps",id:"user-access-management-and-public-apps",level:3},{value:"Instructions after installation",id:"instructions-after-installation",level:3},{value:"Multi-instance applications",id:"multi-instance-applications",level:3},{value:"LDAP / SSO integration",id:"ldap--sso-integration",level:2},{value:"Application configuration",id:"application-configuration",level:2},{value:"Configuration panels",id:"configuration-panels",level:3},{value:"Execute commands within the app",id:"execute-commands-within-the-app",level:2},{value:"Applications packaging",id:"applications-packaging",level:2},{value:"Integration and quality levels",id:"integration-and-quality-levels",level:3}],u={toc:r},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'One of the key feature of YunoHost is the ability to easily install applications which are then immediately usable. Example of applications include a blog system, a "cloud" (to host and sync files), a website, an RSS reader...'),(0,i.kt)("p",null,"Applications can be installed and managed through the webadmin interface in ",(0,i.kt)("inlineCode",{parentName:"p"},"[fa=cubes /] Applications")," or through commands of the ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost app")," category."),(0,i.kt)("p",null,"[center]","\n",(0,i.kt)("img",{parentName:"p",src:"image://apps_list.png?resize=512&classes=caption",alt:"Apps list",title:"Apps list in the webadmin, with its Install button."}),"\n","[/center]"),(0,i.kt)("p",null,"The application catalog and its categories can be browsed directly from the webadmin by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"[fa=plus /] Install")," button in the apps list, or from this documentation."),(0,i.kt)("p",null,"FIXME:"),(0,i.kt)("p",null,"! Be careful and stay reasonable on the number of installed applications. Each additional installation increases the attack surface and the risk of failure. Ideally, if you want to test, do it with another instance for example in ",(0,i.kt)("a",{parentName:"p",href:"/install/hardware:virtualbox"},"a virtual machine"),"."),(0,i.kt)("h2",{id:"installing-an-app"},"Installing an app"),(0,i.kt)("p",null,"Let's say you want to install a ",(0,i.kt)("em",{parentName:"p"},"Custom Webapp"),". Before actually running the installation steps, YunoHost will usually have you fill in a form to properly set it up for you."),(0,i.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="From the webadmin"]'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"image://app_install_form.png?resize=512&classes=caption",alt:"Custom Webapp install form",title:"Pre-installation form of the Custom Webapp"})),(0,i.kt)("p",null,'[/ui-tab][ui-tab title="From the command line"]'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"image://app_install_form_cli.png?resize=512&classes=caption",alt:"Custom Webapp install form in CLI",title:"Pre-installation form of the Custom Webapp in CLI"})),(0,i.kt)("p",null,"[/ui-tab][/ui-tabs]"),(0,i.kt)("h3",{id:"subpaths-vs-individual-domains-per-apps"},"Subpaths vs. individual domains per apps"),(0,i.kt)("p",null,"Among specific questions, forms usually ask you to choose a domain and a path onto which the app will be accessible."),(0,i.kt)("p",null,'In the context of YunoHost, it is quite common to have a single (or a few) domains on which several apps are installed in "subpaths", so that you end up with something like this: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yolo.com\n     \u251c\u2500\u2500 /blog  : Wordpress (a blog)\n     \u251c\u2500\u2500 /cloud : Nextcloud (a cloud service)\n     \u251c\u2500\u2500 /rss   : TinyTiny RSS (a RSS reader)\n     \u251c\u2500\u2500 /wiki  : DokuWiki (a wiki)\n")),(0,i.kt)("p",null,"Alternatively, you may choose to install each (or some) apps on a dedicated domain. Beyond the aesthetic, using sub-domains instead of sub-paths allows the possibility to move a service to another server more easily. Also, some applications may need an entire domain dedicated to them, for technical reasons. The disadvantage is that you have to add a new domain each time, and therefore potentially configure additional DNS records, restart the diagnostics and install a new Let's Encrypt certificate."),(0,i.kt)("p",null,"This might look prettier for end users, but is generally considered more complicated and less efficient in the context of YunoHost, since you need to add a new domain each time. Nevertheless, some apps might need an entire domain dedicated to them, for technical reasons."),(0,i.kt)("p",null,"If all apps from the previous example were installed on a separate domain, this would give something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"blog.yolo.com  : Wordpress (a blog)\ncloud.yolo.com : Nextcloud (a cloud service)\nrss.yolo.com   : TinyTiny RSS (a RSS reader)\nwiki.yolo.com  : DokuWiki (a wiki)\n")),(0,i.kt)("p",null,"!!! Many applications integrate a feature that allows you to change the URL of your application. This choice between subpath and subdomain can be reversed in some cases via a simple manipulation in the administration interface."),(0,i.kt)("h3",{id:"user-access-management-and-public-apps"},"User access management and public apps"),(0,i.kt)("p",null,"The installation form usually asks whether or not the app should be publically accessible. If you choose to not make it public, only users logged in YunoHost will be able to reach it."),(0,i.kt)("p",null,"!!!! After installation, this can be configured via the webadmin in the ",(0,i.kt)("a",{parentName:"p",href:"/groups_and_permissions"},"Groups and permissions panel"),", or similarly via the command-line subcategory ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost user permission"),"."),(0,i.kt)("h3",{id:"instructions-after-installation"},"Instructions after installation"),(0,i.kt)("p",null,"Some applications need to give you instructions, URLs or credentials once they are installed. So remember to check the email of the first user account or the admin user selected before installation, if it was prompted."),(0,i.kt)("h3",{id:"multi-instance-applications"},"Multi-instance applications"),(0,i.kt)("p",null,"Some applications support the ability to be installed several times (at different locations) ! To do so, just go another time in ",(0,i.kt)("inlineCode",{parentName:"p"},"Applications > [fa=plus /] Install"),", and select again the application to install."),(0,i.kt)("h2",{id:"ldap--sso-integration"},"LDAP / SSO integration"),(0,i.kt)("p",null,"Applications that allow users to register may support integration with the LDAP / Single Sign On of YunoHost, so that users who connect to the user portal can be automatically logged in all these apps."),(0,i.kt)("p",null,"However, some applications do not support this as it can be either not implemented in the upstream, or the package does not work on this part yet. This information is usually available on the README of the application package."),(0,i.kt)("h2",{id:"application-configuration"},"Application configuration"),(0,i.kt)("p",null,"After installation, some settings handled by YunoHost can be tweaked, such as user and group permissions, application's tile and label in the SSO page, or its access URL."),(0,i.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="From the webadmin"]'),(0,i.kt)("p",null,"You can access the app's operations page by clicking its name in the applications list."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"image://app_config_operations.png?resize=768&classes=caption",alt:"Application operations page",title:"Application operations page in the webadmin"})),(0,i.kt)("p",null,"You can also delete the application from this page."),(0,i.kt)("p",null,'[/ui-tab][ui-tab title="From the command line"]'),(0,i.kt)("p",null,"From the command line, you can change:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the app's label in the SSO: ",(0,i.kt)("inlineCode",{parentName:"li"},"yunohost app change-label <app> <new_label>")),(0,i.kt)("li",{parentName:"ul"},"the app's url: ",(0,i.kt)("inlineCode",{parentName:"li"},"yunohost app change-url app [-d <DOMAIN>] [-p <PATH>]"))),(0,i.kt)("p",null,"You can also delete the app: ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost app remove <app>")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<app>")," is to be replaced with the app's ID. If this is the first instance of the app, like Nextcloud, the ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"nextcloud"),". If this is the second, then it's ",(0,i.kt)("inlineCode",{parentName:"p"},"nextcloud__2")," and so on. To list all your apps and check their ID, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost app info"),"."),(0,i.kt)("p",null,"[/ui-tab][/ui-tabs]"),(0,i.kt)("h3",{id:"configuration-panels"},"Configuration panels"),(0,i.kt)("p",null,"Some apps include a ",(0,i.kt)("em",{parentName:"p"},"configuration panel"),", which features actions and settings specific for each app that they usually do not handle themselves. They can also spare you the need for altering configuration files by hand."),(0,i.kt)("p",null,"!!!! Configuration panels are ",(0,i.kt)("em",{parentName:"p"},"not")," meant to tweak every aspects of the apps. You will surely use their own administration panels more often than YunoHost's configuration panels."),(0,i.kt)("p",null,'[ui-tabs position="top-left" active="0" theme="lite"][ui-tab title="From the webadmin"]'),(0,i.kt)("p",null,"The configuration panels are accessible in the webadmin in their operations page, trough the ",(0,i.kt)("inlineCode",{parentName:"p"},"[fa=cogs /] Config panel")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"image://app_config_panel.png?resize=768&classes=caption",alt:"My Webapp configuration panel",title:"Configuration panel for My Webapp"})),(0,i.kt)("p",null,'[/ui-tab][ui-tab title="From the command line"]'),(0,i.kt)("p",null,"From the command line, you can list the configuration panel settings with the following command: ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost app config get <app>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yunohost app config get my_webapp\nmain.php_fpm_config.phpversion:\n  ask: PHP version\n  value: none\nmain.sftp.password:\n  ask: Set a password for the SFTP access\n  value: **************\nmain.sftp.with_sftp:\n  ask: Do you need a SFTP access?\n  value: yes\n")),(0,i.kt)("p",null,"To change a setting, either use ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost app config set <app>")," to get prompted about all the settings, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost app config set <app> <key> -v <new_value>")," to alter a specific one."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>")," is the setting name, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"main.sftp.with_sftp")," from above."),(0,i.kt)("p",null,"[/ui-tab][/ui-tabs]"),(0,i.kt)("h2",{id:"execute-commands-within-the-app"},"Execute commands within the app"),(0,i.kt)("p",null,"Starting YunoHost v11.1.21.4, if you need to execute commands with the app's binary, or PHP commands, etc., you can execute the command ",(0,i.kt)("inlineCode",{parentName:"p"},"yunohost app shell <app>"),".\nIt will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"open a new Bash shell as the app's system user"),(0,i.kt)("li",{parentName:"ul"},"open the app's working directory (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/www/<app>"),")"),(0,i.kt)("li",{parentName:"ul"},"preload the environment with variables taken from the app's service, if it exists"),(0,i.kt)("li",{parentName:"ul"},"override ",(0,i.kt)("inlineCode",{parentName:"li"},"php"),", so that it points to the PHP version used by the app")),(0,i.kt)("h2",{id:"applications-packaging"},"Applications packaging"),(0,i.kt)("p",null,"Applications must be packaged manually by application packagers/maintainers. Apps can be integrated with YunoHost to support upgrades, backup/restore and LDAP/SSO integration among other things."),(0,i.kt)("p",null,"If you want to learn or contribute to app packaging, please check the ",(0,i.kt)("a",{parentName:"p",href:"/contributordoc"},"contributor documentation"),". "),(0,i.kt)("h3",{id:"integration-and-quality-levels"},"Integration and quality levels"),(0,i.kt)("p",null,"Automated tests are being run regularly to test the integration and quality of all apps who were declared to be ",(0,i.kt)("inlineCode",{parentName:"p"},"working")," by packagers. The result is a level between 0 and 8, whose meaning is detailed on ",(0,i.kt)("a",{parentName:"p",href:"/packaging_apps_levels"},"this page"),". Some tests results may also be available ",(0,i.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/branch/stable"},"on this dashboard"),"."),(0,i.kt)("p",null,"By default, only applications of sufficient quality are offered. When the quality of an application drops and until the problem is reolved, the app is hidden from the catalog to prevent its installation and its upgrades are put on hold."))}d.isMDXComponent=!0}}]);