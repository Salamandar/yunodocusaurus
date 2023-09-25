"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3741],{13899:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),i=a(67294),o=a(86010),l=a(97325),s=a(20107),r=a(83699);const p={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function c(e){let{as:t,id:a,...c}=e;const{navbar:{hideOnScroll:u}}=(0,s.L)();if("h1"===t||!a)return i.createElement(t,(0,n.Z)({},c,{id:void 0}));const d=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof c.children?c.children:a});return i.createElement(t,(0,n.Z)({},c,{className:(0,o.Z)("anchor",u?p.anchorWithHideOnScrollNavbar:p.anchorWithStickyNavbar,c.className),id:a}),c.children,i.createElement(r.Z,{className:"hash-link",to:`#${a}`,"aria-label":d,title:d},"\u200b"))}},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),i=a(67294),o=a(86010),l=a(72957),s=a(16550),r=a(75238),p=a(33609),c=a(92560);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,r._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[r,p]=h({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=r??u;return m({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var f=a(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:r,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==s&&(u(t),r(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},i.createElement(k,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return i.createElement(v,(0,n.Z)({key:String(t)},e))}},83730:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(79524);function o(e){let{src:t,caption:a}=e;return n.createElement("div",null,n.createElement("figure",{style:{padding:20}},n.createElement("img",{src:(0,i.Z)(t),alt:a}),n.createElement("figcaption",{style:{textAlign:"center",fontStyle:"italic"}},`${a}`)))}},13645:(e,t,a)=>{a.d(t,{CA:()=>s,D8:()=>c,Ki:()=>d,ZP:()=>o,d2:()=>u,kf:()=>p,pL:()=>r,px:()=>l});var n=a(67294),i=a(67814);function o(e){let{children:t,color:a,no_break:i}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.2rem",whiteSpace:i?"pre":null}},t)}function l(){return n.createElement(o,{no_break:!0,color:"green"},n.createElement(i.G,{icon:["fa","cogs"]})," Webadmin")}function s(){return n.createElement(o,{no_break:!0,color:"#1877F2"},n.createElement(i.G,{icon:["fa","cubes"]})," Applications")}function r(){return n.createElement(o,{no_break:!0,color:"green"},"+ Install")}function p(){return n.createElement(o,{no_break:!0,color:"darkgreen"},n.createElement(i.G,{icon:["fa","stethoscope"]})," Diagnosis")}function c(){return n.createElement(o,{no_break:!0,color:"#3a87ad"},"FFDN")}function u(){return n.createElement(o,{no_break:!0,color:"#32b643"},"Non Profit")}function d(){return n.createElement(o,{no_break:!0,color:"#f0980c"},"CHATONS")}},85869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var n=a(87462),i=a(67294),o=a(3905),l=a(73992),s=a(18679),r=a(83730),p=a(13645),c=a(83699);a(13899);function u(e){let{children:t,url:a,color:n}=e;return i.createElement(c.Z,{to:a},i.createElement("div",{style:{marginBottom:"1rem",backgroundColor:n,borderRadius:"4px",padding:"0.6rem",width:"auto",display:"inline-block",textAlign:"center",color:"black",mixBlendMode:"difference"}},t))}const d={title:"Applications",template:"docs",taxonomy:{category:"docs"},"page-toc":{active:!0},routes:{default:"/apps_overview"}},m=void 0,h={unversionedId:"administer/admin_guide/apps",id:"administer/admin_guide/apps",title:"Applications",description:'One of the key feature of YunoHost is the ability to easily install applications which are then immediately usable. Example of applications include a blog system, a "cloud" (to host and sync files), a website, an RSS reader...',source:"@site/docs/02.administer/15.admin_guide/30.apps.mdx",sourceDirName:"02.administer/15.admin_guide",slug:"/administer/admin_guide/apps",permalink:"/yunodocusaurus/docs/administer/admin_guide/apps",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/15.admin_guide/30.apps.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Applications",template:"docs",taxonomy:{category:"docs"},"page-toc":{active:!0},routes:{default:"/apps_overview"}},sidebar:"docsSidebar",previous:{title:"Certificate",permalink:"/yunodocusaurus/docs/administer/admin_guide/domains/certificate"},next:{title:"Web server with NGINX",permalink:"/yunodocusaurus/docs/administer/admin_guide/nginx"}},g={},f=[{value:"Installing an app",id:"installing-an-app",level:2},{value:"Subpaths vs. individual domains per apps",id:"subpaths-vs-individual-domains-per-apps",level:3},{value:"User access management and public apps",id:"user-access-management-and-public-apps",level:3},{value:"Instructions after installation",id:"instructions-after-installation",level:3},{value:"Multi-instance applications",id:"multi-instance-applications",level:3},{value:"LDAP / SSO integration",id:"ldap--sso-integration",level:2},{value:"Application configuration",id:"application-configuration",level:2},{value:"Configuration panels",id:"configuration-panels",level:3},{value:"Execute commands within the app",id:"execute-commands-within-the-app",level:2},{value:"Applications packaging",id:"applications-packaging",level:2},{value:"Integration and quality levels",id:"integration-and-quality-levels",level:3}],b={toc:f},k="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'One of the key feature of YunoHost is the ability to easily install applications which are then immediately usable. Example of applications include a blog system, a "cloud" (to host and sync files), a website, an RSS reader...'),(0,o.kt)("p",null,"Applications can be installed and managed through the webadmin interface in ",(0,o.kt)(p.CA,{mdxType:"HighlightApplications"})," or through commands of the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app")," category."),(0,o.kt)(r.Z,{alt:"Apps list",caption:"Apps list in the webadmin, with its Install button.",src:"/img/grav/apps_list.png",mdxType:"Figure"}),(0,o.kt)("p",null,"The application catalog and its categories can be browsed directly from the webadmin by clicking on the ",(0,o.kt)(p.pL,{mdxType:"HighlightAppInstall"})," button in the apps list, or from this documentation."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)(u,{url:"https://apps.yunohost.org",color:"orange",mdxType:"LinkButton"},(0,o.kt)("icon",{icon:"fa-cubes"})," Applications Catalog")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be careful and stay reasonable on the number of installed applications. Each additional installation increases the attack surface and the risk of failure. Ideally, if you want to test, do it with another instance for example in ",(0,o.kt)("a",{parentName:"p",href:"/install/hardware:virtualbox"},"a virtual machine"),".")),(0,o.kt)("h2",{id:"installing-an-app"},"Installing an app"),(0,o.kt)("p",null,"Let's say you want to install a ",(0,o.kt)("em",{parentName:"p"},"Custom Webapp"),". Before actually running the installation steps, YunoHost will usually have you fill in a form to properly set it up for you."),(0,o.kt)(l.Z,{groupId:"admin-commands",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"web",label:"From the web interface",mdxType:"TabItem"},(0,o.kt)(r.Z,{alt:"Custom Webapp install form",src:"/img/grav/app_install_form.png",caption:"Pre-installation form of the Custom Webapp",mdxType:"Figure"})),(0,o.kt)(s.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,o.kt)(r.Z,{alt:"Custom Webapp install form in CLI",src:"/img/grav/app_install_form_cli.png",caption:"Pre-installation form of the Custom Webapp in CLI",mdxType:"Figure"}))),(0,o.kt)("h3",{id:"subpaths-vs-individual-domains-per-apps"},"Subpaths vs. individual domains per apps"),(0,o.kt)("p",null,"Among specific questions, forms usually ask you to choose a domain and a path onto which the app will be accessible."),(0,o.kt)("p",null,'In the context of YunoHost, it is quite common to have a single (or a few) domains on which several apps are installed in "subpaths", so that you end up with something like this: '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"yolo.com\n  \u251c\u2500\u2500 /blog  : Wordpress (a blog)\n  \u251c\u2500\u2500 /cloud : Nextcloud (a cloud service)\n  \u251c\u2500\u2500 /rss   : TinyTiny RSS (a RSS reader)\n  \u251c\u2500\u2500 /wiki  : DokuWiki (a wiki)\n")),(0,o.kt)("p",null,"Alternatively, you may choose to install each (or some) apps on a dedicated domain. Beyond the aesthetic, using sub-domains instead of sub-paths allows the possibility to move a service to another server more easily. Also, some applications may need an entire domain dedicated to them, for technical reasons. The disadvantage is that you have to add a new domain each time, and therefore potentially configure additional DNS records, restart the diagnostics and install a new Let's Encrypt certificate."),(0,o.kt)("p",null,"This might look prettier for end users, but is generally considered more complicated and less efficient in the context of YunoHost, since you need to add a new domain each time. Nevertheless, some apps might need an entire domain dedicated to them, for technical reasons."),(0,o.kt)("p",null,"If all apps from the previous example were installed on a separate domain, this would give something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"blog.yolo.com  : Wordpress (a blog)\ncloud.yolo.com : Nextcloud (a cloud service)\nrss.yolo.com   : TinyTiny RSS (a RSS reader)\nwiki.yolo.com  : DokuWiki (a wiki)\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Many applications integrate a feature that allows you to change the URL of your application. This choice between subpath and subdomain can be reversed in some cases via a simple manipulation in the administration interface.")),(0,o.kt)("h3",{id:"user-access-management-and-public-apps"},"User access management and public apps"),(0,o.kt)("p",null,"The installation form usually asks whether or not the app should be publically accessible. If you choose to not make it public, only users logged in YunoHost will be able to reach it."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"After installation, this can be configured via the webadmin in the ",(0,o.kt)("a",{parentName:"p",href:"/groups_and_permissions"},"Groups and permissions panel"),", or similarly via the command-line subcategory ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost user permission"),".")),(0,o.kt)("h3",{id:"instructions-after-installation"},"Instructions after installation"),(0,o.kt)("p",null,"Some applications need to give you instructions, URLs or credentials once they are installed. So remember to check the email of the first user account or the admin user selected before installation, if it was prompted."),(0,o.kt)("h3",{id:"multi-instance-applications"},"Multi-instance applications"),(0,o.kt)("p",null,"Some applications support the ability to be installed several times (at different locations) ! To do so, just go another time in ",(0,o.kt)(p.CA,{mdxType:"HighlightApplications"})," \u2192 ",(0,o.kt)(p.pL,{mdxType:"HighlightAppInstall"}),", and select again the application to install."),(0,o.kt)("h2",{id:"ldap--sso-integration"},"LDAP / SSO integration"),(0,o.kt)("p",null,"Applications that allow users to register may support integration with the LDAP / Single Sign On of YunoHost, so that users who connect to the user portal can be automatically logged in all these apps."),(0,o.kt)("p",null,"However, some applications do not support this as it can be either not implemented in the upstream, or the package does not work on this part yet. This information is usually available on the README of the application package."),(0,o.kt)("h2",{id:"application-configuration"},"Application configuration"),(0,o.kt)("p",null,"After installation, some settings handled by YunoHost can be tweaked, such as user and group permissions, application's tile and label in the SSO page, or its access URL."),(0,o.kt)(l.Z,{groupId:"admin-commands",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"web",label:"From the web interface",mdxType:"TabItem"},(0,o.kt)("p",null,"You can access the app's operations page by clicking its name in the applications list."),(0,o.kt)(r.Z,{alt:"Application operations page",src:"/img/grav/app_config_operations.png",caption:"Application operations page in the webadmin",mdxType:"Figure"}),(0,o.kt)("p",null,"You can also delete the application from this page.")),(0,o.kt)(s.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,o.kt)("p",null,"From the command line, you can change:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the app's label in the SSO: ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost app change-label <app> <new_label>")),(0,o.kt)("li",{parentName:"ul"},"the app's url: ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost app change-url app [-d <DOMAIN>] [-p <PATH>]"))),(0,o.kt)("p",null,"You can also delete the app: ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app remove <app>")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<app>")," is to be replaced with the app's ID. If this is the first instance of the app, like Nextcloud, the ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"nextcloud"),". If this is the second, then it's ",(0,o.kt)("inlineCode",{parentName:"p"},"nextcloud__2")," and so on. To list all your apps and check their ID, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app info"),"."))),(0,o.kt)("h3",{id:"configuration-panels"},"Configuration panels"),(0,o.kt)("p",null,"Some apps include a ",(0,o.kt)("em",{parentName:"p"},"configuration panel"),", which features actions and settings specific for each app that they usually do not handle themselves. They can also spare you the need for altering configuration files by hand."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Configuration panels are ",(0,o.kt)("em",{parentName:"p"},"not")," meant to tweak every aspects of the apps. You will surely use their own administration panels more often than YunoHost's configuration panels.")),(0,o.kt)(l.Z,{groupId:"admin-commands",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"web",label:"From the web interface",mdxType:"TabItem"},(0,o.kt)("p",null,"The configuration panels are accessible in the webadmin in their operations page, trough the ",(0,o.kt)(p.ZP,{no_break:!0,color:"darkblue",mdxType:"Highlight"},(0,o.kt)("icon",{icon:"fa-cogs"})," Config panel")," button."),(0,o.kt)(r.Z,{alt:"My Webapp configuration panel",src:"/img/grav/app_config_panel.png",caption:"Configuration panel for My Webapp",mdxType:"Figure"})),(0,o.kt)(s.Z,{value:"cli",label:"From the command line",mdxType:"TabItem"},(0,o.kt)("p",null,"From the command line, you can list the configuration panel settings with the following command: ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app config get <app>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yunohost app config get my_webapp\nmain.php_fpm_config.phpversion:\n  ask: PHP version\n  value: none\nmain.sftp.password:\n  ask: Set a password for the SFTP access\n  value: **************\nmain.sftp.with_sftp:\n  ask: Do you need a SFTP access?\n  value: yes\n")),(0,o.kt)("p",null,"To change a setting, either use ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app config set <app>")," to get prompted about all the settings, or use ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app config set <app> <key> -v <new_value>")," to alter a specific one."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<key>")," is the setting name, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"main.sftp.with_sftp")," from above."))),(0,o.kt)("h2",{id:"execute-commands-within-the-app"},"Execute commands within the app"),(0,o.kt)("p",null,"Starting YunoHost v11.1.21.4, if you need to execute commands with the app's binary, or PHP commands, etc., you can execute the command ",(0,o.kt)("inlineCode",{parentName:"p"},"yunohost app shell <app>"),".\nIt will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"open a new Bash shell as the app's system user"),(0,o.kt)("li",{parentName:"ul"},"open the app's working directory (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/www/<app>"),")"),(0,o.kt)("li",{parentName:"ul"},"preload the environment with variables taken from the app's service, if it exists"),(0,o.kt)("li",{parentName:"ul"},"override ",(0,o.kt)("inlineCode",{parentName:"li"},"php"),", so that it points to the PHP version used by the app")),(0,o.kt)("h2",{id:"applications-packaging"},"Applications packaging"),(0,o.kt)("p",null,"Applications must be packaged manually by application packagers/maintainers. Apps can be integrated with YunoHost to support upgrades, backup/restore and LDAP/SSO integration among other things."),(0,o.kt)("p",null,"If you want to learn or contribute to app packaging, please check the ",(0,o.kt)("a",{parentName:"p",href:"/contributordoc"},"contributor documentation"),". "),(0,o.kt)("h3",{id:"integration-and-quality-levels"},"Integration and quality levels"),(0,o.kt)("p",null,"Automated tests are being run regularly to test the integration and quality of all apps who were declared to be ",(0,o.kt)("inlineCode",{parentName:"p"},"working")," by packagers. The result is a level between 0 and 8, whose meaning is detailed on ",(0,o.kt)("a",{parentName:"p",href:"/packaging_apps_levels"},"this page"),". Some tests results may also be available ",(0,o.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/branch/stable"},"on this dashboard"),"."),(0,o.kt)("p",null,"By default, only applications of sufficient quality are offered. When the quality of an application drops and until the problem is reolved, the app is hidden from the catalog to prevent its installation and its upgrades are put on hold."))}y.isMDXComponent=!0}}]);