"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5474],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>h});var i=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,i,n=function(t,e){if(null==t)return{};var o,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)o=a[i],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)o=a[i],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=i.createContext({}),u=function(t){var e=i.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},p=function(t){var e=u(t.components);return i.createElement(l.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(o),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return o?i.createElement(h,r(r({ref:e},p),{},{components:o})):i.createElement(h,r({ref:e},p))}));function h(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,r=new Array(a);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:n,r[1]=s;for(var u=2;u<a;u++)r[u]=o[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},81337:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=o(87462),n=(o(67294),o(3905));const a={title:"Domoticz",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_domoticz"}},r=void 0,s={unversionedId:"applications/docs/app_domoticz",id:"applications/docs/app_domoticz",title:"Domoticz",description:"Installer Domoticz with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_domoticz.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_domoticz",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_domoticz",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_domoticz.md",tags:[],version:"current",frontMatter:{title:"Domoticz",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_domoticz"}},sidebar:"tutorialSidebar",previous:{title:"Dolibarr",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_dolibarr"},next:{title:"Dotclear 2",permalink:"/yunodocusaurus/fr/docs/applications/docs/app_dotclear2"}},l={},u=[{value:"Disclaimers/important information",id:"disclaimersimportant-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Broker Mosquitto",id:"broker-mosquitto",level:4},{value:"Adding in Domoticz",id:"adding-in-domoticz",level:5},{value:"Publish/Subscribe",id:"publishsubscribe",level:5},{value:"Mosquitto_pub et mosquitto_sub",id:"mosquitto_pub-et-mosquitto_sub",level:5},{value:"Upgrade from version without Mosquitto",id:"upgrade-from-version-without-mosquitto",level:5},{value:"Configuration",id:"configuration-1",level:3},{value:"Access and API",id:"access-and-api",level:4},{value:"Limitations",id:"limitations",level:3},{value:"Useful links",id:"useful-links",level:2}],p={toc:u},d="wrapper";function c(t){let{components:e,...o}=t;return(0,n.kt)(d,(0,i.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=domoticz"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Domoticz with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/domoticz"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/domoticz.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Domoticz")," is a very light weight open sources home automation system that lets you monitor and configure miscellaneous devices."),(0,n.kt)("h3",{id:"disclaimersimportant-information"},"Disclaimers/important information"),(0,n.kt)("p",null,"Domoticz is a Home Automation system design to control various devices and receive input from various sensors. For example this system can be used with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Light switches\nDoor sensors\nDoorbells\nSecurity devices\nWeather sensors like: UV/Rain/Wind Meters\nTemperature Sensors\nPulse Meters\nVoltage/AD Meters and more\n")),(0,n.kt)("p",null,"Shipped version: Always the last stable one. The last compiled version is retrieved from this directory during install. Once installed, updates from the uptream app are managed from within the app. YunoHost upgrade script will only upgrade the YunoHost package."),(0,n.kt)("p",null,"The MQTT broker Mosquitto is integrated into the package. It requires its own domain or subdomain. It's an optional setting: during install if you set the same domaine as your main app domain, it won't be installed."),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("h4",{id:"broker-mosquitto"},"Broker Mosquitto"),(0,n.kt)("p",null,"During installation, a MQTT broker, Mosquitto, is installed at the same time as Domoticz. The installed version is the one from the official project repo and not from Debian ones. This broker requires a dedicated domain or subdomain to work (ex : mqtt.your.domain.tld): creating this domain prior installation is a prerequisite."),(0,n.kt)("h5",{id:"adding-in-domoticz"},"Adding in Domoticz"),(0,n.kt)("p",null,'To use Mosquitto, you need to customize the communication between Domoticz and the broker by following the Domoticz documentation, part Add hardware "MQTT Client Gateway". User and password are automatically generated during installation, you may retrieve them with'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo yunohost app setting domoticz mqtt_user\nsudo yunohost app setting domoticz mqtt_pwd\n")),(0,n.kt)("h5",{id:"publishsubscribe"},"Publish/Subscribe"),(0,n.kt)("p",null,"By default, Mosquitto will listen on two ports:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1883 on localhost using mqtt protocol\n8883 using websocket protocol. NGINX redirect external port 443 to this internal port.\n")),(0,n.kt)("p",null,"Hence, To publish/subscribe on a topic from the outside, you have to use a software supporting WebSocket protocol (ex: paho-mqtt Python library)."),(0,n.kt)("h5",{id:"mosquitto_pub-et-mosquitto_sub"},"Mosquitto_pub et mosquitto_sub"),(0,n.kt)("p",null,"These two tools do not support WebSocket protocol, only direct MQTT: base settings will not allow communication from an outside device. If you're using them directly from your server, this kind of syntax should work:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'mosquitto_pub -u *user* -P *password* -h mqtt.your.domain.tld -p 1883 -t \'domoticz/in\' -m \'{ "idx" : 1, "nvalue" : 0, "svalue" : "25.0" }\'\n')),(0,n.kt)("p",null,"In the same way:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mosquitto_sub -u *user* -P *password* -h mqtt.your.domain.tld -p 1883 -t 'domoticz/out'\n")),(0,n.kt)("p",null,"If you wish to open direct MQTT protocol from an outside device, you'll need to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"open port 1883 on Yunohost firewall (Attention, security risk)\nAllows IP addresses in mosquitto configuration for this listener\nSet the TLS setting in mosquitto configuration by giving access to crt.pem and key.pem from your MQTT domain by setting respective certfile et keyfile variables. This is mandatory to ensure a secure connection.\n")),(0,n.kt)("h5",{id:"upgrade-from-version-without-mosquitto"},"Upgrade from version without Mosquitto"),(0,n.kt)("p",null,"If you have package ynh3 or below, Mosquitto is not installed by default. If you have chosen to not set a domain during initial installation also. So, if you need to activate mosquitto in retrospect, do following actions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Create a domain or a subdomain (for example : 'mqtt.your.domain.tld')\nConnect to your server in command line\nType following command: `yunohost app setting domoticz mqtt_domain -v mqtt.your.domain.tld`\nUpgrade domoticz to last package. If you're already on the last package version, use the following command: `yunohost app upgrade domoticz --force`\n")),(0,n.kt)("h3",{id:"configuration-1"},"Configuration"),(0,n.kt)("p",null,"Sensors, language..."),(0,n.kt)("p",null,"Main configuration of the app take place inside the app itself."),(0,n.kt)("h4",{id:"access-and-api"},"Access and API"),(0,n.kt)("p",null,"By default, access for the JSON API is allowed on following path ",(0,n.kt)("inlineCode",{parentName:"p"},"/yourdomain.tld/api_/domoticzpath"),". So if you access domoticz via ",(0,n.kt)("inlineCode",{parentName:"p"},"https://mydomainname.tld/domoticz"),", use the following webpath for the api: ",(0,n.kt)("inlineCode",{parentName:"p"},"/mydomainname.tld/api_/domoticz/json.htm?yourapicommand")),(0,n.kt)("p",null,"By default, only sensor updates and switch toogle are authorized. To authorized a new command, you have (for now) to manually update the NGINX config file:"),(0,n.kt)("p",null,"sudo nano ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/yourdomain.tld.d/domoticz.conf")),(0,n.kt)("p",null,"Then edit the following block by adding the regex of the command you want to allow:"),(0,n.kt)("p",null,"  #set the list of authorized json command here in regex format\n#you may retrieve the command from ",(0,n.kt)("a",{parentName:"p",href:"https://www.domoticz.com/wiki/Domoticz_API/JSON_URL's"},"https://www.domoticz.com/wiki/Domoticz_API/JSON_URL's"),"\n#By default, sensors updates and toggle switch are authorized"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'if ( $args ~* type=command&param=udevice&idx=[0-9]*&nvalue=[0-9]*&svalue=.*$|type=command&param=switchlight&idx=[0-9]*&switchcmd=Toggle$) {\n  set $api "1";\n  }\n')),(0,n.kt)("p",null,"For example, to add the JSON command to retrieve the status of a device (",(0,n.kt)("inlineCode",{parentName:"p"},"/json.htm?type=devices&rid=IDX"),"),modify the line as this:"),(0,n.kt)("p",null,"  #set the list of authorized json command here in regex format\n#you may retrieve the command from ",(0,n.kt)("a",{parentName:"p",href:"https://www.domoticz.com/wiki/Domoticz_API/JSON_URL's"},"https://www.domoticz.com/wiki/Domoticz_API/JSON_URL's"),"\n#By default, sensors updates and toggle switch are authorized"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'if ( $args ~* type=command&param=udevice&idx=[0-9]*&nvalue=[0-9]*&svalue=.*$|type=command&param=switchlight&idx=[0-9]*&switchcmd=Toggle$|type=devices&rid=[0-9]* ) {\n  set $api "1";\n  }\n')),(0,n.kt)("p",null,"All IPv4 addresses within the local network (192.168.0.0/24) and all IPv6 addresses are authorized as API. As far as I know, there is no way to filter for IPv6 address on local network: You may remove the authorization by removing or commenting this line in ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/yourdomain.tld.d/domoticz.conf"),":"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"allow ::/1;")),(0,n.kt)("p",null,"This will authorized only IPv4 within local network to access your Domoticz API. You may add individual IPv6 address in the same way."),(0,n.kt)("h3",{id:"limitations"},"Limitations"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"No user management nor LDAP integration This function is not planned to be implemented into the app, hence it's not planned into the package neither.\nBackup cannot be restored on a different machine type (arm, x86...) as compiled sources are different\n")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://domoticz.eu/site/"},"domoticz.eu (en)")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/domoticz_ynh"},"github.com - YunoHost-Apps/domoticz")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/domoticz_ynh/issues"},"github.com - YunoHost-Apps/domoticz/issues"))))}c.isMDXComponent=!0}}]);