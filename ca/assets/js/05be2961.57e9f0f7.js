"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Configuration panel for apps",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_config_panels"}},l=void 0,r={unversionedId:"contribute/packaging_apps/advanced/config_panels",id:"contribute/packaging_apps/advanced/config_panels",title:"Configuration panel for apps",description:"Configuration panels allow to let admins manage parameters or runs actions for which the upstream's app doesn't provide any appropriate UI itself. It's a good way to reduce manual change on config files and avoid conflicts on it.",source:"@site/docs/06.contribute/10.packaging_apps/60.advanced/20.config_panels.md",sourceDirName:"06.contribute/10.packaging_apps/60.advanced",slug:"/contribute/packaging_apps/advanced/config_panels",permalink:"/yunodocusaurus/ca/docs/contribute/packaging_apps/advanced/config_panels",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/60.advanced/20.config_panels.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Configuration panel for apps",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_config_panels"}},sidebar:"tutorialSidebar",previous:{title:"Publishing your app on the catalog",permalink:"/yunodocusaurus/ca/docs/contribute/packaging_apps/publishing"},next:{title:"SSO/LDAP integration",permalink:"/yunodocusaurus/ca/docs/contribute/packaging_apps/advanced/sso_ldap_integration"}},s={},p=[{value:"<code>config_panel.toml</code>&#39;s principle and general format",id:"config_paneltomls-principle-and-general-format",level:2},{value:"Questions short keys have to be unique",id:"questions-short-keys-have-to-be-unique",level:3},{value:"Supported questions types and properties",id:"supported-questions-types-and-properties",level:3},{value:"Reading and writing values",id:"reading-and-writing-values",level:3},{value:"<code>bind</code> property",id:"bind-property",level:3},{value:"Default behaviour",id:"default-behaviour",level:4},{value:"Read / write into a var of an actual configuration file",id:"read--write-into-a-var-of-an-actual-configuration-file",level:4},{value:"Read / write an entire file",id:"read--write-an-entire-file",level:4},{value:"Custom getter / setter",id:"custom-getter--setter",level:3},{value:"Getter",id:"getter",level:4},{value:"Setter",id:"setter",level:4},{value:"Validation",id:"validation",level:2},{value:"Other actions than read, validate and save",id:"other-actions-than-read-validate-and-save",level:2},{value:"Restart a service at the end",id:"restart-a-service-at-the-end",level:3},{value:"Overwrite config panel mechanism",id:"overwrite-config-panel-mechanism",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Configuration panels allow to let admins manage parameters or runs actions for which the upstream's app doesn't provide any appropriate UI itself. It's a good way to reduce manual change on config files and avoid conflicts on it."),(0,i.kt)("p",null,"Those panels can also be used to quickly create interfaces that extend the capabilities of YunoHost (e.g. VPN Client, Hotspost, Borg, etc.)."),(0,i.kt)("p",null,'! Please: Keep in mind the YunoHost spirit, and try to build your panels in such a way as to expose only really useful, "high-level" parameters, and if there are many of them, to relegate those corresponding to rarer use cases to "Advanced" sub-sections. Keep it simple, focus on common needs, don\'t expect the admins to have 3 PhDs in computer science.'),(0,i.kt)("h2",{id:"config_paneltomls-principle-and-general-format"},(0,i.kt)("inlineCode",{parentName:"h2"},"config_panel.toml"),"'s principle and general format"),(0,i.kt)("p",null,"To create configuration panels for apps, you should at least create a ",(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")," at the root of the package. For more complex cases, this TOML file can be paired with a ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," script inside the scripts directory of your package, which will handle specific controller logic."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")," describes one or several panels, containing sections, each containing questions generally binded to a params in the app's actual configuration files."),(0,i.kt)("p",null,"Let's imagine that the upstream app is configured using this simple ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file stored in the app's install directory (typically ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/$app/config.yml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"title: 'My dummy app'\ntheme: 'white'\nmax_rate: 10\nmax_age: 365\n")),(0,i.kt)("p",null,"We could for example create a simple configuration panel for it like this one, by following the syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"[PANEL.SECTION.QUESTION]"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'version = "1.0"\n[main]\n\n    [main.main]\n        [main.main.title]\n        ask.en = "Title"\n        type = "string"\n        bind = ":__INSTALL_DIR__/config.yml"\n\n        [main.main.theme]\n        ask.en = "Theme"\n        type = "select"\n        choices = ["white", "dark"]\n        bind = ":__INSTALL_DIR__/config.yml"\n\n        [main.limits]\n        [main.limits.max_rate]\n        ask.en = "Maximum display rate"\n        type = "number"\n        bind = ":__INSTALL_DIR__/config.yml"\n\n        [main.limits.max_age]\n        ask.en = "Duration of a dummy"\n        type = "number"\n        bind = ":__INSTALL_DIR__/config.yml"\n')),(0,i.kt)("p",null,"Here we have created one ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," panel, containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"limits")," sections, containing questions according to params name of our ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file. Thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," properties, all those questions are bind to their values in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file."),(0,i.kt)("h3",{id:"questions-short-keys-have-to-be-unique"},"Questions short keys have to be unique"),(0,i.kt)("p",null,"For performance reasons, questions short keys have to be unique in all the ",(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")," file, not just inside its panel or its section. Hence it's not possible to have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[manual.vpn.server_ip]\n[advanced.dns.server_ip]\n")),(0,i.kt)("p",null,'In which two questions have "real variable name" ',(0,i.kt)("inlineCode",{parentName:"p"},"is server_ip")," and therefore conflict with each other."),(0,i.kt)("p",null,"! Some short keys are forbidden cause it can interfer with config scripts (",(0,i.kt)("inlineCode",{parentName:"p"},"old"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file_hash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"types"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"binds"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"formats"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"changed"),") and you probably should avoid to use common settings name to avoid to bind your question to this settings (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"install_time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql_pwd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"domain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"db_name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"current_revision"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),")"),(0,i.kt)("h3",{id:"supported-questions-types-and-properties"},"Supported questions types and properties"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/dev/forms"},"the full list of questions types and properties")),(0,i.kt)("h3",{id:"reading-and-writing-values"},"Reading and writing values"),(0,i.kt)("p",null,"You can read and write values with 2 mechanisms: the ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")," and for complex use cases the getter/setter in a ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," script."),(0,i.kt)("h3",{id:"bind-property"},(0,i.kt)("inlineCode",{parentName:"h3"},"bind")," property"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," property allows to define where read and write the value bind to the question."),(0,i.kt)("h4",{id:"default-behaviour"},"Default behaviour"),(0,i.kt)("p",null,"If you did not define a specific getter/setter (see below), and no ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," argument was defined, YunoHost will read/write the value from/to the app's ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/yunohost/$app/settings.yml")," file."),(0,i.kt)("h4",{id:"read--write-into-a-var-of-an-actual-configuration-file"},"Read / write into a var of an actual configuration file"),(0,i.kt)("p",null,"If you want to read/write the value from/to the app's actual configural file (be it ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),"-like, JSON, YAML, INI, PHP, ",(0,i.kt)("inlineCode",{parentName:"p"},".py"),", ...):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[main.main.theme]\n# (other properties ommited)\nbind = ":__INSTALL_DIR__/config.yml"\n')),(0,i.kt)("p",null,"In which case, YunoHost will look for something like a key/value, with the key being ",(0,i.kt)("inlineCode",{parentName:"p"},"theme"),"."),(0,i.kt)("p",null,"If the question id in the config panel (here, ",(0,i.kt)("inlineCode",{parentName:"p"},"theme"),") differs from the key in the actual conf file (let's say it's not ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," but ",(0,i.kt)("inlineCode",{parentName:"p"},"css_theme"),"), then you can write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[main.main.theme]\n# (other properties ommited)\nbind = "css_theme:__FINALPATH__/config.yml"\n')),(0,i.kt)("p",null,"!!!! Note: This mechanism is quasi language agnostic and will use regexes to find something that looks like a key=value or common variants. However, it does assume that the key and value are stored on the same line. It doesn't support multiline text or file in a variable with this method. If you need to save multiline content in a configuration variable, you should create a custom getter/setter (see below)."),(0,i.kt)("p",null,"Nested syntax is also supported, which may be useful for example to remove ambiguities about stuff looking like: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "foo": {\n        "max": 123\n    },\n    "bar": {\n        "max": 456\n    }\n}\n')),(0,i.kt)("p",null,"which we can ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," to using: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'bind = "foo>max:__INSTALL_DIR__/conf.json"\n')),(0,i.kt)("h4",{id:"read--write-an-entire-file"},"Read / write an entire file"),(0,i.kt)("p",null,"Useful when using a question ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," for which you want to save the raw content directly as a file on the system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[main.main.logo]\n# (other properties ommited)\nbind = "__INSTALL_DIR__/img/logo.png"\n')),(0,i.kt)("h3",{id:"custom-getter--setter"},"Custom getter / setter"),(0,i.kt)("p",null,"Sometimes the ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," mechanism is not enough:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the config file format is not supported (e.g. xml, csv)"),(0,i.kt)("li",{parentName:"ul"},"the data is not contained in a config file (e.g. database, directory, web resources...)"),(0,i.kt)("li",{parentName:"ul"},"the data should be written but not read (e.g. password)"),(0,i.kt)("li",{parentName:"ul"},"the data should be read but not written (e.g. fetching status information)"),(0,i.kt)("li",{parentName:"ul"},"we want to change other things than the value (e.g. the choices list of a select)"),(0,i.kt)("li",{parentName:"ul"},"the question answer contains several values to dispatch in several places"),(0,i.kt)("li",{parentName:"ul"},"and so on")),(0,i.kt)("p",null,"You can create specific getter/setters functions inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/config")," of your app to customize how the information is read/written."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nsource /usr/share/yunohost/helpers\n\nynh_abort_if_errors\n\n# Put your getter, setter and validator here\n\n# Keep this last line\nynh_app_config_run $1\n")),(0,i.kt)("h4",{id:"getter"},"Getter"),(0,i.kt)("p",null,"A question's getter is the function used to read the current value/state. Custom getters are defined using bash functions called ",(0,i.kt)("inlineCode",{parentName:"p"},"getter__QUESTION_SHORT_KEY()")," which returns data through stdout. "),(0,i.kt)("p",null,"Stdout can generated using one of those formats:\n1) either a raw format, in which case the return is binded directly to the value of the question\n2) or a yaml format, in this case you dynamically provide properties for your question (for example the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," of an ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", the list of available ",(0,i.kt)("inlineCode",{parentName:"p"},"choices")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"select"),", etc.)"),(0,i.kt)("p",null,'[details summary="',(0,i.kt)("i",null,"Basic example with raw stdout: get the timezone on the system"),'" class="helper-card-subtitle text-muted"]'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[main.main.timezone]\nask = "Timezone"\ntype = "string"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scripts/config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'get__timezone() {\n    echo "$(cat /etc/timezone)"\n}\n')),(0,i.kt)("p",null,"[/details]"),(0,i.kt)("p",null,'[details summary="',(0,i.kt)("i",null,"Basic example with yaml-formated stdout : Display a list of available plugins"),'" class="helper-card-subtitle text-muted"]'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'        [main.plugins.plugins]\n        ask = "Plugin to activate"\n        type = "tags"\n        choices = []\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scripts/config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"get__plugins() {\n    echo \"choices: [$(ls $install_dir/plugins/ | tr '\\n' ',')]\"\n}\n")),(0,i.kt)("p",null,"[/details]"),(0,i.kt)("p",null,'[details summary="',(0,i.kt)("i",null,"Advanced example with yaml-formated stdout : Display the status of a VPN"),'" class="helper-card-subtitle text-muted"]'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'        [main.cube.status]\n        ask = "Custom getter alert"\n        type = "alert"\n        style = "info"\n        bind = "null" # no behaviour on\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scripts/config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'get__status() {\n    if [ -f "/sys/class/net/tun0/operstate" ] && [ "$(cat /sys/class/net/tun0/operstate)" == "up" ]\n    then\n    cat << EOF\nstyle: success\nask:\n  en: Your VPN is running :)\nEOF\n    else\n    cat << EOF\nstyle: danger\nask:\n  en: Your VPN is down\nEOF\n    fi\n}\n')),(0,i.kt)("p",null,"[/details]"),(0,i.kt)("h4",{id:"setter"},"Setter"),(0,i.kt)("p",null,"A question's setter is the function used to set new value/state. Custom setters are defined using bash functions called ",(0,i.kt)("inlineCode",{parentName:"p"},"setter__QUESTION_SHORT_KEY()"),". In the context of the setter function, variables named with the various quetion's short keys are avaible ... for example the user-specified date for question ",(0,i.kt)("inlineCode",{parentName:"p"},"[main.main.theme]")," is available as ",(0,i.kt)("inlineCode",{parentName:"p"},"$theme"),"."),(0,i.kt)("p",null,"When doing non-trivial operations to set a value, you may want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ynh_print_info")," to inform the admin about what's going on."),(0,i.kt)("p",null,'[details summary="',(0,i.kt)("i",null,"Basic example : Set the system timezone"),'" class="helper-card-subtitle text-muted"]'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config_panel.toml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[main.main.timezone]\nask = "Timezone"\ntype = "string"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scripts/config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'set__timezone() {\n    echo "$timezone" > /etc/timezone\n    ynh_print_info "The timezone has been changed to $timezone"\n}\n')),(0,i.kt)("p",null,"[/details]"),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"You will often need to validate data answered by the user before to save it somewhere."),(0,i.kt)("p",null,"Validation can be made with regex through ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern")," argument"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"        pattern.regexp = '^.+@.+$'\n        pattern.error = 'An email is required for this field'\n")),(0,i.kt)("p",null,"You can also restrict several types with a choices list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'        choices.foo = "Foo (some explanation)"\n        choices.bar = "Bar (moar explanation)"\n        choices.loremipsum = "Lorem Ipsum Dolor Sit Amet"\n')),(0,i.kt)("p",null,"Some other type specific argument exist like\n| type | validation arguments |\n| -----  | --------------------------- |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"accept")," |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," ",(0,i.kt)("inlineCode",{parentName:"p"},"no")," |"),(0,i.kt)("p",null,"Finally, if you need specific or multi variable validation, you can use custom validators function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"validate__login_user() {\n    if [[ \"${#login_user}\" -lt 4 ]]; then echo 'User login is too short, should be at least 4 chars'; fi\n}\n")),(0,i.kt)("h2",{id:"other-actions-than-read-validate-and-save"},"Other actions than read, validate and save"),(0,i.kt)("h3",{id:"restart-a-service-at-the-end"},"Restart a service at the end"),(0,i.kt)("p",null,"You can use the services key to specify which service need to be reloaded or restarted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"services = [ 'nginx', '__APP__' ]\n")),(0,i.kt)("p",null,"This argument can be set on a single question, to a section, or to an entire panel."),(0,i.kt)("h3",{id:"overwrite-config-panel-mechanism"},"Overwrite config panel mechanism"),(0,i.kt)("p",null,"All main configuration helpers are overwritable, example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ynh_app_config_apply() {\n\n    # Stop vpn client\n    touch /tmp/.ynh-vpnclient-stopped\n    systemctl stop ynh-vpnclient\n\n    _ynh_app_config_apply\n\n    # Start vpn client\n    systemctl start ynh-vpnclient\n    rm -f /tmp/.ynh-vpnclient-stopped\n\n}\n")),(0,i.kt)("p",null,"List of main configuration helpers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ynh_app_config_get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ynh_app_config_show")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ynh_app_config_validate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ynh_app_config_apply")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ynh_app_config_run"))),(0,i.kt)("p",null,"More info on this can be found by reading ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/vpnclient_ynh/blob/master/scripts/config"},"vpnclient_ynh config script")))}d.isMDXComponent=!0}}]);