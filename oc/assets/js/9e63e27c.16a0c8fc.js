"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),y=n,m=c["".concat(i,".").concat(y)]||c[y]||p[y]||l;return r?o.createElement(m,a(a({ref:t},d),{},{components:r})):o.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<l;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},67749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>k,frontMatter:()=>l,metadata:()=>s,styleDanger:()=>y,styleGood:()=>c,styleMeh:()=>p,styleNone:()=>d,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const l={sidebar_position:1},a="Choose your selfhosting method and providers",s={unversionedId:"administer/how_to_host_yourself",id:"administer/how_to_host_yourself",title:"Choose your selfhosting method and providers",description:"You can host yourself at home (on a small computer), or on a remote server. Each solution has their pros and cons:",source:"@site/docs/02.administer/05.how_to_host_yourself.md",sourceDirName:"02.administer",slug:"/administer/how_to_host_yourself",permalink:"/yunodocusaurus/oc/docs/administer/how_to_host_yourself",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02.administer/05.how_to_host_yourself.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Administration guide",permalink:"/yunodocusaurus/oc/docs/administer/"},next:{title:"Finding your server's local IP",permalink:"/yunodocusaurus/oc/docs/administer/install/finding_the_local_ip"}},i={},u=[{value:"At home, for instance on an ARM board or an old computer",id:"at-home-for-instance-on-an-arm-board-or-an-old-computer",level:2},{value:"At home, behind a VPN",id:"at-home-behind-a-vpn",level:2},{value:"On a remote server (VPS or dedicated server)",id:"on-a-remote-server-vps-or-dedicated-server",level:2},{value:"Summary",id:"summary",level:2}],d={textAlign:"center"},c={textAlign:"center",backgroundColor:"#335723"},p={textAlign:"center",backgroundColor:"#845804"},y={textAlign:"center",backgroundColor:"#712C2C"},m={toc:u,styleNone:d},h="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"choose-your-selfhosting-method-and-providers"},"Choose your selfhosting method and providers"),(0,n.kt)("p",null,"You can host yourself at home (on a small computer), or on a remote server. Each solution has their pros and cons:"),(0,n.kt)("h2",{id:"at-home-for-instance-on-an-arm-board-or-an-old-computer"},"At home, for instance on an ARM board or an old computer"),(0,n.kt)("p",null,"You can host yourself at home with an ARM board or a re-purposed regular computer, connected to your home router/box."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pros"),"  : you will have physical control of the machine and only need to buy the hardware;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cons"),"  : you will have to ",(0,n.kt)("a",{parentName:"li",href:"./network-setup/isp_box_config"},"manually configure your internet box")," and ",(0,n.kt)("a",{parentName:"li",href:"./providers/isps"},"might be limited by your ISP"),".")),(0,n.kt)("h2",{id:"at-home-behind-a-vpn"},"At home, behind a VPN"),(0,n.kt)("p",null,'A VPN is an encrypted tunnel between two machines. In practice, it makes it "as if" you were directly, locally, connected to your server machine, but actually from somewhere else on the Internet. This allows you to still host yourself at home, while bypassing possible limitations of your ISP. See also ',(0,n.kt)("a",{parentName:"p",href:"https://internetcu.be/"},"the Internet Cube project")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.ffdn.org/"},"the FFDN"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pros")," : you will have physical control of the machine, and the VPN hides your traffic from your ISP and allows you to bypass its limitations;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cons")," : you will have to pay a monthly subscription for the VPN.")),(0,n.kt)("h2",{id:"on-a-remote-server-vps-or-dedicated-server"},"On a remote server (VPS or dedicated server)"),(0,n.kt)("p",null,"You can rent a virtual private server or a dedicated machine from ",(0,n.kt)("a",{parentName:"p",href:"https://db.ffdn.org/"},"associative")," or ",(0,n.kt)("a",{parentName:"p",href:"./providers/servers"},"commercial"),' "Cloud" providers.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pros")," : your server and its internet connectivity will be fast;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cons")," : you will have to pay a monthly subscription and won't have physical control of your server.")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null),(0,n.kt)("th",{style:d},"At home",(0,n.kt)("br",null),(0,n.kt)("small",null,"(e.g. ARM board, old computer)")),(0,n.kt)("th",{style:d},"At home",(0,n.kt)("br",null),"behind a VPN"),(0,n.kt)("th",{style:d},"On a remote server",(0,n.kt)("br",null),"(VPS or dedicated)"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"Hardware cost"),(0,n.kt)("td",{style:p,colspan:"2"},"About 50\u20ac",(0,n.kt)("br",null),(0,n.kt)("small",null,"(e.g. a Raspberry Pi)")),(0,n.kt)("td",{style:c},"None")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"Monthly cost"),(0,n.kt)("td",{style:c},"Negligible",(0,n.kt)("br",null),(0,n.kt)("small",null,"(electricity)")),(0,n.kt)("td",{style:p},"Around 5\u20ac",(0,n.kt)("br",null),(0,n.kt)("small",null,"(VPN)")),(0,n.kt)("td",{style:p},"Starting at ~3\u20ac",(0,n.kt)("br",null),(0,n.kt)("small",null,"(VPS)"))),(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"Physical controlof the machine"),(0,n.kt)("td",{style:c},"Yes"),(0,n.kt)("td",{style:c},"Yes"),(0,n.kt)("td",{style:y},"No")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"Manual port routing required"),(0,n.kt)("td",{style:p},"Yes"),(0,n.kt)("td",{style:c},"No"),(0,n.kt)("td",{style:c},"No")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"Possible ISP limitations"),(0,n.kt)("td",{style:y},"Yes",(0,n.kt)("br",null),(0,n.kt)("small",null,"(see ",(0,n.kt)("a",{href:"./providers/isps"},"here"),")")),(0,n.kt)("td",{style:c},"Bypassed by VPN"),(0,n.kt)("td",{style:c},"Typically no")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"CPU"),(0,n.kt)("td",{style:p,colspan:"2"},"Typically ~1 GHz"),(0,n.kt)("td",{style:c},"~2 GHz",(0,n.kt)("br",null),(0,n.kt)("small",null,"(Digital Ocean droplet)"))),(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"RAM"),(0,n.kt)("td",{style:p,colspan:"2"},"Typically 500 Mb or 1 Gb"),(0,n.kt)("td",{style:p},"Related to server cost")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:d},"Internet connectivity"),(0,n.kt)("td",{style:p,colspan:"2"},"Depends on home connectivity"),(0,n.kt)("td",{style:c},"Typically pretty good")))))}k.isMDXComponent=!0}}]);