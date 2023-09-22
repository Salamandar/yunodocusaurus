"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),l=n(72957),i=n(16550),u=n(75238),s=n(33609),c=n(92560);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,o]),tabValues:o}}var h=n(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},67216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(73992),l=n(18679);const i={title:"Finding your server's local IP"},u=void 0,s={unversionedId:"administer/install/finding_the_local_ip",id:"administer/install/finding_the_local_ip",title:"Finding your server's local IP",description:"On an installation at home, your server should typically be accessible using the yunohost.local domain.",source:"@site/docs/02.administer/10.install/10.finding_the_local_ip.md",sourceDirName:"02.administer/10.install",slug:"/administer/install/finding_the_local_ip",permalink:"/yunodocusaurus/ar/docs/administer/install/finding_the_local_ip",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/10.install/10.finding_the_local_ip.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Finding your server's local IP"},sidebar:"tutorialSidebar",previous:{title:"Choose your selfhosting method and providers",permalink:"/yunodocusaurus/ar/docs/administer/how_to_host_yourself"},next:{title:"Configure port-forwarding",permalink:"/yunodocusaurus/ar/docs/administer/install/isp_box_config"}},c={},d=[{value:"What is a local IP ?",id:"what-is-a-local-ip-",level:2},{value:"How to find it ?",id:"how-to-find-it-",level:2},{value:"I still can&#39;t find my local IP",id:"i-still-cant-find-my-local-ip",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On an installation at home, your server should typically be accessible using the ",(0,a.kt)("a",{parentName:"p",href:"http://yunohost.local"},"yunohost.local")," domain.\nIf for any reason this does not work, you may need to find the ",(0,a.kt)("em",{parentName:"p"},"local")," IP of your server."),(0,a.kt)("h2",{id:"what-is-a-local-ip-"},"What is a local IP ?"),(0,a.kt)("p",null,"The local IP is the address used to refer to your server inside the local network (typically your home) where multiple devices\nare connected to a router (your internet box). The local IP typically looks like ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.x.y")," (or sometimes ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.x.y")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"172.16.x.y"),")"),(0,a.kt)("h2",{id:"how-to-find-it-"},"How to find it ?"),(0,a.kt)("p",null,"Any of these tricks should allow you to find the local IP of your server:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"angryip",label:"With AngryIP (Recommended)",default:!0,mdxType:"TabItem"},"You can use the [AngryIP](https://angryip.org/download/) software to achieve that. You just need to scan these local ip ranges in this order until you find the active IP corresponding to your server:",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.0")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.255")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.0")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.255")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"192.168.2.0")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.255.255")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"10.0.0.0")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"10.0.255.255")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"172.16.0.0")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"172.31.255.255"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You can order by ping like on this screenshot to easily see effectively-used IP."),(0,a.kt)("li",{parentName:"ul"},"Your server should typically be displayed as listening on port 80 and 443"),(0,a.kt)("li",{parentName:"ul"},"In case of doubt, just type ",(0,a.kt)("a",{parentName:"li",href:"https://192.168.x.y"},"https://192.168.x.y")," in your browser to check if it's a YunoHost server or not."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77473).Z,width:"608",height:"497"}))),(0,a.kt)(l.Z,{value:"router",label:"With your internet router / box",mdxType:"TabItem"},"Connect to your internet box / router interface to list the machines connected."),(0,a.kt)(l.Z,{value:"arp-scan",label:"With arp-scan",mdxType:"TabItem"},(0,a.kt)("p",null,"If you're using Linux, you can open a terminal and use ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo arp-scan --local")," to list the IP on your local network (this may also work in Windows);"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"arp-scan")," command displays a confusing number of devices, you can check which ones are open to SSH with ",(0,a.kt)("inlineCode",{parentName:"p"},"nmap -p 22 192.168.1.0/24")," to sort them out (adapt the IP range to your local network)")),(0,a.kt)(l.Z,{value:"direct",label:"With a direct access on the server",mdxType:"TabItem"},(0,a.kt)("p",null,"Plug a screen on your server, log in and type ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname --all-ip-address"),"."),(0,a.kt)("p",null,"The default credentials (before post-installation!) to log in are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"login: root"),(0,a.kt)("li",{parentName:"ul"},"password: yunohost")),(0,a.kt)("p",null,"(If you are using a raw Armbian image instead of the pre-installed YunoHost image, the credentials are root / 1234)"))),(0,a.kt)("h2",{id:"i-still-cant-find-my-local-ip"},"I still can't find my local IP"),(0,a.kt)("p",null,"If you are unable to find your server using any of the previous tricks, maybe your server did not boot correctly:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure that your server is properly plugged in"),(0,a.kt)("li",{parentName:"ul"},"If you're using an SD card, make sure the connector is not too dusty"),(0,a.kt)("li",{parentName:"ul"},"Plug a screen on your server and try to reboot to check that it's properly booting"),(0,a.kt)("li",{parentName:"ul"},"Make sure that your ethernet cable is working and properly plugged in")))}f.isMDXComponent=!0},77473:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/angryip-eb5c8ad1a5caa7fed6831a2fa3700b83.png"}}]);