"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[3891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Writing the app manifest",template:"docs",taxonomy:{category:["docs"]},routes:{default:"/packaging_manifest"}},l=void 0,r={unversionedId:"contribute/packaging_apps/manifest",id:"contribute/packaging_apps/manifest",title:"Writing the app manifest",description:"The app's manifest.toml can be seen as the ID card of the app. It declares various basic metadata such as the id, name, description of the app, its version, install questions to be asked to the admin prior to installation, etc.",source:"@site/docs/06.contribute/10.packaging_apps/10.manifest.md",sourceDirName:"06.contribute/10.packaging_apps",slug:"/contribute/packaging_apps/manifest",permalink:"/yunodocusaurus/ar/docs/contribute/packaging_apps/manifest",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/10.manifest.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Writing the app manifest",template:"docs",taxonomy:{category:["docs"]},routes:{default:"/packaging_manifest"}},sidebar:"tutorialSidebar",previous:{title:"Introduction to packaging",permalink:"/yunodocusaurus/ar/docs/contribute/packaging_apps/"},next:{title:"Writing app scripts",permalink:"/yunodocusaurus/ar/docs/contribute/packaging_apps/scripts"}},s={},p=[{value:"General information",id:"general-information",level:2},{value:"Upstream section",id:"upstream-section",level:2},{value:"Integration section",id:"integration-section",level:2},{value:"Install questions",id:"install-questions",level:2},{value:"Regarding install question types",id:"regarding-install-question-types",level:3},{value:"Resource system",id:"resource-system",level:2},{value:"List of app resources",id:"list-of-app-resources",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The app's ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.toml")," can be seen as the ID card of the app. It declares various basic metadata such as the id, name, description of the app, its version, install questions to be asked to the admin prior to installation, etc."),(0,i.kt)("p",null,"In this page, the data are described according to a somewhat dummy app called ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld")),(0,i.kt)("p",null,"!!! If you want to convert an application from the packaging v1 to v2 format, ",(0,i.kt)("a",{parentName:"p",href:"/packaging_v2"},"please see here"),"!"),(0,i.kt)("h2",{id:"general-information"},"General information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'packaging_format = 2\nid = "helloworld"\nname = "Hello World"\ndescription.en = "A dummy basic app to illustrate YunoHost\'s app packaging."\ndescription.fr = "Une app simple et bidon pour illustrer comme le packaging d\'app de YunoHost fonctionne"\n\nversion = "0.1~ynh1"\n\nmaintainers = ["alexAubin"]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packaging_format")," (",(0,i.kt)("inlineCode",{parentName:"li"},"int"),') is the packaging version format used to package this app. Newly packaged apps are strongly encouraged to use the new "v2" format (starting with YunoHost 11.1) while older apps may still be in "v1" format.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") is expected to be lower-case alphanumeric (and possibly ",(0,i.kt)("inlineCode",{parentName:"li"},"-"),"). This is what will be used for instance in the syntax ",(0,i.kt)("inlineCode",{parentName:"li"},"yunohost app install <app_id>"),". This will also be the name of various folder or conf files such as ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/yunohost/apps/<app_id>")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/nginx/conf.d/<domain>.d/<app_id>.conf")," (if applicable), and a dedicated system user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") is the display name of the app, shown for example in the webadmin UI or user portal. It is limited to 22 chars ",(0,i.kt)("small",null,"(though not sure why this number?)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," (",(0,i.kt)("inlineCode",{parentName:"li"},"dict")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"lang code"),"->",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") contains ",(0,i.kt)("em",{parentName:"li"},"short"),", ",(0,i.kt)("em",{parentName:"li"},"concise")," descriptions of the app in different languages (at least ",(0,i.kt)("inlineCode",{parentName:"li"},"en"),"). It is limited to 150 chars. It will be displayed on the app catalog and should allow people to understand what this app is about at a glance. A more extensive description of the app can be provided in ",(0,i.kt)("inlineCode",{parentName:"li"},"doc/DESCRIPTION.md"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") is composed of the ",(0,i.kt)("em",{parentName:"li"},"upstream")," version of the app shipped, and an ",(0,i.kt)("inlineCode",{parentName:"li"},"~ynhX")," suffix. Changing this version is what effectively triggers an available upgrade for YunoHost instances which installed this package (hence no upgrade will be displayed as available if you forget to change it). The point of the ",(0,i.kt)("inlineCode",{parentName:"li"},"~ynhX")," suffix is to have a way to increment the version when commiting changes unrelated to the upstream but still trigger an upgrade."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maintainers")," (",(0,i.kt)("inlineCode",{parentName:"li"},"list")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") may allow to declare which person should be the referring person for this package (though packages are often maintained collectively and not really used in practice). This should contain a list of easily identifiable persons (eg your Github or Matrix username)")),(0,i.kt)("h2",{id:"upstream-section"},"Upstream section"),(0,i.kt)("p",null,"This section is meant to provide various metadata about the app upstream such that YunoHost admins can easily obtain further information regarding this app (or, kinda important, try the upstream's demo before deciding to install it)."),(0,i.kt)("p",null,"Apart from the license, all fields are ",(0,i.kt)("em",{parentName:"p"},"optional")," and should only be provided if they are relevant (e.g. don't provide ",(0,i.kt)("inlineCode",{parentName:"p"},"website")," if the upstream project has no website...)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[upstream]\nlicense = "WTFPL"\nwebsite = "https://www.hello-world.com/"\ncode = "https://github.com/octocat/Hello-World"\ndemo = ...\nadmindoc = ...\nuserdoc = ...\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"license")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") : the license code of the ",(0,i.kt)("em",{parentName:"li"},"upstream")," project. (Note that only apps based on free software will be accepted in the official YunoHost app catalog.). The license code should be ",(0,i.kt)("a",{parentName:"li",href:"https://spdx.org/licenses/"},"a valid SPDX identified"),"."),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"website")," (",(0,i.kt)("inlineCode",{parentName:"li"},"url"),") : the url of the upstream project's website, if there is indeed a website (please don't just copypasta the git repo url)"),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"demo")," (",(0,i.kt)("inlineCode",{parentName:"li"},"url"),") : an url where people can try out the app before installing it (ideally maintained by the upstream project)"),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," (",(0,i.kt)("inlineCode",{parentName:"li"},"url"),') : the url of the upstream project\'s code repository, which is very much expected to exist for free software ... but may not exist for special "no upstream" apps ;)'),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"admindoc")," (",(0,i.kt)("inlineCode",{parentName:"li"},"url"),") : the url of the ",(0,i.kt)("em",{parentName:"li"},"upstream")," project's admin documentation, which may help YunoHost admins with adminstrating the app ",(0,i.kt)("small",null,"(YunoHost-specific documentation can be provided in ",(0,i.kt)("inlineCode",{parentName:"li"},"doc/ADMIN.md"),")"),"."),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"userdoc")," (",(0,i.kt)("inlineCode",{parentName:"li"},"url"),") : the url of the ",(0,i.kt)("em",{parentName:"li"},"upstream")," project's user documentation, which may help YunoHost end-users with effectively using the app."),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"cpe")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") corresponds to the ",(0,i.kt)("a",{parentName:"li",href:"https://nvd.nist.gov/products/cpe"},"Common Platform Enumerations code in NIST db"),". For example for Wekan this is ",(0,i.kt)("inlineCode",{parentName:"li"},"cpe:2.3:a:wekan_project:wekan"),". Not really used at the moment, but may be used in the future to check for known vulnerabilities (CVE) in the app catalog.")),(0,i.kt)("h2",{id:"integration-section"},"Integration section"),(0,i.kt)("p",null,"This section is meant to contain info related to the relation between the app and YunoHost, or things like typical resource usage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[integration]\nyunohost = ">= 11.1"\narchitectures = "all"\nmulti_instance = false\nldap = "not_relevant"\nsso = "not_relevant"\ndisk = "1M"\nram.build = "1M"\nram.runtime = "1M"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yunohost")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),") contains the minimum YunoHost version required for this app to work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"architectures")," : ",(0,i.kt)("inlineCode",{parentName:"li"},'"all"')," OR a list of supported archs using the ",(0,i.kt)("inlineCode",{parentName:"li"},"dpkg --print-architecture")," nomenclature, i.e. among : ",(0,i.kt)("inlineCode",{parentName:"li"},"amd64")," (= x86 64bit), ",(0,i.kt)("inlineCode",{parentName:"li"},"i386")," (= x86 32bit), ",(0,i.kt)("inlineCode",{parentName:"li"},"armhf")," (= ARM 32bit), ",(0,i.kt)("inlineCode",{parentName:"li"},"arm64")," (= ARM 64bit)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multi_instance")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),") : wether or not the app supports being installed multiple time ",(0,i.kt)("small",null,"(in which case, during installation, the actual app id is not just the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the manifest, but something like ",(0,i.kt)("inlineCode",{parentName:"li"},"hellowold__2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"helloworld__3"),", etc. for subsequent installs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ldap")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," OR ",(0,i.kt)("inlineCode",{parentName:"li"},'"not_relevant"'),") :  not to confused with the ",(0,i.kt)("inlineCode",{parentName:"li"},"sso")," key : this corresponds to wether or not the app is configured to use YunoHost's LDAP DB as the user account DB. This should be set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"not_relevant"')," if and only if there is no notion of user account for this app (for example, Hextris). LDAP integration is often a prerequisite for the SSO to work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sso")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," OR ",(0,i.kt)("inlineCode",{parentName:"li"},'"not_relevant"'),") : not to be confused with the ",(0,i.kt)("inlineCode",{parentName:"li"},"ldap")," key : this corresponds to wether or not a user is ",(0,i.kt)("em",{parentName:"li"},"automatically logged-in")," on the app when logged-in on the YunoHost portal. This should be set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"not_relevant"')," if and only if there is no notion of user account for this app (for example, Hextris)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disk")," (size) : an ",(0,i.kt)("em",{parentName:"li"},"estimate")," minimum disk requirement. For example: 20M, 400M, 1G, ..."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ram.build")," (size) : an ",(0,i.kt)("em",{parentName:"li"},"estimate")," minimum ram requirement when building the app (this may be way different than ",(0,i.kt)("inlineCode",{parentName:"li"},"ram.runtime")," because some apps have a peak 1~2G RAM when building sometimes...). For example: 50M, 400M, 1G, ..."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ram.runtime")," (size) : an ",(0,i.kt)("em",{parentName:"li"},"estimate")," minimum ram requirement when the app is active and running. For example: 50M, 400M, 1G, ...")),(0,i.kt)("h2",{id:"install-questions"},"Install questions"),(0,i.kt)("p",null,"This section contains questions that should be asked to the admin prior to starting the actual install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[install]\n    [install.domain]\n    # this is a generic question - ask strings are automatically handled by YunoHost\'s core\n    type = "domain"\n\n    [install.path]\n    # this is a generic question - ask strings are automatically handled by YunoHost\'s core\n    type = "path"\n    default = "/helloworld"\n\n    [install.init_main_permission]\n    # this is a generic question - ask strings are automatically handled by YunoHost\'s core\n    type = "group"\n    default = "visitors"\n\n    [install.prefered_pet]\n    ask.en = "Do you prefer cats or dogs?"\n    help.en = "Think carefully!"\n    type = "string"\n    choices.cat = "Cats :3 !"\n    choices.dog = "Doggos <3"\n    choices.both = "OMG Both ! I can\'t choose !"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domain")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," (with ",(0,i.kt)("inlineCode",{parentName:"li"},'type = "domain"/"path"'),") are classic questions to allow the admin to choose where the app is installed (in terms of web url endpoint)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. if the admin answers ",(0,i.kt)("inlineCode",{parentName:"li"},"domain.tld")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"/foobar"),", the app will be available under ",(0,i.kt)("inlineCode",{parentName:"li"},"domain.tld/foobar")),(0,i.kt)("li",{parentName:"ul"},'some webapp do require a full dedicated domain and do not support the "subpath" install scheme. In that case, you typically want to remove the ',(0,i.kt)("inlineCode",{parentName:"li"},"path")," question entirely"),(0,i.kt)("li",{parentName:"ul"},"these questions are part of YunoHost's generic app questions and therefore you do not need to define the ",(0,i.kt)("inlineCode",{parentName:"li"},"ask.en"),' strings that contain the actual question displayed in the UI along the line of "Choose a domain to install this app on"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init_main_permission")," is also a classic question ",(0,i.kt)("small",null,"(similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"is_public")," in v1 packaging)")," and define what user group will be able to access the app after it is installed. Typical answer are : ",(0,i.kt)("inlineCode",{parentName:"li"},"visitors"),' (= everybody including anonymous users, the app is "public"), ',(0,i.kt)("inlineCode",{parentName:"li"},"all_users"),' (= only people with a YunoHost account, the app is "private"), or any custom user group that may have been defined by the YunoHost admins prior to the install.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefered_pet")," is a custom question:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ask.en")," defines the human-readable question to be asked (at least the english version)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help.en")," is an optional additional message to provide further info about this question"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," is the type of question, in this case ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"in this example, we don't want a free user input but choosing between ",(0,i.kt)("inlineCode",{parentName:"li"},"cat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dog")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"both")," (with proper human-readable versions of these choices)"),(0,i.kt)("li",{parentName:"ul"},"this will later automatically create a yunohost app setting named ",(0,i.kt)("inlineCode",{parentName:"li"},"prefered_pet")),(0,i.kt)("li",{parentName:"ul"},".. and in the bash install script, the bash variable will automatically be available ",(0,i.kt)("inlineCode",{parentName:"li"},"$prefered_pet")," with the chosen value")))),(0,i.kt)("h3",{id:"regarding-install-question-types"},"Regarding install question types"),(0,i.kt)("p",null,"FIXME : This should be way more documented in a separate section (and is also related to config panels...)"),(0,i.kt)("p",null,"The full list of question types is : ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"select"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tags"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"domain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"group"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"range"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"markdown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"password"),"-type questions have special behavior and are NOT automatically saved as setting (user-chosen password should ideally not be stored, at least not hashed...)"),(0,i.kt)("p",null,"Every install question is not necessarily mandatory (e.g. a question to propose to add an api key for a better user experience, although the app still works without). To make those questions optional, just write ",(0,i.kt)("inlineCode",{parentName:"p"},"optional = true"),"."),(0,i.kt)("h2",{id:"resource-system"},"Resource system"),(0,i.kt)("p",null,"The resource section corresponds to recurring app needs that are to be provisioned/deprovisioned by the core of YunoHost. They include for example: downloading the app's sources, creating a system user, installing apt dependencies, creating the install dir, creating the data dir, finding an available internal port, configuring permissions, initializing an SQL database... Each resource is to be provisioned ",(0,i.kt)("em",{parentName:"p"},"before")," running the install script, deprovisioned ",(0,i.kt)("em",{parentName:"p"},"after")," the remove script, and automatically upgraded if needed before running the upgrade script (or provisionned if introduced in the new app version, or deprovisioned if removed w.r.t. the previous app version)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[resources]\n```toml\n    [resources.sources.main]\n    url = "https://some.domain/url/where/to/download/the/app/sources.tar.gz"\n    sha256 = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"\n\n    [resources.system_user]\n\n    [resources.install_dir]\n\n    [resources.permissions]\n    main.url = "/"\n    \n    [resources.apt]\n    packages = "nyancat, lolcat, sl"\n')),(0,i.kt)("p",null,"In this example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sources.main"),": the URL+checksum from which the app sources will be downloaded + validated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"system_user"),": a system (unix) user will be created for this app, using the app id as username."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"install_dir"),": an install dir will be initialized, named ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/www/$app")," by default. Additional ",(0,i.kt)("inlineCode",{parentName:"li"},"owner")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"group")," property allow to change the owner/group and r/w/x permissions on the created folder."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"permissions"),": an SSOwat ",(0,i.kt)("inlineCode",{parentName:"li"},"$app.main")," permission will be initialized such that the SSO allows access to the app's endpoint according to the chosen ",(0,i.kt)("inlineCode",{parentName:"li"},"init_main_permission")," question. The ",(0,i.kt)("inlineCode",{parentName:"li"},'main.url = "/"'),' is here to tell that the main endpoint is the "root" of the app, that is ',(0,i.kt)("inlineCode",{parentName:"li"},"https://domain.tld/helloworld/")," if the app is installed with ",(0,i.kt)("inlineCode",{parentName:"li"},"domain=domain.tld")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"path=/helloworld")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apt"),": the packages ",(0,i.kt)("inlineCode",{parentName:"li"},"nyancat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lolcat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sl")," will be installed with ",(0,i.kt)("inlineCode",{parentName:"li"},"apt"),". These are just dummy apt dependencies to illustrate the syntax.")),(0,i.kt)("h3",{id:"list-of-app-resources"},"List of app resources"),(0,i.kt)("p",null,"The full documentation on resources is available ",(0,i.kt)("a",{parentName:"p",href:"/packaging_apps_resources"},"here"),"."))}u.isMDXComponent=!0}}]);