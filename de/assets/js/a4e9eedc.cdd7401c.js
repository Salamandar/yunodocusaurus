"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"RSS-Bridge",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_rss-bridge"}},o=void 0,s={unversionedId:"applications/docs/app_rss-bridge",id:"applications/docs/app_rss-bridge",title:"RSS-Bridge",description:"Installer RSS-Bridge with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_rss-bridge.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_rss-bridge",permalink:"/yunodocusaurus/de/docs/applications/docs/app_rss-bridge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_rss-bridge.md",tags:[],version:"current",frontMatter:{title:"RSS-Bridge",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_rss-bridge"}},sidebar:"tutorialSidebar",previous:{title:"Roundcube",permalink:"/yunodocusaurus/de/docs/applications/docs/app_roundcube"},next:{title:"Seafile",permalink:"/yunodocusaurus/de/docs/applications/docs/app_seafile"}},l={},p=[{value:"Supported sites/pages (main)",id:"supported-sitespages-main",level:4},{value:"Output format",id:"output-format",level:4},{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Enabling/Disabling bridges",id:"enablingdisabling-bridges",level:4},{value:"Useful links",id:"useful-links",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=rss-bridge"},(0,n.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer RSS-Bridge with YunoHost"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/rss-bridge"},(0,n.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/rss-bridge.svg",alt:"Integration level"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"RSS-Bridge")," is a PHP project capable of generating RSS and Atom feeds for websites that don't have one. It can be used on webservers or as a stand-alone application in CLI mode."),(0,n.kt)("p",null,"Important: RSS-Bridge is not a feed reader or feed aggregator, but a tool to generate feeds that are consumed by feed readers and feed aggregators. Find a list of feed aggregators on Wikipedia."),(0,n.kt)("h4",{id:"supported-sitespages-main"},"Supported sites/pages (main)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FlickrExplore")," : ",(0,n.kt)("a",{parentName:"li",href:"http://www.flickr.com/explore"},"Latest interesting images")," from Flickr"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GoogleSearch")," : Most recent results from Google Search"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GooglePlus")," : Most recent posts of user timeline"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Twitter")," : Return keyword/hashtag search or user timeline"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Identi.ca")," : Identica user timeline (Should be compatible with other Pump.io instances)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"YouTube")," : YouTube user channel, playlist or search"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Cryptome")," : Returns the most recent documents from ",(0,n.kt)("a",{parentName:"li",href:"http://cryptome.org/"},"Cryptome.org")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DansTonChat"),": Most recent quotes from ",(0,n.kt)("a",{parentName:"li",href:"http://danstonchat.com/"},"danstonchat.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DuckDuckGo"),": Most recent results from ",(0,n.kt)("a",{parentName:"li",href:"https://duckduckgo.com/"},"DuckDuckGo.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instagram"),": Most recent photos from an Instagram user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OpenClassrooms"),": Lastest tutorials from ",(0,n.kt)("a",{parentName:"li",href:"http://fr.openclassrooms.com/"},"fr.openclassrooms.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Pinterest"),": Most recent photos from user or search"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ScmbBridge"),": Newest stories from ",(0,n.kt)("a",{parentName:"li",href:"http://secouchermoinsbete.fr/"},"secouchermoinsbete.fr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Wikipedia"),": highlighted articles from ",(0,n.kt)("a",{parentName:"li",href:"https://wikipedia.org/"},"Wikipedia")," in English, German, French or Esperanto"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Bandcamp")," : Returns last release from ",(0,n.kt)("a",{parentName:"li",href:"https://bandcamp.com/"},"bandcamp")," for a tag"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ThePirateBay")," : Returns the newest indexed torrents from ",(0,n.kt)("a",{parentName:"li",href:"https://thepiratebay.se/"},"The Pirate Bay")," with keywords"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Facebook")," : Returns the latest posts on a page or profile on ",(0,n.kt)("a",{parentName:"li",href:"https://facebook.com/"},"Facebook"))),(0,n.kt)("p",null,"Plus ",(0,n.kt)("a",{parentName:"p",href:"bridges/"},"many other bridges")," to enable, thanks to the community"),(0,n.kt)("h4",{id:"output-format"},"Output format"),(0,n.kt)("p",null,"Output format can take several forms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Atom")," : ATOM Feed, for use in RSS/Feed readers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Mrss")," : MRSS Feed, for use in RSS/Feed readers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Json")," : Json, for consumption by other applications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Html")," : Simple html page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Plaintext")," : raw text (php object, as returned by print_r)")),(0,n.kt)("h3",{id:"screenshots"},"Screenshots"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/rss-bridge_ynh/blob/master/doc/screenshots/screenshot_rss-bridge_welcome.png",alt:"Screenshots of RSS-Bridge"})),(0,n.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("h4",{id:"enablingdisabling-bridges"},"Enabling/Disabling bridges"),(0,n.kt)("p",null,"By default, the script creates ",(0,n.kt)("inlineCode",{parentName:"p"},"whitelist.txt")," and adds the main bridges (see above). you can edit it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"to enable extra bridges (one bridge per line)"),(0,n.kt)("li",{parentName:"ul"},"to disable main bridges (remove the line)"),(0,n.kt)("li",{parentName:"ul"},"to enable all bridges (just one wildcard ",(0,n.kt)("inlineCode",{parentName:"li"},"*")," as file content)")),(0,n.kt)("p",null,"As a matter  of simplicity, this YunoHost package enables every bridge by default."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Website: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/RSS-Bridge/rss-bridge"},"github.com/RSS-Bridge/rss-bridge")),(0,n.kt)("li",{parentName:"ul"},"Demonstration: ",(0,n.kt)("a",{parentName:"li",href:"https://wtf.roflcopter.fr/rss-bridge/"},"Demo")),(0,n.kt)("li",{parentName:"ul"},"Application software repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/rss-bridge_ynh"},"github.com - YunoHost-Apps/rss-bridge")),(0,n.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/rss-bridge_ynh/issues"},"github.com - YunoHost-Apps/rss-bridge/issues"))))}c.isMDXComponent=!0}}]);